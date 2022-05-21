var langDefault;
var language;
function langset(_languageFile, _default) {
    document.write("<script src=\"" + _languageFile + "\"></script>");
    langDefault = _default;
}
function langload(_language = langDefault) {
    language = _language;
    if (languageJson[_language] == null) {
        console.error("Cannot find language \"" + _language + "\" from language pack.");
        language = langDefault;
    }
    let texts = document.getElementsByClassName("gjs-lang");
    for (var i = 0; i < texts.length; i++) {
        const elements = texts.item(i);
        let domText = elements.dataset.lang || elements.innerHTML;
        if (domText != null) {
            let domLang = langget(domText);
            elements.innerText = domLang;
            elements.dataset.lang = domText;
        }
    }
}
function langget(_msg, replace = []) {
    var _data = languageJson[language][_msg];
    if (!_data) {
        _data = languageJson[language]["com_unknown"];
    }
    for (var i = 0; i < replace.length; i++) {
        _data = _data.replace("[" + i + "]", replace[i]);
    }
    let date = new Date();
    _data = _data.replace(/\[year\]/g, date.getFullYear().toString());
    let regexp = /(?<=\[use_)[^}]*(?=\])/;
    let match = _data.match(regexp);
    if (match) {
        _data = _data.replace("[use_" + match[0] + "]", langget(match[0]));
    }
    return _data;
}