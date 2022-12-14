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
			Advanced: "Advanced settings"
		},
		Other: {
			SlowFeatureTooltip: "This feature might cause performance issues on slow PCs."
		}
	},
	"ru-RU": {
		HTML: {
			"btn-reset": "Сбросить до исходных",
			"btn-load": "Загрузить",
			"btn-save": "Сохранить"
		},
		Categories: {
			SeriStyle: "SeriStyle",
			General: "Общие изменения",
			SidebarBuilder: "Конструктор боковой панели",
			HomePage: "Изменения на домашней странице",
			VideoPage: "Изменения на видеостраницах",
			VideoPlayer: "Изменения в проигрывателе",
			Advanced: "Продвинутые настройки"
		},
		Other: {
			SlowFeatureTooltip: "Данная функция может вызывать проблемы с производительностью на медленных ПК."
		}
	}
};

this.SeriStyleSettings = {
	SeriStyle: {
		Language: {
			Kind: 1,
			Name: {
				"en-US": "Language",
				"ru-RU": "Язык"
			},
			Picks: {
				"en-US": {
					"en-US": "English",
					"ru-RU": "Russian (Русский)"
				},
				"ru-RU": {
					"en-US": "Английский (English)",
					"ru-RU": "Русский"
				}
			},
			Value: "en-US"
		}
	},
	General: {
		OldColors: {
			Kind: 0,
			Name: {
				"en-US": "Old dark theme colors",
				"ru-RU": "Старые цвета тёмной темы"
			},
			Value: false,
			SlowFeature: true
		},
		ResizeSearchBar: {
			Kind: 0,
			Name: {
				"en-US": "Old search bar size",
				"ru-RU": "Старый размер строки поиска"
			},
			Value: true
		},
		NormalizeSearchBar: {
			Kind: 0,
			Name: {
				"en-US": "Normalize search bar size",
				"ru-RU": "Нормализировать размер строки поиска"
			},
			Value: false
		},
		ThumbnailRoundings: {
			Kind: 0,
			Name: {
				"en-US": "Remove thumbnails' rounded corners",
				"ru-RU": "Убрать закругленные края у превьюшек"
			},
			Value: true
		}
	},
	HomePage: {
		HideSeries: {
			Kind: 0,
			Name: { // TODO: URL
				"en-US": "Hide label above video title(example: https://upload.wtf/s/4WHtS)",
				"ru-RU": "Скрыть подпись над названием видео(пример: https://upload.wtf/s/4WHtS)"
			},
			Value: false
		}
	},
	/*SidebarBuilder: {
		OldHomeButton: {
			Kind: 0,
			Name: {
				"en-US": "Old Home button icon",
				"ru-RU": "Старая кнопка Домой"
			},
			Value: true
		}
	},*/
	VideoPage: {
		LegacyPanels: {
			Kind: 0,
			Name: {
				"en-US": "Legacy(v1.2.0) panel style",
				"ru-RU": "Стиль панелей старой версии(v1.2.0)"
			},
			Value: false
		},
		Uppercase: {
			Kind: 0,
			Name: {
				"en-US": "Bring back some elements' uppercase label spelling",
				"ru-RU": "Вернуть написание подписей некоторых элементов заглавными буквами"
			},
			Value: true
		},
		HideDescriptionShade: {
			Kind: 0,
			Name: {
				"en-US": "Remove collapsed description content fade-out",
				"ru-RU": "Убрать затухание текста в свёрнутом описании"
			},
			Value: true
		},
		HideDownloadButton: {
			Kind: 0,
			Name: {
				"en-US": "Hide the native Download button",
				"ru-RU": "Скрыть встроенную кнопку \"Скачать\""
			},
			Value: true
		},
		LetterSpacing: {
			Kind: 0,
			Name: {
				"en-US": "Old action bar letter spacing",
				"ru-RU": "Старые промежутки между буквами на панели действий"
			},
			Value: false
		},
		NoSponsorComments: {
			Kind: 0,
			Name: {
				"en-US": "Hide donation flair & background from comments",
				"ru-RU": "Скрыть плашку и цветной фон комментариев с пожертвованиями"
			},
			Value: false
		}
		/*RYD: {
			Kind: 0,
			Name: {
				"en-US": "Try to fix RYD sentiment bar instead of removing it",
				"ru-RU": "Попытаться исправить полоску отношения лайков к дизлайкам, созданную RYD, вместо её удаления"
			}
		}*/
	},
	VideoPlayer: {
		DisableGradient: {
			Kind: 0,
			Name: {
				"en-US": "Hide the transparent bottom gradient",
				"ru-RU": "Скрыть высокий полупрозрачный градиент снизу"
			},
			Value: false
		},
		DisableHeatmap: {
			Kind: 0,
			Name: {
				"en-US": "Hide \"Most replayed\" heat-map",
				"ru-RU": "Скрыть график с самыми воспроизводимыми фрагментами видео" // TODO воспроизводимыми?
			},
			Value: false
		},
		HideMiniPlayer: { // TODO: Toolbar builder
			Kind: 0,
			Name: {
				"en-US": "Hide the Miniplayer button (doesn't disable the hotkey)",
				"ru-RU": "Скрыть кнопку \"Мини-проигрыватель\" (не отключает горячую клавишу)"
			},
			Value: false
		}
		/*DisableAutoplayScroll: {
			Kind: 0,
			Name: {
				"en-US": "Pause autoplay when scrolling down the page",
				"ru-RU": "Приостанавливать автовопроизведение при прокрутке страницы вниз"
			},
			Value: false
		},
		DisableAutoplayScrollThreshold: {
			Kind: 2,
			Range: [10, 1000],
			Name: {
				"en-US": "Scroll threshold to pause autoplay",
				"ru-RU": "Порог прокрутки для приостановки автовоспроизведения"
			},
			Value: 400,
			Format: {
				"en-US": "$px",
				"ru-RU": "$ пикселей"
			}
		}*/
	},
	Advanced: {
		InjectedATPCallbackTime: {
			Kind: 2,
			Range: [10, 1000],
			Name: {
				"en-US": "Delay after opening the \"More Actions\" menu for mCC",
				"ru-RU": "Задержка после открытия меню с доп. действиями для mCC"
			},
			Value: 200,
			Format: {
				"en-US": "$ ms.",
				"ru-RU": "$ мс."
			}
		},
		InjectedSettleTime: {
			Kind: 2,
			Range: [0, 1000],
			Name: {
				"en-US": "Delay after detecting a DOM mutation",
				"ru-RU": "Задержка после обнаружения изменения в DOM"
			},
			Value: 50,
			Format: {
				"en-US": "$ ms.",
				"ru-RU": "$ мс."
			}
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