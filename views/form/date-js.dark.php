<extends:toolkit:form.field/>

<block:element>
  <stack:push name="styles" unique-id="date-js-css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pikaday/css/pikaday.css"/>
  </stack:push>
  <stack:push name="scripts" unique-id="date-js">
    <script type="text/javascript" src="/toolkit/plugin_date.js"></script>
  </stack:push>
  <input
    inputID:consume
    id="${id}"
    data-input="true"
    class="form-control@if(injected('error')) is-invalid@endif@if(injected('success')) is-valid@endif js-sf-date"
    type="date"
    name="${name}"
    value="${value}${context}"
    @if(injected('disabled'))disabled@endif
  >
</block:element>
