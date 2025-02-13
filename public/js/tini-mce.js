/*!
 * TinyMCE
 *
 * Copyright (c) 2022 Ephox Corporation DBA Tiny Technologies, Inc.
 * Licensed under the Tiny commercial license. See https://www.tiny.cloud/legal/
 *
 * Version: 5.10.6
 */
!(function () {
  "use strict";
  function r(e) {
    if (null === e) return "null";
    if (void 0 === e) return "undefined";
    var t = typeof e;
    return "object" == t &&
      (Array.prototype.isPrototypeOf(e) ||
        (e.constructor && "Array" === e.constructor.name))
      ? "array"
      : "object" == t &&
        (String.prototype.isPrototypeOf(e) ||
          (e.constructor && "String" === e.constructor.name))
      ? "string"
      : t;
  }
  function f(o) {
    return m(function (e, t) {
      if (e.length !== t.length) return !1;
      for (var n = e.length, r = 0; r < n; r++)
        if (!o.eq(e[r], t[r])) return !1;
      return !0;
    });
  }
  function d(l) {
    return m(function (e, t) {
      var n,
        r,
        o,
        i = Object.keys(e),
        a = Object.keys(t);
      if (
        ((r = f(g)),
        (o = function (e) {
          return (t = n), Array.prototype.slice.call(e).sort(t);
          var t;
        }),
        !m(function (e, t) {
          return r.eq(o(e), o(t));
        }).eq(i, a))
      )
        return !1;
      for (var u = i.length, s = 0; s < u; s++) {
        var c = i[s];
        if (!l.eq(e[c], t[c])) return !1;
      }
      return !0;
    });
  }
  function e(r) {
    return function (e) {
      return (
        (n = typeof (t = e)),
        (null === t
          ? "null"
          : "object" == n &&
            (Array.prototype.isPrototypeOf(t) ||
              (t.constructor && "Array" === t.constructor.name))
          ? "array"
          : "object" == n &&
            (String.prototype.isPrototypeOf(t) ||
              (t.constructor && "String" === t.constructor.name))
          ? "string"
          : n) === r
      );
      var t, n;
    };
  }
  function t(t) {
    return function (e) {
      return typeof e === t;
    };
  }
  function n(t) {
    return function (e) {
      return t === e;
    };
  }
  function K(e) {
    return null == e;
  }
  function V(e) {
    return !K(e);
  }
  function te() {}
  function i(n, r) {
    return function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return n(r.apply(null, e));
    };
  }
  function a(t, n) {
    return function (e) {
      return t(n(e));
    };
  }
  function J(e) {
    return function () {
      return e;
    };
  }
  function u(e) {
    return e;
  }
  function o(e, t) {
    return e === t;
  }
  var m = function (e) {
      return { eq: e };
    },
    g = m(function (e, t) {
      return e === t;
    }),
    p = m(function (e, t) {
      if (e === t) return !0;
      var n = r(e);
      return (
        n === r(t) &&
        (-1 !==
        [
          "undefined",
          "boolean",
          "number",
          "string",
          "function",
          "xml",
          "null",
        ].indexOf(n)
          ? e === t
          : "array" === n
          ? f(p).eq(e, t)
          : "object" === n && d(p).eq(e, t))
      );
    }),
    X = e("string"),
    h = e("object"),
    S = e("array"),
    l = n(null),
    v = t("boolean"),
    b = n(void 0),
    y = t("function"),
    E = t("number");
  function R(r) {
    for (var o = [], e = 1; e < arguments.length; e++) o[e - 1] = arguments[e];
    return function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      var n = o.concat(e);
      return r.apply(null, n);
    };
  }
  function s(t) {
    return function (e) {
      return !t(e);
    };
  }
  function C(e) {
    return e();
  }
  function x(e) {
    e();
  }
  function c() {
    return k;
  }
  var D = J(!1),
    w = J(!0),
    k = {
      fold: function (e, t) {
        return e();
      },
      isSome: D,
      isNone: w,
      getOr: u,
      getOrThunk: N,
      getOrDie: function (e) {
        throw new Error(e || "error: getOrDie called on none.");
      },
      getOrNull: J(null),
      getOrUndefined: J(void 0),
      or: u,
      orThunk: N,
      map: c,
      each: te,
      bind: c,
      exists: D,
      forall: w,
      filter: function () {
        return k;
      },
      toArray: function () {
        return [];
      },
      toString: J("none()"),
    };
  function N(e) {
    return e();
  }
  function _(e, t) {
    return ye.call(e, t);
  }
  function T(e, t) {
    return -1 < _(e, t);
  }
  function F(e, t) {
    for (var n = 0, r = e.length; n < r; n++) if (t(e[n], n)) return !0;
    return !1;
  }
  function A(e, t) {
    for (var n = e.length, r = new Array(n), o = 0; o < n; o++) {
      var i = e[o];
      r[o] = t(i, o);
    }
    return r;
  }
  function Y(e, t) {
    for (var n = 0, r = e.length; n < r; n++) t(e[n], n);
  }
  function O(e, t) {
    for (var n = e.length - 1; 0 <= n; n--) t(e[n], n);
  }
  function B(e, t) {
    for (var n = [], r = [], o = 0, i = e.length; o < i; o++) {
      var a = e[o];
      (t(a, o) ? n : r).push(a);
    }
    return { pass: n, fail: r };
  }
  function U(e, t) {
    for (var n = [], r = 0, o = e.length; r < o; r++) {
      var i = e[r];
      t(i, r) && n.push(i);
    }
    return n;
  }
  function P(e, n, r) {
    return (
      O(e, function (e, t) {
        r = n(r, e, t);
      }),
      r
    );
  }
  function L(e, n, r) {
    return (
      Y(e, function (e, t) {
        r = n(r, e, t);
      }),
      r
    );
  }
  function I(e, t, n) {
    for (var r = 0, o = e.length; r < o; r++) {
      var i = e[r];
      if (t(i, r)) return ve.some(i);
      if (n(i, r)) break;
    }
    return ve.none();
  }
  function M(e, t) {
    return I(e, t, D);
  }
  function z(e, t) {
    for (var n = 0, r = e.length; n < r; n++) if (t(e[n], n)) return ve.some(n);
    return ve.none();
  }
  function H(e, t) {
    return (function (e) {
      for (var t = [], n = 0, r = e.length; n < r; ++n) {
        if (!S(e[n]))
          throw new Error(
            "Arr.flatten item " + n + " was not an array, input: " + e
          );
        Ce.apply(t, e[n]);
      }
      return t;
    })(A(e, t));
  }
  function j(e, t) {
    for (var n = 0, r = e.length; n < r; ++n) if (!0 !== t(e[n], n)) return !1;
    return !0;
  }
  function q(e) {
    var t = be.call(e, 0);
    return t.reverse(), t;
  }
  function $(e, t) {
    return U(e, function (e) {
      return !T(t, e);
    });
  }
  function W(e, t) {
    var n = be.call(e, 0);
    return n.sort(t), n;
  }
  function G(e, t) {
    return 0 <= t && t < e.length ? ve.some(e[t]) : ve.none();
  }
  function Q(e) {
    return G(e, 0);
  }
  function Z(e) {
    return G(e, e.length - 1);
  }
  function ee(e, t) {
    for (var n = 0; n < e.length; n++) {
      var r = t(e[n], n);
      if (r.isSome()) return r;
    }
    return ve.none();
  }
  function ne(e, t) {
    for (var n = we(e), r = 0, o = n.length; r < o; r++) {
      var i = n[r];
      t(e[i], i);
    }
  }
  function re(e, n) {
    return Ee(e, function (e, t) {
      return { k: t, v: n(e, t) };
    });
  }
  function oe(n) {
    return function (e, t) {
      n[t] = e;
    };
  }
  function ie(e, n, r, o) {
    return (
      ne(e, function (e, t) {
        (n(e, t) ? r : o)(e, t);
      }),
      1
    );
  }
  function ae(e, t) {
    var n = {};
    return ie(e, t, oe(n), te), n;
  }
  function ue(e, t) {
    return ke(e, t) ? ve.from(e[t]) : ve.none();
  }
  function se(e, t) {
    return ke(e, t) && void 0 !== e[t] && null !== e[t];
  }
  function ce(e, t, n) {
    var r, o;
    if (!e) return !1;
    if (((n = n || e), void 0 !== e.length)) {
      for (r = 0, o = e.length; r < o; r++)
        if (!1 === t.call(n, e[r], r, e)) return !1;
    } else for (r in e) if (ke(e, r) && !1 === t.call(n, e[r], r, e)) return !1;
    return !0;
  }
  function le(n, r) {
    var o = [];
    return (
      ce(n, function (e, t) {
        o.push(r(e, t, n));
      }),
      o
    );
  }
  function fe(n, r) {
    var o = [];
    return (
      ce(n, function (e, t) {
        (r && !r(e, t, n)) || o.push(e);
      }),
      o
    );
  }
  function de(e, t) {
    if (e) for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
    return -1;
  }
  function me(e, t, n, r) {
    for (var o = b(n) ? e[0] : n, i = 0; i < e.length; i++)
      o = t.call(r, o, e[i], i);
    return o;
  }
  function ge(e, t, n) {
    for (var r = 0, o = e.length; r < o; r++)
      if (t.call(n, e[r], r, e)) return r;
    return -1;
  }
  function pe(e) {
    return e[e.length - 1];
  }
  var he = function (n) {
      function e() {
        return o;
      }
      function t(e) {
        return e(n);
      }
      var r = J(n),
        o = {
          fold: function (e, t) {
            return t(n);
          },
          isSome: w,
          isNone: D,
          getOr: r,
          getOrThunk: r,
          getOrDie: r,
          getOrNull: r,
          getOrUndefined: r,
          or: e,
          orThunk: e,
          map: function (e) {
            return he(e(n));
          },
          each: function (e) {
            e(n);
          },
          bind: t,
          exists: t,
          forall: t,
          filter: function (e) {
            return e(n) ? o : k;
          },
          toArray: function () {
            return [n];
          },
          toString: function () {
            return "some(" + n + ")";
          },
        };
      return o;
    },
    ve = {
      some: he,
      none: c,
      from: function (e) {
        return null == e ? k : he(e);
      },
    },
    be = Array.prototype.slice,
    ye = Array.prototype.indexOf,
    Ce = Array.prototype.push,
    xe = y(Array.from)
      ? Array.from
      : function (e) {
          return be.call(e);
        },
    we = Object.keys,
    Se = Object.hasOwnProperty,
    Ee = function (e, r) {
      var o = {};
      return (
        ne(e, function (e, t) {
          var n = r(e, t);
          o[n.k] = n.v;
        }),
        o
      );
    },
    ke = function (e, t) {
      return Se.call(e, t);
    },
    Ne = Array.isArray,
    _e = function () {
      return (_e =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in (t = arguments[n]))
              Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e;
        }).apply(this, arguments);
    };
  function Ae(e, t, n) {
    if (n || 2 === arguments.length)
      for (var r, o = 0, i = t.length; o < i; o++)
        (!r && o in t) ||
          ((r = r || Array.prototype.slice.call(t, 0, o))[o] = t[o]);
    return e.concat(r || Array.prototype.slice.call(t));
  }
  function Re(n) {
    var r,
      o = !1;
    return function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return o || ((o = !0), (r = n.apply(null, e))), r;
    };
  }
  function De(e, t) {
    var n = String(t).toLowerCase();
    return M(e, function (e) {
      return e.search(n);
    });
  }
  function Te(e, t) {
    return -1 !== e.indexOf(t);
  }
  function Oe(t) {
    return function (e) {
      return e.replace(t, "");
    };
  }
  function Be(e) {
    return 0 < e.length;
  }
  function Pe(e) {
    return !Be(e);
  }
  function Le(t) {
    return function (e) {
      return Te(e, t);
    };
  }
  function Ie(e) {
    return window.matchMedia(e).matches;
  }
  function Me(e) {
    return null == e ? "" : ("" + e).replace(wt, "");
  }
  function Fe(e, t) {
    return t ? !("array" !== t || !Ne(e)) || typeof e === t : void 0 !== e;
  }
  function Ue(e, t) {
    for (
      var n = [],
        r = function (e) {
          return n.push(e), t(e);
        },
        o = t(e);
      (o = o.bind(r)).isSome();

    );
    return n;
  }
  function ze(e, t) {
    var n = e.dom;
    if (1 !== n.nodeType) return !1;
    var r = n;
    if (void 0 !== r.matches) return r.matches(t);
    if (void 0 !== r.msMatchesSelector) return r.msMatchesSelector(t);
    if (void 0 !== r.webkitMatchesSelector) return r.webkitMatchesSelector(t);
    if (void 0 !== r.mozMatchesSelector) return r.mozMatchesSelector(t);
    throw new Error("Browser lacks native selectors");
  }
  function He(e) {
    return (
      (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType) ||
      0 === e.childElementCount
    );
  }
  function je(e, t) {
    return e.dom === t.dom;
  }
  function Ve(e, t) {
    return dt().browser.isIE()
      ? ((n = e.dom),
        (r = t.dom),
        (o = Node.DOCUMENT_POSITION_CONTAINED_BY),
        0 != (n.compareDocumentPosition(r) & o))
      : (i = e.dom) !== (a = t.dom) && i.contains(a);
    var n, r, o, i, a;
  }
  function qe() {
    return Xe(0, 0);
  }
  function $e(e) {
    function t(e) {
      return function () {
        return n === e;
      };
    }
    var n = e.current,
      r = e.version;
    return {
      current: n,
      version: r,
      isEdge: t("Edge"),
      isChrome: t("Chrome"),
      isIE: t("IE"),
      isOpera: t("Opera"),
      isFirefox: t(nt),
      isSafari: t("Safari"),
    };
  }
  function We(e) {
    function t(e) {
      return function () {
        return n === e;
      };
    }
    var n = e.current,
      r = e.version;
    return {
      current: n,
      version: r,
      isWindows: t(it),
      isiOS: t("iOS"),
      isAndroid: t(at),
      isOSX: t("OSX"),
      isLinux: t("Linux"),
      isSolaris: t(ut),
      isFreeBSD: t(st),
      isChromeOS: t(ct),
    };
  }
  function Ke(e) {
    if (null == e) throw new Error("Node cannot be null or undefined");
    return { dom: e };
  }
  var Xe = function (e, t) {
      return { major: e, minor: t };
    },
    Ye = {
      nu: Xe,
      detect: function (e, t) {
        var n,
          r,
          o = String(t).toLowerCase();
        return 0 === e.length
          ? qe()
          : (r = (function (e, t) {
              for (var n = 0; n < e.length; n++) {
                var r = e[n];
                if (r.test(t)) return r;
              }
            })(e, (n = o)))
          ? Xe(i(1), i(2))
          : { major: 0, minor: 0 };
        function i(e) {
          return Number(n.replace(r, "$" + e));
        }
      },
      unknown: qe,
    },
    Ge = function (e, t) {
      return (
        "" === (n = t) ||
        (e.length >= n.length && e.substr(0, 0 + n.length) === n)
      );
      var n;
    },
    Je = Oe(/^\s+|\s+$/g),
    Qe = Oe(/^\s+/g),
    Ze = Oe(/\s+$/g),
    et = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
    tt = {
      browsers: J([
        {
          name: "Edge",
          versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
          search: function (e) {
            return (
              Te(e, "edge/") &&
              Te(e, "chrome") &&
              Te(e, "safari") &&
              Te(e, "applewebkit")
            );
          },
        },
        {
          name: "Chrome",
          brand: "Chromium",
          versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, et],
          search: function (e) {
            return Te(e, "chrome") && !Te(e, "chromeframe");
          },
        },
        {
          name: "IE",
          versionRegexes: [
            /.*?msie\ ?([0-9]+)\.([0-9]+).*/,
            /.*?rv:([0-9]+)\.([0-9]+).*/,
          ],
          search: function (e) {
            return Te(e, "msie") || Te(e, "trident");
          },
        },
        {
          name: "Opera",
          versionRegexes: [et, /.*?opera\/([0-9]+)\.([0-9]+).*/],
          search: Le("opera"),
        },
        {
          name: "Firefox",
          versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
          search: Le("firefox"),
        },
        {
          name: "Safari",
          versionRegexes: [et, /.*?cpu os ([0-9]+)_([0-9]+).*/],
          search: function (e) {
            return (
              (Te(e, "safari") || Te(e, "mobile/")) && Te(e, "applewebkit")
            );
          },
        },
      ]),
      oses: J([
        {
          name: "Windows",
          search: Le("win"),
          versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/],
        },
        {
          name: "iOS",
          search: function (e) {
            return Te(e, "iphone") || Te(e, "ipad");
          },
          versionRegexes: [
            /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
            /.*cpu os ([0-9]+)_([0-9]+).*/,
            /.*cpu iphone os ([0-9]+)_([0-9]+).*/,
          ],
        },
        {
          name: "Android",
          search: Le("android"),
          versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/],
        },
        {
          name: "OSX",
          search: Le("mac os x"),
          versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/],
        },
        { name: "Linux", search: Le("linux"), versionRegexes: [] },
        { name: "Solaris", search: Le("sunos"), versionRegexes: [] },
        { name: "FreeBSD", search: Le("freebsd"), versionRegexes: [] },
        {
          name: "ChromeOS",
          search: Le("cros"),
          versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/],
        },
      ]),
    },
    nt = "Firefox",
    rt = function () {
      return $e({ current: void 0, version: Ye.unknown() });
    },
    ot = $e,
    it =
      (J("Edge"),
      J("Chrome"),
      J("IE"),
      J("Opera"),
      J(nt),
      J("Safari"),
      "Windows"),
    at = "Android",
    ut = "Solaris",
    st = "FreeBSD",
    ct = "ChromeOS",
    lt = function () {
      return We({ current: void 0, version: Ye.unknown() });
    },
    ft = We,
    dt =
      (J(it),
      J("iOS"),
      J(at),
      J("Linux"),
      J("OSX"),
      J(ut),
      J(st),
      J(ct),
      Re(function () {
        return (
          (e = navigator.userAgent),
          (t = ve.from(navigator.userAgentData)),
          (n = Ie),
          (p = tt.browsers()),
          (h = tt.oses()),
          (v = t
            .bind(function (e) {
              return (
                (r = p),
                ee(e.brands, function (t) {
                  var n = t.brand.toLowerCase();
                  return M(r, function (e) {
                    var t;
                    return (
                      n ===
                      (null === (t = e.brand) || void 0 === t
                        ? void 0
                        : t.toLowerCase())
                    );
                  }).map(function (e) {
                    return {
                      current: e.name,
                      version: Ye.nu(parseInt(t.version, 10), 0),
                    };
                  });
                })
              );
              var r;
            })
            .orThunk(function () {
              return De(p, (n = e)).map(function (e) {
                var t = Ye.detect(e.versionRegexes, n);
                return { current: e.name, version: t };
              });
              var n;
            })
            .fold(rt, ot)),
          (b = De(h, (r = e))
            .map(function (e) {
              var t = Ye.detect(e.versionRegexes, r);
              return { current: e.name, version: t };
            })
            .fold(lt, ft)),
          {
            browser: v,
            os: b,
            deviceType:
              ((i = v),
              (a = e),
              (u = n),
              (s = (o = b).isiOS() && !0 === /ipad/i.test(a)),
              (c = o.isiOS() && !s),
              (f = (l = o.isiOS() || o.isAndroid()) || u("(pointer:coarse)")),
              (d = s || (!c && l && u("(min-device-width:768px)"))),
              (m = c || (l && !d)),
              (g = i.isSafari() && o.isiOS() && !1 === /safari/i.test(a)),
              {
                isiPad: J(s),
                isiPhone: J(c),
                isTablet: J(d),
                isPhone: J(m),
                isTouch: J(f),
                isAndroid: o.isAndroid,
                isiOS: o.isiOS,
                isWebView: J(g),
                isDesktop: J(!m && !d && !g),
              }),
          }
        );
        var e, t, n, r, o, i, a, u, s, c, l, f, d, m, g, p, h, v, b;
      })),
    mt = navigator.userAgent,
    gt = dt(),
    pt = gt.browser,
    ht = gt.os,
    vt = gt.deviceType,
    bt = /WebKit/.test(mt) && !pt.isEdge(),
    yt =
      "FormData" in window &&
      "FileReader" in window &&
      "URL" in window &&
      !!URL.createObjectURL,
    Ct = -1 !== mt.indexOf("Windows Phone"),
    xt = {
      opera: pt.isOpera(),
      webkit: bt,
      ie: !(!pt.isIE() && !pt.isEdge()) && pt.version.major,
      gecko: pt.isFirefox(),
      mac: ht.isOSX() || ht.isiOS(),
      iOS: vt.isiPad() || vt.isiPhone(),
      android: ht.isAndroid(),
      contentEditable: !0,
      transparentSrc:
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      caretAfter: !0,
      range: window.getSelection && "Range" in window,
      documentMode: pt.isIE() ? document.documentMode || 7 : 10,
      fileApi: yt,
      ceFalse: !0,
      cacheSuffix: null,
      container: null,
      experimentalShadowDom: !1,
      canHaveCSP: !pt.isIE(),
      desktop: vt.isDesktop(),
      windowsPhone: Ct,
      browser: {
        current: pt.current,
        version: pt.version,
        isChrome: pt.isChrome,
        isEdge: pt.isEdge,
        isFirefox: pt.isFirefox,
        isIE: pt.isIE,
        isOpera: pt.isOpera,
        isSafari: pt.isSafari,
      },
      os: {
        current: ht.current,
        version: ht.version,
        isAndroid: ht.isAndroid,
        isChromeOS: ht.isChromeOS,
        isFreeBSD: ht.isFreeBSD,
        isiOS: ht.isiOS,
        isLinux: ht.isLinux,
        isOSX: ht.isOSX,
        isSolaris: ht.isSolaris,
        isWindows: ht.isWindows,
      },
      deviceType: {
        isDesktop: vt.isDesktop,
        isiPad: vt.isiPad,
        isiPhone: vt.isiPhone,
        isPhone: vt.isPhone,
        isTablet: vt.isTablet,
        isTouch: vt.isTouch,
        isWebView: vt.isWebView,
      },
    },
    wt = /^\s*|\s*$/g,
    St = function (e, n, r, o) {
      (o = o || this),
        e &&
          ce((e = r ? e[r] : e), function (e, t) {
            return !1 !== n.call(o, e, t, r) && void St(e, n, r, o);
          });
    },
    Et = {
      trim: Me,
      isArray: Ne,
      is: Fe,
      toArray: function (e) {
        if (Ne(e)) return e;
        for (var t = [], n = 0, r = e.length; n < r; n++) t[n] = e[n];
        return t;
      },
      makeMap: function (e, t, n) {
        var r;
        for (
          t = t || ",",
            n = n || {},
            r = (e = "string" == typeof (e = e || []) ? e.split(t) : e).length;
          r--;

        )
          n[e[r]] = {};
        return n;
      },
      each: ce,
      map: le,
      grep: fe,
      inArray: de,
      hasOwn: ke,
      extend: function (e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        for (var r = 0; r < t.length; r++) {
          var o,
            i,
            a = t[r];
          for (o in a) !ke(a, o) || (void 0 !== (i = a[o]) && (e[o] = i));
        }
        return e;
      },
      create: function (e, t, n) {
        var r,
          o,
          i,
          a = this,
          u = 0,
          s = (e = /^((static) )?([\w.]+)(:([\w.]+))?/.exec(e))[3].match(
            /(^|\.)(\w+)$/i
          )[2],
          c = a.createNS(e[3].replace(/\.\w+$/, ""), n);
        if (!c[s]) {
          if ("static" === e[2])
            return (
              (c[s] = t),
              void (this.onCreate && this.onCreate(e[2], e[3], c[s]))
            );
          t[s] || ((t[s] = function () {}), (u = 1)),
            (c[s] = t[s]),
            a.extend(c[s].prototype, t),
            e[5] &&
              ((r = a.resolve(e[5]).prototype),
              (o = e[5].match(/\.(\w+)$/i)[1]),
              (i = c[s]),
              (c[s] = u
                ? function () {
                    return r[o].apply(this, arguments);
                  }
                : function () {
                    return (this.parent = r[o]), i.apply(this, arguments);
                  }),
              (c[s].prototype[s] = c[s]),
              a.each(r, function (e, t) {
                c[s].prototype[t] = r[t];
              }),
              a.each(t, function (e, t) {
                r[t]
                  ? (c[s].prototype[t] = function () {
                      return (this.parent = r[t]), e.apply(this, arguments);
                    })
                  : t !== s && (c[s].prototype[t] = e);
              })),
            a.each(t.static, function (e, t) {
              c[s][t] = e;
            });
        }
      },
      walk: St,
      createNS: function (e, t) {
        var n, r;
        for (t = t || window, e = e.split("."), n = 0; n < e.length; n++)
          t[(r = e[n])] || (t[r] = {}), (t = t[r]);
        return t;
      },
      resolve: function (e, t) {
        var n, r;
        for (
          t = t || window, n = 0, r = (e = e.split(".")).length;
          n < r && (t = t[e[n]]);
          n++
        );
        return t;
      },
      explode: function (e, t) {
        return !e || Fe(e, "array") ? e : le(e.split(t || ","), Me);
      },
      _addCacheSuffix: function (e) {
        var t = xt.cacheSuffix;
        return t && (e += (-1 === e.indexOf("?") ? "?" : "&") + t), e;
      },
    },
    kt = {
      fromHtml: function (e, t) {
        var n = (t || document).createElement("div");
        if (((n.innerHTML = e), !n.hasChildNodes() || 1 < n.childNodes.length))
          throw (
            (console.error("HTML does not have a single root node", e),
            new Error("HTML must have a single root node"))
          );
        return Ke(n.childNodes[0]);
      },
      fromTag: function (e, t) {
        var n = (t || document).createElement(e);
        return Ke(n);
      },
      fromText: function (e, t) {
        var n = (t || document).createTextNode(e);
        return Ke(n);
      },
      fromDom: Ke,
      fromPoint: function (e, t, n) {
        return ve.from(e.dom.elementFromPoint(t, n)).map(Ke);
      },
    };
  function Nt(e) {
    return e.dom.nodeName.toLowerCase();
  }
  function _t(e) {
    return e.dom.nodeType;
  }
  function At(t) {
    return function (e) {
      return _t(e) === t;
    };
  }
  function Rt(e) {
    return kt.fromDom(e.dom.ownerDocument);
  }
  function Dt(e) {
    return An(e) ? e : Rt(e);
  }
  function Tt(e) {
    return kt.fromDom(Dt(e).dom.defaultView);
  }
  function Ot(e) {
    return ve.from(e.dom.parentNode).map(kt.fromDom);
  }
  function Bt(e) {
    return ve.from(e.dom.previousSibling).map(kt.fromDom);
  }
  function Pt(e) {
    return ve.from(e.dom.nextSibling).map(kt.fromDom);
  }
  function Lt(e) {
    return q(Ue(e, Bt));
  }
  function It(e) {
    return Ue(e, Pt);
  }
  function Mt(e, t) {
    var n = e.dom.childNodes;
    return ve.from(n[t]).map(kt.fromDom);
  }
  function Ft(e) {
    return Mt(e, 0);
  }
  function Ut(e) {
    return Mt(e, e.dom.childNodes.length - 1);
  }
  function zt(e) {
    return e.dom.childNodes.length;
  }
  function Ht(e) {
    return Rn(e) && V(e.dom.host);
  }
  function jt(t) {
    return Ht(t)
      ? t
      : (function () {
          var e = Dt(t).dom.head;
          if (null == e) throw new Error("Head is not available yet");
          return kt.fromDom(e);
        })();
  }
  function Vt(e) {
    return kt.fromDom(e.dom.host);
  }
  function qt(t, n) {
    Ot(t).each(function (e) {
      e.dom.insertBefore(n.dom, t.dom);
    });
  }
  function $t(e, t) {
    Pt(e).fold(
      function () {
        Ot(e).each(function (e) {
          Pn(e, t);
        });
      },
      function (e) {
        qt(e, t);
      }
    );
  }
  function Wt(t, n) {
    Ft(t).fold(
      function () {
        Pn(t, n);
      },
      function (e) {
        t.dom.insertBefore(n.dom, e.dom);
      }
    );
  }
  function Kt(t, e) {
    Y(e, function (e) {
      Pn(t, e);
    });
  }
  function Xt(e) {
    (e.dom.textContent = ""),
      Y(Dn(e), function (e) {
        Ln(e);
      });
  }
  function Yt(e) {
    var t,
      n = Dn(e);
    0 < n.length &&
      ((t = e),
      Y(n, function (e) {
        qt(t, e);
      })),
      Ln(e);
  }
  function Gt(e, t) {
    return void 0 !== e ? e : void 0 !== t ? t : 0;
  }
  function Jt(e) {
    var t = void 0 !== e ? e.dom : document,
      n = t.body.scrollLeft || t.documentElement.scrollLeft,
      r = t.body.scrollTop || t.documentElement.scrollTop;
    return Fn(n, r);
  }
  function Qt(e, t, n) {
    var r = (void 0 !== n ? n.dom : document).defaultView;
    r && r.scrollTo(e, t);
  }
  function Zt(e, t) {
    dt().browser.isSafari() && y(e.dom.scrollIntoViewIfNeeded)
      ? e.dom.scrollIntoViewIfNeeded(!1)
      : e.dom.scrollIntoView(t);
  }
  function en(e, t, n, r) {
    return { x: e, y: t, width: n, height: r, right: e + n, bottom: t + r };
  }
  function tn(e) {
    var r = void 0 === e ? window : e,
      t = r.document,
      o = Jt(kt.fromDom(t)),
      n = void 0 === r ? window : r;
    return (
      dt().browser.isFirefox() ? ve.none() : ve.from(n.visualViewport)
    ).fold(
      function () {
        var e = r.document.documentElement,
          t = e.clientWidth,
          n = e.clientHeight;
        return en(o.left, o.top, t, n);
      },
      function (e) {
        return en(
          Math.max(e.pageLeft, o.left),
          Math.max(e.pageTop, o.top),
          e.width,
          e.height
        );
      }
    );
  }
  function nn(t) {
    return function (e) {
      return !!e && e.nodeType === t;
    };
  }
  function rn(e) {
    return e && !Object.getPrototypeOf(e);
  }
  function on(e) {
    var n = e.map(function (e) {
      return e.toLowerCase();
    });
    return function (e) {
      if (e && e.nodeName) {
        var t = e.nodeName.toLowerCase();
        return T(n, t);
      }
      return !1;
    };
  }
  function an(r, e) {
    var o = e.toLowerCase().split(" ");
    return function (e) {
      if (zn(e))
        for (var t = 0; t < o.length; t++) {
          var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
          if ((n ? n.getPropertyValue(r) : null) === o[t]) return !0;
        }
      return !1;
    };
  }
  function un(t) {
    return function (e) {
      return zn(e) && e.hasAttribute(t);
    };
  }
  function sn(e) {
    return zn(e) && e.hasAttribute("data-mce-bogus");
  }
  function cn(e) {
    return zn(e) && "TABLE" === e.tagName;
  }
  function ln(t) {
    return function (e) {
      if (zn(e)) {
        if (e.contentEditable === t) return !0;
        if (e.getAttribute("data-mce-contenteditable") === t) return !0;
      }
      return !1;
    };
  }
  function fn(e, t, n) {
    return (
      void 0 === n && (n = o),
      e.exists(function (e) {
        return n(e, t);
      })
    );
  }
  function dn(e, t, n) {
    return e.isSome() && t.isSome()
      ? ve.some(n(e.getOrDie(), t.getOrDie()))
      : ve.none();
  }
  function mn(e) {
    return void 0 !== e.style && y(e.style.getPropertyValue);
  }
  function gn(e, t, n) {
    if (!(X(n) || v(n) || E(n)))
      throw (
        (console.error(
          "Invalid call to Attribute.set. Key ",
          t,
          ":: Value ",
          n,
          ":: Element ",
          e
        ),
        new Error("Attribute value was not simple"))
      );
    e.setAttribute(t, n + "");
  }
  function pn(e, t, n) {
    gn(e.dom, t, n);
  }
  function hn(e, t) {
    var n = e.dom;
    ne(t, function (e, t) {
      gn(n, t, e);
    });
  }
  function vn(e, t) {
    var n = e.dom.getAttribute(t);
    return null === n ? void 0 : n;
  }
  function bn(e, t) {
    return ve.from(vn(e, t));
  }
  function yn(e, t) {
    e.dom.removeAttribute(t);
  }
  function Cn(e, t) {
    var n = e.dom;
    ne(t, function (e, t) {
      !(function (e, t, n) {
        if (!X(n))
          throw (
            (console.error(
              "Invalid call to CSS.set. Property ",
              t,
              ":: Value ",
              n,
              ":: Element ",
              e
            ),
            new Error("CSS value must be a string: " + n))
          );
        mn(e) && e.style.setProperty(t, n);
      })(n, t, e);
    });
  }
  function xn(e, t) {
    var n = e.dom,
      r = window.getComputedStyle(n).getPropertyValue(t);
    return "" !== r || In(e) ? r : Qn(n, t);
  }
  function wn(e, t) {
    var n = e.dom,
      r = Qn(n, t);
    return ve.from(r).filter(function (e) {
      return 0 < e.length;
    });
  }
  function Sn(e) {
    var t = {},
      n = e.dom;
    if (mn(n))
      for (var r = 0; r < n.style.length; r++) {
        var o = n.style.item(r);
        t[o] = n.style[o];
      }
    return t;
  }
  function En(e) {
    return M(e, Nn);
  }
  function kn(e, t) {
    return e.children && T(e.children, t);
  }
  "undefined" != typeof window || Function("return this;")();
  var Nn = At(1),
    _n = At(3),
    An = At(9),
    Rn = At(11),
    Dn = function (e) {
      return A(e.dom.childNodes, kt.fromDom);
    },
    Tn = y(Element.prototype.attachShadow) && y(Node.prototype.getRootNode),
    On = J(Tn),
    Bn = Tn
      ? function (e) {
          return kt.fromDom(e.dom.getRootNode());
        }
      : Dt,
    Pn = function (e, t) {
      e.dom.appendChild(t.dom);
    },
    Ln = function (e) {
      var t = e.dom;
      null !== t.parentNode && t.parentNode.removeChild(t);
    },
    In = function (e) {
      var t = _n(e) ? e.dom.parentNode : e.dom;
      if (null == t || null === t.ownerDocument) return !1;
      var n = t.ownerDocument,
        r = kt.fromDom(t),
        o = Bn(r);
      return (Ht(o) ? ve.some(o) : ve.none()).fold(function () {
        return n.body.contains(t);
      }, a(In, Vt));
    },
    Mn = function (n, r) {
      return {
        left: n,
        top: r,
        translate: function (e, t) {
          return Mn(n + e, r + t);
        },
      };
    },
    Fn = Mn,
    Un = function (e) {
      var t,
        n = e.dom,
        r = n.ownerDocument.body;
      return r === n
        ? Fn(r.offsetLeft, r.offsetTop)
        : In(e)
        ? ((t = n.getBoundingClientRect()), Fn(t.left, t.top))
        : Fn(0, 0);
    },
    zn = nn(1),
    Hn = on(["textarea", "input"]),
    jn = nn(3),
    Vn = nn(8),
    qn = nn(9),
    $n = nn(11),
    Wn = on(["br"]),
    Kn = on(["img"]),
    Xn = ln("true"),
    Yn = ln("false"),
    Gn = on(["td", "th"]),
    Jn = on(["video", "audio", "object", "embed"]),
    Qn = function (e, t) {
      return mn(e) ? e.style.getPropertyValue(t) : "";
    },
    Zn = dt().browser,
    er = {},
    tr = { exports: er };
  function nr(e) {
    setTimeout(function () {
      throw e;
    }, 0);
  }
  !(function () {
    var e = this,
      t = function () {
        var e,
          t,
          n,
          r = { exports: {} };
        function o() {}
        function i(e) {
          if ("object" != typeof this)
            throw new TypeError("Promises must be constructed via new");
          if ("function" != typeof e) throw new TypeError("not a function");
          (this._state = 0),
            (this._handled = !1),
            (this._value = void 0),
            (this._deferreds = []),
            f(e, this);
        }
        function a(n, r) {
          for (; 3 === n._state; ) n = n._value;
          0 !== n._state
            ? ((n._handled = !0),
              i._immediateFn(function () {
                var e,
                  t = 1 === n._state ? r.onFulfilled : r.onRejected;
                if (null !== t) {
                  try {
                    e = t(n._value);
                  } catch (e) {
                    return void s(r.promise, e);
                  }
                  u(r.promise, e);
                } else (1 === n._state ? u : s)(r.promise, n._value);
              }))
            : n._deferreds.push(r);
        }
        function u(t, e) {
          try {
            if (e === t)
              throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
              var n = e.then;
              if (e instanceof i)
                return (t._state = 3), (t._value = e), void c(t);
              if ("function" == typeof n)
                return void f(
                  ((r = n),
                  (o = e),
                  function () {
                    r.apply(o, arguments);
                  }),
                  t
                );
            }
            (t._state = 1), (t._value = e), c(t);
          } catch (e) {
            s(t, e);
          }
          var r, o;
        }
        function s(e, t) {
          (e._state = 2), (e._value = t), c(e);
        }
        function c(e) {
          2 === e._state &&
            0 === e._deferreds.length &&
            i._immediateFn(function () {
              e._handled || i._unhandledRejectionFn(e._value);
            });
          for (var t = 0, n = e._deferreds.length; t < n; t++)
            a(e, e._deferreds[t]);
          e._deferreds = null;
        }
        function l(e, t, n) {
          (this.onFulfilled = "function" == typeof e ? e : null),
            (this.onRejected = "function" == typeof t ? t : null),
            (this.promise = n);
        }
        function f(e, t) {
          var n = !1;
          try {
            e(
              function (e) {
                n || ((n = !0), u(t, e));
              },
              function (e) {
                n || ((n = !0), s(t, e));
              }
            );
          } catch (e) {
            if (n) return;
            (n = !0), s(t, e);
          }
        }
        (e = r),
          (t =
            "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof window
              ? window
              : "undefined" != typeof global
              ? global
              : "undefined" != typeof self
              ? self
              : {}),
          (n = setTimeout),
          (i.prototype.catch = function (e) {
            return this.then(null, e);
          }),
          (i.prototype.then = function (e, t) {
            var n = new this.constructor(o);
            return a(this, new l(e, t, n)), n;
          }),
          (i.all = function (e) {
            var u = Array.prototype.slice.call(e);
            return new i(function (o, i) {
              if (0 === u.length) return o([]);
              for (var a = u.length, e = 0; e < u.length; e++)
                !(function t(n, e) {
                  try {
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                      var r = e.then;
                      if ("function" == typeof r)
                        return (
                          r.call(
                            e,
                            function (e) {
                              t(n, e);
                            },
                            i
                          ),
                          0
                        );
                    }
                    (u[n] = e), 0 == --a && o(u);
                  } catch (e) {
                    i(e);
                  }
                })(e, u[e]);
            });
          }),
          (i.resolve = function (t) {
            return t && "object" == typeof t && t.constructor === i
              ? t
              : new i(function (e) {
                  e(t);
                });
          }),
          (i.reject = function (n) {
            return new i(function (e, t) {
              t(n);
            });
          }),
          (i.race = function (o) {
            return new i(function (e, t) {
              for (var n = 0, r = o.length; n < r; n++) o[n].then(e, t);
            });
          }),
          (i._immediateFn =
            "function" == typeof setImmediate
              ? function (e) {
                  setImmediate(e);
                }
              : function (e) {
                  n(e, 0);
                }),
          (i._unhandledRejectionFn = function (e) {
            "undefined" != typeof console &&
              console &&
              console.warn("Possible Unhandled Promise Rejection:", e);
          }),
          (i._setImmediateFn = function (e) {
            i._immediateFn = e;
          }),
          (i._setUnhandledRejectionFn = function (e) {
            i._unhandledRejectionFn = e;
          }),
          e.exports ? (e.exports = i) : t.Promise || (t.Promise = i);
        var d = r.exports;
        return {
          boltExport:
            ("undefined" != typeof window ? window : Function("return this;")())
              .Promise || d,
        };
      };
    "object" == typeof er && void 0 !== tr
      ? (tr.exports = t())
      : ((e =
          "undefined" != typeof globalThis
            ? globalThis
            : e || self).EphoxContactWrapper = t());
  })();
  function rr(e) {
    return sr(function () {
      return new ir(e);
    });
  }
  function or(a) {
    if (!S(a)) throw new Error("cases must be an array");
    if (0 === a.length) throw new Error("there must be at least one case");
    var u = [],
      n = {};
    return (
      Y(a, function (e, r) {
        var t = we(e);
        if (1 !== t.length) throw new Error("one and only one name per case");
        var o = t[0],
          i = e[o];
        if (void 0 !== n[o]) throw new Error("duplicate key detected:" + o);
        if ("cata" === o)
          throw new Error("cannot have a case named cata (sorry)");
        if (!S(i)) throw new Error("case arguments must be an array");
        u.push(o),
          (n[o] = function () {
            for (var n = [], e = 0; e < arguments.length; e++)
              n[e] = arguments[e];
            var t = n.length;
            if (t !== i.length)
              throw new Error(
                "Wrong number of arguments to case " +
                  o +
                  ". Expected " +
                  i.length +
                  " (" +
                  i +
                  "), got " +
                  t
              );
            return {
              fold: function () {
                for (var e = [], t = 0; t < arguments.length; t++)
                  e[t] = arguments[t];
                if (e.length !== a.length)
                  throw new Error(
                    "Wrong number of arguments to fold. Expected " +
                      a.length +
                      ", got " +
                      e.length
                  );
                return e[r].apply(null, n);
              },
              match: function (e) {
                var t = we(e);
                if (u.length !== t.length)
                  throw new Error(
                    "Wrong number of arguments to match. Expected: " +
                      u.join(",") +
                      "\nActual: " +
                      t.join(",")
                  );
                if (
                  !j(u, function (e) {
                    return T(t, e);
                  })
                )
                  throw new Error(
                    "Not all branches were specified when using match. Specified: " +
                      t.join(", ") +
                      "\nRequired: " +
                      u.join(", ")
                  );
                return e[o].apply(null, n);
              },
              log: function (e) {
                console.log(e, { constructors: u, constructor: o, params: n });
              },
            };
          });
      }),
      n
    );
  }
  var ir = tr.exports.boltExport,
    ar = function (e) {
      function r(e) {
        o() ? i(e) : t.push(e);
      }
      var n = ve.none(),
        t = [],
        o = function () {
          return n.isSome();
        },
        i = function (t) {
          n.each(function (e) {
            setTimeout(function () {
              t(e);
            }, 0);
          });
        };
      return (
        e(function (e) {
          o() || ((n = ve.some(e)), Y(t, i), (t = []));
        }),
        {
          get: r,
          map: function (n) {
            return ar(function (t) {
              r(function (e) {
                t(n(e));
              });
            });
          },
          isReady: o,
        }
      );
    },
    ur = {
      nu: ar,
      pure: function (t) {
        return ar(function (e) {
          e(t);
        });
      },
    },
    sr = function (n) {
      function e(e) {
        n().then(e, nr);
      }
      return {
        map: function (e) {
          return sr(function () {
            return n().then(e);
          });
        },
        bind: function (t) {
          return sr(function () {
            return n().then(function (e) {
              return t(e).toPromise();
            });
          });
        },
        anonBind: function (e) {
          return sr(function () {
            return n().then(function () {
              return e.toPromise();
            });
          });
        },
        toLazy: function () {
          return ur.nu(e);
        },
        toCached: function () {
          var e = null;
          return sr(function () {
            return (e = null === e ? n() : e);
          });
        },
        toPromise: n,
        get: e,
      };
    },
    cr = function (n) {
      return {
        isValue: w,
        isError: D,
        getOr: J(n),
        getOrThunk: J(n),
        getOrDie: J(n),
        or: function (e) {
          return cr(n);
        },
        orThunk: function (e) {
          return cr(n);
        },
        fold: function (e, t) {
          return t(n);
        },
        map: function (e) {
          return cr(e(n));
        },
        mapError: function (e) {
          return cr(n);
        },
        each: function (e) {
          e(n);
        },
        bind: function (e) {
          return e(n);
        },
        exists: function (e) {
          return e(n);
        },
        forall: function (e) {
          return e(n);
        },
        toOptional: function () {
          return ve.some(n);
        },
      };
    },
    lr = function (n) {
      return {
        isValue: D,
        isError: w,
        getOr: u,
        getOrThunk: function (e) {
          return e();
        },
        getOrDie: function () {
          return (
            (e = String(n)),
            (function () {
              throw new Error(e);
            })()
          );
          var e;
        },
        or: u,
        orThunk: function (e) {
          return e();
        },
        fold: function (e, t) {
          return e(n);
        },
        map: function (e) {
          return lr(n);
        },
        mapError: function (e) {
          return lr(e(n));
        },
        each: te,
        bind: function (e) {
          return lr(n);
        },
        exists: D,
        forall: w,
        toOptional: ve.none,
      };
    },
    fr = {
      value: cr,
      error: lr,
      fromOption: function (e, t) {
        return e.fold(function () {
          return lr(t);
        }, cr);
      },
    };
  function dr(e) {
    return e.fold(u, u);
  }
  function mr(e, t, n, r, o) {
    return e(n, r) ? ve.some(n) : y(o) && o(n) ? ve.none() : t(n, r, o);
  }
  function gr(e, t, n) {
    for (var r = e.dom, o = y(n) ? n : D; r.parentNode; ) {
      var r = r.parentNode,
        i = kt.fromDom(r);
      if (t(i)) return ve.some(i);
      if (o(i)) break;
    }
    return ve.none();
  }
  function pr(e, t, n) {
    return mr(
      function (e, t) {
        return t(e);
      },
      gr,
      e,
      t,
      n
    );
  }
  function hr(e, t, n) {
    return gr(
      e,
      function (e) {
        return ze(e, t);
      },
      n
    );
  }
  function vr(e, t) {
    return (
      (n = t),
      He((r = void 0 === e ? document : e.dom))
        ? ve.none()
        : ve.from(r.querySelector(n)).map(kt.fromDom)
    );
    var n, r;
  }
  function br(e, t, n) {
    return mr(ze, hr, e, t, n);
  }
  function yr(e, t) {
    return "number" != typeof t && (t = 0), setTimeout(e, t);
  }
  function Cr(e, t) {
    return "number" != typeof t && (t = 1), setInterval(e, t);
  }
  function xr(n, r) {
    function e() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      clearTimeout(o),
        (o = yr(function () {
          n.apply(this, e);
        }, r));
    }
    var o;
    return (
      (e.stop = function () {
        clearTimeout(o);
      }),
      e
    );
  }
  function wr(m, g) {
    function n(e, t, n) {
      var r,
        o = Et._addCacheSuffix(e),
        i = ue(h, o).getOrThunk(function () {
          return { id: "mce-u" + p++, passed: [], failed: [], count: 0 };
        });
      function a(e, t) {
        for (var n = e.length; n--; ) e[n]();
        (i.status = t),
          (i.passed = []),
          (i.failed = []),
          r && ((r.onload = null), (r.onerror = null), (r = null));
      }
      function u() {
        return a(i.passed, 2), 0;
      }
      function s() {
        return a(i.failed, 3);
      }
      (h[o] = i).count++;
      var c,
        l,
        f,
        d = function () {
          var e = d;
          !(function () {
            for (var e = m.styleSheets, t = e.length; t--; ) {
              var n = e[t].ownerNode;
              if (n && n.id === r.id) return u(), 1;
            }
          })() && (Date.now() - l < y ? _r.setTimeout(e) : s());
        };
      t && i.passed.push(t),
        n && i.failed.push(n),
        1 !== i.status &&
          (2 !== i.status
            ? 3 !== i.status
              ? ((i.status = 1),
                hn((c = kt.fromTag("link", b.dom)), {
                  rel: "stylesheet",
                  type: "text/css",
                  id: i.id,
                }),
                (l = Date.now()),
                g.contentCssCors && pn(c, "crossOrigin", "anonymous"),
                g.referrerPolicy && pn(c, "referrerpolicy", g.referrerPolicy),
                ((r = c.dom).onload = d),
                (r.onerror = s),
                (f = c),
                Pn(jt(v), f),
                pn(c, "href", o))
              : s()
            : u());
    }
    function o(t) {
      return rr(function (e) {
        n(t, i(e, J(fr.value(t))), i(e, J(fr.error(t))));
      });
    }
    function t(e) {
      var n = Et._addCacheSuffix(e);
      ue(h, n).each(function (e) {
        var t;
        0 == --e.count &&
          (delete h[n], (t = e.id), vr(jt(v), "#" + t).each(Ln));
      });
    }
    void 0 === g && (g = {});
    var p = 0,
      h = {},
      v = kt.fromDom(m),
      b = Dt(v),
      y = g.maxLoadTime || 5e3;
    return {
      load: n,
      loadAll: function (e, n, r) {
        var a,
          t = A(e, o);
        (a = t),
          rr(function (r) {
            var o = [],
              i = 0;
            0 === a.length
              ? r([])
              : Y(a, function (e, t) {
                  var n;
                  e.get(
                    ((n = t),
                    function (e) {
                      (o[n] = e), ++i >= a.length && r(o);
                    })
                  );
                });
          }).get(function (e) {
            var t = B(e, function (e) {
              return e.isValue();
            });
            0 < t.fail.length ? r(t.fail.map(dr)) : n(t.pass.map(dr));
          });
      },
      unload: t,
      unloadAll: function (e) {
        Y(e, function (e) {
          t(e);
        });
      },
      _setReferrerPolicy: function (e) {
        g.referrerPolicy = e;
      },
    };
  }
  or([
    { bothErrors: ["error1", "error2"] },
    { firstError: ["error1", "value2"] },
    { secondError: ["value1", "error2"] },
    { bothValues: ["value1", "value2"] },
  ]);
  var Sr,
    Er,
    kr = function (e, t) {
      return M(e.dom.childNodes, function (e) {
        return t(kt.fromDom(e));
      }).map(kt.fromDom);
    },
    Nr = window.Promise || ir,
    _r = {
      requestAnimationFrame: function (e, t) {
        Sr
          ? Sr.then(e)
          : (Sr = new Nr(function (e) {
              (function (e, t) {
                for (
                  var n = window.requestAnimationFrame,
                    r = ["ms", "moz", "webkit"],
                    o = 0;
                  o < r.length && !n;
                  o++
                )
                  n = window[r[o] + "RequestAnimationFrame"];
                (n =
                  n ||
                  function (e) {
                    window.setTimeout(e, 0);
                  })(e, t);
              })(e, (t = t || document.body));
            }).then(e));
      },
      setTimeout: yr,
      setInterval: Cr,
      setEditorTimeout: function (e, t, n) {
        return yr(function () {
          e.removed || t();
        }, n);
      },
      setEditorInterval: function (e, t, n) {
        var r = Cr(function () {
          e.removed ? clearInterval(r) : t();
        }, n);
        return r;
      },
      debounce: xr,
      throttle: xr,
      clearInterval: function (e) {
        return clearInterval(e);
      },
      clearTimeout: function (e) {
        return clearTimeout(e);
      },
    },
    Ar =
      ((Er = new WeakMap()),
      {
        forElement: function (e, t) {
          var n = Bn(e).dom;
          return ve.from(Er.get(n)).getOrThunk(function () {
            var e = wr(n, t);
            return Er.set(n, e), e;
          });
        },
      }),
    Rr =
      ((Dr.prototype.current = function () {
        return this.node;
      }),
      (Dr.prototype.next = function (e) {
        return (
          (this.node = this.findSibling(
            this.node,
            "firstChild",
            "nextSibling",
            e
          )),
          this.node
        );
      }),
      (Dr.prototype.prev = function (e) {
        return (
          (this.node = this.findSibling(
            this.node,
            "lastChild",
            "previousSibling",
            e
          )),
          this.node
        );
      }),
      (Dr.prototype.prev2 = function (e) {
        return (
          (this.node = this.findPreviousNode(
            this.node,
            "lastChild",
            "previousSibling",
            e
          )),
          this.node
        );
      }),
      (Dr.prototype.findSibling = function (e, t, n, r) {
        var o, i;
        if (e) {
          if (!r && e[t]) return e[t];
          if (e !== this.rootNode) {
            if ((o = e[n])) return o;
            for (i = e.parentNode; i && i !== this.rootNode; i = i.parentNode)
              if ((o = i[n])) return o;
          }
        }
      }),
      (Dr.prototype.findPreviousNode = function (e, t, n, r) {
        var o, i, a;
        if (e && ((o = e[n]), !this.rootNode || o !== this.rootNode)) {
          if (o) {
            if (!r) for (a = o[t]; a; a = a[t]) if (!a[t]) return a;
            return o;
          }
          return (i = e.parentNode) && i !== this.rootNode ? i : void 0;
        }
      }),
      Dr);
  function Dr(e, t) {
    (this.node = e),
      (this.rootNode = t),
      (this.current = this.current.bind(this)),
      (this.next = this.next.bind(this)),
      (this.prev = this.prev.bind(this)),
      (this.prev2 = this.prev2.bind(this));
  }
  function Tr(t) {
    var n;
    return function (e) {
      return (
        (n =
          n ||
          (function (e, t) {
            for (var n = {}, r = 0, o = e.length; r < o; r++) {
              var i = e[r];
              n[String(i)] = t(i, r);
            }
            return n;
          })(t, w)),
        ke(n, Nt(e))
      );
    };
  }
  function Or(e) {
    return Nn(e) && !mo(e);
  }
  function Br(e) {
    return Nn(e) && "br" === Nt(e);
  }
  function Pr(e) {
    return (
      No(e) && (e = e.parentNode), ko(e) && e.hasAttribute("data-mce-caret")
    );
  }
  function Lr(e) {
    return No(e) && So(e.data);
  }
  function Ir(e) {
    return Pr(e) || Lr(e);
  }
  function Mr(e) {
    return e.firstChild !== e.lastChild || !Wn(e.firstChild);
  }
  function Fr(e) {
    var t = e.container();
    return (
      !!jn(t) &&
      (t.data.charAt(e.offset()) === wo ||
        (e.isAtStart() && Lr(t.previousSibling)))
    );
  }
  function Ur(e) {
    var t = e.container();
    return (
      !!jn(t) &&
      (t.data.charAt(e.offset() - 1) === wo ||
        (e.isAtEnd() && Lr(t.nextSibling)))
    );
  }
  function zr(e) {
    return e && e.hasAttribute("data-mce-caret")
      ? (sn((n = (t = e.getElementsByTagName("br"))[t.length - 1])) &&
          n.parentNode.removeChild(n),
        e.removeAttribute("data-mce-caret"),
        e.removeAttribute("data-mce-bogus"),
        e.removeAttribute("style"),
        e.removeAttribute("_moz_abspos"),
        e)
      : null;
    var t, n;
  }
  function Hr(e) {
    return Pr(e.startContainer);
  }
  function jr(e) {
    return (
      !Io(e) && (Oo(e) ? !Bo(e.parentNode) : Po(e) || To(e) || Lo(e) || Mo(e))
    );
  }
  function Vr(e, t) {
    return (
      jr(e) &&
      (function (e, t) {
        for (e = e.parentNode; e && e !== t; e = e.parentNode) {
          if (Mo(e)) return !1;
          if (Ro(e)) return !0;
        }
        return !0;
      })(e, t)
    );
  }
  function qr(e) {
    return Fo.test(e);
  }
  function $r(e, t) {
    return (
      (jr(e) &&
        !1 ===
          ((a = t),
          jn((i = e)) &&
            qr(i.data) &&
            !1 ===
              ((n = i),
              (r = kt.fromDom(a)),
              hr(kt.fromDom(n), "pre,code", R(je, r)).isSome()))) ||
      (zn((o = e)) &&
        "A" === o.nodeName &&
        !o.hasAttribute("href") &&
        (o.hasAttribute("name") || o.hasAttribute("id"))) ||
      Uo(e)
    );
    var n, r, o, i, a;
  }
  function Wr(e, t) {
    return (function (e, t) {
      var n = 0;
      if ($r(e, e)) return !1;
      var r = e.firstChild;
      if (!r) return !0;
      var o = new Rr(r, e);
      do {
        if (t) {
          if (Ho(r)) {
            r = o.next(!0);
            continue;
          }
          if (zo(r)) {
            r = o.next();
            continue;
          }
        }
        if (Wn(r)) n++, (r = o.next());
        else {
          if ($r(r, e)) return !1;
          r = o.next();
        }
      } while (r);
      return n <= 1;
    })(e.dom, (t = void 0 === t || t));
  }
  function Kr(e, t) {
    return V(e) && ($r(e, t) || Or(kt.fromDom(e)));
  }
  function Xr(e) {
    return (
      "span" === e.nodeName.toLowerCase() &&
      "bookmark" === e.getAttribute("data-mce-type")
    );
  }
  function Yr(e, t) {
    var n,
      r,
      o,
      i = {};
    if (e) {
      for (e = e.split(","), t = t || 10, n = 0; n < e.length; n += 2)
        (r = String.fromCharCode(parseInt(e[n], t))),
          Yo[r] || ((o = "&" + e[n + 1] + ";"), (i[r] = o), (i[o] = r));
      return i;
    }
  }
  function Gr(e, t) {
    return e.replace(t ? qo : $o, function (e) {
      return Yo[e] || e;
    });
  }
  function Jr(e, t) {
    return e.replace(t ? qo : $o, function (e) {
      return 1 < e.length
        ? "&#" +
            (1024 * (e.charCodeAt(0) - 55296) +
              (e.charCodeAt(1) - 56320) +
              65536) +
            ";"
        : Yo[e] || "&#" + e.charCodeAt(0) + ";";
    });
  }
  function Qr(e, t, n) {
    return (
      (n = n || Jo),
      e.replace(t ? qo : $o, function (e) {
        return Yo[e] || n[e] || e;
      })
    );
  }
  function Zr(e, t) {
    return (e = Et.trim(e)) ? e.split(t || " ") : [];
  }
  function eo(e, t) {
    var n = ti(e, " ", ti(e.toUpperCase(), " "));
    return ri(n, t);
  }
  function to(e) {
    return eo(
      "td th li dt dd figcaption caption details summary",
      e.getTextBlockElements()
    );
  }
  function no(e, n) {
    var r;
    return (
      e &&
        ((r = {}),
        ni((e = "string" == typeof e ? { "*": e } : e), function (e, t) {
          r[t] = r[t.toUpperCase()] = ("map" === n ? ti : oi)(e, /[, ]/);
        })),
      r
    );
  }
  function ro(i) {
    function e(e, t, n) {
      var r = i[e];
      return (
        r
          ? (r = ti(r, /[, ]/, ti(r.toUpperCase(), /[, ]/)))
          : (r = Zo[e]) || ((r = eo(t, n)), (Zo[e] = r)),
        r
      );
    }
    var t,
      s,
      n,
      r,
      o,
      a,
      u,
      c,
      S = {},
      l = {},
      E = [],
      f = {},
      d = {},
      m =
        ((t = (i = i || {}).schema),
        (c = {}),
        Zo[t] ||
          ((s = "id accesskey class dir lang style tabindex title role"),
          (n =
            "address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul"),
          (r =
            "a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment"),
          "html4" !== t &&
            ((s +=
              " contenteditable contextmenu draggable dropzone hidden spellcheck translate"),
            (n +=
              " article aside details dialog figure main header footer hgroup section nav"),
            (r +=
              " audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen")),
          "html5-strict" !== t &&
            ((s += " xml:lang"),
            (r = [r, (u = "acronym applet basefont big font strike tt")].join(
              " "
            )),
            ni(Zr(u), function (e) {
              g(e, "", r);
            }),
            (n = [n, (a = "center dir isindex noframes")].join(" ")),
            (o = [n, r].join(" ")),
            ni(Zr(a), function (e) {
              g(e, "", o);
            })),
          (o = o || [n, r].join(" ")),
          g("html", "manifest", "head body"),
          g("head", "", "base command link meta noscript script style title"),
          g("title hr noscript br"),
          g("base", "href target"),
          g("link", "href rel media hreflang type sizes hreflang"),
          g("meta", "name http-equiv content charset"),
          g("style", "media type scoped"),
          g("script", "src async defer type charset"),
          g(
            "body",
            "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload",
            o
          ),
          g("address dt dd div caption", "", o),
          g(
            "h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn",
            "",
            r
          ),
          g("blockquote", "cite", o),
          g("ol", "reversed start type", "li"),
          g("ul", "", "li"),
          g("li", "value", o),
          g("dl", "", "dt dd"),
          g("a", "href target rel media hreflang type", r),
          g("q", "cite", r),
          g("ins del", "cite datetime", o),
          g("img", "src sizes srcset alt usemap ismap width height"),
          g("iframe", "src name width height", o),
          g("embed", "src type width height"),
          g(
            "object",
            "data type typemustmatch name usemap form width height",
            [o, "param"].join(" ")
          ),
          g("param", "name value"),
          g("map", "name", [o, "area"].join(" ")),
          g("area", "alt coords shape href target rel media hreflang type"),
          g(
            "table",
            "border",
            "caption colgroup thead tfoot tbody tr" +
              ("html4" === t ? " col" : "")
          ),
          g("colgroup", "span", "col"),
          g("col", "span"),
          g("tbody thead tfoot", "", "tr"),
          g("tr", "", "td th"),
          g("td", "colspan rowspan headers", o),
          g("th", "colspan rowspan headers scope abbr", o),
          g(
            "form",
            "accept-charset action autocomplete enctype method name novalidate target",
            o
          ),
          g("fieldset", "disabled form name", [o, "legend"].join(" ")),
          g("label", "form for", r),
          g(
            "input",
            "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"
          ),
          g(
            "button",
            "disabled form formaction formenctype formmethod formnovalidate formtarget name type value",
            "html4" === t ? o : r
          ),
          g(
            "select",
            "disabled form multiple name required size",
            "option optgroup"
          ),
          g("optgroup", "disabled label", "option"),
          g("option", "disabled label selected value"),
          g(
            "textarea",
            "cols dirname disabled form maxlength name readonly required rows wrap"
          ),
          g("menu", "type label", [o, "li"].join(" ")),
          g("noscript", "", o),
          "html4" !== t &&
            (g("wbr"),
            g("ruby", "", [r, "rt rp"].join(" ")),
            g("figcaption", "", o),
            g("mark rt rp summary bdi", "", r),
            g("canvas", "width height", o),
            g(
              "video",
              "src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered",
              [o, "track source"].join(" ")
            ),
            g(
              "audio",
              "src crossorigin preload autoplay mediagroup loop muted controls buffered volume",
              [o, "track source"].join(" ")
            ),
            g("picture", "", "img source"),
            g("source", "src srcset type media sizes"),
            g("track", "kind src srclang label default"),
            g("datalist", "", [r, "option"].join(" ")),
            g("article section nav aside main header footer", "", o),
            g("hgroup", "", "h1 h2 h3 h4 h5 h6"),
            g("figure", "", [o, "figcaption"].join(" ")),
            g("time", "datetime", r),
            g("dialog", "open", o),
            g("command", "type label icon disabled checked radiogroup command"),
            g("output", "for form name", r),
            g("progress", "value max", r),
            g("meter", "value min max low high optimum", r),
            g("details", "open", [o, "summary"].join(" ")),
            g("keygen", "autofocus challenge disabled form keytype name")),
          "html5-strict" !== t &&
            (p("script", "language xml:space"),
            p("style", "xml:space"),
            p(
              "object",
              "declare classid code codebase codetype archive standby align border hspace vspace"
            ),
            p("embed", "align name hspace vspace"),
            p("param", "valuetype type"),
            p("a", "charset name rev shape coords"),
            p("br", "clear"),
            p(
              "applet",
              "codebase archive code object alt name width height align hspace vspace"
            ),
            p("img", "name longdesc align border hspace vspace"),
            p(
              "iframe",
              "longdesc frameborder marginwidth marginheight scrolling align"
            ),
            p("font basefont", "size color face"),
            p("input", "usemap align"),
            p("select"),
            p("textarea"),
            p("h1 h2 h3 h4 h5 h6 div p legend caption", "align"),
            p("ul", "type compact"),
            p("li", "type"),
            p("ol dl menu dir", "compact"),
            p("pre", "width xml:space"),
            p("hr", "align noshade size width"),
            p("isindex", "prompt"),
            p(
              "table",
              "summary width frame rules cellspacing cellpadding align bgcolor"
            ),
            p("col", "width align char charoff valign"),
            p("colgroup", "width align char charoff valign"),
            p("thead", "align char charoff valign"),
            p("tr", "align char charoff valign bgcolor"),
            p(
              "th",
              "axis align char charoff valign nowrap bgcolor width height"
            ),
            p("form", "accept"),
            p(
              "td",
              "abbr axis scope align char charoff valign nowrap bgcolor width height"
            ),
            p("tfoot", "align char charoff valign"),
            p("tbody", "align char charoff valign"),
            p("area", "nohref"),
            p("body", "background bgcolor text link vlink alink")),
          "html4" !== t &&
            (p("input button select textarea", "autofocus"),
            p("input textarea", "placeholder"),
            p("a", "download"),
            p("link script img", "crossorigin"),
            p("img", "loading"),
            p("iframe", "sandbox seamless allowfullscreen loading")),
          ni(Zr("a form meter progress dfn"), function (e) {
            c[e] && delete c[e].children[e];
          }),
          delete c.caption.children.table,
          delete c.script,
          (Zo[t] = c)));
    function g(e, t, n) {
      function r(e, t) {
        for (var n = {}, r = 0, o = e.length; r < o; r++) n[e[r]] = t || {};
        return n;
      }
      var o, i;
      (t = t || ""), "string" == typeof (n = n || []) && (n = Zr(n));
      for (var a = Zr(e), u = a.length; u--; )
        (i = {
          attributes: r((o = Zr([s, t].join(" ")))),
          attributesOrder: o,
          children: r(n, ei),
        }),
          (c[a[u]] = i);
    }
    function p(e, t) {
      for (var n, r, o, i = Zr(e), a = i.length, u = Zr(t); a--; )
        for (n = c[i[a]], r = 0, o = u.length; r < o; r++)
          (n.attributes[u[r]] = {}), n.attributesOrder.push(u[r]);
    }
    !1 === i.verify_html && (i.valid_elements = "*[*]");
    var h = no(i.valid_styles),
      v = no(i.invalid_styles, "map"),
      b = no(i.valid_classes, "map"),
      y = e(
        "whitespace_elements",
        "pre script noscript style textarea video audio iframe object code"
      ),
      C = e(
        "self_closing_elements",
        "colgroup dd dt li option p td tfoot th thead tr"
      ),
      x = e(
        "short_ended_elements",
        "area base basefont br col frame hr img input isindex link meta param embed source wbr track"
      ),
      w = e(
        "boolean_attributes",
        "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"
      ),
      k = "td th iframe video audio object script code",
      N = e("non_empty_elements", k + " pre", x),
      _ = e("move_caret_before_on_enter_elements", k + " table", x),
      A = e(
        "text_block_elements",
        "h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"
      ),
      R = e(
        "block_elements",
        "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary",
        A
      ),
      D = e(
        "text_inline_elements",
        "span strong b em i font s strike u var cite dfn code mark q sup sub samp"
      );
    function T(e) {
      return new RegExp("^" + e.replace(/([?+*])/g, ".$1") + "$");
    }
    function O(e) {
      var t,
        n,
        r,
        o,
        i,
        a,
        u,
        s,
        c,
        l,
        f,
        d,
        m,
        g,
        p,
        h,
        v,
        b,
        y = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)])?$/,
        C = /^([!\-])?(\w+[\\:]:\w+|[^=:<]+)?(?:([=:<])(.*))?$/,
        x = /[*?+]/;
      if (e) {
        var w = Zr(e, ",");
        for (
          S["@"] && ((h = S["@"].attributes), (v = S["@"].attributesOrder)),
            t = 0,
            n = w.length;
          t < n;
          t++
        )
          if ((i = y.exec(w[t]))) {
            if (
              ((g = i[1]),
              (c = i[2]),
              (p = i[3]),
              (s = i[5]),
              (a = { attributes: (d = {}), attributesOrder: (m = []) }),
              "#" === g && (a.paddEmpty = !0),
              "-" === g && (a.removeEmpty = !0),
              "!" === i[4] && (a.removeEmptyAttrs = !0),
              h &&
                (ne(h, function (e, t) {
                  d[t] = e;
                }),
                m.push.apply(m, v)),
              s)
            )
              for (r = 0, o = (s = Zr(s, "|")).length; r < o; r++)
                (i = C.exec(s[r])) &&
                  ((u = {}),
                  (f = i[1]),
                  (l = i[2].replace(/[\\:]:/g, ":")),
                  (g = i[3]),
                  (b = i[4]),
                  "!" === f &&
                    ((a.attributesRequired = a.attributesRequired || []),
                    a.attributesRequired.push(l),
                    (u.required = !0)),
                  "-" !== f
                    ? (g &&
                        ("=" === g &&
                          ((a.attributesDefault = a.attributesDefault || []),
                          a.attributesDefault.push({ name: l, value: b }),
                          (u.defaultValue = b)),
                        ":" === g &&
                          ((a.attributesForced = a.attributesForced || []),
                          a.attributesForced.push({ name: l, value: b }),
                          (u.forcedValue = b)),
                        "<" === g && (u.validValues = ti(b, "?"))),
                      x.test(l)
                        ? ((a.attributePatterns = a.attributePatterns || []),
                          (u.pattern = T(l)),
                          a.attributePatterns.push(u))
                        : (d[l] || m.push(l), (d[l] = u)))
                    : (delete d[l], m.splice(ii(m, l), 1)));
            h || "@" !== c || ((h = d), (v = m)),
              p && ((a.outputName = c), (S[p] = a)),
              x.test(c) ? ((a.pattern = T(c)), E.push(a)) : (S[c] = a);
          }
      }
    }
    function B(e) {
      (S = {}),
        (E = []),
        O(e),
        ni(m, function (e, t) {
          l[t] = e.children;
        });
    }
    function P(e) {
      var a = /^(~)?(.+)$/;
      e &&
        ((Zo.text_block_elements = Zo.block_elements = null),
        ni(Zr(e, ","), function (e) {
          var t,
            n = a.exec(e),
            r = "~" === n[1],
            o = r ? "span" : "div",
            i = n[2];
          (l[i] = l[o]),
            (f[i] = o),
            r || ((R[i.toUpperCase()] = {}), (R[i] = {})),
            S[i] ||
              ((t = S[o]),
              delete (t = ri({}, t)).removeEmptyAttrs,
              delete t.removeEmpty,
              (S[i] = t)),
            ni(l, function (e, t) {
              e[o] && ((l[t] = e = ri({}, l[t])), (e[i] = e[o]));
            });
        }));
    }
    function L(e) {
      var o =
        /^([+\-]?)([A-Za-z0-9_\-.\u00b7\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u037d\u037f-\u1fff\u200c-\u200d\u203f-\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]+)\[([^\]]+)]$/;
      (Zo[i.schema] = null),
        e &&
          ni(Zr(e, ","), function (e) {
            var t,
              n,
              r = o.exec(e);
            r &&
              ((n = r[1]),
              (t = n ? l[r[2]] : (l[r[2]] = { "#comment": {} })),
              (t = l[r[2]]),
              ni(Zr(r[3], "|"), function (e) {
                "-" === n ? delete t[e] : (t[e] = {});
              }));
          });
    }
    function I(e) {
      var t,
        n = S[e];
      if (n) return n;
      for (t = E.length; t--; ) if ((n = E[t]).pattern.test(e)) return n;
    }
    ni(
      (
        i.special ||
        "script noscript iframe noframes noembed title style textarea xmp"
      ).split(" "),
      function (e) {
        d[e] = new RegExp("</" + e + "[^>]*>", "gi");
      }
    ),
      i.valid_elements
        ? B(i.valid_elements)
        : (ni(m, function (e, t) {
            (S[t] = {
              attributes: e.attributes,
              attributesOrder: e.attributesOrder,
            }),
              (l[t] = e.children);
          }),
          "html5" !== i.schema &&
            ni(Zr("strong/b em/i"), function (e) {
              var t = Zr(e, "/");
              S[t[1]].outputName = t[0];
            }),
          ni(D, function (e, t) {
            S[t] &&
              (i.padd_empty_block_inline_children &&
                (S[t].paddInEmptyBlock = !0),
              (S[t].removeEmpty = !0));
          }),
          ni(Zr("ol ul blockquote a table tbody"), function (e) {
            S[e] && (S[e].removeEmpty = !0);
          }),
          ni(
            Zr("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"),
            function (e) {
              S[e].paddEmpty = !0;
            }
          ),
          ni(Zr("span"), function (e) {
            S[e].removeEmptyAttrs = !0;
          })),
      P(i.custom_elements),
      L(i.valid_children),
      O(i.extended_valid_elements),
      L("+ol[ul|ol],+ul[ul|ol]"),
      ni(
        {
          dd: "dl",
          dt: "dl",
          li: "ul ol",
          td: "tr",
          th: "tr",
          tr: "tbody thead tfoot",
          tbody: "table",
          thead: "table",
          tfoot: "table",
          legend: "fieldset",
          area: "map",
          param: "video audio object",
        },
        function (e, t) {
          S[t] && (S[t].parentsRequired = Zr(e));
        }
      ),
      i.invalid_elements &&
        ni(oi(i.invalid_elements), function (e) {
          S[e] && delete S[e];
        }),
      I("span") || O("span[!data-mce-type|*]");
    var M = J(h),
      F = J(v),
      U = J(b),
      z = J(w),
      H = J(R),
      j = J(A),
      V = J(D),
      q = J(x),
      $ = J(C),
      W = J(N),
      K = J(_),
      X = J(y),
      Y = J(d),
      G = J(f);
    return {
      children: l,
      elements: S,
      getValidStyles: M,
      getValidClasses: U,
      getBlockElements: H,
      getInvalidStyles: F,
      getShortEndedElements: q,
      getTextBlockElements: j,
      getTextInlineElements: V,
      getBoolAttrs: z,
      getElementRule: I,
      getSelfClosingElements: $,
      getNonEmptyElements: W,
      getMoveCaretBeforeOnEnterElements: K,
      getWhiteSpaceElements: X,
      getSpecialElements: Y,
      isValidChild: function (e, t) {
        var n = l[e.toLowerCase()];
        return !(!n || !n[t.toLowerCase()]);
      },
      isValid: function (e, t) {
        var n,
          r,
          o = I(e);
        if (o) {
          if (!t) return !0;
          if (o.attributes[t]) return !0;
          if ((n = o.attributePatterns))
            for (r = n.length; r--; ) if (n[r].pattern.test(e)) return !0;
        }
        return !1;
      },
      getCustomElements: G,
      addValidElements: O,
      setValidElements: B,
      addCustomElements: P,
      addValidChildren: L,
    };
  }
  function oo(e, t, n, r) {
    function o(e) {
      return 1 < (e = parseInt(e, 10).toString(16)).length ? e : "0" + e;
    }
    return "#" + o(t) + o(n) + o(r);
  }
  function io(b, e) {
    var u,
      o,
      y = this,
      C = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,
      x =
        /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,
      w = /\s*([^:]+):\s*([^;]+);?/g,
      S = /\s+$/,
      E = {},
      k = Co;
    (b = b || {}), e && ((u = e.getValidStyles()), (o = e.getInvalidStyles()));
    for (
      var t = ("\\\" \\' \\; \\: ; : " + k).split(" "), N = 0;
      N < t.length;
      N++
    )
      (E[t[N]] = k + N), (E[k + N] = t[N]);
    return {
      toHex: function (e) {
        return e.replace(C, oo);
      },
      parse: function (e) {
        function t(e, t, n) {
          var r = p[e + "-top" + t];
          if (r) {
            var o = p[e + "-right" + t];
            if (o) {
              var i = p[e + "-bottom" + t];
              if (i) {
                var a = p[e + "-left" + t];
                if (a) {
                  var u = [r, o, i, a];
                  for (N = u.length - 1; N-- && u[N] === u[N + 1]; );
                  (-1 < N && n) ||
                    ((p[e + t] = -1 === N ? u[0] : u.join(" ")),
                    delete p[e + "-top" + t],
                    delete p[e + "-right" + t],
                    delete p[e + "-bottom" + t],
                    delete p[e + "-left" + t]);
                }
              }
            }
          }
        }
        function n(e) {
          var t,
            n = p[e];
          if (n) {
            for (t = (n = n.split(" ")).length; t--; )
              if (n[t] !== n[0]) return;
            return (p[e] = n[0]), 1;
          }
        }
        function r(e) {
          return (f = !0), E[e];
        }
        function u(e, t) {
          return (
            f &&
              (e = e.replace(/\uFEFF[0-9]/g, function (e) {
                return E[e];
              })),
            t ? e : e.replace(/\\([\'\";:])/g, "$1")
          );
        }
        function o(e) {
          return String.fromCharCode(parseInt(e.slice(1), 16));
        }
        function i(e) {
          return e.replace(/\\[0-9a-f]+/gi, o);
        }
        function a(e, t, n, r, o, i) {
          if ((o = o || i)) return "'" + (o = u(o)).replace(/\'/g, "\\'") + "'";
          if (((t = u(t || n || r)), !b.allow_script_urls)) {
            var a = t.replace(/[\s\r\n]+/g, "");
            if (/(java|vb)script:/i.test(a)) return "";
            if (!b.allow_svg_data_urls && /^data:image\/svg/i.test(a))
              return "";
          }
          return (
            "url('" +
            (t = h ? h.call(v, t, "style") : t).replace(/\'/g, "\\'") +
            "')"
          );
        }
        var s,
          c,
          l,
          f,
          d,
          m,
          g,
          p = {},
          h = b.url_converter,
          v = b.url_converter_scope || y;
        if (e) {
          for (
            e = (e = e.replace(/[\u0000-\u001F]/g, ""))
              .replace(/\\[\"\';:\uFEFF]/g, r)
              .replace(/\"[^\"]+\"|\'[^\']+\'/g, function (e) {
                return e.replace(/[;:]/g, r);
              });
            (s = w.exec(e));

          )
            (w.lastIndex = s.index + s[0].length),
              (c = s[1].replace(S, "").toLowerCase()),
              (l = s[2].replace(S, "")),
              c &&
                l &&
                ((c = i(c)),
                (l = i(l)),
                -1 === c.indexOf(k) &&
                  -1 === c.indexOf('"') &&
                  (b.allow_script_urls ||
                    ("behavior" !== c &&
                      !/expression\s*\(|\/\*|\*\//.test(l))) &&
                  ("font-weight" === c && "700" === l
                    ? (l = "bold")
                    : ("color" !== c && "background-color" !== c) ||
                      (l = l.toLowerCase()),
                  (l = (l = l.replace(C, oo)).replace(x, a)),
                  (p[c] = f ? u(l, !0) : l)));
          t("border", "", !0),
            t("border", "-width"),
            t("border", "-color"),
            t("border", "-style"),
            t("padding", ""),
            t("margin", ""),
            (m = "border-style"),
            (g = "border-color"),
            n((d = "border-width")) &&
              n(m) &&
              n(g) &&
              ((p.border = p[d] + " " + p[m] + " " + p[g]),
              delete p[d],
              delete p[m],
              delete p[g]),
            "medium none" === p.border && delete p.border,
            "none" === p["border-image"] && delete p["border-image"];
        }
        return p;
      },
      serialize: function (i, r) {
        function e(e) {
          var t,
            n = u[e];
          if (n)
            for (var r = 0, o = n.length; r < o; r++)
              (e = n[r]),
                (t = i[e]) &&
                  (a += (0 < a.length ? " " : "") + e + ": " + t + ";");
        }
        var a = "";
        return (
          r && u
            ? (e("*"), e(r))
            : ne(i, function (e, t) {
                var n;
                !e ||
                  (o && (((n = o["*"]) && n[t]) || ((n = o[r]) && n[t]))) ||
                  (a += (0 < a.length ? " " : "") + t + ": " + e + ";");
              }),
          a
        );
      },
    };
  }
  function ao(e) {
    return e instanceof Event || y(e.initEvent);
  }
  function uo(e, t, n, r) {
    var o,
      i,
      a = (function (e) {
        var t,
          n = null != r ? r : {};
        for (t in e) ke(ai, t) || (n[t] = e[t]);
        return (
          V(n.composedPath) &&
            (n.composedPath = function () {
              return e.composedPath();
            }),
          n
        );
      })(t);
    return (
      (a.type = e),
      K(a.target) &&
        (a.target = null !== (o = a.srcElement) && void 0 !== o ? o : n),
      (K((i = t).preventDefault) || ao(i)) &&
        ((a.preventDefault = function () {
          (a.defaultPrevented = !0),
            (a.isDefaultPrevented = w),
            y(t.preventDefault)
              ? t.preventDefault()
              : ao(t) && (t.returnValue = !1);
        }),
        (a.stopPropagation = function () {
          (a.cancelBubble = !0),
            (a.isPropagationStopped = w),
            y(t.stopPropagation)
              ? t.stopPropagation()
              : ao(t) && (t.cancelBubble = !0);
        }),
        (a.stopImmediatePropagation = function () {
          (a.isImmediatePropagationStopped = w), a.stopPropagation();
        }),
        a.isDefaultPrevented !== w &&
          a.isDefaultPrevented !== D &&
          ((a.isDefaultPrevented = !0 === a.defaultPrevented ? w : D),
          (a.isPropagationStopped = !0 === a.cancelBubble ? w : D),
          (a.isImmediatePropagationStopped = D))),
      a
    );
  }
  function so(e, t, n, r) {
    e.addEventListener
      ? e.addEventListener(t, n, r || !1)
      : e.attachEvent && e.attachEvent("on" + t, n);
  }
  function co(e, t, n, r) {
    e.removeEventListener
      ? e.removeEventListener(t, n, r || !1)
      : e.detachEvent && e.detachEvent("on" + t, n);
  }
  function lo(e, t) {
    var n,
      r,
      o,
      i,
      a = uo(e.type, e, document, t);
    return (
      V((i = e)) &&
        ui.test(i.type) &&
        b(e.pageX) &&
        !b(e.clientX) &&
        ((r = (n = a.target.ownerDocument || document).documentElement),
        (o = n.body),
        (a.pageX =
          e.clientX +
          ((r && r.scrollLeft) || (o && o.scrollLeft) || 0) -
          ((r && r.clientLeft) || (o && o.clientLeft) || 0)),
        (a.pageY =
          e.clientY +
          ((r && r.scrollTop) || (o && o.scrollTop) || 0) -
          ((r && r.clientTop) || (o && o.clientTop) || 0))),
      b(a.metaKey) && (a.metaKey = !1),
      a
    );
  }
  var fo = Tr(["h1", "h2", "h3", "h4", "h5", "h6"]),
    mo = Tr([
      "article",
      "aside",
      "details",
      "div",
      "dt",
      "figcaption",
      "footer",
      "form",
      "fieldset",
      "header",
      "hgroup",
      "html",
      "main",
      "nav",
      "section",
      "summary",
      "body",
      "p",
      "dl",
      "multicol",
      "dd",
      "figure",
      "address",
      "center",
      "blockquote",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "listing",
      "xmp",
      "pre",
      "plaintext",
      "menu",
      "dir",
      "ul",
      "ol",
      "li",
      "hr",
      "table",
      "tbody",
      "thead",
      "tfoot",
      "th",
      "tr",
      "td",
      "caption",
    ]),
    go = Tr([
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "p",
      "div",
      "address",
      "pre",
      "form",
      "blockquote",
      "center",
      "dir",
      "fieldset",
      "header",
      "footer",
      "article",
      "section",
      "hgroup",
      "aside",
      "nav",
      "figure",
    ]),
    po = Tr(["ul", "ol", "dl"]),
    ho = Tr(["li", "dd", "dt"]),
    vo = Tr(["thead", "tbody", "tfoot"]),
    bo = Tr(["td", "th"]),
    yo = Tr(["pre", "script", "textarea", "style"]),
    Co = "\ufeff",
    xo = "\xa0",
    wo = Co,
    So = function (e) {
      return e === Co;
    },
    Eo = function (e) {
      return e.replace(/\uFEFF/g, "");
    },
    ko = zn,
    No = jn,
    _o = function (e) {
      return No(e) && e.data[0] === wo;
    },
    Ao = function (e) {
      return No(e) && e.data[e.data.length - 1] === wo;
    },
    Ro = Xn,
    Do = Yn,
    To = Wn,
    Oo = jn,
    Bo = on(["script", "style", "textarea"]),
    Po = on([
      "img",
      "input",
      "textarea",
      "hr",
      "iframe",
      "video",
      "audio",
      "object",
      "embed",
    ]),
    Lo = on(["table"]),
    Io = Ir,
    Mo = function (e) {
      return (
        !1 === (zn((t = e)) && "true" === t.getAttribute("unselectable")) &&
        Do(e)
      );
      var t;
    },
    Fo = /^[ \t\r\n]*$/,
    Uo = un("data-mce-bookmark"),
    zo = un("data-mce-bogus"),
    Ho = function (e) {
      return zn(e) && "all" === e.getAttribute("data-mce-bogus");
    },
    jo = function (e, t, n) {
      var r = n || t;
      if (zn(t) && Xr(t)) return t;
      for (
        var o, i, a, u, s, c, l, f, d, m, g, p = t.childNodes, h = p.length - 1;
        0 <= h;
        h--
      )
        jo(e, p[h], r);
      return (
        !zn(t) ||
          (1 === (o = t.childNodes).length &&
            Xr(o[0]) &&
            t.parentNode.insertBefore(o[0], t)),
        $n((a = t)) ||
          qn(a) ||
          $r(t, r) ||
          (zn((i = t)) && 0 < i.childNodes.length) ||
          ((s = r),
          jn((u = t)) &&
            0 < u.data.length &&
            ((f = new Rr((c = u), (l = s)).prev(!1)),
            (d = new Rr(c, l).next(!1)),
            (m = b(f) || Kr(f, l)),
            (g = b(d) || Kr(d, l)),
            m && g)) ||
          e.remove(t),
        t
      );
    },
    Vo = Et.makeMap,
    qo =
      /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
    $o = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
    Wo = /[<>&\"\']/g,
    Ko = /&#([a-z0-9]+);?|&([a-z0-9]+);/gi,
    Xo = {
      128: "\u20ac",
      130: "\u201a",
      131: "\u0192",
      132: "\u201e",
      133: "\u2026",
      134: "\u2020",
      135: "\u2021",
      136: "\u02c6",
      137: "\u2030",
      138: "\u0160",
      139: "\u2039",
      140: "\u0152",
      142: "\u017d",
      145: "\u2018",
      146: "\u2019",
      147: "\u201c",
      148: "\u201d",
      149: "\u2022",
      150: "\u2013",
      151: "\u2014",
      152: "\u02dc",
      153: "\u2122",
      154: "\u0161",
      155: "\u203a",
      156: "\u0153",
      158: "\u017e",
      159: "\u0178",
    },
    Yo = {
      '"': "&quot;",
      "'": "&#39;",
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;",
      "`": "&#96;",
    },
    Go = {
      "&lt;": "<",
      "&gt;": ">",
      "&amp;": "&",
      "&quot;": '"',
      "&apos;": "'",
    },
    Jo = Yr(
      "50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",
      32
    ),
    Qo = {
      encodeRaw: Gr,
      encodeAllRaw: function (e) {
        return ("" + e).replace(Wo, function (e) {
          return Yo[e] || e;
        });
      },
      encodeNumeric: Jr,
      encodeNamed: Qr,
      getEncodeFunc: function (e, t) {
        var n = Yr(t) || Jo,
          r = Vo(e.replace(/\+/g, ","));
        return r.named && r.numeric
          ? function (e, t) {
              return e.replace(t ? qo : $o, function (e) {
                return void 0 !== Yo[e]
                  ? Yo[e]
                  : void 0 !== n[e]
                  ? n[e]
                  : 1 < e.length
                  ? "&#" +
                    (1024 * (e.charCodeAt(0) - 55296) +
                      (e.charCodeAt(1) - 56320) +
                      65536) +
                    ";"
                  : "&#" + e.charCodeAt(0) + ";";
              });
            }
          : r.named
          ? t
            ? function (e, t) {
                return Qr(e, t, n);
              }
            : Qr
          : r.numeric
          ? Jr
          : Gr;
      },
      decode: function (e) {
        return e.replace(Ko, function (e, t) {
          return t
            ? 65535 <
              (t =
                "x" === t.charAt(0).toLowerCase()
                  ? parseInt(t.substr(1), 16)
                  : parseInt(t, 10))
              ? ((t -= 65536),
                String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)))
              : Xo[t] || String.fromCharCode(t)
            : Go[e] ||
                Jo[e] ||
                ((n = e),
                ((r = kt.fromTag("div").dom).innerHTML = n),
                r.textContent || r.innerText || n);
          var n, r;
        });
      },
    },
    Zo = {},
    ei = {},
    ti = Et.makeMap,
    ni = Et.each,
    ri = Et.extend,
    oi = Et.explode,
    ii = Et.inArray,
    ai = {
      keyLocation: !0,
      layerX: !0,
      layerY: !0,
      returnValue: !0,
      webkitMovementX: !0,
      webkitMovementY: !0,
      keyIdentifier: !0,
      mozPressure: !0,
    },
    ui = /^(?:mouse|contextmenu)|click/,
    si =
      ((ci.prototype.bind = function (e, t, n, r) {
        function o(e) {
          f.executeHandlers(lo(e || d.event), i);
        }
        var i,
          a,
          u,
          s,
          c,
          l,
          f = this,
          d = window;
        if (e && 3 !== e.nodeType && 8 !== e.nodeType) {
          e[f.expando]
            ? (i = e[f.expando])
            : ((i = f.count++), (e[f.expando] = i), (f.events[i] = {})),
            (r = r || e);
          for (var m = t.split(" "), g = m.length; g--; )
            (c = o),
              (s = l = !1),
              "DOMContentLoaded" === (u = m[g]) && (u = "ready"),
              f.domLoaded && "ready" === u && "complete" === e.readyState
                ? n.call(r, lo({ type: u }))
                : (f.hasMouseEnterLeave ||
                    ((s = f.mouseEnterLeave[u]) &&
                      (c = function (e) {
                        var t = e.currentTarget,
                          n = e.relatedTarget;
                        if (n && t.contains) n = t.contains(n);
                        else for (; n && n !== t; ) n = n.parentNode;
                        n ||
                          (((e = lo(e || d.event)).type =
                            "mouseout" === e.type
                              ? "mouseleave"
                              : "mouseenter"),
                          (e.target = t),
                          f.executeHandlers(e, i));
                      })),
                  f.hasFocusIn ||
                    ("focusin" !== u && "focusout" !== u) ||
                    ((l = !0),
                    (s = "focusin" === u ? "focus" : "blur"),
                    (c = function (e) {
                      ((e = lo(e || d.event)).type =
                        "focus" === e.type ? "focusin" : "focusout"),
                        f.executeHandlers(e, i);
                    })),
                  (a = f.events[i][u])
                    ? "ready" === u && f.domLoaded
                      ? n(lo({ type: u }))
                      : a.push({ func: n, scope: r })
                    : ((f.events[i][u] = a = [{ func: n, scope: r }]),
                      (a.fakeName = s),
                      (a.capture = l),
                      (a.nativeHandler = c),
                      "ready" === u
                        ? (function (e, t, n) {
                            var r,
                              o = e.document,
                              i = { type: "ready" };
                            n.domLoaded
                              ? t(i)
                              : ((r = function () {
                                  co(e, "DOMContentLoaded", r),
                                    co(e, "load", r),
                                    n.domLoaded || ((n.domLoaded = !0), t(i)),
                                    (e = null);
                                }),
                                "complete" === o.readyState ||
                                ("interactive" === o.readyState && o.body)
                                  ? r()
                                  : so(e, "DOMContentLoaded", r),
                                n.domLoaded || so(e, "load", r));
                          })(e, c, f)
                        : so(e, s || u, c, l)));
          return (e = a = null), n;
        }
      }),
      (ci.prototype.unbind = function (n, e, t) {
        var r, o, i;
        if (!n || 3 === n.nodeType || 8 === n.nodeType) return this;
        var a = n[this.expando];
        if (a) {
          if (((i = this.events[a]), e)) {
            for (var u, s, c, l, f = e.split(" "), d = f.length; d--; )
              if ((l = i[(o = f[d])])) {
                if (t)
                  for (r = l.length; r--; )
                    l[r].func === t &&
                      ((u = l.nativeHandler),
                      (s = l.fakeName),
                      (c = l.capture),
                      ((l = l
                        .slice(0, r)
                        .concat(l.slice(r + 1))).nativeHandler = u),
                      (l.fakeName = s),
                      (l.capture = c),
                      (i[o] = l));
                (t && 0 !== l.length) ||
                  (delete i[o],
                  co(n, l.fakeName || o, l.nativeHandler, l.capture));
              }
          } else
            ne(i, function (e, t) {
              co(n, e.fakeName || t, e.nativeHandler, e.capture);
            }),
              (i = {});
          for (o in i) if (ke(i, o)) return this;
          delete this.events[a];
          try {
            delete n[this.expando];
          } catch (e) {
            n[this.expando] = null;
          }
        }
        return this;
      }),
      (ci.prototype.fire = function (e, t, n) {
        var r;
        if (!e || 3 === e.nodeType || 8 === e.nodeType) return this;
        for (
          var o = lo({ type: t, target: e }, n);
          (r = e[this.expando]) && this.executeHandlers(o, r),
            (e =
              e.parentNode ||
              e.ownerDocument ||
              e.defaultView ||
              e.parentWindow) && !o.isPropagationStopped();

        );
        return this;
      }),
      (ci.prototype.clean = function (e) {
        var t, n;
        if (!e || 3 === e.nodeType || 8 === e.nodeType) return this;
        if (
          (e[this.expando] && this.unbind(e),
          (e = e.getElementsByTagName ? e : e.document) &&
            e.getElementsByTagName)
        )
          for (
            this.unbind(e), t = (n = e.getElementsByTagName("*")).length;
            t--;

          )
            (e = n[t])[this.expando] && this.unbind(e);
        return this;
      }),
      (ci.prototype.destroy = function () {
        this.events = {};
      }),
      (ci.prototype.cancel = function (e) {
        return e && (e.preventDefault(), e.stopImmediatePropagation()), !1;
      }),
      (ci.prototype.executeHandlers = function (e, t) {
        var n = this.events[t],
          r = n && n[e.type];
        if (r)
          for (var o = 0, i = r.length; o < i; o++) {
            var a = r[o];
            if (
              (a && !1 === a.func.call(a.scope, e) && e.preventDefault(),
              e.isImmediatePropagationStopped())
            )
              return;
          }
      }),
      (ci.Event = new ci()),
      ci);
  function ci() {
    (this.domLoaded = !1),
      (this.events = {}),
      (this.count = 1),
      (this.expando = "mce-data-" + (+new Date()).toString(32)),
      (this.hasMouseEnterLeave = "onmouseenter" in document.documentElement),
      (this.hasFocusIn = "onfocusin" in document.documentElement),
      (this.count = 1);
  }
  function li(e, t, n) {
    var r = "0x" + t - 65536;
    return r != r || n
      ? t
      : r < 0
      ? String.fromCharCode(65536 + r)
      : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
  }
  var fi,
    di,
    mi,
    gi,
    pi,
    hi,
    vi,
    bi,
    yi,
    Ci,
    xi,
    wi,
    Si,
    Ei,
    ki,
    Ni,
    _i,
    Ai = "sizzle" + -new Date(),
    Ri = window.document,
    Di = 0,
    Ti = 0,
    Oi = ca(),
    Bi = ca(),
    Pi = ca(),
    Li = function (e, t) {
      return e === t && (Ci = !0), 0;
    },
    Ii = "undefined",
    Mi = {}.hasOwnProperty,
    Fi = [],
    Ui = Fi.pop,
    zi = Fi.push,
    Hi = Fi.push,
    ji = Fi.slice,
    Vi =
      Fi.indexOf ||
      function (e) {
        for (var t = 0, n = this.length; t < n; t++)
          if (this[t] === e) return t;
        return -1;
      },
    qi = "[\\x20\\t\\r\\n\\f]",
    $i = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
    Wi =
      "\\[" +
      qi +
      "*(" +
      $i +
      ")(?:" +
      qi +
      "*([*^$|!~]?=)" +
      qi +
      "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
      $i +
      "))|)" +
      qi +
      "*\\]",
    Ki =
      ":(" +
      $i +
      ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
      Wi +
      ")*)|.*)\\)|)",
    Xi = new RegExp("^" + qi + "+|((?:^|[^\\\\])(?:\\\\.)*)" + qi + "+$", "g"),
    Yi = new RegExp("^" + qi + "*," + qi + "*"),
    Gi = new RegExp("^" + qi + "*([>+~]|" + qi + ")" + qi + "*"),
    Ji = new RegExp("=" + qi + "*([^\\]'\"]*?)" + qi + "*\\]", "g"),
    Qi = new RegExp(Ki),
    Zi = new RegExp("^" + $i + "$"),
    ea = {
      ID: new RegExp("^#(" + $i + ")"),
      CLASS: new RegExp("^\\.(" + $i + ")"),
      TAG: new RegExp("^(" + $i + "|[*])"),
      ATTR: new RegExp("^" + Wi),
      PSEUDO: new RegExp("^" + Ki),
      CHILD: new RegExp(
        "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
          qi +
          "*(even|odd|(([+-]|)(\\d*)n|)" +
          qi +
          "*(?:([+-]|)" +
          qi +
          "*(\\d+)|))" +
          qi +
          "*\\)|)",
        "i"
      ),
      bool: new RegExp(
        "^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$",
        "i"
      ),
      needsContext: new RegExp(
        "^" +
          qi +
          "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
          qi +
          "*((?:-\\d)?\\d*)" +
          qi +
          "*\\)|)(?=[^-]|$)",
        "i"
      ),
    },
    ta = /^(?:input|select|textarea|button)$/i,
    na = /^h\d$/i,
    ra = /^[^{]+\{\s*\[native \w/,
    oa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
    ia = /[+~]/,
    aa = /'|\\/g,
    ua = new RegExp("\\\\([\\da-f]{1,6}" + qi + "?|(" + qi + ")|.)", "ig");
  try {
    Hi.apply((Fi = ji.call(Ri.childNodes)), Ri.childNodes),
      Fi[Ri.childNodes.length].nodeType;
  } catch (e) {
    Hi = {
      apply: Fi.length
        ? function (e, t) {
            zi.apply(e, ji.call(t));
          }
        : function (e, t) {
            for (var n = e.length, r = 0; (e[n++] = t[r++]); );
            e.length = n - 1;
          },
    };
  }
  var sa = function (e, t, n, r) {
    var o, i, a, u, s, c, l, f, d, m;
    if (
      ((t ? t.ownerDocument || t : Ri) !== wi && xi(t),
      (n = n || []),
      !e || "string" != typeof e)
    )
      return n;
    if (1 !== (u = (t = t || wi).nodeType) && 9 !== u) return [];
    if (Ei && !r) {
      if ((o = oa.exec(e)))
        if ((a = o[1])) {
          if (9 === u) {
            if (!(i = t.getElementById(a)) || !i.parentNode) return n;
            if (i.id === a) return n.push(i), n;
          } else if (
            t.ownerDocument &&
            (i = t.ownerDocument.getElementById(a)) &&
            _i(t, i) &&
            i.id === a
          )
            return n.push(i), n;
        } else {
          if (o[2]) return Hi.apply(n, t.getElementsByTagName(e)), n;
          if ((a = o[3]) && fi.getElementsByClassName)
            return Hi.apply(n, t.getElementsByClassName(a)), n;
        }
      if (fi.qsa && (!ki || !ki.test(e))) {
        if (
          ((f = l = Ai),
          (d = t),
          (m = 9 === u && e),
          1 === u && "object" !== t.nodeName.toLowerCase())
        ) {
          for (
            c = pi(e),
              (l = t.getAttribute("id"))
                ? (f = l.replace(aa, "\\$&"))
                : t.setAttribute("id", f),
              f = "[id='" + f + "'] ",
              s = c.length;
            s--;

          )
            c[s] = f + pa(c[s]);
          (d = (ia.test(e) && ma(t.parentNode)) || t), (m = c.join(","));
        }
        if (m)
          try {
            return Hi.apply(n, d.querySelectorAll(m)), n;
          } catch (e) {
          } finally {
            l || t.removeAttribute("id");
          }
      }
    }
    return vi(e.replace(Xi, "$1"), t, n, r);
  };
  function ca() {
    var n = [];
    function r(e, t) {
      return (
        n.push(e + " ") > di.cacheLength && delete r[n.shift()],
        (r[e + " "] = t)
      );
    }
    return r;
  }
  function la(e) {
    return (e[Ai] = !0), e;
  }
  function fa(e, t) {
    var n = t && e,
      r =
        n &&
        1 === e.nodeType &&
        1 === t.nodeType &&
        (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
    if (r) return r;
    if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
    return e ? 1 : -1;
  }
  function da(a) {
    return la(function (i) {
      return (
        (i = +i),
        la(function (e, t) {
          for (var n, r = a([], e.length, i), o = r.length; o--; )
            e[(n = r[o])] && (e[n] = !(t[n] = e[n]));
        })
      );
    });
  }
  function ma(e) {
    return e && typeof e.getElementsByTagName != Ii && e;
  }
  function ga() {}
  function pa(e) {
    for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
    return r;
  }
  function ha(a, e, t) {
    var u = e.dir,
      s = t && "parentNode" === u,
      c = Ti++;
    return e.first
      ? function (e, t, n) {
          for (; (e = e[u]); ) if (1 === e.nodeType || s) return a(e, t, n);
        }
      : function (e, t, n) {
          var r,
            o,
            i = [Di, c];
          if (n) {
            for (; (e = e[u]); )
              if ((1 === e.nodeType || s) && a(e, t, n)) return !0;
          } else
            for (; (e = e[u]); )
              if (1 === e.nodeType || s) {
                if (
                  (r = (o = e[Ai] || (e[Ai] = {}))[u]) &&
                  r[0] === Di &&
                  r[1] === c
                )
                  return (i[2] = r[2]);
                if (((o[u] = i)[2] = a(e, t, n))) return !0;
              }
        };
  }
  function va(o) {
    return 1 < o.length
      ? function (e, t, n) {
          for (var r = o.length; r--; ) if (!o[r](e, t, n)) return !1;
          return !0;
        }
      : o[0];
  }
  function ba(e, t, n, r, o) {
    for (var i, a = [], u = 0, s = e.length, c = null != t; u < s; u++)
      (i = e[u]) && ((n && !n(i, r, o)) || (a.push(i), c && t.push(u)));
    return a;
  }
  function ya(e) {
    return void 0 !== e;
  }
  function Ca(e) {
    return "string" == typeof e;
  }
  function xa(e, t) {
    var n,
      r = (t = t || Aa).createElement("div"),
      o = t.createDocumentFragment();
    for (r.innerHTML = e; (n = r.firstChild); ) o.appendChild(n);
    return o;
  }
  function wa(e, t) {
    return e && t && -1 !== (" " + e.className + " ").indexOf(" " + t + " ");
  }
  function Sa(e, t, n) {
    var r, o;
    return (
      (t = Xa(t)[0]),
      e.each(function () {
        (n && r === this.parentNode) ||
          ((r = this.parentNode),
          (o = t.cloneNode(!1)),
          this.parentNode.insertBefore(o, this)),
          o.appendChild(this);
      }),
      e
    );
  }
  function Ea(e, t) {
    return new Xa.fn.init(e, t);
  }
  function ka(e) {
    return null == e ? "" : ("" + e).replace(Ha, "");
  }
  function Na(e, t) {
    var n, r, o, i;
    if (e)
      if (void 0 === (n = e.length)) {
        for (r in e)
          if (e.hasOwnProperty(r) && ((i = e[r]), !1 === t.call(i, r, i)))
            break;
      } else for (o = 0; o < n && ((i = e[o]), !1 !== t.call(i, o, i)); o++);
    return e;
  }
  function _a(e, n) {
    var r = [];
    return (
      Na(e, function (e, t) {
        n(t, e) && r.push(t);
      }),
      r
    );
  }
  (fi = sa.support = {}),
    (gi = sa.isXML =
      function (e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && "HTML" !== t.nodeName;
      }),
    (xi = sa.setDocument =
      function (e) {
        var t,
          s = e ? e.ownerDocument || e : Ri,
          n = s.defaultView;
        return s !== wi && 9 === s.nodeType && s.documentElement
          ? ((Si = (wi = s).documentElement),
            (Ei = !gi(s)),
            n &&
              n !==
                (function (e) {
                  try {
                    return e.top;
                  } catch (e) {}
                  return null;
                })(n) &&
              (n.addEventListener
                ? n.addEventListener(
                    "unload",
                    function () {
                      xi();
                    },
                    !1
                  )
                : n.attachEvent &&
                  n.attachEvent("onunload", function () {
                    xi();
                  })),
            (fi.attributes = !0),
            (fi.getElementsByTagName = !0),
            (fi.getElementsByClassName = ra.test(s.getElementsByClassName)),
            (fi.getById = !0),
            (di.find.ID = function (e, t) {
              if (typeof t.getElementById != Ii && Ei) {
                var n = t.getElementById(e);
                return n && n.parentNode ? [n] : [];
              }
            }),
            (di.filter.ID = function (e) {
              var t = e.replace(ua, li);
              return function (e) {
                return e.getAttribute("id") === t;
              };
            }),
            (di.find.TAG = fi.getElementsByTagName
              ? function (e, t) {
                  if (typeof t.getElementsByTagName != Ii)
                    return t.getElementsByTagName(e);
                }
              : function (e, t) {
                  var n,
                    r = [],
                    o = 0,
                    i = t.getElementsByTagName(e);
                  if ("*" !== e) return i;
                  for (; (n = i[o++]); ) 1 === n.nodeType && r.push(n);
                  return r;
                }),
            (di.find.CLASS =
              fi.getElementsByClassName &&
              function (e, t) {
                if (Ei) return t.getElementsByClassName(e);
              }),
            (Ni = []),
            (ki = []),
            (fi.disconnectedMatch = !0),
            (ki = ki.length && new RegExp(ki.join("|"))),
            (Ni = Ni.length && new RegExp(Ni.join("|"))),
            (t = ra.test(Si.compareDocumentPosition)),
            (_i =
              t || ra.test(Si.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (Li = t
              ? function (e, t) {
                  return e === t
                    ? ((Ci = !0), 0)
                    : (n =
                        !e.compareDocumentPosition -
                        !t.compareDocumentPosition) ||
                        (1 &
                          (n =
                            (e.ownerDocument || e) === (t.ownerDocument || t)
                              ? e.compareDocumentPosition(t)
                              : 1) ||
                        (!fi.sortDetached && t.compareDocumentPosition(e) === n)
                          ? e === s || (e.ownerDocument === Ri && _i(Ri, e))
                            ? -1
                            : t === s || (t.ownerDocument === Ri && _i(Ri, t))
                            ? 1
                            : yi
                            ? Vi.call(yi, e) - Vi.call(yi, t)
                            : 0
                          : 4 & n
                          ? -1
                          : 1);
                  var n;
                }
              : function (e, t) {
                  if (e === t) return (Ci = !0), 0;
                  var n,
                    r = 0,
                    o = e.parentNode,
                    i = t.parentNode,
                    a = [e],
                    u = [t];
                  if (!o || !i)
                    return e === s
                      ? -1
                      : t === s
                      ? 1
                      : o
                      ? -1
                      : i
                      ? 1
                      : yi
                      ? Vi.call(yi, e) - Vi.call(yi, t)
                      : 0;
                  if (o === i) return fa(e, t);
                  for (n = e; (n = n.parentNode); ) a.unshift(n);
                  for (n = t; (n = n.parentNode); ) u.unshift(n);
                  for (; a[r] === u[r]; ) r++;
                  return r
                    ? fa(a[r], u[r])
                    : a[r] === Ri
                    ? -1
                    : u[r] === Ri
                    ? 1
                    : 0;
                }),
            s)
          : wi;
      }),
    (sa.matches = function (e, t) {
      return sa(e, null, null, t);
    }),
    (sa.matchesSelector = function (e, t) {
      if (
        ((e.ownerDocument || e) !== wi && xi(e),
        (t = t.replace(Ji, "='$1']")),
        fi.matchesSelector &&
          Ei &&
          (!Ni || !Ni.test(t)) &&
          (!ki || !ki.test(t)))
      )
        try {
          var n = (void 0).call(e, t);
          if (
            n ||
            fi.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {}
      return 0 < sa(t, wi, null, [e]).length;
    }),
    (sa.contains = function (e, t) {
      return (e.ownerDocument || e) !== wi && xi(e), _i(e, t);
    }),
    (sa.attr = function (e, t) {
      (e.ownerDocument || e) !== wi && xi(e);
      var n = di.attrHandle[t.toLowerCase()],
        r =
          n && Mi.call(di.attrHandle, t.toLowerCase()) ? n(e, t, !Ei) : void 0;
      return void 0 !== r
        ? r
        : fi.attributes || !Ei
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (sa.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (sa.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        o = 0;
      if (
        ((Ci = !fi.detectDuplicates),
        (yi = !fi.sortStable && e.slice(0)),
        e.sort(Li),
        Ci)
      ) {
        for (; (t = e[o++]); ) t === e[o] && (r = n.push(o));
        for (; r--; ) e.splice(n[r], 1);
      }
      return (yi = null), e;
    }),
    (mi = sa.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          o = e.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += mi(e);
          } else if (3 === o || 4 === o) return e.nodeValue;
        } else for (; (t = e[r++]); ) n += mi(t);
        return n;
      }),
    ((di = sa.selectors =
      {
        cacheLength: 50,
        createPseudo: la,
        match: ea,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(ua, li)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(ua, li)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || sa.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && sa.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return ea.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    Qi.test(n) &&
                    (t = pi(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(ua, li).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = Oi[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + qi + ")" + e + "(" + qi + "|$)")) &&
                Oi(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      (typeof e.getAttribute != Ii &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, o) {
            return function (e) {
              var t = sa.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === o
                      : "!=" === r
                      ? t !== o
                      : "^=" === r
                      ? o && 0 === t.indexOf(o)
                      : "*=" === r
                      ? o && -1 < t.indexOf(o)
                      : "$=" === r
                      ? o && t.slice(-o.length) === o
                      : "~=" === r
                      ? -1 < (" " + t + " ").indexOf(o)
                      : "|=" === r &&
                        (t === o || t.slice(0, o.length + 1) === o + "-"));
            };
          },
          CHILD: function (m, e, t, g, p) {
            var h = "nth" !== m.slice(0, 3),
              v = "last" !== m.slice(-4),
              b = "of-type" === e;
            return 1 === g && 0 === p
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    o,
                    i,
                    a,
                    u,
                    s,
                    c = h != v ? "nextSibling" : "previousSibling",
                    l = e.parentNode,
                    f = b && e.nodeName.toLowerCase(),
                    d = !n && !b;
                  if (l) {
                    if (h) {
                      for (; c; ) {
                        for (i = e; (i = i[c]); )
                          if (
                            b
                              ? i.nodeName.toLowerCase() === f
                              : 1 === i.nodeType
                          )
                            return !1;
                        s = c = "only" === m && !s && "nextSibling";
                      }
                      return !0;
                    }
                    if (((s = [v ? l.firstChild : l.lastChild]), v && d)) {
                      for (
                        u =
                          (r = (o = l[Ai] || (l[Ai] = {}))[m] || [])[0] ===
                            Di && r[1],
                          a = r[0] === Di && r[2],
                          i = u && l.childNodes[u];
                        (i = (++u && i && i[c]) || (a = u = 0) || s.pop());

                      )
                        if (1 === i.nodeType && ++a && i === e) {
                          o[m] = [Di, u, a];
                          break;
                        }
                    } else if (
                      d &&
                      (r = (e[Ai] || (e[Ai] = {}))[m]) &&
                      r[0] === Di
                    )
                      a = r[1];
                    else
                      for (
                        ;
                        (i = (++u && i && i[c]) || (a = u = 0) || s.pop()) &&
                        ((b
                          ? i.nodeName.toLowerCase() !== f
                          : 1 !== i.nodeType) ||
                          !++a ||
                          (d && ((i[Ai] || (i[Ai] = {}))[m] = [Di, a]),
                          i !== e));

                      );
                    return (a -= p) === g || (a % g == 0 && 0 <= a / g);
                  }
                };
          },
          PSEUDO: function (e, i) {
            var t,
              a =
                di.pseudos[e] ||
                di.setFilters[e.toLowerCase()] ||
                sa.error("unsupported pseudo: " + e);
            return a[Ai]
              ? a(i)
              : 1 < a.length
              ? ((t = [e, e, "", i]),
                di.setFilters.hasOwnProperty(e.toLowerCase())
                  ? la(function (e, t) {
                      for (var n, r = a(e, i), o = r.length; o--; )
                        e[(n = Vi.call(e, r[o]))] = !(t[n] = r[o]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: la(function (e) {
            var r = [],
              o = [],
              u = hi(e.replace(Xi, "$1"));
            return u[Ai]
              ? la(function (e, t, n, r) {
                  for (var o, i = u(e, null, r, []), a = e.length; a--; )
                    (o = i[a]) && (e[a] = !(t[a] = o));
                })
              : function (e, t, n) {
                  return (r[0] = e), u(r, null, n, o), (r[0] = null), !o.pop();
                };
          }),
          has: la(function (t) {
            return function (e) {
              return 0 < sa(t, e).length;
            };
          }),
          contains: la(function (t) {
            return (
              (t = t.replace(ua, li)),
              function (e) {
                return -1 < (e.textContent || e.innerText || mi(e)).indexOf(t);
              }
            );
          }),
          lang: la(function (n) {
            return (
              Zi.test(n || "") || sa.error("unsupported lang: " + n),
              (n = n.replace(ua, li).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = Ei
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = window.location && window.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === Si;
          },
          focus: function (e) {
            return (
              e === wi.activeElement &&
              (!wi.hasFocus || wi.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: function (e) {
            return !1 === e.disabled;
          },
          disabled: function (e) {
            return !0 === e.disabled;
          },
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !di.pseudos.empty(e);
          },
          header: function (e) {
            return na.test(e.nodeName);
          },
          input: function (e) {
            return ta.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: da(function () {
            return [0];
          }),
          last: da(function (e, t) {
            return [t - 1];
          }),
          eq: da(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: da(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: da(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: da(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: da(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = di.pseudos.eq),
    Y(["radio", "checkbox", "file", "password", "image"], function (e) {
      var t;
      di.pseudos[e] =
        ((t = e),
        function (e) {
          return "input" === e.nodeName.toLowerCase() && e.type === t;
        });
    }),
    Y(["submit", "reset"], function (e) {
      var n;
      di.pseudos[e] =
        ((n = e),
        function (e) {
          var t = e.nodeName.toLowerCase();
          return ("input" === t || "button" === t) && e.type === n;
        });
    }),
    (ga.prototype = di.filters = di.pseudos),
    (di.setFilters = new ga()),
    (pi = sa.tokenize =
      function (e, t) {
        var n,
          r,
          o,
          i,
          a,
          u,
          s,
          c = Bi[e + " "];
        if (c) return t ? 0 : c.slice(0);
        for (a = e, u = [], s = di.preFilter; a; ) {
          for (i in ((n && !(r = Yi.exec(a))) ||
            (r && (a = a.slice(r[0].length) || a), u.push((o = []))),
          (n = !1),
          (r = Gi.exec(a)) &&
            ((n = r.shift()),
            o.push({ value: n, type: r[0].replace(Xi, " ") }),
            (a = a.slice(n.length))),
          di.filter))
            di.filter.hasOwnProperty(i) &&
              (!(r = ea[i].exec(a)) ||
                (s[i] && !(r = s[i](r))) ||
                ((n = r.shift()),
                o.push({ value: n, type: i, matches: r }),
                (a = a.slice(n.length))));
          if (!n) break;
        }
        return t ? a.length : a ? sa.error(e) : Bi(e, u).slice(0);
      }),
    (hi = sa.compile =
      function (e, t) {
        var n,
          h,
          v,
          b,
          y,
          r = [],
          o = [],
          i = Pi[e + " "];
        if (!i) {
          for (n = (t = t || pi(e)).length; n--; )
            ((i = (function e(t) {
              for (
                var o,
                  n,
                  r,
                  i = t.length,
                  a = di.relative[t[0].type],
                  u = a || di.relative[" "],
                  s = a ? 1 : 0,
                  c = ha(
                    function (e) {
                      return e === o;
                    },
                    u,
                    !0
                  ),
                  l = ha(
                    function (e) {
                      return -1 < Vi.call(o, e);
                    },
                    u,
                    !0
                  ),
                  f = [
                    function (e, t, n) {
                      var r =
                        (!a && (n || t !== bi)) ||
                        ((o = t).nodeType ? c : l)(e, t, n);
                      return (o = null), r;
                    },
                  ];
                s < i;
                s++
              )
                if ((n = di.relative[t[s].type])) f = [ha(va(f), n)];
                else {
                  if (
                    (n = di.filter[t[s].type].apply(null, t[s].matches))[Ai]
                  ) {
                    for (r = ++s; r < i && !di.relative[t[r].type]; r++);
                    return (function e(m, g, p, h, v, t) {
                      return (
                        h && !h[Ai] && (h = e(h)),
                        v && !v[Ai] && (v = e(v, t)),
                        la(function (e, t, n, r) {
                          var o,
                            i,
                            a,
                            u = [],
                            s = [],
                            c = t.length,
                            l =
                              e ||
                              (function (e, t, n) {
                                for (var r = 0, o = t.length; r < o; r++)
                                  sa(e, t[r], n);
                                return n;
                              })(g || "*", n.nodeType ? [n] : n, []),
                            f = !m || (!e && g) ? l : ba(l, u, m, n, r),
                            d = p ? (v || (e ? m : c || h) ? [] : t) : f;
                          if ((p && p(f, d, n, r), h))
                            for (
                              o = ba(d, s), h(o, [], n, r), i = o.length;
                              i--;

                            )
                              (a = o[i]) && (d[s[i]] = !(f[s[i]] = a));
                          if (e) {
                            if (v || m) {
                              if (v) {
                                for (o = [], i = d.length; i--; )
                                  (a = d[i]) && o.push((f[i] = a));
                                v(null, (d = []), o, r);
                              }
                              for (i = d.length; i--; )
                                (a = d[i]) &&
                                  -1 < (o = v ? Vi.call(e, a) : u[i]) &&
                                  (e[o] = !(t[o] = a));
                            }
                          } else (d = ba(d === t ? d.splice(c, d.length) : d)), v ? v(null, t, d, r) : Hi.apply(t, d);
                        })
                      );
                    })(
                      1 < s && va(f),
                      1 < s &&
                        pa(
                          t
                            .slice(0, s - 1)
                            .concat({ value: " " === t[s - 2].type ? "*" : "" })
                        ).replace(Xi, "$1"),
                      n,
                      s < r && e(t.slice(s, r)),
                      r < i && e((t = t.slice(r))),
                      r < i && pa(t)
                    );
                  }
                  f.push(n);
                }
              return va(f);
            })(t[n]))[Ai]
              ? r
              : o
            ).push(i);
          (i = Pi(
            e,
            ((h = o),
            (b = 0 < (v = r).length),
            (y = 0 < h.length),
            b ? la(a) : a)
          )).selector = e;
        }
        function a(e, t, n, r, o) {
          var i,
            a,
            u,
            s = 0,
            c = "0",
            l = e && [],
            f = [],
            d = bi,
            m = e || (y && di.find.TAG("*", o)),
            g = (Di += null == d ? 1 : Math.random() || 0.1),
            p = m.length;
          for (o && (bi = t !== wi && t); c !== p && null != (i = m[c]); c++) {
            if (y && i) {
              for (a = 0; (u = h[a++]); )
                if (u(i, t, n)) {
                  r.push(i);
                  break;
                }
              o && (Di = g);
            }
            b && ((i = !u && i) && s--, e && l.push(i));
          }
          if (((s += c), b && c !== s)) {
            for (a = 0; (u = v[a++]); ) u(l, f, t, n);
            if (e) {
              if (0 < s) for (; c--; ) l[c] || f[c] || (f[c] = Ui.call(r));
              f = ba(f);
            }
            Hi.apply(r, f),
              o && !e && 0 < f.length && 1 < s + v.length && sa.uniqueSort(r);
          }
          return o && ((Di = g), (bi = d)), l;
        }
        return i;
      }),
    (vi = sa.select =
      function (e, t, n, r) {
        var o,
          i,
          a,
          u,
          s,
          c = "function" == typeof e && e,
          l = !r && pi((e = c.selector || e));
        if (((n = n || []), 1 === l.length)) {
          if (
            2 < (i = l[0] = l[0].slice(0)).length &&
            "ID" === (a = i[0]).type &&
            fi.getById &&
            9 === t.nodeType &&
            Ei &&
            di.relative[i[1].type]
          ) {
            if (!(t = (di.find.ID(a.matches[0].replace(ua, li), t) || [])[0]))
              return n;
            c && (t = t.parentNode), (e = e.slice(i.shift().value.length));
          }
          for (
            o = ea.needsContext.test(e) ? 0 : i.length;
            o-- && ((a = i[o]), !di.relative[(u = a.type)]);

          )
            if (
              (s = di.find[u]) &&
              (r = s(
                a.matches[0].replace(ua, li),
                (ia.test(i[0].type) && ma(t.parentNode)) || t
              ))
            ) {
              if ((i.splice(o, 1), !(e = r.length && pa(i))))
                return Hi.apply(n, r), n;
              break;
            }
        }
        return (
          (c || hi(e, l))(r, t, !Ei, n, (ia.test(e) && ma(t.parentNode)) || t),
          n
        );
      }),
    (fi.sortStable = Ai.split("").sort(Li).join("") === Ai),
    (fi.detectDuplicates = !!Ci),
    xi(),
    (fi.sortDetached = !0);
  var Aa = document,
    Ra = Array.prototype.push,
    Da = Array.prototype.slice,
    Ta = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
    Oa = si.Event,
    Ba = Et.makeMap("children,contents,next,prev"),
    Pa = function (e, t, n, r) {
      var o;
      if (Ca(t)) t = xa(t, ja(e[0]));
      else if (t.length && !t.nodeType) {
        if (((t = Xa.makeArray(t)), r))
          for (o = t.length - 1; 0 <= o; o--) Pa(e, t[o], n, r);
        else for (o = 0; o < t.length; o++) Pa(e, t[o], n, r);
        return e;
      }
      if (t.nodeType) for (o = e.length; o--; ) n.call(e[o], t);
      return e;
    },
    La = Et.makeMap(
      "fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom",
      " "
    ),
    Ia = Et.makeMap(
      "checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected",
      " "
    ),
    Ma = { for: "htmlFor", class: "className", readonly: "readOnly" },
    Fa = { float: "cssFloat" },
    Ua = {},
    za = {},
    Ha = /^\s*|\s*$/g,
    ja = function (e) {
      return e ? (9 === e.nodeType ? e : e.ownerDocument) : Aa;
    };
  function Va(e, t, n) {
    var r = [],
      o = e[t];
    for (
      "string" != typeof n && n instanceof Xa && (n = n[0]);
      o && 9 !== o.nodeType;

    ) {
      if (void 0 !== n) {
        if (o === n) break;
        if ("string" == typeof n && Xa(o).is(n)) break;
      }
      1 === o.nodeType && r.push(o), (o = o[t]);
    }
    return r;
  }
  function qa(e, t, n, r) {
    var o = [];
    for (r instanceof Xa && (r = r[0]); e; e = e[t])
      if (!n || e.nodeType === n) {
        if (void 0 !== r) {
          if (e === r) break;
          if ("string" == typeof r && Xa(e).is(r)) break;
        }
        o.push(e);
      }
    return o;
  }
  function $a(e, t, n) {
    for (e = e[t]; e; e = e[t]) if (e.nodeType === n) return e;
    return null;
  }
  function Wa(e, t) {
    var n = t.attr("style"),
      r = e.serialize(e.parse(n), t[0].nodeName) || null;
    t.attr("data-mce-style", r);
  }
  function Ka(e, t) {
    var n,
      r,
      o = 0;
    if (e)
      for (n = e.nodeType, e = e.previousSibling; e; e = e.previousSibling)
        (r = e.nodeType),
          (!t || 3 !== r || (r !== n && e.nodeValue.length)) && (o++, (n = r));
    return o;
  }
  (Ea.fn = Ea.prototype =
    {
      constructor: Ea,
      selector: "",
      context: null,
      length: 0,
      init: function (e, t) {
        var n,
          r,
          o = this;
        if (!e) return o;
        if (e.nodeType) return (o.context = o[0] = e), (o.length = 1), o;
        if (t && t.nodeType) o.context = t;
        else {
          if (t) return Xa(e).attr(t);
          o.context = t = document;
        }
        if (Ca(e)) {
          if (
            !(n =
              "<" === (o.selector = e).charAt(0) &&
              ">" === e.charAt(e.length - 1) &&
              3 <= e.length
                ? [null, e, null]
                : Ta.exec(e))
          )
            return Xa(t).find(e);
          if (n[1])
            for (r = xa(e, ja(t)).firstChild; r; )
              Ra.call(o, r), (r = r.nextSibling);
          else {
            if (!(r = ja(t).getElementById(n[2]))) return o;
            if (r.id !== n[2]) return o.find(e);
            (o.length = 1), (o[0] = r);
          }
        } else this.add(e, !1);
        return o;
      },
      toArray: function () {
        return Et.toArray(this);
      },
      add: function (e, t) {
        var n, r;
        if (Ca(e)) return this.add(Xa(e));
        if (!1 !== t)
          for (
            n = Xa.unique(this.toArray().concat(Xa.makeArray(e))),
              this.length = n.length,
              r = 0;
            r < n.length;
            r++
          )
            this[r] = n[r];
        else Ra.apply(this, Xa.makeArray(e));
        return this;
      },
      attr: function (t, n) {
        var e,
          r = this;
        if ("object" == typeof t)
          Na(t, function (e, t) {
            r.attr(e, t);
          });
        else {
          if (!ya(n)) {
            if (r[0] && 1 === r[0].nodeType) {
              if ((e = Ua[t]) && e.get) return e.get(r[0], t);
              if (Ia[t]) return r.prop(t) ? t : void 0;
              null === (n = r[0].getAttribute(t, 2)) && (n = void 0);
            }
            return n;
          }
          this.each(function () {
            var e;
            1 === this.nodeType &&
              ((e = Ua[t]) && e.set
                ? e.set(this, n)
                : null === n
                ? this.removeAttribute(t, 2)
                : this.setAttribute(t, n, 2));
          });
        }
        return r;
      },
      removeAttr: function (e) {
        return this.attr(e, null);
      },
      prop: function (e, t) {
        var n = this;
        if ("object" == typeof (e = Ma[e] || e))
          Na(e, function (e, t) {
            n.prop(e, t);
          });
        else {
          if (!ya(t)) return n[0] && n[0].nodeType && e in n[0] ? n[0][e] : t;
          this.each(function () {
            1 === this.nodeType && (this[e] = t);
          });
        }
        return n;
      },
      css: function (t, n) {
        function e(e) {
          return e.replace(/-(\D)/g, function (e, t) {
            return t.toUpperCase();
          });
        }
        function r(e) {
          return e.replace(/[A-Z]/g, function (e) {
            return "-" + e;
          });
        }
        var o,
          i,
          a = this;
        if ("object" == typeof t)
          Na(t, function (e, t) {
            a.css(e, t);
          });
        else if (ya(n))
          (t = e(t)),
            "number" != typeof n || La[t] || (n = n.toString() + "px"),
            a.each(function () {
              var e = this.style;
              if ((i = za[t]) && i.set) i.set(this, n);
              else {
                try {
                  this.style[Fa[t] || t] = n;
                } catch (e) {}
                (null !== n && "" !== n) ||
                  (e.removeProperty
                    ? e.removeProperty(r(t))
                    : e.removeAttribute(t));
              }
            });
        else {
          if (((o = a[0]), (i = za[t]) && i.get)) return i.get(o);
          if (!o.ownerDocument.defaultView)
            return o.currentStyle ? o.currentStyle[e(t)] : "";
          try {
            return o.ownerDocument.defaultView
              .getComputedStyle(o, null)
              .getPropertyValue(r(t));
          } catch (e) {
            return;
          }
        }
        return a;
      },
      remove: function () {
        for (var e, t = this.length; t--; )
          (e = this[t]),
            Oa.clean(e),
            e.parentNode && e.parentNode.removeChild(e);
        return this;
      },
      empty: function () {
        for (var e, t = this.length; t--; )
          for (e = this[t]; e.firstChild; ) e.removeChild(e.firstChild);
        return this;
      },
      html: function (t) {
        var n;
        if (ya(t)) {
          n = this.length;
          try {
            for (; n--; ) this[n].innerHTML = t;
          } catch (e) {
            Xa(this[n]).empty().append(t);
          }
          return this;
        }
        return this[0] ? this[0].innerHTML : "";
      },
      text: function (e) {
        var t;
        if (ya(e)) {
          for (t = this.length; t--; )
            "innerText" in this[t]
              ? (this[t].innerText = e)
              : (this[0].textContent = e);
          return this;
        }
        return this[0] ? this[0].innerText || this[0].textContent : "";
      },
      append: function () {
        return Pa(this, arguments, function (e) {
          (1 === this.nodeType || (this.host && 1 === this.host.nodeType)) &&
            this.appendChild(e);
        });
      },
      prepend: function () {
        return Pa(
          this,
          arguments,
          function (e) {
            (1 === this.nodeType || (this.host && 1 === this.host.nodeType)) &&
              this.insertBefore(e, this.firstChild);
          },
          !0
        );
      },
      before: function () {
        return this[0] && this[0].parentNode
          ? Pa(this, arguments, function (e) {
              this.parentNode.insertBefore(e, this);
            })
          : this;
      },
      after: function () {
        return this[0] && this[0].parentNode
          ? Pa(
              this,
              arguments,
              function (e) {
                this.parentNode.insertBefore(e, this.nextSibling);
              },
              !0
            )
          : this;
      },
      appendTo: function (e) {
        return Xa(e).append(this), this;
      },
      prependTo: function (e) {
        return Xa(e).prepend(this), this;
      },
      replaceWith: function (e) {
        return this.before(e).remove();
      },
      wrap: function (e) {
        return Sa(this, e);
      },
      wrapAll: function (e) {
        return Sa(this, e, !0);
      },
      wrapInner: function (e) {
        return (
          this.each(function () {
            Xa(this).contents().wrapAll(e);
          }),
          this
        );
      },
      unwrap: function () {
        return this.parent().each(function () {
          Xa(this).replaceWith(this.childNodes);
        });
      },
      clone: function () {
        var e = [];
        return (
          this.each(function () {
            e.push(this.cloneNode(!0));
          }),
          Xa(e)
        );
      },
      addClass: function (e) {
        return this.toggleClass(e, !0);
      },
      removeClass: function (e) {
        return this.toggleClass(e, !1);
      },
      toggleClass: function (o, i) {
        var e = this;
        return (
          "string" != typeof o ||
            (-1 !== o.indexOf(" ")
              ? Na(o.split(" "), function () {
                  e.toggleClass(this, i);
                })
              : e.each(function (e, t) {
                  var n,
                    r = wa(t, o);
                  r !== i &&
                    ((n = t.className),
                    r
                      ? (t.className = ka(
                          (" " + n + " ").replace(" " + o + " ", " ")
                        ))
                      : (t.className += n ? " " + o : o));
                })),
          e
        );
      },
      hasClass: function (e) {
        return wa(this[0], e);
      },
      each: function (e) {
        return Na(this, e);
      },
      on: function (e, t) {
        return this.each(function () {
          Oa.bind(this, e, t);
        });
      },
      off: function (e, t) {
        return this.each(function () {
          Oa.unbind(this, e, t);
        });
      },
      trigger: function (e) {
        return this.each(function () {
          "object" == typeof e ? Oa.fire(this, e.type, e) : Oa.fire(this, e);
        });
      },
      show: function () {
        return this.css("display", "");
      },
      hide: function () {
        return this.css("display", "none");
      },
      slice: function () {
        return Xa(Da.apply(this, arguments));
      },
      eq: function (e) {
        return -1 === e ? this.slice(e) : this.slice(e, +e + 1);
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      find: function (e) {
        for (var t = [], n = 0, r = this.length; n < r; n++)
          Xa.find(e, this[n], t);
        return Xa(t);
      },
      filter: function (n) {
        return Xa(
          "function" == typeof n
            ? _a(this.toArray(), function (e, t) {
                return n(t, e);
              })
            : Xa.filter(n, this.toArray())
        );
      },
      closest: function (n) {
        var r = [];
        return (
          n instanceof Xa && (n = n[0]),
          this.each(function (e, t) {
            for (; t; ) {
              if ("string" == typeof n && Xa(t).is(n)) {
                r.push(t);
                break;
              }
              if (t === n) {
                r.push(t);
                break;
              }
              t = t.parentNode;
            }
          }),
          Xa(r)
        );
      },
      offset: function (e) {
        var t,
          n,
          r,
          o,
          i = 0,
          a = 0;
        return e
          ? this.css(e)
          : ((t = this[0]) &&
              ((r = (n = t.ownerDocument).documentElement),
              t.getBoundingClientRect &&
                ((i =
                  (o = t.getBoundingClientRect()).left +
                  (r.scrollLeft || n.body.scrollLeft) -
                  r.clientLeft),
                (a = o.top + (r.scrollTop || n.body.scrollTop) - r.clientTop))),
            { left: i, top: a });
      },
      push: Ra,
      sort: Array.prototype.sort,
      splice: Array.prototype.splice,
    }),
    Et.extend(Ea, {
      extend: Et.extend,
      makeArray: function (e) {
        return (e && e === e.window) || e.nodeType ? [e] : Et.toArray(e);
      },
      inArray: function (e, t) {
        var n;
        if (t.indexOf) return t.indexOf(e);
        for (n = t.length; n--; ) if (t[n] === e) return n;
        return -1;
      },
      isArray: Et.isArray,
      each: Na,
      trim: ka,
      grep: _a,
      find: sa,
      expr: sa.selectors,
      unique: sa.uniqueSort,
      text: sa.getText,
      contains: sa.contains,
      filter: function (e, t, n) {
        var r = t.length;
        for (n && (e = ":not(" + e + ")"); r--; )
          1 !== t[r].nodeType && t.splice(r, 1);
        return 1 === t.length
          ? Xa.find.matchesSelector(t[0], e)
            ? [t[0]]
            : []
          : Xa.find.matches(e, t);
      },
    }),
    Na(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return Va(e, "parentNode");
        },
        next: function (e) {
          return $a(e, "nextSibling", 1);
        },
        prev: function (e) {
          return $a(e, "previousSibling", 1);
        },
        children: function (e) {
          return qa(e.firstChild, "nextSibling", 1);
        },
        contents: function (e) {
          return Et.toArray(
            ("iframe" === e.nodeName
              ? e.contentDocument || e.contentWindow.document
              : e
            ).childNodes
          );
        },
      },
      function (r, o) {
        Ea.fn[r] = function (t) {
          var n = [];
          this.each(function () {
            var e = o.call(n, this, t, n);
            e && (Xa.isArray(e) ? n.push.apply(n, e) : n.push(e));
          }),
            1 < this.length &&
              (Ba[r] || (n = Xa.unique(n)),
              0 === r.indexOf("parents") && (n = n.reverse()));
          var e = Xa(n);
          return t ? e.filter(t) : e;
        };
      }
    ),
    Na(
      {
        parentsUntil: function (e, t) {
          return Va(e, "parentNode", t);
        },
        nextUntil: function (e, t) {
          return qa(e, "nextSibling", 1, t).slice(1);
        },
        prevUntil: function (e, t) {
          return qa(e, "previousSibling", 1, t).slice(1);
        },
      },
      function (o, i) {
        Ea.fn[o] = function (t, e) {
          var n = [];
          this.each(function () {
            var e = i.call(n, this, t, n);
            e && (Xa.isArray(e) ? n.push.apply(n, e) : n.push(e));
          }),
            1 < this.length &&
              ((n = Xa.unique(n)),
              (0 !== o.indexOf("parents") && "prevUntil" !== o) ||
                (n = n.reverse()));
          var r = Xa(n);
          return e ? r.filter(e) : r;
        };
      }
    ),
    (Ea.fn.is = function (e) {
      return !!e && 0 < this.filter(e).length;
    }),
    (Ea.fn.init.prototype = Ea.fn),
    (Ea.overrideDefaults = function (n) {
      var r,
        o = function (e, t) {
          return (
            (r = r || n()),
            0 === arguments.length && (e = r.element),
            (t = t || r.context),
            new o.fn.init(e, t)
          );
        };
      return Xa.extend(o, this), o;
    }),
    (Ea.attrHooks = Ua),
    (Ea.cssHooks = za);
  var Xa = Ea,
    Ya = Et.each,
    Ga = Et.grep,
    Ja = xt.ie,
    Qa = /^([a-z0-9],?)+$/i,
    Za = function (a, u) {
      function s(e) {
        return e && a && X(e) ? a.getElementById(e) : e;
      }
      function c(e) {
        return H("string" == typeof e ? s(e) : e);
      }
      function r(e, t, n) {
        var r,
          o,
          i = c(e);
        return void 0 ===
          (o = i.length ? ((r = W[t]) && r.get ? r.get(i, t) : i.attr(t)) : o)
          ? n || ""
          : o;
      }
      function o(e) {
        var t = s(e);
        return t ? t.attributes : [];
      }
      function i(e, t, n) {
        "" === n && (n = null);
        var r,
          o = c(e),
          i = o.attr(t);
        o.length &&
          ((r = W[t]) && r.set ? r.set(o, n, t) : o.attr(t, n),
          i !== n &&
            u.onSetAttrib &&
            u.onSetAttrib({ attrElm: o, attrName: t, attrValue: n }));
      }
      function l() {
        return u.root_element || a.body;
      }
      function f(e, t) {
        return (function (e, t, n) {
          var r,
            o = 0,
            i = 0,
            a = e.ownerDocument;
          if (((n = n || e), t)) {
            if (
              n === e &&
              t.getBoundingClientRect &&
              "static" === xn(kt.fromDom(e), "position")
            ) {
              var u = t.getBoundingClientRect();
              return {
                x: (o =
                  u.left +
                  (a.documentElement.scrollLeft || e.scrollLeft) -
                  a.documentElement.clientLeft),
                y: (i =
                  u.top +
                  (a.documentElement.scrollTop || e.scrollTop) -
                  a.documentElement.clientTop),
              };
            }
            for (var s = t; s && s !== n && s.nodeType && !kn(s, n); ) {
              var c = s;
              (o += c.offsetLeft || 0),
                (i += c.offsetTop || 0),
                (s = c.offsetParent);
            }
            for (s = t.parentNode; s && s !== n && s.nodeType && !kn(s, n); )
              (o -= s.scrollLeft || 0),
                (i -= s.scrollTop || 0),
                (s = s.parentNode);
            i +=
              ((r = kt.fromDom(t)),
              Zn.isFirefox() && "table" === Nt(r)
                ? En(Dn(r))
                    .filter(function (e) {
                      return "caption" === Nt(e);
                    })
                    .bind(function (o) {
                      return En(It(o)).map(function (e) {
                        var t = e.dom.offsetTop,
                          n = o.dom.offsetTop,
                          r = o.dom.offsetHeight;
                        return t <= n ? -r : 0;
                      });
                    })
                    .getOr(0)
                : 0);
          }
          return { x: o, y: i };
        })(a.body, s(e), t);
      }
      function d(e, t, n) {
        var r = c(e);
        return n
          ? r.css(t)
          : ("float" ===
              (t = t.replace(/-(\D)/g, function (e, t) {
                return t.toUpperCase();
              })) && (t = xt.browser.isIE() ? "styleFloat" : "cssFloat"),
            r[0] && r[0].style ? r[0].style[t] : void 0);
      }
      function m(e) {
        var t = d((e = s(e)), "width"),
          n = d(e, "height");
        return (
          -1 === t.indexOf("px") && (t = 0),
          -1 === n.indexOf("px") && (n = 0),
          {
            w: parseInt(t, 10) || e.offsetWidth || e.clientWidth,
            h: parseInt(n, 10) || e.offsetHeight || e.clientHeight,
          }
        );
      }
      function g(e, t) {
        if (!e) return !1;
        if (!Array.isArray(e)) {
          if ("*" === t) return 1 === e.nodeType;
          if (Qa.test(t)) {
            for (
              var n = t.toLowerCase().split(/,/),
                r = e.nodeName.toLowerCase(),
                o = n.length - 1;
              0 <= o;
              o--
            )
              if (n[o] === r) return !0;
            return !1;
          }
          if (e.nodeType && 1 !== e.nodeType) return !1;
        }
        var i = Array.isArray(e) ? e : [e];
        return 0 < sa(t, i[0].ownerDocument || i[0], null, i).length;
      }
      function p(e, t, n, r) {
        var o,
          i = [],
          a = s(e);
        for (
          r = void 0 === r,
            n = n || ("BODY" !== l().nodeName ? l().parentNode : null),
            Et.is(t, "string") &&
              (t =
                "*" === (o = t)
                  ? function (e) {
                      return 1 === e.nodeType;
                    }
                  : function (e) {
                      return g(e, o);
                    });
          a && !(a === n || K(a.nodeType) || qn(a) || $n(a));

        ) {
          if (!t || ("function" == typeof t && t(a))) {
            if (!r) return [a];
            i.push(a);
          }
          a = a.parentNode;
        }
        return r ? i : null;
      }
      function n(e, t, n) {
        var r = t;
        if (e)
          for (
            "string" == typeof t &&
              (r = function (e) {
                return g(e, t);
              }),
              e = e[n];
            e;
            e = e[n]
          )
            if ("function" == typeof r && r(e)) return e;
        return null;
      }
      function h(e, n, r) {
        var o,
          t = "string" == typeof e ? s(e) : e;
        return (
          !!t &&
          (Et.isArray(t) && (t.length || 0 === t.length)
            ? ((o = []),
              Ya(t, function (e, t) {
                e && o.push(n.call(r, "string" == typeof e ? s(e) : e, t));
              }),
              o)
            : n.call(r || this, t))
        );
      }
      function v(e, t) {
        c(e).each(function (e, n) {
          Ya(t, function (e, t) {
            i(n, t, e);
          });
        });
      }
      function b(e, n) {
        var t = c(e);
        Ja
          ? t.each(function (e, t) {
              if (!1 !== t.canHaveHTML) {
                for (; t.firstChild; ) t.removeChild(t.firstChild);
                try {
                  (t.innerHTML = "<br>" + n), t.removeChild(t.firstChild);
                } catch (e) {
                  Xa("<div></div>")
                    .html("<br>" + n)
                    .contents()
                    .slice(1)
                    .appendTo(t);
                }
                return n;
              }
            })
          : t.html(n);
      }
      function y(e, n, r, o, i) {
        return h(e, function (e) {
          var t = "string" == typeof n ? a.createElement(n) : n;
          return (
            v(t, r),
            o &&
              ("string" != typeof o && o.nodeType
                ? t.appendChild(o)
                : "string" == typeof o && b(t, o)),
            i ? t : e.appendChild(t)
          );
        });
      }
      function C(e, t, n) {
        return y(a.createElement(e), e, t, n, !0);
      }
      function x(e, t) {
        var n = c(e);
        return (
          (t
            ? n.each(function () {
                for (var e; (e = this.firstChild); )
                  3 === e.nodeType && 0 === e.data.length
                    ? this.removeChild(e)
                    : this.parentNode.insertBefore(e, this);
              })
            : n
          ).remove(),
          1 < n.length ? n.toArray() : n[0]
        );
      }
      function w(e, t, n) {
        c(e)
          .toggleClass(t, n)
          .each(function () {
            "" === this.className && Xa(this).attr("class", null);
          });
      }
      function S(t, e, n) {
        return h(e, function (e) {
          return (
            Et.is(e, "array") && (t = t.cloneNode(!0)),
            n &&
              Ya(Ga(e.childNodes), function (e) {
                t.appendChild(e);
              }),
            e.parentNode.replaceChild(t, e)
          );
        });
      }
      function E(e) {
        if (zn(e)) {
          var t =
            "a" === e.nodeName.toLowerCase() && !r(e, "href") && r(e, "id");
          return r(e, "name") || r(e, "data-mce-bookmark") || t ? 1 : void 0;
        }
      }
      function k() {
        return a.createRange();
      }
      function N(e) {
        if (e && zn(e)) {
          var t = e.getAttribute("data-mce-contenteditable");
          return t && "inherit" !== t
            ? t
            : "inherit" !== e.contentEditable
            ? e.contentEditable
            : null;
        }
        return null;
      }
      void 0 === u && (u = {});
      var _,
        A,
        R,
        D,
        e,
        t,
        T = {},
        O = window,
        B = {},
        P = 0,
        L = Ar.forElement(kt.fromDom(a), {
          contentCssCors: u.contentCssCors,
          referrerPolicy: u.referrerPolicy,
        }),
        I = [],
        M = u.schema || ro({}),
        F = io(
          {
            url_converter: u.url_converter,
            url_converter_scope: u.url_converter_scope,
          },
          u.schema
        ),
        U = u.ownEvents ? new si() : si.Event,
        z = M.getBlockElements(),
        H = Xa.overrideDefaults(function () {
          return { context: a, element: $.getRoot() };
        }),
        j = Qo.encodeAllRaw,
        V = function (e, t, n, r) {
          if (Et.isArray(e)) {
            for (var o = e.length, i = []; o--; ) i[o] = V(e[o], t, n, r);
            return i;
          }
          return (
            !u.collect || (e !== a && e !== O) || I.push([e, t, n, r]),
            U.bind(e, t, n, r || $)
          );
        },
        q = function (e, t, n) {
          if (Et.isArray(e)) {
            for (var r = e.length, o = []; r--; ) o[r] = q(e[r], t, n);
            return o;
          }
          if (0 < I.length && (e === a || e === O))
            for (r = I.length; r--; ) {
              var i = I[r];
              e !== i[0] ||
                (t && t !== i[1]) ||
                (n && n !== i[2]) ||
                U.unbind(i[0], i[1], i[2]);
            }
          return U.unbind(e, t, n);
        },
        $ = {
          doc: a,
          settings: u,
          win: O,
          files: B,
          stdMode: !0,
          boxModel: !0,
          styleSheetLoader: L,
          boundEvents: I,
          styles: F,
          schema: M,
          events: U,
          isBlock: function (e) {
            if ("string" == typeof e) return !!z[e];
            if (e) {
              var t = e.nodeType;
              if (t) return !(1 !== t || !z[e.nodeName]);
            }
            return !1;
          },
          $: H,
          $$: c,
          root: null,
          clone: function (t, e) {
            if (!Ja || 1 !== t.nodeType || e) return t.cloneNode(e);
            var n = a.createElement(t.nodeName);
            return (
              Ya(o(t), function (e) {
                i(n, e.nodeName, r(t, e.nodeName));
              }),
              n
            );
          },
          getRoot: l,
          getViewPort: function (e) {
            var t = tn(e);
            return { x: t.x, y: t.y, w: t.width, h: t.height };
          },
          getRect: function (e) {
            var t = f((e = s(e))),
              n = m(e);
            return { x: t.x, y: t.y, w: n.w, h: n.h };
          },
          getSize: m,
          getParent: function (e, t, n) {
            var r = p(e, t, n, !1);
            return r && 0 < r.length ? r[0] : null;
          },
          getParents: p,
          get: s,
          getNext: function (e, t) {
            return n(e, t, "nextSibling");
          },
          getPrev: function (e, t) {
            return n(e, t, "previousSibling");
          },
          select: function (e, t) {
            return sa(e, s(t) || u.root_element || a, []);
          },
          is: g,
          add: y,
          create: C,
          createHTML: function (e, t, n) {
            var r,
              o = "";
            for (r in ((o += "<" + e), t))
              se(t, r) && (o += " " + r + '="' + j(t[r]) + '"');
            return void 0 !== n ? o + ">" + n + "</" + e + ">" : o + " />";
          },
          createFragment: function (e) {
            var t,
              n = a.createElement("div"),
              r = a.createDocumentFragment();
            for (r.appendChild(n), e && (n.innerHTML = e); (t = n.firstChild); )
              r.appendChild(t);
            return r.removeChild(n), r;
          },
          remove: x,
          setStyle: function (e, t, n) {
            var r = X(t) ? c(e).css(t, n) : c(e).css(t);
            u.update_styles && Wa(F, r);
          },
          getStyle: d,
          setStyles: function (e, t) {
            var n = c(e).css(t);
            u.update_styles && Wa(F, n);
          },
          removeAllAttribs: function (e) {
            return h(e, function (e) {
              for (var t = e.attributes, n = t.length - 1; 0 <= n; n--)
                e.removeAttributeNode(t.item(n));
            });
          },
          setAttrib: i,
          setAttribs: v,
          getAttrib: r,
          getPos: f,
          parseStyle: function (e) {
            return F.parse(e);
          },
          serializeStyle: function (e, t) {
            return F.serialize(e, t);
          },
          addStyle: function (e) {
            var t, n;
            if ($ !== Za.DOM && a === document) {
              if (T[e]) return;
              T[e] = !0;
            }
            (n = a.getElementById("mceDefaultStyles")) ||
              (((n = a.createElement("style")).id = "mceDefaultStyles"),
              (n.type = "text/css"),
              (t = a.getElementsByTagName("head")[0]).firstChild
                ? t.insertBefore(n, t.firstChild)
                : t.appendChild(n)),
              n.styleSheet
                ? (n.styleSheet.cssText += e)
                : n.appendChild(a.createTextNode(e));
          },
          loadCSS: function (e) {
            Y((e = e || "").split(","), function (e) {
              (B[e] = !0), L.load(e, te);
            });
          },
          addClass: function (e, t) {
            c(e).addClass(t);
          },
          removeClass: function (e, t) {
            w(e, t, !1);
          },
          hasClass: function (e, t) {
            return c(e).hasClass(t);
          },
          toggleClass: w,
          show: function (e) {
            c(e).show();
          },
          hide: function (e) {
            c(e).hide();
          },
          isHidden: function (e) {
            return "none" === c(e).css("display");
          },
          uniqueId: function (e) {
            return (e || "mce_") + P++;
          },
          setHTML: b,
          getOuterHTML: function (e) {
            var t = "string" == typeof e ? s(e) : e;
            return zn(t)
              ? t.outerHTML
              : Xa("<div></div>").append(Xa(t).clone()).html();
          },
          setOuterHTML: function (e, t) {
            c(e).each(function () {
              try {
                if ("outerHTML" in this) return void (this.outerHTML = t);
              } catch (e) {}
              x(Xa(this).html(t), !0);
            });
          },
          decode: Qo.decode,
          encode: j,
          insertAfter: function (e, t) {
            var r = s(t);
            return h(e, function (e) {
              var t = r.parentNode,
                n = r.nextSibling;
              return n ? t.insertBefore(e, n) : t.appendChild(e), e;
            });
          },
          replace: S,
          rename: function (t, e) {
            var n;
            return (
              t.nodeName !== e.toUpperCase() &&
                ((n = C(e)),
                Ya(o(t), function (e) {
                  i(n, e.nodeName, r(t, e.nodeName));
                }),
                S(n, t, !0)),
              n || t
            );
          },
          findCommonAncestor: function (e, t) {
            for (var n, r = e; r; ) {
              for (n = t; n && r !== n; ) n = n.parentNode;
              if (r === n) break;
              r = r.parentNode;
            }
            return !r && e.ownerDocument ? e.ownerDocument.documentElement : r;
          },
          toHex: function (e) {
            return F.toHex(Et.trim(e));
          },
          run: h,
          getAttribs: o,
          isEmpty: function (e, t) {
            var n,
              r,
              o = 0;
            if (E(e)) return !1;
            if ((e = e.firstChild)) {
              var i = new Rr(e, e.parentNode),
                a = M ? M.getWhiteSpaceElements() : {};
              t = t || (M ? M.getNonEmptyElements() : null);
              do {
                if (((n = e.nodeType), zn(e))) {
                  var u = e.getAttribute("data-mce-bogus");
                  if (u) {
                    e = i.next("all" === u);
                    continue;
                  }
                  if (((r = e.nodeName.toLowerCase()), t && t[r])) {
                    if ("br" !== r) return !1;
                    o++, (e = i.next());
                    continue;
                  }
                  if (E(e)) return !1;
                }
                if (8 === n) return !1;
                if (3 === n && !qr(e.nodeValue)) return !1;
                if (
                  3 === n &&
                  e.parentNode &&
                  a[e.parentNode.nodeName] &&
                  qr(e.nodeValue)
                )
                  return !1;
                e = i.next();
              } while (e);
            }
            return o <= 1;
          },
          createRng: k,
          nodeIndex: Ka,
          split: function (e, t, n) {
            var r,
              o,
              i,
              a = k();
            if (e && t)
              return (
                a.setStart(e.parentNode, Ka(e)),
                a.setEnd(t.parentNode, Ka(t)),
                (r = a.extractContents()),
                (a = k()).setStart(t.parentNode, Ka(t) + 1),
                a.setEnd(e.parentNode, Ka(e) + 1),
                (o = a.extractContents()),
                (i = e.parentNode).insertBefore(jo($, r), e),
                n ? i.insertBefore(n, e) : i.insertBefore(t, e),
                i.insertBefore(jo($, o), e),
                x(e),
                n || t
              );
          },
          bind: V,
          unbind: q,
          fire: function (e, t, n) {
            return U.fire(e, t, n);
          },
          getContentEditable: N,
          getContentEditableParent: function (e) {
            for (
              var t = l(), n = null;
              e && e !== t && null === (n = N(e));
              e = e.parentNode
            );
            return n;
          },
          destroy: function () {
            if (0 < I.length)
              for (var e = I.length; e--; ) {
                var t = I[e];
                U.unbind(t[0], t[1], t[2]);
              }
            ne(B, function (e, t) {
              L.unload(t), delete B[t];
            }),
              sa.setDocument && sa.setDocument();
          },
          isChildOf: function (e, t) {
            if (Ja) {
              for (; e; ) {
                if (t === e) return !0;
                e = e.parentNode;
              }
              return !1;
            }
            return e === t || t.contains(e);
          },
          dumpRng: function (e) {
            return (
              "startContainer: " +
              e.startContainer.nodeName +
              ", startOffset: " +
              e.startOffset +
              ", endContainer: " +
              e.endContainer.nodeName +
              ", endOffset: " +
              e.endOffset
            );
          },
        },
        W =
          ((_ = F),
          (R = J($)),
          (e = {
            set: function (e, t, n) {
              A.url_converter &&
                null !== t &&
                (t = A.url_converter.call(
                  A.url_converter_scope || R(),
                  t,
                  n,
                  e[0]
                )),
                e.attr("data-mce-" + n, t).attr(n, t);
            },
            get: function (e, t) {
              return e.attr("data-mce-" + t) || e.attr(t);
            },
          }),
          (t = {
            style: {
              set: function (e, t) {
                null === t || "object" != typeof t
                  ? (D && e.attr("data-mce-style", t),
                    null !== t && "string" == typeof t
                      ? (e.removeAttr("style"), e.css(_.parse(t)))
                      : e.attr("style", t))
                  : e.css(t);
              },
              get: function (e) {
                var t = e.attr("data-mce-style") || e.attr("style");
                return _.serialize(_.parse(t), e[0].nodeName);
              },
            },
          }),
          (D = (A = u).keep_values) && (t.href = t.src = e),
          t);
      return $;
    };
  (Za.DOM = Za(document)), (Za.nodeIndex = Ka);
  var eu = Za.DOM,
    tu = Et.each,
    nu = Et.grep,
    ru =
      ((ou.prototype._setReferrerPolicy = function (e) {
        this.settings.referrerPolicy = e;
      }),
      (ou.prototype.loadScript = function (e, t, n) {
        function r() {
          o.remove(i), a && (a.onerror = a.onload = a = null);
        }
        var o = eu,
          i = o.uniqueId(),
          a = document.createElement("script");
        (a.id = i),
          (a.type = "text/javascript"),
          (a.src = Et._addCacheSuffix(e)),
          this.settings.referrerPolicy &&
            o.setAttrib(a, "referrerpolicy", this.settings.referrerPolicy),
          (a.onload = function () {
            r(), t();
          }),
          (a.onerror = function () {
            r(),
              y(n)
                ? n()
                : "undefined" != typeof console &&
                  console.log &&
                  console.log("Failed to load script: " + e);
          }),
          (
            document.getElementsByTagName("head")[0] || document.body
          ).appendChild(a);
      }),
      (ou.prototype.isDone = function (e) {
        return 2 === this.states[e];
      }),
      (ou.prototype.markDone = function (e) {
        this.states[e] = 2;
      }),
      (ou.prototype.add = function (e, t, n, r) {
        var o = this.states[e];
        this.queue.push(e),
          void 0 === o && (this.states[e] = 0),
          t &&
            (this.scriptLoadedCallbacks[e] ||
              (this.scriptLoadedCallbacks[e] = []),
            this.scriptLoadedCallbacks[e].push({
              success: t,
              failure: r,
              scope: n || this,
            }));
      }),
      (ou.prototype.load = function (e, t, n, r) {
        return this.add(e, t, n, r);
      }),
      (ou.prototype.remove = function (e) {
        delete this.states[e], delete this.scriptLoadedCallbacks[e];
      }),
      (ou.prototype.loadQueue = function (e, t, n) {
        this.loadScripts(this.queue, e, t, n);
      }),
      (ou.prototype.loadScripts = function (n, e, t, r) {
        function o(t, e) {
          tu(i.scriptLoadedCallbacks[e], function (e) {
            y(e[t]) && e[t].call(e.scope);
          }),
            (i.scriptLoadedCallbacks[e] = void 0);
        }
        var i = this,
          a = [];
        i.queueLoadedCallbacks.push({
          success: e,
          failure: r,
          scope: t || this,
        });
        var u = function () {
          var e,
            t = nu(n);
          (n.length = 0),
            tu(t, function (e) {
              2 !== i.states[e]
                ? 3 !== i.states[e]
                  ? 1 !== i.states[e] &&
                    ((i.states[e] = 1),
                    i.loading++,
                    i.loadScript(
                      e,
                      function () {
                        (i.states[e] = 2), i.loading--, o("success", e), u();
                      },
                      function () {
                        (i.states[e] = 3),
                          i.loading--,
                          a.push(e),
                          o("failure", e),
                          u();
                      }
                    ))
                  : o("failure", e)
                : o("success", e);
            }),
            i.loading ||
              ((e = i.queueLoadedCallbacks.slice(0)),
              (i.queueLoadedCallbacks.length = 0),
              tu(e, function (e) {
                0 === a.length
                  ? y(e.success) && e.success.call(e.scope)
                  : y(e.failure) && e.failure.call(e.scope, a);
              }));
        };
        u();
      }),
      (ou.ScriptLoader = new ou()),
      ou);
  function ou(e) {
    void 0 === e && (e = {}),
      (this.states = {}),
      (this.queue = []),
      (this.scriptLoadedCallbacks = {}),
      (this.queueLoadedCallbacks = []),
      (this.loading = 0),
      (this.settings = e);
  }
  function iu(e) {
    var t = e;
    return {
      get: function () {
        return t;
      },
      set: function (e) {
        t = e;
      },
    };
  }
  function au() {
    return ue(uu, su.get());
  }
  var uu = {},
    su = iu("en"),
    cu = {
      getData: function () {
        return re(uu, function (e) {
          return _e({}, e);
        });
      },
      setCode: function (e) {
        e && su.set(e);
      },
      getCode: function () {
        return su.get();
      },
      add: function (e, t) {
        var n = uu[e];
        n || (uu[e] = n = {}),
          ne(t, function (e, t) {
            n[t.toLowerCase()] = e;
          });
      },
      translate: function (e) {
        function n(e) {
          return y(e) ? Object.prototype.toString.call(e) : u(e) ? "" : "" + e;
        }
        function t(e) {
          var t = n(e);
          return ue(a, t.toLowerCase()).map(n).getOr(t);
        }
        function r(e) {
          return e.replace(/{context:\w+}$/, "");
        }
        var o,
          i,
          a = au().getOr({}),
          u = function (e) {
            return "" === e || null == e;
          };
        if (u(e)) return "";
        if (h((o = e)) && ke(o, "raw")) return n(e.raw);
        if (S((i = e)) && 1 < i.length) {
          var s = e.slice(1);
          return r(
            t(e[0]).replace(/\{([0-9]+)\}/g, function (e, t) {
              return ke(s, t) ? n(s[t]) : e;
            })
          );
        }
        return r(t(e));
      },
      isRtl: function () {
        return au()
          .bind(function (e) {
            return ue(e, "_dir");
          })
          .exists(function (e) {
            return "rtl" === e;
          });
      },
      hasCode: function (e) {
        return ke(uu, e);
      },
    },
    lu = function () {
      function u(t, n) {
        Y(
          U(r, function (e) {
            return e.name === t && e.state === n;
          }),
          function (e) {
            return e.callback();
          }
        );
      }
      function s(e) {
        var t;
        return (f[e] ? f[e].dependencies : t) || [];
      }
      function c(e, t) {
        return "object" == typeof t
          ? t
          : "string" == typeof e
          ? { prefix: "", resource: t, suffix: "" }
          : { prefix: e.prefix, resource: t, suffix: e.suffix };
      }
      function e(e, t, n) {
        void 0 === n && (n = "added"),
          (ke(f, e) && "added" === n) || (ke(l, e) && "loaded" === n)
            ? t()
            : r.push({ name: e, state: n, callback: t });
      }
      var o = [],
        l = {},
        f = {},
        r = [],
        d = function (r, o, i, a, e) {
          var t, n;
          l[r] ||
            (0 !==
              (t =
                "string" == typeof o
                  ? o
                  : o.prefix + o.resource + o.suffix).indexOf("/") &&
              -1 === t.indexOf("://") &&
              (t = lu.baseURL + "/" + t),
            (l[r] = t.substring(0, t.lastIndexOf("/"))),
            (n = function () {
              var n, e, t;
              u(r, "loaded"),
                (n = o),
                (e = i),
                (t = a),
                Y(s(r), function (e) {
                  var t = c(n, e);
                  d(t.resource, t, void 0, void 0);
                }),
                e && (t ? e.call(t) : e.call(ru));
            }),
            f[r] ? n() : ru.ScriptLoader.add(t, n, a, e));
        };
      return {
        items: o,
        urls: l,
        lookup: f,
        _listeners: r,
        get: function (e) {
          if (f[e]) return f[e].instance;
        },
        dependencies: s,
        requireLangPack: function (t, n) {
          !1 !== lu.languageLoad &&
            e(
              t,
              function () {
                var e = cu.getCode();
                !e ||
                  (n &&
                    -1 === ("," + (n || "") + ",").indexOf("," + e + ",")) ||
                  ru.ScriptLoader.add(l[t] + "/langs/" + e + ".js");
              },
              "loaded"
            );
        },
        add: function (e, t, n) {
          var r = t;
          return (
            o.push(r),
            (f[e] = { instance: r, dependencies: n }),
            u(e, "added"),
            r
          );
        },
        remove: function (e) {
          delete l[e], delete f[e];
        },
        createUrl: c,
        addComponents: function (e, t) {
          var n = l[e];
          Y(t, function (e) {
            ru.ScriptLoader.add(n + "/" + e);
          });
        },
        load: d,
        waitFor: e,
      };
    };
  function fu() {
    var e,
      t,
      n =
        ((e = te),
        (t = iu(ve.none())),
        {
          clear: function () {
            r(), t.set(ve.none());
          },
          isSet: function () {
            return t.get().isSome();
          },
          get: function () {
            return t.get();
          },
          set: function (e) {
            r(), t.set(ve.some(e));
          },
        });
    function r() {
      return t.get().each(e);
    }
    return _e(_e({}, n), {
      on: function (e) {
        return n.get().each(e);
      },
    });
  }
  function du(n, r) {
    var o = null;
    return {
      cancel: function () {
        l(o) || (clearTimeout(o), (o = null));
      },
      throttle: function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        l(o) &&
          (o = setTimeout(function () {
            (o = null), n.apply(null, e);
          }, r));
      },
    };
  }
  function mu(n, r) {
    function o() {
      l(i) || (clearTimeout(i), (i = null));
    }
    var i = null;
    return {
      cancel: o,
      throttle: function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        o(),
          (i = setTimeout(function () {
            (i = null), n.apply(null, e);
          }, r));
      },
    };
  }
  function gu(e, t) {
    var n = vn(e, t);
    return void 0 === n || "" === n ? [] : n.split(" ");
  }
  function pu(e) {
    return void 0 !== e.dom.classList;
  }
  function hu(e, t) {
    var n, r, o;
    pu(e)
      ? e.dom.classList.add(t)
      : ((r = t),
        (o = gu((n = e), "class").concat([r])),
        pn(n, "class", o.join(" ")));
  }
  function vu(e, t) {
    return pu(e) && e.dom.classList.contains(t);
  }
  function bu(e, t) {
    return He((n = void 0 === e ? document : e.dom))
      ? []
      : A(n.querySelectorAll(t), kt.fromDom);
    var n;
  }
  function yu(r, e) {
    function t(e, t) {
      return (n = e.dom) && n.hasAttribute && n.hasAttribute(t)
        ? ve.some(vn(e, t))
        : ve.none();
      var n;
    }
    var n = r.selection.getRng(),
      o = kt.fromDom(n.startContainer),
      i = kt.fromDom(r.getBody()),
      a = e.fold(
        function () {
          return "." + qu();
        },
        function (e) {
          return "[" + $u() + '="' + e + '"]';
        }
      );
    return br(Mt(o, n.startOffset).getOr(o), a, function (e) {
      return je(e, i);
    }).bind(function (e) {
      return t(e, "" + Wu()).bind(function (n) {
        return t(e, "" + $u()).map(function (e) {
          var t = Ku(r, n);
          return { uid: n, name: e, elements: t };
        });
      });
    });
  }
  function Cu(t) {
    function o() {
      return { listeners: [], previous: fu() };
    }
    function c(e, t) {
      n(e, function (e) {
        return t(e), e;
      });
    }
    function n(e, t) {
      var n = i.get(),
        r = t(ue(n, e).getOrThunk(o));
      (n[e] = r), i.set(n);
    }
    var i = iu({}),
      e = mu(function () {
        var e = i.get();
        Y(W(we(e)), function (e) {
          n(e, function (u) {
            var s = u.previous.get();
            return (
              yu(t, ve.some(e)).fold(
                function () {
                  var t;
                  s.isSome() &&
                    (c((t = e), function (e) {
                      Y(e.listeners, function (e) {
                        return e(!1, t);
                      });
                    }),
                    u.previous.clear());
                },
                function (e) {
                  var t,
                    n,
                    r,
                    o = e.uid,
                    i = e.name,
                    a = e.elements;
                  fn(s, o) ||
                    ((n = o),
                    (r = a),
                    c((t = i), function (e) {
                      Y(e.listeners, function (e) {
                        return e(!0, t, {
                          uid: n,
                          nodes: A(r, function (e) {
                            return e.dom;
                          }),
                        });
                      });
                    }),
                    u.previous.set(o));
                }
              ),
              { previous: u.previous, listeners: u.listeners }
            );
          });
        });
      }, 30);
    return (
      t.on("remove", function () {
        e.cancel();
      }),
      t.on("NodeChange", function () {
        e.throttle();
      }),
      {
        addListener: function (e, t) {
          n(e, function (e) {
            return { previous: e.previous, listeners: e.listeners.concat([t]) };
          });
        },
      }
    );
  }
  function xu(e) {
    var t = new Date().getTime();
    return e + "_" + Math.floor(1e9 * Math.random()) + ++Xu + String(t);
  }
  function wu(e, t) {
    var n,
      r,
      o = Rt(e).dom,
      i = kt.fromDom(o.createDocumentFragment());
    Kt(
      i,
      ((n = t),
      ((r = (o || document).createElement("div")).innerHTML = n),
      Dn(kt.fromDom(r)))
    ),
      Xt(e),
      Pn(e, i);
  }
  function Su(e, t) {
    return kt.fromDom(e.dom.cloneNode(t));
  }
  function Eu(e) {
    return Su(e, !1);
  }
  function ku(e) {
    return Su(e, !0);
  }
  function Nu(e, t, n) {
    function r(e) {
      for (var t; (t = o[e]()) && !jn(t) && !n(t); );
      return ve.from(t).filter(jn);
    }
    void 0 === n && (n = D);
    var o = new Rr(e, t);
    return {
      current: function () {
        return ve.from(o.current()).filter(jn);
      },
      next: function () {
        return r("next");
      },
      prev: function () {
        return r("prev");
      },
      prev2: function () {
        return r("prev2");
      },
    };
  }
  function _u(t, e) {
    var i =
        e ||
        function (e) {
          return t.isBlock(e) || Wn(e) || Yn(e);
        },
      a = function (e, t, n, r) {
        if (jn(e)) {
          var o = r(e, t, e.data);
          if (-1 !== o) return ve.some({ container: e, offset: o });
        }
        return n().bind(function (e) {
          return a(e.container, e.offset, n, r);
        });
      };
    return {
      backwards: function (e, t, n, r) {
        var o = Nu(e, r, i);
        return a(
          e,
          t,
          function () {
            return o.prev().map(function (e) {
              return { container: e, offset: e.length };
            });
          },
          n
        ).getOrNull();
      },
      forwards: function (e, t, n, r) {
        var o = Nu(e, r, i);
        return a(
          e,
          t,
          function () {
            return o.next().map(function (e) {
              return { container: e, offset: 0 };
            });
          },
          n
        ).getOrNull();
      },
    };
  }
  function Au(e) {
    return e
      ? {
          left: Yu(e.left),
          top: Yu(e.top),
          bottom: Yu(e.bottom),
          right: Yu(e.right),
          width: Yu(e.width),
          height: Yu(e.height),
        }
      : { left: 0, top: 0, bottom: 0, right: 0, width: 0, height: 0 };
  }
  function Ru(e, t) {
    return (
      (e = Au(e)),
      t || (e.left = e.left + e.width),
      (e.right = e.left),
      (e.width = 0),
      e
    );
  }
  function Du(e, t, n) {
    return 0 <= e && e <= Math.min(t.height, n.height) / 2;
  }
  function Tu(e, t) {
    var n = Math.min(t.height / 2, e.height / 2);
    return (
      e.bottom - n < t.top ||
      (!(e.top > t.bottom) && Du(t.top - e.bottom, e, t))
    );
  }
  function Ou(e, t) {
    return (
      e.top > t.bottom || (!(e.bottom < t.top) && Du(t.bottom - e.top, e, t))
    );
  }
  function Bu(e, t, n) {
    return t >= e.left && t <= e.right && n >= e.top && n <= e.bottom;
  }
  function Pu(e) {
    var t = e.startContainer,
      n = e.startOffset;
    return t.hasChildNodes() && e.endOffset === n + 1 ? t.childNodes[n] : null;
  }
  function Lu(e, t) {
    if (zn(e) && e.hasChildNodes()) {
      var n = e.childNodes;
      return n[((r = n.length - 1), Math.min(Math.max(t, 0), r))];
    }
    return e;
    var r;
  }
  function Iu(e) {
    return "string" == typeof e && 768 <= e.charCodeAt(0) && Gu.test(e);
  }
  function Mu(e) {
    return "createRange" in e ? e.createRange() : Za.DOM.createRng();
  }
  function Fu(e) {
    return e && /[\r\n\t ]/.test(e);
  }
  function Uu(e) {
    return e.setStart && e.setEnd;
  }
  function zu(e) {
    var t = e.startContainer,
      n = e.startOffset;
    if (Fu(e.toString()) && ns(t.parentNode) && jn(t)) {
      var r = t.data;
      return Fu(r[n - 1]) || Fu(r[n + 1]) ? 1 : void 0;
    }
  }
  function Hu(e) {
    return 0 === e.left && 0 === e.right && 0 === e.top && 0 === e.bottom;
  }
  function ju(e, t) {
    var n = Ru(e, t);
    return (n.width = 1), (n.right = n.left + 1), n;
  }
  (lu.languageLoad = !0),
    (lu.baseURL = ""),
    (lu.PluginManager = lu()),
    (lu.ThemeManager = lu());
  var Vu = function (e, t) {
      var n = [];
      return (
        Y(Dn(e), function (e) {
          n = (n = t(e) ? n.concat([e]) : n).concat(Vu(e, t));
        }),
        n
      );
    },
    qu = J("mce-annotation"),
    $u = J("data-mce-annotation"),
    Wu = J("data-mce-annotation-uid"),
    Ku = function (e, t) {
      return bu(kt.fromDom(e.getBody()), "[" + Wu() + '="' + t + '"]');
    },
    Xu = 0,
    Yu = Math.round,
    Gu = new RegExp(
      "[\u0300-\u036f\u0483-\u0487\u0488-\u0489\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7-\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e3-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962-\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2-\u09e3\u0a01-\u0a02\u0a3c\u0a41-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a70-\u0a71\u0a75\u0a81-\u0a82\u0abc\u0ac1-\u0ac5\u0ac7-\u0ac8\u0acd\u0ae2-\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62-\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c62-\u0c63\u0c81\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc-\u0ccd\u0cd5-\u0cd6\u0ce2-\u0ce3\u0d01\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62-\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb-\u0ebc\u0ec8-\u0ecd\u0f18-\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039-\u103a\u103d-\u103e\u1058-\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17b4-\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193b\u1a17-\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abd\u1abe\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80-\u1b81\u1ba2-\u1ba5\u1ba8-\u1ba9\u1bab-\u1bad\u1be6\u1be8-\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8-\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200c-\u200d\u20d0-\u20dc\u20dd-\u20e0\u20e1\u20e2-\u20e4\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u302e-\u302f\u3099-\u309a\ua66f\ua670-\ua672\ua674-\ua67d\ua69e-\ua69f\ua6f0-\ua6f1\ua802\ua806\ua80b\ua825-\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31-\uaa32\uaa35-\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7-\uaab8\uaabe-\uaabf\uaac1\uaaec-\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\uff9e-\uff9f]"
    ),
    Ju = zn,
    Qu = jr,
    Zu = an("display", "block table"),
    es = an("float", "left right"),
    ts = (function () {
      for (var n = [], e = 0; e < arguments.length; e++) n[e] = arguments[e];
      return function (e) {
        for (var t = 0; t < n.length; t++) if (!n[t](e)) return !1;
        return !0;
      };
    })(Ju, Qu, s(es)),
    ns = s(an("white-space", "pre pre-line pre-wrap")),
    rs = jn,
    os = Wn,
    is = Za.nodeIndex,
    as = function (e, t) {
      if (!(t < 0 && zn(e) && e.hasChildNodes())) return Lu(e, t);
    },
    us = function (e) {
      var t = e.getClientRects(),
        n = 0 < t.length ? Au(t[0]) : Au(e.getBoundingClientRect());
      return !Uu(e) && os(e) && Hu(n)
        ? (function (e) {
            var t = e.ownerDocument,
              n = Mu(t),
              r = t.createTextNode(xo),
              o = e.parentNode;
            o.insertBefore(r, e), n.setStart(r, 0), n.setEnd(r, 1);
            var i = Au(n.getBoundingClientRect());
            return o.removeChild(r), i;
          })(e)
        : Hu(n) && Uu(e)
        ? (function (e) {
            var t = e.startContainer,
              n = e.endContainer,
              r = e.startOffset,
              o = e.endOffset;
            if (t === n && jn(n) && 0 === r && 1 === o) {
              var i = e.cloneRange();
              return i.setEndAfter(n), us(i);
            }
            return null;
          })(e)
        : n;
    },
    ss = function (t, n, e) {
      function r() {
        return (e =
          e ||
          (function (e) {
            function r(e) {
              var t;
              0 !== e.height &&
                ((0 < o.length &&
                  ((t = o[o.length - 1]),
                  e.left === t.left &&
                    e.top === t.top &&
                    e.bottom === t.bottom &&
                    e.right === t.right)) ||
                  o.push(e));
            }
            function t(e, t) {
              var n = Mu(e.ownerDocument);
              if (t < e.data.length) {
                if (Iu(e.data[t])) return o;
                if (
                  Iu(e.data[t - 1]) &&
                  (n.setStart(e, t), n.setEnd(e, t + 1), !zu(n))
                )
                  return r(ju(us(n), !1)), o;
              }
              0 < t &&
                (n.setStart(e, t - 1),
                n.setEnd(e, t),
                zu(n) || r(ju(us(n), !1))),
                t < e.data.length &&
                  (n.setStart(e, t),
                  n.setEnd(e, t + 1),
                  zu(n) || r(ju(us(n), !0)));
            }
            var o = [],
              n = e.container(),
              i = e.offset();
            if (rs(n)) return t(n, i), o;
            if (Ju(n))
              if (e.isAtEnd()) {
                var a = as(n, i);
                rs(a) && t(a, a.data.length),
                  ts(a) && !os(a) && r(ju(us(a), !1));
              } else {
                if (((a = as(n, i)), rs(a) && t(a, 0), ts(a) && e.isAtEnd()))
                  return r(ju(us(a), !1)), o;
                var u = as(e.container(), e.offset() - 1);
                ts(u) &&
                  !os(u) &&
                  ((!Zu(u) && !Zu(a) && ts(a)) || r(ju(us(u), !1))),
                  ts(a) && r(ju(us(a), !0));
              }
            return o;
          })(ss(t, n)));
      }
      return {
        container: J(t),
        offset: J(n),
        toRange: function () {
          var e = Mu(t.ownerDocument);
          return e.setStart(t, n), e.setEnd(t, n), e;
        },
        getClientRects: r,
        isVisible: function () {
          return 0 < r().length;
        },
        isAtStart: function () {
          return rs(t), 0 === n;
        },
        isAtEnd: function () {
          return rs(t) ? n >= t.data.length : n >= t.childNodes.length;
        },
        isEqual: function (e) {
          return e && t === e.container() && n === e.offset();
        },
        getNode: function (e) {
          return as(t, e ? n - 1 : n);
        },
      };
    };
  function cs(e, t) {
    jn(t) && 0 === t.data.length && e.remove(t);
  }
  function ls(e, t, n) {
    var r, o, i, a, u, s, c;
    $n(n)
      ? ((i = e),
        (a = t),
        (s = ve.from((u = n).firstChild)),
        (c = ve.from(u.lastChild)),
        a.insertNode(u),
        s.each(function (e) {
          return cs(i, e.previousSibling);
        }),
        c.each(function (e) {
          return cs(i, e.nextSibling);
        }))
      : ((r = e),
        t.insertNode((o = n)),
        cs(r, o.previousSibling),
        cs(r, o.nextSibling));
  }
  function fs(t) {
    return function (e) {
      return t === e;
    };
  }
  function ds(e) {
    var t, r, n, o;
    return (
      (cc(e) ? "text()" : e.nodeName.toLowerCase()) +
      "[" +
      ((r = mc(dc((t = e)))),
      (n = ge(r, fs(t), t)),
      (o = me(
        (r = r.slice(0, n + 1)),
        function (e, t, n) {
          return cc(t) && cc(r[n - 1]) && e++, e;
        },
        0
      )),
      ge((r = fe(r, on([t.nodeName]))), fs(t), t) - o) +
      "]"
    );
  }
  function ms(e, t) {
    var n,
      r,
      o,
      i = [],
      a = t.container(),
      u = t.offset();
    return (
      cc(a)
        ? (n = (function (e, t) {
            for (; (e = e.previousSibling) && cc(e); ) t += e.data.length;
            return t;
          })(a, u))
        : (u >= (r = a.childNodes).length
            ? ((n = "after"), (u = r.length - 1))
            : (n = "before"),
          (a = r[u])),
      i.push(ds(a)),
      (o = fe(
        (function (e, t) {
          var n = [];
          for (t = t.parentNode; t !== e; t = t.parentNode) n.push(t);
          return n;
        })(e, a),
        s(sn)
      )),
      (i = i.concat(le(o, ds))).reverse().join("/") + "," + n
    );
  }
  function gs(e, t) {
    if (!t) return null;
    var n = t.split(","),
      r = n[0].split("/"),
      o = 1 < n.length ? n[1] : "before",
      i = me(
        r,
        function (e, t) {
          var n,
            r,
            o,
            i,
            a = /([\w\-\(\)]+)\[([0-9]+)\]/.exec(t);
          return a
            ? ("text()" === a[1] && (a[1] = "#text"),
              (n = e),
              (r = a[1]),
              (o = parseInt(a[2], 10)),
              (i = fe((i = mc(n)), function (e, t) {
                return !cc(e) || !cc(i[t - 1]);
              })),
              (i = fe(i, on([r])))[o])
            : null;
        },
        e
      );
    return i
      ? cc(i)
        ? (function (e, t) {
            for (var n, r = e, o = 0; cc(r); ) {
              if (((n = r.data.length), o <= t && t <= o + n)) {
                (e = r), (t -= o);
                break;
              }
              if (!cc(r.nextSibling)) {
                (e = r), (t = n);
                break;
              }
              (o += n), (r = r.nextSibling);
            }
            return cc(e) && t > e.data.length && (t = e.data.length), ss(e, t);
          })(i, parseInt(o, 10))
        : ((o = "after" === o ? fc(i) + 1 : fc(i)), ss(i.parentNode, o))
      : null;
  }
  function ps(e, t, n, r, o) {
    var i,
      a = r[o ? "startContainer" : "endContainer"],
      u = r[o ? "startOffset" : "endOffset"],
      s = [],
      c = 0,
      l = e.getRoot();
    for (
      jn(a)
        ? s.push(
            n
              ? (function (e, t, n) {
                  for (
                    var r = e(t.data.slice(0, n)).length, o = t.previousSibling;
                    o && jn(o);
                    o = o.previousSibling
                  )
                    r += e(o.data).length;
                  return r;
                })(t, a, u)
              : u
          )
        : (u >= (i = a.childNodes).length &&
            i.length &&
            ((c = 1), (u = Math.max(0, i.length - 1))),
          s.push(e.nodeIndex(i[u], n) + c));
      a && a !== l;
      a = a.parentNode
    )
      s.push(e.nodeIndex(a, n));
    return s;
  }
  function hs(e, t, n) {
    var r = 0;
    return (
      Et.each(e.select(t), function (e) {
        if ("all" !== e.getAttribute("data-mce-bogus"))
          return e !== n && void r++;
      }),
      r
    );
  }
  function vs(e, t) {
    var n,
      r = t ? "start" : "end",
      o = e[r + "Container"],
      i = e[r + "Offset"];
    zn(o) &&
      "TR" === o.nodeName &&
      (o = (n = o.childNodes)[Math.min(t ? i : i - 1, n.length - 1)]) &&
      ((i = t ? 0 : o.childNodes.length),
      e["set" + (t ? "Start" : "End")](o, i));
  }
  function bs(e) {
    return vs(e, !0), vs(e, !1), e;
  }
  function ys(e, t) {
    var n;
    return zn(e) && ((e = Lu(e, t)), gc(e))
      ? e
      : Ir(e)
      ? ((n = (e = jn(e) && Pr(e) ? e.parentNode : e).previousSibling),
        gc(n) ? n : ((n = e.nextSibling), gc(n) ? n : void 0))
      : void 0;
  }
  function Cs(e, t, n) {
    var r = n.getNode(),
      o = r ? r.nodeName : null,
      i = n.getRng();
    if (gc(r) || "IMG" === o) return { name: o, index: hs(n.dom, o, r) };
    var a,
      u,
      s,
      c,
      l,
      f,
      d,
      m =
        ys((a = i).startContainer, a.startOffset) ||
        ys(a.endContainer, a.endOffset);
    return m
      ? { name: (o = m.tagName), index: hs(n.dom, o, m) }
      : ((f = (s = n).dom),
        ((d = {}).start = ps(f, (u = e), (c = t), (l = i), !0)),
        s.isCollapsed() || (d.end = ps(f, u, c, l, !1)),
        Hr(l) && (d.isFakeCaret = !0),
        d);
  }
  function xs(e, t, n) {
    var r = {
      "data-mce-type": "bookmark",
      id: t,
      style: "overflow:hidden;line-height:0px",
    };
    return n ? e.create("span", r, "&#xFEFF;") : e.create("span", r);
  }
  function ws(e, t) {
    var n = e.dom,
      r = e.getRng(),
      o = n.uniqueId(),
      i = e.isCollapsed(),
      a = e.getNode(),
      u = a.nodeName;
    if ("IMG" === u) return { name: u, index: hs(n, u, a) };
    var s = bs(r.cloneRange());
    return (
      i || (s.collapse(!1), ls(n, s, xs(n, o + "_end", t))),
      (r = bs(r)).collapse(!0),
      ls(n, r, xs(n, o + "_start", t)),
      e.moveToBookmark({ id: o, keep: !0 }),
      { id: o }
    );
  }
  function Ss(e, t, n) {
    var r = e.getParam(t, n);
    return -1 === r.indexOf("=")
      ? r
      : ue(e.getParam(t, "", "hash"), e.id).getOr(n);
  }
  function Es(e) {
    return e.getParam("content_security_policy", "");
  }
  function ks(e) {
    if (e.getParam("force_p_newlines", !1)) return "p";
    var t = e.getParam("forced_root_block", "p");
    return !1 === t ? "" : !0 === t ? "p" : t;
  }
  function Ns(e) {
    return e.getParam("forced_root_block_attrs", {});
  }
  function _s(e) {
    return e.getParam("automatic_uploads", !0, "boolean");
  }
  function As(e) {
    return e.getParam("icons", "", "string");
  }
  function Rs(e) {
    return e.getParam("referrer_policy", "", "string");
  }
  function Ds(e) {
    return e.getParam("language", "en", "string");
  }
  function Ts(e) {
    return e.getParam("indent_use_margin", !1);
  }
  function Os(e) {
    var t = e.getParam("font_css", []);
    return S(t) ? t : A(t.split(","), Je);
  }
  function Bs(e) {
    var t = e.getParam("object_resizing");
    return (
      !1 !== t &&
      !xt.iOS &&
      (X(t) ? t : "table,img,figure.image,div,video,iframe")
    );
  }
  function Ps(e) {
    return e.getParam("event_root");
  }
  function Ls(e) {
    return e.getParam("theme");
  }
  function Is(e) {
    return !1 !== e.getParam("inline_boundaries");
  }
  function Ms(e) {
    return e.getParam("plugins", "", "string");
  }
  function Fs(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
  }
  function Us(e) {
    var t = Eo(e);
    return { count: e.length - t.length, text: t };
  }
  function zs(e) {
    for (var t; -1 !== (t = e.data.lastIndexOf(wo)); ) e.deleteData(t, 1);
  }
  function Hs(e, t) {
    return yc(e), t;
  }
  function js(e, t) {
    var n,
      r = t.container(),
      o = (-1 === (n = _(xe(r.childNodes), e)) ? ve.none() : ve.some(n))
        .map(function (e) {
          return e < t.offset() ? ss(r, t.offset() - 1) : t;
        })
        .getOr(t);
    return yc(e), o;
  }
  function Vs(e, t) {
    return ss.isTextPosition(t)
      ? ((r = t),
        bc((n = e)) && r.container() === n
          ? ((a = Us((o = n).data.substr(0, (i = r).offset()))),
            (u = Us(o.data.substr(i.offset()))),
            0 < (a.text + u.text).length
              ? (zs(o), ss(o, i.offset() - a.count))
              : i)
          : Hs(n, r))
      : ((s = e), ((c = t).container() === s.parentNode ? js : Hs)(s, c));
    var n, r, o, i, a, u, s, c;
  }
  function qs(e, t, n) {
    var r,
      o,
      i,
      a = Ru(t.getBoundingClientRect(), n),
      u =
        "BODY" === e.tagName
          ? ((r = e.ownerDocument.documentElement),
            (o = e.scrollLeft || r.scrollLeft),
            e.scrollTop || r.scrollTop)
          : ((i = e.getBoundingClientRect()),
            (o = e.scrollLeft - i.left),
            e.scrollTop - i.top);
    (a.left += o), (a.right += o), (a.top += u), (a.bottom += u), (a.width = 1);
    var s = t.offsetWidth - t.clientWidth;
    return 0 < s && (n && (s *= -1), (a.left += s), (a.right += s)), a;
  }
  function $s(e, i, a, u) {
    function s() {
      !(function () {
        for (
          var e = bu(
              kt.fromDom(i),
              "*[contentEditable=false],video,audio,embed,object"
            ),
            t = 0;
          t < e.length;
          t++
        ) {
          var n,
            r = e[t].dom,
            o = r.previousSibling;
          Ao(o) &&
            (1 === (n = o.data).length
              ? o.parentNode.removeChild(o)
              : o.deleteData(n.length - 1, 1)),
            (o = r.nextSibling),
            _o(o) &&
              (1 === (n = o.data).length
                ? o.parentNode.removeChild(o)
                : o.deleteData(0, 1));
        }
      })(),
        l && (yc(l), (l = null)),
        f.on(function (e) {
          Xa(e.caret).remove(), f.clear();
        }),
        c && (_r.clearInterval(c), (c = void 0));
    }
    var c,
      l,
      f = fu(),
      t = ks(e),
      d = 0 < t.length ? t : "p";
    return {
      show: function (e, t) {
        var n;
        if ((s(), Sc(t))) return null;
        if (!a(t))
          return (
            (l = (function (e, t) {
              var n = e.ownerDocument.createTextNode(wo),
                r = e.parentNode;
              if (t) {
                if (((o = e.previousSibling), No(o))) {
                  if (Ir(o)) return o;
                  if (Ao(o)) return o.splitText(o.data.length - 1);
                }
                r.insertBefore(n, e);
              } else {
                var o = e.nextSibling;
                if (No(o)) {
                  if (Ir(o)) return o;
                  if (_o(o)) return o.splitText(1), o;
                }
                e.nextSibling
                  ? r.insertBefore(n, e.nextSibling)
                  : r.appendChild(n);
              }
              return n;
            })(t, e)),
            (n = t.ownerDocument.createRange()),
            Ec(l.nextSibling)
              ? (n.setStart(l, 0), n.setEnd(l, 0))
              : (n.setStart(l, 1), n.setEnd(l, 1)),
            n
          );
        l = (function (e, t, n) {
          var r,
            o = t.ownerDocument.createElement(e);
          o.setAttribute("data-mce-caret", n ? "before" : "after"),
            o.setAttribute("data-mce-bogus", "all"),
            o.appendChild(
              ((r = document.createElement("br")).setAttribute(
                "data-mce-bogus",
                "1"
              ),
              r)
            );
          var i = t.parentNode;
          return (
            n
              ? i.insertBefore(o, t)
              : t.nextSibling
              ? i.insertBefore(o, t.nextSibling)
              : i.appendChild(o),
            o
          );
        })(d, t, e);
        var r = qs(i, t, e);
        Xa(l).css("top", r.top);
        var o = Xa('<div class="mce-visual-caret" data-mce-bogus="all"></div>')
          .css(_e({}, r))
          .appendTo(i)[0];
        return (
          f.set({ caret: o, element: t, before: e }),
          e && Xa(o).addClass("mce-visual-caret-before"),
          (c = _r.setInterval(function () {
            u()
              ? Xa("div.mce-visual-caret", i).toggleClass(
                  "mce-visual-caret-hidden"
                )
              : Xa("div.mce-visual-caret", i).addClass(
                  "mce-visual-caret-hidden"
                );
          }, 500)),
          (n = t.ownerDocument.createRange()).setStart(l, 0),
          n.setEnd(l, 0),
          n
        );
      },
      hide: s,
      getCss: function () {
        return ".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}";
      },
      reposition: function () {
        f.on(function (e) {
          var t = qs(i, e.element, e.before);
          Xa(e.caret).css(_e({}, t));
        });
      },
      destroy: function () {
        return _r.clearInterval(c);
      },
    };
  }
  function Ws() {
    return Cc.isIE() || Cc.isEdge() || Cc.isFirefox();
  }
  function Ks(e) {
    return Ec(e) || (cn(e) && Ws());
  }
  function Xs(e, t) {
    for (var n; (n = e(t)); ) if (!Rc(n)) return n;
    return null;
  }
  function Ys(e, t, n, r, o) {
    var i = new Rr(e, r),
      a = kc(e) || Rc(e);
    if (t < 0) {
      if (a && n((e = Xs(i.prev.bind(i), !0)))) return e;
      for (; (e = Xs(i.prev.bind(i), o)); ) if (n(e)) return e;
    }
    if (0 < t) {
      if (a && n((e = Xs(i.next.bind(i), !0)))) return e;
      for (; (e = Xs(i.next.bind(i), o)); ) if (n(e)) return e;
    }
    return null;
  }
  function Gs(e, t) {
    for (; e && e !== t; ) {
      if (_c(e)) return e;
      e = e.parentNode;
    }
    return null;
  }
  function Js(e, t, n) {
    return Gs(e.container(), n) === Gs(t.container(), n);
  }
  function Qs(e, t) {
    if (!t) return null;
    var n = t.container(),
      r = t.offset();
    return Dc(n) ? n.childNodes[r + e] : null;
  }
  function Zs(e, t) {
    var n = t.ownerDocument.createRange();
    return (
      e
        ? (n.setStartBefore(t), n.setEndBefore(t))
        : (n.setStartAfter(t), n.setEndAfter(t)),
      n
    );
  }
  function ec(e, t, n) {
    for (var r, o, i = e ? "previousSibling" : "nextSibling"; n && n !== t; ) {
      var a = n[i];
      if ((Ac(a) && (a = a[i]), kc(a) || Nc(a))) {
        if (((o = n), Gs(a, (r = t)) === Gs(o, r))) return a;
        break;
      }
      if (Tc(a)) break;
      n = n.parentNode;
    }
    return null;
  }
  function tc(e, t, n) {
    var r,
      o = R(ec, !0, t),
      i = R(ec, !1, t),
      a = n.startContainer,
      u = n.startOffset;
    if (Pr(a)) {
      var s = (a = Dc(a) ? a : a.parentNode).getAttribute("data-mce-caret");
      if ("before" === s && Ks((r = a.nextSibling))) return Oc(r);
      if ("after" === s && Ks((r = a.previousSibling))) return Bc(r);
    }
    if (!n.collapsed) return n;
    if (jn(a)) {
      if (Ac(a)) {
        if (1 === e) {
          if ((r = i(a))) return Oc(r);
          if ((r = o(a))) return Bc(r);
        }
        if (-1 === e) {
          if ((r = o(a))) return Bc(r);
          if ((r = i(a))) return Oc(r);
        }
        return n;
      }
      if (Ao(a) && u >= a.data.length - 1)
        return 1 === e && (r = i(a)) ? Oc(r) : n;
      if (_o(a) && u <= 1) return -1 === e && (r = o(a)) ? Bc(r) : n;
      if (u === a.data.length) return (r = i(a)) ? Oc(r) : n;
      if (0 === u) return (r = o(a)) ? Bc(r) : n;
    }
    return n;
  }
  function nc(e, t) {
    return ve.from(Qs(e ? 0 : -1, t)).filter(kc);
  }
  function rc(e, t, n) {
    var r = tc(e, t, n);
    return -1 === e ? ss.fromRangeStart(r) : ss.fromRangeEnd(r);
  }
  function oc(e) {
    return ve.from(e.getNode()).map(kt.fromDom);
  }
  function ic(e, t) {
    for (; (t = e(t)); ) if (t.isVisible()) return t;
    return t;
  }
  function ac(e, t) {
    var n = Js(e, t);
    return !(n || !Wn(e.getNode())) || n;
  }
  (ss.fromRangeStart = function (e) {
    return ss(e.startContainer, e.startOffset);
  }),
    (ss.fromRangeEnd = function (e) {
      return ss(e.endContainer, e.endOffset);
    }),
    (ss.after = function (e) {
      return ss(e.parentNode, is(e) + 1);
    }),
    (ss.before = function (e) {
      return ss(e.parentNode, is(e));
    }),
    (ss.isAbove = function (e, t) {
      return dn(Q(t.getClientRects()), Z(e.getClientRects()), Tu).getOr(!1);
    }),
    (ss.isBelow = function (e, t) {
      return dn(Z(t.getClientRects()), Q(e.getClientRects()), Ou).getOr(!1);
    }),
    (ss.isAtStart = function (e) {
      return !!e && e.isAtStart();
    }),
    (ss.isAtEnd = function (e) {
      return !!e && e.isAtEnd();
    }),
    (ss.isTextPosition = function (e) {
      return !!e && jn(e.container());
    }),
    (ss.isElementPosition = function (e) {
      return !1 === ss.isTextPosition(e);
    });
  var uc,
    sc,
    cc = jn,
    lc = sn,
    fc = Za.nodeIndex,
    dc = function (e) {
      var t = e.parentNode;
      return lc(t) ? dc(t) : t;
    },
    mc = function (e) {
      return e
        ? me(
            e.childNodes,
            function (e, t) {
              return (
                lc(t) && "BR" !== t.nodeName
                  ? (e = e.concat(mc(t)))
                  : e.push(t),
                e
              );
            },
            []
          )
        : [];
    },
    gc = Yn,
    pc = R(Cs, u, !0),
    hc = Za.DOM,
    vc = zn,
    bc = jn,
    yc = function (e) {
      vc(e) && Ir(e) && (Mr(e) ? e.removeAttribute("data-mce-caret") : Fs(e)),
        bc(e) && (zs(e), 0 === e.data.length && Fs(e));
    },
    Cc = dt().browser,
    xc = Yn,
    wc = Jn,
    Sc = Gn,
    Ec = function (e) {
      return xc(e) || wc(e);
    },
    kc = Yn,
    Nc = Jn,
    _c = an("display", "block table table-cell table-caption list-item"),
    Ac = Ir,
    Rc = Pr,
    Dc = zn,
    Tc = jr,
    Oc = R(Zs, !0),
    Bc = R(Zs, !1);
  function Pc(e, t) {
    return e.hasChildNodes() && t < e.childNodes.length
      ? e.childNodes[t]
      : null;
  }
  function Lc(e, t) {
    if (0 < e) {
      if (Yl(t.previousSibling) && !Wl(t.previousSibling)) return ss.before(t);
      if (Wl(t)) return ss(t, 0);
    }
    if (e < 0) {
      if (Yl(t.nextSibling) && !Wl(t.nextSibling)) return ss.after(t);
      if (Wl(t)) return ss(t, t.data.length);
    }
    return e < 0 && !Xl(t) ? ss.after(t) : ss.before(t);
  }
  function Ic(t) {
    return {
      next: function (e) {
        return Jl(uc.Forwards, e, t);
      },
      prev: function (e) {
        return Jl(uc.Backwards, e, t);
      },
    };
  }
  function Mc(e) {
    return ss.isTextPosition(e) ? 0 === e.offset() : jr(e.getNode());
  }
  function Fc(e) {
    if (ss.isTextPosition(e)) {
      var t = e.container();
      return e.offset() === t.data.length;
    }
    return jr(e.getNode(!0));
  }
  function Uc(e, t) {
    return (
      !ss.isTextPosition(e) &&
      !ss.isTextPosition(t) &&
      e.getNode() === t.getNode(!0)
    );
  }
  function zc(o, i, a) {
    return Ql(o, i, a).bind(function (e) {
      return Js(a, e, i) &&
        ((t = a),
        (n = e),
        o
          ? !Uc(t, n) &&
            (ss.isTextPosition((r = t)) || !Wn(r.getNode())) &&
            Fc(t) &&
            Mc(n)
          : !Uc(n, t) && Mc(t) && Fc(n))
        ? Ql(o, i, e)
        : ve.some(e);
      var t, n, r;
    });
  }
  function Hc(e, t) {
    var n,
      r,
      o,
      i,
      a,
      u = e ? t.firstChild : t.lastChild;
    return jn(u)
      ? ve.some(ss(u, e ? 0 : u.data.length))
      : u
      ? jr(u)
        ? ve.some(e ? ss.before(u) : Wn((a = u)) ? ss.before(a) : ss.after(a))
        : ((r = t),
          (o = u),
          (i = (n = e) ? ss.before(o) : ss.after(o)),
          Ql(n, r, i))
      : ve.none();
  }
  function jc(e) {
    return zn(e) && e.id === of;
  }
  function Vc(e, t) {
    for (; t && t !== e; ) {
      if (t.id === of) return t;
      t = t.parentNode;
    }
    return null;
  }
  function qc(e) {
    return Et.isArray(e.start);
  }
  function $c(e, t) {
    return (
      zn(t) &&
        e.isBlock(t) &&
        !t.innerHTML &&
        !xt.ie &&
        (t.innerHTML = '<br data-mce-bogus="1" />'),
      t
    );
  }
  function Wc(e, t, n) {
    return (
      !1 === t.hasChildNodes() &&
      Vc(e, t) &&
      ((o = n),
      (i = (r = t).ownerDocument.createTextNode(wo)),
      r.appendChild(i),
      o.setStart(i, 0),
      o.setEnd(i, 0),
      1)
    );
    var r, o, i;
  }
  function Kc(e, t, n, r) {
    var o,
      i,
      a,
      u,
      s = n[t ? "start" : "end"],
      c = e.getRoot();
    if (s) {
      for (a = s[0], i = c, o = s.length - 1; 1 <= o; o--) {
        if (((u = i.childNodes), Wc(c, i, r))) return 1;
        if (s[o] > u.length - 1)
          return (
            Wc(c, i, r) ||
            (function (t) {
              return rf(i).fold(D, function (e) {
                return (
                  t.setStart(e.container(), e.offset()),
                  t.setEnd(e.container(), e.offset()),
                  !0
                );
              });
            })(r)
          );
        i = u[s[o]];
      }
      3 === i.nodeType && (a = Math.min(s[0], i.nodeValue.length)),
        1 === i.nodeType && (a = Math.min(s[0], i.childNodes.length)),
        t ? r.setStart(i, a) : r.setEnd(i, a);
    }
    return 1;
  }
  function Xc(e) {
    return jn(e) && 0 < e.data.length;
  }
  function Yc(e, t, n) {
    var r,
      o,
      i,
      a,
      u,
      s,
      c = e.get(n.id + "_" + t),
      l = n.keep;
    if (c) {
      if (
        ((r = c.parentNode),
        (o =
          "start" === t
            ? l
              ? c.hasChildNodes()
                ? ((r = c.firstChild), 1)
                : Xc(c.nextSibling)
                ? ((r = c.nextSibling), 0)
                : Xc(c.previousSibling)
                ? ((r = c.previousSibling), c.previousSibling.data.length)
                : ((r = c.parentNode), e.nodeIndex(c) + 1)
              : e.nodeIndex(c)
            : l
            ? c.hasChildNodes()
              ? ((r = c.firstChild), 1)
              : Xc(c.previousSibling)
              ? ((r = c.previousSibling), c.previousSibling.data.length)
              : ((r = c.parentNode), e.nodeIndex(c))
            : e.nodeIndex(c)),
        (u = r),
        (s = o),
        !l)
      ) {
        for (
          a = c.previousSibling,
            i = c.nextSibling,
            Et.each(Et.grep(c.childNodes), function (e) {
              jn(e) && (e.nodeValue = e.nodeValue.replace(/\uFEFF/g, ""));
            });
          (c = e.get(n.id + "_" + t));

        )
          e.remove(c, !0);
        a &&
          i &&
          a.nodeType === i.nodeType &&
          jn(a) &&
          !xt.opera &&
          ((o = a.nodeValue.length),
          a.appendData(i.nodeValue),
          e.remove(i),
          (u = a),
          (s = o));
      }
      return ve.some(ss(u, s));
    }
    return ve.none();
  }
  function Gc(t, e) {
    !(function (e, t) {
      var n,
        r,
        o,
        i,
        a,
        u,
        s,
        c,
        l,
        f,
        d,
        m,
        g = e.dom;
      if (t) {
        if (qc(t))
          return (
            (d = t),
            (m = (f = g).createRng()),
            Kc(f, !0, d, m) && Kc(f, !1, d, m) ? ve.some(m) : ve.none()
          );
        if (X(t.start))
          return ve.some(
            ((s = t),
            (c = (u = g).createRng()),
            (l = gs(u.getRoot(), s.start)),
            c.setStart(l.container(), l.offset()),
            (l = gs(u.getRoot(), s.end)),
            c.setEnd(l.container(), l.offset()),
            c)
          );
        if (ke(t, "id"))
          return dn(
            (a = Yc((o = g), "start", (i = t))),
            Yc(o, "end", i).or(a),
            function (e, t) {
              var n = o.createRng();
              return (
                n.setStart($c(o, e.container()), e.offset()),
                n.setEnd($c(o, t.container()), t.offset()),
                n
              );
            }
          );
        if (ke(t, "name"))
          return (
            (n = g),
            ve.from(n.select((r = t).name)[r.index]).map(function (e) {
              var t = n.createRng();
              return t.selectNode(e), t;
            })
          );
        if (ke(t, "rng")) return ve.some(t.rng);
      }
      return ve.none();
    })(t, e).each(function (e) {
      t.setRng(e);
    });
  }
  function Jc(e) {
    return (
      zn(e) &&
      "SPAN" === e.tagName &&
      "bookmark" === e.getAttribute("data-mce-type")
    );
  }
  function Qc(e) {
    return "" !== e && -1 !== " \f\n\r\t\v".indexOf(e);
  }
  function Zc(e) {
    return !Qc(e) && !uf(e);
  }
  function el(e) {
    return e.nodeType;
  }
  function tl(e, t, n) {
    var r,
      o = n.startOffset,
      i = n.startContainer;
    if (
      (i !== n.endContainer ||
        !(r = i.childNodes[o]) ||
        !/^(IMG)$/.test(r.nodeName)) &&
      zn(i)
    ) {
      var a = i.childNodes,
        u = void 0;
      o < a.length
        ? ((i = a[o]), (u = new Rr(i, e.getParent(i, e.isBlock))))
        : ((i = a[a.length - 1]),
          (u = new Rr(i, e.getParent(i, e.isBlock))).next(!0));
      for (var s = u.current(); s; s = u.next())
        if (jn(s) && !sf(s)) return n.setStart(s, 0), t.setRng(n), 0;
    }
  }
  function nl(e, t, n) {
    if (e) {
      var r = t ? "nextSibling" : "previousSibling";
      for (e = n ? e : e[r]; e; e = e[r]) if (zn(e) || !sf(e)) return e;
    }
  }
  function rl(e, t) {
    return (
      el(t) && (t = t.nodeName),
      !!e.schema.getTextBlockElements()[t.toLowerCase()]
    );
  }
  function ol(e, t, n) {
    return e.schema.isValidChild(t, n);
  }
  function il(e, n) {
    return (
      y(e)
        ? (e = e(n))
        : V(n) &&
          (e = e.replace(/%(\w+)/g, function (e, t) {
            return n[t] || e;
          })),
      e
    );
  }
  function al(e, t) {
    return (
      (e = "" + ((e = e || "").nodeName || e)),
      (t = "" + ((t = t || "").nodeName || t)),
      e.toLowerCase() === t.toLowerCase()
    );
  }
  function ul(e, t, n) {
    return (
      ("color" !== n && "backgroundColor" !== n) || (t = e.toHex(t)),
      "fontWeight" === n && 700 === t && (t = "bold"),
      "" +
        ("fontFamily" === n
          ? t.replace(/[\'\"]/g, "").replace(/,\s+/g, ",")
          : t)
    );
  }
  function sl(e, t, n) {
    return ul(e, e.getStyle(t, n), n);
  }
  function cl(t, e) {
    var n;
    return (
      t.getParent(e, function (e) {
        return (n = t.getStyle(e, "text-decoration")) && "none" !== n;
      }),
      n
    );
  }
  function ll(e, t, n) {
    return e.getParents(t, n, e.getRoot());
  }
  function fl(e, t) {
    return F(e.formatter.get(t), function (t) {
      function o(e) {
        return 1 < e.length && "%" === e.charAt(0);
      }
      return F(["styles", "attributes"], function (e) {
        return ue(t, e).exists(function (e) {
          var n, r;
          return F(
            S(e)
              ? e
              : ((n = u),
                (r = []),
                ne(e, function (e, t) {
                  r.push(n(e, t));
                }),
                r),
            o
          );
        });
      });
    });
  }
  function dl(e) {
    return se(e, "block");
  }
  function ml(e) {
    return se(e, "selector");
  }
  function gl(e) {
    return se(e, "inline");
  }
  function pl(e) {
    return ml(e) && !1 !== e.expand && !gl(e);
  }
  function hl(e, t) {
    for (var n = t; n; ) {
      if (zn(n) && e.getContentEditable(n))
        return "false" === e.getContentEditable(n) ? n : t;
      n = n.parentNode;
    }
    return t;
  }
  function vl(e, t, n, r) {
    for (var o = t.data, i = n; e ? 0 <= i : i < o.length; e ? i-- : i++)
      if (r(o.charAt(i))) return e ? i + 1 : i;
    return -1;
  }
  function bl(e, t, n) {
    return vl(e, t, n, function (e) {
      return uf(e) || Qc(e);
    });
  }
  function yl(e, t, n) {
    return vl(e, t, n, Zc);
  }
  function Cl(i, e, t, n, a, r) {
    function o(e, t, n) {
      var r = _u(i),
        o = a ? r.backwards : r.forwards;
      return ve.from(
        o(
          e,
          t,
          function (e, t) {
            return cf(e.parentNode) ? -1 : n(a, (u = e), t);
          },
          s
        )
      );
    }
    var u,
      s = i.getParent(t, i.isBlock) || e;
    return o(t, n, bl)
      .bind(function (e) {
        return r ? o(e.container, e.offset + (a ? -1 : 0), yl) : ve.some(e);
      })
      .orThunk(function () {
        return u
          ? ve.some({ container: u, offset: a ? 0 : u.length })
          : ve.none();
      });
  }
  function xl(e, t, n, r, o) {
    jn(r) && Pe(r.data) && r[o] && (r = r[o]);
    for (var i = lf(e, r), a = 0; a < i.length; a++)
      for (var u = 0; u < t.length; u++) {
        var s = t[u];
        if (
          (!V(s.collapsed) || s.collapsed === n.collapsed) &&
          ml(s) &&
          e.is(i[a], s.selector)
        )
          return i[a];
      }
    return r;
  }
  function wl(t, e, n, r) {
    var o,
      i = n,
      a = t.dom,
      u = a.getRoot(),
      s = e[0];
    if (
      ((i = dl(s) ? (s.wrapper ? null : a.getParent(n, s.block, u)) : i) ||
        ((o = a.getParent(n, "LI,TD,TH")),
        (i = a.getParent(
          jn(n) ? n.parentNode : n,
          function (e) {
            return e !== u && df(t, e);
          },
          o
        ))),
      !(i = (i && dl(s) && s.wrapper && lf(a, i, "ul,ol").reverse()[0]) || i))
    )
      for (i = n; i[r] && !a.isBlock(i[r]) && !al((i = i[r]), "br"); );
    return i || n;
  }
  function Sl(e, t, n, r, o) {
    var i,
      a = n,
      u = o ? "previousSibling" : "nextSibling",
      s = e.getRoot();
    if (jn(n) && !ff(n) && (o ? 0 < r : r < n.data.length)) return n;
    for (;;) {
      if (!t[0].block_expand && e.isBlock(a)) return a;
      for (var c = a[u]; c; c = c[u]) {
        var l = jn(c) && !mf(e, s, c, u);
        if (
          !cf(c) &&
          (!Wn((i = c)) ||
            !i.getAttribute("data-mce-bogus") ||
            i.nextSibling) &&
          !ff(c, l)
        )
          return a;
      }
      if (a === s || a.parentNode === s) {
        n = a;
        break;
      }
      a = a.parentNode;
    }
    return n;
  }
  function El(e) {
    return cf(e.parentNode) || cf(e);
  }
  function kl(e, t, n, r) {
    void 0 === r && (r = !1);
    var o = t.startContainer,
      i = t.startOffset,
      a = t.endContainer,
      u = t.endOffset,
      s = e.dom,
      c = n[0];
    return (
      zn(o) && o.hasChildNodes() && ((o = Lu(o, i)), jn(o) && (i = 0)),
      zn(a) &&
        a.hasChildNodes() &&
        ((a = Lu(a, t.collapsed ? u : u - 1)),
        jn(a) && (u = a.nodeValue.length)),
      (o = hl(s, o)),
      (a = hl(s, a)),
      El(o) &&
        ((o = cf(o) ? o : o.parentNode),
        (o = t.collapsed ? o.previousSibling || o : o.nextSibling || o),
        jn(o) && (i = t.collapsed ? o.length : 0)),
      El(a) &&
        ((a = cf(a) ? a : a.parentNode),
        (a = t.collapsed ? a.nextSibling || a : a.previousSibling || a),
        jn(a) && (u = t.collapsed ? 0 : a.length)),
      t.collapsed &&
        (Cl(s, e.getBody(), o, i, !0, r).each(function (e) {
          var t = e.container,
            n = e.offset;
          (o = t), (i = n);
        }),
        Cl(s, e.getBody(), a, u, !1, r).each(function (e) {
          var t = e.container,
            n = e.offset;
          (a = t), (u = n);
        })),
      (gl(c) || c.block_expand) &&
        ((gl(c) && jn(o) && 0 !== i) || (o = Sl(s, n, o, i, !0)),
        (gl(c) && jn(a) && u !== a.nodeValue.length) ||
          (a = Sl(s, n, a, u, !1))),
      pl(c) &&
        ((o = xl(s, n, t, o, "previousSibling")),
        (a = xl(s, n, t, a, "nextSibling"))),
      (dl(c) || ml(c)) &&
        ((o = wl(e, n, o, "previousSibling")),
        (a = wl(e, n, a, "nextSibling")),
        dl(c) &&
          (s.isBlock(o) || (o = Sl(s, n, o, i, !0)),
          s.isBlock(a) || (a = Sl(s, n, a, u, !1)))),
      zn(o) && ((i = s.nodeIndex(o)), (o = o.parentNode)),
      zn(a) && ((u = s.nodeIndex(a) + 1), (a = a.parentNode)),
      { startContainer: o, startOffset: i, endContainer: a, endOffset: u }
    );
  }
  function Nl(n, e, u) {
    function s(e) {
      var t = e[0];
      jn(t) && t === i && o >= t.data.length && e.splice(0, 1);
      var n = e[e.length - 1];
      return (
        0 === a &&
          0 < e.length &&
          n === l &&
          jn(n) &&
          e.splice(e.length - 1, 1),
        e
      );
    }
    function c(e, t, n) {
      for (var r = []; e && e !== n; e = e[t]) r.push(e);
      return r;
    }
    function t(e, t) {
      return n.getParent(
        e,
        function (e) {
          return e.parentNode === t;
        },
        t
      );
    }
    function r(e, t, n) {
      var r = n ? "nextSibling" : "previousSibling",
        o = e;
      for (o.parentNode; o && o !== t; o = i) {
        var i = o.parentNode,
          a = c(o === e ? o : o[r], r);
        a.length && (n || a.reverse(), u(s(a)));
      }
    }
    var o = e.startOffset,
      i = Lu(e.startContainer, o),
      a = e.endOffset,
      l = Lu(e.endContainer, a - 1);
    if (i === l) return u(s([i]));
    var f = n.findCommonAncestor(i, l);
    if (n.isChildOf(i, l)) return r(i, f, !0);
    if (n.isChildOf(l, i)) return r(l, f);
    var d = t(i, f) || i,
      m = t(l, f) || l;
    r(i, d, !0);
    var g = c(
      d === i ? d : d.nextSibling,
      "nextSibling",
      m === l ? m.nextSibling : m
    );
    g.length && u(s(g)), r(l, m);
  }
  function _l(e) {
    var t = [];
    if (e) for (var n = 0; n < e.rangeCount; n++) t.push(e.getRangeAt(n));
    return t;
  }
  function Al(e, t) {
    var n = bu(t, "td[data-mce-selected],th[data-mce-selected]");
    return 0 < n.length
      ? n
      : U(
          H(e, function (e) {
            var t = Pu(e);
            return t ? [kt.fromDom(t)] : [];
          }),
          bo
        );
  }
  function Rl(e) {
    return Al(_l(e.selection.getSel()), kt.fromDom(e.getBody()));
  }
  function Dl(e, t) {
    return hr(e, "table", t);
  }
  function Tl(o, e) {
    return dn(
      ((r = e.startContainer),
      (i = e.startOffset),
      jn(r)
        ? 0 === i
          ? ve.some(kt.fromDom(r))
          : ve.none()
        : ve.from(r.childNodes[i]).map(kt.fromDom)),
      ((t = e.endContainer),
      (n = e.endOffset),
      jn(t)
        ? n === t.data.length
          ? ve.some(kt.fromDom(t))
          : ve.none()
        : ve.from(t.childNodes[n - 1]).map(kt.fromDom)),
      function (e, t) {
        var n = M(gf(o), R(je, e)),
          r = M(pf(o), R(je, t));
        return n.isSome() && r.isSome();
      }
    ).getOr(!1);
    var t, n, r, i;
  }
  function Ol(e, t, n, r) {
    var o = n,
      i = new Rr(n, o),
      a = ae(e.schema.getMoveCaretBeforeOnEnterElements(), function (e, t) {
        return !T(["td", "th", "table"], t.toLowerCase());
      });
    do {
      if (jn(n) && 0 !== Et.trim(n.nodeValue).length)
        return r ? t.setStart(n, 0) : t.setEnd(n, n.nodeValue.length), 0;
      if (a[n.nodeName])
        return (
          r
            ? t.setStartBefore(n)
            : "BR" === n.nodeName
            ? t.setEndBefore(n)
            : t.setEndAfter(n),
          0
        );
    } while ((n = r ? i.next() : i.prev()));
    "BODY" === o.nodeName &&
      (r ? t.setStart(o, 0) : t.setEnd(o, o.childNodes.length));
  }
  function Bl(e) {
    var t = e.selection.getSel();
    return t && 0 < t.rangeCount;
  }
  function Pl(r, o) {
    var e = Rl(r);
    0 < e.length
      ? Y(e, function (e) {
          var t = e.dom,
            n = r.dom.createRng();
          n.setStartBefore(t), n.setEndAfter(t), o(n, !0);
        })
      : o(r.selection.getRng(), !1);
  }
  function Ll(e, t, n) {
    var r = ws(e, t);
    n(r), e.moveToBookmark(r);
  }
  function Il(e) {
    return hf.get(e);
  }
  function Ml(e, t, n, r) {
    var o = t.uid,
      i = void 0 === o ? xu("mce-annotation") : o,
      a = (function (e, t) {
        var n = {};
        for (o in e)
          Object.prototype.hasOwnProperty.call(e, o) &&
            t.indexOf(o) < 0 &&
            (n[o] = e[o]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var r = 0, o = Object.getOwnPropertySymbols(e);
            r < o.length;
            r++
          )
            t.indexOf(o[r]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
              (n[o[r]] = e[o[r]]);
        return n;
      })(t, ["uid"]),
      u = kt.fromTag("span", e);
    hu(u, qu()), pn(u, "" + Wu(), i), pn(u, "" + $u(), n);
    var s,
      c = r(i, a),
      l = c.attributes,
      f = c.classes,
      d = void 0 === f ? [] : f;
    return (
      hn(u, void 0 === l ? {} : l),
      (s = u),
      Y(d, function (e) {
        hu(s, e);
      }),
      u
    );
  }
  function Fl(u, e, t, n, r) {
    function s() {
      d.clear();
    }
    function c(e) {
      Y(e, o);
    }
    var l = [],
      f = Ml(u.getDoc(), r, t, n),
      d = fu(),
      o = function (e) {
        var t, n, r, o, i, a;
        switch (
          ((r = u),
          (i = "span"),
          (a = Nt((o = e))),
          Ot(o).fold(
            function () {
              return "skipping";
            },
            function (e) {
              return "br" === a || (_n((n = o)) && Il(n) === wo)
                ? "valid"
                : Nn((t = o)) && vu(t, qu())
                ? "existing"
                : jc(o.dom)
                ? "caret"
                : ol(r, i, a) && ol(r, Nt(e), i)
                ? "valid"
                : "invalid-child";
              var t, n;
            }
          ))
        ) {
          case "invalid-child":
            s(), c(Dn(e)), s();
            break;
          case "valid":
            qt(
              (t = e),
              (n = d.get().getOrThunk(function () {
                var e = Eu(f);
                return l.push(e), d.set(e), e;
              }))
            ),
              Pn(n, t);
        }
      };
    return (
      Nl(u.dom, e, function (e) {
        s(), c(A(e, kt.fromDom));
      }),
      l
    );
  }
  function Ul(o) {
    var n,
      e,
      r,
      i =
        ((n = {}),
        {
          register: function (e, t) {
            n[e] = { name: e, settings: t };
          },
          lookup: function (e) {
            return ue(n, e).map(function (e) {
              return e.settings;
            });
          },
        });
    (r = i),
      (e = o).on("init", function () {
        e.serializer.addNodeFilter("span", function (e) {
          Y(e, function (t) {
            ve.from(t.attr($u()))
              .bind(r.lookup)
              .each(function (e) {
                !1 === e.persistent && t.unwrap();
              });
          });
        });
      });
    var a = Cu(o);
    return {
      register: function (e, t) {
        i.register(e, t);
      },
      annotate: function (t, n) {
        i.lookup(t).each(function (e) {
          var u, s, c, l;
          (s = t),
            (c = e),
            (l = n),
            (u = o).undoManager.transact(function () {
              var e,
                t,
                n,
                r,
                o = u.selection,
                i = o.getRng(),
                a = 0 < Rl(u).length;
              i.collapsed &&
                !a &&
                ((n = kl((e = u), (t = i), [{ inline: "span" }])),
                t.setStart(n.startContainer, n.startOffset),
                t.setEnd(n.endContainer, n.endOffset),
                e.selection.setRng(t)),
                o.getRng().collapsed && !a
                  ? (wu((r = Ml(u.getDoc(), l, s, c.decorate)), xo),
                    o.getRng().insertNode(r.dom),
                    o.select(r.dom))
                  : Ll(o, !1, function () {
                      Pl(u, function (e) {
                        Fl(u, e, s, c.decorate, l);
                      });
                    });
            });
        });
      },
      annotationChanged: function (e, t) {
        a.addListener(e, t);
      },
      remove: function (e) {
        yu(o, ve.some(e)).each(function (e) {
          Y(e.elements, Yt);
        });
      },
      getAll: function (e) {
        var t, n, r;
        return re(
          ((t = e),
          (n = bu(kt.fromDom(o.getBody()), "[" + $u() + '="' + t + '"]')),
          (r = {}),
          Y(n, function (e) {
            var t = vn(e, Wu()),
              n = ue(r, t).getOr([]);
            r[t] = n.concat([e]);
          }),
          r),
          function (e) {
            return A(e, function (e) {
              return e.dom;
            });
          }
        );
      },
    };
  }
  function zl(e) {
    return { getBookmark: R(af, e), moveToBookmark: R(Gc, e) };
  }
  ((sc = uc = uc || {})[(sc.Backwards = -1)] = "Backwards"),
    (sc[(sc.Forwards = 1)] = "Forwards");
  function Hl(e) {
    return (
      Po(e) ||
      (!!Mo((t = e)) &&
        !0 !==
          L(
            xe(t.getElementsByTagName("*")),
            function (e, t) {
              return e || Ro(t);
            },
            !1
          ))
    );
    var t;
  }
  var jl,
    Vl,
    ql,
    $l = Yn,
    Wl = jn,
    Kl = zn,
    Xl = Wn,
    Yl = jr,
    Gl = Vr,
    Jl = function (e, t, n) {
      var r, o, i;
      if (!Kl(n) || !t) return null;
      if (t.isEqual(ss.after(n)) && n.lastChild) {
        if (
          ((i = ss.after(n.lastChild)),
          e < 0 && Yl(n.lastChild) && Kl(n.lastChild))
        )
          return Xl(n.lastChild) ? ss.before(n.lastChild) : i;
      } else i = t;
      var a,
        u,
        s,
        c = i.container(),
        l = i.offset();
      if (Wl(c)) {
        if (e < 0 && 0 < l) return ss(c, --l);
        if (0 < e && l < c.length) return ss(c, ++l);
        r = c;
      } else {
        if (e < 0 && 0 < l && ((f = Pc(c, l - 1)), Yl(f)))
          return !Hl(f) && (o = Ys(f, e, Gl, f))
            ? Wl(o)
              ? ss(o, o.data.length)
              : ss.after(o)
            : Wl(f)
            ? ss(f, f.data.length)
            : ss.before(f);
        if (0 < e && l < c.childNodes.length && ((f = Pc(c, l)), Yl(f)))
          return Xl(f)
            ? ((a = n),
              (s = (u = f).nextSibling) && Yl(s)
                ? Wl(s)
                  ? ss(s, 0)
                  : ss.before(s)
                : Jl(uc.Forwards, ss.after(u), a))
            : !Hl(f) && (o = Ys(f, e, Gl, f))
            ? Wl(o)
              ? ss(o, 0)
              : ss.before(o)
            : Wl(f)
            ? ss(f, 0)
            : ss.after(f);
        r = f || i.getNode();
      }
      if (
        ((0 < e && i.isAtEnd()) || (e < 0 && i.isAtStart())) &&
        ((r = Ys(r, e, w, n, !0)), Gl(r, n))
      )
        return Lc(e, r);
      var f = Ys(r, e, Gl, n),
        d = pe(
          U(
            (function (e, t) {
              for (var n = []; e && e !== t; ) n.push(e), (e = e.parentNode);
              return n;
            })(c, n),
            $l
          )
        );
      return !d || (f && d.contains(f))
        ? f
          ? Lc(e, f)
          : null
        : 0 < e
        ? ss.after(d)
        : ss.before(d);
    },
    Ql = function (e, t, n) {
      var r = Ic(t);
      return ve.from(e ? r.next(n) : r.prev(n));
    },
    Zl = function (t, n, e, r) {
      return zc(t, n, e).bind(function (e) {
        return r(e) ? Zl(t, n, e, r) : ve.some(e);
      });
    },
    ef = R(Ql, !0),
    tf = R(Ql, !1),
    nf = R(Hc, !0),
    rf = R(Hc, !1),
    of = "_mce_caret",
    af = function (e, t, n) {
      return 2 === t
        ? Cs(Eo, n, e)
        : 3 === t
        ? ((o = (r = e).getRng()),
          {
            start: ms(r.dom.getRoot(), ss.fromRangeStart(o)),
            end: ms(r.dom.getRoot(), ss.fromRangeEnd(o)),
          })
        : t
        ? { rng: e.getRng() }
        : ws(e, !1);
      var r, o;
    },
    uf =
      ((jl = xo),
      function (e) {
        return jl === e;
      }),
    sf = function (e, t) {
      return (
        void 0 === t && (t = !1),
        !(!V(e) || !jn(e)) && qr(t ? e.data.replace(/ /g, "\xa0") : e.data)
      );
    },
    cf = Jc,
    lf = ll,
    ff = sf,
    df = rl,
    mf = function (e, t, n, r) {
      var o = n.parentNode;
      return (
        !V(n[r]) && (!(o !== t && !K(o) && !e.isBlock(o)) || mf(e, t, o, r))
      );
    },
    gf = function (t) {
      return Ft(t).fold(J([t]), function (e) {
        return [t].concat(gf(e));
      });
    },
    pf = function (t) {
      return Ut(t).fold(J([t]), function (e) {
        return "br" === Nt(e)
          ? Bt(e)
              .map(function (e) {
                return [t].concat(pf(e));
              })
              .getOr([])
          : [t].concat(pf(e));
      });
    },
    hf =
      ((Vl = _n),
      {
        get: function (e) {
          if (!Vl(e)) throw new Error("Can only get text value of a text node");
          return ql(e).getOr("");
        },
        getOption: (ql = function (e) {
          return Vl(e) ? ve.from(e.dom.nodeValue) : ve.none();
        }),
        set: function (e, t) {
          if (!Vl(e))
            throw new Error("Can only set raw text value of a text node");
          e.dom.nodeValue = t;
        },
      });
  function vf(e, t) {
    for (; t && t !== e; ) {
      if (Xn(t) || Yn(t)) return t;
      t = t.parentNode;
    }
    return null;
  }
  function bf(t, n, e) {
    if (!e.collapsed) {
      if (
        xt.browser.isIE() &&
        e.startOffset === e.endOffset - 1 &&
        e.startContainer === e.endContainer
      ) {
        var r = e.startContainer.childNodes[e.startOffset];
        if (zn(r))
          return F(r.getClientRects(), function (e) {
            return Bu(e, t, n);
          });
      }
      return F(e.getClientRects(), function (e) {
        return Bu(e, t, n);
      });
    }
  }
  function yf(e, t, n) {
    return e.fire(t, n);
  }
  function Cf(e, t, n, r) {
    return e.fire("FormatApply", { format: t, node: n, vars: r });
  }
  function xf(e, t, n, r) {
    return e.fire("FormatRemove", { format: t, node: n, vars: r });
  }
  function wf(r, l) {
    function c(e) {
      return e && ("IMG" === e.nodeName || l.dom.is(e, "figure.image"));
    }
    function f(e) {
      return Jn(e) || T.hasClass(e, "mce-preview-object");
    }
    function n(e) {
      var t = e.target;
      !(function (e, t) {
        if ("longpress" !== e.type && 0 !== e.type.indexOf("touch"))
          return c(e.target) && !bf(e.clientX, e.clientY, t);
        var n = e.touches[0];
        return c(e.target) && !bf(n.clientX, n.clientY, t);
      })(e, l.selection.getRng()) ||
        e.isDefaultPrevented() ||
        l.selection.select(t);
    }
    function d(e) {
      return T.is(e, "figure.image")
        ? [e.querySelector("img")]
        : T.hasClass(e, "mce-preview-object") && V(e.firstElementChild)
        ? [e, e.firstElementChild]
        : [e];
    }
    function i(e) {
      var t = Bs(l);
      return (
        !!t &&
        "false" !== e.getAttribute("data-mce-resize") &&
        e !== l.getBody() &&
        (T.hasClass(e, "mce-preview-object")
          ? ze(kt.fromDom(e.firstElementChild), t)
          : ze(kt.fromDom(e), t))
      );
    }
    function a(e, t, n) {
      V(n) &&
        Y(d(e), function (e) {
          e.style[t] || !l.schema.isValid(e.nodeName.toLowerCase(), t)
            ? T.setStyle(e, t, n)
            : T.setAttrib(e, t, "" + n);
        });
    }
    function m(e, t, n) {
      a(e, "width", t), a(e, "height", n);
    }
    function g(e) {
      var t,
        n,
        r,
        o,
        i,
        a,
        u = e.screenX - C,
        s = e.screenY - x;
      (N = u * b[2] + w),
        (_ = s * b[3] + S),
        (N = N < 5 ? 5 : N),
        (_ = _ < 5 ? 5 : _),
        ((c(p) || f(p)) &&
        !1 !== l.getParam("resize_img_proportional", !0, "boolean")
          ? !Lf.modifierPressed(e)
          : Lf.modifierPressed(e)) &&
          (L(u) > L(s)
            ? ((_ = I(N * E)), (N = I(_ / E)))
            : ((N = I(_ / E)), (_ = I(N * E)))),
        m(h, N, _),
        (t = b.startPos.x + u),
        (n = b.startPos.y + s),
        T.setStyles(v, {
          left: (t = 0 < t ? t : 0),
          top: (n = 0 < n ? n : 0),
          display: "block",
        }),
        (v.innerHTML = N + " &times; " + _),
        b[2] < 0 &&
          h.clientWidth <= N &&
          T.setStyle(h, "left", void 0 + (w - N)),
        b[3] < 0 &&
          h.clientHeight <= _ &&
          T.setStyle(h, "top", void 0 + (S - _)),
        (u = M.scrollWidth - A) + (s = M.scrollHeight - R) != 0 &&
          T.setStyles(v, { left: t - u, top: n - s }),
        k ||
          ((r = p),
          (o = w),
          (i = S),
          (a = "corner-" + b.name),
          l.fire("ObjectResizeStart", {
            target: r,
            width: o,
            height: i,
            origin: a,
          }),
          (k = !0));
    }
    function o(e) {
      function t(e, t) {
        if (e)
          do {
            if (e === t) return 1;
          } while ((e = e.parentNode));
      }
      var n;
      k ||
        l.removed ||
        (O(
          T.select("img[data-mce-selected],hr[data-mce-selected]"),
          function (e) {
            e.removeAttribute(D);
          }
        ),
        (n = "mousedown" === e.type ? e.target : r.getNode()),
        t(
          (n = T.$(n).closest(
            "table,img,figure.image,hr,video,span.mce-preview-object"
          )[0]),
          M
        ) && (s(), t(r.getStart(!0), n) && t(r.getEnd(!0), n))
          ? z(n)
          : H());
    }
    function u(e) {
      return If(vf(l.getBody(), e));
    }
    function s() {
      try {
        l.getDoc().execCommand("enableObjectResizing", !1, "false");
      } catch (e) {}
    }
    var p,
      h,
      v,
      b,
      y,
      C,
      x,
      w,
      S,
      E,
      k,
      N,
      _,
      A,
      R,
      D = "data-mce-selected",
      T = l.dom,
      O = Et.each,
      B = l.getDoc(),
      P = document,
      L = Math.abs,
      I = Math.round,
      M = l.getBody(),
      F = {
        nw: [0, 0, -1, -1],
        ne: [1, 0, 1, -1],
        se: [1, 1, 1, 1],
        sw: [0, 1, -1, 1],
      },
      U = function () {
        var e,
          t,
          n,
          r,
          o = k;
        (k = !1),
          o && (a(p, "width", N), a(p, "height", _)),
          T.unbind(B, "mousemove", g),
          T.unbind(B, "mouseup", U),
          P !== B && (T.unbind(P, "mousemove", g), T.unbind(P, "mouseup", U)),
          T.remove(h),
          T.remove(v),
          T.remove(y),
          z(p),
          o &&
            ((e = p),
            (t = N),
            (n = _),
            (r = "corner-" + b.name),
            l.fire("ObjectResized", {
              target: e,
              width: t,
              height: n,
              origin: r,
            }),
            T.setAttrib(p, "style", T.getAttrib(p, "style"))),
          l.nodeChanged();
      },
      z = function (e) {
        j();
        var t = T.getPos(e, M),
          a = t.x,
          u = t.y,
          n = e.getBoundingClientRect(),
          s = n.width || n.right - n.left,
          c = n.height || n.bottom - n.top;
        p !== e && (H(), (p = e), (N = _ = 0));
        var r = l.fire("ObjectSelected", { target: e }),
          o = T.getAttrib(p, D, "1");
        i(e) && !r.isDefaultPrevented()
          ? O(F, function (o, i) {
              var e = T.get("mceResizeHandle" + i);
              e && T.remove(e),
                (e = T.add(M, "div", {
                  id: "mceResizeHandle" + i,
                  "data-mce-bogus": "all",
                  class: "mce-resizehandle",
                  unselectable: !0,
                  style: "cursor:" + i + "-resize; margin:0; padding:0",
                })),
                11 === xt.ie && (e.contentEditable = !1),
                T.bind(e, "mousedown", function (e) {
                  var t, n, r;
                  e.stopImmediatePropagation(),
                    e.preventDefault(),
                    (t = e),
                    (r = d(p)[0]),
                    (C = t.screenX),
                    (x = t.screenY),
                    (w = r.clientWidth),
                    (S = r.clientHeight),
                    (E = S / w),
                    ((b = o).name = i),
                    (b.startPos = { x: s * o[0] + a, y: c * o[1] + u }),
                    (A = M.scrollWidth),
                    (R = M.scrollHeight),
                    (y = T.add(M, "div", {
                      class: "mce-resize-backdrop",
                      "data-mce-bogus": "all",
                    })),
                    T.setStyles(y, {
                      position: "fixed",
                      left: "0",
                      top: "0",
                      width: "100%",
                      height: "100%",
                    }),
                    (h = f((n = p))
                      ? T.create("img", { src: xt.transparentSrc })
                      : n.cloneNode(!0)),
                    T.addClass(h, "mce-clonedresizable"),
                    T.setAttrib(h, "data-mce-bogus", "all"),
                    (h.contentEditable = "false"),
                    T.setStyles(h, { left: a, top: u, margin: 0 }),
                    m(h, s, c),
                    h.removeAttribute(D),
                    M.appendChild(h),
                    T.bind(B, "mousemove", g),
                    T.bind(B, "mouseup", U),
                    P !== B &&
                      (T.bind(P, "mousemove", g), T.bind(P, "mouseup", U)),
                    (v = T.add(
                      M,
                      "div",
                      { class: "mce-resize-helper", "data-mce-bogus": "all" },
                      w + " &times; " + S
                    ));
                }),
                (o.elm = e),
                T.setStyles(e, {
                  left: s * o[0] + a - e.offsetWidth / 2,
                  top: c * o[1] + u - e.offsetHeight / 2,
                });
            })
          : H(),
          T.getAttrib(p, D) || p.setAttribute(D, o);
      },
      H = function () {
        j(),
          p && p.removeAttribute(D),
          ne(F, function (e, t) {
            var n = T.get("mceResizeHandle" + t);
            n && (T.unbind(n), T.remove(n));
          });
      },
      j = function () {
        ne(F, function (e) {
          e.elm && (T.unbind(e.elm), delete e.elm);
        });
      };
    return (
      l.on("init", function () {
        var e;
        s(),
          (xt.browser.isIE() || xt.browser.isEdge()) &&
            (l.on("mousedown click", function (e) {
              var t = e.target,
                n = t.nodeName;
              k ||
                !/^(TABLE|IMG|HR)$/.test(n) ||
                u(t) ||
                (2 !== e.button && l.selection.select(t, "TABLE" === n),
                "mousedown" === e.type && l.nodeChanged());
            }),
            T.bind(
              M,
              "mscontrolselect",
              (e = function (e) {
                function t(e) {
                  _r.setEditorTimeout(l, function () {
                    return l.selection.select(e);
                  });
                }
                if (u(e.target) || Jn(e.target))
                  return e.preventDefault(), void t(e.target);
                /^(TABLE|IMG|HR)$/.test(e.target.nodeName) &&
                  (e.preventDefault(),
                  "IMG" === e.target.tagName && t(e.target));
              })
            ),
            l.on("remove", function () {
              return T.unbind(M, "mscontrolselect", e);
            }));
        var t = _r.throttle(function (e) {
          l.composing || o(e);
        });
        l.on("NodeChange ResizeEditor ResizeWindow ResizeContent drop", t),
          l.on("keyup compositionend", function (e) {
            p && "TABLE" === p.nodeName && t(e);
          }),
          l.on("hide blur", H),
          l.on("contextmenu longpress", n, !0);
      }),
      l.on("remove", j),
      {
        isResizable: i,
        showResizeRect: z,
        hideResizeRect: H,
        updateResizeRect: o,
        destroy: function () {
          p = h = y = null;
        },
      }
    );
  }
  function Sf(e) {
    return Xn(e) || Yn(e);
  }
  function Ef(t, n, r) {
    var o,
      e,
      i,
      a,
      u,
      s = r;
    if (s.caretPositionFromPoint)
      (e = s.caretPositionFromPoint(t, n)) &&
        ((o = r.createRange()).setStart(e.offsetNode, e.offset),
        o.collapse(!0));
    else if (s.caretRangeFromPoint) o = s.caretRangeFromPoint(t, n);
    else if (s.body.createTextRange) {
      o = s.body.createTextRange();
      try {
        o.moveToPoint(t, n), o.collapse(!0);
      } catch (e) {
        o = (function (e, n, t) {
          var r,
            o = t.elementFromPoint(e, n),
            i = t.body.createTextRange();
          if (
            ((o && "HTML" !== o.tagName) || (o = t.body),
            i.moveToElementText(o),
            0 <
              (r = (r = Et.toArray(i.getClientRects())).sort(function (e, t) {
                return (
                  (e = Math.abs(Math.max(e.top - n, e.bottom - n))) -
                  Math.abs(Math.max(t.top - n, t.bottom - n))
                );
              })).length)
          ) {
            n = (r[0].bottom + r[0].top) / 2;
            try {
              return i.moveToPoint(e, n), i.collapse(!0), i;
            } catch (e) {}
          }
          return null;
        })(t, n, r);
      }
      return (
        (i = o),
        (a = r.body),
        (u = i && i.parentElement ? i.parentElement() : null),
        Yn(
          (function (e, t, n) {
            for (; e && e !== t; ) {
              if (n(e)) return e;
              e = e.parentNode;
            }
            return null;
          })(u, a, Sf)
        )
          ? null
          : i
      );
    }
    return o;
  }
  function kf(e, t) {
    return (
      e &&
      t &&
      e.startContainer === t.startContainer &&
      e.startOffset === t.startOffset &&
      e.endContainer === t.endContainer &&
      e.endOffset === t.endOffset
    );
  }
  function Nf(e, t, n) {
    return (
      null !==
      (function (e, t, n) {
        for (; e && e !== t; ) {
          if (n(e)) return e;
          e = e.parentNode;
        }
        return null;
      })(e, t, n)
    );
  }
  function _f(e) {
    return e && "TABLE" === e.nodeName;
  }
  function Af(e, t, n) {
    for (
      var r = new Rr(t, e.getParent(t.parentNode, e.isBlock) || e.getRoot());
      (t = r[n ? "prev" : "next"]());

    )
      if (Wn(t)) return 1;
  }
  function Rf(e, t, n, r, o) {
    var i,
      a,
      u = e.getRoot(),
      s = e.schema.getNonEmptyElements(),
      c = e.getParent(o.parentNode, e.isBlock) || u;
    if (r && Wn(o) && t && e.isEmpty(c))
      return ve.some(ss(o.parentNode, e.nodeIndex(o)));
    for (var l, f, d = new Rr(o, c); (a = d[r ? "prev" : "next"]()); ) {
      if (
        "false" === e.getContentEditableParent(a) ||
        ((f = u), Ir((l = a)) && !1 === Nf(l, f, jc))
      )
        return ve.none();
      if (jn(a) && 0 < a.nodeValue.length)
        return !1 ===
          Nf(a, u, function (e) {
            return "A" === e.nodeName;
          })
          ? ve.some(ss(a, r ? a.nodeValue.length : 0))
          : ve.none();
      if (e.isBlock(a) || s[a.nodeName.toLowerCase()]) return ve.none();
      i = a;
    }
    return n && i ? ve.some(ss(i, 0)) : ve.none();
  }
  function Df(e, t, n, r) {
    var o,
      i = e.getRoot(),
      a = !1,
      u = r[(n ? "start" : "end") + "Container"],
      s = r[(n ? "start" : "end") + "Offset"],
      c = zn(u) && s === u.childNodes.length,
      l = e.schema.getNonEmptyElements(),
      f = n;
    if (Ir(u)) return ve.none();
    if (
      (zn(u) && s > u.childNodes.length - 1 && (f = !1),
      qn(u) && ((u = i), (s = 0)),
      u === i)
    ) {
      if (f && (d = u.childNodes[0 < s ? s - 1 : 0])) {
        if (Ir(d)) return ve.none();
        if (l[d.nodeName] || _f(d)) return ve.none();
      }
      if (u.hasChildNodes()) {
        if (
          ((s = Math.min(!f && 0 < s ? s - 1 : s, u.childNodes.length - 1)),
          (u = u.childNodes[s]),
          (s = jn(u) && c ? u.data.length : 0),
          !t && u === i.lastChild && _f(u))
        )
          return ve.none();
        if (
          (function (e, t) {
            for (; t && t !== e; ) {
              if (Yn(t)) return 1;
              t = t.parentNode;
            }
          })(i, u) ||
          Ir(u)
        )
          return ve.none();
        if (u.hasChildNodes() && !1 === _f(u)) {
          var d = u,
            m = new Rr(u, i);
          do {
            if (Yn(d) || Ir(d)) {
              a = !1;
              break;
            }
            if (jn(d) && 0 < d.nodeValue.length) {
              (s = f ? 0 : d.nodeValue.length), (u = d), (a = !0);
              break;
            }
            if (
              l[d.nodeName.toLowerCase()] &&
              (!(o = d) || !/^(TD|TH|CAPTION)$/.test(o.nodeName))
            ) {
              (s = e.nodeIndex(d)), (u = d.parentNode), f || s++, (a = !0);
              break;
            }
          } while ((d = f ? m.next() : m.prev()));
        }
      }
    }
    return (
      t &&
        (jn(u) &&
          0 === s &&
          Rf(e, c, t, !0, u).each(function (e) {
            (u = e.container()), (s = e.offset()), (a = !0);
          }),
        zn(u) &&
          (!(d = (d = u.childNodes[s]) || u.childNodes[s - 1]) ||
            !Wn(d) ||
            (d.previousSibling && "A" === d.previousSibling.nodeName) ||
            Af(e, d, !1) ||
            Af(e, d, !0) ||
            Rf(e, c, t, !0, d).each(function (e) {
              (u = e.container()), (s = e.offset()), (a = !0);
            }))),
      f &&
        !t &&
        jn(u) &&
        s === u.nodeValue.length &&
        Rf(e, c, t, !1, u).each(function (e) {
          (u = e.container()), (s = e.offset()), (a = !0);
        }),
      a ? ve.some(ss(u, s)) : ve.none()
    );
  }
  function Tf(e, t) {
    var n = t.collapsed,
      r = t.cloneRange(),
      o = ss.fromRangeStart(t);
    return (
      Df(e, n, !0, r).each(function (e) {
        (n && ss.isAbove(o, e)) || r.setStart(e.container(), e.offset());
      }),
      n ||
        Df(e, n, !1, r).each(function (e) {
          r.setEnd(e.container(), e.offset());
        }),
      n && r.collapse(!0),
      kf(t, r) ? ve.none() : ve.some(r)
    );
  }
  function Of(e, t) {
    return e.splitText(t);
  }
  function Bf(e) {
    var t = e.startContainer,
      n = e.startOffset,
      r = e.endContainer,
      o = e.endOffset;
    return (
      t === r && jn(t)
        ? 0 < n &&
          n < t.nodeValue.length &&
          ((t = (r = Of(t, n)).previousSibling),
          n < o
            ? ((t = r = Of(r, (o -= n)).previousSibling),
              (o = r.nodeValue.length),
              (n = 0))
            : (o = 0))
        : (jn(t) &&
            0 < n &&
            n < t.nodeValue.length &&
            ((t = Of(t, n)), (n = 0)),
          jn(r) &&
            0 < o &&
            o < r.nodeValue.length &&
            (o = (r = Of(r, o).previousSibling).nodeValue.length)),
      { startContainer: t, startOffset: n, endContainer: r, endOffset: o }
    );
  }
  function Pf(n) {
    return {
      walk: function (e, t) {
        return Nl(n, e, t);
      },
      split: Bf,
      normalize: function (t) {
        return Tf(n, t).fold(D, function (e) {
          return (
            t.setStart(e.startContainer, e.startOffset),
            t.setEnd(e.endContainer, e.endOffset),
            !0
          );
        });
      },
    };
  }
  zl.isBookmarkNode = Jc;
  var Lf = {
      BACKSPACE: 8,
      DELETE: 46,
      DOWN: 40,
      ENTER: 13,
      ESC: 27,
      LEFT: 37,
      RIGHT: 39,
      SPACEBAR: 32,
      TAB: 9,
      UP: 38,
      PAGE_UP: 33,
      PAGE_DOWN: 34,
      END: 35,
      HOME: 36,
      modifierPressed: function (e) {
        return e.shiftKey || e.ctrlKey || e.altKey || Lf.metaKeyPressed(e);
      },
      metaKeyPressed: function (e) {
        return xt.mac ? e.metaKey : e.ctrlKey && !e.altKey;
      },
    },
    If = Yn;
  (Pf.compareRanges = kf),
    (Pf.getCaretRangeFromPoint = Ef),
    (Pf.getSelectedNode = Pu),
    (Pf.getNode = Lu);
  var Mf,
    Ff,
    Uf =
      ((Mf = "height"),
      (Ff = function (e) {
        var t = e.dom;
        return In(e) ? t.getBoundingClientRect().height : t.offsetHeight;
      }),
      {
        set: function (e, t) {
          if (!E(t) && !t.match(/^[0-9]+$/))
            throw new Error(
              Mf + ".set accepts only positive integer values. Value was " + t
            );
          var n = e.dom;
          mn(n) && (n.style[Mf] = t + "px");
        },
        get: zf,
        getOuter: zf,
        aggregate: Hf,
        max: function (e, t, n) {
          var r = Hf(e, n);
          return r < t ? t - r : 0;
        },
      });
  function zf(e) {
    var t = Ff(e);
    if (t <= 0 || null === t) {
      var n = xn(e, Mf);
      return parseFloat(n) || 0;
    }
    return t;
  }
  function Hf(o, e) {
    return L(
      e,
      function (e, t) {
        var n = xn(o, t),
          r = void 0 === n ? 0 : parseInt(n, 10);
        return isNaN(r) ? e : e + r;
      },
      0
    );
  }
  function jf(e) {
    return "textarea" === Nt(e);
  }
  function Vf(e, t) {
    var n = (function (e) {
        var t = e.dom.ownerDocument,
          n = t.body,
          r = t.defaultView,
          o = t.documentElement;
        if (n === e.dom) return Fn(n.offsetLeft, n.offsetTop);
        var i = Gt(null == r ? void 0 : r.pageYOffset, o.scrollTop),
          a = Gt(null == r ? void 0 : r.pageXOffset, o.scrollLeft),
          u = Gt(o.clientTop, n.clientTop),
          s = Gt(o.clientLeft, n.clientLeft);
        return Un(e).translate(a - s, i - u);
      })(e),
      r = Uf.get(e);
    return { element: e, bottom: n.top + r, height: r, pos: n, cleanup: t };
  }
  function qf(n, r, o, i) {
    Td(
      n,
      function (e, t) {
        return Dd(n, r, o, i);
      },
      o
    );
  }
  function $f(e, t, n, r, o) {
    var i = { elm: r.element.dom, alignToTop: o };
    e.fire("ScrollIntoView", i).isDefaultPrevented() ||
      (n(t, Jt(t).top, r, o), e.fire("AfterScrollIntoView", i));
  }
  function Wf(e, t, n, r) {
    var o = kt.fromDom(e.getDoc());
    $f(e, o, n, Vf(kt.fromDom(t), te), r);
  }
  function Kf(e, t, n, r) {
    var o,
      i = e.pos;
    n ? Qt(i.left, i.top, r) : ((o = i.top - t + e.height), Qt(i.left, o, r));
  }
  function Xf(e, t, n, r, o) {
    var i = n + t,
      a = r.pos.top,
      u = r.bottom,
      s = n <= u - a;
    a < t
      ? Kf(r, n, !1 !== o, e)
      : i < a
      ? Kf(r, n, s ? !1 !== o : !0 === o, e)
      : i < u && !s && Kf(r, n, !0 === o, e);
  }
  function Yf(e, t, n, r) {
    Xf(e, t, e.dom.defaultView.innerHeight, n, r);
  }
  function Gf(e, t, n, r) {
    Xf(e, t, e.dom.defaultView.innerHeight, n, r);
    var o,
      i,
      a,
      u,
      s,
      c,
      l,
      f =
        ((o = n.element),
        (u = Jt(kt.fromDom(document))),
        (a = (i = Rd).owner(o)),
        (s = Ad(i, a)),
        (c = Un(o)),
        (l = P(
          s,
          function (e, t) {
            var n = Un(t);
            return { left: e.left + n.left, top: e.top + n.top };
          },
          { left: 0, top: 0 }
        )),
        Fn(l.left + c.left + u.left, l.top + c.top + u.top)),
      d = tn(window);
    f.top < d.y
      ? Zt(n.element, !1 !== r)
      : f.top > d.bottom && Zt(n.element, !0 === r);
  }
  function Jf(e, t, n) {
    return qf(e, Yf, t, n);
  }
  function Qf(e, t, n) {
    return Wf(e, t, Yf, n);
  }
  function Zf(e, t, n) {
    return qf(e, Gf, t, n);
  }
  function ed(e, t, n) {
    return Wf(e, t, Gf, n);
  }
  function td(e, t, n) {
    (e.inline ? Jf : Zf)(e, t, n);
  }
  function nd(e) {
    var t = Bn(e).dom;
    return e.dom === t.activeElement;
  }
  function rd(e) {
    return (
      void 0 === e && (e = kt.fromDom(document)),
      ve.from(e.dom.activeElement).map(kt.fromDom)
    );
  }
  function od(e, t) {
    var n = _n(t) ? Il(t).length : Dn(t).length + 1;
    return n < e ? n : e < 0 ? 0 : e;
  }
  function id(e) {
    return Ld.range(
      e.start,
      od(e.soffset, e.start),
      e.finish,
      od(e.foffset, e.finish)
    );
  }
  function ad(e, t) {
    return !rn(t.dom) && (Ve(e, t) || je(e, t));
  }
  function ud(t) {
    return function (e) {
      return ad(t, e.start) && ad(t, e.finish);
    };
  }
  function sd(e) {
    return !0 === e.inline || Id.isIE();
  }
  function cd(e) {
    return Ld.range(
      kt.fromDom(e.startContainer),
      e.startOffset,
      kt.fromDom(e.endContainer),
      e.endOffset
    );
  }
  function ld(e) {
    var t = document.createRange();
    try {
      return (
        t.setStart(e.start.dom, e.soffset),
        t.setEnd(e.finish.dom, e.foffset),
        ve.some(t)
      );
    } catch (e) {
      return ve.none();
    }
  }
  function fd(e) {
    var t,
      n,
      r = sd(e)
        ? ((t = kt.fromDom(e.getBody())),
          ((n = Tt(t).dom.getSelection()) && 0 !== n.rangeCount
            ? ve.from(n.getRangeAt(0))
            : ve.none()
          )
            .map(cd)
            .filter(ud(t)))
        : ve.none();
    e.bookmark = r.isSome() ? r : e.bookmark;
  }
  function dd(n) {
    return (n.bookmark || ve.none())
      .bind(function (e) {
        return (t = kt.fromDom(n.getBody())), ve.from(e).filter(ud(t)).map(id);
        var t;
      })
      .bind(ld);
  }
  function md(u) {
    var s = du(function () {
      fd(u);
    }, 0);
    u.on("init", function () {
      function e() {
        n.throttle();
      }
      var t, n, r, o, i, a;
      u.inline &&
        ((t = u),
        (n = s),
        Za.DOM.bind(document, "mouseup", e),
        t.on("remove", function () {
          Za.DOM.unbind(document, "mouseup", e);
        })),
        (r = u),
        (o = s),
        dt().browser.isIE()
          ? (a = r).on("focusout", function () {
              fd(a);
            })
          : ((i = o),
            r.on("mouseup touchend", function (e) {
              i.throttle();
            })),
        r.on("keyup NodeChange", function (e) {
          ("nodechange" === e.type && e.selectionChange) || fd(r);
        });
    }),
      u.on("remove", function () {
        s.cancel();
      });
  }
  function gd(t, e) {
    var n = t.getParam("custom_ui_selector", "", "string");
    return (
      null !==
      Fd.getParent(e, function (e) {
        return Md.isEditorUIElement(e) || (!!n && t.dom.is(e, n));
      })
    );
  }
  function pd(n, e) {
    var t = e.editor;
    md(t),
      t.on("focusin", function () {
        var e = n.focusedEditor;
        e !== t &&
          (e && e.fire("blur", { focusedEditor: t }),
          n.setActive(t),
          (n.focusedEditor = t).fire("focus", { blurredEditor: e }),
          t.focus(!0));
      }),
      t.on("focusout", function () {
        _r.setEditorTimeout(t, function () {
          var e = n.focusedEditor;
          gd(
            t,
            (function (e) {
              try {
                return rd(Bn(kt.fromDom(e.getElement()))).fold(
                  function () {
                    return document.body;
                  },
                  function (e) {
                    return e.dom;
                  }
                );
              } catch (e) {
                return document.body;
              }
            })(t)
          ) ||
            e !== t ||
            (t.fire("blur", { focusedEditor: null }), (n.focusedEditor = null));
        });
      }),
      _d ||
        ((_d = function (e) {
          var t = n.activeEditor;
          t &&
            !(function (e) {
              if (On() && V(e.target)) {
                var t = kt.fromDom(e.target);
                if (
                  Nn(t) &&
                  V(t.dom.shadowRoot) &&
                  e.composed &&
                  e.composedPath
                ) {
                  var n = e.composedPath();
                  if (n) return Q(n);
                }
              }
              return ve.from(e.target);
            })(e).each(function (e) {
              e.ownerDocument === document &&
                (e === document.body ||
                  gd(t, e) ||
                  n.focusedEditor !== t ||
                  (t.fire("blur", { focusedEditor: null }),
                  (n.focusedEditor = null)));
            });
        }),
        Fd.bind(document, "focusin", _d));
  }
  function hd(e, t) {
    e.focusedEditor === t.editor && (e.focusedEditor = null),
      e.activeEditor || (Fd.unbind(document, "focusin", _d), (_d = null));
  }
  function vd(t, e) {
    var n, r;
    (n = kt.fromDom(t.getBody())),
      ((r = e).collapsed
        ? ve.from(Lu(r.startContainer, r.startOffset)).map(kt.fromDom)
        : ve.none()
      )
        .bind(function (e) {
          return vo(e) ? ve.some(e) : !1 === Ve(n, e) ? ve.some(n) : ve.none();
        })
        .bind(function (e) {
          return nf(e.dom);
        })
        .fold(
          function () {
            t.selection.normalize();
          },
          function (e) {
            return t.selection.setRng(e.toRange());
          }
        );
  }
  function bd(t) {
    if (t.setActive)
      try {
        t.setActive();
      } catch (e) {
        t.focus();
      }
    else t.focus();
  }
  function yd(e) {
    return e.inline
      ? (r = e.getBody()) &&
          (nd((t = kt.fromDom(r))) ||
            rd(Bn((n = t)))
              .filter(function (e) {
                return n.dom.contains(e.dom);
              })
              .isSome())
      : e.iframeElement && nd(kt.fromDom(e.iframeElement));
    var t, n, r;
  }
  function Cd(e, t, n, r, o) {
    var i = n ? t.startContainer : t.endContainer,
      a = n ? t.startOffset : t.endOffset;
    return ve
      .from(i)
      .map(kt.fromDom)
      .map(function (e) {
        return r && t.collapsed ? e : Mt(e, o(e, a)).getOr(e);
      })
      .bind(function (e) {
        return Nn(e) ? ve.some(e) : Ot(e).filter(Nn);
      })
      .map(function (e) {
        return e.dom;
      })
      .getOr(e);
  }
  function xd(e, t, n) {
    return Cd(e, t, !0, n, function (e, t) {
      return Math.min(zt(e), t);
    });
  }
  function wd(e, t, n) {
    return Cd(e, t, !1, n, function (e, t) {
      return 0 < t ? t - 1 : t;
    });
  }
  function Sd(e, t) {
    for (var n = e; e && jn(e) && 0 === e.length; )
      e = t ? e.nextSibling : e.previousSibling;
    return e || n;
  }
  function Ed(n, e) {
    return A(e, function (e) {
      var t = n.fire("GetSelectionRange", { range: e });
      return t.range !== e ? t.range : e;
    });
  }
  function kd(e, t, n) {
    var r = n ? "lastChild" : "firstChild",
      o = n ? "prev" : "next";
    if (e[r]) return e[r];
    if (e !== t) {
      var i = e[o];
      if (i) return i;
      for (var a = e.parent; a && a !== t; a = a.parent)
        if ((i = a[o])) return i;
    }
  }
  function Nd(e) {
    var t = "a" === e.name && !e.attr("href") && e.attr("id");
    return (
      e.attr("name") ||
      (e.attr("id") && !e.firstChild) ||
      e.attr("data-mce-bookmark") ||
      t
    );
  }
  var _d,
    Ad = function (r, e) {
      return r.view(e).fold(J([]), function (e) {
        var t = r.owner(e),
          n = Ad(r, t);
        return [e].concat(n);
      });
    },
    Rd = Object.freeze({
      __proto__: null,
      view: function (e) {
        var t;
        return (
          e.dom === document
            ? ve.none()
            : ve.from(
                null === (t = e.dom.defaultView) || void 0 === t
                  ? void 0
                  : t.frameElement
              )
        ).map(kt.fromDom);
      },
      owner: Dt,
    }),
    Dd = function (e, t, n, r) {
      var o = kt.fromDom(e.getBody()),
        i = kt.fromDom(e.getDoc());
      o.dom.offsetWidth;
      var a,
        u,
        s,
        c,
        l =
          ((a = kt.fromDom(n.startContainer)),
          (u = n.startOffset),
          (s = (function (e, t) {
            var n = Dn(e);
            if (0 === n.length || jf(e)) return { element: e, offset: t };
            if (t < n.length && !jf(n[t])) return { element: n[t], offset: 0 };
            var r = n[n.length - 1];
            return jf(r)
              ? { element: e, offset: t }
              : "img" === Nt(r)
              ? { element: r, offset: 1 }
              : _n(r)
              ? { element: r, offset: Il(r).length }
              : { element: r, offset: Dn(r).length };
          })(a, u)),
          (c = kt.fromHtml(
            '<span data-mce-bogus="all" style="display: inline-block;">\ufeff</span>'
          )),
          qt(s.element, c),
          Vf(c, function () {
            return Ln(c);
          }));
      $f(e, i, t, l, r), l.cleanup();
    },
    Td = function (e, t, n) {
      var r = n.startContainer,
        o = n.startOffset,
        i = n.endContainer,
        a = n.endOffset;
      t(kt.fromDom(r), kt.fromDom(i));
      var u = e.dom.createRng();
      u.setStart(r, o), u.setEnd(i, a), e.selection.setRng(n);
    },
    Od = or([
      { before: ["element"] },
      { on: ["element", "offset"] },
      { after: ["element"] },
    ]),
    Bd =
      (Od.before,
      Od.on,
      Od.after,
      function (e) {
        return e.fold(u, u, u);
      }),
    Pd = or([
      { domRange: ["rng"] },
      { relative: ["startSitu", "finishSitu"] },
      { exact: ["start", "soffset", "finish", "foffset"] },
    ]),
    Ld = {
      domRange: Pd.domRange,
      relative: Pd.relative,
      exact: Pd.exact,
      exactFromRange: function (e) {
        return Pd.exact(e.start, e.soffset, e.finish, e.foffset);
      },
      getWin: function (e) {
        return Tt(
          e.match({
            domRange: function (e) {
              return kt.fromDom(e.startContainer);
            },
            relative: function (e, t) {
              return Bd(e);
            },
            exact: function (e, t, n, r) {
              return e;
            },
          })
        );
      },
      range: function (e, t, n, r) {
        return { start: e, soffset: t, finish: n, foffset: r };
      },
    },
    Id = dt().browser,
    Md = {
      isEditorUIElement: function (e) {
        var t = e.className.toString();
        return -1 !== t.indexOf("tox-") || -1 !== t.indexOf("mce-");
      },
    },
    Fd = Za.DOM,
    Ud = function (e) {
      return e.editorManager.setActive(e);
    },
    zd = {
      "#text": 3,
      "#comment": 8,
      "#cdata": 4,
      "#pi": 7,
      "#doctype": 10,
      "#document-fragment": 11,
    },
    Hd =
      ((jd.create = function (e, t) {
        var n = new jd(e, zd[e] || 1);
        return (
          t &&
            ne(t, function (e, t) {
              n.attr(t, e);
            }),
          n
        );
      }),
      (jd.prototype.replace = function (e) {
        return (
          e.parent && e.remove(), this.insert(e, this), this.remove(), this
        );
      }),
      (jd.prototype.attr = function (e, t) {
        var n,
          r = this;
        if ("string" != typeof e)
          return (
            null != e &&
              ne(e, function (e, t) {
                r.attr(t, e);
              }),
            r
          );
        if ((n = r.attributes)) {
          if (void 0 === t) return n.map[e];
          if (null === t) {
            if (e in n.map) {
              delete n.map[e];
              for (var o = n.length; o--; )
                if (n[o].name === e) return n.splice(o, 1), r;
            }
            return r;
          }
          if (e in n.map) {
            for (o = n.length; o--; )
              if (n[o].name === e) {
                n[o].value = t;
                break;
              }
          } else n.push({ name: e, value: t });
          return (n.map[e] = t), r;
        }
      }),
      (jd.prototype.clone = function () {
        var e,
          t = new jd(this.name, this.type);
        if ((e = this.attributes)) {
          var n = [];
          n.map = {};
          for (var r = 0, o = e.length; r < o; r++) {
            var i = e[r];
            "id" !== i.name &&
              ((n[n.length] = { name: i.name, value: i.value }),
              (n.map[i.name] = i.value));
          }
          t.attributes = n;
        }
        return (t.value = this.value), (t.shortEnded = this.shortEnded), t;
      }),
      (jd.prototype.wrap = function (e) {
        return this.parent.insert(e, this), e.append(this), this;
      }),
      (jd.prototype.unwrap = function () {
        for (var e = this.firstChild; e; ) {
          var t = e.next;
          this.insert(e, this, !0), (e = t);
        }
        this.remove();
      }),
      (jd.prototype.remove = function () {
        var e = this.parent,
          t = this.next,
          n = this.prev;
        return (
          e &&
            (e.firstChild === this
              ? (e.firstChild = t) && (t.prev = null)
              : (n.next = t),
            e.lastChild === this
              ? (e.lastChild = n) && (n.next = null)
              : (t.prev = n),
            (this.parent = this.next = this.prev = null)),
          this
        );
      }),
      (jd.prototype.append = function (e) {
        e.parent && e.remove();
        var t = this.lastChild;
        return (
          t
            ? (((t.next = e).prev = t), (this.lastChild = e))
            : (this.lastChild = this.firstChild = e),
          (e.parent = this),
          e
        );
      }),
      (jd.prototype.insert = function (e, t, n) {
        e.parent && e.remove();
        var r = t.parent || this;
        return (
          n
            ? (t === r.firstChild ? (r.firstChild = e) : (t.prev.next = e),
              (e.prev = t.prev),
              ((e.next = t).prev = e))
            : (t === r.lastChild ? (r.lastChild = e) : (t.next.prev = e),
              (e.next = t.next),
              ((e.prev = t).next = e)),
          (e.parent = r),
          e
        );
      }),
      (jd.prototype.getAll = function (e) {
        for (var t = [], n = this.firstChild; n; n = kd(n, this))
          n.name === e && t.push(n);
        return t;
      }),
      (jd.prototype.children = function () {
        for (var e = [], t = this.firstChild; t; t = t.next) e.push(t);
        return e;
      }),
      (jd.prototype.empty = function () {
        if (this.firstChild) {
          for (var e = [], t = this.firstChild; t; t = kd(t, this)) e.push(t);
          for (var n = e.length; n--; )
            (t = e[n]).parent =
              t.firstChild =
              t.lastChild =
              t.next =
              t.prev =
                null;
        }
        return (this.firstChild = this.lastChild = null), this;
      }),
      (jd.prototype.isEmpty = function (e, t, n) {
        void 0 === t && (t = {});
        var r = this.firstChild;
        if (Nd(this)) return !1;
        if (r)
          do {
            if (1 === r.type) {
              if (r.attr("data-mce-bogus")) continue;
              if (e[r.name]) return !1;
              if (Nd(r)) return !1;
            }
            if (8 === r.type) return !1;
            if (
              3 === r.type &&
              !(function (e) {
                if (qr(e.value)) {
                  var t = e.parent;
                  return (
                    !t ||
                    ("span" === t.name && !t.attr("style")) ||
                    !/^[ ]+$/.test(e.value)
                  );
                }
              })(r)
            )
              return !1;
            if (3 === r.type && r.parent && t[r.parent.name] && qr(r.value))
              return !1;
            if (n && n(r)) return !1;
          } while ((r = kd(r, this)));
        return !0;
      }),
      (jd.prototype.walk = function (e) {
        return kd(this, null, e);
      }),
      jd);
  function jd(e, t) {
    (this.name = e),
      1 === (this.type = t) &&
        ((this.attributes = []), (this.attributes.map = {}));
  }
  function Vd(e, t) {
    return e.replace(t.re, function (e) {
      return ue(t.uris, e).getOr(e);
    });
  }
  var qd = Et.each,
    $d = Et.trim,
    Wd =
      "source protocol authority userInfo user password host port relative path directory file query anchor".split(
        " "
      ),
    Kd = { ftp: 21, http: 80, https: 443, mailto: 25 },
    Xd = ["img", "video"],
    Yd =
      ((Gd.parseDataUri = function (e) {
        var t,
          n = decodeURIComponent(e).split(","),
          r = /data:([^;]+)/.exec(n[0]);
        return { type: (t = r ? r[1] : t), data: n[1] };
      }),
      (Gd.isDomSafe = function (e, t, n) {
        if ((n = void 0 === n ? {} : n).allow_script_urls) return !0;
        var r,
          o,
          i,
          a,
          u = Qo.decode(e).replace(/[\s\u0000-\u001F]+/g, "");
        try {
          u = decodeURIComponent(u);
        } catch (e) {
          u = unescape(u);
        }
        return !(
          /((java|vb)script|mhtml):/i.test(u) ||
          ((o = u),
          (i = t),
          !(r = n).allow_html_data_urls &&
            (/^data:image\//i.test(o)
              ? (V((a = r.allow_svg_data_urls)) ? !a : !V(i) || !T(Xd, i)) &&
                /^data:image\/svg\+xml/i.test(o)
              : /^data:/i.test(o)))
        );
      }),
      (Gd.getDocumentBaseUrl = function (e) {
        var t =
          0 !== e.protocol.indexOf("http") && "file:" !== e.protocol
            ? e.href
            : e.protocol + "//" + e.host + e.pathname;
        return (
          /^[^:]+:\/\/\/?[^\/]+\//.test(t) &&
            ((t = t.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, "")),
            /[\/\\]$/.test(t) || (t += "/")),
          t
        );
      }),
      (Gd.prototype.setPath = function (e) {
        var t = /^(.*?)\/?(\w+)?$/.exec(e);
        (this.path = t[0]),
          (this.directory = t[1]),
          (this.file = t[2]),
          (this.source = ""),
          this.getURI();
      }),
      (Gd.prototype.toRelative = function (e) {
        var t;
        if ("./" === e) return e;
        var n = new Gd(e, { base_uri: this });
        if (
          ("mce_host" !== n.host && this.host !== n.host && n.host) ||
          this.port !== n.port ||
          (this.protocol !== n.protocol && "" !== n.protocol)
        )
          return n.getURI();
        var r = this.getURI(),
          o = n.getURI();
        return r === o ||
          ("/" === r.charAt(r.length - 1) && r.substr(0, r.length - 1) === o)
          ? r
          : ((t = this.toRelPath(this.path, n.path)),
            n.query && (t += "?" + n.query),
            n.anchor && (t += "#" + n.anchor),
            t);
      }),
      (Gd.prototype.toAbsolute = function (e, t) {
        var n = new Gd(e, { base_uri: this });
        return n.getURI(t && this.isSameOrigin(n));
      }),
      (Gd.prototype.isSameOrigin = function (e) {
        if (this.host == e.host && this.protocol == e.protocol) {
          if (this.port == e.port) return !0;
          var t = Kd[this.protocol];
          if (t && (this.port || t) == (e.port || t)) return !0;
        }
        return !1;
      }),
      (Gd.prototype.toRelPath = function (e, t) {
        var n,
          r,
          o = 0,
          i = "",
          a = e.substring(0, e.lastIndexOf("/")).split("/"),
          u = t.split("/");
        if (a.length >= u.length)
          for (n = 0, r = a.length; n < r; n++)
            if (n >= u.length || a[n] !== u[n]) {
              o = n + 1;
              break;
            }
        if (a.length < u.length)
          for (n = 0, r = u.length; n < r; n++)
            if (n >= a.length || a[n] !== u[n]) {
              o = n + 1;
              break;
            }
        if (1 === o) return t;
        for (n = 0, r = a.length - (o - 1); n < r; n++) i += "../";
        for (n = o - 1, r = u.length; n < r; n++)
          i += n !== o - 1 ? "/" + u[n] : u[n];
        return i;
      }),
      (Gd.prototype.toAbsPath = function (e, t) {
        var n,
          r,
          o = 0,
          i = [],
          a = /\/$/.test(t) ? "/" : "",
          u = e.split("/"),
          s = t.split("/");
        for (
          qd(u, function (e) {
            e && i.push(e);
          }),
            u = i,
            n = s.length - 1,
            i = [];
          0 <= n;
          n--
        )
          0 !== s[n].length &&
            "." !== s[n] &&
            (".." !== s[n] ? (0 < o ? o-- : i.push(s[n])) : o++);
        return (
          0 !==
            (r =
              (n = u.length - o) <= 0
                ? q(i).join("/")
                : u.slice(0, n).join("/") + "/" + q(i).join("/")).indexOf(
              "/"
            ) && (r = "/" + r),
          a && r.lastIndexOf("/") !== r.length - 1 && (r += a),
          r
        );
      }),
      (Gd.prototype.getURI = function (e) {
        var t;
        return (
          void 0 === e && (e = !1),
          (this.source && !e) ||
            ((t = ""),
            e ||
              (this.protocol ? (t += this.protocol + "://") : (t += "//"),
              this.userInfo && (t += this.userInfo + "@"),
              this.host && (t += this.host),
              this.port && (t += ":" + this.port)),
            this.path && (t += this.path),
            this.query && (t += "?" + this.query),
            this.anchor && (t += "#" + this.anchor),
            (this.source = t)),
          this.source
        );
      }),
      Gd);
  function Gd(e, t) {
    (e = $d(e)), (this.settings = t || {});
    var n,
      r,
      o,
      i,
      a = this.settings.base_uri,
      u = this;
    /^([\w\-]+):([^\/]{2})/i.test(e) || /^\s*#/.test(e)
      ? (u.source = e)
      : ((n = 0 === e.indexOf("//")),
        0 !== e.indexOf("/") ||
          n ||
          (e = ((a && a.protocol) || "http") + "://mce_host" + e),
        /^[\w\-]*:?\/\//.test(e) ||
          ((r = this.settings.base_uri
            ? this.settings.base_uri.path
            : new Gd(document.location.href).directory),
          (e =
            this.settings.base_uri && "" == this.settings.base_uri.protocol
              ? "//mce_host" + u.toAbsPath(r, e)
              : ((o = /([^#?]*)([#?]?.*)/.exec(e)),
                ((a && a.protocol) || "http") +
                  "://mce_host" +
                  u.toAbsPath(r, o[1]) +
                  o[2]))),
        (e = e.replace(/@@/g, "(mce_at)")),
        (i =
          /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?(\[[a-zA-Z0-9:.%]+\]|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(
            e
          )),
        qd(Wd, function (e, t) {
          var n = (n = i[t]) && n.replace(/\(mce_at\)/g, "@@");
          u[e] = n;
        }),
        a &&
          (u.protocol || (u.protocol = a.protocol),
          u.userInfo || (u.userInfo = a.userInfo),
          u.port || "mce_host" !== u.host || (u.port = a.port),
          (u.host && "mce_host" !== u.host) || (u.host = a.host),
          (u.source = "")),
        n && (u.protocol = ""));
  }
  function Jd(e, t, n) {
    for (
      var r = /<([!?\/])?([A-Za-z0-9\-_:.]+)/g,
        o =
          /(?:\s(?:[^'">]+(?:"[^"]*"|'[^']*'))*[^"'>]*(?:"[^">]*|'[^'>]*)?|\s*|\/)>/g,
        i = e.getShortEndedElements(),
        a = 1,
        u = n;
      0 !== a;

    )
      for (r.lastIndex = u; ; ) {
        var s = r.exec(t);
        if (null === s) return u;
        if ("!" === s[1]) {
          u = Ge(s[2], "--")
            ? tm(t, !1, s.index + "!--".length)
            : tm(t, !0, s.index + 1);
          break;
        }
        o.lastIndex = r.lastIndex;
        var c = o.exec(t);
        if (!l(c) && c.index === r.lastIndex) {
          "/" === s[1] ? --a : ke(i, s[2]) || (a += 1),
            (u = r.lastIndex + c[0].length);
          break;
        }
      }
    return u;
  }
  function Qd(q, $) {
    void 0 === $ && ($ = ro()), (q = q || {});
    var W = em(),
      K = W.createElement("form");
    function n(s, e) {
      void 0 === e && (e = "html");
      for (
        var t,
          i,
          n,
          c,
          r,
          o,
          a,
          l,
          u,
          f,
          d,
          m,
          g,
          p,
          h,
          v,
          b,
          y,
          C,
          x = s.html,
          w = 0,
          S = [],
          E = 0,
          k = Qo.decode,
          N = Et.makeMap(
            "src,href,data,background,action,formaction,poster,xlink:href"
          ),
          _ = "html" === e ? 0 : 1,
          A = function (e) {
            for (var t, n = S.length; n-- && S[n].name !== e; );
            if (0 <= n) {
              for (t = S.length - 1; n <= t; t--) (e = S[t]).valid && Q(e.name);
              S.length = n;
            }
          },
          R = function (e, t) {
            return G(Vd(e, s), t);
          },
          D = function (e) {
            "" !== e &&
              (">" === e.charAt(0) && (e = " " + e),
              q.allow_conditional_comments ||
                "[if" !== e.substr(0, 3).toLowerCase() ||
                (e = " " + e),
              X(Vd(e, s)));
          },
          T = function (e, t) {
            var n = e || "",
              r = !Ge(n, "--"),
              o = tm(x, r, t);
            return (e = x.substr(t, o - t)), D(r ? n + e : e), o + 1;
          },
          O = new RegExp(
            "<(?:(?:!--([\\w\\W]*?)--!?>)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:![Dd][Oo][Cc][Tt][Yy][Pp][Ee]([\\w\\W]*?)>)|(?:!(--)?)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)>)|(?:([A-Za-z][A-Za-z0-9\\-_:.]*)(\\s(?:[^'\">]+(?:\"[^\"]*\"|'[^']*'))*[^\"'>]*(?:\"[^\">]*|'[^'>]*)?|\\s*|\\/)>))",
            "g"
          ),
          B =
            /([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g,
          P = $.getShortEndedElements(),
          L = q.self_closing_elements || $.getSelfClosingElements(),
          I = $.getBoolAttrs(),
          M = q.validate,
          F = q.remove_internals,
          U = q.fix_self_closing,
          z = $.getSpecialElements(),
          H = x + ">";
        (t = O.exec(H));

      ) {
        var j = t[0];
        if ((w < t.index && R(k(x.substr(w, t.index - w))), (i = t[7])))
          A((i = ":" === (i = i.toLowerCase()).charAt(0) ? i.substr(1) : i));
        else if ((i = t[8])) {
          if (t.index + j.length > x.length) {
            R(k(x.substr(t.index))), (w = t.index + j.length);
            continue;
          }
          (u =
            (i = ":" === (i = i.toLowerCase()).charAt(0) ? i.substr(1) : i) in
            P),
            U && L[i] && 0 < S.length && S[S.length - 1].name === i && A(i);
          var V = (function (e, t) {
            var n = e.exec(t);
            if (n) {
              var r = n[1],
                o = n[2];
              return "string" == typeof r &&
                "data-mce-bogus" === r.toLowerCase()
                ? o
                : null;
            }
            return null;
          })(B, t[9]);
          if (null !== V) {
            if ("all" === V) {
              (w = Jd($, x, O.lastIndex)), (O.lastIndex = w);
              continue;
            }
            d = !1;
          }
          if (!M || (f = $.getElementRule(i))) {
            if (
              ((d = !0),
              M && ((p = f.attributes), (h = f.attributePatterns)),
              (g = t[9])
                ? ((l = -1 !== g.indexOf("data-mce-type")) && F && (d = !1),
                  ((c = []).map = {}),
                  g.replace(B, function (e, t, n, r, o) {
                    return (
                      (function (e, t, n, r, o) {
                        var i;
                        if (
                          ((n = Vd(
                            (t = t.toLowerCase()) in I
                              ? t
                              : k(n || r || o || ""),
                            s
                          )),
                          M &&
                            !l &&
                            0 ==
                              (0 === (i = t).indexOf("data-") ||
                                0 === i.indexOf("aria-")))
                        ) {
                          var a = p[t];
                          if (!a && h) {
                            for (
                              var u = h.length;
                              u-- && !(a = h[u]).pattern.test(t);

                            );
                            -1 === u && (a = null);
                          }
                          if (!a) return;
                          if (a.validValues && !(n in a.validValues)) return;
                        }
                        (("name" === t || "id" === t) &&
                          e in Zd &&
                          (n in W || n in K)) ||
                          (N[t] && !Yd.isDomSafe(n, e, q)) ||
                          (l && (t in N || 0 === t.indexOf("on"))) ||
                          ((c.map[t] = n), c.push({ name: t, value: n }));
                      })(i, t, n, r, o),
                      ""
                    );
                  }))
                : ((c = []).map = {}),
              M && !l)
            ) {
              if (
                ((v = f.attributesRequired),
                (b = f.attributesDefault),
                (y = f.attributesForced),
                f.removeEmptyAttrs && !c.length && (d = !1),
                y)
              )
                for (r = y.length; r--; )
                  (a = (m = y[r]).name),
                    "{$uid}" === (C = m.value) && (C = "mce_" + E++),
                    (c.map[a] = C),
                    c.push({ name: a, value: C });
              if (b)
                for (r = b.length; r--; )
                  (a = (m = b[r]).name) in c.map ||
                    ("{$uid}" === (C = m.value) && (C = "mce_" + E++),
                    (c.map[a] = C),
                    c.push({ name: a, value: C }));
              if (v) {
                for (r = v.length; r-- && !(v[r] in c.map); );
                -1 === r && (d = !1);
              }
              if ((m = c.map["data-mce-bogus"])) {
                if ("all" === m) {
                  (w = Jd($, x, O.lastIndex)), (O.lastIndex = w);
                  continue;
                }
                d = !1;
              }
            }
            d && J(i, c, u);
          } else d = !1;
          if ((n = z[i])) {
            (n.lastIndex = w = t.index + j.length),
              (w = (t = n.exec(x))
                ? (d && (o = x.substr(w, t.index - w)), t.index + t[0].length)
                : ((o = x.substr(w)), x.length)),
              d && (0 < o.length && R(o, !0), Q(i)),
              (O.lastIndex = w);
            continue;
          }
          u ||
            (g && g.indexOf("/") === g.length - 1
              ? d && Q(i)
              : S.push({ name: i, valid: d }));
        } else if ((i = t[1])) D(i);
        else if ((i = t[2])) {
          if (
            !(
              1 == _ ||
              q.preserve_cdata ||
              (0 < S.length && $.isValidChild(S[S.length - 1].name, "#cdata"))
            )
          ) {
            (w = T("", t.index + 2)), (O.lastIndex = w);
            continue;
          }
          Y(i);
        } else if ((i = t[3])) ee(i);
        else {
          if ((i = t[4]) || "<!" === j) {
            (w = T(i, t.index + j.length)), (O.lastIndex = w);
            continue;
          }
          if ((i = t[5])) {
            if (1 != _) {
              (w = T("?", t.index + 2)), (O.lastIndex = w);
              continue;
            }
            Z(i, t[6]);
          }
        }
        w = t.index + j.length;
      }
      for (w < x.length && R(k(x.substr(w))), r = S.length - 1; 0 <= r; r--)
        (i = S[r]).valid && Q(i.name);
    }
    !1 !== q.fix_self_closing && (q.fix_self_closing = !0);
    var X = q.comment || te,
      Y = q.cdata || te,
      G = q.text || te,
      J = q.start || te,
      Q = q.end || te,
      Z = q.pi || te,
      ee = q.doctype || te;
    return {
      parse: function (e, t) {
        void 0 === t && (t = "html"),
          n(
            (function (e) {
              for (
                var t,
                  n = /data:[^;<"'\s]+;base64,([a-z0-9\+\/=\s]+)/gi,
                  r = [],
                  o = {},
                  i = xu("img"),
                  a = 0,
                  u = 0;
                (t = n.exec(e));

              ) {
                var s = t[0],
                  c = i + "_" + u++;
                (o[c] = s),
                  a < t.index && r.push(e.substr(a, t.index - a)),
                  r.push(c),
                  (a = t.index + s.length);
              }
              var l = new RegExp(i + "_[0-9]+", "g");
              return 0 === a
                ? { prefix: i, uris: o, html: e, re: l }
                : (a < e.length && r.push(e.substr(a)),
                  { prefix: i, uris: o, html: r.join(""), re: l });
            })(e),
            t
          );
      },
    };
  }
  var Zd = Et.makeMap(
      "button,fieldset,form,iframe,img,image,input,object,output,select,textarea"
    ),
    em = Re(function () {
      return document.implementation.createHTMLDocument("parser");
    }),
    tm = function (e, t, n) {
      void 0 === n && (n = 0);
      var r = e.toLowerCase();
      if (
        -1 !== r.indexOf("[if ", n) &&
        ((u = n), /^\s*\[if [\w\W]+\]>.*<!\[endif\](--!?)?>/.test(r.substr(u)))
      ) {
        var o = r.indexOf("[endif]", n);
        return r.indexOf(">", o);
      }
      if (t) {
        var i = r.indexOf(">", n);
        return -1 !== i ? i : r.length;
      }
      var a = /--!?>/g;
      a.lastIndex = n;
      var u,
        s = a.exec(e);
      return s ? s.index + s[0].length : r.length;
    };
  function nm(e, t) {
    for (
      var n,
        r,
        o,
        i,
        a = /<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,
        u = e.schema,
        s =
          ((n = e.getTempAttrs()),
          (r = t),
          (o = new RegExp(
            ["\\s?(" + n.join("|") + ')="[^"]+"'].join("|"),
            "gi"
          )),
          r.replace(o, "")),
        c = u.getShortEndedElements();
      (i = a.exec(s));

    ) {
      var l = a.lastIndex,
        f = i[0].length,
        d = c[i[1]] ? l : Qd.findEndTag(u, s, l),
        s = s.substring(0, l - f) + s.substring(d);
      a.lastIndex = l - f;
    }
    return Eo(s);
  }
  function rm(o) {
    return {
      compare: function (e, t) {
        return (
          e.nodeName === t.nodeName &&
          !(
            !r(n(e), n(t)) ||
            !r(
              o.parseStyle(o.getAttrib(e, "style")),
              o.parseStyle(o.getAttrib(t, "style"))
            ) ||
            Jc(e) ||
            Jc(t)
          )
        );
        function n(n) {
          var r = {};
          return (
            um(o.getAttribs(n), function (e) {
              var t = e.nodeName.toLowerCase();
              0 !== t.indexOf("_") &&
                "style" !== t &&
                0 !== t.indexOf("data-") &&
                (r[t] = o.getAttrib(n, t));
            }),
            r
          );
        }
        function r(e, t) {
          var n, r;
          for (r in e)
            if (ke(e, r)) {
              if (void 0 === (n = t[r])) return;
              if (e[r] !== n) return;
              delete t[r];
            }
          for (r in t) if (ke(t, r)) return;
          return 1;
        }
      },
    };
  }
  function om(e) {
    var u = [],
      s = (e = e || {}).indent,
      c = sm(e.indent_before || ""),
      l = sm(e.indent_after || ""),
      f = Qo.getEncodeFunc(e.entity_encoding || "raw", e.entities),
      d = "html" === e.element_format;
    return {
      start: function (e, t, n) {
        var r, o, i, a;
        if (
          (s &&
            c[e] &&
            0 < u.length &&
            0 < (a = u[u.length - 1]).length &&
            "\n" !== a &&
            u.push("\n"),
          u.push("<", e),
          t)
        )
          for (r = 0, o = t.length; r < o; r++)
            (i = t[r]), u.push(" ", i.name, '="', f(i.value, !0), '"');
        (u[u.length] = !n || d ? ">" : " />"),
          n &&
            s &&
            l[e] &&
            0 < u.length &&
            0 < (a = u[u.length - 1]).length &&
            "\n" !== a &&
            u.push("\n");
      },
      end: function (e) {
        var t;
        u.push("</", e, ">"),
          s &&
            l[e] &&
            0 < u.length &&
            0 < (t = u[u.length - 1]).length &&
            "\n" !== t &&
            u.push("\n");
      },
      text: function (e, t) {
        0 < e.length && (u[u.length] = t ? e : f(e));
      },
      cdata: function (e) {
        u.push("<![CDATA[", e, "]]>");
      },
      comment: function (e) {
        u.push("\x3c!--", e, "--\x3e");
      },
      pi: function (e, t) {
        t ? u.push("<?", e, " ", f(t), "?>") : u.push("<?", e, "?>"),
          s && u.push("\n");
      },
      doctype: function (e) {
        u.push("<!DOCTYPE", e, ">", s ? "\n" : "");
      },
      reset: function () {
        u.length = 0;
      },
      getContent: function () {
        return u.join("").replace(/\n$/, "");
      },
    };
  }
  function im(t, g) {
    void 0 === g && (g = ro());
    var p = om(t);
    return (
      ((t = t || {}).validate = !("validate" in t) || t.validate),
      {
        serialize: function (e) {
          var f = t.validate,
            d = {
              3: function (e) {
                p.text(e.value, e.raw);
              },
              8: function (e) {
                p.comment(e.value);
              },
              7: function (e) {
                p.pi(e.name, e.value);
              },
              10: function (e) {
                p.doctype(e.value);
              },
              4: function (e) {
                p.cdata(e.value);
              },
              11: function (e) {
                if ((e = e.firstChild)) for (; m(e), (e = e.next); );
              },
            };
          p.reset();
          var m = function (e) {
            var t = d[e.type];
            if (t) t(e);
            else {
              var n = e.name,
                r = e.shortEnded,
                o = e.attributes;
              if (f && o && 1 < o.length) {
                var i = [];
                i.map = {};
                var a = g.getElementRule(e.name);
                if (a) {
                  for (var u = 0, s = a.attributesOrder.length; u < s; u++)
                    (c = a.attributesOrder[u]) in o.map &&
                      ((l = o.map[c]),
                      (i.map[c] = l),
                      i.push({ name: c, value: l }));
                  for (var c, l, u = 0, s = o.length; u < s; u++)
                    (c = o[u].name) in i.map ||
                      ((l = o.map[c]),
                      (i.map[c] = l),
                      i.push({ name: c, value: l }));
                  o = i;
                }
              }
              if ((p.start(e.name, o, r), !r)) {
                if ((e = e.firstChild)) for (; m(e), (e = e.next); );
                p.end(n);
              }
            }
          };
          return 1 !== e.type || t.inner ? d[11](e) : m(e), p.getContent();
        },
      }
    );
  }
  Qd.findEndTag = Jd;
  var am = nm,
    um = Et.each,
    sm = Et.makeMap,
    cm = new Set();
  function lm(e, t) {
    return we(e.parseStyle(e.getAttrib(t, "style")));
  }
  function fm(n, r, o) {
    return ve
      .from(o.container())
      .filter(jn)
      .exists(function (e) {
        var t = n ? 0 : -1;
        return r(e.data.charAt(o.offset() + t));
      });
  }
  function dm(e) {
    var t = e.container();
    return (
      jn(t) &&
      (0 === t.data.length || (So(t.data) && zl.isBookmarkNode(t.parentNode)))
    );
  }
  function mm(t, n) {
    return function (e) {
      return ve
        .from(Qs(t ? 0 : -1, e))
        .filter(n)
        .isSome();
    };
  }
  function gm(e) {
    return Kn(e) && "block" === xn(kt.fromDom(e), "display");
  }
  function pm(e) {
    return (
      Yn(e) && !(zn((t = e)) && "all" === t.getAttribute("data-mce-bogus"))
    );
    var t;
  }
  function hm(e) {
    Xt(e), Pn(e, kt.fromHtml('<br data-mce-bogus="1">'));
  }
  function vm(n) {
    Ut(n).each(function (t) {
      Bt(t).each(function (e) {
        mo(n) && Br(t) && mo(e) && Ln(t);
      });
    });
  }
  function bm(e, t) {
    return (
      (o = D),
      Ve((r = t), (n = e))
        ? (function (e, t) {
            for (
              var n = y(t) ? t : D, r = e.dom, o = [];
              null !== r.parentNode && void 0 !== r.parentNode;

            ) {
              var i = r.parentNode,
                a = kt.fromDom(i);
              if ((o.push(a), !0 === n(a))) break;
              r = i;
            }
            return o;
          })(n, function (e) {
            return o(e) || je(e, r);
          }).slice(0, -1)
        : []
    );
    var n, r, o;
  }
  function ym(e, t) {
    return [e].concat(bm(e, t));
  }
  function Cm(e, t, n) {
    return Zl(e, t, n, dm);
  }
  function xm(e, t) {
    return M(ym(kt.fromDom(t.container()), e), mo);
  }
  function wm(e, n, r) {
    return Cm(e, n.dom, r).forall(function (t) {
      return xm(n, r).fold(
        function () {
          return !1 === Js(t, r, n.dom);
        },
        function (e) {
          return !1 === Js(t, r, n.dom) && Ve(e, kt.fromDom(t.container()));
        }
      );
    });
  }
  function Sm(t, n, r) {
    return xm(n, r).fold(
      function () {
        return Cm(t, n.dom, r).forall(function (e) {
          return !1 === Js(e, r, n.dom);
        });
      },
      function (e) {
        return Cm(t, e.dom, r).isNone();
      }
    );
  }
  function Em(e) {
    return oc(e).exists(Br);
  }
  function km(e, t, n) {
    var r = Q(U(ym(kt.fromDom(n.container()), t), mo)).getOr(t);
    return Ql(e, r.dom, n).filter(Em);
  }
  function Nm(e, t) {
    return oc(t).exists(Br) || km(!0, e, t).isSome();
  }
  function _m(e, t) {
    return (
      ve.from(t.getNode(!0)).map(kt.fromDom).exists(Br) || km(!1, e, t).isSome()
    );
  }
  function Am(e) {
    return ss.isTextPosition(e) && !e.isAtStart() && !e.isAtEnd();
  }
  function Rm(e, t) {
    return Q(U(ym(kt.fromDom(t.container()), e), mo)).getOr(e);
  }
  function Dm(e, t) {
    return Am(t) ? Gg(t) : Gg(t) || tf(Rm(e, t).dom, t).exists(Gg);
  }
  function Tm(e, t) {
    return Am(t) ? Yg(t) : Yg(t) || ef(Rm(e, t).dom, t).exists(Yg);
  }
  function Om(e) {
    return oc(e)
      .bind(function (e) {
        return pr(e, Nn);
      })
      .exists(function (e) {
        return T(["pre", "pre-wrap"], xn(e, "white-space"));
      });
  }
  function Bm(e, t) {
    return !Om(t) && (ip(e, t) || up(e, t) || _m(e, t) || Dm(e, t));
  }
  function Pm(e, t) {
    return !Om(t) && (ap(e, t) || sp(e, t) || Nm(e, t) || Tm(e, t));
  }
  function Lm(e, t) {
    return (
      Bm(e, t) ||
      Pm(
        e,
        ((r = (n = t).container()),
        (o = n.offset()),
        jn(r) && o < r.data.length ? ss(r, o + 1) : n)
      )
    );
    var n, r, o;
  }
  function Im(e, t) {
    return uf(e.charAt(t));
  }
  function Mm(e) {
    var t = e.container();
    return jn(t) && Te(t.data, xo);
  }
  function Fm(g, e) {
    return ve
      .some(e)
      .filter(Mm)
      .bind(function (e) {
        var t,
          n,
          r,
          o,
          i,
          a,
          u,
          s,
          c,
          l = e.container(),
          f = g,
          d = (i = l).data,
          m = ss(i, 0);
        return (!Im(d, 0) || Lm(f, m)
          ? ((s = (a = l).data),
            (c = A((u = s.split("")), function (e, t) {
              return uf(e) &&
                0 < t &&
                t < u.length - 1 &&
                Zc(u[t - 1]) &&
                Zc(u[t + 1])
                ? " "
                : e;
            }).join("")) !== s && ((a.data = c), 1))
          : ((i.data = " " + d.slice(1)), 1)) ||
          ((t = g),
          (r = (n = l).data),
          (o = ss(n, r.length - 1)),
          Im(r, r.length - 1) &&
            !Lm(t, o) &&
            ((n.data = r.slice(0, -1) + " "), 1))
          ? ve.some(e)
          : ve.none();
      });
  }
  function Um(t) {
    var e = kt.fromDom(t.getBody());
    t.selection.isCollapsed() &&
      Fm(e, ss.fromRangeStart(t.selection.getRng())).each(function (e) {
        t.selection.setRng(e.toRange());
      });
  }
  function zm(e, t, n) {
    var r, o, i, a, u, s, c, l;
    0 !== n &&
      ((o = gr((r = kt.fromDom(e)), mo).getOr(r)),
      (i = e.data.slice(t, t + n)),
      (a = t + n >= e.data.length && Pm(o, ss(e, e.data.length))),
      (u = 0 === t && Bm(o, ss(e, 0))),
      e.replaceData(
        t,
        n,
        ((c = u),
        (l = a),
        L(
          (s = i),
          function (e, t) {
            return Qc(t) || uf(t)
              ? e.previousCharIsSpace ||
                ("" === e.str && c) ||
                (e.str.length === s.length - 1 && l)
                ? { previousCharIsSpace: !1, str: e.str + xo }
                : { previousCharIsSpace: !0, str: e.str + " " }
              : { previousCharIsSpace: !1, str: e.str + t };
          },
          { previousCharIsSpace: !1, str: "" }
        ).str)
      ));
  }
  function Hm(e, t) {
    var n = e.data.slice(t);
    zm(e, t, n.length - Qe(n).length);
  }
  function jm(e, t) {
    var n = e.data.slice(0, t),
      r = n.length - Ze(n).length;
    zm(e, t - r, r);
  }
  function Vm(e, t, n, r) {
    void 0 === r && (r = !0);
    var o = Ze(e.data).length,
      i = r ? e : t,
      a = r ? t : e;
    return (
      r ? i.appendData(a.data) : i.insertData(0, a.data),
      Ln(kt.fromDom(a)),
      n && Hm(i, o),
      i
    );
  }
  function qm(e, t) {
    return (
      (r = e),
      (o = (n = t).container()),
      (i = n.offset()),
      !1 === ss.isTextPosition(n) &&
      o === r.parentNode &&
      i > ss.before(r).offset()
        ? ss(t.container(), t.offset() - 1)
        : t
    );
    var n, r, o, i;
  }
  function $m(e) {
    return jr(e.previousSibling)
      ? ve.some(
          ((t = e.previousSibling), jn(t) ? ss(t, t.data.length) : ss.after(t))
        )
      : e.previousSibling
      ? rf(e.previousSibling)
      : ve.none();
    var t;
  }
  function Wm(e) {
    return jr(e.nextSibling)
      ? ve.some(((t = e.nextSibling), jn(t) ? ss(t, 0) : ss.before(t)))
      : e.nextSibling
      ? nf(e.nextSibling)
      : ve.none();
    var t;
  }
  function Km(r, o) {
    return $m(o)
      .orThunk(function () {
        return Wm(o);
      })
      .orThunk(function () {
        return (
          (e = r),
          (n = ss.before((t = o).previousSibling || t.parentNode)),
          tf(e, n).fold(function () {
            return ef(e, ss.after(t));
          }, ve.some)
        );
        var e, t, n;
      });
  }
  function Xm(n, r) {
    return Wm(r)
      .orThunk(function () {
        return $m(r);
      })
      .orThunk(function () {
        return ef((e = n), ss.after((t = r))).fold(function () {
          return tf(e, ss.before(t));
        }, ve.some);
        var e, t;
      });
  }
  function Ym(t, n, e) {
    e.fold(
      function () {
        t.focus();
      },
      function (e) {
        t.selection.setRng(e.toRange(), n);
      }
    );
  }
  function Gm(e, t) {
    return t && ke(e.schema.getBlockElements(), Nt(t));
  }
  function Jm(e) {
    if (Wr(e)) {
      var t = kt.fromHtml('<br data-mce-bogus="1">');
      return Xt(e), Pn(e, t), ve.some(ss.before(t.dom));
    }
    return ve.none();
  }
  function Qm(t, n, e, r) {
    void 0 === r && (r = !0);
    var o,
      i,
      a,
      u,
      s,
      c,
      l,
      f,
      d,
      m,
      g,
      p,
      h,
      v,
      b =
        ((p = n),
        (h = t.getBody()),
        (v = e.dom),
        (p ? Xm : Km)(h, v).map(R(qm, v))),
      y = gr(
        e,
        R(Gm, t),
        ((o = t.getBody()),
        function (e) {
          return e.dom === o;
        })
      ),
      C =
        ((u = b),
        (i = a = e),
        (s = ke(t.schema.getTextInlineElements(), Nt(i))),
        (m = Bt(a).filter(_n)),
        (g = Pt(a).filter(_n)),
        Ln(a),
        (l = g),
        (f = u),
        (d = function (e, t, n) {
          var r = e.dom,
            o = t.dom,
            i = r.data.length;
          return Vm(r, o, s), n.container() === o ? ss(r, i) : n;
        }),
        ((c = m).isSome() && l.isSome() && f.isSome()
          ? ve.some(d(c.getOrDie(), l.getOrDie(), f.getOrDie()))
          : ve.none()
        ).orThunk(function () {
          return (
            s &&
              (m.each(function (e) {
                return jm(e.dom, e.dom.length);
              }),
              g.each(function (e) {
                return Hm(e.dom, 0);
              })),
            u
          );
        }));
    t.dom.isEmpty(t.getBody())
      ? (t.setContent(""), t.selection.setCursorLocation())
      : y.bind(Jm).fold(
          function () {
            r && Ym(t, n, C);
          },
          function (e) {
            r && Ym(t, n, ve.some(e));
          }
        );
  }
  function Zm(e) {
    return bu(e, "td,th");
  }
  function eg(e, t) {
    return { start: e, end: t };
  }
  function tg(e, t) {
    return br(kt.fromDom(e), "td,th", t);
  }
  function ng(e) {
    return !je(e.start, e.end);
  }
  function rg(e, n) {
    return Dl(e.start, n).bind(function (t) {
      return Dl(e.end, n).bind(function (e) {
        return je(t, e) ? ve.some(t) : ve.none();
      });
    });
  }
  function og(e) {
    return function (t) {
      return rg(t, e).map(function (e) {
        return { rng: t, table: e, cells: Zm(e) };
      });
    };
  }
  function ig(e, t, n, r) {
    if (n.collapsed || !e.forall(ng)) return ve.none();
    if (t.isSameTable) {
      var o = e.bind(og(r));
      return ve.some({ start: o, end: o });
    }
    var i,
      a,
      u = tg(n.startContainer, r),
      s = tg(n.endContainer, r),
      c = u
        .bind(
          ((a = r),
          function (t) {
            return Dl(t, a).bind(function (e) {
              return Z(Zm(e)).map(function (e) {
                return eg(t, e);
              });
            });
          })
        )
        .bind(og(r)),
      l = s
        .bind(
          ((i = r),
          function (t) {
            return Dl(t, i).bind(function (e) {
              return Q(Zm(e)).map(function (e) {
                return eg(e, t);
              });
            });
          })
        )
        .bind(og(r));
    return ve.some({ start: c, end: l });
  }
  function ag(e, t) {
    return z(e, function (e) {
      return je(e, t);
    });
  }
  function ug(n) {
    return dn(
      ag(n.cells, n.rng.start),
      ag(n.cells, n.rng.end),
      function (e, t) {
        return n.cells.slice(e, t + 1);
      }
    );
  }
  function sg(e, t) {
    var n = t.startTable,
      r = t.endTable,
      o = e.cloneRange();
    return (
      n.each(function (e) {
        return o.setStartAfter(e.dom);
      }),
      r.each(function (e) {
        return o.setEndBefore(e.dom);
      }),
      o
    );
  }
  function cg(e, t) {
    var n,
      r,
      o,
      i,
      a,
      u,
      s,
      c,
      l,
      f,
      d,
      m,
      g,
      p,
      h,
      v,
      b =
        ((n = e),
        function (e) {
          return je(n, e);
        }),
      y = dn(tg((r = t).startContainer, (o = b)), tg(r.endContainer, o), eg),
      C =
        ((l = b),
        (f = x((c = t).startContainer)),
        (d = x(c.endContainer)),
        (m = f.isSome()),
        (g = d.isSome()),
        (p = dn(f, d, je).getOr(!1)),
        {
          startTable: f,
          endTable: d,
          isStartInTable: m,
          isEndInTable: g,
          isSameTable: p,
          isMultiTable: !p && m && g,
        });
    function x(e) {
      return Dl(kt.fromDom(e), l);
    }
    return (
      (h = t),
      (v = b),
      y.exists(function (e) {
        return (
          !ng((t = e)) &&
          rg(t, v).exists(function (e) {
            var t = e.dom.rows;
            return 1 === t.length && 1 === t[0].cells.length;
          }) &&
          Tl(e.start, h)
        );
        var t;
      })
        ? y.map(function (e) {
            return fp.singleCellTable(t, e.start);
          })
        : C.isMultiTable
        ? ig(y, (u = C), (s = t), b).bind(function (e) {
            var t = e.start,
              n = e.end,
              r = t.bind(ug).getOr([]),
              o = n.bind(ug).getOr([]);
            if (0 < r.length && 0 < o.length) {
              var i = sg(s, u);
              return ve.some(fp.multiTable(r, o, i));
            }
            return ve.none();
          })
        : ig(y, (i = C), (a = t), b)
            .bind(function (e) {
              var t = e.start,
                n = e.end;
              return t.or(n);
            })
            .bind(function (e) {
              var t = i.isSameTable,
                n = ug(e).getOr([]);
              if (t && e.cells.length === n.length)
                return ve.some(fp.fullTable(e.table));
              if (0 < n.length) {
                if (t) return ve.some(fp.partialTable(n, ve.none()));
                var r = sg(a, i);
                return ve.some(
                  fp.partialTable(n, ve.some(_e(_e({}, i), { rng: r })))
                );
              }
              return ve.none();
            })
    );
  }
  function lg(e) {
    return (
      Y(e, function (e) {
        yn(e, "contenteditable"), hm(e);
      }),
      0
    );
  }
  function fg(e, t, n, r) {
    var o = n.cloneRange();
    r
      ? (o.setStart(n.startContainer, n.startOffset),
        o.setEndAfter(t.dom.lastChild))
      : (o.setStartBefore(t.dom.firstChild),
        o.setEnd(n.endContainer, n.endOffset)),
      mp(e, o, t, !1);
  }
  function dg(e) {
    var t = Rl(e),
      n = kt.fromDom(e.selection.getNode());
    Gn(n.dom) && Wr(n)
      ? e.selection.setCursorLocation(n.dom, 0)
      : e.selection.collapse(!0),
      1 < t.length &&
        F(t, function (e) {
          return je(e, n);
        }) &&
        pn(n, "data-mce-selected", "1");
  }
  function mg(s, c, e) {
    var l = s.selection.getRng();
    return (
      lg(
        e
          .bind(function (e) {
            var t,
              n,
              r,
              o = e.rng,
              i = e.isStartInTable,
              a =
                ((t = i ? o.endContainer : o.startContainer),
                ve.from(s.dom.getParent(t, s.dom.isBlock)).map(kt.fromDom));
            o.deleteContents(),
              (n = s),
              (r = i),
              a.filter(Wr).each(function (e) {
                r ? Ln(e) : (hm(e), n.selection.setCursorLocation(e.dom, 0));
              });
            var u = i ? c[0] : c[c.length - 1];
            return (
              fg(s, u, l, i),
              Wr(u) ? ve.none() : ve.some(i ? c.slice(1) : c.slice(0, -1))
            );
          })
          .getOr(c)
      ),
      dg(s),
      !0
    );
  }
  function gg(e, t, n, r) {
    var o = e.selection.getRng(),
      i = t[0],
      a = n[n.length - 1];
    fg(e, i, o, !0), fg(e, a, o, !1);
    var u = Wr(i) ? t : t.slice(1),
      s = Wr(a) ? n : n.slice(0, -1);
    return lg(u.concat(s)), r.deleteContents(), dg(e), !0;
  }
  function pg(e, t) {
    return Qm(e, !1, t), !0;
  }
  function hg(e, t) {
    return M(ym(t, e), bo);
  }
  function vg(e, t) {
    return (e ? tp : np)(t);
  }
  function bg(f, d, s) {
    var m = kt.fromDom(f.getBody());
    return gp(m, s).fold(
      function () {
        return (
          (o = f),
          (i = d),
          (a = m),
          (e = s),
          (u = ss.fromRangeStart(o.selection.getRng())),
          hg(a, e)
            .bind(function (e) {
              return Wr(e)
                ? pp(o, e)
                : ((t = a),
                  (n = e),
                  (r = u),
                  zc(i, o.getBody(), r).bind(function (e) {
                    return hg(t, kt.fromDom(e.getNode())).map(function (e) {
                      return !1 === je(e, n);
                    });
                  }));
              var t, n, r;
            })
            .getOr(!1) ||
            ((n = d),
            (r = ss.fromRangeStart((t = f).selection.getRng())),
            vg(n, r) ||
              Ql(n, t.getBody(), r).exists(function (e) {
                return vg(n, e);
              }))
        );
        var o, i, a, e, u, t, n, r;
      },
      function (e) {
        return (
          (n = d),
          (r = m),
          (o = e),
          (i = ss.fromRangeStart((t = f).selection.getRng())),
          (Wr(o)
            ? pp(t, o)
            : ((u = r),
              (c = o),
              (l = i),
              zc((s = n), (a = t).getBody(), l)
                .bind(function (e) {
                  return (
                    (r = s),
                    (o = l),
                    (i = e),
                    nf((n = c).dom)
                      .bind(function (t) {
                        return rf(n.dom).map(function (e) {
                          return r
                            ? o.isEqual(t) && i.isEqual(e)
                            : o.isEqual(e) && i.isEqual(t);
                        });
                      })
                      .getOr(!0)
                      ? pp(a, c)
                      : ((t = c),
                        gp(u, kt.fromDom(e.getNode())).map(function (e) {
                          return !1 === je(e, t);
                        }))
                  );
                  var t, n, r, o, i;
                })
                .or(ve.some(!0)))
          ).getOr(!1)
        );
        var a, u, s, c, l, t, n, r, o, i;
      }
    );
  }
  function yg(e, t) {
    var n,
      r,
      o,
      i,
      a,
      u,
      s,
      c,
      l = kt.fromDom(e.selection.getStart(!0)),
      f = Rl(e);
    return e.selection.isCollapsed() && 0 === f.length
      ? bg(e, t, l)
      : ((r = l),
        (o = f),
        (i = kt.fromDom((n = e).getBody())),
        (a = n.selection.getRng()),
        0 !== o.length
          ? mg(n, o, ve.none())
          : ((u = n),
            (c = a),
            gp((s = i), r)
              .fold(
                function () {
                  return (
                    (t = u),
                    cg(s, c).map(function (e) {
                      return e.fold(R(mp, t), R(pg, t), R(mg, t), R(gg, t));
                    })
                  );
                  var t;
                },
                function (e) {
                  return pp(u, e);
                }
              )
              .getOr(!1)));
  }
  function Cg(e) {
    return e.collapsed
      ? e
      : ((a = e),
        (u = ss.fromRangeStart(a)),
        (s = ss.fromRangeEnd(a)),
        (c = a.commonAncestorContainer),
        Ql(!1, c, s)
          .map(function (e) {
            return !Js(u, s, c) && Js(u, e, c)
              ? ((t = u.container()),
                (n = u.offset()),
                (r = e.container()),
                (o = e.offset()),
                (i = document.createRange()).setStart(t, n),
                i.setEnd(r, o),
                i)
              : a;
            var t, n, r, o, i;
          })
          .getOr(a));
    var a, u, s, c;
  }
  function xg(e, t) {
    var n,
      r,
      o,
      i,
      a,
      u = t.firstChild,
      s = t.lastChild;
    return (
      u && "meta" === u.name && (u = u.next),
      (r = s = s && "mce_marker" === s.attr("id") ? s.prev : s),
      (o = (n = e).getNonEmptyElements()),
      r &&
        (r.isEmpty(o) ||
          ((i = r),
          n.getBlockElements()[i.name] &&
            i.firstChild &&
            i.firstChild === i.lastChild &&
            ("br" === (a = i.firstChild).name || a.value === xo))) &&
        (s = s.prev),
      u && u === s && ("ul" === u.name || "ol" === u.name)
    );
  }
  function wg(e) {
    return 0 < e.length &&
      (!(r = e[e.length - 1]).firstChild ||
        ((t = r) &&
          t.firstChild &&
          t.firstChild === t.lastChild &&
          ((n = t.firstChild).data === xo || Wn(n))))
      ? e.slice(0, -1)
      : e;
    var t, n, r;
  }
  function Sg(e, t) {
    var n = e.getParent(t, e.isBlock);
    return n && "LI" === n.nodeName ? n : null;
  }
  function Eg(e, t) {
    var n = ss.after(e),
      r = Ic(t).prev(n);
    return r ? r.toRange() : null;
  }
  function kg(e, o, i, t) {
    function n(e) {
      var t = ss.fromRangeStart(i),
        n = Ic(o.getRoot()),
        r = 1 === e ? n.prev(t) : n.next(t);
      return !r || Sg(o, r.getNode()) !== R;
    }
    var r,
      a,
      u,
      s,
      c,
      l,
      f,
      d,
      m,
      g,
      p,
      h,
      v,
      b,
      y,
      C,
      x,
      w,
      S,
      E,
      k,
      N,
      _,
      A =
        ((r = o),
        (c = e.serialize(t)),
        (u = (a = r.createFragment(c)).firstChild),
        (s = a.lastChild),
        u && "META" === u.nodeName && u.parentNode.removeChild(u),
        s && "mce_marker" === s.id && s.parentNode.removeChild(s),
        a),
      R = Sg(o, i.startContainer),
      D = wg(
        U(A.firstChild.childNodes, function (e) {
          return "LI" === e.nodeName;
        })
      ),
      T = o.getRoot();
    return n(1)
      ? ((S = T),
        (_ = (w = R).parentNode),
        Et.each(D, function (e) {
          _.insertBefore(e, w);
        }),
        (E = S),
        (k = ss.before(w)),
        (N = Ic(E).next(k)) ? N.toRange() : null)
      : n(2)
      ? ((l = R), (d = T), o.insertAfter((f = D).reverse(), l), Eg(f[0], d))
      : ((g = D),
        (p = T),
        (h = m = R),
        (b = (v = i).cloneRange()),
        (y = v.cloneRange()),
        b.setStartBefore(h),
        y.setEndAfter(h),
        (C = [b.cloneContents(), y.cloneContents()]),
        (x = m.parentNode).insertBefore(C[0], m),
        Et.each(g, function (e) {
          x.insertBefore(e, m);
        }),
        x.insertBefore(C[1], m),
        x.removeChild(m),
        Eg(g[g.length - 1], p));
  }
  function Ng(e, t, n) {
    var r,
      o,
      i,
      a,
      u = e.selection,
      s = e.dom;
    /^ | $/.test(t) &&
      ((r = s),
      (o = u.getRng()),
      (i = t),
      (i = Bm((a = kt.fromDom(r.getRoot())), ss.fromRangeStart(o))
        ? i.replace(/^ /, "&nbsp;")
        : i.replace(/^&nbsp;/, " ")),
      (t = i =
        Pm(a, ss.fromRangeEnd(o))
          ? i.replace(/(&nbsp;| )(<br( \/)>)?$/, "&nbsp;")
          : i.replace(/&nbsp;(<br( \/)?>)?$/, " ")));
    var c = e.parser,
      l = n.merge,
      f = im({ validate: e.getParam("validate") }, e.schema),
      d = '<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;</span>',
      m = e.fire("BeforeSetContent", {
        content: t,
        format: "html",
        selection: !0,
        paste: n.paste,
      });
    if (m.isDefaultPrevented())
      e.fire("SetContent", {
        content: m.content,
        format: "html",
        selection: !0,
        paste: n.paste,
      });
    else {
      -1 === (t = m.content).indexOf("{$caret}") && (t += "{$caret}"),
        (t = t.replace(/\{\$caret\}/, d));
      var g,
        p,
        h =
          (g = u.getRng()).startContainer ||
          (g.parentElement ? g.parentElement() : null),
        v = e.getBody();
      h === v &&
        u.isCollapsed() &&
        s.isBlock(v.firstChild) &&
        (p = v.firstChild) &&
        !e.schema.getShortEndedElements()[p.nodeName] &&
        s.isEmpty(v.firstChild) &&
        ((g = s.createRng()).setStart(v.firstChild, 0),
        g.setEnd(v.firstChild, 0),
        u.setRng(g)),
        u.isCollapsed() ||
          (function (e) {
            var t = e.dom,
              n = Cg(e.selection.getRng());
            e.selection.setRng(n);
            var r,
              o = t.getParent(n.startContainer, hp),
              i = n;
            null !== (r = o) &&
            r === t.getParent(i.endContainer, hp) &&
            Tl(kt.fromDom(r), i)
              ? mp(e, n, kt.fromDom(o))
              : e.getDoc().execCommand("Delete", !1, null);
          })(e);
      var b,
        y,
        C,
        x,
        w,
        S,
        E,
        k,
        N,
        _,
        A,
        R,
        D,
        T,
        O = {
          context: (I = u.getNode()).nodeName.toLowerCase(),
          data: n.data,
          insert: !0,
        },
        B = c.parse(t, O);
      if (!0 === n.paste && xg(e.schema, B) && Sg(s, I))
        return (
          (g = kg(f, s, u.getRng(), B)),
          u.setRng(g),
          void e.fire("SetContent", m)
        );
      if (
        ((function () {
          for (var e = B; (e = e.walk()); )
            1 === e.type && e.attr("data-mce-fragment", "1");
        })(),
        "mce_marker" === (L = B.lastChild).attr("id"))
      )
        for (var P = L, L = L.prev; L; L = L.walk(!0))
          if (3 === L.type || !s.isBlock(L.name)) {
            e.schema.isValidChild(L.parent.name, "span") &&
              L.parent.insert(P, L, "br" === L.name);
            break;
          }
      if ((e._selectionOverrides.showBlockCaretContainer(I), O.invalid)) {
        e.selection.setContent(d);
        var I = u.getNode(),
          M = e.getBody();
        for (9 === I.nodeType ? (I = L = M) : (L = I); L !== M; )
          L = (I = L).parentNode;
        (t = I === M ? M.innerHTML : s.getOuterHTML(I)),
          (t = f.serialize(
            c.parse(
              t.replace(
                /<span (id="mce_marker"|id=mce_marker).+?<\/span>/i,
                function () {
                  return f.serialize(B);
                }
              )
            )
          )),
          I === M ? s.setHTML(M, t) : s.setOuterHTML(I, t);
      } else
        (b = e),
          (y = t = f.serialize(B)),
          "all" === (C = I).getAttribute("data-mce-bogus")
            ? C.parentNode.insertBefore(b.dom.createFragment(y), C)
            : ((x = C.firstChild),
              (w = C.lastChild),
              !x || (x === w && "BR" === x.nodeName)
                ? b.dom.setHTML(C, y)
                : b.selection.setContent(y));
      (E = l),
        (_ = (S = e).schema.getTextInlineElements()),
        (A = S.dom),
        E &&
          ((k = S.getBody()),
          (N = rm(A)),
          Et.each(A.select("*[data-mce-fragment]"), function (e) {
            if (
              V(_[e.nodeName.toLowerCase()]) &&
              j(lm(A, e), function (e) {
                return !cm.has(e);
              })
            )
              for (
                var t = e.parentNode;
                V(t) &&
                t !== k &&
                !(function (r, o, i) {
                  function a(e) {
                    var t = r.getStyle(o, e),
                      n = r.getStyle(i, e);
                    return Be(t) && Be(n) && t !== n;
                  }
                  var e = lm(r, o),
                    u = lm(r, i);
                  return F(e, function (t) {
                    function e(e) {
                      return F(e, function (e) {
                        return e === t;
                      });
                    }
                    if (e(u) || !e(Xg)) return a(t);
                    var n = U(u, function (t) {
                      return F(Xg, function (e) {
                        return Ge(t, e);
                      });
                    });
                    return F(n, a);
                  });
                })(A, e, t);
                t = t.parentNode
              )
                if (N.compare(t, e)) {
                  A.remove(e, !0);
                  break;
                }
          })),
        (function (n, e) {
          var t,
            r = n.dom,
            o = n.selection;
          if (e) {
            o.scrollIntoView(e);
            var i = vf(n.getBody(), e);
            if ("false" === r.getContentEditable(i))
              return r.remove(e), o.select(i);
            var a,
              u = r.createRng(),
              s = e.previousSibling;
            jn(s)
              ? (u.setStart(s, s.nodeValue.length),
                xt.ie ||
                  ((a = e.nextSibling),
                  jn(a) && (s.appendData(a.data), a.parentNode.removeChild(a))))
              : (u.setStartBefore(e), u.setEndBefore(e));
            var c = r.getParent(e, r.isBlock);
            r.remove(e),
              c &&
                r.isEmpty(c) &&
                (n.$(c).empty(),
                u.setStart(c, 0),
                u.setEnd(c, 0),
                hp(c) ||
                c.getAttribute("data-mce-fragment") ||
                !(t = (function (e) {
                  var t = ss.fromRangeStart(e);
                  if ((t = Ic(n.getBody()).next(t))) return t.toRange();
                })(u))
                  ? r.add(c, r.create("br", { "data-mce-bogus": "1" }))
                  : ((u = t), r.remove(c))),
              o.setRng(u);
          }
        })(e, s.get("mce_marker")),
        (R = e.getBody()),
        Et.each(R.getElementsByTagName("*"), function (e) {
          e.removeAttribute("data-mce-fragment");
        }),
        (D = s),
        (T = u.getStart()),
        ve.from(D.getParent(T, "td,th")).map(kt.fromDom).each(vm),
        e.fire("SetContent", m),
        e.addVisual();
    }
  }
  function _g(e) {
    return e instanceof Hd;
  }
  function Ag(e, t, n) {
    var r;
    e.dom.setHTML(e.getBody(), t),
      !0 !== n &&
        yd((r = e)) &&
        nf(r.getBody()).each(function (e) {
          var t = e.getNode(),
            n = cn(t) ? nf(t).getOr(e) : e;
          r.selection.setRng(n.toRange());
        });
  }
  function Rg(u, s, e) {
    var t,
      n =
        ((t = s),
        _e(_e({ format: "html" }, e), { set: !0, content: _g(t) ? "" : t })),
      c = e.no_events ? n : u.fire("BeforeSetContent", n);
    return (
      _g(s) || (s = c.content),
      ve.from(u.getBody()).fold(J(s), function (e) {
        return _g(s)
          ? (function (e, t, n, r) {
              var o, i, u, a;
              (o = e.parser.getNodeFilters()),
                (i = e.parser.getAttributeFilters()),
                (u = n),
                (a = (function (e, n) {
                  var t,
                    r,
                    o = {},
                    i = {},
                    a = [];
                  for (t in (u.firstChild &&
                    vp(u.firstChild, function (t) {
                      Y(e, function (e) {
                        e.name === t.name &&
                          (o[e.name]
                            ? o[e.name].nodes.push(t)
                            : (o[e.name] = { filter: e, nodes: [t] }));
                      }),
                        Y(n, function (e) {
                          "string" == typeof t.attr(e.name) &&
                            (i[e.name]
                              ? i[e.name].nodes.push(t)
                              : (i[e.name] = { filter: e, nodes: [t] }));
                        });
                    }),
                  o))
                    ke(o, t) && a.push(o[t]);
                  for (r in i) ke(i, r) && a.push(i[r]);
                  return a;
                })(o, i)),
                Y(a, function (t) {
                  Y(t.filter.callbacks, function (e) {
                    e(t.nodes, t.filter.name, {});
                  });
                });
              var s = im({ validate: e.validate }, e.schema).serialize(n);
              return (
                (r.content = yo(kt.fromDom(t)) ? s : Et.trim(s)),
                Ag(e, r.content, r.no_selection),
                r.no_events || e.fire("SetContent", r),
                n
              );
            })(u, e, s, c)
          : ((t = u),
            (n = e),
            (o = c),
            0 === (r = s).length || /^\s+$/.test(r)
              ? ((i = '<br data-mce-bogus="1">'),
                "TABLE" === n.nodeName
                  ? (r = "<tr><td>" + i + "</td></tr>")
                  : /^(UL|OL)$/.test(n.nodeName) && (r = "<li>" + i + "</li>"),
                (r =
                  (a = ks(t)) &&
                  t.schema.isValidChild(
                    n.nodeName.toLowerCase(),
                    a.toLowerCase()
                  )
                    ? ((r = i), t.dom.createHTML(a, Ns(t), r))
                    : r || '<br data-mce-bogus="1">'),
                Ag(t, r, o.no_selection),
                t.fire("SetContent", o))
              : ("raw" !== o.format &&
                  (r = im({ validate: t.validate }, t.schema).serialize(
                    t.parser.parse(r, { isRootContent: !0, insert: !0 })
                  )),
                (o.content = yo(kt.fromDom(n)) ? r : Et.trim(r)),
                Ag(t, o.content, o.no_selection),
                o.no_events || t.fire("SetContent", o)),
            o.content);
        var t, n, r, o, i, a;
      })
    );
  }
  function Dg(e) {
    return y(e) ? e : D;
  }
  function Tg(i, e, t) {
    var n = e(i),
      a = Dg(t);
    return n.orThunk(function () {
      return a(i)
        ? ve.none()
        : (function (e) {
            for (var t = i.dom, n = Dg(a); t.parentNode; ) {
              var t = t.parentNode,
                r = kt.fromDom(t),
                o = e(r);
              if (o.isSome()) return o;
              if (n(r)) break;
            }
            return ve.none();
          })(e);
    });
  }
  function Og(e, t, n) {
    var r = e.formatter.get(n);
    if (r)
      for (var o = 0; o < r.length; o++) {
        var i = r[o];
        if (ml(i) && !1 === i.inherit && e.dom.is(t, i.selector)) return 1;
      }
  }
  function Bg(t, e, n, r, o) {
    var i = t.dom.getRoot();
    return (
      e !== i &&
      ((e = t.dom.getParent(e, function (e) {
        return !!Og(t, e, n) || e.parentNode === i || !!yp(t, e, n, r, !0);
      })),
      !!yp(t, e, n, r, o))
    );
  }
  function Pg(e, t, n) {
    return (
      !!bp(t, n.inline) ||
      !!bp(t, n.block) ||
      (n.selector ? 1 === t.nodeType && e.is(t, n.selector) : void 0)
    );
  }
  function Lg(e, t, n, r, o, i) {
    var a = n[r];
    if (y(n.onmatch)) return n.onmatch(t, n, r);
    if (a)
      if (b(a.length)) {
        for (var u in a)
          if (ke(a, u)) {
            var s = "attributes" === r ? e.getAttrib(t, u) : sl(e, t, u),
              c = il(a[u], i),
              l = K(s) || Pe(s);
            if (!l || !K(c)) {
              if (o && l && !n.exact) return;
              if ((!o || n.exact) && !bp(s, ul(e, c, u))) return;
            }
          }
      } else
        for (var f = 0; f < a.length; f++)
          if ("attributes" === r ? e.getAttrib(t, a[f]) : sl(e, t, a[f]))
            return 1;
    return 1;
  }
  function Ig(e, t, n, r, o) {
    if (r) return Bg(e, r, t, n, o);
    if (((r = e.selection.getNode()), Bg(e, r, t, n, o))) return !0;
    var i = e.selection.getStart();
    return !(i === r || !Bg(e, i, t, n, o));
  }
  function Mg(e) {
    return (
      0 <
      (function (e) {
        for (var t = []; e; ) {
          if (
            (3 === e.nodeType && e.nodeValue !== Cp) ||
            1 < e.childNodes.length
          )
            return [];
          1 === e.nodeType && t.push(e), (e = e.firstChild);
        }
        return t;
      })(e).length
    );
  }
  function Fg(e) {
    if (e) {
      var t = new Rr(e, e);
      for (e = t.current(); e; e = t.next()) if (jn(e)) return e;
    }
    return null;
  }
  function Ug(e) {
    var t = kt.fromTag("span");
    return (
      hn(t, { id: xp, "data-mce-bogus": "1", "data-mce-type": "format-caret" }),
      e && Pn(t, kt.fromText(Cp)),
      t
    );
  }
  function zg(e, t, n) {
    void 0 === n && (n = !0);
    var r,
      o,
      i,
      a,
      u,
      s,
      c,
      l,
      f = e.dom,
      d = e.selection;
    Mg(t)
      ? Qm(e, !1, kt.fromDom(t), n)
      : ((r = d.getRng()),
        (o = f.getParent(t, f.isBlock)),
        (i = r.startContainer),
        (a = r.startOffset),
        (u = r.endContainer),
        (s = r.endOffset),
        (l = Fg(t)) && l.nodeValue.charAt(0) === Cp && l.deleteData(0, 1),
        (c = l),
        f.remove(t, !0),
        i === c && 0 < a && r.setStart(c, a - 1),
        u === c && 0 < s && r.setEnd(c, s - 1),
        o && f.isEmpty(o) && hm(kt.fromDom(o)),
        d.setRng(r));
  }
  function Hg(e, t, n) {
    void 0 === n && (n = !0);
    var r = e.dom,
      o = e.selection;
    if (t) zg(e, t, n);
    else if (!(t = Vc(e.getBody(), o.getStart())))
      for (; (t = r.get(xp)); ) zg(e, t, !1);
  }
  function jg(e, t) {
    return e.appendChild(t), t;
  }
  function Vg(e, t) {
    var n = P(
      e,
      function (e, t) {
        return jg(e, t.cloneNode(!1));
      },
      t
    );
    return jg(n, n.ownerDocument.createTextNode(Cp));
  }
  function qg(o, e, t, i, n, r) {
    var a,
      u,
      s = o.formatter,
      c = o.dom,
      l = U(we(s.get()), function (e) {
        return e !== i && !Te(e, "removeformat");
      });
    if (
      0 <
      U(
        ((a = o),
        (u = t),
        L(
          l,
          function (e, t) {
            var n = fl(a, t);
            return a.formatter.matchNode(u, t, {}, n) ? e.concat([t]) : e;
          },
          []
        )),
        function (e) {
          return (
            (n = i),
            (r = [
              "inline",
              "block",
              "selector",
              "attributes",
              "styles",
              "classes",
            ]),
            !F((t = o).formatter.get(e), function (e) {
              var i = a(e);
              return F(t.formatter.get(n), function (e) {
                var t,
                  n = a(e),
                  r = i,
                  o = n;
                return d((t = void 0 === t ? p : t)).eq(r, o);
              });
            })
          );
          function a(e) {
            return ae(e, function (e, t) {
              return F(r, function (e) {
                return e === t;
              });
            });
          }
          var t, n, r;
        }
      ).length
    ) {
      var f = t.cloneNode(!1);
      return c.add(e, f), s.remove(i, n, f, r), c.remove(f), ve.some(f);
    }
    return ve.none();
  }
  function $g(e, t, n, r) {
    var o,
      i,
      a,
      u,
      s,
      c,
      l,
      f,
      d,
      m,
      g,
      p,
      h,
      v,
      b,
      y = e.dom,
      C = e.selection,
      x = [],
      w = C.getRng(),
      S = w.startContainer,
      E = w.startOffset,
      k = S;
    for (
      3 === S.nodeType &&
      (E !== S.nodeValue.length && (o = !0), (k = k.parentNode));
      k;

    ) {
      if (yp(e, k, t, n, r)) {
        i = k;
        break;
      }
      k.nextSibling && (o = !0), x.push(k), (k = k.parentNode);
    }
    i &&
      (o
        ? ((a = C.getBookmark()),
          w.collapse(!0),
          (u = Bf(kl(e, w, e.formatter.get(t), !0))),
          e.formatter.remove(t, n, u, r),
          C.moveToBookmark(a))
        : ((s = Vc(e.getBody(), i)),
          (d = c = Ug(!1).dom),
          (p = (g = e.dom).getParent((m = null !== s ? s : i), R(rl, e))) &&
          g.isEmpty(p)
            ? m.parentNode.replaceChild(d, m)
            : ((h = kt.fromDom(m)),
              (v = bu(h, "br")),
              (b = U(
                (function () {
                  for (var e = [], t = h.dom; t; )
                    e.push(kt.fromDom(t)), (t = t.lastChild);
                  return e;
                })().slice(-1),
                Br
              )),
              v.length === b.length && Y(b, Ln),
              g.isEmpty(m)
                ? m.parentNode.replaceChild(d, m)
                : g.insertAfter(d, m)),
          (l = qg(e, c, i, t, n, r)),
          (f = Vg(x.concat(l.toArray()), c)),
          zg(e, s, !1),
          C.setCursorLocation(f, 1),
          y.isEmpty(i) && y.remove(i)));
  }
  function Wg(e, t) {
    var n = e.schema.getTextInlineElements();
    return ke(n, Nt(t)) && !jc(t.dom) && !sn(t.dom);
  }
  Y(
    [
      "margin",
      "margin-left",
      "margin-right",
      "margin-top",
      "margin-bottom",
      "padding",
      "padding-left",
      "padding-right",
      "padding-top",
      "padding-bottom",
      "border",
      "border-width",
      "border-style",
      "border-color",
      "background",
      "background-attachment",
      "background-clip",
      "background-color",
      "background-image",
      "background-origin",
      "background-position",
      "background-repeat",
      "background-size",
      "float",
      "position",
      "left",
      "right",
      "top",
      "bottom",
      "z-index",
      "display",
      "transform",
      "width",
      "max-width",
      "min-width",
      "height",
      "max-height",
      "min-height",
      "overflow",
      "overflow-x",
      "overflow-y",
      "text-overflow",
      "vertical-align",
      "transition",
      "transition-delay",
      "transition-duration",
      "transition-property",
      "transition-timing-function",
    ],
    function (e) {
      cm.add(e);
    }
  );
  var Kg,
    Xg = ["font", "text-decoration", "text-emphasis"],
    Yg = R(fm, !0, Qc),
    Gg = R(fm, !1, Qc),
    Jg = mm(!0, gm),
    Qg = mm(!1, gm),
    Zg = mm(!0, Jn),
    ep = mm(!1, Jn),
    tp = mm(!0, cn),
    np = mm(!1, cn),
    rp = mm(!0, pm),
    op = mm(!1, pm),
    ip = R(Sm, !1),
    ap = R(Sm, !0),
    up = R(wm, !1),
    sp = R(wm, !0),
    cp = R(km, !1),
    lp = R(km, !0),
    fp = or([
      { singleCellTable: ["rng", "cell"] },
      { fullTable: ["table"] },
      { partialTable: ["cells", "outsideDetails"] },
      { multiTable: ["startTableCells", "endTableCells", "betweenRng"] },
    ]),
    dp = function (e) {
      var t;
      return (8 === _t((t = e)) || "#comment" === Nt(t) ? Bt : Ut)(e)
        .bind(dp)
        .orThunk(function () {
          return ve.some(e);
        });
    },
    mp = function (e, t, n, r) {
      void 0 === r && (r = !0), t.deleteContents();
      var o,
        i = dp(n).getOr(n),
        a = kt.fromDom(e.dom.getParent(i.dom, e.dom.isBlock));
      return (
        Wr(a) && (hm(a), r && e.selection.setCursorLocation(a.dom, 0)),
        je(n, a) ||
          Y(
            (fn(Ot(a), n)
              ? []
              : Ot((o = a))
                  .map(Dn)
                  .map(function (e) {
                    return U(e, function (e) {
                      return !je(o, e);
                    });
                  })
                  .getOr([])
            ).concat(Dn(n)),
            function (e) {
              je(e, a) || Ve(e, a) || !Wr(e) || Ln(e);
            }
          ),
        !0
      );
    },
    gp = function (e, t) {
      return M(ym(t, e), function (e) {
        return Nn(e) && "caption" === Nt(e);
      });
    },
    pp = function (e, t) {
      return hm(t), e.selection.setCursorLocation(t.dom, 0), ve.some(!0);
    },
    hp = Gn,
    vp = function (e, t) {
      t(e), e.firstChild && vp(e.firstChild, t), e.next && vp(e.next, t);
    },
    bp = al,
    yp = function (e, t, n, r, o) {
      var i = e.formatter.get(n),
        a = e.dom;
      if (i && t)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          if (
            Pg(e.dom, t, s) &&
            Lg(a, t, s, "attributes", o, r) &&
            Lg(a, t, s, "styles", o, r)
          ) {
            var c = s.classes;
            if (c)
              for (var l = 0; l < c.length; l++)
                if (!e.dom.hasClass(t, il(c[l], r))) return;
            return s;
          }
        }
    },
    Cp = wo,
    xp = "_mce_caret",
    wp = {},
    Sp = fe,
    Ep = ce;
  function kp(e) {
    return zn(e) && !Jc(e) && !jc(e) && !sn(e);
  }
  function Np(e, t) {
    for (var n = e; n; n = n[t]) {
      if (jn(n) && Be(n.data)) return e;
      if (zn(n) && !Jc(n)) return n;
    }
    return e;
  }
  function _p(e, t, n) {
    var r = rm(e);
    if (
      t &&
      n &&
      ((t = Np(t, "previousSibling")),
      (n = Np(n, "nextSibling")),
      r.compare(t, n))
    ) {
      for (var o = t.nextSibling; o && o !== n; ) {
        var i = o,
          o = o.nextSibling;
        t.appendChild(i);
      }
      return (
        e.remove(n),
        Et.each(Et.grep(n.childNodes), function (e) {
          t.appendChild(e);
        }),
        t
      );
    }
    return n;
  }
  function Ap(e, t, n, r) {
    var o;
    r &&
      !1 !== t.merge_siblings &&
      ((o = _p(e, nl(r), r)), _p(e, o, nl(o, !0)));
  }
  function Rp(t, n) {
    return function (e) {
      return !(!e || !sl(t, e, n));
    };
  }
  function Dp(r, o, i) {
    return function (e) {
      var t, n;
      r.setStyle(e, o, i),
        "" === e.getAttribute("style") && e.removeAttribute("style"),
        (t = r),
        "SPAN" === (n = e).nodeName &&
          0 === t.getAttribs(n).length &&
          t.remove(n, !0);
    };
  }
  function Tp(e, t, n) {
    return e.isChildOf(t, n) && t !== n && !e.isBlock(n);
  }
  function Op(e, t, n) {
    var r,
      o = t[n ? "startContainer" : "endContainer"],
      i = t[n ? "startOffset" : "endOffset"];
    return (
      zn(o) &&
        ((r = o.childNodes.length - 1),
        !n && i && i--,
        (o = o.childNodes[r < i ? r : i])),
      jn(o) &&
        n &&
        i >= o.nodeValue.length &&
        (o = new Rr(o, e.getBody()).next() || o),
      (jn(o) && !n && 0 === i && new Rr(o, e.getBody()).prev()) || o
    );
  }
  function Bp(e, t) {
    var n = t ? "firstChild" : "lastChild";
    if (/^(TR|TH|TD)$/.test(e.nodeName) && e[n]) {
      var r = e[n];
      return ("TR" === e.nodeName && r[n]) || r;
    }
    return e;
  }
  function Pp(e, t, n, r) {
    var o = e.create(n, r);
    return t.parentNode.insertBefore(o, t), o.appendChild(t), o;
  }
  function Lp(e, t, n, r, o) {
    var i = kt.fromDom(t),
      a = kt.fromDom(e.create(r, o));
    return (
      Kt(a, (n ? It : Lt)(i)),
      n ? (qt(i, a), Wt(a, i)) : ($t(i, a), Pn(a, i)),
      a.dom
    );
  }
  function Ip(e, t, n, r) {
    var o = nl(t, n, r);
    return K(o) || "BR" === o.nodeName || e.isBlock(o);
  }
  function Mp(e, r, o, t, i) {
    var n,
      a,
      u = e.dom,
      s = u,
      c = t;
    if (
      !(
        (gl((a = r)) && Rh(c, a.inline)) ||
        (dl(a) && Rh(c, a.block)) ||
        (ml(a) && zn(c) && s.is(c, a.selector)) ||
        (r.links && "A" === t.nodeName)
      )
    )
      return Nh.keep();
    var l,
      f,
      d,
      m,
      g,
      p,
      h,
      v,
      b = t;
    if (gl(r) && "all" === r.remove && S(r.preserve_attributes)) {
      var y = U(u.getAttribs(b), function (e) {
        return T(r.preserve_attributes, e.name.toLowerCase());
      });
      if (
        (u.removeAllAttribs(b),
        Y(y, function (e) {
          return u.setAttrib(b, e.name, e.value);
        }),
        0 < y.length)
      )
        return Nh.rename("span");
    }
    if ("all" !== r.remove) {
      Ah(r.styles, function (e, t) {
        (e = ul(u, il(e, o), t + "")),
          E(t) && ((t = e), (i = null)),
          (!r.remove_similar && i && !Rh(sl(u, i, t), e)) ||
            u.setStyle(b, t, ""),
          (n = !0);
      }),
        n &&
          "" === u.getAttrib(b, "style") &&
          (b.removeAttribute("style"), b.removeAttribute("data-mce-style")),
        Ah(r.attributes, function (e, t) {
          var n;
          if (
            ((e = il(e, o)),
            E(t) && ((t = e), (i = null)),
            r.remove_similar || !i || Rh(u.getAttrib(i, t), e))
          )
            if (
              "class" === t &&
              (e = u.getAttrib(b, t)) &&
              ((n = ""),
              Y(e.split(/\s+/), function (e) {
                /mce\-\w+/.test(e) && (n += (n ? " " : "") + e);
              }),
              n)
            )
              u.setAttrib(b, t, n);
            else {
              if (
                (_h.test(t) && b.removeAttribute("data-mce-" + t),
                "style" === t &&
                  on(["li"])(b) &&
                  "none" === u.getStyle(b, "list-style-type"))
              )
                return (
                  b.removeAttribute(t),
                  void u.setStyle(b, "list-style-type", "none")
                );
              "class" === t && b.removeAttribute("className"),
                b.removeAttribute(t);
            }
        }),
        Ah(r.classes, function (e) {
          (e = il(e, o)), (i && !u.hasClass(i, e)) || u.removeClass(b, e);
        });
      for (var C = u.getAttribs(b), x = 0; x < C.length; x++) {
        var w = C[x].nodeName;
        if (0 !== w.indexOf("_") && 0 !== w.indexOf("data-")) return Nh.keep();
      }
    }
    return "none" !== r.remove
      ? ((l = e),
        (d = r),
        (p = (f = b).parentNode),
        (h = l.dom),
        (v = ks(l)),
        dl(d) &&
          (v
            ? p === h.getRoot() &&
              ((d.list_block && Rh(f, d.list_block)) ||
                Y(xe(f.childNodes), function (e) {
                  ol(l, v, e.nodeName.toLowerCase())
                    ? m
                      ? m.appendChild(e)
                      : ((m = Pp(h, e, v)),
                        h.setAttribs(m, l.settings.forced_root_block_attrs))
                    : (m = null);
                }))
            : h.isBlock(f) &&
              !h.isBlock(p) &&
              (Ip(h, f, !1) ||
                Ip(h, f.firstChild, !0, !0) ||
                f.insertBefore(h.create("br"), f.firstChild),
              Ip(h, f, !0) ||
                Ip(h, f.lastChild, !1, !0) ||
                f.appendChild(h.create("br")))),
        (ml((g = d)) && gl(g) && fn(ue(g, "mixed"), !0) && !Rh(d.inline, f)) ||
          h.remove(f, !0),
        Nh.removed())
      : Nh.keep();
  }
  function Fp(t, e, n, r, o) {
    return Mp(t, e, n, r, o).fold(
      D,
      function (e) {
        return t.dom.rename(r, e), !0;
      },
      w
    );
  }
  function Up(u, s, c, e, l) {
    function a(e) {
      var n,
        r,
        o,
        i,
        a,
        t =
          ((r = s),
          (o = c),
          (i = l),
          Y(ll((n = u).dom, e.parentNode).reverse(), function (e) {
            var t;
            a ||
              "_start" === e.id ||
              "_end" === e.id ||
              ((t = yp(n, e, r, o, i)) && !1 !== t.split && (a = e));
          }),
          a);
      return (function (e, t, n, r, o, i, a, u) {
        var s,
          c,
          l = e.dom;
        if (n) {
          for (
            var f = n.parentNode, d = r.parentNode;
            d && d !== f;
            d = d.parentNode
          ) {
            for (
              var m = l.clone(d, !1), g = 0;
              g < t.length &&
              null !==
                (m = (function (t, e, n) {
                  return Mp(t, e, u, n, n).fold(
                    J(n),
                    function (e) {
                      return (
                        t.dom.createFragment().appendChild(n),
                        t.dom.rename(n, e)
                      );
                    },
                    J(null)
                  );
                })(e, t[g], m));
              g++
            );
            m && (s && m.appendChild(s), (c = c || m), (s = m));
          }
          !i || (a.mixed && l.isBlock(n)) || (r = l.split(n, r)),
            s &&
              (o.parentNode.insertBefore(s, o),
              c.appendChild(o),
              gl(a) && Ap(l, a, 0, s));
        }
        return r;
      })(u, m, t, e, e, !0, g, c);
    }
    function f(t) {
      return F(m, function (e) {
        return Fp(u, e, c, t, t);
      });
    }
    function d(e) {
      var t,
        n = h.get(e ? "_start" : "_end"),
        r = n[e ? "firstChild" : "lastChild"];
      return (
        Jc((t = r)) &&
          zn(t) &&
          ("_start" === t.id || "_end" === t.id) &&
          (r = r[e ? "firstChild" : "lastChild"]),
        jn(r) &&
          0 === r.data.length &&
          (r = e
            ? n.previousSibling || n.nextSibling
            : n.nextSibling || n.previousSibling),
        h.remove(n, !0),
        r
      );
    }
    function t(e) {
      var t = kl(u, e, m, e.collapsed);
      if (g.split) {
        if (((t = Bf(t)), (r = Op(u, t, !0)) !== (o = Op(u, t)))) {
          if (((r = Bp(r, !0)), (o = Bp(o, !1)), Tp(h, r, o))) {
            var n = ve.from(r.firstChild).getOr(r);
            return (
              a(
                Lp(h, n, !0, "span", {
                  id: "_start",
                  "data-mce-type": "bookmark",
                })
              ),
              void d(!0)
            );
          }
          if (Tp(h, o, r))
            return (
              (n = ve.from(o.lastChild).getOr(o)),
              a(
                Lp(h, n, !1, "span", {
                  id: "_end",
                  "data-mce-type": "bookmark",
                })
              ),
              void d(!1)
            );
          var r = Pp(h, r, "span", {
              id: "_start",
              "data-mce-type": "bookmark",
            }),
            o = Pp(h, o, "span", { id: "_end", "data-mce-type": "bookmark" }),
            i = h.createRng();
          i.setStartAfter(r),
            i.setEndBefore(o),
            Nl(h, i, function (e) {
              Y(e, function (e) {
                Jc(e) || Jc(e.parentNode) || a(e);
              });
            }),
            a(r),
            a(o),
            (r = d(!0)),
            (o = d());
        } else r = o = a(r);
        (t.startContainer = r.parentNode || r),
          (t.startOffset = h.nodeIndex(r)),
          (t.endContainer = o.parentNode || o),
          (t.endOffset = h.nodeIndex(o) + 1);
      }
      Nl(h, t, function (e) {
        Y(e, v);
      });
    }
    var n,
      m = u.formatter.get(s),
      g = m[0],
      p = !0,
      h = u.dom,
      r = u.selection,
      v = function (t) {
        var e = !0,
          n = !1;
        zn(t) &&
          h.getContentEditable(t) &&
          ((e = p), (p = "true" === h.getContentEditable(t)), (n = !0));
        var r,
          o,
          i = xe(t.childNodes);
        if (
          (p &&
            !n &&
            ((r =
              f(t) ||
              F(m, function (e) {
                return Pg(h, t, e);
              })),
            (o = t.parentNode),
            !r && V(o) && pl(g) && f(o)),
          g.deep && i.length)
        ) {
          for (var a = 0; a < i.length; a++) v(i[a]);
          n && (p = e);
        }
        Y(["underline", "line-through", "overline"], function (e) {
          zn(t) &&
            u.dom.getStyle(t, "text-decoration") === e &&
            t.parentNode &&
            cl(h, t.parentNode) === e &&
            Fp(
              u,
              {
                deep: !1,
                exact: !0,
                inline: "span",
                styles: { textDecoration: e },
              },
              null,
              t
            );
        });
      };
    if (e)
      return (
        el(e)
          ? ((n = h.createRng()).setStartBefore(e), n.setEndAfter(e), t(n))
          : t(e),
        void xf(u, s, e, c)
      );
    if ("false" !== h.getContentEditable(r.getNode()))
      r.isCollapsed() && gl(g) && !Rl(u).length
        ? $g(u, s, c, l)
        : (Ll(r, !0, function () {
            Pl(u, t);
          }),
          gl(g) && Ig(u, s, c, r.getStart()) && tl(h, r, r.getRng()),
          u.nodeChanged()),
        xf(u, s, e, c);
    else {
      e = r.getNode();
      for (
        var o = 0;
        o < m.length && (!m[o].ceFalseOverride || !Fp(u, m[o], c, e, e));
        o++
      );
      xf(u, s, e, c);
    }
  }
  function zp(e) {
    return zn(e) && !Jc(e) && !jc(e) && !sn(e);
  }
  function Hp(e) {
    return ke(e, "vars");
  }
  function jp(n, e, r, o, i) {
    return I(
      e,
      function (e) {
        var t = n.formatter.matchNode(e, r, null != i ? i : {}, o);
        return !b(t);
      },
      function (e) {
        return Og(n, e, r) || (!o && V(n.formatter.matchNode(e, r, i, !0)));
      }
    );
  }
  function Vp(e, t) {
    var n = null != t ? t : Bh(e);
    return U(ll(e.dom, n), function (e) {
      return zn(e) && !sn(e);
    });
  }
  function qp(e, o, i, a, t, n) {
    var r, u, s, c, l, f, d, m, g;
    return (
      null === o.get() &&
        ((u = e),
        (r = o).set({}),
        u.on("NodeChange", function (e) {
          Ph(u, e.element, r.get());
        }),
        u.on("FormatApply FormatRemove", function (e) {
          var t = ve
            .from(e.node)
            .map(function (e) {
              return el(e) ? e : e.startContainer;
            })
            .bind(function (e) {
              return zn(e) ? ve.some(e) : ve.from(e.parentElement);
            })
            .getOrThunk(function () {
              return Bh(u);
            });
          Ph(u, t, r.get());
        })),
      (s = e),
      (l = i),
      (f = a),
      (d = t),
      (m = n),
      (g = (c = o).get()),
      Y(l.split(","), function (t) {
        function e() {
          var e = Vp(s);
          return jp(s, e, t, d, m).isSome();
        }
        var n,
          r = ue(g, t).getOrThunk(function () {
            var e = {
              withSimilar: { state: iu(!1), similar: !0, callbacks: [] },
              withoutSimilar: { state: iu(!1), similar: !1, callbacks: [] },
              withVars: [],
            };
            return (g[t] = e);
          });
        b(m)
          ? ((n = d ? r.withSimilar : r.withoutSimilar).callbacks.push(f),
            1 === n.callbacks.length && n.state.set(e()))
          : r.withVars.push({
              state: iu(e()),
              similar: d,
              vars: m,
              callback: f,
            });
      }),
      c.set(g),
      {
        unbind: function () {
          var e,
            t = i,
            n = a,
            r = (e = o).get();
          Y(t.split(","), function (t) {
            return ue(r, t).each(function (e) {
              r[t] = {
                withSimilar: _e(_e({}, e.withSimilar), {
                  callbacks: U(e.withSimilar.callbacks, function (e) {
                    return e !== n;
                  }),
                }),
                withoutSimilar: _e(_e({}, e.withoutSimilar), {
                  callbacks: U(e.withoutSimilar.callbacks, function (e) {
                    return e !== n;
                  }),
                }),
                withVars: U(e.withVars, function (e) {
                  return e.callback !== n;
                }),
              };
            });
          }),
            e.set(r);
        },
      }
    );
  }
  function $p(e, t) {
    var n = (t || document).createDocumentFragment();
    return (
      Y(e, function (e) {
        n.appendChild(e.dom);
      }),
      kt.fromDom(n)
    );
  }
  function Wp(e, t, n) {
    return { element: e, width: t, rows: n };
  }
  function Kp(e, t) {
    return { element: e, cells: t };
  }
  function Xp(e, t) {
    var n = parseInt(vn(e, t), 10);
    return isNaN(n) ? 1 : n;
  }
  function Yp(e) {
    return L(
      e,
      function (e, t) {
        return t.cells.length > e ? t.cells.length : e;
      },
      0
    );
  }
  function Gp(e, t) {
    for (var n = e.rows, r = 0; r < n.length; r++)
      for (var o = n[r].cells, i = 0; i < o.length; i++)
        if (je(o[i], t)) return ve.some({ x: i, y: r });
    return ve.none();
  }
  function Jp(e, t, n, r, o) {
    for (var i = [], a = e.rows, u = n; u <= o; u++) {
      var s = a[u].cells,
        c = t < r ? s.slice(t, r + 1) : s.slice(r, t + 1);
      i.push(Kp(a[u].element, c));
    }
    return i;
  }
  function Qp(e) {
    var o = Wp(Eu(e), 0, []);
    return (
      Y(bu(e, "tr"), function (n, r) {
        Y(bu(n, "td,th"), function (e, t) {
          !(function (e, t, n, r, o) {
            for (
              var i = Xp(o, "rowspan"), a = Xp(o, "colspan"), u = e.rows, s = n;
              s < n + i;
              s++
            ) {
              u[s] || (u[s] = Kp(ku(r), []));
              for (var c = t; c < t + a; c++)
                u[s].cells[c] = s === n && c === t ? o : Eu(o);
            }
          })(
            o,
            (function (e, t, n) {
              for (; (r = t), ((o = e.rows)[n] ? o[n].cells : [])[r]; ) t++;
              var r, o;
              return t;
            })(o, t, r),
            r,
            n,
            e
          );
        });
      }),
      Wp(o.element, Yp(o.rows), o.rows)
    );
  }
  function Zp(e, t) {
    var n,
      r,
      o,
      i = kt.fromDom(t.commonAncestorContainer),
      a = ym(i, e),
      u = U(a, function (e) {
        return Or(e) || fo(e);
      }),
      s =
        ((o = t),
        M((r = a), function (e) {
          return "li" === Nt(e) && Tl(e, o);
        }).fold(J([]), function (e) {
          return M(r, function (e) {
            return "ul" === Nt(e) || "ol" === Nt(e);
          })
            .map(function (e) {
              var t = kt.fromTag(Nt(e));
              return (
                Cn(
                  t,
                  ae(Sn(e), function (e, t) {
                    return Ge(t, "list-style");
                  })
                ),
                [kt.fromTag("li"), t]
              );
            })
            .getOr([]);
        }));
    return A(
      u.concat(
        s.length
          ? s
          : ho((n = i))
          ? Ot(n)
              .filter(po)
              .fold(J([]), function (e) {
                return [n, e];
              })
          : po(n)
          ? [n]
          : []
      ),
      Eu
    );
  }
  function eh() {
    return $p([]);
  }
  function th(e, i) {
    return hr(i[0], "table", R(je, e))
      .bind(function (e) {
        var s,
          t,
          n = i[0],
          r = i[i.length - 1],
          o = Qp(e);
        return (
          (t = r),
          Gp((s = o), n)
            .bind(function (u) {
              return Gp(s, t).map(function (e) {
                return (
                  (t = s),
                  (n = u.x),
                  (r = u.y),
                  (o = e.x),
                  (a = r < (i = e.y) ? Jp(t, n, r, o, i) : Jp(t, n, i, o, r)),
                  Wp(t.element, Yp(a), a)
                );
                var t, n, r, o, i, a;
              });
            })
            .map(function (e) {
              return $p([
                ((n = A((t = e).rows, function (e) {
                  var t = A(e.cells, function (e) {
                      var t = ku(e);
                      return yn(t, "colspan"), yn(t, "rowspan"), t;
                    }),
                    n = Eu(e.element);
                  return Kt(n, t), n;
                })),
                (r = Eu(t.element)),
                Kt((o = kt.fromTag("tbody")), n),
                Pn(r, o),
                r),
              ]);
              var t, n, r, o;
            })
        );
      })
      .getOrThunk(eh);
  }
  function nh(e, t) {
    var n,
      r,
      o,
      i,
      a,
      u,
      s,
      c = Al(t, e);
    return 0 < c.length
      ? th(e, c)
      : ((n = e),
        0 < (r = t).length && r[0].collapsed
          ? eh()
          : ((o = n),
            (i = r[0]),
            (a = kt.fromDom(i.cloneContents())),
            (s = L(
              (u = Zp(o, i)),
              function (e, t) {
                return Pn(t, e), t;
              },
              a
            )),
            0 < u.length ? $p([s]) : s));
  }
  function rh(e, t) {
    return 0 <= t && t < e.length && Qc(e.charAt(t));
  }
  function oh(e, t) {
    var n = Eo(e.innerText);
    return t ? n.replace(/^[ \f\n\r\t\v]+/, "") : n;
  }
  function ih(e) {
    return zn(e)
      ? e.outerHTML
      : jn(e)
      ? Qo.encodeRaw(e.data, !1)
      : Vn(e)
      ? "\x3c!--" + e.data + "--\x3e"
      : "";
  }
  function ah(e, c) {
    var l = 0;
    Y(e, function (e) {
      var t, n, r, o, i, a, u, s;
      0 === e[0]
        ? l++
        : 1 === e[0]
        ? ((o = c),
          (i = e[1]),
          (a = l),
          (s = (function (e) {
            var t,
              n = document.createElement("div"),
              r = document.createDocumentFragment();
            for (e && (n.innerHTML = e); (t = n.firstChild); ) r.appendChild(t);
            return r;
          })(i)),
          o.hasChildNodes() && a < o.childNodes.length
            ? (u = o.childNodes[a]).parentNode.insertBefore(s, u)
            : o.appendChild(s),
          l++)
        : 2 === e[0] &&
          ((n = l),
          (t = c).hasChildNodes() &&
            n < t.childNodes.length &&
            (r = t.childNodes[n]).parentNode.removeChild(r));
    });
  }
  function uh(n) {
    var e,
      t = H(
        ((e = n.getBody()),
        U(A(xe(e.childNodes), ih), function (e) {
          return 0 < e.length;
        })),
        function (e) {
          var t = nm(n.serializer, e);
          return 0 < t.length ? [t] : [];
        }
      ),
      r = t.join("");
    return -1 !== r.indexOf("</iframe>")
      ? {
          type: "fragmented",
          fragments: t,
          content: "",
          bookmark: null,
          beforeBookmark: null,
        }
      : {
          type: "complete",
          fragments: null,
          content: r,
          bookmark: null,
          beforeBookmark: null,
        };
  }
  function sh(e, t, n) {
    var r,
      o,
      i,
      g,
      p,
      a,
      h,
      v,
      c,
      l,
      u,
      s = n ? t.beforeBookmark : t.bookmark;
    function b(e, t, n, r) {
      for (var o = e; o - t < r && o < n && g[o] === p[o - t]; ) ++o;
      return { start: e, end: o, diag: t };
    }
    "fragmented" === t.type
      ? ((r = t.fragments),
        (o = e.getBody()),
        (i = A(xe(o.childNodes), ih)),
        ah(
          ((p = r),
          (a = (g = i).length + p.length + 2),
          (h = new Array(a)),
          (v = new Array(a)),
          (c = function (e, t, n, r, o) {
            var i = l(e, t, n, r);
            if (
              null === i ||
              (i.start === t && i.diag === t - r) ||
              (i.end === e && i.diag === e - n)
            )
              for (var a = e, u = n; a < t || u < r; )
                a < t && u < r && g[a] === p[u]
                  ? (o.push([0, g[a]]), ++a, ++u)
                  : r - n < t - e
                  ? (o.push([2, g[a]]), ++a)
                  : (o.push([1, p[u]]), ++u);
            else {
              c(e, i.start, n, i.start - i.diag, o);
              for (var s = i.start; s < i.end; ++s) o.push([0, g[s]]);
              c(i.end, t, i.end - i.diag, r, o);
            }
          }),
          (l = function (e, t, n, r) {
            var o = t - e,
              i = r - n;
            if (0 == o || 0 == i) return null;
            var a,
              u,
              s,
              c,
              l,
              f = o - i,
              d = i + o,
              m = (d % 2 == 0 ? d : 1 + d) / 2;
            for (h[1 + m] = e, v[1 + m] = t + 1, a = 0; a <= m; ++a) {
              for (u = -a; u <= a; u += 2) {
                for (
                  s = u + m,
                    u === -a || (u !== a && h[s - 1] < h[s + 1])
                      ? (h[s] = h[s + 1])
                      : (h[s] = h[s - 1] + 1),
                    l = (c = h[s]) - e + n - u;
                  c < t && l < r && g[c] === p[l];

                )
                  (h[s] = ++c), ++l;
                if (f % 2 != 0 && f - a <= u && u <= f + a && v[s - f] <= h[s])
                  return b(v[s - f], u + e - n, t, r);
              }
              for (u = f - a; u <= f + a; u += 2) {
                for (
                  s = u + m - f,
                    u === f - a || (u !== f + a && v[s + 1] <= v[s - 1])
                      ? (v[s] = v[s + 1] - 1)
                      : (v[s] = v[s - 1]),
                    l = (c = v[s] - 1) - e + n - u;
                  e <= c && n <= l && g[c] === p[l];

                )
                  (v[s] = c--), l--;
                if (f % 2 == 0 && -a <= u && u <= a && v[s] <= h[s + f])
                  return b(v[s], u + e - n, t, r);
              }
            }
          }),
          (u = []),
          c(0, g.length, 0, p.length, u),
          u),
          o
        ))
      : e.setContent(t.content, {
          format: "raw",
          no_selection: !V(s) || !qc(s) || !s.isFakeCaret,
        }),
      e.selection.moveToBookmark(s);
  }
  function ch(e) {
    return "fragmented" === e.type ? e.fragments.join("") : e.content;
  }
  function lh(e) {
    var t = kt.fromTag("body", Lh());
    return wu(t, ch(e)), Y(bu(t, "*[data-mce-bogus]"), Yt), t.dom.innerHTML;
  }
  function fh(e, t) {
    return (
      !(!e || !t) && ((r = t), ch(e) === ch(r) || ((n = t), lh(e) === lh(n)))
    );
    var n, r;
  }
  function dh(e) {
    return 0 === e.get();
  }
  function mh(e, t, n) {
    dh(n) && (e.typing = t);
  }
  function gh(e, t) {
    e.typing && (mh(e, !1, t), e.add());
  }
  function ph(c) {
    return {
      undoManager: {
        beforeChange: function (e, t) {
          var n = c,
            r = t;
          dh(e) && r.set(pc(n.selection));
        },
        add: function (e, t, n, r, o, i) {
          return (function (e, t, n, r, o, i, a) {
            var u = uh(e);
            if (((i = Et.extend((i = i || {}), u)), !1 === dh(r) || e.removed))
              return null;
            var s = t.data[n.get()];
            if (
              e
                .fire("BeforeAddUndo", {
                  level: i,
                  lastLevel: s,
                  originalEvent: a,
                })
                .isDefaultPrevented()
            )
              return null;
            if (s && fh(s, i)) return null;
            t.data[n.get()] &&
              o.get().each(function (e) {
                t.data[n.get()].beforeBookmark = e;
              });
            var c = e.getParam("custom_undo_redo_levels", 0, "number");
            if (c && t.data.length > c) {
              for (var l = 0; l < t.data.length - 1; l++)
                t.data[l] = t.data[l + 1];
              t.data.length--, n.set(t.data.length);
            }
            (i.bookmark = pc(e.selection)),
              n.get() < t.data.length - 1 && (t.data.length = n.get() + 1),
              t.data.push(i),
              n.set(t.data.length - 1);
            var f = { level: i, lastLevel: s, originalEvent: a };
            return (
              0 < n.get()
                ? (e.setDirty(!0), e.fire("AddUndo", f), e.fire("change", f))
                : e.fire("AddUndo", f),
              i
            );
          })(c, e, t, n, r, o, i);
        },
        undo: function (e, t, n) {
          return (
            (r = c),
            (i = t),
            (a = n),
            (o = e).typing && (o.add(), (o.typing = !1), mh(o, !1, i)),
            0 < a.get() &&
              (a.set(a.get() - 1),
              sh(r, (u = o.data[a.get()]), !0),
              r.setDirty(!0),
              r.fire("Undo", { level: u })),
            u
          );
          var r, o, i, a, u;
        },
        redo: function (e, t) {
          return (
            (n = c),
            (o = t),
            (r = e).get() < o.length - 1 &&
              (r.set(r.get() + 1),
              sh(n, (i = o[r.get()]), !1),
              n.setDirty(!0),
              n.fire("Redo", { level: i })),
            i
          );
          var n, r, o, i;
        },
        clear: function (e, t) {
          var n,
            r = c,
            o = t;
          ((n = e).data = []), o.set(0), (n.typing = !1), r.fire("ClearUndos");
        },
        reset: function (e) {
          var t;
          (t = e).clear(), t.add();
        },
        hasUndo: function (e, t) {
          return (
            (n = c),
            (r = e),
            0 < t.get() || (r.typing && r.data[0] && !fh(uh(n), r.data[0]))
          );
          var n, r;
        },
        hasRedo: function (e, t) {
          return (n = e), t.get() < n.data.length - 1 && !n.typing;
          var n;
        },
        transact: function (e, t, n) {
          return (
            (o = n), gh((r = e), t), r.beforeChange(), r.ignore(o), r.add()
          );
          var r, o;
        },
        ignore: function (e, t) {
          try {
            e.set(e.get() + 1), t();
          } finally {
            e.set(e.get() - 1);
          }
        },
        extra: function (e, t, n, r) {
          var o,
            i,
            a = c,
            u = t,
            s = r;
          (o = e).transact(n) &&
            ((i = o.data[u.get()].bookmark),
            sh(a, o.data[u.get() - 1], !0),
            o.transact(s) && (o.data[u.get() - 1].beforeBookmark = i));
        },
      },
      formatter: {
        match: function (e, t, n, r) {
          return Ig(c, e, t, n, r);
        },
        matchAll: function (e, t) {
          return (
            (o = e),
            (i = t),
            (a = []),
            (u = {}),
            (n = (r = c).selection.getStart()),
            r.dom.getParent(
              n,
              function (e) {
                for (var t = 0; t < o.length; t++) {
                  var n = o[t];
                  !u[n] && yp(r, e, n, i) && ((u[n] = !0), a.push(n));
                }
              },
              r.dom.getRoot()
            ),
            a
          );
          var r, o, i, a, u, n;
        },
        matchNode: function (e, t, n, r) {
          return yp(c, e, t, n, r);
        },
        canApply: function (u) {
          return (function (e) {
            var t = e.formatter.get(u),
              n = e.dom;
            if (t)
              for (
                var r = ll(n, e.selection.getStart()), o = t.length - 1;
                0 <= o;
                o--
              ) {
                var i = t[o];
                if (!ml(i) || V(i.defaultBlock)) return !0;
                for (var a = r.length - 1; 0 <= a; a--)
                  if (n.is(r[a], i.selector)) return !0;
              }
            return !1;
          })(c);
        },
        closest: function (e) {
          return (
            (r = c),
            (o = e),
            ve
              .from(r.selection.getStart(!0))
              .bind(function (e) {
                return Tg(
                  kt.fromDom(e),
                  function (n) {
                    return ee(o, function (e) {
                      return yp(r, n.dom, (t = e)) ? ve.some(t) : ve.none();
                      var t;
                    });
                  },
                  t
                );
              })
              .getOrNull()
          );
          function t(e) {
            return je(e, kt.fromDom(r.getBody()));
          }
          var r, o;
        },
        apply: function (e, t, n) {
          return Oh(c, e, t, n);
        },
        remove: function (e, t, n, r) {
          return Up(c, e, t, n, r);
        },
        toggle: function (e, t, n) {
          var r,
            o = e,
            i = t,
            a = n,
            u = (r = c).formatter.get(o);
          (!Ig(r, o, i, a) || ("toggle" in u[0] && !u[0].toggle) ? Oh : Up)(
            r,
            o,
            i,
            a
          );
        },
        formatChanged: function (e, t, n, r, o) {
          return qp(c, e, t, n, r, o);
        },
      },
      editor: {
        getContent: function (e, t) {
          return (
            (d = c),
            (m = e),
            (g = t),
            ve
              .from(d.getBody())
              .fold(
                J("tree" === m.format ? new Hd("body", 11) : ""),
                function (e) {
                  return (
                    (t = d),
                    (r = e),
                    (o = g),
                    (c = _e(_e({}, (n = m)), {
                      format: o,
                      get: !0,
                      getInner: !0,
                    })),
                    (l = n.no_events ? c : t.fire("BeforeGetContent", c)),
                    (f =
                      "raw" === l.format
                        ? Et.trim(am(t.serializer, r.innerHTML))
                        : "text" === l.format
                        ? t.dom.isEmpty(r)
                          ? ""
                          : Eo(r.innerText || r.textContent)
                        : "tree" === l.format
                        ? t.serializer.serialize(r, l)
                        : ((a = (i = t).serializer.serialize(r, l)),
                          (u = ks(i)),
                          (s = new RegExp(
                            "^(<" +
                              u +
                              "[^>]*>(&nbsp;|&#160;|\\s|\xa0|<br \\/>|)<\\/" +
                              u +
                              ">[\r\n]*|<br \\/>[\r\n]*)$"
                          )),
                          a.replace(s, ""))),
                    T(["text", "tree"], l.format) || yo(kt.fromDom(r))
                      ? (l.content = f)
                      : (l.content = Et.trim(f)),
                    (l.no_events ? l : t.fire("GetContent", l)).content
                  );
                  var t, n, r, o, i, a, u, s, c, l, f;
                }
              )
          );
          var d, m, g;
        },
        setContent: function (e, t) {
          return Rg(c, e, t);
        },
        insertContent: function (e, t) {
          return Ng(c, e, t);
        },
        addVisual: function (e) {
          var i,
            t = e,
            a = (i = c).dom,
            n = V(t) ? t : i.getBody();
          b(i.hasVisual) && (i.hasVisual = i.getParam("visual", !0, "boolean")),
            Y(a.select("table,a", n), function (e) {
              switch (e.nodeName) {
                case "TABLE":
                  var t = i.getParam(
                      "visual_table_class",
                      "mce-item-table",
                      "string"
                    ),
                    n = a.getAttrib(e, "border");
                  (n && "0" !== n) || !i.hasVisual
                    ? a.removeClass(e, t)
                    : a.addClass(e, t);
                  break;
                case "A":
                  var r, o;
                  a.getAttrib(e, "href") ||
                    ((r = a.getAttrib(e, "name") || e.id),
                    (o = i.getParam(
                      "visual_anchor_class",
                      "mce-item-anchor",
                      "string"
                    )),
                    r && i.hasVisual ? a.addClass(e, o) : a.removeClass(e, o));
              }
            }),
            i.fire("VisualAid", { element: t, hasVisual: i.hasVisual });
        },
      },
      selection: {
        getContent: function (e, t) {
          return (function (e, t, n) {
            var r,
              o =
                ((r = t),
                _e(_e({}, (n = void 0 === n ? {} : n)), {
                  format: r,
                  get: !0,
                  selection: !0,
                })),
              i = e.fire("BeforeGetContent", o);
            if (i.isDefaultPrevented())
              return e.fire("GetContent", i), i.content;
            if ("text" === i.format)
              return (
                (m = e),
                ve
                  .from(m.selection.getRng())
                  .map(function (e) {
                    var t = ve.from(
                        m.dom.getParent(
                          e.commonAncestorContainer,
                          m.dom.isBlock
                        )
                      ),
                      n = m.getBody(),
                      r = t
                        .map(function (e) {
                          return e.nodeName;
                        })
                        .getOr("div")
                        .toLowerCase(),
                      o = xt.browser.isIE() && "pre" !== r,
                      i = m.dom.add(
                        n,
                        r,
                        {
                          "data-mce-bogus": "all",
                          style: "overflow: hidden; opacity: 0;",
                        },
                        e.cloneContents()
                      ),
                      a = oh(i, o),
                      u = Eo(i.textContent);
                    if ((m.dom.remove(i), rh(u, 0) || rh(u, u.length - 1))) {
                      var s = oh(t.getOr(n), o),
                        c = s.indexOf(a);
                      return -1 === c
                        ? a
                        : (rh(s, c - 1) ? " " : "") +
                            a +
                            (rh(s, c + a.length) ? " " : "");
                    }
                    return a;
                  })
                  .getOr("")
              );
            i.getInner = !0;
            var a,
              u,
              s,
              c,
              l,
              f,
              d,
              m,
              g =
                ((u = i),
                (s = (a = e).selection.getRng()),
                (c = a.dom.create("body")),
                (l = a.selection.getSel()),
                (f = Ed(a, _l(l))),
                (d = u.contextual
                  ? nh(kt.fromDom(a.getBody()), f).dom
                  : s.cloneContents()) && c.appendChild(d),
                a.selection.serializer.serialize(c, u));
            return "tree" === i.format
              ? g
              : ((i.content = e.selection.isCollapsed() ? "" : g),
                e.fire("GetContent", i),
                i.content);
          })(c, e, t);
        },
      },
      raw: {
        getModel: function () {
          return ve.none();
        },
      },
    };
  }
  function hh(e) {
    return ke(e.plugins, "rtc");
  }
  function vh(e) {
    var u = e;
    return ue(e.plugins, "rtc")
      .bind(function (e) {
        return ve.from(e.setup);
      })
      .fold(
        function () {
          return (u.rtcInstance = ph(e)), ve.none();
        },
        function (e) {
          var t, n;
          return (
            (u.rtcInstance =
              ((t = J(null)),
              (n = J("")),
              {
                undoManager: {
                  beforeChange: te,
                  add: t,
                  undo: t,
                  redo: t,
                  clear: te,
                  reset: te,
                  hasUndo: D,
                  hasRedo: D,
                  transact: t,
                  ignore: te,
                  extra: te,
                },
                formatter: {
                  match: D,
                  matchAll: J([]),
                  matchNode: J(void 0),
                  canApply: D,
                  closest: n,
                  apply: te,
                  remove: te,
                  toggle: te,
                  formatChanged: J({ unbind: te }),
                },
                editor: {
                  getContent: n,
                  setContent: n,
                  insertContent: te,
                  addVisual: te,
                },
                selection: { getContent: n },
                raw: { getModel: J(ve.none()) },
              })),
            ve.some(function () {
              return e().then(function (e) {
                return (
                  (u.rtcInstance =
                    ((i = e.undoManager),
                    (a = e.formatter),
                    (n = e.editor),
                    (r = e.selection),
                    (t = e.raw),
                    {
                      undoManager: {
                        beforeChange: i.beforeChange,
                        add: i.add,
                        undo: i.undo,
                        redo: i.redo,
                        clear: i.clear,
                        reset: i.reset,
                        hasUndo: i.hasUndo,
                        hasRedo: i.hasRedo,
                        transact: function (e, t, n) {
                          return i.transact(n);
                        },
                        ignore: function (e, t) {
                          return i.ignore(t);
                        },
                        extra: function (e, t, n, r) {
                          return i.extra(n, r);
                        },
                      },
                      formatter: {
                        match: function (e, t, n, r) {
                          return a.match(e, o(t), r);
                        },
                        matchAll: a.matchAll,
                        matchNode: a.matchNode,
                        canApply: function (e) {
                          return a.canApply(e);
                        },
                        closest: function (e) {
                          return a.closest(e);
                        },
                        apply: function (e, t, n) {
                          return a.apply(e, o(t));
                        },
                        remove: function (e, t, n, r) {
                          return a.remove(e, o(t));
                        },
                        toggle: function (e, t, n) {
                          return a.toggle(e, o(t));
                        },
                        formatChanged: function (e, t, n, r, o) {
                          return a.formatChanged(t, n, r, o);
                        },
                      },
                      editor: {
                        getContent: function (e, t) {
                          return n.getContent(e);
                        },
                        setContent: function (e, t) {
                          return n.setContent(e, t);
                        },
                        insertContent: function (e, t) {
                          return n.insertContent(e);
                        },
                        addVisual: n.addVisual,
                      },
                      selection: {
                        getContent: function (e, t) {
                          return r.getContent(t);
                        },
                      },
                      raw: {
                        getModel: function () {
                          return ve.some(t.getRawModel());
                        },
                      },
                    })),
                  e.rtc.isRemote
                );
                function o(e) {
                  return h(e) ? e : {};
                }
                var i, a, n, r, t;
              });
            })
          );
        }
      );
  }
  function bh(e) {
    return e.rtcInstance || ph(e);
  }
  function yh(e) {
    var t = e.rtcInstance;
    if (t) return t;
    throw new Error("Failed to get RTC instance not yet initialized.");
  }
  function Ch(e) {
    return 0 === e.dom.length ? (Ln(e), ve.none()) : ve.some(e);
  }
  function xh(e, t, u, s) {
    e.bind(function (a) {
      return (
        (s ? jm : Hm)(a.dom, s ? a.dom.length : 0),
        t.filter(_n).map(function (e) {
          var t = u,
            n = s,
            r = a.dom,
            o = e.dom,
            i = (n ? r : o).length;
          n
            ? (Vm(r, o, !1, !n), t.setStart(o, i))
            : (Vm(o, r, !1, !n), t.setEnd(o, i));
        })
      );
    }).orThunk(function () {
      var e = s;
      return t
        .filter(function (e) {
          return zl.isBookmarkNode(e.dom);
        })
        .bind(e ? Pt : Bt)
        .or(t)
        .filter(_n)
        .map(function (e) {
          var n,
            r = s;
          Ot((n = e)).each(function (e) {
            var t = n.dom;
            r && Bm(e, ss(t, 0))
              ? Hm(t, 0)
              : !r && Pm(e, ss(t, t.length)) && jm(t, t.length);
          });
        });
    });
  }
  function wh(e, t, n) {
    var r,
      o =
        ((r = t),
        _e(_e({ format: "html" }, (n = void 0 === n ? {} : n)), {
          set: !0,
          selection: !0,
          content: r,
        })),
      i = o;
    if (!o.no_events) {
      var a = e.fire("BeforeSetContent", o);
      if (a.isDefaultPrevented()) return void e.fire("SetContent", a);
      i = a;
    }
    i.content = (function (e, t) {
      if ("raw" === t.format) return t.content;
      var n = e.selection.getRng(),
        r = e.dom.getParent(n.commonAncestorContainer, e.dom.isBlock),
        o = r ? { context: r.nodeName.toLowerCase() } : {},
        i = e.parser.parse(
          t.content,
          _e(_e({ isRootContent: !0, forced_root_block: !1 }, o), t)
        );
      return im({ validate: e.validate }, e.schema).serialize(i);
    })(e, i);
    var u = e.selection.getRng();
    !(function (e, t) {
      var n = ve.from(t.firstChild).map(kt.fromDom),
        r = ve.from(t.lastChild).map(kt.fromDom);
      e.deleteContents(), e.insertNode(t);
      var o = n.bind(Bt).filter(_n).bind(Ch),
        i = r.bind(Pt).filter(_n).bind(Ch);
      xh(o, n, e, !0), xh(i, r, e, !1), e.collapse(!1);
    })(u, u.createContextualFragment(i.content)),
      e.selection.setRng(u),
      td(e, u),
      i.no_events || e.fire("SetContent", i);
  }
  function Sh(e, t, n) {
    var r;
    e &&
      ke(e, t) &&
      (0 ===
      (r = U(e[t], function (e) {
        return e !== n;
      })).length
        ? delete e[t]
        : (e[t] = r));
  }
  (Kg = function (e) {
    var t,
      n = e.selection.getRng(),
      r = on(["pre"]);
    n.collapsed ||
      ((t = e.selection.getSelectedBlocks()),
      Ep(
        Sp(Sp(t, r), function (e) {
          return r(e.previousSibling) && -1 !== de(t, e.previousSibling);
        }),
        function (e) {
          var t,
            n = e.previousSibling;
          Xa((t = e)).remove(), Xa(n).append("<br><br>").append(t.childNodes);
        }
      ));
  }),
    wp["pre"] || (wp.pre = []),
    wp.pre.push(Kg);
  var Eh = Et.each,
    kh = function (e, t, n) {
      Eh(e.childNodes, function (e) {
        kp(e) && (t(e) && n(e), e.hasChildNodes() && kh(e, t, n));
      });
    },
    Nh = or([{ keep: [] }, { rename: ["name"] }, { removed: [] }]),
    _h = /^(src|href|style)$/,
    Ah = Et.each,
    Rh = al,
    Dh = Et.each,
    Th = Et.each,
    Oh = function (S, E, k, r) {
      function N(n, e) {
        var t;
        y((e = void 0 === e ? A : e).onformat) && e.onformat(n, e, k, r),
          Th(e.styles, function (e, t) {
            u.setStyle(n, t, il(e, k));
          }),
          !e.styles ||
            ((t = u.getAttrib(n, "style")) &&
              u.setAttrib(n, "data-mce-style", t)),
          Th(e.attributes, function (e, t) {
            u.setAttrib(n, t, il(e, k));
          }),
          Th(e.classes, function (e) {
            (e = il(e, k)), u.hasClass(n, e) || u.addClass(n, e);
          });
      }
      function g(e, t) {
        var n = !1;
        return (
          Th(e, function (e) {
            return (
              !!ml(e) &&
              ((V(e.collapsed) && e.collapsed !== a) ||
              !u.is(t, e.selector) ||
              jc(t)
                ? void 0
                : (N(t, e), !(n = !0)))
            );
          }),
          n
        );
      }
      function o(x, e, l) {
        var w = [],
          f = !0,
          d = A.inline || A.block,
          m = (function (e) {
            if (X(e)) {
              var t = u.create(e);
              return N(t), t;
            }
            return null;
          })(d);
        Nl(x, e, function (e) {
          var s,
            c = function (e) {
              var t = !1,
                n = f,
                r = e.nodeName.toLowerCase(),
                o = e.parentNode,
                i = o.nodeName.toLowerCase();
              if (
                (zn(e) &&
                  x.getContentEditable(e) &&
                  ((n = f), (f = "true" === x.getContentEditable(e)), (t = !0)),
                Wn(e) &&
                  !(function (e, t, n, r) {
                    if (
                      e.getParam("format_empty_lines", !1, "boolean") &&
                      gl(t)
                    ) {
                      var o = to(e.schema),
                        i =
                          ((a = kt.fromDom(n)),
                          (s = function (e) {
                            return jc(e.dom);
                          }),
                          ((c = (u = a).dom).parentNode
                            ? kr(kt.fromDom(c.parentNode), function (e) {
                                return !je(u, e) && s(e);
                              })
                            : ve.none()
                          ).isSome());
                      return se(o, r) && Wr(kt.fromDom(n.parentNode), !1) && !i;
                    }
                    var a, u, s, c;
                  })(S, A, e, i))
              )
                return (s = null), void (dl(A) && x.remove(e));
              if (dl(A) && A.wrapper && yp(S, e, E, k)) s = null;
              else {
                if (f && !t && dl(A) && !A.wrapper && rl(S, r) && ol(S, i, d)) {
                  var a = x.rename(e, d);
                  return N(a), w.push(a), void (s = null);
                }
                if (ml(A)) {
                  var u = g(_, e);
                  if ((!u && V(o) && pl(A) && (u = g(_, o)), !gl(A) || u))
                    return void (s = null);
                }
                !f ||
                t ||
                !ol(S, d, r) ||
                !ol(S, i, d) ||
                (!l && jn(e) && So(e.data)) ||
                jc(e) ||
                (gl(A) && x.isBlock(e))
                  ? ((s = null),
                    Y(xe(e.childNodes), c),
                    t && (f = n),
                    (s = null))
                  : (s ||
                      ((s = x.clone(m, !1)),
                      e.parentNode.insertBefore(s, e),
                      w.push(s)),
                    s.appendChild(e));
              }
            };
          Y(e, c);
        }),
          !0 === A.links &&
            Y(w, function (e) {
              var t = function (e) {
                "A" === e.nodeName && N(e, A), Y(xe(e.childNodes), t);
              };
              t(e);
            }),
          Y(w, function (e) {
            var n,
              t,
              r,
              o,
              i,
              a,
              u,
              s,
              c,
              l,
              f,
              d,
              m,
              g,
              p,
              h,
              v,
              b,
              y =
                ((n = 0),
                Y(e.childNodes, function (e) {
                  var t;
                  (V((t = e)) && jn(t) && 0 === t.length) || Jc(e) || n++;
                }),
                n);
            function C(e) {
              var t;
              1 === e.nodeType &&
                e.parentNode &&
                1 === e.parentNode.nodeType &&
                ((t = cl(m, e.parentNode)),
                m.getStyle(e, "color") && t
                  ? m.setStyle(e, "text-decoration", t)
                  : m.getStyle(e, "text-decoration") === t &&
                    m.setStyle(e, "text-decoration", null));
            }
            (!(1 < w.length) && x.isBlock(e)) || 0 !== y
              ? (gl(A) || (dl(A) && A.wrapper)) &&
                (A.exact ||
                  1 !== y ||
                  (e = M((d = e).childNodes, zp)
                    .filter(function (e) {
                      return Pg(x, e, A);
                    })
                    .map(function (e) {
                      var t = x.clone(e, !1);
                      return N(t), x.replace(t, d, !0), x.remove(e, !0), t;
                    })
                    .getOr(d)),
                (h = S),
                (v = k),
                (b = e),
                Dh(_, function (t) {
                  var r, e, n;
                  gl(t) &&
                    Dh(h.dom.select(t.inline, b), function (e) {
                      kp(e) && Fp(h, t, v, e, t.exact ? e : null);
                    }),
                    (r = h.dom),
                    (e = t).clear_child_styles &&
                      ((n = e.links ? "*:not(a)" : "*"),
                      Eh(r.select(n, b), function (n) {
                        kp(n) &&
                          Eh(e.styles, function (e, t) {
                            r.setStyle(n, t, "");
                          });
                      }));
                }),
                (s = A),
                (yp((u = S), (f = e).parentNode, (c = E), (l = k)) &&
                  Fp(u, s, l, f)) ||
                  (s.merge_with_parents &&
                    u.dom.getParent(f.parentNode, function (e) {
                      if (yp(u, e, c, l)) return Fp(u, s, l, f), !0;
                    })),
                (a = e),
                (i = A).styles &&
                  i.styles.backgroundColor &&
                  kh(
                    a,
                    Rp(x, "fontSize"),
                    Dp(x, "backgroundColor", il(i.styles.backgroundColor, k))
                  ),
                (m = x),
                (p = e),
                (g = A).styles &&
                  (g.styles.color || g.styles.textDecoration) &&
                  (Et.walk(p, C, "childNodes"), C(p)),
                (t = x),
                (o = e),
                !gl((r = A)) ||
                  ("sub" !== r.inline && "sup" !== r.inline) ||
                  (kh(o, Rp(t, "fontSize"), Dp(t, "fontSize", "")),
                  t.remove(
                    t.select("sup" === r.inline ? "sub" : "sup", o),
                    !0
                  )),
                Ap(x, A, 0, e))
              : x.remove(e, !0);
          });
      }
      var e,
        t,
        n,
        i,
        _ = S.formatter.get(E),
        A = _[0],
        a = !r && S.selection.isCollapsed(),
        u = S.dom,
        s = S.selection;
      if ("false" !== u.getContentEditable(s.getNode()))
        A &&
          (r
            ? el(r)
              ? g(_, r) ||
                ((e = u.createRng()).setStartBefore(r),
                e.setEndAfter(r),
                o(u, kl(S, e, _), !0))
              : o(u, r, !0)
            : a && gl(A) && !Rl(S).length
            ? (function (e, t, n) {
                var r,
                  o = e.selection,
                  i = o.getRng(),
                  a = i.startOffset,
                  u = i.startContainer.nodeValue,
                  s = Vc(e.getBody(), o.getStart());
                s && (r = Fg(s));
                var c,
                  l,
                  f,
                  d,
                  m = /[^\s\u00a0\u00ad\u200b\ufeff]/;
                u &&
                0 < a &&
                a < u.length &&
                m.test(u.charAt(a)) &&
                m.test(u.charAt(a - 1))
                  ? ((c = o.getBookmark()),
                    i.collapse(!0),
                    (l = Bf(kl(e, i, e.formatter.get(t)))),
                    e.formatter.apply(t, n, l),
                    o.moveToBookmark(c))
                  : ((s && r.nodeValue === Cp) ||
                      ((f = e.getDoc()),
                      (d = Ug(!0).dom),
                      (r = (s = f.importNode(d, !0)).firstChild),
                      i.insertNode(s),
                      (a = 1)),
                    e.formatter.apply(t, n, s),
                    o.setCursorLocation(r, a));
              })(S, E, k)
            : ((t = s.getNode()),
              (n = _[0]),
              S.settings.forced_root_block ||
                !n.defaultBlock ||
                u.getParent(t, u.isBlock) ||
                Oh(S, n.defaultBlock),
              s.setRng(Cg(s.getRng())),
              Ll(s, !0, function () {
                Pl(S, function (e, t) {
                  var n = t ? e : kl(S, e, _);
                  o(u, n, !1);
                });
              }),
              tl(u, s, s.getRng()),
              S.nodeChanged()),
          (i = S),
          Ep(wp[E], function (e) {
            e(i);
          })),
          Cf(S, E, r, k);
      else {
        r = s.getNode();
        for (var c = 0, l = _.length; c < l; c++) {
          var f = _[c];
          if (f.ceFalseOverride && ml(f) && u.is(r, f.selector)) {
            N(r, f);
            break;
          }
        }
        Cf(S, E, r, k);
      }
    },
    Bh = function (e) {
      return e.selection.getStart();
    },
    Ph = function (i, a, e) {
      var u = Vp(i, a);
      ne(e, function (e, o) {
        function t(e) {
          var t,
            n = jp(i, u, o, e.similar, Hp(e) ? e.vars : void 0),
            r = n.isSome();
          e.state.get() !== r &&
            (e.state.set(r),
            (t = n.getOr(a)),
            Hp(e)
              ? e.callback(r, { node: t, format: o, parents: u })
              : Y(e.callbacks, function (e) {
                  return e(r, { node: t, format: o, parents: u });
                }));
        }
        Y([e.withSimilar, e.withoutSimilar], t), Y(e.withVars, t);
      });
    },
    Lh = Re(function () {
      return document.implementation.createHTMLDocument("undo");
    });
  function Ih(e) {
    return e.select;
  }
  function Mh(e) {
    return (
      e && e.ownerDocument && Ve(kt.fromDom(e.ownerDocument), kt.fromDom(e))
    );
  }
  function Fh(a, u, e, s) {
    function t(e, t) {
      return wh(s, e, t);
    }
    function n() {
      var e = c(),
        t = null == e ? void 0 : e.anchorNode,
        n = null == e ? void 0 : e.focusNode;
      if (!e || !t || !n || rn(t) || rn(n)) return !0;
      var r = a.createRng();
      r.setStart(t, e.anchorOffset), r.collapse(!0);
      var o = a.createRng();
      return (
        o.setStart(n, e.focusOffset),
        o.collapse(!0),
        r.compareBoundaryPoints(r.START_TO_START, o) <= 0
      );
    }
    function r(e) {
      var t = p();
      t.collapse(!!e), h(t);
    }
    function c() {
      return u.getSelection ? u.getSelection() : u.document.selection;
    }
    var l,
      f,
      o,
      i,
      d,
      m,
      g = function (e, t) {
        return (
          d ||
            ((d = {}),
            (m = {}),
            i.on("NodeChange", function (e) {
              var n = e.element,
                r = x(n),
                o = {};
              Et.each(d, function (e, n) {
                C(n, r).each(function (t) {
                  m[n] ||
                    (Y(e, function (e) {
                      e(!0, { node: t, selector: n, parents: r });
                    }),
                    (m[n] = e)),
                    (o[n] = e);
                });
              }),
                Et.each(m, function (e, t) {
                  o[t] ||
                    (delete m[t],
                    Et.each(e, function (e) {
                      e(!1, { node: n, selector: t, parents: r });
                    }));
                });
            })),
          d[e] || (d[e] = []),
          d[e].push(t),
          C(e, x(i.selection.getStart())).each(function () {
            m[e] = d[e];
          }),
          {
            unbind: function () {
              Sh(d, e, t), Sh(m, e, t);
            },
          }
        );
      },
      p = function () {
        function e(e, t, n) {
          try {
            return t.compareBoundaryPoints(e, n);
          } catch (e) {
            return -1;
          }
        }
        var t,
          n,
          r,
          o = u.document;
        if (void 0 !== s.bookmark && !1 === yd(s)) {
          var i = dd(s);
          if (i.isSome())
            return i
              .map(function (e) {
                return Ed(s, [e])[0];
              })
              .getOr(o.createRange());
        }
        try {
          (t = c()) &&
            !rn(t.anchorNode) &&
            ((n =
              0 < t.rangeCount
                ? t.getRangeAt(0)
                : (t.createRange ? t : o).createRange()),
            (n = Ed(s, [n])[0]));
        } catch (e) {}
        return (
          (n =
            n || (o.createRange ? o.createRange() : o.body.createTextRange()))
            .setStart &&
            9 === n.startContainer.nodeType &&
            n.collapsed &&
            ((r = a.getRoot()), n.setStart(r, 0), n.setEnd(r, 0)),
          l &&
            f &&
            (0 === e(n.START_TO_START, n, l) && 0 === e(n.END_TO_END, n, l)
              ? (n = f)
              : (f = l = null)),
          n
        );
      },
      h = function (e, t) {
        var n;
        if (
          (r = e) &&
          (Ih(r) || (Mh(r.startContainer) && Mh(r.endContainer)))
        ) {
          var r,
            o = Ih(e) ? e : null;
          if (o) {
            f = null;
            try {
              o.select();
            } catch (e) {}
          } else {
            var i = c();
            if (
              ((e = s.fire("SetSelectionRange", {
                range: e,
                forward: t,
              }).range),
              i)
            ) {
              f = e;
              try {
                i.removeAllRanges(), i.addRange(e);
              } catch (e) {}
              !1 === t &&
                i.extend &&
                (i.collapse(e.endContainer, e.endOffset),
                i.extend(e.startContainer, e.startOffset)),
                (l = 0 < i.rangeCount ? i.getRangeAt(0) : null);
            }
            e.collapsed ||
              e.startContainer !== e.endContainer ||
              !i.setBaseAndExtent ||
              xt.ie ||
              (e.endOffset - e.startOffset < 2 &&
                e.startContainer.hasChildNodes() &&
                (n = e.startContainer.childNodes[e.startOffset]) &&
                "IMG" === n.tagName &&
                (i.setBaseAndExtent(
                  e.startContainer,
                  e.startOffset,
                  e.endContainer,
                  e.endOffset
                ),
                (i.anchorNode === e.startContainer &&
                  i.focusNode === e.endContainer) ||
                  i.setBaseAndExtent(n, 0, n, 1))),
              s.fire("AfterSetSelectionRange", { range: e, forward: t });
          }
        }
      },
      v = {
        bookmarkManager: null,
        controlSelection: null,
        dom: (o = a),
        win: u,
        serializer: e,
        editor: (i = s),
        collapse: r,
        setCursorLocation: function (e, t) {
          var n = a.createRng();
          V(e) && V(t)
            ? (n.setStart(e, t), n.setEnd(e, t), h(n), r(!1))
            : (Ol(a, n, s.getBody(), !0), h(n));
        },
        getContent: function (e) {
          return (
            (n = (t = void 0 === (t = e) ? {} : t).format || "html"),
            (r = t),
            yh(s).selection.getContent(n, r)
          );
          var t, n, r;
        },
        setContent: t,
        getBookmark: function (e, t) {
          return b.getBookmark(e, t);
        },
        moveToBookmark: function (e) {
          return b.moveToBookmark(e);
        },
        select: function (e, t) {
          var r = a,
            o = t;
          return (
            ve
              .from(e)
              .map(function (e) {
                var t = r.nodeIndex(e),
                  n = r.createRng();
                return (
                  n.setStart(e.parentNode, t),
                  n.setEnd(e.parentNode, t + 1),
                  o && (Ol(r, n, e, !0), Ol(r, n, e, !1)),
                  n
                );
              })
              .each(h),
            e
          );
        },
        isCollapsed: function () {
          var e = p(),
            t = c();
          return (
            !(!e || e.item) &&
            (e.compareEndPoints
              ? 0 === e.compareEndPoints("StartToEnd", e)
              : !t || e.collapsed)
          );
        },
        isForward: n,
        setNode: function (e) {
          return t(a.getOuterHTML(e)), e;
        },
        getNode: function () {
          return (function (e, t) {
            if (!t) return e;
            var n = t.startContainer,
              r = t.endContainer,
              o = t.startOffset,
              i = t.endOffset,
              a = t.commonAncestorContainer;
            return !t.collapsed &&
              (n === r &&
                i - o < 2 &&
                n.hasChildNodes() &&
                (a = n.childNodes[o]),
              3 === n.nodeType &&
                3 === r.nodeType &&
                ((n = n.length === o ? Sd(n.nextSibling, !0) : n.parentNode),
                (r = 0 === i ? Sd(r.previousSibling, !1) : r.parentNode),
                n && n === r))
              ? n
              : a && 3 === a.nodeType
              ? a.parentNode
              : a;
          })(s.getBody(), p());
        },
        getSel: c,
        setRng: h,
        getRng: p,
        getStart: function (e) {
          return xd(s.getBody(), p(), e);
        },
        getEnd: function (e) {
          return wd(s.getBody(), p(), e);
        },
        getSelectedBlocks: function (e, t) {
          return (function (e, t, n, r) {
            var o = [],
              i = e.getRoot();
            if (
              ((n = e.getParent(n || xd(i, t, t.collapsed), e.isBlock)),
              (r = e.getParent(r || wd(i, t, t.collapsed), e.isBlock)),
              n && n !== i && o.push(n),
              n && r && n !== r)
            )
              for (var a, u = new Rr(n, i); (a = u.next()) && a !== r; )
                e.isBlock(a) && o.push(a);
            return r && n !== r && r !== i && o.push(r), o;
          })(a, p(), e, t);
        },
        normalize: function () {
          var e = p();
          if (1 < _l(c()).length || !Bl(s)) return e;
          var t = Tf(a, e);
          return (
            t.each(function (e) {
              h(e, n());
            }),
            t.getOr(e)
          );
        },
        selectorChanged: function (e, t) {
          return g(e, t), v;
        },
        selectorChangedWithUnbind: g,
        getScrollContainer: function () {
          for (var e, t = a.getRoot(); t && "BODY" !== t.nodeName; ) {
            if (t.scrollHeight > t.clientHeight) {
              e = t;
              break;
            }
            t = t.parentNode;
          }
          return e;
        },
        scrollIntoView: function (e, t) {
          V(e) ? (s.inline ? Qf : ed)(s, e, t) : td(s, p(), t);
        },
        placeCaretAt: function (e, t) {
          return h(Ef(e, t, s.getDoc()));
        },
        getBoundingClientRect: function () {
          var e = p();
          return e.collapsed
            ? ss.fromRangeStart(e).getClientRects()[0]
            : e.getBoundingClientRect();
        },
        destroy: function () {
          (u = l = f = null), y.destroy();
        },
      },
      b = zl(v),
      y = wf(v, s);
    function C(t, e) {
      return M(e, function (e) {
        return o.is(e, t);
      });
    }
    function x(e) {
      return o.getParents(e, null, o.getRoot());
    }
    return (v.bookmarkManager = b), (v.controlSelection = y), v;
  }
  function Uh(e, t) {
    var n,
      r,
      a,
      u,
      o = io();
    t.convert_fonts_to_spans &&
      ((r = e),
      (a = o),
      (u = Et.explode(t.font_size_legacy_values)),
      r.addNodeFilter("font", function (e) {
        Y(e, function (e) {
          var t,
            n = a.parse(e.attr("style")),
            r = e.attr("color"),
            o = e.attr("face"),
            i = e.attr("size");
          r && (n.color = r),
            o && (n["font-family"] = o),
            i && (n["font-size"] = u[parseInt(e.attr("size"), 10) - 1]),
            (e.name = "span"),
            e.attr("style", a.serialize(n)),
            (t = e),
            Y(["color", "face", "size"], function (e) {
              t.attr(e, null);
            });
        });
      })),
      (n = o),
      e.addNodeFilter("strike", function (e) {
        Y(e, function (e) {
          var t = n.parse(e.attr("style"));
          (t["text-decoration"] = "line-through"),
            (e.name = "span"),
            e.attr("style", n.serialize(t));
        });
      });
  }
  function zh(e) {
    var t,
      n = decodeURIComponent(e).split(","),
      r = /data:([^;]+)/.exec(n[0]);
    return { type: (t = r ? r[1] : t), data: n[1] };
  }
  function Hh(e, t) {
    var n;
    try {
      n = atob(t);
    } catch (e) {
      return ve.none();
    }
    for (var r = new Uint8Array(n.length), o = 0; o < r.length; o++)
      r[o] = n.charCodeAt(o);
    return ve.some(new Blob([r], { type: e }));
  }
  function jh(e) {
    return 0 === e.indexOf("blob:")
      ? ((o = e),
        new Nr(function (e, t) {
          function n() {
            t(
              "Cannot convert " +
                o +
                " to Blob. Resource might not exist or is inaccessible."
            );
          }
          try {
            var r = new XMLHttpRequest();
            r.open("GET", o, !0),
              (r.responseType = "blob"),
              (r.onload = function () {
                200 === r.status ? e(r.response) : n();
              }),
              (r.onerror = n),
              r.send();
          } catch (e) {
            n();
          }
        }))
      : 0 === e.indexOf("data:")
      ? ((n = e),
        new Nr(function (e) {
          var t = zh(n);
          Hh(t.type, t.data).fold(function () {
            return e(new Blob([]));
          }, e);
        }))
      : null;
    var o, n;
  }
  function Vh(e) {
    return (e || "blobid") + mv++;
  }
  function qh(r, d) {
    var o = {};
    return {
      findAll: function (e, n) {
        n = n || w;
        var t = A(
          U(e ? xe(e.getElementsByTagName("img")) : [], function (e) {
            var t = e.src;
            return (
              xt.fileApi &&
              !e.hasAttribute("data-mce-bogus") &&
              !e.hasAttribute("data-mce-placeholder") &&
              t &&
              t !== xt.transparentSrc &&
              (0 === t.indexOf("blob:")
                ? !r.isUploaded(t) && n(e)
                : 0 === t.indexOf("data:") && n(e))
            );
          }),
          function (f) {
            if (void 0 !== o[f.src])
              return new Nr(function (t) {
                o[f.src].then(function (e) {
                  return "string" == typeof e
                    ? e
                    : void t({ image: f, blobInfo: e.blobInfo });
                });
              });
            var e = new Nr(function (e, t) {
              var r, o, i, n, a, u, s, c, l;
              (r = d),
                (i = e),
                (n = t),
                0 !== (o = f).src.indexOf("blob:")
                  ? ((u = (a = zh(o.src)).data),
                    (s = a.type),
                    (c = u),
                    (l = r.getByData(c, s))
                      ? i({ image: o, blobInfo: l })
                      : jh(o.src).then(
                          function (e) {
                            (l = r.create(Vh(), e, c)),
                              r.add(l),
                              i({ image: o, blobInfo: l });
                          },
                          function (e) {
                            n(e);
                          }
                        ))
                  : (l = r.getByUri(o.src))
                  ? i({ image: o, blobInfo: l })
                  : jh(o.src).then(
                      function (t) {
                        var n = t;
                        new Nr(function (e) {
                          var t = new FileReader();
                          (t.onloadend = function () {
                            e(t.result);
                          }),
                            t.readAsDataURL(n);
                        }).then(function (e) {
                          (c = zh(e).data),
                            (l = r.create(Vh(), t, c)),
                            r.add(l),
                            i({ image: o, blobInfo: l });
                        });
                      },
                      function (e) {
                        n(e);
                      }
                    );
            })
              .then(function (e) {
                return delete o[e.image.src], e;
              })
              .catch(function (e) {
                return delete o[f.src], e;
              });
            return (o[f.src] = e);
          }
        );
        return Nr.all(t);
      },
    };
  }
  function $h(e, t, n, r) {
    (e.padd_empty_with_br || t.insert) && n[r.name]
      ? (r.empty().append(new Hd("br", 1)).shortEnded = !0)
      : (r.empty().append(new Hd("#text", 3)).value = xo);
  }
  function Wh(n, e, t, r) {
    return r.isEmpty(e, t, function (e) {
      return (t = n.getElementRule(e.name)) && t.paddEmpty;
      var t;
    });
  }
  function Kh(e, p) {
    var t,
      o,
      i,
      h = e.schema;
    function n(t) {
      var e,
        n,
        r = t.attr("src");
      (e = t).attr("src") === xt.transparentSrc ||
        V(e.attr("data-mce-placeholder")) ||
        V(t.attr("data-mce-bogus")) ||
        ((n = /data:([^;]+);base64,([a-z0-9\+\/=\s]+)/i.exec(r))
          ? ve.some({ type: n[1], data: decodeURIComponent(n[2]) })
          : ve.none()
        )
          .filter(function () {
            return (function (e, t) {
              if (t.images_dataimg_filter) {
                var n = new Image();
                return (
                  (n.src = e.attr("src")),
                  ne(e.attributes.map, function (e, t) {
                    n.setAttribute(t, e);
                  }),
                  t.images_dataimg_filter(n)
                );
              }
              return !0;
            })(t, o);
          })
          .bind(function (e) {
            var t = e.type,
              n = e.data;
            return ve.from(i.getByData(n, t)).orThunk(function () {
              return Hh(t, n).map(function (e) {
                var t = i.create(Vh(), e, n);
                return i.add(t), t;
              });
            });
          })
          .each(function (e) {
            t.attr("src", e.blobUri());
          });
    }
    p.remove_trailing_brs &&
      e.addNodeFilter("br", function (e, t, n) {
        var r,
          o,
          i,
          a,
          u,
          s,
          c,
          l,
          f = e.length,
          d = Et.extend({}, h.getBlockElements()),
          m = h.getNonEmptyElements(),
          g = h.getWhiteSpaceElements();
        for (d.body = 1, r = 0; r < f; r++)
          if (
            ((i = (o = e[r]).parent), d[o.parent.name] && o === i.lastChild)
          ) {
            for (u = o.prev; u; ) {
              if (
                "span" !== (s = u.name) ||
                "bookmark" !== u.attr("data-mce-type")
              ) {
                "br" === s && (o = null);
                break;
              }
              u = u.prev;
            }
            o &&
              (o.remove(),
              Wh(h, m, g, i) &&
                (c = h.getElementRule(i.name)) &&
                (c.removeEmpty ? i.remove() : c.paddEmpty && $h(p, n, d, i)));
          } else {
            for (
              a = o;
              i && i.firstChild === a && i.lastChild === a && !d[(a = i).name];

            )
              i = i.parent;
            a === i &&
              !0 !== p.padd_empty_with_br &&
              (((l = new Hd("#text", 3)).value = xo), o.replace(l));
          }
      }),
      e.addAttributeFilter("href", function (e) {
        var t,
          n,
          r = e.length;
        if (!p.allow_unsafe_link_target)
          for (; r--; ) {
            var o = e[r];
            "a" === o.name &&
              "_blank" === o.attr("target") &&
              o.attr(
                "rel",
                ((n = void 0),
                (n = (t = o.attr("rel")) ? Et.trim(t) : ""),
                /\b(noopener)\b/g.test(n)
                  ? n
                  : n
                      .split(" ")
                      .filter(function (e) {
                        return 0 < e.length;
                      })
                      .concat(["noopener"])
                      .sort()
                      .join(" "))
              );
          }
      }),
      p.allow_html_in_named_anchor ||
        e.addAttributeFilter("id,name", function (e) {
          for (var t, n, r, o, i = e.length; i--; )
            if ("a" === (o = e[i]).name && o.firstChild && !o.attr("href"))
              for (
                r = o.parent, t = o.lastChild;
                (n = t.prev), r.insert(t, o), (t = n);

              );
        }),
      p.fix_list_elements &&
        e.addNodeFilter("ul,ol", function (e) {
          for (var t, n, r, o = e.length; o--; )
            ("ul" !== (r = (n = e[o]).parent).name && "ol" !== r.name) ||
              (n.prev && "li" === n.prev.name
                ? n.prev.append(n)
                : ((t = new Hd("li", 1)).attr("style", "list-style-type: none"),
                  n.wrap(t)));
        }),
      p.validate &&
        h.getValidClasses() &&
        e.addAttributeFilter("class", function (e) {
          for (var t = h.getValidClasses(), n = e.length; n--; ) {
            for (
              var r = e[n], o = r.attr("class").split(" "), i = "", a = 0;
              a < o.length;
              a++
            ) {
              var u = o[a],
                s = !1,
                c = t["*"];
              c && c[u] && (s = !0),
                (c = t[r.name]),
                (s = !(s || !c || !c[u]) || s) && (i && (i += " "), (i += u));
            }
            i.length || (i = null), r.attr("class", i);
          }
        }),
      (t = e),
      (i = (o = p).blob_cache) &&
        t.addAttributeFilter("src", function (e) {
          return Y(e, n);
        });
  }
  function Xh(A, R) {
    void 0 === R && (R = ro());
    var D = {},
      T = [],
      O = {},
      B = {};
    ((A = A || {}).validate = !("validate" in A) || A.validate),
      (A.root_name = A.root_name || "body");
    function P(e) {
      var t = e.name;
      t in D && ((r = O[t]) ? r.push(e) : (O[t] = [e]));
      for (var n = T.length; n--; ) {
        var r,
          o = T[n].name;
        o in e.attributes.map && ((r = B[o]) ? r.push(e) : (B[o] = [e]));
      }
      return e;
    }
    var e = {
      schema: R,
      addAttributeFilter: function (e, n) {
        hv(vv(e), function (e) {
          for (var t = 0; t < T.length; t++)
            if (T[t].name === e) return void T[t].callbacks.push(n);
          T.push({ name: e, callbacks: [n] });
        });
      },
      getAttributeFilters: function () {
        return [].concat(T);
      },
      addNodeFilter: function (e, n) {
        hv(vv(e), function (e) {
          var t = D[e];
          t || (D[e] = t = []), t.push(n);
        });
      },
      getNodeFilters: function () {
        var e,
          t = [];
        for (e in D) ke(D, e) && t.push({ name: e, callbacks: D[e] });
        return t;
      },
      filterNode: P,
      parse: function (e, s) {
        var t,
          n,
          r,
          o,
          i,
          c,
          a,
          l,
          f = [];
        function d(e) {
          for (var t = R.getBlockElements(), n = e.prev; n && 3 === n.type; ) {
            var r = n.value.replace(w, "");
            if (0 < r.length) return (n.value = r), 0;
            var o = n.next;
            if (o) {
              if (3 === o.type && o.value.length) {
                n = n.prev;
                continue;
              }
              if (!t[o.name] && "script" !== o.name && "style" !== o.name) {
                n = n.prev;
                continue;
              }
            }
            var i = n.prev;
            n.remove(), (n = i);
          }
        }
        (s = s || {}), (O = {}), (B = {});
        function m(e, t) {
          var n,
            r = new Hd(e, t);
          return e in D && ((n = O[e]) ? n.push(r) : (O[e] = [r])), r;
        }
        var g = bv(
            pv("script,style,head,html,body,title,meta,param"),
            R.getBlockElements()
          ),
          p = to(R),
          h = R.getNonEmptyElements(),
          v = R.children,
          b = A.validate,
          u = ("forced_root_block" in s ? s : A).forced_root_block,
          y = !1 === u ? "" : !0 === u ? "p" : u,
          C = R.getWhiteSpaceElements(),
          x = /^[ \t\r\n]+/,
          w = /[ \t\r\n]+$/,
          S = /[ \t\r\n]+/g,
          E = /^[ \t\r\n]+$/,
          k = ke(C, s.context) || ke(C, A.root_name),
          N = Qd(
            {
              validate: b,
              document: A.document,
              allow_html_data_urls: A.allow_html_data_urls,
              allow_svg_data_urls: A.allow_svg_data_urls,
              allow_script_urls: A.allow_script_urls,
              allow_conditional_comments: A.allow_conditional_comments,
              preserve_cdata: A.preserve_cdata,
              self_closing_elements: (function (e) {
                var t,
                  n = {};
                for (t in e) "li" !== t && "p" !== t && (n[t] = e[t]);
                return n;
              })(R.getSelfClosingElements()),
              cdata: function (e) {
                l.append(m("#cdata", 4)).value = e;
              },
              text: function (e, t) {
                var n, r;
                k ||
                  ((e = e.replace(S, " ")),
                  (r = l.lastChild) &&
                    (ke(g, r.name) || "br" === r.name) &&
                    (e = e.replace(x, ""))),
                  0 !== e.length &&
                    (((n = m("#text", 3)).raw = !!t), (l.append(n).value = e));
              },
              comment: function (e) {
                l.append(m("#comment", 8)).value = e;
              },
              pi: function (e, t) {
                (l.append(m(e, 7)).value = t), d(l);
              },
              doctype: function (e) {
                (l.append(m("#doctype", 10)).value = e), d(l);
              },
              start: function (e, t, n) {
                var r = b ? R.getElementRule(e) : {};
                if (r) {
                  var o = m(r.outputName || e, 1);
                  (o.attributes = t), (o.shortEnded = n), l.append(o);
                  var i = v[l.name];
                  i && v[o.name] && !i[o.name] && f.push(o);
                  for (var a = T.length; a--; ) {
                    var u = T[a].name;
                    u in t.map && ((c = B[u]) ? c.push(o) : (B[u] = [o]));
                  }
                  g[e] && d(o), n || (l = o), !k && C[e] && (k = !0);
                }
              },
              end: function (e) {
                var t,
                  n,
                  r,
                  o,
                  i = b ? R.getElementRule(e) : {};
                if (i) {
                  if (g[e] && !k) {
                    if ((t = l.firstChild) && 3 === t.type)
                      if (0 < (n = t.value.replace(x, "")).length)
                        (t.value = n), (t = t.next);
                      else
                        for (r = t.next, t.remove(), t = r; t && 3 === t.type; )
                          (n = t.value),
                            (r = t.next),
                            (0 !== n.length && !E.test(n)) ||
                              (t.remove(), (t = r)),
                            (t = r);
                    if ((t = l.lastChild) && 3 === t.type)
                      if (0 < (n = t.value.replace(w, "")).length)
                        (t.value = n), (t = t.prev);
                      else
                        for (r = t.prev, t.remove(), t = r; t && 3 === t.type; )
                          (n = t.value),
                            (r = t.prev),
                            (0 !== n.length && !E.test(n)) ||
                              (t.remove(), (t = r)),
                            (t = r);
                  }
                  k && C[e] && (k = !1);
                  var a = Wh(R, h, C, l),
                    u = l.parent;
                  i.paddInEmptyBlock &&
                  a &&
                  (function () {
                    for (var e = l; V(e); ) {
                      if (e.name in p) return Wh(R, h, C, e);
                      e = e.parent;
                    }
                  })()
                    ? $h(A, s, g, l)
                    : i.removeEmpty && a
                    ? g[l.name]
                      ? l.empty().remove()
                      : l.unwrap()
                    : i.paddEmpty &&
                      ((gv((o = l), "#text") && o.firstChild.value === xo) ||
                        a) &&
                      $h(A, s, g, l),
                    (l = u);
                }
              },
            },
            R
          ),
          _ = (l = new Hd(s.context || A.root_name, 11));
        if (
          (N.parse(e, s.format),
          b &&
            f.length &&
            (s.context
              ? (s.invalid = !0)
              : (function (e) {
                  for (
                    var t = pv("tr,td,th,tbody,thead,tfoot,table"),
                      n = R.getNonEmptyElements(),
                      r = R.getWhiteSpaceElements(),
                      o = R.getTextBlockElements(),
                      i = R.getSpecialElements(),
                      a = function (e, t) {
                        if ((void 0 === t && (t = e.parent), i[e.name]))
                          e.empty().remove();
                        else {
                          for (var n = 0, r = e.children(); n < r.length; n++) {
                            var o = r[n];
                            R.isValidChild(t.name, o.name) || a(o, t);
                          }
                          e.unwrap();
                        }
                      },
                      u = 0;
                    u < e.length;
                    u++
                  ) {
                    var s,
                      c = e[u],
                      l = void 0,
                      f = void 0;
                    if (c.parent && !c.fixed)
                      if (o[c.name] && "li" === c.parent.name) {
                        for (var d = c.next; d && o[d.name]; )
                          (d.name = "li"),
                            (d.fixed = !0),
                            c.parent.insert(d, c.parent),
                            (d = d.next);
                        c.unwrap();
                      } else {
                        for (
                          var m = [c], l = c.parent;
                          l && !R.isValidChild(l.name, c.name) && !t[l.name];
                          l = l.parent
                        )
                          m.push(l);
                        if (l && 1 < m.length)
                          if (R.isValidChild(l.name, c.name)) {
                            m.reverse();
                            for (
                              var g = (s = P(m[0].clone())), p = 0;
                              p < m.length - 1;
                              p++
                            ) {
                              R.isValidChild(g.name, m[p].name)
                                ? ((f = P(m[p].clone())), g.append(f))
                                : (f = g);
                              for (
                                var h = m[p].firstChild;
                                h && h !== m[p + 1];

                              ) {
                                var v = h.next;
                                f.append(h), (h = v);
                              }
                              g = f;
                            }
                            Wh(R, n, r, s)
                              ? l.insert(c, m[0], !0)
                              : (l.insert(s, m[0], !0), l.insert(c, s)),
                              (l = m[0]),
                              (Wh(R, n, r, l) || gv(l, "br")) &&
                                l.empty().remove();
                          } else a(c);
                        else
                          c.parent &&
                            ("li" !== c.name
                              ? R.isValidChild(c.parent.name, "div") &&
                                R.isValidChild("div", c.name)
                                ? c.wrap(P(new Hd("div", 1)))
                                : a(c)
                              : !(d = c.prev) ||
                                ("ul" !== d.name && "ol" !== d.name)
                              ? !(d = c.next) ||
                                ("ul" !== d.name && "ol" !== d.name)
                                ? c.wrap(P(new Hd("ul", 1)))
                                : d.insert(c, d.firstChild, !0)
                              : d.append(c));
                      }
                  }
                })(f)),
          y &&
            ("body" === _.name || s.isRootContent) &&
            (function () {
              function e(e) {
                e &&
                  ((t = e.firstChild) &&
                    3 === t.type &&
                    (t.value = t.value.replace(x, "")),
                  (t = e.lastChild) &&
                    3 === t.type &&
                    (t.value = t.value.replace(w, "")));
              }
              var t = _.firstChild,
                n = null;
              if (R.isValidChild(_.name, y.toLowerCase())) {
                for (; t; ) {
                  var r = t.next;
                  3 === t.type ||
                  (1 === t.type &&
                    "p" !== t.name &&
                    !g[t.name] &&
                    !t.attr("data-mce-type"))
                    ? (n ||
                        ((n = m(y, 1)).attr(A.forced_root_block_attrs),
                        _.insert(n, t)),
                      n.append(t))
                    : (e(n), (n = null)),
                    (t = r);
                }
                e(n);
              }
            })(),
          !s.invalid)
        ) {
          for (a in O)
            if (ke(O, a)) {
              for (c = D[a], o = (t = O[a]).length; o--; )
                t[o].parent || t.splice(o, 1);
              for (n = 0, r = c.length; n < r; n++) c[n](t, a, s);
            }
          for (n = 0, r = T.length; n < r; n++)
            if ((c = T[n]).name in B) {
              for (o = (t = B[c.name]).length; o--; )
                t[o].parent || t.splice(o, 1);
              for (o = 0, i = c.callbacks.length; o < i; o++)
                c.callbacks[o](t, c.name, s);
            }
        }
        return _;
      },
    };
    return Kh(e, A), A.inline_styles && Uh(e, A), e;
  }
  function Yh(e, t, n) {
    -1 === Et.inArray(t, n) &&
      (e.addAttributeFilter(n, function (e, t) {
        for (var n = e.length; n--; ) e[n].attr(t, null);
      }),
      t.push(n));
  }
  function Gh(L, I) {
    var e = ["data-mce-selected"],
      M = I && I.dom ? I.dom : Za.DOM,
      F = I && I.schema ? I.schema : ro(L);
    (L.entity_encoding = L.entity_encoding || "named"),
      (L.remove_trailing_brs =
        !("remove_trailing_brs" in L) || L.remove_trailing_brs);
    var t,
      U = Xh(L, F),
      s = L,
      c = M;
    return (
      (t = U).addAttributeFilter("data-mce-tabindex", function (e, t) {
        for (var n = e.length; n--; ) {
          var r = e[n];
          r.attr("tabindex", r.attr("data-mce-tabindex")), r.attr(t, null);
        }
      }),
      t.addAttributeFilter("src,href,style", function (e, t) {
        for (
          var n = "data-mce-" + t,
            r = s.url_converter,
            o = s.url_converter_scope,
            i = e.length;
          i--;

        ) {
          var a = e[i],
            u = a.attr(n);
          void 0 !== u
            ? (a.attr(t, 0 < u.length ? u : null), a.attr(n, null))
            : ((u = a.attr(t)),
              "style" === t
                ? (u = c.serializeStyle(c.parseStyle(u), a.name))
                : r && (u = r.call(o, u, t, a.name)),
              a.attr(t, 0 < u.length ? u : null));
        }
      }),
      t.addAttributeFilter("class", function (e) {
        for (var t = e.length; t--; ) {
          var n,
            r = e[t];
          r.attr("class") &&
            ((n = r.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g, "")),
            r.attr("class", 0 < n.length ? n : null));
        }
      }),
      t.addAttributeFilter("data-mce-type", function (e, t, n) {
        for (var r = e.length; r--; ) {
          var o = e[r];
          "bookmark" !== o.attr("data-mce-type") ||
            n.cleanup ||
            (ve.from(o.firstChild).exists(function (e) {
              return !So(e.value);
            })
              ? o.unwrap()
              : o.remove());
        }
      }),
      t.addNodeFilter("noscript", function (e) {
        for (var t = e.length; t--; ) {
          var n = e[t].firstChild;
          n && (n.value = Qo.decode(n.value));
        }
      }),
      t.addNodeFilter("script,style", function (e, t) {
        for (
          var n = function (e) {
              return e
                .replace(/(<!--\[CDATA\[|\]\]-->)/g, "\n")
                .replace(/^[\r\n]*|[\r\n]*$/g, "")
                .replace(
                  /^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi,
                  ""
                )
                .replace(
                  /\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g,
                  ""
                );
            },
            r = e.length;
          r--;

        ) {
          var o,
            i = e[r],
            a = i.firstChild ? i.firstChild.value : "";
          "script" === t
            ? ((o = i.attr("type")) &&
                i.attr(
                  "type",
                  "mce-no/type" === o ? null : o.replace(/^mce\-/, "")
                ),
              "xhtml" === s.element_format &&
                0 < a.length &&
                (i.firstChild.value = "// <![CDATA[\n" + n(a) + "\n// ]]>"))
            : "xhtml" === s.element_format &&
              0 < a.length &&
              (i.firstChild.value = "\x3c!--\n" + n(a) + "\n--\x3e");
        }
      }),
      t.addNodeFilter("#comment", function (e) {
        for (var t = e.length; t--; ) {
          var n = e[t];
          s.preserve_cdata && 0 === n.value.indexOf("[CDATA[")
            ? ((n.name = "#cdata"),
              (n.type = 4),
              (n.value = c.decode(n.value.replace(/^\[CDATA\[|\]\]$/g, ""))))
            : 0 === n.value.indexOf("mce:protected ") &&
              ((n.name = "#text"),
              (n.type = 3),
              (n.raw = !0),
              (n.value = unescape(n.value).substr(14)));
        }
      }),
      t.addNodeFilter("xml:namespace,input", function (e, t) {
        for (var n = e.length; n--; ) {
          var r = e[n];
          7 === r.type
            ? r.remove()
            : 1 === r.type &&
              ("input" !== t || r.attr("type") || r.attr("type", "text"));
        }
      }),
      t.addAttributeFilter("data-mce-type", function (e) {
        Y(e, function (e) {
          "format-caret" === e.attr("data-mce-type") &&
            (e.isEmpty(t.schema.getNonEmptyElements())
              ? e.remove()
              : e.unwrap());
        });
      }),
      t.addAttributeFilter(
        "data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize,data-mce-placeholder",
        function (e, t) {
          for (var n = e.length; n--; ) e[n].attr(t, null);
        }
      ),
      {
        schema: F,
        addNodeFilter: U.addNodeFilter,
        addAttributeFilter: U.addAttributeFilter,
        serialize: function (e, t) {
          var n,
            r,
            o,
            i,
            a,
            u,
            s,
            c,
            l,
            f,
            d,
            m,
            g,
            p,
            h,
            v,
            b,
            y,
            C,
            x,
            w,
            S,
            E,
            k,
            N,
            _,
            A,
            R,
            D,
            T = _e({ format: "html" }, (t = void 0 === t ? {} : t)),
            O =
              ((n =
                ((m = e),
                (E = g = T),
                (d = I) && d.hasEventListeners("PreProcess") && !E.no_events
                  ? ((h = g),
                    (x = (p = d).dom),
                    (w = m.cloneNode(!0)),
                    (S = document.implementation).createHTMLDocument &&
                      ((b = S.createHTMLDocument("")),
                      Et.each(
                        "BODY" === w.nodeName ? w.childNodes : [w],
                        function (e) {
                          b.body.appendChild(b.importNode(e, !0));
                        }
                      ),
                      (w = "BODY" !== w.nodeName ? b.body.firstChild : b.body),
                      (v = x.doc),
                      (x.doc = b)),
                    (y = p),
                    (C = _e(_e({}, h), { node: w })),
                    y.fire("PreProcess", C),
                    v && (x.doc = v),
                    w)
                  : m)),
              (o = Eo((r = T).getInner ? n.innerHTML : M.getOuterHTML(n))),
              r.selection || yo(kt.fromDom(n)) ? o : Et.trim(o)),
            B =
              ((i = U),
              (a = O),
              (s = (u = T).selection ? _e({ forced_root_block: !1 }, u) : u),
              (c = i.parse(a, s)),
              !P((f = c.lastChild)) ||
                (P((l = f.prev)) && (f.remove(), l.remove())),
              c);
          function P(e) {
            return e && "br" === e.name;
          }
          return "tree" === T.format
            ? B
            : ((k = I),
              (N = T),
              (_ = B),
              (D = im(L, F).serialize(_)),
              N.no_events || !k
                ? D
                : ((A = k),
                  (R = _e(_e({}, N), { content: D })),
                  A.fire("PostProcess", R).content));
        },
        addRules: F.addValidElements,
        setRules: F.setValidElements,
        addTempAttr: R(Yh, U, e),
        getTempAttrs: J(e),
        getNodeFilters: U.getNodeFilters,
        getAttributeFilters: U.getAttributeFilters,
      }
    );
  }
  function Jh(e, t) {
    var n = Gh(e, t);
    return {
      schema: n.schema,
      addNodeFilter: n.addNodeFilter,
      addAttributeFilter: n.addAttributeFilter,
      serialize: n.serialize,
      addRules: n.addRules,
      setRules: n.setRules,
      addTempAttr: n.addTempAttr,
      getTempAttrs: n.getTempAttrs,
      getNodeFilters: n.getNodeFilters,
      getAttributeFilters: n.getAttributeFilters,
    };
  }
  function Qh(e, t, n) {
    return (r = n = void 0 === n ? {} : n), bh(e).editor.setContent(t, r);
    var r;
  }
  function Zh(e) {
    return ve.from(e).each(function (e) {
      return e.destroy();
    });
  }
  function ev(e, t) {
    var n,
      r,
      o,
      i,
      a,
      u,
      s,
      c =
        ((n = e),
        (r = U(xv, function (e) {
          return ke(n, e);
        })),
        (!1 !== (o = n.forced_root_block) && "" !== o) ||
          r.push("forced_root_block (false only)"),
        W(r)),
      l =
        ((s = Et.makeMap(t.plugins, " ")),
        W(
          Ae(
            Ae([], U(wv, g), !0),
            H(Sv, function (e) {
              return g(e) ? [e + " (moving to premium)"] : [];
            }),
            !0
          )
        )),
      f = 0 < l.length,
      d = 0 < c.length,
      m = "mobile" === t.theme;
    function g(e) {
      return ke(s, e);
    }
    (f || d || m) &&
      ((i = m ? "\n\nThemes:\n- mobile" : ""),
      (a = f ? "\n\nPlugins:\n- " + l.join("\n- ") : ""),
      (u = d ? "\n\nSettings:\n- " + c.join("\n- ") : ""),
      console.warn(
        "The following deprecated features are currently enabled, these will be removed in TinyMCE 6.0. See https://www.tiny.cloud/docs/release-notes/6.0-upcoming-changes/ for more information." +
          i +
          a +
          u
      ));
  }
  function tv(e) {
    var t = S(e) ? e.join(" ") : e;
    return U(A(X(t) ? t.split(" ") : [], Je), function (e) {
      return 0 < e.length;
    });
  }
  function nv(e, t) {
    return ke(e.sections(), t);
  }
  function rv(e, t) {
    return ue(e, "toolbar_mode")
      .orThunk(function () {
        return ue(e, "toolbar_drawer").map(function (e) {
          return !1 === e ? "wrap" : e;
        });
      })
      .getOr(t);
  }
  function ov(e, t, n, r) {
    var o,
      i,
      a,
      u,
      s,
      c,
      l,
      f,
      d = tv(n.forced_plugins),
      m = tv(r.plugins),
      g = nv((o = t), "mobile") ? o.sections().mobile : {},
      p = g.plugins ? tv(g.plugins) : m,
      h =
        ((i =
          ((u = t),
          (s = m),
          (c = p),
          (a = e) &&
          (0,
          (f = (l = u).sections()),
          nv(l, "mobile") && "mobile" === f.mobile.theme)
            ? U(c, R(T, Av))
            : a && nv(u, "mobile")
            ? c
            : s)),
        [].concat(tv(d)).concat(tv(i)));
    if (xt.browser.isIE() && T(h, "rtc"))
      throw new Error("RTC plugin is not supported on IE 11.");
    return Et.extend(r, { plugins: h.join(" ") });
  }
  function iv(e, t, n, r, o) {
    var i,
      a,
      u,
      s,
      c,
      l,
      f,
      d,
      m = e
        ? {
            mobile:
              ((i = t),
              (a = {
                resize: !1,
                toolbar_mode: rv(o.mobile || {}, "scrolling"),
                toolbar_sticky: !1,
              }),
              _e(_e(_e({}, Rv), a), i ? { menubar: !1 } : {})),
          }
        : {},
      g =
        ((c = ["mobile"]),
        ie(
          Cv(m, o),
          function (e, t) {
            return T(c, t);
          },
          oe((l = {})),
          oe((f = {}))
        ),
        { sections: J((d = { t: l, f: f }).t), settings: J(d.f) }),
      p = Et.extend(
        n,
        r,
        g.settings(),
        e && nv(g, "mobile")
          ? (function (e) {
              void 0 === e && (e = {});
              var t = ue(g.sections(), "mobile").getOr({});
              return Et.extend({}, e, t);
            })()
          : {},
        {
          validate: !0,
          external_plugins:
            ((u = r),
            (s = g.settings().external_plugins || {}),
            u && u.external_plugins ? Et.extend({}, u.external_plugins, s) : s),
        }
      );
    return ov(e, g, r, p);
  }
  function av(e, t, n) {
    return ve.from(t.settings[n]).filter(e);
  }
  function uv(e, t) {
    return t.dom[e];
  }
  function sv(e, t) {
    return parseInt(xn(t, e), 10);
  }
  function cv(e, t, n) {
    var r,
      o,
      i,
      a,
      u,
      s,
      c = kt.fromDom(e.getBody()),
      l = e.inline ? c : kt.fromDom(Dt(c).dom.documentElement),
      f =
        ((r = e.inline),
        (i = t),
        (a = n),
        (u = (o = l).dom.getBoundingClientRect()),
        {
          x: i - (r ? u.left + o.dom.clientLeft + Pv(o) : 0),
          y: a - (r ? u.top + o.dom.clientTop + Bv(o) : 0),
        }),
      d = f.x,
      m = f.y,
      g = Tv((s = l)),
      p = Ov(s);
    return 0 <= d && 0 <= m && d <= g && m <= p;
  }
  function lv(o) {
    function i() {
      var e = o.theme;
      return e && e.getNotificationManagerImpl
        ? e.getNotificationManagerImpl()
        : { open: t, close: t, reposition: t, getArgs: t };
      function t() {
        throw new Error(
          "Theme did not provide a NotificationManager implementation."
        );
      }
    }
    function a() {
      return ve.from(c[0]);
    }
    function u() {
      0 < c.length && i().reposition(c);
    }
    function s(t) {
      z(c, function (e) {
        return e === t;
      }).each(function (e) {
        c.splice(e, 1);
      });
    }
    function t(n, e) {
      if (
        (void 0 === e && (e = !0),
        !o.removed &&
          ((r = (t = o).inline ? t.getBody() : t.getContentAreaContainer()),
          ve.from(r).map(kt.fromDom).map(In).getOr(!1)))
      )
        return (
          e && o.fire("BeforeOpenNotification", { notification: n }),
          M(c, function (e) {
            return !(
              (t = i().getArgs(e)).type !== n.type ||
              t.text !== n.text ||
              t.progressBar ||
              t.timeout ||
              n.progressBar ||
              n.timeout
            );
            var t;
          }).getOrThunk(function () {
            o.editorManager.setActive(o);
            var e = i().open(n, function () {
              s(e),
                u(),
                a().fold(
                  function () {
                    return o.focus();
                  },
                  function (e) {
                    return kt.fromDom(e.getEl()).dom.focus();
                  }
                );
            });
            return (
              c.push(e),
              u(),
              o.fire("OpenNotification", { notification: _e({}, e) }),
              e
            );
          })
        );
      var t, r;
    }
    var n,
      c = [],
      e = J(c);
    return (
      (n = o).on("SkinLoaded", function () {
        var e = n.getParam("service_message");
        e && t({ text: e, type: "warning", timeout: 0 }, !1), u();
      }),
      n.on("show ResizeEditor ResizeWindow NodeChange", function () {
        _r.requestAnimationFrame(u);
      }),
      n.on("remove", function () {
        Y(c.slice(), function (e) {
          i().close(e);
        });
      }),
      {
        open: t,
        close: function () {
          a().each(function (e) {
            i().close(e), s(e), u();
          });
        },
        getNotifications: e,
      }
    );
  }
  var fv,
    dv,
    mv = 0,
    gv = function (e, t) {
      return (
        e &&
        e.firstChild &&
        e.firstChild === e.lastChild &&
        e.firstChild.name === t
      );
    },
    pv = Et.makeMap,
    hv = Et.each,
    vv = Et.explode,
    bv = Et.extend,
    yv = Za.DOM,
    Cv =
      ((fv = function (e, t) {
        return h(e) && h(t) ? Cv(e, t) : t;
      }),
      function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        if (0 === e.length) throw new Error("Can't merge zero objects");
        for (var n = {}, r = 0; r < e.length; r++) {
          var o,
            i = e[r];
          for (o in i) ke(i, o) && (n[o] = fv(n[o], i[o]));
        }
        return n;
      }),
    xv =
      "autoresize_on_init,content_editable_state,convert_fonts_to_spans,inline_styles,padd_empty_with_br,block_elements,boolean_attributes,editor_deselector,editor_selector,elements,file_browser_callback_types,filepicker_validator_handler,force_hex_style_colors,force_p_newlines,gecko_spellcheck,images_dataimg_filter,media_scripts,mode,move_caret_before_on_enter_elements,non_empty_elements,self_closing_elements,short_ended_elements,special,spellchecker_select_languages,spellchecker_whitelist,tab_focus,table_responsive_width,text_block_elements,text_inline_elements,toolbar_drawer,types,validate,whitespace_elements,paste_word_valid_elements,paste_retain_style_properties,paste_convert_word_fake_lists".split(
        ","
      ),
    wv =
      "bbcode,colorpicker,contextmenu,fullpage,legacyoutput,spellchecker,textcolor".split(
        ","
      ),
    Sv = "imagetools,toc".split(","),
    Ev = dt().deviceType,
    kv = Ev.isTouch(),
    Nv = Ev.isPhone(),
    _v = Ev.isTablet(),
    Av = ["lists", "autolink", "autosave"],
    Rv = { table_grid: !1, object_resizing: !1, resize: !1 },
    Dv =
      ((dv = {}),
      {
        add: function (e, t) {
          dv[e] = t;
        },
        get: function (e) {
          return dv[e] || { icons: {} };
        },
        has: function (e) {
          return ke(dv, e);
        },
      }),
    Tv = R(uv, "clientWidth"),
    Ov = R(uv, "clientHeight"),
    Bv = R(sv, "margin-top"),
    Pv = R(sv, "margin-left"),
    Lv = lu.PluginManager,
    Iv = lu.ThemeManager;
  function Mv(r) {
    function o() {
      var e = r.theme;
      return e && e.getWindowManagerImpl
        ? e.getWindowManagerImpl()
        : {
            open: t,
            openUrl: t,
            alert: t,
            confirm: t,
            close: t,
            getParams: t,
            setParams: t,
          };
      function t() {
        throw new Error(
          "Theme did not provide a WindowManager implementation."
        );
      }
    }
    function i(n, r) {
      return function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return r ? r.apply(n, e) : void 0;
      };
    }
    function n(t) {
      r.fire("CloseWindow", { dialog: t }),
        0 ===
          (u = U(u, function (e) {
            return e !== t;
          })).length && r.focus();
    }
    function a(e) {
      r.editorManager.setActive(r), fd(r);
      var t,
        n = e();
      return (t = n), u.push(t), r.fire("OpenWindow", { dialog: t }), n;
    }
    var u = [];
    return (
      r.on("remove", function () {
        Y(u, function (e) {
          o().close(e);
        });
      }),
      {
        open: function (e, t) {
          return a(function () {
            return o().open(e, t, n);
          });
        },
        openUrl: function (e) {
          return a(function () {
            return o().openUrl(e, n);
          });
        },
        alert: function (e, t, n) {
          var r = o();
          r.alert(e, i(n || r, t));
        },
        confirm: function (e, t, n) {
          var r = o();
          r.confirm(e, i(n || r, t));
        },
        close: function () {
          ve.from(u[u.length - 1]).each(function (e) {
            o().close(e), n(e);
          });
        },
      }
    );
  }
  function Fv(e, t) {
    e.notificationManager.open({ type: "error", text: t });
  }
  function Uv(e, t) {
    e._skinLoaded
      ? Fv(e, t)
      : e.on("SkinLoaded", function () {
          Fv(e, t);
        });
  }
  function zv(e, t, n) {
    yf(e, t, { message: n }), console.error(n);
  }
  function Hv(e, t, n) {
    return n
      ? "Failed to load " + e + ": " + n + " from url " + t
      : "Failed to load " + e + " url: " + t;
  }
  function jv(e, t, n) {
    zv(e, "PluginLoadError", Hv("plugin", t, n));
  }
  function Vv(e) {
    var t, n;
    e.contentCSS = e.contentCSS.concat(
      dy(
        e,
        ((n = (t = e).getParam("content_css")),
        X(n)
          ? A(n.split(","), Je)
          : S(n)
          ? n
          : !1 === n || t.inline
          ? []
          : ["default"])
      ),
      dy(e, Os(e))
    );
  }
  function qv() {
    function n(e, t) {
      return { status: e, resultUri: t };
    }
    function t(e) {
      return e in r;
    }
    var r = {};
    return {
      hasBlobUri: t,
      getResultUri: function (e) {
        var t = r[e];
        return t ? t.resultUri : null;
      },
      isPending: function (e) {
        return !!t(e) && 1 === r[e].status;
      },
      isUploaded: function (e) {
        return !!t(e) && 2 === r[e].status;
      },
      markPending: function (e) {
        r[e] = n(1, null);
      },
      markUploaded: function (e, t) {
        r[e] = n(2, t);
      },
      removeFailed: function (e) {
        delete r[e];
      },
      destroy: function () {
        r = {};
      },
    };
  }
  function $v(e) {
    return (
      e + my++ + ("s" + new Date().getTime().toString(36) + t() + t() + t())
    );
    function t() {
      return Math.round(4294967295 * Math.random()).toString(36);
    }
  }
  function Wv() {
    function e(e) {
      return M(n, e).getOrUndefined();
    }
    function i(e) {
      if (!e.blob || !e.base64)
        throw new Error(
          "blob and base64 representations of the image are required for BlobInfo to be created"
        );
      var t = e.id || $v("blobid"),
        n = e.name || t,
        r = e.blob;
      return {
        id: J(t),
        name: J(n),
        filename: J(
          e.filename ||
            n +
              "." +
              ({
                "image/jpeg": "jpg",
                "image/jpg": "jpg",
                "image/gif": "gif",
                "image/png": "png",
                "image/apng": "apng",
                "image/avif": "avif",
                "image/svg+xml": "svg",
                "image/webp": "webp",
                "image/bmp": "bmp",
                "image/tiff": "tiff",
              }[r.type.toLowerCase()] || "dat")
        ),
        blob: J(r),
        base64: J(e.base64),
        blobUri: J(e.blobUri || URL.createObjectURL(r)),
        uri: J(e.uri),
      };
    }
    function t(t) {
      return e(function (e) {
        return e.id() === t;
      });
    }
    var n = [];
    return {
      create: function (e, t, n, r, o) {
        if (X(e)) return i({ id: e, name: r, filename: o, blob: t, base64: n });
        if (h(e)) return i(e);
        throw new Error("Unknown input type");
      },
      add: function (e) {
        t(e.id()) || n.push(e);
      },
      get: t,
      getByUri: function (t) {
        return e(function (e) {
          return e.blobUri() === t;
        });
      },
      getByData: function (t, n) {
        return e(function (e) {
          return e.base64() === t && e.blob().type === n;
        });
      },
      findFirst: e,
      removeByUri: function (t) {
        n = U(n, function (e) {
          return e.blobUri() !== t || void URL.revokeObjectURL(e.blobUri());
        });
      },
      destroy: function () {
        Y(n, function (e) {
          URL.revokeObjectURL(e.blobUri());
        }),
          (n = []);
      },
    };
  }
  function Kv(u, s) {
    function o(e, r, o, t) {
      var i = new XMLHttpRequest();
      i.open("POST", s.url),
        (i.withCredentials = s.credentials),
        (i.upload.onprogress = function (e) {
          t((e.loaded / e.total) * 100);
        }),
        (i.onerror = function () {
          o(
            "Image upload failed due to a XHR Transport error. Code: " +
              i.status
          );
        }),
        (i.onload = function () {
          var e, t, n;
          i.status < 200 || 300 <= i.status
            ? o("HTTP Error: " + i.status)
            : (e = JSON.parse(i.responseText)) && "string" == typeof e.location
            ? r(
                ((t = s.basePath),
                (n = e.location),
                t ? t.replace(/\/$/, "") + "/" + n.replace(/^\//, "") : n)
              )
            : o("Invalid JSON: " + i.responseText);
        });
      var n = new FormData();
      n.append("file", e.blob(), e.filename()), i.send(n);
    }
    function c(e, t) {
      return { url: t, blobInfo: e, status: !0 };
    }
    function l(e, t, n) {
      return {
        url: "",
        blobInfo: e,
        status: !1,
        error: { message: t, options: n },
      };
    }
    function f(e, t) {
      Et.each(d[e], function (e) {
        e(t);
      }),
        delete d[e];
    }
    var d = {};
    return (
      !1 === y(s.handler) && (s.handler = o),
      {
        upload: function (e, t) {
          return s.url || s.handler !== o
            ? ((n = e),
              (r = t),
              (n = Et.grep(e, function (e) {
                return !u.isUploaded(e.blobUri());
              })),
              Nr.all(
                Et.map(n, function (e) {
                  return u.isPending(e.blobUri())
                    ? ((n = e.blobUri()),
                      new Nr(function (e) {
                        (d[n] = d[n] || []), d[n].push(e);
                      }))
                    : ((i = e),
                      (t = s.handler),
                      (a = r),
                      u.markPending(i.blobUri()),
                      new Nr(function (r) {
                        var n;
                        try {
                          var o = function () {
                            n && n.close();
                          };
                          t(
                            i,
                            function (e) {
                              o(),
                                u.markUploaded(i.blobUri(), e),
                                f(i.blobUri(), c(i, e)),
                                r(c(i, e));
                            },
                            function (e, t) {
                              var n = t || {};
                              o(),
                                u.removeFailed(i.blobUri()),
                                f(i.blobUri(), l(i, e, n)),
                                r(l(i, e, n));
                            },
                            function (t) {
                              t < 0 ||
                                100 < t ||
                                ve
                                  .from(n)
                                  .orThunk(function () {
                                    return ve.from(a).map(C);
                                  })
                                  .each(function (e) {
                                    (n = e).progressBar.value(t);
                                  });
                            }
                          );
                        } catch (e) {
                          r(l(i, e.message, {}));
                        }
                      }));
                  var i, t, a, n;
                })
              ))
            : new Nr(function (e) {
                e([]);
              });
          var n, r;
        },
      }
    );
  }
  function Xv(e) {
    return function () {
      return e.notificationManager.open({
        text: e.translate("Image uploading..."),
        type: "info",
        timeout: -1,
        progressBar: !0,
      });
    };
  }
  function Yv(e, t) {
    return Kv(t, {
      url: e.getParam("images_upload_url", "", "string"),
      basePath: e.getParam("images_upload_base_path", "", "string"),
      credentials: e.getParam("images_upload_credentials", !1, "boolean"),
      handler: e.getParam("images_upload_handler", null, "function"),
    });
  }
  function Gv(l) {
    function t(t) {
      return function (e) {
        return l.selection ? t(e) : [];
      };
    }
    function r(e, t, n) {
      for (
        var r = 0;
        -1 !== (r = e.indexOf(t, r)) &&
          ((e = e.substring(0, r) + n + e.substr(r + t.length)),
          (r += n.length - t.length + 1)),
          -1 !== r;

      );
      return e;
    }
    function o(e, t, n) {
      return (
        (e = r(
          e,
          'src="' + t + '"',
          'src="' +
            n +
            '"' +
            (n === xt.transparentSrc ? ' data-mce-placeholder="1"' : "")
        )),
        r(e, 'data-mce-src="' + t + '"', 'data-mce-src="' + n + '"')
      );
    }
    function f(t, n) {
      Y(l.undoManager.data, function (e) {
        "fragmented" === e.type
          ? (e.fragments = A(e.fragments, function (e) {
              return o(e, t, n);
            }))
          : (e.content = o(e.content, t, n));
      });
    }
    function n(n) {
      return (
        (u = u || Yv(l, g)),
        v().then(
          t(function (c) {
            var e = A(c, function (e) {
              return e.blobInfo;
            });
            return u.upload(e, Xv(l)).then(
              t(function (e) {
                var s = [],
                  t = A(e, function (e, t) {
                    var n,
                      r,
                      o,
                      i,
                      a = c[t].blobInfo,
                      u = c[t].image;
                    return (
                      e.status &&
                      l.getParam("images_replace_blob_uris", !0, "boolean")
                        ? (m.removeByUri(u.src),
                          hh(l) ||
                            ((r = u),
                            (o = e.url),
                            (i = l.convertURL(o, "src")),
                            f(r.src, o),
                            l
                              .$(r)
                              .attr({
                                src: l.getParam(
                                  "images_reuse_filename",
                                  !1,
                                  "boolean"
                                )
                                  ? o +
                                    (-1 === o.indexOf("?") ? "?" : "&") +
                                    new Date().getTime()
                                  : o,
                                "data-mce-src": i,
                              })))
                        : e.error &&
                          (e.error.options.remove &&
                            (f(u.getAttribute("src"), xt.transparentSrc),
                            s.push(u)),
                          (n = e.error.message),
                          Uv(
                            l,
                            cu.translate(["Failed to upload image: {0}", n])
                          )),
                      {
                        element: u,
                        status: e.status,
                        uploadUri: e.url,
                        blobInfo: a,
                      }
                    );
                  });
                return (
                  0 < t.length && h.fireIfChanged(),
                  0 < s.length &&
                    (hh(l)
                      ? console.error(
                          "Removing images on failed uploads is currently unsupported for RTC"
                        )
                      : l.undoManager.transact(function () {
                          Y(s, function (e) {
                            l.dom.remove(e), m.removeByUri(e.src);
                          });
                        })),
                  n && n(t),
                  t
                );
              })
            );
          })
        )
      );
    }
    function e(e) {
      if (_s(l)) return n(e);
    }
    function i(t) {
      return (
        !1 !==
          j(p, function (e) {
            return e(t);
          }) &&
        (0 !== t.getAttribute("src").indexOf("data:") ||
          l.getParam("images_dataimg_filter", w, "function")(t))
      );
    }
    function a(e) {
      return e.replace(/src="(blob:[^"]+)"/g, function (e, n) {
        var t = g.getResultUri(n);
        if (t) return 'src="' + t + '"';
        var r =
          (r = m.getByUri(n)) ||
          L(
            l.editorManager.get(),
            function (e, t) {
              return (
                e || (t.editorUpload && t.editorUpload.blobCache.getByUri(n))
              );
            },
            null
          );
        return r
          ? 'src="data:' + r.blob().type + ";base64," + r.base64() + '"'
          : e;
      });
    }
    var u,
      s,
      c,
      d,
      m = Wv(),
      g = qv(),
      p = [],
      h =
        ((d = iu(null)),
        (c = l).on("change AddUndo", function (e) {
          d.set(_e({}, e.level));
        }),
        {
          fireIfChanged: function () {
            var t = c.undoManager.data;
            Z(t)
              .filter(function (e) {
                return !fh(d.get(), e);
              })
              .each(function (e) {
                c.setDirty(!0),
                  c.fire("change", {
                    level: e,
                    lastLevel: G(t, t.length - 2).getOrNull(),
                  });
              });
          },
        }),
      v = function () {
        return (s = s || qh(g, m)).findAll(l.getBody(), i).then(
          t(function (e) {
            return (
              (e = U(e, function (e) {
                return "string" != typeof e || void Uv(l, e);
              })),
              hh(l) ||
                Y(e, function (e) {
                  f(e.image.src, e.blobInfo.blobUri()),
                    (e.image.src = e.blobInfo.blobUri()),
                    e.image.removeAttribute("data-mce-src");
                }),
              e
            );
          })
        );
      };
    return (
      l.on("SetContent", function () {
        (_s(l) ? e : v)();
      }),
      l.on("RawSaveContent", function (e) {
        e.content = a(e.content);
      }),
      l.on("GetContent", function (e) {
        e.source_view ||
          "raw" === e.format ||
          "tree" === e.format ||
          (e.content = a(e.content));
      }),
      l.on("PostRender", function () {
        l.parser.addNodeFilter("img", function (e) {
          Y(e, function (e) {
            var t,
              n = e.attr("src");
            m.getByUri(n) || ((t = g.getResultUri(n)) && e.attr("src", t));
          });
        });
      }),
      {
        blobCache: m,
        addFilter: function (e) {
          p.push(e);
        },
        uploadImages: n,
        uploadImagesAuto: e,
        scanForImages: v,
        destroy: function () {
          m.destroy(), g.destroy(), (s = u = null);
        },
      }
    );
  }
  function Jv(e, t) {
    function m(e) {
      o = "string" == typeof e ? { name: e, classes: [], attrs: {} } : e;
      var t,
        n = py.create(o.name),
        r = n;
      return (
        (t = o).classes.length && py.addClass(r, t.classes.join(" ")),
        py.setAttribs(r, t.attrs),
        n
      );
    }
    var n,
      o,
      r,
      g = (t && t.schema) || ro({}),
      p = function (n, e, t) {
        var r,
          o,
          i,
          a,
          u,
          s,
          c,
          l = 0 < e.length && e[0],
          f = l && l.name,
          d =
            ((a = f),
            (u = "string" != typeof (i = n) ? i.nodeName.toLowerCase() : i),
            !(
              !(c = (s = g.getElementRule(u)) && s.parentsRequired) || !c.length
            ) && (a && -1 !== Et.inArray(c, a) ? a : c[0]));
        if (d) f === d ? ((o = e[0]), (e = e.slice(1))) : (o = d);
        else if (l) (o = e[0]), (e = e.slice(1));
        else if (!t) return n;
        return (
          o && (r = m(o)).appendChild(n),
          t &&
            (r || (r = py.create("div")).appendChild(n),
            Et.each(t, function (e) {
              var t = m(e);
              r.insertBefore(t, n);
            })),
          p(r, e, o && o.siblings)
        );
      };
    return e && e.length
      ? ((n = m((o = e[0]))),
        (r = py.create("div")).appendChild(p(n, e.slice(1), o.siblings)),
        r)
      : "";
  }
  function Qv(e) {
    var t,
      a = { classes: [], attrs: {} };
    return (
      "*" !== (e = a.selector = Et.trim(e)) &&
        (t = e.replace(
          /(?:([#\.]|::?)([\w\-]+)|(\[)([^\]]+)\]?)/g,
          function (e, t, n, r, o) {
            switch (t) {
              case "#":
                a.attrs.id = n;
                break;
              case ".":
                a.classes.push(n);
                break;
              case ":":
                -1 !==
                  Et.inArray(
                    "checked disabled enabled read-only required".split(" "),
                    n
                  ) && (a.attrs[n] = n);
            }
            var i;
            return (
              "[" !== r ||
                ((i = o.match(/([\w\-]+)(?:\=\"([^\"]+))?/)) &&
                  (a.attrs[i[1]] = i[2])),
              ""
            );
          }
        )),
      (a.name = t || "div"),
      a
    );
  }
  function Zv(n, e) {
    var r,
      t,
      o = "",
      i =
        ((t = n.getParam(
          "preview_styles",
          "font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow"
        )),
        X(t) ? t : "");
    if ("" === i) return "";
    function a(e) {
      return e.replace(/%(\w+)/g, "");
    }
    if ("string" == typeof e) {
      if (!(e = n.formatter.get(e))) return;
      e = e[0];
    }
    if ("preview" in e) {
      var u = ue(e, "preview");
      if (fn(u, !1)) return "";
      i = u.getOr(i);
    }
    var s,
      c = e.block || e.inline || "span",
      l =
        (s = e.selector) && "string" == typeof s
          ? ((s = (s = s.split(/\s*,\s*/)[0]).replace(
              /\s*(~\+|~|\+|>)\s*/g,
              "$1"
            )),
            Et.map(s.split(/(?:>|\s+(?![^\[\]]+\]))/), function (e) {
              var t = Et.map(e.split(/(?:~\+|~|\+)/), Qv),
                n = t.pop();
              return t.length && (n.siblings = t), n;
            }).reverse())
          : [],
      f = l.length
        ? (l[0].name || (l[0].name = c), (c = e.selector), Jv(l, n))
        : Jv([c], n),
      d = py.select(c, f)[0] || f.firstChild;
    return (
      gy(e.styles, function (e, t) {
        var n = a(e);
        n && py.setStyle(d, t, n);
      }),
      gy(e.attributes, function (e, t) {
        var n = a(e);
        n && py.setAttrib(d, t, n);
      }),
      gy(e.classes, function (e) {
        var t = a(e);
        py.hasClass(d, t) || py.addClass(d, t);
      }),
      n.fire("PreviewFormats"),
      py.setStyles(f, { position: "absolute", left: -65535 }),
      n.getBody().appendChild(f),
      (r = py.getStyle(n.getBody(), "fontSize", !0)),
      (r = /px$/.test(r) ? parseInt(r, 10) : 0),
      gy(i.split(" "), function (e) {
        var t = py.getStyle(d, e, !0);
        if (
          !(
            ("background-color" === e &&
              /transparent|rgba\s*\([^)]+,\s*0\)/.test(t) &&
              ((t = py.getStyle(n.getBody(), e, !0)),
              "#ffffff" === py.toHex(t).toLowerCase())) ||
            ("color" === e && "#000000" === py.toHex(t).toLowerCase())
          )
        ) {
          if ("font-size" === e && /em|%$/.test(t)) {
            if (0 === r) return;
            t = (parseFloat(t) / (/%$/.test(t) ? 100 : 1)) * r + "px";
          }
          "border" === e && t && (o += "padding:0 2px;"),
            (o += e + ":" + t + ";");
        }
      }),
      n.fire("AfterPreviewFormats"),
      py.remove(f),
      o
    );
  }
  function eb(c) {
    var e,
      r,
      t,
      n,
      o,
      i,
      a =
        ((n = {}),
        (o = function (e, t) {
          e &&
            (X(e)
              ? (Y((t = !S(t) ? [t] : t), function (e) {
                  b(e.deep) && (e.deep = !ml(e)),
                    b(e.split) && (e.split = !ml(e) || gl(e)),
                    b(e.remove) && ml(e) && !gl(e) && (e.remove = "none"),
                    ml(e) && gl(e) && ((e.mixed = !0), (e.block_expand = !0)),
                    X(e.classes) && (e.classes = e.classes.split(/\s+/));
                }),
                (n[e] = t))
              : ne(e, function (e, t) {
                  o(t, e);
                }));
        })(
          ((r = (e = c).dom),
          (t = {
            valigntop: [
              { selector: "td,th", styles: { verticalAlign: "top" } },
            ],
            valignmiddle: [
              { selector: "td,th", styles: { verticalAlign: "middle" } },
            ],
            valignbottom: [
              { selector: "td,th", styles: { verticalAlign: "bottom" } },
            ],
            alignleft: [
              {
                selector: "figure.image",
                collapsed: !1,
                classes: "align-left",
                ceFalseOverride: !0,
                preview: "font-family font-size",
              },
              {
                selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                styles: { textAlign: "left" },
                inherit: !1,
                preview: !1,
                defaultBlock: "div",
              },
              {
                selector: "img,table,audio,video",
                collapsed: !1,
                styles: { float: "left" },
                preview: "font-family font-size",
              },
            ],
            aligncenter: [
              {
                selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                styles: { textAlign: "center" },
                inherit: !1,
                preview: "font-family font-size",
                defaultBlock: "div",
              },
              {
                selector: "figure.image",
                collapsed: !1,
                classes: "align-center",
                ceFalseOverride: !0,
                preview: "font-family font-size",
              },
              {
                selector: "img,audio,video",
                collapsed: !1,
                styles: {
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                },
                preview: !1,
              },
              {
                selector: "table",
                collapsed: !1,
                styles: { marginLeft: "auto", marginRight: "auto" },
                preview: "font-family font-size",
              },
            ],
            alignright: [
              {
                selector: "figure.image",
                collapsed: !1,
                classes: "align-right",
                ceFalseOverride: !0,
                preview: "font-family font-size",
              },
              {
                selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                styles: { textAlign: "right" },
                inherit: !1,
                preview: "font-family font-size",
                defaultBlock: "div",
              },
              {
                selector: "img,table,audio,video",
                collapsed: !1,
                styles: { float: "right" },
                preview: "font-family font-size",
              },
            ],
            alignjustify: [
              {
                selector: "figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",
                styles: { textAlign: "justify" },
                inherit: !1,
                defaultBlock: "div",
                preview: "font-family font-size",
              },
            ],
            bold: [
              {
                inline: "strong",
                remove: "all",
                preserve_attributes: ["class", "style"],
              },
              { inline: "span", styles: { fontWeight: "bold" } },
              {
                inline: "b",
                remove: "all",
                preserve_attributes: ["class", "style"],
              },
            ],
            italic: [
              {
                inline: "em",
                remove: "all",
                preserve_attributes: ["class", "style"],
              },
              { inline: "span", styles: { fontStyle: "italic" } },
              {
                inline: "i",
                remove: "all",
                preserve_attributes: ["class", "style"],
              },
            ],
            underline: [
              {
                inline: "span",
                styles: { textDecoration: "underline" },
                exact: !0,
              },
              {
                inline: "u",
                remove: "all",
                preserve_attributes: ["class", "style"],
              },
            ],
            strikethrough: [
              {
                inline: "span",
                styles: { textDecoration: "line-through" },
                exact: !0,
              },
              {
                inline: "strike",
                remove: "all",
                preserve_attributes: ["class", "style"],
              },
              {
                inline: "s",
                remove: "all",
                preserve_attributes: ["class", "style"],
              },
            ],
            forecolor: {
              inline: "span",
              styles: { color: "%value" },
              links: !0,
              remove_similar: !0,
              clear_child_styles: !0,
            },
            hilitecolor: {
              inline: "span",
              styles: { backgroundColor: "%value" },
              links: !0,
              remove_similar: !0,
              clear_child_styles: !0,
            },
            fontname: {
              inline: "span",
              toggle: !1,
              styles: { fontFamily: "%value" },
              clear_child_styles: !0,
            },
            fontsize: {
              inline: "span",
              toggle: !1,
              styles: { fontSize: "%value" },
              clear_child_styles: !0,
            },
            lineheight: {
              selector: "h1,h2,h3,h4,h5,h6,p,li,td,th,div",
              defaultBlock: "p",
              styles: { lineHeight: "%value" },
            },
            fontsize_class: { inline: "span", attributes: { class: "%value" } },
            blockquote: { block: "blockquote", wrapper: !0, remove: "all" },
            subscript: { inline: "sub" },
            superscript: { inline: "sup" },
            code: { inline: "code" },
            link: {
              inline: "a",
              selector: "a",
              remove: "all",
              split: !0,
              deep: !0,
              onmatch: function (e, t, n) {
                return zn(e) && e.hasAttribute("href");
              },
              onformat: function (n, e, t) {
                Et.each(t, function (e, t) {
                  r.setAttrib(n, t, e);
                });
              },
            },
            lang: {
              inline: "span",
              clear_child_styles: !0,
              remove_similar: !0,
              attributes: {
                lang: "%value",
                "data-mce-lang": function (e) {
                  var t;
                  return null !== (t = null == e ? void 0 : e.customValue) &&
                    void 0 !== t
                    ? t
                    : null;
                },
              },
            },
            removeformat: [
              {
                selector:
                  "b,strong,em,i,font,u,strike,s,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins,small",
                remove: "all",
                split: !0,
                expand: !1,
                block_expand: !0,
                deep: !0,
              },
              {
                selector: "span",
                attributes: ["style", "class"],
                remove: "empty",
                split: !0,
                expand: !1,
                deep: !0,
              },
              {
                selector: "*",
                attributes: ["style", "class"],
                split: !1,
                expand: !1,
                deep: !0,
              },
            ],
          }),
          Et.each(
            "p h1 h2 h3 h4 h5 h6 div address pre dt dd samp".split(/\s/),
            function (e) {
              t[e] = { block: e, remove: "all" };
            }
          ),
          t)
        ),
        o(e.getParam("formats")),
        {
          get: function (e) {
            return V(e) ? n[e] : n;
          },
          has: function (e) {
            return ke(n, e);
          },
          register: o,
          unregister: function (e) {
            return e && n[e] && delete n[e], n;
          },
        }),
      l = iu(null);
    return (
      (function (e) {
        e.addShortcut("meta+b", "", "Bold"),
          e.addShortcut("meta+i", "", "Italic"),
          e.addShortcut("meta+u", "", "Underline");
        for (var t = 1; t <= 6; t++)
          e.addShortcut("access+" + t, "", ["FormatBlock", !1, "h" + t]);
        e.addShortcut("access+7", "", ["FormatBlock", !1, "p"]),
          e.addShortcut("access+8", "", ["FormatBlock", !1, "div"]),
          e.addShortcut("access+9", "", ["FormatBlock", !1, "address"]);
      })(c),
      (i = c).on("mouseup keydown", function (e) {
        var t = i,
          n = e.keyCode,
          r = t.selection,
          o = t.getBody();
        Hg(t, null, !1),
          (8 !== n && 46 !== n) ||
            !r.isCollapsed() ||
            r.getStart().innerHTML !== Cp ||
            Hg(t, Vc(o, r.getStart())),
          (37 !== n && 39 !== n) || Hg(t, Vc(o, r.getStart()));
      }),
      {
        get: a.get,
        has: a.has,
        register: a.register,
        unregister: a.unregister,
        apply: function (e, t, n) {
          var r = e,
            o = t,
            i = n;
          yh(c).formatter.apply(r, o, i);
        },
        remove: function (e, t, n, r) {
          var o = e,
            i = t,
            a = n,
            u = r;
          yh(c).formatter.remove(o, i, a, u);
        },
        toggle: function (e, t, n) {
          var r = e,
            o = t,
            i = n;
          yh(c).formatter.toggle(r, o, i);
        },
        match: function (e, t, n, r) {
          return (
            (o = e),
            (i = t),
            (a = n),
            (u = r),
            yh(c).formatter.match(o, i, a, u)
          );
          var o, i, a, u;
        },
        closest: function (e) {
          return (t = e), yh(c).formatter.closest(t);
          var t;
        },
        matchAll: function (e, t) {
          return (n = e), (r = t), yh(c).formatter.matchAll(n, r);
          var n, r;
        },
        matchNode: function (e, t, n, r) {
          return (
            (o = e),
            (i = t),
            (a = n),
            (u = r),
            yh(c).formatter.matchNode(o, i, a, u)
          );
          var o, i, a, u;
        },
        canApply: function (e) {
          return (t = e), yh(c).formatter.canApply(t);
          var t;
        },
        formatChanged: function (e, t, n, r) {
          return (
            (o = l),
            (i = e),
            (a = t),
            (u = n),
            (s = r),
            yh(c).formatter.formatChanged(o, i, a, u, s)
          );
          var o, i, a, u, s;
        },
        getCssText: R(Zv, c),
      }
    );
  }
  function tb(e) {
    switch (e.toLowerCase()) {
      case "undo":
      case "redo":
      case "mcerepaint":
      case "mcefocus":
        return 1;
      default:
        return;
    }
  }
  function nb(s) {
    var e,
      n,
      r,
      o,
      i,
      c = fu(),
      l = iu(0),
      f = iu(0),
      d = {
        data: [],
        typing: !1,
        beforeChange: function () {
          var e = l,
            t = c;
          yh(s).undoManager.beforeChange(e, t);
        },
        add: function (e, t) {
          return (
            (n = d),
            (r = f),
            (o = l),
            (i = c),
            (a = e),
            (u = t),
            yh(s).undoManager.add(n, r, o, i, a, u)
          );
          var n, r, o, i, a, u;
        },
        undo: function () {
          return (e = d), (t = l), (n = f), yh(s).undoManager.undo(e, t, n);
          var e, t, n;
        },
        redo: function () {
          return (e = f), (t = d.data), yh(s).undoManager.redo(e, t);
          var e, t;
        },
        clear: function () {
          var e = d,
            t = f;
          yh(s).undoManager.clear(e, t);
        },
        reset: function () {
          var e = d;
          yh(s).undoManager.reset(e);
        },
        hasUndo: function () {
          return (e = d), (t = f), yh(s).undoManager.hasUndo(e, t);
          var e, t;
        },
        hasRedo: function () {
          return (e = d), (t = f), yh(s).undoManager.hasRedo(e, t);
          var e, t;
        },
        transact: function (e) {
          return (t = d), (n = l), (r = e), yh(s).undoManager.transact(t, n, r);
          var t, n, r;
        },
        ignore: function (e) {
          var t = l,
            n = e;
          yh(s).undoManager.ignore(t, n);
        },
        extra: function (e, t) {
          var n = d,
            r = f,
            o = e,
            i = t;
          yh(s).undoManager.extra(n, r, o, i);
        },
      };
    return (
      hh(s) ||
        ((r = d),
        (o = l),
        (i = iu(!1)),
        (n = s).on("init", function () {
          r.add();
        }),
        n.on("BeforeExecCommand", function (e) {
          tb(e.command) || (gh(r, o), r.beforeChange());
        }),
        n.on("ExecCommand", function (e) {
          tb(e.command) || a(e);
        }),
        n.on("ObjectResizeStart cut", function () {
          r.beforeChange();
        }),
        n.on("SaveContent ObjectResized blur", a),
        n.on("dragend", a),
        n.on("keyup", function (e) {
          var t = e.keyCode;
          e.isDefaultPrevented() ||
            (((33 <= t && t <= 36) ||
              (37 <= t && t <= 40) ||
              45 === t ||
              e.ctrlKey) &&
              (a(), n.nodeChanged()),
            (46 !== t && 8 !== t) || n.nodeChanged(),
            i.get() &&
              r.typing &&
              !1 === fh(uh(n), r.data[0]) &&
              (!1 === n.isDirty() &&
                (n.setDirty(!0),
                n.fire("change", { level: r.data[0], lastLevel: null })),
              n.fire("TypingUndo"),
              i.set(!1),
              n.nodeChanged()));
        }),
        n.on("keydown", function (e) {
          var t,
            n = e.keyCode;
          e.isDefaultPrevented() ||
            ((33 <= n && n <= 36) || (37 <= n && n <= 40) || 45 === n
              ? r.typing && a(e)
              : ((t = (e.ctrlKey && !e.altKey) || e.metaKey),
                !(n < 16 || 20 < n) ||
                  224 === n ||
                  91 === n ||
                  r.typing ||
                  t ||
                  (r.beforeChange(), mh(r, !0, o), r.add({}, e), i.set(!0))));
        }),
        n.on("mousedown", function (e) {
          r.typing && a(e);
        }),
        n.on("input", function (e) {
          e.inputType &&
            ("insertReplacementText" === e.inputType ||
              ("insertText" === e.inputType && null === e.data) ||
              "insertFromPaste" === e.inputType ||
              "insertFromDrop" === e.inputType) &&
            a(e);
        }),
        n.on("AddUndo Undo Redo ClearUndos", function (e) {
          e.isDefaultPrevented() || n.nodeChanged();
        })),
      (e = s).addShortcut("meta+z", "", "Undo"),
      e.addShortcut("meta+y,meta+shift+z", "", "Redo"),
      d
    );
    function a(e) {
      mh(r, !1, o), r.add({}, e);
    }
  }
  function rb(e) {
    return "keydown" === e.type || "keyup" === e.type;
  }
  function ob(e) {
    var t = e.keyCode;
    return t === Lf.BACKSPACE || t === Lf.DELETE;
  }
  function ib(e, t) {
    return ze(
      kt.fromDom(t),
      e.getParam(
        "inline_boundaries_selector",
        "a[href],code,.mce-annotation",
        "string"
      )
    );
  }
  function ab(e, t, n) {
    var r,
      o,
      i = ((r = e), (o = t), U(Za.DOM.getParents(n.container(), "*", o), r));
    return ve.from(i[i.length - 1]);
  }
  function ub(e, t) {
    if (!t) return t;
    var n = t.container(),
      r = t.offset();
    return e
      ? Lr(n)
        ? jn(n.nextSibling)
          ? ss(n.nextSibling, 0)
          : ss.after(n)
        : Fr(t)
        ? ss(n, r + 1)
        : t
      : Lr(n)
      ? jn(n.previousSibling)
        ? ss(n.previousSibling, n.previousSibling.data.length)
        : ss.before(n)
      : Ur(t)
      ? ss(n, r - 1)
      : t;
  }
  function sb(e) {
    return go(e) || ho(e);
  }
  function cb(e, t) {
    return Ve(e, t)
      ? pr(
          t,
          sb,
          ((n = e),
          function (e) {
            return je(n, kt.fromDom(e.dom.parentNode));
          })
        )
      : ve.none();
    var n;
  }
  function lb(e) {
    var t, n, r;
    e.dom.isEmpty(e.getBody()) &&
      (e.setContent(""),
      (r =
        (n = (t = e).getBody()).firstChild && t.dom.isBlock(n.firstChild)
          ? n.firstChild
          : n),
      t.selection.setCursorLocation(r, 0));
  }
  function fb(e, t) {
    return { from: e, to: t };
  }
  function db(e, t) {
    return cb(kt.fromDom(e), kt.fromDom(t.container())).map(function (e) {
      return { block: e, position: t };
    });
  }
  function mb(e) {
    var t,
      n = z((t = Dn(e)), mo).fold(J(t), function (e) {
        return t.slice(0, e);
      });
    return Y(n, Ln), n;
  }
  function gb(e, t) {
    return M(ym(t, e).reverse(), function (e) {
      return Wr(e);
    }).each(Ln);
  }
  function pb(e, t, n, r) {
    if (Wr(n)) return hm(n), nf(n.dom);
    0 ===
      U(Lt(r), function (e) {
        return !Wr(e);
      }).length &&
      Wr(t) &&
      qt(r, kt.fromTag("br"));
    var o = tf(n.dom, ss.before(r.dom));
    return (
      Y(mb(t), function (e) {
        qt(r, e);
      }),
      gb(e, t),
      o
    );
  }
  function hb(e, t, n) {
    if (Wr(n)) return Ln(n), Wr(t) && hm(t), nf(t.dom);
    var r = rf(n.dom);
    return (
      Y(mb(t), function (e) {
        Pn(n, e);
      }),
      gb(e, t),
      r
    );
  }
  function vb(e, t) {
    Hc(e, t.dom)
      .map(function (e) {
        return e.getNode();
      })
      .map(kt.fromDom)
      .filter(Br)
      .each(Ln);
  }
  function bb(e, t, n) {
    return (
      vb(!0, t),
      vb(!1, n),
      (Ve((o = n), (r = t))
        ? ((i = ym(r, o)), ve.from(i[i.length - 1]))
        : ve.none()
      ).fold(R(hb, e, t, n), R(pb, e, t, n))
    );
    var r, o, i;
  }
  function yb(e, t, n, r) {
    return t ? bb(e, r, n) : bb(e, n, r);
  }
  function Cb(t, n) {
    var e,
      r,
      o,
      i,
      a,
      u,
      s,
      c = kt.fromDom(t.getBody()),
      l =
        ((e = c.dom),
        (r = n),
        ((o = t.selection.getRng()).collapsed
          ? ((a = r),
            (u = db((i = e), ss.fromRangeStart(o))),
            (s = u.bind(function (e) {
              return Ql(a, i, e.position).bind(function (e) {
                return db(i, e).map(function (e) {
                  return (
                    (t = i),
                    (n = a),
                    Wn((r = e).position.getNode()) && !1 === Wr(r.block)
                      ? Hc(!1, r.block.dom)
                          .bind(function (e) {
                            return e.isEqual(r.position)
                              ? Ql(n, t, e).bind(function (e) {
                                  return db(t, e);
                                })
                              : ve.some(r);
                          })
                          .getOr(r)
                      : r
                  );
                  var t, n, r;
                });
              });
            })),
            dn(u, s, fb).filter(function (e) {
              return (
                !1 === je(e.from.block, e.to.block) &&
                Ot((n = e).from.block)
                  .bind(function (t) {
                    return Ot(n.to.block).filter(function (e) {
                      return je(t, e);
                    });
                  })
                  .isSome() &&
                !1 === Yn((t = e).from.block.dom) &&
                !1 === Yn(t.to.block.dom)
              );
              var t, n;
            }))
          : ve.none()
        ).bind(function (e) {
          return yb(c, n, e.from.block, e.to.block);
        }));
    return (
      l.each(function (e) {
        t.selection.setRng(e.toRange());
      }),
      l.isSome()
    );
  }
  function xb(e, t) {
    var n = kt.fromDom(t),
      r = R(je, e);
    return gr(n, bo, r).isSome();
  }
  function wb(e) {
    var n,
      r,
      o,
      t,
      i,
      a,
      u,
      s,
      c,
      l,
      f = kt.fromDom(e.getBody()),
      d = e.selection.getRng();
    return (
      (a = d),
      (c = tf((i = f).dom, ss.fromRangeStart(a)).isNone()),
      (l = ef(i.dom, ss.fromRangeEnd(a)).isNone()),
      !xb((u = i), (s = a).startContainer) && !xb(u, s.endContainer) && c && l
        ? ((t = e).setContent(""), t.selection.setCursorLocation(), !0)
        : ((n = f),
          (r = e.selection),
          (o = r.getRng()),
          dn(
            cb(n, kt.fromDom(o.startContainer)),
            cb(n, kt.fromDom(o.endContainer)),
            function (e, t) {
              return (
                !1 === je(e, t) &&
                (o.deleteContents(),
                yb(n, !0, e, t).each(function (e) {
                  r.setRng(e.toRange());
                }),
                !0)
              );
            }
          ).getOr(!1))
    );
  }
  function Sb(e, t) {
    return !e.selection.isCollapsed() && wb(e);
  }
  function Eb(e, t, n, r, o) {
    return ve.from(t._selectionOverrides.showCaret(e, n, r, o));
  }
  function kb(e, t) {
    var n, r;
    return e.fire("BeforeObjectSelected", { target: t }).isDefaultPrevented()
      ? ve.none()
      : ve.some(((r = (n = t).ownerDocument.createRange()).selectNode(n), r));
  }
  function Nb(e, t, n) {
    var r = tc(1, e.getBody(), t),
      o = ss.fromRangeStart(r),
      i = o.getNode();
    if (Ec(i)) return Eb(1, e, i, !o.isAtEnd(), !1);
    var a = o.getNode(!0);
    if (Ec(a)) return Eb(1, e, a, !1, !1);
    var u = e.dom.getParent(o.getNode(), function (e) {
      return wy(e) || xy(e);
    });
    return Ec(u) ? Eb(1, e, u, !1, n) : ve.none();
  }
  function _b(e, t, n) {
    return t.collapsed ? Nb(e, t, n).getOr(t) : t;
  }
  function Ab(e) {
    return rp(e) || Zg(e);
  }
  function Rb(e) {
    return op(e) || ep(e);
  }
  function Db(n, r, e, t, o, i) {
    var a, u;
    return (
      Eb(t, n, i.getNode(!o), o, !0).each(function (e) {
        var t;
        r.collapsed
          ? ((t = r.cloneRange()),
            o
              ? t.setEnd(e.startContainer, e.startOffset)
              : t.setStart(e.endContainer, e.endOffset),
            t.deleteContents())
          : r.deleteContents(),
          n.selection.setRng(e);
      }),
      (a = n.dom),
      jn((u = e)) && 0 === u.data.length && a.remove(u),
      !0
    );
  }
  function Tb(e, t) {
    var n = e.selection.getRng();
    if (!jn(n.commonAncestorContainer)) return !1;
    var r = t ? uc.Forwards : uc.Backwards,
      o = Ic(e.getBody()),
      i = R(ic, t ? o.next : o.prev),
      a = t ? Ab : Rb,
      u = rc(r, e.getBody(), n),
      s = ub(t, i(u));
    if (!s || !ac(u, s)) return !1;
    if (a(s)) return Db(e, n, u.getNode(), r, t, s);
    var c = i(s);
    return !!(c && a(c) && ac(s, c)) && Db(e, n, u.getNode(), r, t, c);
  }
  function Ob(l, f, d) {
    return Ql(f, l, d).bind(function (e) {
      return (
        (s = e.getNode()),
        bo(kt.fromDom(s)) ||
        ho(kt.fromDom(s)) ||
        ((o = l),
        (u = e),
        nc(!(i = f), (a = d)).fold(function () {
          return nc(i, u).fold(D, c);
        }, c))
          ? ve.none()
          : (f && Yn(e.getNode())) || (!1 === f && Yn(e.getNode(!0)))
          ? ((t = l),
            (n = d),
            (r = e.getNode(!1 === f)),
            cb(kt.fromDom(t), kt.fromDom(n.getNode()))
              .map(function (e) {
                return Wr(e) ? Sy.remove(e.dom) : Sy.moveToElement(r);
              })
              .orThunk(function () {
                return ve.some(Sy.moveToElement(r));
              }))
          : (f && op(d)) || (!1 === f && rp(d))
          ? ve.some(Sy.moveToPosition(e))
          : ve.none()
      );
      var t, n, r, o, i, a, u, s;
      function c(e) {
        return Or(kt.fromDom(e)) && !Js(a, u, o);
      }
    });
  }
  function Bb(e, t) {
    return ve.from(vf(e.getBody(), t));
  }
  function Pb(m, g) {
    var e = m.selection.getNode();
    return Bb(m, e)
      .filter(Yn)
      .fold(function () {
        return (
          (s = m.getBody()),
          (l = tc((c = g) ? 1 : -1, s, m.selection.getRng())),
          (f = ss.fromRangeStart(l)),
          (d = kt.fromDom(s)),
          (!1 === c && op(f)
            ? ve.some(Sy.remove(f.getNode(!0)))
            : c && rp(f)
            ? ve.some(Sy.remove(f.getNode()))
            : !1 === c && rp(f) && _m(d, f)
            ? cp(d, f).map(function (e) {
                return Sy.remove(e.getNode());
              })
            : c && op(f) && Nm(d, f)
            ? lp(d, f).map(function (e) {
                return Sy.remove(e.getNode());
              })
            : ((r = s),
              (e = c),
              (a = (o = f).getNode(!1 === (i = e))),
              (u = i ? "after" : "before"),
              zn(a) && a.getAttribute("data-mce-caret") === u
                ? ((n = o.getNode(!1 === (t = e))),
                  (t && Yn(n.nextSibling)
                    ? ve.some(Sy.moveToElement(n.nextSibling))
                    : !1 === t && Yn(n.previousSibling)
                    ? ve.some(Sy.moveToElement(n.previousSibling))
                    : ve.none()
                  ).fold(function () {
                    return Ob(r, e, o);
                  }, ve.some))
                : Ob(r, e, o).bind(function (e) {
                    return (
                      (t = r),
                      (n = o),
                      e.fold(
                        function (e) {
                          return ve.some(Sy.remove(e));
                        },
                        function (e) {
                          return ve.some(Sy.moveToElement(e));
                        },
                        function (e) {
                          return Js(n, e, t)
                            ? ve.none()
                            : ve.some(Sy.moveToPosition(e));
                        }
                      )
                    );
                    var t, n;
                  }))
          ).exists(function (e) {
            return e.fold(
              function (e) {
                return (
                  o._selectionOverrides.hideFakeCaret(),
                  Qm(o, i, kt.fromDom(e)),
                  !0
                );
              },
              ((r = i = g),
              function (e) {
                var t = r ? ss.before(e) : ss.after(e);
                return n.selection.setRng(t.toRange()), !0;
              }),
              ((t = n = o = m),
              function (e) {
                return t.selection.setRng(e.toRange()), !0;
              })
            );
            var t, n, r, o, i;
          })
        );
        var r, e, o, t, n, i, a, u, s, c, l, f, d;
      }, w);
  }
  function Lb(e, t) {
    var n = e.selection.getNode();
    return (
      !(!Yn(n) || Gn(n)) &&
      Bb(e, n.parentNode)
        .filter(Yn)
        .fold(function () {
          return (
            Y(bu(kt.fromDom(e.getBody()), ".mce-offscreen-selection"), Ln),
            Qm(e, t, kt.fromDom(e.selection.getNode())),
            lb(e),
            !0
          );
        }, w)
    );
  }
  function Ib(e) {
    var t,
      n = e.dom,
      r = e.selection,
      o = vf(e.getBody(), r.getNode());
    return (
      Xn(o) &&
        n.isBlock(o) &&
        n.isEmpty(o) &&
        ((t = n.create("br", { "data-mce-bogus": "1" })),
        n.setHTML(o, ""),
        o.appendChild(t),
        r.setRng(ss.before(t).toRange())),
      !0
    );
  }
  function Mb(e, t) {
    return (e.selection.isCollapsed() ? Pb : Lb)(e, t);
  }
  function Fb(e, t) {
    return (
      !!e.selection.isCollapsed() &&
      ((n = e),
      (r = t),
      (o = ss.fromRangeStart(n.selection.getRng())),
      Ql(r, n.getBody(), o)
        .filter(function (e) {
          return (r ? Jg : Qg)(e);
        })
        .bind(function (e) {
          return ve.from(Qs(r ? 0 : -1, e));
        })
        .exists(function (e) {
          return n.selection.select(e), !0;
        }))
    );
    var n, r, o;
  }
  function Ub(e) {
    return Ey(e) && e.data[0] === wo;
  }
  function zb(e) {
    return Ey(e) && e.data[e.data.length - 1] === wo;
  }
  function Hb(e) {
    return e.ownerDocument.createTextNode(wo);
  }
  function jb(e, t) {
    return (
      e
        ? function (e) {
            if (Ey(e.previousSibling))
              return (
                zb(e.previousSibling) || e.previousSibling.appendData(wo),
                e.previousSibling
              );
            if (Ey(e)) return Ub(e) || e.insertData(0, wo), e;
            var t = Hb(e);
            return e.parentNode.insertBefore(t, e), t;
          }
        : function (e) {
            if (Ey(e.nextSibling))
              return (
                Ub(e.nextSibling) || e.nextSibling.insertData(0, wo),
                e.nextSibling
              );
            if (Ey(e)) return zb(e) || e.appendData(wo), e;
            var t = Hb(e);
            return (
              e.nextSibling
                ? e.parentNode.insertBefore(t, e.nextSibling)
                : e.parentNode.appendChild(t),
              t
            );
          }
    )(t);
  }
  function Vb(e, t) {
    return jn(e.container()) ? jb(t, e.container()) : jb(t, e.getNode());
  }
  function qb(e, t) {
    var n = t.get();
    return n && e.container() === n && Lr(n);
  }
  function $b(n, e) {
    return e.fold(
      function (e) {
        yc(n.get());
        var t = ky(e);
        return n.set(t), ve.some(ss(t, t.length - 1));
      },
      function (e) {
        return nf(e).map(function (e) {
          if (qb(e, n)) return ss(n.get(), 1);
          yc(n.get());
          var t = Vb(e, !0);
          return n.set(t), ss(t, 1);
        });
      },
      function (e) {
        return rf(e).map(function (e) {
          if (qb(e, n)) return ss(n.get(), n.get().length - 1);
          yc(n.get());
          var t = Vb(e, !1);
          return n.set(t), ss(t, t.length - 1);
        });
      },
      function (e) {
        yc(n.get());
        var t = Ny(e);
        return n.set(t), ve.some(ss(t, 1));
      }
    );
  }
  function Wb(e, t) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n].apply(null, t);
      if (r.isSome()) return r;
    }
    return ve.none();
  }
  function Kb(e, t) {
    return Gs(t, e) || e;
  }
  function Xb(e, t, n) {
    var r = yy(n),
      o = Kb(t, r.container());
    return ab(e, o, r).fold(function () {
      return ef(o, r)
        .bind(R(ab, e, o))
        .map(function (e) {
          return _y.before(e);
        });
    }, ve.none);
  }
  function Yb(e, t) {
    return null === Vc(e, t);
  }
  function Gb(e, t, n) {
    return ab(e, t, n).filter(R(Yb, t));
  }
  function Jb(e, t, n) {
    var r = Cy(n);
    return Gb(e, t, r).bind(function (e) {
      return tf(e, r).isNone() ? ve.some(_y.start(e)) : ve.none();
    });
  }
  function Qb(e, t, n) {
    var r = yy(n);
    return Gb(e, t, r).bind(function (e) {
      return ef(e, r).isNone() ? ve.some(_y.end(e)) : ve.none();
    });
  }
  function Zb(e, t, n) {
    var r = Cy(n),
      o = Kb(t, r.container());
    return ab(e, o, r).fold(function () {
      return tf(o, r)
        .bind(R(ab, e, o))
        .map(function (e) {
          return _y.after(e);
        });
    }, ve.none);
  }
  function ey(e) {
    return (
      !1 ===
      ((t = Ay(e)),
      "rtl" === Za.DOM.getStyle(t, "direction", !0) ||
        ((n = t.textContent), by.test(n)))
    );
    var t, n;
  }
  function ty(e, t, n) {
    return Wb([Xb, Jb, Qb, Zb], [e, t, n]).filter(ey);
  }
  function ny(e) {
    return e.fold(J("before"), J("start"), J("end"), J("after"));
  }
  function ry(e) {
    return e.fold(_y.before, _y.before, _y.after, _y.after);
  }
  function oy(e) {
    return e.fold(_y.start, _y.start, _y.end, _y.end);
  }
  function iy(a, e, u, t, n, s) {
    return dn(ab(e, u, t), ab(e, u, n), function (e, t) {
      return e !== t &&
        ((r = t), (o = Gs(e, (n = u))), (i = Gs(r, n)), o && o === i)
        ? _y.after(a ? e : t)
        : s;
      var n, r, o, i;
    }).getOr(s);
  }
  function ay(e, r) {
    return e.fold(w, function (e) {
      return (n = r), !(ny((t = e)) === ny(n) && Ay(t) === Ay(n));
      var t, n;
    });
  }
  function uy(e, t) {
    return e
      ? t.fold(i(ve.some, _y.start), ve.none, i(ve.some, _y.after), ve.none)
      : t.fold(ve.none, i(ve.some, _y.before), ve.none, i(ve.some, _y.end));
  }
  function sy(e, a, u, s) {
    var t = ub(e, s),
      c = ty(a, u, t);
    return ty(a, u, t)
      .bind(R(uy, e))
      .orThunk(function () {
        return (
          (n = a),
          (r = u),
          (o = c),
          (i = ub((t = e), s)),
          Ql(t, r, i)
            .map(R(ub, t))
            .fold(
              function () {
                return o.map(ry);
              },
              function (e) {
                return ty(n, r, e).map(R(iy, t, n, r, i, e)).filter(R(ay, o));
              }
            )
            .filter(ey)
        );
        var t, n, r, o, i;
      });
  }
  function cy(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    var r = window.console;
    r && (r.error || r.log).apply(r, Ae([e], t, !1));
  }
  var ly,
    fy,
    dy = function (t, e) {
      var n = t.editorManager.baseURL + "/skins/content",
        r = "content" + t.editorManager.suffix + ".css",
        o = !0 === t.inline;
      return A(e, function (e) {
        return /^[a-z0-9\-]+$/i.test(e) && !o
          ? n + "/" + e + "/" + r
          : t.documentBaseURI.toAbsolute(e);
      });
    },
    my = 0,
    gy = Et.each,
    py = Za.DOM,
    hy = [
      9,
      27,
      Lf.HOME,
      Lf.END,
      19,
      20,
      44,
      144,
      145,
      33,
      34,
      45,
      16,
      17,
      18,
      91,
      92,
      93,
      Lf.DOWN,
      Lf.UP,
      Lf.LEFT,
      Lf.RIGHT,
    ].concat(xt.browser.isFirefox() ? [224] : []),
    vy = "data-mce-placeholder",
    by = /[\u0591-\u07FF\uFB1D-\uFDFF\uFE70-\uFEFC]/,
    yy = R(ub, !0),
    Cy = R(ub, !1),
    xy = Xn,
    wy = Yn,
    Sy = or([
      { remove: ["element"] },
      { moveToElement: ["element"] },
      { moveToPosition: ["position"] },
    ]),
    Ey = jn,
    ky = R(jb, !0),
    Ny = R(jb, !1),
    _y = or([
      { before: ["element"] },
      { start: ["element"] },
      { end: ["element"] },
      { after: ["element"] },
    ]),
    Ay = function (e) {
      return e.fold(u, u, u, u);
    };
  function Ry(e, t, n) {
    var r = e ? 1 : -1;
    return (
      t.setRng(ss(n.container(), n.offset() + r).toRange()),
      t.getSel().modify("move", e ? "forward" : "backward", "word"),
      !0
    );
  }
  function Dy(e, t) {
    return e === uc.Backwards ? q(t) : t;
  }
  function Ty(e, t, n, r) {
    for (var o, i, a, u, s = Ic(n), c = r, l = []; c; ) {
      var f = ((a = s), (u = c), t === uc.Forwards ? a.next(u) : a.prev(u));
      if (!f) break;
      if (Wn(f.getNode(!1)))
        return t === uc.Forwards
          ? {
              positions: Dy(t, l).concat([f]),
              breakType: ly.Br,
              breakAt: ve.some(f),
            }
          : { positions: Dy(t, l), breakType: ly.Br, breakAt: ve.some(f) };
      if (f.isVisible()) {
        if (e(c, f)) {
          var d =
            ((o = c),
            Wn((i = f).getNode(t === uc.Forwards))
              ? ly.Br
              : !1 === Js(o, i)
              ? ly.Block
              : ly.Wrap);
          return { positions: Dy(t, l), breakType: d, breakAt: ve.some(f) };
        }
        l.push(f), (c = f);
      } else c = f;
    }
    return { positions: Dy(t, l), breakType: ly.Eol, breakAt: ve.none() };
  }
  function Oy(n, r, o, e) {
    return r(o, e)
      .breakAt.map(function (e) {
        var t = r(o, e).positions;
        return n === uc.Backwards ? t.concat(e) : [e].concat(t);
      })
      .getOr([]);
  }
  function By(e, i) {
    return L(
      e,
      function (e, o) {
        return e.fold(
          function () {
            return ve.some(o);
          },
          function (r) {
            return dn(
              Q(r.getClientRects()),
              Q(o.getClientRects()),
              function (e, t) {
                var n = Math.abs(i - e.left);
                return Math.abs(i - t.left) <= n ? o : r;
              }
            ).or(e);
          }
        );
      },
      ve.none()
    );
  }
  function Py(t, e) {
    return Q(e.getClientRects()).bind(function (e) {
      return By(t, e.left);
    });
  }
  function Ly(n) {
    function e(e) {
      return A(e, function (e) {
        var t = Au(e);
        return (t.node = n), t;
      });
    }
    if (zn(n)) return e(n.getClientRects());
    if (jn(n)) {
      var t = n.ownerDocument.createRange();
      return (
        t.setStart(n, 0), t.setEnd(n, n.data.length), e(t.getClientRects())
      );
    }
  }
  function Iy(e) {
    return H(e, Ly);
  }
  R(sy, !1),
    R(sy, !0),
    ((fy = ly = {})[(fy.Br = 0)] = "Br"),
    (fy[(fy.Block = 1)] = "Block"),
    (fy[(fy.Wrap = 2)] = "Wrap"),
    (fy[(fy.Eol = 3)] = "Eol");
  var My,
    Fy,
    Uy = R(Ty, ss.isAbove, -1),
    zy = R(Ty, ss.isBelow, 1),
    Hy = R(Oy, -1, Uy),
    jy = R(Oy, 1, zy);
  function Vy(o, i, a, e, u, t) {
    function n(e) {
      var t = Iy([e]);
      -1 === o && (t = t.reverse());
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        if (!a(r, l)) {
          if ((0 < c.length && i(r, pe(c)) && s++, (r.line = s), u(r)))
            return !0;
          c.push(r);
        }
      }
    }
    var s = 0,
      c = [],
      l = pe(t.getClientRects());
    if (!l) return c;
    var r = t.getNode();
    return (
      n(r),
      (function (e, t, n, r) {
        for (; (r = Ys(r, e, Vr, t)); ) if (n(r)) return;
      })(o, e, n, r),
      c
    );
  }
  function qy(t) {
    return function (e) {
      return e.line > t;
    };
  }
  function $y(t) {
    return function (e) {
      return e.line === t;
    };
  }
  function Wy(e, t) {
    return Math.abs(e.left - t);
  }
  function Ky(e, t) {
    return Math.abs(e.right - t);
  }
  function Xy(e, t) {
    return e >= t.left && e <= t.right;
  }
  function Yy(e, t) {
    return e >= t.top && e <= t.bottom;
  }
  function Gy(e, o, i) {
    return (
      void 0 === i && (i = w),
      me(e, function (e, t) {
        if (Xy(o, t)) return i(t) ? t : e;
        if (Xy(o, e)) return i(e) ? e : t;
        var n = Math.min(Wy(e, o), Ky(e, o)),
          r = Math.min(Wy(t, o), Ky(t, o));
        return (r === n && se(t, "node") && zC(t.node)) || r < n ? t : e;
      })
    );
  }
  function Jy(e, t, n, r, o) {
    var i = HC(r, e, Vr, t, !o);
    do {
      if (!i || n(i)) return;
    } while ((i = HC(i, e, Vr, t)));
  }
  function Qy(e, t, n) {
    function r(e) {
      return !cn(e.node) && !Jn(e.node);
    }
    var o,
      i,
      a,
      u = Iy(U(xe(e.getElementsByTagName("*")), Ks)),
      s = U(u, R(Yy, n));
    if (
      (a = Gy(s, t, r)) &&
      (a = Gy(
        (function (e, r, t) {
          function n(t, e) {
            var n = U(Iy([e]), function (e) {
              return !t(e, r);
            });
            return (o = o.concat(n)), 0 === n.length;
          }
          void 0 === t && (t = !0);
          var o = [];
          return (
            o.push(r),
            Jy(My.Up, e, R(n, Tu), r.node, t),
            Jy(My.Down, e, R(n, Ou), r.node, t),
            o
          );
        })(e, a, r(a)),
        t,
        r
      )) &&
      Ks(a.node)
    )
      return { node: (o = a).node, before: Wy(o, (i = t)) < Ky(o, i) };
    return null;
  }
  function Zy(e, t) {
    e.selection.setRng(t), td(e, e.selection.getRng());
  }
  function e0(e, t, n) {
    return ve.some(_b(e, t, n));
  }
  function t0(e, t, n, r, o, i) {
    var a = t === uc.Forwards,
      u = Ic(e.getBody()),
      s = R(ic, a ? u.next : u.prev),
      c = a ? r : o;
    if (!n.collapsed) {
      var l = Pu(n);
      if (i(l)) return Eb(t, e, l, t === uc.Backwards, !1);
    }
    var f = rc(t, e.getBody(), n);
    if (c(f)) return kb(e, f.getNode(!a));
    var d = ub(a, s(f)),
      m = Hr(n);
    if (!d) return m ? ve.some(n) : ve.none();
    if (c(d)) return Eb(t, e, d.getNode(!a), a, !1);
    var g = s(d);
    return g && c(g) && ac(d, g)
      ? Eb(t, e, g.getNode(!a), a, !1)
      : m
      ? e0(e, d.toRange(), !1)
      : ve.none();
  }
  function n0(t, e, n, r, o, i) {
    var a = rc(e, t.getBody(), n),
      u = pe(a.getClientRects()),
      s = e === My.Down;
    if (!u) return ve.none();
    var c,
      l = U((s ? UC : FC)(t.getBody(), qy(1), a), $y(1)),
      f = u.left,
      d = Gy(l, f);
    if (d && i(d.node)) {
      var m = Math.abs(f - d.left),
        g = Math.abs(f - d.right);
      return Eb(e, t, d.node, m < g, !1);
    }
    if ((c = r(a) ? a.getNode() : o(a) ? a.getNode(!0) : Pu(n))) {
      var p = (function (e, t, n, r) {
          function o(e) {
            return pe(e.getClientRects());
          }
          var i,
            a,
            u,
            s = Ic(t),
            c = [],
            l = 0,
            f =
              1 === e
                ? ((i = s.next), (a = Ou), (u = Tu), ss.after(r))
                : ((i = s.prev), (a = Tu), (u = Ou), ss.before(r)),
            d = o(f);
          do {
            if (f.isVisible()) {
              var m = o(f);
              if (!u(m, d)) {
                0 < c.length && a(m, pe(c)) && l++;
                var g = Au(m);
                if (((g.position = f), (g.line = l), n(g))) return c;
                c.push(g);
              }
            }
          } while ((f = i(f)));
          return c;
        })(e, t.getBody(), qy(1), c),
        h = Gy(U(p, $y(1)), f);
      if (h) return e0(t, h.position.toRange(), !1);
      if ((h = pe(U(p, $y(0))))) return e0(t, h.position.toRange(), !1);
    }
    return 0 === l.length
      ? jC(t, s)
          .filter(s ? o : r)
          .map(function (e) {
            return _b(t, e.toRange(), !1);
          })
      : ve.none();
  }
  function r0(t, e, n) {
    return jC(t, e)
      .filter(n)
      .exists(function (e) {
        return t.selection.setRng(e.toRange()), !0;
      });
  }
  function o0(e, t) {
    var n = e.dom.createRng();
    n.setStart(t.container(), t.offset()),
      n.setEnd(t.container(), t.offset()),
      e.selection.setRng(n);
  }
  function i0(e, t) {
    e
      ? t.setAttribute("data-mce-selected", "inline-boundary")
      : t.removeAttribute("data-mce-selected");
  }
  function a0(t, e, n) {
    return $b(e, n).map(function (e) {
      return o0(t, e), n;
    });
  }
  function u0(e, t, n) {
    return (
      !!Is(e) &&
      ((o = t),
      (i = n),
      (a = (r = e).getBody()),
      (u = ss.fromRangeStart(r.selection.getRng())),
      sy(i, R(ib, r), a, u)
        .bind(function (e) {
          return a0(r, o, e);
        })
        .isSome())
    );
    var r, o, i, a, u;
  }
  function s0(e, t, n) {
    return (
      !!Is(t) &&
      ((r = e),
      (i = (o = t).selection.getRng()),
      (a = r ? ss.fromRangeEnd(i) : ss.fromRangeStart(i)),
      !!y(o.selection.getSel().modify) &&
        (r && Fr(a)
          ? Ry(!0, o.selection, a)
          : !(r || !Ur(a)) && Ry(!1, o.selection, a)))
    );
    var r, o, i, a;
  }
  function c0(g) {
    var p = iu(null),
      h = R(ib, g);
    return (
      g.on("NodeChange", function (e) {
        var n, r, o, t, i, a, u, s, c, l, f, d, m;
        !Is(g) ||
          (xt.browser.isIE() && e.initial) ||
          ((i = h),
          (a = g.dom),
          (u = e.parents),
          Y(
            $(
              (s = U(
                A(
                  bu(
                    kt.fromDom(a.getRoot()),
                    '*[data-mce-selected="inline-boundary"]'
                  ),
                  function (e) {
                    return e.dom;
                  }
                ),
                i
              )),
              (c = U(u, i))
            ),
            R(i0, !1)
          ),
          Y($(c, s), R(i0, !0)),
          (f = p),
          (l = g).selection.isCollapsed() &&
            !0 !== l.composing &&
            f.get() &&
            ((d = ss.fromRangeStart(l.selection.getRng())),
            ss.isTextPosition(d) &&
              !1 === (Fr((m = d)) || Ur(m)) &&
              (o0(l, Vs(f.get(), d)), f.set(null))),
          (n = h),
          (r = g),
          (o = p),
          (t = e.parents),
          r.selection.isCollapsed() &&
            Y(U(t, n), function (e) {
              var t = ss.fromRangeStart(r.selection.getRng());
              ty(n, r.getBody(), t).bind(function (e) {
                return a0(r, o, e);
              });
            }));
      }),
      p
    );
  }
  function l0(n, t, r) {
    if (Is(n)) {
      var e = jC(n, t).getOrThunk(function () {
        var e = n.selection.getRng();
        return t ? ss.fromRangeEnd(e) : ss.fromRangeStart(e);
      });
      return ty(R(ib, n), n.getBody(), e).exists(function (e) {
        var t = ry(e);
        return $b(r, t).exists(function (e) {
          return o0(n, e), !0;
        });
      });
    }
    return !1;
  }
  function f0(t, n) {
    return function (e) {
      return $b(n, e).exists(function (e) {
        return o0(t, e), !0;
      });
    };
  }
  function d0(r, o, i, a) {
    var u = r.getBody(),
      s = R(ib, r);
    r.undoManager.ignore(function () {
      var e, t, n;
      r.selection.setRng(
        ((e = i),
        (t = a),
        (n = document.createRange()).setStart(e.container(), e.offset()),
        n.setEnd(t.container(), t.offset()),
        n)
      ),
        r.execCommand("Delete"),
        ty(s, u, ss.fromRangeStart(r.selection.getRng())).map(oy).map(f0(r, o));
    }),
      r.nodeChanged();
  }
  function m0(e, t, n) {
    if (e.selection.isCollapsed() && Is(e)) {
      var r = ss.fromRangeStart(e.selection.getRng());
      return (
        (o = t),
        (a = n),
        (u = r),
        (s = (i = e).getBody()),
        (c = Gs(u.container(), s) || s),
        (l = R(ib, i)),
        (f = ty(l, c, u))
          .bind(function (e) {
            return a
              ? e.fold(J(ve.some(oy(e))), ve.none, J(ve.some(ry(e))), ve.none)
              : e.fold(ve.none, J(ve.some(ry(e))), ve.none, J(ve.some(oy(e))));
          })
          .map(f0(i, o))
          .getOrThunk(function () {
            var t = zc(a, c, u),
              e = t.bind(function (e) {
                return ty(l, c, e);
              });
            return dn(f, e, function () {
              return ab(l, c, u).exists(function (e) {
                return (
                  !!dn(nf((o = e)), rf(o), function (e, t) {
                    var n = ub(!0, e),
                      r = ub(!1, t);
                    return ef(o, n).forall(function (e) {
                      return e.isEqual(r);
                    });
                  }).getOr(!0) && (Qm(i, a, kt.fromDom(e)), !0)
                );
                var o;
              });
            })
              .orThunk(function () {
                return e.bind(function (e) {
                  return t.map(function (e) {
                    return a ? d0(i, o, u, e) : d0(i, o, e, u), !0;
                  });
                });
              })
              .getOr(!1);
          })
      );
    }
    var i, o, a, u, s, c, l, f;
    return !1;
  }
  function g0(e) {
    return 1 === zt(e);
  }
  function p0(g, p) {
    var t,
      e = kt.fromDom(g.getBody()),
      n = kt.fromDom(g.selection.getStart()),
      h = U(
        z((t = ym(n, e)), mo).fold(J(t), function (e) {
          return t.slice(0, e);
        }),
        g0
      );
    return Z(h).exists(function (e) {
      var t,
        n,
        r,
        o,
        i,
        a,
        u,
        s,
        c,
        l = ss.fromRangeStart(g.selection.getRng()),
        f = p,
        d = l,
        m = e.dom;
      return !(
        !dn(nf(m), rf(m), function (e, t) {
          var n = ub(!0, e),
            r = ub(!1, t),
            o = ub(!1, d);
          return f
            ? ef(m, o).exists(function (e) {
                return e.isEqual(r) && d.isEqual(n);
              })
            : tf(m, o).exists(function (e) {
                return e.isEqual(n) && d.isEqual(r);
              });
        }).getOr(!0) ||
        (jc((t = e).dom) && Mg(t.dom)) ||
        ((n = p),
        (o = e),
        0 ===
        (c = A(U(h, R(Wg, (r = g))), function (e) {
          return e.dom;
        })).length
          ? Qm(r, n, o)
          : ((a = o.dom),
            (s = Vg(c, (u = Ug(!1)).dom)),
            qt(kt.fromDom(a), u),
            Ln(kt.fromDom(a)),
            (i = ss(s, 0)),
            r.selection.setRng(i.toRange())),
        0)
      );
    });
  }
  function h0(e, t) {
    return !!e.selection.isCollapsed() && p0(e, t);
  }
  function v0(e, t, n) {
    return e._selectionOverrides.hideFakeCaret(), Qm(e, t, kt.fromDom(n)), !0;
  }
  function b0(e, t) {
    return e.selection.isCollapsed()
      ? ((i = e),
        (u = (a = t) ? Zg : ep),
        (s = a ? uc.Forwards : uc.Backwards),
        (c = rc(s, i.getBody(), i.selection.getRng())),
        u(c)
          ? v0(i, a, c.getNode(!a))
          : ve
              .from(ub(a, c))
              .filter(function (e) {
                return u(e) && ac(c, e);
              })
              .exists(function (e) {
                return v0(i, a, e.getNode(!a));
              }))
      : ((r = t), (o = (n = e).selection.getNode()), !!Jn(o) && v0(n, r, o));
    var n, r, o, i, a, u, s, c;
  }
  function y0(e) {
    var t = parseInt(e, 10);
    return isNaN(t) ? 0 : t;
  }
  function C0(e, t) {
    return (
      (e || "table" === Nt(t) ? "margin" : "padding") +
      ("rtl" === xn(t, "direction") ? "-right" : "-left")
    );
  }
  function x0(e) {
    var n,
      t = $C(e);
    return (
      !e.mode.isReadOnly() &&
      (1 < t.length ||
        ((n = e),
        j(t, function (e) {
          var t = wn(e, C0(Ts(n), e))
            .map(y0)
            .getOr(0);
          return "false" !== n.dom.getContentEditable(e.dom) && 0 < t;
        })))
    );
  }
  function w0(e) {
    return po(e) || ho(e);
  }
  function S0(e, s) {
    var c = e.dom,
      t = e.selection,
      n = e.formatter,
      r = e.getParam("indentation", "40px", "string"),
      l = /[a-z%]+$/i.exec(r)[0],
      f = parseInt(r, 10),
      d = Ts(e),
      o = ks(e);
    e.queryCommandState("InsertUnorderedList") ||
      e.queryCommandState("InsertOrderedList") ||
      "" !== o ||
      c.getParent(t.getNode(), c.isBlock) ||
      n.apply("div"),
      Y($C(e), function (e) {
        var t,
          n = c,
          r = s,
          o = f,
          i = l,
          a = e.dom,
          u = C0(d, kt.fromDom(a));
        "outdent" === r
          ? ((t = Math.max(0, y0(a.style[u]) - o)),
            n.setStyle(a, u, t ? t + i : ""))
          : ((t = y0(a.style[u]) + o + i), n.setStyle(a, u, t));
      });
  }
  function E0(e, t) {
    if (e.selection.isCollapsed() && x0(e)) {
      var n = e.dom,
        r = e.selection.getRng(),
        o = ss.fromRangeStart(r),
        i = n.getParent(r.startContainer, n.isBlock);
      if (null !== i && ip(kt.fromDom(i), o)) return S0(e, "outdent"), !0;
    }
    return !1;
  }
  function k0(e, t) {
    e.getDoc().execCommand(t, !1, null);
  }
  function N0(e) {
    return void 0 === e.touches || 1 !== e.touches.length
      ? ve.none()
      : ve.some(e.touches[0]);
  }
  function _0(e, t) {
    return ke(e, t.nodeName);
  }
  function A0(e) {
    var t,
      n,
      r,
      o = e.dom,
      i = e.selection,
      a = e.schema,
      u = a.getBlockElements(),
      s = i.getStart(),
      c = e.getBody(),
      l = ks(e);
    if (s && zn(s) && l) {
      var f = c.nodeName.toLowerCase();
      if (
        a.isValidChild(f, l.toLowerCase()) &&
        ((d = u),
        (m = c),
        (g = s),
        !F(bm(kt.fromDom(g), kt.fromDom(m)), function (e) {
          return _0(d, e.dom);
        }))
      ) {
        for (
          var d,
            m,
            g,
            p,
            h,
            v = i.getRng(),
            b = v.startContainer,
            y = v.startOffset,
            C = v.endContainer,
            x = v.endOffset,
            w = yd(e),
            s = c.firstChild;
          s;

        )
          (p = u),
            jn((h = s)) || (zn(h) && !_0(p, h) && !Jc(h))
              ? (function (e, t) {
                  if (jn(t)) {
                    if (0 === t.nodeValue.length) return 1;
                    if (
                      /^\s+$/.test(t.nodeValue) &&
                      (!t.nextSibling || _0(e, t.nextSibling))
                    )
                      return 1;
                  }
                })(u, s)
                ? ((s = (n = s).nextSibling), o.remove(n))
                : (t ||
                    ((t = o.create(l, Ns(e))),
                    s.parentNode.insertBefore(t, s),
                    (r = !0)),
                  (s = (n = s).nextSibling),
                  t.appendChild(n))
              : ((t = null), (s = s.nextSibling));
        r &&
          w &&
          (v.setStart(b, y), v.setEnd(C, x), i.setRng(v), e.nodeChanged());
      }
    }
  }
  function R0(e, t) {
    t.hasAttribute("data-mce-caret") &&
      (zr(t),
      e.selection.setRng(e.selection.getRng()),
      e.selection.scrollIntoView(t));
  }
  function D0(e, t) {
    var n = vr(kt.fromDom(e.getBody()), "*[data-mce-caret]")
      .map(function (e) {
        return e.dom;
      })
      .getOrNull();
    if (n)
      return "compositionstart" === t.type
        ? (t.preventDefault(), t.stopPropagation(), void R0(e, n))
        : void (Mr(n) && (R0(e, n), e.undoManager.add()));
  }
  function T0(e, t, n) {
    var r,
      o,
      i,
      a = Ic(e.getBody()),
      u = R(ic, 1 === t ? a.next : a.prev);
    !n.collapsed ||
      "" === ks(e) ||
      ((r = e.dom.getParent(n.startContainer, "PRE")) &&
        (u(ss.fromRangeStart(n)) ||
          ((i = e.dom.create(ks(e))),
          (!xt.ie || 11 <= xt.ie) && (i.innerHTML = '<br data-mce-bogus="1">'),
          (o = i),
          1 === t ? e.$(r).after(o) : e.$(r).before(o),
          e.selection.select(o, !0),
          e.selection.collapse())));
  }
  function O0(t, e) {
    return (
      (n = t),
      (r = e ? uc.Forwards : uc.Backwards),
      (o = n.selection.getRng()),
      t0(n, r, o, rp, op, WC)
        .orThunk(function () {
          return T0(n, r, o), ve.none();
        })
        .exists(function (e) {
          return Zy(t, e), !0;
        })
    );
    var n, r, o;
  }
  function B0(t, e) {
    return (
      (r = e ? 1 : -1),
      (o = (n = t).selection.getRng()),
      n0(
        n,
        r,
        o,
        function (e) {
          return rp(e) || tp(e);
        },
        function (e) {
          return op(e) || np(e);
        },
        WC
      )
        .orThunk(function () {
          return T0(n, r, o), ve.none();
        })
        .exists(function (e) {
          return Zy(t, e), !0;
        })
    );
    var n, r, o;
  }
  function P0(e, t) {
    return r0(e, t, t ? op : rp);
  }
  function L0(e) {
    return T(["figcaption"], Nt(e));
  }
  function I0(e) {
    var t = document.createRange();
    return t.setStartBefore(e.dom), t.setEndBefore(e.dom), t;
  }
  function M0(e, t, n) {
    (n ? Pn : Wt)(e, t);
  }
  function F0(h, v) {
    var b = kt.fromDom(h.getBody()),
      y = ss.fromRangeStart(h.selection.getRng()),
      C = ks(h),
      x = Ns(h),
      e = y,
      t = R(je, b);
    return pr(kt.fromDom(e.container()), mo, t)
      .filter(L0)
      .exists(function () {
        if (
          ((d = b),
          (m = y),
          v
            ? ((p = d.dom), zy(p, m).breakAt.isNone())
            : ((g = d.dom), Uy(g, m).breakAt.isNone()))
        ) {
          var e =
            ((t = b),
            (r = x),
            (o = v),
            "" === (n = C)
              ? ((l = o), M0(t, (f = kt.fromTag("br")), l), I0(f))
              : ((i = t),
                (a = o),
                (u = r),
                (s = kt.fromTag(n)),
                (c = kt.fromTag("br")),
                hn(s, u),
                Pn(s, c),
                M0(i, s, a),
                I0(c)));
          return h.selection.setRng(e), !0;
        }
        var t, n, r, o, i, a, u, s, c, l, f, d, m, g, p;
        return !1;
      });
  }
  function U0(e, t) {
    return !!e.selection.isCollapsed() && F0(e, t);
  }
  function z0(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return function () {
      return e.apply(null, t);
    };
  }
  function H0(e, t) {
    return M(
      ((n = t),
      H(
        A(e, function (e) {
          return _e(
            {
              shiftKey: !1,
              altKey: !1,
              ctrlKey: !1,
              metaKey: !1,
              keyCode: 0,
              action: te,
            },
            e
          );
        }),
        function (e) {
          return n.keyCode === e.keyCode &&
            n.shiftKey === e.shiftKey &&
            n.altKey === e.altKey &&
            n.ctrlKey === e.ctrlKey &&
            n.metaKey === e.metaKey
            ? [e]
            : [];
        }
      )),
      function (e) {
        return e.action();
      }
    );
    var n;
  }
  function j0(t, e) {
    var n = e ? uc.Forwards : uc.Backwards,
      r = t.selection.getRng();
    return t0(t, n, r, Zg, ep, Jn).exists(function (e) {
      return Zy(t, e), !0;
    });
  }
  function V0(t, e) {
    var n = e ? 1 : -1,
      r = t.selection.getRng();
    return n0(t, n, r, Zg, ep, Jn).exists(function (e) {
      return Zy(t, e), !0;
    });
  }
  function q0(e, t) {
    return r0(e, t, t ? ep : Zg);
  }
  function $0(e, t, n, r, o) {
    var i,
      a = bu(kt.fromDom(n), "td,th,caption").map(function (e) {
        return e.dom;
      }),
      u = U(
        ((i = e),
        H(a, function (e) {
          var t,
            n = {
              left: (t = Au(e.getBoundingClientRect())).left - -1,
              top: t.top - -1,
              right: t.right + -2,
              bottom: t.bottom + -2,
              width: t.width + -1,
              height: t.height + -1,
            };
          return [
            { x: n.left, y: i(n), cell: e },
            { x: n.right, y: i(n), cell: e },
          ];
        })),
        function (e) {
          return t(e, o);
        }
      ),
      s = r,
      c = o;
    return L(
      u,
      function (e, r) {
        return e.fold(
          function () {
            return ve.some(r);
          },
          function (e) {
            var t = Math.sqrt(Math.abs(e.x - s) + Math.abs(e.y - c)),
              n = Math.sqrt(Math.abs(r.x - s) + Math.abs(r.y - c));
            return ve.some(n < t ? r : e);
          }
        );
      },
      ve.none()
    ).map(function (e) {
      return e.cell;
    });
  }
  function W0(e, t, n) {
    var r,
      o,
      i = e(t, n);
    return (i.breakType === ly.Wrap && 0 === i.positions.length) ||
      (!Wn(n.getNode()) && i.breakType === ly.Br && 1 === i.positions.length)
      ? ((r = e),
        (o = t),
        !i.breakAt.exists(function (e) {
          return r(o, e).breakAt.isSome();
        }))
      : i.breakAt.isNone();
  }
  function K0(t, e, n, r) {
    var o,
      i,
      a,
      u = t.selection.getRng(),
      s = e ? 1 : -1;
    return !(
      !Ws() ||
      ((o = e),
      (i = n),
      (a = ss.fromRangeStart(u)),
      !Hc(!o, i).exists(function (e) {
        return e.isEqual(a);
      })) ||
      (Eb(s, t, n, !e, !1).each(function (e) {
        Zy(t, e);
      }),
      0)
    );
  }
  function X0(u, s, c) {
    var e,
      t,
      n =
        ((e = !!s),
        (t = c.getNode(e)),
        zn(t) && "TABLE" === t.nodeName ? ve.some(t) : ve.none()),
      r = !1 === s;
    n.fold(
      function () {
        return Zy(u, c.toRange());
      },
      function (a) {
        return Hc(r, u.getBody())
          .filter(function (e) {
            return e.isEqual(c);
          })
          .fold(
            function () {
              return Zy(u, c.toRange());
            },
            function (e) {
              var n,
                r,
                o = s,
                i = a,
                t = c;
              (r = ks((n = u)))
                ? n.undoManager.transact(function () {
                    var e = kt.fromTag(r);
                    hn(e, Ns(n)),
                      Pn(e, kt.fromTag("br")),
                      (o ? $t : qt)(kt.fromDom(i), e);
                    var t = n.dom.createRng();
                    t.setStart(e.dom, 0), t.setEnd(e.dom, 0), Zy(n, t);
                  })
                : Zy(n, t.toRange());
            }
          );
      }
    );
  }
  function Y0(e, t, n, r) {
    var o,
      i,
      a,
      u,
      s,
      c,
      l,
      f,
      d,
      m,
      g = e.selection.getRng(),
      p = ss.fromRangeStart(g),
      h = e.getBody();
    if (t || !YC(r, p))
      return (
        !(!t || !GC(r, p)) &&
        ((o = h),
        (d = i = n),
        X0(
          e,
          t,
          (v = Z((m = a = p).getClientRects())
            .bind(function (e) {
              return XC(d, e.left, e.top);
            })
            .bind(function (e) {
              return Py(
                nf((t = e))
                  .map(function (e) {
                    return [e].concat(zy(t, e).positions);
                  })
                  .getOr([]),
                m
              );
              var t;
            })
            .orThunk(function () {
              return Q(a.getClientRects()).bind(function (e) {
                return By(jy(o, ss.after(i)), e.left);
              });
            })
            .getOr(ss.after(i)))
        ),
        !0)
      );
    var v =
      ((u = h),
      (l = s = n),
      Q((f = c = p).getClientRects())
        .bind(function (e) {
          return KC(l, e.left, e.top);
        })
        .bind(function (e) {
          return Py(
            rf((t = e))
              .map(function (e) {
                return Uy(t, e).positions.concat(e);
              })
              .getOr([]),
            f
          );
          var t;
        })
        .orThunk(function () {
          return Q(c.getClientRects()).bind(function (e) {
            return By(Hy(u, ss.before(s)), e.left);
          });
        })
        .getOr(ss.before(s)));
    return X0(e, t, v), !0;
  }
  function G0(n, r, o) {
    return ve
      .from(n.dom.getParent(n.selection.getNode(), "td,th"))
      .bind(function (t) {
        return ve.from(n.dom.getParent(t, "table")).map(function (e) {
          return o(n, r, e, t);
        });
      })
      .getOr(!1);
  }
  function J0(e, t) {
    return G0(e, t, K0);
  }
  function Q0(e, t) {
    return G0(e, t, Y0);
  }
  function Z0(e, t) {
    var n,
      r,
      o = t,
      i = e.dom,
      a = e.schema.getMoveCaretBeforeOnEnterElements();
    if (t) {
      !/^(LI|DT|DD)$/.test(t.nodeName) ||
        ((r = (function (e) {
          for (; e; ) {
            if (
              1 === e.nodeType ||
              (3 === e.nodeType && e.data && /[\r\n\s]/.test(e.data))
            )
              return e;
            e = e.nextSibling;
          }
        })(t.firstChild)) &&
          /^(UL|OL|DL)$/.test(r.nodeName) &&
          t.insertBefore(i.doc.createTextNode(xo), t.firstChild));
      var u = i.createRng();
      if ((t.normalize(), t.hasChildNodes())) {
        for (var s = new Rr(t, t); (n = s.current()); ) {
          if (jn(n)) {
            u.setStart(n, 0), u.setEnd(n, 0);
            break;
          }
          if (a[n.nodeName.toLowerCase()]) {
            u.setStartBefore(n), u.setEndBefore(n);
            break;
          }
          (o = n), (n = s.next());
        }
        n || (u.setStart(o, 0), u.setEnd(o, 0));
      } else
        Wn(t)
          ? t.nextSibling && i.isBlock(t.nextSibling)
            ? (u.setStartBefore(t), u.setEndBefore(t))
            : (u.setStartAfter(t), u.setEndAfter(t))
          : (u.setStart(t, 0), u.setEnd(t, 0));
      e.selection.setRng(u), td(e, u);
    }
  }
  function eC(e) {
    return ve.from(e.dom.getParent(e.selection.getStart(!0), e.dom.isBlock));
  }
  function tC(e, t) {
    return e && e.parentNode && e.parentNode.nodeName === t;
  }
  function nC(e) {
    return e && /^(OL|UL|LI)$/.test(e.nodeName);
  }
  function rC(e) {
    var t = e.parentNode;
    return /^(LI|DT|DD)$/.test(t.nodeName) ? t : e;
  }
  function oC(e, t, n) {
    for (var r = e[n ? "firstChild" : "lastChild"]; r && !zn(r); )
      r = r[n ? "nextSibling" : "previousSibling"];
    return r === t;
  }
  function iC(e) {
    e.innerHTML = '<br data-mce-bogus="1">';
  }
  function aC(e, t) {
    return (
      e.nodeName === t ||
      (e.previousSibling && e.previousSibling.nodeName === t)
    );
  }
  function uC(e, t) {
    return (
      t &&
      e.isBlock(t) &&
      !/^(TD|TH|CAPTION|FORM)$/.test(t.nodeName) &&
      !/^(fixed|absolute)/i.test(t.style.position) &&
      "true" !== e.getContentEditable(t)
    );
  }
  function sC(e, t, n) {
    return !1 === jn(t)
      ? n
      : e
      ? 1 === n && t.data.charAt(n - 1) === wo
        ? 0
        : n
      : n === t.data.length - 1 && t.data.charAt(n) === wo
      ? t.data.length
      : n;
  }
  function cC(e, t) {
    for (
      var n, r = e.getRoot(), o = t;
      o !== r && "false" !== e.getContentEditable(o);

    )
      "true" === e.getContentEditable(o) && (n = o), (o = o.parentNode);
    return o !== r ? n : r;
  }
  function lC(e, t) {
    var n = ks(e);
    n &&
      n.toLowerCase() === t.tagName.toLowerCase() &&
      (function (e, o, t) {
        var i = e.dom;
        ve
          .from(t.style)
          .map(i.parseStyle)
          .each(function (e) {
            var t = Sn(kt.fromDom(o)),
              n = _e(_e({}, t), e);
            i.setStyles(o, n);
          }),
          dn(
            ve.from(t.class).map(function (e) {
              return e.split(/\s+/);
            }),
            ve.from(o.className).map(function (e) {
              return U(e.split(/\s+/), function (e) {
                return "" !== e;
              });
            }),
            function (t, e) {
              var n = U(e, function (e) {
                  return !T(t, e);
                }),
                r = Ae(Ae([], t, !0), n, !0);
              i.setAttrib(o, "class", r.join(" "));
            }
          );
        var n = ["style", "class"],
          r = ae(t, function (e, t) {
            return !T(n, t);
          });
        i.setAttribs(o, r);
      })(e, t, Ns(e));
  }
  function fC(a, e) {
    function t(e) {
      var t,
        n = m,
        r = l.getTextInlineElements(),
        o =
          e || "TABLE" === C || "HR" === C ? c.create(e || p) : b.cloneNode(!1),
        i = o;
      if (!1 === a.getParam("keep_styles", !0))
        c.setAttrib(o, "style", null), c.setAttrib(o, "class", null);
      else
        for (
          ;
          r[n.nodeName] &&
            (jc(n) ||
              Jc(n) ||
              ((t = n.cloneNode(!1)),
              c.setAttrib(t, "id", ""),
              o.hasChildNodes() ? t.appendChild(o.firstChild) : (i = t),
              o.appendChild(t))),
            (n = n.parentNode) && n !== F;

        );
      return lC(a, o), iC(i), o;
    }
    function n(e) {
      var t,
        n,
        r = sC(e, m, g);
      if (!jn(m) || !(e ? 0 < r : r < m.nodeValue.length)) {
        if (m.parentNode === b && s && !e) return 1;
        if (e && zn(m) && m === b.firstChild) return 1;
        if (aC(m, "TABLE") || aC(m, "HR")) return (s && !e) || (!s && e);
        var o = new Rr(m, b);
        for (
          jn(m) &&
          (e && 0 === r ? o.prev() : e || r !== m.nodeValue.length || o.next());
          (t = o.current());

        ) {
          if (zn(t)) {
            if (
              !t.getAttribute("data-mce-bogus") &&
              ((n = t.nodeName.toLowerCase()), f[n] && "br" !== n)
            )
              return;
          } else if (jn(t) && !qr(t.nodeValue)) return;
          e ? o.prev() : o.next();
        }
        return 1;
      }
    }
    function r() {
      (u = /^(H[1-6]|PRE|FIGURE)$/.test(C) && "HGROUP" !== x ? t(p) : t()),
        a.getParam("end_container_on_empty_block", !1) &&
        uC(c, y) &&
        c.isEmpty(b)
          ? (u = c.split(y, b))
          : c.insertAfter(u, b),
        Z0(a, u);
    }
    var o,
      u,
      i,
      s,
      c = a.dom,
      l = a.schema,
      f = l.getNonEmptyElements(),
      d = a.selection.getRng();
    Tf(c, d).each(function (e) {
      d.setStart(e.startContainer, e.startOffset),
        d.setEnd(e.endContainer, e.endOffset);
    });
    var m = d.startContainer,
      g = d.startOffset,
      p = ks(a),
      h = !(!e || !e.shiftKey),
      v = !(!e || !e.ctrlKey);
    zn(m) &&
      m.hasChildNodes() &&
      ((s = g > m.childNodes.length - 1),
      (m = m.childNodes[Math.min(g, m.childNodes.length - 1)] || m),
      (g = s && jn(m) ? m.nodeValue.length : 0));
    var b,
      y,
      C,
      x,
      w,
      S,
      p,
      E,
      k,
      N,
      _,
      A,
      R,
      D,
      T,
      O,
      B,
      P,
      L,
      I,
      M,
      F = cC(c, m);
    F &&
      (((p && !h) || (!p && h)) &&
        (m = (function (e, t, n, r) {
          var o,
            i,
            a,
            u,
            s,
            c,
            l = p || "P",
            f = e.dom,
            d = cC(f, n),
            m = f.getParent(n, f.isBlock);
          if (!m || !uC(f, m)) {
            if (
              ((s = (
                (m = m || d) === e.getBody() ||
                ((c = m) && /^(TD|TH|CAPTION)$/.test(c.nodeName))
                  ? m
                  : m.parentNode
              ).nodeName.toLowerCase()),
              !m.hasChildNodes())
            )
              return (
                lC(e, (o = f.create(l))),
                m.appendChild(o),
                t.setStart(o, 0),
                t.setEnd(o, 0),
                o
              );
            for (a = n; a.parentNode !== m; ) a = a.parentNode;
            for (; a && !f.isBlock(a); ) a = (i = a).previousSibling;
            if (i && e.schema.isValidChild(s, l.toLowerCase())) {
              for (
                lC(e, (o = f.create(l))),
                  i.parentNode.insertBefore(o, i),
                  a = i;
                a && !f.isBlock(a);

              )
                (u = a.nextSibling), o.appendChild(a), (a = u);
              t.setStart(n, r), t.setEnd(n, r);
            }
          }
          return n;
        })(a, d, m, g)),
      (y = (b = c.getParent(m, c.isBlock))
        ? c.getParent(b.parentNode, c.isBlock)
        : null),
      (C = b ? b.nodeName.toUpperCase() : ""),
      "LI" !== (x = y ? y.nodeName.toUpperCase() : "") ||
        v ||
        ((y = (b = y).parentNode), (C = x)),
      /^(LI|DT|DD)$/.test(C) && c.isEmpty(b)
        ? ((k = t),
          (N = y),
          (_ = b),
          (A = p),
          (I = (E = a).dom),
          (M = E.selection.getRng()),
          N !== E.getBody() &&
            ((D = (A = nC((R = N)) && nC(R.parentNode) ? "LI" : A)
              ? k(A)
              : I.create("BR")),
            oC(N, _, !0) && oC(N, _, !1)
              ? tC(N, "LI")
                ? ((T = rC(N)),
                  I.insertAfter(D, T),
                  (null === (L = (P = N).parentNode) || void 0 === L
                    ? void 0
                    : L.firstChild) === P
                    ? I.remove(T)
                    : I.remove(N))
                : I.replace(D, N)
              : (oC(N, _, !0)
                  ? tC(N, "LI")
                    ? (I.insertAfter(D, rC(N)),
                      D.appendChild(I.doc.createTextNode(" ")),
                      D.appendChild(N))
                    : N.parentNode.insertBefore(D, N)
                  : oC(N, _, !1)
                  ? I.insertAfter(D, rC(N))
                  : ((N = rC(N)),
                    (O = M.cloneRange()).setStartAfter(_),
                    O.setEndAfter(N),
                    (B = O.extractContents()),
                    "LI" === A && B.firstChild && "LI" === B.firstChild.nodeName
                      ? ((D = B.firstChild), I.insertAfter(B, N))
                      : (I.insertAfter(B, N), I.insertAfter(D, N))),
                I.remove(_)),
            Z0(E, D)))
        : (p && b === a.getBody()) ||
          ((p = p || "P"),
          Pr(b)
            ? ((u = zr(b)), c.isEmpty(b) && iC(b), lC(a, u), Z0(a, u))
            : n()
            ? r()
            : n(!0)
            ? ((u = b.parentNode.insertBefore(t(), b)),
              Z0(a, aC(b, "HR") ? u : b))
            : ((S = (w = d).cloneRange()).setStart(
                w.startContainer,
                sC(!0, w.startContainer, w.startOffset)
              ),
              S.setEnd(w.endContainer, sC(!1, w.endContainer, w.endOffset)),
              (o = S.cloneRange()).setEndAfter(b),
              (i = o.extractContents()),
              Y(Vu(kt.fromDom(i), _n), function (e) {
                var t = e.dom;
                t.nodeValue = Eo(t.nodeValue);
              }),
              (function (e) {
                for (
                  ;
                  jn(e) && (e.nodeValue = e.nodeValue.replace(/^[\r\n]+/, "")),
                    (e = e.firstChild);

                );
              })(i),
              (u = i.firstChild),
              c.insertAfter(i, b),
              (function (e, t) {
                var n,
                  r,
                  o = u,
                  i = [];
                if (o) {
                  for (; (o = o.firstChild); ) {
                    if (e.isBlock(o)) return;
                    zn(o) && !t[o.nodeName.toLowerCase()] && i.push(o);
                  }
                  for (n = i.length; n--; )
                    !(o = i[n]).hasChildNodes() ||
                    (o.firstChild === o.lastChild &&
                      "" === o.firstChild.nodeValue)
                      ? e.remove(o)
                      : (r = o) &&
                        "A" === r.nodeName &&
                        e.isEmpty(r) &&
                        e.remove(o);
                }
              })(c, f),
              (function (e, t) {
                t.normalize();
                var n = t.lastChild;
                (n && !/^(left|right)$/gi.test(e.getStyle(n, "float", !0))) ||
                  e.add(t, "br");
              })(c, b),
              c.isEmpty(b) && iC(b),
              u.normalize(),
              c.isEmpty(u) ? (c.remove(u), r()) : (lC(a, u), Z0(a, u))),
          c.setAttrib(u, "id", ""),
          a.fire("NewBlock", { newBlock: u })));
  }
  function dC(e, t, n) {
    var r = e.dom.createRng();
    n
      ? (r.setStartBefore(t), r.setEndBefore(t))
      : (r.setStartAfter(t), r.setEndAfter(t)),
      e.selection.setRng(r),
      td(e, r);
  }
  function mC(e, t) {
    var n = kt.fromTag("br");
    qt(kt.fromDom(t), n), e.undoManager.add();
  }
  function gC(e, t) {
    JC(e.getBody(), t) || $t(kt.fromDom(t), kt.fromTag("br"));
    var n = kt.fromTag("br");
    $t(kt.fromDom(t), n), dC(e, n.dom, !1), e.undoManager.add();
  }
  function pC(e) {
    return e && "A" === e.nodeName && "href" in e;
  }
  function hC(e) {
    return e.fold(D, pC, pC, D);
  }
  function vC(e, t) {
    t.fold(te, R(mC, e), R(gC, e), te);
  }
  function bC(e, t) {
    var n,
      r,
      o,
      i =
        ((r = R(ib, (n = e))),
        (o = ss.fromRangeStart(n.selection.getRng())),
        ty(r, n.getBody(), o).filter(hC));
    i.isSome()
      ? i.each(R(vC, e))
      : (function (e, t) {
          var n,
            r,
            o = e.selection,
            i = e.dom,
            a = o.getRng();
          Tf(i, a).each(function (e) {
            a.setStart(e.startContainer, e.startOffset),
              a.setEnd(e.endContainer, e.endOffset);
          });
          var u,
            s = a.startOffset,
            c = a.startContainer;
          1 === c.nodeType &&
            c.hasChildNodes() &&
            ((u = s > c.childNodes.length - 1),
            (c = c.childNodes[Math.min(s, c.childNodes.length - 1)] || c),
            (s = u && 3 === c.nodeType ? c.nodeValue.length : 0));
          var l = i.getParent(c, i.isBlock),
            f = l ? i.getParent(l.parentNode, i.isBlock) : null,
            d = f ? f.nodeName.toUpperCase() : "",
            m = !(!t || !t.ctrlKey);
          "LI" !== d || m || (l = f),
            c &&
              3 === c.nodeType &&
              s >= c.nodeValue.length &&
              !(function (e) {
                for (
                  var t, n = new Rr(c, l), r = e.getNonEmptyElements();
                  (t = n.next());

                )
                  if (r[t.nodeName.toLowerCase()] || 0 < t.length) return 1;
              })(e.schema) &&
              ((n = i.create("br")),
              a.insertNode(n),
              a.setStartAfter(n),
              a.setEndAfter(n),
              (r = !0)),
            (n = i.create("br")),
            ls(i, a, n),
            dC(e, n, r),
            e.undoManager.add();
        })(e, t);
  }
  function yC(e, t) {
    return eC(e)
      .filter(function (e) {
        return 0 < t.length && ze(kt.fromDom(e), t);
      })
      .isSome();
  }
  function CC(e, t) {
    return yC(e, e.getParam("no_newline_selector", ""));
  }
  function xC(n) {
    return function (e, t) {
      return ("" === ks(e)) === n;
    };
  }
  function wC(n) {
    return function (e, t) {
      return (
        eC(e)
          .filter(function (e) {
            return ho(kt.fromDom(e));
          })
          .isSome() === n
      );
    };
  }
  function SC(n, r) {
    return function (e, t) {
      return (
        (eC(e).fold(J(""), function (e) {
          return e.nodeName.toUpperCase();
        }) ===
          n.toUpperCase()) ===
        r
      );
    };
  }
  function EC(e) {
    return SC("pre", e);
  }
  function kC(n) {
    return function (e, t) {
      return e.getParam("br_in_pre", !0) === n;
    };
  }
  function NC(e, t) {
    return yC(
      e,
      e.getParam("br_newline_selector", ".mce-toc h2,figcaption,caption")
    );
  }
  function _C(e, t) {
    return t;
  }
  function AC(e) {
    var t = ks(e),
      n = (function (e, t) {
        for (
          var n, r = e.getRoot(), o = t;
          o !== r && "false" !== e.getContentEditable(o);

        )
          "true" === e.getContentEditable(o) && (n = o), (o = o.parentNode);
        return o !== r ? n : r;
      })(e.dom, e.selection.getStart());
    return n && e.schema.isValidChild(n.nodeName, t || "P");
  }
  function RC(e, t) {
    return function (n, r) {
      return L(
        e,
        function (e, t) {
          return e && t(n, r);
        },
        !0
      )
        ? ve.some(t)
        : ve.none();
    };
  }
  function DC(e, t) {
    var n, r;
    (n = e),
      (r = t),
      Wb(
        [
          RC([CC], QC.none()),
          RC([SC("summary", !0)], QC.br()),
          RC([EC(!0), kC(!1), _C], QC.br()),
          RC([EC(!0), kC(!1)], QC.block()),
          RC([EC(!0), kC(!0), _C], QC.block()),
          RC([EC(!0), kC(!0)], QC.br()),
          RC([wC(!0), _C], QC.br()),
          RC([wC(!0)], QC.block()),
          RC([xC(!0), _C, AC], QC.block()),
          RC([xC(!0)], QC.br()),
          RC([NC], QC.br()),
          RC([xC(!1), _C], QC.br()),
          RC([AC], QC.block()),
        ],
        [n, !(!r || !r.shiftKey)]
      )
        .getOr(QC.none())
        .fold(
          function () {
            bC(e, t);
          },
          function () {
            fC(e, t);
          },
          te
        );
  }
  function TC(e) {
    return e.stopImmediatePropagation();
  }
  function OC(e) {
    return e.keyCode === Lf.PAGE_UP || e.keyCode === Lf.PAGE_DOWN;
  }
  function BC(e, t, n) {
    n && !e.get()
      ? t.on("NodeChange", TC, !0)
      : !n && e.get() && t.off("NodeChange", TC),
      e.set(n);
  }
  function PC(n, r) {
    var e = r.container(),
      t = r.offset();
    return jn(e)
      ? (e.insertData(t, n), ve.some(ss(e, t + n.length)))
      : oc(r).map(function (e) {
          var t = kt.fromText(n);
          return (r.isAtEnd() ? $t : qt)(e, t), ss(t.dom, n.length);
        });
  }
  function LC(i, a) {
    return function (e) {
      return (
        (r = i),
        (!Om((o = e)) &&
          ((n = o),
          tf((t = r).dom, n).isNone() ||
            ef(t.dom, n).isNone() ||
            ip(t, n) ||
            ap(t, n) ||
            _m(t, n) ||
            Nm(t, n) ||
            Dm(r, o) ||
            Tm(r, o))
          ? t1
          : n1)(a)
      );
      var t, n, r, o;
    };
  }
  function IC(e) {
    var t,
      n,
      r = ss.fromRangeStart(e.selection.getRng()),
      o = kt.fromDom(e.getBody());
    if (e.selection.isCollapsed()) {
      var i = R(ib, e),
        a = ss.fromRangeStart(e.selection.getRng());
      return ty(i, e.getBody(), a)
        .bind(
          ((n = o),
          function (e) {
            return e.fold(
              function (e) {
                return tf(n.dom, ss.before(e));
              },
              function (e) {
                return nf(e);
              },
              function (e) {
                return rf(e);
              },
              function (e) {
                return ef(n.dom, ss.after(e));
              }
            );
          })
        )
        .bind(LC(o, r))
        .exists(
          ((t = e),
          function (e) {
            return t.selection.setRng(e.toRange()), t.nodeChanged(), !0;
          })
        );
    }
    return !1;
  }
  function MC(e) {
    var o,
      i,
      a,
      u,
      s,
      t,
      n,
      r,
      c,
      l,
      f,
      d,
      m,
      g,
      p = c0(e);
    return (
      e.on("keyup compositionstart", R(D0, e)),
      (g = p),
      (m = e).on("keydown", function (e) {
        var t, n, r, o;
        !1 === e.isDefaultPrevented() &&
          ((t = m),
          (n = g),
          (r = e),
          (o = dt().os),
          H0(
            [
              { keyCode: Lf.RIGHT, action: z0(O0, t, !0) },
              { keyCode: Lf.LEFT, action: z0(O0, t, !1) },
              { keyCode: Lf.UP, action: z0(B0, t, !1) },
              { keyCode: Lf.DOWN, action: z0(B0, t, !0) },
              { keyCode: Lf.RIGHT, action: z0(J0, t, !0) },
              { keyCode: Lf.LEFT, action: z0(J0, t, !1) },
              { keyCode: Lf.UP, action: z0(Q0, t, !1) },
              { keyCode: Lf.DOWN, action: z0(Q0, t, !0) },
              { keyCode: Lf.RIGHT, action: z0(j0, t, !0) },
              { keyCode: Lf.LEFT, action: z0(j0, t, !1) },
              { keyCode: Lf.UP, action: z0(V0, t, !1) },
              { keyCode: Lf.DOWN, action: z0(V0, t, !0) },
              { keyCode: Lf.RIGHT, action: z0(u0, t, n, !0) },
              { keyCode: Lf.LEFT, action: z0(u0, t, n, !1) },
              {
                keyCode: Lf.RIGHT,
                ctrlKey: !o.isOSX(),
                altKey: o.isOSX(),
                action: z0(VC, t, n),
              },
              {
                keyCode: Lf.LEFT,
                ctrlKey: !o.isOSX(),
                altKey: o.isOSX(),
                action: z0(qC, t, n),
              },
              { keyCode: Lf.UP, action: z0(U0, t, !1) },
              { keyCode: Lf.DOWN, action: z0(U0, t, !0) },
            ],
            r
          ).each(function (e) {
            r.preventDefault();
          }));
      }),
      (d = p),
      (f = e).on("keydown", function (e) {
        var t, n, r;
        !1 === e.isDefaultPrevented() &&
          ((n = d),
          (r = e),
          H0(
            [
              { keyCode: Lf.BACKSPACE, action: z0(E0, (t = f), !1) },
              { keyCode: Lf.BACKSPACE, action: z0(Mb, t, !1) },
              { keyCode: Lf.DELETE, action: z0(Mb, t, !0) },
              { keyCode: Lf.BACKSPACE, action: z0(Tb, t, !1) },
              { keyCode: Lf.DELETE, action: z0(Tb, t, !0) },
              { keyCode: Lf.BACKSPACE, action: z0(m0, t, n, !1) },
              { keyCode: Lf.DELETE, action: z0(m0, t, n, !0) },
              { keyCode: Lf.BACKSPACE, action: z0(yg, t, !1) },
              { keyCode: Lf.DELETE, action: z0(yg, t, !0) },
              { keyCode: Lf.BACKSPACE, action: z0(Fb, t, !1) },
              { keyCode: Lf.DELETE, action: z0(Fb, t, !0) },
              { keyCode: Lf.BACKSPACE, action: z0(b0, t, !1) },
              { keyCode: Lf.DELETE, action: z0(b0, t, !0) },
              { keyCode: Lf.BACKSPACE, action: z0(Sb, t, !1) },
              { keyCode: Lf.DELETE, action: z0(Sb, t, !0) },
              { keyCode: Lf.BACKSPACE, action: z0(Cb, t, !1) },
              { keyCode: Lf.DELETE, action: z0(Cb, t, !0) },
              { keyCode: Lf.BACKSPACE, action: z0(h0, t, !1) },
              { keyCode: Lf.DELETE, action: z0(h0, t, !0) },
            ],
            r
          ).each(function (e) {
            r.preventDefault();
          }));
      }),
      f.on("keyup", function (e) {
        var t, n;
        !1 === e.isDefaultPrevented() &&
          ((n = e),
          H0(
            [
              { keyCode: Lf.BACKSPACE, action: z0(Ib, (t = f)) },
              { keyCode: Lf.DELETE, action: z0(Ib, t) },
            ],
            n
          ));
      }),
      (l = e).on("keydown", function (e) {
        var t, n, r;
        e.keyCode === Lf.ENTER &&
          ((t = l),
          (n = e).isDefaultPrevented() ||
            (n.preventDefault(),
            (r = t.undoManager).typing && ((r.typing = !1), r.add()),
            t.undoManager.transact(function () {
              !1 === t.selection.isCollapsed() && t.execCommand("Delete"),
                DC(t, n);
            })));
      }),
      (c = e).on("keydown", function (e) {
        var t;
        !1 === e.isDefaultPrevented() &&
          ((t = e),
          H0([{ keyCode: Lf.SPACEBAR, action: z0(IC, c) }], t).each(function (
            e
          ) {
            t.preventDefault();
          }));
      }),
      (n = t = e),
      (r = du(function () {
        n.composing || Um(n);
      }, 0)),
      ZC.isIE() &&
        (n.on("keypress", function (e) {
          r.throttle();
        }),
        n.on("remove", function (e) {
          r.cancel();
        })),
      t.on("input", function (e) {
        !1 === e.isComposing && Um(t);
      }),
      (s = p),
      (u = e).on("keydown", function (e) {
        var t, n, r;
        !1 === e.isDefaultPrevented() &&
          ((n = s),
          (r = e),
          H0(
            [
              { keyCode: Lf.END, action: z0(P0, (t = u), !0) },
              { keyCode: Lf.HOME, action: z0(P0, t, !1) },
              { keyCode: Lf.END, action: z0(q0, t, !0) },
              { keyCode: Lf.HOME, action: z0(q0, t, !1) },
              { keyCode: Lf.END, action: z0(l0, t, !0, n) },
              { keyCode: Lf.HOME, action: z0(l0, t, !1, n) },
            ],
            r
          ).each(function (e) {
            r.preventDefault();
          }));
      }),
      (o = e),
      (i = p),
      e1.os.isOSX() ||
        ((a = iu(!1)),
        o.on("keydown", function (e) {
          OC(e) && BC(a, o, !0);
        }),
        o.on("keyup", function (e) {
          var t, n, r;
          !1 === e.isDefaultPrevented() &&
            ((r = e),
            H0(
              [
                { keyCode: Lf.PAGE_UP, action: z0(l0, (t = o), !1, (n = i)) },
                { keyCode: Lf.PAGE_DOWN, action: z0(l0, t, !0, n) },
              ],
              r
            )),
            OC(e) && a.get() && (BC(a, o, !1), o.nodeChanged());
        })),
      p
    );
  }
  ((Fy = My = My || {})[(Fy.Up = -1)] = "Up"), (Fy[(Fy.Down = 1)] = "Down");
  var FC = R(Vy, My.Up, Tu, Ou),
    UC = R(Vy, My.Down, Ou, Tu),
    zC = Yn,
    HC = Ys,
    jC = function (e, t) {
      var n = e.selection.getRng(),
        r = e.getBody();
      if (t) {
        var o = ss.fromRangeEnd(n),
          i = zy(r, o);
        return Z(i.positions);
      }
      return (o = ss.fromRangeStart(n)), Q((i = Uy(r, o)).positions);
    },
    VC = R(s0, !0),
    qC = R(s0, !1),
    $C = function (e) {
      return U(A(e.selection.getSelectedBlocks(), kt.fromDom), function (e) {
        return (
          !w0(e) &&
          !Ot(e).exists(w0) &&
          pr(e, function (e) {
            return Xn(e.dom) || Yn(e.dom);
          }).exists(function (e) {
            return Xn(e.dom);
          })
        );
      });
    },
    WC = Yn,
    KC = R(
      $0,
      function (e) {
        return e.bottom;
      },
      function (e, t) {
        return e.y < t;
      }
    ),
    XC = R(
      $0,
      function (e) {
        return e.top;
      },
      function (e, t) {
        return e.y > t;
      }
    ),
    YC = R(W0, Uy),
    GC = R(W0, zy),
    JC = function (e, t) {
      return (
        (n = ss.after(t)),
        !!Wn(n.getNode()) ||
          ef(e, ss.after(t))
            .map(function (e) {
              return Wn(e.getNode());
            })
            .getOr(!1)
      );
      var n;
    },
    QC = or([{ br: [] }, { block: [] }, { none: [] }]),
    ZC = dt().browser,
    e1 = dt(),
    t1 = R(PC, xo),
    n1 = R(PC, " "),
    r1 =
      ((o1.prototype.nodeChanged = function (e) {
        var t,
          n,
          r,
          o = this.editor.selection;
        this.editor.initialized &&
          o &&
          !this.editor.getParam("disable_nodechange") &&
          !this.editor.mode.isReadOnly() &&
          ((r = this.editor.getBody()),
          ((t = o.getStart(!0) || r).ownerDocument === this.editor.getDoc() &&
            this.editor.dom.isChildOf(t, r)) ||
            (t = r),
          (n = []),
          this.editor.dom.getParent(t, function (e) {
            return e === r || void n.push(e);
          }),
          ((e = e || {}).element = t),
          (e.parents = n),
          this.editor.fire("NodeChange", e));
      }),
      (o1.prototype.isSameElementPath = function (e) {
        var t,
          n = this.editor.$(e).parentsUntil(this.editor.getBody()).add(e);
        if (n.length === this.lastPath.length) {
          for (t = n.length; 0 <= t && n[t] === this.lastPath[t]; t--);
          if (-1 === t) return (this.lastPath = n), !0;
        }
        return (this.lastPath = n), !1;
      }),
      o1);
  function o1(r) {
    var o;
    (this.lastPath = []), (this.editor = r);
    var t = this;
    "onselectionchange" in r.getDoc() ||
      r.on("NodeChange click mouseup keyup focus", function (e) {
        var t = r.selection.getRng(),
          n = {
            startContainer: t.startContainer,
            startOffset: t.startOffset,
            endContainer: t.endContainer,
            endOffset: t.endOffset,
          };
        ("nodechange" !== e.type && kf(n, o)) || r.fire("SelectionChange"),
          (o = n);
      }),
      r.on("contextmenu", function () {
        r.fire("SelectionChange");
      }),
      r.on("SelectionChange", function () {
        var e = r.selection.getStart(!0);
        !e ||
          (!xt.range && r.selection.isCollapsed()) ||
          (Bl(r) &&
            !t.isSameElementPath(e) &&
            r.dom.isChildOf(e, r.getBody()) &&
            r.nodeChanged({ selectionChange: !0 }));
      }),
      r.on("mouseup", function (e) {
        !e.isDefaultPrevented() &&
          Bl(r) &&
          ("IMG" === r.selection.getNode().nodeName
            ? _r.setEditorTimeout(r, function () {
                r.nodeChanged();
              })
            : r.nodeChanged());
      });
  }
  function i1(e) {
    return zn(e) && go(kt.fromDom(e));
  }
  function a1(e) {
    var t = e.getBoundingClientRect(),
      n = e.ownerDocument,
      r = n.documentElement,
      o = n.defaultView;
    return {
      top: t.top + o.pageYOffset - r.clientTop,
      left: t.left + o.pageXOffset - r.clientLeft,
    };
  }
  function u1(e) {
    e && e.parentNode && e.parentNode.removeChild(e);
  }
  function s1(e, S) {
    var E = _r.throttle(function (e, t) {
      S._selectionOverrides.hideFakeCaret(), S.selection.placeCaretAt(e, t);
    }, 0);
    return (
      S.on("remove", E.stop),
      function (w) {
        return e.on(function (e) {
          var t,
            n,
            r,
            o,
            i,
            a,
            u,
            s,
            c,
            l,
            f,
            d,
            m,
            g,
            p,
            h,
            v,
            b,
            y,
            C,
            x = Math.max(
              Math.abs(w.screenX - e.screenX),
              Math.abs(w.screenY - e.screenY)
            );
          if (!e.dragging && 10 < x) {
            if (S.fire("dragstart", { target: e.element }).isDefaultPrevented())
              return;
            (e.dragging = !0), S.focus();
          }
          e.dragging &&
            ((d = e),
            (t = {
              pageX:
                ((p = w),
                (h = (g = S).inline ? a1(g.getBody()) : { left: 0, top: 0 }),
                (C = (y = g).getBody()),
                (v = y.inline
                  ? { left: C.scrollLeft, top: C.scrollTop }
                  : { left: 0, top: 0 }),
                (m = {
                  pageX:
                    (b = (function (e, t) {
                      if (t.target.ownerDocument === e.getDoc())
                        return { left: t.pageX, top: t.pageY };
                      var n,
                        r,
                        o,
                        i,
                        a,
                        u = a1(e.getContentAreaContainer()),
                        s =
                          ((r = (n = e).getBody()),
                          (o = n.getDoc().documentElement),
                          (i = { left: r.scrollLeft, top: r.scrollTop }),
                          (a = {
                            left: r.scrollLeft || o.scrollLeft,
                            top: r.scrollTop || o.scrollTop,
                          }),
                          n.inline ? i : a);
                      return {
                        left: t.pageX - u.left + s.left,
                        top: t.pageY - u.top + s.top,
                      };
                    })(g, p)).left -
                    h.left +
                    v.left,
                  pageY: b.top - h.top + v.top,
                }).pageX - d.relX),
              pageY: m.pageY + 5,
            }),
            (l = e.ghost),
            (f = S.getBody()),
            l.parentNode !== f && f.appendChild(l),
            (n = e.ghost),
            (o = e.width),
            (i = e.height),
            (a = e.maxX),
            (u = e.maxY),
            (c = s = 0),
            (n.style.left = (r = t).pageX + "px"),
            (n.style.top = r.pageY + "px"),
            u < r.pageY + i && (c = r.pageY + i - u),
            (n.style.width =
              o - (s = a < r.pageX + o ? r.pageX + o - a : s) + "px"),
            (n.style.height = i - c + "px"),
            E(w.clientX, w.clientY));
        });
      }
    );
  }
  function c1(e) {
    function t(e) {
      var t, n, r, o, i, a;
      0 === e.button &&
        ((t = M(
          c.dom.getParents(e.target),
          (function () {
            for (var n = [], e = 0; e < arguments.length; e++)
              n[e] = arguments[e];
            return function (e) {
              for (var t = 0; t < n.length; t++) if (n[t](e)) return !0;
              return !1;
            };
          })(P1, L1)
        ).getOr(null)),
        (i = c.getBody()),
        P1((a = t)) &&
          a !== i &&
          ((n = c.dom.getPos(t)),
          (r = c.getBody()),
          (o = c.getDoc().documentElement),
          u.set({
            element: t,
            dragging: !1,
            screenX: e.screenX,
            screenY: e.screenY,
            maxX: (c.inline ? r.scrollWidth : o.offsetWidth) - 2,
            maxY: (c.inline ? r.scrollHeight : o.offsetHeight) - 2,
            relX: e.pageX - n.x,
            relY: e.pageY - n.y,
            width: t.offsetWidth,
            height: t.offsetHeight,
            ghost: (function (e, t, n) {
              var r = c.dom,
                o = e.cloneNode(!0);
              r.setStyles(o, { width: t, height: n }),
                r.setAttrib(o, "data-mce-selected", null);
              var i = r.create("div", {
                class: "mce-drag-container",
                "data-mce-bogus": "all",
                unselectable: "on",
                contenteditable: "false",
              });
              return (
                r.setStyles(i, {
                  position: "absolute",
                  opacity: 0.5,
                  overflow: "hidden",
                  border: 0,
                  padding: 0,
                  margin: 0,
                  width: t,
                  height: n,
                }),
                r.setStyles(o, { margin: 0, boxSizing: "border-box" }),
                i.appendChild(o),
                i
              );
            })(t, t.offsetWidth, t.offsetHeight),
          })));
    }
    function n(u) {
      i.on(function (e) {
        var t, n, r, o, i, a;
        e.dragging &&
          ((o =
            3 ===
            (a = (r = s).selection.getSel().getRangeAt(0).startContainer)
              .nodeType
              ? a.parentNode
              : a) === (i = e.element) ||
            r.dom.isChildOf(o, i) ||
            P1(o) ||
            ((n = e.element.cloneNode(!0)).removeAttribute("data-mce-selected"),
            (t = n),
            s
              .fire("drop", { clientX: u.clientX, clientY: u.clientY })
              .isDefaultPrevented() ||
              s.undoManager.transact(function () {
                u1(e.element),
                  s.insertContent(s.dom.getOuterHTML(t)),
                  s._selectionOverrides.hideFakeCaret();
              })),
          s.fire("dragend"));
      }),
        I1(i);
    }
    var r,
      o,
      i,
      s,
      u,
      c,
      a = fu(),
      l = Za.DOM,
      f = document,
      d = s1((u = a), (c = e)),
      m =
        ((r = i = a),
        function () {
          r.on(function (e) {
            e.dragging && o.fire("dragend");
          }),
            I1(r);
        });
    (o = s = e).on("mousedown", t),
      e.on("mousemove", d),
      e.on("mouseup", n),
      l.bind(f, "mousemove", d),
      l.bind(f, "mouseup", m),
      e.on("remove", function () {
        l.unbind(f, "mousemove", d), l.unbind(f, "mouseup", m);
      }),
      e.on("keydown", function (e) {
        e.keyCode === Lf.ESC && m();
      });
  }
  function l1(e) {
    var n, i;
    function a(e) {
      var t;
      e.isDefaultPrevented() ||
        ((t = e.dataTransfer) &&
          (T(t.types, "Files") || 0 < t.files.length) &&
          (e.preventDefault(),
          "drop" === e.type && Uv(i, "Dropped file type is not supported")));
    }
    function u(e) {
      gd(i, e.target) && a(e);
    }
    function t() {
      var t = Za.DOM,
        n = i.dom,
        r = document,
        o = i.inline ? i.getBody() : i.getDoc(),
        e = ["drop", "dragover"];
      Y(e, function (e) {
        t.bind(r, e, u), n.bind(o, e, a);
      }),
        i.on("remove", function () {
          Y(e, function (e) {
            t.unbind(r, e, u), n.unbind(o, e, a);
          });
        });
    }
    c1(e),
      (n = e).on("drop", function (e) {
        var t =
          void 0 !== e.clientX
            ? n.getDoc().elementFromPoint(e.clientX, e.clientY)
            : null;
        (!P1(t) && "false" !== n.dom.getContentEditableParent(t)) ||
          e.preventDefault();
      }),
      e.getParam("block_unsupported_drop", !0, "boolean") &&
        (i = e).on("init", function () {
          _r.setEditorTimeout(i, t, 0);
        });
  }
  function f1(e, t) {
    return vf(e.getBody(), t);
  }
  function d1(l) {
    function f(e) {
      return e !== x && (F1(e) || Jn(e)) && y.isChildOf(e, x);
    }
    function c(e) {
      return rp(e) || op(e) || Zg(e) || ep(e);
    }
    function d(e) {
      e && b.setRng(e);
    }
    function m(e, t, n, r) {
      return (
        void 0 === r && (r = !0),
        l
          .fire("ShowCaret", { target: t, direction: e, before: n })
          .isDefaultPrevented()
          ? null
          : (r && b.scrollIntoView(t, -1 === e), i.show(n, t))
      );
    }
    function t(e) {
      return Ir(e) || _o(e) || Ao(e);
    }
    function g(e) {
      return t(e.startContainer) || t(e.endContainer);
    }
    function p(e, t) {
      if (!e) return null;
      if (e.collapsed) {
        if (!g(e)) {
          var n = t ? 1 : -1,
            r = rc(n, x, e),
            o = r.getNode(!t);
          if (Ks(o)) return m(n, o, !!t && !r.isAtEnd(), !1);
          var i = r.getNode(t);
          if (Ks(i)) return m(n, i, !t && !r.isAtEnd(), !1);
        }
        return null;
      }
      var a = e.startContainer,
        u = e.startOffset,
        s = e.endOffset;
      if (
        (3 === a.nodeType &&
          0 === u &&
          F1(a.parentNode) &&
          ((a = a.parentNode), (u = y.nodeIndex(a)), (a = a.parentNode)),
        1 !== a.nodeType)
      )
        return null;
      if (s === u + 1 && a === e.endContainer) {
        var c = a.childNodes[u];
        if (f(c))
          return (function (e) {
            var t = e.cloneNode(!0),
              n = l.fire("ObjectSelected", { target: e, targetClone: t });
            if (n.isDefaultPrevented()) return null;
            var r = (function (e, t, n) {
                var r = l.$,
                  o = vr(kt.fromDom(l.getBody()), "#" + w).fold(
                    function () {
                      return r([]);
                    },
                    function (e) {
                      return r([e.dom]);
                    }
                  );
                0 === o.length &&
                  (o = r(
                    '<div data-mce-bogus="all" class="mce-offscreen-selection"></div>'
                  ).attr("id", w)).appendTo(l.getBody());
                var i = y.createRng();
                t === n && xt.ie
                  ? (o
                      .empty()
                      .append(
                        '<p style="font-size: 0" data-mce-bogus="all">\xa0</p>'
                      )
                      .append(t),
                    i.setStartAfter(o[0].firstChild.firstChild),
                    i.setEndAfter(t))
                  : (o.empty().append(xo).append(t).append(xo),
                    i.setStart(o[0].firstChild, 1),
                    i.setEnd(o[0].lastChild, 0)),
                  o.css({ top: y.getPos(e, l.getBody()).y }),
                  o[0].focus();
                var a = b.getSel();
                return a.removeAllRanges(), a.addRange(i), i;
              })(e, n.targetClone, t),
              o = kt.fromDom(e);
            return (
              Y(
                bu(kt.fromDom(l.getBody()), "*[data-mce-selected]"),
                function (e) {
                  je(o, e) || yn(e, S);
                }
              ),
              y.getAttrib(e, S) || e.setAttribute(S, "1"),
              (v = e),
              E(),
              r
            );
          })(c);
      }
      return null;
    }
    function h() {
      v && v.removeAttribute(S),
        vr(kt.fromDom(l.getBody()), "#" + w).each(Ln),
        (v = null);
    }
    var v,
      n,
      e,
      o,
      b = l.selection,
      y = l.dom,
      C = y.isBlock,
      x = l.getBody(),
      i = $s(l, x, C, function () {
        return yd(l);
      }),
      w = "sel-" + y.uniqueId(),
      S = "data-mce-selected",
      r = b.getRng,
      E = function () {
        i.hide();
      };
    return (
      xt.ceFalse &&
        !hh(l) &&
        (l.on("mouseup", function (e) {
          var t = r();
          t.collapsed && cv(l, e.clientX, e.clientY) && Nb(l, t, !1).each(d);
        }),
        l.on("click", function (e) {
          var t = f1(l, e.target);
          t &&
            (F1(t) && (e.preventDefault(), l.focus()),
            M1(t) && y.isChildOf(t, b.getNode()) && h());
        }),
        l.on("blur NewBlock", h),
        l.on("ResizeWindow FullscreenStateChanged", i.reposition),
        l.on(
          "tap",
          function (e) {
            var t = e.target,
              n = f1(l, t);
            F1(n)
              ? (e.preventDefault(), kb(l, n).each(p))
              : f(t) && kb(l, t).each(p);
          },
          !0
        ),
        l.on("mousedown", function (e) {
          var t,
            n,
            r,
            o,
            i,
            a,
            u,
            s = e.target;
          (s !== x && "HTML" !== s.nodeName && !y.isChildOf(s, x)) ||
            !1 === cv(l, e.clientX, e.clientY) ||
            ((t = f1(l, s))
              ? F1(t)
                ? (e.preventDefault(), kb(l, t).each(p))
                : (h(),
                  (M1(t) && e.shiftKey) ||
                    bf(e.clientX, e.clientY, b.getRng()) ||
                    (E(), b.placeCaretAt(e.clientX, e.clientY)))
              : f(s)
              ? kb(l, s).each(p)
              : !1 === Ks(s) &&
                (h(),
                E(),
                (n = Qy(x, e.clientX, e.clientY)) &&
                  ((r = s),
                  (o = n.node),
                  (a = y.getParent(r, C)),
                  (u = y.getParent(o, C)),
                  (!K(a) &&
                    ((r !== u && y.isChildOf(a, u) && !1 === F1(f1(l, a))) ||
                      (!y.isChildOf(u, a) &&
                        ((i = u), y.getParent(a, C) !== y.getParent(i, C)) &&
                        (function (e) {
                          var t = e.firstChild;
                          if (!K(t)) {
                            var n = ss.before(t);
                            if (Wn(n.getNode()) && 1 === e.childNodes.length)
                              return !c(n);
                            var r = Ic(e).next(n);
                            return r && !c(r);
                          }
                        })(a)))) ||
                    (e.preventDefault(),
                    d(m(1, n.node, n.before, !1)),
                    l.getBody().focus()))));
        }),
        l.on("keypress", function (e) {
          Lf.modifierPressed(e) || (F1(b.getNode()) && e.preventDefault());
        }),
        l.on("GetSelectionRange", function (e) {
          var t = e.range;
          v &&
            (v.parentNode
              ? ((t = t.cloneRange()).selectNode(v), (e.range = t))
              : (v = null));
        }),
        l.on("SetSelectionRange", function (e) {
          var t, n, r, o, i, a, u;
          e.range =
            ((t = e.range),
            (n = l.schema.getShortEndedElements()),
            (r = y.createRng()),
            (o = t.startContainer),
            (i = t.startOffset),
            (a = t.endContainer),
            (u = t.endOffset),
            ke(n, o.nodeName.toLowerCase())
              ? 0 === i
                ? r.setStartBefore(o)
                : r.setStartAfter(o)
              : r.setStart(o, i),
            ke(n, a.nodeName.toLowerCase())
              ? 0 === u
                ? r.setEndBefore(a)
                : r.setEndAfter(a)
              : r.setEnd(a, u),
            r);
          var s = p(e.range, e.forward);
          s && (e.range = s);
        }),
        l.on("AfterSetSelectionRange", function (e) {
          var t = e.range,
            n = t.startContainer.parentNode;
          g(t) || "mcepastebin" === n.id || E(),
            y.hasClass(n, "mce-offscreen-selection") || h();
        }),
        l.on("copy", function (e) {
          var t,
            n,
            r = e.clipboardData;
          e.isDefaultPrevented() ||
            !e.clipboardData ||
            xt.ie ||
            ((t = (n = y.get(w)) && n.getElementsByTagName("*")[0]) &&
              (e.preventDefault(),
              r.clearData(),
              r.setData("text/html", t.outerHTML),
              r.setData("text/plain", t.outerText || t.innerText)));
        }),
        l1(l),
        (e = du(function () {
          var e, t;
          n.removed ||
            !n.getBody().contains(document.activeElement) ||
            ((e = n.selection.getRng()).collapsed &&
              ((t = _b(n, e, !1)), n.selection.setRng(t)));
        }, 0)),
        (n = l).on("focus", function () {
          e.throttle();
        }),
        n.on("blur", function () {
          e.cancel();
        }),
        (o = l).on("init", function () {
          o.on("focusin", function (e) {
            var t,
              n,
              r = e.target;
            Jn(r) &&
              ((t = vf(o.getBody(), r)),
              (n = Yn(t) ? t : r),
              o.selection.getNode() !== n &&
                kb(o, n).each(function (e) {
                  return o.selection.setRng(e);
                }));
          });
        })),
      {
        showCaret: m,
        showBlockCaretContainer: function (e) {
          e.hasAttribute("data-mce-caret") &&
            (zr(e), d(r()), b.scrollIntoView(e));
        },
        hideFakeCaret: E,
        destroy: function () {
          i.destroy(), (v = null);
        },
      }
    );
  }
  function m1(a) {
    function e(e, t) {
      try {
        a.getDoc().execCommand(e, !1, t);
      } catch (e) {}
    }
    function u(e) {
      return e.isDefaultPrevented();
    }
    function t() {
      a.shortcuts.add("meta+a", null, "SelectAll");
    }
    function n() {
      a.inline ||
        b.bind(a.getDoc(), "mousedown mouseup", function (e) {
          var t;
          e.target === a.getDoc().documentElement &&
            ((t = y.getRng()),
            a.getBody().focus(),
            "mousedown" === e.type
              ? Ir(t.startContainer) || y.placeCaretAt(e.clientX, e.clientY)
              : y.setRng(t));
        });
    }
    function r() {
      Range.prototype.getClientRects ||
        a.on("mousedown", function (e) {
          var t;
          u(e) ||
            "HTML" !== e.target.nodeName ||
            ((t = a.getBody()).blur(),
            _r.setEditorTimeout(a, function () {
              t.focus();
            }));
        });
    }
    function o() {
      a.on("click", function (e) {
        var t = e.target;
        /^(IMG|HR)$/.test(t.nodeName) &&
          "false" !== b.getContentEditableParent(t) &&
          (e.preventDefault(), a.selection.select(t), a.nodeChanged()),
          "A" === t.nodeName &&
            b.hasClass(t, "mce-item-anchor") &&
            (e.preventDefault(), y.select(t));
      });
    }
    function i() {
      a.on("keydown", function (e) {
        if (
          !u(e) &&
          e.keyCode === h &&
          y.isCollapsed() &&
          0 === y.getRng().startOffset
        ) {
          var t = y.getNode().previousSibling;
          if (t && t.nodeName && "table" === t.nodeName.toLowerCase())
            return e.preventDefault(), !1;
        }
      });
    }
    function s() {
      a.getParam("readonly") ||
        a.on("BeforeExecCommand mousedown", function () {
          e("StyleWithCSS", !1),
            e("enableInlineTableEditing", !1),
            Bs(a) || e("enableObjectResizing", !1);
        });
    }
    function c() {
      a.contentStyles.push(
        "img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}"
      );
    }
    function l() {
      a.inline ||
        a.on("keydown", function () {
          document.activeElement === document.body && a.getWin().focus();
        });
    }
    function f() {
      a.inline ||
        (a.contentStyles.push("body {min-height: 150px}"),
        a.on("click", function (e) {
          var t;
          "HTML" === e.target.nodeName &&
            (11 < xt.ie
              ? a.getBody().focus()
              : ((t = a.selection.getRng()),
                a.getBody().focus(),
                a.selection.setRng(t),
                a.selection.normalize(),
                a.nodeChanged()));
        }));
    }
    function d() {
      xt.mac &&
        a.on("keydown", function (e) {
          !Lf.metaKeyPressed(e) ||
            e.shiftKey ||
            (37 !== e.keyCode && 39 !== e.keyCode) ||
            (e.preventDefault(),
            a.selection
              .getSel()
              .modify(
                "move",
                37 === e.keyCode ? "backward" : "forward",
                "lineboundary"
              ));
        });
    }
    function m() {
      a.on("click", function (e) {
        var t = e.target;
        do {
          if ("A" === t.tagName) return void e.preventDefault();
        } while ((t = t.parentNode));
      }),
        a.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}");
    }
    function g() {
      a.on("init", function () {
        a.dom.bind(a.getBody(), "submit", function (e) {
          e.preventDefault();
        });
      });
    }
    var p = Et.each,
      h = Lf.BACKSPACE,
      v = Lf.DELETE,
      b = a.dom,
      y = a.selection,
      C = a.parser,
      x = xt.gecko,
      w = xt.ie,
      S = xt.webkit,
      E = "data:text/mce-internal,",
      k = w ? "Text" : "URL",
      N = te;
    return (
      hh(a)
        ? (S && (n(), o(), g(), t(), xt.iOS && (l(), f(), m())),
          x && (r(), s(), c(), d()))
        : (a.on("keydown", function (e) {
            if (!u(e) && e.keyCode === Lf.BACKSPACE) {
              var t,
                n = (t = y.getRng()).startContainer,
                r = t.startOffset,
                o = b.getRoot(),
                i = n;
              if (t.collapsed && 0 === r) {
                for (
                  ;
                  i &&
                  i.parentNode &&
                  i.parentNode.firstChild === i &&
                  i.parentNode !== o;

                )
                  i = i.parentNode;
                "BLOCKQUOTE" === i.tagName &&
                  (a.formatter.toggle("blockquote", null, i),
                  (t = b.createRng()).setStart(n, 0),
                  t.setEnd(n, 0),
                  y.setRng(t));
              }
            }
          }),
          a.on("keydown", function (e) {
            var t,
              n,
              r,
              o,
              i = e.keyCode;
            u(e) ||
              (i !== v && i !== h) ||
              ((t = a.selection.isCollapsed()),
              (n = a.getBody()),
              (t && !b.isEmpty(n)) ||
                (!t &&
                  ((r = R(a.selection.getRng())),
                  (o = b.createRng()).selectNode(a.getBody()),
                  r !== R(o))) ||
                (e.preventDefault(),
                a.setContent(""),
                n.firstChild && b.isBlock(n.firstChild)
                  ? a.selection.setCursorLocation(n.firstChild, 0)
                  : a.selection.setCursorLocation(n, 0),
                a.nodeChanged()));
          }),
          xt.windowsPhone ||
            a.on(
              "keyup focusin mouseup",
              function (e) {
                Lf.modifierPressed(e) || y.normalize();
              },
              !0
            ),
          S &&
            (n(),
            o(),
            ks(a) &&
              a.on("init", function () {
                e("DefaultParagraphSeparator", ks(a));
              }),
            g(),
            i(),
            C.addNodeFilter("br", function (e) {
              for (var t = e.length; t--; )
                "Apple-interchange-newline" === e[t].attr("class") &&
                  e[t].remove();
            }),
            xt.iOS ? (l(), f(), m()) : t()),
          11 <= xt.ie && (f(), i()),
          xt.ie &&
            (t(),
            e("AutoUrlDetect", !1),
            a.on("dragstart", function (e) {
              var t, n, r;
              (t = e).dataTransfer &&
                (a.selection.isCollapsed() &&
                  "IMG" === t.target.tagName &&
                  y.select(t.target),
                0 < (n = a.selection.getContent()).length &&
                  ((r = E + escape(a.id) + "," + escape(n)),
                  t.dataTransfer.setData(k, r)));
            }),
            a.on("drop", function (e) {
              var t, n, r, o;
              u(e) ||
                ((t =
                  e.dataTransfer &&
                  (o = e.dataTransfer.getData(k)) &&
                  0 <= o.indexOf(E)
                    ? ((o = o.substr(E.length).split(",")),
                      { id: unescape(o[0]), html: unescape(o[1]) })
                    : null) &&
                  t.id !== a.id &&
                  (e.preventDefault(),
                  (n = Ef(e.x, e.y, a.getDoc())),
                  y.setRng(n),
                  (r = t.html),
                  a.queryCommandSupported("mceInsertClipboardContent")
                    ? a.execCommand("mceInsertClipboardContent", !1, {
                        content: r,
                        internal: !0,
                      })
                    : a.execCommand("mceInsertContent", !1, r)));
            })),
          x &&
            (a.on("keydown", function (e) {
              if (
                !u(e) &&
                e.keyCode === h &&
                a.getBody().getElementsByTagName("hr").length &&
                y.isCollapsed() &&
                0 === y.getRng().startOffset
              ) {
                var t = y.getNode(),
                  n = t.previousSibling;
                if ("HR" === t.nodeName)
                  return b.remove(t), void e.preventDefault();
                n &&
                  n.nodeName &&
                  "hr" === n.nodeName.toLowerCase() &&
                  (b.remove(n), e.preventDefault());
              }
            }),
            r(),
            a.on("keypress", function (e) {
              var t;
              if (!u(e) && (8 === e.keyCode || 46 === e.keyCode) && A())
                return (
                  (t = _()),
                  a.getDoc().execCommand("delete", !1, null),
                  t(),
                  e.preventDefault(),
                  !1
                );
            }),
            b.bind(a.getDoc(), "cut", function (e) {
              var t;
              !u(e) &&
                A() &&
                ((t = _()),
                _r.setEditorTimeout(a, function () {
                  t();
                }));
            }),
            s(),
            a.on("SetContent ExecCommand", function (e) {
              ("setcontent" !== e.type && "mceInsertLink" !== e.command) ||
                p(b.select("a"), function (e) {
                  var t = e.parentNode,
                    n = b.getRoot();
                  if (t.lastChild === e) {
                    for (; t && !b.isBlock(t); ) {
                      if (t.parentNode.lastChild !== t || t === n) return;
                      t = t.parentNode;
                    }
                    b.add(t, "br", { "data-mce-bogus": 1 });
                  }
                });
            }),
            c(),
            d(),
            i())),
      {
        refreshContentEditable: N,
        isHidden: function () {
          if (!x || a.removed) return !1;
          var e = a.selection.getSel();
          return !e || !e.rangeCount || 0 === e.rangeCount;
        },
      }
    );
    function _() {
      var e = b.getAttribs(y.getStart().cloneNode(!1));
      return function () {
        var t = y.getStart();
        t !== a.getBody() &&
          (b.setAttrib(t, "style", null),
          p(e, function (e) {
            t.setAttributeNode(e.cloneNode(!0));
          }));
      };
    }
    function A() {
      return (
        !y.isCollapsed() &&
        b.getParent(y.getStart(), b.isBlock) !==
          b.getParent(y.getEnd(), b.isBlock)
      );
    }
    function R(e) {
      var t = b.create("body"),
        n = e.cloneContents();
      return t.appendChild(n), y.serializer.serialize(t, { format: "html" });
    }
  }
  function g1(e) {
    return ae(e, function (e) {
      return !1 === b(e);
    });
  }
  function p1(e) {
    var t = e.settings;
    return g1({
      block_elements: t.block_elements,
      boolean_attributes: t.boolean_attributes,
      custom_elements: t.custom_elements,
      extended_valid_elements: t.extended_valid_elements,
      invalid_elements: t.invalid_elements,
      invalid_styles: t.invalid_styles,
      move_caret_before_on_enter_elements:
        t.move_caret_before_on_enter_elements,
      non_empty_elements: t.non_empty_elements,
      schema: t.schema,
      self_closing_elements: t.self_closing_elements,
      short_ended_elements: t.short_ended_elements,
      special: t.special,
      text_block_elements: t.text_block_elements,
      text_inline_elements: t.text_inline_elements,
      valid_children: t.valid_children,
      valid_classes: t.valid_classes,
      valid_elements: t.valid_elements,
      valid_styles: t.valid_styles,
      verify_html: t.verify_html,
      whitespace_elements: t.whitespace_elements,
      padd_empty_block_inline_children: t.format_empty_lines,
    });
  }
  function h1(e) {
    var t = e.settings,
      n = e.editorUpload.blobCache;
    return g1({
      allow_conditional_comments: t.allow_conditional_comments,
      allow_html_data_urls: t.allow_html_data_urls,
      allow_svg_data_urls: t.allow_svg_data_urls,
      allow_html_in_named_anchor: t.allow_html_in_named_anchor,
      allow_script_urls: t.allow_script_urls,
      allow_unsafe_link_target: t.allow_unsafe_link_target,
      convert_fonts_to_spans: t.convert_fonts_to_spans,
      fix_list_elements: t.fix_list_elements,
      font_size_legacy_values: t.font_size_legacy_values,
      forced_root_block: t.forced_root_block,
      forced_root_block_attrs: t.forced_root_block_attrs,
      padd_empty_with_br: t.padd_empty_with_br,
      preserve_cdata: t.preserve_cdata,
      remove_trailing_brs: t.remove_trailing_brs,
      inline_styles: t.inline_styles,
      root_name: e.inline ? e.getElement().nodeName.toLowerCase() : void 0,
      validate: !0,
      blob_cache: n,
      document: e.getDoc(),
      images_dataimg_filter: t.images_dataimg_filter,
    });
  }
  function v1(e) {
    var t, u, n;
    e.bindPendingEventDelegates(),
      (e.initialized = !0),
      e.fire("Init"),
      e.focus(!0),
      (n = (u = e).dom.getRoot()),
      u.inline ||
        (Bl(u) && u.selection.getStart(!0) !== n) ||
        nf(n).each(function (e) {
          var t,
            n,
            r,
            o,
            i = e.getNode(),
            a = cn(i) ? nf(i).getOr(e) : e;
          xt.browser.isIE()
            ? ((t = u),
              (n = a.toRange()),
              (r = kt.fromDom(t.getBody())),
              (o = (sd(t) ? ve.from(n) : ve.none()).map(cd).filter(ud(r))),
              (t.bookmark = o.isSome() ? o : t.bookmark))
            : u.selection.setRng(a.toRange());
        }),
      e.nodeChanged({ initial: !0 }),
      e.execCallback("init_instance_callback", e),
      (t = e).settings.auto_focus &&
        _r.setEditorTimeout(
          t,
          function () {
            var e =
              !0 === t.settings.auto_focus
                ? t
                : t.editorManager.get(t.settings.auto_focus);
            e.destroyed || e.focus();
          },
          100
        );
  }
  function b1(e) {
    return (e.inline ? e.ui : e.dom).styleSheetLoader;
  }
  function y1(e) {
    function t() {
      o.unloadAll(a), e.inline || e.ui.styleSheetLoader.unloadAll(i);
    }
    function n() {
      e.removed ? t() : e.on("remove", t);
    }
    var r,
      o = b1(e),
      i = Os(e),
      a = e.contentCSS;
    0 < e.contentStyles.length &&
      ((r = ""),
      Et.each(e.contentStyles, function (e) {
        r += e + "\r\n";
      }),
      e.dom.addStyle(r));
    var u,
      s,
      c,
      l,
      f,
      d,
      m,
      g,
      p,
      h = Nr.all(
        ((u = e),
        (s = a),
        (c = i),
        (l = [
          new Nr(function (e, t) {
            return b1(u).loadAll(s, e, t);
          }),
        ]),
        u.inline
          ? l
          : l.concat([
              new Nr(function (e, t) {
                return u.ui.styleSheetLoader.loadAll(c, e, t);
              }),
            ]))
      )
        .then(n)
        .catch(n);
    return (
      e.settings.content_style &&
        ((d = (f = e).settings.content_style),
        (m = kt.fromDom(f.getBody())),
        (g = jt(Bn(m))),
        pn((p = kt.fromTag("style")), "type", "text/css"),
        Pn(p, kt.fromText(d)),
        Pn(g, p),
        f.on("remove", function () {
          Ln(p);
        })),
      h
    );
  }
  function C1(e) {
    var t;
    !0 !== e.removed &&
      (hh((t = e)) || t.load({ initial: !0, format: "html" }),
      (t.startContent = t.getContent({ format: "raw" })),
      v1(e));
  }
  function x1(t, e) {
    var n = t.settings,
      r = t.getElement(),
      o = t.getDoc();
    n.inline || (t.getElement().style.visibility = t.orgVisibility),
      e || t.inline || (o.open(), o.write(t.iframeHTML), o.close()),
      t.inline &&
        (U1.addClass(r, "mce-content-body"),
        (t.contentDocument = o = document),
        (t.contentWindow = window),
        (t.bodyElement = r),
        (t.contentAreaContainer = r));
    var u,
      i,
      a,
      s,
      c,
      l,
      f,
      d,
      m,
      g,
      p,
      h,
      v = t.getBody();
    (v.disabled = !0),
      (t.readonly = !!n.readonly),
      t.readonly ||
        (t.inline &&
          "static" === U1.getStyle(v, "position", !0) &&
          (v.style.position = "relative"),
        (v.contentEditable = t.getParam("content_editable_state", !0))),
      (v.disabled = !1),
      (t.editorUpload = Gv(t)),
      (t.schema = ro(p1(t))),
      (t.dom = Za(o, {
        keep_values: !0,
        url_converter: t.convertURL,
        url_converter_scope: t,
        hex_colors: n.force_hex_style_colors,
        update_styles: !0,
        root_element: t.inline ? t.getBody() : null,
        collect: function () {
          return t.inline;
        },
        schema: t.schema,
        contentCssCors: t.getParam("content_css_cors", !1, "boolean"),
        referrerPolicy: Rs(t),
        onSetAttrib: function (e) {
          t.fire("SetAttrib", e);
        },
      })),
      (t.parser =
        ((i = Xh(h1((u = t)), u.schema)).addAttributeFilter(
          "src,href,style,tabindex",
          function (e, t) {
            for (var n, r, o = e.length, i = u.dom, a = "data-mce-" + t; o--; )
              (r = (n = e[o]).attr(t)) &&
                !n.attr(a) &&
                0 !== r.indexOf("data:") &&
                0 !== r.indexOf("blob:") &&
                ("style" === t
                  ? ((r = i.serializeStyle(i.parseStyle(r), n.name)).length ||
                      (r = null),
                    n.attr(a, r),
                    n.attr(t, r))
                  : "tabindex" === t
                  ? (n.attr(a, r), n.attr(t, null))
                  : n.attr(a, u.convertURL(r, t, n.name)));
          }
        ),
        i.addNodeFilter("script", function (e) {
          for (var t = e.length; t--; ) {
            var n = e[t],
              r = n.attr("type") || "no/type";
            0 !== r.indexOf("mce-") && n.attr("type", "mce-" + r);
          }
        }),
        u.settings.preserve_cdata &&
          i.addNodeFilter("#cdata", function (e) {
            for (var t = e.length; t--; ) {
              var n = e[t];
              (n.type = 8),
                (n.name = "#comment"),
                (n.value = "[CDATA[" + u.dom.encode(n.value) + "]]");
            }
          }),
        i.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div", function (e) {
          for (var t = e.length, n = u.schema.getNonEmptyElements(); t--; ) {
            var r = e[t];
            r.isEmpty(n) &&
              0 === r.getAll("br").length &&
              (r.append(new Hd("br", 1)).shortEnded = !0);
          }
        }),
        i)),
      (t.serializer = Jh(
        ((s = (a = t).settings),
        _e(
          _e(_e({}, h1(a)), p1(a)),
          g1({
            url_converter: s.url_converter,
            url_converter_scope: s.url_converter_scope,
            element_format: s.element_format,
            entities: s.entities,
            entity_encoding: s.entity_encoding,
            indent: s.indent,
            indent_after: s.indent_after,
            indent_before: s.indent_before,
          })
        )),
        t
      )),
      (t.selection = Fh(t.dom, t.getWin(), t.serializer, t)),
      (t.annotator = Ul(t)),
      (t.formatter = eb(t)),
      (t.undoManager = nb(t)),
      (t._nodeChangeDispatcher = new r1(t)),
      (t._selectionOverrides = d1(t)),
      (m = t),
      (g = fu()),
      (p = iu(!1)),
      (h = mu(function (e) {
        m.fire("longpress", _e(_e({}, e), { type: "longpress" })), p.set(!0);
      }, 400)),
      m.on(
        "touchstart",
        function (n) {
          N0(n).each(function (e) {
            h.cancel();
            var t = { x: e.clientX, y: e.clientY, target: n.target };
            h.throttle(n), p.set(!1), g.set(t);
          });
        },
        !0
      ),
      m.on(
        "touchmove",
        function (e) {
          h.cancel(),
            N0(e).each(function (i) {
              g.on(function (e) {
                var t = i,
                  n = e,
                  r = Math.abs(t.clientX - n.x),
                  o = Math.abs(t.clientY - n.y);
                (5 < r || 5 < o) &&
                  (g.clear(), p.set(!1), m.fire("longpresscancel"));
              });
            });
        },
        !0
      ),
      m.on(
        "touchend touchcancel",
        function (t) {
          h.cancel(),
            "touchcancel" !== t.type &&
              g
                .get()
                .filter(function (e) {
                  return e.target.isEqualNode(t.target);
                })
                .each(function () {
                  p.get()
                    ? t.preventDefault()
                    : m.fire("tap", _e(_e({}, t), { type: "tap" }));
                });
        },
        !0
      ),
      (f = l = t).on("click", function (e) {
        f.dom.getParent(e.target, "details") && e.preventDefault();
      }),
      (d = l).parser.addNodeFilter("details", function (e) {
        Y(e, function (e) {
          e.attr("data-mce-open", e.attr("open")), e.attr("open", "open");
        });
      }),
      d.serializer.addNodeFilter("details", function (e) {
        Y(e, function (e) {
          var t = e.attr("data-mce-open");
          e.attr("open", X(t) ? t : null), e.attr("data-mce-open", null);
        });
      }),
      hh(t) ||
        (c = t).on("click", function (e) {
          var t, n, r, o, i;
          3 <= e.detail &&
            ((r = (t = c).selection.getRng()),
            (o = ss.fromRangeStart(r)),
            (i = ss.fromRangeEnd(r)),
            !ss.isElementPosition(o) ||
              (i1((n = o.container())) &&
                nf(n).each(function (e) {
                  return r.setStart(e.container(), e.offset());
                })),
            !ss.isElementPosition(i) ||
              (i1((n = o.container())) &&
                rf(n).each(function (e) {
                  return r.setEnd(e.container(), e.offset());
                })),
            t.selection.setRng(Cg(r)));
        });
    var b,
      y,
      C,
      x,
      w,
      S,
      E,
      k,
      N,
      _ = hh((b = t)) ? iu(null) : MC(b);
    (N = _),
      (k = t).addCommand("delete", function () {
        var e,
          t = N;
        E0((e = k)) ||
          Mb(e, !1) ||
          Tb(e, !1) ||
          m0(e, t, !1) ||
          Cb(e, !1) ||
          yg(e) ||
          Fb(e, !1) ||
          b0(e, !1) ||
          Sb(e) ||
          h0(e, !1) ||
          (k0(e, "Delete"), lb(e));
      }),
      k.addCommand("forwardDelete", function () {
        var e,
          t = N;
        Mb((e = k), !0) ||
          Tb(e, !0) ||
          m0(e, t, !0) ||
          Cb(e, !0) ||
          yg(e) ||
          Fb(e, !0) ||
          b0(e, !0) ||
          Sb(e) ||
          h0(e, !0) ||
          k0(e, "ForwardDelete");
      }),
      ks((y = t)) && y.on("NodeChange", R(A0, y)),
      (x = (C = t).dom),
      (w = ks(C)),
      (S = C.getParam(
        "placeholder",
        hc.getAttrib(C.getElement(), "placeholder"),
        "string"
      )),
      (E = function (e, t) {
        var n, r, o;
        !(function (e) {
          if (rb(e)) {
            var t = e.keyCode;
            return (
              !ob(e) &&
              (Lf.metaKeyPressed(e) ||
                e.altKey ||
                (112 <= t && t <= 123) ||
                T(hy, t))
            );
          }
        })(e) &&
          ((n = C.getBody()),
          (r =
            !(
              rb((o = e)) &&
              !(ob(o) || ("keyup" === o.type && 229 === o.keyCode))
            ) &&
            (function (e, t, n) {
              if (Wr(kt.fromDom(t), !1)) {
                var r = "" === n,
                  o = t.firstElementChild;
                return (
                  !o ||
                  (!e.getStyle(t.firstElementChild, "padding-left") &&
                    !e.getStyle(t.firstElementChild, "padding-right") &&
                    (r ? !e.isBlock(o) : n === o.nodeName.toLowerCase()))
                );
              }
              return !1;
            })(x, n, w)),
          (("" !== x.getAttrib(n, vy)) === r && !t) ||
            (x.setAttrib(n, vy, r ? S : null),
            x.setAttrib(n, "aria-placeholder", r ? S : null),
            C.fire("PlaceholderToggle", { state: r }),
            C.on(r ? "keydown" : "keyup", E),
            C.off(r ? "keyup" : "keydown", E)));
      }),
      S &&
        C.on("init", function (e) {
          E(e, !0),
            C.on("change SetContent ExecCommand", E),
            C.on("paste", function (e) {
              return _r.setEditorTimeout(C, function () {
                return E(e);
              });
            });
        });
    var A = vh(t);
    (function (t) {
      var e = t.settings,
        n = t.getDoc(),
        r = t.getBody();
      t.fire("PreInit"),
        e.browser_spellcheck ||
          e.gecko_spellcheck ||
          ((n.body.spellcheck = !1), U1.setAttrib(r, "spellcheck", "false")),
        (t.quirks = m1(t)),
        t.fire("PostRender");
      var o = t.getParam("directionality", cu.isRtl() ? "rtl" : void 0);
      void 0 !== o && (r.dir = o),
        e.protect &&
          t.on("BeforeSetContent", function (t) {
            Et.each(e.protect, function (e) {
              t.content = t.content.replace(e, function (e) {
                return "\x3c!--mce:protected " + escape(e) + "--\x3e";
              });
            });
          }),
        t.on("SetContent", function () {
          t.addVisual(t.getBody());
        }),
        t.on("compositionstart compositionend", function (e) {
          t.composing = "compositionstart" === e.type;
        });
    })(t),
      A.fold(
        function () {
          y1(t).then(function () {
            return C1(t);
          });
        },
        function (e) {
          t.setProgressState(!0),
            y1(t).then(function () {
              e().then(
                function (e) {
                  t.setProgressState(!1), C1(t);
                },
                function (e) {
                  t.notificationManager.open({
                    type: "error",
                    text: String(e),
                  }),
                    C1(t);
                }
              );
            });
        }
      );
  }
  function w1(e, t) {
    var n,
      r,
      o,
      i,
      a = e.translate("Rich Text Area"),
      u =
        ((n = e.id),
        (r = a),
        t.height,
        (o = e.getParam("iframe_attrs", {})),
        hn((i = kt.fromTag("iframe")), o),
        hn(i, {
          id: n + "_ifr",
          frameBorder: "0",
          allowTransparency: "true",
          title: r,
        }),
        hu(i, "tox-edit-area__iframe"),
        i.dom);
    u.onload = function () {
      (u.onload = null), e.fire("load");
    };
    var s = (function (e, t) {
      if (document.domain !== window.location.hostname && xt.browser.isIE()) {
        var n = $v("mce");
        e[n] = function () {
          x1(e);
        };
        var r =
          'javascript:(function(){document.open();document.domain="' +
          document.domain +
          '";var ed = window.parent.tinymce.get("' +
          e.id +
          '");document.write(ed.iframeHTML);document.close();ed.' +
          n +
          "(true);})()";
        return z1.setAttrib(t, "src", r), !0;
      }
      return !1;
    })(e, u);
    return (
      (e.contentAreaContainer = t.iframeContainer),
      (e.iframeElement = u),
      (e.iframeHTML = (function (e) {
        var t = e.getParam("doctype", "<!DOCTYPE html>") + "<html><head>";
        e.getParam("document_base_url", "") !== e.documentBaseUrl &&
          (t += '<base href="' + e.documentBaseURI.getURI() + '" />'),
          (t +=
            '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />');
        var n = Ss(e, "body_id", "tinymce"),
          r = Ss(e, "body_class", ""),
          o = e.translate(
            e.getParam(
              "iframe_aria_text",
              "Rich Text Area. Press ALT-0 for help.",
              "string"
            )
          );
        return (
          Es(e) &&
            (t +=
              '<meta http-equiv="Content-Security-Policy" content="' +
              Es(e) +
              '" />'),
          t +
            ('</head><body id="' +
              n +
              '" class="mce-content-body ' +
              r +
              '" data-id="' +
              e.id) +
            '" aria-label="' +
            o +
            '"><br></body></html>'
        );
      })(e)),
      z1.add(t.iframeContainer, u),
      s
    );
  }
  function S1(e) {
    return e.replace(/^\-/, "");
  }
  function E1(e) {
    return { editorContainer: e, iframeContainer: e, api: {} };
  }
  function k1(e) {
    var t,
      n,
      r,
      o,
      i,
      a,
      u,
      s = e.getElement();
    return (
      (e.orgDisplay = s.style.display),
      X(Ls(e))
        ? e.theme.renderUI()
        : y(Ls(e))
        ? ((n = (t = e).getElement()),
          (r = Ls(t)(t, n)).editorContainer.nodeType &&
            (r.editorContainer.id = r.editorContainer.id || t.id + "_parent"),
          r.iframeContainer &&
            r.iframeContainer.nodeType &&
            (r.iframeContainer.id =
              r.iframeContainer.id || t.id + "_iframecontainer"),
          (r.height = r.iframeHeight || n.offsetHeight),
          r)
        : ((u = (o = e).getElement()),
          o.inline
            ? E1(null)
            : ((i = u), (a = H1.create("div")), H1.insertAfter(a, i), E1(a)))
    );
  }
  function N1(e) {
    var n, t, r, o, i, a, u, s;
    e.fire("ScriptsLoaded"),
      (n = e),
      (t = Et.trim(As(n))),
      (r = n.ui.registry.getAll().icons),
      ne(_e(_e({}, Dv.get("default").icons), Dv.get(t).icons), function (e, t) {
        ke(r, t) || n.ui.registry.addIcon(t, e);
      }),
      (a = Ls((o = e))),
      X(a)
        ? ((o.settings.theme = S1(a)),
          (i = Iv.get(a)),
          (o.theme = new i(o, Iv.urls[a])),
          o.theme.init &&
            o.theme.init(
              o,
              Iv.urls[a] || o.documentBaseUrl.replace(/\/$/, ""),
              o.$
            ))
        : (o.theme = {}),
      (s = []),
      Et.each(Ms((u = e)).split(/[ ,]/), function (e) {
        j1(u, s, S1(e));
      });
    var c = k1(e),
      l = e,
      f = ve.from(c.api).getOr({}),
      d = {
        show: ve.from(f.show).getOr(te),
        hide: ve.from(f.hide).getOr(te),
        disable: ve.from(f.disable).getOr(te),
        isDisabled: ve.from(f.isDisabled).getOr(D),
        enable: function () {
          l.mode.isReadOnly() || ve.from(f.enable).map(x);
        },
      };
    l.ui = _e(_e({}, l.ui), d);
    var m,
      g,
      p,
      h = {
        editorContainer: c.editorContainer,
        iframeContainer: c.iframeContainer,
      };
    return (
      (e.editorContainer = h.editorContainer || null),
      Vv(e),
      e.inline
        ? x1(e)
        : ((p = w1((m = e), (g = h))),
          g.editorContainer &&
            ((z1.get(g.editorContainer).style.display = m.orgDisplay),
            (m.hidden = z1.isHidden(g.editorContainer))),
          (m.getElement().style.display = "none"),
          z1.setAttrib(m.id, "aria-hidden", "true"),
          void (p || x1(m)))
    );
  }
  function _1(e) {
    return "-" === e.charAt(0);
  }
  function A1(t, e, n) {
    return ve
      .from(e)
      .filter(function (e) {
        return 0 < e.length && !Dv.has(e);
      })
      .map(function (e) {
        return {
          url: t.editorManager.baseURL + "/icons/" + e + "/icons" + n + ".js",
          name: ve.some(e),
        };
      });
  }
  function R1(c, l) {
    var e,
      t,
      f = ru.ScriptLoader,
      n = f,
      r = l,
      o = function () {
        var r, o, t, n, e, i, a, u, s;
        (e = f),
          (u = Ds((i = c))),
          (s = i.getParam("language_url", "", "string")),
          !1 === cu.hasCode(u) &&
            "en" !== u &&
            ((a =
              "" !== s ? s : i.editorManager.baseURL + "/langs/" + u + ".js"),
            e.add(a, te, void 0, function () {
              zv(i, "LanguageLoadError", Hv("language", a, u));
            })),
          (t = f),
          Y(
            (function (e) {
              for (
                var t = [],
                  n = function (e) {
                    t.push(e);
                  },
                  r = 0;
                r < e.length;
                r++
              )
                e[r].each(n);
              return t;
            })([
              A1((n = c), "default", l),
              ve
                .from(n.getParam("icons_url", "", "string"))
                .filter(function (e) {
                  return 0 < e.length;
                })
                .map(function (e) {
                  return { url: e, name: ve.none() };
                })
                .orThunk(function () {
                  return A1(n, As(n), "");
                }),
            ]),
            function (e) {
              t.add(e.url, te, void 0, function () {
                zv(
                  n,
                  "IconsLoadError",
                  Hv("icons", e.url, e.name.getOrUndefined())
                );
              });
            }
          ),
          (r = c),
          (o = l),
          Et.each(r.getParam("external_plugins"), function (e, t) {
            Lv.load(t, e, te, void 0, function () {
              jv(r, e, t);
            }),
              (r.settings.plugins += " " + t);
          }),
          Et.each(Ms(r).split(/[ ,]/), function (e) {
            var t, n;
            (e = Et.trim(e)) &&
              !Lv.urls[e] &&
              (_1(e)
                ? ((e = e.substr(1, e.length)),
                  (t = Lv.dependencies(e)),
                  Et.each(t, function (e) {
                    var t = Lv.createUrl(
                      {
                        prefix: "plugins/",
                        resource: e,
                        suffix: "/plugin" + o + ".js",
                      },
                      e
                    );
                    Lv.load(t.resource, t, te, void 0, function () {
                      jv(r, t.prefix + t.resource + t.suffix, t.resource);
                    });
                  }))
                : ((n = {
                    prefix: "plugins/",
                    resource: e,
                    suffix: "/plugin" + o + ".js",
                  }),
                  Lv.load(e, n, te, void 0, function () {
                    jv(r, n.prefix + n.resource + n.suffix, e);
                  })));
          }),
          f.loadQueue(
            function () {
              c.removed || N1(c);
            },
            c,
            function () {
              c.removed || N1(c);
            }
          );
      },
      i = Ls((e = c));
    X(i)
      ? (_1(i) ||
          ke(Iv.urls, i) ||
          ((t = e.getParam("theme_url"))
            ? Iv.load(i, e.documentBaseURI.toAbsolute(t))
            : Iv.load(i, "themes/" + i + "/theme" + r + ".js")),
        n.loadQueue(function () {
          Iv.waitFor(i, o);
        }))
      : o();
  }
  function D1(a) {
    return function (i, e) {
      return ve
        .from(e)
        .map(kt.fromDom)
        .filter(Nn)
        .bind(function (e) {
          return (
            (n = a),
            (t = i),
            (r = e.dom),
            Tg(
              kt.fromDom(r),
              function (e) {
                return wn((t = e), n).orThunk(function () {
                  return "font" === Nt(t)
                    ? ue(q1, n).bind(function (e) {
                        return bn(t, e);
                      })
                    : ve.none();
                });
                var t;
              },
              function (e) {
                return je(kt.fromDom(t), e);
              }
            ).or(((o = e.dom), ve.from(Za.DOM.getStyle(o, a, !0))))
          );
          var n, t, r, o;
        })
        .getOr("");
    };
  }
  function T1(e) {
    return nf(e.getBody()).map(function (e) {
      var t = e.container();
      return jn(t) ? t.parentNode : t;
    });
  }
  function O1(e, t) {
    return (
      (n = e),
      (r = a(ve.some, t)),
      (o = n),
      ve
        .from(o.selection.getRng())
        .bind(function (e) {
          var t = o.getBody();
          return e.startContainer === t && 0 === e.startOffset
            ? ve.none()
            : ve.from(o.selection.getStart(!0));
        })
        .orThunk(R(T1, n))
        .map(kt.fromDom)
        .filter(Nn)
        .bind(r)
    );
    var n, r, o;
  }
  function B1(e, t) {
    if (/^[0-9.]+$/.test(t)) {
      var n = parseInt(t, 10);
      if (1 <= n && n <= 7) {
        var r = Et.explode(
            e.getParam(
              "font_size_style_values",
              "xx-small,x-small,small,medium,large,x-large,xx-large"
            )
          ),
          o = Et.explode(e.getParam("font_size_classes", ""));
        return o ? o[n - 1] || t : r[n - 1] || t;
      }
      return t;
    }
    return t;
  }
  var P1 = Yn,
    L1 = Xn,
    I1 = function (e) {
      e.on(function (e) {
        u1(e.ghost);
      }),
        e.clear();
    },
    M1 = Xn,
    F1 = Yn,
    U1 = Za.DOM,
    z1 = Za.DOM,
    H1 = Za.DOM,
    j1 = function (t, n, r) {
      var o,
        i,
        a,
        u,
        e = Lv.get(r),
        s = Lv.urls[r] || t.documentBaseUrl.replace(/\/$/, "");
      if (
        ((r = Et.trim(r)),
        e &&
          -1 === Et.inArray(n, r) &&
          (Et.each(Lv.dependencies(r), function (e) {
            j1(t, n, e);
          }),
          !t.plugins[r]))
      )
        try {
          var c = new e(t, s, t.$);
          (t.plugins[r] = c).init && (c.init(t, s), n.push(r));
        } catch (e) {
          (i = r),
            (a = e),
            yf((o = t), "PluginLoadError", {
              message: (u = cu.translate([
                "Failed to initialize plugin: {0}",
                i,
              ])),
            }),
            cy(u, a),
            Uv(o, u);
        }
    },
    V1 = Za.DOM,
    q1 = { "font-size": "size", "font-family": "face" },
    $1 = D1("font-size"),
    W1 = i(function (e) {
      return e.replace(/[\'\"\\]/g, "").replace(/,\s+/g, ",");
    }, D1("font-family")),
    K1 = Et.each,
    X1 = Et.map,
    Y1 = Et.inArray,
    G1 =
      ((J1.prototype.execCommand = function (t, n, r, e) {
        var o,
          i,
          a = !1,
          u = this;
        if (!u.editor.removed) {
          if (
            ("mcefocus" !== t.toLowerCase() &&
              (/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(
                t
              ) ||
              (e && e.skip_focus)
                ? dd((i = u.editor)).each(function (e) {
                    return i.selection.setRng(e);
                  })
                : u.editor.focus()),
            (e = u.editor.fire("BeforeExecCommand", {
              command: t,
              ui: n,
              value: r,
            })).isDefaultPrevented())
          )
            return !1;
          var s = t.toLowerCase();
          if ((o = u.commands.exec[s]))
            return (
              o(s, n, r),
              u.editor.fire("ExecCommand", { command: t, ui: n, value: r }),
              !0
            );
          if (
            (K1(this.editor.plugins, function (e) {
              if (e.execCommand && e.execCommand(t, n, r))
                return (
                  u.editor.fire("ExecCommand", { command: t, ui: n, value: r }),
                  !(a = !0)
                );
            }),
            a)
          )
            return a;
          if (
            u.editor.theme &&
            u.editor.theme.execCommand &&
            u.editor.theme.execCommand(t, n, r)
          )
            return (
              u.editor.fire("ExecCommand", { command: t, ui: n, value: r }), !0
            );
          try {
            a = u.editor.getDoc().execCommand(t, n, r);
          } catch (e) {}
          return (
            !!a &&
            (u.editor.fire("ExecCommand", { command: t, ui: n, value: r }), !0)
          );
        }
      }),
      (J1.prototype.queryCommandState = function (e) {
        var t;
        if (!this.editor.quirks.isHidden() && !this.editor.removed) {
          if (((e = e.toLowerCase()), (t = this.commands.state[e])))
            return t(e);
          try {
            return this.editor.getDoc().queryCommandState(e);
          } catch (e) {}
          return !1;
        }
      }),
      (J1.prototype.queryCommandValue = function (e) {
        var t;
        if (!this.editor.quirks.isHidden() && !this.editor.removed) {
          if (((e = e.toLowerCase()), (t = this.commands.value[e])))
            return t(e);
          try {
            return this.editor.getDoc().queryCommandValue(e);
          } catch (e) {}
        }
      }),
      (J1.prototype.addCommands = function (e, n) {
        void 0 === n && (n = "exec");
        var r = this;
        K1(e, function (t, e) {
          K1(e.toLowerCase().split(","), function (e) {
            r.commands[n][e] = t;
          });
        });
      }),
      (J1.prototype.addCommand = function (e, o, i) {
        var a = this;
        (e = e.toLowerCase()),
          (this.commands.exec[e] = function (e, t, n, r) {
            return o.call(i || a.editor, t, n, r);
          });
      }),
      (J1.prototype.queryCommandSupported = function (e) {
        if (((e = e.toLowerCase()), this.commands.exec[e])) return !0;
        try {
          return this.editor.getDoc().queryCommandSupported(e);
        } catch (e) {}
        return !1;
      }),
      (J1.prototype.addQueryStateHandler = function (e, t, n) {
        var r = this;
        (e = e.toLowerCase()),
          (this.commands.state[e] = function () {
            return t.call(n || r.editor);
          });
      }),
      (J1.prototype.addQueryValueHandler = function (e, t, n) {
        var r = this;
        (e = e.toLowerCase()),
          (this.commands.value[e] = function () {
            return t.call(n || r.editor);
          });
      }),
      (J1.prototype.hasCustomCommand = function (e) {
        return (e = e.toLowerCase()), !!this.commands.exec[e];
      }),
      (J1.prototype.execNativeCommand = function (e, t, n) {
        return (
          void 0 === t && (t = !1),
          void 0 === n && (n = null),
          this.editor.getDoc().execCommand(e, t, n)
        );
      }),
      (J1.prototype.isFormatMatch = function (e) {
        return this.editor.formatter.match(e);
      }),
      (J1.prototype.toggleFormat = function (e, t) {
        this.editor.formatter.toggle(e, t), this.editor.nodeChanged();
      }),
      (J1.prototype.storeSelection = function (e) {
        this.selectionBookmark = this.editor.selection.getBookmark(e);
      }),
      (J1.prototype.restoreSelection = function () {
        this.editor.selection.moveToBookmark(this.selectionBookmark);
      }),
      (J1.prototype.setupCommands = function (u) {
        var o = this;
        function e(r) {
          return function () {
            var e = u.selection,
              t = e.isCollapsed()
                ? [u.dom.getParent(e.getNode(), u.dom.isBlock)]
                : e.getSelectedBlocks(),
              n = X1(t, function (e) {
                return !!u.formatter.matchNode(e, r);
              });
            return -1 !== Y1(n, !0);
          };
        }
        this.addCommands({
          "mceResetDesignMode,mceBeginUndoLevel": te,
          "mceEndUndoLevel,mceAddUndoLevel": function () {
            u.undoManager.add();
          },
          mceFocus: function (e, t, n) {
            var r, o;
            (o = n),
              (r = u).removed ||
                (o
                  ? Ud
                  : function (t) {
                      var e = t.selection,
                        n = t.getBody(),
                        r = e.getRng();
                      t.quirks.refreshContentEditable(),
                        void 0 !== t.bookmark &&
                          !1 === yd(t) &&
                          dd(t).each(function (e) {
                            t.selection.setRng(e), (r = e);
                          });
                      var o,
                        i,
                        a =
                          ((o = t),
                          (i = e.getNode()),
                          o.dom.getParent(i, function (e) {
                            return "true" === o.dom.getContentEditable(e);
                          }));
                      if (t.$.contains(n, a)) return bd(a), vd(t, r), Ud(t);
                      t.inline || (xt.opera || bd(n), t.getWin().focus()),
                        (xt.gecko || t.inline) && (bd(n), vd(t, r)),
                        Ud(t);
                    })(r);
          },
          "Cut,Copy,Paste": function (e) {
            var t,
              n,
              r = u.getDoc();
            try {
              o.execNativeCommand(e);
            } catch (e) {
              t = !0;
            }
            (!(t = ("paste" === e && !r.queryCommandEnabled(e)) || t) &&
              r.queryCommandSupported(e)) ||
              ((n = u.translate(
                "Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead."
              )),
              xt.mac && (n = n.replace(/Ctrl\+/g, "\u2318+")),
              u.notificationManager.open({ text: n, type: "error" }));
          },
          unlink: function () {
            var e;
            u.selection.isCollapsed()
              ? (e = u.dom.getParent(u.selection.getStart(), "a")) &&
                u.dom.remove(e, !0)
              : u.formatter.remove("link");
          },
          "JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone":
            function (e) {
              var t = e.substring(7);
              "full" === t && (t = "justify"),
                K1("left,center,right,justify".split(","), function (e) {
                  t !== e && u.formatter.remove("align" + e);
                }),
                "none" !== t && o.toggleFormat("align" + t);
            },
          "InsertUnorderedList,InsertOrderedList": function (e) {
            var t;
            o.execNativeCommand(e);
            var n = u.dom.getParent(u.selection.getNode(), "ol,ul");
            n &&
              ((t = n.parentNode),
              /^(H[1-6]|P|ADDRESS|PRE)$/.test(t.nodeName) &&
                (o.storeSelection(), u.dom.split(t, n), o.restoreSelection()));
          },
          "Bold,Italic,Underline,Strikethrough,Superscript,Subscript":
            function (e) {
              o.toggleFormat(e);
            },
          "ForeColor,HiliteColor": function (e, t, n) {
            o.toggleFormat(e, { value: n });
          },
          FontName: function (e, t, n) {
            var r, o;
            (o = B1((r = u), n)),
              r.formatter.toggle("fontname", {
                value: A(o.split(/\s*,\s*/), function (e) {
                  return -1 === e.indexOf(" ") || Ge(e, '"') || Ge(e, "'")
                    ? e
                    : "'" + e + "'";
                }).join(","),
              }),
              r.nodeChanged();
          },
          FontSize: function (e, t, n) {
            var r;
            (r = u).formatter.toggle("fontsize", { value: B1(r, n) }),
              r.nodeChanged();
          },
          LineHeight: function (e, t, n) {
            var r;
            (r = u).formatter.toggle("lineheight", { value: String(n) }),
              r.nodeChanged();
          },
          Lang: function (e, t, n) {
            o.toggleFormat(e, { value: n.code, customValue: n.customCode });
          },
          RemoveFormat: function (e) {
            u.formatter.remove(e);
          },
          mceBlockQuote: function () {
            o.toggleFormat("blockquote");
          },
          FormatBlock: function (e, t, n) {
            return o.toggleFormat(n || "p");
          },
          mceCleanup: function () {
            var e = u.selection.getBookmark();
            u.setContent(u.getContent()), u.selection.moveToBookmark(e);
          },
          mceRemoveNode: function (e, t, n) {
            var r = n || u.selection.getNode();
            r !== u.getBody() &&
              (o.storeSelection(), u.dom.remove(r, !0), o.restoreSelection());
          },
          mceSelectNodeDepth: function (e, t, n) {
            var r = 0;
            u.dom.getParent(
              u.selection.getNode(),
              function (e) {
                if (1 === e.nodeType && r++ === n)
                  return u.selection.select(e), !1;
              },
              u.getBody()
            );
          },
          mceSelectNode: function (e, t, n) {
            u.selection.select(n);
          },
          mceInsertContent: function (e, t, n) {
            var r, o, i, a;
            (r = u),
              (o = (function (e) {
                if ("string" == typeof e) return { content: e, details: {} };
                var t = Et.extend(
                  { paste: e.paste, data: { paste: e.paste } },
                  e
                );
                return { content: e.content, details: t };
              })(n)),
              (i = o.content),
              (a = o.details),
              bh(r).editor.insertContent(i, a);
          },
          mceInsertRawHTML: function (e, t, n) {
            u.selection.setContent("tiny_mce_marker");
            var r = u.getContent();
            u.setContent(
              r.replace(/tiny_mce_marker/g, function () {
                return n;
              })
            );
          },
          mceInsertNewLine: function (e, t, n) {
            DC(u, n);
          },
          mceToggleFormat: function (e, t, n) {
            o.toggleFormat(n);
          },
          mceSetContent: function (e, t, n) {
            u.setContent(n);
          },
          "Indent,Outdent": function (e) {
            S0(u, e);
          },
          mceRepaint: te,
          InsertHorizontalRule: function () {
            u.execCommand("mceInsertContent", !1, "<hr />");
          },
          mceToggleVisualAid: function () {
            (u.hasVisual = !u.hasVisual), u.addVisual();
          },
          mceReplaceContent: function (e, t, n) {
            u.execCommand(
              "mceInsertContent",
              !1,
              n.replace(
                /\{\$selection\}/g,
                u.selection.getContent({ format: "text" })
              )
            );
          },
          mceInsertLink: function (e, t, n) {
            "string" == typeof n && (n = { href: n });
            var r = u.dom.getParent(u.selection.getNode(), "a");
            (n.href = n.href.replace(/ /g, "%20")),
              (r && n.href) || u.formatter.remove("link"),
              n.href && u.formatter.apply("link", n, r);
          },
          selectAll: function () {
            var e,
              t = u.dom.getParent(u.selection.getStart(), Xn);
            t &&
              ((e = u.dom.createRng()).selectNodeContents(t),
              u.selection.setRng(e));
          },
          mceNewDocument: function () {
            u.setContent("");
          },
          InsertLineBreak: function (e, t, n) {
            return bC(u, n), !0;
          },
        }),
          o.addCommands(
            {
              JustifyLeft: e("alignleft"),
              JustifyCenter: e("aligncenter"),
              JustifyRight: e("alignright"),
              JustifyFull: e("alignjustify"),
              "Bold,Italic,Underline,Strikethrough,Superscript,Subscript":
                function (e) {
                  return o.isFormatMatch(e);
                },
              mceBlockQuote: function () {
                return o.isFormatMatch("blockquote");
              },
              Outdent: function () {
                return x0(u);
              },
              "InsertUnorderedList,InsertOrderedList": function (e) {
                var t = u.dom.getParent(u.selection.getNode(), "ul,ol");
                return (
                  t &&
                  (("insertunorderedlist" === e && "UL" === t.tagName) ||
                    ("insertorderedlist" === e && "OL" === t.tagName))
                );
              },
            },
            "state"
          ),
          o.addCommands({
            Undo: function () {
              u.undoManager.undo();
            },
            Redo: function () {
              u.undoManager.redo();
            },
          }),
          o.addQueryValueHandler(
            "FontName",
            function () {
              return O1((t = u), function (e) {
                return W1(t.getBody(), e.dom);
              }).getOr("");
              var t;
            },
            this
          ),
          o.addQueryValueHandler(
            "FontSize",
            function () {
              return O1((t = u), function (e) {
                return $1(t.getBody(), e.dom);
              }).getOr("");
              var t;
            },
            this
          ),
          o.addQueryValueHandler(
            "LineHeight",
            function () {
              return O1((t = u), function (n) {
                var e = kt.fromDom(t.getBody());
                return Tg(
                  n,
                  function (e) {
                    return wn(e, "line-height");
                  },
                  R(je, e)
                ).getOrThunk(function () {
                  var e = parseFloat(xn(n, "line-height")),
                    t = parseFloat(xn(n, "font-size"));
                  return String(e / t);
                });
              }).getOr("");
              var t;
            },
            this
          );
      }),
      J1);
  function J1(e) {
    (this.commands = { state: {}, exec: {}, value: {} }),
      (this.editor = e),
      this.setupCommands(e);
  }
  function Q1(e, t, n) {
    var r, o, i, a, u, s;
    vu(e, t) && !1 === n
      ? ((o = t),
        pu((r = e))
          ? r.dom.classList.remove(o)
          : ((u = o),
            0 <
            (s = U(gu((a = r), "class"), function (e) {
              return e !== u;
            })).length
              ? pn(a, "class", s.join(" "))
              : yn(a, "class")),
        0 === (pu((i = r)) ? i.dom.classList : gu(i, "class")).length &&
          yn(i, "class"))
      : n && hu(e, t);
  }
  function Z1(e, t, n) {
    try {
      e.getDoc().execCommand(t, !1, String(n));
    } catch (e) {}
  }
  function ex(e, t) {
    e.dom.contentEditable = t ? "true" : "false";
  }
  function tx(e, t) {
    var n,
      r,
      o = kt.fromDom(e.getBody());
    Q1(o, "mce-content-readonly", t),
      t
        ? (e.selection.controlSelection.hideResizeRect(),
          e._selectionOverrides.hideFakeCaret(),
          ve.from(e.selection.getNode()).each(function (e) {
            e.removeAttribute("data-mce-selected");
          }),
          ex(o, !(e.readonly = !0)),
          Y(bu(o, '*[contenteditable="true"]'), function (e) {
            pn(e, ox, "true"), ex(e, !1);
          }))
        : (ex(o, !(e.readonly = !1)),
          Y(bu(o, "*[" + ox + '="true"]'), function (e) {
            yn(e, ox), ex(e, !0);
          }),
          Z1(e, "StyleWithCSS", !1),
          Z1(e, "enableInlineTableEditing", !1),
          Z1(e, "enableObjectResizing", !1),
          (yd((n = e)) ||
            ((r = n),
            rd(Bn(kt.fromDom(r.getElement())))
              .filter(function (e) {
                return (
                  !(
                    void 0 !== (t = e.dom.classList) &&
                    (t.contains("tox-edit-area") ||
                      t.contains("tox-edit-area__iframe") ||
                      t.contains("mce-content-body"))
                  ) && gd(r, e.dom)
                );
                var t;
              })
              .isSome())) &&
            e.focus(),
          e.selection.setRng(e.selection.getRng()),
          e.nodeChanged());
  }
  function nx(e) {
    return e.readonly;
  }
  function rx(t) {
    t.parser.addAttributeFilter("contenteditable", function (e) {
      nx(t) &&
        Y(e, function (e) {
          e.attr(ox, e.attr("contenteditable")),
            e.attr("contenteditable", "false");
        });
    }),
      t.serializer.addAttributeFilter(ox, function (e) {
        nx(t) &&
          Y(e, function (e) {
            e.attr("contenteditable", e.attr(ox));
          });
      }),
      t.serializer.addTempAttr(ox);
  }
  var ox = "data-mce-contenteditable",
    ix = Et.makeMap(
      "focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input beforeinput contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchmove touchend touchcancel",
      " "
    ),
    ax =
      ((ux.isNative = function (e) {
        return !!ix[e.toLowerCase()];
      }),
      (ux.prototype.fire = function (e, t) {
        var n = e.toLowerCase(),
          r = uo(n, t || {}, this.scope);
        this.settings.beforeFire && this.settings.beforeFire(r);
        var o = this.bindings[n];
        if (o)
          for (var i = 0, a = o.length; i < a; i++) {
            var u = o[i];
            if (!u.removed) {
              if (
                (u.once && this.off(n, u.func),
                r.isImmediatePropagationStopped())
              )
                return r;
              if (!1 === u.func.call(this.scope, r))
                return r.preventDefault(), r;
            }
          }
        return r;
      }),
      (ux.prototype.on = function (e, t, n, r) {
        if ((t = !1 === t ? D : t)) {
          var o = { func: t, removed: !1 };
          r && Et.extend(o, r);
          for (var i = e.toLowerCase().split(" "), a = i.length; a--; ) {
            var u = i[a],
              s = this.bindings[u];
            s || ((s = []), this.toggleEvent(u, !0)),
              (s = n ? Ae([o], s, !0) : Ae(Ae([], s, !0), [o], !1)),
              (this.bindings[u] = s);
          }
        }
        return this;
      }),
      (ux.prototype.off = function (e, t) {
        var n = this;
        if (e)
          for (var r = e.toLowerCase().split(" "), o = r.length; o--; ) {
            var i,
              a = r[o],
              u = this.bindings[a];
            if (!a)
              return (
                ne(this.bindings, function (e, t) {
                  n.toggleEvent(t, !1), delete n.bindings[t];
                }),
                this
              );
            u &&
              (t
                ? ((u = (i = B(u, function (e) {
                    return e.func === t;
                  })).fail),
                  (this.bindings[a] = u),
                  Y(i.pass, function (e) {
                    e.removed = !0;
                  }))
                : (u.length = 0),
              u.length || (this.toggleEvent(e, !1), delete this.bindings[a]));
          }
        else
          ne(this.bindings, function (e, t) {
            n.toggleEvent(t, !1);
          }),
            (this.bindings = {});
        return this;
      }),
      (ux.prototype.once = function (e, t, n) {
        return this.on(e, t, n, { once: !0 });
      }),
      (ux.prototype.has = function (e) {
        return (
          (e = e.toLowerCase()),
          !(!this.bindings[e] || 0 === this.bindings[e].length)
        );
      }),
      ux);
  function ux(e) {
    (this.bindings = {}),
      (this.settings = e || {}),
      (this.scope = this.settings.scope || this),
      (this.toggleEvent = this.settings.toggleEvent || D);
  }
  function sx(n) {
    return (
      n._eventDispatcher ||
        (n._eventDispatcher = new ax({
          scope: n,
          toggleEvent: function (e, t) {
            ax.isNative(e) && n.toggleNativeEvent && n.toggleNativeEvent(e, t);
          },
        })),
      n._eventDispatcher
    );
  }
  function cx(e, t) {
    if ("selectionchange" === t) return e.getDoc();
    if (
      !e.inline &&
      /^mouse|touch|click|contextmenu|drop|dragover|dragend/.test(t)
    )
      return e.getDoc().documentElement;
    var n = Ps(e);
    return n
      ? (e.eventRoot || (e.eventRoot = hx.select(n)[0]), e.eventRoot)
      : e.getBody();
  }
  function lx(e, t, n) {
    var r, o, i, a;
    e.hidden || nx(e)
      ? nx(e) &&
        ((r = e),
        "click" !== (o = n).type ||
          Lf.metaKeyPressed(o) ||
          ((i = kt.fromDom(o.target)),
          (a = r),
          br(i, "a", function (e) {
            return je(e, kt.fromDom(a.getBody()));
          })
            .bind(function (e) {
              return bn(e, "href");
            })
            .each(function (e) {
              var t, n;
              o.preventDefault(),
                /^#/.test(e)
                  ? (t = r.dom.select(
                      e +
                        ',[name="' +
                        (Ge((n = e), "#") ? n.substring("#".length) : n) +
                        '"]'
                    )).length && r.selection.scrollIntoView(t[0], !0)
                  : window.open(
                      e,
                      "_blank",
                      "rel=noopener noreferrer,menubar=yes,toolbar=yes,location=yes,status=yes,resizable=yes,scrollbars=yes"
                    );
            })))
      : e.fire(t, n);
  }
  function fx(i, a) {
    var e, t;
    i.delegates || (i.delegates = {}),
      i.delegates[a] ||
        i.removed ||
        ((t = cx(i, a)),
        Ps(i)
          ? (gx ||
              ((gx = {}),
              i.editorManager.on("removeEditor", function () {
                i.editorManager.activeEditor ||
                  (gx &&
                    (ne(gx, function (e, t) {
                      i.dom.unbind(cx(i, t));
                    }),
                    (gx = null)));
              })),
            gx[a] ||
              ((gx[a] = e =
                function (e) {
                  for (
                    var t = e.target, n = i.editorManager.get(), r = n.length;
                    r--;

                  ) {
                    var o = n[r].getBody();
                    (o !== t && !hx.isChildOf(t, o)) || lx(n[r], a, e);
                  }
                }),
              hx.bind(t, a, e)))
          : (hx.bind(
              t,
              a,
              (e = function (e) {
                lx(i, a, e);
              })
            ),
            (i.delegates[a] = e)));
  }
  function dx(e, t, n, r) {
    var o = n[t.get()],
      i = n[r];
    try {
      i.activate();
    } catch (e) {
      return void console.error(
        "problem while activating editor mode " + r + ":",
        e
      );
    }
    o.deactivate(),
      o.editorReadOnly !== i.editorReadOnly && tx(e, i.editorReadOnly),
      t.set(r),
      e.fire("SwitchMode", { mode: r });
  }
  function mx(e) {
    var t,
      n = {};
    yx(Cx(e.toLowerCase(), "+"), function (e) {
      e in wx
        ? (n[e] = !0)
        : /^[0-9]{2,}$/.test(e)
        ? (n.keyCode = parseInt(e, 10))
        : ((n.charCode = e.charCodeAt(0)),
          (n.keyCode = xx[e] || e.toUpperCase().charCodeAt(0)));
    });
    var r = [n.keyCode];
    for (t in wx) n[t] ? r.push(t) : (n[t] = !1);
    return (
      (n.id = r.join(",")),
      n.access && ((n.alt = !0), xt.mac ? (n.ctrl = !0) : (n.shift = !0)),
      n.meta && (xt.mac ? (n.meta = !0) : ((n.ctrl = !0), (n.meta = !1))),
      n
    );
  }
  var gx,
    px = {
      fire: function (e, t, n) {
        if (this.removed && "remove" !== e && "detach" !== e) return t;
        var r = sx(this).fire(e, t);
        if (!1 !== n && this.parent)
          for (var o = this.parent(); o && !r.isPropagationStopped(); )
            o.fire(e, r, !1), (o = o.parent());
        return r;
      },
      on: function (e, t, n) {
        return sx(this).on(e, t, n);
      },
      off: function (e, t) {
        return sx(this).off(e, t);
      },
      once: function (e, t) {
        return sx(this).once(e, t);
      },
      hasEventListeners: function (e) {
        return sx(this).has(e);
      },
    },
    hx = Za.DOM,
    vx = _e(_e({}, px), {
      bindPendingEventDelegates: function () {
        var t = this;
        Et.each(t._pendingNativeEvents, function (e) {
          fx(t, e);
        });
      },
      toggleNativeEvent: function (e, t) {
        var n = this;
        "focus" !== e &&
          "blur" !== e &&
          (n.removed ||
            (t
              ? n.initialized
                ? fx(n, e)
                : n._pendingNativeEvents
                ? n._pendingNativeEvents.push(e)
                : (n._pendingNativeEvents = [e])
              : n.initialized &&
                (n.dom.unbind(cx(n, e), e, n.delegates[e]),
                delete n.delegates[e])));
      },
      unbindAllNativeEvents: function () {
        var n = this,
          e = n.getBody(),
          t = n.dom;
        n.delegates &&
          (ne(n.delegates, function (e, t) {
            n.dom.unbind(cx(n, t), t, e);
          }),
          delete n.delegates),
          !n.inline &&
            e &&
            t &&
            ((e.onload = null), t.unbind(n.getWin()), t.unbind(n.getDoc())),
          t && (t.unbind(e), t.unbind(n.getContainer()));
      },
    }),
    bx = ["design", "readonly"],
    yx = Et.each,
    Cx = Et.explode,
    xx = {
      f1: 112,
      f2: 113,
      f3: 114,
      f4: 115,
      f5: 116,
      f6: 117,
      f7: 118,
      f8: 119,
      f9: 120,
      f10: 121,
      f11: 122,
      f12: 123,
    },
    wx = Et.makeMap("alt,ctrl,shift,meta,access"),
    Sx =
      ((Ex.prototype.add = function (e, n, t, r) {
        var o = this,
          i = o.normalizeCommandFunc(t);
        return (
          yx(Cx(Et.trim(e)), function (e) {
            var t = o.createShortcut(e, n, i, r);
            o.shortcuts[t.id] = t;
          }),
          !0
        );
      }),
      (Ex.prototype.remove = function (e) {
        var t = this.createShortcut(e);
        return !!this.shortcuts[t.id] && (delete this.shortcuts[t.id], !0);
      }),
      (Ex.prototype.normalizeCommandFunc = function (e) {
        var t = this,
          n = e;
        return "string" == typeof n
          ? function () {
              t.editor.execCommand(n, !1, null);
            }
          : Et.isArray(n)
          ? function () {
              t.editor.execCommand(n[0], n[1], n[2]);
            }
          : n;
      }),
      (Ex.prototype.createShortcut = function (e, t, n, r) {
        var o = Et.map(Cx(e, ">"), mx);
        return (
          (o[o.length - 1] = Et.extend(o[o.length - 1], {
            func: n,
            scope: r || this.editor,
          })),
          Et.extend(o[0], {
            desc: this.editor.translate(t),
            subpatterns: o.slice(1),
          })
        );
      }),
      (Ex.prototype.hasModifier = function (e) {
        return e.altKey || e.ctrlKey || e.metaKey;
      }),
      (Ex.prototype.isFunctionKey = function (e) {
        return "keydown" === e.type && 112 <= e.keyCode && e.keyCode <= 123;
      }),
      (Ex.prototype.matchShortcut = function (e, t) {
        return (
          !!t &&
          t.ctrl === e.ctrlKey &&
          t.meta === e.metaKey &&
          t.alt === e.altKey &&
          t.shift === e.shiftKey &&
          !!(
            e.keyCode === t.keyCode ||
            (e.charCode && e.charCode === t.charCode)
          ) &&
          (e.preventDefault(), !0)
        );
      }),
      (Ex.prototype.executeShortcutAction = function (e) {
        return e.func ? e.func.call(e.scope) : null;
      }),
      Ex);
  function Ex(e) {
    (this.shortcuts = {}), (this.pendingPatterns = []), (this.editor = e);
    var n = this;
    e.on("keyup keypress keydown", function (t) {
      (!n.hasModifier(t) && !n.isFunctionKey(t)) ||
        t.isDefaultPrevented() ||
        (yx(n.shortcuts, function (e) {
          if (n.matchShortcut(t, e))
            return (
              (n.pendingPatterns = e.subpatterns.slice(0)),
              "keydown" === t.type && n.executeShortcutAction(e),
              !0
            );
        }),
        n.matchShortcut(t, n.pendingPatterns[0]) &&
          (1 === n.pendingPatterns.length &&
            "keydown" === t.type &&
            n.executeShortcutAction(n.pendingPatterns[0]),
          n.pendingPatterns.shift()));
    });
  }
  var kx = Za.DOM,
    Nx = Et.extend,
    _x = Et.each,
    Ax = Et.resolve,
    Rx = xt.ie,
    Dx =
      ((Tx.prototype.render = function () {
        !(function (t) {
          var e = t.id;
          cu.setCode(Ds(t));
          var n,
            r,
            o,
            i,
            a = function () {
              V1.unbind(window, "ready", a), t.render();
            };
          si.Event.domLoaded
            ? t.getElement() &&
              xt.contentEditable &&
              ((n = kt.fromDom(t.getElement())),
              (r = L(
                n.dom.attributes,
                function (e, t) {
                  return (e[t.name] = t.value), e;
                },
                {}
              )),
              t.on("remove", function () {
                O(n.dom.attributes, function (e) {
                  return yn(n, e.name), 0;
                }),
                  hn(n, r);
              }),
              (t.ui.styleSheetLoader = Ar.forElement(n, {
                contentCssCors: (o = t).getParam("content_css_cors"),
                referrerPolicy: Rs(o),
              })),
              t.getParam("inline")
                ? (t.inline = !0)
                : ((t.orgVisibility = t.getElement().style.visibility),
                  (t.getElement().style.visibility = "hidden")),
              (i = t.getElement().form || V1.getParent(e, "form")) &&
                ((t.formElement = i),
                t.getParam("hidden_input") &&
                  !Hn(t.getElement()) &&
                  (V1.insertAfter(
                    V1.create("input", { type: "hidden", name: e }),
                    e
                  ),
                  (t.hasHiddenInput = !0)),
                (t.formEventDelegate = function (e) {
                  t.fire(e.type, e);
                }),
                V1.bind(i, "submit reset", t.formEventDelegate),
                t.on("reset", function () {
                  t.resetContent();
                }),
                !t.getParam("submit_patch") ||
                  i.submit.nodeType ||
                  i.submit.length ||
                  i._mceOldSubmit ||
                  ((i._mceOldSubmit = i.submit),
                  (i.submit = function () {
                    return (
                      t.editorManager.triggerSave(),
                      t.setDirty(!1),
                      i._mceOldSubmit(i)
                    );
                  }))),
              (t.windowManager = Mv(t)),
              (t.notificationManager = lv(t)),
              "xml" === t.getParam("encoding") &&
                t.on("GetContent", function (e) {
                  e.save && (e.content = V1.encode(e.content));
                }),
              t.getParam("add_form_submit_trigger") &&
                t.on("submit", function () {
                  t.initialized && t.save();
                }),
              t.getParam("add_unload_trigger") &&
                ((t._beforeUnload = function () {
                  !t.initialized ||
                    t.destroyed ||
                    t.isHidden() ||
                    t.save({ format: "raw", no_events: !0, set_dirty: !1 });
                }),
                t.editorManager.on("BeforeUnload", t._beforeUnload)),
              t.editorManager.add(t),
              R1(t, t.suffix))
            : V1.bind(window, "ready", a);
        })(this);
      }),
      (Tx.prototype.focus = function (e) {
        this.execCommand("mceFocus", !1, e);
      }),
      (Tx.prototype.hasFocus = function () {
        return yd(this);
      }),
      (Tx.prototype.execCallback = function (e) {
        for (var t = [], n = 1; n < arguments.length; n++)
          t[n - 1] = arguments[n];
        var r,
          o = this.settings[e];
        if (o)
          return (
            this.callbackLookup &&
              (r = this.callbackLookup[e]) &&
              ((o = r.func), (r = r.scope)),
            "string" == typeof o &&
              ((r = (r = o.replace(/\.\w+$/, "")) ? Ax(r) : 0),
              (o = Ax(o)),
              (this.callbackLookup = this.callbackLookup || {}),
              (this.callbackLookup[e] = { func: o, scope: r })),
            o.apply(r || this, t)
          );
      }),
      (Tx.prototype.translate = function (e) {
        return cu.translate(e);
      }),
      (Tx.prototype.getParam = function (e, t, n) {
        return (
          (i = t),
          (a = n),
          (l = (o = e) in (r = this).settings ? r.settings[o] : i),
          "hash" === a
            ? ((c = {}),
              "string" == typeof (s = l)
                ? Y(
                    0 < s.indexOf("=")
                      ? s.split(/[;,](?![^=;,]*(?:[;,]|$))/)
                      : s.split(","),
                    function (e) {
                      var t = e.split("=");
                      1 < t.length
                        ? (c[Et.trim(t[0])] = Et.trim(t[1]))
                        : (c[Et.trim(t[0])] = Et.trim(t[0]));
                    }
                  )
                : (c = s),
              c)
            : "string" === a
            ? av(X, r, o).getOr(i)
            : "number" === a
            ? av(E, r, o).getOr(i)
            : "boolean" === a
            ? av(v, r, o).getOr(i)
            : "object" === a
            ? av(h, r, o).getOr(i)
            : "array" === a
            ? av(S, r, o).getOr(i)
            : "string[]" === a
            ? av(
                ((u = X),
                function (e) {
                  return S(e) && j(e, u);
                }),
                r,
                o
              ).getOr(i)
            : "function" === a
            ? av(y, r, o).getOr(i)
            : l
        );
        var r, o, i, a, u, s, c, l;
      }),
      (Tx.prototype.hasPlugin = function (e, t) {
        return !(!T(Ms(this).split(/[ ,]/), e) || (t && void 0 === Lv.get(e)));
      }),
      (Tx.prototype.nodeChanged = function (e) {
        this._nodeChangeDispatcher.nodeChanged(e);
      }),
      (Tx.prototype.addCommand = function (e, t, n) {
        this.editorCommands.addCommand(e, t, n);
      }),
      (Tx.prototype.addQueryStateHandler = function (e, t, n) {
        this.editorCommands.addQueryStateHandler(e, t, n);
      }),
      (Tx.prototype.addQueryValueHandler = function (e, t, n) {
        this.editorCommands.addQueryValueHandler(e, t, n);
      }),
      (Tx.prototype.addShortcut = function (e, t, n, r) {
        this.shortcuts.add(e, t, n, r);
      }),
      (Tx.prototype.execCommand = function (e, t, n, r) {
        return this.editorCommands.execCommand(e, t, n, r);
      }),
      (Tx.prototype.queryCommandState = function (e) {
        return this.editorCommands.queryCommandState(e);
      }),
      (Tx.prototype.queryCommandValue = function (e) {
        return this.editorCommands.queryCommandValue(e);
      }),
      (Tx.prototype.queryCommandSupported = function (e) {
        return this.editorCommands.queryCommandSupported(e);
      }),
      (Tx.prototype.show = function () {
        this.hidden &&
          ((this.hidden = !1),
          this.inline
            ? (this.getBody().contentEditable = "true")
            : (kx.show(this.getContainer()), kx.hide(this.id)),
          this.load(),
          this.fire("show"));
      }),
      (Tx.prototype.hide = function () {
        var e = this,
          t = e.getDoc();
        e.hidden ||
          (Rx && t && !e.inline && t.execCommand("SelectAll"),
          e.save(),
          e.inline
            ? ((e.getBody().contentEditable = "false"),
              e === e.editorManager.focusedEditor &&
                (e.editorManager.focusedEditor = null))
            : (kx.hide(e.getContainer()),
              kx.setStyle(e.id, "display", e.orgDisplay)),
          (e.hidden = !0),
          e.fire("hide"));
      }),
      (Tx.prototype.isHidden = function () {
        return !!this.hidden;
      }),
      (Tx.prototype.setProgressState = function (e, t) {
        this.fire("ProgressState", { state: e, time: t });
      }),
      (Tx.prototype.load = function (e) {
        var t = this.getElement();
        if (this.removed) return "";
        if (t) {
          (e = e || {}).load = !0;
          var n = Hn(t) ? t.value : t.innerHTML,
            r = this.setContent(n, e);
          return (
            (e.element = t),
            e.no_events || this.fire("LoadContent", e),
            (e.element = t = null),
            r
          );
        }
      }),
      (Tx.prototype.save = function (e) {
        var t,
          n,
          r = this,
          o = r.getElement();
        if (o && r.initialized && !r.removed)
          return (
            ((e = e || {}).save = !0),
            (e.element = o),
            (e.content = r.getContent(e)),
            e.no_events || r.fire("SaveContent", e),
            "raw" === e.format && r.fire("RawSaveContent", e),
            (t = e.content),
            Hn(o)
              ? (o.value = t)
              : ((!e.is_removing && r.inline) || (o.innerHTML = t),
                (n = kx.getParent(r.id, "form")) &&
                  _x(n.elements, function (e) {
                    if (e.name === r.id) return (e.value = t), !1;
                  })),
            (e.element = o = null),
            !1 !== e.set_dirty && r.setDirty(!1),
            t
          );
      }),
      (Tx.prototype.setContent = function (e, t) {
        return Qh(this, e, t);
      }),
      (Tx.prototype.getContent = function (e) {
        return (
          (t = this),
          (r = (n = void 0 === (n = e) ? {} : n).format || "html"),
          (o = n),
          bh(t).editor.getContent(o, r)
        );
        var t, n, r, o;
      }),
      (Tx.prototype.insertContent = function (e, t) {
        t && (e = Nx({ content: e }, t)),
          this.execCommand("mceInsertContent", !1, e);
      }),
      (Tx.prototype.resetContent = function (e) {
        void 0 === e
          ? Qh(this, this.startContent, { format: "raw" })
          : Qh(this, e),
          this.undoManager.reset(),
          this.setDirty(!1),
          this.nodeChanged();
      }),
      (Tx.prototype.isDirty = function () {
        return !this.isNotDirty;
      }),
      (Tx.prototype.setDirty = function (e) {
        var t = !this.isNotDirty;
        (this.isNotDirty = !e), e && e !== t && this.fire("dirty");
      }),
      (Tx.prototype.getContainer = function () {
        return (
          this.container ||
            (this.container = kx.get(
              this.editorContainer || this.id + "_parent"
            )),
          this.container
        );
      }),
      (Tx.prototype.getContentAreaContainer = function () {
        return this.contentAreaContainer;
      }),
      (Tx.prototype.getElement = function () {
        return (
          this.targetElm || (this.targetElm = kx.get(this.id)), this.targetElm
        );
      }),
      (Tx.prototype.getWin = function () {
        var e;
        return (
          this.contentWindow ||
            ((e = this.iframeElement) &&
              (this.contentWindow = e.contentWindow)),
          this.contentWindow
        );
      }),
      (Tx.prototype.getDoc = function () {
        var e;
        return (
          this.contentDocument ||
            ((e = this.getWin()) && (this.contentDocument = e.document)),
          this.contentDocument
        );
      }),
      (Tx.prototype.getBody = function () {
        var e = this.getDoc();
        return this.bodyElement || (e ? e.body : null);
      }),
      (Tx.prototype.convertURL = function (e, t, n) {
        var r = this.settings;
        return r.urlconverter_callback
          ? this.execCallback("urlconverter_callback", e, n, !0, t)
          : !r.convert_urls ||
            (n && "LINK" === n.nodeName) ||
            0 === e.indexOf("file:") ||
            0 === e.length
          ? e
          : r.relative_urls
          ? this.documentBaseURI.toRelative(e)
          : this.documentBaseURI.toAbsolute(e, r.remove_script_host);
      }),
      (Tx.prototype.addVisual = function (e) {
        var t;
        (t = e), yh(this).editor.addVisual(t);
      }),
      (Tx.prototype.remove = function () {
        var e, t, n, r, o;
        (e = this).removed ||
          ((t = e._selectionOverrides),
          (n = e.editorUpload),
          (r = e.getBody()),
          (o = e.getElement()),
          r && e.save({ is_removing: !0 }),
          (e.removed = !0),
          e.unbindAllNativeEvents(),
          e.hasHiddenInput && o && yv.remove(o.nextSibling),
          e.fire("remove"),
          e.editorManager.remove(e),
          !e.inline && r && yv.setStyle(e.id, "display", e.orgDisplay),
          e.fire("detach"),
          yv.remove(e.getContainer()),
          Zh(t),
          Zh(n),
          e.destroy());
      }),
      (Tx.prototype.destroy = function (e) {
        var t, n, r, o, i, a, u;
        (n = e),
          (a = (t = this).selection),
          (u = t.dom),
          t.destroyed ||
            (n || t.removed
              ? (n ||
                  (t.editorManager.off("beforeunload", t._beforeUnload),
                  t.theme && t.theme.destroy && t.theme.destroy(),
                  Zh(a),
                  Zh(u)),
                (o = (r = t).formElement) &&
                  (o._mceOldSubmit &&
                    ((o.submit = o._mceOldSubmit), (o._mceOldSubmit = null)),
                  yv.unbind(o, "submit reset", r.formEventDelegate)),
                ((i = t).contentAreaContainer =
                  i.formElement =
                  i.container =
                  i.editorContainer =
                    null),
                (i.bodyElement = i.contentDocument = i.contentWindow = null),
                (i.iframeElement = i.targetElm = null),
                i.selection &&
                  (i.selection =
                    i.selection.win =
                    i.selection.dom =
                    i.selection.dom.doc =
                      null),
                (t.destroyed = !0))
              : t.remove());
      }),
      (Tx.prototype.uploadImages = function (e) {
        return this.editorUpload.uploadImages(e);
      }),
      (Tx.prototype._scanForImages = function () {
        return this.editorUpload.scanForImages();
      }),
      (Tx.prototype.addButton = function () {
        throw new Error(
          "editor.addButton has been removed in tinymce 5x, use editor.ui.registry.addButton or editor.ui.registry.addToggleButton or editor.ui.registry.addSplitButton instead"
        );
      }),
      (Tx.prototype.addSidebar = function () {
        throw new Error(
          "editor.addSidebar has been removed in tinymce 5x, use editor.ui.registry.addSidebar instead"
        );
      }),
      (Tx.prototype.addMenuItem = function () {
        throw new Error(
          "editor.addMenuItem has been removed in tinymce 5x, use editor.ui.registry.addMenuItem instead"
        );
      }),
      (Tx.prototype.addContextToolbar = function () {
        throw new Error(
          "editor.addContextToolbar has been removed in tinymce 5x, use editor.ui.registry.addContextToolbar instead"
        );
      }),
      Tx);
  function Tx(e, t, n) {
    var r,
      o,
      i,
      a,
      u,
      s,
      c,
      l,
      f,
      d,
      m,
      g,
      p,
      h,
      v,
      b,
      y,
      C,
      x = this;
    function w(n, r) {
      return function (e, t) {
        return (n[e.toLowerCase()] = _e(_e({}, t), { type: r }));
      };
    }
    (this.plugins = {}),
      (this.contentCSS = []),
      (this.contentStyles = []),
      (this.loadedCSS = {}),
      (this.isNotDirty = !1),
      (this.editorManager = n),
      (this.documentBaseUrl = n.documentBaseURL),
      Nx(this, vx),
      (this.settings =
        ((d = (f = this).documentBaseUrl),
        (m = n.defaultSettings),
        (p = d),
        (h = kv),
        (v = f),
        (b = {
          id: e,
          theme: "silver",
          toolbar_mode: rv((g = t), "floating"),
          plugins: "",
          document_base_url: p,
          add_form_submit_trigger: !0,
          submit_patch: !0,
          add_unload_trigger: !0,
          convert_urls: !0,
          relative_urls: !0,
          remove_script_host: !0,
          object_resizing: !0,
          doctype: "<!DOCTYPE html>",
          visual: !0,
          font_size_legacy_values:
            "xx-small,small,medium,large,x-large,xx-large,300%",
          forced_root_block: "p",
          hidden_input: !0,
          inline_styles: !0,
          convert_fonts_to_spans: !0,
          indent: !0,
          indent_before:
            "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
          indent_after:
            "p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,summary,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",
          entity_encoding: "named",
          url_converter: v.convertURL,
          url_converter_scope: v,
        }),
        (y = _e(_e({}, b), h ? Rv : {})),
        !1 !== (C = iv(Nv || _v, Nv, y, m, g)).deprecation_warnings && ev(g, C),
        C)),
      this.settings.suffix && (n.suffix = this.settings.suffix),
      (this.suffix = n.suffix),
      this.settings.base_url && n._setBaseUrl(this.settings.base_url),
      (this.baseUri = n.baseURI),
      this.settings.referrer_policy &&
        (ru.ScriptLoader._setReferrerPolicy(this.settings.referrer_policy),
        Za.DOM.styleSheetLoader._setReferrerPolicy(
          this.settings.referrer_policy
        )),
      (lu.languageLoad = this.settings.language_load),
      (lu.baseURL = n.baseURL),
      (this.id = e),
      this.setDirty(!1),
      (this.documentBaseURI = new Yd(this.settings.document_base_url, {
        base_uri: this.baseUri,
      })),
      (this.baseURI = this.baseUri),
      (this.inline = !!this.settings.inline),
      (this.shortcuts = new Sx(this)),
      (this.editorCommands = new G1(this)),
      this.settings.cache_suffix &&
        (xt.cacheSuffix = this.settings.cache_suffix.replace(/^[\?\&]+/, "")),
      (this.ui = {
        registry: {
          addAutocompleter:
            ((u = {}),
            (r = {
              addButton: w((o = {}), "button"),
              addGroupToolbarButton: w(o, "grouptoolbarbutton"),
              addToggleButton: w(o, "togglebutton"),
              addMenuButton: w(o, "menubutton"),
              addSplitButton: w(o, "splitbutton"),
              addMenuItem: w((i = {}), "menuitem"),
              addNestedMenuItem: w(i, "nestedmenuitem"),
              addToggleMenuItem: w(i, "togglemenuitem"),
              addAutocompleter: w((a = {}), "autocompleter"),
              addContextMenu: w((s = {}), "contextmenu"),
              addContextToolbar: w((c = {}), "contexttoolbar"),
              addContextForm: w(c, "contextform"),
              addSidebar: w((l = {}), "sidebar"),
              addIcon: function (e, t) {
                return (u[e.toLowerCase()] = t);
              },
              getAll: function () {
                return {
                  buttons: o,
                  menuItems: i,
                  icons: u,
                  popups: a,
                  contextMenus: s,
                  contextToolbars: c,
                  sidebars: l,
                };
              },
            }).addAutocompleter),
          addButton: r.addButton,
          addContextForm: r.addContextForm,
          addContextMenu: r.addContextMenu,
          addContextToolbar: r.addContextToolbar,
          addIcon: r.addIcon,
          addMenuButton: r.addMenuButton,
          addMenuItem: r.addMenuItem,
          addNestedMenuItem: r.addNestedMenuItem,
          addSidebar: r.addSidebar,
          addSplitButton: r.addSplitButton,
          addToggleButton: r.addToggleButton,
          addGroupToolbarButton: r.addGroupToolbarButton,
          addToggleMenuItem: r.addToggleMenuItem,
          getAll: r.getAll,
        },
        styleSheetLoader: void 0,
        show: te,
        hide: te,
        enable: te,
        disable: te,
        isDisabled: D,
      });
    var S,
      E,
      k,
      N,
      _,
      A =
        ((N = iu("design")),
        (_ = iu({
          design: { activate: te, deactivate: te, editorReadOnly: !1 },
          readonly: { activate: te, deactivate: te, editorReadOnly: !0 },
        })),
        (E = S = this).serializer
          ? rx(E)
          : E.on("PreInit", function () {
              rx(E);
            }),
        (k = S).on("ShowCaret", function (e) {
          nx(k) && e.preventDefault();
        }),
        k.on("ObjectSelected", function (e) {
          nx(k) && e.preventDefault();
        }),
        {
          isReadOnly: function () {
            return nx(S);
          },
          set: function (e) {
            return (function (e, t, n, r) {
              if (r !== n.get()) {
                if (!ke(t, r))
                  throw new Error("Editor mode '" + r + "' is invalid");
                e.initialized
                  ? dx(e, n, t, r)
                  : e.on("init", function () {
                      return dx(e, n, t, r);
                    });
              }
            })(S, _.get(), N, e);
          },
          get: function () {
            return N.get();
          },
          register: function (e, t) {
            _.set(
              (function (e, t, n) {
                var r;
                if (T(bx, t))
                  throw new Error("Cannot override default mode " + t);
                return _e(
                  _e({}, e),
                  (((r = {})[t] = _e(_e({}, n), {
                    deactivate: function () {
                      try {
                        n.deactivate();
                      } catch (e) {
                        console.error(
                          "problem while deactivating editor mode " + t + ":",
                          e
                        );
                      }
                    },
                  })),
                  r)
                );
              })(_.get(), e, t)
            );
          },
        });
    (this.mode = A),
      (this.setMode = A.set),
      n.fire("SetupEditor", { editor: this }),
      this.execCallback("setup", this),
      (this.$ = Xa.overrideDefaults(function () {
        return {
          context: x.inline ? x.getBody() : x.getDoc(),
          element: x.getBody(),
        };
      }));
  }
  function Ox(t) {
    var n = t.type;
    Fx($x.get(), function (e) {
      switch (n) {
        case "scroll":
          e.fire("ScrollWindow", t);
          break;
        case "resize":
          e.fire("ResizeWindow", t);
      }
    });
  }
  function Bx(e) {
    e !== Hx &&
      (e
        ? Xa(window).on("resize scroll", Ox)
        : Xa(window).off("resize scroll", Ox),
      (Hx = e));
  }
  function Px(t) {
    var e = Vx;
    delete jx[t.id];
    for (var n = 0; n < jx.length; n++)
      if (jx[n] === t) {
        jx.splice(n, 1);
        break;
      }
    return (
      (Vx = U(Vx, function (e) {
        return t !== e;
      })),
      $x.activeEditor === t && ($x.activeEditor = 0 < Vx.length ? Vx[0] : null),
      $x.focusedEditor === t && ($x.focusedEditor = null),
      e.length !== Vx.length
    );
  }
  var Lx,
    Ix = Za.DOM,
    Mx = Et.explode,
    Fx = Et.each,
    Ux = Et.extend,
    zx = 0,
    Hx = !1,
    jx = [],
    Vx = [],
    qx = "CSS1Compat" !== document.compatMode,
    $x = _e(_e({}, px), {
      baseURI: null,
      baseURL: null,
      defaultSettings: {},
      documentBaseURL: null,
      suffix: null,
      $: Xa,
      majorVersion: "5",
      minorVersion: "10.6",
      releaseDate: "2022-10-19",
      editors: jx,
      i18n: cu,
      activeEditor: null,
      focusedEditor: null,
      settings: {},
      setup: function () {
        var e,
          t = "",
          n = Yd.getDocumentBaseUrl(document.location);
        /^[^:]+:\/\/\/?[^\/]+\//.test(n) &&
          ((n = n.replace(/[\?#].*$/, "").replace(/[\/\\][^\/]+$/, "")),
          /[\/\\]$/.test(n) || (n += "/"));
        var r = window.tinymce || window.tinyMCEPreInit;
        if (r) (e = r.base || r.baseURL), (t = r.suffix);
        else {
          for (
            var o, i = document.getElementsByTagName("script"), a = 0;
            a < i.length;
            a++
          )
            if ("" !== (o = i[a].src || "")) {
              var u = o.substring(o.lastIndexOf("/"));
              if (/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(o)) {
                -1 !== u.indexOf(".min") && (t = ".min"),
                  (e = o.substring(0, o.lastIndexOf("/")));
                break;
              }
            }
          !e &&
            document.currentScript &&
            (-1 !== (o = document.currentScript.src).indexOf(".min") &&
              (t = ".min"),
            (e = o.substring(0, o.lastIndexOf("/"))));
        }
        (this.baseURL = new Yd(n).toAbsolute(e)),
          (this.documentBaseURL = n),
          (this.baseURI = new Yd(this.baseURL)),
          (this.suffix = t),
          this.on("AddEditor", R(pd, this)),
          this.on("RemoveEditor", R(hd, this));
      },
      overrideDefaults: function (e) {
        var t = e.base_url;
        t && this._setBaseUrl(t);
        var n = e.suffix;
        e.suffix && (this.suffix = n);
        var r = (this.defaultSettings = e).plugin_base_urls;
        void 0 !== r &&
          ne(r, function (e, t) {
            lu.PluginManager.urls[t] = e;
          });
      },
      init: function (r) {
        function u(e) {
          var t = e.id;
          return (
            t ||
              ((t = ue(e, "name")
                .filter(function (e) {
                  return !Ix.get(e);
                })
                .getOrThunk(Ix.uniqueId)),
              e.setAttribute("id", t)),
            t
          );
        }
        function s(e, t) {
          return t.constructor === RegExp
            ? t.test(e.className)
            : Ix.hasClass(e, t);
        }
        var n,
          c = this,
          l = Et.makeMap(
            "area base basefont br col frame hr img input isindex link meta param embed source wbr track colgroup option table tbody tfoot thead tr th td script noscript style textarea video audio iframe object menu",
            " "
          ),
          f = function (e) {
            n = e;
          },
          t = function () {
            function n(e, t, n) {
              var r = new Dx(e, t, c);
              a.push(r),
                r.on("init", function () {
                  ++i === o.length && f(a);
                }),
                (r.targetElm = r.targetElm || n),
                r.render();
            }
            var o,
              e,
              i = 0,
              a = [];
            Ix.unbind(window, "ready", t),
              (e = r.onpageload) && e.apply(c, []),
              (o = Xa.unique(
                (function (t) {
                  var n = [];
                  if (xt.browser.isIE() && xt.browser.version.major < 11)
                    return (
                      cy(
                        "TinyMCE does not support the browser you are using. For a list of supported browsers please see: https://www.tinymce.com/docs/get-started/system-requirements/"
                      ),
                      []
                    );
                  if (qx)
                    return (
                      cy(
                        "Failed to initialize the editor as the document is not in standards mode. TinyMCE requires standards mode."
                      ),
                      []
                    );
                  if (t.types)
                    return (
                      Fx(t.types, function (e) {
                        n = n.concat(Ix.select(e.selector));
                      }),
                      n
                    );
                  if (t.selector) return Ix.select(t.selector);
                  if (t.target) return [t.target];
                  switch (t.mode) {
                    case "exact":
                      var e = t.elements || "";
                      0 < e.length &&
                        Fx(Mx(e), function (t) {
                          var e = Ix.get(t);
                          e
                            ? n.push(e)
                            : Fx(document.forms, function (e) {
                                Fx(e.elements, function (e) {
                                  e.name === t &&
                                    ((t = "mce_editor_" + zx++),
                                    Ix.setAttrib(e, "id", t),
                                    n.push(e));
                                });
                              });
                        });
                      break;
                    case "textareas":
                    case "specific_textareas":
                      Fx(Ix.select("textarea"), function (e) {
                        (t.editor_deselector && s(e, t.editor_deselector)) ||
                          (t.editor_selector && !s(e, t.editor_selector)) ||
                          n.push(e);
                      });
                  }
                  return n;
                })(r)
              )),
              r.types
                ? Fx(r.types, function (t) {
                    Et.each(o, function (e) {
                      return (
                        !Ix.is(e, t.selector) || (n(u(e), Ux({}, r, t), e), !1)
                      );
                    });
                  })
                : (Et.each(o, function (e) {
                    var t;
                    (t = c.get(e.id)) &&
                      t.initialized &&
                      !(t.getContainer() || t.getBody()).parentNode &&
                      (Px(t),
                      t.unbindAllNativeEvents(),
                      t.destroy(!0),
                      (t.removed = !0));
                  }),
                  0 ===
                  (o = Et.grep(o, function (e) {
                    return !c.get(e.id);
                  })).length
                    ? f([])
                    : Fx(o, function (e) {
                        var t = e;
                        r.inline && t.tagName.toLowerCase() in l
                          ? cy(
                              "Could not initialize inline editor on invalid inline target element",
                              e
                            )
                          : n(u(e), r, e);
                      }));
          };
        return (
          (c.settings = r),
          Ix.bind(window, "ready", t),
          new Nr(function (t) {
            n
              ? t(n)
              : (f = function (e) {
                  t(e);
                });
          })
        );
      },
      get: function (t) {
        return 0 === arguments.length
          ? Vx.slice(0)
          : X(t)
          ? M(Vx, function (e) {
              return e.id === t;
            }).getOr(null)
          : (E(t) && Vx[t]) || null;
      },
      add: function (e) {
        var n = this;
        return (
          jx[e.id] === e ||
            (null === n.get(e.id) &&
              ("length" !== e.id && (jx[e.id] = e), jx.push(e), Vx.push(e)),
            Bx(!0),
            (n.activeEditor = e),
            n.fire("AddEditor", { editor: e }),
            Lx ||
              ((Lx = function (e) {
                var t = n.fire("BeforeUnload");
                if (t.returnValue)
                  return (
                    e.preventDefault(),
                    (e.returnValue = t.returnValue),
                    t.returnValue
                  );
              }),
              window.addEventListener("beforeunload", Lx))),
          e
        );
      },
      createEditor: function (e, t) {
        return this.add(new Dx(e, t, this));
      },
      remove: function (e) {
        var t,
          n,
          r = this;
        if (e) {
          if (!X(e))
            return (
              (n = e),
              l(r.get(n.id))
                ? null
                : (Px(n) && r.fire("RemoveEditor", { editor: n }),
                  0 === Vx.length &&
                    window.removeEventListener("beforeunload", Lx),
                  n.remove(),
                  Bx(0 < Vx.length),
                  n)
            );
          Fx(Ix.select(e), function (e) {
            (n = r.get(e.id)) && r.remove(n);
          });
        } else for (t = Vx.length - 1; 0 <= t; t--) r.remove(Vx[t]);
      },
      execCommand: function (e, t, n) {
        var r = this.get(n);
        switch (e) {
          case "mceAddEditor":
            return this.get(n) || new Dx(n, this.settings, this).render(), !0;
          case "mceRemoveEditor":
            return r && r.remove(), !0;
          case "mceToggleEditor":
            return (
              r
                ? r.isHidden()
                  ? r.show()
                  : r.hide()
                : this.execCommand("mceAddEditor", !1, n),
              !0
            );
        }
        return !!this.activeEditor && this.activeEditor.execCommand(e, t, n);
      },
      triggerSave: function () {
        Fx(Vx, function (e) {
          e.save();
        });
      },
      addI18n: function (e, t) {
        cu.add(e, t);
      },
      translate: function (e) {
        return cu.translate(e);
      },
      setActive: function (e) {
        var t = this.activeEditor;
        this.activeEditor !== e &&
          (t && t.fire("deactivate", { relatedTarget: e }),
          e.fire("activate", { relatedTarget: t })),
          (this.activeEditor = e);
      },
      _setBaseUrl: function (e) {
        (this.baseURL = new Yd(this.documentBaseURL).toAbsolute(
          e.replace(/\/+$/, "")
        )),
          (this.baseURI = new Yd(this.baseURL));
      },
    });
  function Wx(e, t, n) {
    var r = t.x,
      o = t.y,
      i = e.w,
      a = e.h,
      u = t.w,
      s = t.h,
      c = (n || "").split("");
    return (
      "b" === c[0] && (o += s),
      "r" === c[1] && (r += u),
      "c" === c[0] && (o += tw(s / 2)),
      "c" === c[1] && (r += tw(u / 2)),
      "b" === c[3] && (o -= a),
      "r" === c[4] && (r -= i),
      "c" === c[3] && (o -= tw(a / 2)),
      "c" === c[4] && (r -= tw(i / 2)),
      Xx(r, o, i, a)
    );
  }
  function Kx() {}
  $x.setup();
  function Xx(e, t, n, r) {
    return { x: e, y: t, w: n, h: r };
  }
  var Yx,
    Gx,
    Jx,
    Qx,
    Zx = Math.min,
    ew = Math.max,
    tw = Math.round,
    nw = {
      inflate: function (e, t, n) {
        return Xx(e.x - t, e.y - n, e.w + 2 * t, e.h + 2 * n);
      },
      relativePosition: Wx,
      findBestRelativePosition: function (e, t, n, r) {
        for (var o, i = 0; i < r.length; i++)
          if (
            (o = Wx(e, t, r[i])).x >= n.x &&
            o.x + o.w <= n.w + n.x &&
            o.y >= n.y &&
            o.y + o.h <= n.h + n.y
          )
            return r[i];
        return null;
      },
      intersect: function (e, t) {
        var n = ew(e.x, t.x),
          r = ew(e.y, t.y),
          o = Zx(e.x + e.w, t.x + t.w),
          i = Zx(e.y + e.h, t.y + t.h);
        return o - n < 0 || i - r < 0 ? null : Xx(n, r, o - n, i - r);
      },
      clamp: function (e, t, n) {
        var r = e.x,
          o = e.y,
          i = e.x + e.w,
          a = e.y + e.h,
          u = t.x + t.w,
          s = t.y + t.h,
          c = ew(0, t.x - r),
          l = ew(0, t.y - o),
          f = ew(0, i - u),
          d = ew(0, a - s);
        return (
          (r += c),
          (o += l),
          n && ((i += c), (a += l), (r -= f), (o -= d)),
          Xx(r, o, (i -= f) - r, (a -= d) - o)
        );
      },
      create: Xx,
      fromClientRect: function (e) {
        return Xx(e.left, e.top, e.width, e.height);
      },
    },
    rw =
      ((Yx = {}),
      (Gx = {}),
      {
        load: function (r, o) {
          var i = 'Script at URL "' + o + '" failed to load',
            a =
              'Script at URL "' +
              o +
              "\" did not call `tinymce.Resource.add('" +
              r +
              "', data)` within 1 second";
          if (void 0 !== Yx[r]) return Yx[r];
          var e = new Nr(function (e, t) {
            var n = (function (e, t, n) {
              function r(n) {
                return function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                  o ||
                    ((o = !0),
                    null !== i && (clearTimeout(i), (i = null)),
                    n.apply(null, e));
                };
              }
              void 0 === n && (n = 1e3);
              var o = !1,
                i = null,
                a = r(e),
                u = r(t);
              return {
                start: function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                  o ||
                    null !== i ||
                    (i = setTimeout(function () {
                      return u.apply(null, e);
                    }, n));
                },
                resolve: a,
                reject: u,
              };
            })(e, t);
            (Gx[r] = n.resolve),
              ru.ScriptLoader.loadScript(
                o,
                function () {
                  return n.start(a);
                },
                function () {
                  return n.reject(i);
                }
              );
          });
          return (Yx[r] = e);
        },
        add: function (e, t) {
          void 0 !== Gx[e] && (Gx[e](t), delete Gx[e]), (Yx[e] = Nr.resolve(t));
        },
      }),
    ow = Et.each,
    iw = Et.extend;
  Kx.extend = Jx = function (n) {
    function r() {
      var e, t, n;
      if (
        !Qx &&
        (this.init && this.init.apply(this, arguments), (t = this.Mixins))
      )
        for (e = t.length; e--; )
          (n = t[e]).init && n.init.apply(this, arguments);
    }
    function t() {
      return this;
    }
    var o = this.prototype;
    Qx = !0;
    var i = new this();
    return (
      (Qx = !1),
      n.Mixins &&
        (ow(n.Mixins, function (e) {
          for (var t in e) "init" !== t && (n[t] = e[t]);
        }),
        o.Mixins && (n.Mixins = o.Mixins.concat(n.Mixins))),
      n.Methods &&
        ow(n.Methods.split(","), function (e) {
          n[e] = t;
        }),
      n.Properties &&
        ow(n.Properties.split(","), function (e) {
          var t = "_" + e;
          n[e] = function (e) {
            return void 0 !== e ? ((this[t] = e), this) : this[t];
          };
        }),
      n.Statics &&
        ow(n.Statics, function (e, t) {
          r[t] = e;
        }),
      n.Defaults && o.Defaults && (n.Defaults = iw({}, o.Defaults, n.Defaults)),
      ne(n, function (e, t) {
        var n, r;
        "function" == typeof e && o[t]
          ? (i[t] =
              ((n = t),
              (r = e),
              function () {
                var e = this._super;
                this._super = o[n];
                var t = r.apply(this, arguments);
                return (this._super = e), t;
              }))
          : (i[t] = e);
      }),
      (r.prototype = i),
      ((r.constructor = r).extend = Jx),
      r
    );
  };
  var aw,
    uw,
    sw,
    cw = Math.min,
    lw = Math.max,
    fw = Math.round,
    dw = {
      serialize: function (e) {
        var t = JSON.stringify(e);
        return X(t)
          ? t.replace(/[\u0080-\uFFFF]/g, function (e) {
              var t = e.charCodeAt(0).toString(16);
              return "\\u" + "0000".substring(t.length) + t;
            })
          : t;
      },
      parse: function (e) {
        try {
          return JSON.parse(e);
        } catch (e) {}
      },
    },
    mw = {
      callbacks: {},
      count: 0,
      send: function (t) {
        var n = this,
          r = Za.DOM,
          o = (void 0 !== t.count ? t : n).count,
          i = "tinymce_jsonp_" + o;
        (n.callbacks[o] = function (e) {
          r.remove(i), delete n.callbacks[o], t.callback(e);
        }),
          r.add(r.doc.body, "script", {
            id: i,
            src: t.url,
            type: "text/javascript",
          }),
          n.count++;
      },
    },
    gw = _e(_e({}, px), {
      send: function (e) {
        var t,
          n = 0,
          r = function () {
            !e.async || 4 === t.readyState || 1e4 < n++
              ? (e.success && n < 1e4 && 200 === t.status
                  ? e.success.call(e.success_scope, "" + t.responseText, t, e)
                  : e.error &&
                    e.error.call(
                      e.error_scope,
                      1e4 < n ? "TIMED_OUT" : "GENERAL",
                      t,
                      e
                    ),
                (t = null))
              : _r.setTimeout(r, 10);
          };
        if (
          ((e.scope = e.scope || this),
          (e.success_scope = e.success_scope || e.scope),
          (e.error_scope = e.error_scope || e.scope),
          (e.async = !1 !== e.async),
          (e.data = e.data || ""),
          gw.fire("beforeInitialize", { settings: e }),
          (t = new XMLHttpRequest()).overrideMimeType &&
            t.overrideMimeType(e.content_type),
          t.open(e.type || (e.data ? "POST" : "GET"), e.url, e.async),
          e.crossDomain && (t.withCredentials = !0),
          e.content_type && t.setRequestHeader("Content-Type", e.content_type),
          e.requestheaders &&
            Et.each(e.requestheaders, function (e) {
              t.setRequestHeader(e.key, e.value);
            }),
          t.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
          (t = gw.fire("beforeSend", { xhr: t, settings: e }).xhr).send(e.data),
          !e.async)
        )
          return r();
        _r.setTimeout(r, 10);
      },
    }),
    pw = Et.extend,
    hw =
      ((vw.sendRPC = function (e) {
        return new vw().send(e);
      }),
      (vw.prototype.send = function (e) {
        var n = e.error,
          r = e.success,
          o = pw(this.settings, e);
        (o.success = function (e, t) {
          (e =
            void 0 === (e = dw.parse(e)) ? { error: "JSON Parse error." } : e)
            .error
            ? n.call(o.error_scope || o.scope, e.error, t)
            : r.call(o.success_scope || o.scope, e.result);
        }),
          (o.error = function (e, t) {
            n && n.call(o.error_scope || o.scope, e, t);
          }),
          (o.data = dw.serialize({
            id: e.id || "c" + this.count++,
            method: e.method,
            params: e.params,
          })),
          (o.content_type = "application/json"),
          gw.send(o);
      }),
      vw);
  function vw(e) {
    (this.settings = pw({}, e)), (this.count = 0);
  }
  try {
    var bw,
      yw = "__storage_test__";
    (bw = window.localStorage).setItem(yw, yw), bw.removeItem(yw);
  } catch (e) {
    (aw = {}),
      (uw = []),
      (sw = {
        getItem: function (e) {
          return aw[e] || null;
        },
        setItem: function (e, t) {
          uw.push(e), (aw[e] = String(t));
        },
        key: function (e) {
          return uw[e];
        },
        removeItem: function (t) {
          (uw = uw.filter(function (e) {
            return e === t;
          })),
            delete aw[t];
        },
        clear: function () {
          (uw = []), (aw = {});
        },
        length: 0,
      }),
      Object.defineProperty(sw, "length", {
        get: function () {
          return uw.length;
        },
        configurable: !1,
        enumerable: !1,
      }),
      (bw = sw);
  }
  var Cw = {
      geom: { Rect: nw },
      util: {
        Promise: Nr,
        Delay: _r,
        Tools: Et,
        VK: Lf,
        URI: Yd,
        Class: Kx,
        EventDispatcher: ax,
        Observable: px,
        I18n: cu,
        XHR: gw,
        JSON: dw,
        JSONRequest: hw,
        JSONP: mw,
        LocalStorage: bw,
        Color: function (e) {
          function t(e) {
            var t;
            return (
              "object" == typeof e
                ? "r" in e
                  ? ((u = e.r), (s = e.g), (c = e.b))
                  : "v" in e &&
                    (function (e, t, n) {
                      if (
                        ((e = (parseInt(e, 10) || 0) % 360),
                        (t = parseInt(t, 10) / 100),
                        (n = parseInt(n, 10) / 100),
                        (t = lw(0, cw(t, 1))),
                        (n = lw(0, cw(n, 1))),
                        0 !== t)
                      ) {
                        var r = e / 60,
                          o = n * t,
                          i = o * (1 - Math.abs((r % 2) - 1)),
                          a = n - o;
                        switch (Math.floor(r)) {
                          case 0:
                            (u = o), (s = i), (c = 0);
                            break;
                          case 1:
                            (u = i), (s = o), (c = 0);
                            break;
                          case 2:
                            (u = 0), (s = o), (c = i);
                            break;
                          case 3:
                            (u = 0), (s = i), (c = o);
                            break;
                          case 4:
                            (u = i), (s = 0), (c = o);
                            break;
                          case 5:
                            (u = o), (s = 0), (c = i);
                            break;
                          default:
                            u = s = c = 0;
                        }
                        (u = fw(255 * (u + a))),
                          (s = fw(255 * (s + a))),
                          (c = fw(255 * (c + a)));
                      } else u = s = c = fw(255 * n);
                    })(e.h, e.s, e.v)
                : (t =
                    /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(
                      e
                    ))
                ? ((u = parseInt(t[1], 10)),
                  (s = parseInt(t[2], 10)),
                  (c = parseInt(t[3], 10)))
                : (t = /#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e))
                ? ((u = parseInt(t[1], 16)),
                  (s = parseInt(t[2], 16)),
                  (c = parseInt(t[3], 16)))
                : (t = /#([0-F])([0-F])([0-F])/gi.exec(e)) &&
                  ((u = parseInt(t[1] + t[1], 16)),
                  (s = parseInt(t[2] + t[2], 16)),
                  (c = parseInt(t[3] + t[3], 16))),
              (u = u < 0 ? 0 : 255 < u ? 255 : u),
              (s = s < 0 ? 0 : 255 < s ? 255 : s),
              (c = c < 0 ? 0 : 255 < c ? 255 : c),
              n
            );
          }
          var n = {},
            u = 0,
            s = 0,
            c = 0;
          return (
            e && t(e),
            (n.toRgb = function () {
              return { r: u, g: s, b: c };
            }),
            (n.toHsv = function () {
              return (
                (e = u),
                (t = s),
                (n = c),
                (o = 0),
                (i = cw((e /= 255), cw((t /= 255), (n /= 255)))) ===
                (a = lw(e, lw(t, n)))
                  ? { h: 0, s: 0, v: 100 * (o = i) }
                  : ((r = (a - i) / a),
                    {
                      h: fw(
                        60 *
                          ((e === i ? 3 : n === i ? 1 : 5) -
                            (e === i ? t - n : n === i ? e - t : n - e) /
                              ((o = a) - i))
                      ),
                      s: fw(100 * r),
                      v: fw(100 * o),
                    })
              );
              var e, t, n, r, o, i, a;
            }),
            (n.toHex = function () {
              function e(e) {
                return 1 < (e = parseInt(e, 10).toString(16)).length
                  ? e
                  : "0" + e;
              }
              return "#" + e(u) + e(s) + e(c);
            }),
            (n.parse = t),
            n
          );
        },
        ImageUploader: function (n) {
          var e = qv(),
            r = Yv(n, e);
          return {
            upload: function (e, t) {
              return r.upload(e, (t = void 0 === t || t) ? Xv(n) : void 0);
            },
          };
        },
      },
      dom: {
        EventUtils: si,
        Sizzle: sa,
        DomQuery: Xa,
        TreeWalker: Rr,
        TextSeeker: _u,
        DOMUtils: Za,
        ScriptLoader: ru,
        RangeUtils: Pf,
        Serializer: Jh,
        StyleSheetLoader: wr,
        ControlSelection: wf,
        BookmarkManager: zl,
        Selection: Fh,
        Event: si.Event,
      },
      html: {
        Styles: io,
        Entities: Qo,
        Node: Hd,
        Schema: ro,
        SaxParser: Qd,
        DomParser: Xh,
        Writer: om,
        Serializer: im,
      },
      Env: xt,
      AddOnManager: lu,
      Annotator: Ul,
      Formatter: eb,
      UndoManager: nb,
      EditorCommands: G1,
      WindowManager: Mv,
      NotificationManager: lv,
      EditorObservable: vx,
      Shortcuts: Sx,
      Editor: Dx,
      FocusManager: Md,
      EditorManager: $x,
      DOM: Za.DOM,
      ScriptLoader: ru.ScriptLoader,
      PluginManager: Lv,
      ThemeManager: Iv,
      IconManager: Dv,
      Resource: rw,
      trim: Et.trim,
      isArray: Et.isArray,
      is: Et.is,
      toArray: Et.toArray,
      makeMap: Et.makeMap,
      each: Et.each,
      map: Et.map,
      grep: Et.grep,
      inArray: Et.inArray,
      extend: Et.extend,
      create: Et.create,
      walk: Et.walk,
      createNS: Et.createNS,
      resolve: Et.resolve,
      explode: Et.explode,
      _addCacheSuffix: Et._addCacheSuffix,
      isOpera: xt.opera,
      isWebKit: xt.webkit,
      isIE: xt.ie,
      isGecko: xt.gecko,
      isMac: xt.mac,
    },
    xw = Et.extend($x, Cw),
    ww = xw;
  (window.tinymce = ww),
    (window.tinyMCE = ww),
    (function (e) {
      if ("object" == typeof module)
        try {
          module.exports = e;
        } catch (e) {}
    })(xw);
})();

/* Ephox Fluffy plugin
 *
 * Copyright 2010-2016 Ephox Corporation.  All rights reserved.
 *
 * Version: 2.6.0-14
 */

!(function () {
  "use strict";
  function n(e) {
    return function (n) {
      return (
        (r = typeof (t = n)),
        (null === t
          ? "null"
          : "object" == r &&
            (Array.prototype.isPrototypeOf(t) ||
              (t.constructor && "Array" === t.constructor.name))
          ? "array"
          : "object" == r &&
            (String.prototype.isPrototypeOf(t) ||
              (t.constructor && "String" === t.constructor.name))
          ? "string"
          : r) === e
      );
      var t, r;
    };
  }
  function o(n) {
    return function () {
      return n;
    };
  }
  function t(n) {
    return n;
  }
  function r() {
    return p;
  }
  var e,
    u = "undefined" != typeof window ? window : Function("return this;")(),
    i = function (n, t) {
      return { isRequired: n, applyPatch: t };
    },
    a = function (i, o) {
      return function () {
        for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
        var r = o.apply(this, n),
          e = void 0 === r ? n : r;
        return i.apply(this, e);
      };
    },
    c = function (n, t) {
      if (n)
        for (var r = 0; r < t.length; r++)
          t[r].isRequired(n) && t[r].applyPatch(n);
      return n;
    },
    f = n("object"),
    l = n("array"),
    s = function (n) {
      return e === n;
    },
    g = o(!1),
    d = o(!(e = void 0)),
    p = {
      fold: function (n, t) {
        return n();
      },
      isSome: g,
      isNone: d,
      getOr: t,
      getOrThunk: v,
      getOrDie: function (n) {
        throw new Error(n || "error: getOrDie called on none.");
      },
      getOrNull: o(null),
      getOrUndefined: o(void 0),
      or: t,
      orThunk: v,
      map: r,
      each: function () {},
      bind: r,
      exists: g,
      forall: d,
      filter: function () {
        return p;
      },
      toArray: function () {
        return [];
      },
      toString: o("none()"),
    };
  function v(n) {
    return n();
  }
  function h(n, t) {
    return (r = n), (e = t), -1 < D.call(r, e);
    var r, e;
  }
  function y(n, t) {
    return (function (n) {
      for (var t = [], r = 0, e = n.length; r < e; ++r) {
        if (!l(n[r]))
          throw new Error(
            "Arr.flatten item " + r + " was not an array, input: " + n
          );
        U.apply(t, n[r]);
      }
      return t;
    })(
      (function (n, t) {
        for (var r = n.length, e = new Array(r), i = 0; i < r; i++) {
          var o = n[i];
          e[i] = t(o, i);
        }
        return e;
      })(n, t)
    );
  }
  function m(n, t) {
    for (var r = P(n), e = 0, i = r.length; e < i; e++) {
      var o = r[e];
      t(n[o], o);
    }
  }
  function E(r) {
    return function (n, t) {
      r[t] = n;
    };
  }
  function w(n, t) {
    var r,
      e,
      i,
      o = {},
      u = {};
    return (
      (r = t),
      (e = E(o)),
      (i = E(u)),
      m(n, function (n, t) {
        (r(n, t) ? e : i)(n, t);
      }),
      { t: o, f: u }
    );
  }
  function O(n, t) {
    return T(n, t) ? _(n[t]) : S();
  }
  function M(u) {
    return function () {
      for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
      if (0 === n.length) throw new Error("Can't merge zero objects");
      for (var r = {}, e = 0; e < n.length; e++) {
        var i = n[e];
        for (var o in i) T(i, o) && (r[o] = u(r[o], i[o]));
      }
      return r;
    };
  }
  function b(n) {
    if (s(n) || "" === n) return [];
    var t = l(n)
      ? y(n, function (n) {
          return n.split(/[\s+,]/);
        })
      : n.split(/[\s+,]/);
    return y(t, function (n) {
      return 0 < n.length ? [n.trim()] : [];
    });
  }
  function x(n) {
    var t;
    return null !== (t = n.defaultOptions) && void 0 !== t
      ? t
      : n.defaultSettings;
  }
  function j(n, t) {
    var r = C(n, t),
      e = b(t.plugins),
      i = O(r, "custom_plugin_urls").getOr({}),
      o = w(i, function (n, t) {
        return h(e, t);
      }),
      u = O(r, "external_plugins").getOr({}),
      a = {};
    m(o.t, function (n, t) {
      a[t] = n;
    });
    var c = I(a, u);
    return I(t, 0 === P(c).length ? {} : { external_plugins: c });
  }
  var A = function (r) {
      function n() {
        return i;
      }
      function t(n) {
        return n(r);
      }
      var e = o(r),
        i = {
          fold: function (n, t) {
            return t(r);
          },
          isSome: d,
          isNone: g,
          getOr: e,
          getOrThunk: e,
          getOrDie: e,
          getOrNull: e,
          getOrUndefined: e,
          or: n,
          orThunk: n,
          map: function (n) {
            return A(n(r));
          },
          each: function (n) {
            n(r);
          },
          bind: t,
          exists: t,
          forall: t,
          filter: function (n) {
            return n(r) ? i : p;
          },
          toArray: function () {
            return [r];
          },
          toString: function () {
            return "some(" + r + ")";
          },
        };
      return i;
    },
    S = r,
    _ = function (n) {
      return null == n ? p : A(n);
    },
    D = Array.prototype.indexOf,
    U = Array.prototype.push,
    P = Object.keys,
    R = Object.hasOwnProperty,
    T = function (n, t) {
      return R.call(n, t);
    },
    C = M(function (n, t) {
      return f(n) && f(t) ? C(n, t) : t;
    }),
    I = M(function (n, t) {
      return t;
    }),
    N = {
      getCustomPluginUrls: j,
      patch: i(
        function () {
          return !0;
        },
        function (r) {
          (r.EditorManager.init = a(r.EditorManager.init, function (n) {
            return [j(x(r), n)];
          })),
            (r.EditorManager.createEditor = a(
              r.EditorManager.createEditor,
              function (n, t) {
                return [n, j(x(r), t)];
              }
            ));
        }
      ),
    };
  function k(n, t, r) {
    if (r || 2 === arguments.length)
      for (var e, i = 0, o = t.length; i < o; i++)
        (!e && i in t) ||
          ((e = e || Array.prototype.slice.call(t, 0, i))[i] = t[i]);
    return n.concat(e || Array.prototype.slice.call(t));
  }
  function L(n, t) {
    return (function (n, t) {
      for (var r = null != t ? t : u, e = 0; e < n.length && null != r; ++e)
        r = r[n[e]];
      return r;
    })(n.split("."), t);
  }
  function q(n) {
    return parseInt(n, 10);
  }
  function V(n, t) {
    var r = n - t;
    return 0 == r ? 0 : 0 < r ? 1 : -1;
  }
  function z(n, t, r) {
    return { major: n, minor: t, patch: r };
  }
  function B(n) {
    var t = /([0-9]+)\.([0-9]+)\.([0-9]+)(?:(\-.+)?)/.exec(n);
    return t ? z(q(t[1]), q(t[2]), q(t[3])) : z(0, 0, 0);
  }
  function F(n, t) {
    return (
      !!n &&
      -1 ===
        (function (n, t) {
          var r = V(n.major, t.major);
          if (0 !== r) return r;
          var e = V(n.minor, t.minor);
          if (0 !== e) return e;
          var i = V(n.patch, t.patch);
          return 0 !== i ? i : 0;
        })(
          B(
            [(r = n).majorVersion, r.minorVersion]
              .join(".")
              .split(".")
              .slice(0, 3)
              .join(".")
          ),
          B(t)
        )
    );
    var r;
  }
  function $(o) {
    return function (n) {
      var t = L("tinymce.util.Tools", u),
        r = b(n.plugins),
        e = x(o).forced_plugins || [],
        i = 0 < e.length ? r.concat(e) : r;
      return [t.extend({}, n, { plugins: i })];
    };
  }
  function G() {
    return new Date().getTime();
  }
  function H(e) {
    return function () {
      var n,
        t,
        r =
          ((t = "position"),
          (
            ((n = e).currentStyle
              ? n.currentStyle[t]
              : window.getComputedStyle(n, null)[t]) || ""
          ).toLowerCase());
      return "absolute" === r || "fixed" === r;
    };
  }
  function J(n) {
    n.parentNode.removeChild(n);
  }
  function K(n, t) {
    n.notificationManager
      ? n.notificationManager.open({
          text: t,
          type: "warning",
          timeout: 0,
          icon: "",
        })
      : n.windowManager.alert(t);
  }
  function Q(n) {
    var t,
      r,
      e = L("tinymce.util.URI", u);
    (t = n.base_url) &&
      ((this.baseURL = new e(this.documentBaseURL).toAbsolute(
        t.replace(/\/+$/, "")
      )),
      (this.baseURI = new e(this.baseURL))),
      (r = n.suffix),
      n.suffix && (this.suffix = r),
      (this.defaultSettings = n);
  }
  function W(n) {
    return [L("tinymce.util.Tools", u).extend({}, this.defaultSettings, n)];
  }
  function X(n) {
    c(n, [rn.patch, en.patch, Y.patch, N.patch]);
  }
  var Y = {
      patch: i(
        function (n) {
          return F(n, "4.7.0");
        },
        function (r) {
          (r.EditorManager.init = a(r.EditorManager.init, $(r.EditorManager))),
            (r.EditorManager.createEditor = a(
              r.EditorManager.createEditor,
              function (n, t) {
                return k([n], $(r.EditorManager)(t), !0);
              }
            ));
        }
      ),
    },
    Z = function (n, t, r, e, i) {
      var o,
        u = G();
      o = setInterval(function () {
        n() && (clearInterval(o), t()), G() - u > i && (clearInterval(o), r());
      }, e);
    },
    nn = function (n, t) {
      var r,
        e =
          (((r = document.createElement("div")).style.display = "none"),
          (r.className = "mce-floatpanel"),
          r);
      document.body.appendChild(e),
        Z(
          H(e),
          function () {
            J(e), n();
          },
          function () {
            J(e), t();
          },
          10,
          5e3
        );
    },
    tn = function (n) {
      n.EditorManager.on("AddEditor", function (n) {
        var t = n.editor,
          r = t.settings.service_message;
        r &&
          nn(
            function () {
              K(t, r);
            },
            function () {
              alert(r);
            }
          );
      });
    },
    rn = {
      patch: i(
        function (n) {
          return "function" != typeof n.overrideDefaults;
        },
        function (r) {
          tn(r),
            (r.overrideDefaults = Q),
            (r.EditorManager.init = a(r.EditorManager.init, W)),
            (r.EditorManager.createEditor = a(
              r.EditorManager.createEditor,
              function (n, t) {
                return k([n], W.call(r, t), !0);
              }
            ));
        }
      ),
    },
    en = {
      patch: i(
        function (n) {
          return F(n, "4.5.0");
        },
        function (n) {
          var e;
          n.overrideDefaults = a(
            n.overrideDefaults,
            ((e = n),
            function (n) {
              var t = n.plugin_base_urls;
              for (var r in t) e.PluginManager.urls[r] = t[r];
            })
          );
        }
      ),
    };
  X(u.tinymce);
})();

(function (cloudSettings) {
  tinymce.overrideDefaults(cloudSettings);
})({
  rtc_tenant_id: "no-api-key",
  editimage_api_key: "no-api-key",
  imagetools_proxy: "https://imageproxy.tiny.cloud/2/image",
  autocorrect_service_url: "https://spelling.tiny.cloud",
  suffix: ".min",
  linkchecker_service_url: "https://hyperlinking.tiny.cloud",
  spellchecker_rpc_url: "https://spelling.tiny.cloud",
  spellchecker_api_key: "no-api-key",
  tinydrive_service_url: "https://catalog.tiny.cloud",
  api_key: "no-api-key",
  imagetools_api_key: "no-api-key",
  tinydrive_api_key: "no-api-key",
  export_image_proxy_service_url: "https://imageproxy.tiny.cloud",
  forced_plugins: ["chiffer"],
  referrer_policy: "origin",
  content_css_cors: true,
  custom_plugin_urls: {},
  chiffer_snowplow_service_url: "https://sp.tinymce.com/i",
  mediaembed_api_key: "no-api-key",
  promotion: false,
  rtc_service_url: "https://rtc.tiny.cloud",
  editimage_proxy_service_url: "https://imageproxy.tiny.cloud",
  linkchecker_api_key: "no-api-key",
  mediaembed_service_url: "https://hyperlinking.tiny.cloud",
  service_message:
    'This domain is not registered with Tiny Cloud.  Please see the \u003ca target="_blank" href="https://www.tiny.cloud/docs/quick-start/"\u003equick start guide\u003c/a\u003e or \u003ca target="_blank" href="https://www.tiny.cloud/auth/signup/"\u003ecreate an account\u003c/a\u003e.',
});
tinymce.baseURL = "https://cdn.tiny.cloud/1/no-api-key/tinymce/5.10.6-132";

/* Ephox chiffer plugin
 *
 * Copyright 2010-2019 Tiny Technologies Inc. All rights reserved.
 *
 * Version: 2.0.0-19
 */

!(function () {
  "use strict";
  function n(e) {
    return !(null == e);
  }
  function r() {}
  function t(e, n, r, o) {
    return (
      (function (e, t) {
        for (var n = S(e), r = 0, o = n.length; r < o; r++) {
          var i = n[r];
          t(e[i], i);
        }
      })(e, function (e, t) {
        (n(e, t) ? r : o)(e, t);
      }),
      1
    );
  }
  function o(e, t) {
    return h.call(e, t);
  }
  function i(e) {
    var t = e.command;
    return o(P, t)
      ? (function (e) {
          if (n(e.value) && o(e.value, "list-style-type")) {
            e = e.value["list-style-type"];
            return "advlist_" + ("" === e ? "default" : e);
          }
        })(e)
      : o(w, t)
      ? w[t]
      : o(I, t)
      ? I[t]
      : o(b, t)
      ? b[t]
      : void 0;
  }
  function c(e, t) {
    return (e = e), (t = t), -1 < k.call(e, t);
  }
  function a(e) {
    return "plugin_" + e + "_loaded";
  }
  function s(e) {
    var n,
      e =
        (t(
          e,
          function (e, t) {
            e = !!e.isStub;
            return !!t && !e && c(O, t);
          },
          ((n = e = {}),
          function (e, t) {
            n[t] = e;
          }),
          r
        ),
        e);
    return (function (e, t) {
      for (var n = e.length, r = new Array(n), o = 0; o < n; o++) {
        var i = e[o];
        r[o] = t(i, o);
      }
      return r;
    })(S(e), a);
  }
  function u(e, t) {
    !(function (e, t) {
      for (var n = 0, r = e.length; n < r; n++) t(e[n], n);
    })(s(t), e.sendStat);
  }
  function l() {
    return new Date().getTime();
  }
  function e(e, t) {
    var o,
      i,
      n,
      t =
        ((o = e),
        (i = t),
        {
          send: function (e, t, n) {
            var e =
                "?aid=" +
                i +
                "&tna=tinymce_cloud&p=web&dtm=" +
                t +
                "&stm=" +
                l() +
                "&tz=" +
                ("undefined" != typeof Intl
                  ? encodeURIComponent(
                      Intl.DateTimeFormat().resolvedOptions().timeZone
                    )
                  : "N%2FA") +
                "&e=se&se_ca=" +
                e,
              r = document.createElement("img");
            r.src = o.chiffer_snowplow_service_url + e;
            e = function (e) {
              return function () {
                (r.onload = null), (r.onerror = null), n(e);
              };
            };
            (r.onload = e(!0)), (r.onerror = e(!1));
          },
        });
    return (
      (n = t),
      {
        sendStat: function (e) {
          n.send(e, l(), r);
        },
      }
    );
  }
  var d,
    f,
    m,
    p,
    g,
    _,
    v =
      ((d = "string"),
      function (e) {
        return (
          (e = typeof (t = e)),
          (null === t
            ? "null"
            : "object" == e &&
              (Array.prototype.isPrototypeOf(t) ||
                (t.constructor && "Array" === t.constructor.name))
            ? "array"
            : "object" == e &&
              (String.prototype.isPrototypeOf(t) ||
                (t.constructor && "String" === t.constructor.name))
            ? "string"
            : e) === d
        );
        var t;
      }),
    y =
      ((f = void 0),
      function (e) {
        return f === e;
      }),
    S = Object.keys,
    h = Object.hasOwnProperty,
    I = { mceInsertToc: "toc_insert", mceUpdateToc: "toc_update" },
    w = {
      mceEditImage: "imagetools_open_dialog",
      mceImageRotateLeft: "imagetools_rotate",
      mceImageRotateRight: "imagetools_rotate",
      mceImageFlipVertical: "imagetools_flip",
      mceImageFlipHorizontal: "imagetools_flip",
    },
    P = { InsertUnorderedList: !0, InsertOrderedList: !0 },
    b = {
      mceInsertTemplate: "template_insert",
      mceInsertDate: "insertdatetime_insert",
      mceInsertTime: "insertdatetime_insert",
      mcePreview: "preview_open_dialog",
      mceAnchor: "anchor_open_dialog",
    },
    k = Array.prototype.indexOf,
    O = [
      "advcode",
      "advtable",
      "a11ychecker",
      "checklist",
      "export",
      "formatpainter",
      "linkchecker",
      "mediaembed",
      "mentions",
      "pageembed",
      "permanentpen",
      "powerpaste",
      "rtc",
      "tinycomments",
      "tinydrive",
      "tinymcespellchecker",
      "casechange",
      "editimage",
      "tableofcontents",
    ];
  (p =
    null !== (g = tinymce.defaultOptions) && void 0 !== g
      ? g
      : tinymce.defaultSettings),
    (g = { load: r }),
    (_ = (function (e) {
      e = e.api_key;
      return v(e) ? e : void 0;
    })(p)),
    (g =
      void 0 === _
        ? g
        : ((m = e(p, _)).sendStat("script_load"),
          {
            load: function (e) {
              e.once("init", function () {
                return m.sendStat("init");
              }),
                e.once("focus", function () {
                  return m.sendStat("focus");
                }),
                e.on("ExportPdf", function () {
                  return m.sendStat("export_pdf");
                }),
                e.on("PastePreProcess PowerPasteTempStats", function (e) {
                  e = e.source;
                  n(e) && m.sendStat("powerpaste_" + e);
                }),
                e.on("VisualChars", function (e) {
                  !0 === e.state && m.sendStat("visualchars_true");
                }),
                e.on("RtcSessionConnected", function (e) {
                  var t = e.time;
                  switch (t) {
                    case 0:
                      m.sendStat("rtc_started");
                      break;
                    case 5:
                    case 10:
                    case 20:
                      m.sendStat("rtc_connected_" + t + "min");
                  }
                }),
                e.on("RtcSessionError", function () {
                  return m.sendStat("rtc_error");
                }),
                e.on("RtcSessionDirty", function () {
                  return m.sendStat("rtc_edited");
                }),
                e.on("SpellcheckerLanguageChanged", function (e) {
                  e = e.language;
                  m.sendStat("spellcheckerpro_language_changed_" + e);
                }),
                e.on("ExecCommand", function (e) {
                  e = i(e);
                  y(e) || m.sendStat(e);
                }),
                e.on("PreInit", function () {
                  u(m, e.plugins);
                });
            },
          })),
    tinymce.PluginManager.add("chiffer", g.load);
})();
