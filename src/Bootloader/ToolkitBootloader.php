<?php

declare(strict_types=1);

namespace Spiral\Toolkit\Bootloader;

use Spiral\Boot\Bootloader\Bootloader;
use Spiral\Stempler\Bootloader\StemplerBootloader;
use Spiral\Stempler\Builder;
use Spiral\Toolkit\Visitor\GenerateIDs;
use Spiral\Views\Bootloader\ViewsBootloader;

/**
 * Enables toolkit view namespace and additional directives.
 */
final class ToolkitBootloader extends Bootloader
{
    public function init(ViewsBootloader $views, StemplerBootloader $stempler): void
    {
        $views->addDirectory('toolkit', dirname(__DIR__, 2) . '/views/');

        // automatically generate unique input ids
        $stempler->addVisitor(GenerateIDs::class, Builder::STAGE_COMPILE);
    }
}
