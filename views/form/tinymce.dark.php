<extends:toolkit:form.field/>

<block:element>
    <stack:push name="scripts" unique-id="autocomplete">
        <script type="text/javascript" src="/toolkit/tinymce/tinymce.js"></script>
    </stack:push>
    <div class="sf-tinymce js-sf-tinymce" data-name="${name}"
         data-sf-custom-form-element>
        <textarea name="${name}" data-sf-custom-form-element-input attr:aggregate>${value}</textarea>
        ${context}
    </div>
</block:element>
