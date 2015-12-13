<extends:spiral:form.input/>

<block:input-body>
    <div class="form-group">
        <select name="${name}" class="item-select ${class}" node:attributes>
            <?php #compile
            //Receiving placeholder content as evaluator variable
            $this->evaluatorVariable('placeholder', '${placeholder}${default}');
            if (!empty($placeholder) && $placeholder != "''") {
                ?>
                <option value="">${placeholder}${default}</option>
                <?php #compile
            }

            //We need value set as php variable __values__
            $this->runtimeVariable('__values__', '${values}');

            //Selected value
            $this->runtimeVariable('__selected__', '${value}${selected}');
            ?><?php
            if (empty($__values__)) {
                $__values__ = [];
            }

            if (!is_array($__values__)) {
                throw new \Spiral\Toolkit\Exceptions\ToolkitException(
                    "Select values must be supplied as associated array."
                );
            }

            foreach ($__values__ as $__value__ => $__label__) {
                if ($__value__ == $__selected__) {
                    echo "<option value=\"{$__value__}\" selected>{$__label__}</option>";
                } else {
                    echo "<option value=\"{$__value__}\">{$__label__}</option>";
                }
            }
            ?>
        </select>
    </div>
</block:input-body>