<extends:toolkit:form.field/>

<block:element>
  @if(injected('default-styles'))
  <stack:push name="styles" unique-id="date-js-css">
     <link rel="stylesheet" type="text/css" href="https://npmcdn.com/flatpickr/dist/themes/airbnb.css">
  </stack:push>
  @endif
  <div class="js-sf-date input-group"
       data-enable-time="${enable-time}"
       data-no-calendar="${no-calendar}"
       data-format="${format}"
       data-display-format="${display-format}"
  >
      <div class="input-group-prepend" data-toggle>
            <span class="form-control text-muted bg-white border-right-0">
                <i class="fas fa-calendar"></i>
            </span>
      </div>
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
      @if(injected('add-reset'))
          <div class="input-group-append" data-clear>
                <span class="form-control text-muted bg-white border-left-0">
                    <i class="fas fa-times"></i>
                </span>
          </div>
      @endif
  </div>
</block:element>
