/* eslint-disable no-unused-vars */
function onClick() {
	// @ts-ignore
	const input = document.getElementById("user-input").value;
	const outputElement = document.getElementById("user-response");

	if(!input) return alert("JSON was not provided.");

	let json: object;

	try {
		json = JSON.parse(input);
	}
	catch(err) {
		alert(`Invalid JSON Provided, ${err.stack.split("\n").slice(0, 2).join(" ")}`);
	}

	// @ts-ignore
	const code = JSON.stringify(json, null, "\t");
	// @ts-ignore
	outputElement.innerHTML = code;
}