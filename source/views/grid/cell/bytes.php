<extends:self:grid.cell/>

<block:cell.body>
    <?php #compile
    $__cellBody__ = fetchVariable('${value}${context}');
    echo '<?= Spiral\Support\StringHelper::bytes(' . $__cellBody__ . ') ?>';
    ?>
</block:cell.body>