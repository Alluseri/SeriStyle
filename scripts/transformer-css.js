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
			// Old homepage top bar roundings
			"yt-chip-cloud-chip-renderer{border-radius:16px;}" +
			// Old time status roundings
			"ytd-thumbnail-overlay-time-status-renderer{border-radius:2px;}" +
			// Restyle Join and Analytics buttons
			(!SeriStyleSettings.VideoPage.LegacyPanels.Value ?
				"#sponsor-button yt-button-shape>button{" + (SeriStyleSettings.VideoPage.Uppercase.Value ? "text-transform:uppercase;" : "") + "background-color:#0000;border:1px solid #3EA6FF;color:#3EA6FF;border-radius:3px;}" +
				"#analytics-button yt-button-shape>button{" + (SeriStyleSettings.VideoPage.Uppercase.Value ? "text-transform:uppercase;" : "") + "background-color:#065FD4;color:#FFF;border-radius:3px;}"
				: "") +
			// Hide series
			(SeriStyleSettings.HomePage.HideSeries.Value ? "ytd-badge-supported-renderer.top-badge.ytd-rich-grid-media{display:none;}" : "") +
			// Recolor HD
			".ytp-swatch-color-white{color:#F00;}" +
			// Old subscribe button color & form
			SelSubPassiveBtn + "{border-radius:3px;" + (SeriStyleSettings.VideoPage.Uppercase.Value ? "text-transform:uppercase;" : "") + "}" +
			SelSubPassiveBtn + ".yt-spec-button-shape-next--filled{background-color:#C00;color:#FFF;}" + // "SUBSCRIBE" button, red color
			(SeriStyleSettings.General.LegacySubButton.Value
				? SelSubPassiveBtn + ".yt-spec-button-shape-next--tonal{background-color:#2C2C2C;color:#A8A8A8;}"
				: "#subscribe-button>ytd-subscribe-button-renderer>yt-button-shape>button{background-color:#2C2C2C;color:#A8A8A8;}"
			) +
			// Fix sub button, TODO: this won't exist for long!
			(!SeriStyleSettings.General.LegacySubButton.Value ?
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
			//
			"" +
			//
			""
		).replaceAll(/(?<!!important);/g, "!important;"),
	"id": "seristyle-tf-css"
}));