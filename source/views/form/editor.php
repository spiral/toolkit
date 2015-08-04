<extends:form.input/>

<block:assets>
    <asset:script href="/resources/vendor/tinymce/tinymce.min.js"/>
    <script>
        //todo rewrite to asset:inline script when it will work
        //todo file browser
        //todo autoId
        document.addEventListener("DOMContentLoaded", function () {
            tinymce.init({
                theme: "modern",
                entity_encoding: "raw",
                selector: "#${id|editor-mce}",
                plugins: [
                    "lists link image charmap print preview anchor",
                    "searchreplace code fullscreen",
                    "insertdatetime media table contextmenu paste"
                ],
                toolbar: "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | " +
                "bullist numlist | link image",
                convert_urls: false,
//                file_browser_callback: spiral.fileBrowser.showModal,
                //todo check this
                <?php #compile
                ob_start(); ?>${css}<?php #compile
                $__css__ = ob_get_clean();
                if ($__css__)
                {
                    echo('content_css: "' . $__css__ . '"');
                }
                ?>
                skin_url: '/resources/vendor/tinymce/skins/lightgray',
                setup: function (ed) {
                    ed.on("keyup change", function () {
                        this.save();
                    });
                }
            })
        });
    </script>

</block:assets>

<block:input-body>
    <textarea name="${name}" id="${id|editor}" node:attributes>${value}${context}</textarea>
</block:input-body>