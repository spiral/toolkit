<extends:spiral:element/>

<block:resources>
</block:resources>

<block:body>
    <label class="item-form ${wrapper-class}" node:attributes="prefix:wrapper">
        <?php #compiled
        //Receiving label content as evaluator variable
        $this->evaluatorVariable('label', '${label}');
        if (!empty($label) && $label != "''") {
            ?>
            <block:input-label>
                <span class="${label-class} item-label" node:attributes="prefix:label">${label}</span>
            </block:input-label>
            <?php #compiled
        }
        ?>
        <block:input-body>
                <input type="text" name="${name}" data-value="${value}${context}" class="item-input sf-js-date ${class}" node:attributes/>
        </block:input-body>
    </label>
</block:body>
