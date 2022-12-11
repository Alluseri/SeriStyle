var SelSubPassiveBtn = "#subscribe-button yt-button-shape>button";

document.head.appendChild(DomUtils.BuildElement("style", {
	"innerText":
		(
			/* General */
			// Old search box styles
			"#container.ytd-searchbox{" + (true ? "margin-left:0px;" : "margin-left:32px;") + "position:relative;align-items:center;border:1px solid var(--ytd-searchbox-legacy-border-color);border-right:none;border-radius:2px 0 0 2px;box-shadow:inset 0 1px 2px var(--ytd-searchbox-legacy-border-shadow-color);padding:2px 6px;flex:1;flex-basis:1e-9px;display:flex;flex-direction:row;}" +
			// Prepare voice search button
			"#voice-search-button{border-radius:0px;background-color:#0000;}" +
			"#voice-search-button button{background-color:#0000;margin-left:-4px;}" +
			// Prepare search icons
			"#search-icon{display:none;}" +
			"#search-icon-legacy{border-radius:0 2px 2px 0;border:1px solid var(--ytd-searchbox-legacy-button-border-color);background-color:var(--ytd-searchbox-legacy-button-border-color);}" +
			// Old search input margins
			"input#search{padding:1px 2px;margin-left:4px;}" +
			// Old subscribe button color & form
			SelSubPassiveBtn + "{border-radius:3px;" + (SeriStyleSettings.VideoPage.Uppercase.Value ? "text-transform:uppercase;" : "") + "}" +
			SelSubPassiveBtn + ".yt-spec-button-shape-next--tonal{background-color:#2C2C2C;color:#A8A8A8;}" +
			SelSubPassiveBtn + ".yt-spec-button-shape-next--filled{background-color:#C00;color:#FFF;}" +
			//
			""
		).replaceAll(/(?<!!important);/g, "!important;"),
	"id": "seristyle-tf-css"
}));