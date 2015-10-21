<extends:self:element/>

<block:body>
    <?php #compile
    /**
     * Our source.
     */
    createVariable('__source__', '${source}');

    /**
     * First of all we have to collect every defined cell element to built list of table headers
     * and elements.
     */

    $__gridHeaders__ = [];
    $__gridColumns__ = [];

    //Collecting headers and columns
    ob_start();
    ?>${context}<?php #compile
    $columns = ob_get_clean();

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
            echo '<tr>';
            echo join("\n", $__gridColumns__);
            echo '</tr>';
            echo '<?php } ?>';
            ?>
            </tbody>
        </table>
    </block:table>
    <block:paginator>
        <spiral:paginator source="<?= $__source__ ?>"/>
    </block:paginator>
</block:body>
