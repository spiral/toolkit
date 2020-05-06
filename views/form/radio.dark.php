<extends:toolkit:form.field-checkbox type="radio"/>

<block:element>
  <input
    inputID:consume
    id="${id}"
    class="@if(injected('is-native'))form-check-input@else custom-control-input@endif @if(injected('error')) is-invalid@endif @if(inject('success')) is-valid@endif"
    type="radio"
    name="${name}"
    value="${value}"
    @if(injected('checked'))checked@endif
    @if(injected('disabled'))disabled@endif
  >
</block:element>
