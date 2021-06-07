/* eslint-disable no-unused-vars */
function onSubmit() {
	alert("Form was submitted");

	// @ts-ignore
	const input = document.getElementById("user-input").value;

	if(!input) return alert("JSON was not provided.");

	let json;

	try {
		json = JSON.parse(input);
	}
	catch(err) {
		alert(`Invalid JSON Provided, ${err.stack.split("\n").slice(0, 2).join(" ")}`);
	}
}