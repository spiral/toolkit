<extends:spiral:element/>

<block:body>
    <?php #compile
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
        <table class="table ${class}">
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
            <?php #compile
            echo '<?php foreach ($__source__ as $${as|item}) { ?>';
            echo "<tr>\n";
            echo join("\n", $__gridColumns__);
            echo "</tr>\n";
            echo '<?php } ?>';
            ?>
            </tbody>
        </table>
    </block:table>
    <block:paginator>
        <spiral:paginator source="<?= $__source__ ?>"/>
    </block:paginator>
</block:body>