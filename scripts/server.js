/* jshint esversion: 11 */

(async () => {
	if (!document.location.href.includes("youtube")) return; // I don't know... Chrome Extension API is just that horrible.
	var Environment = this.browser || this.chrome;

	if (!Environment.storage) return console.log("[SeriStyle|FATAL] Couldn't find storage, using default settings.");
	else {
		var Modified = (await Environment.storage.sync.get(["ss_settings"])).ss_settings;
		if (!Modified)
			Environment.storage.sync.set({ "ss_settings": Modified = {} });
		for (var Category in Modified)
			for (var Setting in Modified[Category])
				SeriStyleSettings[Category][Setting].Value = Modified[Category][Setting];
	}

	this.$ = document.querySelector.bind(document);
	this.$$ = (Query) => Array.from(document.querySelectorAll(Query));
	Environment.runtime.sendMessage({ Operation: "SeriStyle_LoadScript", Args: ["scripts/page-observer.js"] });
})();