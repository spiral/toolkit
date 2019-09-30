<extends path="toolkit:form/field"/>

<block:element>
    <input inputID:consume
           id="${id}"
           data-input="true"
           type="date"
           class="form-control@if(inject('error')) is-invalid@endif@if(inject('success')) is-valid@endif sf-js-date ${class}"
           value="${value}${context}"
           attr:aggregate="exclude:path,context"
    >
</block:element>
