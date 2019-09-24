<extends path="form/field" />

<block:element>
  <input
    id="${id}"
    data-input="true"
    readonly="true"
    class="form-control-plaintext@if(inject('error', null)) is-invalid@endif@if(inject('success', null)) is-valid@endif"
    type="text"
    name="${name}"
    value="${value}${context}"
  >
</block:element>
