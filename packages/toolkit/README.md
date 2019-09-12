Spiral toolkit includes set of virtual tags, frontend library and resource manager.

Elements included
-----------------
* ajax forms
    * input
    * static
    * selectbox
    * switch
    * textarea
    * radios and check boxes
* paginator element
* simple grid element with paginator
    * simple cell
    * numeric cell
    * boolean cell
    * bytes (size) cell
    
Toolkit JS and CSS:
--------
To enable Toolkit widgets in your views and connect appropriate CSS/JS files use following code:

```html
<dark:use bundle="spiral:bundle"/>
<toolkit:styles/>
<toolkit:scripts/>
```

Examples
--------

Grids:

```html
<spiral:grid source="<?= $selector ?>" as="sample" style="margin-top: 20px;">
    <!-- Simple grids only need column title and value-->
    <grid.cell title="ID" value="<?= $sample->id ?>"/>

    <!-- Custom classes, styles and etc are still possible and behave as in regular tags -->
    <grid.cell title="Status" value="<?= $sample->status ?>" style="font-weight: bold;"/>

    <!-- We can use short function e() to escape unsafe values -->
    <grid.cell title="Name" value="<?= e($sample->name) ?>"/>

    <!-- Size of property "content" in bytes, this is prepared cell type (see bool, bytes and number) -->
    <grid.cell.bytes title="Content Size" value="<?= strlen($sample->content) ?>"/>

    <!-- Most of elements can be used by multiple aliases (grid: vs grid.) -->
    <grid:cell.number title="Sample value" value="<?= $sample->child->value ?>"/>

    <!-- Some cells can be defined using tag context -->
    <grid:cell>
        <a href="<?= uri('sample::edit', ['id' => $sample->id]) ?>">Edit element</a>
    </grid:cell>
</spiral:grid>
```

Forms:

```html
<spiral:form action="/sample/save/<?= $entity->id ?>" style="margin-top: 20px;">
    <form.input label="Name" name="name" value="<?= e($entity->name) ?>"/>

    <form.select label="Status" name="status" values="<?= [
        'active'   => 'Active',
        'disabled' => 'Disabled'
    ] ?>" value="<?= $entity->status ?>"/>

    <form.textarea label="Content" name="content" value="<?= e($entity->content) ?>"/>
    <form.input label="Value" name="value" value="<?= $entity->child->value ?>"/>

    <input type="submit" class="btn btn-default" value=" <?= $entity->isLoaded() ? 'Update' : 'Create' ?>"/>
</spiral:form>
```

Make sure to import toolkit bundle and styles to your views:

```html
<dark:use bundle="spiral:bundle"/>
<toolkit:styles/>
<toolkit:scripts/>
```