<extends path="form/field" />

<block:element>
  <?php
  $_selected = inject('value', null) || inject('context', null);
  $_values = inject('values', []);
  $_placeholder = inject('placeholder', null);
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
    class="form-control@if(inject('error', null)) is-invalid@endif @if(inject('success', null)) is-valid@endif"
    name="${name}"
    @if(inject('disabled', null))disabled@endif
  >
    {!! $_options_str !!}
  </select>
</block:element>
