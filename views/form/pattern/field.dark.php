<extends:toolkit:form.field/>
<use:element path="toolkit:form/pattern/input" as="pattern:input"/>

<block:element>
  <div
    class="js-sf-pattern-input sf-pattern-input @if(injected('error')) is-invalid@endif@if(injected('success')) is-valid@endif ${class}"
    data-name="${name}" data-value="${value}" data-field="true"
    @if(injected('autosubmit')) data-autosubmit="true" @endif >
    <input type="hidden" data-sf-custom-form-element-input name="${name}">
    ${context}
  </div>
</block:element>
