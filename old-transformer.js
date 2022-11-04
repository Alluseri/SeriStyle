/* jshint esversion: 11 */
/* jshint -W103 */
/* jshint -W093 */

// VERY IMPORTANT TODO: Update view every time a new page is here
var SETTINGS_LongDate = true;
var SETTINGS_DataLabelFontSize = "16px";
var SETTINGS_DisableHeatMap = false; // TODO
var SETTINGS_CaptializeSubscribe = false; // TODO
var SETTINGS_FlipThreeDots = true;

var HookMap = x => [].__proto__.map.bind(x);
var DomUtils = {
	"GetValue": (Element) => Element.value || Element.innerText,
	"BuildElement": function (Tag, Characteristics, Inner, Callback) {
		var elem = document.createElement(Tag);
		for (let _ in (Characteristics || {})) {
			elem[_] = Characteristics[_];
		}
		for (let _ in (Inner || [])) {
			elem.appendChild(Inner[_]);
		}
		return (Callback || ((x) => x))(elem);
	}
};

// Subbed: "yt-spec-button-shape-next yt-spec-button-shape-next--tonal yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m "
// Not subbed: "yt-spec-button-shape-next yt-spec-button-shape-next--filled yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m "
document.head.appendChild(DomUtils.BuildElement("style", {
	"innerText": ".yt-spec-button-shape-next--size-m.yt-spec-button-shape-next--segmented-start::after{display:none;}\n" + // Remove like/dislike pseudo splitter
		"div#owner{justify-content:space-between;}" + // Reposition subscribe
		"#subscribe-button>ytd-subscribe-button-renderer>yt-button-shape>button{border-radius:3px;}" + // Bring back proper rounding for subscribe
		"#subscribe-button > ytd-subscribe-button-renderer > yt-button-shape > button.yt-spec-button-shape-next--tonal{background-color:#2C2C2C;color:#A8A8A8;}" + // Subbed
		"#subscribe-button > ytd-subscribe-button-renderer > yt-button-shape > button.yt-spec-button-shape-next--filled{background-color:#CC0100;color:#FFF;}" // Not subbed
}));

var MDCB = (MDCB, MetadataElement, $) => {
	if (MetadataElement == null) return setTimeout(MDCB, 50, MDCB, $("#original-info.ytd-watch-metadata"), $);

	function FixMenuRenderer($) { // TODO: Normalize all margins to at most 20px
		var Buttons = $("ytd-menu-renderer.ytd-watch-metadata").querySelectorAll("button");
		for (var ButtonIndex in Buttons) {
			var Button = Buttons[ButtonIndex];
			if (Button.constructor.name != "HTMLButtonElement") continue;
			Button.style.backgroundColor = "#0000";
			Button.style.paddingLeft = Button.style.paddingRight = "9px";
			Button.style.borderRadius = "0px";
			if (Button.className == "yt-spec-button-shape-next yt-spec-button-shape-next--tonal yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-button yt-spec-button-shape-next--segmented-end ") {
				Button.style.width = "33px";
				Button.style.paddingLeft = "11px";
				Button.style.marginLeft = "4px";
			} else if (Button.className == "yt-spec-button-shape-next yt-spec-button-shape-next--tonal yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-button ") {
				Button.style.marginLeft = "-5px";
			}
		}
	}

	var MetadataViews = MetadataElement.children[0].innerText;
	var MetadataDate = SETTINGS_LongDate ? $("#info-strings > yt-formatted-string").innerText : MetadataElement.children[2].innerText;

	var Splitter = DomUtils.BuildElement("hr", {}, null, x => {
		x.style.backgroundColor = "#2E2D2D";
		x.style.height = "1px";
		x.style.marginTop = "6px";
		x.style.boxShadow = "0px 0px 1px 0px #2E2D2D";
		return x;
	});
	var Title = $("#title.ytd-watch-metadata");
	var DataLabel = DomUtils.BuildElement("span", { innerText: MetadataViews + " • " + MetadataDate }, null, x => {
		x.style.color = "#B5B5B5";
		x.style.position = "absolute";
		x.style.fontSize = SETTINGS_DataLabelFontSize;
		x.style.fontWeight = 400;
		return x;
	});
	// Inject splitter
	Title.after(Splitter);
	// Inject data label
	Title.after(DataLabel);
	// Move actions
	Splitter.before($("#actions.ytd-watch-metadata"));
	// Rotate three dots
	if (SETTINGS_FlipThreeDots) $("#button-shape > button > div").style.transform = "rotate(90deg)";
	// Full transparency on action buttons + margination
	FixMenuRenderer($);
	setTimeout(($, DissolveFront) => {
		FixMenuRenderer($);

		DissolveFront();
	}, 500, $, DissolveFront);
	return true;
};
setTimeout(MDCB, 50, MDCB, $("#original-info.ytd-watch-metadata"), $);