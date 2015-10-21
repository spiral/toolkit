<?php
/**
 * @var \Spiral\Cache\StoreInterface $__cacheStore__
 */
$__cacheStore__ = $this->container->get(\Spiral\Cache\CacheInterface::class)->store();

$__cacheKey__ = !empty('${key}') ? '${key}' : md5(__FILE__ . '.' . __LINE__);

if ($__cacheStore__->has($__cacheKey__)) {
    $__cached__ = $__cacheStore__->get($__cacheKey__);
} else {
    ob_start();
    ?>${context}<?php
    $__cacheStore__->set(
        $__cached__ = ob_get_clean(),
        $__cached__,
        (int)'${lifetime|60}'
    );
}

echo $__cached__;
?>