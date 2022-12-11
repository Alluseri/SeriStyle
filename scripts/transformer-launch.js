if (SeriStyleSettings.General.OldColors.Value) {
	var GeneralObserver = new MutationObserver(async Mutations => {
		Mutations.forEach(Mutation => {
			for (let i = 0; i < Mutation.addedNodes.length; i++) {
				if (Mutation.addedNodes[i] && Mutation.addedNodes[i] instanceof HTMLElement)
					Mutation.addedNodes[i].removeAttribute("darker-dark-theme");
			}
		});
	});

	GeneralObserver.observe(document.querySelector("body"), {
		childList: true,
		subtree: true
	});

	$$("[darker-dark-theme]").forEach(Element => Element.removeAttribute("darker-dark-theme"));
}