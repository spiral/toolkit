<?
header( 'Content-type: application/json' );
http_response_code( 400 );
$response = [
    'status'   => 400,
    'error'    => 'common error goes here',
    'messages' => [
        'inputCorrect' => 'inputCorrect message'
    ],
    'warnings' => [
        'inputError2' => "message with warning",
    ],
    'errors'   => [
        'inputError1' => "error message goes here",
    ]
];

echo json_encode( $response );

?>

