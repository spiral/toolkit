<?php #compile
$this->evaluatorVariable('__gridHeaders__[]', '<th data-sorter="${sorter}">${label}${title}${head}</th>');
ob_start();
?>
    <td node:attributes>
        <block:cell.body>${value}${context}</block:cell.body>
    </td>
<?php #compile
$__gridColumns__[] = ob_get_clean();
?>
