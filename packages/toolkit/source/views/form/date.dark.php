<extends path="form/field" />

<block:element>
  <stack:push name="styles">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pikaday/css/pikaday.css" />
  </stack:push>

  <input
    id="${id}"
    data-input="true"
    class="form-control@if(inject('error', null)) is-invalid@endif@if(inject('success', null)) is-valid@endif sf-js-date"
    type="date"
    name="${name}"
    value="${value}${context}"
    @if(inject('disabled', null))disabled@endif
  >
</block:element>
