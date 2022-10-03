<extends:toolkit:form.field/>
<use:element path="toolkit:form/codeeditor-cdn" as="script:cdn"/>

<block:element>
    @if(inject('cdn', false))
        <script:cdn/>
    @endif
    <stack:push name="scripts" unique-id="autocomplete">
        <script type="text/javascript" src="/toolkit/codeeditor/codeeditor.js"></script>
    </stack:push>
    <div class="sf-codeeditor js-sf-codeeditor ${class}" data-name="${name}"
         data-sf-custom-form-element>
        <textarea name="${name}" data-sf-custom-form-element-input>${value}</textarea>
        ${context}
    </div>
</block:element>
