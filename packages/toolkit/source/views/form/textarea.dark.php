<extends path="form/field" />

<block:element>
  <textarea
    id="${id}"
    data-input="true"
    class="form-control@if(inject('error', null)) is-invalid@endif@if(inject('success', null)) is-valid@endif"
    name="${name}"
    placeholder="${placeholder}"
    @if(inject('disabled', null))disabled@endif
  >
    ${value}${context}
  </textarea>
</block:element>
