(this["webpackJsonpreact-kakaomap-templates"] = this["webpackJsonpreact-kakaomap-templates"] || []).push([
    [0], {
        224: function(e, t, a) {
            e.exports = {
                App: "App_App__3jZN5"
            }
        },
        248: function(e, t, a) {
            e.exports = a(478)
        },
        453: function(e, t, a) {},
        478: function(e, t, a) {
            "use strict";
            a.r(t);
            a(249), a(251), a(252), a(253), a(254), a(255), a(256), a(257), a(258), a(259), a(260), a(261), a(262), a(263), a(264), a(265), a(266), a(267), a(268), a(269), a(270), a(271), a(272), a(273), a(274), a(275), a(276), a(109), a(277), a(278), a(279), a(280), a(281), a(282), a(283), a(284), a(285), a(286), a(287), a(288), a(289), a(290), a(291), a(293), a(295), a(296), a(297), a(298), a(299), a(300), a(301), a(302), a(303), a(304), a(305), a(306), a(308), a(309), a(310), a(311), a(312), a(313), a(314), a(315), a(316), a(317), a(318), a(319), a(321), a(322), a(323), a(324), a(325), a(326), a(328), a(330), a(332), a(333), a(334), a(335), a(336), a(337), a(338), a(339), a(340), a(341), a(342), a(343), a(344), a(345), a(346), a(347), a(348), a(349), a(350), a(351), a(353), a(354), a(357), a(358), a(359), a(361), a(362), a(363), a(364), a(365), a(366), a(367), a(368), a(369), a(370), a(371), a(201), a(372), a(373), a(374), a(375), a(376), a(377), a(378), a(204), a(379), a(380), a(381), a(382), a(383), a(384), a(385), a(386), a(387), a(388), a(389), a(390), a(391), a(392), a(393), a(394), a(395), a(396), a(397), a(398), a(399), a(400), a(401), a(402), a(403), a(404), a(406), a(407), a(408), a(409), a(410), a(411), a(412), a(413), a(414), a(415), a(416), a(417), a(418), a(419), a(420), a(421), a(422), a(423), a(424), a(425), a(426), a(427), a(428), a(429), a(430), a(431), a(432), a(433), a(434), a(435), a(436), a(437), a(438), a(439), a(440), a(441), a(442), a(443), a(444), a(445), a(448), a(212);
            var n = a(0),
                o = a.n(n),
                r = a(29),
                c = a.n(r),
                l = (a(453), a(532)),
                i = a(234),
                s = a(129),
                u = a(513),
                m = Object(i.a)({
                    palette: {
                        primary: s.a,
                        secondary: u.a
                    },
                    typography: {
                        fontFamily: ["Noto Sans KR"].join(",")
                    }
                }),
                p = a(224),
                d = a.n(p),
                f = a(26),
                b = a(121),
                g = a(514),
                E = a(58),
                h = a(515),
                v = a(517),
                O = a(237),
                k = a(535),
                j = a(13),
                y = a(227),
                C = a.n(y),
                w = Object(g.a)((function(e) {
                    return {
                        root: {
                            flexGrow: 1
                        },
                        menuButton: {
                            marginRight: e.spacing(2)
                        },
                        title: Object(E.a)({
                            flexGrow: 1,
                            display: "none"
                        }, e.breakpoints.up("sm"), {
                            display: "block"
                        }),
                        search: Object(E.a)({
                            position: "relative",
                            borderRadius: e.shape.borderRadius,
                            backgroundColor: Object(j.c)(e.palette.common.white, .15),
                            "&:hover": {
                                backgroundColor: Object(j.c)(e.palette.common.white, .25)
                            },
                            marginLeft: 0,
                            width: "100%"
                        }, e.breakpoints.up("sm"), {
                            marginLeft: e.spacing(1),
                            width: "auto"
                        }),
                        searchIcon: {
                            width: e.spacing(7),
                            height: "100%",
                            position: "absolute",
                            pointerEvents: "none",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        inputRoot: {
                            color: "inherit",
                            width: "100%"
                        },
                        inputInput: Object(E.a)({
                            padding: e.spacing(1, 1, 1, 7),
                            transition: e.transitions.create("width"),
                            width: "100%"
                        }, e.breakpoints.up("sm"), {
                            width: 120,
                            "&:focus": {
                                width: 200
                            }
                        })
                    }
                })),
                S = function(e) {
                    var t = e.onSearch,
                        a = w(),
                        r = Object(n.useState)(""),
                        c = Object(f.a)(r, 2),
                        l = c[0],
                        i = c[1];
                    return o.a.createElement("div", {
                        className: a.root
                    }, o.a.createElement(h.a, {
                        position: "fixed"
                    }, o.a.createElement(v.a, null, o.a.createElement(O.a, {
                        className: a.title,
                        variant: "h6",
                        noWrap: !0
                    }, "마스크 NOW"), o.a.createElement("div", {
                        className: a.search
                    }, o.a.createElement("div", {
                        className: a.searchIcon
                    }, o.a.createElement(C.a, null)), o.a.createElement(k.a, {
                        placeholder: "장소 검색",
                        classes: {
                            root: a.inputRoot,
                            input: a.inputInput
                        },
                        inputProps: {
                            "aria-label": "search"
                        },
                        onChange: function(e) {
                            return i(e.target.value)
                        },
                        value: l,
                        onKeyPress: function(e) {
                            13 === e.charCode && (t(l), e.target.blur())
                        }
                    })))))
                };
            S.defaultProps = {
                onSearch: function() {}
            };
            var x = S,
                B = a(479),
                L = a(518),
                z = a(519),
                N = a(520),
                T = a(521),
                F = Object(g.a)((function(e) {
                    return {
                        rightTopToolbar: Object(E.a)({
                            position: "fixed",
                            zIndex: 1e3,
                            left: e.spacing(1),
                            top: e.spacing(13),
                            backgroundColor: "#f0f0f0"
                        }, e.breakpoints.up("sm"), {
                            top: e.spacing(10),
                            right: e.spacing(2)
                        }),
                        leftTopToolbar: Object(E.a)({
                            position: "fixed",
                            zIndex: 1e3,
                            left: e.spacing(1),
                            top: e.spacing(8),
                            backgroundColor: "#f0f0f0"
                        }, e.breakpoints.up("sm"), {
                            top: e.spacing(10),
                            left: e.spacing(2)
                        })
                    }
                })),
                I = function(e) {
                    var t = e.pending,
                        a = e.onLocationButtonClick,
                        n = e.onRenewButtonClick,
                        r = e.onFilterButtonClick,
                        c = F();
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
                        className: c.rightTopToolbar
                    }, o.a.createElement(L.a, {
                        orientation: "vertical",
                        variant: "contained",
                        color: "secondary",
                        "aria-label": "outlined primary button group"
                    }, o.a.createElement(B.a, {
                        disabled: t,
                        onClick: function() {
                            return a()
                        }
                    }, o.a.createElement(z.a, null)), o.a.createElement(B.a, {
                        disabled: t,
                        onClick: function() {
                            return n()
                        }
                    }, o.a.createElement(N.a, null)))), o.a.createElement("div", {
                        className: c.leftTopToolbar
                    }, o.a.createElement(L.a, {
                        orientation: "vertical",
                        variant: "outlined",
                        color: "primary",
                        "aria-label": "outlined primary button group"
                    }, o.a.createElement(B.a, {
                        disabled: t,
                        onClick: function() {
                            return r()
                        }
                    }, o.a.createElement(T.a, null), o.a.createElement("span", {
                        style: {
                            marginBottom: 1
                        }
                    }, "옵션")))))
                };
            I.defaultProps = {
                onLocationButtonClick: function() {},
                onRenewButtonClick: function() {},
                onFilterButtonClick: function() {}
            };
            var R, _ = I,
                A = a(529),
                M = a(125),
                P = a(228),
                W = a(102),
                G = a.n(W),
                K = G.a.CancelToken,
                H = function() {
                    function e() {
                        Object(M.a)(this, e)
                    }
                    return Object(P.a)(e, [{
                        key: "fetchShopsByBounds",
                        value: function(e, t, a) {
                            return R && R(), G.a.get("https://8oi9s0nnth.apigw.ntruss.com/corona19-masks/v1/storesByGeo/json?lat=".concat(e, "&lng=").concat(t, "&m=").concat(a), {
                                cancelToken: new K((function(e) {
                                    R = e
                                }))
                            })
                        }
                    }]), e
                }(),
                D = new function e() {
                    Object(M.a)(this, e), this.Shop = new H
                },
                J = Object(g.a)((function(e) {
                    return {
                        info: {
                            position: "fixed",
                            zIndex: 9999,
                            backgroundColor: "rgba(0,0,0,0.6)",
                            color: "#fff",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            top: "50%",
                            left: "50%",
                            width: 240,
                            height: 80,
                            marginTop: -40,
                            marginLeft: -120,
                            fontSize: 15
                        }
                    }
                })),
                Z = function(e) {
                    var t = e.message,
                        a = J();
                    return o.a.createElement("div", {
                        className: a.info
                    }, t)
                },
                q = a(523),
                U = a(131),
                $ = a(128),
                Q = a(522),
                V = a(130),
                X = Object(g.a)((function(e) {
                    return {
                        normal: {
                            padding: e.spacing(.7),
                            color: "#fff",
                            textAlign: "center",
                            minWidth: 40
                        },
                        title: {
                            fontSize: 13,
                            fontWeight: 700
                        },
                        content: {
                            fontSize: 11
                        }
                    }
                })),
                Y = {
                    plenty: {
                        label: "100+",
                        backgroundColor: U.a[700],
                        color: $.a[100],
                        tooltipFontColor: U.a[300]
                    },
                    some: {
                        label: "30~99개",
                        backgroundColor: Q.a[700],
                        color: $.a[100],
                        tooltipFontColor: Q.a[300]
                    },
                    few: {
                        label: "2~29개",
                        backgroundColor: V.a[700],
                        color: $.a[100],
                        tooltipFontColor: V.a[300]
                    },
                    empty: {
                        label: "품절",
                        backgroundColor: $.a[700],
                        color: $.a[100],
                        tooltipFontColor: $.a[300]
                    }
                },
                ee = function(e) {
                    var t = e.code,
                        a = e.name,
                        n = e.addr,
                        r = e.remain_stat,
                        c = e.stock_at,
                        l = e.created_at,
                        i = X(),
                        s = !!Y[r],
                        u = Y[r] || {
                            label: "정보없음",
                            backgroundColor: $.a[700],
                            color: $.a[100],
                            tooltipFontColor: $.a[300]
                        };
                    return o.a.createElement("div", {
                        "data-shop-code": t,
                        className: i.container,
                        "data-tippy-content": Object(b.renderToStaticMarkup)(o.a.createElement((function() {
                            return o.a.createElement("div", null, o.a.createElement(O.a, {
                                className: i.title,
                                style: {
                                    marginBottom: 3
                                }
                            }, a), s && o.a.createElement(O.a, {
                                className: i.content,
                                component: "p",
                                style: {
                                    color: u.tooltipFontColor
                                }
                            }, u.label), o.a.createElement(O.a, {
                                className: i.content,
                                component: "p"
                            }, n), o.a.createElement(O.a, {
                                className: i.content,
                                component: "p"
                            }, "입고 : ", c), o.a.createElement(O.a, {
                                className: i.content,
                                component: "p"
                            }, "업데이트 : ", l))
                        }), null))
                    }, o.a.createElement(q.a, {
                        className: i.normal,
                        style: {
                            backgroundColor: u.backgroundColor,
                            color: u.color
                        }
                    }, o.a.createElement(O.a, {
                        className: i.title,
                        component: "p"
                    }, u.label)))
                },
                te = a(104),
                ae = (a(477), a(524)),
                ne = a(533),
                oe = a(525),
                re = a(528),
                ce = a(534),
                le = a(526),
                ie = function(e) {
                    var t = e.open,
                        a = e.handleClose,
                        r = e.onFilterChange,
                        c = Object(n.useState)(!1),
                        l = Object(f.a)(c, 2),
                        i = l[0],
                        s = l[1];
                    return Object(n.useEffect)((function() {
                        r({
                            hideEmpty: i
                        })
                    }), [i]), o.a.createElement(ne.a, {
                        onClose: a,
                        "aria-labelledby": "simple-dialog-title",
                        open: t
                    }, o.a.createElement(ae.a, {
                        id: "filter-dialog-title"
                    }, "옵션"), o.a.createElement(oe.a, null, o.a.createElement(le.a, {
                        control: o.a.createElement(ce.a, {
                            checked: i,
                            onChange: function(e) {
                                return s(e.target.checked)
                            },
                            value: "hideEmpty"
                        }),
                        label: "재고 없는 곳은 표시 안함"
                    })), o.a.createElement(re.a, null, o.a.createElement(B.a, {
                        onClick: a,
                        variant: "contained",
                        color: "primary"
                    }, "완료")))
                },
                se = a(527),
                ue = a(536),
                me = a(530),
                pe = Object(g.a)((function(e) {
                    return {
                        map: {
                            width: "100%",
                            height: "100%"
                        },
                        progress: {
                            position: "fixed",
                            zIndex: 9999,
                            width: "100%"
                        },
                        dimmer: {
                            width: "100vw",
                            height: "100vh",
                            position: "fixed",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            top: 0,
                            left: 0,
                            zIndex: 10,
                            backgroundColor: "rgba(255,255,255,0.3)",
                            pointerEvents: "none"
                        }
                    }
                }));
            var de = function(e) {
                    var t = e.serviceOpen,
                        a = Object(n.useState)(!0),
                        r = Object(f.a)(a, 2),
                        c = r[0],
                        l = r[1],
                        i = Object(n.useState)([]),
                        s = Object(f.a)(i, 2),
                        u = s[0],
                        m = s[1],
                        p = Object(n.useState)([]),
                        d = Object(f.a)(p, 2),
                        g = d[0],
                        E = d[1],
                        h = Object(n.useState)(window.kakao),
                        v = Object(f.a)(h, 1)[0],
                        O = Object(n.useState)(null),
                        k = Object(f.a)(O, 2),
                        j = k[0],
                        y = k[1],
                        C = Object(n.useState)(null),
                        w = Object(f.a)(C, 2),
                        S = w[0],
                        B = w[1],
                        L = Object(n.useState)(""),
                        z = Object(f.a)(L, 2),
                        N = z[0],
                        T = z[1],
                        F = Object(n.useState)(null),
                        I = Object(f.a)(F, 2),
                        M = I[0],
                        P = I[1],
                        W = Object(n.useState)({}),
                        K = Object(f.a)(W, 2),
                        H = K[0],
                        J = K[1],
                        q = Object(n.useState)(!1),
                        U = Object(f.a)(q, 2),
                        $ = U[0],
                        Q = U[1],
                        V = pe(),
                        X = function(e, t) {
                            var a = Object(n.useState)(e),
                                o = Object(f.a)(a, 2),
                                r = o[0],
                                c = o[1];
                            return Object(n.useEffect)((function() {
                                var a = setTimeout((function() {
                                    c(e)
                                }), t);
                                return function() {
                                    clearTimeout(a)
                                }
                            }), [e, t]), r
                        }(S, 500),
                        Y = Object(n.useCallback)((function() {
                            return j.getBounds()
                        }), [j]),
                        ae = function() {
                            navigator.geolocation ? (l(!0), navigator.geolocation.getCurrentPosition((function(e) {
                                var t = e.coords,
                                    a = t.latitude,
                                    n = t.longitude;
                                console.log("getLocation", a, n);
                                var o = new v.maps.LatLng(a, n);
                                j.panTo(o), B(Y()), l(!1)
                            }), (function() {
                                l(!1), P("내 위치를 불러올 수 없습니다.")
                            }))) : P("위치를 불러올 수 없습니다.")
                        },
                        ne = function() {
                            document.querySelectorAll("[data-shop-code]").forEach((function(e) {
                                return e.parentNode.removeChild(e)
                            }))
                        };
                    return Object(n.useEffect)((function() {
                        var e = document.getElementById("map"),
                            t = {
                                center: new v.maps.LatLng(37.4019528117587, 127.10828323199647),
                                level: 4
                            },
                            a = new v.maps.Map(e, t);
                        y(a), l(!1)
                    }), [v.maps]), Object(n.useEffect)((function() {
                        j && (ae(), v.maps.event.addListener(j, "tilesloaded", (function() {
                            j.getLevel() <= 5 ? (B(Y()), T("")) : (ne(), R && (R(), l(!1)), T("범위가 너무 넓어요."))
                        })), v.maps.event.addListener(j, "zoom_start", (function() {
                            Object(te.b)()
                        })), v.maps.event.addListener(j, "dragstart", (function() {
                            Object(te.b)()
                        })))
                    }), [j]), Object(n.useEffect)((function() {
                        if (S) {
                            var e = j.getCenter(),
                                a = e.Ha,
                                n = e.Ga,
                                o = j.getLevel(),
                                r = 12 * Math.pow(o + 4, 2);
                            console.log("radius", r), console.log("center", e), t && (l(!0), D.Shop.fetchShopsByBounds(a, n, r).then((function(e) {
                                var t = e.data.stores;
                                m(t), l(!1)
                            })).catch((function(e) {
                                G.a.isCancel(e) || P("데이터를 가져오는 데 실패했어요. 잠시 후 다시 시도해주세요."), l(!1)
                            })))
                        }
                    }), [X]), Object(n.useEffect)((function() {
                        var e = H.hideEmpty;
                        console.log("hideEmpty", e), E(e ? u.filter((function(e) {
                            return e.remain_stat && "empty" !== e.remain_stat
                        })) : u)
                    }), [H, u]), Object(n.useEffect)((function() {
                        console.log("setShopOverlays", g),
                            function(e) {
                                setTimeout((function() {
                                    Object(te.b)(), ne(), e.forEach((function(e) {
                                        var t = e.lat,
                                            a = e.lng;
                                        new v.maps.CustomOverlay({
                                            map: j,
                                            clickable: !0,
                                            position: new v.maps.LatLng(t, a),
                                            content: Object(b.renderToStaticMarkup)(o.a.createElement(ee, e)),
                                            zIndex: 99999
                                        }).setMap(j), Object(te.a)("[data-tippy-content]", {
                                            allowHTML: !0
                                        })
                                    }))
                                }), 0)
                            }(g)
                    }), [g]), o.a.createElement(o.a.Fragment, null, o.a.createElement(x, {
                        onSearch: function(e) {
                            var t;
                            e && (t = e, l(!0), (new v.maps.services.Places).keywordSearch(t, (function(e, t) {
                                if (t === v.maps.services.Status.OK) {
                                    var a = e[0],
                                        n = a.x,
                                        o = a.y,
                                        r = new v.maps.LatLng(o, n);
                                    j.panTo(r), j.setLevel(3)
                                } else t === v.maps.services.Status.ZERO_RESULT ? P("검색 결과가 없어요.") : P("서비스 연결 상태가 원활하지 않습니다. 잠시 후 다시 시도해주세요.");
                                l(!1)
                            })))
                        }
                    }), o.a.createElement(_, {
                        pending: c,
                        onLocationButtonClick: ae,
                        onRenewButtonClick: function() {
                            j.getLevel() <= 5 && B(Y())
                        },
                        onFilterButtonClick: function() {
                            return Q(!0)
                        }
                    }), c && o.a.createElement(o.a.Fragment, null, o.a.createElement(A.a, {
                        color: "secondary",
                        className: V.progress
                    })), N && o.a.createElement(Z, {
                        message: N
                    }), o.a.createElement(ie, {
                        open: $,
                        onFilterChange: function(e) {
                            return J(e)
                        },
                        handleClose: function() {
                            return Q(!1)
                        }
                    }), o.a.createElement(ue.a, {
                        anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left"
                        },
                        open: !!M,
                        autoHideDuration: 3e3,
                        onClose: function() {
                            return P(null)
                        },
                        message: M,
                        action: o.a.createElement(o.a.Fragment, null, o.a.createElement(se.a, {
                            size: "small",
                            "aria-label": "close",
                            color: "inherit",
                            onClick: function() {
                                return P(null)
                            }
                        }, o.a.createElement(me.a, null)))
                    }), o.a.createElement("div", {
                        id: "map",
                        className: V.map
                    }))
                },
                fe = Object(g.a)((function(e) {
                    return {
                        root: Object(E.a)({
                            position: "fixed",
                            zIndex: 1e3,
                            right: 0,
                            bottom: 0,
                            width: 200,
                            padding: e.spacing(1),
                            textAlign: "right",
                            textShadow: "1px 1px 1px #fff",
                            fontSize: 10
                        }, e.breakpoints.up("sm"), {
                            fontSize: 11
                        })
                    }
                })),
                be = function() {
                    var e = fe();
                    return o.a.createElement("div", {
                        className: e.root
                    }, o.a.createElement("div", null, "데이터 제공 : 한국정보화진흥원"), o.a.createElement("div", null, ""), o.a.createElement("div", null, "지도 제공 : kakao"))
                },
                ge = function() {
                    return o.a.createElement(o.a.Fragment, null, o.a.createElement(be, null))
                },
                Ee = a(531),
                he = function(e) {
                    var t = e.serviceOpen,
                        a = Object(n.useState)(!0),
                        r = Object(f.a)(a, 2),
                        c = r[0],
                        l = r[1],
                        i = function() {
                            l(!1)
                        };
                    return o.a.createElement(ne.a, {
                        open: c,
                        onClose: i,
                        disableEscapeKeyDown: !0,
                        disableBackdropClick: !0,
                        "aria-labelledby": "alert-dialog-title",
                        "aria-describedby": "alert-dialog-description"
                    }, o.a.createElement(ae.a, {
                        id: "alert-dialog-title"
                    }, "공지사항"), o.a.createElement(oe.a, null, !t && o.a.createElement(O.a, {
                        variant: "body2",
                        gutterBottom: !0,
                        style: {
                            fontSize: 15,
                            color: "red"
                        }
                    }, o.a.createElement("strong", null, "15일까지는 베타서비스 중입니다.")), o.a.createElement(O.a, {
                        variant: "body2",
                        gutterBottom: !0,
                        style: {
                            fontSize: 13
                        }
                    }, o.a.createElement("strong", null, "15일까지는 베타서비스 기간이므로 서버가 불안정할 수 있습니다.")), o.a.createElement(O.a, {
                        variant: "body2",
                        gutterBottom: !0,
                        style: {
                            fontSize: 13
                        }
                    }, " 마스크 NOW에서 제공하는 정보는 실제 정보와 차이가 있을 수 있으며, ", o.a.createElement("strong", null, "5~10분 가량 지연이 발생"), "할 수 있습니다."), o.a.createElement(O.a, {
                        variant: "body2",
                        gutterBottom: !0,
                        style: {
                            fontSize: 13
                        }
                    }, "공익을 위해 힘써주시는 모든 약사분들을 응원합니다."), o.a.createElement(O.a, {
                        variant: "body2",
                        gutterBottom: !0,
                        style: {
                            fontSize: 13,
                            color: "red"
                        }
                    }, "해당 정보를 지나치게 신뢰하여 약국에 불필요한 이의 제기를 하지 말아주세요."), o.a.createElement(Ee.a, {
                        style: {
                            margin: "10px 0"
                        }
                    }), o.a.createElement(O.a, {
                        variant: "body2",
                        gutterBottom: !0,
                        style: {
                            fontSize: 11
                        }
                    }, "문의는 다음 사이트의 우측 하단 상담기능을 통해 부탁드립니다 (", o.a.createElement("a", {
                        href: "http://corona.coc.kr",
                        target: "_blank"
                    }, "corona.coc.kr"), ")")), o.a.createElement(re.a, null, o.a.createElement(B.a, {
                        onClick: i,
                        variant: "contained",
                        color: "primary",
                        disabled: !t
                    }, t ? "확인" : "시작")))
                };
            var ve = function() {
                return o.a.createElement(l.a, {
                    theme: m
                }, o.a.createElement("div", {
                    className: d.a.App
                }, o.a.createElement(de, {
                    serviceOpen: !0
                }), o.a.createElement(ge, null), o.a.createElement(he, {
                    serviceOpen: !0
                })))
            };
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            c.a.render(o.a.createElement(ve, null), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function(e) {
                e.unregister()
            })).catch((function(e) {
                console.error(e.message)
            }))
        }
    },
    [
        [248, 1, 2]
    ]
]);
