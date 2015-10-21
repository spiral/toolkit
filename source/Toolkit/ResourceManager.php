<?php
/**
 * Spiral Framework.
 *
 * @license   MIT
 * @author    Anton Titov (Wolfy-J)
 * @copyright ©2009-2015
 */
namespace Spiral\Toolkit;

use Spiral\Core\Component;
use Spiral\Core\Traits\SaturateTrait;
use Spiral\Files\FilesInterface;
use Spiral\Http\HttpDispatcher;
use Spiral\Views\Compiler;
use Spiral\Views\ProcessorInterface;
use Spiral\Views\ViewManager;

class ResourceManager extends Component implements ProcessorInterface
{
    /**
     * Optional constructor arguments.
     */
    use SaturateTrait;

    /**
     * Context will be imported.
     */
    const TYPE_IMPORT = 'import';

    /**
     * Import context will be inserted as it was provided.s
     */
    const TYPE_INLINE = 'inline';

    /**
     * Registered resources (scripts, styles and inline code blocks). Property is static due
     * processor is recreated for every view file. Must find an alternative in the future.
     *
     * @var array
     */
    private static $resources = [];

    /**
     * @var array
     */
    protected $options = [
        'placeholders'  => [
            'styles'  => "<!--[STYLES]-->",
            'scripts' => "<!--[SCRIPTS]-->"
        ],
        'timeSignature' => true
    ];

    /**
     * @invisible
     * @var ViewManager
     */
    protected $views = null;

    /**
     * @invisible
     * @var FilesInterface
     */
    protected $files = null;

    /**
     * @invisible
     * @var HttpDispatcher
     */
    protected $http = null;

    /**
     * {@inheritdoc}
     */
    public function __construct(
        ViewManager $views,
        Compiler $compiler,
        array $options,
        FilesInterface $files = null,
        HttpDispatcher $http = null
    ) {
        $this->views = $views;
        $this->options = $options + $this->options;

        //We can use global container as fallback if no default values were provided
        $this->files = $this->saturate($files, FilesInterface::class);
        $this->http = $this->saturate($http, HttpDispatcher::class);
    }

    /**
     * {@inheritdoc}
     */
    public function process($source)
    {
        if (strpos($source, $this->options['placeholders']['styles'])) {
            $source = str_replace(
                $this->options['placeholders']['styles'], $this->compileStyles(), $source
            );

            //Flushing resources
            self::$resources['styles'] = [];
        }

        if (strpos($source, $this->options['placeholders']['scripts'])) {
            $source = str_replace(
                $this->options['placeholders']['scripts'], $this->compileScripts(), $source
            );

            //Flushing resources
            self::$resources['scripts'] = [];
        }

        return $source;
    }

    /**
     * Get all requested style imports.
     *
     * @param string $container
     * @return array
     */
    public function getResources($container)
    {
        if (!isset(self::$resources[$container])) {
            return [];
        }

        $result = [];

        foreach (self::$resources[$container] as $resource) {
            if ($resource['type'] == self::TYPE_IMPORT) {
                $resource['context'] = $this->getFilename($resource['context']);
            }

            $result[] = $resource;
        }

        return $result;
    }

    /**
     * Get resource filename.
     *
     * @param string $path
     * @return string
     */
    protected function getFilename($path)
    {
        if (!$this->files->exists(directory('public') . '/' . $path)) {
            return $path;
        }

        if ($this->options['timeSignature']) {
            $path .= '?' . base_convert(
                    $this->files->time(directory('public') . '/' . $path), 10, 32
                );
        }

        return $this->http->basePath() . $path;
    }

    /**
     * Create includes for all requested styles.
     *
     * @return string
     */
    protected function compileStyles()
    {
        return $this->views->render('spiral:resources/render/styles', [
            'resourceManager' => $this
        ]);
    }


    /**
     * Create includes for all requested scripts and inline script blocks.
     *
     * @return string
     */
    protected function compileScripts()
    {
        return $this->views->render('spiral:resources/render/scripts', [
            'resourceManager' => $this
        ]);
    }

    /**
     * Register new resource to be added. Make sure you have only one rendering block at page.
     *
     * @param string $type
     * @param mixed  $resource
     */
    public static function addResource($type, array $resource)
    {
        if (isset(self::$resources[$type])) {
            foreach (self::$resources[$type] as $exists) {
                if ($exists['context'] == $resource['context']) {
                    //Duplicate
                    return;
                }
            }
        }

        self::$resources[$type][] = $resource;
    }
}