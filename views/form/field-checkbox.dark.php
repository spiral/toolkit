<div inputID:define class="form-group col-${size|12}@if(injected('wrapper-class')) ${wrapper-class} @endif"
     data-field="true">
  <div class="@if(injected('is-native'))form-check@else custom-control custom-${type|checkbox}@endif">
    <block:element/>
    <label inputID:consume for="${id}" class="@if(injected('is-native'))form-check-label@else custom-control-label@endif">${label}</label>
    @if(inject('error'))
      <div class="invalid-feedback" data-form-message>${error}</div>
    @endif
    @if(inject('success'))
      <div class="valid-feedback" data-form-message>${success}</div>
    @endif
    @if(injected('help') && !injected('error') && !injected('success'))
      <small class="form-text text-muted" data-form-hint>${help}</small>
    @endif
  </div>
</div>
