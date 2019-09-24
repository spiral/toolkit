<extends path="form/field" />

<block:element>
  <input
    id="${id}"
    data-input="true"
    class="form-control@if(inject('error', null)) is-invalid@endif@if(inject('success', null)) is-valid@endif"
    type="${type|text}"
    name="${name}"
    placeholder="${placeholder}"
    value="${value}${context}"
    @if(inject('disabled', null))disabled@endif
  >
</block:element>
