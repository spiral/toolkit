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
    }

    /**
     * {@inheritdoc}
     */
    public function publish(PublisherInterface $publisher, DirectoriesInterface $directories)
    {
        $publisher->publishDirectory(
            __DIR__ . '/../resources/fonts/',
            $directories->directory('public') . 'resources/fonts',
            PublisherInterface::OVERWRITE
        );

        $publisher->publishDirectory(
            __DIR__ . '/../resources/scripts/',
            $directories->directory('public') . 'resources/scripts',
            PublisherInterface::OVERWRITE
        );

        $publisher->publishDirectory(
            __DIR__ . '/../resources/styles/',
            $directories->directory('public') . 'resources/styles',
            PublisherInterface::OVERWRITE
        );
    }
}