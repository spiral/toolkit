<div class="form-group col-${col|12} ${group-class}" data-field="true" attr:aggregate="prefix:group-" --id-group>
    <label for="${id}" attr:aggregate="prefix:label-" --id-consume>${label}</label>

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
