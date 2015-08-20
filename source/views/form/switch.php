<extends:element/>

<block:body>
    <input type="hidden" name="${name}" value="${default}"/>
    <div class="item-form-switch ${wrapper-class}">
        <label class="item-label-switch">
            <input type="checkbox" name="switch" class="switch-checkbox" node:attributes="exclude:context"/>
            <span class="switch-inner"></span>
            <span class="switch-switch"></span>
        </label>
    </div>
</block:body>