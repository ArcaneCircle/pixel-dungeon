function html() {
  var cb = "undefined",
    db = "readystatechange",
    eb = 10,
    fb = "Chrome",
    gb = 'eval("',
    hb = '");',
    ib = "script",
    jb = "javascript",
    kb = "moduleStartup",
    lb = "moduleRequested",
    mb = "Failed to load ",
    nb = "head",
    ob = "meta",
    pb = "name",
    qb = "html::",
    rb = "::",
    sb = "gwt:property",
    tb = "content",
    ub = "=",
    vb = "gwt:onPropertyErrorFn",
    wb = 'Bad handler "',
    xb = '" for "gwt:onPropertyErrorFn"',
    yb = "gwt:onLoadErrorFn",
    zb = '" for "gwt:onLoadErrorFn"',
    Cb = "/",
    Db = "img",
    Fb = "baseUrl",
    Gb = "html.nocache.js",
    Hb = "base",
    Ib = "//",
    Yb = "selectingPermutation",
    dc = ":",
    fc = "link",
    gc = "rel",
    hc = "stylesheet",
    ic = "href",
    jc = "loadExternalRefs",
    lc = "end",
    mc = "http:",
    nc = "file:",
    oc = "_gwt_dummy_",
    pc = "__gwtDevModeHook:html",
    rc = ":moduleBase";
  r("bootstrap", "begin");
  function r(a, b) {
    if (window.__gwtStatsEvent) {
      window.__gwtStatsEvent({
        moduleName: "html",
        sessionId: window.__gwtStatsSessionId,
        subSystem: "startup",
        evtGroup: a,
        millis: new Date().getTime(),
        type: b,
      });
    }
  }
  html.__sendStats = r;
  html.__moduleName = "html";
  html.__errFn = null;
  html.__moduleBase = "DUMMY";
  html.__softPermutationId = 0;
  html.__computePropValue = null;
  html.__getPropMap = null;
  html.__installRunAsyncCode = function () {};
  html.__gwtStartLoadingFragment = function () {
    return null;
  };
  html.__gwt_isKnownPropertyValue = function () {
    return false;
  };
  html.__gwt_getMetaProperty = function () {
    return null;
  };
  var s = null;
  var t = (window.__gwt_activeModules = window.__gwt_activeModules || {});
  t["html"] = { moduleName: "html" };
  html.__moduleStartupDone = function (e) {
    var f = t["html"].bindings;
    t["html"].bindings = function () {
      var a = f ? f() : {};
      var b = e[html.__softPermutationId];
      for (var c = 0; c < b.length; c++) {
        var d = b[c];
        a[d[0]] = d[1];
      }
      return a;
    };
  };
  var u;
  function v() {
    w();
    return u;
  }
  function w() {
    if (u) {
      return;
    }
    var a = document.createElement("iframe");
    a.id = "html";
    a.style.cssText =
      "position:absolute; width:0; height:0; border:none; left: -1000px; top: -1000px;";
    a.tabIndex = -1;
    document.body.appendChild(a);
    u = a.contentWindow.document;
    u.open();
    var b = document.compatMode == "CSS1Compat" ? "<!doctype html>" : "";
    u.write(b + "<html><head><\/head><body><\/body><\/html>");
    u.close();
  }
  function A(k) {
    function l(a) {
      function b() {
        if (typeof document.readyState == cb) {
          return typeof document.body != cb && document.body != null;
        }
        return /loaded|complete/.test(document.readyState);
      }
      var c = b();
      if (c) {
        a();
        return;
      }
      function d() {
        if (!c) {
          if (!b()) {
            return;
          }
          c = true;
          a();
          if (document.removeEventListener) {
            document.removeEventListener(db, d, false);
          }
          if (e) {
            clearInterval(e);
          }
        }
      }
      if (document.addEventListener) {
        document.addEventListener(db, d, false);
      }
      var e = setInterval(function () {
        d();
      }, eb);
    }
    function m(c) {
      function d(a, b) {
        a.removeChild(b);
      }
      var e = v();
      var f = e.body;
      var g;
      if (navigator.userAgent.indexOf(fb) > -1 && window.JSON) {
        var h = e.createDocumentFragment();
        h.appendChild(e.createTextNode(gb));
        for (var i = 0; i < c.length; i++) {
          var j = window.JSON.stringify(c[i]);
          h.appendChild(e.createTextNode(j.substring(1, j.length - 1)));
        }
        h.appendChild(e.createTextNode(hb));
        g = e.createElement(ib);
        g.language = jb;
        g.appendChild(h);
        f.appendChild(g);
        d(f, g);
      } else {
        for (var i = 0; i < c.length; i++) {
          g = e.createElement(ib);
          g.language = jb;
          g.text = c[i];
          f.appendChild(g);
          d(f, g);
        }
      }
    }
    html.onScriptDownloaded = function (a) {
      l(function () {
        m(a);
      });
    };
    r(kb, lb);
    var n = document.createElement(ib);
    n.src = k;
    if (html.__errFn) {
      n.onerror = function () {
        html.__errFn("html", new Error(mb + code));
      };
    }
    document.getElementsByTagName(nb)[0].appendChild(n);
  }
  html.__startLoadingFragment = function (a) {
    return D(a);
  };
  html.__installRunAsyncCode = function (a) {
    var b = v();
    var c = b.body;
    var d = b.createElement(ib);
    d.language = jb;
    d.text = a;
    c.appendChild(d);
    c.removeChild(d);
  };
  function B() {
    var c = {};
    var d;
    var e;
    var f = document.getElementsByTagName(ob);
    for (var g = 0, h = f.length; g < h; ++g) {
      var i = f[g],
        j = i.getAttribute(pb),
        k;
      if (j) {
        j = j.replace(qb, "");
        if (j.indexOf(rb) >= 0) {
          continue;
        }
        if (j == sb) {
          k = i.getAttribute(tb);
          if (k) {
            var l,
              m = k.indexOf(ub);
            if (m >= 0) {
              j = k.substring(0, m);
              l = k.substring(m + 1);
            } else {
              j = k;
              l = "";
            }
            c[j] = l;
          }
        } else if (j == vb) {
          k = i.getAttribute(tb);
          if (k) {
            try {
              d = eval(k);
            } catch (a) {
              alert(wb + k + xb);
            }
          }
        } else if (j == yb) {
          k = i.getAttribute(tb);
          if (k) {
            try {
              e = eval(k);
            } catch (a) {
              alert(wb + k + zb);
            }
          }
        }
      }
    }
    window.__gwt_getMetaProperty = function (a) {
      var b = c[a];
      return b == null ? null : b;
    };
    s = d;
    html.__errFn = e;
  }
  function C() {
    function e(a) {
      var b = a.lastIndexOf("#");
      if (b == -1) {
        b = a.length;
      }
      var c = a.indexOf("?");
      if (c == -1) {
        c = a.length;
      }
      var d = a.lastIndexOf(Cb, Math.min(c, b));
      return d >= 0 ? a.substring(0, d + 1) : "";
    }
    function f(a) {
      if (a.match(/^\w+:\/\//)) {
      } else {
        var b = document.createElement(Db);
        b.src = a + "clear.cache.gif";
        a = e(b.src);
      }
      return a;
    }
    function g() {
      var a = __gwt_getMetaProperty(Fb);
      if (a != null) {
        return a;
      }
      return "";
    }
    function h() {
      var a = document.getElementsByTagName(ib);
      for (var b = 0; b < a.length; ++b) {
        if (a[b].src.indexOf(Gb) != -1) {
          return e(a[b].src);
        }
      }
      return "";
    }
    function i() {
      var a = document.getElementsByTagName(Hb);
      if (a.length > 0) {
        return a[a.length - 1].href;
      }
      return "";
    }
    function j() {
      var a = document.location;
      return (
        a.href == a.protocol + Ib + a.host + a.pathname + a.search + a.hash
      );
    }
    var k = g();
    if (k == "") {
      k = h();
    }
    if (k == "") {
      k = i();
    }
    if (k == "" && j()) {
      k = e(document.location.href);
    }
    k = f(k);
    return k;
  }
  function D(a) {
    if (a.match(/^\//)) {
      return a;
    }
    if (a.match(/^[a-zA-Z]+:\/\//)) {
      return a;
    }
    return html.__moduleBase + a;
  }
  function F() {
    var f = [];
    var g = 0;
    function h(a, b) {
      var c = f;
      for (var d = 0, e = a.length - 1; d < e; ++d) {
        c = c[a[d]] || (c[a[d]] = []);
      }
      c[a[e]] = b;
    }
    var i = [];
    var j = [];
    function k(a) {
      var b = j[a](),
        c = i[a];
      if (b in c) {
        return b;
      }
      var d = [];
      for (var e in c) {
        d[c[e]] = e;
      }
      if (s) {
        s(a, d, b);
      }
      throw null;
    }
    j["user.agent"] = function () {
      return "gecko1_8"; // force gecko
      var a = navigator.userAgent.toLowerCase();
      var b = document.documentMode;
      if (a.indexOf("webkit") != -1) return "safari";
      if (
        (function () {
          return a.indexOf("gecko") != -1 || b >= 11;
        })()
      )
        return "gecko1_8";
      return "";
    };
    i["user.agent"] = { gecko1_8: 0, safari: 4 };
    window.__gwt_isKnownPropertyValue = function (a, b) {
      return b in i[a];
    };
    html.__getPropMap = function () {
      var a = {};
      for (var b in i) {
        if (i.hasOwnProperty(b)) {
          a[b] = k(b);
        }
      }
      return a;
    };
    html.__computePropValue = k;
    window.__gwt_activeModules["html"].bindings = html.__getPropMap;
    r("boostrap", Yb);
    var l;
    try {
      h(["gecko1_8"], "gecko");
      h(["safari"], "safari");
      l = f[k("user.agent")];
      var m = l.indexOf(dc);
      if (m != -1) {
        g = parseInt(l.substring(m + 1), eb);
        l = l.substring(0, m);
      }
    } catch (a) {
      console.log(a);
    }
    html.__softPermutationId = g;
    return D("html/" + l + ".cache.js");
  }
  function G() {
    if (!window.__gwt_stylesLoaded) {
      window.__gwt_stylesLoaded = {};
    }
    function c(a) {
      if (!__gwt_stylesLoaded[a]) {
        var b = document.createElement(fc);
        b.setAttribute(gc, hc);
        b.setAttribute(ic, D(a));
        document.getElementsByTagName(nb)[0].appendChild(b);
        __gwt_stylesLoaded[a] = true;
      }
    }
    r(jc, "begin");
    c("/html/gwt/chrome/chrome.css");
    r(jc, lc);
  }
  B();
  html.__moduleBase = C();
  t["html"].moduleBase = html.__moduleBase;
  var H = F();
  if (window) {
    var I = !!(
      window.location.protocol == mc || window.location.protocol == nc
    );
    window.__gwt_activeModules["html"].canRedirect = I;
    function J() {
      var b = oc;
      try {
        window.sessionStorage.setItem(b, b);
        window.sessionStorage.removeItem(b);
        return true;
      } catch (a) {
        return false;
      }
    }
    if (I && J()) {
      var K = pc;
      var L = window.sessionStorage[K];
      if (!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(L)) {
        if (L && window.console && console.log) {
          console.log("Ignoring non-whitelisted Dev Mode URL: " + L);
        }
        L = "";
      }
      if (L && !window[K]) {
        window[K] = true;
        window[K + rc] = C();
        var M = document.createElement(ib);
        M.src = L;
        var N = document.getElementsByTagName(nb)[0];
        N.insertBefore(M, N.firstElementChild || N.children[0]);
        return false;
      }
    }
  }
  G();
  r("bootstrap", lc);
  A(H);
  return true;
}
html.succeeded = html();
window.html = html;
