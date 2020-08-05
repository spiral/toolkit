<extends:toolkit:form.field/>

<block:element>
  <stack:push name="scripts" unique-id="autocomplete">
    <script type="text/javascript" src="/toolkit/autocomplete/autocomplete.js"></script>
  </stack:push>
  <div class="sf-autocomplete js-sf-autocomplete" data-name="${name}" data-options='${options}'
       data-sf-custom-form-element
       @if(injected('url'))
        data-url="${url}"
       @endif
       @if(injected('preserve-id'))
        data-preserve-id="true"
       @endif
       data-input="true">
    <input type="hidden" name="${name}" data-sf-custom-form-element-input value="${value}">
    <div class="sf-autocomplete__input form-control" data-sf="autocomplete-input-wrapper">
      <input
        inputID:consume
        id="${id}"
        value="${labelValue}"
        class="sf-autocomplete__input-field"
        type="text"
        placeholder="${placeholder}"
        @if(injected('disabled'))disabled@endif
        autocomplete="no"
        data-sf="autocomplete-input"
      >
    </div>
    ${context}
  </div>
</block:element>
