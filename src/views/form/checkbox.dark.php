<extends path="toolkit:form/field-checkbox" />

<block:element>
  <input
    id="${id}"
    class="@if(inject('is-native'))form-check-input@else custom-control-input@endif @if(inject('error')) is-invalid@endif @if(inject('success')) is-valid@endif"
    type="checkbox"
    name="${name}"
    value="${value}"
    @if(inject('checked'))checked@endif
    @if(inject('disabled'))disabled@endif
  >
</block:element>
