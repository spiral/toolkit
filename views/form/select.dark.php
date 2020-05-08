<extends:toolkit:form.field/>

<block:element>
    <?php
    $_selected_ = inject('value');
    $_values = inject('values', []);
    $_placeholder_ = inject('placeholder');
    $_options_ = [];
    if ($_placeholder_) {
        $_options_[] = "<option>{$_placeholder_}</option>";
    }

    if (is_array($_values)) {
        foreach ($_values as $_value => $_label_) {
            if ($_value == $_selected_) {
                $_options_[] = "<option value=\"{$_value}\" selected>{$_label_}</option>";
            } else {
                $_options_[] = "<option value=\"{$_value}\">{$_label_}</option>";
            }
        }
    }

    $_options_str = join('', $_options_);
    ?>
  <select
    inputID:consume
    id="${id}"
    data-input="true"
    class="form-control@if(injected('error')) is-invalid@endif @if(injected('success')) is-valid@endif"
    name="${name}"
    @if(injected('disabled'))disabled@endif
  >
    {!! $_options_str !!}
  </select>
    <?php
    unset($_label_, $_selected_, $_placeholder_, $_options_);
    ?>
</block:element>
