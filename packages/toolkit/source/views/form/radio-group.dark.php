<use:element path="form/radio" as="form:radio"/>
<?php
  $_values = inject('values', []);
  $_selected = inject('value');
?>
<div class="form-group col-${size|12}" data-field="true">
  <div class="form-row">
  @foreach($_values as $_val => $_lbl)
    <div class="col col-auto">
      <div class="@if(inject('is-native'))form-check@else custom-control custom-radio@endif">
        <input
          id="${id}_{{ $_val }}"
          class="@if(inject('is-native'))form-check-input@else custom-control-input@endif @if(inject('error')) is-invalid@endif @if(inject('success')) is-valid@endif"
          type="radio"
          name="${name}"
          value="{{ $_val }}"
          @if($_val == $_selected)checked@endif
        >
        <label for="${id}_{{ $_val }}" class="@if(inject('is-native'))form-check-label@else custom-control-label@endif">{{ $_lbl }}</label>
      </div>
    </div>
  @endforeach
  </div>
</div>
