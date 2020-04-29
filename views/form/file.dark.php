<extends:toolkit:form.field />

<block:element>
  <input
    id="${id}"
    data-input="true"
    class="form-control-file@if(inject('error')) is-invalid@endif@if(inject('success')) is-valid@endif"
    data-file="true"
    type="file"
    name="${name}"
    value="${value}${context}"
    @if(inject('multiple'))multiple@endif
    @if(inject('disabled'))disabled@endif
  >
</block:element>
