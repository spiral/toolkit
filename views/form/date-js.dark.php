<extends:toolkit:form.field />

<block:element>
  <stack:push name="styles" unique-id="date-js-css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pikaday/css/pikaday.css" />
  </stack:push>
  <stack:push name="scripts" unique-id="date-js">
     <script type="text/javascript" src="/toolkit/plugin_date.js"></script>
  </stack:push>
  <input
    id="${id}"
    data-input="true"
    class="form-control@if(inject('error')) is-invalid@endif@if(inject('success')) is-valid@endif js-sf-date"
    type="date"
    name="${name}"
    value="${value}${context}"
    @if(inject('disabled'))disabled@endif
  >
</block:element>
