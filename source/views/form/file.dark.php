<extends:spiral:element/>

<block:resources>
    <resource:script href="resources/scripts/spiral/sf.file.js"/>
</block:resources>

<block:body>
    <div class="file-field input-field" node:attributes="prefix:wrapper">
        <input type="file" id="${id}" class="inputfile sf-js-file-input" data-multiple-caption="{count} ${multiple | files selected}" multiple />
        <label for="${id}">
            <span class="btn ${class}">${label | Choose file}</span>
        </label>
    </div>
</block:body>