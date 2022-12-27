(async () => {
	var Environment = this.browser || this.chrome;

	this.StorageMode = 0;

	try {
		if (!Environment.storage) {
			console.log("[SeriStyle|FATAL] Couldn't find storage, using default settings.");
			this.StorageMode = 1;
		} else {
			var Modified = (await Environment.storage.sync.get(["ss_settings"])).ss_settings;
			if (!Modified)
				Environment.storage.sync.set({ "ss_settings": Modified = {} });
			for (var Category in Modified)
				for (var Setting in Modified[Category])
					try {
						SeriStyleSettings[Category][Setting].Value = Modified[Category][Setting];
					} catch {
						Modified[Category][Setting] = undefined;
						console.log("Removed " + Category + "." + Setting + " due to absence in defaults.");
					}
		}
	} catch (ex) {
		console.log("[SeriStyle|FATAL] Couldn't access storage, using default settings.");
		this.StorageMode = 2;
		console.log(ex);
	}

	this.$ = document.querySelector.bind(document);
	this.$$ = (Query) => Array.from(document.querySelectorAll(Query));

	if (!document.location.href.includes("youtube")) return;

	Environment.runtime.sendMessage({ Operation: "SeriStyle_LoadScript", Args: ["scripts/page-observer.js"] });
})();