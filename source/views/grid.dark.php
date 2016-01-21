<extends:spiral:element/>

<block:body>
    <?php #compile
    //todo: need placeholder when no rows found

    /**
     * Our source.
     */
    $this->runtimeVariable('__source__', '${source}${list}${value}');

    /**
     * First of all we have to collect every defined cell element to built list of table headers
     * and elements.
     */

    $__gridHeaders__ = [];
    $__gridColumns__ = [];

    //Collecting headers and columns
    ob_start(); ?>${context}<?php ob_get_clean(); #compile

    ?>
    <block:table>
        <table class="table ${class}" node:attributes>
            <thead>
            <tr>
                <?php #compile
                foreach ($__gridHeaders__ as $header) {
                    echo "<th><?=$header?></th>";
                }
                ?>
            </tr>
            </thead>
            <tbody>
            <?php $__has__rows__ = false; ?>
            <?php #compile
            //todo: add support for tr attributes
            echo '<?php foreach ($__source__ as $${as|item}) { ?>';
            echo "<tr>\n";
            echo join("\n", $__gridColumns__);
            echo "</tr>\n";
            echo '<?php $__has__rows__ = true;} ?>';
            ?>
            <?php if (!$__has__rows__) { ?>
                <tr>
                    <td class="${empty-class}" colspan="<?= count($__gridHeaders__) #compile ?>">
                        ${empty|No results to be displayed}
                    </td>
                </tr>
            <?php } ?>
            </tbody>
        </table>
    </block:table>
    <block:paginator>
        <spiral:paginator source="<?= $__source__ ?>"/>
    </block:paginator>
</block:body>