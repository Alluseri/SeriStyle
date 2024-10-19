var SelMenuPanel = ".ytp-settings-menu>.ytp-panel>.ytp-panel-menu";

new MutationObserver(Mutations => {
	var Inserted = [];
	Mutations.forEach(Mutation => {
		for (let i = 0; i < Mutation.addedNodes.length; i++) {
			Inserted.push(Mutation.addedNodes[i]);
		}
	});

	FindByExel(Inserted, ExelImmersive)?.remove();
	if (SeriStyleSettings.VideoPlayer.HideSleepTimer.Value)
		FindByExel(Inserted, ExelSleepTimer)?.remove();
	if (SeriStyleSettings.VideoPlayer.HideStableVolume.Value)
		FindByExel(Inserted, ExelStableVolume)?.remove();

	if (SeriStyleSettings.VideoPlayer.SettingsMenuMode.Value == 1) {
		// TODO: Can't this be done with a simple selector? Weird.
		FindByExel(Inserted, ExelAnnotations)?.firstElementChild?.firstElementChild?.remove();
		FindByExel(Inserted, ExelPlaybackSpeed)?.firstElementChild?.firstElementChild?.remove();
		FindByExel(Inserted, ExelSubtitles)?.firstElementChild?.firstElementChild?.remove();
		FindByExel(Inserted, ExelSubtitlesUS)?.firstElementChild?.firstElementChild?.remove();
		FindByExel(Inserted, ExelQuality)?.firstElementChild?.firstElementChild?.remove();
		FindByExel(Inserted, ExelStableVolume)?.firstElementChild?.firstElementChild?.remove();
		FindByExel(Inserted, ExelSleepTimer)?.firstElementChild?.firstElementChild?.remove();
	}
}).observe($(SelMenuPanel), {
	childList: true
});

FindByExel(Array.from($(SelMenuPanel).children), ExelImmersive)?.remove();