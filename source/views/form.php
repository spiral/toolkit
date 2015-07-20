<extends:element/>

<block:element-assets>
    <asset:script href="resources/scripts/bundle.js"/>
</block:element-assets>

<block:element-body>
    <form action="${action}" method="${method|post}" enctype="multipart/form-data"
          accept-charset="UTF-8" node:attributes
          class="<?= (${ajax | true} ? 'js-spiral-form' : '') . ('${class}' ? ' ${class}' : '') #compiled ?>">
        ${context}
    </form>
</block:element-body>