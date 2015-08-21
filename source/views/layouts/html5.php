<templater:use bundle="spiral:bundle"/>

<!DOCTYPE html>
<html>
<head>
    <title>
        <yield:title/>
    </title>
    <?php
    /**
     * @var \Psr\Http\Message\ServerRequestInterface $request
     */
    $request = $this->container->get(\Psr\Http\Message\ServerRequestInterface::class);
    ?>
    <script>
        window.csrfToken = "<?= $request->getAttribute('csrfToken') ?>";
    </script>
    <block:head>
        <resource:style href="resources/styles/spiral/spiral.css"/>
        <yield:resources/>
        <!--[STYLES]-->
    </block:head>
</head>
<body>
<yield:body/>
<!--[SCRIPTS]-->
</body>
</html>