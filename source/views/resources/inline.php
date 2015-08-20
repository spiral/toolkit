<?php #compile
ob_start(); ?>${context}<?php #compile
$__context__ = ob_get_clean();

if ($__context__)
{
    \Spiral\Toolkit\ResourceManager::addResource('${container|script}', [
        'type'    => \Spiral\Toolkit\ResourceManager::TYPE_INLINE,
        'context' => trim($__context__, '/ ')
    ]);
}
?>