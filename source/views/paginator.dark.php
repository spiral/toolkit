<?php #compile
/** @var object $_paginator_ */
$this->runtimeVariable('_paginator_', '${paginator}${source}${list}');

/** @var int $_pageLimit_ */
$this->runtimeVariable('_pageLimit_', '${pageLimit|2}');
?><?php
//This code will be executed on every render request
if ($_paginator_ instanceof \Spiral\Pagination\PaginatorAwareInterface) {
    $_paginator_ = $_paginator_->hasPaginator() ? $_paginator_->getPaginator(false) : null;
}

if (
    !empty($_paginator_)
    && $_paginator_ instanceof \Spiral\Pagination\PagedInterface
    && $_paginator_->isRequired()
) {
    /** @var \Spiral\Toolkit\PaginationHelper $route */
    $_helper_ = spiral(\Spiral\Toolkit\PaginationHelper::class);
    ?>
    <div class="paginator">
        <ul class="pagination ${class}" node:attributes="exclude:context">
            <?php
            if (!empty($_page_ = $_paginator_->previousPage())) {
                echo "<li class=\"prev\"><a href=\"{$_helper_->uri($_paginator_, $_page_)}\">[[Prev]]</a></li>";
            }

            //Page numbers
            $_current_ = $_paginator_->getPage();
            $_first_ = max(
                $_current_ - $_pageLimit_,
                1
            );
            $_last_ = min(
                $_current_ + $_pageLimit_,
                $_paginator_->countPages()
            );

            if ($_first_ != 1) {
                //Just a placeholder
                echo "<li class=\"\"><a>...</a></li>";
            }

            for ($_page_ = $_first_; $_page_ <= $_last_; $_page_++) {
                if ($_page_ == $_current_) {
                    echo "<li class=\"active\"><a href=\"{$_helper_->uri($_paginator_, $_page_)}\">{$_page_}</a></li>";
                } else {
                    echo "<li class=\"\"><a href=\"{$_helper_->uri($_paginator_, $_page_)}\">{$_page_}</a></li>";
                }
            }

            if ($_last_ != $_paginator_->countPages()) {
                echo "<li class=\"\"><a>...</a></li>";
            }

            if (!empty($_page_ = $_paginator_->nextPage())) {
                echo "<li class=\"next\"><a href=\"{$_helper_->uri($_paginator_, $_page_)}\">[[Next]]</a></li>";
            }
            ?>
        </ul>
    </div>
<?php } ?>