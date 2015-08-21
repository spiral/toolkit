<?php #compile
/**
 * @var \Spiral\Pagination\PaginatorInterface|\Spiral\Pagination\PaginableInterface $__paginator__
 */

//Let's create php variable to represent paginator
createVariable('__paginator__', '${paginator}${source}${list}');

//TODO: export options
?>
<?php
if ($__paginator__ instanceof \Spiral\Pagination\PaginableInterface) {
    if ($__paginator__->isPaginated()) {
        $__paginator__ = $__paginator__->getPaginator();
    } else {
        //Paginable but not paginated
        $__paginator__ = null;
    }
}

//Ok, now let's paginate
if (!empty($__paginator__) && $__paginator__->isRequired()) {
    ?>
    <div class="paginator">
        <!--TODO: to be done.-->
    </div>
    <?php
}
?>