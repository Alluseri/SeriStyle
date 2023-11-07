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
const FCP = SeriStyleSettings.VideoPage.ForceCoPadding.Value;
document.head.appendChild(DomUtils.BuildElement("style", {
	"innerText":
		(
			// Panel things
			SelTopRow + "{margin-top:4px;display:flex;align-items:center;border-bottom-color:rgba(255,255,255,0.1);border-bottom-style:solid;border-bottom-width:1px;font-family:Roboto,Arial,sans-serif;font-size:10px;padding-bottom:8px;align-items:center;}" +
			"#seristyle_oldpanel{display:block;font-family:Roboto,Arial,sans-serif;font-size:14px;font-weight:400;letter-spacing:0.2px;line-height:20px;max-height:20px;overflow:hidden;margin-top:-3px;}" +
			".seristyle_subpanel{color:rgb(170,170,170);display:inline;font-family:Roboto,Arial,sans-serif;font-size:14px;font-weight:400;height:auto;letter-spacing:0.2px;line-height:20px;text-size-adjust:100%;width:auto;}" +
			".seristyle_firstpanel::after{content:'•';margin:0px 4px;}" +
			// Reposition subscribe button
			SelOwner + "{justify-content:space-between;}" +
			// Action bar
			"#actions button{" + (SeriStyleSettings.VideoPage.LetterSpacing.Value ? "letter-spacing:0.5px;" : "") + "color:#909090;background:none;padding-left:0px;padding-right:6px;text-transform:uppercase;}" +
			SelLikeButtons + "{margin-left:10px;}" +
			SelLikeButtons + "[aria-pressed=false]{color:#909090;}" +
			SelLikeButtons + "[aria-pressed=true]{color:#FFF;}" +
			"#actions yt-icon{padding:6px 6px 6px 6px;}" +
			"#actions .yt-spec-button-shape-next__icon{margin-left:0px;margin-right:0px;display:table;}" +
			".yt-spec-button-shape-next--size-m.yt-spec-button-shape-next--segmented-start::after{display:none;}" +
			"#actions{margin-top:0px;}" +
			SelContextMenuOpen + "{margin-left:5px;}" +
			// Video title
			"#title>h1{font-family:Roboto,Arial,sans-serif;font-size:18px;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-weight:400;line-height:26px;text-shadow:none;text-size-adjust:100%;word-break:break-word;}" +
			// Description
			SelBottomRow + "{flex-direction:column;border-bottom-color:rgba(255,255,255,0.1);border-bottom-style:solid;border-bottom-width:1px;padding-bottom:16px;}" +
			"#comment-teaser{display:none;}" +
			SelDescription + "{background:none;cursor:unset;}" +
			"#info-container{display:none;}" +
			"tp-yt-paper-button.ytd-text-inline-expander{position:relative;left:unset;justify-content:flex-start;color:#AAA;font-family:Roboto,Arial,sans-serif;margin-top:8px;font-size:1.3rem;font-weight:500;letter-spacing:0.007px;text-transform:uppercase;}" +
			"tp-yt-paper-button.ytd-text-inline-expander>paper-ripple{display:none;}" +
			"#description-interaction{display:none;}" +
			"#ellipsis{display:none;}" +
			"#snippet{-webkit-mask-image:unset;}" +
			"#description-inline-expander{margin-left:64px;}" +
			"#description-inner{margin:0px;}" +
			"#snippet>.ytd-text-inline-expander:not([id]){display:none;}" + // Better than nth-child
			"#expand-sizer{display:none;}" +
			"#ytd-watch-info-text{display:none;}" +
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
			"ytd-item-section-renderer.ytd-watch-next-secondary-results-renderer{margin-top:calc(0px - var(--ytd-item-section-item-margin));}" + // TODO: Force usage of margin-bottom instead of margin-top
			// Chat things
			(SeriStyleSettings.VideoPage.HidePremiere.Value ? "#chat.ytd-watch-flexy{display:none;}" : "#show-hide-button.ytd-live-chat-frame{margin-bottom:2px;}") +
			// Force hide immersive
			"#cinematics{display:none;}" +
			// Fix playlist panel colors
			(SeriStyleSettings.VideoPage.FixPlaylistColor.Value && SeriStyleSettings.General.OldColors.Value ?
				"#items.playlist-items{background:#181818;}" +
				".header.ytd-playlist-panel-renderer{background:#212121FA;}"
				: "") +
			(SeriStyleSettings.VideoPage.HideJoinButton.Value ? "#sponsor-button{display:none;}" : "") +
			// Hide "Shorts with this video" shelf
			"#contents>ytd-reel-shelf-renderer{display:none;}" +
			// Disable rolling likes
			"animated-rolling-character,yt-animated-rolling-number{transition:none;}" +
			// Experimental, related to a (bug?)
			(SeriStyleSettings.VideoPage.ForceCentering.Value ? "#columns.ytd-watch-flexy{justify-content:center;}" : "") +
			// Force content padding, added as part of above, but for weirdos
			(FCP ? "#columns.ytd-watch-flexy{padding-left:"+FCP+"px;padding-right:"+FCP+"px;}" : "") + // I don't feel comfortable just enforcing padding to 0 without a reason. Same for verticals.
			//
			""
		).replaceAll(/(?<!!important);/g, "!important;"), // <3 yt
	"id": "seristyle-tf-videopage"
}));

const ActionBarFn = function (Inserted) {
	// They usually don't come in amounts greater than 2, but we'll do it nevertheless:
	var Icons = Inserted.filter(Element => Element.tagName == "DIV" && Element.children[0]?.tagName == "svg");

	var AddToPlaylist = FindByExel(Icons, ExelAddToPlaylist);

	if (AddToPlaylist) {
		AddToPlaylist.innerHTML = SvgAddToPlaylist;
	}

	if (SeriStyleSettings.VideoPage.HideCreateClipButton.Value) {
		var CreateClip = FindByExel(Icons, ExelCreateClip);
		CreateClip?.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
	}
	if (SeriStyleSettings.VideoPage.HideDonateButton.Value) {
		var Thanks = FindByExel(Icons, ExelDonate);
		Thanks?.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
	}
};

const Reinject = () => {
	try {
		// Apply old SVG to Share and Menu
		if (_ = $(SelShareBtn)) _.querySelector("yt-icon").innerHTML = SvgShare;
		$(SelContextMenuOpen).querySelector("yt-icon").innerHTML = SvgActionMenu;

		// Apply old SVG to Like/Dislike buttons
		var LikeDislikeArray = $$(SelLikeButtons);
		LikeDislikeArray[0].querySelector("yt-icon").innerHTML = SvgLike;
		LikeDislikeArray[1].querySelector("yt-icon").innerHTML = SvgDislike;

		// Remove RYD's border because it overrides SeriStyle's
		if (_ = $(SelTopRow).attributes.style) _.value = "";

		(new MutationObserver(async Mutations => {
			var Inserted = [];
			Mutations.forEach(Mutation => {
				for (let i = 0; i < Mutation.addedNodes.length; i++) {
					Inserted.push(Mutation.addedNodes[i]);
				}
			});

			ActionBarFn(Inserted);
		})).observe($(SelFlexibleButtonsBar), { // Should be GC'd because the bar should be completely regenerated on reinject cond
			childList: true,
			subtree: true
		});
	} catch (Exception) {
		console.log("[SeriStyle|Videopage] There was an error during the injection process:");
		console.log(Exception);
	}
};

// Move #owner
$(SelBottomRow).prepend($(SelOwner));

// Create span
var Views = $(SelViews);
if (Views) {
	$(SelTopRow).prepend(DomUtils.BuildElement("div", { id: "seristyle_oldpanel" }, [
		(x => ((x.className = (x.className + " seristyle_subpanel seristyle_firstpanel").replace("yt-formatted-string ", "")), x))($(SelViews)),
		(x => ((x.className += " seristyle_subpanel"), x))($(SelFullDate))
	]));
} else {
	console.log("[SeriStyle|Videopage] No view count found, video must be sponsored. Locking redirects.");
	document.head.appendChild(DomUtils.BuildElement("style", {
		"innerText":
			(
				".html5-ypc-endscreen{display:flex;flex-direction:row;justify-content:center;}" +
				".html5-ypc-thumbnail{float:none;}" +
				".html5-ypc-module{display:flex;flex-direction:column;align-items:center;}"
			).replaceAll(/(?<!!important);/g, "!important;"), // <3 yt
		"id": "seristyle-tf-fucksponsorships"
	}));
	$("#title > ytd-badge-supported-renderer > div > span").innerText = "I AM CRINGE AND I WANT MONEY FOR MY CONTENT";
	const FuckThisURL = document.location.href;
	window.addEventListener("historychange", function (Deets) {
		var URL = Deets.detail;
		if (URL != FuckThisURL) {
			console.log("[SeriStyle|Videopage] Hard reloading the page after sponsorship lock.");
			window.open(URL, "_self");
		}
	});
}

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