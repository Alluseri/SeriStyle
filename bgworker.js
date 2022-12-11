const SeriStyle_GX = false;

chrome.runtime.onMessage.addListener((Message, Sender, Respond) => {
	switch (Message.Operation) {
		case "SeriStyle_LoadScript":
			chrome.scripting.executeScript({
				target: { tabId: Sender.tab.id, documentIds: (!SeriStyle_GX && Sender.documentId) ? [Sender.documentId] : undefined },
				files: [Message.Args[0]]
			});
			return;
	}
});