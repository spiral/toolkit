<extends:base-element/>

<block:body>
    <div class="form-group">
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
            <label class="control-label"
                   for="<?php #compiled
                   echo $inputID
                   ?>">
                <?php #compiled
                echo ${required | false} ? '<strong title="${requiredMessage|[[This field is required.]]}">' : '' ?>
                ${label}
                <?php #compiled
                echo ${required | false} ? '</strong>' : ''
                ?>
            </label>
            <?php #compiled
        }
        ?>
        <div
            class="controls">
            <block:beforeInput/>
            <input type="${type|text}"

                   id="<?= $inputID #compiled ?>"
                   name="${name}" value="${value}"
                   class="form-control ${class}" node:attributes/>
            <block:afterInput/>
        </div>
    </div>
</block:body>