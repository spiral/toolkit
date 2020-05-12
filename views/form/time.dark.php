<extends:toolkit:form.field/>

<block:element>
  <div class="js-sf-date input-group"
       data-enable-time="true"
       @if(injected('time-24')) data-time-24="${time-24}" @endif
       @if(injected('force-confirm-button')) data-force-confirm-button="${force-confirm-button}" @endif
       data-no-calendar="true"
       data-format="${format|HH:mm:ssZZZ}"
       data-display-format="${display-format|HH:mm}"
  >
      <div class="input-group-prepend" data-toggle>
            <span class="form-control text-muted bg-white border-right-0" style="cursor: pointer">
                <i class="fas fa-clock"></i>
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
                <span class="form-control text-muted bg-white border-left-0" style="cursor: pointer">
                    <i class="fas fa-times"></i>
                </span>
          </div>
      @endif
  </div>
</block:element>
