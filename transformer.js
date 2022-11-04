/* jshint esversion: 11 */

var Settings_UppercaseSubscribe = true;
var Settings_DisableAutoplayScroll = true;
var Settings_InjectedAddToPlaylistCallbackTime = 500;
var Settings_InjectedAddToPlaylistRetryTime = 500;
var Settings_InjectedSettleTime = 200;

var SelBottomRow = "#bottom-row";
var SelTopRow = "#top-row";
var SelOwner = "#owner";
var SelViews = "#info > span:nth-child(1)";
var SelFullDate = "#info-strings > yt-formatted-string";
var SelFlexibleButtonsBar = "#menu.ytd-watch-metadata>ytd-menu-renderer>#flexible-item-buttons";
var SelFlexibleButtons = SelFlexibleButtonsBar + ">.style-scope";//"#flexible-item-buttons>ytd-button-renderer";
var SelLikeSplitter = ".yt-spec-button-shape-next--size-m.yt-spec-button-shape-next--segmented-start::after";
var SelSubPassiveBtn = "#subscribe-button>ytd-subscribe-button-renderer>yt-button-shape>button";
var SelSubSubbedBtn = "#subscribe-button>ytd-subscribe-button-renderer>yt-button-shape>button.yt-spec-button-shape-next--tonal";
var SelSubUnsubbedBtn = "#subscribe-button>ytd-subscribe-button-renderer>yt-button-shape>button.yt-spec-button-shape-next--filled";
var SelContextMenuButtons = "#items > ytd-menu-service-item-renderer";
var SelActionButtonText = "yt-button-shape>button>div.cbox.yt-spec-button-shape-next--button-text-content>span";
var SelContentMenuOpen = "#button-shape > button";

var ExelCreateClip = "TTgsN2MwLDAuNTUtMC40NSwxLTEsMVM2LDcuNTUsNiw3YzAtMC41NSwwLjQ1LTEsMS0xUzgsNi40NSw4LDd6IE03LDE2Yy0wLjU1LDAtMSwwLjQ1LTEsMWMwLDAuNTUsMC40NSwxLDEsMXMxLTAuNDUsMS0xIEM4LDE2LjQ1LDcuNTUsMTYsNywxNnogTTEwLjc5LDguMjNMMjEsMTguNDRWMjBoLTMuMjdsLTUuNzYtNS43NmwtMS4yNywxLjI3QzEwLjg5LDE1Ljk3LDExLDE2LjQ3LDExLDE3YzAsMi4yMS0xLjc5LDQtNCw0IGMtMi4yMSwwLTQtMS43OS00LTRjMC0yLjIxLDEuNzktNCw0LTRjMC40MiwwLDAuODEsMC4wOCwxLjE5LDAuMmwxLjM3LTEuMzdsLTEuMTEtMS4xMUM4LDEwLjg5LDcuNTEsMTEsNywxMWMtMi4yMSwwLTQtMS43OS00LTQgYzAtMi4yMSwxLjc5LTQsNC00YzIuMjEsMCw0LDEuNzksNCw0QzExLDcuNDMsMTAuOTEsNy44NCwxMC43OSw4LjIzeiBNMTAuMDgsOC45NEw5LjY1LDguNWwwLjE5LTAuNThDOS45NSw3LjU4LDEwLDcuMjgsMTAsNyBjMC0xLjY1LTEuMzUtMy0zLTNTNCw1LjM1LDQsN2MwLDEuNjUsMS4zNSwzLDMsM2MwLjM2LDAsMC43My0wLjA3LDEuMDktMC4yMUw4LjcsOS41NWwwLjQ2LDAuNDZsMS4xMSwxLjExbDAuNzEsMC43MWwtMC43MSwwLjcxIEw4LjksMTMuOTFsLTAuNDMsMC40M2wtMC41OC0wLjE4QzcuNTUsMTQuMDUsNy4yNywxNCw3LDE0Yy0xLjY1LDAtMywxLjM1LTMsM2MwLDEuNjUsMS4zNSwzLDMsM3MzLTEuMzUsMy0zIGMwLTAuMzgtMC4wNy0wLjc1LTAuMjItMS4xMmwtMC4yNS0wLjYxTDEwLDE0LjhsMS4yNy0xLjI3bDAuNzEtMC43MWwwLjcxLDAuNzFMMTguMTUsMTlIMjB2LTAuMTVMMTAuMDgsOC45NHogTTE3LjczLDRIMjF2MS41NiBsLTUuNTIsNS41MmwtMi40MS0yLjQxTDE3LjczLDR6IE0xOC4xNSw1bC0zLjY3LDMuNjdsMSwxTDIwLDUuMTVWNUgxOC4xNXo=";
var ExelAddToPlaylist = "TTIyLDEzaC00djRoLTJ2LTRoLTR2LTJoNFY3aDJ2NGg0VjEzeiBNMTQsN0gydjFoMTJWN3ogTTIsMTJoOHYtMUgyVjEyeiBNMiwxNmg4di0xSDJWMTZ6";
var ExelOldAddToPlaylist = "TTE0IDEwSDJ2MmgxMnYtMnptMC00SDJ2MmgxMlY2em00IDh2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6TTIgMTZoOHYtMkgydjJ6";

var SvgAddToPlaylist = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z" class="style-scope yt-icon"></path></g></svg>';

// Init
var FindByExel = (Elements, ExelArg) => Elements.find(x => btoa(x?.querySelector("path")?.attributes.d?.value) == ExelArg);
var FindAllByExel = (Elements, ExelArg) => Elements.filter(x => btoa(x?.querySelector("path")?.attributes.d?.value) == ExelArg);
var IsVisible = (Element) => !!(Element && (Element.offsetWidth || Element.offsetHeight || Element.getClientRects().length));
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
async function WaitTime(ms) {
	return await new Promise(function (response, reject) {
		setTimeout(response, ms);
	});
}

// Inject styles
document.head.appendChild(DomUtils.BuildElement("style", {
	"innerText":
		SelTopRow + "{border-bottom-color:rgba(255,255,255,0.1);border-bottom-style:solid;border-bottom-width:1px;display:block;font-family:Roboto,Arial,sans-serif;font-size:10px;padding-bottom:8px;padding-left:0px;padding-right:0px;padding-top:20px;align-items:center;padding-top:0px;}" +
		"#seristyle_oldpanel{display:block;font-family:Roboto,Arial,sans-serif;font-size:14px;font-weight:400;letter-spacing:0.2px;line-height:20px;max-height:20px;overflow:hidden}" +
		".seristyle_subpanel{color:rgb(170,170,170);display:inline;font-family:Roboto,Arial,sans-serif;font-size:14px;font-weight:400;height:auto;letter-spacing:0.2px;line-height:20px;text-size-adjust:100%;width:auto;}" +
		".seristyle_firstpanel::after{content:'•';margin:0px 4px;}" +
		//SelCreateClip+"{display:none;user-select:none;}" +
		SelLikeSplitter + "{display:none;}" +
		SelOwner + "{justify-content:space-between;}" +
		SelSubPassiveBtn + "{border-radius:3px;" + (Settings_UppercaseSubscribe ? "text-transform:uppercase;" : "") + "}" +
		SelSubSubbedBtn + "{background-color:#2C2C2C;color:#A8A8A8;}" +
		SelSubUnsubbedBtn + "{background-color:#C00;color:#FFF;}"
}));

// Move #owner
document.querySelector(SelBottomRow).prepend(document.querySelector(SelOwner)); // Breaks if too early

// Create span
document.querySelector(SelTopRow).prepend(DomUtils.BuildElement("div", { id: "seristyle_oldpanel" }, [
	(x => ((x.className = (x.className + " seristyle_subpanel seristyle_firstpanel").replace("yt-formatted-string ", "")), x))(document.querySelector(SelViews)),
	(x => ((x.className += " seristyle_subpanel"), x))(document.querySelector(SelFullDate))
]));

// Sacrifice "Create clip"
var SeriSaveLabel = null;
var SeriClipLabel = null;
var Observer = new MutationObserver(async Mutations => {
	try {
		// Wait for changes to settle
		await WaitTime(Settings_InjectedSettleTime);

		var AllButtons = Array.from(document.querySelectorAll(SelFlexibleButtons));
		var InjectedSvgElements = FindAllByExel(AllButtons, ExelOldAddToPlaylist);
		if (InjectedSvgElements.length > 1) {
			InjectedSvgElements.find(x.innerText == SeriClipLabel).remove();
		}
		var InjectedSvgElement = InjectedSvgElements[0];
		var AddedButtons = [];
		Mutations.forEach(Mutation => {
			for (let i = 0; i < Mutation.addedNodes.length; i++) {
				AddedButtons.push(Mutation.addedNodes[i]);
			}
		});
		if (AddedButtons.length == 0) return;
		var AddToPlaylist = FindByExel(AddedButtons, ExelAddToPlaylist);
		var CreateClip = FindByExel(AllButtons, ExelCreateClip) || FindByExel(AddedButtons, ExelCreateClip);
		if (AddToPlaylist && !void (SeriSaveLabel = AddToPlaylist.innerText) && (IsVisible(AddToPlaylist) || AddToPlaylist.remove())) // Means there was AddToPlaylist injected
			if (InjectedSvgElement)
				InjectedSvgElement.remove(); // Remove modded CreateClip
			else CreateClip?.remove(); // Remove unmodded CreateClip
		else // It wasn't injected
			if (InjectedSvgElement) return; // Modded CreateClip is doing the job, no need to reapply SVG
			else if (CreateClip && IsVisible(CreateClip)) {
				SeriClipLabel = CreateClip.innerText;
				var InteractBtn = FindByExel(Array.from(document.querySelectorAll(SelContextMenuButtons)), ExelAddToPlaylist);
				if (!InteractBtn) {
					var Neee = document.querySelector(SelContentMenuOpen);
					Neee?.click();
					await WaitTime(Settings_InjectedAddToPlaylistCallbackTime);
					InteractBtn = FindByExel(Array.from(document.querySelectorAll(SelContextMenuButtons)), ExelAddToPlaylist);
					Neee?.click();
					if (!InteractBtn) {
						await WaitTime(Settings_InjectedAddToPlaylistCallbackTime);
						Neee?.click();
						await WaitTime(Settings_InjectedAddToPlaylistCallbackTime);
						InteractBtn = FindByExel(Array.from(document.querySelectorAll(SelContextMenuButtons)), ExelAddToPlaylist);
						Neee?.click();
						if (!InteractBtn)
							return console.log("[SeriStyle] Unable to inject AddToPlaylist(no interact found).");
					}
				}

				AddToPlaylist = CreateClip;

				AddToPlaylist.onclick = async () => {
					var InteractBtn = FindByExel(Array.from(document.querySelectorAll(SelContextMenuButtons)), ExelAddToPlaylist);
					if (!InteractBtn) {
						document.querySelector(SelContentMenuOpen)?.click();
						await WaitTime(500);
						InteractBtn = FindByExel(Array.from(document.querySelectorAll(SelContextMenuButtons)), ExelAddToPlaylist);
						if (!InteractBtn)
							return console.log("[SeriStyle] Injected AddToPlaylist invocation failed(no interact found).");
					}
					InteractBtn.click();
				};

				AddToPlaylist.querySelector(SelActionButtonText).innerText = InteractBtn.innerText;
				AddToPlaylist.lastElementChild.firstElementChild.innerText = `\n  ${InteractBtn.innerText}\n`;
			} else return console.log("[SeriStyle] Unable to inject AddToPlaylist(no donor CreateClip found)");
		// Inject SVG
		AddToPlaylist.querySelector("yt-icon").innerHTML = SvgAddToPlaylist;
	} catch (e) {
		console.log(e);
	}
});
Observer.observe($(SelFlexibleButtonsBar), {
	childList: true
});

if (Settings_DisableAutoplayScroll)
	setInterval(() => {
		if ((document.documentElement.scrollTop || document.body.scrollTop) < 300) return;
		var CancelBtn = document.querySelector("#movie_player > div.ytp-autonav-endscreen-countdown-overlay > div > div.ytp-autonav-endscreen-button-container > button");
		if (CancelBtn != null && IsVisible(CancelBtn)) CancelBtn.click();
	}, 1000);