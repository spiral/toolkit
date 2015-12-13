<extends:spiral:element/>

<block:body>
    <?php #compile
    //We need value set as php variable __values__
    $this->runtimeVariable('__checked__', '${value}');
    ?>
    <?php
    $__checked__ = !empty($__checked__) ? 'checked' : '';
    ?>
    <div class="item-form-switch ${wrapper-class}">
        <label class="item-label-switch">
            <input type="hidden" name="${name}" value="${no|0}"/>
            <input type="checkbox" name="${name}" value="${yes|1}" class="switch-checkbox" <?= $__checked__ ?> node:attributes="exclude:context,value"/>
            <span class="switch-inner"></span>
            <span class="switch-switch"></span>
        </label>
        <span class="switch-label">${label}</span>
    </div>
</block:body>