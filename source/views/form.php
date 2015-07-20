<asset:script href="/resources/scripts/bundle.js"/>
<form action="${action}" method="${method|post}" enctype="multipart/form-data"
      accept-charset="UTF-8" node:attributes="exclude:context"
      class="<?= (${ajax | true} ? 'js-spiral-form' : '') . ('${class}' ? ' ${class}' : '') #compiled  ?>">
    ${context}
</form>