<extends:toolkit:form.field/>

<block:element>
  <textarea
    inputID:consume
    id="${id}"
    data-input="true"
    class="form-control@if(injected('error')) is-invalid@endif@if(injected('success')) is-valid@endif"
    name="${name}"
    placeholder="${placeholder}"
    @if(injected('disabled'))disabled@endif
  >${value}${context}</textarea>
</block:element>
