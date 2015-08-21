<extends:element/>

<block:resources>
    <resource:script href="resources/scripts/spiral/sf.js"/>
</block:resources>

<!--
.form-content was added for blur effects
We can't set blur on form itself, because it will blur lockers(loaders) too.
-->
<block:body>
    <form action="${action}" method="${method|post}" enctype="multipart/form-data" accept-charset="UTF-8" class="${form-class}" node:attributes="exclude:form-class">
        <div class="form-content">
            <yield:context/>
        </div>
    </form>
</block:body>

<!--We are mofing form class at bottom so it can accept user defined ajax value.-->
<block:form-class>
    ${class} <?= (${ajax|true} ? 'js-sf-form' : '') #compiled ?>
</block:form-class>