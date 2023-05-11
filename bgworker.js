(async () => {
	const env = this.chrome || this.browser;
	var IsFirefox = false;

	if (env.runtime.getBrowserInfo) {
		let BrowserInfo = await env.runtime.getBrowserInfo();
		IsFirefox = BrowserInfo.name == "Firefox" || BrowserInfo.vendor == "Mozilla";
	}
	env.runtime.onMessage.addListener((Message, Sender, Respond) => {
		switch (Message.Operation) {
			case "SeriStyle_LoadScript":
				env.scripting.executeScript({
					target: IsFirefox
						? { tabId: Sender.tab.id } // jshint ignore: line
						: { tabId: Sender.tab.id, documentIds: Sender.documentId ? [Sender.documentId] : undefined },
					files: [Message.Args[0]]
				});
				return;
			case "SeriStyle_OpenURL":
				env.tabs.create({ url: env.runtime.getURL(Message.Args[0]) });
				return;
		}
	});
})();