<?php
$__cacheKey__ = !empty('${key}') ? '${key}' : md5(__FILE__ . '.' . __LINE__);

/**
 * @var \Spiral\Cache\StoreInterface $__cacheStore__
 */
$__cacheStore__ = spiral(\Spiral\Cache\StoreInterface::class);
if ($__cacheStore__->has($__cacheKey__)) {
    echo $__cacheStore__->get($__cacheKey__);
} else {
    ob_start(); ?>${context}<?php echo $__cached__ = ob_get_clean();

    $__cacheStore__->set($__cacheKey__, $__cached__, (int)'${lifetime|60}');
}
?>