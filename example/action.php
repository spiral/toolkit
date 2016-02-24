<?
header('Content-type: application/json');
$response = [
    'status' => 200,
    'message' => 'Successfully sent',
];

echo json_encode($response);

?>

