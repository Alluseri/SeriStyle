/* jshint esversion: 11 */

var Settings_UppercaseSubscribe = true;
var Settings_DisableAutoplayScroll = true;
var Settings_AlternativeDisableAutoplayScroll = false;
var Settings_AlwaysRemoveCreateClip = true;
var Settings_InjectedAddToPlaylistCallbackTime = 300;
var Settings_InjectedAddToPlaylistRetryTime = 300;
var Settings_InjectedSettleTime = 100;
var Settings_ScrollWatcherInterval = 1000; // Non-alternative needs 1k at most
var Settings_ScrollThreshold = 100;

var Localize_AutoplaySuspended = "Автовоспроизведение приостановлено.";//"Autoplay suspended.";

var SelBottomRow = "#bottom-row";
var SelTopRow = "#top-row";
var SelOwner = "#owner";
var SelViews = "#info > span:nth-child(1)";
var SelFullDate = "#info-strings > yt-formatted-string";
var SelFlexibleButtonsBar = "#menu.ytd-watch-metadata #flexible-item-buttons";
var SelFlexibleButtons = SelFlexibleButtonsBar + ">.style-scope";
var SelLikeSplitter = ".yt-spec-button-shape-next--size-m.yt-spec-button-shape-next--segmented-start::after";
var SelSubPassiveBtn = "#subscribe-button yt-button-shape>button";
var SelSubSubbedBtn = SelSubPassiveBtn + ".yt-spec-button-shape-next--tonal";
var SelSubUnsubbedBtn = SelSubPassiveBtn + ".yt-spec-button-shape-next--filled";
var SelContextMenuButtons = "#items>ytd-menu-service-item-renderer";
var SelContentMenuOpen = "#button-shape>button"; // Warning: Has a shadow element
var SelShareBtn = "#actions-inner #top-level-buttons-computed>ytd-button-renderer";
var SelActionBarButtons = "#menu:first-child button.yt-spec-button-shape-next";

var ExelCreateClip = "TTgsN2MwLDAuNTUtMC40NSwxLTEsMVM2LDcuNTUsNiw3YzAtMC41NSwwLjQ1LTEsMS0xUzgsNi40NSw4LDd6IE03LDE2Yy0wLjU1LDAtMSwwLjQ1LTEsMWMwLDAuNTUsMC40NSwxLDEsMXMxLTAuNDUsMS0xIEM4LDE2LjQ1LDcuNTUsMTYsNywxNnogTTEwLjc5LDguMjNMMjEsMTguNDRWMjBoLTMuMjdsLTUuNzYtNS43NmwtMS4yNywxLjI3QzEwLjg5LDE1Ljk3LDExLDE2LjQ3LDExLDE3YzAsMi4yMS0xLjc5LDQtNCw0IGMtMi4yMSwwLTQtMS43OS00LTRjMC0yLjIxLDEuNzktNCw0LTRjMC40MiwwLDAuODEsMC4wOCwxLjE5LDAuMmwxLjM3LTEuMzdsLTEuMTEtMS4xMUM4LDEwLjg5LDcuNTEsMTEsNywxMWMtMi4yMSwwLTQtMS43OS00LTQgYzAtMi4yMSwxLjc5LTQsNC00YzIuMjEsMCw0LDEuNzksNCw0QzExLDcuNDMsMTAuOTEsNy44NCwxMC43OSw4LjIzeiBNMTAuMDgsOC45NEw5LjY1LDguNWwwLjE5LTAuNThDOS45NSw3LjU4LDEwLDcuMjgsMTAsNyBjMC0xLjY1LTEuMzUtMy0zLTNTNCw1LjM1LDQsN2MwLDEuNjUsMS4zNSwzLDMsM2MwLjM2LDAsMC43My0wLjA3LDEuMDktMC4yMUw4LjcsOS41NWwwLjQ2LDAuNDZsMS4xMSwxLjExbDAuNzEsMC43MWwtMC43MSwwLjcxIEw4LjksMTMuOTFsLTAuNDMsMC40M2wtMC41OC0wLjE4QzcuNTUsMTQuMDUsNy4yNywxNCw3LDE0Yy0xLjY1LDAtMywxLjM1LTMsM2MwLDEuNjUsMS4zNSwzLDMsM3MzLTEuMzUsMy0zIGMwLTAuMzgtMC4wNy0wLjc1LTAuMjItMS4xMmwtMC4yNS0wLjYxTDEwLDE0LjhsMS4yNy0xLjI3bDAuNzEtMC43MWwwLjcxLDAuNzFMMTguMTUsMTlIMjB2LTAuMTVMMTAuMDgsOC45NHogTTE3LjczLDRIMjF2MS41NiBsLTUuNTIsNS41MmwtMi40MS0yLjQxTDE3LjczLDR6IE0xOC4xNSw1bC0zLjY3LDMuNjdsMSwxTDIwLDUuMTVWNUgxOC4xNXo=";
var ExelAddToPlaylist = "TTIyLDEzaC00djRoLTJ2LTRoLTR2LTJoNFY3aDJ2NGg0VjEzeiBNMTQsN0gydjFoMTJWN3ogTTIsMTJoOHYtMUgyVjEyeiBNMiwxNmg4di0xSDJWMTZ6";
var ExelInjectedAddToPlaylist = "TTE0IDEwSDJ2MmgxMnYtMnptMC00SDJ2MmgxMlY2em00IDh2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6TTIgMTZoOHYtMkgydjJ6";

var SvgAddToPlaylist = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z" class="style-scope yt-icon"></path></g></svg>';
var SvgShare = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g mirror-in-rtl="" class="style-scope yt-icon"><path d="M14 9V3L22 12L14 21V15C8.44 15 4.78 17.03 2 21C3.11 15.33 6.22 10.13 14 9Z" class="style-scope yt-icon"></path></g></svg>';

// Init
var FindByExel = (Elements, ExelArg) => Elements.find(x => btoa(x?.querySelector("path")?.attributes.d?.value) == ExelArg);
var FindAllByExel = (Elements, ExelArg) => Elements.filter(x => btoa(x?.querySelector("path")?.attributes.d?.value) == ExelArg);
var Exists = (Element) => Element.parentElement != null;
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
		SelTopRow + "{display:block;font-family:Roboto,Arial,sans-serif;font-size:10px;padding-bottom:8px;padding-top:20px;align-items:center;}" +
		"#seristyle_oldpanel{display:block;font-family:Roboto,Arial,sans-serif;font-size:14px;font-weight:400;letter-spacing:0.2px;line-height:20px;max-height:20px;overflow:hidden}" +
		".seristyle_subpanel{color:rgb(170,170,170);display:inline;font-family:Roboto,Arial,sans-serif;font-size:14px;font-weight:400;height:auto;letter-spacing:0.2px;line-height:20px;text-size-adjust:100%;width:auto;}" +
		".seristyle_firstpanel::after{content:'•';margin:0px 4px;}" +
		SelLikeSplitter + "{display:none;}" +
		SelOwner + "{justify-content:space-between;}" +
		SelSubPassiveBtn + "{border-radius:3px;" + (Settings_UppercaseSubscribe ? "text-transform:uppercase;" : "") + "}" +
		SelSubSubbedBtn + "{background-color:#2C2C2C;color:#A8A8A8;}" +
		SelSubUnsubbedBtn + "{background-color:#C00;color:#FFF;}" +
		"#seristyle_autoplay{color:rgba(255, 255, 255, 0.7);direction:ltr;font-family:\"YouTube Noto\", Roboto, Arial, Helvetica, sans-serif;font-size:14px;font-weight:500;line-height:18px;text-align:left;text-size-adjust:100%;}" +
		SelActionBarButtons + "{background-color:#0000}" +
		""
}));

// Move #owner
document.querySelector(SelBottomRow).prepend(document.querySelector(SelOwner)); // Breaks if too early, fix with DOMContentLoaded or smth

// Create span
document.querySelector(SelTopRow).prepend(DomUtils.BuildElement("div", { id: "seristyle_oldpanel" }, [
	(x => ((x.className = (x.className + " seristyle_subpanel seristyle_firstpanel").replace("yt-formatted-string ", "")), x))(document.querySelector(SelViews)),
	(x => ((x.className += " seristyle_subpanel"), x))(document.querySelector(SelFullDate))
]));

// Apply old SVG to Share(it's in an exclusive container and is technically not a part of the action bar)
document.querySelector(SelShareBtn).querySelector("yt-icon").innerHTML = SvgShare;

// Setup observer
var ActionBarEventListeners = [
	async (Inserted, Removed, Remained) => {
		if (Inserted.length > 0 && Inserted.some(Element => !IsVisible(Element))) return;
		var AddToPlaylist = FindByExel(Remained, ExelAddToPlaylist) || FindByExel(Inserted, ExelAddToPlaylist);
		var CreateClip = FindByExel(Remained, ExelCreateClip) || FindByExel(Inserted, ExelCreateClip);
		var Modded = FindByExel(Remained, ExelInjectedAddToPlaylist);
		if (AddToPlaylist) { // AddToPlaylist existed before the patch or is inserted
			if (Settings_AlwaysRemoveCreateClip) // we can remove CC if requested
				CreateClip?.remove();
			Modded?.remove(); // remove the modded element to get ATP remodded
		} else if (!Modded && CreateClip) { // ATP wasn't inserted, we have CC and no injected elements
			AddToPlaylist = CreateClip; // ATP is now CC(mCC)

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
						return console.log("[SeriStyle|ERROR] Can't run Mod-ATP: No interact found.");
				}
			}

			AddToPlaylist.onclick = async () => {
				var InteractBtn = FindByExel(Array.from(document.querySelectorAll(SelContextMenuButtons)), ExelAddToPlaylist);
				if (!InteractBtn) {
					var OpenMenuBtn = document.querySelector(SelContentMenuOpen);
					if (!OpenMenuBtn)
						return console.log("[SeriStyle|ERROR] Mod-ATP runtime: No menu button found.");
					OpenMenuBtn.click();
					await WaitTime(Settings_InjectedAddToPlaylistCallbackTime);
					InteractBtn = FindByExel(Array.from(document.querySelectorAll(SelContextMenuButtons)), ExelAddToPlaylist);
					if (!InteractBtn)
						return console.log("[SeriStyle|ERROR] Mod-ATP runtime: No interact found.");
					OpenMenuBtn.click();
				}
				InteractBtn.click();
			};

			AddToPlaylist.querySelector("span").innerText = InteractBtn.innerText;
			AddToPlaylist.lastElementChild.firstElementChild.innerText = `\n  ${InteractBtn.innerText}\n`;
		} else return console.log("[SeriStyle|ERROR] Can't run Mod-ATP: No available routes.");
		AddToPlaylist.querySelector("yt-icon").innerHTML = SvgAddToPlaylist;
	}
];

var ActionBarObserver = new MutationObserver(async Mutations => {
	try {
		// Wait for changes to settle
		await WaitTime(Settings_InjectedSettleTime);

		var Inserted = [];
		var Removed = [];
		var Remained = [];
		Mutations.forEach(Mutation => {
			for (let i = 0; i < Mutation.addedNodes.length; i++) {
				Inserted.push(Mutation.addedNodes[i]);
			}
			for (let i = 0; i < Mutation.removedNodes.length; i++) {
				Removed.push(Mutation.removedNodes[i]);
			}
		});
		Remained = Array.from(document.querySelectorAll(SelFlexibleButtons)).filter(Element => !(Inserted.some(IElement => Element.isEqualNode(IElement)) || Inserted.some(RElement => Element.isEqualNode(RElement))));
		ActionBarEventListeners.forEach(Listener => Listener(Inserted, Removed, Remained));
	} catch (e) {
		console.log(e);
	}
});
ActionBarObserver.observe(document.querySelector(SelFlexibleButtonsBar), {
	childList: true
});

ActionBarEventListeners.forEach(Listener => Listener([], [], document.querySelector(SelFlexibleButtonsBar))); // For some reason this prefers not to work

var OriginalDateNow = Date.now;
if (Settings_DisableAutoplayScroll)
	setInterval(Settings_AlternativeDisableAutoplayScroll ? () => {
		var AutonavLabel = document.querySelector(".ytp-autonav-endscreen-upnext-header");
		if (AutonavLabel) {
			var SeriLabel = document.querySelector("#seristyle_autoplay") || DomUtils.BuildElement("span", { id: "seristyle_autoplay", innerText: Localize_AutoplaySuspended }, [], Element => {
				Element.style.display = "none";
				AutonavLabel.parentElement.prepend(Element);
				return Element;
			});
			if ((document.documentElement.scrollTop || document.body.scrollTop) > Settings_ScrollThreshold) {
				AutonavLabel.style.display = "none";
				SeriLabel.style.display = "block";
				Date.now = () => 0;
			} else {
				AutonavLabel.style.display = "";
				SeriLabel.style.display = "none";
				Date.now = OriginalDateNow;
			}
		}
	} : () => {
		if ((document.documentElement.scrollTop || document.body.scrollTop) < Settings_ScrollThreshold) return;
		var CancelBtn = document.querySelector("#movie_player > div.ytp-autonav-endscreen-countdown-overlay > div > div.ytp-autonav-endscreen-button-container > button");
		if (CancelBtn != null && IsVisible(CancelBtn)) CancelBtn.click();
	}, Settings_ScrollWatcherInterval);