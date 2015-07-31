<extends:form.input wrapper-class="item-autocomplete ${wrapper-class}"/>

<block:assets>
    <block:assets/>
    <asset:script href="resources/scripts/spiral/bundle.js"/>
    <asset:script href="resources/scripts/spiral/Autocomplete.js"/>
</block:assets>

<block:input-body>
    <div class="item-group">
        <input type="${type|text}" value="${value}${context}"
               data-key="${key}" data-name="${name}" data-url="${url}"
               class="js-spiral-autocomplete ${class}" node:attributes/>
    </div>
</block:input-body>