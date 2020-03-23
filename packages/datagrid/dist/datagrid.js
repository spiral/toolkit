!(function (e, t) {
  typeof exports === 'object' && typeof module === 'object' ? module.exports = t(require('@spiral-toolkit/core')) : typeof define === 'function' && define.amd ? define('@spiral-toolkit/datagrid', ['@spiral-toolkit/core'], t) : typeof exports === 'object' ? exports['@spiral-toolkit/datagrid'] = t(require('@spiral-toolkit/core')) : e.SFDataGrid = t(e['@spiral-toolkit/core']);
}(window, ((e) => (function (e) {
  const t = {};

  function r(o) {
    if (t[o]) return t[o].exports;
    const n = t[o] = { i: o, l: !1, exports: {} };
    return e[o].call(n.exports, n, n.exports, r), n.l = !0, n.exports;
  }

  return r.m = e, r.c = t, r.d = function (e, t, o) {
    r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
  }, r.r = function (e) {
    typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 });
  }, r.t = function (e, t) {
    if (1 & t && (e = r(e)), 8 & t) return e;
    if (4 & t && typeof e === 'object' && e && e.__esModule) return e;
    const o = Object.create(null);
    if (r.r(o), Object.defineProperty(o, 'default', {
      enumerable: !0,
      value: e,
    }), 2 & t && typeof e !== 'string') {
      for (const n in e) {
        r.d(o, n, ((t) => e[t]).bind(null, n));
      }
    }
    return o;
  }, r.n = function (e) {
    const t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return r.d(t, 'a', t), t;
  }, r.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, r.p = '/', r(r.s = 1);
}([function (t, r) {
  t.exports = e;
}, function (e, t, r) {
  e.exports = r(2);
}, function (e, t, r) {
  r.r(t);
  const o = r(0); const
    n = r.n(o);

  class i extends n.a.core.BaseDOMConstructor {
    constructor(e, t, r) {
      super(), this.init(e, t, r);
    }
  }

  i.spiralFrameworkName = 'datagrid';
  const u = i;
  n.a.registerInstanceType(u);
  t.default = u;
}])))));
// # sourceMappingURL=datagrid.js.map
