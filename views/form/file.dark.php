<extends path="toolkit:form/field"/>

<block:element>
    <input inputID:consume
           id="${id}"
           type="file"
           data-input="true"
           data-file="true"
           class="form-control-file@if(inject('error')) is-invalid@endif@if(inject('success')) is-valid@endif ${class}"
           attr:aggregate="exclude:path,context"
    >
</block:element>