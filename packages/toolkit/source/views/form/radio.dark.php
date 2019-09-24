<extends path="form/field-checkbox" />

<block:element>
  <input
    id="${id}"
    data-input="true"
    class="form-check-input@if(inject('error', null)) is-invalid@endif @if(inject('success', null)) is-valid@endif"
    type="radio"
    name="${name}"
    value="${value}"
    @if(inject('checked', null))checked@endif
    @if(inject('disabled', null))disabled@endif
  >
</block:element>
