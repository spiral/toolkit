<extends path="form/field"/>

<block:element>
  <input
    id="${id}"
    data-input="true"
    class="form-control-file@if(inject('error', null)) is-invalid@endif@if(inject('success', null)) is-valid@endif"
    data-file="true"
    type="file"
    name="${name}"
    value="${value}${context}"
    @if(inject('multiple', null))multiple@endif
    @if(inject('disabled', null))disabled@endif
  >
</block:element>
