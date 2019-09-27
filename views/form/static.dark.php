<extends path="toolkit:form/field"/>

<block:element>
    <input inputID:consume
           id="${id}"
           data-input="true"
           type="text"
           readonly="true"
           class="form-control-plaintext@if(inject('error')) is-invalid@endif@if(inject('success')) is-valid@endif ${class}"
           value="${value}${context}"
           attr:aggregate="exclude:path,context"
    >
</block:element>
