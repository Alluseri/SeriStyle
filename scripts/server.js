/* jshint esversion: 11 */


window.SeriStyleSettings = {
	SeriStyle: {
		Language: {
			Kind: 1,
			Name: {
				"en-US": "Language",
				"ru-RU": "Язык"
			},
			Picks: {
				"en-US": "English",
				"ru-RU": "Русский"
			},
			Value: "en-US"
		},
	},
	Advanced: {
		InjectedATPCallbackTime: {
			Kind: 2,
			Range: [10, 1000],
			Name: {
				"en-US": "Delay after opening the \"More Actions\" menu for iATP",
				"ru-RU": "Задержка после открытия меню с доп. действиями для iATP"
			},
			Value: 200
		},
		InjectedSettleTime: {
			Kind: 2,
			Range: [10, 1000],
			Name: {
				"en-US": "Delay after detecting a DOM mutation",
				"ru-RU": "Задержка после обнаружения изменения в DOM"
			},
			Value: 50
		}
	},
	General: {
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
		},
		LetterSpacing: {
			Kind: 0,
			Name: {
				"en-US": "Old action bar letter spacing",
				"ru-RU": "Старые промежутки между буквами на панели действий"
			},
			Value: false
		},
		OldColors: {
			Kind: 0,
			Name: {
				"en-US": "Old dark theme colors",
				"ru-RU": "Старые цвета тёмной темы"
			},
			Value: false,
			Tree: {
				SlowMode: false
			}
		},
	},
	VideoPlayer: {
		DisableAutoplayScroll: {
			Kind: 0,
			Name: {
				"en-US": "Pause autoplay when scrolling down the page",
				"ru-RU": "Приостанавливать автовопроизведение при прокрутке страницы вниз"
			},
			Value: true
		},
		DisableAutoplayScrollThreshold: {
			Kind: 2,
			Range: [10, 1000],
			Name: {
				"en-US": "Scroll threshold to pause autoplay",
				"ru-RU": "Порог прокрутки для приостановки автовоспроизведения"
			},
			Value: 400,
			Tree: {
				DisableAutoplayScroll: true
			}
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
				"ru-RU": "Скрыть нативную кнопку \"Скачать\""
			},
			Value: true
		}
	}
};

window.SeriStyleServer = {
	Reset: () => {

	},
	Load: () => {

	},
	Save: () => {

	}
};

window.SeriStyleServer.Load();