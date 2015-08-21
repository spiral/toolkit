<?php
/**
 * Spiral Framework.
 *
 * @license   MIT
 * @author    Anton Titov (Wolfy-J)
 * @copyright ©2009-2015
 */

namespace Spiral\Toolkit\Generators;

use Spiral\Files\FilesInterface;
use Spiral\Tokenizer\Exceptions\TokenizerException;
use Spiral\Toolkit\Exceptions\ToolkitException;
use Spiral\Views\ViewManager;

/**
 * Generated blank view with defined blocks and parent layout extending.
 */
class BlankViewGenerator
{
    /**
     * @var string
     */
    private $namespace = '';

    /**
     * @var string
     */
    private $name = '';

    /**
     * @var string
     */
    private $extension = '';

    /**
     * View content lines.
     *
     * @var array
     */
    protected $content = [];

    /**
     * @var ViewManager
     */
    protected $views = null;

    /**
     * @var FilesInterface
     */
    protected $files = null;

    /**
     * @param ViewManager    $views
     * @param FilesInterface $files
     * @param string         $namespace
     * @param string         $name
     * @param string         $extension
     */
    public function __construct(
        ViewManager $views,
        FilesInterface $files,
        $namespace,
        $name,
        $extension = 'php'
    ) {
        $this->views = $views;
        $this->files = $files;

        $this->namespace = $namespace;
        $this->name = $name;
        $this->extension = $extension;
    }

    /**
     * @return string
     */
    public function getNamespace()
    {
        return $this->namespace;
    }

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @return string
     */
    public function getExtension()
    {
        return $this->extension;
    }

    /**
     * Check if view is unique.
     *
     * @return bool
     * @throws TokenizerException
     */
    public function isUnique()
    {
        return !$this->files->exists($this->getFilename());
    }

    /**
     * Target view filename.
     *
     * @return string
     * @throws TokenizerException
     */
    public function getFilename()
    {
        if (empty($namespace = $this->views->getNamespaces()[$this->namespace])) {
            throw new ToolkitException("Undefined view namespace '{$this->namespace}'.");
        }

        reset($namespace);
        $directory = current($namespace);


        return $this->files->normalizePath(
            $directory . FilesInterface::SEPARATOR . $this->name . '.' . $this->extension
        );
    }

    /**
     * Parent view layout.
     *
     * @param string $layout
     */
    public function setLayout($layout)
    {
        $this->addLines(["<extends:{$layout}/>"]);
    }

    /**
     * Create view block.
     *
     * @param string $block
     */
    public function createBlock($block)
    {
        $this->addLines([
            "",
            "<block:{$block}>",
            "    <yield:{$block}/>",
            "</block:{$block}>"
        ]);
    }

    /**
     * Render view.
     *
     * @param int       $mode
     * @param bool|true $ensureLocation
     * @return bool
     */
    public function render($mode = FilesInterface::READONLY, $ensureLocation = true)
    {
        return $this->files->write(
            $this->getFilename(), join("\n", $this->content), $mode, $ensureLocation
        );
    }

    /**
     * Add content lines.
     *
     * @param array $lines
     */
    protected function addLines(array $lines)
    {
        $this->content = array_merge($this->content, $lines);
    }
}