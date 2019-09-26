<form
  action="${action}"
  method="${method|post}"
  enctype="multipart/form-data"
  accept-charset="UTF-8"
  class="${class}"
  data-lock-type="${lock-type}"
>
  <!--
  NOTE: .form-content was added for blur effects
  We can't set blur on form itself, because it will blur lockers(loaders) too.
  -->
  <div class="form-content form-row">
    ${context}
  </div>
</form>
