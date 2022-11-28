/* jshint esversion: 11 */

// Declares here, so call as early as possible, worry later!
$ = document.querySelector.bind(document);
$$ = (Query) => Array.from(document.querySelectorAll(Query));

if (SeriStyleSettings.General.SlowMode.Value)
	console.log("[SeriStyle|General] Not running heavy transformer section(slow mode enabled).");
else {
	var GeneralObserver = new MutationObserver(async Mutations => {
		var Inserted = [];
		Mutations.forEach(Mutation => {
			for (let i = 0; i < Mutation.addedNodes.length; i++) {
				if (SeriStyleSettings.General.OldColors.Value)
					Mutation.addedNodes[i].removeAttribute("darker-dark-theme");
			}
		});
	});

	GeneralObserver.observe(document.querySelector("body"), {
		childList: true,
		subtree: true
	});
}