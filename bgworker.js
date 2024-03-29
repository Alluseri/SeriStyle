(async () => {
	const env = this.chrome || this.browser;
	var IsFirefox = false;

	if (env.runtime.getBrowserInfo) {
		let BrowserInfo = await env.runtime.getBrowserInfo();
		IsFirefox = BrowserInfo.name == "Firefox" || BrowserInfo.vendor == "Mozilla"; // yeah dawg, if you're using smth that doesn't follow this rule, GFY LMFAOOOOOOO FORK USER (user issue frfr)
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
	env.webNavigation.onHistoryStateUpdated.addListener(function (Data) {
		if (Data == null || !new URL(Data.url).hostname.includes("youtube")) return;
		env.tabs.sendMessage(Data.tabId, { Operation: "SeriStyle_HistoryState", Args: [Data.url] }).catch(() => console.log("Receiving end error.", JSON.stringify(Data, null, "\t")));
	});
})();