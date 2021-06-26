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
		return alert(`
			Invalid JSON provided
			${err.message}
		`.replaceAll("	", ""));
	}

	outputElem.innerText = JSON.stringify(data, null, "\t");
}

function copyToClipboard() {
	const outputElem = document.getElementById("output");

	// @ts-ignore
	outputElem.select();
	// @ts-ignore
	outputElem.setSelectionRange(0, 99999);

	document.execCommand("copy");

	alert("Copied the data to your clipboard!");
}