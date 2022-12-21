/*
	ゼロの位置を指した針が
	反撃のTime Limit
	レールを外れ
	ひた突き進め

	This transformer does not work without this comment, do not remove
*/

/* jshint -W084 */

var SelBottomRow = "#bottom-row";
var SelTopRow = "#top-row.ytd-watch-metadata";
var SelOwner = "#above-the-fold #owner"; // Basing off a row breaks in circumstances.
var SelViews = ".view-count";
var SelFullDate = "#info-strings>yt-formatted-string";
var SelFlexibleButtonsBar = "#menu.ytd-watch-metadata #flexible-item-buttons";
var SelFlexibleButtons = SelFlexibleButtonsBar + ">.style-scope";
var SelContextMenuButtons = "#items>ytd-menu-service-item-renderer";
var SelContextMenuOpen = "#actions #button-shape button";
var SelShareBtn = "#actions-inner #top-level-buttons-computed>ytd-button-renderer";
var SelLikeButtons = "#actions-inner ytd-segmented-like-dislike-button-renderer button";
var SelDescription = "#description.ytd-watch-metadata";
var SelDropdown = "tp-yt-iron-dropdown.ytd-popup-container";
var SelSubButton = "#owner>#subscribe-button";
var SelOwnerPartOne = "#owner>ytd-video-owner-renderer>a";
var SelOwnerPartTwo = "#owner>ytd-video-owner-renderer>#upload-info";
var SelOwnerUnder = "#owner>ytd-video-owner-renderer";

var ExelCreateClip = "TTgsN2MwLDAuNTUtMC40NSwxLTEsMVM2LDcuNTUsNiw3YzAtMC41NSwwLjQ1LTEsMS0xUzgsNi40NSw4LDd6IE03LDE2Yy0wLjU1LDAtMSwwLjQ1LTEsMWMwLDAuNTUsMC40NSwxLDEsMXMxLTAuNDUsMS0xIEM4LDE2LjQ1LDcuNTUsMTYsNywxNnogTTEwLjc5LDguMjNMMjEsMTguNDRWMjBoLTMuMjdsLTUuNzYtNS43NmwtMS4yNywxLjI3QzEwLjg5LDE1Ljk3LDExLDE2LjQ3LDExLDE3YzAsMi4yMS0xLjc5LDQtNCw0IGMtMi4yMSwwLTQtMS43OS00LTRjMC0yLjIxLDEuNzktNCw0LTRjMC40MiwwLDAuODEsMC4wOCwxLjE5LDAuMmwxLjM3LTEuMzdsLTEuMTEtMS4xMUM4LDEwLjg5LDcuNTEsMTEsNywxMWMtMi4yMSwwLTQtMS43OS00LTQgYzAtMi4yMSwxLjc5LTQsNC00YzIuMjEsMCw0LDEuNzksNCw0QzExLDcuNDMsMTAuOTEsNy44NCwxMC43OSw4LjIzeiBNMTAuMDgsOC45NEw5LjY1LDguNWwwLjE5LTAuNThDOS45NSw3LjU4LDEwLDcuMjgsMTAsNyBjMC0xLjY1LTEuMzUtMy0zLTNTNCw1LjM1LDQsN2MwLDEuNjUsMS4zNSwzLDMsM2MwLjM2LDAsMC43My0wLjA3LDEuMDktMC4yMUw4LjcsOS41NWwwLjQ2LDAuNDZsMS4xMSwxLjExbDAuNzEsMC43MWwtMC43MSwwLjcxIEw4LjksMTMuOTFsLTAuNDMsMC40M2wtMC41OC0wLjE4QzcuNTUsMTQuMDUsNy4yNywxNCw3LDE0Yy0xLjY1LDAtMywxLjM1LTMsM2MwLDEuNjUsMS4zNSwzLDMsM3MzLTEuMzUsMy0zIGMwLTAuMzgtMC4wNy0wLjc1LTAuMjItMS4xMmwtMC4yNS0wLjYxTDEwLDE0LjhsMS4yNy0xLjI3bDAuNzEtMC43MWwwLjcxLDAuNzFMMTguMTUsMTlIMjB2LTAuMTVMMTAuMDgsOC45NHogTTE3LjczLDRIMjF2MS41NiBsLTUuNTIsNS41MmwtMi40MS0yLjQxTDE3LjczLDR6IE0xOC4xNSw1bC0zLjY3LDMuNjdsMSwxTDIwLDUuMTVWNUgxOC4xNXo=";
var ExelAddToPlaylist = "TTIyLDEzaC00djRoLTJ2LTRoLTR2LTJoNFY3aDJ2NGg0VjEzeiBNMTQsN0gydjFoMTJWN3ogTTIsMTJoOHYtMUgyVjEyeiBNMiwxNmg4di0xSDJWMTZ6";
var ExelInjectedAddToPlaylist = "TTE0IDEwSDJ2MmgxMnYtMnptMC00SDJ2MmgxMlY2em00IDh2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6TTIgMTZoOHYtMkgydjJ6";

var SvgCreateClip = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M8,7c0,0.55-0.45,1-1,1S6,7.55,6,7c0-0.55,0.45-1,1-1S8,6.45,8,7z M7,16c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1s1-0.45,1-1 C8,16.45,7.55,16,7,16z M10.79,8.23L21,18.44V20h-3.27l-5.76-5.76l-1.27,1.27C10.89,15.97,11,16.47,11,17c0,2.21-1.79,4-4,4 c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4c0.42,0,0.81,0.08,1.19,0.2l1.37-1.37l-1.11-1.11C8,10.89,7.51,11,7,11c-2.21,0-4-1.79-4-4 c0-2.21,1.79-4,4-4c2.21,0,4,1.79,4,4C11,7.43,10.91,7.84,10.79,8.23z M10.08,8.94L9.65,8.5l0.19-0.58C9.95,7.58,10,7.28,10,7 c0-1.65-1.35-3-3-3S4,5.35,4,7c0,1.65,1.35,3,3,3c0.36,0,0.73-0.07,1.09-0.21L8.7,9.55l0.46,0.46l1.11,1.11l0.71,0.71l-0.71,0.71 L8.9,13.91l-0.43,0.43l-0.58-0.18C7.55,14.05,7.27,14,7,14c-1.65,0-3,1.35-3,3c0,1.65,1.35,3,3,3s3-1.35,3-3 c0-0.38-0.07-0.75-0.22-1.12l-0.25-0.61L10,14.8l1.27-1.27l0.71-0.71l0.71,0.71L18.15,19H20v-0.15L10.08,8.94z M17.73,4H21v1.56 l-5.52,5.52l-2.41-2.41L17.73,4z M18.15,5l-3.67,3.67l1,1L20,5.15V5H18.15z" class="style-scope yt-icon"></path></g></svg>';
var SvgAddToPlaylist = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z" class="style-scope yt-icon"></path></g></svg>';
var SvgShare = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g mirror-in-rtl="" class="style-scope yt-icon"><path d="M14 9V3L22 12L14 21V15C8.44 15 4.78 17.03 2 21C3.11 15.33 6.22 10.13 14 9Z" class="style-scope yt-icon"></path></g></svg>';
var SvgLike = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" class="style-scope yt-icon"></path></g></svg>';
var SvgDislike = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z" class="style-scope yt-icon"></path></g></svg>';
var SvgMenu = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><circle cx="5" cy="12" r="2" class="style-scope yt-icon"></circle><circle cx="12" cy="12" r="2" class="style-scope yt-icon"></circle><circle cx="19" cy="12" r="2" class="style-scope yt-icon"></circle></g></svg>';

// Init
var _;
var FindByExel = (Elements, ExelArg) => Elements.find(x => btoa(x?.querySelector("path")?.attributes.d?.value) == ExelArg);
var FindAllByExel = (Elements, ExelArg) => Elements.filter(x => btoa(x?.querySelector("path")?.attributes.d?.value) == ExelArg);
var Exists = (Element) => Element.parentElement != null;
var IsVisible = (Element) => !!(Element && (Element.offsetWidth || Element.offsetHeight || Element.getClientRects().length));
async function WaitTime(ms) {
	return await new Promise(function (response, reject) {
		setTimeout(response, ms);
	});
}

// Inject styles
document.head.appendChild(DomUtils.BuildElement("style", {
	"innerText":
		(
			// Panel things
			SelTopRow + "{margin-top:4px;display:flex;align-items:center;border-bottom-color:rgba(255,255,255,0.1);border-bottom-style:solid;border-bottom-width:1px;font-family:Roboto,Arial,sans-serif;font-size:10px;padding-bottom:8px;align-items:center;}" +
			"#seristyle_oldpanel{display:block;font-family:Roboto,Arial,sans-serif;font-size:14px;font-weight:400;letter-spacing:0.2px;line-height:20px;max-height:20px;overflow:hidden;margin-top:-3px;}" +
			".seristyle_subpanel{color:rgb(170,170,170);display:inline;font-family:Roboto,Arial,sans-serif;font-size:14px;font-weight:400;height:auto;letter-spacing:0.2px;line-height:20px;text-size-adjust:100%;width:auto;}" +
			".seristyle_firstpanel::after{content:'•';margin:0px 4px;}" +
			// Hide animation or background i forgor
			".yt-spec-button-shape-next--size-m.yt-spec-button-shape-next--segmented-start::after{display:none;}" +
			// Reposition subscribe button(it breaks with Sponsor or Analytics)
			SelOwner + "{justify-content:space-between;}" +
			// Legacy style for autoplay label
			"#seristyle_autoplay{color:rgba(255, 255, 255, 0.7);direction:ltr;font-family:\"YouTube Noto\", Roboto, Arial, Helvetica, sans-serif;font-size:14px;font-weight:500;line-height:18px;text-align:left;text-size-adjust:100%;}" +
			// Action bar
			"#actions button{" + (SeriStyleSettings.VideoPage.LetterSpacing.Value ? "letter-spacing:0.5px;" : "") + "color:#909090;background-color:#0000;padding-left:0px;padding-right:6px;" + (SeriStyleSettings.VideoPage.Uppercase.Value ? "text-transform:uppercase;" : "") + "}" +
			SelLikeButtons + "{margin-left:10px;}" +
			SelLikeButtons + "[aria-pressed=false]{color:#909090;}" +
			SelLikeButtons + "[aria-pressed=true]{color:#FFF;}" +
			"#actions yt-icon{padding:6px 6px 6px 6px;}" +
			"#actions .yt-spec-button-shape-next__icon{margin-left:0px;margin-right:0px;display:table;}" +
			"#actions{margin-top:0px;}" +
			"yt-touch-feedback-shape{display:none;}" +
			SelContextMenuOpen + "{margin-left:5px;}" +
			// Video title
			"#title>h1{font-family:Roboto,Arial,sans-serif;font-size:18px;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-weight:400;line-height:26px;text-shadow:none;text-size-adjust:100%;word-break:break-word;}" +
			// Description
			SelBottomRow + "{border-bottom-color:rgba(255,255,255,0.1);border-bottom-style:solid;border-bottom-width:1px;padding-bottom:16px;}" +
			"#comment-teaser{display:none;}" +
			SelDescription + "{background-color:#0000;cursor:unset;}" +
			"#info-container{display:none;}" +
			"tp-yt-paper-button.ytd-text-inline-expander{position:relative;left:unset;justify-content:flex-start;color:#AAA;font-family:Roboto,Arial,sans-serif;margin-top:8px;font-size:1.3rem;font-weight:500;letter-spacing:0.007px;" + (SeriStyleSettings.VideoPage.Uppercase.Value ? "text-transform:uppercase;" : "") + "}" +
			"tp-yt-paper-button.ytd-text-inline-expander>paper-ripple{display:none;}" +
			"#description-interaction{display:none;}" +
			"#ellipsis{display:none;}" +
			(SeriStyleSettings.VideoPage.HideDescriptionShade.Value ? "#snippet{-webkit-mask-image:unset;}" : "") +
			"#description-inline-expander{margin-left:64px;}" +
			"#description-inner{margin:0px;}" +
			"#snippet>.ytd-text-inline-expander:not([id]){display:none;}" + // Cringe selector but it works
			"#expand-sizer{display:none;}" +
			// Old pfp style
			"#owner #avatar{width:48px;height:48px;max-width:48px;max-height:48px;margin-right:16px;}" +
			"#owner #avatar>#img{width:48px;height:48px;max-width:48px;max-height:48px;}" +
			// Hide RYD sentiment bar
			".ryd-tooltip{display:none;}" +
			// Remove explicit lyrics flair
			"#below>ytd-watch-metadata>ytd-metadata-row-container-renderer{display:none;}" +
			// Self explanatory
			(SeriStyleSettings.VideoPage.HideDownloadButton.Value ? "ytd-download-button-renderer{display:none;}" : "") +
			(SeriStyleSettings.VideoPage.NoSponsorComments.Value ? "yt-pdg-comment-chip-renderer{display:none;}#paid-comment-background{display:none;}" : "") +
			(SeriStyleSettings.VideoPage.HideRecFilters.Value ? "yt-related-chip-cloud-renderer.ytd-watch-next-secondary-results-renderer{display:none;}" : "") +
			// Realign recommendation filters
			"yt-related-chip-cloud-renderer yt-chip-cloud-chip-renderer{margin:0px 8px 8px 8px;}" +
			// Realign videos
			"ytd-item-section-renderer.ytd-watch-next-secondary-results-renderer{margin-top:calc(0px - var(--ytd-item-section-item-margin));}" + // yeah... youtube decided to use margin-top instead of margin-bottom... cringe
			// Chat things
			(SeriStyleSettings.VideoPage.HidePremiere.Value ? "#chat.ytd-watch-flexy{display:none;}" : "#show-hide-button.ytd-live-chat-frame{margin-bottom:2px;}") +
			//
			""
		).replaceAll(/(?<!!important);/g, "!important;"), // <3 yt
	"id": "seristyle-tf-videopage"
}));

// Move #owner
$(SelBottomRow).prepend($(SelOwner));

// Create span
$(SelTopRow).prepend(DomUtils.BuildElement("div", { id: "seristyle_oldpanel" }, [
	(x => ((x.className = (x.className + " seristyle_subpanel seristyle_firstpanel").replace("yt-formatted-string ", "")), x))($(SelViews)),
	(x => ((x.className += " seristyle_subpanel"), x))($(SelFullDate))
]));

// New panels
if (!SeriStyleSettings.VideoPage.LegacyPanels.Value) {
	var Under = $(SelOwnerUnder);
	var Owner = $(SelOwner);
	Under.appendChild($(SelSubButton));
	Owner.insertBefore($(SelOwnerPartTwo), Owner.children[0]);
	Owner.insertBefore($(SelOwnerPartOne), Owner.children[0]);
}

// Apply old SVG to Share and Menu
$(SelShareBtn).querySelector("yt-icon").innerHTML = SvgShare;
$(SelContextMenuOpen).querySelector("yt-icon").innerHTML = SvgMenu;

// Apply old SVG to Like/Dislike buttons
var LikeDislikeArray = $$(SelLikeButtons);
LikeDislikeArray[0].querySelector("yt-icon").innerHTML = SvgLike;
LikeDislikeArray[1].querySelector("yt-icon").innerHTML = SvgDislike;

// RYD
if (_ = $(SelTopRow).attributes.style) _.value = ""; // Remove RYD's border because it overrides SeriStyle's

// Fix description hitbox
var Description = $(SelDescription);
$(SelBottomRow).appendChild(DomUtils.BuildElement("div", { className: Description.className, id: Description.id }, [Description.children[0]]));
Description.remove();

// Setup observer
// TODO: This breaks if you have another video context menu opened.
var ATPonClick = async () => {
	var InteractBtn = FindByExel($$(SelContextMenuButtons), ExelAddToPlaylist);
	if (!InteractBtn) {
		var OpenMenuBtn = $(SelContextMenuOpen);
		if (!OpenMenuBtn)
			return;
		OpenMenuBtn.click();
		await WaitTime(SeriStyleSettings.Advanced.InjectedATPCallbackTime.Value);
		InteractBtn = FindByExel($$(SelContextMenuButtons), ExelAddToPlaylist);
		if (!InteractBtn)
			return;
		OpenMenuBtn.click();
	}
	InteractBtn.click();
};
var FindATPInteract = async () => {
	var InteractBtn = FindByExel($$(SelContextMenuButtons), ExelAddToPlaylist);
	if (!InteractBtn) {
		var Neee = $(SelContextMenuOpen);
		Neee?.click();
		await WaitTime(SeriStyleSettings.Advanced.InjectedATPCallbackTime.Value);
		InteractBtn = FindByExel($$(SelContextMenuButtons), ExelAddToPlaylist);
		Neee?.click();
		if (!InteractBtn) {
			await WaitTime(SeriStyleSettings.Advanced.InjectedATPCallbackTime.Value);
			Neee?.click();
			await WaitTime(SeriStyleSettings.Advanced.InjectedATPCallbackTime.Value);
			InteractBtn = FindByExel($$(SelContextMenuButtons), ExelAddToPlaylist);
			Neee?.click();
		}
	}
	return InteractBtn;
};

// TODO: Test if WaitTime is needed and rework method if so(I DON'T WANT ANY DELAY)

var ActionBarEventListeners = [
	async (Inserted, Removed, Remained) => {
		if (Inserted.length > 0 && Inserted.some(Element => !IsVisible(Element))) return;
		var AddToPlaylist = FindByExel(Remained, ExelAddToPlaylist) || FindByExel(Inserted, ExelAddToPlaylist);
		var CreateClip = FindByExel(Remained, ExelCreateClip) || FindByExel(Inserted, ExelCreateClip);
		var Modded = FindByExel(Remained, ExelInjectedAddToPlaylist) || FindByExel(Inserted, ExelInjectedAddToPlaylist);
		if (AddToPlaylist) {
			CreateClip?.remove();
			if (Modded) {
				Modded.querySelector("yt-icon").innerHTML = SvgCreateClip;
				Modded.classList.remove("seristyle-ax-mcc");
				Modded.remove();
			}
			AddToPlaylist.classList.add("seristyle-ax-iatp");
		} else if (!Modded && CreateClip) {
			AddToPlaylist = CreateClip;

			var InteractBtn = await FindATPInteract();
			if (!InteractBtn)
				return;

			AddToPlaylist.onclick = ATPonClick;
			AddToPlaylist.querySelector("span").innerText = InteractBtn.innerText;
			AddToPlaylist.lastElementChild.firstElementChild.innerText = `\n  ${InteractBtn.innerText}\n`;
			AddToPlaylist.classList.add("seristyle-ax-mcc");
		} else if (Modded && Modded.className.includes("seristyle-ax-mcc")) {
			var InteractBtn = await FindATPInteract(); // jshint ignore: line
			if (!InteractBtn) {
				Modded.querySelector("yt-icon").innerHTML = SvgCreateClip;
				Modded.classList.remove("seristyle-ax-mcc");
			}

			Modded.onclick = ATPonClick;
			Modded.querySelector("span").innerText = InteractBtn.innerText;
			Modded.lastElementChild.firstElementChild.innerText = `\n  ${InteractBtn.innerText}\n`;
			return;
		} else return;
		AddToPlaylist.querySelector("yt-icon").innerHTML = SvgAddToPlaylist;
	}
];

var ActionBarObserver = new MutationObserver(async Mutations => {
	// Wait for changes to settle
	await WaitTime(SeriStyleSettings.Advanced.InjectedSettleTime.Value);

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
	Remained = $$(SelFlexibleButtons).filter(Element => !(Inserted.some(IElement => Element.isEqualNode(IElement)) || Inserted.some(RElement => Element.isEqualNode(RElement))));
	ActionBarEventListeners.forEach(async Listener => await Listener(Inserted, Removed, Remained));
});
ActionBarObserver.observe($(SelFlexibleButtonsBar), {
	childList: true
});

ActionBarEventListeners.forEach(async Listener => await Listener([], [], $$(SelFlexibleButtons)));