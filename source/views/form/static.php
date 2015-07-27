<extends:element/>

<block:body>
    <div class="item-form ${wrapper-class}" node:attributes>
        <?php #compiled
        //Receiving label content as evaluator variable
        $label = fetchVariable('${label}');
        if (!empty($label))
        {
            ?>
            <block:input-label>
                <span class="item-label ${label-class}">${label}</span>
            </block:input-label>
            <?php #compiled
        }
        ?>
        <block:input-body>
            <p class="item-static ${value-class}">${value}${context}</p>
        </block:input-body>
    </div>
</block:body>