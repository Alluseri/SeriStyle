/* jshint -W084 */

var SelShuffleBtn = ".wide-screen-form>.shuffle-button";
var SelAllButtons = "div.metadata-buttons-wrapper.style-scope.ytd-playlist-header-renderer";
var SelMenuBtn = "ytd-menu-renderer.ytd-playlist-header-renderer";
var _;

document.head.appendChild(DomUtils.BuildElement("style", {
	"innerText":
		(
			// Self explanatory
			(SeriStyleSettings.Playlist.HideDownload.Value ? "ytd-download-playlist-button-renderer{display:none;}" : "") +
			(SeriStyleSettings.Playlist.HideBackground.Value ? SelAllButtons + " button{background:none;}" : "") +
			(SeriStyleSettings.Playlist.HideInteract.Value ?
				// Hide Play & Shuffle
				"div.wide-screen-form.play-menu.ytd-playlist-header-renderer>ytd-button-renderer{display:none;}"
				: "") +
			//
			""
		).replaceAll(/(?<!!important);/g, "!important;"),
	"id": "seristyle-tf-playlist"
}));

// Old icons
var AllButtons = Array.from($(SelAllButtons).children);
if (_ = FindByExel(AllButtons, ExelAddToPlaylist)) _.querySelector("yt-icon").innerHTML = SvgAddToPlaylist;
if (_ = FindByExel(AllButtons, ExelShare)) _.querySelector("yt-icon").innerHTML = SvgShare;
if (_ = $(SelMenuBtn)) _.querySelector("yt-icon").innerHTML = SvgActionMenu;