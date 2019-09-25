<extends path="form/field" />

<block:element>
  <?php
  $_selected = inject('value') || inject('context');
  $_values = inject('values', []);
  $_placeholder = inject('placeholder');
  $_options = [];
  if ($_placeholder) {
    $_options[] = "<option>{$_placeholder}</option>";
  }

  if (is_array($_values)) {
    foreach ($_values as $_value => $_label) {
      if ($_value == $_selected) {
        $_options[] = "<option value=\"{$_value}\" selected>{$_label}</option>";
      } else {
        $_options[] = "<option value=\"{$_value}\">{$_label}</option>";
      }
    }
  }

  $_options_str = join('', $_options);
  ?>

  <select
    id="${id}"
    data-input="true"
    class="form-control@if(inject('error')) is-invalid@endif @if(inject('success')) is-valid@endif"
    name="${name}"
    @if(inject('disabled'))disabled@endif
  >
    {!! $_options_str !!}
  </select>
</block:element>
