<form
  @if(inject('id')) id="${id}" @endif
  action="${action}"
  method="${method|post}"
  enctype="multipart/form-data"
  accept-charset="UTF-8"
  class="js-sf-form ${class}"
  data-lock-type="${lock-type|default}"
  data-before-submit="${before-submit}"
  data-after-submit="${after-submit}"
  data-callback="${callback}"
  @if(inject('immediate')) data-immediate="${immediate}" @endif
>
  <!--
  NOTE: .form-content was added for blur effects
  We can't set blur on form itself, because it will blur lockers(loaders) too.
  -->
  <div class="form-content form-row">
    ${context}
  </div>
</form>
