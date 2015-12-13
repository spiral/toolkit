<extends:spiral:element/>

<block:body>
    <label class="item-form item-form-radio ${wrapper-class}">
        <block:input-body>
            <input type="radio" name="${name}" node:attributes="exclude:context"/>
        </block:input-body>

        <?php #compiled
        //Receiving label content as evaluator variable
        $this->evaluatorVariable('label', '${label}');
        if (!empty($label) && $label != "''") {
            ?>
            <block:input-label>
                <span class="item-label">${label}</span>
            </block:input-label>
            <?php #compiled
        }
        ?>
    </label>
</block:body>