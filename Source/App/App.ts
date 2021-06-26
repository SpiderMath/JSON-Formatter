function buttonClick() {
	// @ts-ignore
	const input = document.getElementById("input").value;
	// @ts-ignore
	const outputElem: HTMLElement = document.getElementById("output");

	if(!input) return alert("No input provided for formatting!");

	let data: object;

	try {
		data = JSON.parse(input);
	}
	catch(err) {
		return alert(`Invalid JSON provided\n${err.message}`);
	}

	outputElem.innerText = JSON.stringify(data, null, "\t");
}