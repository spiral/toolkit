<extends:spiral:element/>

<block:resources>
    <resource:script href="resources/scripts/spiral/sf.input.js"/>
</block:resources>

<block:body>
    <div class="item-form ${wrapper-class}" node:attributes="prefix:wrapper">
        <input type="file" id="${id}" class="inputfile sf-js-input" data-multiple-caption="{count} ${multiple | files selected}" multiple />
        <label for="${id}">
            <span class="${class}">${label | Choose file}</span>
        </label>
    </div>
</block:body>