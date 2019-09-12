<?php #compile
ob_start();
$this->runtimeVariable('sorter', '${sorter}');
?>
<block:cell.head>
    <th <?php if (!empty($sorter) && $sorter != "''") { ?> data-sorter="${sorter}"<?php } ?> >${label}${title}${head}</th>
</block:cell.head>
<?php #compile
$__gridHeaders__[] = ob_get_clean();
ob_start();
?>
<td node:attributes>
    <block:cell.body>${value}${context}</block:cell.body>
</td>
<?php #compile
$__gridColumns__[] = ob_get_clean();
?>
