<extends:toolkit:form.field/>

<block:element>
  <input
    inputID:consume
    id="${id}"
    data-input="true"
    class="form-control-file@if(injected('error')) is-invalid@endif@if(injected('success')) is-valid@endif"
    data-file="true"
    type="file"
    name="${name}"
    value="${value}${context}"
    @if(injected('multiple'))multiple@endif
    @if(injected('disabled'))disabled@endif
  >
</block:element>
