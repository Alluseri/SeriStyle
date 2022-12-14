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
			"#voice-search-button{border-radius:0px;background-color:#0000;}" +
			"#voice-search-button button{background-color:#0000;margin-left:-4px;}" +
			// Prepare search icons
			"#search-icon{display:none;}" +
			"#search-icon-legacy{border-radius:0 2px 2px 0;border:1px solid var(--ytd-searchbox-legacy-button-border-color);background-color:var(--ytd-searchbox-legacy-button-border-color);}" +
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
				"#sponsor-button yt-button-shape>button{" + (SeriStyleSettings.VideoPage.Uppercase.Value ? "text-transform:uppercase;" : "") + "background-color:#0000;border:1px solid #3EA6FF;color:#3EA6FF;border-radius:3px;}" +
				"#analytics-button yt-button-shape>button{" + (SeriStyleSettings.VideoPage.Uppercase.Value ? "text-transform:uppercase;" : "") + "background-color:#065FD4;color:#FFF;border-radius:3px;}"
				: "") +
			// Old subscribe button color & form
			SelSubPassiveBtn + "{border-radius:3px;" + (SeriStyleSettings.VideoPage.Uppercase.Value ? "text-transform:uppercase;" : "") + "}" +
			SelSubPassiveBtn + ".yt-spec-button-shape-next--filled{background-color:#C00;color:#FFF;}" + // "SUBSCRIBE" button, red color
			(SeriStyleSettings.Advanced.LegacySubButton.Value
				? SelSubPassiveBtn + ".yt-spec-button-shape-next--tonal{background-color:#2C2C2C;color:#A8A8A8;}"
				: "#subscribe-button>ytd-subscribe-button-renderer>yt-button-shape>button{background-color:#2C2C2C;color:#A8A8A8;}"
			) +
			// Fix sub button, TODO: this might not exist for long!
			(!SeriStyleSettings.Advanced.LegacySubButton.Value ?
				"#subscribe-button yt-button-shape[hidden]{display:block;}" +
				"#notification-preference-button div.cbox{display:none;}" + // widest: "#notification-preference-button > ytd-subscription-notification-toggle-button-renderer-next > yt-button-shape > button > div.cbox.yt-spec-button-shape-next--button-text-content"
				"#notification-preference-button div.yt-spec-button-shape-next__secondary-icon{display:none;}" + // widest: #notification-preference-button > ytd-subscription-notification-toggle-button-renderer-next > yt-button-shape > button > div.yt-spec-button-shape-next__secondary-icon
				"#notification-preference-button div.yt-spec-button-shape-next__icon{margin-right:0px;}" + // widest: #notification-preference-button > ytd-subscription-notification-toggle-button-renderer-next > yt-button-shape > button > div.yt-spec-button-shape-next__icon
				"#notification-preference-button button{background-color:#0000;padding-right:0px;}" // widest: #notification-preference-button > ytd-subscription-notification-toggle-button-renderer-next > yt-button-shape > button
				: "") +
			// Hide channel handles
			"p.ytd-c4-tabbed-header-renderer{display:none;}" +
			// Fix notification bell color
			"#notification-preference-button yt-icon{color:#909090;}" +
			"" +

			/* Homepage */
			// Hide shorts shelf
			(SeriStyleSettings.HomePage.HideShorts.Value ? "#contents>ytd-rich-section-renderer{display:none;}" : "") +
			// Hide thumbnail background
			"ytd-thumbnail.ytd-rich-grid-media:before{background-color:#0000;}" +
			// Hide series
			(SeriStyleSettings.HomePage.HideSeries.Value ? "ytd-badge-supported-renderer.top-badge.ytd-rich-grid-media{display:none;}" : "") +

			/* Videopage */
			//
			"" +

			/* Videoplayer */
			// Recolor HD
			".ytp-swatch-color-white{color:#F00;}" +

			/* Playlists */
			/*// Restore position & dimensions
			"ytd-browse.ytd-page-manager{padding-top:0px;}" +
			"ytd-playlist-header-renderer{margin-left:0px;height:calc(100vh - var(--ytd-toolbar-height));}" +
			".ytd-playlist-header-renderer.immersive-header-container{margin-bottom:0px;border-radius:0px;}" +
			// Hide immersive background
			"div.immersive-header-gradient{background:none;}" +
			"yt-img-shadow.blurred-image.ytd-playlist-header-renderer{display:none;}" +
			"div.immersive-header-background-wrapper{background-color:#0000;}" +
			// Metadata: Proper overflow, pins, old font
			"yt-formatted-string.byline-item{margin-right:0px;font-family:Roboto,Arial,sans-serif;font-size:14px;font-weight:400;letter-spacing:0.2px;line-height:20px;color:#AAA;white-space:pre-wrap;}" +
			"yt-formatted-string.byline-item>span{display:inline-block;}" +
			"div.metadata-stats.ytd-playlist-byline-renderer{max-height:unset;overflow:visible;display:block;}" +
			"yt-formatted-string.byline-item:not(:nth-child(6))::after{content:'???';margin-left:4px;margin-right:2px;}" +
			// Old title font
			"#text.yt-sans-28{font-family:Roboto,Arial,sans-serif;font-size:24px;font-weight:400;line-height:34px;text-decoration-color:#FFF;text-decoration-line:none;text-decoration-style:solid;text-decoration-thickness:auto;text-size-adjust:100%;word-break:break-word;}" + // Alternative selector: .thumbnail-and-metadata-wrapper>div>yt-dynamic-sizing-formatted-string>div>yt-formatted-string
			// Remove cover thumbnail rounding
			(SeriStyleSettings.General.ThumbnailRoundings.Value ? ".image-wrapper{border-radius:0px;}" : "") +*/
			""
		).replaceAll(/(?<!!important);/g, "!important;"),
	"id": "seristyle-tf-css"
}));