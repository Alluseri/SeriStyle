if (SeriStyleSettings.General.OldColors.Value) {
	var GeneralObserver = new MutationObserver(async Mutations => {
		Mutations.forEach(Mutation => {
			for (let i = 0; i < Mutation.addedNodes.length; i++) {
				if (Mutation.addedNodes[i] && Mutation.addedNodes[i] instanceof HTMLElement) {
					Mutation.addedNodes[i].removeAttribute("rounded-corners-large");
				}
			}
		});
	});

	GeneralObserver.observe(document.querySelector("body"), {
		childList: true,
		subtree: true
	});

	$$("[rounded-corners-large]").forEach(Element => Element.removeAttribute("rounded-corners-large"));
}