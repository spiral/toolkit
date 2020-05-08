<?php

/**
 * Spiral Framework.
 *
 * @license   MIT
 * @author    Anton Titov (Wolfy-J)
 */

declare(strict_types=1);

namespace Spiral\Toolkit\Helper;

class Handlebars
{
    /**
     * @param string|null $template
     * @return string|null
     */
    public static function convert(?string $template): ?string
    {
        if ($template === null) {
            return null;
        }

        // todo: use proper implementation
        return str_replace(['{{{{', '}}}}'], ['{{', '}}'], str_replace(['{', '}'], ['{{', '}}'], $template));
    }
}
