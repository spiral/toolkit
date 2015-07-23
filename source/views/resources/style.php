<?php #compile
ob_start();
?>${href}${scr}${path}<?php #compile
$__path__ = ob_get_clean();

if (!empty($__path__))
{
    \Spiral\Toolkit\ResourceManager::addResource('style', [
        'type'    => \Spiral\Toolkit\ResourceManager::TYPE_IMPORT,
        'media'   => '${media}',
        'context' => trim($__path__, '/ ')
    ]);
}
?>