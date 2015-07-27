<extends:form.input/>

<block:input-body>
    <div class="form-group">
        <select name="${name}" class="item-select ${class}" node:attributes>
            <option value="">${placeholder}</option>
            <?
            foreach ($values as $value => $label) {
                $isSelected = $value == $selected || (is_array($selected) && in_array($value, $selected));
                ?>
                <option value="<?= $value ?>"<?= $isSelected ? ' selected="selected"' : '' ?>><?= $label ?></option>
                <?
            }
            ?>
        </select>
    </div>
</block:input-body>