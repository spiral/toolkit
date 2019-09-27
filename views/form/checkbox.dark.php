<div inputID:define class="form-group col-${col|12} ${field-class}" data-field="true" attr:aggregate="prefix:field-">
    <div class="@if(inject('is-native'))form-check@else custom-control custom-${type|checkbox}@endif">
        <input inputID:consume
               id="${id}"
               type="checkbox"
               class="@if(inject('is-native'))form-check-input@else custom-control-input@endif @if(inject('error')) is-invalid@endif @if(inject('success')) is-valid@endif ${class}"
               attr:aggregate="exclude:path,context"
        >

        <label inputID:consume for="${id}"
               class="@if(inject('is-native'))form-check-label@else custom-control-label@endif ${label-class}"
               attr:aggregate="prefix:label-"
        >${label}</label>

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
</div>
