document.addEventListener('DOMContentLoaded', function () {
	Array.from(document.querySelectorAll('[inject-href]')).forEach(Element => {
		Element.onclick = () => window.open(Element.attributes["inject-href"].value);
	});
	document.getElementById("storage-status").innerText = StorageMode == 1 ? "Bad browser..." : StorageMode == 2 ? "Firefox Debug Mode" : "";
});