var IsFirefox = false; // js is funny but I'll leave it in global for safety

(async () => {
	const env = this.chrome || this.browser;
	if (env.runtime.getBrowserInfo) {
		let BrowserInfo = await env.runtime.getBrowserInfo();
		IsFirefox = BrowserInfo.name === "Firefox" || BrowserInfo.vendor === "Mozilla";
	}
	env.runtime.onMessage.addListener((Message, Sender, Respond) => {
		switch (Message.Operation) {
			case "SeriStyle_LoadScript":
				(this.chrome || this.browser).scripting.executeScript({
					target: IsFirefox
						? { tabId: Sender.tab.id } // jshint ignore: line
						: { tabId: Sender.tab.id, documentIds: Sender.documentId ? [Sender.documentId] : undefined },
					files: [Message.Args[0]]
				});
				return;
		}
	});
})();