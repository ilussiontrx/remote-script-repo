// remote-script.js
function bs() {
    (Qt.hidden = !$e),
    (window.onbeforeunload = function (t) {
        return "Are you sure?";
    }),
    window.FRVR && window.FRVR.tracker.levelStart("game_start"),
    Di("moo_name", jt.value),
    !Jt && cs() && (Jt = !0),
    _h.stop("menu"),
    ms("Loading..."),
    (document.getElementById("menuChatDiv").style.opacity = "1"),
    (document.getElementById("menuChatDiv").style.visibility = "visible"),
    addEventListener("keydown", e => e.keyCode == 192 && $('#menuChatDiv').toggle());
    (document.getElementById("allah").style.opacity = "1"),
    (document.getElementById("allah").style.visibility = "visible"),
    ee.send("M", {
        name: jt.value,
        moofoll: xi,
        skin: fs,
    }),
    Sf();
}
