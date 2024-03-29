/* jshint -W083, -W004 */

var Environment = (this.browser || this.chrome);

const DomUtils = {
	"GetValue": (Element) => Element.value || Element.innerText,
	"BuildElement": function (Tag, Characteristics, Inner, Callback) {
		var elem = document.createElement(Tag);
		for (let _ in (Characteristics || {})) {
			elem[_] = Characteristics[_];
		}
		for (let _ in (Inner || [])) {
			elem.appendChild(Inner[_]);
		}
		if (Callback) Callback(elem);
		return elem;
	}
};

var Language = "en-US";
var CurrentCategory = null;
var Modified;

function Navigate(Category) {
	if (CurrentCategory == Category) return;
	console.log("Navigated to " + (document.getElementById("title").innerText = SeriStyleLocales[Language].Categories[CurrentCategory = Category]));
	var Content = document.getElementById("content");
	Array.from(Content.children).forEach(Node => Node.remove());
	for (var SettingKey in SeriStyleSettings[Category]) {
		var SettingMeta = SeriStyleSettings[Category][SettingKey];
		var SettingDiv = Content.appendChild(DomUtils.BuildElement("div", { className: "setting-container" }));
		switch (SettingMeta.Kind) {
			case 0:
				SettingDiv.appendChild(DomUtils.BuildElement("input", {
					type: "checkbox",
					ss_meta: SettingMeta,
					ss_category: Category,
					ss_key: SettingKey,
					checked: SettingMeta.Value,
					onclick: function () {
						console.log(this.checked);
						(Modified[this.ss_category] = Modified[this.ss_category] || {})[this.ss_key] = this.ss_meta.Value = this.checked;
						// Environment.storage.sync.set({ "ss_metaver": SeriStyleMetaVersion });
					}
				}));
				var Span = DomUtils.BuildElement("span", { innerText: SettingMeta.Name[Language] });
				SettingDiv.appendChild(Span);
				break;
			case 1:
				var Span = DomUtils.BuildElement("span", { innerText: SettingMeta.Name[Language] });
				SettingDiv.appendChild(Span);
				var ComboElm = DomUtils.BuildElement("select", {
					ss_meta: SettingMeta,
					ss_category: Category,
					ss_key: SettingKey,
					onchange: function () {
						console.log(this.value);
						(Modified[this.ss_category] = Modified[this.ss_category] || {})[this.ss_key] = this.ss_meta.Value = this.value;
						// Environment.storage.sync.set({ "ss_metaver": SeriStyleMetaVersion });
					}
				});
				for (var Value in SettingMeta.Picks[Language])
					ComboElm.appendChild(DomUtils.BuildElement("option", {
						value: Value,
						innerText: SettingMeta.Picks[Language][Value]
					}));
				SettingDiv.appendChild(ComboElm);
				ComboElm.value = SettingMeta.Value;
				break;
			case 2:
				var Span = DomUtils.BuildElement("span", { innerText: SettingMeta.Name[Language] });
				SettingDiv.appendChild(Span);
				SettingDiv.appendChild(X = DomUtils.BuildElement("input", {
					type: "range",
					ss_meta: SettingMeta,
					ss_category: Category,
					ss_key: SettingKey,
					min: SettingMeta.Range[0],
					max: SettingMeta.Range[1],
					value: SettingMeta.Value,
					oninput: function () {
						if (this.value == this.min && this.ss_meta.LowerBound) {
							this.nextElementSibling.innerText = this.ss_meta.LowerBound[Language];
							(Modified[this.ss_category] = Modified[this.ss_category] || {})[this.ss_key] = this.ss_meta.Value = this.value;
						} else if (this.value == this.max && this.ss_meta.UpperBound) {
							this.nextElementSibling.innerText = this.ss_meta.UpperBound[Language];
							(Modified[this.ss_category] = Modified[this.ss_category] || {})[this.ss_key] = this.ss_meta.Value = this.value;
						} else {
							this.nextElementSibling.innerText = this.ss_meta.Format[Language].replace("$", (Modified[this.ss_category] = Modified[this.ss_category] || {})[this.ss_key] = this.ss_meta.Value = this.value);
						}
						// Environment.storage.sync.set({ "ss_metaver": SeriStyleMetaVersion });
					}
				}));
				SettingDiv.appendChild(DomUtils.BuildElement("span", {
					innerText:
						SettingMeta.Value == SettingMeta.Range[0] && SettingMeta.LowerBound
						? SettingMeta.LowerBound[Language]
						: SettingMeta.Value == SettingMeta.Range[1] && SettingMeta.UpperBound
						 ? SettingMeta.UpperBound[Language]
						 : SettingMeta.Format[Language].replace("$", SettingMeta.Value)
				}));
				break;
		}
	}
}

document.addEventListener("DOMContentLoaded", async () => {
	var Fail = false;

	try {
		Modified = (await Environment.storage.sync.get(["ss_settings"])).ss_settings;
		if (!Modified)
			Environment.storage.sync.set({ "ss_settings": Modified = {} });
		for (var Category in Modified)
			for (var Setting in Modified[Category]) {
				try {
					SeriStyleSettings[Category][Setting].Value = Modified[Category][Setting];
				} catch {
					Modified[Category][Setting] = undefined;
					console.log("Removed " + Category + "." + Setting + " due to absence in defaults.");
				}
			}
	} catch (ex) {
		Modified = {};
		Fail = true;
		alert("You're running in storageless mode and will be using default settings.\nAre you using a Firefox fork?");
		console.log(ex);
	}

	var KLanguage = window.SeriStyleLocales[Language = SeriStyleSettings.SeriStyle.Language.Value] || window.SeriStyleLocales[Language = SeriStyleSettings.SeriStyle.Language.Value = "en-US"];
	Array.from(document.getElementsByClassName("localize")).forEach(Element => Element.innerText = KLanguage.HTML[Element.id]);

	if (!Fail) {
		document.getElementById("btn-reset").onclick = () => {
			Environment.storage.sync.set({ ss_settings: {} });
			document.location.reload();
		};

		document.getElementById("btn-save").onclick = () => {
			Environment.storage.sync.set({ ss_settings: Modified });
			document.location.reload();
		};

		/*document.getElementById("btn-resetmeta").onclick = () => {
			Environment.storage.sync.set({ ss_metaver: -1 });
			document.location.reload();
		};*/
	}

	var Nav = document.getElementById("navigation");
	for (var Category in SeriStyleSettings) {
		Nav.appendChild(DomUtils.BuildElement("button", {
			className: "modern-tab",
			value: "",
			innerText: KLanguage.Categories[Category],
			navtab: Category,
			onclick: function () {
				Navigate(this.navtab);
			}
		}));
	}

	Navigate(Object.keys(SeriStyleSettings)[0]);
});