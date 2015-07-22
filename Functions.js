// Form retrieval
var name = 0;

function Write(output)
{
	/// write to file
	var txtFile = "c:/test.txt";
	var file = new File(txtFile);
	var str = "My string of text";

	file.open("w"); // open file with write access
	file.writeln("First line of text");
	file.writeln("Second line of text " + output);
	file.write(str);
	file.close();
}

function writeTextFile(filepath, output) {
	var txtFile = new File(filepath);
	txtFile.open("w"); //
	txtFile.writeln(output);
	txtFile.close();
}

function formFunction()
{
	var Form = document.getElementById('details');
	// Retrieving values from the form

	var fileName = '/Users/Richard/Documents/Coding Fun/Andy/test.txt';
	var a = Form.title.value;
	var name = Form.FirstName.value;

	Write(name);
	writeTextFile(fileName, name);

	console.log(name);
	/*
		Title:
		<select>
				<option value="Dr">Dr</option>
				<option value="Mr">Mr</option>
		</select><br>
		First Name: <input type = "text"  name = "FirstName"  placeholder="First Name"><br>
		Surname: <input type = "text"  name = "Surname"  placeholder="Surname"><br>
		House Number: <input type = "text"  name = "HouseNumber"  placeholder="House Number"><br>
		Address Line 1: <input type = "text"  name = "AddressLine1"  placeholder="Address Line 1"><br>
		Address Line 2: <input type = "text"  name = "AddressLine2"  placeholder="Address Line 2"><br>
		Address Line 3: <input type = "text"  name = "AddressLine3"  placeholder="Address Line 3"><br>
		Postcode: <input type = "text"  name = "Postcode"  placeholder="Postcode"<br>

	*/
}
