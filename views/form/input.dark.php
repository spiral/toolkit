<extends:toolkit:form.field />

<block:element>
  <input
    id="${id}"
    data-input="true"
    class="form-control@if(inject('error')) is-invalid@endif@if(inject('success')) is-valid@endif"
    type="${type|text}"
    name="${name}"
    placeholder="${placeholder}"
    value="${value}${context}"
    @if(inject('disabled'))disabled@endif
  >
</block:element>
