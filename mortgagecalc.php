<?php
$db = new mysqli("localhost", "root", "", "mortgage");


if ($_POST['action'] == "submit"){
	$p = $_POST['p'];
	$r = $_POST['r'];
	$n = $_POST['n'];
	$payment = $_POST['payment'];

	$result = $db -> query("INSERT INTO history (principal, interest, num_pay, payment) VALUES ($p, $r, $n, $payment)");

	$response['message'] = $db;
	echo json_encode($response);
};
?>