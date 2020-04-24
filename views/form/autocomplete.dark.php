<extends:toolkit:form.field />

<block:element>
  <stack:push name="scripts" unique-id="autocomplete">
    <script type="text/javascript" src="/scripts/autocomplete/autocomplete.js"></script>
  </stack:push>
  <div
    class="sf-autocomplete js-sf-autocomplete"
    data-name="${name}"
    data-options='${options}'
    data-sf-custom-form-element
  >
    <input
      type="hidden"
      name="${name}"
      data-sf-custom-form-element-input
      value="${value}"
      data-input="true"
    >
    <div
      class="sf-autocomplete__input form-control"
      data-sf="autocomplete-input-wrapper"
    >
      <input
        id="${id}"
        class="sf-autocomplete__input-field"
        type="text"
        placeholder="${placeholder}"
        @if(inject('disabled'))disabled@endif
        autocomplete="no"
        data-sf="autocomplete-input"
      >
    </div>
    ${context}
  </div>
</block:element>
