this.SeriStyleMetaVersion = 8;
this.SeriStyleMetaNotice = [
	"introduced new options:",
	"- Homepage -> Force homepage columns"
].join("\n");

this.SeriStyleLocales = {
	"en-US": {
		HTML: {
			"btn-reset": "Reset to defaults",
			"btn-save": "Save",
			"btn-resetmeta": "Reset meta version"
		},
		Categories: {
			SeriStyle: "SeriStyle",
			General: "General changes",
			HomePage: "Homepage changes",
			VideoPage: "Videopage changes",
			VideoPlayer: "Videoplayer changes",
			ChannelPage: "Channel page changes",
			Playlist: "Playlist changes",
			Advanced: "Advanced settings"
		},
		Messages: {
			UpdateSettings: "SeriStyle was updated to version 1.15.1, which " + this.SeriStyleMetaNotice + "\n\nDo you want to visit the settings page? (opens in a new tab)"
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
		},
		RemindUpdates: {
			Kind: 0,
			Name: {
				"en-US": "Check for new settings in updates and notify me"
			},
			Value: true
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
		OldNotificationBell: {
			Kind: 0,
			Name: {
				"en-US": "Old notification bell"
			},
			Value: true
		},
		FixNotificationBadge: {
			Kind: 0,
			Name: {
				"en-US": "Modify notification badge sizing (better suits old bell)"
			},
			Value: true
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
				"en-US": "Hide label above video title"
			},
			Value: false
		},
		ForceHomePageColumns: {
			Kind: 2,
			Range: [0, 10],
			Name: {
				"en-US": "Force homepage columns"
			},
			LowerBound: {
				"en-US": "Disabled"
			},
			Value: 0,
			Format: {
				"en-US": "$ videos per row"
			}
		}
	},
	VideoPage: {
		HideDownloadButton: {
			Kind: 0,
			Name: {
				"en-US": "Hide the Download button"
			},
			Value: true
		},
		HideCreateClipButton: {
			Kind: 0,
			Name: {
				"en-US": "Hide the Create Clip button"
			},
			Value: true
		},
		HideDonateButton: {
			Kind: 0,
			Name: {
				"en-US": "Hide the Donate/Thanks button"
			},
			Value: true
		},
		HideJoinButton: {
			Kind: 0,
			Name: {
				"en-US": "Hide the Sponsor/Join button"
			},
			Value: false
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
		HideDonationShelves: {
			Kind: 0,
			Name: {
				"en-US": "Hide donation shelves"
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
		FixPlaylistColor: {
			Kind: 0,
			Name: {
				"en-US": "Revert playlist/queue panel colors on Old Dark theme"
			},
			Value: false
		},
		NoLiveChat: {
			Kind: 0,
			Name: {
				"en-US": "Hide live chats entirely (BETA but it works)"
			},
			Value: false
		},
		ForceCentering: {
			Kind: 0,
			Name: {
				"en-US": "Fix content padding"
			},
			Value: false
		},
		ForceCoPadding: {
			Kind: 2,
			Range: [0, 800],
			Name: {
				"en-US": "Force min. content padding"
			},
			LowerBound: {
				"en-US": "Disabled"
			},
			Value: 150,
			Format: {
				"en-US": "$px"
			}
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
		HideSleepTimer: {
			Kind: 0,
			Name: {
				"en-US": "Hide \"Sleep timer\" in Settings"
			},
			Value: true
		},
		HideStableVolume: {
			Kind: 0,
			Name: {
				"en-US": "Hide \"Stable Volume\" in Settings"
			},
			Value: true
		},
		HideMiniPlayer: {
			Kind: 0,
			Name: {
				"en-US": "Hide the Miniplayer button (doesn't disable the hotkey)"
			},
			Value: false
		},
		SettingsMenuMode: {
			Kind: 1,
			Name: {
				"en-US": "Settings Menu Style"
			},
			Picks: {
				"en-US": [
					"Old",
					"True Old",
					"Double Roundings",
					"No Roundings",
					"Latest"
				]
			},
			Value: 0
		}
	},
	ChannelPage: {
		TrueOld: {
			Kind: 0,
			Name: {
				"en-US": "True Old UI (currently inactive)"
			},
			Value: true
		},
		Half: {
			Kind: 0,
			Name: {
				"en-US": "Half the spaces around sorting buttons"
			},
			Value: true
		},
		NoSponsors: {
			Kind: 0,
			Name: {
				"en-US": "Hide the \"Channel sponsors\" section"
			},
			Value: true
		}
	},
	Playlist: {
		TrueOld: {
			Kind: 0,
			Name: {
				"en-US": "True Old UI"
			},
			Value: false
		},
		LegacyTones: {
			Kind: 0,
			Name: {
				"en-US": "Legacy tones for True Old UI (from legacy SeriStyle versions)"
			},
			Value: false
		},
		LegacyToolbar: {
			Kind: 0,
			Name: {
				"en-US": "Legacy toolbar buttons (from legacy SeriStyle versions)"
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
		OldIconInterval: {
			Kind: 2,
			Range: [0, 5000],
			Name: {
				"en-US": "Old icon observer update interval"
			},
			Value: 200,
			Format: {
				"en-US": "$ms"
			}
		},
		ShareFixInterval: {
			Kind: 2,
			Range: [0, 5000],
			Name: {
				"en-US": "Share link fixer update interval"
			},
			Value: 180,
			Format: {
				"en-US": "$ms"
			}
		},
		SelfHarmSkipperInterval: {
			Kind: 2,
			Range: [50, 5000],
			Name: {
				"en-US": "Self-harm skipper update interval"
			},
			Value: 200,
			Format: {
				"en-US": "$ms"
			}
		},
		DispatcherInterval: {
			Kind: 2,
			Range: [0, 5000],
			Name: {
				"en-US": "Dispatcher update interval"
			},
			Value: 300,
			Format: {
				"en-US": "$ms"
			}
		},
		ActionBarPlus: {
			Kind: 0,
			Name: {
				"en-US": "Improve action bar mutation success rate"
			},
			Value: true
		},
		DisableCSS: {
			Kind: 0,
			Name: {
				"en-US": "Disable all CSS transformers"
			},
			Value: false
		},
		LegacyPanels: {
			Kind: 0,
			Name: {
				"en-US": "Legacy(v1.2.0) panel style"
			},
			Value: false
		}
	}
};

this.DomUtils = {
	"GetValue": (Element) => Element.value || Element.innerText,
	"BuildElement": function (Tag, Characteristics, Inner, Callback) {
		if (Tag == "style" && SeriStyleSettings.Advanced.DisableCSS.Value) return document.createElement(Tag);
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

this.GetExel = (Element) => btoa(Element?.querySelector("path")?.attributes.d?.value);
this.MatchesExel = (Element, ExelArg) => btoa(Element?.querySelector("path")?.attributes.d?.value) == ExelArg;
this.FindByExel = (Elements, ExelArg) => Elements.find(x => btoa(x?.querySelector("path")?.attributes.d?.value) == ExelArg);
this.FindAllByExel = (Elements, ExelArg) => Elements.filter(x => btoa(x?.querySelector("path")?.attributes.d?.value) == ExelArg);
this.Exists = (Element) => Element.parentElement != null;
this.IsVisible = (Element) => !!(Element && (Element.offsetWidth || Element.offsetHeight || Element.getClientRects().length));
this.WaitTime = async (Millis) => await new Promise(Response => setTimeout(Response, Millis));

this.ExelCreateClip = "TTggN2MwIC41NS0uNDUgMS0xIDFzLTEtLjQ1LTEtMSAuNDUtMSAxLTEgMSAuNDUgMSAxem0tMSA5Yy0uNTUgMC0xIC40NS0xIDFzLjQ1IDEgMSAxIDEtLjQ1IDEtMS0uNDUtMS0xLTF6bTMuNzktNy43N0wyMSAxOC40NFYyMGgtMy4yN2wtNS43Ni01Ljc2LTEuMjcgMS4yN2MuMTkuNDYuMy45Ni4zIDEuNDkgMCAyLjIxLTEuNzkgNC00IDRzLTQtMS43OS00LTQgMS43OS00IDQtNGMuNDIgMCAuODEuMDggMS4xOS4ybDEuMzctMS4zNy0xLjExLTEuMTFDOCAxMC44OSA3LjUxIDExIDcgMTFjLTIuMjEgMC00LTEuNzktNC00czEuNzktNCA0LTQgNCAxLjc5IDQgNGMwIC40My0uMDkuODQtLjIxIDEuMjN6bS0uNzEuNzEtLjQzLS40NC4xOS0uNThjLjExLS4zNC4xNi0uNjQuMTYtLjkyIDAtMS42NS0xLjM1LTMtMy0zUzQgNS4zNSA0IDdzMS4zNSAzIDMgM2MuMzYgMCAuNzMtLjA3IDEuMDktLjIxbC42MS0uMjQuNDYuNDYgMS4xMSAxLjExLjcxLjcxLS43MS43MS0xLjM3IDEuMzctLjQzLjQzLS41OC0uMThDNy41NSAxNC4wNSA3LjI3IDE0IDcgMTRjLTEuNjUgMC0zIDEuMzUtMyAzczEuMzUgMyAzIDMgMy0xLjM1IDMtM2MwLS4zOC0uMDctLjc1LS4yMi0xLjEybC0uMjUtLjYxLjQ3LS40NyAxLjI3LTEuMjcuNzEtLjcxLjcxLjcxTDE4LjE1IDE5SDIwdi0uMTVsLTkuOTItOS45MXpNMTcuNzMgNEgyMXYxLjU2bC01LjUyIDUuNTItMi40MS0yLjQxTDE3LjczIDR6bS40MiAxLTMuNjcgMy42NyAxIDFMMjAgNS4xNVY1aC0xLjg1eg==";
this.ExelAddToPlaylist = "TTE4IDR2MTUuMDZsLTUuNDItMy44Ny0uNTgtLjQyLS41OC40Mkw2IDE5LjA2VjRoMTJtMS0xSDV2MThsNy01IDcgNVYzeg==";
this.ExelInjectedAddToPlaylist = "TTE0IDEwSDJ2MmgxMnYtMnptMC00SDJ2MmgxMlY2em00IDh2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6TTIgMTZoOHYtMkgydjJ6";
this.ExelShare = "TTE1LDUuNjNMMjAuNjYsMTJMMTUsMTguMzdWMTV2LTFoLTFjLTMuOTYsMC03LjE0LDEtOS43NSwzLjA5YzEuODQtNC4wNyw1LjExLTYuNCw5Ljg5LTcuMUwxNSw5Ljg2VjlWNS42MyBNMTQsM3Y2IEM2LjIyLDEwLjEzLDMuMTEsMTUuMzMsMiwyMWMyLjc4LTMuOTcsNi40NC02LDEyLTZ2Nmw4LTlMMTQsM0wxNCwzeg==";
this.ExelImmersive = "TTIxIDd2MTBIM1Y3aDE4bTEtMUgydjEyaDIwVjZ6TTExLjUgMnYzaDFWMmgtMXptMSAxN2gtMXYzaDF2LTN6TTMuNzkgMyA2IDUuMjFsLjcxLS43MUw0LjUgMi4yOSAzLjc5IDN6bTIuOTIgMTYuNUw2IDE4Ljc5IDMuNzkgMjFsLjcxLjcxIDIuMjEtMi4yMXpNMTkuNSAyLjI5IDE3LjI5IDQuNWwuNzEuNzFMMjAuMjEgM2wtLjcxLS43MXptMCAxOS40Mi43MS0uNzFMMTggMTguNzlsLS43MS43MSAyLjIxIDIuMjF6";
this.ExelDonate = "TTExIDE3aDJ2LTFoMWMuNTUgMCAxLS40NSAxLTF2LTNjMC0uNTUtLjQ1LTEtMS0xaC0zdi0xaDRWOGgtMlY3aC0ydjFoLTFjLS41NSAwLTEgLjQ1LTEgMXYzYzAgLjU1LjQ1IDEgMSAxaDN2MUg5djJoMnYxem01LjUtMTVjLTEuNzQgMC0zLjQxLjg4LTQuNSAyLjI4QzEwLjkxIDIuODggOS4yNCAyIDcuNSAyIDQuNDIgMiAyIDQuNjQgMiA3Ljk5YzAgNC4xMiAzLjQgNy40OCA4LjU1IDEyLjU4TDEyIDIybDEuNDUtMS40NEMxOC42IDE1LjQ3IDIyIDEyLjExIDIyIDcuOTkgMjIgNC42NCAxOS41OCAyIDE2LjUgMnptLTMuNzUgMTcuODUtLjc1Ljc0LS43NC0uNzMtLjA0LS4wNEM2LjI3IDE0LjkyIDMgMTEuNjkgMyA3Ljk5IDMgNS4xOSA0Ljk4IDMgNy41IDNjMS40IDAgMi43OS43MSAzLjcxIDEuODlMMTIgNS45bC43OS0xLjAxQzEzLjcxIDMuNzEgMTUuMSAzIDE2LjUgMyAxOS4wMiAzIDIxIDUuMTkgMjEgNy45OWMwIDMuNy0zLjI4IDYuOTQtOC4yNSAxMS44Nno=";
this.ExelAnnotations = "TTE3LjUsN2MxLjkzLDAsMy41LDEuNTcsMy41LDMuNWMwLDEtMC41Myw0LjUtMC44NSw2LjVoLTIuMDJsMC4yNC0xLjg5bDAuMTQtMS4wOWwtMS4xLTAuMDNDMTUuNSwxMy45NCwxNCwxMi40LDE0LDEwLjUgQzE0LDguNTcsMTUuNTcsNywxNy41LDcgICAgICAgICAgICAgTTYuNSw3QzguNDMsNywxMCw4LjU3LDEwLDEwLjVjMCwxLTAuNTMsNC41LTAuODUsNi41SDcuMTNsMC4yNC0xLjg5bDAuMTQtMS4wOWwtMS4xLTAuMDMgQzQuNSwxMy45NCwzLDEyLjQsMywxMC41QzMsOC41Nyw0LjU3LDcsNi41LDcgICAgICAgICAgICAgTTE3LjUsNkMxNS4wMSw2LDEzLDguMDEsMTMsMTAuNWMwLDIuNDQsMS45NSw0LjQyLDQuMzgsNC40OUwxNywxOGg0YzAsMCwxLTYsMS03LjUgQzIyLDguMDEsMTkuOTksNiwxNy41LDZMMTcuNSw2eiAgICAgICAgICAgICBNNi41LDZDNC4wMSw2LDIsOC4wMSwyLDEwLjVjMCwyLjQ0LDEuOTUsNC40Miw0LjM4LDQuNDlMNiwxOGg0YzAsMCwxLTYsMS03LjUgQzExLDguMDEsOC45OSw2LDYuNSw2TDYuNSw2eg==";
this.ExelPlaybackSpeed = "TTEwLDh2OGw2LTRMMTAsOEwxMCw4eiBNNi4zLDVMNS43LDQuMkM3LjIsMyw5LDIuMiwxMSwybDAuMSwxQzkuMywzLjIsNy43LDMuOSw2LjMsNXogICAgICAgICAgICBNNSw2LjNMNC4yLDUuN0MzLDcuMiwyLjIsOSwyLDExIGwxLC4xQzMuMiw5LjMsMy45LDcuNyw1LDYuM3ogICAgICAgICAgICBNNSwxNy43Yy0xLjEtMS40LTEuOC0zLjEtMi00LjhMMiwxM2MwLjIsMiwxLDMuOCwyLjIsNS40TDUsMTcuN3ogICAgICAgICAgICBNMTEuMSwyMWMtMS44LTAuMi0zLjQtMC45LTQuOC0yIGwtMC42LC44QzcuMiwyMSw5LDIxLjgsMTEsMjJMMTEuMSwyMXogICAgICAgICAgICBNMjIsMTJjMC01LjItMy45LTkuNC05LTEwbC0wLjEsMWM0LjYsLjUsOC4xLDQuMyw4LjEsOXMtMy41LDguNS04LjEsOWwwLjEsMSBDMTguMiwyMS41LDIyLDE3LjIsMjIsMTJ6";
this.ExelSubtitles = "TTUsMTFoMnYySDVWMTF6IE0xNSwxNUg1djJoMTBWMTV6IE0xOSwxNWgtMnYyaDJWMTV6IE0xOSwxMUg5djJoMTBWMTF6IE0yMiw2SDJ2MTRoMjBWNnogTTMsN2gxOHYxMkgzVjd6";
this.ExelSubtitlesUS = "TTYsMTR2LTRjMC0wLjU1LC40NS0xLDEtMWgzYzAuNTUsMCwxLC40NSwxLDF2MUg5LjV2LTAuNWgtMnYzaDJWMTNIMTF2MWMwLC41NS0wLjQ1LDEtMSwxSDdDNi40NSwxNSw2LDE0LjU1LDYsMTR6ICAgICAgICAgICAgTTE0LDE1aDNjMC41NSwwLDEtMC40NSwxLTF2LTFoLTEuNXYwLjVoLTJ2LTNoMlYxMUgxOHYtMWMwLTAuNTUtMC40NS0xLTEtMWgtM2MtMC41NSwwLTEsLjQ1LTEsMXY0QzEzLDE0LjU1LDEzLjQ1LDE1LDE0LDE1eiAgICAgICAgICAgIE0yMCw0SDR2MTZoMTZWNCBNMjEsM3YxOEgzVjMuMDFDMywzLDMsMywzLjAxLDNIMjFMMjEsM3o=";
this.ExelQuality = "TTE1LDE3aDZ2MWgtNlYxN3ogTTExLDE3SDN2MWg4djJoMXYtMnYtMXYtMmgtMVYxN3ogTTE0LDhoMVY2VjVWM2gtMXYySDN2MWgxMVY4eiAgICAgICAgICAgIE0xOCw1djFoM1Y1SDE4eiBNNiwxNGgxdi0ydi0xVjlINnYySDN2MSBoM1YxNHogTTEwLDEyaDExdi0xSDEwVjEyeg==";
this.ExelVerified = "TTEyLDJDNi40OCwyLDIsNi40OCwyLDEyczQuNDgsMTAsMTAsMTBzMTAtNC40OCwxMC0xMCBTMTcuNTIsMiwxMiwyeiBNOS45MiwxNy45M2wtNC45NS00Ljk1bDIuMDUtMi4wNWwyLjksMi45bDcuMzUtNy4zNWwyLjA1LDIuMDVMOS45MiwxNy45M3o=";
this.ExelProducer = "TTEzLjA1MyA1LjkwNmEyLjEgMi4xIDAgMDEuMDAyIDQuMTg4IDIuMSAyLjEgMCAwMS0yLjk2MyAyLjk2MSAyLjEgMi4xIDAgMDEtNC4xODkuMDAzIDIuMSAyLjEgMCAwMS0yLjk2LTIuOTY0IDIuMSAyLjEgMCAwMS0uMDAyLTQuMTg4IDIuMSAyLjEgMCAwMTIuOTYyLTIuOTYxIDIuMSAyLjEgMCAwMTQuMTg5LS4wMDEgMi4xIDIuMSAwIDAxMi45NjEgMi45NjJaTTcuOTk5IDR2NC42NjhhMS43NSAxLjc1IDAgMTAxIDEuNTgyVjZoMlY0aC0zWg==";
this.ExelStableVolume = "TTcgMTNINXYtMmgydjJ6bTMtNEg4djZoMlY5em0zLTNoLTJ2MTJoMlY2em0zIDJoLTJ2OGgyVjh6bTMgMmgtMnY0aDJ2LTR6bS03LTdjLTQuOTYgMC05IDQuMDQtOSA5czQuMDQgOSA5IDkgOS00LjA0IDktOS00LjA0LTktOS05bTAtMWM1LjUyIDAgMTAgNC40OCAxMCAxMHMtNC40OCAxMC0xMCAxMFMyIDE3LjUyIDIgMTIgNi40OCAyIDEyIDJ6";
this.ExelSleepTimer = "TTE2LjY3LDQuMzFDMTkuMyw1LjkyLDIxLDguODMsMjEsMTJjMCw0Ljk2LTQuMDQsOS05LDljLTIuNjEsMC01LjA0LTEuMTItNi43Mi0zLjAyQzUuNTIsMTcuOTksNS43NiwxOCw2LDE4IGM2LjA3LDAsMTEtNC45MywxMS0xMUMxNyw2LjA4LDE2Ljg5LDUuMTgsMTYuNjcsNC4zMSBNMTQuODksMi40M0MxNS41OSwzLjgsMTYsNS4zNSwxNiw3YzAsNS41Mi00LjQ4LDEwLTEwLDEwIGMtMSwwLTEuOTctMC4xNS0yLjg5LTAuNDNDNC43NywxOS43OSw4LjEzLDIyLDEyLDIyYzUuNTIsMCwxMC00LjQ4LDEwLTEwQzIyLDcuNDgsMTksMy42NywxNC44OSwyLjQzTDE0Ljg5LDIuNDN6IE0xMiw2SDZ2MWg0LjUgTDYsMTAuOTl2MC4wNVYxMmg2di0xSDcuNUwxMiw3LjAxVjYuOThWNkwxMiw2eg==";

this.SvgCreateClip = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M8,7c0,0.55-0.45,1-1,1S6,7.55,6,7c0-0.55,0.45-1,1-1S8,6.45,8,7z M7,16c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1s1-0.45,1-1 C8,16.45,7.55,16,7,16z M10.79,8.23L21,18.44V20h-3.27l-5.76-5.76l-1.27,1.27C10.89,15.97,11,16.47,11,17c0,2.21-1.79,4-4,4 c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4c0.42,0,0.81,0.08,1.19,0.2l1.37-1.37l-1.11-1.11C8,10.89,7.51,11,7,11c-2.21,0-4-1.79-4-4 c0-2.21,1.79-4,4-4c2.21,0,4,1.79,4,4C11,7.43,10.91,7.84,10.79,8.23z M10.08,8.94L9.65,8.5l0.19-0.58C9.95,7.58,10,7.28,10,7 c0-1.65-1.35-3-3-3S4,5.35,4,7c0,1.65,1.35,3,3,3c0.36,0,0.73-0.07,1.09-0.21L8.7,9.55l0.46,0.46l1.11,1.11l0.71,0.71l-0.71,0.71 L8.9,13.91l-0.43,0.43l-0.58-0.18C7.55,14.05,7.27,14,7,14c-1.65,0-3,1.35-3,3c0,1.65,1.35,3,3,3s3-1.35,3-3 c0-0.38-0.07-0.75-0.22-1.12l-0.25-0.61L10,14.8l1.27-1.27l0.71-0.71l0.71,0.71L18.15,19H20v-0.15L10.08,8.94z M17.73,4H21v1.56 l-5.52,5.52l-2.41-2.41L17.73,4z M18.15,5l-3.67,3.67l1,1L20,5.15V5H18.15z" class="style-scope yt-icon"></path></g></svg>';
this.SvgAddToPlaylist = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z" class="style-scope yt-icon"></path></g></svg>';
this.SvgShare = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g mirror-in-rtl="" class="style-scope yt-icon"><path d="M14 9V3L22 12L14 21V15C8.44 15 4.78 17.03 2 21C3.11 15.33 6.22 10.13 14 9Z" class="style-scope yt-icon"></path></g></svg>';
this.SvgLike = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" class="style-scope yt-icon"></path></g></svg>';
this.SvgDislike = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z" class="style-scope yt-icon"></path></g></svg>';
this.SvgActionMenu = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><circle cx="5" cy="12" r="2" class="style-scope yt-icon"></circle><circle cx="12" cy="12" r="2" class="style-scope yt-icon"></circle><circle cx="19" cy="12" r="2" class="style-scope yt-icon"></circle></g></svg>';
this.SvgSearch = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" class="style-scope yt-icon"></path></g></svg>';
this.SvgMic = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" class="style-scope yt-icon"></path></g></svg>';
this.SvgMenu = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" class="style-scope yt-icon"></path></g></svg>';
this.SvgNotifications = '<svg class="style-scope yt-icon" display="block" pointer-events="none" style="height:100%;width:100%" focusable="false" version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g class="style-scope yt-icon"><path class="style-scope yt-icon" d="m12 22c1.1 0 2-0.9 2-2h-4c0 1.1 0.9 2 2 2zm8-4.65v1.65h-16v-1.65l2-1.88v-5.15c0-2.92 1.56-5.22 4-5.98v-0.38001c0-1.42 1.49-2.5 2.99-1.76 0.65 0.32 1.01 1.03 1.01 1.76v0.39c2.44 0.75 4 3.06 4 5.98v5.15z"/></g></svg>';

this.PathVerified = "M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10 S17.52,2,12,2z M9.92,17.93l-4.95-4.95l2.05-2.05l2.9,2.9l7.35-7.35l2.05,2.05L9.92,17.93z";
this.PathProducer = "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z";