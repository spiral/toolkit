<extends:toolkit:form.field/>

<block:element>
  <input
    inputID:consume
    id="${id}"
    data-input="true"
    readonly="true"
    class="form-control-plaintext@if(injected('error')) is-invalid@endif@if(injected('success')) is-valid@endif"
    type="text"
    name="${name}"
    value="${value}${context}"
  >
</block:element>
