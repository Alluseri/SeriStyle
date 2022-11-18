/* jshint esversion: 11 */

chrome.runtime.onMessage.addListener((Message, Sender) => {
	switch (Message.Operation) {
		case "SeriStyle_LoadScript":
			chrome.scripting.executeScript({
				target: { tabId: Sender.tab.id },
				files: [Message.Args[0]]
			});
			return;
	}
});