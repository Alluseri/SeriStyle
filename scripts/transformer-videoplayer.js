var SelMenuPanel = ".ytp-settings-menu>.ytp-panel>.ytp-panel-menu";

// Hopefully the panel persists and so does the observer. TODO Needs testing.
new MutationObserver(Mutations => {
	var Inserted = [];
	Mutations.forEach(Mutation => {
		for (let i = 0; i < Mutation.addedNodes.length; i++) {
			Inserted.push(Mutation.addedNodes[i]);
		}
	});

	FindByExel(Inserted, ExelImmersive)?.remove();
}).observe($(SelMenuPanel), {
	childList: true
});

FindByExel(Array.from($(SelMenuPanel).children), ExelImmersive)?.remove();