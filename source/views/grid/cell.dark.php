<?php #compile
$this->evaluatorVariable('__gridHeaders__[]', '${label}${title}${head}');
ob_start();
?>
    <td node:attributes>
        <block:cell.body>${value}${context}</block:cell.body>
    </td>
<?php #compile
$__gridColumns__[] = ob_get_clean();
?>