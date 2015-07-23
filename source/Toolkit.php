<?php
/**
 * Spiral Framework.
 *
 * @license   MIT
 * @author    Anton Titov (Wolfy-J)
 * @copyright ©2009-2015
 */
namespace Spiral\Toolkit;

use Spiral\Components\Modules\Definition;
use Spiral\Components\Modules\Installer;
use Spiral\Components\Modules\Module;
use Spiral\Components\View\ConfigWriter\ViewConfig;

class Toolkit extends Module
{
    /**
     * Module installer responsible for operations like copying resources, registering configs,
     * view namespaces and declaring that bootstrap() call is required.
     * This method is static as it should be called without constructing module object.
     *
     * @param Definition $definition Module definition fetched or generated of composer file.
     * @return Installer
     */
    public static function getInstaller(Definition $definition)
    {
        $installer = parent::getInstaller($definition);

        /**
         * Toolkit needs one view namespace and custom view processor.
         */
        $viewConfig = ViewConfig::make([
            'baseDirectory' => $definition->getLocation()
        ]);

        $viewConfig->registerNamespace('spiral', 'views');
        $viewConfig->registerProcessor('resourceManager', 'Spiral\Toolkit\ResourceManager');

        //Registering view namespace
        $installer->registerConfig($viewConfig);

        //All files from public directory should be mounted to root
        $installer->registerDirectory("/", "../public");

        return $installer;
    }
}