console.log("Health check report for v15");

$ = document.querySelector.bind(document);
$$ = Query => Array.from(document.querySelectorAll(Query));

// Imported from CSS
var SelSubPassiveBtn = "#subscribe-button-shape>button";
var SelSubContainer = "#subscribe-button>ytd-subscribe-button-renderer>yt-smartimation>div>__slot-el";
var SelMeta = "#meta.ytd-c4-tabbed-header-renderer";
var SelMetaSpan = SelMeta + ">span.meta-item";

// Imported from ...


var Rules = {
	"CSS": {
		"Wtfard": [
			"ytd-ad-slot-renderer"
		],
		"Hide Shorts on search page": [
			"ytd-reel-shelf-renderer"
		],
		"Remove roundings for notification box": [
			"#contentWrapper>ytd-multi-page-menu-renderer"
		],
		"Remove roundings on many menus": [
			"yt-sheet-view-model"
		],
		"White letters in comment input boxes": [
			"tp-yt-paper-input-container"
		],
		"Remove \"You\"": [
			"#header.ytd-guide-collapsible-section-entry-renderer"
		],
		"General pink color fix (may stop working later, try removing \"[refresh]\" to generalize)": [
			"html[refresh],[refresh]"
		],
		"Fix progress bar colors (main player, watched, miniplayer)": [
			"div.ytp-play-progress,.ytd-thumbnail-overlay-resume-playback-renderer,.YtProgressBarLineProgressBarPlayed,.YtThumbnailOverlayProgressBarHostWatchedProgressBarSegmentModern"
		],
		"Fix logo color": [
			"#logo-icon g:not([id]):first-child>path:first-child"
		],
		"Fix LIVE chip & ring color": [
			".yt-spec-avatar-shape__live-badge" +
			".yt-spec-avatar-shape--cairo-refresh.yt-spec-avatar-shape--live-ring"
		],
		"\"HD\" chip on settings button and a bunch of other color fixes (videopage)": [
			".ytp-settings-button.ytp-hd-quality-badge, .ytp-settings-button.ytp-hdr-quality-badge, .ytp-settings-button.ytp-4k-quality-badge, .ytp-settings-button.ytp-5k-quality-badge, .ytp-settings-button.ytp-8k-quality-badge, .ytp-settings-button.ytp-3d-badge-grey, .ytp-settings-button.ytp-3d-badge"
		],
		"Modern checkbox color fix": [
			".ytp-menuitem[aria-checked=true] .ytp-menuitem-toggle-checkbox"
		],
		"[Search box] Old search box styles": [
			"div.ytSearchboxComponentInputBox"
		],
		"[Search box] Prepare voice search button": [
			"#voice-search-button",
			"#voice-search-button button"
		],
		"[Search box] Prepare search icons": [
			"button.ytSearchboxComponentSearchButton"
		],
		"[Search box] Old search input dimensions": [
			"input.yt-searchbox-input"
		],
		"[Search box] Hide modern search icon": [
			".ytSearchboxComponentInnerSearchIcon"
		],
		"[Search box] Old proper height": [
			"yt-searchbox"
		],
		"Remove thumbnail roundings": [
			"#thumbnail,yt-thumbnail-view-model"
		],
		"Fix video listing hover action menu": [
			"#dismissible.ytd-compact-video-renderer:not(:hover)>div.details>#menu,yt-lockup-view-model:not(:hover) .yt-lockup-metadata-view-model-wiz__menu-button"
		],
		"Old homepage top bar roundings(also applies to vp filters apparently)": [
			"yt-chip-cloud-chip-renderer"
		],
		"Old video duration roundings": [
			"ytd-thumbnail-overlay-time-status-renderer,yt-thumbnail-overlay-badge-view-model",
			"yt-thumbnail-badge-view-model>badge-shape,div.ytd-thumbnail-overlay-time-status-renderer>badge-shape"
		],
		"Restyle Join and Analytics buttons": [
			"#sponsor-button yt-button-shape>button",
			"#analytics-button yt-button-shape>button"
		],
		"Fix the Subscribe button": [
			"ytd-subscribe-button-renderer",
			SelSubPassiveBtn,
			SelSubPassiveBtn + ".yt-spec-button-shape-next--filled",
			"#subscribe-button yt-button-shape[invisible]",
			"#notification-preference-button button",
			"#notification-preference-button div.cbox",
			"#notification-preference-button div.yt-spec-button-shape-next__icon",
			"#notification-preference-button div.yt-spec-button-shape-next__secondary-icon",
			"#notification-preference-button div.yt-spec-button-shape-next__button-text-content"
		],
		"Fix notification bell": [
			SelSubContainer
		],
		"Hide channel handles": [
			"p.ytd-c4-tabbed-header-renderer"
		],
		"Hide feedback shapes": [
			"yt-touch-feedback-shape,yt-interaction"
		],
		"Old background color": [
			"ytd-app,ytd-browse,ytd-two-column-browse-results-renderer[page-subtype='playlist'].ytd-browse,ytd-page-manager,#show-hide-button>ytd-button-renderer"
		],
		"Old top and left bar colors": [
			"#background.ytd-masthead",
			"#guide-content.ytd-app,ytd-mini-guide-renderer.ytd-app"
		],
		"Fix chip renderer colors": [
			"ytd-browse[page-subtype='home'] #chips-wrapper.ytd-feed-filter-chip-bar-renderer",
			"#left-arrow.ytd-feed-filter-chip-bar-renderer",
			"#right-arrow.ytd-feed-filter-chip-bar-renderer",
			"#left-arrow-button.ytd-feed-filter-chip-bar-renderer,#right-arrow-button.ytd-feed-filter-chip-bar-renderer"
		],
		"Remove roundings on left side menu hover selections": [
			"ytd-guide-entry-renderer>#endpoint"
		],
		"Remove rounded corners everywhere known": [
			"[rounded-corners],.ytp-rounded-menu,ytd-menu-popup-renderer"
		],
		"Remove logo selection outline": [
			"a#logo.ytd-topbar-logo-renderer"
		],
		"Fix notification badge visuals": [
			"div.yt-spec-icon-badge-shape--type-notification>div.yt-spec-icon-badge-shape__badge",
			".yt-spec-icon-badge-shape--style-overlay.yt-spec-icon-badge-shape--type-cart-refresh .yt-spec-icon-badge-shape__badge"
		],
		"Left mini sidebar (available on low dimensions like my offscreen) fixes": [
			"ytd-mini-guide-renderer.ytd-app",
			"ytd-mini-guide-renderer.ytd-app>#items>ytd-mini-guide-entry-renderer"
		],
		"Fix video list margins": [
			"ytd-compact-video-renderer,ytd-video-renderer",
			"iron-selector#chips",
			"#items.ytd-watch-next-secondary-results-renderer"
		],
		"Hide shorts shelf": [
			"#contents>ytd-rich-section-renderer"
		],
		"Hide thumbnail background": [
			"ytd-thumbnail.ytd-rich-grid-media"
		],
		"Hide series": [
			"ytd-badge-supported-renderer.top-badge"
		],
		"Fix alerts": [
			"#alerts.ytd-browse"
		],
		"Remove jam paddings": [
			"yt-collections-stack",
			"ytd-compact-radio-renderer"
		],
		"Remove highlighting": [
			"ytd-rich-item-renderer"
		],
		"Remove preview video roundings": [
			"#media-container.ytd-video-preview"
		],
		"Recolor HD": [
			".ytp-swatch-color-white"
		],
		"Self explanatory": [
			".ytp-gradient-bottom,.ytp-gradient-top",
			".ytp-heat-map-container",
			".ytp-miniplayer-button"
		],
		"Old settings panel style": [
			".ytp-popup.ytp-settings-menu"
		],
		"Remove roundings": [
			"ytd-playlist-video-renderer"
		],
		"Old title font": [
			"#text.yt-sans-28"
		],
		"Fix playlist entry hover action menu": [
			"ytd-playlist-video-renderer:not(:hover)>#menu"
		],
		"Restore position & dimensions, fix colors": [
			"ytd-browse.ytd-page-manager",
			"yt-page-header-renderer.page-header-sidebar",
			"ytd-browse[page-subtype='playlist'],ytd-item-section-renderer[page-subtype='playlist'] #contents.ytd-item-section-renderer",
			"ytd-browse[page-subtype='playlist'] page-header-view-model-wiz__page-header-background"
		],
		"Hide immersive background": [
			"div.ytCinematicContainerViewModelBackgroundGradient",
			"img.ytCinematicContainerViewModelBackgroundImage",
			"div.immersive-header-background-wrapper",
			".ytCinematicContainerViewModelHost",
		],
		"Metadata: Proper overflow, pins, old font": [
			"ytd-browse[page-subtype='playlist'] .page-header-view-model-wiz__page-header-title span",
			"ytd-browse[page-subtype='playlist'] .yt-content-metadata-view-model-wiz__metadata-row:nth-child(2)",
			"ytd-browse[page-subtype='playlist'] .yt-content-metadata-view-model-wiz__metadata-row>span",
			"ytd-browse[page-subtype='playlist'] yt-formatted-string.byline-item>span",
			"ytd-browse[page-subtype='playlist'] .yt-content-metadata-view-model-wiz__metadata-row>.yt-content-metadata-view-model-wiz__metadata-text:first-child",
			"ytd-browse[page-subtype='playlist'] .yt-content-metadata-view-model-wiz__metadata-row>.yt-content-metadata-view-model-wiz__delimiter:nth-child(2)",
		],
		"Remove cover thumbnail rounding": [
			"ytd-browse[page-subtype='playlist'] .yt-content-preview-image-view-model-wiz--large-rounded-image"
		],
		"Old video list padding": [
			"ytd-two-column-browse-results-renderer[page-subtype='playlist'].ytd-browse,ytd-browse[page-subtype='playlist']>#alerts"
		],
		"Description fixes": [
			"yt-description-preview-view-model",
			"yt-description-preview-view-model truncated-text-content",
			"yt-description-preview-view-model truncated-text-content>span",
			"page-header-view-model-wiz__page-header-headline-info"
		],
		"Fix one of the paddings (lol)": [
			"div.metadata-action-bar.style-scope.ytd-playlist-header-renderer"
		],
		"Hide the \"Channel sponsors\" section": [
			"ytd-recognition-shelf-renderer"
		],
		"Fix silly button color https://github.com/Alluseri/SeriStyle/issues/21": [
			"ytd-browse[page-subtype='channels'] ytd-button-renderer .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--text",
			"ytd-browse[page-subtype='channels'] ytd-button-renderer .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--text a.yt-core-attributed-string__link"
		],
		"Metadata: Only show subscriber count": [
			SelMetaSpan,
			SelMetaSpan + ">#channel-handle",
			SelMetaSpan + ">#videos-count",
			SelMeta + " span.delimiter",
			SelMeta + ">#channel-tagline",
			SelMeta + ">#channel-header-links"
		],
		"Fix channel name size": [
			SelMeta + " #text.ytd-channel-name",
			SelMeta + ">#channel-name"
		],
		"Part of subscribe button fix": [
			SelMeta
		],
		"Fix misaligned badge": [
			SelMeta + ">#channel-name",
			SelMeta + ">#channel-name>ytd-badge-supported-renderer>div>yt-icon",
			SelMeta + ">#channel-name>ytd-badge-supported-renderer"
		],
		"Header realignment": [
			"#channel-header-container.ytd-c4-tabbed-header-renderer",
			"#inner-header-container.ytd-c4-tabbed-header-renderer"
		],
		"Avatar style fixes": [
			"#channel-header-container.ytd-c4-tabbed-header-renderer>#avatar"
		],
		"Fixing tab styles": [
			".yt-tab-shape-wiz__tab",
			"yt-tab-shape.yt-tab-shape-wiz",
			".yt-tab-group-shape-wiz__slider",
			".yt-tab-shape-wiz__tab-bar--tab-bar-selected"
		],
		"Old colors for channel": [
			"#channel-header.ytd-c4-tabbed-header-renderer, #tabs-inner-container.ytd-c4-tabbed-header-renderer",
			"ytd-browse[page-subtype='channels']"
		]
	}
};

for (let CategoryName in Rules) {
	let Category = Rules[CategoryName];
	for (let RuleName in Category) {
		let Rule = Category[RuleName];
		for (let Mod of Rule) {
			if (!$(Mod))
				console.log(`[Health Check Report|${CategoryName}] Failed to match part of ${RuleName}: ${Mod}`);
		}
	}
}