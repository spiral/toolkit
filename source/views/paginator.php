<?php #compile
/**
 * @var \Spiral\Pagination\PaginatorInterface|\Spiral\Pagination\PaginableInterface $__paginator__
 */

//Let's create php variable to represent paginator
createVariable('__paginator__', '${paginator}${source}${list}');

//How many pages to show before and after current page
createVariable('__pageLimit__', '${pageLimit|2}');
?>
<?php

if (empty($__pageLimit__)) {
    $__pageLimit__ = 2;
}

if ($__paginator__ instanceof \Spiral\Pagination\PaginableInterface) {
    if ($__paginator__->isPaginated()) {
        $__paginator__ = $__paginator__->getPaginator();
    } else {
        //Paginable but not paginated
        $__paginator__ = null;
    }
}

//Ok, now let's paginate
if (
    !empty($__paginator__)
    && $__paginator__ instanceof \Spiral\Pagination\Paginator
    && $__paginator__->isRequired()
) {
    ?>
    <div class="paginator">
        <ul class="pagination ${class}" node:attributes>
            <?php
            if (!empty($pageNumber = $__paginator__->previousPage())) {
                $pageURL = $__paginator__->createUri($pageNumber);
                echo "<li class=\"prev\"><a href=\"{$pageURL}\">[[Prev]]</a></li>";
            }

            //Resolving page limit to be shown
            $currentPage = $__paginator__->currentPage();

            //First page to be shown
            $firstPage = max($currentPage - $__pageLimit__, 1);

            //Last page to be shown
            $lastPage = min($currentPage + $__pageLimit__, $__paginator__->countPages());

            if ($firstPage != 1) {
                //Just a placeholder
                echo "<li class=\"\"><a>...</a></li>";
            }

            for ($number = $firstPage; $number <= $lastPage; $number++) {
                $pageURL = $__paginator__->createUri($number);

                if ($number == $currentPage) {
                    echo "<li class=\"active\"><a href=\"{$pageURL}\">{$number}</a></li>";
                } else {
                    echo "<li class=\"\"><a href=\"{$pageURL}\">{$number}</a></li>";
                }
            }

            if ($lastPage != $__paginator__->countPages()) {
                echo "<li class=\"\"><a>...</a></li>";
            }

            if (!empty($pageNumber = $__paginator__->nextPage())) {
                $pageURL = $__paginator__->createUri($pageNumber);
                echo "<li class=\"next\"><a href=\"{$pageURL}\">[[Next]]</a></li>";
            }

            ?>
        </ul>
    </div>
    <?php
}
?>