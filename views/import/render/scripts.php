<?php
/**
 * @var \Spiral\Toolkit\ResourceManager $resourceManager
 */

foreach ($resourceManager->getResources('script') as $script)
{
    if ($script['type'] == \Spiral\Toolkit\ResourceManager::TYPE_INLINE)
    {
        echo $script['context'];
    }
    else
    {
        echo '<script type="text/javascript" src="' . $script['context'] . '"></script>';
    }
}
?>