<extends:spiral:element/>

<block:resources>
    <resource:script href="resources/scripts/spiral/sf.js"/>
    <resource:script href="resources/scripts/spiral/sf.locker.js"/>
    <resource:script href="resources/scripts/spiral/sf.form.js"/>
</block:resources>

<!--
NOTE: .form-content was added for blur effects
We can't set blur on form itself, because it will blur lockers(loaders) too.
-->
<block:body>
    <form action="${action}" method="${method|post}" enctype="multipart/form-data"
          accept-charset="UTF-8" node:attributes="exclude:form-class"
          class="${class} <?= (${ajax | true} ? 'js-sf-form' : '') #compiled ?>">
        <div class="form-content" node:attributes="prefix:content">
            <yield:context/>
        </div>
    </form>
</block:body>