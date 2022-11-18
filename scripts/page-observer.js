/* jshint esversion: 11 */

var Environment = this.browser || this.chrome;

var VideoPageTransformerBurned = false;
var HomePageTransformerBurned = true;

var PageObserver = new MutationObserver(async Mutations => {
	var Inserted = [];
	Mutations.forEach(Mutation => {
		for (let i = 0; i < Mutation.addedNodes.length; i++) {
			Inserted.push(Mutation.addedNodes[i]);
		}
	});

	if (!VideoPageTransformerBurned && Inserted.some(Element => Element.id == "owner" && Element.tagName == "DIV")) {
		Environment.runtime.sendMessage({ Operation: "SeriStyle_LoadScript", Args: ["scripts/transformer-video.js"] });
		VideoPageTransformerBurned = true;
	}

	if (VideoPageTransformerBurned && HomePageTransformerBurned) {
		PageObserver.disconnect();
		console.log("[SeriStyle|Observer] All transformers have been burned, goodbye!");
	}
});
PageObserver.observe(document.querySelector("ytd-app"), {
	childList: true,
	subtree: true
});