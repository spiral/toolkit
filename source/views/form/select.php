<extends:form.input/>

<block:input-body>
    <div class="form-group">
        <select name="${name}" class="item-select ${class}" node:attributes>
            <?php #compile
            //Receiving placeholder content as evaluator variable
            $placeholder = fetchVariable('${placeholder}${default}');
            if ($placeholder != "''") {
                ?>
                <option value="">${placeholder}${default}</option>
                <?php #compile
            }

            //We need value set as php variable __values__
            createVariable('__values__', '${values}');

            //Selected value
            createVariable('__selected__', '${value}${selected}');
            ?>
            <?php
            if (empty($__values__)) {
                $__values__ = [];
            }

            if (!is_array($__values__)) {
                throw new \Spiral\Core\Exceptions\RuntimeException(
                    "Select values must be supplied as associated array."
                );
            }

            foreach ($__values__ as $__name__ => $__value__) {
                if ($__value__ == $__selected__) {
                    ?><option value="<?= $__value__ ?>" selected><?= $__name__ ?></option><?php
                }else{
                    ?><option value="<?= $__value__ ?>"><?= $__name__ ?></option><?php
                }
            }
            ?>
        </select>
    </div>
</block:input-body>