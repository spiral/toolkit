<use:element path="toolkit:form/radio" as="form:radio"/>

<?php
$_values_ = inject('values', []);
$_selected_ = inject('value');
?>
<div inputID:define class="form-group col-${size|12}" data-field="true">
  <div class="form-row">
    @foreach($_values_ as $_val => $_lbl)
      <div class="col col-auto">
        <div class="@if(injected('is-native'))form-check@else custom-control custom-radio@endif">
          <input
            inputID:consume
            id="${id}_{{ $_val }}"
            class="@if(injected('is-native'))form-check-input@else custom-control-input@endif @if(injected('error')) is-invalid@endif @if(injected('success')) is-valid@endif"
            type="radio"
            name="${name}"
            value="{{ $_val }}"
            @if($_val == $_selected_)checked@endif
          >
          <label inputID:consume for="${id}_{{ $_val }}"
                 class="@if(injected('is-native'))form-check-label@else custom-control-label@endif">{{ $_lbl }}</label>
        </div>
      </div>
    @endforeach
  </div>
</div>
<?php
unset($_selected_, $_values_);
?>
