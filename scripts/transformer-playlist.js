/* jshint -W084 */

var SelShuffleBtn = ".wide-screen-form>.shuffle-button";
var SelMetadata = "div.metadata-text-wrapper.style-scope.ytd-playlist-header-renderer"; // Captures one
var SelAllButtons = "div.metadata-buttons-wrapper.style-scope.ytd-playlist-header-renderer"; // Captures one
var SelPlaybackToolbar = "div.play-menu.ytd-playlist-header-renderer"; // Captures one
var SelPlaybackButtons = SelPlaybackToolbar + ">ytd-button-renderer>yt-button-shape>a"; // Captures individual (2)
var SelMenuBtn = "ytd-menu-renderer.ytd-playlist-header-renderer";
var _;

var ExelPlaylistShare = "TTE1IDUuNjMgMjAuNjYgMTIgMTUgMTguMzdWMTRoLTFjLTMuOTYgMC03LjE0IDEtOS43NSAzLjA5IDEuODQtNC4wNyA1LjExLTYuNCA5Ljg5LTcuMWwuODYtLjEzVjUuNjNNMTQgM3Y2QzYuMjIgMTAuMTMgMy4xMSAxNS4zMyAyIDIxYzIuNzgtMy45NyA2LjQ0LTYgMTItNnY2bDgtOS04LTl6";

document.head.appendChild(DomUtils.BuildElement("style", {
	"innerText":
		(
			// Hide the built-in download button
			(SeriStyleSettings.Playlist.HideDownload.Value ? "ytd-download-playlist-button-renderer{display:none;}" : "") +
			// Toolbar fixes
			(!SeriStyleSettings.Playlist.LegacyToolbar.Value ?
				SelAllButtons + "{gap:8px;margin-bottom:8px;}" +
				SelAllButtons + " button{background:none;color:#909090;margin:0px;}" +
				SelAllButtons + ">.ytd-playlist-header-renderer{margin-right:0px;}" +

				SelPlaybackButtons + "{background:none;padding:0px;}" +
				SelPlaybackButtons + ">.yt-spec-button-shape-next__icon{margin:0px;display:flex;justify-content:center;}" +
				SelPlaybackButtons + " span.yt-core-attributed-string{display:none;}" +
				SelPlaybackButtons + " yt-icon div{color:#909090;}" +

				SelPlaybackToolbar + "{margin:0px;gap:8px;}" +
				SelPlaybackToolbar + ">ytd-button-renderer{margin:0px;width:36px;}" +
				SelPlaybackToolbar + ">ytd-button-renderer.play-button{display:none;}" // Use "Play All" thumbnail, like the good old times
				: "") +
			// 
			""
		).replaceAll(/(?<!!important);/g, "!important;"),
	"id": "seristyle-tf-playlist"
}));

// Old icons
var AllButtons = Array.from($(SelAllButtons).children);
var AtpBtn = null;
if (AtpBtn = FindByExel(AllButtons, ExelAddToPlaylist)) AtpBtn.querySelector("yt-icon").innerHTML = SvgAddToPlaylist; // TODO: Update selector
if (_ = FindByExel(AllButtons, ExelPlaylistShare)) _.querySelector("yt-icon").innerHTML = SvgShare;
if (_ = $(SelMenuBtn)) _.querySelector("yt-icon").innerHTML = SvgActionMenu;

// Proper toolbar positioning
if (!SeriStyleSettings.Playlist.LegacyToolbar.Value) {
	$(SelAllButtons)?.appendChild($(SelPlaybackToolbar));

	// There is an issue with this piece of code which restores the order: The selectors get invalidated because the shuffle button leaves its core component.
	/*var ShuffleBtn = $(SelPlaybackToolbar + ">ytd-button-renderer.shuffle-button");
	if (ShuffleBtn && AtpBtn) {
		AtpBtn.closest("ytd-toggle-button-renderer").after(ShuffleBtn);
	}*/
}