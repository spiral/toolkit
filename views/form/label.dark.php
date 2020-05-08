<div class="form-group col-${size|12}">
  <label class="${class}" attr:aggregate>${label}</label>
  @if(injected('required'))<span class="text-danger">*</span>@endif
  ${context}
  <div data-message-placeholder="${name}"></div>
</div>
