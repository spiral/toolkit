<asset:script href="/resources/scripts/bundle.js"/>

<?php #compiled
static $globalID;
$formID = '${id}' ?: 'form-' . ( ++ $globalID );
?>
<form action="${action}" id="<?php #compiled
echo $formID
?>"
      class="<?php #compiled
      echo ( ${ajax | true} ? 'js-spiral-form' : '' ) . ( '${class}' ? ' ${class}' : '' )
      ?>"
      method="${method|post}" role="form" enctype="multipart/form-data" accept-charset="UTF-8" node:attributes>

    <?php #compiled
    ob_start();
    ?>${labels.class}<?php #compiled
    $labelsClass = ob_get_clean();

    ob_start();
    ?>${controls.class}<?php #compiled
    $controlsClass = ob_get_clean();
    ?>
    <block:context/>
    <?php #compiled
    $labelsClass   = '';
    $controlsClass = '';
    ?>
</form>