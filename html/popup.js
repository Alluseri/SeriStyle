document.addEventListener('DOMContentLoaded', function () {
	Array.from(document.querySelectorAll('[inject-href]')).forEach(Element => {
		var OPath = Element.attributes["inject-href"].value;
		if (OPath[0] == ':') {
			var CPath = document.location.href;
			CPath = CPath.substring(0, CPath.lastIndexOf('/'));
			OPath = OPath.replace(':', CPath);
		}
		Element.onclick = () => window.open(OPath);
	});
	document.getElementById("low-i-debug").onclick = async () => {
		var DebugInfo = [
			"- SeriStyle v1.7.0-rolling",
			"- " + navigator.userAgent
		];
		try {
			await navigator.clipboard.writeText(DebugInfo.join("\r\n"));
			alert("Successfully copied debug info to clipboard.");
		} catch {
			alert("Couldn't copy debug info to clipboard due to an error.");
		}
	};
	document.getElementById("storage-status").innerText = StorageMode == 1 ? "Bad browser..." : StorageMode == 2 ? "Firefox Debug Mode" : "";
});