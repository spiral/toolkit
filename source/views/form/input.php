<div class="form-group" style="${groupStyle}">
    <?php #compiled
    static $globalID;
    $inputID = "input-" . ( ++ $globalID );

    if ( ${noID | false} ) {
        $inputID = '';
    }

    ob_start();
    ?>${label}<?php #compiled
    if ( ob_get_clean() ) {
        ?>
        <label class="control-label <?php #compiled
        echo $labelsClass ? $labelsClass : '';
        ?>"
               for="<?php #compiled
               echo $inputID
               ?>">
            <?php #compiled
            echo ${required | false} ? '<strong title="${requiredMessage|This field is required.}">' : '' ?>
            ${label}
            <?php #compiled
            echo ${required | false} ? '</strong>' : ''
            ?>
        </label>
        <?php #compiled
    }
    ?>
    <div
        class="controls <?php #compiled
        echo $controlsClass ? $controlsClass : ''
        ?>">
        <block:beforeInput/>
        <input type="${type|text}"
               id="<?php #compiled
               echo $inputID
               ?>"
               name="${name}" value="${value}"
               class="form-control ${class}" node:attributes/>
        <block:afterInput/>
    </div>
</div>