<extends:self:grid.cell/>

<block:cell.body>
    <?php #compile
    $__cellBody__ = fetchVariable('${value}${context}');
    echo '<?= ' . $__cellBody__ . ' ? \'[[Yes]]\' : \'[[No]]\' ?>';
    ?>
</block:cell.body>