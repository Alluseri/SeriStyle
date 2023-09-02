var SelSearchIcon = "#search-icon-legacy>yt-icon.ytd-searchbox";
var SelMicIcon = "#voice-search-button yt-icon";
var SelMenuIcon = "#guide-icon.ytd-masthead";
var _;

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

setInterval(function() { // It's not my problem that everyone is stupid enough not to fix Subtree MutationObserver for the whole existence of this class
	$$("path").forEach(Element => {
		var Exel = btoa(Element.attributes.d?.value);
		if (Exel == ExelVerified) {
			Element.attributes.d.value = PathVerified;
		} else if (Exel == ExelProducer) {
			Element.attributes.d.value = PathProducer;
		}
	});
}, SeriStyleSettings.Advanced.OldIconInterval.Value);

var ShareUrl;
var OldU;
var FixShareIntv = setInterval(function() {
	/*var Wax = $("body > ytd-app > ytd-popup-container > tp-yt-paper-dialog");
	if (Wax) {
		Wax.querySelector("ytd-unified-share-panel-renderer").querySelector("#contents").firstElementChild.querySelector("#copy-link").firstElementChild.firstElementChild.firstElementChild.value = "thighs";
	}*/

	if (!ShareUrl) if (!(ShareUrl = document.getElementById("share-url"))) return; // It's a singleton from my observations at least
	var SuVal = ShareUrl.value;
	if (SuVal != OldU && SuVal.includes("?si=")) {
		ShareUrl.value = OldU = SuVal.split("?si=")[0];
	}
}, SeriStyleSettings.Advanced.ShareFixInterval.Value);

function FixContentHTML(Element, Metadata) {
	console.log(Element);
	console.log(Metadata);

	var Title = Element.querySelector("h3>a");
	Title.innerText = Metadata.Title;
	Title.href = Metadata.URL;
}
async function FixContent(Element) {
	var BotPanel = Element.querySelector("ytd-thumbnail-overlay-bottom-panel-renderer");
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