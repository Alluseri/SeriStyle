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
			VideoPage: "Videopage changes",
			VideoPlayer: "Videoplayer changes",
			Advanced: "Advanced settings"
		},
		Other: {
			SlowModeTooltip: "This feature only works with Low performance mode disabled."
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
			General: "Общие настройки",
			VideoPage: "Изменения видеостраниц",
			VideoPlayer: "Изменения проигрывателя",
			Advanced: "Продвинутые настройки"
		},
		Other: {
			SlowModeTooltip: "Данная функция не работает с включенным режимом низкой производительности."
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
		},
		SlowMode: {
			Kind: 0,
			Name: {
				"en-US": "Low performance mode",
				"ru-RU": "Режим низкой производительности"
			},
			Value: true,
			Tooltip: {
				Kind: 0,
				"en-US": "Disables some performance-hungry features, primarily features using MutationObservers.",
				"ru-RU": "Отключает некоторые ресурсозатратные функции, в основном те, которые используют MutationObserver'ы."
			}
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
			DisableOnSlowMode: true
		},
		ResizeSearchBar: {
			Kind: 0,
			Name: {
				"en-US": "Old search bar size",
				"ru-RU": "Старый размер строки поиска"
			},
			Value: true
		}
	},
	VideoPage: {
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
		/*RYD: {
			Kind: 0,
			Name: {
				"en-US": "Try to fix RYD sentiment bar instead of removing it",
				"ru-RU": "Попытаться исправить полоску отношения лайков к дизлайкам, созданную RYD, вместо её удаления"
			}
		}*/
	},
	VideoPlayer: {
		DisableAutoplayScroll: {
			Kind: 0,
			Name: {
				"en-US": "Pause autoplay when scrolling down the page (Possibly reimplemented by YouTube again...)",
				"ru-RU": "Приостанавливать автовопроизведение при прокрутке страницы вниз (Возможно, добавлено ютубом снова...)"
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
		}
	},
	Advanced: {
		InjectedATPCallbackTime: {
			Kind: 2,
			Range: [10, 1000],
			Name: {
				"en-US": "Delay after opening the \"More Actions\" menu for iATP",
				"ru-RU": "Задержка после открытия меню с доп. действиями для iATP"
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