<extends:form.input/>
<block:assets>
    <asset:script href="/resources/vendor/codemirror/lib/codemirror.js"/>
    <asset:script href="/resources/vendor/codemirror/mode/xml.js"/>
    <asset:script href="/resources/vendor/codemirror/mode/css.js"/>
    <asset:script href="/resources/vendor/codemirror/mode/javascript.js"/>
    <asset:script href="/resources/vendor/codemirror/mode/htmlmixed.js"/>
    <asset:script href="/resources/vendor/codemirror/mode/htmlembedded.js"/>
    <asset:style href="/resources/vendor/codemirror/lib/codemirror.css"/>
    <script>
        //todo rewrite to asset:inline script when it will work
        //todo autoId
        document.addEventListener("DOMContentLoaded", function () {
            var editor = CodeMirror.fromTextArea(
                document.getElementById("${id|editor-codemirror}"),
                {
                    mode: "htmlmixed",
                    lineNumbers: true,
                    tabMode: "indent"
                }
            );
            editor.on("change", function (cm) {
                cm.save();
            });
        });
    </script>

</block:assets>

<block:input-body>
    <textarea name="${name}" id="${id|editor-codemirror}" node:attributes>${value}${context}</textarea>
</block:input-body>