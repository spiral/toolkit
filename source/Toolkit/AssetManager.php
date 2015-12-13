<?php
/**
 * ACE project.
 *
 * @author    Anton Titov (Wolfy-J)
 */
namespace Spiral\Toolkit;

use Spiral\Core\Component;
use Spiral\Core\DirectoriesInterface;
use Spiral\Files\FilesInterface;
use Spiral\Http\Configs\HttpConfig;
use Spiral\Support\Strings;
use Spiral\Views\ProcessorInterface;

/**
 * Provides ability to automatically connect js and css files based on request sent by some
 * widget.
 */
class AssetManager extends Component implements ProcessorInterface
{
    /**
     * Resource types.
     */
    const ASSET_STYLE  = 'style';
    const ASSET_SCRIPT = 'script';
    const ASSET_INLINE = 'inline';

    /**
     * List of unique wrappers registered by AssetManager.
     *
     * @var array
     */
    private static $wrappers = [];

    /**
     * @var array
     */
    private $placeholders = [
        'styles'  => '<!--[STYLES]-->',
        'scripts' => '<!--[SCRIPTS]-->'
    ];

    /**
     * @var HttpConfig
     */
    protected $httpConfig = null;

    /**
     * @var FilesInterface
     */
    protected $files = null;

    /**
     * @var DirectoriesInterface
     */
    protected $directories = null;

    /**
     * @param array                $placeholders
     * @param HttpConfig           $httpConfig Required for base path.
     * @param FilesInterface       $files
     * @param DirectoriesInterface $directories
     */
    public function __construct(
        array $placeholders = [],
        HttpConfig $httpConfig,
        FilesInterface $files,
        DirectoriesInterface $directories
    ) {
        $this->placeholders = $placeholders + $this->placeholders;

        $this->httpConfig = $httpConfig;

        $this->files = $files;
        $this->directories = $directories;
    }

    /**
     * {@inheritdoc}
     */
    public function process($source, $namespace, $view, $cachedFilename = null)
    {
        $styles = $scripts = [];
        foreach (self::fetchAssets($source) as $asset) {
            //Let's remove asset definition from source
            $source = str_replace($asset['definition'], '', $source);

            if ($asset['type'] == self::ASSET_STYLE) {
                $styles[] = $asset;
            } else {
                $scripts[] = $asset;
            }
        }

        //Now have to organize our assets by groups and inject them into source placeholders
        $source = str_replace(
            $this->placeholders['styles'],
            $this->generateStyles($styles),
            $source
        );

        $source = str_replace(
            $this->placeholders['scripts'],
            $this->generateScripts($scripts),
            $source
        );

        return $source;
    }

    /**
     * Wrap given string using unique boundary. AssetManager automatically collects such boundaries
     * and aggregates them into included assets.
     *
     * @param string $type
     * @param array  $data
     * @return string
     */
    public static function wrapAsset($type, array $data)
    {
        $wrapper = self::createWrapper();

        $data = json_encode($data);

        return "{$wrapper}{$type}:{$data}{$wrapper}";
    }

    /**
     * Create statements needed to include requested styles.
     *
     * @param array $styles
     * @return string
     */
    protected function generateStyles(array $styles)
    {
        $result = '';

        foreach ($styles as $style) {
            if ($style['type'] == self::ASSET_INLINE) {
                $result .= $style['context'];
                continue;
            }

            $media = '';
            if (!empty($style['media'])) {
                $media = "media=\"{$style['media']}\"";
            }

            $path = $this->resolveUri($style['path']);
            $result .= "<link rel=\"stylesheet\" href=\"{$path}\" {$media}/>";
        }

        return $result;
    }

    /**
     * Create statements needed to include or declare (inline js) requested js statements.
     *
     * @param array $scripts
     * @return string
     */
    protected function generateScripts(array $scripts)
    {
        $result = '';

        foreach ($scripts as $script) {
            if ($script['type'] == self::ASSET_INLINE) {
                $result .= $script['context'];
            } else {
                $path = $this->resolveUri($script['path']);
                $result .= "<script type=\"text/javascript\" src=\"{$path}\"></script>";
            }
        }

        return $result;
    }

    /**
     * Fetch all resources from a source. Generator.
     *
     * @param string $source
     * @return \Generator
     */
    protected static function fetchAssets($source)
    {
        foreach (self::$wrappers as $wrapper) {
            if (strpos($source, $wrapper) === false) {
                continue;
            }

            $wrapper = preg_quote($wrapper);
            if (!preg_match("#{$wrapper}(?P<type>[a-z]+):(?P<data>.*?){$wrapper}#", $source,
                $matches)
            ) {
                continue;
            }

            $asset = [
                'definition' => $matches[0],
                'type'       => $matches['type']
            ];

            //We found our asset declaration!
            yield ($asset + json_decode($matches['data'], true));
        }
    }

    /**
     * Resolve resource uri.
     *
     * @param string $uri
     * @return string
     */
    protected function resolveUri($uri)
    {
        if (!$this->isLocal($uri)) {
            //External or non resolved uri
            return $uri;
        }

        return $this->httpConfig->basePath() . ltrim($uri, '/') . '?' . $this->fileHash($uri);
    }

    /**
     * Check if resource is local.
     *
     * @param string $uri
     * @return bool
     */
    protected function isLocal($uri)
    {
        return $this->files->exists($this->directories->directory('public') . $uri);
    }

    /**
     * Get unique file hash to improve resources caching.
     *
     * @todo add ability to disable this option
     * @param string $uri
     * @return string
     */
    protected function fileHash($uri)
    {
        return base_convert(
            $this->files->time($this->directories->directory('public') . $uri), 10, 32
        );
    }

    /**
     * Unique wrapper.
     *
     * @return string
     */
    private static function createWrapper()
    {
        $wrapper = '(~' . Strings::random(64) . '~)';
        if (in_array($wrapper, self::$wrappers)) {
            return self::createWrapper();
        }

        return self::$wrappers[] = $wrapper;
    }
}