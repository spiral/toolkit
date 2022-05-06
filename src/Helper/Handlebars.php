<?php

declare(strict_types=1);

namespace Spiral\Toolkit\Helper;

class Handlebars
{
    public static function convert(?string $template): ?string
    {
        if ($template === null) {
            return null;
        }

        // todo: use proper implementation
        return \str_replace(['{{{{', '}}}}'], ['{{', '}}'], \str_replace(['{', '}'], ['{{', '}}'], $template));
    }
}
