<block:paginator>
    <?php

    //TODO: REWRITE

    //TODO: Fetch variable
    $_paginator_ = ${variable | $paginator};

    if ($_paginator_ instanceof \Spiral\Support\Pagination\PaginableInterface)
    {
        $_paginator_ = $_paginator_->getPaginator();
    }

    if ($_paginator_ instanceof \Spiral\Support\Pagination\Paginator && $_paginator_->isRequired())
    {
        ?>
        <ul class="${baseClass|pagination} ${class}" node:attributes>
            <?php
            if (($_page_ = $_paginator_->getPreviousPage()) != false)
            {
                echo '<li class="${previousClass}"><a href="' . $_paginator_->buildURL($_page_) . '">'
                    . '${previousLabel|&laquo;}'
                    . '</a></li>';
            }

            $_current_ = $_paginator_->getCurrentPage();
            $_pages_ = $_paginator_->renderPages(${interval | 2}, ${showLast | true});
            foreach ($_pages_ as $_page_ => $_url_)
            {
                if (empty($_url_))
                {

                    echo '<li class="${spaceClass|disabled}"><a>${labelEmpty|...}</a></li>';
                    continue;
                }

                if ($_page_ == $_current_)
                {
                    echo '<li class="${activeClass|active}"><a href="' . $_url_ . '">'
                        . $_page_
                        . '</a></li>';
                }
                else
                {
                    echo '<li><a href="' . $_url_ . '">' . $_page_ . '</a></li>';
                }
            }

            if (($_page_ = $_paginator_->getNextPage()) != false)
            {
                echo '<li class="${nextClass}"><a href="' . $_paginator_->buildURL($_page_) . '">'
                    . '${nextLabel|&raquo;}'
                    . '</a></li>';
            }
            ?>
        </ul>
    <?php
    }
    ?>
</block:paginator>