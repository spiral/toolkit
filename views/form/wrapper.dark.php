<form
  action="${action|#no-action}"
  @if(injected('id')) id="${id}" @endif
  @if(injected('data-id')) data-id="${data-id}" @endif
  method="${method|post}"
  enctype="multipart/form-data"
  accept-charset="UTF-8"
  class="js-sf-form ${class}"
  data-lock-type="${lock-type|default}"
  data-before-submit="${before-submit}"
  data-after-submit="${after-submit}"
  data-callback="${callback}"
  @if(injected('immediate')) data-immediate="${immediate}" @endif
>
  <div class="form-content form-row">
    ${context}
  </div>
</form>
