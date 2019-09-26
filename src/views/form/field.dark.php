<div class="form-group col-${size|12}" data-field="true">

  <label for="${id}">${label}</label>

  <block:element />

  @if(inject('error'))
    <div class="invalid-feedback" data-form-message>
      ${error}
    </div>
  @endif
  @if(inject('success'))
    <div class="valid-feedback" data-form-message>
      ${success}
    </div>
  @endif
  @if(inject('help') && !inject('error') && !inject('success'))
    <small class="form-text text-muted" data-form-hint>
      ${help}
    </small>
  @endif

</div>
