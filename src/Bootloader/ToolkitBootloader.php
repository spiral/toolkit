<?php
/**
 * Spiral Framework.
 *
 * @license   MIT
 * @author    Anton Titov (Wolfy-J)
 */
declare(strict_types=1);

namespace Spiral\Toolkit\Bootloader;

use Spiral\Boot\Bootloader\Bootloader;
use Spiral\Bootloader\Views\ViewsBootloader;
use Spiral\Stempler\Bootloader\StemplerBootloader;

/**
 * Enables toolkit view namespace and additional directives.
 */
final class ToolkitBootloader extends Bootloader
{
    public const DEPENDENCIES = [
        ViewsBootloader::class,
        StemplerBootloader::class
    ];

    /**
     * @param ViewsBootloader    $views
     * @param StemplerBootloader $stempler
     */
    public function boot(ViewsBootloader $views, StemplerBootloader $stempler)
    {
        $views->addDirectory('toolkit', dirname(__DIR__) . '/views/');
    }
}