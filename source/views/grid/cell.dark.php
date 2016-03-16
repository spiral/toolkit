<?php #compile
ob_start();
?>
    <block:cell.head>
        <th data-sorter="${sorter}">${label}${title}${head}</th>
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
