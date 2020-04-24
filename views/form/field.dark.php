<div class="form-group col-sm-12 col-md-${size|12 }@if(injected('wrapper-class')) ${wrapper-class} @endif" data-field="true" @if(injected('wrapper-id')) id="${wrapper-id}" @endif >

  @if(injected('label'))
  <label for="${id}">${label}</label> @if(injected('required'))<span class="text-danger">*</span>@endif
  @endif

  <block:element />

  @if(injected('error'))
  <div class="invalid-feedback" data-form-message>
    ${error}
  </div>
  @endif
  @if(injected('success'))
  <div class="valid-feedback" data-form-message>
    ${success}
  </div>
  @endif
  @if(injected('help') && !injected('error') && !injected('success'))
  <small class="form-text text-muted" data-form-hint>
    ${help}
  </small>
  @endif

</div>
