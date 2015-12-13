<?php #compile
ob_start(); ?>${context}<?php #compile
$__context__ = ob_get_clean();

if ($__context__) {
    echo \Spiral\Toolkit\AssetManager::wrapAsset(
        \Spiral\Toolkit\AssetManager::ASSET_INLINE,
        ['context' => $__context__]
    );
}
?>