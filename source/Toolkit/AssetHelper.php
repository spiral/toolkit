<?php
/**
 * Spiral Framework.
 *
 * @license   MIT
 * @author    Anton Titov (Wolfy-J)
 */

namespace Spiral\Toolkit;

class AssetHelper
{
    /**
     * Create filename query signature. Attention, this method work only for resources located in
     * public directory.
     *
     * @param string $filename
     * @param string $basePath Application base path prefix.
     *
     * @return string
     */
    public static function resolve(string $filename, string $basePath = ''): string
    {
        if (strpos($filename, '://')) {
            //Absolute path
            return $filename;
        }

        $localFilename = directory('public') . $filename;

        //Add query parameter to uniquely identify file version
        if (is_file($localFilename) && file_exists($localFilename)) {
            $filename .= '?' . hash('crc32', filemtime($localFilename));
        }

        return str_replace('//', '/', $basePath . $filename);
    }
}