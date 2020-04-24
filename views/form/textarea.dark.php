<extends:toolkit:form.field />

<block:element>
  <textarea
    id="${id}"
    data-input="true"
    class="form-control@if(inject('error')) is-invalid@endif@if(inject('success')) is-valid@endif"
    name="${name}"
    placeholder="${placeholder}"
    @if(inject('disabled'))disabled@endif
  >
    ${value}${context}
  </textarea>
</block:element>
