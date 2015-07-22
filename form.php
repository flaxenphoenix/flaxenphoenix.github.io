<html>
<link rel='stylesheet' type='text/css' href='Style.css'>
	<head>
		<div id=header>
		<h1>Order placed</h1>
		</div>
	</head>
	<body>
		<script src="Functions.js"></script>
		
		<?php
			$Title = $_POST['Title'];
			$FirstName = $_POST['FirstName'];
			$Surname = $_POST['Surname'];
			$HouseNumber = $_POST['HouseNumber'];
			$AddressLine1 = $_POST['AddressLine1'];
			$AddressLine2 = $_POST['AddressLine2'];
			$AddressLine3 = $_POST['AddressLine3'];
			$Postcode = $_POST['Postcode'];
			$Quantity = $_POST['Quantity'];

			$myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
			$txt = "John Doe\n";
			fwrite($myfile, $txt);
			$txt = "Jane Doe\n";
			fwrite($myfile, $txt);
			fclose($myfile);
		?>
	</body>
</html>
