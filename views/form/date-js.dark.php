<extends:toolkit:form.field/>

<block:element>
  @if(injected('default-styles'))
  <stack:push name="styles" unique-id="date-js-css">
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
  </stack:push>
  @endif
  <div class="js-sf-date input-group"
       data-enable-time="${enable-time}"
       data-no-calendar="${no-calendar}"
       data-format="${format}"
       data-display-format="${display-format}"
  >
      <input
        inputID:consume
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
