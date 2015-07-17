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

    /*todo show messages-placeholder only with the message itself (by javascript)*/
    if ( '${messagesPlaceholder|bottom}' == "top" ) {
        ?>
        <div class="form-group messages-placeholder">
            <div class="${placeholder.class}">
                <div class="alert js-message">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                    <strong></strong><span></span>
                </div>
            </div>
        </div>
        <?php #compiled
    }
    ?>
    <block:context/>
    <?php #compiled
    if ( '${messagesPlaceholder}' == "bottom" ) {
        ?>
        <div class="form-group messages-placeholder">
            <div class="${placeholder.class}">
                <div class="alert js-message">
                    <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                    <strong></strong><span></span>
                </div>
            </div>
        </div>
        <?php #compiled
    }
    $labelsClass   = '';
    $controlsClass = '';
    ?>
</form>