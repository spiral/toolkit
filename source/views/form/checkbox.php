<extends:element/>

<block:body>
    <label class="item-form item-form-checkbox ${wrapper-class}">
        <block:input-body>
            <input type="hidden" name="${name}" value="${default}"/>
            <input type="checkbox" name="${name}" node:attributes="exclude:context"/>
        </block:input-body>
        <block:input-label>
            <span class="item-label">${label}</span>
        </block:input-label>
    </label>
</block:body>