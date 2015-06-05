<?php
/**
 * Spiral Framework.
 *
 * @license   MIT
 * @author    Anton Titov (Wolfy-J)
 * @copyright ©2009-2015
 */
namespace Spiral\Toolkit;

use Spiral\Components\View\LayeredCompiler;
use Spiral\Components\View\ProcessorInterface;
use Spiral\Components\View\ViewManager;

class ResourceManager implements ProcessorInterface
{
    /**
     * Processor options.
     *
     * @var array
     */
    protected $options = array();

    /**
     * New processors instance with options specified in view config.
     *
     * @param ViewManager     $viewManager
     * @param LayeredCompiler $compiler Compiler instance.
     * @param array           $options
     */
    public function __construct(ViewManager $viewManager, LayeredCompiler $compiler, array $options)
    {
        $this->options = $options + $this->options;
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
        //Nothing to do for now
        return $source;
    }
}