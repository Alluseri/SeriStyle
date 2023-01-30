this.SeriStyleLocales = {
	"en-US": {
		HTML: {
			"btn-reset": "Reset to defaults",
			"btn-load": "Load",
			"btn-save": "Save"
		},
		Categories: {
			SeriStyle: "SeriStyle",
			General: "General changes",
			SidebarBuilder: "Sidebar Builder",
			HomePage: "Homepage changes",
			VideoPage: "Videopage changes",
			VideoPlayer: "Videoplayer changes",
			Playlist: "Playlist changes",
			Advanced: "Advanced settings"
		}
	}
};

this.SeriStyleSettings = {
	SeriStyle: {
		Language: {
			Kind: 1,
			Name: {
				"en-US": "Language"
			},
			Picks: {
				"en-US": {
					"en-US": "English"
				}
			},
			Value: "en-US"
		}
	},
	General: {
		OldColors: {
			Kind: 0,
			Name: {
				"en-US": "Old dark theme colors"
			},
			Value: false
		},
		ResizeSearchBar: {
			Kind: 0,
			Name: {
				"en-US": "Old search bar size"
			},
			Value: true
		},
		NormalizeSearchBar: {
			Kind: 0,
			Name: {
				"en-US": "Normalize search bar size"
			},
			Value: false
		},
		ThumbnailRoundings: {
			Kind: 0,
			Name: {
				"en-US": "Remove all thumbnails' rounded corners"
			},
			Value: true
		},
		HideFeedback: {
			Kind: 0,
			Name: {
				"en-US": "Don't highlight some buttons on click"
			},
			Value: true
		}
	},
	HomePage: {
		HideSeries: {
			Kind: 0,
			Name: {
				"en-US": "Hide label above video title(example: https://upload.wtf/s/4WHtS)"
			},
			Value: false
		},
		HideShorts: {
			Kind: 0,
			Name: {
				"en-US": "Hide the Shorts shelf"
			},
			Value: true
		}
	},
	VideoPage: {
		HideDownloadButton: {
			Kind: 0,
			Name: {
				"en-US": "Hide the built-in Download button"
			},
			Value: true
		},
		LetterSpacing: {
			Kind: 0,
			Name: {
				"en-US": "Old action bar letter spacing"
			},
			Value: false
		},
		NoSponsorComments: {
			Kind: 0,
			Name: {
				"en-US": "Don't highlight comments with donations"
			},
			Value: false
		},
		HideRecFilters: {
			Kind: 0,
			Name: {
				"en-US": "Hide recommendation filters"
			},
			Value: false
		},
		HidePremiere: { // TODO: Split into 2 when I discover how to differentiate premiere and live chat
			Kind: 0,
			Name: {
				"en-US": "Hide premiere & live chat"
			},
			Value: false
		}
	},
	VideoPlayer: {
		DisableGradient: {
			Kind: 0,
			Name: {
				"en-US": "Hide top & bottom shadings"
			},
			Value: false
		},
		DisableHeatmap: {
			Kind: 0,
			Name: {
				"en-US": "Hide the \"Most replayed\" heat-map"
			},
			Value: false
		},
		HideMiniPlayer: {
			Kind: 0,
			Name: {
				"en-US": "Hide the Miniplayer button (doesn't disable the hotkey)"
			},
			Value: false
		}
	},
	Playlist: {
		TrueOld: {
			Kind: 0,
			Name: {
				"en-US": "True old UI (experimental)"
			},
			Value: false
		},
		HideInteract: {
			Kind: 0,
			Name: {
				"en-US": "Hide the interaction buttons"
			},
			Value: true
		},
		HideBackground: {
			Kind: 0,
			Name: {
				"en-US": "Hide the toolbar buttons' backgrounds"
			},
			Value: false
		},
		HideDownload: {
			Kind: 0,
			Name: {
				"en-US": "Hide the built-in Download Playlist button"
			},
			Value: true
		}
	},
	Advanced: {
		InjectedATPCallbackTime: {
			Kind: 2,
			Range: [10, 1000],
			Name: {
				"en-US": "Delay after opening the \"More Actions\" menu for mCC"
			},
			Value: 200,
			Format: {
				"en-US": "$ms"
			}
		},
		InjectedSettleTime: {
			Kind: 2,
			Range: [0, 1000],
			Name: {
				"en-US": "Delay after detecting a DOM mutation"
			},
			Value: 50,
			Format: {
				"en-US": "$ms"
			}
		},
		ObserverUpdateTime: {
			Kind: 2,
			Range: [0, 5000],
			Name: {
				"en-US": "Observer update interval"
			},
			Value: 500,
			Format: {
				"en-US": "$ms"
			}
		},
		LegacyPanels: {
			Kind: 0,
			Name: {
				"en-US": "Legacy(v1.2.0) panel style"
			},
			Value: false
		},
		LegacySubButton: {
			Kind: 0,
			Name: {
				"en-US": "Legacy(v1.4.0) subscribe button"
			},
			Value: false
		}
	}
};

this.DomUtils = {
	"GetValue": (Element) => Element.value || Element.innerText,
	"BuildElement": function (Tag, Characteristics, Inner, Callback) {
		var elem = document.createElement(Tag);
		for (let _ in (Characteristics || {})) {
			elem[_] = Characteristics[_];
		}
		for (let _ in (Inner || [])) {
			elem.appendChild(Inner[_]);
		}
		return (Callback || ((x) => x))(elem);
	}
};

this.FindByExel = (Elements, ExelArg) => Elements.find(x => btoa(x?.querySelector("path")?.attributes.d?.value) == ExelArg);
this.FindAllByExel = (Elements, ExelArg) => Elements.filter(x => btoa(x?.querySelector("path")?.attributes.d?.value) == ExelArg);
this.Exists = (Element) => Element.parentElement != null;
this.IsVisible = (Element) => !!(Element && (Element.offsetWidth || Element.offsetHeight || Element.getClientRects().length));
this.WaitTime = async (Millis) => await new Promise(Response => setTimeout(Response, Millis));

this.ExelCreateClip = "TTgsN2MwLDAuNTUtMC40NSwxLTEsMVM2LDcuNTUsNiw3YzAtMC41NSwwLjQ1LTEsMS0xUzgsNi40NSw4LDd6IE03LDE2Yy0wLjU1LDAtMSwwLjQ1LTEsMWMwLDAuNTUsMC40NSwxLDEsMXMxLTAuNDUsMS0xIEM4LDE2LjQ1LDcuNTUsMTYsNywxNnogTTEwLjc5LDguMjNMMjEsMTguNDRWMjBoLTMuMjdsLTUuNzYtNS43NmwtMS4yNywxLjI3QzEwLjg5LDE1Ljk3LDExLDE2LjQ3LDExLDE3YzAsMi4yMS0xLjc5LDQtNCw0IGMtMi4yMSwwLTQtMS43OS00LTRjMC0yLjIxLDEuNzktNCw0LTRjMC40MiwwLDAuODEsMC4wOCwxLjE5LDAuMmwxLjM3LTEuMzdsLTEuMTEtMS4xMUM4LDEwLjg5LDcuNTEsMTEsNywxMWMtMi4yMSwwLTQtMS43OS00LTQgYzAtMi4yMSwxLjc5LTQsNC00YzIuMjEsMCw0LDEuNzksNCw0QzExLDcuNDMsMTAuOTEsNy44NCwxMC43OSw4LjIzeiBNMTAuMDgsOC45NEw5LjY1LDguNWwwLjE5LTAuNThDOS45NSw3LjU4LDEwLDcuMjgsMTAsNyBjMC0xLjY1LTEuMzUtMy0zLTNTNCw1LjM1LDQsN2MwLDEuNjUsMS4zNSwzLDMsM2MwLjM2LDAsMC43My0wLjA3LDEuMDktMC4yMUw4LjcsOS41NWwwLjQ2LDAuNDZsMS4xMSwxLjExbDAuNzEsMC43MWwtMC43MSwwLjcxIEw4LjksMTMuOTFsLTAuNDMsMC40M2wtMC41OC0wLjE4QzcuNTUsMTQuMDUsNy4yNywxNCw3LDE0Yy0xLjY1LDAtMywxLjM1LTMsM2MwLDEuNjUsMS4zNSwzLDMsM3MzLTEuMzUsMy0zIGMwLTAuMzgtMC4wNy0wLjc1LTAuMjItMS4xMmwtMC4yNS0wLjYxTDEwLDE0LjhsMS4yNy0xLjI3bDAuNzEtMC43MWwwLjcxLDAuNzFMMTguMTUsMTlIMjB2LTAuMTVMMTAuMDgsOC45NHogTTE3LjczLDRIMjF2MS41NiBsLTUuNTIsNS41MmwtMi40MS0yLjQxTDE3LjczLDR6IE0xOC4xNSw1bC0zLjY3LDMuNjdsMSwxTDIwLDUuMTVWNUgxOC4xNXo=";
this.ExelAddToPlaylist = "TTIyLDEzaC00djRoLTJ2LTRoLTR2LTJoNFY3aDJ2NGg0VjEzeiBNMTQsN0gydjFoMTJWN3ogTTIsMTJoOHYtMUgyVjEyeiBNMiwxNmg4di0xSDJWMTZ6";
this.ExelInjectedAddToPlaylist = "TTE0IDEwSDJ2MmgxMnYtMnptMC00SDJ2MmgxMlY2em00IDh2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6TTIgMTZoOHYtMkgydjJ6";
this.ExelShare = "TTE1LDUuNjNMMjAuNjYsMTJMMTUsMTguMzdWMTV2LTFoLTFjLTMuOTYsMC03LjE0LDEtOS43NSwzLjA5YzEuODQtNC4wNyw1LjExLTYuNCw5Ljg5LTcuMUwxNSw5Ljg2VjlWNS42MyBNMTQsM3Y2IEM2LjIyLDEwLjEzLDMuMTEsMTUuMzMsMiwyMWMyLjc4LTMuOTcsNi40NC02LDEyLTZ2Nmw4LTlMMTQsM0wxNCwzeg==";
this.ExelImmersive = "TTIxIDd2MTBIM1Y3aDE4bTEtMUgydjEyaDIwVjZ6TTExLjUgMnYzaDFWMmgtMXptMSAxN2gtMXYzaDF2LTN6TTMuNzkgMyA2IDUuMjFsLjcxLS43MUw0LjUgMi4yOSAzLjc5IDN6bTIuOTIgMTYuNUw2IDE4Ljc5IDMuNzkgMjFsLjcxLjcxIDIuMjEtMi4yMXpNMTkuNSAyLjI5IDE3LjI5IDQuNWwuNzEuNzFMMjAuMjEgM2wtLjcxLS43MXptMCAxOS40Mi43MS0uNzFMMTggMTguNzlsLS43MS43MSAyLjIxIDIuMjF6";

this.SvgCreateClip = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M8,7c0,0.55-0.45,1-1,1S6,7.55,6,7c0-0.55,0.45-1,1-1S8,6.45,8,7z M7,16c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1s1-0.45,1-1 C8,16.45,7.55,16,7,16z M10.79,8.23L21,18.44V20h-3.27l-5.76-5.76l-1.27,1.27C10.89,15.97,11,16.47,11,17c0,2.21-1.79,4-4,4 c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4c0.42,0,0.81,0.08,1.19,0.2l1.37-1.37l-1.11-1.11C8,10.89,7.51,11,7,11c-2.21,0-4-1.79-4-4 c0-2.21,1.79-4,4-4c2.21,0,4,1.79,4,4C11,7.43,10.91,7.84,10.79,8.23z M10.08,8.94L9.65,8.5l0.19-0.58C9.95,7.58,10,7.28,10,7 c0-1.65-1.35-3-3-3S4,5.35,4,7c0,1.65,1.35,3,3,3c0.36,0,0.73-0.07,1.09-0.21L8.7,9.55l0.46,0.46l1.11,1.11l0.71,0.71l-0.71,0.71 L8.9,13.91l-0.43,0.43l-0.58-0.18C7.55,14.05,7.27,14,7,14c-1.65,0-3,1.35-3,3c0,1.65,1.35,3,3,3s3-1.35,3-3 c0-0.38-0.07-0.75-0.22-1.12l-0.25-0.61L10,14.8l1.27-1.27l0.71-0.71l0.71,0.71L18.15,19H20v-0.15L10.08,8.94z M17.73,4H21v1.56 l-5.52,5.52l-2.41-2.41L17.73,4z M18.15,5l-3.67,3.67l1,1L20,5.15V5H18.15z" class="style-scope yt-icon"></path></g></svg>';
this.SvgAddToPlaylist = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z" class="style-scope yt-icon"></path></g></svg>';
this.SvgShare = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g mirror-in-rtl="" class="style-scope yt-icon"><path d="M14 9V3L22 12L14 21V15C8.44 15 4.78 17.03 2 21C3.11 15.33 6.22 10.13 14 9Z" class="style-scope yt-icon"></path></g></svg>';
this.SvgLike = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" class="style-scope yt-icon"></path></g></svg>';
this.SvgDislike = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z" class="style-scope yt-icon"></path></g></svg>';
this.SvgActionMenu = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><circle cx="5" cy="12" r="2" class="style-scope yt-icon"></circle><circle cx="12" cy="12" r="2" class="style-scope yt-icon"></circle><circle cx="19" cy="12" r="2" class="style-scope yt-icon"></circle></g></svg>';
this.SvgSearch = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" class="style-scope yt-icon"></path></g></svg>';
this.SvgMic = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" class="style-scope yt-icon"></path></g></svg>';
this.SvgMenu = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" class="style-scope yt-icon"></path></g></svg>';