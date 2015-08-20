<?php
/**
 * Spiral Framework.
 *
 * @license   MIT
 * @author    Anton Titov (Wolfy-J)
 * @copyright ©2009-2015
 */
namespace Spiral\Toolkit;

use Spiral\Core\ContainerInterface;
use Spiral\Modules\DefinitionInterface;
use Spiral\Modules\Prototypes\Module;
use Spiral\Views\ConfigWriters\ViewConfig;

/**
 * Only installs toolkit resources and modifies required configs.
 */
class ToolkitModule extends Module
{
    /**
     * {@inheritdoc}
     */
    public static function getInstaller(
        ContainerInterface $container,
        DefinitionInterface $definition
    )
    {
        $installer = parent::getInstaller($container, $definition);

        /**
         * @var ViewConfig $viewConfig
         */
        $viewConfig = $container->get(ViewConfig::class, [
            'baseDirectory' => $definition->getLocation()
        ]);

        $viewConfig->registerNamespace('spiral', 'source/views');
        $viewConfig->registerProcessor(ResourceManager::class);

        //Registering view namespace
        $installer->registerConfig($viewConfig);

        //All files from public directory should be mounted to root
        $installer->publishDirectory("public");

        return $installer;
    }
}