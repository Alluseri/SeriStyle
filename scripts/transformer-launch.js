/* jshint esversion: 11 */

if (SeriStyleSettings.SeriStyle.SlowMode.Value)
	console.log("[SeriStyle|General] Not running heavy transformer section(slow mode enabled).");
else {
	var GeneralObserver = new MutationObserver(async Mutations => {
		var Inserted = [];
		Mutations.forEach(Mutation => {
			for (let i = 0; i < Mutation.addedNodes.length; i++) {
				if (SeriStyleSettings.General.OldColors.Value)
					if (Mutation.addedNodes[i] && Mutation.addedNodes[i] instanceof HTMLElement)
						Mutation.addedNodes[i].removeAttribute("darker-dark-theme");
			}
		});
	});

	GeneralObserver.observe(document.querySelector("body"), {
		childList: true,
		subtree: true
	});

	if (SeriStyleSettings.General.OldColors.Value) // Here instead of top level for consistency
		$$("[darker-dark-theme]").forEach(Element => Element.removeAttribute("darker-dark-theme"));
}