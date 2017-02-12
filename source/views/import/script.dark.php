<?php #compile

ob_start();
?>${href}${scr}${path}<?php #compile

//Fetching user content
$__path__ = ob_get_clean();

if (!empty($__path__)) {
    //Echoing content to be fetched by asset manager
    echo \Spiral\Toolkit\AssetManager::wrapAsset(
        \Spiral\Toolkit\AssetManager::ASSET_SCRIPT,
        ['path' => $__path__]
    );
}
?>