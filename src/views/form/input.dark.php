<extends path="toolkit:form/field"/>

<block:element>
    <input id="${id}" data-input="true"
           class="form-control@if(inject('error')) is-invalid@endif@if(inject('success')) is-valid@endif"
           value="${value}${context}" attr:aggregate --id-consume>
</block:element>
