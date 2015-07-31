<extends:element/>

<block:assets>
    <asset:script href="/resources/scripts/spiral/bundle.js"/>
    <asset:script href="/resources/vendor/tinymce/tinymce.min.js"/>
    <script>
        //todo editor id, to have multiple editors
        //todo rewrite to asset:inline script when it will work
        //todo check what plugins we need by default
        //todo file browser
        document.addEventListener("DOMContentLoaded", function () {
            var height = document.getElementById("${id|editor}").offsetHeight;
            tinymce.init({
                theme: "modern",
                entity_encoding: "raw",
                selector: "textarea#${id|editor}",
                menubar: "edit insert view format table tools",
//                plugins: "paste searchreplace charmap fullscreen link anchor image textcolor table media contextmenu",
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
                },
                height: height - 109 + "px"//todo magic variable?
            })
        });
    </script>

</block:assets>

<block:body>
    <textarea name="${name}" id="${id|editor}" node:attributes>${value}${context}</textarea>
</block:body>