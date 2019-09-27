<div inputID:define class="form-group col-${col|12} ${field-class}" data-field="true" attr:aggregate="prefix:field-">
    <label inputID:consume for="${id}" attr:aggregate="prefix:label-">${label}</label>

    <block:element/>

    @if(inject('error'))
        <div class="invalid-feedback" data-form-message>${error}</div>
    @endif

    @if(inject('success'))
        <div class="valid-feedback" data-form-message>${success}</div>
    @endif

    @if(inject('help') && !inject('error') && !inject('success'))
        <small class="form-text text-muted" data-form-hint>${help}</small>
    @endif
</div>