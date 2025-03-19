var SelSearchIcon = "#center>yt-searchbox>button>yt-icon";
var SelMicIcon = "#voice-search-button yt-icon";
var SelMenuIcon = "#guide-icon.ytd-masthead";
var SelNotificationsIcon = "yt-icon-button.ytd-notification-topbar-button-renderer yt-icon";
var _;

var DidUpdateNotifications = false;

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

// hotfix, will not be enough soon
var oldSearchBox = $("ytd-searchbox");
if (oldSearchBox) {
	$("yt-searchbox").style.display = "none";
	oldSearchBox.setAttribute("style", "display:flex!important");
}

$(SelSearchIcon).innerHTML = SvgSearch;
$(SelMicIcon).innerHTML = SvgMic;
$(SelMenuIcon).innerHTML = SvgMenu;

setInterval(function () {
	$$("path").forEach(Element => {
		var Exel = btoa(Element.attributes.d?.value);
		if (Exel == ExelVerified) {
			Element.attributes.d.value = PathVerified;
			var Svg = Element.closest("svg");
			Svg.setAttribute("height", "24");
			Svg.setAttribute("width", "24");
			Svg.setAttribute("viewBox", "0 0 24 24");
		} else if (Exel == ExelProducer) {
			Element.attributes.d.value = PathProducer;
			var Svg = Element.closest("svg");
			Svg.setAttribute("height", "24");
			Svg.setAttribute("width", "24");
			Svg.setAttribute("viewBox", "0 0 24 24");
		}
	});
	if (!DidUpdateNotifications && SeriStyleSettings.General.OldNotificationBell.Value)
		if (_ = $(SelNotificationsIcon)) {
			_.innerHTML = SvgNotifications;
			DidUpdateNotifications = true;
		}
}, SeriStyleSettings.Advanced.OldIconInterval.Value);

var FixShareIntv = setInterval(function () { // See above comment
	var ShareUrl = document.getElementById("share-url");
	if (!ShareUrl) return;
	var SuVal = ShareUrl.value;
	if (SuVal.includes("si=")) {
		var Uv = new URL(SuVal);
		var Sep = Uv.searchParams;
		Sep.delete("si");
		ShareUrl.value = OldU = Uv.toString();
	}
}, SeriStyleSettings.Advanced.ShareFixInterval.Value);

// TODO
/*new MutationObserver(function (Mutations) {
	console.log(Mutations[0].target.nodeValue);
}).observe(
	document.querySelector('title'),
	{ subtree: true, characterData: true, childList: true }
);*/

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