var SelSearchIcon = "#search-icon-legacy>yt-icon.ytd-searchbox";
var SelMicIcon = "#voice-search-button yt-icon";
var SelMenuIcon = "#guide-icon.ytd-masthead";

var SvgSearch = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" class="style-scope yt-icon"></path></g></svg>';
var SvgMic = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" class="style-scope yt-icon"></path></g></svg>';
var SvgMenu = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" class="style-scope yt-icon"></path></g></svg>';

document.head.appendChild(DomUtils.BuildElement("style", {
	"innerText":
		(
			SelSearchIcon + ">svg{color:#FFFFFF7F;}" +
			SelSearchIcon + "{opacity:0.6;}" +
			SelSearchIcon + ":hover{opacity:1;}" +
			(SeriStyleSettings.General.ResizeSearchBar.Value ?
				SelSearchIcon + "{width:20px;height:20px;}" +
				"#search-form{height:32px;}" +
				"#search-icon-legacy{height:32px;}"
				: "") +
			""
		).replaceAll(/(?<!!important);/g, "!important;"),
	"id": "seristyle-tf-general"
}));

$(SelSearchIcon).innerHTML = SvgSearch;
$(SelMicIcon).innerHTML = SvgMic;
$(SelMenuIcon).innerHTML = SvgMenu;

function FixContentHTML(Element, Metadata) {

}
async function FixContent(Element) {
	var BotPanel = elem.querySelector("ytd-thumbnail-overlay-bottom-panel-renderer");
	if (!BotPanel) return false;
	var URL = "https://www.youtube.com/watch?v=" + Element.querySelector("a#thumbnail").href.match(/watch\?v=(.+?)(?:$|&)/)[1];
	var NoEmbed = await (await fetch("https://noembed.com/embed?url=" + URL)).json();
	var Metadata = {
		"URL": URL,
		"Title": NoEmbed.title,
		"Author": NoEmbed.author_name,
		"AuthorURL": NoEmbed.author_url
	};
	if (!Metadata.Title) return false; // Everything else can and will be abstracted
	BotPanel.style.display = "none";
	return FixContentHTML(Element, Metadata);
}

