https://web.archive.org/web/20210731125954/https://www.youtube.com/watch?v=jNQXAC9IVRw
/*
У самой иконки паддинг 6 6 6 6
Кнопке надо паддинги 0 и 6 слева и справа
Диву(родителю) иконки надо убрать левый и правый марджины, а также display: table

*/
#info - top bar
#meta - bottom bar

Like(NOT ANIMATED):
<yt-icon class="style-scope ytd-toggle-button-renderer"><svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" class="style-scope yt-icon"></path></g></svg><!--css-build:shady--></yt-icon>

Dislike(NOT ANIMATED):
<yt-icon class="style-scope ytd-toggle-button-renderer"><svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z" class="style-scope yt-icon"></path></g></svg><!--css-build:shady--></yt-icon>

Share:
<yt-icon class="style-scope ytd-button-renderer"><svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g mirror-in-rtl="" class="style-scope yt-icon"><path d="M14 9V3L22 12L14 21V15C8.44 15 4.78 17.03 2 21C3.11 15.33 6.22 10.13 14 9Z" class="style-scope yt-icon"></path></g></svg><!--css-build:shady--></yt-icon>

Save:
<yt-icon class="style-scope ytd-button-renderer"><svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z" class="style-scope yt-icon"></path></g></svg><!--css-build:shady--></yt-icon>



var Observer = new MutationObserver(async Mutations => {
	try {
		// Wait for changes to settle
		await WaitTime(Settings_InjectedSettleTime);

		var AllButtons = Array.from(document.querySelectorAll(SelFlexibleButtons));
		var InjectedSvgElements = FindAllByExel(AllButtons, ExelOldAddToPlaylist);
		if (InjectedSvgElements.length > 1) {
			InjectedSvgElements.find(x.innerText == SeriClipLabel).remove();
		}
		var InjectedSvgElement = InjectedSvgElements[0];
		var AddedButtons = [];
		Mutations.forEach(Mutation => {
			for (let i = 0; i < Mutation.addedNodes.length; i++) {
				AddedButtons.push(Mutation.addedNodes[i]);
			}
		});
		if (AddedButtons.length == 0) return;
		var AddToPlaylist = FindByExel(AddedButtons, ExelAddToPlaylist);
		var CreateClip = FindByExel(AllButtons, ExelCreateClip) || FindByExel(AddedButtons, ExelCreateClip);
		if (AddToPlaylist && !void (SeriSaveLabel = AddToPlaylist.innerText) && (IsVisible(AddToPlaylist) || AddToPlaylist.remove())) // Means there was AddToPlaylist injected
			if (InjectedSvgElement)
				InjectedSvgElement.remove(); // Remove modded CreateClip
			else CreateClip?.remove(); // Remove unmodded CreateClip
		else // It wasn't injected
			if (InjectedSvgElement) return; // Modded CreateClip is doing the job, no need to reapply SVG
			else if (CreateClip && IsVisible(CreateClip)) {
				SeriClipLabel = CreateClip.innerText;
				var InteractBtn = FindByExel(Array.from(document.querySelectorAll(SelContextMenuButtons)), ExelAddToPlaylist);
				if (!InteractBtn) {
					var Neee = document.querySelector(SelContentMenuOpen);
					Neee?.click();
					await WaitTime(Settings_InjectedAddToPlaylistCallbackTime);
					InteractBtn = FindByExel(Array.from(document.querySelectorAll(SelContextMenuButtons)), ExelAddToPlaylist);
					Neee?.click();
					if (!InteractBtn) {
						await WaitTime(Settings_InjectedAddToPlaylistCallbackTime);
						Neee?.click();
						await WaitTime(Settings_InjectedAddToPlaylistCallbackTime);
						InteractBtn = FindByExel(Array.from(document.querySelectorAll(SelContextMenuButtons)), ExelAddToPlaylist);
						Neee?.click();
						if (!InteractBtn)
							return console.log("[SeriStyle] Unable to inject AddToPlaylist(no interact found).");
					}
				}

				AddToPlaylist = CreateClip;

				AddToPlaylist.onclick = async () => {
					var InteractBtn = FindByExel(Array.from(document.querySelectorAll(SelContextMenuButtons)), ExelAddToPlaylist);
					if (!InteractBtn) {
						document.querySelector(SelContentMenuOpen)?.click();
						await WaitTime(500);
						InteractBtn = FindByExel(Array.from(document.querySelectorAll(SelContextMenuButtons)), ExelAddToPlaylist);
						if (!InteractBtn)
							return console.log("[SeriStyle] Injected AddToPlaylist invocation failed(no interact found).");
					}
					InteractBtn.click();
				};

				AddToPlaylist.querySelector(SelActionButtonText).innerText = InteractBtn.innerText;
				AddToPlaylist.lastElementChild.firstElementChild.innerText = `\n  ${InteractBtn.innerText}\n`;
			} else return console.log("[SeriStyle] Unable to inject AddToPlaylist(no donor CreateClip found)");
		// Inject SVG
		AddToPlaylist.querySelector("yt-icon").innerHTML = SvgAddToPlaylist;
	} catch (e) {
		console.log(e);
	}
});
Observer.observe($(SelFlexibleButtonsBar), {
	childList: true
});

