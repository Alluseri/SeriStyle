/* jshint esversion: 11 */

var Environment = this.browser || this.chrome;

var VideoPageTransformerBurned = false;
var GeneralTransformerBurned = false;
var HomePageTransformerBurned = true;

var VPT_Burn1 = false;
var VPT_Burn2 = false;
var GT_Burn1 = false;
var GT_Burn2 = false;

var PageObserver = new MutationObserver(async Mutations => {
	var Inserted = [];
	Mutations.forEach(Mutation => {
		for (let i = 0; i < Mutation.addedNodes.length; i++) {
			Inserted.push(Mutation.addedNodes[i]);
		}
	});

	if (!VideoPageTransformerBurned) {
		if (!VPT_Burn1)
			VPT_Burn1 = Inserted.some(Element => Element.id == "owner" && Element.tagName == "DIV");

		if (!VPT_Burn2)
			VPT_Burn2 = Inserted.some(Element => Element.classList?.contains("view-count"));

		if (VPT_Burn1 && VPT_Burn2) {
			Environment.runtime.sendMessage({ Operation: "SeriStyle_LoadScript", Args: ["scripts/transformer-video.js"] });
			VideoPageTransformerBurned = true;
		}
	}

	if (!GeneralTransformerBurned) {
		if (!GT_Burn1)
			GT_Burn1 = Inserted.some(Element => Element.tagName == "YT-ICON" && Element.className?.includes("ytd-searchbox") && Element.parentElement?.id == "search-icon-legacy");

		if (!GT_Burn2)
			GT_Burn2 = Inserted.some(Element => Element.tagName == "YT-ICON" && Element.className == "" && Element.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.id == "voice-search-button");

		if (GT_Burn1 && GT_Burn2) {
			Environment.runtime.sendMessage({ Operation: "SeriStyle_LoadScript", Args: ["scripts/transformer-general.js"] });
			GeneralTransformerBurned = true;
		}
	}

	if (VideoPageTransformerBurned && HomePageTransformerBurned && GeneralTransformerBurned) {
		PageObserver.disconnect();
		console.log("[SeriStyle|Observer] All transformers have been burned, goodbye!");
	}
});

Environment.runtime.sendMessage({ Operation: "SeriStyle_LoadScript", Args: ["scripts/transformer-launch.js"] });

VPT_Burn1 = !!document.querySelector("div#owner");
VPT_Burn2 = !!document.querySelector(".view-count");
GT_Burn1 = !!document.querySelector("#search-icon-legacy>yt-icon.ytd-searchbox");
GT_Burn2 = !!document.querySelector("#voice-search-button yt-icon");

PageObserver.observe(document.querySelector("ytd-app"), {
	childList: true,
	subtree: true
});