// @ts-ignore
import { loadGame } from "./game.js";

let __moduleBase = "DUMMY";

const debug = console.log;
debug("bootstrap", "begin");
function getBaseURL() {
  function e(a: string) {
    var b = a.lastIndexOf("#");
    if (b == -1) {
      b = a.length;
    }
    var c = a.indexOf("?");
    if (c == -1) {
      c = a.length;
    }
    var d = a.lastIndexOf("/", Math.min(c, b));
    return d >= 0 ? a.substring(0, d + 1) : "";
  }
  function f(a: string) {
    if (a.match(/^\w+:\/\//)) {
    } else {
      var b = document.createElement("img");
      b.src = a + "clear.cache.gif";
      a = e(b.src);
    }
    return a;
  }
  function h() {
    var a = document.getElementsByTagName("script");
    for (var b = 0; b < a.length; ++b) {
      if (a[b].src.indexOf("html.nocache.js") != -1) {
        return e(a[b].src);
      }
    }
    return "";
  }
  function i() {
    var a = document.getElementsByTagName("base");
    if (a.length > 0) {
      return a[a.length - 1].href;
    }
    return "";
  }
  function j() {
    var a = document.location;
    return (
      a.href == a.protocol + "//" + a.host + a.pathname + a.search + a.hash
    );
  }
  var k = h();
  if (k == "") {
    k = i();
  }
  if (k == "" && j()) {
    k = e(document.location.href);
  }
  k = f(k);
  return k;
}
function D(a: string) {
  if (a.match(/^\//)) {
    return a;
  }
  if (a.match(/^[a-zA-Z]+:\/\//)) {
    return a;
  }
  return __moduleBase + a;
}

function G() {
  debug("loadExternalRefs", "begin");
  const a = "/html/gwt/chrome/chrome.css";
  var b = document.createElement("link");
  b.setAttribute("rel", "stylesheet");
  b.setAttribute("href", D(a));
  document.getElementsByTagName("head")[0].appendChild(b);
  debug("loadExternalRefs", "end");
}
__moduleBase = getBaseURL();
G();
debug("bootstrap", "end");

loadGame();
//const tag = document.createElement("script");
//tag.src = "/game.js";
//document.getElementsByTagName("head")[0].appendChild(tag);
