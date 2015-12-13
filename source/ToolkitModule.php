<?php
/**
 * Spiral Framework.
 *
 * @license   MIT
 * @author    Anton Titov (Wolfy-J)
 */
namespace Spiral;

use Spiral\Core\DirectoriesInterface;
use Spiral\Modules\ModuleInterface;
use Spiral\Modules\PublisherInterface;
use Spiral\Modules\RegistratorInterface;

class ToolkitModule implements ModuleInterface
{
    /**
     * {@inheritdoc}
     */
    public function register(RegistratorInterface $registrator)
    {
        /**
         * Let's register new view namespace 'toolkit'.
         */
        $registrator->configure('views', 'namespaces.spiral', 'spiral/toolkit', [
            "directory('libraries') . 'spiral/toolkit/source/views/',",
        ]);

        /**
         * And mount of AssetManager.
         */
        $registrator->configure('views', 'dark.processors', 'spiral/toolkit', [
            '//Provides ability to automatically include js and css requested by widgets and tags',
            'Spiral\Toolkit\AssetManager::class,',
        ]);
    }

    /**
     * {@inheritdoc}
     */
    public function publish(PublisherInterface $publisher, DirectoriesInterface $directories)
    {
        /**
         * Publishing all module visual resources. We are going to overwrite existed files.
         */
        $publisher->publishDirectory(
            __DIR__ . '/../resources',                        //Profiler js, css and modules
            $directories->directory('public') . 'resources',  //Expected directory in webroot
            PublisherInterface::OVERWRITE                     //We can safely overwrite resources
        );
    }
}