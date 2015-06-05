<?php
/**
 * Spiral Framework.
 *
 * @license   MIT
 * @author    Anton Titov (Wolfy-J)
 * @copyright ©2009-2015
 */
namespace Spiral\Toolkit;

use Spiral\Components\Files\FileManager;
use Spiral\Components\Http\HttpDispatcher;
use Spiral\Components\View\LayeredCompiler;
use Spiral\Components\View\ProcessorInterface;
use Spiral\Components\View\ViewManager;
use Spiral\Core\Component;

class ResourceManager extends Component implements ProcessorInterface
{
    /**
     * Context will be imported.
     */
    const TYPE_IMPORT = 'import';

    /**
     * Import context will be inserted as it was provided.s
     */
    const TYPE_INLINE = 'inline';

    /**
     * ViewManager component.
     *
     * @var ViewManager
     */
    protected $viewManager = null;

    /**
     * FileManager.
     *
     * @var FileManager
     */
    protected $file = null;

    /**
     * HttpDispatcher.
     *
     * @var HttpDispatcher
     */
    protected $http = null;

    /**
     * Processor options.
     *
     * @var array
     */
    protected $options = array(
        'placeholders'  => array(
            'styles'  => "<!--[STYLES]-->",
            'scripts' => "<!--[SCRIPTS]-->"
        ),
        'timeSignature' => true
    );

    /**
     * Registered resources (scripts, styles and inline code blocks).
     *
     * @var array
     */
    protected static $resources = array();

    /**
     * New processors instance with options specified in view config.
     *
     * @param ViewManager     $viewManager
     * @param LayeredCompiler $compiler Compiler instance.
     * @param array           $options
     * @param FileManager     $file
     * @param HttpDispatcher  $http
     */
    public function __construct(
        ViewManager $viewManager,
        LayeredCompiler $compiler,
        array $options,
        FileManager $file = null,
        HttpDispatcher $http = null
    )
    {
        $this->viewManager = $viewManager;
        $this->file = $file;
        $this->http = $http;

        $this->options = $options + $this->options;
    }

    /**
     * Register new resource to be added. Make sure you have only one rendering block at page.
     *
     * @param string $type
     * @param mixed  $resource
     */
    public static function addResource($type, array $resource)
    {
        if (isset(self::$resources[$type]))
        {
            foreach (self::$resources[$type] as $exists)
            {
                if ($exists['context'] == $resource['context'])
                {
                    //Duplicate
                    return;
                }
            }
        }

        self::$resources[$type][] = $resource;
    }

    /**
     * Get resource filename.
     *
     * @param string $path
     * @return string
     */
    protected function getFilename($path)
    {
        if (!$this->file->exists(directory('root') . '/' . $path))
        {
            return $path;
        }

        if ($this->options['timeSignature'])
        {
            $path .= '?' . base_convert(
                    $this->file->timeUpdated(directory('root') . '/' . $path),
                    10,
                    32
                );
        }

        return $this->http->getBasePath() . $path;
    }

    /**
     * Create includes for all requested styles.
     *
     * @return string
     */
    protected function compileStyles()
    {
        return $this->viewManager->render('spiral:import/render/styles', array(
            'resourceManager' => $this
        ));
    }

    /**
     * Get all requested style imports.
     *
     * @param string $container
     * @return array
     */
    public function getResources($container)
    {
        if (!isset(self::$resources[$container]))
        {
            return array();
        }

        $result = array();

        foreach (self::$resources[$container] as $resource)
        {
            if ($resource['type'] == self::TYPE_IMPORT)
            {
                $resource['context'] = $this->getFilename($resource['context']);
            }

            $result[] = $resource;
        }

        return $result;
    }

    /**
     * Create includes for all requested scripts and inline script blocks.
     *
     * @return string
     */
    protected function compileScripts()
    {
        return $this->viewManager->render('spiral:import/render/scripts', array(
            'resourceManager' => $this
        ));
    }

    /**
     * Performs view code pre-processing. LayeredCompiler will provide view source into processors,
     * processors can perform any source manipulations using this code expect final rendering.
     *
     * @param string $source    View source (code).
     * @param string $namespace View namespace.
     * @param string $view      View name.
     * @param string $input     Input filename (usually real view file).
     * @param string $output    Output filename (usually view cache, target file may not exists).
     * @return string
     */
    public function processSource($source, $namespace, $view, $input = '', $output = '')
    {
        if (strpos($source, $this->options['placeholders']['styles']))
        {
            $source = str_replace($this->options['placeholders']['styles'], $this->compileStyles(), $source);
        }

        if (strpos($source, $this->options['placeholders']['scripts']))
        {
            $source = str_replace($this->options['placeholders']['scripts'], $this->compileScripts(), $source);
        }

        return $source;
    }
}