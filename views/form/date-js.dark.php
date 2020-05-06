<extends:toolkit:form.field />

<block:element>
  @if(injected('default-styles'))
  <stack:push name="styles" unique-id="date-js-css">
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
  </stack:push>
  @endif
  <stack:push name="scripts" unique-id="date-js">
     <script type="text/javascript" src="/toolkit/plugin_date.js"></script>
  </stack:push>
  <div class="js-sf-date input-group"
       data-enable-time="${enable-time}"
       data-no-calendar="${no-calendar}"
       data-format="${format}"
       data-display-format="${display-format}"
  >
      <input
        id="${id}"
        data-input="true"
        class="bg-white form-control@if(inject('error')) is-invalid@endif@if(inject('success')) is-valid@endif"
        type="date"
        name="${name}"
        value="${value}${context}"
        @if(injected('disabled'))disabled@endif
      >
  </div>
</block:element>
