<extends:spiral:grid.cell/>

<block:cell.body>
    <?php #compile
    $this->evaluatorVariable('__cellBody__', '${value}${context}');
    echo '<?= ' . $__cellBody__ . ' ? \'[[Yes]]\' : \'[[No]]\' ?>';
    ?>
</block:cell.body>