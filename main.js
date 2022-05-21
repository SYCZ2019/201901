$("#menu").click(function () {
    $("#overlay").css("display", "block");
    $("#overlay").addClass("gd-ani-fadein");
    $("#drawer").css("display", "block");
    $("#drawer").addClass("gd-ani-drawer-slidein");
    setTimeout(function () { $("#overlay").removeClass("gd-ani-fadein"); $("#drawer").removeClass("gd-ani-drawer-slidein"); }, 200);
});
$("#overlay").click(function () {
    $("#overlay").addClass("gd-ani-fadeout");
    $("#drawer").addClass("gd-ani-drawer-slideout");
    setTimeout(function () { $("#overlay").css("display", "none"); $("#overlay").removeClass("gd-ani-fadeout"); $("#drawer").css("display", "none"); $("#drawer").removeClass("gd-ani-drawer-slideout"); }, 200);
});
langset("lang.js", "zh-cn");
const lang = document.getElementById("lang");
lang.addEventListener("change", function () {
    langload(lang.options[lang.selectedIndex].value);
});
window.addEventListener("load", function () {
    for (var i = 0; i < lang.options.length; i++) {
        lang.options[i].text = languageJson[lang.options[i].value]["name"];
        if (lang.options[i].value == langDefault) {
            lang.options[i].selected = true;
        }
    }
    langload();
});