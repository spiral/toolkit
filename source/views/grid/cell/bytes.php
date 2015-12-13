<extends:spiral:grid.cell/>

<block:cell.body>
    <?php #compile
    $this->evaluatorVariable('__cellBody__', '${value}${context}');
    echo '<?= Spiral\Support\Strings::bytes(' . $__cellBody__ . ') ?>';
    ?>
</block:cell.body>