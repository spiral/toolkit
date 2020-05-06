<extends:toolkit:form.field/>

<block:element>
  <input
    inputID:consume
    id="${id}"
    data-input="true"
    class="form-control@if(injected('error')) is-invalid@endif@if(injected('success')) is-valid@endif"
    type="date"
    name="${name}"
    value="${value}${context}"
    @if(injected('disabled'))disabled@endif
  >
</block:element>
