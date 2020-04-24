<extends:toolkit:form.field />

<block:element>
<div
    id="${id}"
    class="js-sf-autocomplete"
    data-name="${name}"
    data-sf-custom-form-element
>
<input
    id="${id}"
    type="hidden"
    name="${name}"
    data-sf-custom-form-element-input
    value="${value}"
>
<input
    type="date"
>
</div>
</block:element>
