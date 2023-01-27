/* jshint -W084, -W027 */

var SelBottomRow = "#bottom-row";
var SelTopRow = "#top-row.ytd-watch-metadata";
var SelOwner = "#above-the-fold #owner";
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
var _;

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
			// Reposition subscribe button(it breaks with Sponsor or Analytics, should be fixed with new panels)
			SelOwner + "{justify-content:space-between;}" +
			// Legacy style for autoplay label
			"#seristyle_autoplay{color:rgba(255, 255, 255, 0.7);direction:ltr;font-family:\"YouTube Noto\", Roboto, Arial, Helvetica, sans-serif;font-size:14px;font-weight:500;line-height:18px;text-align:left;text-size-adjust:100%;}" +
			// Action bar
			"#actions button{" + (SeriStyleSettings.VideoPage.LetterSpacing.Value ? "letter-spacing:0.5px;" : "") + "color:#909090;background:none;padding-left:0px;padding-right:6px;" + (SeriStyleSettings.VideoPage.Uppercase.Value ? "text-transform:uppercase;" : "") + "}" +
			SelLikeButtons + "{margin-left:10px;}" +
			SelLikeButtons + "[aria-pressed=false]{color:#909090;}" +
			SelLikeButtons + "[aria-pressed=true]{color:#FFF;}" +
			"#actions yt-icon{padding:6px 6px 6px 6px;}" +
			"#actions .yt-spec-button-shape-next__icon{margin-left:0px;margin-right:0px;display:table;}" +
			"#actions{margin-top:0px;}" +
			SelContextMenuOpen + "{margin-left:5px;}" +
			// Video title
			"#title>h1{font-family:Roboto,Arial,sans-serif;font-size:18px;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-weight:400;line-height:26px;text-shadow:none;text-size-adjust:100%;word-break:break-word;}" +
			// Description
			SelBottomRow + "{border-bottom-color:rgba(255,255,255,0.1);border-bottom-style:solid;border-bottom-width:1px;padding-bottom:16px;}" +
			"#comment-teaser{display:none;}" +
			SelDescription + "{background:none;cursor:unset;}" +
			"#info-container{display:none;}" +
			"tp-yt-paper-button.ytd-text-inline-expander{position:relative;left:unset;justify-content:flex-start;color:#AAA;font-family:Roboto,Arial,sans-serif;margin-top:8px;font-size:1.3rem;font-weight:500;letter-spacing:0.007px;" + (SeriStyleSettings.VideoPage.Uppercase.Value ? "text-transform:uppercase;" : "") + "}" +
			"tp-yt-paper-button.ytd-text-inline-expander>paper-ripple{display:none;}" +
			"#description-interaction{display:none;}" +
			"#ellipsis{display:none;}" +
			(SeriStyleSettings.VideoPage.HideDescriptionShade.Value ? "#snippet{-webkit-mask-image:unset;}" : "") +
			"#description-inline-expander{margin-left:64px;}" +
			"#description-inner{margin:0px;}" +
			"#snippet>.ytd-text-inline-expander:not([id]){display:none;}" + // Better than nth-child
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
			"ytd-item-section-renderer.ytd-watch-next-secondary-results-renderer{margin-top:calc(0px - var(--ytd-item-section-item-margin));}" + // yeah... youtube decided to use margin-top instead of margin-bottom... how cringe
			// Chat things
			(SeriStyleSettings.VideoPage.HidePremiere.Value ? "#chat.ytd-watch-flexy{display:none;}" : "#show-hide-button.ytd-live-chat-frame{margin-bottom:2px;}") +
			//
			""
		).replaceAll(/(?<!!important);/g, "!important;"), // <3 yt
	"id": "seristyle-tf-videopage"
}));

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
			return console.log("[SeriStyle|Videopage] CreateClip modder is temporarily disabled...");
			AddToPlaylist = CreateClip;

			var InteractBtn = await FindATPInteract();
			if (!InteractBtn)
				return;

			AddToPlaylist.onclick = ATPonClick;
			AddToPlaylist.querySelector("span").innerText = InteractBtn.innerText;
			AddToPlaylist.lastElementChild.firstElementChild.innerText = `\n  ${InteractBtn.innerText}\n`;
			AddToPlaylist.classList.add("seristyle-ax-mcc");
		} else if (Modded && Modded.className.includes("seristyle-ax-mcc")) {
			return console.log("[SeriStyle|Videopage] CreateClip modder is temporarily disabled...");
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

const Reinject = () => {
	try {
		// Apply old SVG to Share and Menu
		$(SelShareBtn).querySelector("yt-icon").innerHTML = SvgShare;
		$(SelContextMenuOpen).querySelector("yt-icon").innerHTML = SvgActionMenu;

		// Apply old SVG to Like/Dislike buttons
		var LikeDislikeArray = $$(SelLikeButtons);
		LikeDislikeArray[0].querySelector("yt-icon").innerHTML = SvgLike;
		LikeDislikeArray[1].querySelector("yt-icon").innerHTML = SvgDislike;

		// Remove RYD's border because it overrides SeriStyle's
		if (_ = $(SelTopRow).attributes.style) _.value = "";

		(new MutationObserver(async Mutations => {
			// Wait for changes to settle, unfortunately needed and I can't come up with a fix even after an attempted full rewrite
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
		})).observe($(SelFlexibleButtonsBar), { // Should be GC'd because the bar should be completely regenerated on reinject cond
			childList: true
		});

		ActionBarEventListeners.forEach(async Listener => await Listener([], [], $$(SelFlexibleButtons)));
	} catch (Exception) {
		console.log("[SeriStyle|Videopage] There was an error during the injection process:");
		console.log(Exception);
	}
};

// Move #owner
$(SelBottomRow).prepend($(SelOwner));

// Create span
$(SelTopRow).prepend(DomUtils.BuildElement("div", { id: "seristyle_oldpanel" }, [
	(x => ((x.className = (x.className + " seristyle_subpanel seristyle_firstpanel").replace("yt-formatted-string ", "")), x))($(SelViews)),
	(x => ((x.className += " seristyle_subpanel"), x))($(SelFullDate))
]));

// New panels
if (!SeriStyleSettings.Advanced.LegacyPanels.Value) {
	var Under = $(SelOwnerUnder);
	var Owner = $(SelOwner);
	Under.appendChild($(SelSubButton));
	Owner.insertBefore($(SelOwnerPartTwo), Owner.children[0]);
	Owner.insertBefore($(SelOwnerPartOne), Owner.children[0]);
}

// Fix description hitbox
var Description = $(SelDescription);
$(SelBottomRow).appendChild(DomUtils.BuildElement("div", { className: Description.className, id: Description.id }, [Description.children[0]]));
Description.remove();

Reinject();