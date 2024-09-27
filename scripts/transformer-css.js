// jshint -W014, -W086

var SelSubPassiveBtn = "#subscribe-button-shape>button";
var SelSubContainer = "#subscribe-button>ytd-subscribe-button-renderer>yt-smartimation>div>__slot-el";
var SelMeta = "#meta.ytd-c4-tabbed-header-renderer";
var SelMetaSpan = SelMeta + ">span.meta-item";

document.head.appendChild(DomUtils.BuildElement("style", {
	"innerText":
		(
			/* General */
			// Wtfard
			"ytd-ad-slot-renderer{display:none;}" +
			// Remove roundings for notification box
			"#contentWrapper>ytd-multi-page-menu-renderer{border-radius:0px;}" +
			// Remove "You"
			"ytd-guide-collapsible-section-entry-renderer>#header{display:none;}" +
			// Old search box styles
			"#container.ytd-searchbox{" + (SeriStyleSettings.General.NormalizeSearchBar.Value ? "margin-left:0px;" : "") + "position:relative;align-items:center;border:1px solid var(--ytd-searchbox-legacy-border-color);border-right:none;border-radius:2px 0 0 2px;box-shadow:inset 0 1px 2px var(--ytd-searchbox-legacy-border-shadow-color);padding:2px 6px;flex:1;flex-basis:1e-9px;display:flex;flex-direction:row;}" +
			// Prepare voice search button
			"#voice-search-button{border-radius:0px;background:none;}" +
			"#voice-search-button button{background:none;margin-left:-4px;}" +
			// Prepare search icons
			"#search-icon{display:none;}" +
			"#search-icon-legacy{border-radius:0 2px 2px 0;border:1px solid var(--ytd-searchbox-legacy-button-border-color);background:var(--ytd-searchbox-legacy-button-border-color);}" +
			// Old search input margins
			"input#search{padding:1px 2px;margin-left:4px;}" +
			// Remove thumbnail roundings
			"#thumbnail{border-radius:0px;}" +
			// Fix video listing hover action menu
			"#dismissible.ytd-compact-video-renderer:not(:hover)>div.details>#menu{visibility:hidden;}" +
			// Old homepage top bar roundings(also applies to vp filters apparently)
			"yt-chip-cloud-chip-renderer{border-radius:16px;}" +
			// Old video duration roundings
			"ytd-thumbnail-overlay-time-status-renderer{margin:4px;}" +
			"div.ytd-thumbnail-overlay-time-status-renderer>badge-shape{border-radius:2px;height:12px;padding:3px 4px;background:rgba(0,0,0,0.8);font-size:1.2rem;font-weight:500;letter-spacing:0.5px;font-family:Roboto,Arial,sans-serif;}" + // line-height:1.2rem;
			// Restyle Join and Analytics buttons
			(!SeriStyleSettings.Advanced.LegacyPanels.Value ?
				"#sponsor-button yt-button-shape>button{" + (SeriStyleSettings.VideoPage.HideJoinButton.Value ? "display:none;" : "text-transform:uppercase;background:none;border:1px solid #3EA6FF;color:#3EA6FF;border-radius:3px;") + "}" +
				"#analytics-button yt-button-shape>button{text-transform:uppercase;background:#065FD4;color:#FFF;border-radius:3px;}"
				: "") +
			// Fix the Subscribe button
			"ytd-subscribe-button-renderer{transition:none;width:unset;}" +
			SelSubPassiveBtn + "{border-radius:3px;text-transform:uppercase;}" +
			SelSubPassiveBtn + ".yt-spec-button-shape-next--filled{background:#C00;color:#FFF;}" + // "SUBSCRIBE" button, red color
			SelSubPassiveBtn + "{background:#2C2C2C;color:#A8A8A8;}" +
			"#subscribe-button yt-button-shape[invisible]{display:block;position:unset;pointer-events:unset;visibility:unset;}" +
			"#notification-preference-button div.cbox{display:none;}" + // widest: "#notification-preference-button > ytd-subscription-notification-toggle-button-renderer-next > yt-button-shape > button > div.cbox.yt-spec-button-shape-next--button-text-content"
			"#notification-preference-button div.yt-spec-button-shape-next__secondary-icon{display:none;}" + // widest: #notification-preference-button > ytd-subscription-notification-toggle-button-renderer-next > yt-button-shape > button > div.yt-spec-button-shape-next__secondary-icon
			"#notification-preference-button div.yt-spec-button-shape-next__icon{pointer-events:none;margin-right:0px;}" + // widest: #notification-preference-button > ytd-subscription-notification-toggle-button-renderer-next > yt-button-shape > button > div.yt-spec-button-shape-next__icon
			"#notification-preference-button button{background:none;padding-right:0px;}" + // widest: #notification-preference-button > ytd-subscription-notification-toggle-button-renderer-next > yt-button-shape > button
			"#notification-preference-button div.yt-spec-button-shape-next__button-text-content{display:none;}" +
			// Fix notification bell
			SelSubContainer + "{display:flex;flex-direction:row;}" +
			// Hide channel handles
			"p.ytd-c4-tabbed-header-renderer{display:none;}" +
			// Hide feedback shapes
			(SeriStyleSettings.General.HideFeedback.Value ? "yt-touch-feedback-shape,yt-interaction{display:none;}" : "") +
			// Old colors fixes
			(SeriStyleSettings.General.OldColors.Value ?
				// Old background color
				"ytd-app,ytd-browse,ytd-two-column-browse-results-renderer[page-subtype='playlist'].ytd-browse,ytd-page-manager,#show-hide-button>ytd-button-renderer{background:#181818;}" +
				// Old top and left bar colors
				"#background.ytd-masthead{background:rgba(33,33,33,0.98);}" +
				"#guide-content.ytd-app,ytd-mini-guide-renderer.ytd-app{background:#212121;}" +
				// Fix chip renderer colors
				"ytd-browse[page-subtype='home'] #chips-wrapper.ytd-feed-filter-chip-bar-renderer{border-top:solid 1px #4D4D4D;border-bottom:none;background:#212121;}" +
				"#left-arrow.ytd-feed-filter-chip-bar-renderer:after{background:linear-gradient(to right,rgba(33,33,33,0.98)20%,rgba(33,33,33,0)80%);}" +
				"#right-arrow.ytd-feed-filter-chip-bar-renderer:before{background:linear-gradient(to left,rgba(33,33,33,0.98)20%,rgba(33,33,33,0)80%);}" +
				"#left-arrow-button.ytd-feed-filter-chip-bar-renderer,#right-arrow-button.ytd-feed-filter-chip-bar-renderer{background:#212121;}"
				: "") + // rgba(33,33,33,0.98);
			// Remove roundings on left side menu hover selections
			"ytd-guide-entry-renderer>#endpoint{border-radius:0px;}" +
			// Remove rounded corners everywhere known
			"[rounded-corners],.ytp-rounded-menu,ytd-menu-popup-renderer{border-radius:0px;}" +
			// Force keyboard color
			"#container.ytd-searchbox span{filter:invert(100%);}" +
			// Remove logo selection outline
			"a#logo.ytd-topbar-logo-renderer::before{display:none;}" +
			// Fix notification badge visuals
			(SeriStyleSettings.General.FixNotificationBadge.Value ? "div.yt-spec-icon-badge-shape--type-notification>div.yt-spec-icon-badge-shape__badge{border:none;padding-left:3px;background:#c11;}" : "") +
			// Left mini sidebar (available on low dimensions like my offscreen) fixes
			"ytd-mini-guide-renderer.ytd-app{padding:0px;}" +
			"ytd-mini-guide-renderer.ytd-app>#items>ytd-mini-guide-entry-renderer{border-radius:0px;background:none;}" +

			/* Homepage */
			// Hide shorts shelf
			(SeriStyleSettings.HomePage.HideShorts.Value ? "#contents>ytd-rich-section-renderer{display:none;}" : "") +
			// Hide thumbnail background
			"ytd-thumbnail.ytd-rich-grid-media:before{background:none;}" +
			// Hide series
			(SeriStyleSettings.HomePage.HideSeries.Value ? "ytd-badge-supported-renderer.top-badge{display:none;}" : "") +
			// Fix alerts
			(SeriStyleSettings.Playlist.TrueOld.Value ? "#alerts.ytd-browse{padding-right:0px;}" : "") +
			// Remove jam paddings
			"yt-collections-stack{display:none;}" +
			"ytd-compact-radio-renderer{margin-top:0px;}" + // Hints for selection: .use-ellipsis; has attr "collections" w/o value; TODO HIGH: Add jam remover

			/* Videoplayer */
			// Recolor HD
			".ytp-swatch-color-white{color:#F00;font-weight:900;}" +
			// Self explanatory
			(SeriStyleSettings.VideoPlayer.DisableGradient.Value ? ".ytp-gradient-bottom,.ytp-gradient-top{display:none;}" : "") +
			(SeriStyleSettings.VideoPlayer.DisableHeatmap.Value ? ".ytp-heat-map-container{display:none;}" : "") +
			(SeriStyleSettings.VideoPlayer.HideMiniPlayer.Value ? ".ytp-miniplayer-button{display:none;}" : "") +
			// Old settings panel style
			".ytp-popup.ytp-settings-menu{background:#111C;" +
			(SeriStyleSettings.VideoPlayer.SettingsMenuMode.Value == 0 || SeriStyleSettings.VideoPlayer.SettingsMenuMode.Value == 1
				? "border-radius:2px;"
				: SeriStyleSettings.VideoPlayer.SettingsMenuMode.Value == 2
					? "border-radius:4px;"
					: SeriStyleSettings.VideoPlayer.SettingsMenuMode.Value == 3
						? "border-radius:0px;"
						: "") +
			"}" +

			/* Playlists */
			// Remove roundings
			"ytd-playlist-video-renderer{border-radius:0px;}" +
			// Old title font
			"#text.yt-sans-28{font-family:Roboto,Arial,sans-serif;font-size:24px;font-weight:400;line-height:34px;text-decoration-color:#FFF;text-decoration-line:none;text-decoration-style:solid;text-decoration-thickness:auto;text-size-adjust:100%;word-break:break-word;}" + // Alternative selector: .thumbnail-and-metadata-wrapper>div>yt-dynamic-sizing-formatted-string>div>yt-formatted-string
			// Fix playlist entry hover action menu
			"ytd-playlist-video-renderer:not(:hover)>#menu{visibility:hidden;}" +
			// True Old
			(SeriStyleSettings.Playlist.TrueOld.Value ? // TODO: Move duplicates outside of this scope - it's not as easy because some properties are different. Are they even relevant anymore?
				// Restore position & dimensions, fix colors
				"ytd-browse.ytd-page-manager{padding-top:0px;}" +
				"yt-page-header-renderer.page-header-sidebar{margin-left:0px;height:calc(100vh - var(--ytd-toolbar-height));}" +
				(SeriStyleSettings.Playlist.LegacyTones.Value ?
					"yt-page-header-renderer.page-header-sidebar{background:rgba(255,255,255,0.05);}" // In the past: var(--yt-spec-general-background-a)
					:
					"yt-page-header-renderer.page-header-sidebar{background:#181818;}" +
					"ytd-browse[page-subtype='playlist'],ytd-item-section-renderer[page-subtype='playlist'] #contents.ytd-item-section-renderer{background:#0F0F0F;}" +
					""
				) +
				"yt-page-header-renderer.page-header-sidebar{margin-left:0px;}" +
				"page-header-view-model-wiz__page-header-background{margin-bottom:0px;border-radius:0px;}" +
				// Hide immersive background
				"div.YtCinematicContainerViewModelBackgroundGradient{background:none;}" +
				"img.YtCinematicContainerViewModelBackgroundImage{display:none;}" +
				"div.immersive-header-background-wrapper{background:none;}" +
				".YtCinematicContainerViewModelHost{background:none;}" +
				// Metadata: Proper overflow, pins, old font
				".page-header-view-model-wiz__page-header-title span{font-family:Roboto,Arial,sans-serif;font-size:2.8rem;line-height:3.8rem;font-weight:400;}" +
				".yt-content-metadata-view-model-wiz__metadata-row:nth-child(2){display:inline-block;}" +
				".yt-content-metadata-view-model-wiz__metadata-row>span{font-family:Roboto,Arial,sans-serif;font-size:14px;font-weight:400;letter-spacing:0.2px;line-height:20px;color:#AAA;white-space:pre-wrap;}" +
				"yt-formatted-string.byline-item>span{display:inline-block;}" +
				".yt-content-metadata-view-model-wiz__metadata-row>.yt-content-metadata-view-model-wiz__metadata-text:first-child{display:none;}" +
				".yt-content-metadata-view-model-wiz__metadata-row>.yt-content-metadata-view-model-wiz__delimiter:nth-child(2){display:none;}" +
				// Remove cover thumbnail rounding
				".yt-content-preview-image-view-model-wiz--large-rounded-image{border-radius:0px;}" +
				// Old video list padding
				"ytd-two-column-browse-results-renderer[page-subtype='playlist'].ytd-browse,ytd-browse[page-subtype='playlist']>#alerts{padding-left:360px;}" +
				// Description fixes
				"yt-description-preview-view-model{pointer-events:none;color:#AAA;}" +
				"yt-description-preview-view-model truncated-text-content{max-height:unset;-webkit-mask-image:unset;}" +
				"yt-description-preview-view-model truncated-text-content>span{font-family:Roboto,Arial,sans-serif;font-size:14px;font-weight:400;letter-spacing:0.2px;line-height:20px;color:#AAA;white-space:pre-wrap;}" +
				"page-header-view-model-wiz__page-header-headline-info{cursor:text;}" + // should work properly after transformer-playlist fix, could be disabled for legacy toolbar purposes
				// Fix one of the paddings (lol)
				"div.metadata-action-bar.style-scope.ytd-playlist-header-renderer{margin-top:4px;}" +
				//
				""
				:
				// Metadata: Proper overflow, pins, old font (Terminated by UI revamp)
				/*"yt-formatted-string.byline-item{margin-right:0px;font-family:Roboto,Arial,sans-serif;font-size:14px;font-weight:400;letter-spacing:0.2px;line-height:20px;color:#FFF;white-space:pre-wrap;}" +
				"yt-formatted-string.byline-item>span{display:inline-block;}" +
				"div.metadata-stats.ytd-playlist-byline-renderer{max-height:unset;overflow:visible;display:block;}" +
				"yt-formatted-string.byline-item:not(:nth-child(6))::after{content:'•';margin-left:4px;margin-right:1px;}" +*/
				//
				""
			) +

			/* Channel Page */
			(SeriStyleSettings.ChannelPage.TrueOld.Value ? // TODO: Relocate this... maybe?
				// Metadata: Only show subscriber count
				SelMetaSpan + "{margin:0;}" +
				SelMetaSpan + ">#channel-handle{display:none;}" +
				SelMetaSpan + ">#videos-count{display:none;}" +
				SelMeta + " span.delimiter{display:none;}" +
				SelMeta + ">#channel-tagline{display:none;}" +
				SelMeta + ">#channel-header-links{display:none;}" +
				// Fix channel name size
				SelMeta + " #text.ytd-channel-name{font-size:24px;font-weight:400;}" +
				SelMeta + ">#channel-name{font-size:unset;line-height:unset;}" +
				// Part of subscribe button fix
				SelMeta + "{width:max-content;}" +
				// Fix misaligned badge
				SelMeta + ">#channel-name{display:flex;align-items:center;font-size:unset;line-height:unset;}" +
				SelMeta + ">#channel-name>ytd-badge-supported-renderer>div>yt-icon{margin-bottom:0px;}" +
				SelMeta + ">#channel-name>ytd-badge-supported-renderer{margin-left:8px;}" +
				// Header realignment
				"#channel-header-container.ytd-c4-tabbed-header-renderer{padding-top:0px;align-items:center;}" +
				"#inner-header-container.ytd-c4-tabbed-header-renderer{flex-direction:row;margin-top:0px;}" +
				// Avatar style fixes
				"#channel-header-container.ytd-c4-tabbed-header-renderer>#avatar{width:80px;height:80px;margin-bottom:0px;}" +
				// Fixing tab styles
				".yt-tab-shape-wiz__tab{padding:0 32px;font-family:Roboto,Noto,sans-serif;font-size:14px;font-weight:500;letter-spacing:0.007px;text-size-adjust:100%;text-transform:uppercase;white-space:nowrap;}" +
				"yt-tab-shape.yt-tab-shape-wiz{margin-right:0px;}" +
				".yt-tab-group-shape-wiz__slider{display:none;}" +
				".yt-tab-shape-wiz__tab-bar--tab-bar-selected{height:2px;background:#AAA;}" +
				//
				""
				: "") +
			(SeriStyleSettings.General.OldColors.Value ?
				"#channel-header.ytd-c4-tabbed-header-renderer, #tabs-inner-container.ytd-c4-tabbed-header-renderer{background:#181818;}" +
				"ytd-browse[page-subtype='channels'] {background:#0F0F0F;}"
				: "") +
			(SeriStyleSettings.ChannelPage.NoSponsors.Value ? "ytd-recognition-shelf-renderer{display:none;}" : "") +
			""
		).replaceAll(/(?<!!important);/g, "!important;"),
	"id": "seristyle-tf-css"
}));