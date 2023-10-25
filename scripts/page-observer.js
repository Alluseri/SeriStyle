var Environment = this.browser || this.chrome;

(async () => {
	if (StorageMode == 0 && this.confirm) {
		var MetaVersion = (await Environment.storage.sync.get(["ss_metaver"])).ss_metaver;
		if (!MetaVersion || MetaVersion < SeriStyleMetaVersion) {
			Environment.storage.sync.set({ ss_metaver: SeriStyleMetaVersion });
			if (SeriStyleSettings.SeriStyle.RemindUpdates.Value && confirm(SeriStyleLocales["en-US"].Messages.UpdateSettings))
				Environment.runtime.sendMessage({ Operation: "SeriStyle_OpenURL", Args: ["html/config.html"] });
		}
	}
})();

Environment.runtime.onMessage.addListener((Message) => {
	if (Message.Operation != "SeriStyle_HistoryState") return;
	var URL = Message.Args[0];
	window.dispatchEvent(new CustomEvent("historychange", { detail: Message.Args[0] }));
});

var GeneralTransformerBurned = false;

var GT_Burn1 = false;
var GT_Burn2 = false;

var PageObserver = new MutationObserver(async Mutations => { // TODO: I have no idea why this is async. I'm keeping it because I'm scared.
	var Inserted = [];
	Mutations.forEach(Mutation => {
		for (let i = 0; i < Mutation.addedNodes.length; i++) {
			Inserted.push(Mutation.addedNodes[i]);
		}
	});

	if (!GeneralTransformerBurned) {
		if (!GT_Burn1)
			GT_Burn1 = Inserted.some(Element => Element.tagName == "BUTTON" && Element.id == "search-icon-legacy");

		if (!GT_Burn2)
			GT_Burn2 = Inserted.some(Element => Element.tagName == "YT-ICON" && Element.className == "" && Element.parentElement?.parentElement?.parentElement?.parentElement?.parentElement?.id == "voice-search-button");

		if (GT_Burn1 && GT_Burn2) {
			Environment.runtime.sendMessage({ Operation: "SeriStyle_LoadScript", Args: ["scripts/transformer-general.js"] });
			GeneralTransformerBurned = true;
			console.log("[SeriStyle|Observer] Burned transformer: General.");
		}
	}

	if (GeneralTransformerBurned) {
		PageObserver.disconnect();
		console.log("[SeriStyle|Observer] All transformers have been burned, goodbye!");
	}
});

var VideoPageInterval = setInterval(() => {
	if (document.querySelector("div#owner") && (document.querySelector(".view-count") || document.querySelector("#title > ytd-badge-supported-renderer > div > span"))) {
		Environment.runtime.sendMessage({ Operation: "SeriStyle_LoadScript", Args: ["scripts/transformer-videopage.js"] });
		clearInterval(VideoPageInterval);
		console.log("[SeriStyle|Interval] Burned transformer: Videopage.");
	}
}, SeriStyleSettings.Advanced.VideoPageInterval.Value);
var PlaylistInterval = setInterval(() => {
	if (document.querySelector("ytd-menu-renderer.ytd-playlist-header-renderer")) {
		Environment.runtime.sendMessage({ Operation: "SeriStyle_LoadScript", Args: ["scripts/transformer-playlist.js"] });
		clearInterval(PlaylistInterval);
		console.log("[SeriStyle|Interval] Burned transformer: Playlist.");
	}
}, SeriStyleSettings.Advanced.PlaylistInterval.Value);
var VideoPlayerInterval = setInterval(() => {
	if (document.querySelector(".ytp-settings-menu>.ytp-panel>.ytp-panel-menu")) {
		Environment.runtime.sendMessage({ Operation: "SeriStyle_LoadScript", Args: ["scripts/transformer-videoplayer.js"] });
		clearInterval(VideoPlayerInterval);
		console.log("[SeriStyle|Interval] Burned transformer: VideoPlayer.");
	}
}, SeriStyleSettings.Advanced.VideoPlayerInterval.Value);
var ChannelPageInterval = setInterval(() => {
	if (document.querySelector("ytd-browse[page-subtype='channels'] #contents.ytd-rich-grid-renderer") && document.querySelector("ytd-browse[page-subtype='channels'] #header.ytd-rich-grid-renderer")) {
		Environment.runtime.sendMessage({ Operation: "SeriStyle_LoadScript", Args: ["scripts/transformer-channelpage.js"] });
		clearInterval(ChannelPageInterval);
		console.log("[SeriStyle|Interval] Burned transformer: ChannelPage.");
	}
}, SeriStyleSettings.Advanced.ChannelPageInterval.Value);

Environment.runtime.sendMessage({ Operation: "SeriStyle_LoadScript", Args: ["scripts/transformer-css.js"] });
console.log("[SeriStyle|Direct] Burned transformer: CSS.");
Environment.runtime.sendMessage({ Operation: "SeriStyle_LoadScript", Args: ["scripts/transformer-launch.js"] });
console.log("[SeriStyle|Direct] Burned transformer: Launch.");

PageObserver.observe(document.querySelector("ytd-app"), {
	childList: true,
	subtree: true
});

GT_Burn1 = !!document.querySelector("#search-icon-legacy>yt-icon.ytd-searchbox");
GT_Burn2 = !!document.querySelector("#voice-search-button yt-icon");

if (SeriStyleSettings.Advanced.DisableCSS.Value)
	console.log("[SeriStyle|EarlyBird] Disabled all CSS transformers for this page.");