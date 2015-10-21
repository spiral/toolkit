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

ob_start();
?>${context}<?php #compile
$columns = ob_get_clean();

?>
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
<spiral:paginator source="<?= $__source__ ?>"/>