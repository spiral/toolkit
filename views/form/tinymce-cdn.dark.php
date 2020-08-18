<stack:push name="scripts" unique-id="tinymce">
    @if(!env('TINY_MCE_KEY'))
        <script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>
    @endif
    @if(env('TINY_MCE_KEY'))
        <script src="https://cdn.tiny.cloud/1/<? echo env('TINY_MCE_KEY') ?>/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>
    @endif
</stack:push>
