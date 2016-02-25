<extends:spiral:element/>

<block:resources>
    <resource:script href="resources/scripts/spiral/sf.fileinput.js"/>
</block:resources>

<block:body>
    <div class="file-field input-field">
        <input type="file" id="${id}" class="inputfile sf-js-file-input" data-multiple-caption="{count} ${multiple-text | files selected}" node:attributes/>
        <label for="${id}">
            <span class="btn ${class}">${label | Choose file}</span>
        </label>
    </div>
</block:body>