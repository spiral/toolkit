<extends path="toolkit:form/field"/>

<block:element>
    <textarea inputID:consume
              id="${id}"
              data-input="true"
              class="form-control@if(inject('error')) is-invalid@endif@if(inject('success')) is-valid@endif ${class}"
              attr:aggregate="exclude:path,context"
    >${value}${context}</textarea>
</block:element>