<extends path="form/field" />

<block:element>
  <input
    id="${id}"
    data-input="true"
    readonly="true"
    class="form-control-plaintext@if(inject('error')) is-invalid@endif@if(inject('success')) is-valid@endif"
    type="text"
    name="${name}"
    value="${value}${context}"
  >
</block:element>
