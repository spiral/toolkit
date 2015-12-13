<extends:spiral:grid.cell/>

<block:cell.body>
    <?php #compile
    $this->evaluatorVariable('__cellBody__', '${value}${context}');
    echo '<?= number_format(' . $__cellBody__ . ') ?>';
    ?>
</block:cell.body>