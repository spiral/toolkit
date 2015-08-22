<extends:element/>

<block:body>
    <div class="item-form-switch ${wrapper-class}">
        <label class="item-label-switch">
            <input type="hidden" name="${name}" value="${default}"/>
            <input type="checkbox" name="switch" class="switch-checkbox" node:attributes="exclude:context"/>
            <span class="switch-inner"></span>
            <span class="switch-switch"></span>
        </label>
        <span class="switch-label">${label}</span>
    </div>
</block:body>