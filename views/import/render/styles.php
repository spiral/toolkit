<?php
/**
 * @var \Spiral\Toolkit\ResourceManager $resourceManager
 */

foreach ($resourceManager->getResources('style') as $style)
{
    if ($style['type'] == \Spiral\Toolkit\ResourceManager::TYPE_INLINE)
    {
        echo $style['context'];
    }
    else
    {
        $link = '<link rel="stylesheet" href="' . $style['context'] . '"';

        if ($style['media'])
        {
            $link .= ' media="' . $style['media'] . '"';
        }

        echo $link . '/>';
    }
}
?>