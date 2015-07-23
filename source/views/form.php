<extends:element/>

<block:assets>
    <asset:script href="resources/scripts/bundle.js"/>
</block:assets>

<block:form-class>${class} <?= (${ajax | true} ? 'js-spiral-form' : '') #compiled ?></block:form-class>

<block:body>
    <form action="${action}" method="${method|post}" enctype="multipart/form-data" accept-charset="UTF-8" class="${form-class}" node:attributes="exclude:form-class">
        ${context}
    </form>
</block:body>