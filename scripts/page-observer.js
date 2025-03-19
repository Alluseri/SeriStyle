var Environment = this.browser || this.chrome;

(async () => {
	if (StorageMode == 0 && this.confirm) {
		var MetaVersion = (await Environment.storage.sync.get(["ss_metaver"])).ss_metaver;
		if (!MetaVersion || MetaVersion < SeriStyleMetaVersion) {
			Environment.storage.sync.set({ ss_metaver: SeriStyleMetaVersion });
			if (MetaVersion && SeriStyleSettings.SeriStyle.RemindUpdates.Value && confirm(SeriStyleLocales["en-US"].Messages.UpdateSettings))
				Environment.runtime.sendMessage({ Operation: "SeriStyle_OpenURL", Args: ["html/config.html"] });
		}
	}
})();

Environment.runtime.onMessage.addListener((Message) => {
	if (Message.Operation != "SeriStyle_HistoryState") return;
	var URL = Message.Args[0];
	window.dispatchEvent(new CustomEvent("historychange", { detail: Message.Args[0] }));
});

console.log("[SeriStyle] MOTD: People need to learn to appreciate music more");

var VideoPageInterval = setInterval(() => {
	if (document.querySelector("div#owner") && (document.querySelector(".view-count") || document.querySelector("#title > ytd-badge-supported-renderer > div > p"))) {
		Environment.runtime.sendMessage({ Operation: "SeriStyle_LoadScript", Args: ["scripts/transformer-videopage.js"] });
		clearInterval(VideoPageInterval);
		console.log("[SeriStyle|Interval] Fired transformer: Videopage.");
	}
}, SeriStyleSettings.Advanced.DispatcherInterval.Value);
var PlaylistInterval = setInterval(() => {
	if (document.querySelector("ytd-menu-renderer.ytd-playlist-header-renderer") && document.querySelector("div.metadata-action-bar.style-scope.ytd-playlist-header-renderer>div.metadata-buttons-wrapper.style-scope.ytd-playlist-header-renderer>ytd-button-renderer button>div>yt-icon path")) {
		Environment.runtime.sendMessage({ Operation: "SeriStyle_LoadScript", Args: ["scripts/transformer-playlist.js"] });
		clearInterval(PlaylistInterval);
		console.log("[SeriStyle|Interval] Fired transformer: Playlist.");
	}
}, SeriStyleSettings.Advanced.DispatcherInterval.Value);
var VideoPlayerInterval = setInterval(() => {
	if (document.querySelector(".ytp-settings-menu>.ytp-panel>.ytp-panel-menu")) {
		Environment.runtime.sendMessage({ Operation: "SeriStyle_LoadScript", Args: ["scripts/transformer-videoplayer.js"] });
		clearInterval(VideoPlayerInterval);
		console.log("[SeriStyle|Interval] Fired transformer: VideoPlayer.");
	}
}, SeriStyleSettings.Advanced.DispatcherInterval.Value);
var ChannelPageInterval = setInterval(() => {
	if (document.querySelector("ytd-browse[page-subtype='channels'] #contents.ytd-rich-grid-renderer") && document.querySelector("ytd-browse[page-subtype='channels'] #header.ytd-rich-grid-renderer")) {
		Environment.runtime.sendMessage({ Operation: "SeriStyle_LoadScript", Args: ["scripts/transformer-channelpage.js"] });
		clearInterval(ChannelPageInterval);
		console.log("[SeriStyle|Interval] Fired transformer: ChannelPage.");
	}
}, SeriStyleSettings.Advanced.DispatcherInterval.Value);
var GeneralInterval = setInterval(() => {
	if (document.querySelector("button.ytSearchboxComponentSearchButton") && Array.from(document.querySelectorAll("yt-icon:not([class])")).some(k => k.closest("#voice-search-button"))) {
		Environment.runtime.sendMessage({ Operation: "SeriStyle_LoadScript", Args: ["scripts/transformer-general.js"] });
		clearInterval(GeneralInterval);
		console.log("[SeriStyle|Interval] Fired transformer: General.");
	}
}, SeriStyleSettings.Advanced.DispatcherInterval.Value);

Environment.runtime.sendMessage({ Operation: "SeriStyle_LoadScript", Args: ["scripts/transformer-css.js"] });
console.log("[SeriStyle|Direct] Fired transformer: CSS.");
Environment.runtime.sendMessage({ Operation: "SeriStyle_LoadScript", Args: ["scripts/transformer-launch.js"] });
console.log("[SeriStyle|Direct] Fired transformer: Launch.");

if (SeriStyleSettings.Advanced.DisableCSS.Value)
	console.log("[SeriStyle|EarlyBird] Disabled all CSS transformers for this page.");