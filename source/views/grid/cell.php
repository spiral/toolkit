<?php #compile
$__gridHeaders__[] = fetchVariable('${label}${title}${head}');
ob_start();
?>
    <td node:attributes>
        <block:cell.body>${value}${context}</block:cell.body>
    </td>
<?php #compile
$__gridColumns__[] = ob_get_clean();
?>