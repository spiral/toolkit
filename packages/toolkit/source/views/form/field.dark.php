<?php
$_size = inject('size', 12);
$_size_names = ['sm', 'md', 'lg', 'xl'];
$_sizes = [];
$_sizes[] = "col-{$_size}";
foreach ($_size_names as &$_size_name) {
  $_size_val = inject("size-{$_size_name}", null);
  if ($_size_val) $_sizes[] = "col-{$_size_name}-{$_size_val}";
}
unset($_size_name);
$_sizes_str = join(' ', $_sizes);
?>

<div class="form-group {!! $_sizes_str !!}">

  @if(inject('is-checkbox', false))
    <div class="form-check">
  @endif

    @if(!inject('is-checkbox', false))
      <label for="${id}">${label}</label>
    @endif

    <block:element />

    @if(inject('is-checkbox', false))
      <label for="${id}" class="form-check-label">${label}</label>
    @endif

    @if(inject('error', null))
      <div class="invalid-feedback" data-form-message>
        ${error}
      </div>
    @endif
    @if(inject('success', null))
      <div class="valid-feedback" data-form-message>
        ${success}
      </div>
    @endif
    @if(inject('help', null) && !inject('error', null) && !inject('success', null))
      <small class="form-text text-muted" data-form-hint>
        ${help}
      </small>
    @endif

  @if(inject('is-checkbox', false))
    </div>
  @endif

</div>
