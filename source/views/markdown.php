<?php #compile

ob_start();
?>${context}<?php #compile
$__markdown__ = ob_get_clean();

//Fixing indents
$__markdown__ = \Spiral\Helpers\StringHelper::normalizeIndents($__markdown__);

//Rendering
echo (new Parsedown())->text($__markdown__)
?>