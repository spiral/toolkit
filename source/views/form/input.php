<extends:element input-id="<?= $inputID #compiled  ?>"/>

<block:body>
    <div class="form-group">
        <?php #compiled
        static $globalID;
        $inputID = "input-" . (++$globalID);

        $noID = fetchVariable('${no-id}');
        if ($noID === 'false' || !empty($disableIDs))
        {
            $inputID = '';
        }

        //Receiving label content as evaluator variable
        $label = fetchVariable('${label}');
        if (!empty($label))
        {
            ?>
            <block:input-label>
                <label class="control-label" for="${input-id}">
                    ${label}
                </label>
            </block:input-label>
            <?php #compiled
        }
        ?>
        <div class="controls">
            <block:input-body>
                <input id="${input-id}" type="${type|text}" name="${name}" value="${value}" class="form-control ${class}"/>
            </block:input-body>
        </div>
    </div>
</block:body>