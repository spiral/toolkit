<stack:push name="scripts" unique-id="tinymce">
    @if(!env('TINY_MCE_KEY'))
        <script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>
        <script type="application/javascript">console.warn('TinyMCE key is missing. Declare TINY_MCE_KEY in .env file. Get free key https://www.tiny.cloud/auth/signup/ here.')</script>
    @endif
    @if(env('TINY_MCE_KEY'))
        <script src="https://cdn.tiny.cloud/1/<? echo env('TINY_MCE_KEY') ?>/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>
    @endif
</stack:push>
