// jshint -W014, -W086

var SelSubPassiveBtn = "#subscribe-button-shape>button";
var SelSubContainer = "#subscribe-button>ytd-subscribe-button-renderer>yt-smartimation>.smartimation__content";
var SelMeta = "#meta.ytd-c4-tabbed-header-renderer";
var SelMetaSpan = SelMeta + ">span.meta-item";

document.head.appendChild(DomUtils.BuildElement("style", {
	"innerText":
		(
			/* General */
			// Wtfard
			"ytd-ad-slot-renderer{display:none;}" +
			// Hide Shorts on search page
			"ytd-reel-shelf-renderer{display:none;}" +
			// Remove roundings for notification box
			"#contentWrapper>ytd-multi-page-menu-renderer{border-radius:0px;}" +
			// Remove roundings on many menus
			"yt-sheet-view-model{border-radius:0px;}" +
			// White letters in comment input boxes
			"tp-yt-paper-input-container{color:#FFF;}" +
			// Remove "You"
			"#header.ytd-guide-collapsible-section-entry-renderer{display:none;}" +
			// General pink color fix (may stop working later, try removing "[refresh]" to generalize)
			"html[refresh],[refresh]{--yt-spec-static-brand-red:#F00;}" +
			// Fix progress bar colors (main player, watched, miniplayer)
			"div.ytp-play-progress,.ytd-thumbnail-overlay-resume-playback-renderer,.YtProgressBarLineProgressBarPlayed,.YtThumbnailOverlayProgressBarHostWatchedProgressBarSegmentModern{background:#F00;}" +
			// Fix logo color
			"#logo-icon g:not([id]):first-child>path:first-child{fill:#F00;}" +
			// "HD" chip on settings button and a bunch of other color fixes (videopage)
			".ytp-settings-button.ytp-hd-quality-badge::after, .ytp-settings-button.ytp-hdr-quality-badge::after, .ytp-settings-button.ytp-4k-quality-badge::after, .ytp-settings-button.ytp-5k-quality-badge::after, .ytp-settings-button.ytp-8k-quality-badge::after, .ytp-settings-button.ytp-3d-badge-grey::after, .ytp-settings-button.ytp-3d-badge::after{background-color:#F00;}" +
			// Modern checkbox color fix
			".ytp-menuitem[aria-checked=true] .ytp-menuitem-toggle-checkbox{background:#F00;}" +
			// [Search box] Old search box styles
			"div.ytSearchboxComponentInputBox{" + (SeriStyleSettings.General.NormalizeSearchBar.Value ? "margin-left:0px;" : "") + "position:relative;align-items:center;border:1px solid hsl(0,0%,18.82%);padding:2px 6px;flex:1;flex-basis:1e-9px;display:flex;flex-direction:row;border-radius:2px;}" +
			// [Search box] Prepare voice search button
			"#voice-search-button{border-radius:0px;background:none;}" +
			"#voice-search-button button{background:none;margin-left:-4px;}" +
			// [Search box] Prepare search icons
			"button.ytSearchboxComponentSearchButton{border-radius:0 2px 2px 0;border:1px solid hsl(0,0%,18.82%);background:hsl(0,0%,18.82%);}" +
			// [Search box] Old search input dimensions
			"input.yt-searchbox-input{padding:1px 2px;margin-left:4px;line-height:24px;height:24px;}" +
			// [Search box] Hide modern search icon
			".ytSearchboxComponentInnerSearchIcon{display:none;}" +
			// [Search box] Old proper height
			"yt-searchbox{height:32px;}" +
			// Remove thumbnail roundings
			"#thumbnail,yt-thumbnail-view-model{border-radius:0px;}" +
			// Fix video listing hover action menu
			"#dismissible.ytd-compact-video-renderer:not(:hover)>div.details>#menu,yt-lockup-view-model:not(:hover) .yt-lockup-metadata-view-model-wiz__menu-button{visibility:hidden;}" +
			// Old homepage top bar roundings(also applies to vp filters apparently)
			"yt-chip-cloud-chip-renderer{border-radius:16px;}" +
			// Old video duration roundings
			"ytd-thumbnail-overlay-time-status-renderer,yt-thumbnail-overlay-badge-view-model{margin:4px;}" +
			"yt-thumbnail-badge-view-model>badge-shape,div.ytd-thumbnail-overlay-time-status-renderer>badge-shape{border-radius:2px;height:12px;padding:3px 4px;background:rgba(0,0,0,0.8);font-size:1.2rem;font-weight:500;letter-spacing:0.5px;font-family:Roboto,Arial,sans-serif;}" + // line-height:1.2rem;
			// Restyle Join and Analytics buttons
			(!SeriStyleSettings.Advanced.LegacyPanels.Value ?
				"#sponsor-button yt-button-shape>button{" + (SeriStyleSettings.VideoPage.HideJoinButton.Value ? "display:none;" : "text-transform:uppercase;background:none;border:1px solid #3EA6FF;color:#3EA6FF;border-radius:3px;") + "}" +
				"#analytics-button yt-button-shape>button{text-transform:uppercase;background:#065FD4;color:#FFF;border-radius:3px;}"
				: "") +
			// Fix the Subscribe button
			"ytd-subscribe-button-renderer{transition:none;width:unset;}" +
			SelSubPassiveBtn + "{border-radius:3px;text-transform:uppercase;background:#2C2C2C;color:#A8A8A8;}" +
			SelSubPassiveBtn + ".yt-spec-button-shape-next--filled{background:#C00;color:#FFF;}" + // "SUBSCRIBE" button, red color
			"#subscribe-button yt-button-shape[invisible]{display:block;position:unset;pointer-events:unset;visibility:unset;}" +
			"#notification-preference-button button{background:none;padding-right:0px;}" + // widest: #notification-preference-button > ytd-subscription-notification-toggle-button-renderer-next > yt-button-shape > button
			"#notification-preference-button div.cbox{display:none;}" + // widest: "#notification-preference-button > ytd-subscription-notification-toggle-button-renderer-next > yt-button-shape > button > div.cbox.yt-spec-button-shape-next--button-text-content"
			"#notification-preference-button div.yt-spec-button-shape-next__icon{pointer-events:none;margin-right:0px;}" + // widest: #notification-preference-button > ytd-subscription-notification-toggle-button-renderer-next > yt-button-shape > button > div.yt-spec-button-shape-next__icon
			"#notification-preference-button div.yt-spec-button-shape-next__secondary-icon{display:none;}" + // widest: #notification-preference-button > ytd-subscription-notification-toggle-button-renderer-next > yt-button-shape > button > div.yt-spec-button-shape-next__secondary-icon
			"#notification-preference-button div.yt-spec-button-shape-next__button-text-content{display:none;}" +
			// Fix notification bell of the Subscribe button
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
			// Remove logo selection outline
			"a#logo.ytd-topbar-logo-renderer::before{display:none;}" +
			// Fix notification badge visuals
			(SeriStyleSettings.General.FixNotificationBadge.Value ?
				"div.yt-spec-icon-badge-shape--type-notification>div.yt-spec-icon-badge-shape__badge{border:none;padding-left:3px;background:#c11;}" +
				".yt-spec-icon-badge-shape--style-overlay.yt-spec-icon-badge-shape--type-cart-refresh .yt-spec-icon-badge-shape__badge{color:#fff;}"
				: "") +
			// Left mini sidebar (available on low dimensions like my offscreen) fixes
			"ytd-mini-guide-renderer.ytd-app{padding:0px;}" +
			"ytd-mini-guide-renderer.ytd-app>#items>ytd-mini-guide-entry-renderer{border-radius:0px;background:none;}" +
			// Fix video list margins
			"yt-lockup-view-model{margin-bottom:8px;}" +
			"iron-selector#chips{display:block;}" +
			"#items.ytd-watch-next-secondary-results-renderer{gap:8px;}" + // actual observed value is 11 but lol
			"yt-content-metadata-view-model>.yt-content-metadata-view-model-wiz__metadata-row--metadata-row-wrap{position:absolute;}" + // handles flairs

			/* Homepage */
			// Hide shorts shelf
			"#contents>ytd-rich-section-renderer{display:none;}" +
			// Hide thumbnail background
			"ytd-thumbnail.ytd-rich-grid-media:before{background:none;}" +
			// Hide series
			(SeriStyleSettings.HomePage.HideSeries.Value ? "ytd-badge-supported-renderer.top-badge{display:none;}" : "") +
			// Fix alerts
			(SeriStyleSettings.Playlist.TrueOld.Value ? "#alerts.ytd-browse{padding-right:0px;}" : "") +
			// Remove jam paddings
			"[class*='collections-stack-wiz__collection-stack']{display:none;}" +
			".yt-lockup-view-model-wiz--horizontal.yt-lockup-view-model-wiz--collection-stack-2{margin-top:0px;}" + // Hints for selection: is the first child of yt-lockup-view-model
			// Remove highlighting
			"ytd-rich-item-renderer{background:none;box-shadow:unset;}" +
			// Remove preview video roundings
			"#media-container.ytd-video-preview{border-radius:0px;}" +
			// Force grid size
			(SeriStyleSettings.HomePage.ForceHomePageColumns.Value > 0 ?
				`ytd-rich-grid-renderer{--ytd-rich-grid-items-per-row:${SeriStyleSettings.HomePage.ForceHomePageColumns.Value};}` +
				"ytd-rich-item-renderer[rendered-from-rich-grid][is-in-first-column]{margin-left:calc(var(--ytd-rich-grid-item-margin)/2);}"
				: "") +
			// Remove absolutely retarded video controls
			".ytInlinePlayerControlsTopLeftControls,.ytInlinePlayerControlsBottomRightControls,.ytInlinePlayerControlsTopRightControls{display:none;}" +

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
				"ytd-browse[page-subtype='playlist'] page-header-view-model-wiz__page-header-background{margin-bottom:0px;border-radius:0px;}" +
				// Hide immersive background
				"div.ytCinematicContainerViewModelBackgroundGradient{background:none;}" +
				"img.ytCinematicContainerViewModelBackgroundImage{display:none;}" +
				"div.immersive-header-background-wrapper{background:none;}" +
				".ytCinematicContainerViewModelHost{background:none;}" +
				// Metadata: Proper overflow, pins, old font
				"ytd-browse[page-subtype='playlist'] .page-header-view-model-wiz__page-header-title span{font-family:Roboto,Arial,sans-serif;font-size:2.8rem;line-height:3.8rem;font-weight:400;}" +
				"ytd-browse[page-subtype='playlist'] .yt-content-metadata-view-model-wiz__metadata-row:nth-child(2){display:inline-block;}" +
				"ytd-browse[page-subtype='playlist'] .yt-content-metadata-view-model-wiz__metadata-row>span{font-family:Roboto,Arial,sans-serif;font-size:14px;font-weight:400;letter-spacing:0.2px;line-height:20px;color:#AAA;white-space:pre-wrap;}" +
				"ytd-browse[page-subtype='playlist'] yt-formatted-string.byline-item>span{display:inline-block;}" +
				"ytd-browse[page-subtype='playlist'] .yt-content-metadata-view-model-wiz__metadata-row>.yt-content-metadata-view-model-wiz__metadata-text:first-child{display:none;}" +
				"ytd-browse[page-subtype='playlist'] .yt-content-metadata-view-model-wiz__metadata-row>.yt-content-metadata-view-model-wiz__delimiter:nth-child(2){display:none;}" +
				// Remove cover thumbnail rounding
				"ytd-browse[page-subtype='playlist'] .yt-content-preview-image-view-model-wiz--large-rounded-image{border-radius:0px;}" +
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
			// Hide the "Channel sponsors" section
			(SeriStyleSettings.ChannelPage.NoSponsors.Value ? "ytd-recognition-shelf-renderer{display:none;}" : "") +
			// Fix silly button color https://github.com/Alluseri/SeriStyle/issues/21
			"ytd-browse[page-subtype='channels'] ytd-button-renderer .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--text{background:#222;}" +
			"ytd-browse[page-subtype='channels'] ytd-button-renderer .yt-spec-button-shape-next--call-to-action.yt-spec-button-shape-next--text a.yt-core-attributed-string__link{color:#DDD;}" +
			// Self-explanatory
			(SeriStyleSettings.ChannelPage.TrueOld.Value ?
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
			// Old colors for channel
			(SeriStyleSettings.General.OldColors.Value ?
				"#channel-header.ytd-c4-tabbed-header-renderer, #tabs-inner-container.ytd-c4-tabbed-header-renderer{background:#181818;}" +
				"ytd-browse[page-subtype='channels']{background:#0F0F0F;}"
				: "") +
			""
		).replaceAll(/(?<!!important);/g, "!important;"),
	"id": "seristyle-tf-css"
}));