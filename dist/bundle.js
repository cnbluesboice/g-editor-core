!function(e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t(require("@antv/g6")) : "function" == typeof define && define.amd ? define(["@antv/g6"], t) : "object" == typeof exports ? exports.GGEditorCore = t(require("@antv/g6")) : e.GGEditorCore = t(e.G6)
}(window, function(e) {
  return function(e) {
      var t = {};
      function n(r) {
          if (t[r])
              return t[r].exports;
          var o = t[r] = {
              i: r,
              l: !1,
              exports: {}
          };
          return e[r].call(o.exports, o, o.exports, n),
          o.l = !0,
          o.exports
      }
      return n.m = e,
      n.c = t,
      n.d = function(e, t, r) {
          n.o(e, t) || Object.defineProperty(e, t, {
              enumerable: !0,
              get: r
          })
      }
      ,
      n.r = function(e) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
              value: "Module"
          }),
          Object.defineProperty(e, "__esModule", {
              value: !0
          })
      }
      ,
      n.t = function(e, t) {
          if (1 & t && (e = n(e)),
          8 & t)
              return e;
          if (4 & t && "object" == typeof e && e && e.__esModule)
              return e;
          var r = Object.create(null);
          if (n.r(r),
          Object.defineProperty(r, "default", {
              enumerable: !0,
              value: e
          }),
          2 & t && "string" != typeof e)
              for (var o in e)
                  n.d(r, o, function(t) {
                      return e[t]
                  }
                  .bind(null, o));
          return r
      }
      ,
      n.n = function(e) {
          var t = e && e.__esModule ? function() {
              return e.default
          }
          : function() {
              return e
          }
          ;
          return n.d(t, "a", t),
          t
      }
      ,
      n.o = function(e, t) {
          return Object.prototype.hasOwnProperty.call(e, t)
      }
      ,
      n.p = "",
      n(n.s = 25)
  }([function(e, t, n) {
      "use strict";
      function r(e) {
          for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {}
                , r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))),
              r.forEach(function(t) {
                  o(e, t, n[t])
              })
          }
          return e
      }
      function o(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n,
          e
      }
      function i(e, t, n) {
          return e.addShape("path", {
              attrs: r({}, n, {
                  path: t
              })
          })
      }
      function a(e) {
          return [{
              x: e.centerX,
              y: e.minY
          }, {
              x: e.maxX,
              y: e.centerY
          }, {
              x: e.centerX,
              y: e.maxY
          }, {
              x: e.minX,
              y: e.centerY
          }]
      }
      function c(e, t) {
          var n, r, o = a(t), i = 1 / 0;
          return o.forEach(function(t, o) {
              var a, c, u = (a = e,
              c = t,
              Math.sqrt(Math.pow(a.x - c.x, 2) + Math.pow(a.y - c.y, 2)));
              u < i && (n = t,
              i = u,
              r = o)
          }),
          {
              point: n,
              index: r
          }
      }
      function u(e, t) {
          return {
              x: (e[t].x + e[t + 1].x) / 2,
              y: (e[t].y + e[t + 1].y) / 2
          }
      }
      function s(e, t) {
          var n = e.point
            , r = e.index
            , o = t.point
            , i = t.index;
          return n.x === o.x || n.y === o.y ? [n, o] : 2 === r && 0 === i || 0 === r && 2 === i ? [n, {
              x: n.x,
              y: (n.y + o.y) / 2
          }, {
              x: o.x,
              y: (n.y + o.y) / 2
          }, o] : 2 !== r && 0 !== r || 3 !== i && 1 !== i ? 1 !== r && 3 !== r || 2 !== i && 0 !== i ? [n, {
              x: (n.x + o.x) / 2,
              y: n.y
          }, {
              x: (n.x + o.x) / 2,
              y: o.y
          }, o] : [n, {
              x: o.x,
              y: n.y
          }, o] : [n, {
              x: n.x,
              y: o.y
          }, o]
      }
      function l(e, t) {
          return e[t].x === e[t + 1].x
      }
      function d(e, t, n) {
          return l(t, n) ? e.x === t[n].x && (e.y - t[n].y) * (e.y - t[n + 1].y) <= 0 : e.y === t[n].y && (e.x - t[n].x) * (e.x - t[n + 1].x) <= 0
      }
      function f(e, t) {
          for (var n, r, o, i, a, c = 1 / 0, u = 0; u < t.length - 1; u++) {
              var s = l(t, u)
                , f = void 0;
              if (d(f = s ? {
                  x: t[u].x,
                  y: e.y
              } : {
                  x: e.x,
                  y: t[u].y
              }, t, u)) {
                  var h = (i = e,
                  a = f,
                  Math.pow(i.x - a.x, 2) + Math.pow(i.y - a.y, 2));
                  c > h && (c = h,
                  n = u,
                  r = f,
                  o = s)
              }
          }
          return {
              verticalPoint: r,
              index: n,
              vertical: o
          }
      }
      function h(e, t, n) {
          var r, o, i, u = function(e) {
              if (!e)
                  return {
                      x: void 0,
                      y: void 0
                  };
              var t = e.getBBox();
              return {
                  x: t.centerX,
                  y: t.centerY
              }
          }(t), s = e.getLinkPoints(u)[0];
          if (n) {
              var l = a(e.getBBox())[n];
              r = e.getBBox(),
              o = l,
              i = {
                  x: t.getBBox().centerX,
                  y: t.getBBox().centerY
              },
              ((r.centerX - o.x) * (r.centerX - i.x) > 0 || (r.centerY - o.y) * (r.centerY - i.y) > 0) && (s = l)
          }
          s = c(s, e.getBBox());
          var d = t.getLinkPoints(s.point)[0];
          return {
              sourcePoint: s,
              targetPoint: d = c(d, t.getBBox())
          }
      }
      function g(e, t, n) {
          return l(t, n) ? e.minX > t[n].x ? 1 : e.maxX < t[n].x ? -1 : 0 : e.minY > t[n].y ? 1 : e.maxY < t.y ? -1 : 0
      }
      function p(e, t, n) {
          return l(t, n) ? {
              x: t[n].x,
              y: e.y
          } : {
              x: e.x,
              y: t[n].y
          }
      }
      function m(e) {
          var t;
          switch (e) {
          case 0:
              t = 2;
              break;
          case 1:
              t = 3;
              break;
          case 3:
              t = 1;
              break;
          default:
              t = 0
          }
          return t
      }
      n.d(t, "b", function() {
          return i
      }),
      n.d(t, "c", function() {
          return a
      }),
      n.d(t, "f", function() {
          return c
      }),
      n.d(t, "j", function() {
          return u
      }),
      n.d(t, "h", function() {
          return s
      }),
      n.d(t, "i", function() {
          return l
      }),
      n.d(t, "l", function() {
          return d
      }),
      n.d(t, "e", function() {
          return f
      }),
      n.d(t, "d", function() {
          return h
      }),
      n.d(t, "a", function() {
          return g
      }),
      n.d(t, "g", function() {
          return p
      }),
      n.d(t, "k", function() {
          return m
      })
  }
  , function(e, t, n) {
      function r(e) {
          for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {}
                , r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))),
              r.forEach(function(t) {
                  o(e, t, n[t])
              })
          }
          return e
      }
      function o(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n,
          e
      }
      var i = n(7)
        , a = n(3)
        , c = n(4)
        , u = {
          getActivedStyle: function() {},
          getSelectedStyle: function() {},
          getStyle: function() {},
          getPath: function() {}
      };
      function s(e, t, n) {
          var r = [];
          return c.isString(e) ? r = [t, e] : c.isArray(e) ? (e.unshift(t),
          r = e) : r = [t],
          n && r.unshift(n + "-base"),
          r
      }
      i.registerNode("page-base", r({}, u)),
      i.registerEdge("page-base", r({}, u)),
      i.registerGroup("page-base", r({}, u)),
      i.registerGuide("page-base", r({}, u)),
      a.setRegister = function(e, t, n) {
          e.registerNode = function(e, r, o) {
              i.registerNode(e, r, s(o, t + "-base", n))
          }
          ,
          e.registerEdge = function(e, r, o) {
              i.registerEdge(e, r, s(o, t + "-base", n))
          }
          ,
          e.registerGroup = function(e, r, o) {
              i.registerGroup(e, r, s(o, t + "-base", n))
          }
          ,
          e.registerGuide = function(e, r, o) {
              i.registerGuide(e, r, s(o, t + "-base", n))
          }
          ,
          e.registerBehaviour = function(e, t, n) {
              i.registerBehaviour(e, function(e) {
                  var n = e.get("page");
                  n.set("_graph", e),
                  t(n)
              }, n)
          }
      }
      ,
      a.setRegister(a, "page"),
      n(44),
      e.exports = a
  }
  , function(e, t, n) {
      function r(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n,
          e
      }
      var o = n(7)
        , i = n(22)
        , a = n(63)
        , c = n(64)
        , u = function(e) {
          for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {}
                , o = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))),
              o.forEach(function(t) {
                  r(e, t, n[t])
              })
          }
          return e
      }({}, o.Util, i, a, c);
      e.exports = u
  }
  , function(e, t, n) {
      function r(e) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          )(e)
      }
      function o(e) {
          for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {}
                , r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))),
              r.forEach(function(t) {
                  i(e, t, n[t])
              })
          }
          return e
      }
      function i(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n,
          e
      }
      function a(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1,
              r.configurable = !0,
              "value"in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
      }
      function c(e, t) {
          return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
              if (void 0 === e)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
          }(e) : t
      }
      function u(e) {
          return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          }
          )(e)
      }
      function s(e, t) {
          return (s = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t,
              e
          }
          )(e, t)
      }
      var l = n(21)
        , d = n(4)
        , f = n(14)
        , h = n(34)
        , g = n(35)
        , p = n(37)
        , m = [h, n(38), n(39), g, p, n(40), n(42), n(43)]
        , y = function(e) {
          function t(e) {
              var n;
              !function(e, t) {
                  if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function")
              }(this, t);
              var r = {
                  defaultData: null,
                  shortcut: {
                      redo: !0,
                      undo: !0,
                      delete: !0,
                      resetZoom: !0,
                      autoZoom: !0,
                      zoomIn: !0,
                      zoomOut: !0
                  },
                  _controllers: {},
                  _signals: {}
              };
              return d.each(m, function(e) {
                  d.mix(r, e.CFG)
              }),
              d.mix(!0, r, e),
              (n = c(this, u(t).call(this, r))).isPage = !0,
              n.type = "page",
              n._init(),
              n
          }
          var n, r, i;
          return function(e, t) {
              if ("function" != typeof t && null !== t)
                  throw new TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                      value: e,
                      writable: !0,
                      configurable: !0
                  }
              }),
              t && s(e, t)
          }(t, l),
          n = t,
          (r = [{
              key: "getDelegation",
              value: function(e, t) {
                  var n;
                  t || (t = this.getGraph().getRootGroup());
                  if (1 !== e.length || e[0].isNode || e[0].isGroup) {
                      var r = d.getTotalBBox(e.map(function(e) {
                          return e.getBBox()
                      }));
                      (n = d.getRectByBox(r, t, f.nodeDelegationStyle)).set("capture", !1)
                  } else
                      e[0].isEdge ? n = t.addShape("path", {
                          attrs: o({
                              path: "M0 0L 1 1"
                          }, f.edgeDelegationStyle),
                          capture: !1
                      }) : (n = d.getRectByBox(e[0], t, f.nodeDelegationStyle)).set("capture", !1);
                  return n
              }
          }, {
              key: "focusGraphWrapper",
              value: function() {
                  this.getGraph().getKeyboardEventWrapper().focus()
              }
          }, {
              key: "saveImage",
              value: function(e) {
                  var t, n, r = this, i = this.getGraph(), a = i.getBBox(), c = i.getFitViewPadding();
                  return i.saveImage(o({
                      width: a.width + c[1] + c[3],
                      height: a.height + c[0] + c[2],
                      beforeTransform: function() {
                          t = r.getSelected().map(function(e) {
                              return e.id
                          }),
                          n = r.getSelected().map(function(e) {
                              return e.id
                          }),
                          r.clearSelected(),
                          r.clearActived()
                      },
                      afterTransform: function() {
                          r.setSelected(t, !0),
                          r.setActived(n, !0)
                      }
                  }, e))
              }
          }, {
              key: "_init",
              value: function() {
                  var e = this;
                  d.each(m, function(t) {
                      t.INIT && e[t.INIT]()
                  }),
                  this.bindEvent(),
                  this._cacheBBox()
              }
          }, {
              key: "executeCommand",
              value: function(e, t) {
                  var n = this.editor;
                  n ? n.executeCommand(e, t) : e()
              }
          }, {
              key: "_cacheBBox",
              value: function() {
                  var e = this.getGraph();
                  this.set("bboxCache", e.getBBox())
              }
          }, {
              key: "bindEvent",
              value: function() {
                  var e = this;
                  this.getGraph().on("afterchange", function() {
                      e._cacheBBox()
                  })
              }
          }, {
              key: "translateLimt",
              value: function(e) {
                  var t = this.getGraph()
                    , n = this.get("bboxCache")
                    , r = t.getWidth()
                    , o = t.getHeight()
                    , i = [n.minX, n.minY, 1]
                    , a = [n.maxX, n.maxY, 1];
                  return d.vec3.transformMat3(i, i, e),
                  d.vec3.transformMat3(a, a, e),
                  a[0] < 100 && d.mat3.translate(e, e, [100 - a[0], 0]),
                  a[1] < 100 && d.mat3.translate(e, e, [0, 100 - a[1]]),
                  i[1] > o - 100 && d.mat3.translate(e, e, [0, o - 100 - i[1]]),
                  i[0] > r - 100 && d.mat3.translate(e, e, [r - 100 - i[0], 0]),
                  !0
              }
          }, {
              key: "setSignal",
              value: function(e, t) {
                  this.get("_signals")[e] = t
              }
          }, {
              key: "getSignal",
              value: function(e) {
                  return this.get("_signals")[e]
              }
          }, {
              key: "setController",
              value: function(e, t) {
                  this.get("_controllers")[e] = t
              }
          }, {
              key: "getController",
              value: function(e) {
                  return this.get("_controllers")[e]
              }
          }, {
              key: "destroy",
              value: function() {
                  var e = this.get("_graph")
                    , t = this.get("_controllers");
                  d.each(t, function(e) {
                      e.destroy()
                  }),
                  e.destroy()
              }
          }]) && a(n.prototype, r),
          i && a(n, i),
          t
      }();
      d.each(m, function(e) {
          d.mix(y.prototype, e.AUGMENT)
      }),
      e.exports = y
  }
  , function(e, t, n) {
      function r(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n,
          e
      }
      var o = n(6)
        , i = n(14)
        , a = o.createDOM("<canvas>").getContext("2d");
      e.exports = function(e) {
          for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {}
                , o = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))),
              o.forEach(function(t) {
                  r(e, t, n[t])
              })
          }
          return e
      }({}, o, {
          getPanCanvasBehaviour: function(e) {
              return function(t) {
                  var n, r, a = t.getGraph();
                  a.behaviourOn("canvas:mouseenter", function() {
                      t.css({
                          cursor: i.cursor.beforePanCanvas
                      })
                  }),
                  a.behaviourOn("mouseleave", function(e) {
                      e.toShape || t.css({
                          cursor: i.cursor.beforePanCanvas
                      })
                  }),
                  a.behaviourOn("mousedown", function(o) {
                      (2 !== o.button && !e || !o.shape || o.item && !1 === o.item.dragable && "mind-root" !== o.item.shapeObj.type && !t.getSignal("dragEdge")) && (n = {
                          x: o.domX,
                          y: o.domY
                      },
                      t.css({
                          cursor: i.cursor.panningCanvas
                      }),
                      r = a.getMatrix(),
                      t.setCapture(!1))
                  }),
                  a.behaviourOn("drag", function(e) {
                      if (n) {
                          var i = e.domX - n.x
                            , c = e.domY - n.y
                            , u = [];
                          o.mat3.translate(u, r, [i, c]),
                          t.translateLimt(u) && (a.updateMatrix(u),
                          a.draw())
                      }
                  }),
                  a.behaviourOn("mouseup", function() {
                      n && (n = void 0,
                      r = void 0,
                      t.setCapture(!0),
                      t.css({
                          cursor: i.cursor.beforePanCanvas
                      }))
                  })
              }
          },
          getLabelTextByTextLineWidth: function(e, t) {
              var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 320;
              a.font = t;
              var r = a.measureText(e).width;
              if (r > n) {
                  r = 0;
                  for (var o = 1; o < e.length; o++)
                      (r += a.measureText(e[o]).width) >= n && (e = e.substring(0, o) + "\n" + e.substring(o, e.length),
                      o += 1,
                      r = 0)
              }
              return e
          }
      })
  }
  , function(e, t) {
      e.exports = {
          orbitGap: 10,
          nodeDefaultShape: "flow-node",
          edgeDefaultShape: "flow-smooth",
          groupDefaultShape: "flow-group",
          nodeActivedOutterStyle: {
              lineWidth: 0
          },
          groupSelectedOutterStyle: {
              stroke: "#E0F0FF",
              lineWidth: 2
          },
          nodeSelectedOutterStyle: {
              stroke: "#E0F0FF",
              lineWidth: 2
          },
          edgeActivedStyle: {
              stroke: "#1890FF",
              lineWidth: 4,
              strokeOpacity: .92
          },
          nodeActivedStyle: {
              fill: "#F3F9FF",
              stroke: "#1890FF"
          },
          groupActivedStyle: {
              stroke: "#1890FF"
          },
          edgeSelectedStyle: {
              lineWidth: 2,
              strokeOpacity: .92,
              stroke: "#A3B1BF"
          },
          nodeSelectedStyle: {
              fill: "#F3F9FF",
              stroke: "#1890FF"
          },
          groupSelectedStyle: {
              stroke: "#1890FF",
              fillOpacity: .92
          },
          nodeStyle: {
              stroke: "#CED4D9",
              fill: "#FFFFFF",
              shadowOffsetX: 0,
              shadowOffsetY: 4,
              shadowBlur: 10,
              shadowColor: "rgba(13, 26, 38, 0.08)",
              lineWidth: 1,
              radius: 4,
              fillOpacity: .92
          },
          edgeStyle: {
              stroke: "#A3B1BF",
              strokeOpacity: .92,
              lineWidth: 1,
              lineAppendWidth: 8,
              endArrow: !0
          },
          groupBackgroundPadding: [40, 10, 10, 10],
          groupLabelOffsetX: 10,
          groupLabelOffsetY: 10,
          edgeLabelStyle: {
              fill: "#666",
              textAlign: "center",
              textBaseline: "middle"
          },
          edgeLabelRectPadding: 4,
          edgeLabelRectStyle: {
              fill: "white"
          },
          nodeLabelStyle: {
              fill: "#666",
              textAlign: "center",
              textBaseline: "middle"
          },
          groupStyle: {
              stroke: "#CED4D9",
              radius: 4
          },
          groupLabelStyle: {
              fill: "#666",
              textAlign: "left",
              textBaseline: "top"
          },
          multiSelectRectStyle: {
              fill: "#1890FF",
              fillOpacity: .08,
              stroke: "#1890FF",
              opacity: .1
          },
          dragNodeHoverToGroupStyle: {
              stroke: "#1890FF",
              lineWidth: 2
          },
          dragNodeLeaveFromGroupStyle: {
              stroke: "#BAE7FF",
              lineWidth: 2
          },
          anchorPointStyle: {
              radius: 3.5,
              fill: "#fff",
              stroke: "#1890FF",
              lineAppendWidth: 12
          },
          anchorHotsoptStyle: {
              radius: 12,
              fill: "#1890FF",
              fillOpacity: .25
          },
          anchorHotsoptActivedStyle: {
              radius: 14
          },
          anchorPointHoverStyle: {
              radius: 4,
              fill: "#1890FF",
              fillOpacity: 1,
              stroke: "#1890FF"
          },
          nodeControlPointStyle: {
              radius: 4,
              fill: "#fff",
              shadowBlur: 4,
              shadowColor: "#666"
          },
          edgeControlPointStyle: {
              radius: 6,
              symbol: "square",
              lineAppendWidth: 6,
              fillOpacity: 0,
              strokeOpacity: 0
          },
          nodeSelectedBoxStyle: {
              stroke: "#C2C2C2"
          },
          cursor: {
              panningCanvas: "-webkit-grabbing",
              beforePanCanvas: "-webkit-grab",
              hoverNode: "move",
              hoverEffectiveAnchor: "crosshair",
              hoverEdge: "default",
              hoverGroup: "move",
              hoverUnEffectiveAnchor: "default",
              hoverEdgeControllPoint: "crosshair",
              multiSelect: "crosshair"
          },
          zIndex: {
              anchorPoint: 3,
              anchorHotsopt: 2,
              selectedBox: 1,
              controlPoint: 4
          },
          polylineEdgeStyle: {
              offset: 10,
              borderRadius: 5
          },
          addToGroupDelayTime: 400,
          outFromGroupDelayTime: 400
      }
  }
  , function(e, t, n) {
      function r(e) {
          for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {}
                , r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))),
              r.forEach(function(t) {
                  o(e, t, n[t])
              })
          }
          return e
      }
      function o(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n,
          e
      }
      var i = n(7)
        , a = n(28)
        , c = n(29)
        , u = {
          whitespace: {
              9: "Tab",
              13: "Enter",
              32: "Space"
          },
          fn: {
              112: "f1 ",
              113: "f2 ",
              114: "f3 ",
              115: "f4 ",
              116: "f5 ",
              117: "f6 ",
              118: "f7 ",
              119: "f8 ",
              120: "f9 ",
              121: "f10",
              122: "f11",
              123: "f12"
          },
          letter: {
              65: "a",
              66: "b",
              67: "c",
              68: "d",
              69: "e",
              70: "f",
              71: "g",
              72: "h",
              73: "i",
              74: "j",
              75: "k",
              76: "l",
              77: "m",
              78: "n",
              79: "o",
              80: "p",
              81: "q",
              82: "r",
              83: "s",
              84: "t",
              85: "u",
              86: "v",
              87: "w",
              88: "x",
              89: "y",
              90: "z"
          },
          number: {
              48: "0",
              49: "1",
              50: "2",
              51: "3",
              52: "4",
              53: "5",
              54: "6",
              55: "7",
              56: "8",
              57: "9"
          },
          navigation: {
              37: "ArrowLeft",
              38: "ArrowUp",
              39: "ArrowRight",
              40: "ArrowDown"
          },
          symbol: {
              110: "decimal point",
              186: "semi-colon",
              187: "=",
              188: "comma",
              189: "-",
              190: "period ",
              191: "/",
              192: "grave accent",
              219: "open bracket ",
              220: "back slash ",
              221: "close bracket ",
              222: "single quote "
          },
          smallNumberKey: {
              96: "numpad 0 ",
              97: "numpad 1 ",
              98: "numpad 2 ",
              99: "numpad 3 ",
              100: "numpad 4 ",
              101: "numpad 5 ",
              102: "numpad 6 ",
              103: "numpad 7 ",
              104: "numpad 8 ",
              105: "numpad 9 "
          },
          modifierKey: {
              16: "Shift",
              17: "Ctrl ",
              18: "Alt",
              20: "caps lock"
          },
          escKey: {
              8: "Backspace",
              46: "Delete",
              27: "Escape"
          },
          homeKey: {
              91: "Windows Key / Left command",
              92: "right window key ",
              93: "Windows Menu"
          },
          computeKey: {
              106: "multiply ",
              107: "add",
              109: "subtract ",
              111: "divide "
          }
      }
        , s = r({}, i.Util, a, {
          getNodeSize: function(e) {
              if (e) {
                  if (i.Util.isNumber(e))
                      return [e, e];
                  if (i.Util.isString(e)) {
                      if (-1 === e.indexOf("*")) {
                          var t = Number(e);
                          return [t, t]
                      }
                      return e.split("*")
                  }
                  return e
              }
              return [96, 48]
          },
          getTypeAndChar: function(e) {
              var t;
              for (var n in e = "" + e,
              u)
                  for (var r in t = n,
                  u[n])
                      if (r === e)
                          return {
                              type: t,
                              character: u[n][r]
                          };
              return {}
          },
          getKeyboradKey: function(e) {
              return e.key || s.getTypeAndChar(e.keyCode).character
          },
          getIndex: function(e) {
              return e.getParent().get("children").indexOf(e)
          },
          setId: function(e) {
              e.id || (e.id = i.Util.guid())
          },
          pointLineDistance: function(e, t, n, r, o, a) {
              var c = [n - e, r - t];
              if (i.Util.vec2.exactEquals(c, [0, 0]))
                  return NaN;
              var u = [-c[1], c[0]];
              i.Util.vec2.normalize(u, u);
              var s = [o - e, a - t];
              return Math.abs(i.Util.vec2.dot(s, u))
          },
          getRectByBox: function(e, t, n) {
              return t.addShape("rect", {
                  attrs: r({}, n, {
                      x: e.minX,
                      y: e.minY,
                      width: e.maxX - e.minX,
                      height: e.maxY - e.minY
                  })
              })
          },
          objectToValues: function(e) {
              var t, n = [];
              for (t in e)
                  e.hasOwnProperty(t) && n.push(e[t]);
              return n
          },
          getValue: function(e) {
              return i.Util.isFunction(e) ? e() : e
          },
          getContrast: function(e, t) {
              var n = {};
              return i.Util.each(t, function(t, r) {
                  n[r] = e[r]
              }),
              n
          },
          arrowTo: function(e, t, n, r, o, a, c) {
              var u = [a - r, c - o]
                , s = i.Util.vec2.angleTo(u, [1, 0], !0);
              return e.transform([["r", s], ["t", t, n]]),
              e
          },
          setEndOfContenteditable: function(e) {
              var t, n;
              document.createRange ? ((t = document.createRange()).selectNodeContents(e),
              t.collapse(!1),
              (n = window.getSelection()).removeAllRanges(),
              n.addRange(t)) : document.selection && ((t = document.body.createTextRange()).moveToElementText(e),
              t.collapse(!1),
              t.select())
          },
          matches: function(e, t) {
              return (Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(e) {
                  for (var t = (this.document || this.ownerDocument).querySelectorAll(e), n = t.length; --n >= 0 && t.item(n) !== this; )
                      ;
                  return n > -1
              }
              ).call(e, t)
          },
          delegateEvent: function(e, t, n, r) {
              return s.addEventListener(e, t, function(t) {
                  for (var o = t.target || t.srcElement; o !== e; )
                      s.matches(o, n) && r.call(o, Array.prototype.slice.call(arguments)),
                      o = o.parentNode
              })
          },
          Palettes: c
      });
      e.exports = s
  }
  , function(t, n) {
      t.exports = e
  }
  , function(e, t, n) {
      function r(e) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          )(e)
      }
      function o(e) {
          for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {}
                , r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))),
              r.forEach(function(t) {
                  i(e, t, n[t])
              })
          }
          return e
      }
      function i(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n,
          e
      }
      function a(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1,
              r.configurable = !0,
              "value"in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
      }
      function c(e, t) {
          return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
              if (void 0 === e)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
          }(e) : t
      }
      function u(e, t, n) {
          return (u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
              var r = function(e, t) {
                  for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = s(e)); )
                      ;
                  return e
              }(e, t);
              if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, t);
                  return o.get ? o.get.call(n) : o.value
              }
          }
          )(e, t, n || e)
      }
      function s(e) {
          return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          }
          )(e)
      }
      function l(e, t) {
          return (l = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t,
              e
          }
          )(e, t)
      }
      var d = n(7)
        , f = n(1)
        , h = n(10)
        , g = []
        , p = function(e) {
          function t(e) {
              var n;
              !function(e, t) {
                  if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function")
              }(this, t);
              var r = {
                  showHotArea: !1,
                  defaultData: {
                      roots: [{
                          label: "思维导图",
                          children: [{
                              label: "新建节点"
                          }, {
                              label: "新建节点"
                          }, {
                              label: "新建节点"
                          }]
                      }]
                  },
                  shortcut: {
                      append: !0,
                      appendChild: !0,
                      collapseExpand: !0,
                      selectAll: !0
                  },
                  labelEditable: !0,
                  graph: {
                      modes: {
                          default: ["clickNodeSelected", "keydownMoveSelection", "clickCanvasSelected", "keydownEditLabel", "panBlank", "wheelChangeViewport", "panMindNode", "clickCollapsedButton", "clickExpandedButton", "hoverButton", "hoverNodeActived", "dblclickItemEditLabel"],
                          readOnly: ["clickNodeSelected", "wheelChangeViewport", "keydownMoveSelection", "hoverNodeActived", "panCanvas", "clickExpandedButton", "hoverButton", "clickCanvasSelected"]
                      },
                      layout: new d.Layouts.Mindmap({
                          direction: "H",
                          getSubTreeSep: function(e) {
                              return e.children && e.children.length > 0 ? e.hierarchy <= 2 ? 8 : 2 : 0
                          },
                          getHGap: function(e) {
                              return 1 === e.hierarchy ? 8 : 2 === e.hierarchy ? 24 : 18
                          },
                          getVGap: function(e) {
                              return 1 === e.hierarchy ? 24 : 2 === e.hierarchy ? 24 : 2
                          },
                          getSide: function(e) {
                              return e.data.side ? e.data.side : "right"
                          }
                      }),
                      mode: "default",
                      defaultIntersectBox: "rect",
                      nodeDefaultShape: "mind-base",
                      edgeDefaultShape: "mind-edge",
                      minZoom: .2,
                      maxZoom: 2
                  },
                  align: {
                      item: !1
                  },
                  rootShape: "mind-root",
                  firstSubShape: "mind-first-sub",
                  secondSubShape: "mind-second-sub",
                  subShape: "mind-base",
                  nodeDefaultShape: "mind-base",
                  graphConstructor: d.Tree,
                  defaultSide: "right"
              }
                , o = {};
              return h.each(g, function(e) {
                  h.mix(o, e.CFG)
              }),
              h.mix(!0, r, o, e),
              (n = c(this, s(t).call(this, r))).isMind = !0,
              n
          }
          var n, r, i;
          return function(e, t) {
              if ("function" != typeof t && null !== t)
                  throw new TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                      value: e,
                      writable: !0,
                      configurable: !0
                  }
              }),
              t && l(e, t)
          }(t, f),
          n = t,
          (r = [{
              key: "_init",
              value: function() {
                  var e = this;
                  u(s(t.prototype), "_init", this).call(this),
                  h.each(g, function(t) {
                      t.INIT && e[t.INIT]()
                  });
                  var n = this.getGraph()
                    , r = this.get("defaultData")
                    , o = n.get("mode")
                    , i = n.getRootGroup().addGroup();
                  if (this.set("hotAreaGroup", i),
                  n.edge().shape(function(e) {
                      if (n.find(e.target).getModel().isPlaceholder)
                          return "mind-placeholder-edge"
                  }),
                  r && this.read(r),
                  "default" === o) {
                      if (r) {
                          var a = this.getRoot()
                            , c = n.find(a.id);
                          this.setSelected(c, !0)
                      }
                  } else if ("readOnly" === o) {
                      var l = this.get("shortcut");
                      l.append = !1,
                      l.appendChild = !1,
                      l.selectAll = !1,
                      l.delete = !1
                  }
                  if (r) {
                      var d = this.getRoot();
                      this.focus(d.id)
                  }
              }
          }, {
              key: "bindEvent",
              value: function() {
                  var e = this;
                  u(s(t.prototype), "bindEvent", this).call(this);
                  var n = this.get("_graph");
                  n.on("keydown", function(e) {
                      e.domEvent.preventDefault()
                  }),
                  n.on("beforechange", function(t) {
                      "add" === t.action ? e._beforeAdd(t) : "changeData" === t.action && e._beforeChangeData(t)
                  }),
                  n.on("aftersource", function() {
                      e._setHierarchy()
                  }),
                  n.on("afterchange", function() {
                      e._setHotArea()
                  }),
                  n.on("afteritemdraw", function(e) {
                      var t = e.item
                        , n = t.getModel();
                      if (t.isEdge) {
                          var r = t.getGraphicGroup();
                          h.toBack(r, r.getParent()),
                          r.setSilent("capture", !1)
                      }
                      n.parent || (t.isRoot = !0,
                      t.deleteable = !1,
                      t.collapseExpand = !1,
                      t.appendable = !1,
                      t.dragable = !1)
                  }),
                  this.on("beforedelete", function(t) {
                      var n = t.items[0]
                        , r = e._getBrothers(n)
                        , o = e._getNth(n);
                      r[o - 1] ? e.setSelected(r[o - 1].id, !0) : r[o + 1] ? e.setSelected(r[o + 1].id, !0) : e.setSelected(n.getParent(), !0)
                  }),
                  this.on("afteritemselected", function(t) {
                      e._tryAdjustViewport(t.item)
                  })
              }
          }, {
              key: "getRoot",
              value: function() {
                  return this.getGraph().getSource().roots[0]
              }
          }, {
              key: "_setHierarchy",
              value: function(e) {
                  var t = this.getGraph()
                    , n = this.get("firstSubShape")
                    , r = this.get("secondSubShape")
                    , o = this.get("defaultSide");
                  if (e) {
                      var i = t.find(e.parent);
                      if (i) {
                          var a = i.getModel();
                          e.hierarchy = a.hierarchy + 1,
                          "mind-placeholder" !== e.shape && (2 === e.hierarchy && (e.shape = n,
                          e.side || (e.side = o)),
                          3 === e.hierarchy && (e.shape = r))
                      }
                  } else
                      (e = this.getRoot()).hierarchy = 1;
                  h.traverseTree(e, function(e, t) {
                      e.hierarchy = t.hierarchy + 1,
                      e.side || (e.side = o),
                      t.side && (e.side = t.side),
                      2 === e.hierarchy ? e.shape = n : 3 === e.hierarchy && (e.shape = r)
                  }, function(e) {
                      return e.children
                  })
              }
          }, {
              key: "getFirstChildrenBySide",
              value: function(e) {
                  var t = this.getRoot()
                    , n = [];
                  return t.children.forEach(function(t) {
                      t.side === e && n.push(t)
                  }),
                  n
              }
          }, {
              key: "_getNth",
              value: function(e) {
                  return this.getGraph().getNth(e)
              }
          }, {
              key: "_getBrothers",
              value: function(e) {
                  return e.getParent().getModel().children
              }
          }, {
              key: "_getMoveChildModel",
              value: function(e) {
                  if (e && e.length > 0) {
                      var t = e.length;
                      return e[parseInt(t / 2)]
                  }
              }
          }, {
              key: "_getVerticalMoveItem",
              value: function(e, t, n) {
                  for (var r, o = this.getGraph().getNodes(), i = e.getBBox(), a = [i.minX, i.maxX], c = [], u = 0; u < a.length; u++)
                      for (var s = a[u], l = 0; l < o.length; l++) {
                          var d = o[l]
                            , f = d.getBBox();
                          t(f, i, s) && c.push({
                              long: n(f, i),
                              node: d
                          })
                      }
                  return c.length > 0 && (c.sort(function(e, t) {
                      return e.long - t.long
                  }),
                  r = c[0].node),
                  r
              }
          }, {
              key: "_arrowTopItem",
              value: function(e) {
                  var t = this._getBrothers(e)
                    , n = this._getNth(e);
                  return t[n - 1] ? t[n - 1] : this._getVerticalMoveItem(e, function(e, t, n) {
                      return e.centerY < t.centerY && n <= e.maxX && n >= e.minX
                  }, function(e, t) {
                      return t.centerY - e.centerY
                  })
              }
          }, {
              key: "_arrowBottomItem",
              value: function(e) {
                  var t = this._getBrothers(e)
                    , n = this._getNth(e);
                  return t[n + 1] ? t[n + 1] : this._getVerticalMoveItem(e, function(e, t, n) {
                      return e.centerY > t.centerY && n <= e.maxX && n >= e.minX
                  }, function(e, t) {
                      return e.centerY - t.centerY
                  })
              }
          }, {
              key: "_arrowLeftItem",
              value: function(e) {
                  var t = h.getMindNodeSide(e);
                  if (e.isRoot) {
                      var n = this.getFirstChildrenBySide("left");
                      return this._getMoveChildModel(n)
                  }
                  if ("left" === t) {
                      var r = e.getModel().children;
                      return this._getMoveChildModel(r)
                  }
                  return e.getParent()
              }
          }, {
              key: "_arrowRightItem",
              value: function(e) {
                  var t = h.getMindNodeSide(e);
                  if (e.isRoot) {
                      var n = this.getFirstChildrenBySide("right");
                      return this._getMoveChildModel(n)
                  }
                  if ("right" === t) {
                      var r = e.getModel().children;
                      return this._getMoveChildModel(r)
                  }
                  return e.getParent()
              }
          }, {
              key: "_moveItemSelection",
              value: function(e) {
                  var t = this.getGraph()
                    , n = this.getSelected()[0];
                  if (n) {
                      var r, o = e.domEvent, i = h.getKeyboradKey(o);
                      "ArrowUp" !== i || n.isRoot ? "ArrowDown" !== i || n.isRoot ? "ArrowLeft" === i ? r = this._arrowLeftItem(n) : "ArrowRight" === i && (r = this._arrowRightItem(n)) : r = this._arrowBottomItem(n) : r = this._arrowTopItem(n),
                      r && (r = t.find(r.id)).isVisible() && (this.clearSelected(),
                      this.setSelected(r, !0))
                  }
              }
          }, {
              key: "showLabelEditor",
              value: function(e) {
                  var t = e.domEvent
                    , n = this.getSelected()[0]
                    , r = h.getKeyboradKey(t);
                  if (n && 1 === r.length && !t.metaKey && !t.ctrlKey) {
                      var o = this.get("labelTextArea");
                      n && (this.beginEditLabel(n),
                      o.innerHTML = r,
                      h.setEndOfContenteditable(o))
                  }
              }
          }, {
              key: "_tryAdjustViewport",
              value: function(e) {
                  var t = this.get("_graph")
                    , n = e.getBBox()
                    , r = {
                      x: n.minX,
                      y: n.minY
                  }
                    , o = {
                      x: n.maxX,
                      y: n.maxY
                  }
                    , i = t.getDomPoint(r)
                    , a = t.getDomPoint(o)
                    , c = t.getWidth()
                    , u = t.getHeight();
                  i.x < 0 && t.translate(16 - i.x, 0),
                  i.y < 0 && t.translate(0, 16 - i.y),
                  a.x > c && t.translate(c - a.x - 16, 0),
                  a.y > u && t.translate(0, u - a.y - 16)
              }
          }, {
              key: "_beforeChangeData",
              value: function(e) {
                  var t = e.data.roots[0]
                    , n = this.get("rootShape");
                  t.shape = n,
                  this._setHierarchy(t)
              }
          }, {
              key: "_beforeAdd",
              value: function(e) {
                  var t = this.get("_graph")
                    , n = e.model
                    , r = t.find(n.parent);
                  r.getModel().collapsed && t.update(r, {
                      collapsed: !1
                  }),
                  this._setHierarchy(n)
              }
          }, {
              key: "_drawHotAreaShape",
              value: function() {
                  var e = this.get("_graph")
                    , t = this.get("hotAreaGroup")
                    , n = this.get("hotAreas");
                  t.clear(),
                  n.forEach(function(e) {
                      t.addShape("rect", {
                          attrs: {
                              x: e.minX,
                              y: e.minY,
                              width: e.maxX - e.minX,
                              height: e.maxY - e.minY,
                              fill: e.color,
                              fillOpacity: .4
                          },
                          capture: !1
                      })
                  }),
                  e.draw()
              }
          }, {
              key: "_setHotArea",
              value: function() {
                  var e = []
                    , t = this.get("_graph")
                    , n = this.getRoot()
                    , r = "placeholder"
                    , i = this.get("showHotArea")
                    , a = t.find(n.id).getBBox();
                  e.push({
                      minX: a.minX - 90,
                      minY: a.minY - 60,
                      maxX: (a.minX + a.maxX) / 2,
                      maxY: a.maxY + 60,
                      parent: n,
                      current: n,
                      id: n.id + "left" + r,
                      nth: n.children.length,
                      side: "left",
                      color: "orange"
                  }),
                  e.push({
                      minX: (a.minX + a.maxX) / 2,
                      minY: a.minY - 60,
                      maxX: a.maxX + 90,
                      maxY: a.maxY + 60,
                      parent: n,
                      current: n,
                      id: n.id + "right" + r,
                      nth: n.children.length,
                      side: "right",
                      color: "pink"
                  }),
                  h.traverseTree(n, function(n, i, a) {
                      var c = t.find(n.id);
                      if (!n.isPlaceholder && c && c.isVisible()) {
                          var u = function(e, t, n) {
                              var r = n.children
                                , o = e;
                              if (!n.parent)
                                  for (; r[o] && r[o].side !== t.side; )
                                      o++;
                              for (; r[o] && r[o].isPlaceholder; )
                                  o++;
                              if (r[o] && r[o].side === t.side)
                                  return r[o]
                          }(a + 1, n, i)
                            , s = function(e, t, n) {
                              var r = n.children
                                , o = e;
                              if (!n.parent)
                                  for (; r[o] && r[o].side !== t.side; )
                                      o--;
                              for (; r[o] && r[o].isPlaceholder; )
                                  o--;
                              if (r[o] && r[o].side === t.side)
                                  return r[o]
                          }(a - 1, n, i)
                            , l = t.find(n.id).getBBox()
                            , d = i.children
                            , f = 2 === n.hierarchy && "right" === n.side
                            , h = 2 === n.hierarchy && "left" === n.side;
                          if (s || e.push({
                              minX: f ? l.minX - 90 : l.minX,
                              minY: function() {
                                  var e = s ? l.minY : l.minY - 16;
                                  d[a - 1] && d[a - 1].isPlaceholder && d[a - 1].side === n.side && (e = t.find(d[a - 1].id).getBBox().minY);
                                  return e
                              }(),
                              maxX: h ? l.maxX + 90 : l.maxX,
                              maxY: (l.minY + l.maxY) / 2,
                              parent: i,
                              id: (s ? s.id : void 0) + n.id + i.id + r,
                              side: n.side,
                              color: "yellow",
                              nth: a
                          }),
                          u) {
                              var g = t.find(u.id).getBBox();
                              e.push({
                                  minX: "left" === n.side ? Math.max(l.minX, g.minX) : f ? l.minX - 90 : l.minX,
                                  minY: (l.minY + l.maxY) / 2,
                                  maxX: "right" === n.side ? Math.min(l.maxX, g.maxX) : h ? l.maxX + 90 : l.maxX,
                                  maxY: (g.minY + g.maxY) / 2,
                                  parent: i,
                                  id: n.id + (u ? u.id : void 0) + i.id + r,
                                  side: n.side,
                                  color: "blue",
                                  nth: a + 1
                              })
                          } else
                              e.push({
                                  minX: f ? l.minX - 90 : l.minX,
                                  minY: (l.minY + l.maxY) / 2,
                                  maxX: h ? l.maxX + 90 : l.maxX,
                                  maxY: function() {
                                      var e = l.maxY + 16;
                                      d[a + 1] && d[a + 1].isPlaceholder && d[a + 1].side === n.side && (e = t.find(d[a + 1].id).getBBox().maxY);
                                      return e
                                  }(),
                                  parent: i,
                                  id: n.id + void 0 + i.id + r,
                                  color: "red",
                                  nth: a + 1,
                                  addOrder: "push",
                                  side: n.side
                              });
                          if (!n.children || 0 === n.children.length || 1 === n.children.length && n.children[0].isPlaceholder) {
                              var p;
                              p = n.x > i.x ? {
                                  minX: l.maxX,
                                  minY: l.minY - 0,
                                  maxX: l.maxX + 100,
                                  maxY: l.maxY + 0
                              } : {
                                  minX: l.minX - 100,
                                  minY: l.minY - 0,
                                  maxX: l.minX,
                                  maxY: l.maxY + 0
                              },
                              e.push(o({}, p, {
                                  parent: n,
                                  id: NaN + n.id + r,
                                  nth: 0,
                                  color: "green",
                                  side: n.side,
                                  addOrder: "push"
                              }))
                          }
                      }
                  }, function(e) {
                      return e.children
                  }),
                  this.set("hotAreas", e),
                  i && this._drawHotAreaShape()
              }
          }, {
              key: "hideHotArea",
              value: function() {
                  var e = this.get("_graph");
                  this.get("hotAreaGroup").clear(),
                  e.draw(),
                  this.set("showHotArea", !1)
              }
          }, {
              key: "showHotArea",
              value: function() {
                  this._drawHotAreaShape(),
                  this.set("showHotArea", !0)
              }
          }, {
              key: "getHotArea",
              value: function(e) {
                  var t;
                  return this.get("hotAreas").forEach(function(n) {
                      if (e.x > n.minX && e.x < n.maxX && e.y > n.minY && e.y < n.maxY)
                          return t = n,
                          !1
                  }),
                  t
              }
          }, {
              key: "saveExpandImage",
              value: function(e) {
                  var t, n, r, i = this, a = this.getGraph(), c = a.getBBox(), u = a.getFitViewPadding();
                  return a.saveImage(o({
                      width: c.width + u[1] + u[3],
                      height: c.height + u[0] + u[2],
                      beforeTransform: function() {
                          var e = a.getNodes();
                          (t = e.filter(function(e) {
                              return e.getModel().collapsed
                          }).map(function(e) {
                              return e.getModel().id
                          })).forEach(function(e) {
                              a.update(e, {
                                  collapsed: !1
                              })
                          }),
                          a.layout(),
                          n = i.getSelected().map(function(e) {
                              return e.id
                          }),
                          r = i.getSelected().map(function(e) {
                              return e.id
                          }),
                          i.clearSelected(),
                          i.clearActived()
                      },
                      afterTransform: function() {
                          t.forEach(function(e) {
                              a.update(e, {
                                  collapsed: !0
                              })
                          }),
                          i.setSelected(n, !0),
                          i.setActived(r, !0)
                      }
                  }, e))
              }
          }, {
              key: "save",
              value: function() {
                  var e = this.get("_graph").save();
                  return e.roots.forEach(function(e) {
                      h.traverseTree(e, function(e) {
                          delete e.x,
                          delete e.y,
                          delete e.width,
                          delete e.height,
                          delete e.parent,
                          delete e.nth,
                          delete e.hierarchy,
                          delete e.index,
                          delete e.shape
                      }, function(e) {
                          return e.children
                      }, !0)
                  }),
                  e
              }
          }]) && a(n.prototype, r),
          i && a(n, i),
          t
      }();
      h.each(g, function(e) {
          h.mix(p.prototype, e.AUGMENT)
      }),
      f.setRegister(p, "mind", "page"),
      e.exports = p
  }
  , function(e, t, n) {
      function r(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1,
              r.configurable = !0,
              "value"in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
      }
      function o(e, t, n) {
          return t && r(e.prototype, t),
          n && r(e, n),
          e
      }
      var i = n(7).Util
        , a = function() {
          function e(t) {
              !function(e, t) {
                  if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function")
              }(this, e);
              var n = this.getDefaultCfg();
              i.mix(!0, this, n, t),
              this.init()
          }
          return o(e, [{
              key: "getDefaultCfg",
              value: function() {
                  return {}
              }
          }]),
          o(e, [{
              key: "init",
              value: function() {}
          }, {
              key: "destroy",
              value: function() {}
          }]),
          e
      }();
      e.exports = a
  }
  , function(e, t, n) {
      function r(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n,
          e
      }
      var o = function(e) {
          for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {}
                , o = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))),
              o.forEach(function(t) {
                  r(e, t, n[t])
              })
          }
          return e
      }({}, n(4), {
          getMindNodeSide: function(e) {
              var t = e.getModel();
              if (t.side)
                  return t.side;
              var n = e.getParent();
              return n ? n.getModel().side ? n.getModel().side : o.getMindNodeSide(n) : void 0
          }
      });
      e.exports = o
  }
  , function(e, t, n) {
      function r(e) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          )(e)
      }
      function o(e, t) {
          return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
              if (void 0 === e)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
          }(e) : t
      }
      function i(e) {
          return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          }
          )(e)
      }
      function a(e, t) {
          return (a = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t,
              e
          }
          )(e, t)
      }
      var c = n(1)
        , u = n(16)
        , s = n(19)
        , l = function(e) {
          function t(e) {
              var n;
              !function(e, t) {
                  if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function")
              }(this, t);
              var r = {
                  graph: {
                      modes: {
                          default: ["panBlank", "hoverGroupActived", "keydownCmdWheelZoom", "clickEdgeSelected", "clickNodeSelected", "clickCanvasSelected", "clickGroupSelected", "hoverNodeActived", "hoverEdgeActived", "hoverButton", "clickCollapsedButton", "clickExpandedButton", "wheelChangeViewport", "keydownShiftMultiSelected", "dragNodeAddToGroup", "dragOutFromGroup", "panItem", "hoverEdgeControlPoint", "dragEdgeControlPoint"],
                          add: ["dragPanelItemAddNode"],
                          readOnly: ["panCanvas"],
                          move: ["panCanvas"],
                          multiSelect: ["dragMultiSelect"]
                      },
                      mode: "default",
                      defaultIntersectBox: "rect",
                      nodeDefaultShape: "flow-base",
                      edgeDefaultShape: "flow-smooth",
                      groupDefaultShape: "flow-base"
                  },
                  linkNode: !1
              };
              return s.mix(!0, r, {}, e),
              (n = o(this, i(t).call(this, r))).isFlow = !0,
              n
          }
          return function(e, t) {
              if ("function" != typeof t && null !== t)
                  throw new TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                      value: e,
                      writable: !0,
                      configurable: !0
                  }
              }),
              t && a(e, t)
          }(t, u),
          t
      }();
      c.setRegister(l, "flow", "diagram"),
      e.exports = l
  }
  , function(e, t, n) {
      function r(e) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          )(e)
      }
      function o(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1,
              r.configurable = !0,
              "value"in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
      }
      function i(e, t) {
          return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
              if (void 0 === e)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
          }(e) : t
      }
      function a(e, t, n) {
          return (a = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
              var r = function(e, t) {
                  for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = c(e)); )
                      ;
                  return e
              }(e, t);
              if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, t);
                  return o.get ? o.get.call(n) : o.value
              }
          }
          )(e, t, n || e)
      }
      function c(e) {
          return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          }
          )(e)
      }
      function u(e, t) {
          return (u = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t,
              e
          }
          )(e, t)
      }
      var s = n(16)
        , l = n(1)
        , d = n(6)
        , f = function(e) {
          function t(e) {
              var n;
              !function(e, t) {
                  if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function")
              }(this, t);
              var r = {
                  graph: {
                      modes: {
                          default: ["panBlank", "keydownCmdWheelZoom", "clickEdgeSelected", "clickNodeSelected", "clickCanvasSelected", "hoverNodeActived", "hoverEdgeActived", "hoverButton", "wheelChangeViewport", "keydownShiftMultiSelected", "panItem", "hoverNodeShowArrowController", "hoverEdgeControlPoint", "dragEdgeControlPoint", "bpmnMoveEdgeController"],
                          add: ["dragPanelItemAddNode", "processAddEdge"],
                          readOnly: ["panCanvas"],
                          move: ["panCanvas"],
                          multiSelect: ["dragMultiSelect"]
                      },
                      mode: "default",
                      defaultIntersectBox: "rect",
                      nodeDefaultShape: "bpmn-base",
                      edgeDefaultShape: "bpmn-base"
                  },
                  arrowController: {
                      thickness: 32,
                      long: 32,
                      controllers: []
                  }
              };
              return d.mix(!0, r, {}, e),
              (n = i(this, c(t).call(this, r))).isBPMN = !0,
              n
          }
          var n, r, l;
          return function(e, t) {
              if ("function" != typeof t && null !== t)
                  throw new TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                      value: e,
                      writable: !0,
                      configurable: !0
                  }
              }),
              t && u(e, t)
          }(t, s),
          n = t,
          (r = [{
              key: "_init",
              value: function() {
                  a(c(t.prototype), "_init", this).call(this),
                  this._initArrowController()
              }
          }, {
              key: "_createArrowController",
              value: function(e, t) {
                  var n = this
                    , r = this.get("arrowController").controllers
                    , o = d.createDOM('<div class="g6-bpmn-arrow"><svg t="1543840367375" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1061" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32"><defs><style type="text/css"></style></defs><path d="M906.77248 512c0 4.77184-2.21184 9.2672-5.9904 12.17536l-376.5248 289.4848c-2.7648 2.11968-6.06208 3.18464-9.3696 3.18464-3.25632 0-6.5024-1.03424-9.24672-3.09248-5.50912-4.15744-7.5776-11.48928-5.03808-17.90976l75.71456-191.67232L132.58752 604.17024c-8.48896 0-15.36-6.88128-15.36-15.36l0-153.6c0-8.48896 6.87104-15.36 15.36-15.36l443.72992 0-75.71456-191.68256c-2.53952-6.42048-0.47104-13.75232 5.04832-17.90976 5.50912-4.15744 13.12768-4.13696 18.60608 0.09216l376.5248 289.4848C904.56064 502.7328 906.77248 507.22816 906.77248 512z" p-id="1062" fill="#34B7EF"></path></svg></div>', {
                      visibility: "hidden",
                      width: e + "px",
                      height: t + "px",
                      position: "absolute"
                  });
                  return o.setAttribute("draggable", "true"),
                  d.addEventListener(o, "dragstart", function() {
                      var e = o.hoverNode
                        , t = {
                          shape: "bpmn-base",
                          source: e.id,
                          anchorIndex: o.getAttribute("anchorIndex")
                      }
                        , r = e.getBBox()
                        , i = n.getDelegation([{
                          isEdge: !0
                      }]);
                      n.setSignal("dragEdge", !0),
                      n.beginAdd("edge", t),
                      n.set("addEdgeConfig", {
                          addModel: t,
                          delegation: i,
                          startPoint: {
                              x: r.centerX,
                              y: r.centerY
                          },
                          sourceItem: e
                      }),
                      n.hideArrowController()
                  }),
                  r.push(o),
                  o
              }
          }, {
              key: "showArrowController",
              value: function(e) {
                  this.get("arrowController").controllers.forEach(function(t) {
                      t.show(),
                      t.hoverNode = e
                  })
              }
          }, {
              key: "hideArrowController",
              value: function() {
                  this.get("arrowController").controllers.forEach(function(e) {
                      e.hide()
                  })
              }
          }, {
              key: "_initArrowController",
              value: function() {
                  var e = this.getGraph().getGraphContainer()
                    , t = this.get("arrowController")
                    , n = t.thickness
                    , r = t.long
                    , o = this._createArrowController(n, r)
                    , i = this._createArrowController(n, r)
                    , a = this._createArrowController(r, n)
                    , c = this._createArrowController(r, n);
                  e.appendChild(o),
                  e.appendChild(i),
                  e.appendChild(a),
                  e.appendChild(c),
                  t.topArrow = o,
                  t.bottomArrow = i,
                  t.leftArrow = a,
                  t.rightArrow = c
              }
          }, {
              key: "bindEvent",
              value: function() {
                  var e = this;
                  a(c(t.prototype), "bindEvent", this).call(this);
                  var n = this.getGraph();
                  n.on("beforepanitem", function() {
                      e.hideArrowController()
                  }),
                  n.on("afterviewportchange", function() {
                      e.hideArrowController()
                  })
              }
          }]) && o(n.prototype, r),
          l && o(n, l),
          t
      }();
      l.setRegister(f, "bpmn", "diagram"),
      e.exports = f
  }
  , function(e, t, n) {
      function r(e) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          )(e)
      }
      function o(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1,
              r.configurable = !0,
              "value"in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
      }
      function i(e, t) {
          return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
              if (void 0 === e)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
          }(e) : t
      }
      function a(e, t, n) {
          return (a = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
              var r = function(e, t) {
                  for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = c(e)); )
                      ;
                  return e
              }(e, t);
              if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, t);
                  return o.get ? o.get.call(n) : o.value
              }
          }
          )(e, t, n || e)
      }
      function c(e) {
          return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          }
          )(e)
      }
      function u(e, t) {
          return (u = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t,
              e
          }
          )(e, t)
      }
      var s = n(7)
        , l = n(1)
        , d = n(2)
        , f = n(65)
        , h = n(66)
        , g = n(68)
        , p = n(72)
        , m = [f, n(73), p, h, g, n(74)]
        , y = function(e) {
          function t(e) {
              var n;
              !function(e, t) {
                  if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function")
              }(this, t);
              var r = {
                  shortcut: {
                      copy: !0,
                      paste: !0,
                      selectAll: !0,
                      addGroup: !0,
                      unGroup: !0
                  },
                  graph: {
                      minZoom: .2,
                      maxZoom: 2
                  },
                  graphConstructor: s.Graph,
                  noEndEdge: !0
              }
                , o = {};
              return d.each(m, function(e) {
                  d.mix(o, e.CFG)
              }),
              d.mix(!0, r, o, e),
              (n = i(this, c(t).call(this, r))).isFlow = !0,
              n
          }
          var n, r, f;
          return function(e, t) {
              if ("function" != typeof t && null !== t)
                  throw new TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                      value: e,
                      writable: !0,
                      configurable: !0
                  }
              }),
              t && u(e, t)
          }(t, l),
          n = t,
          (r = [{
              key: "_init",
              value: function() {
                  var e = this;
                  a(c(t.prototype), "_init", this).call(this),
                  d.each(m, function(t) {
                      t.INIT && e[t.INIT]()
                  })
              }
          }, {
              key: "bindEvent",
              value: function() {
                  var e = this;
                  a(c(t.prototype), "bindEvent", this).call(this),
                  this.on("beforeitemactived", function(t) {
                      var n = t.item
                        , r = e.get("_graph").getShapeObj(n).getActivedOutterStyle(n);
                      n.isNode && e.addOutterShape(n, r)
                  }),
                  this.on("beforeitemunactived", function(t) {
                      var n = t.item;
                      (n.isNode || n.isGroup) && e.clearOutterShape(n)
                  }),
                  this.on("beforeitemselected", function(t) {
                      var n = t.item
                        , r = e.get("_graph").getShapeObj(n).getSelectedOutterStyle(n);
                      n.isNode ? e.addOutterShape(n, r) : n.isGroup && e.addOutterShape(n, r)
                  }),
                  this.on("beforeitemunselected", function(t) {
                      var n = t.item;
                      (n.isNode || n.isGroup) && e.clearOutterShape(n)
                  })
              }
          }]) && o(n.prototype, r),
          f && o(n, f),
          t
      }();
      d.each(m, function(e) {
          d.mix(y.prototype, e.AUGMENT)
      }),
      l.setRegister(y, "diagram", "page"),
      e.exports = y
  }
  , function(e, t) {
      e.exports = {
          gridStyle: {
              stroke: "#A3B1BF",
              lineWidth: .5
          },
          cursor: {
              panningCanvas: "-webkit-grabbing",
              beforePanCanvas: "-webkit-grab"
          },
          wheelPanRatio: .3,
          alignLineStyle: {
              stroke: "#FA8C16",
              lineWidth: 1
          },
          nodeDelegationStyle: {
              stroke: "#1890FF",
              fill: "#1890FF",
              fillOpacity: .08,
              lineDash: [4, 4],
              radius: 4,
              lineWidth: 1
          },
          edgeDelegationStyle: {
              stroke: "#1890FF",
              lineDash: [4, 4],
              lineWidth: 1
          }
      }
  }
  , function(e, t, n) {
      var r = n(18);
      n(32),
      n(33),
      e.exports = r
  }
  , function(e, t, n) {
      var r = n(13);
      n(75),
      n(80),
      e.exports = r
  }
  , function(e, t, n) {
      function r(e) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          )(e)
      }
      function o(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1,
              r.configurable = !0,
              "value"in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
      }
      function i(e, t) {
          return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
              if (void 0 === e)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
          }(e) : t
      }
      function a(e, t, n) {
          return (a = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
              var r = function(e, t) {
                  for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = c(e)); )
                      ;
                  return e
              }(e, t);
              if (r) {
                  var o = Object.getOwnPropertyDescriptor(r, t);
                  return o.get ? o.get.call(n) : o.value
              }
          }
          )(e, t, n || e)
      }
      function c(e) {
          return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          }
          )(e)
      }
      function u(e, t) {
          return (u = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t,
              e
          }
          )(e, t)
      }
      var s = n(1)
        , l = n(16)
        , d = n(24)
        , f = function(e) {
          function t(e) {
              var n;
              !function(e, t) {
                  if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function")
              }(this, t);
              var r = {
                  graph: {
                      modes: {
                          default: ["panBlank", "hoverGroupActived", "keydownCmdWheelZoom", "clickEdgeSelected", "clickNodeSelected", "clickCanvasSelected", "clickGroupSelected", "hoverNodeActived", "hoverEdgeActived", "hoverButton", "clickCollapsedButton", "clickExpandedButton", "wheelChangeViewport", "keydownShiftMultiSelected", "dragNodeAddToGroup", "dragOutFromGroup", "panItem", "hoverEdgeControlPoint", "dragEdgeControlPoint"],
                          add: ["dragPanelItemAddNode", "processAddEdge"],
                          readOnly: ["panCanvas"],
                          move: ["panCanvas"],
                          multiSelect: ["dragMultiSelect"]
                      },
                      mode: "default",
                      defaultIntersectBox: "circle",
                      nodeDefaultShape: "koni-base",
                      edgeDefaultShape: "koni-base",
                      groupDefaultShape: "koni-base",
                      minZoom: .5,
                      maxZoom: 2
                  },
                  orbit: {
                      satellite: ["forkAndLink"]
                  },
                  anchorLink: !1,
                  noEndEdge: !1
              };
              return d.mix(!0, r, {}, e),
              (n = i(this, c(t).call(this, r))).isKoni = !0,
              n
          }
          var n, r, s;
          return function(e, t) {
              if ("function" != typeof t && null !== t)
                  throw new TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                      value: e,
                      writable: !0,
                      configurable: !0
                  }
              }),
              t && u(e, t)
          }(t, l),
          n = t,
          (r = [{
              key: "bindEvent",
              value: function() {
                  a(c(t.prototype), "bindEvent", this).call(this);
                  var e = this.getGraph();
                  e.on("afterchange", function(t) {
                      var n = t.item
                        , r = t.action
                        , o = t.originModel
                        , i = t.updateModel;
                      if (n && n.isEdge)
                          if ("add" === r || "remove" === r) {
                              var a = n.getSource()
                                , c = n.getTarget();
                              d.getParallelEdges(a, c, !0).forEach(function(e) {
                                  e.update()
                              })
                          } else if ("update" === r) {
                              var u = e.find(o.source)
                                , s = e.find(o.target)
                                , l = [];
                              if (d.getParallelEdges(u, s, !0).forEach(function(e) {
                                  e.update()
                              }),
                              d.isNil(i.target) && !d.isNil(i.source)) {
                                  var f = e.find(i.source);
                                  l = d.getParallelEdges(f, s, !0)
                              } else if (!d.isNil(i.target) && d.isNil(i.source)) {
                                  var h = e.find(i.target);
                                  l = d.getParallelEdges(u, h, !0)
                              } else if (!d.isNil(i.target) && !d.isNil(i.source)) {
                                  var g = e.find(i.source)
                                    , p = e.find(i.target);
                                  l = d.getParallelEdges(g, p, !0)
                              }
                              l.forEach(function(e) {
                                  e.update()
                              })
                          }
                      "changeData" === r && e.getEdges().forEach(function(e) {
                          e.update()
                      }),
                      e.draw()
                  })
              }
          }]) && o(n.prototype, r),
          s && o(n, s),
          t
      }();
      s.setRegister(f, "koni", "diagram"),
      e.exports = f
  }
  , function(e, t, n) {
      function r(e) {
          for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {}
                , r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))),
              r.forEach(function(t) {
                  o(e, t, n[t])
              })
          }
          return e
      }
      function o(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n,
          e
      }
      var i = n(6)
        , a = {};
      function c(e) {
          return e.getCurrentPage().getSelected().length > 0
      }
      function u(e) {
          var t = e.getCurrentPage();
          this.snapShot = t.save(),
          this.selectedItems = t.getSelected().map(function(e) {
              return e.id
          }),
          this.method && (i.isString(this.method) ? t[this.method]() : this.method(e))
      }
      function s(e) {
          var t = e.getCurrentPage();
          t.read(this.snapShot),
          t.setSelected(this.selectedItems, !0)
      }
      function l(e) {
          return e.getCurrentPage().getMode() !== this.toMode
      }
      function d(e) {
          var t = e.getCurrentPage();
          this.fromMode = t.getMode(),
          t.changeMode(this.toMode)
      }
      function f(e) {
          e.getCurrentPage().changeMode(this.fromMode)
      }
      function h(e) {
          var t = {}
            , n = [];
          return e.forEach(function(e) {
              var o = e.model
                , a = i.mix(!0, {}, r({}, o, {
                  id: i.guid()
              }));
              t[o.id] = a.id,
              n.push(r({}, e, {
                  model: a
              }))
          }),
          n.forEach(function(e) {
              var n = e.model;
              if (n.parent) {
                  var r = t[n.parent];
                  r ? n.parent = r : delete n.parent
              }
          }),
          n.sort(function(e, t) {
              return e.index - t.index
          }),
          n
      }
      a.list = [],
      a.registerCommand = function(e, t, n) {
          if (a[e])
              i.mix(a[e], t);
          else {
              var o = r({
                  enable: function() {
                      return !0
                  },
                  init: function() {},
                  execute: u,
                  back: s,
                  shortcutCodes: void 0,
                  executeTimes: 1,
                  name: e,
                  queue: !0
              }, t);
              n && a[n] && (o = i.mix({}, a[n], t)),
              a[e] = o,
              a.list.push(o)
          }
      }
      ,
      a.execute = function(e, t, n) {
          var r = i.mix(!0, {}, a[e], n)
            , o = t.get("_command");
          return r.enable(t) && (r.init(),
          r.queue && (o.queue.splice(o.current, o.queue.length - o.current, r),
          o.current += 1),
          t.emit("beforecommandexecute", {
              command: r
          }),
          r.execute(t),
          t.emit("aftercommandexecute", {
              command: r
          }),
          t.setCommandDOMenable()),
          r
      }
      ,
      a.enable = function(e, t) {
          return a[e].enable(t)
      }
      ,
      a.registerCommand("common", {
          back: s
      }),
      a.registerCommand("copyAdjacent", {
          enable: function() {
              return this.copyNode && this.copyNode.isNode && this.x && this.y
          },
          execute: function(e) {
              var t = this.copyNode
                , n = e.getCurrentPage()
                , r = n.getGraph()
                , o = t.getModel()
                , a = i.clone(o);
              a.id = i.guid(),
              a.x = this.x,
              a.y = this.y;
              var c = r.add("node", a)
                , u = r.add("edge", {
                  source: o.id,
                  target: a.id
              });
              1 === this.executeTimes && (this.addIds = [c.id, u.id],
              this.page = n)
          },
          back: function() {
              var e = this.page.getGraph();
              this.addIds.forEach(function(t) {
                  e.remove(t)
              })
          }
      }),
      a.registerCommand("add", {
          enable: function() {
              return this.type && this.addModel
          },
          execute: function(e) {
              var t = e.getCurrentPage()
                , n = t.getGraph().add(this.type, this.addModel);
              1 === this.executeTimes && (this.addId = n.id,
              this.page = t)
          },
          back: function() {
              this.page.getGraph().remove(this.addId)
          }
      }),
      a.registerCommand("update", {
          enable: function() {
              return this.itemId && this.updateModel
          },
          execute: function(e) {
              var t = e.getCurrentPage()
                , n = t.getGraph()
                , r = n.find(this.itemId);
              1 === this.executeTimes && (this.originModel = i.getContrast(r.getModel(), this.updateModel),
              this.page = t),
              n.update(r, this.updateModel)
          },
          back: function() {
              var e = this.page.getGraph()
                , t = e.find(this.itemId);
              e.update(t, this.originModel)
          }
      }),
      a.registerCommand("redo", {
          queue: !1,
          enable: function(e) {
              var t = e.get("_command")
                , n = t.queue;
              return t.current < n.length
          },
          execute: function(e) {
              var t = e.get("_command");
              t.queue[t.current].execute(e),
              t.current += 1
          },
          shortcutCodes: [["metaKey", "shiftKey", "z"], ["ctrlKey", "shiftKey", "z"]]
      }),
      a.registerCommand("undo", {
          queue: !1,
          enable: function(e) {
              return e.get("_command").current > 0
          },
          execute: function(e) {
              var t = e.get("_command")
                , n = t.queue[t.current - 1];
              n.executeTimes++,
              n.back(e),
              t.current -= 1
          },
          shortcutCodes: [["metaKey", "z"], ["ctrlKey", "z"]]
      }),
      a.registerCommand("copy", {
          queue: !1,
          enable: c,
          method: function(e) {
              var t = e.getCurrentPage().getSelected()
                , n = e.get("_command")
                , o = t.map(function(e) {
                  return e.getGraphicGroup()
              })
                , a = i.getChildrenBBox(o);
              n.clipboard = [],
              t.forEach(function(e) {
                  i.traverseTree(e, function(e) {
                      var t = e.getModel()
                        , r = e.getGraphicGroup();
                      n.clipboard.push({
                          type: e.type,
                          index: i.getIndex(r),
                          model: t
                      })
                  }, function(e) {
                      return e.getChildren && e.getChildren()
                  }, !0)
              }),
              e.set("copyCenterBox", r({}, a))
          }
      }),
      a.registerCommand("pasteHere", {
          enable: function(e) {
              return e.get("_command").clipboard.length > 0
          },
          method: function(e) {
              var t = e.getCurrentPage()
                , n = e.get("_command")
                , r = this.pasteData ? this.pasteData : h(n.clipboard)
                , o = this.copyCenterBox ? this.copyCenterBox : e.get("copyCenterBox")
                , a = this.contextmenuPoint ? this.contextmenuPoint : e.get("contextmenuPoint");
              t.clearSelected(),
              this.copyCenterBox = i.clone(o),
              this.pasteData = i.clone(r),
              this.contextmenuPoint = i.clone(a),
              r.forEach(function(e) {
                  var n = e.model;
                  n.x && (n.x += a.x - o.minX),
                  n.y && (n.y += a.y - o.minY),
                  t.add(e.type, n)
              })
          },
          back: s
      }),
      a.registerCommand("paste", {
          enable: function(e) {
              return e.get("_command").clipboard.length > 0
          },
          method: function(e) {
              var t = e.getCurrentPage()
                , n = e.get("_command")
                , r = this.pasteData ? this.pasteData : h(n.clipboard);
              t.clearSelected(),
              this.pasteData = i.clone(r),
              r.forEach(function(e) {
                  var n = e.model;
                  n.x && (n.x += 10),
                  n.y && (n.y += 10),
                  t.add(e.type, n)
              })
          },
          back: s
      }),
      a.registerCommand("addGroup", {
          init: function() {
              this.addGroupId = i.guid()
          },
          enable: function(e) {
              return e.getCurrentPage().getSelected().length > 1
          },
          method: function(e) {
              e.getCurrentPage().addGroup({
                  id: this.addGroupId
              })
          },
          back: s
      }),
      a.registerCommand("unGroup", {
          enable: function(e) {
              var t = e.getCurrentPage().getSelected();
              return 1 === t.length && t[0].isGroup
          },
          method: "unGroup",
          back: s
      }),
      a.registerCommand("delete", {
          getDeleteItems: function(e) {
              var t = e.getCurrentPage()
                , n = t.getGraph()
                , r = this.itemIds ? this.itemIds.map(function(e) {
                  return n.find(e)
              }) : t.getSelected();
              return r = r.filter(function(e) {
                  return !1 !== e.deleteable
              })
          },
          enable: function(e) {
              return this.getDeleteItems(e).length > 0
          },
          method: function(e) {
              var t = e.getCurrentPage()
                , n = this.getDeleteItems(e)
                , r = t.getGraph();
              t.emit("beforedelete", {
                  items: n
              }),
              i.each(n, function(e) {
                  r.remove(e)
              }),
              t.emit("afterdelete", {
                  items: n
              }),
              this.itemIds = n.map(function(e) {
                  return e.getModel().id
              })
          },
          back: s,
          shortcutCodes: ["Delete", "Backspace"]
      }),
      a.registerCommand("selectAll", {
          method: function(e) {
              var t = e.getCurrentPage();
              t.getGraph().getItems().forEach(function(e) {
                  t.setSelected(e, !0)
              })
          },
          back: s,
          shortcutCodes: [["metaKey", "a"]]
      }),
      a.registerCommand("toBack", {
          enable: c,
          method: "toBack",
          back: s
      }),
      a.registerCommand("toFront", {
          enable: c,
          method: "toFront",
          back: s
      }),
      a.registerCommand("clear", {
          enable: function(e) {
              return e.getCurrentPage().getItems().length > 0
          },
          method: "clear",
          back: s
      }),
      a.registerCommand("multiSelect", {
          enable: l,
          toMode: "multiSelect",
          execute: d,
          back: f
      }),
      a.registerCommand("move", {
          enable: l,
          toMode: "move",
          execute: d,
          back: f
      }),
      e.exports = a
  }
  , function(e, t, n) {
      e.exports = n(2)
  }
  , function(e, t, n) {
      "use strict";
      n.r(t),
      n.d(t, "mouseEnterEdge", function() {
          return o
      }),
      n.d(t, "mouseLeaveEdge", function() {
          return i
      }),
      n.d(t, "startMove", function() {
          return a
      }),
      n.d(t, "endMove", function() {
          return c
      }),
      n.d(t, "mouseMoveEdge", function() {
          return u
      }),
      n.d(t, "mergeLine", function() {
          return s
      });
      var r = n(0);
      function o(e) {
          var t = e.graph
            , n = e.bpmn
            , o = e.ev
            , i = e.backUpCursor
            , a = o.item
            , c = a.model.controlPoints
            , u = Object(r.e)({
              x: o.x,
              y: o.y
          }, c)
            , s = u.index
            , l = u.vertical;
          null != s && (i && (a._cursor = n.getGraph().getMouseEventWrapper().style.cursor),
          t.update(a, {
              hold: {
                  index: s,
                  vertical: l
              }
          }),
          l ? n.css({
              cursor: "col-resize"
          }) : n.css({
              cursor: "row-resize"
          }))
      }
      function i(e) {
          var t = e.graph
            , n = e.bpmn
            , r = e.item;
          r._cursor && n.css({
              cursor: r._cursor
          }),
          delete r._cursor,
          t.update(r, {
              hold: void 0
          })
      }
      function a(e, t) {
          var n = t.item;
          e.update(n, {
              lastMouse: {
                  x: t.x,
                  y: t.y
              }
          })
      }
      function c(e) {
          var t = e.graph
            , n = e.item;
          t.update(n, {
              lastMouse: void 0,
              moveDelta: void 0
          })
      }
      function u(e, t, n) {
          var r;
          r = t.model && t.model.hold && t.model.hold.vertical ? {
              x: n.x - t.model.lastMouse.x,
              y: 0
          } : {
              x: 0,
              y: n.y - t.model.lastMouse.y
          },
          e.update(t, {
              edgeMoved: r,
              modifiedByMouse: !0
          })
      }
      function s(e, t, n) {
          var r, o = e.model, i = t || o.hold.index, a = o.controlPoints;
          null === n && (n = o.hold.vertical);
          var c = [];
          return i >= 2 && (n ? Math.abs(a[i - 2].x - a[i].x) <= 3 && (r = [{
              x: a[i - 2].x,
              y: a[i - 2].y
          }, {
              x: a[i - 2].x,
              y: a[i + 1].y
          }],
          c.push(i - 1, i),
          o.hold.index = i - 2,
          o.controlPoints[i + 1].x = a[i - 2].x) : Math.abs(a[i - 2].y - a[i].y) <= 3 && (r = [{
              x: a[i - 2].x,
              y: a[i - 2].y
          }, {
              x: a[i + 1].x,
              y: a[i - 2].y
          }],
          c.push(i - 1, i),
          o.hold.index = i - 2,
          o.controlPoints[i + 1].y = a[i - 2].y)),
          i <= a.length - 4 && (n ? Math.abs(a[i].x - a[i + 2].x) <= 3 && (r ? (r[1] = {
              x: a[i - 2].x,
              y: a[i + 3].y
          },
          o.controlPoints[i + 3].x = a[i - 2].x) : (r = [{
              x: a[i + 3].x,
              y: a[i].y
          }, {
              x: a[i + 3].x,
              y: a[i + 3].y
          }],
          o.controlPoints[i].x = a[i + 3].x),
          c.push(i + 1, i + 2)) : Math.abs(a[i].y - a[i + 2].y) <= 3 && (r ? (r[1] = {
              x: a[i + 3].x,
              y: a[i - 2].y
          },
          o.controlPoints[i + 3].y = a[i - 2].y) : (r = [{
              x: a[i].x,
              y: a[i + 3].y
          }, {
              x: a[i + 3].x,
              y: a[i + 3].y
          }],
          o.controlPoints[i].y = a[i + 3].y),
          c.push(i + 1, i + 2))),
          c && c.length && a.splice(c[0], c.length),
          r
      }
  }
  , function(e, t, n) {
      function r(e) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          )(e)
      }
      function o(e, t) {
          return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
              if (void 0 === e)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
          }(e) : t
      }
      function i(e) {
          return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          }
          )(e)
      }
      function a(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1,
              r.configurable = !0,
              "value"in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
      }
      function c(e, t, n) {
          return t && a(e.prototype, t),
          n && a(e, n),
          e
      }
      function u(e, t) {
          return (u = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t,
              e
          }
          )(e, t)
      }
      var s = n(27)
        , l = n(6)
        , d = function(e) {
          function t(e) {
              var n;
              !function(e, t) {
                  if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function")
              }(this, t);
              var r = (n = o(this, i(t).call(this))).getDefaultCfg();
              return n._cfg = l.mix(!0, {}, n._cfg, r, e),
              n
          }
          return function(e, t) {
              if ("function" != typeof t && null !== t)
                  throw new TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                      value: e,
                      writable: !0,
                      configurable: !0
                  }
              }),
              t && u(e, t)
          }(t, s),
          c(t, [{
              key: "getDefaultCfg",
              value: function() {
                  return {}
              }
          }]),
          c(t, [{
              key: "get",
              value: function(e) {
                  return this._cfg[e]
              }
          }, {
              key: "set",
              value: function(e, t) {
                  this._cfg[e] = t
              }
          }, {
              key: "destroy",
              value: function() {
                  this._cfg = {},
                  this.destroyed = !0
              }
          }]),
          t
      }();
      e.exports = d
  }
  , function(e, t, n) {
      function r(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n,
          e
      }
      var o = n(4);
      e.exports = function(e) {
          for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {}
                , o = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))),
              o.forEach(function(t) {
                  r(e, t, n[t])
              })
          }
          return e
      }({}, o, {
          getParallelEdges: function(e, t) {
              var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              return e.getEdges().filter(function(e) {
                  var r = e.getModel();
                  return r.target === t.id || n && r.source === t.id
              })
          },
          object2array: function(e) {
              var t = [];
              return o.each(e, function(e) {
                  t.push(e)
              }),
              t
          }
      })
  }
  , function(e, t, n) {
      function r(e) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          )(e)
      }
      function o(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1,
              r.configurable = !0,
              "value"in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
      }
      function i(e, t) {
          return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
              if (void 0 === e)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
          }(e) : t
      }
      function a(e) {
          return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          }
          )(e)
      }
      function c(e, t) {
          return (c = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t,
              e
          }
          )(e, t)
      }
      var u = n(9)
        , s = n(2)
        , l = function(e) {
          function t() {
              return function(e, t) {
                  if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function")
              }(this, t),
              i(this, a(t).apply(this, arguments))
          }
          var n, r, l;
          return function(e, t) {
              if ("function" != typeof t && null !== t)
                  throw new TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                      value: e,
                      writable: !0,
                      configurable: !0
                  }
              }),
              t && c(e, t)
          }(t, u),
          n = t,
          (r = [{
              key: "getDefaultCfg",
              value: function() {
                  return {
                      name: "",
                      render: function() {
                          return "<button>satellite</button>"
                      },
                      bindEvent: function() {
                          return []
                      }
                  }
              }
          }, {
              key: "_renderDOM",
              value: function() {
                  var e = s.createDOM(this.render(this.diagram));
                  return this.dom = e,
                  e.isSatellite = !0,
                  e
              }
          }, {
              key: "getDOM",
              value: function() {
                  return this.dom || this._renderDOM()
              }
          }, {
              key: "init",
              value: function() {
                  var e = this.getDOM()
                    , t = this.diagram.getGraph().getGraphContainer();
                  e && (e.css({
                      position: "absolute",
                      visibility: "hidden"
                  }),
                  t.appendChild(e),
                  e && this.bindEvent(e, this.diagram))
              }
          }, {
              key: "enable",
              value: function() {
                  return !0
              }
          }, {
              key: "show",
              value: function() {
                  this.getDOM().show()
              }
          }, {
              key: "hide",
              value: function() {
                  this.getDOM().hide()
              }
          }, {
              key: "isVisible",
              value: function() {
                  return "hidden" !== this.getDOM().style.visibility
              }
          }, {
              key: "destroy",
              value: function() {
                  var e = this.events;
                  e && e.forEach(function(e) {
                      e.remove()
                  })
              }
          }]) && o(n.prototype, r),
          l && o(n, l),
          t
      }();
      e.exports = l
  }
  , function(e, t, n) {
      e.exports = n(2)
  }
  , function(e, t, n) {
      var r = n(26)
        , o = n(6)
        , i = n(15);
      n(7);
      r.Editor = r,
      r.Util = o,
      r.Diagram = n(16),
      r.Page = n(1),
      r.Flow = n(95),
      r.Koni = n(102),
      r.Mind = n(107),
      r.Toolbar = n(121),
      r.Contextmenu = n(122),
      r.Command = n(15),
      r.BPMN = n(123),
      r.registerBehaviour = r.Page.registerBehaviour,
      r.registerNode = r.Page.registerNode,
      r.registerEdge = r.Page.registerEdge,
      r.registerGroup = r.Page.registerGroup,
      r.registerGuide = r.Page.registerGuide,
      r.registerCommand = i.registerCommand,
      e.exports = r
  }
  , function(e, t, n) {
      function r(e) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          )(e)
      }
      function o(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1,
              r.configurable = !0,
              "value"in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
      }
      function i(e, t) {
          return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
              if (void 0 === e)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
          }(e) : t
      }
      function a(e) {
          return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          }
          )(e)
      }
      function c(e, t) {
          return (c = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t,
              e
          }
          )(e, t)
      }
      var u = n(21)
        , s = n(6)
        , l = n(15)
        , d = function(e) {
          function t() {
              return function(e, t) {
                  if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function")
              }(this, t),
              i(this, a(t).apply(this, arguments))
          }
          var n, r, d;
          return function(e, t) {
              if ("function" != typeof t && null !== t)
                  throw new TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                      value: e,
                      writable: !0,
                      configurable: !0
                  }
              }),
              t && c(e, t)
          }(t, u),
          n = t,
          (r = [{
              key: "getDefaultCfg",
              value: function() {
                  return {
                      _components: [],
                      _command: {
                          zoomDelta: .1,
                          queue: [],
                          current: 0,
                          clipboard: []
                      }
                  }
              }
          }, {
              key: "_getComponentsBy",
              value: function(e) {
                  return this.get("_components").filter(e)
              }
          }, {
              key: "_bindCommands",
              value: function(e) {
                  var t = this;
                  s.each(e, function(e) {
                      var n = e.dataset
                        , r = n.command;
                      l[r] ? s.addEventListener(e, "click", function() {
                          t.getCurrentPage().focusGraphWrapper(),
                          t.executeCommand(r, n)
                      }) : console.warn("请设置有效的命令！")
                  })
              }
          }, {
              key: "getCommands",
              value: function() {
                  return this.get("_command").queue
              }
          }, {
              key: "getCurrentCommand",
              value: function() {
                  var e = this.get("_command");
                  return e.queue[e.current - 1]
              }
          }, {
              key: "executeCommand",
              value: function(e, t) {
                  s.isString(e) ? l.execute(e, this, t) : l.execute("common", this, {
                      method: e
                  }, t)
              }
          }, {
              key: "commandEnable",
              value: function(e) {
                  return l.enable(e, this)
              }
          }, {
              key: "setCommandDOMenable",
              value: function() {
                  var e = this
                    , t = this.getComponentsByType("toolbar")
                    , n = this.getComponentsByType("contextmenu")
                    , r = [];
                  t.forEach(function(e) {
                      s.each(e.getCommandDoms(), function(e) {
                          r.push(e)
                      })
                  }),
                  n.forEach(function(e) {
                      s.each(e.getCommandDoms(), function(e) {
                          r.push(e)
                      })
                  }),
                  s.each(r, function(t) {
                      var n = t.dataset.command;
                      l.enable(n, e) ? t.classList.remove("disable") : t.classList.add("disable")
                  })
              }
          }, {
              key: "_onPageStatusChange",
              value: function() {
                  this.setCommandDOMenable()
              }
          }, {
              key: "_afterAddContextmenu",
              value: function() {
                  this.getCurrentPage() && this.setCommandDOMenable()
              }
          }, {
              key: "_afterAddPage",
              value: function(e) {
                  var t = this;
                  this.setCommandDOMenable(),
                  e.on("statuschange", function(e) {
                      t._onPageStatusChange(e)
                  }),
                  e.on("mousedown", function() {
                      t.getComponentsByType("contextmenu").forEach(function(e) {
                          e.hide()
                      })
                  }),
                  e.on("contextmenu", function(n) {
                      var r = t.getComponentsByType("contextmenu")
                        , o = e.getGraph().getCanvas().get("el")
                        , i = s.getBoundingClientRect(o)
                        , a = {
                          x: n.x,
                          y: n.y
                      }
                        , c = n.item;
                      c && !c.isSelected && (e.clearSelected(),
                      e.setSelected(n.item, !0)),
                      t.set("contextmenuPoint", a),
                      n.domEvent.preventDefault(),
                      r.forEach(function(e) {
                          e.show(),
                          e.contextmenuPoint = a,
                          e.move(i.left + n.domX, i.top + n.domY)
                      })
                  }),
                  e.on("statuschange", function(e) {
                      t.getComponentsByType("contextmenu").forEach(function(t) {
                          t.switch(e.status)
                      })
                  }),
                  this._bindShortcut(e)
              }
          }, {
              key: "_beforeAddToolbar",
              value: function(e) {
                  var t = e.getCommandDoms();
                  this._bindCommands(t)
              }
          }, {
              key: "_beforeAddContextmenu",
              value: function(e) {
                  var t = e.getCommandDoms();
                  e.bindEvent(),
                  this._bindCommands(t)
              }
          }, {
              key: "getComponentsByType",
              value: function(e) {
                  return this._getComponentsBy(function(t) {
                      return t.type === e
                  })
              }
          }, {
              key: "getCurrentPage",
              value: function() {
                  var e, t = this.getComponentsByType("page");
                  return t.every(function(t) {
                      return !t.isActived || (e = t,
                      !1)
                  }),
                  e || (e = t[0]),
                  e
              }
          }, {
              key: "getComponents",
              value: function() {
                  return this.get("_components")
              }
          }, {
              key: "_shortcutEnable",
              value: function(e, t) {
                  for (var n = e.shortcutCodes, r = s.getKeyboradKey(t), o = !1, i = 0; i < n.length; i++) {
                      var a = n[i];
                      if (s.isArray(a)) {
                          for (var c = a.length, u = !0, l = 0; l < c - 1; l++)
                              if (!t[a[l]]) {
                                  u = !1;
                                  break
                              }
                          a[c - 1] !== r && a[c - 1] !== s.lowerFirst(r) || !u || (o = !0)
                      } else
                          a === r && (o = !0);
                      if (o)
                          break
                  }
                  return o
              }
          }, {
              key: "_bindShortcut",
              value: function(e) {
                  var t = this
                    , n = e.get("shortcut");
                  e.getGraph().on("keydown", function(e) {
                      var r = t.getComponentsByType("contextmenu")
                        , o = e.domEvent;
                      r.forEach(function(e) {
                          e.hide()
                      }),
                      o.preventDefault();
                      for (var i = l.list.filter(function(e) {
                          return e.shortcutCodes && n[e.name]
                      }), a = 0; a < i.length; a++) {
                          var c = i[a];
                          if (t._shortcutEnable(c, o))
                              return t.executeCommand(c.name),
                              !1
                      }
                  })
              }
          }, {
              key: "add",
              value: function(e) {
                  var t = this.get("_components")
                    , n = s.upperFirst(e.type);
                  e.editor = this,
                  this["_beforeAdd" + n] && this["_beforeAdd" + n](e),
                  t.push(e),
                  this["_afterAdd" + n] && this["_afterAdd" + n](e)
              }
          }, {
              key: "destroy",
              value: function() {
                  this.get("_components").forEach(function(e) {
                      e.destroy()
                  })
              }
          }]) && o(n.prototype, r),
          d && o(n, d),
          t
      }();
      e.exports = d
  }
  , function(e, t, n) {
      var r;
      /*!
* EventEmitter v5.2.6 - git.io/ee
* Unlicense - http://unlicense.org/
* Oliver Caldwell - https://oli.me.uk/
* @preserve
*/
      !function(t) {
          "use strict";
          function o() {}
          var i = o.prototype
            , a = t.EventEmitter;
          function c(e, t) {
              for (var n = e.length; n--; )
                  if (e[n].listener === t)
                      return n;
              return -1
          }
          function u(e) {
              return function() {
                  return this[e].apply(this, arguments)
              }
          }
          i.getListeners = function(e) {
              var t, n, r = this._getEvents();
              if (e instanceof RegExp)
                  for (n in t = {},
                  r)
                      r.hasOwnProperty(n) && e.test(n) && (t[n] = r[n]);
              else
                  t = r[e] || (r[e] = []);
              return t
          }
          ,
          i.flattenListeners = function(e) {
              var t, n = [];
              for (t = 0; t < e.length; t += 1)
                  n.push(e[t].listener);
              return n
          }
          ,
          i.getListenersAsObject = function(e) {
              var t, n = this.getListeners(e);
              return n instanceof Array && ((t = {})[e] = n),
              t || n
          }
          ,
          i.addListener = function(e, t) {
              if (!function e(t) {
                  return "function" == typeof t || t instanceof RegExp || !(!t || "object" != typeof t) && e(t.listener)
              }(t))
                  throw new TypeError("listener must be a function");
              var n, r = this.getListenersAsObject(e), o = "object" == typeof t;
              for (n in r)
                  r.hasOwnProperty(n) && -1 === c(r[n], t) && r[n].push(o ? t : {
                      listener: t,
                      once: !1
                  });
              return this
          }
          ,
          i.on = u("addListener"),
          i.addOnceListener = function(e, t) {
              return this.addListener(e, {
                  listener: t,
                  once: !0
              })
          }
          ,
          i.once = u("addOnceListener"),
          i.defineEvent = function(e) {
              return this.getListeners(e),
              this
          }
          ,
          i.defineEvents = function(e) {
              for (var t = 0; t < e.length; t += 1)
                  this.defineEvent(e[t]);
              return this
          }
          ,
          i.removeListener = function(e, t) {
              var n, r, o = this.getListenersAsObject(e);
              for (r in o)
                  o.hasOwnProperty(r) && -1 !== (n = c(o[r], t)) && o[r].splice(n, 1);
              return this
          }
          ,
          i.off = u("removeListener"),
          i.addListeners = function(e, t) {
              return this.manipulateListeners(!1, e, t)
          }
          ,
          i.removeListeners = function(e, t) {
              return this.manipulateListeners(!0, e, t)
          }
          ,
          i.manipulateListeners = function(e, t, n) {
              var r, o, i = e ? this.removeListener : this.addListener, a = e ? this.removeListeners : this.addListeners;
              if ("object" != typeof t || t instanceof RegExp)
                  for (r = n.length; r--; )
                      i.call(this, t, n[r]);
              else
                  for (r in t)
                      t.hasOwnProperty(r) && (o = t[r]) && ("function" == typeof o ? i.call(this, r, o) : a.call(this, r, o));
              return this
          }
          ,
          i.removeEvent = function(e) {
              var t, n = typeof e, r = this._getEvents();
              if ("string" === n)
                  delete r[e];
              else if (e instanceof RegExp)
                  for (t in r)
                      r.hasOwnProperty(t) && e.test(t) && delete r[t];
              else
                  delete this._events;
              return this
          }
          ,
          i.removeAllListeners = u("removeEvent"),
          i.emitEvent = function(e, t) {
              var n, r, o, i, a = this.getListenersAsObject(e);
              for (i in a)
                  if (a.hasOwnProperty(i))
                      for (n = a[i].slice(0),
                      o = 0; o < n.length; o++)
                          !0 === (r = n[o]).once && this.removeListener(e, r.listener),
                          r.listener.apply(this, t || []) === this._getOnceReturnValue() && this.removeListener(e, r.listener);
              return this
          }
          ,
          i.trigger = u("emitEvent"),
          i.emit = function(e) {
              var t = Array.prototype.slice.call(arguments, 1);
              return this.emitEvent(e, t)
          }
          ,
          i.setOnceReturnValue = function(e) {
              return this._onceReturnValue = e,
              this
          }
          ,
          i._getOnceReturnValue = function() {
              return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
          }
          ,
          i._getEvents = function() {
              return this._events || (this._events = {})
          }
          ,
          o.noConflict = function() {
              return t.EventEmitter = a,
              o
          }
          ,
          void 0 === (r = function() {
              return o
          }
          .call(t, n, t, e)) || (e.exports = r)
      }("undefined" != typeof window ? window : this || {})
  }
  , function(e, t, n) {
      var r = n(7).Util;
      e.exports = {
          getGroupIconPath: function() {
              return "M9.75,9.60000014 L3.75,9.60000014 C3.33578644,9.60000014 3,9.2865995 3,8.90000022 C3,8.51340093 3.33578644,8.20000029 3.75,8.20000029 L9.75,8.20000029 C10.1642136,8.20000029 10.5,8.51340093 10.5,8.90000022 C10.5,9.2865995 10.1642136,9.60000014 9.75,9.60000014 M3,11.6999999 C3,11.3134006 3.33578644,11 3.75,11 L6.75,11 C7.16421356,11 7.5,11.3134006 7.5,11.6999999 C7.5,12.0865992 7.16421356,12.3999999 6.75,12.3999999 L3.75,12.3999999 C3.33578644,12.3999999 3,12.0865992 3,11.6999999 M3.75,13.7999997 L6.75,13.7999997 C7.16421356,13.7999997 7.5,14.1134004 7.5,14.4999996 C7.5,14.8865989 7.16421356,15.1999996 6.75,15.1999996 L3.75,15.1999996 C3.33578644,15.1999996 3,14.8865989 3,14.4999996 C3,14.1134004 3.33578644,13.7999997 3.75,13.7999997 M16.4985,4.00000072 L1.5015,4.00000072 C0.674533504,3.99922416 0.00289396564,4.6232696 0,5.39510058 L0,16.6048994 C0.00289396564,17.3767304 0.674533504,18.0007758 1.5015,17.9999993 L16.4985,17.9999993 C17.3254665,18.0007758 17.997106,17.3767304 18,16.6048994 L18,5.39510058 C17.997106,4.6232696 17.3254665,3.99922416 16.4985,4.00000072M19,13.9999993 L19,3 L5,3 L5,1.39510058 C5.00289397,0.623269599 5.6745335,-0.00077583787 6.5015,7.23978642e-07 L21.4985,7.23978642e-07 C22.3254665,-0.00077583787 22.997106,0.623269599 23,1.39510058 L23,12.6048994 C22.997106,13.3767304 22.3254665,14.0007758 21.4985,13.9999993 L19,13.9999993 Z"
          },
          getCollapsedButtonPath: function() {
              return r.getRectPath(0, 0, 14, 14, 2) + "M3,7L11,7"
          },
          getExpandedButtonPath: function() {
              return r.getRectPath(0, 0, 14, 14, 2) + "M3,7L11,7M7,3L7,11"
          }
      }
  }
  , function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      t.presetPrimaryColors = t.presetPalettes = t.generate = void 0;
      var r, o = n(30), i = (r = o) && r.__esModule ? r : {
          default: r
      };
      var a = {
          red: "#F5222D",
          volcano: "#FA541C",
          orange: "#FA8C16",
          gold: "#FAAD14",
          yellow: "#FADB14",
          lime: "#A0D911",
          green: "#52C41A",
          cyan: "#13C2C2",
          blue: "#1890FF",
          geekblue: "#2F54EB",
          purple: "#722ED1",
          magenta: "#EB2F96",
          grey: "#666666"
      }
        , c = {};
      Object.keys(a).forEach(function(e) {
          c[e] = (0,
          i.default)(a[e])
      }),
      t.generate = i.default,
      t.presetPalettes = c,
      t.presetPrimaryColors = a
  }
  , function(e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      t.default = function(e) {
          for (var t = [], n = (0,
          i.default)(e), r = d; r > 0; r -= 1) {
              var o = n.toHsv()
                , a = (0,
              i.default)({
                  h: h(o, r, !0),
                  s: g(o, r, !0),
                  v: p(o, r, !0)
              }).toHexString();
              t.push(a)
          }
          t.push(n.toHexString());
          for (var c = 1; c <= f; c += 1) {
              var u = n.toHsv()
                , s = (0,
              i.default)({
                  h: h(u, c),
                  s: g(u, c),
                  v: p(u, c)
              }).toHexString();
              t.push(s)
          }
          return t
      }
      ;
      var r, o = n(31), i = (r = o) && r.__esModule ? r : {
          default: r
      };
      var a = 2
        , c = 16
        , u = 5
        , s = 5
        , l = 15
        , d = 5
        , f = 4;
      function h(e, t, n) {
          var r = void 0;
          return (r = Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n ? Math.round(e.h) - a * t : Math.round(e.h) + a * t : n ? Math.round(e.h) + a * t : Math.round(e.h) - a * t) < 0 ? r += 360 : r >= 360 && (r -= 360),
          r
      }
      function g(e, t, n) {
          if (0 === e.h && 0 === e.s)
              return e.s;
          var r = void 0;
          return (r = n ? Math.round(100 * e.s) - c * t : t === f ? Math.round(100 * e.s) + c : Math.round(100 * e.s) + u * t) > 100 && (r = 100),
          n && t === d && r > 10 && (r = 10),
          r < 6 && (r = 6),
          r
      }
      function p(e, t, n) {
          return n ? Math.round(100 * e.v) + s * t : Math.round(100 * e.v) - l * t
      }
  }
  , function(e, t, n) {
      var r;
      !function(o) {
          var i = /^\s+/
            , a = /\s+$/
            , c = 0
            , u = o.round
            , s = o.min
            , l = o.max
            , d = o.random;
          function f(e, t) {
              if (t = t || {},
              (e = e || "")instanceof f)
                  return e;
              if (!(this instanceof f))
                  return new f(e,t);
              var n = function(e) {
                  var t = {
                      r: 0,
                      g: 0,
                      b: 0
                  }
                    , n = 1
                    , r = null
                    , c = null
                    , u = null
                    , d = !1
                    , f = !1;
                  "string" == typeof e && (e = function(e) {
                      e = e.replace(i, "").replace(a, "").toLowerCase();
                      var t, n = !1;
                      if (M[e])
                          e = M[e],
                          n = !0;
                      else if ("transparent" == e)
                          return {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 0,
                              format: "name"
                          };
                      if (t = z.rgb.exec(e))
                          return {
                              r: t[1],
                              g: t[2],
                              b: t[3]
                          };
                      if (t = z.rgba.exec(e))
                          return {
                              r: t[1],
                              g: t[2],
                              b: t[3],
                              a: t[4]
                          };
                      if (t = z.hsl.exec(e))
                          return {
                              h: t[1],
                              s: t[2],
                              l: t[3]
                          };
                      if (t = z.hsla.exec(e))
                          return {
                              h: t[1],
                              s: t[2],
                              l: t[3],
                              a: t[4]
                          };
                      if (t = z.hsv.exec(e))
                          return {
                              h: t[1],
                              s: t[2],
                              v: t[3]
                          };
                      if (t = z.hsva.exec(e))
                          return {
                              h: t[1],
                              s: t[2],
                              v: t[3],
                              a: t[4]
                          };
                      if (t = z.hex8.exec(e))
                          return {
                              r: Y(t[1]),
                              g: Y(t[2]),
                              b: Y(t[3]),
                              a: T(t[4]),
                              format: n ? "name" : "hex8"
                          };
                      if (t = z.hex6.exec(e))
                          return {
                              r: Y(t[1]),
                              g: Y(t[2]),
                              b: Y(t[3]),
                              format: n ? "name" : "hex"
                          };
                      if (t = z.hex4.exec(e))
                          return {
                              r: Y(t[1] + "" + t[1]),
                              g: Y(t[2] + "" + t[2]),
                              b: Y(t[3] + "" + t[3]),
                              a: T(t[4] + "" + t[4]),
                              format: n ? "name" : "hex8"
                          };
                      if (t = z.hex3.exec(e))
                          return {
                              r: Y(t[1] + "" + t[1]),
                              g: Y(t[2] + "" + t[2]),
                              b: Y(t[3] + "" + t[3]),
                              format: n ? "name" : "hex"
                          };
                      return !1
                  }(e));
                  "object" == typeof e && (H(e.r) && H(e.g) && H(e.b) ? (h = e.r,
                  g = e.g,
                  p = e.b,
                  t = {
                      r: 255 * X(h, 255),
                      g: 255 * X(g, 255),
                      b: 255 * X(p, 255)
                  },
                  d = !0,
                  f = "%" === String(e.r).substr(-1) ? "prgb" : "rgb") : H(e.h) && H(e.s) && H(e.v) ? (r = D(e.s),
                  c = D(e.v),
                  t = function(e, t, n) {
                      e = 6 * X(e, 360),
                      t = X(t, 100),
                      n = X(n, 100);
                      var r = o.floor(e)
                        , i = e - r
                        , a = n * (1 - t)
                        , c = n * (1 - i * t)
                        , u = n * (1 - (1 - i) * t)
                        , s = r % 6;
                      return {
                          r: 255 * [n, c, a, a, u, n][s],
                          g: 255 * [u, n, n, c, a, a][s],
                          b: 255 * [a, a, u, n, n, c][s]
                      }
                  }(e.h, r, c),
                  d = !0,
                  f = "hsv") : H(e.h) && H(e.s) && H(e.l) && (r = D(e.s),
                  u = D(e.l),
                  t = function(e, t, n) {
                      var r, o, i;
                      function a(e, t, n) {
                          return n < 0 && (n += 1),
                          n > 1 && (n -= 1),
                          n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
                      }
                      if (e = X(e, 360),
                      t = X(t, 100),
                      n = X(n, 100),
                      0 === t)
                          r = o = i = n;
                      else {
                          var c = n < .5 ? n * (1 + t) : n + t - n * t
                            , u = 2 * n - c;
                          r = a(u, c, e + 1 / 3),
                          o = a(u, c, e),
                          i = a(u, c, e - 1 / 3)
                      }
                      return {
                          r: 255 * r,
                          g: 255 * o,
                          b: 255 * i
                      }
                  }(e.h, r, u),
                  d = !0,
                  f = "hsl"),
                  e.hasOwnProperty("a") && (n = e.a));
                  var h, g, p;
                  return n = j(n),
                  {
                      ok: d,
                      format: e.format || f,
                      r: s(255, l(t.r, 0)),
                      g: s(255, l(t.g, 0)),
                      b: s(255, l(t.b, 0)),
                      a: n
                  }
              }(e);
              this._originalInput = e,
              this._r = n.r,
              this._g = n.g,
              this._b = n.b,
              this._a = n.a,
              this._roundA = u(100 * this._a) / 100,
              this._format = t.format || n.format,
              this._gradientType = t.gradientType,
              this._r < 1 && (this._r = u(this._r)),
              this._g < 1 && (this._g = u(this._g)),
              this._b < 1 && (this._b = u(this._b)),
              this._ok = n.ok,
              this._tc_id = c++
          }
          function h(e, t, n) {
              e = X(e, 255),
              t = X(t, 255),
              n = X(n, 255);
              var r, o, i = l(e, t, n), a = s(e, t, n), c = (i + a) / 2;
              if (i == a)
                  r = o = 0;
              else {
                  var u = i - a;
                  switch (o = c > .5 ? u / (2 - i - a) : u / (i + a),
                  i) {
                  case e:
                      r = (t - n) / u + (t < n ? 6 : 0);
                      break;
                  case t:
                      r = (n - e) / u + 2;
                      break;
                  case n:
                      r = (e - t) / u + 4
                  }
                  r /= 6
              }
              return {
                  h: r,
                  s: o,
                  l: c
              }
          }
          function g(e, t, n) {
              e = X(e, 255),
              t = X(t, 255),
              n = X(n, 255);
              var r, o, i = l(e, t, n), a = s(e, t, n), c = i, u = i - a;
              if (o = 0 === i ? 0 : u / i,
              i == a)
                  r = 0;
              else {
                  switch (i) {
                  case e:
                      r = (t - n) / u + (t < n ? 6 : 0);
                      break;
                  case t:
                      r = (n - e) / u + 2;
                      break;
                  case n:
                      r = (e - t) / u + 4
                  }
                  r /= 6
              }
              return {
                  h: r,
                  s: o,
                  v: c
              }
          }
          function p(e, t, n, r) {
              var o = [G(u(e).toString(16)), G(u(t).toString(16)), G(u(n).toString(16))];
              return r && o[0].charAt(0) == o[0].charAt(1) && o[1].charAt(0) == o[1].charAt(1) && o[2].charAt(0) == o[2].charAt(1) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) : o.join("")
          }
          function m(e, t, n, r) {
              return [G(L(r)), G(u(e).toString(16)), G(u(t).toString(16)), G(u(n).toString(16))].join("")
          }
          function y(e, t) {
              t = 0 === t ? 0 : t || 10;
              var n = f(e).toHsl();
              return n.s -= t / 100,
              n.s = I(n.s),
              f(n)
          }
          function v(e, t) {
              t = 0 === t ? 0 : t || 10;
              var n = f(e).toHsl();
              return n.s += t / 100,
              n.s = I(n.s),
              f(n)
          }
          function b(e) {
              return f(e).desaturate(100)
          }
          function x(e, t) {
              t = 0 === t ? 0 : t || 10;
              var n = f(e).toHsl();
              return n.l += t / 100,
              n.l = I(n.l),
              f(n)
          }
          function S(e, t) {
              t = 0 === t ? 0 : t || 10;
              var n = f(e).toRgb();
              return n.r = l(0, s(255, n.r - u(-t / 100 * 255))),
              n.g = l(0, s(255, n.g - u(-t / 100 * 255))),
              n.b = l(0, s(255, n.b - u(-t / 100 * 255))),
              f(n)
          }
          function w(e, t) {
              t = 0 === t ? 0 : t || 10;
              var n = f(e).toHsl();
              return n.l -= t / 100,
              n.l = I(n.l),
              f(n)
          }
          function O(e, t) {
              var n = f(e).toHsl()
                , r = (n.h + t) % 360;
              return n.h = r < 0 ? 360 + r : r,
              f(n)
          }
          function P(e) {
              var t = f(e).toHsl();
              return t.h = (t.h + 180) % 360,
              f(t)
          }
          function _(e) {
              var t = f(e).toHsl()
                , n = t.h;
              return [f(e), f({
                  h: (n + 120) % 360,
                  s: t.s,
                  l: t.l
              }), f({
                  h: (n + 240) % 360,
                  s: t.s,
                  l: t.l
              })]
          }
          function C(e) {
              var t = f(e).toHsl()
                , n = t.h;
              return [f(e), f({
                  h: (n + 90) % 360,
                  s: t.s,
                  l: t.l
              }), f({
                  h: (n + 180) % 360,
                  s: t.s,
                  l: t.l
              }), f({
                  h: (n + 270) % 360,
                  s: t.s,
                  l: t.l
              })]
          }
          function E(e) {
              var t = f(e).toHsl()
                , n = t.h;
              return [f(e), f({
                  h: (n + 72) % 360,
                  s: t.s,
                  l: t.l
              }), f({
                  h: (n + 216) % 360,
                  s: t.s,
                  l: t.l
              })]
          }
          function k(e, t, n) {
              t = t || 6,
              n = n || 30;
              var r = f(e).toHsl()
                , o = 360 / n
                , i = [f(e)];
              for (r.h = (r.h - (o * t >> 1) + 720) % 360; --t; )
                  r.h = (r.h + o) % 360,
                  i.push(f(r));
              return i
          }
          function A(e, t) {
              t = t || 6;
              for (var n = f(e).toHsv(), r = n.h, o = n.s, i = n.v, a = [], c = 1 / t; t--; )
                  a.push(f({
                      h: r,
                      s: o,
                      v: i
                  })),
                  i = (i + c) % 1;
              return a
          }
          f.prototype = {
              isDark: function() {
                  return this.getBrightness() < 128
              },
              isLight: function() {
                  return !this.isDark()
              },
              isValid: function() {
                  return this._ok
              },
              getOriginalInput: function() {
                  return this._originalInput
              },
              getFormat: function() {
                  return this._format
              },
              getAlpha: function() {
                  return this._a
              },
              getBrightness: function() {
                  var e = this.toRgb();
                  return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3
              },
              getLuminance: function() {
                  var e, t, n, r = this.toRgb();
                  return e = r.r / 255,
                  t = r.g / 255,
                  n = r.b / 255,
                  .2126 * (e <= .03928 ? e / 12.92 : o.pow((e + .055) / 1.055, 2.4)) + .7152 * (t <= .03928 ? t / 12.92 : o.pow((t + .055) / 1.055, 2.4)) + .0722 * (n <= .03928 ? n / 12.92 : o.pow((n + .055) / 1.055, 2.4))
              },
              setAlpha: function(e) {
                  return this._a = j(e),
                  this._roundA = u(100 * this._a) / 100,
                  this
              },
              toHsv: function() {
                  var e = g(this._r, this._g, this._b);
                  return {
                      h: 360 * e.h,
                      s: e.s,
                      v: e.v,
                      a: this._a
                  }
              },
              toHsvString: function() {
                  var e = g(this._r, this._g, this._b)
                    , t = u(360 * e.h)
                    , n = u(100 * e.s)
                    , r = u(100 * e.v);
                  return 1 == this._a ? "hsv(" + t + ", " + n + "%, " + r + "%)" : "hsva(" + t + ", " + n + "%, " + r + "%, " + this._roundA + ")"
              },
              toHsl: function() {
                  var e = h(this._r, this._g, this._b);
                  return {
                      h: 360 * e.h,
                      s: e.s,
                      l: e.l,
                      a: this._a
                  }
              },
              toHslString: function() {
                  var e = h(this._r, this._g, this._b)
                    , t = u(360 * e.h)
                    , n = u(100 * e.s)
                    , r = u(100 * e.l);
                  return 1 == this._a ? "hsl(" + t + ", " + n + "%, " + r + "%)" : "hsla(" + t + ", " + n + "%, " + r + "%, " + this._roundA + ")"
              },
              toHex: function(e) {
                  return p(this._r, this._g, this._b, e)
              },
              toHexString: function(e) {
                  return "#" + this.toHex(e)
              },
              toHex8: function(e) {
                  return function(e, t, n, r, o) {
                      var i = [G(u(e).toString(16)), G(u(t).toString(16)), G(u(n).toString(16)), G(L(r))];
                      if (o && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) && i[3].charAt(0) == i[3].charAt(1))
                          return i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0);
                      return i.join("")
                  }(this._r, this._g, this._b, this._a, e)
              },
              toHex8String: function(e) {
                  return "#" + this.toHex8(e)
              },
              toRgb: function() {
                  return {
                      r: u(this._r),
                      g: u(this._g),
                      b: u(this._b),
                      a: this._a
                  }
              },
              toRgbString: function() {
                  return 1 == this._a ? "rgb(" + u(this._r) + ", " + u(this._g) + ", " + u(this._b) + ")" : "rgba(" + u(this._r) + ", " + u(this._g) + ", " + u(this._b) + ", " + this._roundA + ")"
              },
              toPercentageRgb: function() {
                  return {
                      r: u(100 * X(this._r, 255)) + "%",
                      g: u(100 * X(this._g, 255)) + "%",
                      b: u(100 * X(this._b, 255)) + "%",
                      a: this._a
                  }
              },
              toPercentageRgbString: function() {
                  return 1 == this._a ? "rgb(" + u(100 * X(this._r, 255)) + "%, " + u(100 * X(this._g, 255)) + "%, " + u(100 * X(this._b, 255)) + "%)" : "rgba(" + u(100 * X(this._r, 255)) + "%, " + u(100 * X(this._g, 255)) + "%, " + u(100 * X(this._b, 255)) + "%, " + this._roundA + ")"
              },
              toName: function() {
                  return 0 === this._a ? "transparent" : !(this._a < 1) && (B[p(this._r, this._g, this._b, !0)] || !1)
              },
              toFilter: function(e) {
                  var t = "#" + m(this._r, this._g, this._b, this._a)
                    , n = t
                    , r = this._gradientType ? "GradientType = 1, " : "";
                  if (e) {
                      var o = f(e);
                      n = "#" + m(o._r, o._g, o._b, o._a)
                  }
                  return "progid:DXImageTransform.Microsoft.gradient(" + r + "startColorstr=" + t + ",endColorstr=" + n + ")"
              },
              toString: function(e) {
                  var t = !!e;
                  e = e || this._format;
                  var n = !1
                    , r = this._a < 1 && this._a >= 0;
                  return t || !r || "hex" !== e && "hex6" !== e && "hex3" !== e && "hex4" !== e && "hex8" !== e && "name" !== e ? ("rgb" === e && (n = this.toRgbString()),
                  "prgb" === e && (n = this.toPercentageRgbString()),
                  "hex" !== e && "hex6" !== e || (n = this.toHexString()),
                  "hex3" === e && (n = this.toHexString(!0)),
                  "hex4" === e && (n = this.toHex8String(!0)),
                  "hex8" === e && (n = this.toHex8String()),
                  "name" === e && (n = this.toName()),
                  "hsl" === e && (n = this.toHslString()),
                  "hsv" === e && (n = this.toHsvString()),
                  n || this.toHexString()) : "name" === e && 0 === this._a ? this.toName() : this.toRgbString()
              },
              clone: function() {
                  return f(this.toString())
              },
              _applyModification: function(e, t) {
                  var n = e.apply(null, [this].concat([].slice.call(t)));
                  return this._r = n._r,
                  this._g = n._g,
                  this._b = n._b,
                  this.setAlpha(n._a),
                  this
              },
              lighten: function() {
                  return this._applyModification(x, arguments)
              },
              brighten: function() {
                  return this._applyModification(S, arguments)
              },
              darken: function() {
                  return this._applyModification(w, arguments)
              },
              desaturate: function() {
                  return this._applyModification(y, arguments)
              },
              saturate: function() {
                  return this._applyModification(v, arguments)
              },
              greyscale: function() {
                  return this._applyModification(b, arguments)
              },
              spin: function() {
                  return this._applyModification(O, arguments)
              },
              _applyCombination: function(e, t) {
                  return e.apply(null, [this].concat([].slice.call(t)))
              },
              analogous: function() {
                  return this._applyCombination(k, arguments)
              },
              complement: function() {
                  return this._applyCombination(P, arguments)
              },
              monochromatic: function() {
                  return this._applyCombination(A, arguments)
              },
              splitcomplement: function() {
                  return this._applyCombination(E, arguments)
              },
              triad: function() {
                  return this._applyCombination(_, arguments)
              },
              tetrad: function() {
                  return this._applyCombination(C, arguments)
              }
          },
          f.fromRatio = function(e, t) {
              if ("object" == typeof e) {
                  var n = {};
                  for (var r in e)
                      e.hasOwnProperty(r) && (n[r] = "a" === r ? e[r] : D(e[r]));
                  e = n
              }
              return f(e, t)
          }
          ,
          f.equals = function(e, t) {
              return !(!e || !t) && f(e).toRgbString() == f(t).toRgbString()
          }
          ,
          f.random = function() {
              return f.fromRatio({
                  r: d(),
                  g: d(),
                  b: d()
              })
          }
          ,
          f.mix = function(e, t, n) {
              n = 0 === n ? 0 : n || 50;
              var r = f(e).toRgb()
                , o = f(t).toRgb()
                , i = n / 100;
              return f({
                  r: (o.r - r.r) * i + r.r,
                  g: (o.g - r.g) * i + r.g,
                  b: (o.b - r.b) * i + r.b,
                  a: (o.a - r.a) * i + r.a
              })
          }
          ,
          f.readability = function(e, t) {
              var n = f(e)
                , r = f(t);
              return (o.max(n.getLuminance(), r.getLuminance()) + .05) / (o.min(n.getLuminance(), r.getLuminance()) + .05)
          }
          ,
          f.isReadable = function(e, t, n) {
              var r, o, i = f.readability(e, t);
              switch (o = !1,
              (r = function(e) {
                  var t, n;
                  t = ((e = e || {
                      level: "AA",
                      size: "small"
                  }).level || "AA").toUpperCase(),
                  n = (e.size || "small").toLowerCase(),
                  "AA" !== t && "AAA" !== t && (t = "AA");
                  "small" !== n && "large" !== n && (n = "small");
                  return {
                      level: t,
                      size: n
                  }
              }(n)).level + r.size) {
              case "AAsmall":
              case "AAAlarge":
                  o = i >= 4.5;
                  break;
              case "AAlarge":
                  o = i >= 3;
                  break;
              case "AAAsmall":
                  o = i >= 7
              }
              return o
          }
          ,
          f.mostReadable = function(e, t, n) {
              var r, o, i, a, c = null, u = 0;
              o = (n = n || {}).includeFallbackColors,
              i = n.level,
              a = n.size;
              for (var s = 0; s < t.length; s++)
                  (r = f.readability(e, t[s])) > u && (u = r,
                  c = f(t[s]));
              return f.isReadable(e, c, {
                  level: i,
                  size: a
              }) || !o ? c : (n.includeFallbackColors = !1,
              f.mostReadable(e, ["#fff", "#000"], n))
          }
          ;
          var M = f.names = {
              aliceblue: "f0f8ff",
              antiquewhite: "faebd7",
              aqua: "0ff",
              aquamarine: "7fffd4",
              azure: "f0ffff",
              beige: "f5f5dc",
              bisque: "ffe4c4",
              black: "000",
              blanchedalmond: "ffebcd",
              blue: "00f",
              blueviolet: "8a2be2",
              brown: "a52a2a",
              burlywood: "deb887",
              burntsienna: "ea7e5d",
              cadetblue: "5f9ea0",
              chartreuse: "7fff00",
              chocolate: "d2691e",
              coral: "ff7f50",
              cornflowerblue: "6495ed",
              cornsilk: "fff8dc",
              crimson: "dc143c",
              cyan: "0ff",
              darkblue: "00008b",
              darkcyan: "008b8b",
              darkgoldenrod: "b8860b",
              darkgray: "a9a9a9",
              darkgreen: "006400",
              darkgrey: "a9a9a9",
              darkkhaki: "bdb76b",
              darkmagenta: "8b008b",
              darkolivegreen: "556b2f",
              darkorange: "ff8c00",
              darkorchid: "9932cc",
              darkred: "8b0000",
              darksalmon: "e9967a",
              darkseagreen: "8fbc8f",
              darkslateblue: "483d8b",
              darkslategray: "2f4f4f",
              darkslategrey: "2f4f4f",
              darkturquoise: "00ced1",
              darkviolet: "9400d3",
              deeppink: "ff1493",
              deepskyblue: "00bfff",
              dimgray: "696969",
              dimgrey: "696969",
              dodgerblue: "1e90ff",
              firebrick: "b22222",
              floralwhite: "fffaf0",
              forestgreen: "228b22",
              fuchsia: "f0f",
              gainsboro: "dcdcdc",
              ghostwhite: "f8f8ff",
              gold: "ffd700",
              goldenrod: "daa520",
              gray: "808080",
              green: "008000",
              greenyellow: "adff2f",
              grey: "808080",
              honeydew: "f0fff0",
              hotpink: "ff69b4",
              indianred: "cd5c5c",
              indigo: "4b0082",
              ivory: "fffff0",
              khaki: "f0e68c",
              lavender: "e6e6fa",
              lavenderblush: "fff0f5",
              lawngreen: "7cfc00",
              lemonchiffon: "fffacd",
              lightblue: "add8e6",
              lightcoral: "f08080",
              lightcyan: "e0ffff",
              lightgoldenrodyellow: "fafad2",
              lightgray: "d3d3d3",
              lightgreen: "90ee90",
              lightgrey: "d3d3d3",
              lightpink: "ffb6c1",
              lightsalmon: "ffa07a",
              lightseagreen: "20b2aa",
              lightskyblue: "87cefa",
              lightslategray: "789",
              lightslategrey: "789",
              lightsteelblue: "b0c4de",
              lightyellow: "ffffe0",
              lime: "0f0",
              limegreen: "32cd32",
              linen: "faf0e6",
              magenta: "f0f",
              maroon: "800000",
              mediumaquamarine: "66cdaa",
              mediumblue: "0000cd",
              mediumorchid: "ba55d3",
              mediumpurple: "9370db",
              mediumseagreen: "3cb371",
              mediumslateblue: "7b68ee",
              mediumspringgreen: "00fa9a",
              mediumturquoise: "48d1cc",
              mediumvioletred: "c71585",
              midnightblue: "191970",
              mintcream: "f5fffa",
              mistyrose: "ffe4e1",
              moccasin: "ffe4b5",
              navajowhite: "ffdead",
              navy: "000080",
              oldlace: "fdf5e6",
              olive: "808000",
              olivedrab: "6b8e23",
              orange: "ffa500",
              orangered: "ff4500",
              orchid: "da70d6",
              palegoldenrod: "eee8aa",
              palegreen: "98fb98",
              paleturquoise: "afeeee",
              palevioletred: "db7093",
              papayawhip: "ffefd5",
              peachpuff: "ffdab9",
              peru: "cd853f",
              pink: "ffc0cb",
              plum: "dda0dd",
              powderblue: "b0e0e6",
              purple: "800080",
              rebeccapurple: "663399",
              red: "f00",
              rosybrown: "bc8f8f",
              royalblue: "4169e1",
              saddlebrown: "8b4513",
              salmon: "fa8072",
              sandybrown: "f4a460",
              seagreen: "2e8b57",
              seashell: "fff5ee",
              sienna: "a0522d",
              silver: "c0c0c0",
              skyblue: "87ceeb",
              slateblue: "6a5acd",
              slategray: "708090",
              slategrey: "708090",
              snow: "fffafa",
              springgreen: "00ff7f",
              steelblue: "4682b4",
              tan: "d2b48c",
              teal: "008080",
              thistle: "d8bfd8",
              tomato: "ff6347",
              turquoise: "40e0d0",
              violet: "ee82ee",
              wheat: "f5deb3",
              white: "fff",
              whitesmoke: "f5f5f5",
              yellow: "ff0",
              yellowgreen: "9acd32"
          }
            , B = f.hexNames = function(e) {
              var t = {};
              for (var n in e)
                  e.hasOwnProperty(n) && (t[e[n]] = n);
              return t
          }(M);
          function j(e) {
              return e = parseFloat(e),
              (isNaN(e) || e < 0 || e > 1) && (e = 1),
              e
          }
          function X(e, t) {
              (function(e) {
                  return "string" == typeof e && -1 != e.indexOf(".") && 1 === parseFloat(e)
              }
              )(e) && (e = "100%");
              var n = function(e) {
                  return "string" == typeof e && -1 != e.indexOf("%")
              }(e);
              return e = s(t, l(0, parseFloat(e))),
              n && (e = parseInt(e * t, 10) / 100),
              o.abs(e - t) < 1e-6 ? 1 : e % t / parseFloat(t)
          }
          function I(e) {
              return s(1, l(0, e))
          }
          function Y(e) {
              return parseInt(e, 16)
          }
          function G(e) {
              return 1 == e.length ? "0" + e : "" + e
          }
          function D(e) {
              return e <= 1 && (e = 100 * e + "%"),
              e
          }
          function L(e) {
              return o.round(255 * parseFloat(e)).toString(16)
          }
          function T(e) {
              return Y(e) / 255
          }
          var N, F, R, z = (F = "[\\s|\\(]+(" + (N = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)") + ")[,|\\s]+(" + N + ")[,|\\s]+(" + N + ")\\s*\\)?",
          R = "[\\s|\\(]+(" + N + ")[,|\\s]+(" + N + ")[,|\\s]+(" + N + ")[,|\\s]+(" + N + ")\\s*\\)?",
          {
              CSS_UNIT: new RegExp(N),
              rgb: new RegExp("rgb" + F),
              rgba: new RegExp("rgba" + R),
              hsl: new RegExp("hsl" + F),
              hsla: new RegExp("hsla" + R),
              hsv: new RegExp("hsv" + F),
              hsva: new RegExp("hsva" + R),
              hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
              hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
              hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
              hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
          });
          function H(e) {
              return !!z.CSS_UNIT.exec(e)
          }
          e.exports ? e.exports = f : void 0 === (r = function() {
              return f
          }
          .call(t, n, t, e)) || (e.exports = r)
      }(Math)
  }
  , function(e, t, n) {
      var r = n(18);
      function o(e) {
          var t = e.getCurrentPage();
          this.matrixCache = t.getMatrix().slice(0),
          this._zoom(e),
          t.updateStatus()
      }
      function i(e) {
          e.getCurrentPage().updateMatrix(this.matrixCache)
      }
      r.registerCommand("zoomTo", {
          _zoom: function(e) {
              e.getCurrentPage().zoom(Number(this.zoom))
          },
          queue: !1,
          execute: o,
          back: i
      }),
      r.registerCommand("zoomIn", {
          enable: function(e) {
              var t = e.getCurrentPage()
                , n = t.getMaxZoom()
                , r = t.getMinZoom()
                , o = t.getZoom();
              return o < n || o === r
          },
          _zoom: function(e) {
              var t = e.getCurrentPage()
                , n = e.get("_command")
                , r = t.getZoom()
                , o = t.getMaxZoom()
                , i = r + n.zoomDelta;
              i >= o && (i = o),
              t.zoom(i)
          },
          queue: !1,
          execute: o,
          back: i,
          shortcutCodes: [["metaKey", "="], ["ctrlKey", "="]]
      }),
      r.registerCommand("zoomOut", {
          enable: function(e) {
              var t = e.getCurrentPage()
                , n = t.getMaxZoom()
                , r = t.getMinZoom()
                , o = t.getZoom();
              return o > r || o === n
          },
          _zoom: function(e) {
              var t = e.getCurrentPage()
                , n = t.getZoom()
                , r = t.getMinZoom()
                , o = n - e.get("_command").zoomDelta;
              o <= r && (o = r),
              t.zoom(o)
          },
          queue: !1,
          execute: o,
          back: i,
          shortcutCodes: [["metaKey", "-"], ["ctrlKey", "-"]]
      }),
      r.registerCommand("autoZoom", {
          enable: function() {
              return !0
          },
          _zoom: function(e) {
              e.getCurrentPage().autoZoom()
          },
          queue: !1,
          execute: o,
          back: i
      }),
      r.registerCommand("resetZoom", {
          enable: function() {
              return !0
          },
          _zoom: function(e) {
              e.getCurrentPage().resetZoom()
          },
          queue: !1,
          execute: o,
          back: i,
          shortcutCodes: [["metaKey", "0"], ["ctrlKey", "0"]]
      })
  }
  , function(e, t, n) {
      var r = n(18);
      r.registerCommand("collapseExpand", {
          getItem: function(e) {
              var t = e.getCurrentPage()
                , n = t.getGraph();
              return this.itemId ? n.find(this.itemId) : t.getSelected()[0]
          },
          enable: function(e) {
              var t = this.getItem(e);
              return t && !1 !== t.collapseExpand && t.getChildren().length > 0
          },
          execute: function(e) {
              var t = e.getCurrentPage()
                , n = t.getGraph()
                , r = this.getItem(e);
              r.getModel().collapsed ? (n.update(r, {
                  collapsed: !1
              }),
              r.getInnerEdges && r.getInnerEdges().forEach(function(e) {
                  e.update()
              }),
              this.toCollapsed = !1) : (n.update(r, {
                  collapsed: !0
              }),
              this.toCollapsed = !0),
              t.clearSelected(),
              t.setSelected(r, !0),
              1 === this.executeTimes && (this.itemId = r.id)
          },
          back: function(e) {
              var t = e.getCurrentPage()
                , n = t.getGraph()
                , r = this.getItem(e);
              this.toCollapsed ? n.update(r, {
                  collapsed: !1
              }) : n.update(r, {
                  collapsed: !0
              }),
              t.clearSelected(),
              t.setSelected(r, !0)
          },
          shortcutCodes: [["metaKey", "/"], ["ctrlKey", "/"]]
      }),
      r.registerCommand("collapse", {
          enable: function(e) {
              var t = this.getItem(e);
              return t && !1 !== t.collapseExpand && t.getChildren().length > 0 && !t.getModel().collapsed
          }
      }, "collapseExpand"),
      r.registerCommand("expand", {
          enable: function(e) {
              var t = this.getItem(e);
              return t && !1 !== t.collapseExpand && t.getChildren().length > 0 && t.getModel().collapsed
          }
      }, "collapseExpand")
  }
  , function(e, t, n) {
      function r(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n,
          e
      }
      var o = n(4)
        , i = {
          INIT: "_initGraph"
      };
      i.AUGMENT = {
          _initGraph: function() {
              var e = this.get("graph")
                , t = new (this.get("graphConstructor"))(function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {}
                        , o = Object.keys(n);
                      "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                          return Object.getOwnPropertyDescriptor(n, e).enumerable
                      }))),
                      o.forEach(function(t) {
                          r(e, t, n[t])
                      })
                  }
                  return e
              }({
                  page: this
              }, e));
              t.draw(),
              this.set("_graph", t)
          },
          changeMode: function(e) {
              this.get("_graph").changeMode(e)
          },
          updateMatrix: function(e) {
              this.get("_graph").updateMatrix(e)
          },
          getMode: function() {
              return this.get("_graph").get("mode")
          },
          getMatrix: function() {
              return this.get("_graph").getMatrix()
          },
          getZoom: function() {
              return this.get("_graph").getMatrix()[0]
          },
          getMaxZoom: function() {
              return this.get("_graph").get("maxZoom")
          },
          getMinZoom: function() {
              return this.get("_graph").get("minZoom")
          },
          getGraph: function() {
              return this.get("_graph")
          },
          getItems: function() {
              return this.get("_graph").getItems()
          },
          getNodes: function() {
              return this.get("_graph").getNodes()
          },
          translate: function(e, t) {
              return this.get("_graph").translate(e, t)
          },
          getEdges: function() {
              return this.get("_graph").getEdges()
          },
          getGroups: function() {
              return this.get("_graph").getGroups()
          },
          render: function() {
              return this.get("_graph").render(),
              this
          },
          add: function(e, t) {
              return this.get("_graph").add(e, t),
              this
          },
          focusPointByDom: function(e) {
              return this.get("_graph").focusPointByDom(e),
              this
          },
          focusPoint: function(e) {
              return this.get("_graph").focusPoint(e),
              this
          },
          find: function(e) {
              return this.get("_graph").find(e)
          },
          focus: function(e) {
              var t = this.get("_graph")
                , n = t.find(e);
              if (n) {
                  var r = n.getCenter();
                  t.focusPoint(r)
              }
              return this
          },
          save: function() {
              return this.get("_graph").save()
          },
          read: function(e) {
              this.get("_graph").read(e)
          },
          clear: function() {
              this.get("_graph").clear()
          },
          remove: function(e) {
              return this.get("_graph").remove(e),
              this
          },
          update: function(e, t) {
              return this.get("_graph").update(e, t),
              this
          },
          zoom: function(e, t) {
              return this.get("_graph").zoom(e, t),
              this
          },
          getDomPoint: function(e) {
              return this.get("_graph").getDomPoint(e)
          },
          getPoint: function(e) {
              return this.get("_graph").getPoint(e)
          },
          zoomByDom: function(e, t) {
              var n = this.get("_graph")
                , r = n.getPoint(e);
              return n.zoom(r, t),
              this
          },
          autoZoom: function() {
              return this.get("_graph").autoZoom(),
              this
          },
          resetZoom: function() {
              var e = this.get("_graph")
                , t = e.getWidth()
                , n = e.getHeight();
              return e.zoomByDom({
                  x: t / 2,
                  y: n / 2
              }, 1),
              this
          },
          css: function(e) {
              var t = this.get("_graph").getMouseEventWrapper();
              o.modifyCSS(t, e)
          },
          setCapture: function(e) {
              this.get("_graph").getRootGroup().set("capture", e)
          },
          destroy: function() {
              this.get("_graph").destroy()
          },
          delete: function() {
              var e = this.getSelected()
                , t = this.get("_graph");
              o.each(e, function(e) {
                  t.remove(e)
              })
          }
      },
      e.exports = i
  }
  , function(e, t, n) {
      function r(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n,
          e
      }
      var o = n(36)
        , i = n(4)
        , a = {
          CFG: {
              grid: void 0
          },
          INIT: "_initGrid"
      };
      a.AUGMENT = {
          _initGrid: function() {
              var e = this.get("grid")
                , t = this.get("_graph");
              if (e) {
                  var n = new o(function(e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {}
                            , o = Object.keys(n);
                          "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                              return Object.getOwnPropertyDescriptor(n, e).enumerable
                          }))),
                          o.forEach(function(t) {
                              r(e, t, n[t])
                          })
                      }
                      return e
                  }({
                      page: this,
                      graph: t
                  }, e));
                  this.setController("grid", n)
              }
          },
          showGrid: function(e) {
              var t = this.get("_graph")
                , n = this.getController("grid");
              n || (e ? i.isObject(e) && this.set("grid", e) : this.set("grid", !0),
              this._initGrid()),
              (n = this.getController("grid")).show(),
              t.draw()
          },
          hideGrid: function() {
              var e = this.get("_graph")
                , t = this.getController("grid");
              t && t.hide(),
              e.draw()
          },
          getGridCell: function() {
              return this.getController("grid").getCell()
          }
      },
      e.exports = a
  }
  , function(e, t, n) {
      function r(e) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          )(e)
      }
      function o(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1,
              r.configurable = !0,
              "value"in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
      }
      function i(e, t) {
          return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
              if (void 0 === e)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
          }(e) : t
      }
      function a(e) {
          return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          }
          )(e)
      }
      function c(e, t) {
          return (c = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t,
              e
          }
          )(e, t)
      }
      var u = n(9)
        , s = n(14)
        , l = n(4)
        , d = function(e) {
          function t() {
              return function(e, t) {
                  if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function")
              }(this, t),
              i(this, a(t).apply(this, arguments))
          }
          var n, r, d;
          return function(e, t) {
              if ("function" != typeof t && null !== t)
                  throw new TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                      value: e,
                      writable: !0,
                      configurable: !0
                  }
              }),
              t && c(e, t)
          }(t, u),
          n = t,
          (r = [{
              key: "getDefaultCfg",
              value: function() {
                  return {
                      cell: 16,
                      line: s.gridStyle,
                      type: "point",
                      visible: !0
                  }
              }
          }, {
              key: "init",
              value: function() {
                  this._draw(),
                  this._onViewPortChange(),
                  !this.visible && this.hide()
              }
          }, {
              key: "_onViewPortChange",
              value: function() {
                  var e = this
                    , t = this.graph;
                  t.on("afterviewportchange", function() {
                      e.update()
                  }),
                  t.on("beforechangesize", function() {
                      e.update()
                  })
              }
          }, {
              key: "_draw",
              value: function() {
                  var e = this.graph
                    , t = this._getPath()
                    , n = e.getRootGroup()
                    , r = l.mix({}, this.line)
                    , o = e.getMatrix()
                    , i = this.type
                    , a = "line" === i ? 1 / o[0] : 2 / o[0];
                  "point" === i && (r.lineDash = null),
                  r.lineWidth = a,
                  r.path = t;
                  var c = n.addShape("path", {
                      attrs: r,
                      capture: !1,
                      zIndex: 0
                  });
                  l.toBack(c, n),
                  this.gridEl = c
              }
          }, {
              key: "show",
              value: function() {
                  this.gridEl.show(),
                  this.visible = !0
              }
          }, {
              key: "hide",
              value: function() {
                  this.gridEl.hide(),
                  this.visible = !1
              }
          }, {
              key: "_getLinePath",
              value: function() {
                  for (var e = this.graph, t = e.get("width"), n = e.get("height"), r = e.getPoint({
                      x: 0,
                      y: 0
                  }), o = e.getPoint({
                      x: t,
                      y: n
                  }), i = this.cell, a = Math.ceil(r.x / i) * i, c = Math.ceil(r.y / i) * i, u = [], s = 0; s <= o.x - r.x; s += i) {
                      var l = a + s;
                      u.push(["M", l, r.y]),
                      u.push(["L", l, o.y])
                  }
                  for (var d = 0; d <= o.y - r.y; d += i) {
                      var f = c + d;
                      u.push(["M", r.x, f]),
                      u.push(["L", o.x, f])
                  }
                  return u
              }
          }, {
              key: "_getPointPath",
              value: function() {
                  for (var e = this.graph, t = e.get("width"), n = e.get("height"), r = e.getPoint({
                      x: 0,
                      y: 0
                  }), o = 2 / e.getMatrix()[0], i = e.getPoint({
                      x: t,
                      y: n
                  }), a = this.getCell(), c = Math.ceil(r.x / a) * a, u = Math.ceil(r.y / a) * a, s = [], l = 0; l <= i.x - r.x; l += a)
                      for (var d = c + l, f = 0; f <= i.y - r.y; f += a) {
                          var h = u + f;
                          s.push(["M", d, h]),
                          s.push(["L", d + o, h])
                      }
                  return s
              }
          }, {
              key: "getCell",
              value: function() {
                  var e = this.cell
                    , t = this.graph.getMatrix()[0];
                  return e * t < 9.6 ? 9.6 / t : e
              }
          }, {
              key: "_getPath",
              value: function() {
                  var e = this.type;
                  return this["_get" + l.upperFirst(e) + "Path"]()
              }
          }, {
              key: "update",
              value: function(e) {
                  l.mix(this, e);
                  var t = this._getPath()
                    , n = this.gridEl
                    , r = this.graph.getMatrix()
                    , o = "line" === this.type ? 1 / r[0] : 2 / r[0];
                  n.attr("lineWidth", o),
                  n.attr("path", t)
              }
          }, {
              key: "destroy",
              value: function() {
                  var e = this.gridEl;
                  e && e.remove()
              }
          }]) && o(n.prototype, r),
          d && o(n, d),
          t
      }();
      e.exports = d
  }
  , function(e, t) {
      var n = {};
      function r(e, t, n) {
          e.on(n, function(e) {
              t.emit(n, e)
          }),
          e.on("node:" + n, function(e) {
              t.emit("node:" + n, e)
          }),
          e.on("edge:" + n, function(e) {
              t.emit("edge:" + n, e)
          }),
          e.on("group:" + n, function(e) {
              t.emit("group:" + n, e)
          }),
          e.on("anchor:" + n, function(e) {
              t.emit("anchor:" + n, e)
          })
      }
      n.INIT = "_initEvent",
      n.AUGMENT = {
          _initEvent: function() {
              var e = this
                , t = this.get("_graph");
              r(t, this, "click"),
              r(t, this, "dblclick"),
              r(t, this, "mouseenter"),
              r(t, this, "mouseleave"),
              r(t, this, "mousedown"),
              r(t, this, "mouseup"),
              r(t, this, "contextmenu"),
              t.on("keydown", function(t) {
                  e.emit("keydown", t)
              }),
              t.on("keyup", function(t) {
                  e.emit("keyup", t)
              }),
              t.on("beforechange", function(t) {
                  e.emit("beforechange", t)
              }),
              t.on("afterchange", function(t) {
                  e.emit("afterchange", t)
              }),
              t.on("afterviewportchange", function(t) {
                  e.emit("afterviewportchange", t),
                  t.updateMatrix[0] !== t.originMatrix[0] && e.emit("afterzoom", t)
              }),
              t.on("beforeviewportchange", function(t) {
                  e.emit("beforeviewportchange", t),
                  t.updateMatrix[0] !== t.originMatrix[0] && e.emit("beforezoom", t)
              })
          }
      },
      e.exports = n
  }
  , function(e, t, n) {
      var r = n(4)
        , o = {
          CFG: {
              selectable: !0,
              multiSelectable: !0,
              _selectedCache: {}
          },
          INIT: "_initSelected"
      };
      o.AUGMENT = {
          _initSelected: function() {
              var e = this
                , t = this.get("_graph");
              t.on("afteritemdraw", function(t) {
                  var n = t.item;
                  n.isSelected && e.setItemSelected(n)
              }),
              t.on("beforeitemdestroy", function(t) {
                  e.clearItemSelected(t.item)
              })
          },
          setItemSelected: function(e) {
              var t = this.get("_graph").getShapeObj(e).getSelectedStyle(e)
                , n = e.getKeyShape();
              this.get("_selectedCache")[e.id] = e,
              t && n.attr(t),
              e.isEdge && (e.startArrow && e.startArrow.attr({
                  fill: t.stroke
              }),
              e.endArrow && e.endArrow.attr({
                  fill: t.stroke
              }))
          },
          clearItemSelected: function(e) {
              var t = this.get("_graph")
                , n = e.getKeyShape()
                , o = t.getShapeObj(e)
                , i = o.getStyle(e)
                , a = o.getSelectedStyle(e)
                , c = this.get("_selectedCache")
                , u = r.getContrast(i, a);
              n.attr(u),
              e.isEdge && (e.startArrow && e.startArrow.attr({
                  fill: u.stroke
              }),
              e.endArrow && e.endArrow.attr({
                  fill: u.stroke
              })),
              delete c[e.id]
          },
          setSelected: function(e, t) {
              var n, o = this, i = this.get("selectable"), a = this.get("_graph");
              i && (n = r.isArray(e) ? e : [e],
              r.each(n, function(e) {
                  r.isString(e) && (e = a.find(e)),
                  e && !e.destroyed && (t ? (o.emit("beforeitemselected", {
                      item: e
                  }),
                  o.setItemSelected(e),
                  o.emit("afteritemselected", {
                      item: e
                  })) : (o.emit("beforeitemunselected", {
                      item: e
                  }),
                  o.clearItemSelected(e),
                  o.emit("afteritemunselected", {
                      item: e
                  })),
                  e.isSelected = t,
                  o.updateStatus(),
                  a.draw())
              }))
          },
          getSelected: function() {
              var e = this.get("_selectedCache");
              return r.objectToValues(e)
          },
          clearSelected: function() {
              var e = this
                , t = this.get("_graph")
                , n = this.get("_selectedCache");
              r.each(n, function(t) {
                  t.isSelected && e.setSelected(t, !1)
              }),
              t.draw()
          }
      },
      e.exports = o
  }
  , function(e, t, n) {
      var r = n(4)
        , o = {
          CFG: {
              activeable: !0,
              _activedCache: {}
          },
          INIT: "_initActived"
      };
      o.AUGMENT = {
          _initActived: function() {
              var e = this
                , t = this.get("_graph");
              t.on("afteritemdraw", function(t) {
                  var n = t.item;
                  n.isActived && e.setItemActived(n)
              }),
              t.on("beforeitemdestroy", function(t) {
                  e.clearItemActived(t.item)
              })
          },
          setItemActived: function(e) {
              var t = this.get("_graph").getShapeObj(e)
                , n = this.get("_activedCache")
                , r = t.getActivedStyle(e)
                , o = e.getKeyShape();
              n[e.id] = e,
              r && o.attr(r),
              e.isEdge && (e.startArrow && e.startArrow.attr({
                  fill: r.stroke
              }),
              e.endArrow && e.endArrow.attr({
                  fill: r.stroke
              }))
          },
          clearItemActived: function(e) {
              var t = this.get("_graph")
                , n = e.getKeyShape()
                , o = t.getShapeObj(e)
                , i = o.getStyle(e)
                , a = this.get("_activedCache")
                , c = o.getActivedStyle(e)
                , u = r.getContrast(i, c);
              n.attr(u),
              e.isEdge && (e.startArrow && e.startArrow.attr({
                  fill: u.stroke
              }),
              e.endArrow && e.endArrow.attr({
                  fill: u.stroke
              })),
              delete a[e.id]
          },
          setActived: function(e, t) {
              var n, o = this, i = this.get("activeable"), a = this.get("_graph");
              i && (n = r.isArray(e) ? e : [e],
              r.each(n, function(e) {
                  r.isString(e) && (e = a.find(e)),
                  e && !e.destroyed && (t ? (o.emit("beforeitemactived", {
                      item: e
                  }),
                  o.setItemActived(e),
                  o.emit("afteritemactived", {
                      item: e
                  })) : (o.emit("beforeitemunactived", {
                      item: e
                  }),
                  o.clearItemActived(e),
                  o.emit("afteritemunactived", {
                      item: e
                  })),
                  e.isActived = t)
              }),
              a.draw())
          },
          getActived: function() {
              var e = this.get("_activedCache");
              return r.objectToValues(e)
          },
          clearActived: function() {
              var e = this
                , t = this.get("_graph")
                , n = this.get("_activedCache");
              r.each(n, function(t) {
                  t.isActived && e.setActived(t, !1)
              }),
              t.draw()
          }
      },
      e.exports = o
  }
  , function(e, t, n) {
      function r(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n,
          e
      }
      var o = n(41)
        , i = {
          CFG: {
              align: {}
          },
          INIT: "_initAlign"
      };
      i.AUGMENT = {
          _initAlign: function() {
              var e = this.get("align")
                , t = this.get("_graph")
                , n = new o(function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {}
                        , o = Object.keys(n);
                      "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                          return Object.getOwnPropertyDescriptor(n, e).enumerable
                      }))),
                      o.forEach(function(t) {
                          r(e, t, n[t])
                      })
                  }
                  return e
              }({
                  flow: this,
                  graph: t
              }, e));
              this.setController("align", n)
          },
          align: function(e, t, n) {
              return this.getController("align").align(e, t, n)
          },
          clearAlignLine: function() {
              return this.getController("align").clearAlignLine()
          }
      },
      e.exports = i
  }
  , function(e, t, n) {
      function r(e) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          )(e)
      }
      function o(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1,
              r.configurable = !0,
              "value"in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
      }
      function i(e, t) {
          return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
              if (void 0 === e)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
          }(e) : t
      }
      function a(e) {
          return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          }
          )(e)
      }
      function c(e, t) {
          return (c = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t,
              e
          }
          )(e, t)
      }
      var u = n(9)
        , s = n(14)
        , l = n(4);
      function d(e, t) {
          return {
              line: e,
              point: t,
              dis: l.pointLineDistance(e[0], e[1], e[2], e[3], t.x, t.y)
          }
      }
      var f = function(e) {
          function t() {
              return function(e, t) {
                  if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function")
              }(this, t),
              i(this, a(t).apply(this, arguments))
          }
          var n, r, f;
          return function(e, t) {
              if ("function" != typeof t && null !== t)
                  throw new TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                      value: e,
                      writable: !0,
                      configurable: !0
                  }
              }),
              t && c(e, t)
          }(t, u),
          n = t,
          (r = [{
              key: "getDefaultCfg",
              value: function() {
                  return {
                      line: s.alignLineStyle,
                      item: !0,
                      grid: !1,
                      tolerance: 5,
                      _horizontalLines: {},
                      _verticalLines: {},
                      _alignLines: []
                  }
              }
          }, {
              key: "init",
              value: function() {
                  this.item && this._cacheBoxLine()
              }
          }, {
              key: "_cacheBoxLine",
              value: function() {
                  var e = this.graph
                    , t = this._horizontalLines
                    , n = this._verticalLines
                    , r = this.item;
                  e.on("afteritemdraw", function(e) {
                      var o = e.item;
                      if (!l.isEdge(o)) {
                          var i = o.getBBox();
                          !0 === r || "horizontal" === r ? (t[o.id + "tltr"] = [i.minX, i.minY, i.maxX, i.minY, o],
                          t[o.id + "lcrc"] = [i.minX, i.centerY, i.maxX, i.centerY, o],
                          t[o.id + "blbr"] = [i.minX, i.maxY, i.maxX, i.maxY, o]) : "center" === r && (t[o.id + "lcrc"] = [i.minX, i.centerY, i.maxX, i.centerY, o]),
                          !0 === r || "vertical" === r ? (n[o.id + "tlbl"] = [i.minX, i.minY, i.minX, i.maxY, o],
                          n[o.id + "tcbc"] = [i.centerX, i.minY, i.centerX, i.maxY, o],
                          n[o.id + "trbr"] = [i.maxX, i.minY, i.maxX, i.maxY, o]) : "center" === r && (n[o.id + "tcbc"] = [i.centerX, i.minY, i.centerX, i.maxY, o])
                      }
                  }),
                  e.on("beforeitemdestroy", function(e) {
                      var r = e.item;
                      delete t[r.id + "tltr"],
                      delete t[r.id + "lcrc"],
                      delete t[r.id + "blbr"],
                      delete n[r.id + "tlbl"],
                      delete n[r.id + "tcbc"],
                      delete n[r.id + "trbr"]
                  })
              }
          }, {
              key: "align",
              value: function(e, t) {
                  var n = l.mix({}, e)
                    , r = this.flow.getController("grid");
                  return this.grid && r && r.visible && this._gridAlign(e, t),
                  this.item && this._itemAlign(e, t, n),
                  e
              }
          }, {
              key: "_gridAlign",
              value: function(e, t) {
                  var n = this.flow
                    , r = this.grid
                    , o = n.getGridCell();
                  if ("cc" === r) {
                      var i = Math.round((e.x + t.width / 2) / o) * o
                        , a = Math.round((e.y + t.height / 2) / o) * o;
                      e.x = i - t.width / 2,
                      e.y = a - t.height / 2
                  } else
                      e.x = Math.round(e.x / o) * o,
                      e.y = Math.round(e.y / o) * o
              }
          }, {
              key: "_itemAlign",
              value: function(e, t, n) {
                  var r = this._horizontalLines
                    , o = this._verticalLines
                    , i = this.tolerance
                    , a = {
                      x: n.x + t.width / 2,
                      y: n.y
                  }
                    , c = {
                      x: n.x + t.width / 2,
                      y: n.y + t.height / 2
                  }
                    , u = {
                      x: n.x + t.width / 2,
                      y: n.y + t.height
                  }
                    , s = {
                      x: n.x,
                      y: n.y + t.height / 2
                  }
                    , f = {
                      x: n.x + t.width,
                      y: n.y + t.height / 2
                  }
                    , h = []
                    , g = []
                    , p = null;
                  if (this.clearAlignLine(),
                  l.each(r, function(e) {
                      e[4].isVisible() && (h.push(d(e, a)),
                      h.push(d(e, c)),
                      h.push(d(e, u)))
                  }),
                  l.each(o, function(e) {
                      e[4].isVisible() && (g.push(d(e, s)),
                      g.push(d(e, c)),
                      g.push(d(e, f)))
                  }),
                  h.sort(function(e, t) {
                      return e.dis - t.dis
                  }),
                  g.sort(function(e, t) {
                      return e.dis - t.dis
                  }),
                  0 !== h.length && h[0].dis < i) {
                      e.y = h[0].line[1] - h[0].point.y + n.y,
                      p = {
                          type: "item",
                          horizontals: [h[0]]
                      };
                      for (var m = 1; m < 3; m++)
                          h[0].dis === h[m].dis && p.horizontals.push(h[m])
                  }
                  if (0 !== g.length && g[0].dis < i) {
                      e.x = g[0].line[0] - g[0].point.x + n.x,
                      p ? p.verticals = [g[0]] : p = {
                          type: "item",
                          verticals: [g[0]]
                      };
                      for (var y = 1; y < 3; y++)
                          g[0].dis === g[y].dis && p.verticals.push(g[y])
                  }
                  p && (p.bbox = t,
                  this._addAlignLine(p))
              }
          }, {
              key: "clearAlignLine",
              value: function() {
                  var e = this._alignLines;
                  l.each(e, function(e) {
                      e.remove()
                  }),
                  this._alignLines = []
              }
          }, {
              key: "_addAlignLine",
              value: function(e) {
                  var t = e.bbox
                    , n = this.graph.getRootGroup()
                    , r = this.line
                    , o = this._alignLines;
                  "item" === e.type && (e.horizontals && l.each(e.horizontals, function(e) {
                      var i, a, c = e.line, u = e.point, s = (c[0] + c[2]) / 2;
                      u.x < s ? (i = u.x - t.width / 2,
                      a = Math.max(c[0], c[2])) : (i = u.x + t.width / 2,
                      a = Math.min(c[0], c[2]));
                      var d = n.addShape("line", {
                          attrs: l.mix({
                              x1: i,
                              y1: c[1],
                              x2: a,
                              y2: c[1]
                          }, r),
                          capture: !1
                      });
                      o.push(d)
                  }),
                  e.verticals && l.each(e.verticals, function(e) {
                      var i, a, c = e.line, u = e.point, s = (c[1] + c[3]) / 2;
                      u.y < s ? (i = u.y - t.height / 2,
                      a = Math.max(c[1], c[3])) : (i = u.y + t.height / 2,
                      a = Math.min(c[1], c[3]));
                      var d = n.addShape("line", {
                          attrs: l.mix({
                              x1: c[0],
                              y1: i,
                              x2: c[0],
                              y2: a
                          }, r),
                          capture: !1
                      });
                      o.push(d)
                  }))
              }
          }]) && o(n.prototype, r),
          f && o(n, f),
          t
      }();
      e.exports = f
  }
  , function(e, t, n) {
      var r = n(4)
        , o = {
          CFG: {
              labelEditable: !1
          },
          INIT: "_initLabelEditor"
      };
      o.AUGMENT = {
          _initLabelEditor: function() {
              var e = this;
              if (this.get("labelEditable")) {
                  var t = this.getGraph()
                    , n = r.createDOM('<div contenteditable="true" role="textbox" tabindex="1" class="g6-label-editor"></div>', {
                      position: "absolute",
                      visibility: "hidden",
                      "z-index": "2",
                      padding: "0px 2px 0px 0px",
                      resize: "none",
                      width: "auto",
                      height: "auto",
                      outline: "none",
                      border: "1px solid #1890FF",
                      "transform-origin": "left top",
                      "max-width": "320px",
                      background: "white",
                      "box-sizing": "content-box"
                  });
                  t.getGraphContainer().appendChild(n),
                  n.on("blur", function(n) {
                      n.stopPropagation(),
                      !t.destroyed && e.endEditLabel()
                  }),
                  n.on("keydown", function(t) {
                      t.stopPropagation();
                      var n = r.getKeyboradKey(t);
                      (t.metaKey && "s" === n || t.ctrlKey && "s" === n) && t.preventDefault(),
                      "Enter" !== n && "Escape" !== n || e.endEditLabel()
                  }),
                  this.set("labelTextArea", n),
                  t.on("beforeviewportchange", function() {
                      n.focusItem && e.setLabelEditorBeginPosition(n.focusItem)
                  })
              }
          },
          _getLabelTextAreaBox: function(e, t) {
              var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [0, 0];
              t && e.attr("text", t);
              var o = this.getGraph().getRootGroup()
                , i = r.getBBox(e, o);
              return {
                  minX: i.minX - n[1],
                  minY: i.minY - n[0],
                  maxX: i.maxX + n[1],
                  maxY: i.maxY + n[0]
              }
          },
          setLabelEditorBeginPosition: function(e) {
              var t = this.get("labelTextArea")
                , n = e.getLabel();
              if (n) {
                  var o = this._getLabelTextAreaBox(n)
                    , i = n.attr("lineHeight")
                    , a = n.attr("fontSize")
                    , c = {
                      x: o.minX,
                      y: o.minY - i / 4 + a / 4 - 1,
                      width: o.maxX - o.minX,
                      height: o.maxY - o.minY
                  };
                  t.css({
                      top: c.y + "px",
                      left: c.x + "px"
                  }),
                  t.labelPoint = c
              } else {
                  var u = this.getGraph().getRootGroup()
                    , s = e.getKeyShape()
                    , l = r.getBBox(s, u)
                    , d = {
                      x: l.minY + (l.maxY - l.minY - t.height()) / 2,
                      y: (l.minX + l.maxX) / 2
                  };
                  t.css({
                      top: d.x + "px",
                      left: d.y + "px"
                  }),
                  t.labelPoint = d
              }
          },
          beginEditLabel: function(e) {
              var t = this.get("labelTextArea")
                , n = this.getGraph();
              if (r.isString(e) && (e = n.find(e)),
              e && !e.destroyed && t) {
                  this.setSignal("preventWheelPan", !0);
                  var o = e.getModel()
                    , i = e.getLabel()
                    , a = n.getZoom();
                  if (t.focusItem = e,
                  i) {
                      var c = i.attr("lineHeight")
                        , u = this._getLabelTextAreaBox(i)
                        , s = (u.maxX - u.minX) / a
                        , l = (u.maxY - u.minY + c / 4) / a;
                      t.innerHTML = o.label,
                      t.innerHTML = o.label,
                      t.css({
                          "min-width": s + "px",
                          "min-height": l + "px",
                          visibility: "visible",
                          "font-family": i.attr("fontFamily"),
                          "line-height": c + "px",
                          "font-size": i.attr("fontSize") + "px",
                          transform: "scale(" + a + ")"
                      })
                  } else
                      t.innerHTML = "",
                      t.css({
                          "min-width": "auto",
                          "min-height": "auto"
                      });
                  this.setLabelEditorBeginPosition(e),
                  t.css({
                      visibility: "visible"
                  }),
                  t.focus(),
                  document.execCommand("selectAll", !1, null)
              }
          },
          endEditLabel: function() {
              var e = this.get("labelTextArea");
              if (this.setSignal("preventWheelPan", !1),
              e) {
                  var t = e.focusItem;
                  if (t) {
                      var n = t.getModel()
                        , r = this.editor;
                      n.label !== e.textContent && r.executeCommand("update", {
                          action: "updateLabel",
                          itemId: t.id,
                          updateModel: {
                              label: e.textContent
                          }
                      }),
                      e.hide(),
                      e.focusItem = void 0,
                      this.focusGraphWrapper()
                  }
              }
          }
      },
      e.exports = o
  }
  , function(e, t) {
      var n = {
          AUGMENT: {
              updateStatus: function() {
                  var e, t = this.getSelected();
                  0 === t.length ? e = "canvas-selected" : 1 === t.length ? t[0].isNode ? e = "node-selected" : t[0].isEdge ? e = "edge-selected" : t[0].isGroup && (e = "group-selected") : e = "multi-selected",
                  this.emit("statuschange", {
                      status: e
                  })
              }
          }
      };
      e.exports = n
  }
  , function(e, t, n) {
      n(45),
      n(46),
      n(47),
      n(48),
      n(49),
      n(50),
      n(51),
      n(52),
      n(53),
      n(54),
      n(55),
      n(56),
      n(57),
      n(58),
      n(59),
      n(60),
      n(61),
      n(62)
  }
  , function(e, t, n) {
      var r = n(3)
        , o = n(4);
      r.registerBehaviour("panBlank", o.getPanCanvasBehaviour(!0))
  }
  , function(e, t, n) {
      n(3).registerBehaviour("hoverButton", function(e) {
          e.getGraph().behaviourOn("mouseenter", function(t) {
              e.getSignal("panningItem") || t.shape && t.shape.isButton && e.css({
                  cursor: "pointer"
              })
          })
      })
  }
  , function(e, t, n) {
      var r = n(3)
        , o = n(4);
      r.registerBehaviour("panCanvas", o.getPanCanvasBehaviour())
  }
  , function(e, t, n) {
      var r = n(3)
        , o = n(14)
        , i = n(4);
      r.registerBehaviour("wheelChangeViewport", function(e) {
          var t, n = e.getGraph();
          n.behaviourOn("wheel", function(e) {
              e.domEvent.preventDefault()
          }),
          n.behaviourOn("wheel", i.throttle(function(r) {
              if (e.getSignal("preventWheelPan"))
                  return;
              var a = r.domEvent
                , c = e.getSignal("wheelZoom");
              t || e.setCapture(!1);
              if (c) {
                  var u = a.wheelDelta;
                  if (Math.abs(u) > 10) {
                      var s = n.getMatrix()[0];
                      u > 0 ? n.zoom({
                          x: r.x,
                          y: r.y
                      }, 1.05 * s) : n.zoom({
                          x: r.x,
                          y: r.y
                      }, s * (1 / 1.05))
                  }
              } else {
                  var l = []
                    , d = n.getMatrix();
                  i.mat3.translate(l, d, [a.wheelDeltaX * o.wheelPanRatio, a.wheelDeltaY * o.wheelPanRatio]),
                  e.translateLimt(l) && n.updateMatrix(l)
              }
              t && clearTimeout(t),
              t = setTimeout(function() {
                  e.setCapture(!0),
                  t = void 0
              }, 50)
          }, 16))
      })
  }
  , function(e, t, n) {
      n(3).registerBehaviour("processPanItem", function(e) {
          var t = e.getGraph();
          t.behaviourOn("mousemove", function(n) {
              var r = e.get("panItemDelegation");
              if (r) {
                  var o = e.get("panItemStartPoint")
                    , i = e.get("panItemStartBox")
                    , a = n.x - o.x
                    , c = n.y - o.y
                    , u = e.align({
                      x: i.minX + a,
                      y: i.minY + c
                  }, {
                      width: i.width,
                      height: i.height
                  });
                  r.attr({
                      x: u.x,
                      y: u.y
                  }),
                  t.emit("itempanning", n),
                  t.draw()
              }
          })
      })
  }
  , function(e, t, n) {
      n(3).registerBehaviour("startPanItem", function(e) {
          var t = e.getGraph()
            , n = t.getRootGroup();
          t.behaviourOn("dragstart", function(r) {
              if (2 !== r.button && r.item && (r.item.isNode || r.item.isGroup)) {
                  var o, i = r.item;
                  if ((o = (o = i.isSelected ? e.getSelected() : [i]).filter(function(e) {
                      return e.isNode || e.isGroup
                  }))[0] && !1 !== o[0].dragable) {
                      t.emit("beforepanitem", {
                          items: o
                      }),
                      t.emit("beforeshowdelegation", {
                          items: o
                      });
                      var a = e.getDelegation(o, n)
                        , c = a.getBBox();
                      e.setSignal("panningItem", !0),
                      e.set("panItems", o),
                      e.set("panItemDelegation", a),
                      e.set("panItemStartBox", c),
                      e.set("panItemStartPoint", {
                          x: r.x,
                          y: r.y
                      }),
                      t.draw()
                  }
              }
          })
      })
  }
  , function(e, t, n) {
      n(3).registerBehaviour("endPanItem", function(e) {
          var t = e.getGraph();
          t.behaviourOn("panitemend", function() {
              var n = e.get("panItemDelegation");
              n && (n.remove(),
              t.draw()),
              e.setSignal("panningItem", !1),
              e.set("panItemDelegation", void 0),
              e.set("panItemStartPoint", void 0),
              e.set("panItemStartBox", void 0),
              e.set("panItems", void 0)
          }),
          t.behaviourOn("canvas:mouseleave", function() {
              e.get("panItems") && (e.clearAlignLine(),
              t.emit("panitemend"))
          })
      })
  }
  , function(e, t, n) {
      n(3).registerBehaviour("dblclickItemEditLabel", function(e) {
          e.getGraph().behaviourOn("node:dblclick", function(t) {
              t.shape && !t.shape.isButton && e.beginEditLabel(t.item)
          })
      })
  }
  , function(e, t, n) {
      n(3).registerBehaviour("clickCanvasSelected", function(e) {
          var t = e.getGraph();
          t.behaviourOn("click", function(t) {
              t.shape || (e.clearSelected(),
              e.clearActived(),
              e.updateStatus())
          }),
          t.behaviourOn("contextmenu", function(t) {
              t.shape || (e.clearSelected(),
              e.clearActived(),
              e.updateStatus())
          })
      })
  }
  , function(e, t, n) {
      n(3).registerBehaviour("clickCollapsedButton", function(e) {
          var t = e.getGraph();
          t.behaviourOn("click", function(n) {
              var r = n.item
                , o = n.shape;
              if (r && o && o.isCollapsedButton) {
                  var i = e.editor;
                  i ? i.executeCommand("collapseExpand", {
                      itemId: r.id
                  }) : t.update(r, {
                      collapsed: !0
                  })
              }
          })
      })
  }
  , function(e, t, n) {
      n(3).registerBehaviour("clickEdgeSelected", function(e) {
          e.getGraph().behaviourOn("edge:click", function(t) {
              e.get("multiSelectable") && !0 === e.getSignal("shiftKeyDown") ? e.setSelected(t.item.id, !0) : (e.clearActived(),
              e.clearSelected(),
              e.setSelected(t.item.id, !0))
          })
      })
  }
  , function(e, t, n) {
      n(3).registerBehaviour("clickExpandedButton", function(e) {
          var t = e.getGraph();
          t.behaviourOn("click", function(n) {
              var r = n.item
                , o = n.shape;
              if (r && o && o.isExpandedButton) {
                  var i = e.editor;
                  i ? i.executeCommand("collapseExpand", {
                      itemId: r.id
                  }) : t.update(r, {
                      collapsed: !1
                  })
              }
          })
      })
  }
  , function(e, t, n) {
      n(3).registerBehaviour("clickGroupSelected", function(e) {
          e.getGraph().behaviourOn("group:click", function(t) {
              e.get("multiSelectable") && !0 === e.getSignal("shiftKeyDown") ? e.setSelected(t.item.id, !0) : (e.clearActived(),
              e.clearSelected(),
              e.setSelected(t.item.id, !0))
          })
      })
  }
  , function(e, t, n) {
      n(3).registerBehaviour("clickNodeSelected", function(e) {
          e.getGraph().behaviourOn("node:click", function(t) {
              e.get("multiSelectable") && !0 === e.getSignal("shiftKeyDown") ? e.setSelected(t.item.id, !0) : (e.clearActived(),
              e.clearSelected(),
              e.setSelected(t.item.id, !0))
          })
      })
  }
  , function(e, t, n) {
      n(3).registerBehaviour("hoverNodeActived", function(e) {
          var t, n = e.getGraph();
          n.behaviourOn("node:mouseenter", function(n) {
              !1 !== n.item.getShapeObj().panAble && e.css({
                  cursor: "move"
              }),
              e.getSignal("panningItem") || e.getSignal("dragEdge") || n.item && n.item.isSelected || (t = n.item,
              e.setActived(t, !0))
          }),
          n.behaviourOn("node:mouseleave", function(n) {
              var r = n.toShape;
              t && (r && r.isAnchor && r.getItem() === t || e.getSignal("dragEdge") || (t.isSelected || e.setActived(t, !1),
              t = void 0))
          })
      })
  }
  , function(e, t, n) {
      n(3).registerBehaviour("hoverGroupActived", function(e) {
          var t = e.getGraph();
          t.behaviourOn("mouseenter", function(t) {
              e.getSignal("panningItem") || t.item && t.item.isSelected || e.getSignal("dragEdge") || t.shape && t.shape.isGroupKeyShape && (e.css({
                  cursor: "move"
              }),
              e.setActived(t.item, !0))
          }),
          t.behaviourOn("group:mouseleave", function(t) {
              t.item.isActived && !t.item.isSelected && e.setActived(t.item, !1)
          })
      })
  }
  , function(e, t, n) {
      n(3).registerBehaviour("hoverEdgeActived", function(e) {
          var t = e.getGraph();
          t.behaviourOn("edge:mouseenter", function(t) {
              e.getSignal("panningItem") || t.item && t.item.isSelected || e.getSignal("dragEdge") || e.setActived(t.item, !0)
          }),
          t.behaviourOn("edge:mouseleave", function(t) {
              e.setActived(t.item, !1)
          })
      })
  }
  , function(e, t, n) {
      n(3).registerBehaviour("keydownCmdWheelZoom", function(e) {
          var t = e.getGraph();
          t.behaviourOn("keydown", function(t) {
              91 === t.domEvent.keyCode && e.setSignal("wheelZoom", !0)
          }),
          t.behaviourOn("keyup", function(t) {
              91 === t.domEvent.keyCode && e.setSignal("wheelZoom", !1)
          })
      })
  }
  , function(e, t, n) {
      var r = n(22);
      e.exports = {
          dragingEdgeEndPoint: function(e) {
              var t = e.endPointType
                , n = e.edgeModel
                , r = e.graph
                , o = e.delegation
                , i = e.startPoint
                , a = e.ev
                , c = e.source
                , u = e.target
                , s = a.item
                , l = "source" === t ? [a, i] : [i, a];
              s && ("source" === t ? u = s : c = s);
              var d = r.getShapeObj("edge", n).getPathByPoints({
                  points: l,
                  source: c,
                  target: u
              });
              o.attr("path", d),
              r.draw()
          },
          panGroup: function(e, t, n, o) {
              var i = e.getModel();
              r.traverseTree(e, function(r) {
                  if ("node" === r.type) {
                      var i = r.getModel();
                      o.update(r, {
                          x: i.x + t,
                          y: i.y + n
                      })
                  }
                  e.getCrossEdges && e.getCrossEdges().forEach(function(e) {
                      e.update()
                  })
              }, function(e) {
                  return "group" === e.type ? e.getChildren() : []
              }),
              o.update(e, {
                  x: i.x + t,
                  y: i.y + n
              })
          },
          dropUpdateEdge: function(e) {
              var t = e.ev
                , n = e.endPointType
                , r = e.model
                , o = e.diagram
                , i = o.get("noEndEdge")
                , a = o.get("linkAnchor")
                , c = o.get("linkNode")
                , u = t.item
                , s = t.shape
                , l = t.x
                , d = t.y;
              if (o.getGraph().emit("beforedropedge"),
              s) {
                  if (a && s.isAnchor && s.hasHotspot) {
                      var f = s
                        , h = f.getItem();
                      return "target" === n ? (r.target = h.id,
                      r.targetAnchor = f.getIndex(),
                      !0) : (r.source = h.id,
                      r.sourceAnchor = f.getIndex(),
                      !0)
                  }
                  if (c && u && u.isNode)
                      return "target" === n ? (r.target = u.id,
                      !0) : (r.source = u.id,
                      !0)
              } else if (i)
                  return "target" === n ? (r.target = {
                      x: l,
                      y: d
                  },
                  !0) : (r.source = {
                      x: l,
                      y: d
                  },
                  !0);
              return !1
          }
      }
  }
  , function(e, t) {
      e.exports = {
          rectRectCrossAlgorithm: function(e, t) {
              var n = Math.max(e.minX, t.minX)
                , r = Math.max(e.minY, t.minY)
                , o = Math.min(e.maxX, t.maxX)
                , i = Math.min(e.maxY, t.maxY);
              return n > o || r > i
          },
          euclideanDistance: {
              pointPoint: function(e, t) {
                  var n = Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2);
                  return Math.sqrt(n)
              }
          }
      }
  }
  , function(e, t, n) {
      var r = {}
        , o = n(2);
      r.AUGMENT = {
          changeAddEdgeModel: function(e) {
              this.set("addEdgeModel", e)
          },
          cancelAdd: function() {
              this.set("addType", void 0),
              this.set("addModel", void 0),
              this.changeMode("default")
          },
          beginAdd: function(e, t) {
              this.set("addType", e),
              this.set("addModel", t),
              this.changeMode("add")
          },
          endAdd: function() {
              this.set("addType", void 0),
              this.set("addModel", void 0),
              this.changeMode("default")
          },
          delete: function() {
              var e = this.getSelected()
                , t = this.get("_graph");
              o.each(e, function(e) {
                  t.remove(e)
              })
          },
          toBack: function() {
              var e = this.getSelected()
                , t = this.get("_graph");
              e.sort(function(e, t) {
                  var n = e.getGraphicGroup()
                    , r = t.getGraphicGroup();
                  return o.getIndex(r) - o.getIndex(n)
              }),
              e.forEach(function(e) {
                  t.toBack(e)
              })
          },
          toFront: function() {
              var e = this.getSelected()
                , t = this.get("_graph");
              e.sort(function(e, t) {
                  var n = e.getGraphicGroup()
                    , r = t.getGraphicGroup();
                  return o.getIndex(n) - o.getIndex(r)
              }),
              e.forEach(function(e) {
                  t.toFront(e)
              })
          },
          addGroup: function(e) {
              var t, n = this.get("_graph"), r = this.getSelected(), i = !0;
              if (0 !== r.length) {
                  e || (e = {
                      label: "新建分组"
                  }),
                  o.setId(e),
                  n.add("group", e),
                  n.toFront(e.id);
                  var a = n.find(e.id);
                  if (r.forEach(function(e) {
                      var n = e.getParent();
                      n && (t ? t !== n && (i = !1) : t = n)
                  }),
                  i) {
                      t && (e.parent = t.getModel().id),
                      r.forEach(function(t) {
                          n.update(t, {
                              parent: e.id
                          })
                      });
                      var c = a.getInnerEdges();
                      a.deepEach(function(e) {
                          n.toFront(e)
                      }),
                      c.forEach(function(e) {
                          n.toFront(e)
                      })
                  } else
                      console.warn("add group elements must have the same parent")
              }
          },
          unGroup: function() {
              var e = this.get("_graph")
                , t = this.getSelected()
                , n = t[0];
              1 === t.length && o.isGroup(n) && (n.getChildren().forEach(function(t) {
                  e.update(t, {
                      parent: void 0
                  }),
                  t.collapsedParent || t.show(),
                  t.isGroup && t.deepEach(function(e) {
                      e.collapsedParent || e.show()
                  })
              }),
              e.remove(n))
          },
          newGroup: function(e) {
              this.addGroup(e)
          }
      },
      e.exports = r
  }
  , function(e, t, n) {
      function r(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n,
          e
      }
      var o = n(67)
        , i = n(2)
        , a = {
          CFG: {
              anchor: {}
          },
          INIT: "_initAnchor"
      };
      a.AUGMENT = {
          _initAnchor: function() {
              var e = this.get("anchor")
                , t = this.get("_graph");
              if (e) {
                  var n = new o(function(e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {}
                            , o = Object.keys(n);
                          "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                              return Object.getOwnPropertyDescriptor(n, e).enumerable
                          }))),
                          o.forEach(function(t) {
                              r(e, t, n[t])
                          })
                      }
                      return e
                  }({
                      diagram: this,
                      graph: t
                  }, e));
                  this.setController("anchor", n)
              }
          },
          showAnchor: function(e, t, n) {
              this.getController("anchor").showAnchor(e, t, n)
          },
          clearAnchor: function(e) {
              this.getController("anchor").clearAnchor(e)
          },
          setHotspotActived: function(e, t) {
              this.getController("anchor").setHotspotActived(e, t)
          },
          hoverShowAnchor: function(e) {
              var t = this
                , n = e.getAnchorPoints()
                , r = [];
              n.forEach(function(n, o) {
                  var i = {
                      anchor: n,
                      item: e
                  };
                  t.emit("hovernode:beforeshowanchor", i),
                  i.cancel || r.push(o)
              }),
              this.showAnchor(e, r)
          },
          anchorHasBeenLinked: function(e, t) {
              var n = e.getEdges()
                , r = [];
              return n.forEach(function(t) {
                  var n = t.getModel();
                  n.source !== e.id || i.isNil(n.sourceAnchor) || r.push(n.sourceAnchor),
                  n.target !== e.id || i.isNil(n.targetAnchor) || r.push(n.targetAnchor)
              }),
              i.isObject(t) ? -1 !== r.indexOf(t.index) : -1 !== r.indexOf(t)
          },
          dragEdgeBeforeShowAnchor: function(e, t, n) {
              var r = this;
              this.getGraph().getNodes().forEach(function(o) {
                  var i, a = [], c = o.getAnchorPoints();
                  if (e.isNode) {
                      var u = e.getAnchorPoints();
                      c.forEach(function(c, s) {
                          i = "target" === n ? {
                              source: e,
                              sourceAnchor: u[t],
                              target: o,
                              targetAnchor: c,
                              dragEndPointType: n
                          } : {
                              target: e,
                              targetAnchor: u[t],
                              source: o,
                              sourceAnchor: c,
                              dragEndPointType: n
                          },
                          r.emit("dragedge:beforeshowanchor", i),
                          i.cancel || a.push(s)
                      })
                  } else
                      c.forEach(function(e, t) {
                          a.push(t)
                      });
                  o === e && o.isAnchorShow ? a.forEach(function(e) {
                      var n = o.getAnchor(e);
                      t !== e && n && n.showHotspot()
                  }) : r.showAnchor(o, a, !0)
              })
          }
      },
      e.exports = a
  }
  , function(e, t, n) {
      function r(e) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          )(e)
      }
      function o(e) {
          for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {}
                , r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))),
              r.forEach(function(t) {
                  i(e, t, n[t])
              })
          }
          return e
      }
      function i(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n,
          e
      }
      function a(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1,
              r.configurable = !0,
              "value"in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
      }
      function c(e, t) {
          return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
              if (void 0 === e)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
          }(e) : t
      }
      function u(e) {
          return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          }
          )(e)
      }
      function s(e, t) {
          return (s = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t,
              e
          }
          )(e, t)
      }
      var l = n(9)
        , d = n(5)
        , f = n(2)
        , h = function(e) {
          function t() {
              return function(e, t) {
                  if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function")
              }(this, t),
              c(this, u(t).apply(this, arguments))
          }
          var n, r, i;
          return function(e, t) {
              if ("function" != typeof t && null !== t)
                  throw new TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                      value: e,
                      writable: !0,
                      configurable: !0
                  }
              }),
              t && s(e, t)
          }(t, l),
          n = t,
          (r = [{
              key: "getDefaultCfg",
              value: function() {
                  return {
                      _anchorItemCache: {}
                  }
              }
          }, {
              key: "init",
              value: function() {
                  var e = this
                    , t = this.graph;
                  t.on("afteritemdraw", function(t) {
                      t.item.isAnchorShow && e.showAnchor(t.item)
                  }),
                  t.on("beforeitemdestroy", function(t) {
                      e._clearAnchor(t.item)
                  }),
                  t.on("afteritemhide", function(t) {
                      t.item.isNode && e._clearAnchor(t.item)
                  })
              }
          }, {
              key: "_updateAnchor",
              value: function(e) {
                  var t = this.graph;
                  e.anchorShapes.forEach(function(e) {
                      e.updatePosition()
                  }),
                  t.draw()
              }
          }, {
              key: "_drawAnchor",
              value: function(e, t, n, r) {
                  var i = e.getAnchorPoints();
                  this._clearAnchor(e),
                  f.each(i, function(i, a) {
                      if (!n || -1 !== n.indexOf(a)) {
                          var c, u = t.addShape("marker", {
                              attrs: o({
                                  symbol: "circle"
                              }, d.anchorPointStyle, {
                                  x: i.x,
                                  y: i.y
                              }),
                              freezePoint: i,
                              item: e,
                              index: a,
                              eventPreFix: "anchor",
                              isItemChange: function() {},
                              zIndex: d.zIndex.anchorPoint
                          });
                          u.toFront(),
                          u.eventPreFix = "anchor",
                          u.showHotspot = function() {
                              c = t.addShape("marker", {
                                  attrs: o({
                                      symbol: "circle"
                                  }, d.anchorHotsoptStyle, {
                                      x: i.x,
                                      y: i.y
                                  }),
                                  freezePoint: i,
                                  capture: !1,
                                  zIndex: d.zIndex.anchorHotsopt
                              }),
                              e.anchorShapes.push(c),
                              u.hasHotspot = !0,
                              c.toFront(),
                              u.toFront()
                          }
                          ,
                          u.getIndex = function() {
                              return a
                          }
                          ,
                          u.getItem = function() {
                              return e
                          }
                          ,
                          u.getPoint = function() {
                              return i
                          }
                          ,
                          u.updatePosition = function() {
                              var t = e.getAnchorPoints()[a];
                              u.attr(t)
                          }
                          ,
                          u.setActived = function() {
                              u.attr(d.anchorPointHoverStyle)
                          }
                          ,
                          u.clearActived = function() {
                              u.attr(d.anchorPointStyle)
                          }
                          ,
                          u.isAnchor = !0,
                          u.setHotspotActived = function(e) {
                              c && (e ? c.attr(d.anchorHotsoptActivedStyle) : c.attr(d.anchorHotsoptStyle))
                          }
                          ,
                          r && u.showHotspot(),
                          e.anchorShapes.push(u),
                          e.getAllAnchors = function() {
                              return e.anchorShapes.filter(function(e) {
                                  return e.isAnchor
                              })
                          }
                          ,
                          e.getAnchor = function(t) {
                              return e.anchorShapes.find(function(e) {
                                  return e.get("index") === t
                              })
                          }
                      }
                  })
              }
          }, {
              key: "_clearAnchor",
              value: function(e) {
                  e.anchorShapes && e.anchorShapes.forEach(function(e) {
                      e.remove()
                  }),
                  e.anchorShapes = []
              }
          }, {
              key: "setHotspotActived",
              value: function(e, t) {
                  var n = this.diagram.getGraph();
                  e.setHotspotActived(t),
                  n.draw()
              }
          }, {
              key: "showAnchor",
              value: function(e, t, n) {
                  if (e.isVisible()) {
                      var r = this.graph
                        , o = this._anchorItemCache
                        , i = r.getRootGroup();
                      this._drawAnchor(e, i, t, n),
                      e.isAnchorShow = !0,
                      o[e.id] = e
                  }
              }
          }, {
              key: "clearAnchor",
              value: function(e) {
                  var t = this
                    , n = this.graph
                    , r = n.get("itemCache")
                    , o = this._anchorItemCache
                    , i = e;
                  i = f.isObject(e) ? [e] : f.isString(e) ? [r[e]] : o,
                  f.each(i, function(e) {
                      t._clearAnchor(e),
                      e.isAnchorShow = !1,
                      delete o[e.id]
                  }),
                  n.draw()
              }
          }]) && a(n.prototype, r),
          i && a(n, i),
          t
      }();
      e.exports = h
  }
  , function(e, t, n) {
      function r(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n,
          e
      }
      var o = n(69)
        , i = {
          CFG: {
              orbit: null
          },
          INIT: "_initOrbit"
      };
      i.AUGMENT = {
          _initOrbit: function() {
              var e = this.get("orbit");
              if (e) {
                  var t = new o(function(e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {}
                            , o = Object.keys(n);
                          "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                              return Object.getOwnPropertyDescriptor(n, e).enumerable
                          }))),
                          o.forEach(function(t) {
                              r(e, t, n[t])
                          })
                      }
                      return e
                  }({
                      diagram: this
                  }, e));
                  this.setController("orbit", t)
              }
          },
          showOrbit: function(e) {
              this.getController("orbit").show(e)
          },
          hideOrbit: function() {
              this.getController("orbit").hide()
          },
          layoutOrbit: function(e, t) {
              this.getController("orbit").layout(e, t)
          }
      },
      e.exports = i
  }
  , function(e, t, n) {
      function r(e) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          )(e)
      }
      function o(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n,
          e
      }
      function i(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1,
              r.configurable = !0,
              "value"in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
      }
      function a(e, t) {
          return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
              if (void 0 === e)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
          }(e) : t
      }
      function c(e) {
          return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          }
          )(e)
      }
      function u(e, t) {
          return (u = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t,
              e
          }
          )(e, t)
      }
      var s = n(9)
        , l = n(5)
        , d = n(70)
        , f = n(2)
        , h = f.vec2
        , g = f.isString
        , p = function(e) {
          function t() {
              return function(e, t) {
                  if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function")
              }(this, t),
              a(this, c(t).apply(this, arguments))
          }
          var n, r, f;
          return function(e, t) {
              if ("function" != typeof t && null !== t)
                  throw new TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                      value: e,
                      writable: !0,
                      configurable: !0
                  }
              }),
              t && u(e, t)
          }(t, s),
          n = t,
          (r = [{
              key: "getDefaultCfg",
              value: function() {
                  return {
                      satellite: [],
                      satelliteCache: []
                  }
              }
          }, {
              key: "init",
              value: function() {
                  var e = this
                    , t = this.satellite
                    , n = this.diagram
                    , r = {
                      diagram: n
                  };
                  n.getGraph().addBehaviour("orbit"),
                  t.forEach(function(t) {
                      g(t) ? e.satelliteCache.push(new d[t](r)) : e.satelliteCache.push(new d(function(e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = null != arguments[t] ? arguments[t] : {}
                                , r = Object.keys(n);
                              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                  return Object.getOwnPropertyDescriptor(n, e).enumerable
                              }))),
                              r.forEach(function(t) {
                                  o(e, t, n[t])
                              })
                          }
                          return e
                      }({}, r, t)))
                  })
              }
          }, {
              key: "layout",
              value: function(e, t) {
                  var n = this.diagram
                    , r = n.getGraph()
                    , o = this.satelliteCache
                    , i = e.getBBox()
                    , a = i.centerX
                    , c = i.centerY
                    , u = n.getZoom()
                    , s = l.orbitGap / u
                    , d = o.filter(function(e) {
                      return e.isVisible()
                  })
                    , f = [t.x - a, t.y - c]
                    , g = h.length(f)
                    , p = i.width / 2 + s
                    , m = h.scale([], f, p / g);
                  d.forEach(function(e) {
                      var t = e.getDOM()
                        , n = t.width() / 2
                        , o = r.getDomPoint({
                          x: m[0] + a,
                          y: m[1] + c
                      });
                      t.css({
                          top: o.y - n + "px",
                          left: o.x - n + "px"
                      })
                  })
              }
          }, {
              key: "show",
              value: function(e) {
                  this.satelliteCache.forEach(function(t) {
                      t.enable() && (t.item = e,
                      t.show())
                  })
              }
          }, {
              key: "hide",
              value: function() {
                  this.satelliteCache.forEach(function(e) {
                      e.hide()
                  })
              }
          }]) && i(n.prototype, r),
          f && i(n, f),
          t
      }();
      e.exports = p
  }
  , function(e, t, n) {
      var r = n(23);
      r.forkAndLink = n(71),
      e.exports = r
  }
  , function(e, t, n) {
      function r(e) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          )(e)
      }
      function o(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n,
          e
      }
      function i(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1,
              r.configurable = !0,
              "value"in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
      }
      function a(e, t) {
          return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
              if (void 0 === e)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
          }(e) : t
      }
      function c(e) {
          return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          }
          )(e)
      }
      function u(e, t) {
          return (u = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t,
              e
          }
          )(e, t)
      }
      var s = n(23)
        , l = n(2)
        , d = function(e) {
          function t() {
              return function(e, t) {
                  if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function")
              }(this, t),
              a(this, c(t).apply(this, arguments))
          }
          var n, r, d;
          return function(e, t) {
              if ("function" != typeof t && null !== t)
                  throw new TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                      value: e,
                      writable: !0,
                      configurable: !0
                  }
              }),
              t && u(e, t)
          }(t, s),
          n = t,
          (r = [{
              key: "getDefaultCfg",
              value: function() {
                  return {
                      name: "forkAndLink",
                      render: function() {
                          return '\n          <div style="\n            width: 11px;\n            height: 11px;\n            cursor: copy;\n            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAIAAAAmzuBxAAAACXBIWXMAAAsSAAALEgHS3X78AAAArElEQVQYlYWQrw6CYBTFj0wbiUagQTH4ADgqgRewGXwuCgY2HgBegJlpBKCx0bBA+8Jxd3zqZG6ccHfub7t/dyQBtE9kNcoes4J5QODgcoRnQUQyb+knjCsOE0mJcSUkbyVFM0rSjFzpw42sxu30bgic79p4lvCshlH2iFxNV4pc2Ww/K9jmT/ViHlfhswLCVC+4yE++fpgYpjQCB0X3f0rRydnbt2z/Y+OnAF7TbbvXXHv+kAAAAABJRU5ErkJggg==)\n          "></div>\n        '
                      },
                      bindEvent: function(e, t) {
                          var n = this
                            , r = t.getGraph()
                            , i = r.getRootGroup();
                          return e.setAttribute("draggable", "true"),
                          e.setAttribute("id", "addEdgeBtnId"),
                          [l.addEventListener(e, "dragstart", function() {
                              var r = n.item
                                , a = function(e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var n = null != arguments[t] ? arguments[t] : {}
                                        , r = Object.keys(n);
                                      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                          return Object.getOwnPropertyDescriptor(n, e).enumerable
                                      }))),
                                      r.forEach(function(t) {
                                          o(e, t, n[t])
                                      })
                                  }
                                  return e
                              }({}, t.get("addEdgeModel"), {
                                  source: r.id
                              })
                                , c = r.getBBox()
                                , u = t.getDelegation([{
                                  isEdge: !0
                              }], i);
                              t.setSignal("dragEdge", !0),
                              t.beginAdd("edge", a),
                              t.set("addEdgeConfig", {
                                  addModel: a,
                                  delegation: u,
                                  startPoint: {
                                      x: c.centerX,
                                      y: c.centerY
                                  },
                                  sourceItem: r
                              }),
                              e.hide()
                          }), l.addEventListener(e, "click", function(e) {
                              var o = e.clientX
                                , i = e.clientY
                                , a = t.editor
                                , c = n.item
                                , u = r.getPointByClient({
                                  x: o,
                                  y: i
                              })
                                , s = c.getBBox()
                                , d = c.getModel()
                                , f = [u.x - s.centerX, u.y - s.centerY]
                                , h = l.vec2.length(f);
                              if (l.vec2.scale(f, f, 160 / h),
                              a)
                                  a.executeCommand("copyAdjacent", {
                                      copyNode: c,
                                      x: u.x + f[0],
                                      y: u.y + f[1]
                                  });
                              else {
                                  var g = l.clone(d);
                                  g.x = u.x + f[0],
                                  g.y = u.y + f[1],
                                  r.add(c.type, g)
                              }
                          })]
                      }
                  }
              }
          }]) && i(n.prototype, r),
          d && i(n, d),
          t
      }();
      e.exports = d
  }
  , function(e, t, n) {
      var r = n(2)
        , o = n(5)
        , i = {};
      function a(e) {
          e.controlPointShapes && r.each(e.controlPointShapes, function(e) {
              e.remove()
          }),
          e.controlPointShapes = [],
          e.isControlPointShow = !1
      }
      i.INIT = "_initResize",
      i.CFG = {
          nodeResizeable: !1,
          edgeResizeable: !0
      },
      i.AUGMENT = {
          _initResize: function() {
              var e = this
                , t = this.get("_graph")
                , n = this.get("nodeResizeable")
                , o = this.get("edgeResizeable");
              n && t.on("afteritemdraw", function(t) {
                  "node" === t.item.type && t.item.isVisible() && e.drawControlPoints(t.item)
              }),
              o && t.on("afteritemdraw", function(t) {
                  "edge" === t.item.type && t.item.isVisible() && e.drawControlPoints(t.item)
              }),
              t.on("afteritemhide", function(e) {
                  var t;
                  e.item.isControlPointShow && ((t = e.item).controlPointShapes && r.each(t.controlPointShapes, function(e) {
                      e.hide()
                  }),
                  t.isControlPointShow = !1)
              }),
              t.on("afteritemshow", function(e) {
                  var t;
                  !e.item.isControlPointShow && ((t = e.item).controlPointShapes && r.each(t.controlPointShapes, function(e) {
                      e.show()
                  }),
                  t.isControlPointShow = !0)
              }),
              t.on("beforeitemdestroy", function(e) {
                  e.item.isControlPointShow && a(e.item)
              })
          },
          drawControlPoints: function(e) {
              var t, n, i, c, u, s, l, d, f, h = this.get("_graph").getRootGroup(), g = this.get("nodeResizeable"), p = this.get("edgeResizeable");
              "node" === e.type ? g && function(e, t) {
                  var n = e.getBBox()
                    , i = [{
                      x: n.minX,
                      y: n.minY
                  }, {
                      x: n.maxX,
                      y: n.minY
                  }, {
                      x: n.minX,
                      y: n.maxY
                  }, {
                      x: n.maxX,
                      y: n.maxY
                  }];
                  a(e);
                  var c = t.addShape("rect", {
                      attrs: r.mix({}, o.nodeSelectedBoxStyle, {
                          symbol: "square",
                          x: n.minX,
                          y: n.minY,
                          width: n.maxX - n.minX,
                          height: n.maxY - n.minY
                      })
                  });
                  e.controlPointShapes.push(c),
                  r.each(i, function(n) {
                      var i = t.addShape("marker", {
                          attrs: r.mix({}, o.nodeControlPointStyle, {
                              symbol: "square",
                              x: n.x,
                              y: n.y
                          }),
                          freezePoint: {
                              x: n.x,
                              y: n.y
                          },
                          item: e
                      });
                      e.controlPointShapes.push(i)
                  })
              }(e, h) : "edge" === e.type && p && (n = h,
              i = (t = e).getKeyShape().attr("path"),
              c = i[0],
              u = c.length,
              s = i[i.length - 1],
              l = s.length,
              d = [{
                  x: c[u - 2],
                  y: c[u - 1]
              }, {
                  x: s[l - 2],
                  y: s[l - 1]
              }],
              f = t.getModel(),
              a(t),
              r.each(d, function(e, i) {
                  var a = n.addShape("marker", {
                      attrs: r.mix({}, o.edgeControlPointStyle, {
                          x: e.x,
                          y: e.y
                      }),
                      freezePoint: {
                          x: e.x,
                          y: e.y
                      },
                      item: t
                  });
                  a.eventPreFix = "edgeControlPoint",
                  a.getSourcePoint = function() {
                      return d[0]
                  }
                  ,
                  a.getTargetPoint = function() {
                      return d[d.length - 1]
                  }
                  ,
                  a.getItem = function() {
                      return t
                  }
                  ,
                  a.isSourceEndPoint = function() {
                      return f.source && 0 === i
                  }
                  ,
                  a.isTargetEndPoint = function() {
                      return f.target && i === d.length - 1
                  }
                  ,
                  t.controlPointShapes.push(a)
              })),
              e.isControlPointShow = !0
          }
      },
      e.exports = i
  }
  , function(e, t, n) {
      function r(e) {
          for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {}
                , r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))),
              r.forEach(function(t) {
                  o(e, t, n[t])
              })
          }
          return e
      }
      function o(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n,
          e
      }
      var i = n(2)
        , a = {};
      a.AUGMENT = {
          addOutterShape: function(e, t) {
              this.clearOutterShape(e);
              var n = t.lineWidth
                , o = e.getKeyShape()
                , a = e.getGraphicGroup()
                , c = o.attr()
                , u = o.get("type")
                , s = o.attr("lineWidth")
                , l = i.clone(c);
              delete l.fillStyle,
              delete l.strokeStyle,
              delete l.matrix;
              var d = a.addShape(u, {
                  attrs: r({}, l, {
                      fill: null
                  }, t)
              });
              i.toBack(d, a);
              var f = d.getBBox()
                , h = f.maxX - f.minX
                , g = f.maxY - f.minY
                , p = (f.minX + f.maxX) / 2
                , m = (f.minY + f.maxY) / 2;
              d.transform([["t", -p, -m], ["s", (n + h + s) / h, (n + g + s) / g], ["t", p, m]]),
              d.isOutter = !0,
              e.outterShape = d
          },
          clearOutterShape: function(e) {
              e.outterShape && e.outterShape.remove()
          }
      },
      e.exports = a
  }
  , function(e, t) {
      var n = {
          CFG: {
              linkNode: !0,
              linkAnchor: !0
          },
          INIT: "_initLink",
          AUGMENT: {
              _initLink: function() {
                  var e = this
                    , t = this.getGraph()
                    , n = this.get("linkAnchor")
                    , r = this.get("linkNode")
                    , o = t.get("mode");
                  n && (this.on("beforeitemactived", function(t) {
                      var n = t.item;
                      n.isNode && e.hoverShowAnchor(n)
                  }),
                  this.on("beforeitemunactived", function(t) {
                      var n = t.item;
                      (n.isNode || n.isGroup) && e.clearAnchor(n)
                  }),
                  this.on("beforeitemselected", function(t) {
                      var n = t.item;
                      n.isNode ? e.hoverShowAnchor(n) : n.isGroup && e.hoverShowAnchor(n)
                  }),
                  this.on("beforeitemunselected", function(t) {
                      var n = t.item;
                      (n.isNode || n.isGroup) && e.clearAnchor(n)
                  }),
                  t.addBehaviour("dragAnchorAddEdge", "add"),
                  t.addBehaviour("hoverAnchorActived", "default"),
                  t.changeMode(o)),
                  r && (t.addBehaviour("hoverNodeAddOutter", "add"),
                  t.addBehaviour("hoverNodeAddOutter", "default"),
                  t.changeMode(o))
              }
          }
      };
      e.exports = n
  }
  , function(e, t, n) {
      n(76),
      n(77),
      n(78),
      n(79)
  }
  , function(e, t, n) {
      function r(e) {
          for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {}
                , r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))),
              r.forEach(function(t) {
                  o(e, t, n[t])
              })
          }
          return e
      }
      function o(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n,
          e
      }
      var i = n(13)
        , a = n(2)
        , c = n(5);
      i.registerNode("diagram-base", {
          getSize: function(e) {
              var t = e.getModel();
              return a.getNodeSize(t.size)
          },
          defaultFillPalette: 0,
          defaultStrokePalette: 3,
          activedFillPalette: 0,
          activedStrokePalette: 5,
          selectedFillPalette: 2,
          selectedStrokePalette: 5,
          getDefaulStyle: function() {
              return c.nodeStyle
          },
          getDefaulActivedStyle: function() {
              return c.nodeActivedStyle
          },
          getDefaulSelectedtyle: function() {
              return c.nodeSelectedStyle
          },
          getStyle: function(e) {
              var t, n, r = e.getModel(), o = r.color;
              if (o) {
                  var i = a.Palettes.generate(o);
                  t = i[this.defaultFillPalette],
                  n = i[this.defaultStrokePalette]
              }
              return a.mix(!0, {}, this.getDefaulStyle(), {
                  fill: t,
                  stroke: n
              }, r.style)
          },
          getPath: function(e) {
              var t = this.getSize(e)
                , n = this.getStyle(e);
              return a.getRectPath(-t[0] / 2, -t[1] / 2, t[0], t[1], n.radius)
          },
          getActivedOutterStyle: function() {
              return c.nodeActivedOutterStyle
          },
          getActivedStyle: function(e) {
              var t = e.getModel()
                , n = this.getDefaulActivedStyle(e)
                , o = t.color;
              if (o) {
                  var i = a.Palettes.generate(o);
                  return r({}, n, {
                      fill: i[this.activedFillPalette],
                      stroke: i[this.activedStrokePalette]
                  })
              }
              return n
          },
          getSelectedStyle: function(e) {
              var t = e.getModel()
                , n = this.getDefaulSelectedtyle(e)
                , o = t.color;
              if (o) {
                  var i = a.Palettes.generate(o);
                  return r({}, n, {
                      fill: i[this.selectedFillPalette],
                      stroke: i[this.selectedStrokePalette]
                  })
              }
              return n
          },
          getSelectedOutterStyle: function(e) {
              var t = e.getModel().color;
              if (t) {
                  var n = a.Palettes.generate(t);
                  return r({}, c.nodeSelectedOutterStyle, {
                      stroke: n[1],
                      fill: n[1]
                  })
              }
              return c.nodeSelectedOutterStyle
          },
          anchor: [[.5, 0], [1, .5], [.5, 1], [0, .5]]
      }),
      i.registerNode("capsule", {
          getPath: function(e) {
              var t = this.getSize(e);
              return a.getRectPath(-t[0] / 2, -t[1] / 2, t[0], t[1], t[1] / 2)
          }
      }),
      i.registerNode("circle", {
          getPath: function(e) {
              var t = this.getSize(e)
                , n = t[0]
                , r = t[1];
              return a.getEllipsePath(0, 0, n / 2, r / 2)
          }
      }),
      i.registerNode("rhombus", {
          getPath: function(e) {
              var t = this.getSize(e)
                , n = t[0]
                , r = t[1]
                , o = [{
                  x: 0,
                  y: 0 - r / 2
              }, {
                  x: 0 + n / 2,
                  y: 0
              }, {
                  x: 0,
                  y: 0 + r / 2
              }, {
                  x: 0 - n / 2,
                  y: 0
              }, {
                  x: 0,
                  y: 0 - r / 2
              }];
              return a.pointsToPolygon(o)
          }
      })
  }
  , function(e, t, n) {
      var r = n(13)
        , o = n(2)
        , i = n(5);
      r.registerEdge("diagram-base", {
          getPath: function(e) {
              var t = e.getPoints()
                , n = e.getSource()
                , r = e.getTarget();
              return this.getPathByPoints({
                  points: t,
                  source: n,
                  target: r,
                  item: e
              })
          },
          getPathByPoints: function(e) {
              var t = e.points;
              return o.pointsToPolygon(t)
          },
          getStyle: function(e) {
              var t = e.getModel();
              return o.mix(!0, {}, i.edgeStyle, {
                  stroke: t.color
              }, t.style)
          },
          getActivedStyle: function() {
              return i.edgeActivedStyle
          },
          getSelectedStyle: function() {
              return i.edgeSelectedStyle
          },
          getActivedOutterStyle: function() {},
          getSelectedOutterStyle: function() {}
      })
  }
  , function(e, t, n) {
      function r(e) {
          for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {}
                , r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))),
              r.forEach(function(t) {
                  o(e, t, n[t])
              })
          }
          return e
      }
      function o(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n,
          e
      }
      var i = n(13)
        , a = n(5)
        , c = n(2)
        , u = c.getGroupIconPath()
        , s = c.getCollapsedButtonPath()
        , l = c.getExpandedButtonPath()
        , d = {
          fill: "#CED4D9"
      }
        , f = {
          stroke: "#697B8C",
          fill: "#fff",
          fillOpacity: 0
      }
        , h = {
          stroke: "#697B8C",
          fill: "#fff",
          fillOpacity: 0
      }
        , g = {
          fill: "#000000",
          textBaseline: "top",
          textAlign: "left"
      }
        , p = {
          stroke: "#CED4D9",
          fill: "#F2F4F5",
          radius: 4
      }
        , m = a.groupBackgroundPadding
        , y = 40
        , v = 13
        , b = 12
        , x = 12
        , S = 8
        , w = 12
        , O = 184 - m[1] - m[3]
        , P = 40 - m[0] - m[2];
      i.registerGroup("diagram-base", {
          draw: function(e) {
              var t = e.getModel()
                , n = e.getGraphicGroup()
                , o = e.getChildrenBBox()
                , i = this.getStyle(e)
                , a = t.collapsed
                , p = t.padding ? t.padding : m;
              if (o.minX === 1 / 0 && (o.minX = t.x,
              o.maxX = t.x + O,
              o.minY = t.y,
              o.maxY = t.y + P),
              a && (o.minX = o.maxX - O,
              o.maxY = o.minY + P),
              o.maxX - o.minX < O) {
                  var _ = O - o.maxX + o.minX;
                  o.minX -= _ / 2,
                  o.maxX += _ / 2
              }
              var C = function(e, t) {
                  return e.minX - t[3]
              }(o, p)
                , E = function(e, t) {
                  return e.minY - t[0]
              }(o, p)
                , k = function(e, t) {
                  return e.maxX - e.minX + t[3] + t[1]
              }(o, p)
                , A = function(e, t) {
                  return e.maxY - e.minY + t[0] + t[2]
              }(o, p)
                , M = function(e, t, n, o) {
                  var i = t.addShape("path", {
                      attrs: r({}, o, {
                          path: n
                      })
                  });
                  return i.isGroupKeyShape = !0,
                  i
              }(0, n, c.getRectPath(C, E, k, A, i.radius), i);
              return function(e, t, n, r) {
                  var o = c.mix(!0, {}, g, {
                      x: n + y,
                      y: r + v
                  });
                  c.isString(e) ? o.text = e : c.mix(o, e),
                  t.addShape("text", {
                      attrs: o
                  })
              }(c.isNil(t.label) ? "新建分组" : t.label, n, C, E),
              function(e, t, n, o) {
                  var i = t.addShape("path", {
                      attrs: r({
                          path: e
                      }, d)
                  })
                    , a = i.getBBox();
                  i.translate(n - a.minX + S, o - a.minY + w)
              }(c.isNil(t.icon) ? u : t.icon, n, C, E),
              (function(e, t, n, o, i) {
                  var a;
                  if (e) {
                      var c = (a = t.addShape("path", {
                          attrs: r({
                              path: l
                          }, h)
                      })).getBBox()
                        , u = c.maxX - c.minX;
                      a.isExpandedButton = !0,
                      a.translate(n + i - c.minX - u - x, o - c.minY + b)
                  } else {
                      var d = (a = t.addShape("path", {
                          attrs: r({
                              path: s
                          }, f)
                      })).getBBox()
                        , g = d.maxX - d.minX;
                      a.isCollapsedButton = !0,
                      a.translate(n + i - d.minX - g - x, o - d.minY + b)
                  }
                  return a.isButton = !0,
                  a
              }(a, n, C, E, k)).item = e,
              t.x = o.minX,
              t.y = o.minY,
              M
          },
          getStyle: function(e) {
              var t = e.getModel();
              return c.mix(!0, {}, p, {
                  fill: t.color,
                  stroke: t.color
              }, t.style)
          },
          getActivedStyle: function() {
              return a.groupActivedStyle
          },
          getSelectedStyle: function() {
              return a.groupSelectedStyle
          },
          getSelectedOutterStyle: function() {
              return a.groupSelectedOutterStyle
          },
          getActivedOutterStyle: function() {},
          intersectBox: "rect"
      })
  }
  , function(e, t, n) {
      n(13).registerGuide("diagram-base")
  }
  , function(e, t, n) {
      n(81),
      n(82),
      n(83),
      n(84),
      n(85),
      n(86),
      n(87),
      n(88),
      n(89),
      n(90),
      n(91),
      n(92),
      n(93),
      n(94)
  }
  , function(e, t, n) {
      var r = n(1)
        , o = n(2);
      r.registerBehaviour("panItem", function(e) {
          var t = e.getGraph();
          t.behaviourOn("drop", function() {
              var n = e.get("panItems");
              if (n) {
                  var r = n[0]
                    , i = n.map(function(e) {
                      return e.id
                  })
                    , a = e.get("panItemDelegation")
                    , c = e.get("panItemStartBox")
                    , u = r.id
                    , s = a.attr("x") - c.minX
                    , l = a.attr("y") - c.minY;
                  t.emit("afterpanitemdrop", {
                      panItems: n
                  }),
                  e.clearAlignLine();
                  var d = e.editor;
                  t.emit("panitemend"),
                  !d || e.getSignal("dragaddnodetogroup") ? f() : d.executeCommand(f)
              }
              function f() {
                  i.forEach(function(e) {
                      var n = t.find(e)
                        , r = n.getModel();
                      n.isGroup ? o.panGroup(n, s, l, t) : (t.update(n, {
                          x: r.x + s,
                          y: r.y + l
                      }),
                      t.toFront(n))
                  }),
                  1 === i.length && (e.clearSelected(),
                  e.setSelected(u, !0))
              }
          })
      }, ["startPanItem", "processPanItem", "endPanItem"])
  }
  , function(e, t, n) {
      function r(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n,
          e
      }
      var o = n(1)
        , i = n(5);
      o.registerBehaviour("hoverAnchorActived", function(e) {
          var t = e.getGraph();
          t.behaviourOn("anchor:mouseenter", function(n) {
              if (!e.getSignal("panningItem") && !e.getSignal("dragEdge")) {
                  var o = n.shape
                    , a = o.getItem()
                    , c = a.getModel()
                    , u = function(e) {
                      for (var t = 1; t < arguments.length; t++) {
                          var n = null != arguments[t] ? arguments[t] : {}
                            , o = Object.keys(n);
                          "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                              return Object.getOwnPropertyDescriptor(n, e).enumerable
                          }))),
                          o.forEach(function(t) {
                              r(e, t, n[t])
                          })
                      }
                      return e
                  }({}, e.get("addEdgeModel"), {
                      source: c.id
                  })
                    , s = {
                      anchor: o.getPoint(),
                      item: a
                  };
                  e.emit("hoveranchor:beforeaddedge", s),
                  s.cancel ? e.css({
                      cursor: i.cursor.hoverUnEffectiveAnchor
                  }) : (e.css({
                      cursor: i.cursor.hoverEffectiveAnchor
                  }),
                  !o.get("destroyed") && o.setActived(),
                  e.beginAdd("edge", u),
                  t.draw())
              }
          }),
          t.behaviourOn("anchor:mouseleave", function(n) {
              if (!e.getSignal("dragEdge") && !e.getSignal("panningItem")) {
                  var r = n.shape
                    , o = r.getItem();
                  e.css({
                      cursor: i.cursor.beforePanCanvas
                  }),
                  o.isSelected || (e.clearAnchor(o),
                  e.setActived(o, !1)),
                  !r.get("destroyed") && r.clearActived(),
                  e.cancelAdd(),
                  t.draw()
              }
          })
      })
  }
  , function(e, t, n) {
      var r = n(1)
        , o = n(5);
      r.registerBehaviour("hoverEdgeControlPoint", function(e) {
          e.getGraph().behaviourOn("edgeControlPoint:mouseenter", function(t) {
              if (!e.getSignal("dragEdge") && !e.getSignal("panningItem")) {
                  var n = t.shape;
                  (n.isTargetEndPoint() || n.isSourceEndPoint()) && e.css({
                      cursor: o.cursor.hoverEdgeControllPoint
                  })
              }
          })
      })
  }
  , function(e, t, n) {
      var r = n(1)
        , o = n(5)
        , i = n(2);
      r.registerBehaviour("dragEdgeControlPoint", function(e) {
          var t, n, r, a, c, u, s, l, d, f, h = e.getGraph(), g = h.getRootGroup();
          function p(g) {
              if (r) {
                  var p = {};
                  h.getNodes().forEach(function(t) {
                      e.clearAnchor(t)
                  }),
                  e.css({
                      cursor: o.cursor.beforePanCanvas
                  }),
                  r.remove();
                  var m = i.dropUpdateEdge({
                      ev: g,
                      endPointType: t ? "target" : "source",
                      model: p,
                      diagram: e
                  });
                  h.show(d);
                  var y = d.id;
                  if (m) {
                      var v = e.editor;
                      v ? v.executeCommand("update", {
                          itemId: y,
                          updateModel: p
                      }) : h.update(y, p)
                  }
                  e.setSignal("dragEdge", !1),
                  t = void 0,
                  n = void 0,
                  r = void 0,
                  a = void 0,
                  c = void 0,
                  u = void 0,
                  s = void 0,
                  l = void 0,
                  d = void 0,
                  f = void 0
              }
          }
          h.behaviourOn("edgeControlPoint:mousedown", function(o) {
              if (2 !== o.button) {
                  var i = o.shape;
                  i.isTargetEndPoint() ? (d = i.getItem(),
                  f = d.getModel(),
                  t = i,
                  a = i.getSourcePoint(),
                  c = d.getSource(),
                  s = f.sourceAnchor) : i.isSourceEndPoint() && (d = i.getItem(),
                  f = d.getModel(),
                  n = i,
                  a = i.getTargetPoint(),
                  u = d.getTarget(),
                  l = f.targetAnchor),
                  d && (r = e.getDelegation([d], g),
                  c ? e.dragEdgeBeforeShowAnchor(c, s, "target") : u && e.dragEdgeBeforeShowAnchor(u, l, "source"),
                  h.hide(d),
                  e.setSignal("dragEdge", !0))
              }
          }),
          h.behaviourOn("mousemove", function(e) {
              r && i.dragingEdgeEndPoint({
                  endPointType: c ? "target" : "source",
                  edgeModel: f,
                  graph: h,
                  delegation: r,
                  startPoint: a,
                  ev: e,
                  originSource: c,
                  originTarget: u
              })
          }),
          h.behaviourOn("edgeControlPoint:mouseleave", function(r) {
              t || n || r.toShape || e.css({
                  cursor: o.cursor.beforePanCanvas
              })
          }),
          h.behaviourOn("mouseup", p),
          h.behaviourOn("canvas:mouseleave", p)
      }, ["dragHoverAnchorHotspot"])
  }
  , function(e, t, n) {
      var r = n(1)
        , o = n(2);
      r.registerBehaviour("dragPanelItemAddNode", function(e) {
          var t, n, r, i, a, c = e.getGraph(), u = c.getRootGroup();
          function s() {
              e.setSignal("panningItem", !1),
              e.set("panItemDelegation", void 0),
              e.set("panItemStartBox", void 0),
              e.set("panItemStartPoint", void 0),
              n = void 0,
              r = void 0,
              i = void 0,
              a = void 0
          }
          c.behaviourOn("canvas:mouseenter", function(c) {
              if (!n && (i = e.get("addType"),
              a = e.get("addModel"),
              a = o.clone(a),
              "node" === i)) {
                  var s = (r = o.getNodeSize(a.size))[0] / 2
                    , l = r[1] / 2;
                  t = {
                      minX: c.x - s,
                      minY: c.y - l,
                      maxX: c.x + s,
                      maxY: c.y + l,
                      width: r[0],
                      height: r[1]
                  },
                  n = e.getDelegation([t], u),
                  e.setSignal("panningItem", !0),
                  e.set("panItemDelegation", n),
                  e.set("panItemStartBox", t),
                  e.set("panItemStartPoint", {
                      x: c.x,
                      y: c.y
                  })
              }
          }),
          c.behaviourOn("mouseup", function(t) {
              if (n) {
                  a.x = t.x,
                  a.y = t.y;
                  var r = i;
                  o.setId(a);
                  var u = e.editor;
                  n.remove(),
                  e.endAdd(),
                  e.clearAlignLine(),
                  e.clearSelected(),
                  e.focusGraphWrapper(),
                  u ? u.executeCommand("add", {
                      type: "node",
                      addModel: a
                  }) : c.add(r, a),
                  e.setSelected(c.find(a.id), !0),
                  s()
              }
          }),
          c.behaviourOn("canvas:mouseleave", function() {
              n && (e.clearAlignLine(),
              n.remove(),
              c.draw(),
              e.cancelAdd(),
              s())
          })
      }, ["processPanItem"])
  }
  , function(e, t, n) {
      n(1).registerBehaviour("dragHoverAnchorHotspot", function(e) {
          var t = e.getGraph();
          t.behaviourOn("anchor:dragenter", function(t) {
              if (e.getSignal("dragEdge")) {
                  var n = t.shape;
                  e.setHotspotActived(n, !0)
              }
          }),
          t.behaviourOn("anchor:dragleave", function(t) {
              if (e.getSignal("dragEdge")) {
                  var n = t.shape;
                  e.setHotspotActived(n, !1)
              }
          })
      })
  }
  , function(e, t, n) {
      var r = n(1)
        , o = n(2);
      r.registerBehaviour("dragAnchorAddEdge", function(e) {
          var t = e.getGraph()
            , n = t.getRootGroup();
          t.behaviourOn("anchor:dragstart", function(t) {
              if (2 !== t.button) {
                  var r = t.shape
                    , i = r.get("freezePoint")
                    , a = r.getItem()
                    , c = o.clone(e.get("addModel"))
                    , u = r.getIndex();
                  c.source = a.id,
                  c.sourceAnchor = u;
                  var s = {
                      x: i.x,
                      y: i.y
                  }
                    , l = e.getDelegation([{
                      isEdge: !0
                  }], n);
                  e.setSignal("dragEdge", !0),
                  e.dragEdgeBeforeShowAnchor(a, u, "target"),
                  e.set("addEdgeConfig", {
                      addModel: c,
                      delegation: l,
                      startPoint: s,
                      sourceItem: a
                  })
              }
          })
      }, ["processAddEdge", "dragHoverAnchorHotspot", "hoverAnchorActived"])
  }
  , function(e, t, n) {
      var r = n(1)
        , o = n(5);
      r.registerBehaviour("dragMultiSelect", function(e) {
          var t, n, r = e.getGraph(), i = r.getRootGroup();
          function a() {
              e.css({
                  cursor: o.cursor.beforePanCanvas
              }),
              t = void 0,
              n = void 0
          }
          e.css({
              cursor: o.cursor.multiSelect
          }),
          r.behaviourOn("dragstart", function(e) {
              2 !== e.button && (t = {
                  x: e.x,
                  y: e.y
              },
              n = i.addShape("rect", {
                  attrs: o.multiSelectRectStyle
              }))
          }),
          r.behaviourOn("drag", function(e) {
              n && (n.attr({
                  x: Math.min(t.x, e.x),
                  y: Math.min(t.y, e.y),
                  width: Math.abs(e.x - t.x),
                  height: Math.abs(e.y - t.y)
              }),
              r.draw())
          }),
          r.behaviourOn("dragend", function() {
              if (n) {
                  var t = r.getNodes().map(function(e) {
                      return e.id
                  })
                    , o = n.getBBox()
                    , i = e.editor;
                  i ? i.executeCommand(c) : c(),
                  n.remove(),
                  e.changeMode("default"),
                  e.updateStatus(),
                  r.draw(),
                  a()
              }
              function c() {
                  e.clearSelected(),
                  t.forEach(function(t) {
                      var n = r.find(t)
                        , i = n.getBBox();
                      i.minX > o.minX && i.minY > o.minY && i.maxX < o.maxX && i.maxY < o.maxY && e.setSelected(n, !0)
                  })
              }
          }),
          r.behaviourOn("canvas:mouseleave", function() {
              n && (n.remove(),
              r.draw(),
              a())
          })
      })
  }
  , function(e, t, n) {
      n(1).registerBehaviour("keydownShiftMultiSelected", function(e) {
          var t = e.getGraph();
          t.behaviourOn("keydown", function(t) {
              t.domEvent.shiftKey && e.setSignal("shiftKeyDown", !0)
          }),
          t.behaviourOn("keyup", function(t) {
              t.domEvent.shiftKey || e.setSignal("shiftKeyDown", !1)
          })
      })
  }
  , function(e, t, n) {
      var r = n(1)
        , o = n(5);
      r.registerBehaviour("dragNodeAddToGroup", function(e) {
          var t, n, r = e.getGraph();
          function i() {
              e.setSignal("dragaddnodetogroup", !1),
              t = void 0,
              n = void 0
          }
          r.behaviourOn("dragenter", function(i) {
              if (e.getSignal("panningItem")) {
                  var a = e.get("panItems");
                  a[0] && a[0].isNode && 1 === a.length && i.item && i.item.isGroup && a[0].getParent() !== i.item && (t = a[0],
                  n = i.item,
                  r.update(n, {
                      padding: o.groupBackgroundPadding.map(function(e) {
                          return e + 4
                      }),
                      style: o.dragNodeHoverToGroupStyle
                  }))
              }
          }),
          r.behaviourOn("dragleave", function() {
              n && t && r.update(n, {
                  padding: void 0,
                  style: void 0
              })
          }),
          r.behaviourOn("drop", function(o) {
              if (n && t && n === o.item) {
                  e.setSignal("dragaddnodetogroup", !0);
                  var i = t.id
                    , a = n.id;
                  r.update(a, {
                      padding: void 0,
                      style: void 0,
                      collapsed: !1
                  });
                  var c = e.editor;
                  c ? c.executeCommand(u) : u()
              }
              function u() {
                  r.update(i, {
                      parent: a
                  })
              }
          }),
          r.behaviourOn("dragend", function() {
              i()
          }),
          r.behaviourOn("canvas:mouseleave", function() {
              n && (r.update(n, {
                  padding: void 0,
                  style: void 0
              }),
              i())
          })
      })
  }
  , function(e, t, n) {
      var r = n(1)
        , o = n(5)
        , i = n(2);
      r.registerBehaviour("dragOutFromGroup", function(e) {
          var t, n, r, a = e.getGraph(), c = !1;
          function u() {
              clearTimeout(r),
              n && a.update(n, {
                  padding: void 0,
                  style: void 0
              }),
              c = !1,
              t = void 0,
              n = void 0
          }
          a.behaviourOn("drag", function(u) {
              e.getSignal("panningItem") && !c && (clearTimeout(r),
              r = setTimeout(function() {
                  var r = e.get("panItems");
                  if (r) {
                      if (t = r[0],
                      n = r[0].getParent(),
                      t && 1 === r.length && n && !u.shape) {
                          var s = e.get("panItemDelegation").getBBox()
                            , l = n.getBBox();
                          i.rectRectCrossAlgorithm(s, l) && (a.update(n, {
                              padding: o.groupBackgroundPadding.map(function(e) {
                                  return e - 8
                              }),
                              style: o.dragNodeLeaveFromGroupStyle
                          }),
                          c = !0)
                      }
                      c || (t = void 0,
                      n = void 0)
                  }
              }, o.outFromGroupDelayTime))
          }),
          a.behaviourOn("dragenter", function(e) {
              t && n && (n === e.item && a.update(n, {
                  padding: o.groupBackgroundPadding.map(function(e) {
                      return e + 4
                  }),
                  style: o.dragNodeHoverToGroupStyle
              }),
              c = !1)
          }),
          a.on("drop", function(e) {
              n && t && !e.shape && (a.update(t, {
                  parent: void 0
              }),
              a.update(n, {
                  style: void 0
              }),
              u())
          }),
          a.on("dragend", function() {
              u()
          }),
          a.behaviourOn("canvas:mouseleave", function() {
              u()
          })
      })
  }
  , function(e, t, n) {
      var r = n(1)
        , o = n(2)
        , i = n(5);
      r.registerBehaviour("processAddEdge", function(e) {
          var t = e.getGraph();
          function n() {
              e.setSignal("dragEdge", !1),
              e.set("addEdgeConfig", {
                  addModel: void 0,
                  delegation: void 0,
                  startPoint: void 0,
                  sourceItem: void 0
              })
          }
          t.behaviourOn("mousemove", function(n) {
              var r = e.get("addEdgeConfig");
              if (r) {
                  var i = r.addModel
                    , a = r.delegation
                    , c = r.startPoint
                    , u = r.sourceItem;
                  a && o.dragingEdgeEndPoint({
                      endPointType: "target",
                      edgeModel: i,
                      graph: t,
                      delegation: a,
                      startPoint: c,
                      ev: n,
                      sourceItem: u
                  })
              }
          }),
          t.behaviourOn("mouseup", function(r) {
              var a = e.get("addEdgeConfig");
              if (a) {
                  var c = a.addModel
                    , u = a.delegation
                    , s = a.sourceItem
                    , l = e.editor;
                  if (u)
                      t.getNodes().forEach(function(t) {
                          e.clearAnchor(t)
                      }),
                      e.clearAnchor(s),
                      e.setActived(s, !1),
                      e.setSelected(s, !1),
                      e.css({
                          cursor: i.cursor.beforePanCanvas
                      }),
                      u.remove(),
                      o.dropUpdateEdge({
                          ev: r,
                          endPointType: "target",
                          model: c,
                          diagram: e
                      }) && (l ? l.executeCommand("add", {
                          type: "edge",
                          addModel: c
                      }) : t.add("edge", c)),
                      t.draw(),
                      e.endAdd(),
                      n();
                  else
                      n()
              }
          }),
          t.behaviourOn("canvas:mouseleave", function() {
              var r = e.get("addEdgeConfig");
              if (r) {
                  var o = r.delegation
                    , i = r.sourceItem;
                  if (o)
                      t.getNodes().forEach(function(t) {
                          e.clearAnchor(t)
                      }),
                      e.setActived(i, !1),
                      e.clearAnchor(i),
                      o.remove(),
                      e.cancelAdd(),
                      t.draw(),
                      n();
                  else
                      n()
              }
          })
      })
  }
  , function(e, t, n) {
      n(1).registerBehaviour("hoverNodeAddOutter", function(e) {
          var t, n = e.getGraph();
          n.behaviourOn("node:mouseenter", function(n) {
              var r = n.item;
              e.getSignal("dragEdge") && (t = r,
              e.addOutterShape(r, {
                  stroke: "#52C41A",
                  strokeOpacity: .45,
                  lineWidth: 4
              }))
          }),
          n.behaviourOn("node:mouseleave", function() {
              t && e.clearOutterShape(t)
          }),
          n.behaviourOn("beforedropedge", function() {
              t && e.clearOutterShape(t)
          })
      })
  }
  , function(e, t, n) {
      var r = n(1)
        , o = n(5)
        , i = n(2);
      r.registerBehaviour("orbit", function(e) {
          var t, n = e.getGraph();
          n.behaviourOn("beforepanitem", function() {
              e.hideOrbit()
          }),
          n.behaviourOn("node:mouseenter", function(n) {
              var r = n.item;
              e.getSignal("panningItem") || e.getSignal("dragEdge") || (t = r,
              e.showOrbit(r))
          }),
          n.on("beforeviewportchange", function() {
              e.hideOrbit()
          }),
          n.behaviourOn("mousemove", function(r) {
              var a = r.item
                , c = r.x
                , u = r.y;
              if (t) {
                  var s = t.getBBox()
                    , l = i.euclideanDistance.pointPoint({
                      x: s.centerX,
                      y: s.centerY
                  }, {
                      x: c,
                      y: u
                  })
                    , d = n.getMatrix()[0];
                  a !== t && l > s.width / 2 + o.orbitGap / d && (e.hideOrbit(),
                  t = void 0),
                  t && e.layoutOrbit(t, {
                      x: c,
                      y: u
                  })
              }
          })
      })
  }
  , function(e, t, n) {
      var r = n(11);
      n(96),
      e.exports = r
  }
  , function(e, t, n) {
      n(97),
      n(98),
      n(99),
      n(100),
      n(101)
  }
  , function(e, t, n) {
      var r = n(11);
      r.registerNode("flow-base", {}),
      r.registerNode("flow-html", {}, ["html"]),
      r.registerNode("flow-rect", {}, "flow-base"),
      r.registerNode("flow-capsule", {}, "capsule"),
      r.registerNode("flow-circle", {}, "circle"),
      r.registerNode("flow-rhombus", {}, "rhombus")
  }
  , function(e, t, n) {
      n(11).registerEdge("flow-base", {})
  }
  , function(e, t, n) {
      var r = n(19)
        , o = n(11);
      function i(e, t, n, r) {
          var o = r ? r / 2 : 30
            , i = r;
          if (e <= t && t <= n || e >= t && t >= n) {
              var a = (n - t) / 2
                , c = Math.abs(a);
              if (0 === a)
                  return e === t ? 0 : (t - e) / Math.abs(t - e) * o;
              if (c > i) {
                  var u = a / c * i;
                  return Math.abs(u) < o ? a / c * o : u
              }
              return c < o ? a / c * o : a
          }
          var s = o;
          return (s = Math.abs(t - n) < 2 * Math.abs(t - e) ? r * Math.abs(t - n) / (2 * Math.abs(t - e)) : r) > i && (s = i),
          s < o && (s = o),
          t > e ? s : -s
      }
      function a(e, t, n, r) {
          var o, a, c = e.bbox, u = function(e, t) {
              var n = Math.abs(e.x - t.centerX)
                , r = Math.abs(e.y - t.centerY);
              return n / t.width > r / t.height
          }(t, c);
          o = a = 0;
          var s = Math.min(c.height, c.width);
          return r && r.bbox && (s = Math.min(s, r.bbox.height, r.bbox.width)),
          u ? o = i(c.centerX, t.x, n.x, s) : a = i(c.centerY, t.y, n.y, s),
          {
              x: t.x + o,
              y: t.y + a
          }
      }
      var c = .1;
      function u(e, t) {
          var n = e.x
            , r = e.y
            , o = t.x
            , i = t.y;
          return {
              x: n + (o - n) * c,
              y: r + (i - r) * c
          }
      }
      function s(e, t, n) {
          var o = e[0]
            , i = e[e.length - 1]
            , c = ["M", o.x, o.y]
            , s = function(e, t, n, r) {
              return [n && n.bbox ? a(n, e, t, r) : u(e, t), r && r.bbox ? a(r, t, e, n) : u(t, e)]
          }(o, i, t, n)
            , l = ["C"]
            , d = [c];
          return r.each(s, function(e) {
              l.push(e.x, e.y)
          }),
          l.push(i.x, i.y),
          d.push(l),
          d
      }
      o.registerEdge("flow-smooth", {
          getPathByPoints: function(e) {
              return s(e.points, e.source, e.target)
          }
      }, "flow-edge")
  }
  , function(e, t, n) {
      function r(e) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          )(e)
      }
      function o(e, t) {
          return function(e) {
              if (Array.isArray(e))
                  return e
          }(e) || function(e, t) {
              var n = []
                , r = !0
                , o = !1
                , i = void 0;
              try {
                  for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value),
                  !t || n.length !== t); r = !0)
                      ;
              } catch (e) {
                  o = !0,
                  i = e
              } finally {
                  try {
                      r || null == c.return || c.return()
                  } finally {
                      if (o)
                          throw i
                  }
              }
              return n
          }(e, t) || function() {
              throw new TypeError("Invalid attempt to destructure non-iterable instance")
          }()
      }
      var i = n(19)
        , a = n(11)
        , c = 16
        , u = 5;
      function s(e, t) {
          var n = Math.min(e.minX, t.minX)
            , r = Math.min(e.minY, t.minY)
            , o = Math.max(e.maxX, t.maxX)
            , i = Math.max(e.maxY, t.maxY);
          return {
              centerX: (n + o) / 2,
              centerY: (r + i) / 2,
              minX: n,
              minY: r,
              maxX: o,
              maxY: i,
              height: i - r,
              width: o - n
          }
      }
      function l(e, t) {
          return 2 * Math.abs(e.centerX - t.centerX) < e.width + t.width && 2 * Math.abs(e.centerY - t.centerY) < e.height + t.height
      }
      function d(e) {
          var t = e.x
            , n = e.y;
          return {
              centerX: t,
              centerY: n,
              minX: t,
              minY: n,
              maxX: t,
              maxY: n,
              height: 0,
              width: 0
          }
      }
      function f(e, t) {
          return 0 === e.width && 0 === e.height ? e : {
              centerX: e.centerX,
              centerY: e.centerY,
              minX: e.minX - t,
              minY: e.minY - t,
              maxX: e.maxX + t,
              maxY: e.maxY + t,
              height: e.height + 2 * t,
              width: e.width + 2 * t
          }
      }
      function h(e, t) {
          return function(e, t) {
              var n = Math.abs(e.x - t.centerX)
                , r = Math.abs(e.y - t.centerY);
              return n / t.width > r / t.height
          }(t, e) ? {
              x: t.x > e.centerX ? e.maxX : e.minX,
              y: t.y
          } : {
              x: t.x,
              y: t.y > e.centerY ? e.maxY : e.minY
          }
      }
      function g(e) {
          var t = e.minX
            , n = e.minY
            , r = e.maxX
            , o = e.maxY;
          return [{
              x: t,
              y: n
          }, {
              x: r,
              y: n
          }, {
              x: r,
              y: o
          }, {
              x: t,
              y: o
          }]
      }
      function p(e, t) {
          var n = e.x
            , r = e.y;
          return n < t.minX || n > t.maxX || r < t.minY || r > t.maxY
      }
      function m(e, t, n, r) {
          var o = t.x - e.x
            , i = t.y - e.y
            , a = r.x - n.x
            , c = r.y - n.y
            , u = (-i * (e.x - n.x) + o * (e.y - n.y)) / (-a * i + o * c)
            , s = (a * (e.y - n.y) - c * (e.x - n.x)) / (-a * i + o * c);
          return u >= 0 && u <= 1 && s >= 0 && s <= 1
      }
      function y(e, t, n) {
          if (n.width === n.height === 0)
              return !1;
          var r = o(g(n), 4)
            , i = r[0]
            , a = r[1]
            , c = r[2]
            , u = r[3];
          return m(e, t, i, a) || m(e, t, i, u) || m(e, t, a, c) || m(e, t, c, u)
      }
      function v(e) {
          return e = x(e)
      }
      function b(e, t) {
          return [e, {
              x: e.x,
              y: t.y
          }, t]
      }
      function x(e) {
          var t = []
            , n = {};
          return e.forEach(function(e) {
              var t = e.id = "".concat(e.x, "-").concat(e.y);
              n[t] = e
          }),
          i.each(n, function(e) {
              t.push(e)
          }),
          t
      }
      function S(e, t) {
          return Math.abs(e.x - t.x) + Math.abs(e.y - t.y)
      }
      function w(e, t, n, r, o) {
          return S(e, t) + S(e, n) + function(e, t) {
              var n = 0;
              return t.forEach(function(t) {
                  t && (e.x === t.x && (n += -2),
                  e.y === t.y && (n += -2))
              }),
              n
          }(e, [t, n, r, o])
      }
      function O(e, t, n, o, i, a, c) {
          var u = []
            , s = [t]
            , l = {}
            , d = {}
            , f = {};
          d[t.id] = 0,
          f[t.id] = w(t, n, t);
          var h = {};
          e.forEach(function(e) {
              h[e.id] = e
          });
          for (var g = function() {
              var r, g, p, m = void 0, v = 1 / 0;
              if (s.forEach(function(e) {
                  f[e.id] < v && (v = f[e.id],
                  m = e)
              }),
              m === n) {
                  var b = [];
                  return function e(t, n, r, o) {
                      var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                      t.unshift(n[o]),
                      r[o] && r[o] !== o && i <= 100 && e(t, n, r, r[o], i + 1)
                  }(b, h, l, n.id),
                  {
                      v: b
                  }
              }
              g = m,
              (p = (r = s).indexOf(g)) > -1 && r.splice(p, 1),
              u.push(m),
              function(e, t, n, r) {
                  var o = [];
                  return e.forEach(function(e) {
                      e !== t && (e.x !== t.x && e.y !== t.y || y(e, t, n) || y(e, t, r) || o.push(e))
                  }),
                  x(o)
              }(e, m, o, i).forEach(function(e) {
                  if (-1 === u.indexOf(e)) {
                      -1 === s.indexOf(e) && s.push(e);
                      var r = f[m.id] + S(m, e);
                      d[e.id] && r >= d[e.id] || (l[e.id] = m.id,
                      d[e.id] = r,
                      f[e.id] = d[e.id] + w(e, n, t, a, c))
                  }
              })
          }; s.length; ) {
              var p = g();
              if ("object" === r(p))
                  return p.v
          }
          return console.error("cannot find path: ", e, t, n),
          [t, n]
      }
      function P(e, t, n, r, o) {
          var i = n && n.bbox ? n.bbox : d(e)
            , a = r && r.bbox ? r.bbox : d(t);
          if (l(i, a))
              return v(b(e, t));
          var c = f(i, o)
            , u = f(a, o);
          if (l(c, u))
              return v(b(e, t));
          var m = h(c, e)
            , y = h(u, t)
            , S = function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                , t = []
                , n = [];
              e.forEach(function(e) {
                  t.push(e.x),
                  n.push(e.y)
              });
              var r = Math.min.apply(Math, t)
                , o = Math.max.apply(Math, t)
                , i = Math.min.apply(Math, n)
                , a = Math.max.apply(Math, n);
              return {
                  centerX: (r + o) / 2,
                  centerY: (i + a) / 2,
                  maxX: o,
                  maxY: a,
                  minX: r,
                  minY: i,
                  height: a - i,
                  width: o - r
              }
          }([m, y])
            , w = (s(c, u),
          s(c, S))
            , P = s(u, S)
            , _ = [];
          _ = (_ = _.concat(g(w))).concat(g(P));
          var C = {
              x: (e.x + t.x) / 2,
              y: (e.y + t.y) / 2
          };
          [S, w, P].forEach(function(e) {
              _ = _.concat(function(e, t) {
                  return function(e, t) {
                      return t < e.minX || t > e.maxX ? [] : [{
                          x: t,
                          y: e.minY
                      }, {
                          x: t,
                          y: e.maxY
                      }]
                  }(e, t.x).concat(function(e, t) {
                      return t < e.minY || t > e.maxY ? [] : [{
                          x: e.minX,
                          y: t
                      }, {
                          x: e.maxX,
                          y: t
                      }]
                  }(e, t.y))
              }(e, C).filter(function(e) {
                  return p(e, c) && p(e, u)
              }))
          }),
          [{
              x: m.x,
              y: y.y
          }, {
              x: y.x,
              y: m.y
          }].forEach(function(e) {
              p(e, c) && p(e, u) && _.push(e)
          }),
          _.unshift(m),
          _.push(y);
          var E = O(_ = x(_), m, y, i, a, e, t);
          return E.unshift(e),
          E.push(t),
          v(E)
      }
      function _(e, t) {
          var n = []
            , r = e[0];
          return n.push("M".concat(r.x, " ").concat(r.y)),
          e.forEach(function(r, i) {
              var a = e[i + 1]
                , c = e[i + 2];
              if (a && c)
                  if (function(e, t, n) {
                      return !(e.x === t.x === n.x || e.y === t.y === n.y)
                  }(r, a, c)) {
                      var u = o(function(e, t, n, r) {
                          var o = S(e, t)
                            , i = S(n, t);
                          return o < r && (r = o),
                          i < r && (r = i),
                          [{
                              x: t.x - r / o * (t.x - e.x),
                              y: t.y - r / o * (t.y - e.y)
                          }, {
                              x: t.x - r / i * (t.x - n.x),
                              y: t.y - r / i * (t.y - n.y)
                          }]
                      }(r, a, c, t), 2)
                        , s = u[0]
                        , l = u[1];
                      n.push("L".concat(s.x, " ").concat(s.y)),
                      n.push("Q".concat(a.x, " ").concat(a.y, " ").concat(l.x, " ").concat(l.y)),
                      n.push("L".concat(l.x, " ").concat(l.y))
                  } else
                      n.push("L".concat(a.x, " ").concat(a.y));
              else
                  a && n.push("L".concat(a.x, " ").concat(a.y))
          }),
          n.join("")
      }
      a.registerEdge("flow-polyline", {
          getPathByPoints: function(e) {
              var t = e.points
                , n = e.source
                , r = e.target
                , o = c
                , a = P(t[0], t[t.length - 1], n, r, o);
              return i.pointsToPolygon(a)
          }
      }),
      a.registerEdge("flow-polyline-round", {
          getPathByPoints: function(e) {
              var t = e.points
                , n = e.source
                , r = e.target
                , o = c
                , i = u;
              return _(v(P(t[0], t[t.length - 1], n, r, o)), i)
          }
      })
  }
  , function(e, t, n) {
      n(11).registerGroup("flow-base", {})
  }
  , function(e, t, n) {
      var r = n(17);
      n(103),
      e.exports = r
  }
  , function(e, t, n) {
      n(104),
      n(105),
      n(106)
  }
  , function(e, t, n) {
      n(17).registerNode("koni-base", {
          defaultFillPalette: 5,
          defaultStrokePalette: 5,
          activedFillPalette: 4,
          activedStrokePalette: 6,
          selectedFillPalette: 5,
          selectedStrokePalette: 6,
          anchor: null
      }, "circle")
  }
  , function(e, t, n) {
      var r = n(17)
        , o = n(24)
        , i = o.vec2;
      r.registerEdge("koni-base", {
          getDefaultLabelRectPadding: function() {
              return o.toAllPadding([0, 2])
          },
          getPathByPoints: function(e) {
              var t = e.points
                , n = e.source
                , r = e.target
                , a = e.item;
              if (n && r) {
                  var c = o.getParallelEdges(r, n)
                    , u = o.getParallelEdges(n, r)
                    , s = u.indexOf(a);
                  return n === r ? (s = (u = u.filter(function(e) {
                      var t = e.getModel();
                      return t.source === n.id && t.target === r.id
                  })).indexOf(a),
                  function(e, t) {
                      var n = e.getBBox()
                        , r = [n.centerX, n.centerY]
                        , o = n.width / 2
                        , a = 50 * (t + 1) + 50
                        , c = [r[0] - o / 2, r[1] - Math.sqrt(3) / 2 * o]
                        , u = [c[0] - r[0], c[1] - r[1]]
                        , s = i.scale([], u, (o + a) / o)
                        , l = [r[0] + s[0], r[1] + s[1]]
                        , d = [r[0] + o / 2, r[1] - Math.sqrt(3) / 2 * o]
                        , f = [d[0] - r[0], d[1] - r[1]]
                        , h = i.scale([], f, (o + a) / o)
                        , g = [r[0] + h[0], r[1] + h[1]];
                      return [["M", c[0], c[1]], ["C", l[0], l[1], g[0], g[1], d[0], d[1]]]
                  }(n, s)) : (0 === c.length && s--,
                  function(e, t, n) {
                      var r = e.getBBox()
                        , o = t.getBBox()
                        , a = r.centerX
                        , c = r.centerY
                        , u = 20 * (n + 1)
                        , s = [.5 * (o.centerX + a) - a, .5 * (o.centerY + c) - c]
                        , l = [-s[1], s[0]]
                        , d = i.length(l);
                      i.scale(l, l, u / d);
                      var f = {
                          x: s[0] + l[0] + a,
                          y: s[1] + l[1] + c
                      }
                        , h = e.getLinkPoints(f)[0]
                        , g = t.getLinkPoints(f)[0];
                      return [["M", h.x, h.y], ["Q", f.x, f.y, g.x, g.y]]
                  }(n, r, s))
              }
              return o.pointsToPolygon(t)
          }
      })
  }
  , function(e, t, n) {
      n(17).registerGroup("koni-base", {})
  }
  , function(e, t, n) {
      var r = n(8);
      r.Util = n(10),
      n(108),
      n(112),
      n(120),
      e.exports = r
  }
  , function(e, t, n) {
      n(109),
      n(110),
      n(111)
  }
  , function(e, t, n) {
      var r = n(1)
        , o = n(10);
      r.registerBehaviour("panMindNode", function(e) {
          var t, n, r, i = e.getGraph();
          function a() {
              t.nth = n;
              var o = i.add("node", t);
              e.setSelected(o, !0),
              r && i.remove(r.id)
          }
          function c() {
              i.emit("panitemend"),
              t = void 0,
              r = void 0,
              n = void 0
          }
          i.behaviourOn("beforeshowdelegation", function() {
              e.clearSelected(),
              e.clearActived()
          }),
          i.behaviourOn("node:dragstart", function(e) {
              if (2 !== e.button) {
                  var r = e.item;
                  !(t = r.getModel()).parent || e.shape.isCollapsedButton || e.shape.isExpandedButton ? c() : (n = i.getNth(r),
                  i.remove(r))
              }
          }),
          i.behaviourOn("itempanning", function(t) {
              if (!t.shape || !t.shape.isPlaceholder) {
                  var n = e.getHotArea(t)
                    , o = e.getRoot();
                  if (r && (n ? r.id !== n.id && i.remove(i.find(r.id)) : i.remove(i.find(r.id))),
                  r = n,
                  n) {
                      var a = n.parent;
                      if (!i.find(n.id)) {
                          var c = {
                              id: n.id,
                              parent: a.id,
                              isPlaceholder: !0,
                              parentModel: a,
                              baseline: r.parent.id === o.id ? "center" : void 0,
                              shape: "mind-placeholder",
                              nth: n.nth
                          };
                          n.side && (c.side = n.side),
                          i.add("node", c)
                      }
                  }
              }
          }),
          i.behaviourOn("drop", function() {
              if (t)
                  if (r) {
                      var u = o.clone(t);
                      i.remove(r.id),
                      e.executeCommand("moveMindNode", {
                          model: u,
                          newParentId: r.parent.id,
                          newNth: r.nth,
                          newSide: r.side,
                          originParentId: t.parent,
                          originNth: n,
                          originSide: t.side
                      })
                  } else
                      a();
              c()
          }),
          i.behaviourOn("canvas:mouseleave", function() {
              t && (a(),
              c())
          })
      }, ["startPanItem", "processPanItem", "endPanItem"])
  }
  , function(e, t, n) {
      n(1).registerBehaviour("keydownMoveSelection", function(e) {
          e.getGraph().on("keydown", function(t) {
              e._moveItemSelection(t)
          })
      })
  }
  , function(e, t, n) {
      n(1).registerBehaviour("keydownEditLabel", function(e) {
          e.getGraph().behaviourOn("keydown", function(t) {
              e.showLabelEditor(t)
          })
      })
  }
  , function(e, t, n) {
      n(113),
      n(114),
      n(115),
      n(116),
      n(117),
      n(118),
      n(119)
  }
  , function(e, t, n) {
      function r(e) {
          for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {}
                , r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))),
              r.forEach(function(t) {
                  o(e, t, n[t])
              })
          }
          return e
      }
      function o(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n,
          e
      }
      var i = n(8)
        , a = n(10)
        , c = {
          fill: "#000",
          textAlign: "left",
          textBaseline: "top"
      }
        , u = {
          stroke: "#959EA6",
          strokeOpacity: 0,
          fill: "#959EA6",
          cursor: "pointer"
      }
        , s = {
          stroke: "#434B54",
          fill: "#fff",
          cursor: "pointer"
      };
      i.registerNode("mind-base", {
          dy: 4,
          afterDraw: function(e) {
              var t = e.getModel();
              t.children && t.children.length > 0 && t.collapsed && this.drawExpandedButton(e)
          },
          debugDrawLayoutPoint: function(e) {
              var t = e.getModel();
              e.getGraphicGroup().addShape("circle", {
                  attrs: {
                      x: t.x,
                      y: t.y,
                      r: 5,
                      fill: "red"
                  }
              })
          },
          drawExpandedButton: function(e) {
              var t = e.getKeyShape().getBBox()
                , n = e.getGraphicGroup().addGroup()
                , o = n.addShape("path", {
                  attrs: r({
                      path: a.getRectPath(0, 0, 16, 7, 3)
                  }, u)
              })
                , i = o.getBBox()
                , c = a.getMindNodeSide(e)
                , s = this.getButtonPositon(t, i, c)
                , l = {
                  fill: "white",
                  r: 1
              };
              n.addShape("circle", {
                  attrs: r({}, l, {
                      x: 4,
                      y: 3.5
                  }),
                  capture: !1
              }),
              n.addShape("circle", {
                  attrs: r({}, l, {
                      x: 8,
                      y: 3.5
                  }),
                  capture: !1
              }),
              n.addShape("circle", {
                  attrs: r({}, l, {
                      x: 12,
                      y: 3.5
                  }),
                  capture: !1
              }),
              o.attr("lineAppendWidth", 20),
              n.translate(s.x, s.y),
              o.isExpandedButton = !0,
              o.isButton = !0
          },
          drawCollapsedButton: function(e) {
              var t = e.getKeyShape().getBBox()
                , n = e.getGraphicGroup().addShape("path", {
                  attrs: r({
                      path: a.getCollapsedButtonPath()
                  }, s)
              })
                , o = n.getBBox()
                , i = a.getMindNodeSide(e)
                , c = this.getButtonPositon(t, o, i);
              n.translate(c.x, c.y),
              n.isCollapsedButton = !0,
              n.isButton = !0
          },
          getButtonPositon: function(e, t, n) {
              return "right" === n ? {
                  x: e.maxX + 2,
                  y: e.maxY - (t.maxY - t.minY) / 2
              } : {
                  x: e.minX - (t.maxX - t.minX) - 2,
                  y: e.maxY - (t.maxY - t.minY) / 2
              }
          },
          getLabel: function(e) {
              return e.getModel().label
          },
          getPadding: function() {
              return [4, 8, 4, 8]
          },
          getSize: function(e) {
              var t = e.getModel()
                , n = e.getGraphicGroup()
                , r = t.size;
              if (t.size) {
                  if (a.isArray(r))
                      return r;
                  if (a.isNumber(r))
                      return [r, r]
              }
              var o = n.findByClass("label")[0]
                , i = this.getPadding(e)
                , c = o.getBBox();
              return [c.width + i[1] + i[3], c.height + i[0] + i[2]]
          },
          getPath: function(e) {
              var t = this.getSize(e)
                , n = this.getStyle(e);
              return a.getRectPath(-t[0] / 2, -t[1] / 2 + this.dy, t[0], t[1], n.radius)
          },
          drawLabel: function(e) {
              var t = e.getGraphicGroup()
                , n = this.getLabel(e)
                , r = this.getLabelStyle(e);
              n || (n = " ");
              var o = a.mix(!0, {}, c, r, {
                  x: 0,
                  y: 0
              });
              a.isObject(n) ? a.mix(o, n) : o.text = n;
              var i = t.addShape("text", {
                  class: "label",
                  attrs: o
              });
              return this.adjustLabelText(i),
              this.adjustLabelPosition(e, i),
              i
          },
          adjustLabelText: function(e) {
              var t = e.attr("text")
                , n = e.getBBox();
              if (n.maxX - n.minX > 400) {
                  var r = e.attr("font");
                  t = a.getLabelTextByTextLineWidth(t, r),
                  e.attr("text", t)
              }
          },
          adjustLabelPosition: function(e, t) {
              var n = this.getSize(e)
                , r = this.getPadding()
                , o = n[0]
                , i = t.getBBox();
              t.attr({
                  x: -o / 2 + r[3],
                  y: -i.height / 2 + this.dy
              })
          },
          getLabelStyle: function() {
              return {
                  fill: "rgba(38,38,38,0.85)",
                  lineHeight: 18,
                  fontSize: 12
              }
          },
          getStyle: function() {
              return {
                  fill: "#ccc",
                  fillOpacity: 0,
                  radius: 4,
                  lineWidth: 2
              }
          },
          getActivedStyle: function() {
              return {
                  stroke: "#44C0FF",
                  lineWidth: 2
              }
          },
          getSelectedStyle: function() {
              return {
                  stroke: "#1AA7EE",
                  lineWidth: 2
              }
          },
          anchor: [[0, 1], [1, 1]]
      })
  }
  , function(e, t, n) {
      n(8).registerNode("mind-first-sub", {
          dy: 0,
          getPadding: function() {
              return [6, 12, 8, 12]
          },
          getLabelStyle: function() {
              return {
                  fill: "rgba(38,38,38,0.85)",
                  fontWeight: 500,
                  fontSize: 14,
                  lineHeight: 20
              }
          }
      })
  }
  , function(e, t, n) {
      n(8).registerNode("mind-second-sub", {
          dy: 0,
          getPadding: function() {
              return [8, 4, 8, 4]
          },
          getLabelStyle: function() {
              return {
                  fill: "rgba(38,38,38,0.85)",
                  fontSize: 12,
                  lineHeight: 20
              }
          }
      })
  }
  , function(e, t, n) {
      var r = n(8)
        , o = n(10);
      r.registerNode("mind-root", {
          adjustLabelPosition: function(e, t) {
              var n = t.getBBox();
              t.attr({
                  x: -n.width / 2,
                  y: -n.height / 2 - 1
              })
          },
          getPath: function(e) {
              var t = this.getSize(e)
                , n = this.getStyle(e);
              return o.getRectPath(-t[0] / 2, -t[1] / 2, t[0], t[1], n.radius)
          },
          getButtonPositon: function(e, t, n) {
              return "right" === n ? {
                  x: e.maxX + 2,
                  y: (e.maxY + e.minY) / 2 - (t.maxY - t.minY) / 2
              } : {
                  x: e.minX - (t.maxX - t.minX) - 2,
                  y: (e.maxY + e.minY) / 2 - (t.maxY - t.minY) / 2
              }
          },
          getPadding: function() {
              return o.toAllPadding([12, 24])
          },
          getStyle: function() {
              return {
                  fill: "#587EF7",
                  stroke: "#587EF7",
                  fillOpacity: 1,
                  radius: 4
              }
          },
          getLabelStyle: function() {
              return {
                  fontSize: 20,
                  fill: "white",
                  lineHeight: 28
              }
          },
          drawExpandedButton: function() {},
          drawCollapsedButton: function() {},
          panAble: !1,
          anchor: [[.45, .5], [.55, .5]]
      }, "mind-first-sub")
  }
  , function(e, t, n) {
      var r = n(8)
        , o = n(10);
      r.registerNode("mind-placeholder", {
          afterDraw: function(e) {
              e.getKeyShape().isPlaceholder = !0
          },
          getPath: function(e) {
              var t, n = e.getModel().parentModel, r = this.getStyle(e), i = 0;
              return n.hierarchy <= 2 ? t = 28 : (t = 20,
              i = 4),
              o.getRectPath(-27.5, -t / 2 + i, 55, t, r.radius)
          },
          getStyle: function() {
              return {
                  fill: "#91D5FF",
                  radius: 4,
                  lineWidth: 3
              }
          },
          drawExpandedButton: function() {},
          drawCollapsedButton: function() {},
          anchor: function() {
              return [[0, 1], [1, 1]]
          }
      })
  }
  , function(e, t, n) {
      n(8).registerEdge("mind-edge", {
          getEdetal: function(e) {
              return e.children && e.children.length > 0 && !e.collapsed ? 2 === e.hierarchy ? 24 : 18 : 0
          },
          getPath: function(e) {
              var t = e.getPoints()
                , n = e.getSource()
                , r = e.getTarget()
                , o = n.getBBox()
                , i = r.getBBox()
                , a = r.getModel()
                , c = 14
                , u = 4;
              if (2 === a.hierarchy && (c = 66,
              u = 30),
              t[0].y === t[1].y) {
                  var s = 3 === a.hierarchy ? 24 : 18
                    , l = this.getEdetal(a);
                  return o.centerX < i.centerX ? [["M", t[0].x + s, t[0].y], ["L", i.maxX + l, i.maxY]] : [["M", t[0].x + 2, t[0].y], ["L", i.minX - l, i.maxY]]
              }
              if (a.hierarchy >= 3) {
                  var d = 3 === a.hierarchy ? 24 : 18
                    , f = this.getEdetal(a);
                  if (o.centerX < i.centerX) {
                      var h = t[0].x + d;
                      return [["M", t[0].x, t[0].y], ["M", h, t[0].y], ["C", h + u, t[0].y, i.minX - c, i.maxY, i.minX, i.maxY], ["L", i.maxX + f, i.maxY]]
                  }
                  var g = t[0].x - d;
                  return [["M", t[0].x, t[0].y], ["M", g, t[0].y], ["C", g - u, t[0].y, i.maxX + c, i.maxY, i.maxX, i.maxY], ["L", i.minX - f, i.maxY]]
              }
              var p = this.getEdetal(a);
              return o.centerX < i.centerX ? [["M", t[0].x, t[0].y], ["C", t[0].x + u, t[0].y, i.minX - c, i.maxY, i.minX, i.maxY], ["L", i.maxX + p, i.maxY]] : [["M", t[0].x, t[0].y], ["C", t[0].x - u, t[0].y, i.maxX + c, i.maxY, i.maxX, i.maxY], ["L", i.minX - p, i.maxY]]
          },
          getStyle: function(e) {
              var t = e.getTarget()
                , n = 1;
              if (t) {
                  var r = t.getModel();
                  n = r.hierarchy <= 3 ? 3 : r.hierarchy <= 5 ? 2 : 1
              }
              return {
                  stroke: "#959EA6",
                  lineWidth: n
              }
          }
      })
  }
  , function(e, t, n) {
      function r(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n,
          e
      }
      n(8).registerEdge("mind-placeholder-edge", {
          getOriginShapeObject: function(e) {
              return e.getGraph().getShapeObj("edge", {
                  shape: "mind-edge"
              })
          },
          getPath: function(e) {
              return this.getOriginShapeObject(e).getPath(e)
          },
          getStyle: function(e) {
              return function(e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {}
                        , o = Object.keys(n);
                      "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                          return Object.getOwnPropertyDescriptor(n, e).enumerable
                      }))),
                      o.forEach(function(t) {
                          r(e, t, n[t])
                      })
                  }
                  return e
              }({}, this.getOriginShapeObject(e).getStyle(e), {
                  stroke: "#91D5FF"
              })
          }
      })
  }
  , function(e, t, n) {
      var r = n(15)
        , o = n(10);
      function i(e, t, n) {
          var r = e.getGraph()
            , o = t.getModel()
            , i = e.getFirstChildrenBySide("left")
            , a = i[0] && r.find(i[0].id);
          return r.add("node", {
              id: n,
              parent: t.id,
              label: "新建节点",
              side: o.children.length > 2 ? "left" : "right",
              nth: a ? r.getNth(a) : void 0
          })
      }
      r.registerCommand("append", {
          enable: function(e) {
              var t = e.getCurrentPage()
                , n = t.getSelected();
              return t.isMind && 1 === n.length
          },
          getItem: function(e) {
              var t = e.getCurrentPage()
                , n = t.getGraph();
              return this.selectedItemId ? n.find(this.selectedItemId) : t.getSelected()[0]
          },
          execute: function(e) {
              var t, n = e.getCurrentPage(), r = n.getGraph(), o = n.getRoot(), a = this.getItem(e), c = a.getModel(), u = c.hierarchy, s = a.getParent();
              if (a.isRoot)
                  t = i(n, a, this.addItemId);
              else {
                  var l = r.getNth(a);
                  t = r.add("node", {
                      id: this.addItemId,
                      parent: s.id,
                      side: 2 === u && 3 === o.children.length ? "left" : c.side,
                      label: "新建节点",
                      nth: "left" === c.side && 2 === u ? l : l + 1
                  })
              }
              n.clearSelected(),
              n.clearActived(),
              n.setSelected(t, !0),
              1 === this.executeTimes && (this.selectedItemId = a.id,
              this.addItemId = t.id,
              n.beginEditLabel(t))
          },
          back: function(e) {
              var t = e.getCurrentPage();
              t.getGraph().remove(this.addItemId),
              t.clearSelected(),
              t.clearActived(),
              t.setSelected(this.selectedItemId, !0)
          },
          shortcutCodes: ["Enter"]
      }),
      r.registerCommand("appendChild", {
          enable: function(e) {
              var t = e.getCurrentPage()
                , n = t.getSelected();
              return t.isMind && n.length > 0
          },
          getItem: function(e) {
              var t = e.getCurrentPage()
                , n = t.getGraph();
              return this.selectedItemId ? n.find(this.selectedItemId) : t.getSelected()[0]
          },
          execute: function(e) {
              var t, n = e.getCurrentPage(), r = n.getGraph(), o = this.getItem(e);
              t = o.isRoot ? i(n, o, this.addItemId) : r.add("node", {
                  id: this.addItemId,
                  parent: o.id,
                  label: "新建节点"
              }),
              n.clearSelected(),
              n.clearActived(),
              n.setSelected(t, !0),
              1 === this.executeTimes && (this.selectedItemId = o.id,
              this.addItemId = t.id,
              n.beginEditLabel(t))
          },
          back: function(e) {
              var t = e.getCurrentPage();
              t.getGraph().remove(this.addItemId),
              t.clearSelected(),
              t.clearActived(),
              t.setSelected(this.selectedItemId, !0)
          },
          shortcutCodes: ["Tab"]
      }),
      r.registerCommand("moveMindNode", {
          enable: function(e) {
              var t = e.getCurrentPage()
                , n = t.get("panItems");
              return t.isMind && n && n.length > 0
          },
          execute: function(e) {
              var t = e.getCurrentPage()
                , n = t.getGraph()
                , r = this.newParentId
                , i = this.newNth
                , a = this.newSide
                , c = o.clone(this.model);
              delete c.shape,
              delete c.side,
              n.remove(c.id),
              o.mix(c, {
                  parent: r,
                  nth: i,
                  side: a
              });
              var u = n.add("node", c);
              t.clearSelected(),
              t.setSelected(u, !0)
          },
          back: function(e) {
              var t = e.getCurrentPage()
                , n = t.getGraph()
                , r = this.originParentId
                , i = this.originNth
                , a = this.originSide
                , c = o.clone(this.model);
              delete c.shape,
              delete c.side,
              n.remove(c.id),
              o.mix(c, {
                  parent: r,
                  nth: i,
                  side: a
              });
              var u = n.add("node", c);
              t.clearSelected(),
              t.setSelected(u, !0)
          }
      })
  }
  , function(e, t, n) {
      function r(e) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          )(e)
      }
      function o(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1,
              r.configurable = !0,
              "value"in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
      }
      function i(e, t) {
          return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
              if (void 0 === e)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
          }(e) : t
      }
      function a(e) {
          return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          }
          )(e)
      }
      function c(e, t) {
          return (c = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t,
              e
          }
          )(e, t)
      }
      var u = n(6)
        , s = n(9)
        , l = function(e) {
          function t() {
              return function(e, t) {
                  if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function")
              }(this, t),
              i(this, a(t).apply(this, arguments))
          }
          var n, r, l;
          return function(e, t) {
              if ("function" != typeof t && null !== t)
                  throw new TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                      value: e,
                      writable: !0,
                      configurable: !0
                  }
              }),
              t && c(e, t)
          }(t, s),
          n = t,
          (r = [{
              key: "getDefaultCfg",
              value: function() {
                  return {
                      type: "toolbar",
                      container: null
                  }
              }
          }, {
              key: "init",
              value: function() {
                  this._initContainer()
              }
          }, {
              key: "_initContainer",
              value: function() {
                  var e = this.container;
                  if (!e)
                      throw new Error("please set the container for the toolbar !");
                  u.isString(e) && (e = document.getElementById(e));
                  var t = e.getElementsByClassName("command");
                  this.commands = t
              }
          }, {
              key: "getCommandDoms",
              value: function() {
                  return this.commands
              }
          }]) && o(n.prototype, r),
          l && o(n, l),
          t
      }();
      e.exports = l
  }
  , function(e, t, n) {
      function r(e) {
          return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
              return typeof e
          }
          : function(e) {
              return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          )(e)
      }
      function o(e, t) {
          for (var n = 0; n < t.length; n++) {
              var r = t[n];
              r.enumerable = r.enumerable || !1,
              r.configurable = !0,
              "value"in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
      }
      function i(e, t) {
          return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
              if (void 0 === e)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
          }(e) : t
      }
      function a(e) {
          return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e)
          }
          )(e)
      }
      function c(e, t) {
          return (c = Object.setPrototypeOf || function(e, t) {
              return e.__proto__ = t,
              e
          }
          )(e, t)
      }
      var u = n(6)
        , s = n(9)
        , l = function(e) {
          function t() {
              return function(e, t) {
                  if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function")
              }(this, t),
              i(this, a(t).apply(this, arguments))
          }
          var n, r, l;
          return function(e, t) {
              if ("function" != typeof t && null !== t)
                  throw new TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                  constructor: {
                      value: e,
                      writable: !0,
                      configurable: !0
                  }
              }),
              t && c(e, t)
          }(t, s),
          n = t,
          (r = [{
              key: "getDefaultCfg",
              value: function() {
                  return {
                      type: "contextmenu",
                      container: null
                  }
              }
          }, {
              key: "init",
              value: function() {
                  this._initContainer()
              }
          }, {
              key: "_initContainer",
              value: function() {
                  var e = this.container;
                  if (!e)
                      throw new Error("please set the container for the tontextmenu !");
                  u.isString(e) && (e = document.getElementById(e));
                  var t = e.getElementsByClassName("command");
                  e.style.position = "absolute",
                  e.style["z-index"] = 2,
                  e.style.top = "0px",
                  e.style.left = "0px",
                  this.commands = t,
                  this.containerDom = e
              }
          }, {
              key: "bindEvent",
              value: function() {
                  var e = this
                    , t = this.commands;
                  u.each(t, function(t) {
                      u.addEventListener(t, "click", function() {
                          -1 === t.className.indexOf("disable") && e.hide()
                      })
                  })
              }
          }, {
              key: "switch",
              value: function(e) {
                  var t = this.containerDom.getElementsByClassName("menu");
                  u.each(t, function(t) {
                      t.dataset.status === e ? t.style.display = "block" : t.style.display = "none"
                  })
              }
          }, {
              key: "getCommandDoms",
              value: function() {
                  return this.commands
              }
          }, {
              key: "show",
              value: function() {
                  var e = this.containerDom;
                  this.editor.getCurrentPage().setSignal("preventWheelPan", !0),
                  e.style.display = "block"
              }
          }, {
              key: "hide",
              value: function() {
                  var e = this.containerDom;
                  this.editor.getCurrentPage().setSignal("preventWheelPan", !1),
                  e.style.display = "none"
              }
          }, {
              key: "move",
              value: function(e, t) {
                  var n = this.containerDom
                    , r = u.getBoundingClientRect(n)
                    , o = parseFloat(u.getStyle(n, "top"))
                    , i = parseFloat(u.getStyle(n, "left"));
                  n.style.left = i + (e - r.left) + "px",
                  n.style.top = o + (t - r.top) + "px"
              }
          }]) && o(n.prototype, r),
          l && o(n, l),
          t
      }();
      e.exports = l
  }
  , function(e, t, n) {
      var r = n(12);
      n(124),
      n(127),
      e.exports = r
  }
  , function(e, t, n) {
      n(125),
      n(126)
  }
  , function(e, t, n) {
      function r(e) {
          for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {}
                , r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))),
              r.forEach(function(t) {
                  o(e, t, n[t])
              })
          }
          return e
      }
      function o(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = n,
          e
      }
      var i, a, c = n(20), u = c.mouseEnterEdge, s = c.startMove, l = c.mouseLeaveEdge, d = c.mouseMoveEdge, f = c.endMove;
      n(12).registerBehaviour("bpmnMoveEdgeController", function(e) {
          var t, n = e.getGraph(), o = n.getRootGroup();
          function c() {
              e.set("panItemDelegation", void 0),
              e.set("panItemStartBox", void 0),
              e.set("panItemStartPoint", void 0),
              t = void 0
          }
          n.behaviourOn("edge:mouseenter", function(t) {
              !i && t.item && (a = t.item,
              u({
                  graph: n,
                  bpmn: e,
                  ev: t,
                  backUpCursor: !0
              }))
          }),
          n.behaviourOn("edge:mousedown", function(e) {
              var t = e.item;
              s(n, e),
              i = t
          }),
          n.behaviourOn("mouseup", function() {
              i && (f({
                  graph: n,
                  item: i
              }),
              i = void 0)
          }),
          n.behaviourOn("mousemove", function(t) {
              i ? d(n, i, t) : a && u({
                  graph: n,
                  bpmn: e,
                  ev: r({}, t, {
                      item: a
                  }),
                  backUpCursor: !1
              })
          }),
          n.behaviourOn("edge:mouseleave", function() {
              i || a && (l({
                  graph: n,
                  bpmn: e,
                  item: a
              }),
              a = void 0)
          }),
          n.behaviourOn("node:dragstart", function(n) {
              var r = n.item.getBBox();
              t = e.getDelegation([r], o),
              e.set("bpmnNodePanDelegation", t),
              e.set("bpmnNodePanStartBox", r),
              e.set("bpmnNodePanStartPoint", {
                  x: n.x,
                  y: n.y
              }),
              e.set("bpmnNodePanStartItem", n.item)
          }),
          n.behaviourOn("node:dragend", function(t) {
              var r = e.get("bpmnNodePanDelegation")
                , o = e.get("bpmnNodePanStartPoint")
                , i = e.get("bpmnNodePanStartItem");
              i && i.getEdges().forEach(function(e) {
                  n.update(e, {
                      nodeMoved: {
                          item: i.id,
                          start: o,
                          delta: {
                              x: t.x - o.x,
                              y: t.y - o.y
                          }
                      }
                  })
              }),
              r.remove(),
              c()
          })
      }, ["startPanItem", "processPanItem", "endPanItem"])
  }
  , function(e, t, n) {
      n(12).registerBehaviour("hoverNodeShowArrowController", function(e) {
          var t, n = e.getGraph(), r = e.get("arrowController"), o = r.long, i = r.thickness;
          n.on("node:mouseenter", function(a) {
              if (!e.getSignal("panningItem") && !e.getSignal("dragEdge")) {
                  var c = r.topArrow
                    , u = r.bottomArrow
                    , s = r.leftArrow
                    , l = r.rightArrow
                    , d = (t = a.item).getBBox()
                    , f = n.getDomPoint({
                      x: d.centerX,
                      y: d.minY
                  })
                    , h = n.getDomPoint({
                      x: d.minX,
                      y: d.centerY
                  })
                    , g = n.getDomPoint({
                      x: d.centerX,
                      y: d.maxY
                  })
                    , p = n.getDomPoint({
                      x: d.maxX,
                      y: d.centerY
                  });
                  c.css({
                      top: f.y - (o + 10) + "px",
                      left: f.x - i / 2 + "px",
                      transform: "rotate(-90deg)"
                  }),
                  u.css({
                      top: g.y + 10 + "px",
                      left: g.x - i / 2 + "px",
                      transform: "rotate(90deg)"
                  }),
                  s.css({
                      top: h.y - i / 2 + "px",
                      left: h.x - (o + 10) + "px",
                      transform: "rotate(180deg)"
                  }),
                  l.css({
                      top: p.y - i / 2 + "px",
                      left: p.x + 10 + "px"
                  }),
                  c.setAttribute("anchorIndex", 0),
                  u.setAttribute("anchorIndex", 2),
                  s.setAttribute("anchorIndex", 3),
                  l.setAttribute("anchorIndex", 1),
                  e.showArrowController(t)
              }
          }),
          n.behaviourOn("mousemove", function(n) {
              var r = n.x
                , i = n.y;
              if (t) {
                  var a = t.getBBox()
                    , c = o + 10
                    , u = a.minX - c
                    , s = a.minY - c
                    , l = a.maxX + c
                    , d = a.maxY + c;
                  (r < u || i < s || r > l || i > d) && (e.hideArrowController(),
                  t = void 0)
              }
          })
      })
  }
  , function(e, t, n) {
      n(128),
      n(12).registerNode("bpmn-base", {
          anchor: null
      })
  }
  , function(e, t, n) {
      "use strict";
      n.r(t);
      var r = n(12)
        , o = n.n(r)
        , i = n(0);
      function a(e) {
          var t = e.bbox
            , n = e.shape
            , r = void 0 === n ? "ROUNDED_RECT" : n
            , o = e.point
            , i = e.vertical;
          i = !!i;
          var a = {
              true: "x",
              false: "y"
          }
            , c = {
              true: "minX",
              false: "minY"
          }
            , u = {
              true: "maxX",
              false: "maxY"
          };
          switch (r) {
          case "ROUNDED_RECT":
              if (o[a[i]] >= t[c[i]] + 4 && o[a[i]] <= t[u[i]] - 4)
                  return {
                      added: void 0,
                      joint: {
                          x: i ? o.x : o.x > t.centerX ? t.maxX : t.minX,
                          y: i ? o.y > t.centerY ? t.maxY : t.minY : o.y
                      }
                  };
              if (o[a[i]] >= t[c[i]] && o[a[i]] < t[c[i]] + 4)
                  return {
                      added: void 0,
                      joint: {
                          x: i ? o.x : o.x > t.centerX ? t.maxX - 4 + Math.sqrt(16 - Math.pow(t.minY + 4 - o.y, 2)) : t.minX + 4 - Math.sqrt(16 - Math.pow(t.minY + 4 - o.y, 2)),
                          y: i ? o.y > t.centerY ? t.maxY - 4 + Math.sqrt(16 - Math.pow(t.minX + 4 - o.x, 2)) : t.minY + 4 - Math.sqrt(16 - Math.pow(t.minX + 4 - o.x, 2)) : o.y
                      }
                  };
              if (o[a[i]] >= t[u[i]] - 4 && o[a[i]] <= t[u[i]])
                  return {
                      added: void 0,
                      joint: {
                          x: i ? o.x : o.x > t.centerX ? t.maxX - 4 + Math.sqrt(16 - Math.pow(o.y - t.maxY + 4, 2)) : t.minX + 4 - Math.sqrt(16 - Math.pow(o.y - t.maxY + 4, 2)),
                          y: i ? o.y > t.centerY ? t.maxY - 4 + Math.sqrt(16 - Math.pow(o.x - t.maxX + 4, 2)) : t.minY + 4 - Math.sqrt(16 - Math.pow(o.x - t.maxX + 4, 2)) : o.y
                      }
                  };
              break;
          case "CIRCLE":
              if (o[a[i]] >= t[c[i]] && o[a[i]] <= t[u[i]])
                  return {
                      added: void 0,
                      joint: {
                          x: i ? o.x : o.x > t.centerX ? t.centerX + Math.sqrt(16 - Math.pow(t.centerY - o.y)) : t.centerX - Math.sqrt(16 - Math.pow(t.centerY - o.y)),
                          y: i ? o.y > t.centerY ? t.centerY + Math.sqrt(16 - Math.pow(t.centerX - o.x)) : t.centerY - Math.sqrt(16 - Math.pow(t.centerX - o.x)) : o.y
                      }
                  };
              break;
          case "RHOMEBUS":
              if (o[a[i]] >= t[c[i]] && o[a[i]] <= t[u[i]])
                  return {
                      added: void 0,
                      joint: {
                          x: i ? o.x : o.x > t.centerX ? o.y < t.centerY ? (o.y - t.minY) * (t.maxX - t.centerX) / (t.centerY - t.minY) + t.centerX : (t.maxY - o.y) * (t.maxX - t.centerX) / (t.maxY - t.centerY) + t.centerX : o.y < t.centerY ? t.centerX - (o.y - t.minY) * (t.centerX - t.minX) / (t.centerY - t.minY) : t.centerX - (t.maxY - o.y) * (t.centerX - t.minX) / (t.maxY - t.centerY),
                          y: i ? o.y > t.centerY ? o.x < t.centerX ? (o.x - t.minX) * (t.maxY - t.centerY) / (t.centerX - t.minX) + t.centerY : (t.maxX - o.x) * (t.maxY - t.centerY) / (t.maxX - t.centerX) + t.centerY : o.x < t.centerX ? t.centerY - (o.x - t.minX) * (t.centerY - t.minY) / (t.centerX - t.minX) : t.centerY - (t.maxX - o.x) * (t.centerY - t.minY) / (t.maxX - t.centerX) : o.y
                      }
                  };
              break;
          case "RECT":
          default:
              if (o[a[i]] >= t[c[i]] && o[a[i]] <= t[u[i]])
                  return {
                      added: void 0,
                      joint: {
                          x: i ? o.x : o.x > t.centerX ? t.maxX : t.minX,
                          y: i ? o.y > t.centerY ? t.maxY : t.minY : o.y
                      }
                  }
          }
          return i ? o.x < t.centerX ? {
              added: {
                  x: o.x,
                  y: t.centerY
              },
              joint: {
                  x: t.minX,
                  y: t.centerY
              }
          } : {
              added: {
                  x: o.x,
                  y: t.centerY
              },
              joint: {
                  x: t.maxX,
                  y: t.centerY
              }
          } : o.y < t.centerY ? {
              added: {
                  x: t.centerX,
                  y: o.y
              },
              joint: {
                  x: t.centerX,
                  y: t.minY
              }
          } : {
              added: {
                  x: t.centerX,
                  y: o.y
              },
              joint: {
                  x: t.centerX,
                  y: t.maxY
              }
          }
      }
      var c = n(20);
      o.a.registerEdge("bpmn-base", {
          getPath: function(e) {
              var t, n = e.getSource(), r = e.getTarget(), o = e.model;
              if (o.edgeMoved && o.lastMouse) {
                  var u, s, l, d, f, h = o.controlPoints, g = o.hold.index, p = [{
                      x: h[g].x + o.edgeMoved.x,
                      y: h[g].y + o.edgeMoved.y
                  }, {
                      x: h[g + 1].x + o.edgeMoved.x,
                      y: h[g + 1].y + o.edgeMoved.y
                  }], m = Object(i.j)(p, 0);
                  if (n) {
                      var y = a({
                          bbox: n.getBBox(),
                          point: m,
                          vertical: o.hold.vertical,
                          shape: n.model.shape
                      });
                      s = y.added,
                      l = y.joint
                  }
                  if (0 === g && n && (p[0] = l,
                  s && (p.splice(1, 0, s),
                  e.model.hold.index += 1)),
                  r) {
                      var v = a({
                          bbox: r.getBBox(),
                          point: m,
                          vertical: o.hold.vertical,
                          shape: r.model.shape
                      });
                      d = v.added,
                      f = v.joint
                  }
                  g === h.length - 2 && r && (s && 0 === g ? (p[2] = f,
                  d && p.splice(2, 0, d)) : (p[1] = f,
                  d && p.splice(1, 0, d))),
                  (u = o.controlPoints).splice.apply(u, [g, 2].concat(p)),
                  n && Object(i.l)(l, h, o.hold.index) && (h.splice(0, o.hold.index),
                  o.hold.index = 0,
                  h[0] = l),
                  r && Object(i.l)(f, h, o.hold.index) && (o.controlPoints.splice(o.hold.index + 1),
                  h[o.hold.index + 1] = f),
                  t = Object(c.mergeLine)(e, g),
                  function(e, t, n) {
                      var r = e.controlPoints;
                      if (t) {
                          var o = Object(i.f)(r[0], t.getBBox())
                            , a = o.point
                            , c = o.index;
                          e.sourceJoint = {
                              index: c,
                              delta: {
                                  x: r[0].x - a.x,
                                  y: r[0].y - a.y
                              }
                          }
                      }
                      if (n) {
                          var u = Object(i.f)(r[r.length - 1], n.getBBox())
                            , s = u.point
                            , l = u.index;
                          e.targetJoint = {
                              index: l,
                              delta: {
                                  x: r[r.length - 1].x - s.x,
                                  y: r[r.length - 1].y - s.y
                              }
                          }
                      }
                  }(o, n, r),
                  o.lastMouse = {
                      x: o.lastMouse.x + o.edgeMoved.x,
                      y: o.lastMouse.y + o.edgeMoved.y
                  }
              } else if (o.modifiedByMouse && o.nodeMoved)
                  !function(e, t, n) {
                      if (e.nodeMoved) {
                          var r = e.nodeMoved.item === t.id
                            , o = e.nodeMoved.item === n.id
                            , a = r ? t.getBBox() : n.getBBox()
                            , c = e.nodeMoved.delta
                            , u = {
                              minX: a.minX - c.x,
                              maxX: a.maxX - c.x,
                              centerX: a.centerX - c.x,
                              minY: a.minY - c.y,
                              maxY: a.maxY - c.y,
                              centerY: a.centerY + c.y,
                              height: a.height,
                              width: a.width
                          }
                            , s = e.controlPoints;
                          if (2 === s.length) {
                              var l = Object(i.d)(t, n)
                                , d = l.sourcePoint
                                , f = l.targetPoint;
                              e.sourceJoint && d.index === e.sourceJoint.index && (d.point = Object(i.c)(t.getBBox())[d.index],
                              d.point.x += e.sourceJoint.delta.x,
                              d.point.y += e.sourceJoint.delta.y),
                              e.targetJoint && f.index === e.targetJoint.index && (f.point = Object(i.c)(n.getBBox())[f.index],
                              f.point.x += e.targetJoint.delta.x,
                              f.point.y += e.targetJoint.delta.y);
                              var h = Object(i.h)(d, f);
                              e.controlPoints = h
                          } else {
                              var g;
                              g = r ? 1 : s.length - 3;
                              var p = Object(i.i)(s, g)
                                , m = Object(i.a)(u, s, g)
                                , y = Object(i.a)(a, s, g)
                                , v = r ? e.sourceJoint : e.targetJoint;
                              if (m === y) {
                                  var b = Object(i.c)(a)[v.index]
                                    , x = {
                                      x: b.x + v.delta.x,
                                      y: b.y + v.delta.y
                                  }
                                    , S = Object(i.g)(x, s, g);
                                  r ? e.controlPoints.splice(0, 2, x, S) : o && e.controlPoints.splice(g + 1, 2, S, x)
                              } else if (0 === y)
                                  if (3 === s.length) {
                                      var w = Object(i.d)(t, n)
                                        , O = w.sourcePoint
                                        , P = w.targetPoint
                                        , _ = Object(i.h)(O, P);
                                      e.controlPoints = _
                                  } else {
                                      var C, E = Object(i.j)(s, g);
                                      C = p ? E.y < a.centerY ? 0 : 2 : E.x < a.centerX ? 3 : 1;
                                      var k = Object(i.c)(a)[C];
                                      if (r) {
                                          var A = Object(i.g)(k, s, g + 1);
                                          e.controlPoints.splice(0, 3, k, A),
                                          e.sourceJoint = {
                                              index: C,
                                              delta: {
                                                  x: 0,
                                                  y: 0
                                              }
                                          }
                                      } else if (o) {
                                          var M = Object(i.g)(k, s, g - 1);
                                          e.controlPoints.splice(g, 3, M, k),
                                          e.targetJoint = {
                                              index: C,
                                              delta: {
                                                  x: 0,
                                                  y: 0
                                              }
                                          }
                                      }
                                  }
                              else {
                                  var B = Object(i.k)(v.index)
                                    , j = Object(i.c)(a)[B]
                                    , X = Object(i.g)(j, s, g);
                                  r ? (e.controlPoints.splice(0, 2, j, X),
                                  e.sourceJoint = {
                                      index: B,
                                      delta: {
                                          x: 0,
                                          y: 0
                                      }
                                  }) : o && (e.controlPoints.splice(g + 1, 2, X, j),
                                  e.targetJoint = {
                                      index: B,
                                      delta: {
                                          x: 0,
                                          y: 0
                                      }
                                  })
                              }
                          }
                      }
                  }(o, n, r);
              else if (!o.modifiedByMouse) {
                  var b = o.anchorIndex
                    , x = Object(i.d)(n, r, !o.initialed && b)
                    , S = x.sourcePoint
                    , w = x.targetPoint
                    , O = Object(i.h)(S, w);
                  e.model.controlPoints = O
              }
              return o.nodeMoved = void 0,
              {
                  path: this.getPathByPoints({
                      points: o.controlPoints
                  }),
                  helpLine: t
              }
          },
          draw: function(e) {
              var t = e.getGraphicGroup()
                , n = e.model
                , r = this.getPath(e)
                , o = r.path
                , a = r.helpLine
                , c = this.getStyle(e)
                , u = Object(i.b)(t, o, c);
              if (null != n.hold) {
                  var s = Object(i.j)(n.controlPoints, n.hold.index);
                  t.addShape("circle", {
                      attrs: {
                          x: s.x,
                          y: s.y,
                          r: 3,
                          fill: "rgb(0,182,239)"
                      }
                  })
              }
              return a && (n.helpLine = a,
              n.helpLineTime = (new Date).getTime()),
              !a && (new Date).getTime() - n.helpLineTime >= 150 && (n.helpLine = void 0,
              n.helpLineTime = void 0),
              n.helpLine && t.addShape("path", {
                  attrs: {
                      path: [["M", n.helpLine[0].x, n.helpLine[0].y], ["L", n.helpLine[1].x, n.helpLine[1].y]],
                      lineAppendWidth: 8,
                      lineWidth: 1,
                      strokeOpacity: .92,
                      stroke: "rgba(255,139,48)"
                  }
              }),
              u
          }
      })
  }
  ])
});
