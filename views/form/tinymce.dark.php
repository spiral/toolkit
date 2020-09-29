<extends:toolkit:form.field/>
<use:element path="toolkit:form/tinymce-cdn" as="script:cdn"/>

<block:element>
    @if(inject('cdn', false))
        <script:cdn/>
    @endif
    <stack:push name="scripts" unique-id="autocomplete">
        <script type="text/javascript" src="/toolkit/tinymce/tinymce.js"></script>
    </stack:push>
    <div class="sf-tinymce js-sf-tinymce ${class}" data-name="${name}"
         data-sf-custom-form-element>
        <textarea name="${name}" data-sf-custom-form-element-input>${value}</textarea>
        ${context}
    </div>
    @if(!env('TINY_MCE_KEY'))<div class="alert alert-warning">Declare TINY_MCE_KEY in .env file. Get free key <a target="_blank" href="https://www.tiny.cloud/auth/signup/">here.</a></div>@endif
</block:element>
