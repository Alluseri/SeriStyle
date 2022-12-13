document.head.appendChild(DomUtils.BuildElement("style", {
	"innerText":
		(
			(SeriStyleSettings.VideoPlayer.DisableGradient.Value ? ".ytp-gradient-bottom{display:none;}" : "") +
			(SeriStyleSettings.VideoPlayer.DisableHeatmap.Value ? ".ytp-heat-map-container{display:none;}" : "") +
			(SeriStyleSettings.VideoPlayer.HideMiniPlayer.Value ? ".ytp-miniplayer-button{display:none;}" : "") +
			""
		).replaceAll(/(?<!!important);/g, "!important;")
}));

/*var ElementUpdater = function (Selector) { // Optimizes old fixer
	var Element = $(Selector);
	this.GetElement = this.E = () => (Element && Element.parentElement) ? Element : Element = $(Selector);
};

if (SeriStyleSettings.VideoPlayer.DisableAutoplayScroll.Value) {
	var AutoNavButton = new ElementUpdater();
	window.addEventListener("scroll", () => {
		if ((document.documentElement.scrollTop || document.body.scrollTop) < SeriStyleSettings.VideoPlayer.DisableAutoplayScrollThreshold.Value) return;
		else if (IsVisible(AutoNavButton.E())) AutoNavButton.E().click();
	});

	var AutoplayObserver = new MutationObserver(async Mutations => {

	});
	AutoplayObserver.observe($("#movie_player > div.ytp-autonav-endscreen-countdown-overlay > div > div.ytp-autonav-endscreen-button-container"), {
		attributeFilter: ["style"],
		attributes: true
	});
}*/