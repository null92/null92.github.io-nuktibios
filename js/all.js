!(function () {
    "use strict";
    var c = {},
        l = {};
    try {
        "undefined" != typeof window && (c = window), "undefined" != typeof document && (l = document);
    } catch (c) {}
    var h = (c.navigator || {}).userAgent,
        z = void 0 === h ? "" : h,
        a = c,
        v = l,
        m = (a.document, !!v.documentElement && !!v.head && "function" == typeof v.addEventListener && v.createElement, ~z.indexOf("MSIE") || z.indexOf("Trident/"), "___FONT_AWESOME___"),
        e = (function () {
            try {
                return !0;
            } catch (c) {
                return !1;
            }
        })();
    var s = a || {};
    s[m] || (s[m] = {}), s[m].styles || (s[m].styles = {}), s[m].hooks || (s[m].hooks = {}), s[m].shims || (s[m].shims = []);
    var t = s[m];
    function M(c, z) {
        var l = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
            h = void 0 !== l && l,
            a = Object.keys(z).reduce(function (c, l) {
                var h = z[l];
                return !!h.icon ? (c[h.iconName] = h.icon) : (c[l] = h), c;
            }, {});
        "function" != typeof t.hooks.addPack || h
            ? (t.styles[c] = (function (a) {
                  for (var c = 1; c < arguments.length; c++) {
                      var v = null != arguments[c] ? arguments[c] : {},
                          l = Object.keys(v);
                      "function" == typeof Object.getOwnPropertySymbols &&
                          (l = l.concat(
                              Object.getOwnPropertySymbols(v).filter(function (c) {
                                  return Object.getOwnPropertyDescriptor(v, c).enumerable;
                              })
                          )),
                          l.forEach(function (c) {
                              var l, h, z;
                              (l = a), (z = v[(h = c)]), h in l ? Object.defineProperty(l, h, { value: z, enumerable: !0, configurable: !0, writable: !0 }) : (l[h] = z);
                          });
                  }
                  return a;
              })({}, t.styles[c] || {}, a))
            : t.hooks.addPack(c, a),
            "fas" === c && M("fa", z);
    }
    var f = {
        instagram: [
            448,
            512,
            [],
            "f16d",
            "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
        ],
    };
    !(function (c) {
        try {
            c();
        } catch (c) {
            if (!e) throw c;
        }
    })(function () {
        M("fab", f);
    });
})(),
    (function () {
        "use strict";
        var c = {},
            l = {};
        try {
            "undefined" != typeof window && (c = window), "undefined" != typeof document && (l = document);
        } catch (c) {}
        var h = (c.navigator || {}).userAgent,
            z = void 0 === h ? "" : h,
            a = c,
            v = l,
            m = (a.document, !!v.documentElement && !!v.head && "function" == typeof v.addEventListener && v.createElement, ~z.indexOf("MSIE") || z.indexOf("Trident/"), "___FONT_AWESOME___"),
            e = (function () {
                try {
                    return !0;
                } catch (c) {
                    return !1;
                }
            })();
        var s = a || {};
        s[m] || (s[m] = {}), s[m].styles || (s[m].styles = {}), s[m].hooks || (s[m].hooks = {}), s[m].shims || (s[m].shims = []);
        var t = s[m];
        function M(c, z) {
            var l = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
                h = void 0 !== l && l,
                a = Object.keys(z).reduce(function (c, l) {
                    var h = z[l];
                    return !!h.icon ? (c[h.iconName] = h.icon) : (c[l] = h), c;
                }, {});
            "function" != typeof t.hooks.addPack || h
                ? (t.styles[c] = (function (a) {
                      for (var c = 1; c < arguments.length; c++) {
                          var v = null != arguments[c] ? arguments[c] : {},
                              l = Object.keys(v);
                          "function" == typeof Object.getOwnPropertySymbols &&
                              (l = l.concat(
                                  Object.getOwnPropertySymbols(v).filter(function (c) {
                                      return Object.getOwnPropertyDescriptor(v, c).enumerable;
                                  })
                              )),
                              l.forEach(function (c) {
                                  var l, h, z;
                                  (l = a), (z = v[(h = c)]), h in l ? Object.defineProperty(l, h, { value: z, enumerable: !0, configurable: !0, writable: !0 }) : (l[h] = z);
                              });
                      }
                      return a;
                  })({}, t.styles[c] || {}, a))
                : t.hooks.addPack(c, a),
                "fas" === c && M("fa", z);
        }
        var f = {};
        !(function (c) {
            try {
                c();
            } catch (c) {
                if (!e) throw c;
            }
        })(function () {
            M("far", f);
        });
    })(),
    (function () {
        "use strict";
        var c = {},
            l = {};
        try {
            "undefined" != typeof window && (c = window), "undefined" != typeof document && (l = document);
        } catch (c) {}
        var h = (c.navigator || {}).userAgent,
            z = void 0 === h ? "" : h,
            a = c,
            v = l,
            m = (a.document, !!v.documentElement && !!v.head && "function" == typeof v.addEventListener && v.createElement, ~z.indexOf("MSIE") || z.indexOf("Trident/"), "___FONT_AWESOME___"),
            e = (function () {
                try {
                    return !0;
                } catch (c) {
                    return !1;
                }
            })();
        var s = a || {};
        s[m] || (s[m] = {}), s[m].styles || (s[m].styles = {}), s[m].hooks || (s[m].hooks = {}), s[m].shims || (s[m].shims = []);
        var t = s[m];
        function M(c, z) {
            var l = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
                h = void 0 !== l && l,
                a = Object.keys(z).reduce(function (c, l) {
                    var h = z[l];
                    return !!h.icon ? (c[h.iconName] = h.icon) : (c[l] = h), c;
                }, {});
            "function" != typeof t.hooks.addPack || h
                ? (t.styles[c] = (function (a) {
                      for (var c = 1; c < arguments.length; c++) {
                          var v = null != arguments[c] ? arguments[c] : {},
                              l = Object.keys(v);
                          "function" == typeof Object.getOwnPropertySymbols &&
                              (l = l.concat(
                                  Object.getOwnPropertySymbols(v).filter(function (c) {
                                      return Object.getOwnPropertyDescriptor(v, c).enumerable;
                                  })
                              )),
                              l.forEach(function (c) {
                                  var l, h, z;
                                  (l = a), (z = v[(h = c)]), h in l ? Object.defineProperty(l, h, { value: z, enumerable: !0, configurable: !0, writable: !0 }) : (l[h] = z);
                              });
                      }
                      return a;
                  })({}, t.styles[c] || {}, a))
                : t.hooks.addPack(c, a),
                "fas" === c && M("fa", z);
        }
        var f = {
            bars: [
                448,
                512,
                [],
                "f0c9",
                "M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z",
            ],
            plus: [
                448,
                512,
                [],
                "f067",
                "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",
            ],
            times: [
                352,
                512,
                [],
                "f00d",
                "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",
            ],
        };
        !(function (c) {
            try {
                c();
            } catch (c) {
                if (!e) throw c;
            }
        })(function () {
            M("fas", f);
        });
    })(),
    (function () {
        "use strict";
        function a(c) {
            return (a =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (c) {
                          return typeof c;
                      }
                    : function (c) {
                          return c && "function" == typeof Symbol && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c;
                      })(c);
        }
        function v(c, l) {
            for (var h = 0; h < l.length; h++) {
                var z = l[h];
                (z.enumerable = z.enumerable || !1), (z.configurable = !0), "value" in z && (z.writable = !0), Object.defineProperty(c, z.key, z);
            }
        }
        function $(a) {
            for (var c = 1; c < arguments.length; c++) {
                var v = null != arguments[c] ? arguments[c] : {},
                    l = Object.keys(v);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (l = l.concat(
                        Object.getOwnPropertySymbols(v).filter(function (c) {
                            return Object.getOwnPropertyDescriptor(v, c).enumerable;
                        })
                    )),
                    l.forEach(function (c) {
                        var l, h, z;
                        (l = a), (z = v[(h = c)]), h in l ? Object.defineProperty(l, h, { value: z, enumerable: !0, configurable: !0, writable: !0 }) : (l[h] = z);
                    });
            }
            return a;
        }
        function n(c, l) {
            return (
                (function (c) {
                    if (Array.isArray(c)) return c;
                })(c) ||
                (function (c, l) {
                    var h = [],
                        z = !0,
                        a = !1,
                        v = void 0;
                    try {
                        for (var m, e = c[Symbol.iterator](); !(z = (m = e.next()).done) && (h.push(m.value), !l || h.length !== l); z = !0);
                    } catch (c) {
                        (a = !0), (v = c);
                    } finally {
                        try {
                            z || null == e.return || e.return();
                        } finally {
                            if (a) throw v;
                        }
                    }
                    return h;
                })(c, l) ||
                (function () {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance");
                })()
            );
        }
        function H(c) {
            return (
                (function (c) {
                    if (Array.isArray(c)) {
                        for (var l = 0, h = new Array(c.length); l < c.length; l++) h[l] = c[l];
                        return h;
                    }
                })(c) ||
                (function (c) {
                    if (Symbol.iterator in Object(c) || "[object Arguments]" === Object.prototype.toString.call(c)) return Array.from(c);
                })(c) ||
                (function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance");
                })()
            );
        }
        var c = function () {},
            l = {},
            h = {},
            z = null,
            m = { mark: c, measure: c };
        try {
            "undefined" != typeof window && (l = window), "undefined" != typeof document && (h = document), "undefined" != typeof MutationObserver && (z = MutationObserver), "undefined" != typeof performance && (m = performance);
        } catch (c) {}
        var e = (l.navigator || {}).userAgent,
            s = void 0 === e ? "" : e,
            o = l,
            C = h,
            t = z,
            M = m,
            f = !!o.document,
            r = !!C.documentElement && !!C.head && "function" == typeof C.addEventListener && "function" == typeof C.createElement,
            p = ~s.indexOf("MSIE") || ~s.indexOf("Trident/"),
            V = "___FONT_AWESOME___",
            b = 16,
            i = "fa",
            L = "svg-inline--fa",
            cc = "data-fa-i2svg",
            d = "data-fa-pseudo-element",
            u = "data-fa-pseudo-element-pending",
            A = "data-prefix",
            g = "data-icon",
            S = "fontawesome-i2svg",
            y = "async",
            w = ["HTML", "HEAD", "STYLE", "SCRIPT"],
            Z = (function () {
                try {
                    return !0;
                } catch (c) {
                    return !1;
                }
            })(),
            k = { fas: "solid", far: "regular", fal: "light", fad: "duotone", fab: "brands", fak: "kit", fa: "solid" },
            x = { solid: "fas", regular: "far", light: "fal", duotone: "fad", brands: "fab", kit: "fak" },
            q = "fa-layers-text",
            O = /Font Awesome ([5 ]*)(Solid|Regular|Light|Duotone|Brands|Free|Pro|Kit).*/,
            j = { 900: "fas", 400: "far", normal: "far", 300: "fal" },
            P = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            E = P.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
            N = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"],
            _ = { GROUP: "group", SWAP_OPACITY: "swap-opacity", PRIMARY: "primary", SECONDARY: "secondary" },
            T = [
                "xs",
                "sm",
                "lg",
                "fw",
                "ul",
                "li",
                "border",
                "pull-left",
                "pull-right",
                "spin",
                "pulse",
                "rotate-90",
                "rotate-180",
                "rotate-270",
                "flip-horizontal",
                "flip-vertical",
                "flip-both",
                "stack",
                "stack-1x",
                "stack-2x",
                "inverse",
                "layers",
                "layers-text",
                "layers-counter",
                _.GROUP,
                _.SWAP_OPACITY,
                _.PRIMARY,
                _.SECONDARY,
            ]
                .concat(
                    P.map(function (c) {
                        return "".concat(c, "x");
                    })
                )
                .concat(
                    E.map(function (c) {
                        return "w-".concat(c);
                    })
                ),
            I = o.FontAwesomeConfig || {};
        if (C && "function" == typeof C.querySelector) {
            [
                ["data-family-prefix", "familyPrefix"],
                ["data-replacement-class", "replacementClass"],
                ["data-auto-replace-svg", "autoReplaceSvg"],
                ["data-auto-add-css", "autoAddCss"],
                ["data-auto-a11y", "autoA11y"],
                ["data-search-pseudo-elements", "searchPseudoElements"],
                ["data-observe-mutations", "observeMutations"],
                ["data-mutate-approach", "mutateApproach"],
                ["data-keep-original-source", "keepOriginalSource"],
                ["data-measure-performance", "measurePerformance"],
                ["data-show-missing-icons", "showMissingIcons"],
            ].forEach(function (c) {
                var l,
                    h = n(c, 2),
                    z = h[0],
                    a = h[1],
                    v =
                        "" ===
                            (l = (function (c) {
                                var l = C.querySelector("script[" + c + "]");
                                if (l) return l.getAttribute(c);
                            })(z)) ||
                        ("false" !== l && ("true" === l || l));
                null != v && (I[a] = v);
            });
        }
        var R = $(
            {},
            {
                familyPrefix: i,
                replacementClass: L,
                autoReplaceSvg: !0,
                autoAddCss: !0,
                autoA11y: !0,
                searchPseudoElements: !1,
                observeMutations: !0,
                mutateApproach: "async",
                keepOriginalSource: !0,
                measurePerformance: !1,
                showMissingIcons: !0,
            },
            I
        );
        R.autoReplaceSvg || (R.observeMutations = !1);
        var lc = $({}, R);
        o.FontAwesomeConfig = lc;
        var F = o || {};
        F[V] || (F[V] = {}), F[V].styles || (F[V].styles = {}), F[V].hooks || (F[V].hooks = {}), F[V].shims || (F[V].shims = []);
        var Y = F[V],
            D = [],
            U = !1;
        function W(c) {
            r && (U ? setTimeout(c, 0) : D.push(c));
        }
        r &&
            ((U = (C.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(C.readyState)) ||
                C.addEventListener("DOMContentLoaded", function c() {
                    C.removeEventListener("DOMContentLoaded", c),
                        (U = 1),
                        D.map(function (c) {
                            return c();
                        });
                }));
        var Q,
            K = "pending",
            X = "settled",
            B = "fulfilled",
            G = "rejected",
            J = function () {},
            hc = "undefined" != typeof global && void 0 !== global.process && "function" == typeof global.process.emit,
            zc = "undefined" == typeof setImmediate ? setTimeout : setImmediate,
            ac = [];
        function vc() {
            for (var c = 0; c < ac.length; c++) ac[c][0](ac[c][1]);
            Q = !(ac = []);
        }
        function mc(c, l) {
            ac.push([c, l]), Q || ((Q = !0), zc(vc, 0));
        }
        function ec(c) {
            var l = c.owner,
                h = l._state,
                z = l._data,
                a = c[h],
                v = c.then;
            if ("function" == typeof a) {
                h = B;
                try {
                    z = a(z);
                } catch (c) {
                    fc(v, c);
                }
            }
            sc(v, z) || (h === B && tc(v, z), h === G && fc(v, z));
        }
        function sc(l, h) {
            var z;
            try {
                if (l === h) throw new TypeError("A promises callback cannot return that same promise.");
                if (h && ("function" == typeof h || "object" === a(h))) {
                    var c = h.then;
                    if ("function" == typeof c)
                        return (
                            c.call(
                                h,
                                function (c) {
                                    z || ((z = !0), h === c ? Mc(l, c) : tc(l, c));
                                },
                                function (c) {
                                    z || ((z = !0), fc(l, c));
                                }
                            ),
                            !0
                        );
                }
            } catch (c) {
                return z || fc(l, c), !0;
            }
            return !1;
        }
        function tc(c, l) {
            (c !== l && sc(c, l)) || Mc(c, l);
        }
        function Mc(c, l) {
            c._state === K && ((c._state = X), (c._data = l), mc(rc, c));
        }
        function fc(c, l) {
            c._state === K && ((c._state = X), (c._data = l), mc(nc, c));
        }
        function Hc(c) {
            c._then = c._then.forEach(ec);
        }
        function rc(c) {
            (c._state = B), Hc(c);
        }
        function nc(c) {
            (c._state = G), Hc(c), !c._handled && hc && global.process.emit("unhandledRejection", c._data, c);
        }
        function Vc(c) {
            global.process.emit("rejectionHandled", c);
        }
        function ic(c) {
            if ("function" != typeof c) throw new TypeError("Promise resolver " + c + " is not a function");
            if (this instanceof ic == !1) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
            (this._then = []),
                (function (c, l) {
                    function h(c) {
                        fc(l, c);
                    }
                    try {
                        c(function (c) {
                            tc(l, c);
                        }, h);
                    } catch (c) {
                        h(c);
                    }
                })(c, this);
        }
        (ic.prototype = {
            constructor: ic,
            _state: K,
            _then: null,
            _data: void 0,
            _handled: !1,
            then: function (c, l) {
                var h = { owner: this, then: new this.constructor(J), fulfilled: c, rejected: l };
                return (!l && !c) || this._handled || ((this._handled = !0), this._state === G && hc && mc(Vc, this)), this._state === B || this._state === G ? mc(ec, h) : this._then.push(h), h.then;
            },
            catch: function (c) {
                return this.then(null, c);
            },
        }),
            (ic.all = function (e) {
                if (!Array.isArray(e)) throw new TypeError("You must pass an array to Promise.all().");
                return new ic(function (h, c) {
                    var z = [],
                        a = 0;
                    function l(l) {
                        return (
                            a++,
                            function (c) {
                                (z[l] = c), --a || h(z);
                            }
                        );
                    }
                    for (var v, m = 0; m < e.length; m++) (v = e[m]) && "function" == typeof v.then ? v.then(l(m), c) : (z[m] = v);
                    a || h(z);
                });
            }),
            (ic.race = function (a) {
                if (!Array.isArray(a)) throw new TypeError("You must pass an array to Promise.race().");
                return new ic(function (c, l) {
                    for (var h, z = 0; z < a.length; z++) (h = a[z]) && "function" == typeof h.then ? h.then(c, l) : c(h);
                });
            }),
            (ic.resolve = function (l) {
                return l && "object" === a(l) && l.constructor === ic
                    ? l
                    : new ic(function (c) {
                          c(l);
                      });
            }),
            (ic.reject = function (h) {
                return new ic(function (c, l) {
                    l(h);
                });
            });
        var oc = "function" == typeof Promise ? Promise : ic,
            Cc = b,
            Lc = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
        function dc(c) {
            if (c && r) {
                var l = C.createElement("style");
                l.setAttribute("type", "text/css"), (l.innerHTML = c);
                for (var h = C.head.childNodes, z = null, a = h.length - 1; -1 < a; a--) {
                    var v = h[a],
                        m = (v.tagName || "").toUpperCase();
                    -1 < ["STYLE", "LINK"].indexOf(m) && (z = v);
                }
                return C.head.insertBefore(l, z), c;
            }
        }
        var uc = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        function pc() {
            for (var c = 12, l = ""; 0 < c--; ) l += uc[(62 * Math.random()) | 0];
            return l;
        }
        function bc(c) {
            for (var l = [], h = (c || []).length >>> 0; h--; ) l[h] = c[h];
            return l;
        }
        function Ac(c) {
            return c.classList
                ? bc(c.classList)
                : (c.getAttribute("class") || "").split(" ").filter(function (c) {
                      return c;
                  });
        }
        function gc(c, l) {
            var h,
                z = l.split("-"),
                a = z[0],
                v = z.slice(1).join("-");
            return a !== c || "" === v || ((h = v), ~T.indexOf(h)) ? null : v;
        }
        function Sc(c) {
            return "".concat(c).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        }
        function yc(h) {
            return Object.keys(h || {}).reduce(function (c, l) {
                return c + "".concat(l, ": ").concat(h[l], ";");
            }, "");
        }
        function wc(c) {
            return c.size !== Lc.size || c.x !== Lc.x || c.y !== Lc.y || c.rotate !== Lc.rotate || c.flipX || c.flipY;
        }
        function Zc(c) {
            var l = c.transform,
                h = c.containerWidth,
                z = c.iconWidth,
                a = { transform: "translate(".concat(h / 2, " 256)") },
                v = "translate(".concat(32 * l.x, ", ").concat(32 * l.y, ") "),
                m = "scale(".concat((l.size / 16) * (l.flipX ? -1 : 1), ", ").concat((l.size / 16) * (l.flipY ? -1 : 1), ") "),
                e = "rotate(".concat(l.rotate, " 0 0)");
            return { outer: a, inner: { transform: "".concat(v, " ").concat(m, " ").concat(e) }, path: { transform: "translate(".concat((z / 2) * -1, " -256)") } };
        }
        var kc = { x: 0, y: 0, width: "100%", height: "100%" };
        function xc(c) {
            var l = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
            return c.attributes && (c.attributes.fill || l) && (c.attributes.fill = "black"), c;
        }
        function qc(c) {
            var l = c.icons,
                h = l.main,
                z = l.mask,
                a = c.prefix,
                v = c.iconName,
                m = c.transform,
                e = c.symbol,
                s = c.title,
                t = c.maskId,
                M = c.titleId,
                f = c.extra,
                H = c.watchable,
                r = void 0 !== H && H,
                n = z.found ? z : h,
                V = n.width,
                i = n.height,
                o = "fak" === a,
                C = o ? "" : "fa-w-".concat(Math.ceil((V / i) * 16)),
                L = [lc.replacementClass, v ? "".concat(lc.familyPrefix, "-").concat(v) : "", C]
                    .filter(function (c) {
                        return -1 === f.classes.indexOf(c);
                    })
                    .filter(function (c) {
                        return "" !== c || !!c;
                    })
                    .concat(f.classes)
                    .join(" "),
                d = { children: [], attributes: $({}, f.attributes, { "data-prefix": a, "data-icon": v, class: L, role: f.attributes.role || "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 ".concat(V, " ").concat(i) }) },
                u = o && !~f.classes.indexOf("fa-fw") ? { width: "".concat((V / i) * 16 * 0.0625, "em") } : {};
            r && (d.attributes[cc] = ""), s && d.children.push({ tag: "title", attributes: { id: d.attributes["aria-labelledby"] || "title-".concat(M || pc()) }, children: [s] });
            var p,
                b,
                A,
                g,
                S,
                y,
                w,
                Z,
                k,
                x,
                q,
                O,
                j,
                P,
                E,
                N,
                _,
                T,
                I,
                R,
                F,
                Y,
                D,
                U,
                W,
                Q,
                K,
                X = $({}, d, { prefix: a, iconName: v, main: h, mask: z, maskId: t, transform: m, symbol: e, styles: $({}, u, f.styles) }),
                B =
                    z.found && h.found
                        ? ((A = (p = X).children),
                          (g = p.attributes),
                          (S = p.main),
                          (y = p.mask),
                          (w = p.maskId),
                          (Z = p.transform),
                          (k = S.width),
                          (x = S.icon),
                          (q = y.width),
                          (O = y.icon),
                          (j = Zc({ transform: Z, containerWidth: q, iconWidth: k })),
                          (P = { tag: "rect", attributes: $({}, kc, { fill: "white" }) }),
                          (E = x.children ? { children: x.children.map(xc) } : {}),
                          (N = { tag: "g", attributes: $({}, j.inner), children: [xc($({ tag: x.tag, attributes: $({}, x.attributes, j.path) }, E))] }),
                          (_ = { tag: "g", attributes: $({}, j.outer), children: [N] }),
                          (T = "mask-".concat(w || pc())),
                          (I = "clip-".concat(w || pc())),
                          (R = { tag: "mask", attributes: $({}, kc, { id: T, maskUnits: "userSpaceOnUse", maskContentUnits: "userSpaceOnUse" }), children: [P, _] }),
                          (F = { tag: "defs", children: [{ tag: "clipPath", attributes: { id: I }, children: ((b = O), "g" === b.tag ? b.children : [b]) }, R] }),
                          A.push(F, { tag: "rect", attributes: $({ fill: "currentColor", "clip-path": "url(#".concat(I, ")"), mask: "url(#".concat(T, ")") }, kc) }),
                          { children: A, attributes: g })
                        : (function (c) {
                              var l = c.children,
                                  h = c.attributes,
                                  z = c.main,
                                  a = c.transform,
                                  v = yc(c.styles);
                              if ((0 < v.length && (h.style = v), wc(a))) {
                                  var m = Zc({ transform: a, containerWidth: z.width, iconWidth: z.width });
                                  l.push({
                                      tag: "g",
                                      attributes: $({}, m.outer),
                                      children: [{ tag: "g", attributes: $({}, m.inner), children: [{ tag: z.icon.tag, children: z.icon.children, attributes: $({}, z.icon.attributes, m.path) }] }],
                                  });
                              } else l.push(z.icon);
                              return { children: l, attributes: h };
                          })(X),
                G = B.children,
                J = B.attributes;
            return (
                (X.children = G),
                (X.attributes = J),
                e
                    ? ((D = (Y = X).prefix),
                      (U = Y.iconName),
                      (W = Y.children),
                      (Q = Y.attributes),
                      (K = Y.symbol),
                      [{ tag: "svg", attributes: { style: "display: none;" }, children: [{ tag: "symbol", attributes: $({}, Q, { id: !0 === K ? "".concat(D, "-").concat(lc.familyPrefix, "-").concat(U) : K }), children: W }] }])
                    : (function (c) {
                          var l = c.children,
                              h = c.main,
                              z = c.mask,
                              a = c.attributes,
                              v = c.styles,
                              m = c.transform;
                          if (wc(m) && h.found && !z.found) {
                              var e = h.width / h.height / 2,
                                  s = 0.5;
                              a.style = yc($({}, v, { "transform-origin": "".concat(e + m.x / 16, "em ").concat(s + m.y / 16, "em") }));
                          }
                          return [{ tag: "svg", attributes: a, children: l }];
                      })(X)
            );
        }
        function Oc(c) {
            var l = c.content,
                h = c.width,
                z = c.height,
                a = c.transform,
                v = c.title,
                m = c.extra,
                e = c.watchable,
                s = void 0 !== e && e,
                t = $({}, m.attributes, v ? { title: v } : {}, { class: m.classes.join(" ") });
            s && (t[cc] = "");
            var M,
                f,
                H,
                r,
                n,
                V,
                i,
                o,
                C,
                L = $({}, m.styles);
            wc(a) &&
                ((L.transform =
                    ((f = (M = { transform: a, startCentered: !0, width: h, height: z }).transform),
                    (H = M.width),
                    (r = void 0 === H ? b : H),
                    (n = M.height),
                    (V = void 0 === n ? b : n),
                    (i = M.startCentered),
                    (C = ""),
                    (C +=
                        (o = void 0 !== i && i) && p
                            ? "translate(".concat(f.x / Cc - r / 2, "em, ").concat(f.y / Cc - V / 2, "em) ")
                            : o
                            ? "translate(calc(-50% + ".concat(f.x / Cc, "em), calc(-50% + ").concat(f.y / Cc, "em)) ")
                            : "translate(".concat(f.x / Cc, "em, ").concat(f.y / Cc, "em) ")),
                    (C += "scale(".concat((f.size / Cc) * (f.flipX ? -1 : 1), ", ").concat((f.size / Cc) * (f.flipY ? -1 : 1), ") ")),
                    (C += "rotate(".concat(f.rotate, "deg) ")))),
                (L["-webkit-transform"] = L.transform));
            var d = yc(L);
            0 < d.length && (t.style = d);
            var u = [];
            return u.push({ tag: "span", attributes: t, children: [l] }), v && u.push({ tag: "span", attributes: { class: "sr-only" }, children: [v] }), u;
        }
        var jc = function () {},
            Pc = lc.measurePerformance && M && M.mark && M.measure ? M : { mark: jc, measure: jc },
            Ec = 'FA "5.15.1"',
            Nc = function (c) {
                Pc.mark("".concat(Ec, " ").concat(c, " ends")), Pc.measure("".concat(Ec, " ").concat(c), "".concat(Ec, " ").concat(c, " begins"), "".concat(Ec, " ").concat(c, " ends"));
            },
            _c = {
                begin: function (c) {
                    return (
                        Pc.mark("".concat(Ec, " ").concat(c, " begins")),
                        function () {
                            return Nc(c);
                        }
                    );
                },
                end: Nc,
            },
            Tc = function (c, l, h, z) {
                var a,
                    v,
                    m,
                    e,
                    s,
                    t = Object.keys(c),
                    M = t.length,
                    f =
                        void 0 !== z
                            ? ((e = l),
                              (s = z),
                              function (c, l, h, z) {
                                  return e.call(s, c, l, h, z);
                              })
                            : l;
                for (m = void 0 === h ? ((a = 1), c[t[0]]) : ((a = 0), h); a < M; a++) m = f(m, c[(v = t[a])], v, c);
                return m;
            };
        function Ic(c) {
            for (var l = "", h = 0; h < c.length; h++) {
                l += ("000" + c.charCodeAt(h).toString(16)).slice(-4);
            }
            return l;
        }
        var Rc = Y.styles,
            Fc = Y.shims,
            Yc = {},
            Dc = {},
            Uc = {},
            Wc = function () {
                var c = function (z) {
                    return Tc(
                        Rc,
                        function (c, l, h) {
                            return (c[h] = Tc(l, z, {})), c;
                        },
                        {}
                    );
                };
                (Yc = c(function (c, l, h) {
                    return l[3] && (c[l[3]] = h), c;
                })),
                    (Dc = c(function (l, c, h) {
                        var z = c[2];
                        return (
                            (l[h] = h),
                            z.forEach(function (c) {
                                l[c] = h;
                            }),
                            l
                        );
                    }));
                var v = "far" in Rc;
                Uc = Tc(
                    Fc,
                    function (c, l) {
                        var h = l[0],
                            z = l[1],
                            a = l[2];
                        return "far" !== z || v || (z = "fas"), (c[h] = { prefix: z, iconName: a }), c;
                    },
                    {}
                );
            };
        function Qc(c, l) {
            return (Yc[c] || {})[l];
        }
        Wc();
        var Kc = Y.styles,
            Xc = function () {
                return { prefix: null, iconName: null, rest: [] };
            };
        function Bc(c) {
            return c.reduce(function (c, l) {
                var h = gc(lc.familyPrefix, l);
                if (Kc[l]) c.prefix = l;
                else if (lc.autoFetchSvg && -1 < Object.keys(k).indexOf(l)) c.prefix = l;
                else if (h) {
                    var z = "fa" === c.prefix ? Uc[h] || { prefix: null, iconName: null } : {};
                    (c.iconName = z.iconName || h), (c.prefix = z.prefix || c.prefix);
                } else l !== lc.replacementClass && 0 !== l.indexOf("fa-w-") && c.rest.push(l);
                return c;
            }, Xc());
        }
        function Gc(c, l, h) {
            if (c && c[l] && c[l][h]) return { prefix: l, iconName: h, icon: c[l][h] };
        }
        function Jc(c) {
            var h,
                l = c.tag,
                z = c.attributes,
                a = void 0 === z ? {} : z,
                v = c.children,
                m = void 0 === v ? [] : v;
            return "string" == typeof c
                ? Sc(c)
                : "<"
                      .concat(l, " ")
                      .concat(
                          ((h = a),
                          Object.keys(h || {})
                              .reduce(function (c, l) {
                                  return c + "".concat(l, '="').concat(Sc(h[l]), '" ');
                              }, "")
                              .trim()),
                          ">"
                      )
                      .concat(m.map(Jc).join(""), "</")
                      .concat(l, ">");
        }
        var $c = function () {};
        function cl(c) {
            return "string" == typeof (c.getAttribute ? c.getAttribute(cc) : null);
        }
        var ll = {
            replace: function (c) {
                var l = c[0],
                    h = c[1]
                        .map(function (c) {
                            return Jc(c);
                        })
                        .join("\n");
                if (l.parentNode && l.outerHTML) l.outerHTML = h + (lc.keepOriginalSource && "svg" !== l.tagName.toLowerCase() ? "\x3c!-- ".concat(l.outerHTML, " Font Awesome fontawesome.com --\x3e") : "");
                else if (l.parentNode) {
                    var z = document.createElement("span");
                    l.parentNode.replaceChild(z, l), (z.outerHTML = h);
                }
            },
            nest: function (c) {
                var l = c[0],
                    h = c[1];
                if (~Ac(l).indexOf(lc.replacementClass)) return ll.replace(c);
                var z = new RegExp("".concat(lc.familyPrefix, "-.*"));
                delete h[0].attributes.style, delete h[0].attributes.id;
                var a = h[0].attributes.class.split(" ").reduce(
                    function (c, l) {
                        return l === lc.replacementClass || l.match(z) ? c.toSvg.push(l) : c.toNode.push(l), c;
                    },
                    { toNode: [], toSvg: [] }
                );
                h[0].attributes.class = a.toSvg.join(" ");
                var v = h
                    .map(function (c) {
                        return Jc(c);
                    })
                    .join("\n");
                l.setAttribute("class", a.toNode.join(" ")), l.setAttribute(cc, ""), (l.innerHTML = v);
            },
        };
        function hl(c) {
            c();
        }
        function zl(h, c) {
            var z = "function" == typeof c ? c : $c;
            if (0 === h.length) z();
            else {
                var l = hl;
                lc.mutateApproach === y && (l = o.requestAnimationFrame || hl),
                    l(function () {
                        var c = !0 === lc.autoReplaceSvg ? ll.replace : ll[lc.autoReplaceSvg] || ll.replace,
                            l = _c.begin("mutate");
                        h.map(c), l(), z();
                    });
            }
        }
        var al = !1;
        function vl() {
            al = !1;
        }
        var ml = null;
        function el(c) {
            if (t && lc.observeMutations) {
                var a = c.treeCallback,
                    v = c.nodeCallback,
                    m = c.pseudoElementsCallback,
                    l = c.observeMutationsRoot,
                    h = void 0 === l ? C : l;
                (ml = new t(function (c) {
                    al ||
                        bc(c).forEach(function (c) {
                            if (
                                ("childList" === c.type && 0 < c.addedNodes.length && !cl(c.addedNodes[0]) && (lc.searchPseudoElements && m(c.target), a(c.target)),
                                "attributes" === c.type && c.target.parentNode && lc.searchPseudoElements && m(c.target.parentNode),
                                "attributes" === c.type && cl(c.target) && ~N.indexOf(c.attributeName))
                            )
                                if ("class" === c.attributeName) {
                                    var l = Bc(Ac(c.target)),
                                        h = l.prefix,
                                        z = l.iconName;
                                    h && c.target.setAttribute("data-prefix", h), z && c.target.setAttribute("data-icon", z);
                                } else v(c.target);
                        });
                })),
                    r && ml.observe(h, { childList: !0, attributes: !0, characterData: !0, subtree: !0 });
            }
        }
        function sl(c) {
            var l,
                h,
                z = c.getAttribute("data-prefix"),
                a = c.getAttribute("data-icon"),
                v = void 0 !== c.innerText ? c.innerText.trim() : "",
                m = Bc(Ac(c));
            return (
                z && a && ((m.prefix = z), (m.iconName = a)), m.prefix && 1 < v.length ? (m.iconName = ((l = m.prefix), (h = c.innerText), (Dc[l] || {})[h])) : m.prefix && 1 === v.length && (m.iconName = Qc(m.prefix, Ic(c.innerText))), m
            );
        }
        var tl = function (c) {
            var l = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
            return c
                ? c
                      .toLowerCase()
                      .split(" ")
                      .reduce(function (c, l) {
                          var h = l.toLowerCase().split("-"),
                              z = h[0],
                              a = h.slice(1).join("-");
                          if (z && "h" === a) return (c.flipX = !0), c;
                          if (z && "v" === a) return (c.flipY = !0), c;
                          if (((a = parseFloat(a)), isNaN(a))) return c;
                          switch (z) {
                              case "grow":
                                  c.size = c.size + a;
                                  break;
                              case "shrink":
                                  c.size = c.size - a;
                                  break;
                              case "left":
                                  c.x = c.x - a;
                                  break;
                              case "right":
                                  c.x = c.x + a;
                                  break;
                              case "up":
                                  c.y = c.y - a;
                                  break;
                              case "down":
                                  c.y = c.y + a;
                                  break;
                              case "rotate":
                                  c.rotate = c.rotate + a;
                          }
                          return c;
                      }, l)
                : l;
        };
        function Ml(c) {
            var l,
                h,
                z,
                a,
                v,
                m,
                e,
                s,
                t = sl(c),
                M = t.iconName,
                f = t.prefix,
                H = t.rest,
                r =
                    ((l = c.getAttribute("style")),
                    (h = []),
                    l &&
                        (h = l.split(";").reduce(function (c, l) {
                            var h = l.split(":"),
                                z = h[0],
                                a = h.slice(1);
                            return z && 0 < a.length && (c[z] = a.join(":").trim()), c;
                        }, {})),
                    h),
                n = tl(c.getAttribute("data-fa-transform")),
                V = null !== (z = c.getAttribute("data-fa-symbol")) && ("" === z || z),
                i =
                    ((v = bc((a = c).attributes).reduce(function (c, l) {
                        return "class" !== c.name && "style" !== c.name && (c[l.name] = l.value), c;
                    }, {})),
                    (m = a.getAttribute("title")),
                    (e = a.getAttribute("data-fa-title-id")),
                    lc.autoA11y && (m ? (v["aria-labelledby"] = "".concat(lc.replacementClass, "-title-").concat(e || pc())) : ((v["aria-hidden"] = "true"), (v.focusable = "false"))),
                    v),
                o = (s = c.getAttribute("data-fa-mask"))
                    ? Bc(
                          s.split(" ").map(function (c) {
                              return c.trim();
                          })
                      )
                    : Xc();
            return {
                iconName: M,
                title: c.getAttribute("title"),
                titleId: c.getAttribute("data-fa-title-id"),
                prefix: f,
                transform: n,
                symbol: V,
                mask: o,
                maskId: c.getAttribute("data-fa-mask-id"),
                extra: { classes: H, styles: r, attributes: i },
            };
        }
        function fl(c) {
            (this.name = "MissingIcon"), (this.message = c || "Icon unavailable"), (this.stack = new Error().stack);
        }
        (fl.prototype = Object.create(Error.prototype)).constructor = fl;
        var Hl = { fill: "currentColor" },
            rl = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" },
            nl = {
                tag: "path",
                attributes: $({}, Hl, {
                    d:
                        "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
                }),
            },
            Vl = $({}, rl, { attributeName: "opacity" }),
            il = {
                tag: "g",
                children: [
                    nl,
                    {
                        tag: "circle",
                        attributes: $({}, Hl, { cx: "256", cy: "364", r: "28" }),
                        children: [
                            { tag: "animate", attributes: $({}, rl, { attributeName: "r", values: "28;14;28;28;14;28;" }) },
                            { tag: "animate", attributes: $({}, Vl, { values: "1;0;1;1;0;1;" }) },
                        ],
                    },
                    {
                        tag: "path",
                        attributes: $({}, Hl, {
                            opacity: "1",
                            d:
                                "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
                        }),
                        children: [{ tag: "animate", attributes: $({}, Vl, { values: "1;0;0;0;0;1;" }) }],
                    },
                    {
                        tag: "path",
                        attributes: $({}, Hl, { opacity: "0", d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z" }),
                        children: [{ tag: "animate", attributes: $({}, Vl, { values: "0;0;1;1;0;0;" }) }],
                    },
                ],
            },
            ol = Y.styles;
        function Cl(c) {
            var l = c[0],
                h = c[1],
                z = n(c.slice(4), 1)[0];
            return {
                found: !0,
                width: l,
                height: h,
                icon: Array.isArray(z)
                    ? {
                          tag: "g",
                          attributes: { class: "".concat(lc.familyPrefix, "-").concat(_.GROUP) },
                          children: [
                              { tag: "path", attributes: { class: "".concat(lc.familyPrefix, "-").concat(_.SECONDARY), fill: "currentColor", d: z[0] } },
                              { tag: "path", attributes: { class: "".concat(lc.familyPrefix, "-").concat(_.PRIMARY), fill: "currentColor", d: z[1] } },
                          ],
                      }
                    : { tag: "path", attributes: { fill: "currentColor", d: z } },
            };
        }
        function Ll(z, a) {
            return new oc(function (c, l) {
                var h = { found: !1, width: 512, height: 512, icon: il };
                if (z && a && ol[a] && ol[a][z]) return c(Cl(ol[a][z]));
                !(function () {
                    var c = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                        l = 1 < arguments.length ? arguments[1] : void 0;
                    if (
                        l &&
                        (function (c) {
                            if (1 !== c.length) return !1;
                            var l,
                                h,
                                z,
                                a,
                                v,
                                m = ((h = 0), (a = (l = c).length), 55296 <= (v = l.charCodeAt(h)) && v <= 56319 && h + 1 < a && 56320 <= (z = l.charCodeAt(h + 1)) && z <= 57343 ? 1024 * (v - 55296) + z - 56320 + 65536 : v);
                            return 57344 <= m && m <= 63743;
                        })(l)
                    ) {
                        if (c && c.iconUploads) {
                            var h = c.iconUploads,
                                z = Object.keys(h).find(function (c) {
                                    return h[c] && h[c].u && h[c].u === Ic(l);
                                });
                            if (z) h[z].v;
                        }
                    } else if (c && c.iconUploads && c.iconUploads[l] && c.iconUploads[l].v) c.iconUploads[l].v;
                })(o.FontAwesomeKitConfig, z);
                o.FontAwesomeKitConfig && o.FontAwesomeKitConfig.token && o.FontAwesomeKitConfig.token, z && a && !lc.showMissingIcons ? l(new fl("Icon is missing for prefix ".concat(a, " with icon name ").concat(z))) : c(h);
            });
        }
        var dl = Y.styles;
        function ul(c) {
            var v,
                l,
                m,
                e,
                s,
                t,
                M,
                f,
                h,
                H,
                r,
                z = Ml(c);
            return ~z.extra.classes.indexOf(q)
                ? (function (c, l) {
                      var h = l.title,
                          z = l.transform,
                          a = l.extra,
                          v = null,
                          m = null;
                      if (p) {
                          var e = parseInt(getComputedStyle(c).fontSize, 10),
                              s = c.getBoundingClientRect();
                          (v = s.width / e), (m = s.height / e);
                      }
                      return lc.autoA11y && !h && (a.attributes["aria-hidden"] = "true"), oc.resolve([c, Oc({ content: c.innerHTML, width: v, height: m, transform: z, title: h, extra: a, watchable: !0 })]);
                  })(c, z)
                : ((v = c),
                  (m = (l = z).iconName),
                  (e = l.title),
                  (s = l.titleId),
                  (t = l.prefix),
                  (M = l.transform),
                  (f = l.symbol),
                  (h = l.mask),
                  (H = l.maskId),
                  (r = l.extra),
                  new oc(function (a, c) {
                      oc.all([Ll(m, t), Ll(h.iconName, h.prefix)]).then(function (c) {
                          var l = n(c, 2),
                              h = l[0],
                              z = l[1];
                          a([v, qc({ icons: { main: h, mask: z }, prefix: t, iconName: m, transform: M, symbol: f, mask: z, maskId: H, title: e, titleId: s, extra: r, watchable: !0 })]);
                      });
                  }));
        }
        function pl(c) {
            var h = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
            if (r) {
                var l = C.documentElement.classList,
                    z = function (c) {
                        return l.add("".concat(S, "-").concat(c));
                    },
                    a = function (c) {
                        return l.remove("".concat(S, "-").concat(c));
                    },
                    v = lc.autoFetchSvg ? Object.keys(k) : Object.keys(dl),
                    m = [".".concat(q, ":not([").concat(cc, "])")]
                        .concat(
                            v.map(function (c) {
                                return ".".concat(c, ":not([").concat(cc, "])");
                            })
                        )
                        .join(", ");
                if (0 !== m.length) {
                    var e = [];
                    try {
                        e = bc(c.querySelectorAll(m));
                    } catch (c) {}
                    if (0 < e.length) {
                        z("pending"), a("complete");
                        var s = _c.begin("onTree"),
                            t = e.reduce(function (c, l) {
                                try {
                                    var h = ul(l);
                                    h && c.push(h);
                                } catch (c) {
                                    Z || (c instanceof fl && console.error(c));
                                }
                                return c;
                            }, []);
                        return new oc(function (l, c) {
                            oc.all(t)
                                .then(function (c) {
                                    zl(c, function () {
                                        z("active"), z("complete"), a("pending"), "function" == typeof h && h(), s(), l();
                                    });
                                })
                                .catch(function () {
                                    s(), c();
                                });
                        });
                    }
                }
            }
        }
        function bl(c) {
            var l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
            ul(c).then(function (c) {
                c && zl([c], l);
            });
        }
        function Al(n, V) {
            var i = "".concat(u).concat(V.replace(":", "-"));
            return new oc(function (z, c) {
                if (null !== n.getAttribute(i)) return z();
                var l = bc(n.children).filter(function (c) {
                        return c.getAttribute(d) === V;
                    })[0],
                    h = o.getComputedStyle(n, V),
                    a = h.getPropertyValue("font-family").match(O),
                    v = h.getPropertyValue("font-weight"),
                    m = h.getPropertyValue("content");
                if (l && !a) return n.removeChild(l), z();
                if (a && "none" !== m && "" !== m) {
                    var e = h.getPropertyValue("content"),
                        s = ~["Solid", "Regular", "Light", "Duotone", "Brands", "Kit"].indexOf(a[2]) ? x[a[2].toLowerCase()] : j[v],
                        t = Ic(3 === e.length ? e.substr(1, 1) : e),
                        M = Qc(s, t),
                        f = M;
                    if (!M || (l && l.getAttribute(A) === s && l.getAttribute(g) === f)) z();
                    else {
                        n.setAttribute(i, f), l && n.removeChild(l);
                        var H = { iconName: null, title: null, titleId: null, prefix: null, transform: Lc, symbol: !1, mask: null, maskId: null, extra: { classes: [], styles: {}, attributes: {} } },
                            r = H.extra;
                        (r.attributes[d] = V),
                            Ll(M, s)
                                .then(function (c) {
                                    var l = qc($({}, H, { icons: { main: c, mask: Xc() }, prefix: s, iconName: f, extra: r, watchable: !0 })),
                                        h = C.createElement("svg");
                                    ":before" === V ? n.insertBefore(h, n.firstChild) : n.appendChild(h),
                                        (h.outerHTML = l
                                            .map(function (c) {
                                                return Jc(c);
                                            })
                                            .join("\n")),
                                        n.removeAttribute(i),
                                        z();
                                })
                                .catch(c);
                    }
                } else z();
            });
        }
        function gl(c) {
            return oc.all([Al(c, ":before"), Al(c, ":after")]);
        }
        function Sl(c) {
            return !(c.parentNode === document.head || ~w.indexOf(c.tagName.toUpperCase()) || c.getAttribute(d) || (c.parentNode && "svg" === c.parentNode.tagName));
        }
        function yl(a) {
            if (r)
                return new oc(function (c, l) {
                    var h = bc(a.querySelectorAll("*")).filter(Sl).map(gl),
                        z = _c.begin("searchPseudoElements");
                    (al = !0),
                        oc
                            .all(h)
                            .then(function () {
                                z(), vl(), c();
                            })
                            .catch(function () {
                                z(), vl(), l();
                            });
                });
        }
        var wl =
            "svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:solid .08em #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fad.fa-inverse{color:#fff}";
        function Zl() {
            var c = i,
                l = L,
                h = lc.familyPrefix,
                z = lc.replacementClass,
                a = wl;
            if (h !== c || z !== l) {
                var v = new RegExp("\\.".concat(c, "\\-"), "g"),
                    m = new RegExp("\\--".concat(c, "\\-"), "g"),
                    e = new RegExp("\\.".concat(l), "g");
                a = a.replace(v, ".".concat(h, "-")).replace(m, "--".concat(h, "-")).replace(e, ".".concat(z));
            }
            return a;
        }
        function kl() {
            lc.autoAddCss && !Pl && (dc(Zl()), (Pl = !0));
        }
        function xl(l, c) {
            return (
                Object.defineProperty(l, "abstract", { get: c }),
                Object.defineProperty(l, "html", {
                    get: function () {
                        return l.abstract.map(function (c) {
                            return Jc(c);
                        });
                    },
                }),
                Object.defineProperty(l, "node", {
                    get: function () {
                        if (r) {
                            var c = C.createElement("div");
                            return (c.innerHTML = l.html), c.children;
                        }
                    },
                }),
                l
            );
        }
        function ql(c) {
            var l = c.prefix,
                h = void 0 === l ? "fa" : l,
                z = c.iconName;
            if (z) return Gc(jl.definitions, h, z) || Gc(Y.styles, h, z);
        }
        var Ol,
            jl = new ((function () {
                function c() {
                    !(function (c, l) {
                        if (!(c instanceof l)) throw new TypeError("Cannot call a class as a function");
                    })(this, c),
                        (this.definitions = {});
                }
                var l, h, z;
                return (
                    (l = c),
                    (h = [
                        {
                            key: "add",
                            value: function () {
                                for (var l = this, c = arguments.length, h = new Array(c), z = 0; z < c; z++) h[z] = arguments[z];
                                var a = h.reduce(this._pullDefinitions, {});
                                Object.keys(a).forEach(function (c) {
                                    (l.definitions[c] = $({}, l.definitions[c] || {}, a[c])),
                                        (function c(l, z) {
                                            var h = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).skipHooks,
                                                a = void 0 !== h && h,
                                                v = Object.keys(z).reduce(function (c, l) {
                                                    var h = z[l];
                                                    return h.icon ? (c[h.iconName] = h.icon) : (c[l] = h), c;
                                                }, {});
                                            "function" != typeof Y.hooks.addPack || a ? (Y.styles[l] = $({}, Y.styles[l] || {}, v)) : Y.hooks.addPack(l, v), "fas" === l && c("fa", z);
                                        })(c, a[c]),
                                        Wc();
                                });
                            },
                        },
                        {
                            key: "reset",
                            value: function () {
                                this.definitions = {};
                            },
                        },
                        {
                            key: "_pullDefinitions",
                            value: function (v, c) {
                                var m = c.prefix && c.iconName && c.icon ? { 0: c } : c;
                                return (
                                    Object.keys(m).map(function (c) {
                                        var l = m[c],
                                            h = l.prefix,
                                            z = l.iconName,
                                            a = l.icon;
                                        v[h] || (v[h] = {}), (v[h][z] = a);
                                    }),
                                    v
                                );
                            },
                        },
                    ]) && v(l.prototype, h),
                    z && v(l, z),
                    c
                );
            })())(),
            Pl = !1,
            El = {
                i2svg: function () {
                    var c = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                    if (r) {
                        kl();
                        var l = c.node,
                            h = void 0 === l ? C : l,
                            z = c.callback,
                            a = void 0 === z ? function () {} : z;
                        return lc.searchPseudoElements && yl(h), pl(h, a);
                    }
                    return oc.reject("Operation requires a DOM of some kind.");
                },
                css: Zl,
                insertCss: function () {
                    Pl || (dc(Zl()), (Pl = !0));
                },
                watch: function () {
                    var c = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                        l = c.autoReplaceSvgRoot,
                        h = c.observeMutationsRoot;
                    !1 === lc.autoReplaceSvg && (lc.autoReplaceSvg = !0),
                        (lc.observeMutations = !0),
                        W(function () {
                            Tl({ autoReplaceSvgRoot: l }), el({ treeCallback: pl, nodeCallback: bl, pseudoElementsCallback: yl, observeMutationsRoot: h });
                        });
                },
            },
            Nl =
                ((Ol = function (c) {
                    var l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        h = l.transform,
                        z = void 0 === h ? Lc : h,
                        a = l.symbol,
                        v = void 0 !== a && a,
                        m = l.mask,
                        e = void 0 === m ? null : m,
                        s = l.maskId,
                        t = void 0 === s ? null : s,
                        M = l.title,
                        f = void 0 === M ? null : M,
                        H = l.titleId,
                        r = void 0 === H ? null : H,
                        n = l.classes,
                        V = void 0 === n ? [] : n,
                        i = l.attributes,
                        o = void 0 === i ? {} : i,
                        C = l.styles,
                        L = void 0 === C ? {} : C;
                    if (c) {
                        var d = c.prefix,
                            u = c.iconName,
                            p = c.icon;
                        return xl($({ type: "icon" }, c), function () {
                            return (
                                kl(),
                                lc.autoA11y && (f ? (o["aria-labelledby"] = "".concat(lc.replacementClass, "-title-").concat(r || pc())) : ((o["aria-hidden"] = "true"), (o.focusable = "false"))),
                                qc({
                                    icons: { main: Cl(p), mask: e ? Cl(e.icon) : { found: !1, width: null, height: null, icon: {} } },
                                    prefix: d,
                                    iconName: u,
                                    transform: $({}, Lc, z),
                                    symbol: v,
                                    title: f,
                                    maskId: t,
                                    titleId: r,
                                    extra: { attributes: o, styles: L, classes: V },
                                })
                            );
                        });
                    }
                }),
                function (c) {
                    var l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        h = (c || {}).icon ? c : ql(c || {}),
                        z = l.mask;
                    return z && (z = (z || {}).icon ? z : ql(z || {})), Ol(h, $({}, l, { mask: z }));
                }),
            _l = {
                noAuto: function () {
                    (lc.autoReplaceSvg = !1), (lc.observeMutations = !1), ml && ml.disconnect();
                },
                config: lc,
                dom: El,
                library: jl,
                parse: {
                    transform: function (c) {
                        return tl(c);
                    },
                },
                findIconDefinition: ql,
                icon: Nl,
                text: function (c) {
                    var l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        h = l.transform,
                        z = void 0 === h ? Lc : h,
                        a = l.title,
                        v = void 0 === a ? null : a,
                        m = l.classes,
                        e = void 0 === m ? [] : m,
                        s = l.attributes,
                        t = void 0 === s ? {} : s,
                        M = l.styles,
                        f = void 0 === M ? {} : M;
                    return xl({ type: "text", content: c }, function () {
                        return kl(), Oc({ content: c, transform: $({}, Lc, z), title: v, extra: { attributes: t, styles: f, classes: ["".concat(lc.familyPrefix, "-layers-text")].concat(H(e)) } });
                    });
                },
                counter: function (c) {
                    var l = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        h = l.title,
                        z = void 0 === h ? null : h,
                        a = l.classes,
                        v = void 0 === a ? [] : a,
                        m = l.attributes,
                        e = void 0 === m ? {} : m,
                        s = l.styles,
                        t = void 0 === s ? {} : s;
                    return xl({ type: "counter", content: c }, function () {
                        return (
                            kl(),
                            (function (c) {
                                var l = c.content,
                                    h = c.title,
                                    z = c.extra,
                                    a = $({}, z.attributes, h ? { title: h } : {}, { class: z.classes.join(" ") }),
                                    v = yc(z.styles);
                                0 < v.length && (a.style = v);
                                var m = [];
                                return m.push({ tag: "span", attributes: a, children: [l] }), h && m.push({ tag: "span", attributes: { class: "sr-only" }, children: [h] }), m;
                            })({ content: c.toString(), title: z, extra: { attributes: e, styles: t, classes: ["".concat(lc.familyPrefix, "-layers-counter")].concat(H(v)) } })
                        );
                    });
                },
                layer: function (c) {
                    var l = (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).classes,
                        h = void 0 === l ? [] : l;
                    return xl({ type: "layer" }, function () {
                        kl();
                        var l = [];
                        return (
                            c(function (c) {
                                Array.isArray(c)
                                    ? c.map(function (c) {
                                          l = l.concat(c.abstract);
                                      })
                                    : (l = l.concat(c.abstract));
                            }),
                            [{ tag: "span", attributes: { class: ["".concat(lc.familyPrefix, "-layers")].concat(H(h)).join(" ") }, children: l }]
                        );
                    });
                },
                toHtml: Jc,
            },
            Tl = function () {
                var c = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).autoReplaceSvgRoot,
                    l = void 0 === c ? C : c;
                (0 < Object.keys(Y.styles).length || lc.autoFetchSvg) && r && lc.autoReplaceSvg && _l.dom.i2svg({ node: l });
            };
        !(function (c) {
            try {
                c();
            } catch (c) {
                if (!Z) throw c;
            }
        })(function () {
            f &&
                (o.FontAwesome || (o.FontAwesome = _l),
                W(function () {
                    Tl(), el({ treeCallback: pl, nodeCallback: bl, pseudoElementsCallback: yl });
                })),
                (Y.hooks = $({}, Y.hooks, {
                    addPack: function (c, l) {
                        (Y.styles[c] = $({}, Y.styles[c] || {}, l)), Wc(), Tl();
                    },
                    addShims: function (c) {
                        var l;
                        (l = Y.shims).push.apply(l, H(c)), Wc(), Tl();
                    },
                }));
        });
    })();
