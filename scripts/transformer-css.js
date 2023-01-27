/* jshint -W014 */

var SelSubPassiveBtn = "#subscribe-button yt-button-shape>button";

// TODO: Merge general button styles
document.head.appendChild(DomUtils.BuildElement("style", {
	"innerText":
		(
			/* General */
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
			(SeriStyleSettings.General.ThumbnailRoundings.Value ? "#thumbnail{border-radius:0px;}" : "") +
			// Old homepage top bar roundings(also applies to vp filters apparently)
			"yt-chip-cloud-chip-renderer{border-radius:16px;}" +
			// Old time status roundings
			"ytd-thumbnail-overlay-time-status-renderer{border-radius:2px;}" +
			// Restyle Join and Analytics buttons
			(!SeriStyleSettings.Advanced.LegacyPanels.Value ?
				"#sponsor-button yt-button-shape>button{" + (SeriStyleSettings.VideoPage.Uppercase.Value ? "text-transform:uppercase;" : "") + "background:none;border:1px solid #3EA6FF;color:#3EA6FF;border-radius:3px;}" +
				"#analytics-button yt-button-shape>button{" + (SeriStyleSettings.VideoPage.Uppercase.Value ? "text-transform:uppercase;" : "") + "background:#065FD4;color:#FFF;border-radius:3px;}"
				: "") +
			// Old subscribe button color & form
			SelSubPassiveBtn + "{border-radius:3px;" + (SeriStyleSettings.VideoPage.Uppercase.Value ? "text-transform:uppercase;" : "") + "}" +
			SelSubPassiveBtn + ".yt-spec-button-shape-next--filled{background:#C00;color:#FFF;}" + // "SUBSCRIBE" button, red color
			(SeriStyleSettings.Advanced.LegacySubButton.Value
				? SelSubPassiveBtn + ".yt-spec-button-shape-next--tonal{background:#2C2C2C;color:#A8A8A8;}"
				: "#subscribe-button>ytd-subscribe-button-renderer>yt-button-shape>button{background:#2C2C2C;color:#A8A8A8;}"
			) +
			// Fix sub button, TODO: this might not exist for long!
			(!SeriStyleSettings.Advanced.LegacySubButton.Value ?
				"#subscribe-button yt-button-shape[hidden]{display:block;}" +
				"#notification-preference-button div.cbox{display:none;}" + // widest: "#notification-preference-button > ytd-subscription-notification-toggle-button-renderer-next > yt-button-shape > button > div.cbox.yt-spec-button-shape-next--button-text-content"
				"#notification-preference-button div.yt-spec-button-shape-next__secondary-icon{display:none;}" + // widest: #notification-preference-button > ytd-subscription-notification-toggle-button-renderer-next > yt-button-shape > button > div.yt-spec-button-shape-next__secondary-icon
				"#notification-preference-button div.yt-spec-button-shape-next__icon{margin-right:0px;}" + // widest: #notification-preference-button > ytd-subscription-notification-toggle-button-renderer-next > yt-button-shape > button > div.yt-spec-button-shape-next__icon
				"#notification-preference-button button{background:none;padding-right:0px;}" // widest: #notification-preference-button > ytd-subscription-notification-toggle-button-renderer-next > yt-button-shape > button
				: "") +
			// Hide channel handles
			"p.ytd-c4-tabbed-header-renderer{display:none;}" +
			// Hide feedback shapes
			(SeriStyleSettings.General.HideFeedback.Value ? "yt-touch-feedback-shape{display:none;}" : "") +
			// Old colors fixes
			(SeriStyleSettings.General.OldColors.Value ?
				// Old background color(no longer available through launch transformer)
				"ytd-app,ytd-browse,ytd-two-column-browse-results-renderer[page-subtype='playlist'].ytd-browse,ytd-page-manager{background:#181818;}" +
				// Fix border of chip renderer
				"#chips-wrapper.ytd-feed-filter-chip-bar-renderer{border-bottom:none;}"
				: "") +
			// Remove roundings on left side menu hover selections
			"ytd-guide-entry-renderer>#endpoint{border-radius:0px;}" +
			// Remove rounded corners everywhere known
			"[rounded-corners],.ytp-rounded-menu,ytd-menu-popup-renderer{border-radius:0px;}" +
			// Force keyboard color
			"#container.ytd-searchbox span{filter:invert(100%);}" +

			/* Homepage */
			// Hide shorts shelf
			(SeriStyleSettings.HomePage.HideShorts.Value ? "#contents>ytd-rich-section-renderer{display:none;}" : "") +
			// Hide thumbnail background
			"ytd-thumbnail.ytd-rich-grid-media:before{background:none;}" +
			// Hide series
			(SeriStyleSettings.HomePage.HideSeries.Value ? "ytd-badge-supported-renderer.top-badge.ytd-rich-grid-media{display:none;}" : "") +

			/* Videopage */
			// Self explanatory
			(SeriStyleSettings.VideoPlayer.DisableGradient.Value ? ".ytp-gradient-bottom,.ytp-gradient-top{display:none;}" : "") +
			(SeriStyleSettings.VideoPlayer.DisableHeatmap.Value ? ".ytp-heat-map-container{display:none;}" : "") +
			(SeriStyleSettings.VideoPlayer.HideMiniPlayer.Value ? ".ytp-miniplayer-button{display:none;}" : "") +
			// Force hide immersive
			"#cinematics{display:none;}" +
			// Old settings panel color
			".ytp-popup.ytp-settings-menu{background:#111C;}" +

			/* Videoplayer */
			// Recolor HD
			".ytp-swatch-color-white{color:#F00;font-weight:900;}" +

			/* Playlists */
			(SeriStyleSettings.Playlist.TrueOld.Value ?
				// Restore position & dimensions, fix colors
				"ytd-browse.ytd-page-manager{padding-top:0px;}" +
				"ytd-playlist-header-renderer{background:rgba(255,255,255,0.05);margin-left:0px;height:calc(100vh - var(--ytd-toolbar-height));}" + // In the past: var(--yt-spec-general-background-a)
				".ytd-playlist-header-renderer.immersive-header-container{margin-bottom:0px;border-radius:0px;}" +
				// Hide immersive background
				"div.immersive-header-gradient{background:none;}" +
				"yt-img-shadow.blurred-image.ytd-playlist-header-renderer{display:none;}" +
				"div.immersive-header-background-wrapper{background:none;}" +
				// Metadata: Proper overflow, pins, old font
				"yt-formatted-string.byline-item{margin-right:0px;font-family:Roboto,Arial,sans-serif;font-size:14px;font-weight:400;letter-spacing:0.2px;line-height:20px;color:#AAA;white-space:pre-wrap;}" +
				"yt-formatted-string.byline-item>span{display:inline-block;}" +
				"div.metadata-stats.ytd-playlist-byline-renderer{max-height:unset;overflow:visible;display:block;}" +
				"yt-formatted-string.byline-item:not(:nth-child(6))::after{content:'•';margin-left:4px;margin-right:2px;}" +
				// Old title font(might affect certain other entries)
				"#text.yt-sans-28{font-family:Roboto,Arial,sans-serif;font-size:24px;font-weight:400;line-height:34px;text-decoration-color:#FFF;text-decoration-line:none;text-decoration-style:solid;text-decoration-thickness:auto;text-size-adjust:100%;word-break:break-word;}" + // Alternative selector: .thumbnail-and-metadata-wrapper>div>yt-dynamic-sizing-formatted-string>div>yt-formatted-string
				// Remove cover thumbnail rounding
				(SeriStyleSettings.General.ThumbnailRoundings.Value ? ".image-wrapper{border-radius:0px;}" : "") +
				// Old video list padding
				"ytd-two-column-browse-results-renderer[page-subtype='playlist'].ytd-browse,ytd-browse[page-subtype='playlist']>#alerts{padding-left:360px;}" +
				// Remove roundings
				"ytd-playlist-video-renderer{border-radius:0px;}" +
				//
				""
				:
				// Metadata: Proper overflow, pins, old font
				"yt-formatted-string.byline-item{margin-right:0px;font-family:Roboto,Arial,sans-serif;font-size:14px;font-weight:400;letter-spacing:0.2px;line-height:20px;color:#FFF;white-space:pre-wrap;}" +
				"yt-formatted-string.byline-item>span{display:inline-block;}" +
				"div.metadata-stats.ytd-playlist-byline-renderer{max-height:unset;overflow:visible;display:block;}" +
				"yt-formatted-string.byline-item:not(:nth-child(6))::after{content:'•';margin-left:4px;margin-right:2px;}" +
				// Old title font(might affect certain other entries)
				"#text.yt-sans-28{font-family:Roboto,Arial,sans-serif;font-size:24px;font-weight:400;line-height:34px;text-decoration-color:#FFF;text-decoration-line:none;text-decoration-style:solid;text-decoration-thickness:auto;text-size-adjust:100%;word-break:break-word;}" + // Alternative selector: .thumbnail-and-metadata-wrapper>div>yt-dynamic-sizing-formatted-string>div>yt-formatted-string
				// Remove roundings
				"ytd-playlist-video-renderer{border-radius:0px;}" +
				//
				""
			)
		).replaceAll(/(?<!!important);/g, "!important;"),
	"id": "seristyle-tf-css"
}));