<?php

require_once '../bootstrap.php';
use Research\Results\Service;

function submitGameResults(array $formData)
{
    //$formData = $_POST;
    (new Service)->upsertResults($formData);     
}

?>