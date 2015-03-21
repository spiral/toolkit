<?php
/**
 * Spiral Framework.
 *
 * @license   MIT
 * @author    Anton Titov (Wolfy-J)
 * @copyright ©2009-2015
 */
namespace Spiral\Toolkit;

use Spiral\Components\View\ProcessorInterface;
use Spiral\Components\View\ViewManager;

class ResourceProcessor implements ProcessorInterface
{
    /**
     * New processors instance with options specified in view config.
     *
     * @param array       $options
     * @param ViewManager $view View component instance (if presented).
     */
    public function __construct(array $options, ViewManager $view = null)
    {
        //Resource manager config should be stored separately
    }

    /**
     * Performs view code pre-processing. View component will provide view source into processors,
     * processors can perform any source manipulations using this code expect final rendering.
     *
     * @param string $source    View source (code).
     * @param string $view      View name.
     * @param string $namespace View namespace.
     * @return string
     */
    public function processSource($source, $view, $namespace)
    {
        //Nothing for now
        return $source;
    }
}