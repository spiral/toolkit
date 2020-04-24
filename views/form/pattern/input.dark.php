<div class="js-sf-pattern-input sf-pattern-input ${class}" data-name="${name}" data-value="${value}" data-field="true" @if(injected('autosubmit')) data-autosubmit="true" @endif>
    <input type="hidden" data-sf-custom-form-element-input name="${name}">
    ${context}
</div>