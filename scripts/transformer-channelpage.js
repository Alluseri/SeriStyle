// jshint -W014

var SelContents = "ytd-browse[page-subtype='channels'] #contents.ytd-rich-grid-renderer";
var SelHeader = "ytd-browse[page-subtype='channels'] #header.ytd-rich-grid-renderer";

document.head.appendChild(DomUtils.BuildElement("style", {
	"innerText":
		(
			(SeriStyleSettings.ChannelPage.Half.Value
				?
				SelContents + "{margin-top:36px;}" +
				SelHeader + ">.style-scope{margin-top:-48px;}"
				:
				SelContents + "{margin-top:48px;}" +
				SelHeader + ">.style-scope{margin-top:-56px;}"
			) +
			SelHeader + "{position:absolute;}" +
			SelContents + ">.style-scope{flex-direction:column;align-items:center;}" +
			SelHeader + ">.style-scope>.style-scope{background:none;}"
		).replaceAll(/(?<!!important);/g, "!important;"),
	"id": "seristyle-tf-channelpage"
}));

$(SelContents).firstElementChild.firstElementChild.firstElementChild.prepend($(SelHeader));