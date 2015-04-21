if (function(n, t) {
    function dt(n) {
      var t = n.length,
        r = i.type(n);
      return i.isWindow(n) ? !1 : 1 === n.nodeType && t ? !0 : "array" === r || "function" !== r && (0 === t || "number" == typeof t && t > 0 && t - 1 in n)
    }

    function kf(n) {
      var t = gt[n] = {};
      return i.each(n.match(s) || [], function(n, i) {
        t[i] = !0
      }), t
    }

    function ir(n, r, u, f) {
      if (i.acceptData(n)) {
        var s, h, c = i.expando,
          a = "string" == typeof r,
          l = n.nodeType,
          o = l ? i.cache : n,
          e = l ? n[c] : n[c] && c;
        if (e && o[e] && (f || o[e].data) || !a || u !== t) return e || (l ? n[c] = e = b.pop() || i.guid++ : e = c), o[e] || (o[e] = {}, l || (o[e].toJSON = i.noop)), ("object" == typeof r || "function" == typeof r) && (f ? o[e] = i.extend(o[e], r) : o[e].data = i.extend(o[e].data, r)), s = o[e], f || (s.data || (s.data = {}), s = s.data), u !== t && (s[i.camelCase(r)] = u), a ? (h = s[r], null == h && (h = s[i.camelCase(r)])) : h = s, h
      }
    }

    function rr(n, t, r) {
      if (i.acceptData(n)) {
        var o, h, e, s = n.nodeType,
          u = s ? i.cache : n,
          f = s ? n[i.expando] : i.expando;
        if (u[f]) {
          if (t && (e = r ? u[f] : u[f].data)) {
            for (i.isArray(t) ? t = t.concat(i.map(t, i.camelCase)) : (t in e) ? t = [t] : (t = i.camelCase(t), t = t in e ? [t] : t.split(" ")), o = 0, h = t.length; h > o; o++) delete e[t[o]];
            if (!(r ? ni : i.isEmptyObject)(e)) return
          }(r || (delete u[f].data, ni(u[f]))) && (s ? i.cleanData([n], !0) : i.support.deleteExpando || u != u.window ? delete u[f] : u[f] = null)
        }
      }
    }

    function ur(n, r, u) {
      if (u === t && 1 === n.nodeType) {
        var f = "data-" + r.replace(tr, "-$1").toLowerCase();
        if (u = n.getAttribute(f), "string" == typeof u) {
          try {
            u = "true" === u ? !0 : "false" === u ? !1 : "null" === u ? null : +u + "" === u ? +u : nr.test(u) ? i.parseJSON(u) : u
          } catch (e) {}
          i.data(n, r, u)
        } else u = t
      }
      return u
    }

    function ni(n) {
      var t;
      for (t in n)
        if (("data" !== t || !i.isEmptyObject(n[t])) && "toJSON" !== t) return !1;
      return !0
    }

    function ht() {
      return !0
    }

    function d() {
      return !1
    }

    function cr(n, t) {
      do n = n[t]; while (n && 1 !== n.nodeType);
      return n
    }

    function lr(n, t, r) {
      if (t = t || 0, i.isFunction(t)) return i.grep(n, function(n, i) {
        var u = !!t.call(n, i, n);
        return u === r
      });
      if (t.nodeType) return i.grep(n, function(n) {
        return n === t === r
      });
      if ("string" == typeof t) {
        var u = i.grep(n, function(n) {
          return 1 === n.nodeType
        });
        if (fe.test(t)) return i.filter(t, u, !r);
        t = i.filter(t, u)
      }
      return i.grep(n, function(n) {
        return i.inArray(n, t) >= 0 === r
      })
    }

    function ar(n) {
      var i = vr.split("|"),
        t = n.createDocumentFragment();
      if (t.createElement)
        while (i.length) t.createElement(i.pop());
      return t
    }

    function ye(n, t) {
      return n.getElementsByTagName(t)[0] || n.appendChild(n.ownerDocument.createElement(t))
    }

    function dr(n) {
      var t = n.getAttributeNode("type");
      return n.type = (t && t.specified) + "/" + n.type, n
    }

    function gr(n) {
      var t = le.exec(n.type);
      return t ? n.type = t[1] : n.removeAttribute("type"), n
    }

    function si(n, t) {
      for (var u, r = 0; null != (u = n[r]); r++) i._data(u, "globalEval", !t || i._data(t[r], "globalEval"))
    }

    function nu(n, t) {
      if (1 === t.nodeType && i.hasData(n)) {
        var u, f, o, s = i._data(n),
          r = i._data(t, s),
          e = s.events;
        if (e) {
          delete r.handle, r.events = {};
          for (u in e)
            for (f = 0, o = e[u].length; o > f; f++) i.event.add(t, u, e[u][f])
        }
        r.data && (r.data = i.extend({}, r.data))
      }
    }

    function pe(n, t) {
      var r, f, u;
      if (1 === t.nodeType) {
        if (r = t.nodeName.toLowerCase(), !i.support.noCloneEvent && t[i.expando]) {
          u = i._data(t);
          for (f in u.events) i.removeEvent(t, f, u.handle);
          t.removeAttribute(i.expando)
        }
        "script" === r && t.text !== n.text ? (dr(t).text = n.text, gr(t)) : "object" === r ? (t.parentNode && (t.outerHTML = n.outerHTML), i.support.html5Clone && n.innerHTML && !i.trim(t.innerHTML) && (t.innerHTML = n.innerHTML)) : "input" === r && ei.test(n.type) ? (t.defaultChecked = t.checked = n.checked, t.value !== n.value && (t.value = n.value)) : "option" === r ? t.defaultSelected = t.selected = n.defaultSelected : ("input" === r || "textarea" === r) && (t.defaultValue = n.defaultValue)
      }
    }

    function u(n, r) {
      var s, e, h = 0,
        f = typeof n.getElementsByTagName !== o ? n.getElementsByTagName(r || "*") : typeof n.querySelectorAll !== o ? n.querySelectorAll(r || "*") : t;
      if (!f)
        for (f = [], s = n.childNodes || n; null != (e = s[h]); h++) !r || i.nodeName(e, r) ? f.push(e) : i.merge(f, u(e, r));
      return r === t || r && i.nodeName(n, r) ? i.merge([n], f) : f
    }

    function we(n) {
      ei.test(n.type) && (n.defaultChecked = n.checked)
    }

    function fu(n, t) {
      if (t in n) return t;
      for (var r = t.charAt(0).toUpperCase() + t.slice(1), u = t, i = uu.length; i--;)
        if (t = uu[i] + r, t in n) return t;
      return u
    }

    function ut(n, t) {
      return n = t || n, "none" === i.css(n, "display") || !i.contains(n.ownerDocument, n)
    }

    function eu(n, t) {
      for (var f, r, o, e = [], u = 0, s = n.length; s > u; u++) r = n[u], r.style && (e[u] = i._data(r, "olddisplay"), f = r.style.display, t ? (e[u] || "none" !== f || (r.style.display = ""), "" === r.style.display && ut(r) && (e[u] = i._data(r, "olddisplay", cu(r.nodeName)))) : e[u] || (o = ut(r), (f && "none" !== f || !o) && i._data(r, "olddisplay", o ? f : i.css(r, "display"))));
      for (u = 0; s > u; u++) r = n[u], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? e[u] || "" : "none"));
      return n
    }

    function ou(n, t, i) {
      var r = ge.exec(t);
      return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t
    }

    function su(n, t, r, u, f) {
      for (var e = r === (u ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > e; e += 2) "margin" === r && (o += i.css(n, r + p[e], !0, f)), u ? ("content" === r && (o -= i.css(n, "padding" + p[e], !0, f)), "margin" !== r && (o -= i.css(n, "border" + p[e] + "Width", !0, f))) : (o += i.css(n, "padding" + p[e], !0, f), "padding" !== r && (o += i.css(n, "border" + p[e] + "Width", !0, f)));
      return o
    }

    function hu(n, t, r) {
      var e = !0,
        u = "width" === t ? n.offsetWidth : n.offsetHeight,
        f = v(n),
        o = i.support.boxSizing && "border-box" === i.css(n, "boxSizing", !1, f);
      if (0 >= u || null == u) {
        if (u = y(n, t, f), (0 > u || null == u) && (u = n.style[t]), ct.test(u)) return u;
        e = o && (i.support.boxSizingReliable || u === n.style[t]), u = parseFloat(u) || 0
      }
      return u + su(n, t, r || (o ? "border" : "content"), e, f) + "px"
    }

    function cu(n) {
      var u = r,
        t = iu[n];
      return t || (t = lu(n, u), "none" !== t && t || (rt = (rt || i("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(u.documentElement), u = (rt[0].contentWindow || rt[0].contentDocument).document, u.write("<!doctype html><html><body>"), u.close(), t = lu(n, u), rt.detach()), iu[n] = t), t
    }

    function lu(n, t) {
      var r = i(t.createElement(n)).appendTo(t.body),
        u = i.css(r[0], "display");
      return r.remove(), u
    }

    function ci(n, t, r, u) {
      var f;
      if (i.isArray(t)) i.each(t, function(t, i) {
        r || ro.test(n) ? u(n, i) : ci(n + "[" + ("object" == typeof i ? t : "") + "]", i, r, u)
      });
      else if (r || "object" !== i.type(t)) u(n, t);
      else
        for (f in t) ci(n + "[" + f + "]", t[f], r, u)
    }

    function ku(n) {
      return function(t, r) {
        "string" != typeof t && (r = t, t = "*");
        var u, f = 0,
          e = t.toLowerCase().match(s) || [];
        if (i.isFunction(r))
          while (u = e[f++]) "+" === u[0] ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
      }
    }

    function du(n, r, u, f) {
      function o(h) {
        var c;
        return e[h] = !0, i.each(n[h] || [], function(n, i) {
          var h = i(r, u, f);
          return "string" != typeof h || s || e[h] ? s ? !(c = h) : t : (r.dataTypes.unshift(h), o(h), !1)
        }), c
      }
      var e = {},
        s = n === vi;
      return o(r.dataTypes[0]) || !e["*"] && o("*")
    }

    function yi(n, r) {
      var f, u, e = i.ajaxSettings.flatOptions || {};
      for (u in r) r[u] !== t && ((e[u] ? n : f || (f = {}))[u] = r[u]);
      return f && i.extend(!0, n, f), n
    }

    function lo(n, i, r) {
      var s, o, e, u, h = n.contents,
        f = n.dataTypes,
        c = n.responseFields;
      for (u in c) u in r && (i[c[u]] = r[u]);
      while ("*" === f[0]) f.shift(), o === t && (o = n.mimeType || i.getResponseHeader("Content-Type"));
      if (o)
        for (u in h)
          if (h[u] && h[u].test(o)) {
            f.unshift(u);
            break
          }
      if (f[0] in r) e = f[0];
      else {
        for (u in r) {
          if (!f[0] || n.converters[u + " " + f[0]]) {
            e = u;
            break
          }
          s || (s = u)
        }
        e = e || s
      }
      return e ? (e !== f[0] && f.unshift(e), r[e]) : t
    }

    function ao(n, t) {
      var o, r, i, e, u = {},
        h = 0,
        s = n.dataTypes.slice(),
        f = s[0];
      if (n.dataFilter && (t = n.dataFilter(t, n.dataType)), s[1])
        for (i in n.converters) u[i.toLowerCase()] = n.converters[i];
      for (; r = s[++h];)
        if ("*" !== r) {
          if ("*" !== f && f !== r) {
            if (i = u[f + " " + r] || u["* " + r], !i)
              for (o in u)
                if (e = o.split(" "), e[1] === r && (i = u[f + " " + e[0]] || u["* " + e[0]])) {
                  i === !0 ? i = u[o] : u[o] !== !0 && (r = e[0], s.splice(h--, 0, r));
                  break
                }
            if (i !== !0)
              if (i && n.throws) t = i(t);
              else try {
                t = i(t)
              } catch (c) {
                return {
                  state: "parsererror",
                  error: i ? c : "No conversion from " + f + " to " + r
                }
              }
          }
          f = r
        }
      return {
        state: "success",
        data: t
      }
    }

    function nf() {
      try {
        return new n.XMLHttpRequest
      } catch (t) {}
    }

    function vo() {
      try {
        return new n.ActiveXObject("Microsoft.XMLHTTP")
      } catch (t) {}
    }

    function tf() {
      return setTimeout(function() {
        tt = t
      }), tt = i.now()
    }

    function bo(n, t) {
      i.each(t, function(t, i) {
        for (var u = (ft[t] || []).concat(ft["*"]), r = 0, f = u.length; f > r; r++)
          if (u[r].call(n, t, i)) return
      })
    }

    function rf(n, t, r) {
      var h, e, o = 0,
        l = yt.length,
        f = i.Deferred().always(function() {
          delete c.elem
        }),
        c = function() {
          if (e) return !1;
          for (var s = tt || tf(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, o = u.tweens.length; o > r; r++) u.tweens[r].run(i);
          return f.notifyWith(n, [u, i, t]), 1 > i && o ? t : (f.resolveWith(n, [u]), !1)
        },
        u = f.promise({
          elem: n,
          props: i.extend({}, t),
          opts: i.extend(!0, {
            specialEasing: {}
          }, r),
          originalProperties: t,
          originalOptions: r,
          startTime: tt || tf(),
          duration: r.duration,
          tweens: [],
          createTween: function(t, r) {
            var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
            return u.tweens.push(f), f
          },
          stop: function(t) {
            var i = 0,
              r = t ? u.tweens.length : 0;
            if (e) return this;
            for (e = !0; r > i; i++) u.tweens[i].run(1);
            return t ? f.resolveWith(n, [u, t]) : f.rejectWith(n, [u, t]), this
          }
        }),
        s = u.props;
      for (ko(s, u.opts.specialEasing); l > o; o++)
        if (h = yt[o].call(u, n, s, u.opts)) return h;
      return bo(u, s), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(c, {
        elem: n,
        anim: u,
        queue: u.opts.queue
      })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function ko(n, t) {
      var u, f, r, e, o;
      for (r in n)
        if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
          u = o.expand(u), delete n[f];
          for (r in u) r in n || (n[r] = u[r], t[r] = e)
        } else t[f] = e
    }

    function go(n, t, r) {
      var u, o, w, a, s, v, l, f, b, h = this,
        e = n.style,
        y = {},
        p = [],
        c = n.nodeType && ut(n);
      r.queue || (f = i._queueHooks(n, "fx"), null == f.unqueued && (f.unqueued = 0, b = f.empty.fire, f.empty.fire = function() {
        f.unqueued || b()
      }), f.unqueued++, h.always(function() {
        h.always(function() {
          f.unqueued--, i.queue(n, "fx").length || f.empty.fire()
        })
      })), 1 === n.nodeType && ("height" in t || "width" in t) && (r.overflow = [e.overflow, e.overflowX, e.overflowY], "inline" === i.css(n, "display") && "none" === i.css(n, "float") && (i.support.inlineBlockNeedsLayout && "inline" !== cu(n.nodeName) ? e.zoom = 1 : e.display = "inline-block")), r.overflow && (e.overflow = "hidden", i.support.shrinkWrapBlocks || h.always(function() {
        e.overflow = r.overflow[0], e.overflowX = r.overflow[1], e.overflowY = r.overflow[2]
      }));
      for (o in t)
        if (a = t[o], yo.exec(a)) {
          if (delete t[o], v = v || "toggle" === a, a === (c ? "hide" : "show")) continue;
          p.push(o)
        }
      if (w = p.length)
        for (s = i._data(n, "fxshow") || i._data(n, "fxshow", {}), ("hidden" in s) && (c = s.hidden), v && (s.hidden = !c), c ? i(n).show() : h.done(function() {
          i(n).hide()
        }), h.done(function() {
          var t;
          i._removeData(n, "fxshow");
          for (t in y) i.style(n, t, y[t])
        }), o = 0; w > o; o++) u = p[o], l = h.createTween(u, c ? s[u] : 0), y[u] = s[u] || i.style(n, u), u in s || (s[u] = l.start, c && (l.end = l.start, l.start = "width" === u || "height" === u ? 1 : 0))
    }

    function f(n, t, i, r, u) {
      return new f.prototype.init(n, t, i, r, u)
    }

    function pt(n, t) {
      var r, i = {
          height: n
        },
        u = 0;
      for (t = t ? 1 : 0; 4 > u; u += 2 - t) r = p[u], i["margin" + r] = i["padding" + r] = n;
      return t && (i.opacity = i.width = n), i
    }

    function uf(n) {
      return i.isWindow(n) ? n : 9 === n.nodeType ? n.defaultView || n.parentWindow : !1
    }
    var et, wi, o = typeof t,
      r = n.document,
      ff = n.location,
      ef = n.jQuery,
      of = n.$,
      ot = {},
      b = [],
      wt = "1.9.1",
      bi = b.concat,
      bt = b.push,
      l = b.slice,
      ki = b.indexOf,
      sf = ot.toString,
      it = ot.hasOwnProperty,
      kt = wt.trim,
      i = function(n, t) {
        return new i.fn.init(n, t, wi)
      },
      st = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      s = /\S+/g,
      hf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      cf = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      di = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      lf = /^[\],:{}\s]*$/,
      af = /(?:^|:|,)(?:\s*\[)+/g,
      vf = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
      yf = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
      pf = /^-ms-/,
      wf = /-([\da-z])/gi,
      bf = function(n, t) {
        return t.toUpperCase()
      },
      h = function(n) {
        (r.addEventListener || "load" === n.type || "complete" === r.readyState) && (gi(), i.ready())
      },
      gi = function() {
        r.addEventListener ? (r.removeEventListener("DOMContentLoaded", h, !1), n.removeEventListener("load", h, !1)) : (r.detachEvent("onreadystatechange", h), n.detachEvent("onload", h))
      },
      gt, nr, tr, pi, lt, g, nt, gu, at;
    i.fn = i.prototype = {
      jquery: wt,
      constructor: i,
      init: function(n, u, f) {
        var e, o;
        if (!n) return this;
        if ("string" == typeof n) {
          if (e = "<" === n.charAt(0) && ">" === n.charAt(n.length - 1) && n.length >= 3 ? [null, n, null] : cf.exec(n), !e || !e[1] && u) return !u || u.jquery ? (u || f).find(n) : this.constructor(u).find(n);
          if (e[1]) {
            if (u = u instanceof i ? u[0] : u, i.merge(this, i.parseHTML(e[1], u && u.nodeType ? u.ownerDocument || u : r, !0)), di.test(e[1]) && i.isPlainObject(u))
              for (e in u) i.isFunction(this[e]) ? this[e](u[e]) : this.attr(e, u[e]);
            return this
          }
          if (o = r.getElementById(e[2]), o && o.parentNode) {
            if (o.id !== e[2]) return f.find(n);
            this.length = 1, this[0] = o
          }
          return this.context = r, this.selector = n, this
        }
        return n.nodeType ? (this.context = this[0] = n, this.length = 1, this) : i.isFunction(n) ? f.ready(n) : (n.selector !== t && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
      },
      selector: "",
      length: 0,
      size: function() {
        return this.length
      },
      toArray: function() {
        return l.call(this)
      },
      get: function(n) {
        return null == n ? this.toArray() : 0 > n ? this[this.length + n] : this[n]
      },
      pushStack: function(n) {
        var t = i.merge(this.constructor(), n);
        return t.prevObject = this, t.context = this.context, t
      },
      each: function(n, t) {
        return i.each(this, n, t)
      },
      ready: function(n) {
        return i.ready.promise().done(n), this
      },
      slice: function() {
        return this.pushStack(l.apply(this, arguments))
      },
      first: function() {
        return this.eq(0)
      },
      last: function() {
        return this.eq(-1)
      },
      eq: function(n) {
        var i = this.length,
          t = +n + (0 > n ? i : 0);
        return this.pushStack(t >= 0 && i > t ? [this[t]] : [])
      },
      map: function(n) {
        return this.pushStack(i.map(this, function(t, i) {
          return n.call(t, i, t)
        }))
      },
      end: function() {
        return this.prevObject || this.constructor(null)
      },
      push: bt,
      sort: [].sort,
      splice: [].splice
    }, i.fn.init.prototype = i.fn, i.extend = i.fn.extend = function() {
      var u, o, r, e, s, h, n = arguments[0] || {},
        f = 1,
        l = arguments.length,
        c = !1;
      for ("boolean" == typeof n && (c = n, n = arguments[1] || {}, f = 2), "object" == typeof n || i.isFunction(n) || (n = {}), l === f && (n = this, --f); l > f; f++)
        if (null != (s = arguments[f]))
          for (e in s) u = n[e], r = s[e], n !== r && (c && r && (i.isPlainObject(r) || (o = i.isArray(r))) ? (o ? (o = !1, h = u && i.isArray(u) ? u : []) : h = u && i.isPlainObject(u) ? u : {}, n[e] = i.extend(c, h, r)) : r !== t && (n[e] = r));
      return n
    }, i.extend({
      noConflict: function(t) {
        return n.$ === i && (n.$ = of), t && n.jQuery === i && (n.jQuery = ef), i
      },
      isReady: !1,
      readyWait: 1,
      holdReady: function(n) {
        n ? i.readyWait++ : i.ready(!0)
      },
      ready: function(n) {
        if (n === !0 ? !--i.readyWait : !i.isReady) {
          if (!r.body) return setTimeout(i.ready);
          i.isReady = !0, n !== !0 && --i.readyWait > 0 || (et.resolveWith(r, [i]), i.fn.trigger && i(r).trigger("ready").off("ready"))
        }
      },
      isFunction: function(n) {
        return "function" === i.type(n)
      },
      isArray: Array.isArray || function(n) {
        return "array" === i.type(n)
      },
      isWindow: function(n) {
        return null != n && n == n.window
      },
      isNumeric: function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n)
      },
      type: function(n) {
        return null == n ? n + "" : "object" == typeof n || "function" == typeof n ? ot[sf.call(n)] || "object" : typeof n
      },
      isPlainObject: function(n) {
        if (!n || "object" !== i.type(n) || n.nodeType || i.isWindow(n)) return !1;
        try {
          if (n.constructor && !it.call(n, "constructor") && !it.call(n.constructor.prototype, "isPrototypeOf")) return !1
        } catch (u) {
          return !1
        }
        var r;
        for (r in n);
        return r === t || it.call(n, r)
      },
      isEmptyObject: function(n) {
        var t;
        for (t in n) return !1;
        return !0
      },
      error: function(n) {
        throw Error(n);
      },
      parseHTML: function(n, t, u) {
        if (!n || "string" != typeof n) return null;
        "boolean" == typeof t && (u = t, t = !1), t = t || r;
        var f = di.exec(n),
          e = !u && [];
        return f ? [t.createElement(f[1])] : (f = i.buildFragment([n], t, e), e && i(e).remove(), i.merge([], f.childNodes))
      },
      parseJSON: function(r) {
        return n.JSON && n.JSON.parse ? n.JSON.parse(r) : null === r ? r : "string" == typeof r && (r = i.trim(r), r && lf.test(r.replace(vf, "@").replace(yf, "]").replace(af, ""))) ? Function("return " + r)() : (i.error("Invalid JSON: " + r), t)
      },
      parseXML: function(r) {
        var u, f;
        if (!r || "string" != typeof r) return null;
        try {
          n.DOMParser ? (f = new DOMParser, u = f.parseFromString(r, "text/xml")) : (u = new ActiveXObject("Microsoft.XMLDOM"), u.async = "false", u.loadXML(r))
        } catch (e) {
          u = t
        }
        return u && u.documentElement && !u.getElementsByTagName("parsererror").length || i.error("Invalid XML: " + r), u
      },
      noop: function() {},
      globalEval: function(t) {
        t && i.trim(t) && (n.execScript || function(t) {
          n.eval.call(n, t)
        })(t)
      },
      camelCase: function(n) {
        return n.replace(pf, "ms-").replace(wf, bf)
      },
      nodeName: function(n, t) {
        return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
      },
      each: function(n, t, i) {
        var u, r = 0,
          f = n.length,
          e = dt(n);
        if (i) {
          if (e) {
            for (; f > r; r++)
              if (u = t.apply(n[r], i), u === !1) break
          } else
            for (r in n)
              if (u = t.apply(n[r], i), u === !1) break
        } else if (e) {
          for (; f > r; r++)
            if (u = t.call(n[r], r, n[r]), u === !1) break
        } else
          for (r in n)
            if (u = t.call(n[r], r, n[r]), u === !1) break; return n
      },
      trim: kt && !kt.call("? ") ? function(n) {
        return null == n ? "" : kt.call(n)
      } : function(n) {
        return null == n ? "" : (n + "").replace(hf, "")
      },
      makeArray: function(n, t) {
        var r = t || [];
        return null != n && (dt(Object(n)) ? i.merge(r, "string" == typeof n ? [n] : n) : bt.call(r, n)), r
      },
      inArray: function(n, t, i) {
        var r;
        if (t) {
          if (ki) return ki.call(t, n, i);
          for (r = t.length, i = i ? 0 > i ? Math.max(0, r + i) : i : 0; r > i; i++)
            if (i in t && t[i] === n) return i
        }
        return -1
      },
      merge: function(n, i) {
        var f = i.length,
          u = n.length,
          r = 0;
        if ("number" == typeof f)
          for (; f > r; r++) n[u++] = i[r];
        else
          while (i[r] !== t) n[u++] = i[r++];
        return n.length = u, n
      },
      grep: function(n, t, i) {
        var u, f = [],
          r = 0,
          e = n.length;
        for (i = !!i; e > r; r++) u = !!t(n[r], r), i !== u && f.push(n[r]);
        return f
      },
      map: function(n, t, i) {
        var u, r = 0,
          e = n.length,
          o = dt(n),
          f = [];
        if (o)
          for (; e > r; r++) u = t(n[r], r, i), null != u && (f[f.length] = u);
        else
          for (r in n) u = t(n[r], r, i), null != u && (f[f.length] = u);
        return bi.apply([], f)
      },
      guid: 1,
      proxy: function(n, r) {
        var f, u, e;
        return "string" == typeof r && (e = n[r], r = n, n = e), i.isFunction(n) ? (f = l.call(arguments, 2), u = function() {
          return n.apply(r || this, f.concat(l.call(arguments)))
        }, u.guid = n.guid = n.guid || i.guid++, u) : t
      },
      access: function(n, r, u, f, e, o, s) {
        var h = 0,
          l = n.length,
          c = null == u;
        if ("object" === i.type(u)) {
          e = !0;
          for (h in u) i.access(n, r, h, u[h], !0, o, s)
        } else if (f !== t && (e = !0, i.isFunction(f) || (s = !0), c && (s ? (r.call(n, f), r = null) : (c = r, r = function(n, t, r) {
            return c.call(i(n), r)
          })), r))
          for (; l > h; h++) r(n[h], u, s ? f : f.call(n[h], h, r(n[h], u)));
        return e ? n : c ? r.call(n) : l ? r(n[0], u) : o
      },
      now: function() {
        return +new Date
      }
    }), i.ready.promise = function(t) {
      if (!et)
        if (et = i.Deferred(), "complete" === r.readyState) setTimeout(i.ready);
        else if (r.addEventListener) r.addEventListener("DOMContentLoaded", h, !1), n.addEventListener("load", h, !1);
        else {
          r.attachEvent("onreadystatechange", h), n.attachEvent("onload", h);
          var u = !1;
          try {
            u = null == n.frameElement && r.documentElement
          } catch (e) {}
          u && u.doScroll && function f() {
            if (!i.isReady) {
              try {
                u.doScroll("left")
              } catch (n) {
                return setTimeout(f, 50)
              }
              gi(), i.ready()
            }
          }()
        }
      return et.promise(t)
    }, i.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(n, t) {
      ot["[object " + t + "]"] = t.toLowerCase()
    }), wi = i(r), gt = {}, i.Callbacks = function(n) {
      n = "string" == typeof n ? gt[n] || kf(n) : i.extend({}, n);
      var o, f, c, s, e, l, r = [],
        u = !n.once && [],
        a = function(t) {
          for (f = n.memory && t, c = !0, e = l || 0, l = 0, s = r.length, o = !0; r && s > e; e++)
            if (r[e].apply(t[0], t[1]) === !1 && n.stopOnFalse) {
              f = !1;
              break
            }
          o = !1, r && (u ? u.length && a(u.shift()) : f ? r = [] : h.disable())
        },
        h = {
          add: function() {
            if (r) {
              var t = r.length;
              (function u(t) {
                i.each(t, function(t, f) {
                  var e = i.type(f);
                  "function" === e ? n.unique && h.has(f) || r.push(f) : f && f.length && "string" !== e && u(f)
                })
              })(arguments), o ? s = r.length : f && (l = t, a(f))
            }
            return this
          },
          remove: function() {
            return r && i.each(arguments, function(n, t) {
              for (var u;
                   (u = i.inArray(t, r, u)) > -1;) r.splice(u, 1), o && (s >= u && s--, e >= u && e--)
            }), this
          },
          has: function(n) {
            return n ? i.inArray(n, r) > -1 : !(!r || !r.length)
          },
          empty: function() {
            return r = [], this
          },
          disable: function() {
            return r = u = f = t, this
          },
          disabled: function() {
            return !r
          },
          lock: function() {
            return u = t, f || h.disable(), this
          },
          locked: function() {
            return !u
          },
          fireWith: function(n, t) {
            return t = t || [], t = [n, t.slice ? t.slice() : t], !r || c && !u || (o ? u.push(t) : a(t)), this
          },
          fire: function() {
            return h.fireWith(this, arguments), this
          },
          fired: function() {
            return !!c
          }
        };
      return h
    }, i.extend({
      Deferred: function(n) {
        var u = [
            ["resolve", "done", i.Callbacks("once memory"), "resolved"],
            ["reject", "fail", i.Callbacks("once memory"), "rejected"],
            ["notify", "progress", i.Callbacks("memory")]
          ],
          f = "pending",
          r = {
            state: function() {
              return f
            },
            always: function() {
              return t.done(arguments).fail(arguments), this
            },
            then: function() {
              var n = arguments;
              return i.Deferred(function(f) {
                i.each(u, function(u, e) {
                  var s = e[0],
                    o = i.isFunction(n[u]) && n[u];
                  t[e[1]](function() {
                    var n = o && o.apply(this, arguments);
                    n && i.isFunction(n.promise) ? n.promise().done(f.resolve).fail(f.reject).progress(f.notify) : f[s + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
                  })
                }), n = null
              }).promise()
            },
            promise: function(n) {
              return null != n ? i.extend(n, r) : r
            }
          },
          t = {};
        return r.pipe = r.then, i.each(u, function(n, i) {
          var e = i[2],
            o = i[3];
          r[i[1]] = e.add, o && e.add(function() {
            f = o
          }, u[1 ^ n][2].disable, u[2][2].lock), t[i[0]] = function() {
            return t[i[0] + "With"](this === t ? r : this, arguments), this
          }, t[i[0] + "With"] = e.fireWith
        }), r.promise(t), n && n.call(t, t), t
      },
      when: function(n) {
        var t = 0,
          u = l.call(arguments),
          r = u.length,
          e = 1 !== r || n && i.isFunction(n.promise) ? r : 0,
          f = 1 === e ? n : i.Deferred(),
          h = function(n, t, i) {
            return function(r) {
              t[n] = this, i[n] = arguments.length > 1 ? l.call(arguments) : r, i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
            }
          },
          o, c, s;
        if (r > 1)
          for (o = Array(r), c = Array(r), s = Array(r); r > t; t++) u[t] && i.isFunction(u[t].promise) ? u[t].promise().done(h(t, s, u)).fail(f.reject).progress(h(t, c, o)) : --e;
        return e || f.resolveWith(s, u), f.promise()
      }
    }), i.support = function() {
      var u, s, e, f, h, c, l, a, y, v, t = r.createElement("div");
      if (t.setAttribute("className", "t"), t.innerHTML = "  <link/><table><\/table><a href='/a'>a<\/a><input type='checkbox'/>", s = t.getElementsByTagName("*"), e = t.getElementsByTagName("a")[0], !s || !e || !s.length) return {};
      h = r.createElement("select"), l = h.appendChild(r.createElement("option")), f = t.getElementsByTagName("input")[0], e.style.cssText = "top:1px;float:left;opacity:.5", u = {
        getSetAttribute: "t" !== t.className,
        leadingWhitespace: 3 === t.firstChild.nodeType,
        tbody: !t.getElementsByTagName("tbody").length,
        htmlSerialize: !!t.getElementsByTagName("link").length,
        style: /top/.test(e.getAttribute("style")),
        hrefNormalized: "/a" === e.getAttribute("href"),
        opacity: /^0.5/.test(e.style.opacity),
        cssFloat: !!e.style.cssFloat,
        checkOn: !!f.value,
        optSelected: l.selected,
        enctype: !!r.createElement("form").enctype,
        html5Clone: "<:nav><\/:nav>" !== r.createElement("nav").cloneNode(!0).outerHTML,
        boxModel: "CSS1Compat" === r.compatMode,
        deleteExpando: !0,
        noCloneEvent: !0,
        inlineBlockNeedsLayout: !1,
        shrinkWrapBlocks: !1,
        reliableMarginRight: !0,
        boxSizingReliable: !0,
        pixelPosition: !1
      }, f.checked = !0, u.noCloneChecked = f.cloneNode(!0).checked, h.disabled = !0, u.optDisabled = !l.disabled;
      try {
        delete t.test
      } catch (p) {
        u.deleteExpando = !1
      }
      f = r.createElement("input"), f.setAttribute("value", ""), u.input = "" === f.getAttribute("value"), f.value = "t", f.setAttribute("type", "radio"), u.radioValue = "t" === f.value, f.setAttribute("checked", "t"), f.setAttribute("name", "t"), c = r.createDocumentFragment(), c.appendChild(f), u.appendChecked = f.checked, u.checkClone = c.cloneNode(!0).cloneNode(!0).lastChild.checked, t.attachEvent && (t.attachEvent("onclick", function() {
        u.noCloneEvent = !1
      }), t.cloneNode(!0).click());
      for (v in {
        submit: !0,
        change: !0,
        focusin: !0
      }) t.setAttribute(a = "on" + v, "t"), u[v + "Bubbles"] = a in n || t.attributes[a].expando === !1;
      return t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", u.clearCloneStyle = "content-box" === t.style.backgroundClip, i(function() {
        var e, f, i, h = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
          s = r.getElementsByTagName("body")[0];
        s && (e = r.createElement("div"), e.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(e).appendChild(t), t.innerHTML = "<table><tr><td><\/td><td>t<\/td><\/tr><\/table>", i = t.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", y = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", u.reliableHiddenOffsets = y && 0 === i[0].offsetHeight, t.innerHTML = "", t.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", u.boxSizing = 4 === t.offsetWidth, u.doesNotIncludeMarginInBodyOffset = 1 !== s.offsetTop, n.getComputedStyle && (u.pixelPosition = "1%" !== (n.getComputedStyle(t, null) || {}).top, u.boxSizingReliable = "4px" === (n.getComputedStyle(t, null) || {
          width: "4px"
        }).width, f = t.appendChild(r.createElement("div")), f.style.cssText = t.style.cssText = h, f.style.marginRight = f.style.width = "0", t.style.width = "1px", u.reliableMarginRight = !parseFloat((n.getComputedStyle(f, null) || {}).marginRight)), typeof t.style.zoom !== o && (t.innerHTML = "", t.style.cssText = h + "width:1px;padding:1px;display:inline;zoom:1", u.inlineBlockNeedsLayout = 3 === t.offsetWidth, t.style.display = "block", t.innerHTML = "<div><\/div>", t.firstChild.style.width = "5px", u.shrinkWrapBlocks = 3 !== t.offsetWidth, u.inlineBlockNeedsLayout && (s.style.zoom = 1)), s.removeChild(e), e = t = i = f = null)
      }), s = h = c = l = e = f = null, u
    }(), nr = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, tr = /([A-Z])/g, i.extend({
      cache: {},
      expando: "jQuery" + (wt + Math.random()).replace(/\D/g, ""),
      noData: {
        embed: !0,
        object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
        applet: !0
      },
      hasData: function(n) {
        return n = n.nodeType ? i.cache[n[i.expando]] : n[i.expando], !!n && !ni(n)
      },
      data: function(n, t, i) {
        return ir(n, t, i)
      },
      removeData: function(n, t) {
        return rr(n, t)
      },
      _data: function(n, t, i) {
        return ir(n, t, i, !0)
      },
      _removeData: function(n, t) {
        return rr(n, t, !0)
      },
      acceptData: function(n) {
        if (n.nodeType && 1 !== n.nodeType && 9 !== n.nodeType) return !1;
        var t = n.nodeName && i.noData[n.nodeName.toLowerCase()];
        return !t || t !== !0 && n.getAttribute("classid") === t
      }
    }), i.fn.extend({
      data: function(n, r) {
        var e, f, u = this[0],
          o = 0,
          s = null;
        if (n === t) {
          if (this.length && (s = i.data(u), 1 === u.nodeType && !i._data(u, "parsedAttrs"))) {
            for (e = u.attributes; e.length > o; o++) f = e[o].name, f.indexOf("data-") || (f = i.camelCase(f.slice(5)), ur(u, f, s[f]));
            i._data(u, "parsedAttrs", !0)
          }
          return s
        }
        return "object" == typeof n ? this.each(function() {
          i.data(this, n)
        }) : i.access(this, function(r) {
          return r === t ? u ? ur(u, n, i.data(u, n)) : null : (this.each(function() {
            i.data(this, n, r)
          }), t)
        }, null, r, arguments.length > 1, null, !0)
      },
      removeData: function(n) {
        return this.each(function() {
          i.removeData(this, n)
        })
      }
    }), i.extend({
      queue: function(n, r, u) {
        var f;
        return n ? (r = (r || "fx") + "queue", f = i._data(n, r), u && (!f || i.isArray(u) ? f = i._data(n, r, i.makeArray(u)) : f.push(u)), f || []) : t
      },
      dequeue: function(n, t) {
        t = t || "fx";
        var f = i.queue(n, t),
          e = f.length,
          r = f.shift(),
          u = i._queueHooks(n, t),
          o = function() {
            i.dequeue(n, t)
          };
        "inprogress" === r && (r = f.shift(), e--), u.cur = r, r && ("fx" === t && f.unshift("inprogress"), delete u.stop, r.call(n, o, u)), !e && u && u.empty.fire()
      },
      _queueHooks: function(n, t) {
        var r = t + "queueHooks";
        return i._data(n, r) || i._data(n, r, {
            empty: i.Callbacks("once memory").add(function() {
              i._removeData(n, t + "queue"), i._removeData(n, r)
            })
          })
      }
    }), i.fn.extend({
      queue: function(n, r) {
        var u = 2;
        return "string" != typeof n && (r = n, n = "fx", u--), u > arguments.length ? i.queue(this[0], n) : r === t ? this : this.each(function() {
          var t = i.queue(this, n, r);
          i._queueHooks(this, n), "fx" === n && "inprogress" !== t[0] && i.dequeue(this, n)
        })
      },
      dequeue: function(n) {
        return this.each(function() {
          i.dequeue(this, n)
        })
      },
      delay: function(n, t) {
        return n = i.fx ? i.fx.speeds[n] || n : n, t = t || "fx", this.queue(t, function(t, i) {
          var r = setTimeout(t, n);
          i.stop = function() {
            clearTimeout(r)
          }
        })
      },
      clearQueue: function(n) {
        return this.queue(n || "fx", [])
      },
      promise: function(n, r) {
        var u, e = 1,
          o = i.Deferred(),
          f = this,
          s = this.length,
          h = function() {
            --e || o.resolveWith(f, [f])
          };
        for ("string" != typeof n && (r = n, n = t), n = n || "fx"; s--;) u = i._data(f[s], n + "queueHooks"), u && u.empty && (e++, u.empty.add(h));
        return h(), o.promise(r)
      }
    });
    var k, fr, ti = /[\t\r\n]/g,
      df = /\r/g,
      gf = /^(?:input|select|textarea|button|object)$/i,
      ne = /^(?:a|area)$/i,
      er = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
      ii = /^(?:checked|selected)$/i,
      a = i.support.getSetAttribute,
      ri = i.support.input;
    i.fn.extend({
      attr: function(n, t) {
        return i.access(this, i.attr, n, t, arguments.length > 1)
      },
      removeAttr: function(n) {
        return this.each(function() {
          i.removeAttr(this, n)
        })
      },
      prop: function(n, t) {
        return i.access(this, i.prop, n, t, arguments.length > 1)
      },
      removeProp: function(n) {
        return n = i.propFix[n] || n, this.each(function() {
          try {
            this[n] = t, delete this[n]
          } catch (i) {}
        })
      },
      addClass: function(n) {
        var e, t, r, u, o, f = 0,
          h = this.length,
          c = "string" == typeof n && n;
        if (i.isFunction(n)) return this.each(function(t) {
          i(this).addClass(n.call(this, t, this.className))
        });
        if (c)
          for (e = (n || "").match(s) || []; h > f; f++)
            if (t = this[f], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(ti, " ") : " ")) {
              for (o = 0; u = e[o++];) 0 > r.indexOf(" " + u + " ") && (r += u + " ");
              t.className = i.trim(r)
            }
        return this
      },
      removeClass: function(n) {
        var e, t, r, u, o, f = 0,
          h = this.length,
          c = 0 === arguments.length || "string" == typeof n && n;
        if (i.isFunction(n)) return this.each(function(t) {
          i(this).removeClass(n.call(this, t, this.className))
        });
        if (c)
          for (e = (n || "").match(s) || []; h > f; f++)
            if (t = this[f], r = 1 === t.nodeType && (t.className ? (" " + t.className + " ").replace(ti, " ") : "")) {
              for (o = 0; u = e[o++];)
                while (r.indexOf(" " + u + " ") >= 0) r = r.replace(" " + u + " ", " ");
              t.className = n ? i.trim(r) : ""
            }
        return this
      },
      toggleClass: function(n, t) {
        var r = typeof n,
          u = "boolean" == typeof t;
        return i.isFunction(n) ? this.each(function(r) {
          i(this).toggleClass(n.call(this, r, this.className, t), t)
        }) : this.each(function() {
          if ("string" === r)
            for (var f, c = 0, h = i(this), e = t, l = n.match(s) || []; f = l[c++];) e = u ? e : !h.hasClass(f), h[e ? "addClass" : "removeClass"](f);
          else(r === o || "boolean" === r) && (this.className && i._data(this, "__className__", this.className), this.className = this.className || n === !1 ? "" : i._data(this, "__className__") || "")
        })
      },
      hasClass: function(n) {
        for (var i = " " + n + " ", t = 0, r = this.length; r > t; t++)
          if (1 === this[t].nodeType && (" " + this[t].className + " ").replace(ti, " ").indexOf(i) >= 0) return !0;
        return !1
      },
      val: function(n) {
        var u, r, e, f = this[0];
        return arguments.length ? (e = i.isFunction(n), this.each(function(u) {
          var f, o = i(this);
          1 === this.nodeType && (f = e ? n.call(this, u, o.val()) : n, null == f ? f = "" : "number" == typeof f ? f += "" : i.isArray(f) && (f = i.map(f, function(n) {
            return null == n ? "" : n + ""
          })), r = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, f, "value") !== t || (this.value = f))
        })) : f ? (r = i.valHooks[f.type] || i.valHooks[f.nodeName.toLowerCase()], r && "get" in r && (u = r.get(f, "value")) !== t ? u : (u = f.value, "string" == typeof u ? u.replace(df, "") : null == u ? "" : u)) : void 0
      }
    }), i.extend({
      valHooks: {
        option: {
          get: function(n) {
            var t = n.attributes.value;
            return !t || t.specified ? n.value : n.text
          }
        },
        select: {
          get: function(n) {
            for (var e, t, o = n.options, r = n.selectedIndex, u = "select-one" === n.type || 0 > r, s = u ? null : [], h = u ? r + 1 : o.length, f = 0 > r ? h : u ? r : 0; h > f; f++)
              if (t = o[f], !(!t.selected && f !== r || (i.support.optDisabled ? t.disabled : null !== t.getAttribute("disabled")) || t.parentNode.disabled && i.nodeName(t.parentNode, "optgroup"))) {
                if (e = i(t).val(), u) return e;
                s.push(e)
              }
            return s
          },
          set: function(n, t) {
            var r = i.makeArray(t);
            return i(n).find("option").each(function() {
              this.selected = i.inArray(i(this).val(), r) >= 0
            }), r.length || (n.selectedIndex = -1), r
          }
        }
      },
      attr: function(n, r, u) {
        var f, s, e, h = n.nodeType;
        if (n && 3 !== h && 8 !== h && 2 !== h) return typeof n.getAttribute === o ? i.prop(n, r, u) : (s = 1 !== h || !i.isXMLDoc(n), s && (r = r.toLowerCase(), f = i.attrHooks[r] || (er.test(r) ? fr : k)), u === t ? f && s && "get" in f && null !== (e = f.get(n, r)) ? e : (typeof n.getAttribute !== o && (e = n.getAttribute(r)), null == e ? t : e) : null !== u ? f && s && "set" in f && (e = f.set(n, u, r)) !== t ? e : (n.setAttribute(r, u + ""), u) : (i.removeAttr(n, r), t))
      },
      removeAttr: function(n, t) {
        var r, u, e = 0,
          f = t && t.match(s);
        if (f && 1 === n.nodeType)
          while (r = f[e++]) u = i.propFix[r] || r, er.test(r) ? !a && ii.test(r) ? n[i.camelCase("default-" + r)] = n[u] = !1 : n[u] = !1 : i.attr(n, r, ""), n.removeAttribute(a ? r : u)
      },
      attrHooks: {
        type: {
          set: function(n, t) {
            if (!i.support.radioValue && "radio" === t && i.nodeName(n, "input")) {
              var r = n.value;
              return n.setAttribute("type", t), r && (n.value = r), t
            }
          }
        }
      },
      propFix: {
        tabindex: "tabIndex",
        readonly: "readOnly",
        "for": "htmlFor",
        "class": "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable"
      },
      prop: function(n, r, u) {
        var e, f, s, o = n.nodeType;
        if (n && 3 !== o && 8 !== o && 2 !== o) return s = 1 !== o || !i.isXMLDoc(n), s && (r = i.propFix[r] || r, f = i.propHooks[r]), u !== t ? f && "set" in f && (e = f.set(n, u, r)) !== t ? e : n[r] = u : f && "get" in f && null !== (e = f.get(n, r)) ? e : n[r]
      },
      propHooks: {
        tabIndex: {
          get: function(n) {
            var i = n.getAttributeNode("tabindex");
            return i && i.specified ? parseInt(i.value, 10) : gf.test(n.nodeName) || ne.test(n.nodeName) && n.href ? 0 : t
          }
        }
      }
    }), fr = {
      get: function(n, r) {
        var u = i.prop(n, r),
          f = "boolean" == typeof u && n.getAttribute(r),
          e = "boolean" == typeof u ? ri && a ? null != f : ii.test(r) ? n[i.camelCase("default-" + r)] : !!f : n.getAttributeNode(r);
        return e && e.value !== !1 ? r.toLowerCase() : t
      },
      set: function(n, t, r) {
        return t === !1 ? i.removeAttr(n, r) : ri && a || !ii.test(r) ? n.setAttribute(!a && i.propFix[r] || r, r) : n[i.camelCase("default-" + r)] = n[r] = !0, r
      }
    }, ri && a || (i.attrHooks.value = {
      get: function(n, r) {
        var u = n.getAttributeNode(r);
        return i.nodeName(n, "input") ? n.defaultValue : u && u.specified ? u.value : t
      },
      set: function(n, r, u) {
        return i.nodeName(n, "input") ? (n.defaultValue = r, t) : k && k.set(n, r, u)
      }
    }), a || (k = i.valHooks.button = {
      get: function(n, i) {
        var r = n.getAttributeNode(i);
        return r && ("id" === i || "name" === i || "coords" === i ? "" !== r.value : r.specified) ? r.value : t
      },
      set: function(n, i, r) {
        var u = n.getAttributeNode(r);
        return u || n.setAttributeNode(u = n.ownerDocument.createAttribute(r)), u.value = i += "", "value" === r || i === n.getAttribute(r) ? i : t
      }
    }, i.attrHooks.contenteditable = {
      get: k.get,
      set: function(n, t, i) {
        k.set(n, "" === t ? !1 : t, i)
      }
    }, i.each(["width", "height"], function(n, r) {
      i.attrHooks[r] = i.extend(i.attrHooks[r], {
        set: function(n, i) {
          return "" === i ? (n.setAttribute(r, "auto"), i) : t
        }
      })
    })), i.support.hrefNormalized || (i.each(["href", "src", "width", "height"], function(n, r) {
      i.attrHooks[r] = i.extend(i.attrHooks[r], {
        get: function(n) {
          var i = n.getAttribute(r, 2);
          return null == i ? t : i
        }
      })
    }), i.each(["href", "src"], function(n, t) {
      i.propHooks[t] = {
        get: function(n) {
          return n.getAttribute(t, 4)
        }
      }
    })), i.support.style || (i.attrHooks.style = {
      get: function(n) {
        return n.style.cssText || t
      },
      set: function(n, t) {
        return n.style.cssText = t + ""
      }
    }), i.support.optSelected || (i.propHooks.selected = i.extend(i.propHooks.selected, {
      get: function(n) {
        var t = n.parentNode;
        return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
      }
    })), i.support.enctype || (i.propFix.enctype = "encoding"), i.support.checkOn || i.each(["radio", "checkbox"], function() {
      i.valHooks[this] = {
        get: function(n) {
          return null === n.getAttribute("value") ? "on" : n.value
        }
      }
    }), i.each(["radio", "checkbox"], function() {
      i.valHooks[this] = i.extend(i.valHooks[this], {
        set: function(n, r) {
          return i.isArray(r) ? n.checked = i.inArray(i(n).val(), r) >= 0 : t
        }
      })
    });
    var ui = /^(?:input|select|textarea)$/i,
      te = /^key/,
      ie = /^(?:mouse|contextmenu)|click/,
      or = /^(?:focusinfocus|focusoutblur)$/,
      sr = /^([^.]*)(?:\.(.+)|)$/;
    i.event = {
      global: {},
      add: function(n, r, u, f, e) {
        var b, p, k, w, c, l, a, v, h, d, g, y = i._data(n);
        if (y) {
          for (u.handler && (w = u, u = w.handler, e = w.selector), u.guid || (u.guid = i.guid++), (p = y.events) || (p = y.events = {}), (l = y.handle) || (l = y.handle = function(n) {
            return typeof i === o || n && i.event.triggered === n.type ? t : i.event.dispatch.apply(l.elem, arguments)
          }, l.elem = n), r = (r || "").match(s) || [""], k = r.length; k--;) b = sr.exec(r[k]) || [], h = g = b[1], d = (b[2] || "").split(".").sort(), c = i.event.special[h] || {}, h = (e ? c.delegateType : c.bindType) || h, c = i.event.special[h] || {}, a = i.extend({
            type: h,
            origType: g,
            data: f,
            handler: u,
            guid: u.guid,
            selector: e,
            needsContext: e && i.expr.match.needsContext.test(e),
            namespace: d.join(".")
          }, w), (v = p[h]) || (v = p[h] = [], v.delegateCount = 0, c.setup && c.setup.call(n, f, d, l) !== !1 || (n.addEventListener ? n.addEventListener(h, l, !1) : n.attachEvent && n.attachEvent("on" + h, l))), c.add && (c.add.call(n, a), a.handler.guid || (a.handler.guid = u.guid)), e ? v.splice(v.delegateCount++, 0, a) : v.push(a), i.event.global[h] = !0;
          n = null
        }
      },
      remove: function(n, t, r, u, f) {
        var y, o, h, b, p, a, c, l, e, w, k, v = i.hasData(n) && i._data(n);
        if (v && (a = v.events)) {
          for (t = (t || "").match(s) || [""], p = t.length; p--;)
            if (h = sr.exec(t[p]) || [], e = k = h[1], w = (h[2] || "").split(".").sort(), e) {
              for (c = i.event.special[e] || {}, e = (u ? c.delegateType : c.bindType) || e, l = a[e] || [], h = h[2] && RegExp("(^|\\.)" + w.join("\\.(?:.*\\.|)") + "(\\.|$)"), b = y = l.length; y--;) o = l[y], !f && k !== o.origType || r && r.guid !== o.guid || h && !h.test(o.namespace) || u && u !== o.selector && ("**" !== u || !o.selector) || (l.splice(y, 1), o.selector && l.delegateCount--, c.remove && c.remove.call(n, o));
              b && !l.length && (c.teardown && c.teardown.call(n, w, v.handle) !== !1 || i.removeEvent(n, e, v.handle), delete a[e])
            } else
              for (e in a) i.event.remove(n, e + t[p], r, u, !0);
          i.isEmptyObject(a) && (delete v.handle, i._removeData(n, "events"))
        }
      },
      trigger: function(u, f, e, o) {
        var a, v, h, p, l, c, w, b = [e || r],
          s = it.call(u, "type") ? u.type : u,
          y = it.call(u, "namespace") ? u.namespace.split(".") : [];
        if (h = c = e = e || r, 3 !== e.nodeType && 8 !== e.nodeType && !or.test(s + i.event.triggered) && (s.indexOf(".") >= 0 && (y = s.split("."), s = y.shift(), y.sort()), v = 0 > s.indexOf(":") && "on" + s, u = u[i.expando] ? u : new i.Event(s, "object" == typeof u && u), u.isTrigger = !0, u.namespace = y.join("."), u.namespace_re = u.namespace ? RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, u.result = t, u.target || (u.target = e), f = null == f ? [u] : i.makeArray(f, [u]), l = i.event.special[s] || {}, o || !l.trigger || l.trigger.apply(e, f) !== !1)) {
          if (!o && !l.noBubble && !i.isWindow(e)) {
            for (p = l.delegateType || s, or.test(p + s) || (h = h.parentNode); h; h = h.parentNode) b.push(h), c = h;
            c === (e.ownerDocument || r) && b.push(c.defaultView || c.parentWindow || n)
          }
          for (w = 0;
               (h = b[w++]) && !u.isPropagationStopped();) u.type = w > 1 ? p : l.bindType || s, a = (i._data(h, "events") || {})[u.type] && i._data(h, "handle"), a && a.apply(h, f), a = v && h[v], a && i.acceptData(h) && a.apply && a.apply(h, f) === !1 && u.preventDefault();
          if (u.type = s, !(o || u.isDefaultPrevented() || l._default && l._default.apply(e.ownerDocument, f) !== !1 || "click" === s && i.nodeName(e, "a") || !i.acceptData(e) || !v || !e[s] || i.isWindow(e))) {
            c = e[v], c && (e[v] = null), i.event.triggered = s;
            try {
              e[s]()
            } catch (k) {}
            i.event.triggered = t, c && (e[v] = c)
          }
          return u.result
        }
      },
      dispatch: function(n) {
        n = i.event.fix(n);
        var o, e, r, u, s, h = [],
          c = l.call(arguments),
          a = (i._data(this, "events") || {})[n.type] || [],
          f = i.event.special[n.type] || {};
        if (c[0] = n, n.delegateTarget = this, !f.preDispatch || f.preDispatch.call(this, n) !== !1) {
          for (h = i.event.handlers.call(this, n, a), o = 0;
               (u = h[o++]) && !n.isPropagationStopped();)
            for (n.currentTarget = u.elem, s = 0;
                 (r = u.handlers[s++]) && !n.isImmediatePropagationStopped();)(!n.namespace_re || n.namespace_re.test(r.namespace)) && (n.handleObj = r, n.data = r.data, e = ((i.event.special[r.origType] || {}).handle || r.handler).apply(u.elem, c), e !== t && (n.result = e) === !1 && (n.preventDefault(), n.stopPropagation()));
          return f.postDispatch && f.postDispatch.call(this, n), n.result
        }
      },
      handlers: function(n, r) {
        var e, o, f, s, c = [],
          h = r.delegateCount,
          u = n.target;
        if (h && u.nodeType && (!n.button || "click" !== n.type))
          for (; u != this; u = u.parentNode || this)
            if (1 === u.nodeType && (u.disabled !== !0 || "click" !== n.type)) {
              for (f = [], s = 0; h > s; s++) o = r[s], e = o.selector + " ", f[e] === t && (f[e] = o.needsContext ? i(e, this).index(u) >= 0 : i.find(e, this, null, [u]).length), f[e] && f.push(o);
              f.length && c.push({
                elem: u,
                handlers: f
              })
            }
        return r.length > h && c.push({
          elem: this,
          handlers: r.slice(h)
        }), c
      },
      fix: function(n) {
        if (n[i.expando]) return n;
        var e, o, s, u = n.type,
          f = n,
          t = this.fixHooks[u];
        for (t || (this.fixHooks[u] = t = ie.test(u) ? this.mouseHooks : te.test(u) ? this.keyHooks : {}), s = t.props ? this.props.concat(t.props) : this.props, n = new i.Event(f), e = s.length; e--;) o = s[e], n[o] = f[o];
        return n.target || (n.target = f.srcElement || r), 3 === n.target.nodeType && (n.target = n.target.parentNode), n.metaKey = !!n.metaKey, t.filter ? t.filter(n, f) : n
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function(n, t) {
          return null == n.which && (n.which = null != t.charCode ? t.charCode : t.keyCode), n
        }
      },
      mouseHooks: {
        props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function(n, i) {
          var u, o, f, e = i.button,
            s = i.fromElement;
          return null == n.pageX && null != i.clientX && (o = n.target.ownerDocument || r, f = o.documentElement, u = o.body, n.pageX = i.clientX + (f && f.scrollLeft || u && u.scrollLeft || 0) - (f && f.clientLeft || u && u.clientLeft || 0), n.pageY = i.clientY + (f && f.scrollTop || u && u.scrollTop || 0) - (f && f.clientTop || u && u.clientTop || 0)), !n.relatedTarget && s && (n.relatedTarget = s === n.target ? i.toElement : s), n.which || e === t || (n.which = 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0), n
        }
      },
      special: {
        load: {
          noBubble: !0
        },
        click: {
          trigger: function() {
            return i.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
          }
        },
        focus: {
          trigger: function() {
            if (this !== r.activeElement && this.focus) try {
              return this.focus(), !1
            } catch (n) {}
          },
          delegateType: "focusin"
        },
        blur: {
          trigger: function() {
            return this === r.activeElement && this.blur ? (this.blur(), !1) : t
          },
          delegateType: "focusout"
        },
        beforeunload: {
          postDispatch: function(n) {
            n.result !== t && (n.originalEvent.returnValue = n.result)
          }
        }
      },
      simulate: function(n, t, r, u) {
        var f = i.extend(new i.Event, r, {
          type: n,
          isSimulated: !0,
          originalEvent: {}
        });
        u ? i.event.trigger(f, null, t) : i.event.dispatch.call(t, f), f.isDefaultPrevented() && r.preventDefault()
      }
    }, i.removeEvent = r.removeEventListener ? function(n, t, i) {
      n.removeEventListener && n.removeEventListener(t, i, !1)
    } : function(n, t, i) {
      var r = "on" + t;
      n.detachEvent && (typeof n[r] === o && (n[r] = null), n.detachEvent(r, i))
    }, i.Event = function(n, r) {
      return this instanceof i.Event ? (n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || n.returnValue === !1 || n.getPreventDefault && n.getPreventDefault() ? ht : d) : this.type = n, r && i.extend(this, r), this.timeStamp = n && n.timeStamp || i.now(), this[i.expando] = !0, t) : new i.Event(n, r)
    }, i.Event.prototype = {
      isDefaultPrevented: d,
      isPropagationStopped: d,
      isImmediatePropagationStopped: d,
      preventDefault: function() {
        var n = this.originalEvent;
        this.isDefaultPrevented = ht, n && (n.preventDefault ? n.preventDefault() : n.returnValue = !1)
      },
      stopPropagation: function() {
        var n = this.originalEvent;
        this.isPropagationStopped = ht, n && (n.stopPropagation && n.stopPropagation(), n.cancelBubble = !0)
      },
      stopImmediatePropagation: function() {
        this.isImmediatePropagationStopped = ht, this.stopPropagation()
      }
    }, i.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout"
    }, function(n, t) {
      i.event.special[n] = {
        delegateType: t,
        bindType: t,
        handle: function(n) {
          var u, f = this,
            r = n.relatedTarget,
            e = n.handleObj;
          return (!r || r !== f && !i.contains(f, r)) && (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u
        }
      }
    }), i.support.submitBubbles || (i.event.special.submit = {
      setup: function() {
        return i.nodeName(this, "form") ? !1 : (i.event.add(this, "click._submit keypress._submit", function(n) {
          var u = n.target,
            r = i.nodeName(u, "input") || i.nodeName(u, "button") ? u.form : t;
          r && !i._data(r, "submitBubbles") && (i.event.add(r, "submit._submit", function(n) {
            n._submit_bubble = !0
          }), i._data(r, "submitBubbles", !0))
        }), t)
      },
      postDispatch: function(n) {
        n._submit_bubble && (delete n._submit_bubble, this.parentNode && !n.isTrigger && i.event.simulate("submit", this.parentNode, n, !0))
      },
      teardown: function() {
        return i.nodeName(this, "form") ? !1 : (i.event.remove(this, "._submit"), t)
      }
    }), i.support.changeBubbles || (i.event.special.change = {
      setup: function() {
        return ui.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (i.event.add(this, "propertychange._change", function(n) {
          "checked" === n.originalEvent.propertyName && (this._just_changed = !0)
        }), i.event.add(this, "click._change", function(n) {
          this._just_changed && !n.isTrigger && (this._just_changed = !1), i.event.simulate("change", this, n, !0)
        })), !1) : (i.event.add(this, "beforeactivate._change", function(n) {
          var t = n.target;
          ui.test(t.nodeName) && !i._data(t, "changeBubbles") && (i.event.add(t, "change._change", function(n) {
            !this.parentNode || n.isSimulated || n.isTrigger || i.event.simulate("change", this.parentNode, n, !0)
          }), i._data(t, "changeBubbles", !0))
        }), t)
      },
      handle: function(n) {
        var i = n.target;
        return this !== i || n.isSimulated || n.isTrigger || "radio" !== i.type && "checkbox" !== i.type ? n.handleObj.handler.apply(this, arguments) : t
      },
      teardown: function() {
        return i.event.remove(this, "._change"), !ui.test(this.nodeName)
      }
    }), i.support.focusinBubbles || i.each({
      focus: "focusin",
      blur: "focusout"
    }, function(n, t) {
      var u = 0,
        f = function(n) {
          i.event.simulate(t, n.target, i.event.fix(n), !0)
        };
      i.event.special[t] = {
        setup: function() {
          0 == u++ && r.addEventListener(n, f, !0)
        },
        teardown: function() {
          0 == --u && r.removeEventListener(n, f, !0)
        }
      }
    }), i.fn.extend({
      on: function(n, r, u, f, e) {
        var s, o;
        if ("object" == typeof n) {
          "string" != typeof r && (u = u || r, r = t);
          for (s in n) this.on(s, r, u, n[s], e);
          return this
        }
        if (null == u && null == f ? (f = r, u = r = t) : null == f && ("string" == typeof r ? (f = u, u = t) : (f = u, u = r, r = t)), f === !1) f = d;
        else if (!f) return this;
        return 1 === e && (o = f, f = function(n) {
          return i().off(n), o.apply(this, arguments)
        }, f.guid = o.guid || (o.guid = i.guid++)), this.each(function() {
          i.event.add(this, n, f, u, r)
        })
      },
      one: function(n, t, i, r) {
        return this.on(n, t, i, r, 1)
      },
      off: function(n, r, u) {
        var f, e;
        if (n && n.preventDefault && n.handleObj) return f = n.handleObj, i(n.delegateTarget).off(f.namespace ? f.origType + "." + f.namespace : f.origType, f.selector, f.handler), this;
        if ("object" == typeof n) {
          for (e in n) this.off(e, r, n[e]);
          return this
        }
        return (r === !1 || "function" == typeof r) && (u = r, r = t), u === !1 && (u = d), this.each(function() {
          i.event.remove(this, n, u, r)
        })
      },
      bind: function(n, t, i) {
        return this.on(n, null, t, i)
      },
      unbind: function(n, t) {
        return this.off(n, null, t)
      },
      delegate: function(n, t, i, r) {
        return this.on(t, n, i, r)
      },
      undelegate: function(n, t, i) {
        return 1 === arguments.length ? this.off(n, "**") : this.off(t, n || "**", i)
      },
      trigger: function(n, t) {
        return this.each(function() {
          i.event.trigger(n, t, this)
        })
      },
      triggerHandler: function(n, r) {
        var u = this[0];
        return u ? i.event.trigger(n, r, u, !0) : t
      }
    }),
      function(n, t) {
        function ti(n) {
          return ir.test(n + "")
        }

        function ii() {
          var n, t = [];
          return n = function(i, u) {
            return t.push(i += " ") > r.cacheLength && delete n[t.shift()], n[i] = u
          }
        }

        function l(n) {
          return n[f] = !0, n
        }

        function b(n) {
          var t = s.createElement("div");
          try {
            return n(t)
          } catch (i) {
            return !1
          } finally {
            t = null
          }
        }

        function u(n, t, i, r) {
          var y, u, e, l, p, v, w, h, d, b;
          if ((t ? t.ownerDocument || t : k) !== s && it(t), t = t || s, i = i || [], !n || "string" != typeof n) return i;
          if (1 !== (l = t.nodeType) && 9 !== l) return [];
          if (!c && !r) {
            if (y = rr.exec(n))
              if (e = y[1]) {
                if (9 === l) {
                  if (u = t.getElementById(e), !u || !u.parentNode) return i;
                  if (u.id === e) return i.push(u), i
                } else if (t.ownerDocument && (u = t.ownerDocument.getElementById(e)) && et(t, u) && u.id === e) return i.push(u), i
              } else {
                if (y[2]) return ut.apply(i, ft.call(t.getElementsByTagName(n), 0)), i;
                if ((e = y[3]) && o.getByClassName && t.getElementsByClassName) return ut.apply(i, ft.call(t.getElementsByClassName(e), 0)), i
              }
            if (o.qsa && !a.test(n)) {
              if (w = !0, h = f, d = t, b = 9 === l && n, 1 === l && "object" !== t.nodeName.toLowerCase()) {
                for (v = yt(n), (w = t.getAttribute("id")) ? h = w.replace(er, "\\$&") : t.setAttribute("id", h), h = "[id='" + h + "'] ", p = v.length; p--;) v[p] = h + pt(v[p]);
                d = ni.test(n) && t.parentNode || t, b = v.join(",")
              }
              if (b) try {
                return ut.apply(i, ft.call(d.querySelectorAll(b), 0)), i
              } catch (g) {} finally {
                w || t.removeAttribute("id")
              }
            }
          }
          return ar(n.replace(at, "$1"), t, i, r)
        }

        function yi(n, t) {
          var i = t && n,
            r = i && (~t.sourceIndex || li) - (~n.sourceIndex || li);
          if (r) return r;
          if (i)
            while (i = i.nextSibling)
              if (i === t) return -1;
          return n ? 1 : -1
        }

        function sr(n) {
          return function(t) {
            var i = t.nodeName.toLowerCase();
            return "input" === i && t.type === n
          }
        }

        function hr(n) {
          return function(t) {
            var i = t.nodeName.toLowerCase();
            return ("input" === i || "button" === i) && t.type === n
          }
        }

        function g(n) {
          return l(function(t) {
            return t = +t, l(function(i, r) {
              for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
            })
          })
        }

        function yt(n, t) {
          var e, f, s, o, i, h, c, l = hi[n + " "];
          if (l) return t ? 0 : l.slice(0);
          for (i = n, h = [], c = r.preFilter; i;) {
            (!e || (f = di.exec(i))) && (f && (i = i.slice(f[0].length) || i), h.push(s = [])), e = !1, (f = gi.exec(i)) && (e = f.shift(), s.push({
              value: e,
              type: f[0].replace(at, " ")
            }), i = i.slice(e.length));
            for (o in r.filter)(f = vt[o].exec(i)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
              value: e,
              type: o,
              matches: f
            }), i = i.slice(e.length));
            if (!e) break
          }
          return t ? i.length : i ? u.error(n) : hi(n, h).slice(0)
        }

        function pt(n) {
          for (var t = 0, r = n.length, i = ""; r > t; t++) i += n[t].value;
          return i
        }

        function ri(n, t, i) {
          var r = t.dir,
            u = i && "parentNode" === r,
            e = wi++;
          return t.first ? function(t, i, f) {
            while (t = t[r])
              if (1 === t.nodeType || u) return n(t, i, f)
          } : function(t, i, o) {
            var h, s, c, l = v + " " + e;
            if (o) {
              while (t = t[r])
                if ((1 === t.nodeType || u) && n(t, i, o)) return !0
            } else
              while (t = t[r])
                if (1 === t.nodeType || u)
                  if (c = t[f] || (t[f] = {}), (s = c[r]) && s[0] === l) {
                    if ((h = s[1]) === !0 || h === ot) return h === !0
                  } else if (s = c[r] = [l], s[1] = n(t, i, o) || ot, s[1] === !0) return !0
          }
        }

        function ui(n) {
          return n.length > 1 ? function(t, i, r) {
            for (var u = n.length; u--;)
              if (!n[u](t, i, r)) return !1;
            return !0
          } : n[0]
        }

        function wt(n, t, i, r, u) {
          for (var e, o = [], f = 0, s = n.length, h = null != t; s > f; f++)(e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f));
          return o
        }

        function fi(n, t, i, r, u, e) {
          return r && !r[f] && (r = fi(r)), u && !u[f] && (u = fi(u, e)), l(function(f, e, o, s) {
            var l, c, a, p = [],
              y = [],
              w = e.length,
              b = f || lr(t || "*", o.nodeType ? [o] : o, []),
              v = !n || !f && t ? b : wt(b, p, n, o, s),
              h = i ? u || (f ? n : w || r) ? [] : e : v;
            if (i && i(v, h, o, s), r)
              for (l = wt(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
            if (f) {
              if (u || n) {
                if (u) {
                  for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
                  u(null, h = [], l, s)
                }
                for (c = h.length; c--;)(a = h[c]) && (l = u ? dt.call(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
              }
            } else h = wt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : ut.apply(e, h)
          })
        }

        function ei(n) {
          for (var s, u, i, o = n.length, h = r.relative[n[0].type], c = h || r.relative[" "], t = h ? 1 : 0, l = ri(function(n) {
            return n === s
          }, c, !0), a = ri(function(n) {
            return dt.call(s, n) > -1
          }, c, !0), e = [function(n, t, i) {
            return !h && (i || t !== ht) || ((s = t).nodeType ? l(n, t, i) : a(n, t, i))
          }]; o > t; t++)
            if (u = r.relative[n[t].type]) e = [ri(ui(e), u)];
            else {
              if (u = r.filter[n[t].type].apply(null, n[t].matches), u[f]) {
                for (i = ++t; o > i; i++)
                  if (r.relative[n[i].type]) break;
                return fi(t > 1 && ui(e), t > 1 && pt(n.slice(0, t - 1)).replace(at, "$1"), u, i > t && ei(n.slice(t, i)), o > i && ei(n = n.slice(i)), o > i && pt(n))
              }
              e.push(u)
            }
          return ui(e)
        }

        function cr(n, t) {
          var f = 0,
            i = t.length > 0,
            e = n.length > 0,
            o = function(o, h, c, l, a) {
              var p, d, b, w = [],
                k = 0,
                y = "0",
                g = o && [],
                nt = null != a,
                tt = ht,
                rt = o || e && r.find.TAG("*", a && h.parentNode || h),
                it = v += null == tt ? 1 : Math.random() || .1;
              for (nt && (ht = h !== s && h, ot = f); null != (p = rt[y]); y++) {
                if (e && p) {
                  for (d = 0; b = n[d++];)
                    if (b(p, h, c)) {
                      l.push(p);
                      break
                    }
                  nt && (v = it, ot = ++f)
                }
                i && ((p = !b && p) && k--, o && g.push(p))
              }
              if (k += y, i && y !== k) {
                for (d = 0; b = t[d++];) b(g, w, h, c);
                if (o) {
                  if (k > 0)
                    while (y--) g[y] || w[y] || (w[y] = bi.call(l));
                  w = wt(w)
                }
                ut.apply(l, w), nt && !o && w.length > 0 && k + t.length > 1 && u.uniqueSort(l)
              }
              return nt && (v = it, ht = tt), g
            };
          return i ? l(o) : o
        }

        function lr(n, t, i) {
          for (var r = 0, f = t.length; f > r; r++) u(n, t[r], i);
          return i
        }

        function ar(n, t, i, u) {
          var o, f, e, h, l, s = yt(n);
          if (!u && 1 === s.length) {
            if (f = s[0] = s[0].slice(0), f.length > 2 && "ID" === (e = f[0]).type && 9 === t.nodeType && !c && r.relative[f[1].type]) {
              if (t = r.find.ID(e.matches[0].replace(p, w), t)[0], !t) return i;
              n = n.slice(f.shift().value.length)
            }
            for (o = vt.needsContext.test(n) ? 0 : f.length; o--;) {
              if (e = f[o], r.relative[h = e.type]) break;
              if ((l = r.find[h]) && (u = l(e.matches[0].replace(p, w), ni.test(f[0].type) && t.parentNode || t))) {
                if (f.splice(o, 1), n = u.length && pt(f), !n) return ut.apply(i, ft.call(u, 0)), i;
                break
              }
            }
          }
          return bt(n, s)(u, t, c, i, ni.test(n)), i
        }

        function pi() {}
        var nt, ot, r, st, oi, bt, tt, ht, it, s, h, c, a, rt, ct, et, kt, f = "sizzle" + -new Date,
          k = n.document,
          o = {},
          v = 0,
          wi = 0,
          si = ii(),
          hi = ii(),
          ci = ii(),
          y = typeof t,
          li = -2147483648,
          lt = [],
          bi = lt.pop,
          ut = lt.push,
          ft = lt.slice,
          dt = lt.indexOf || function(n) {
              for (var t = 0, i = this.length; i > t; t++)
                if (this[t] === n) return t;
              return -1
            },
          e = "[\\x20\\t\\r\\n\\f]",
          d = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
          ai = d.replace("w", "w#"),
          ki = "([*^$|!~]?=)",
          vi = "\\[" + e + "*(" + d + ")" + e + "*(?:" + ki + e + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ai + ")|)|)" + e + "*\\]",
          gt = ":(" + d + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + vi.replace(3, 8) + ")*)|.*)\\)|)",
          at = RegExp("^" + e + "+|((?:^|[^\\\\])(?:\\\\.)*)" + e + "+$", "g"),
          di = RegExp("^" + e + "*," + e + "*"),
          gi = RegExp("^" + e + "*([\\x20\\t\\r\\n\\f>+~])" + e + "*"),
          nr = RegExp(gt),
          tr = RegExp("^" + ai + "$"),
          vt = {
            ID: RegExp("^#(" + d + ")"),
            CLASS: RegExp("^\\.(" + d + ")"),
            NAME: RegExp("^\\[name=['\"]?(" + d + ")['\"]?\\]"),
            TAG: RegExp("^(" + d.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + vi),
            PSEUDO: RegExp("^" + gt),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + e + "*(even|odd|(([+-]|)(\\d*)n|)" + e + "*(?:([+-]|)" + e + "*(\\d+)|))" + e + "*\\)|)", "i"),
            needsContext: RegExp("^" + e + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + e + "*((?:-\\d)?\\d*)" + e + "*\\)|)(?=[^-]|$)", "i")
          },
          ni = /[\x20\t\r\n\f]*[+~]/,
          ir = /^[^{]+\{\s*\[native code/,
          rr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          ur = /^(?:input|select|textarea|button)$/i,
          fr = /^h\d$/i,
          er = /'|\\/g,
          or = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
          p = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
          w = function(n, t) {
            var i = "0x" + t - 65536;
            return i !== i ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
          };
        try {
          ft.call(k.documentElement.childNodes, 0)[0].nodeType
        } catch (vr) {
          ft = function(n) {
            for (var t, i = []; t = this[n++];) i.push(t);
            return i
          }
        }
        oi = u.isXML = function(n) {
          var t = n && (n.ownerDocument || n).documentElement;
          return t ? "HTML" !== t.nodeName : !1
        }, it = u.setDocument = function(n) {
          var i = n ? n.ownerDocument || n : k;
          return i !== s && 9 === i.nodeType && i.documentElement ? (s = i, h = i.documentElement, c = oi(i), o.tagNameNoComments = b(function(n) {
            return n.appendChild(i.createComment("")), !n.getElementsByTagName("*").length
          }), o.attributes = b(function(n) {
            n.innerHTML = "<select><\/select>";
            var t = typeof n.lastChild.getAttribute("multiple");
            return "boolean" !== t && "string" !== t
          }), o.getByClassName = b(function(n) {
            return n.innerHTML = "<div class='hidden e'><\/div><div class='hidden'><\/div>", n.getElementsByClassName && n.getElementsByClassName("e").length ? (n.lastChild.className = "e", 2 === n.getElementsByClassName("e").length) : !1
          }), o.getByName = b(function(n) {
            n.id = f + 0, n.innerHTML = "<a name='" + f + "'><\/a><div name='" + f + "'><\/div>", h.insertBefore(n, h.firstChild);
            var t = i.getElementsByName && i.getElementsByName(f).length === 2 + i.getElementsByName(f + 0).length;
            return o.getIdNotName = !i.getElementById(f), h.removeChild(n), t
          }), r.attrHandle = b(function(n) {
            return n.innerHTML = "<a href='#'><\/a>", n.firstChild && typeof n.firstChild.getAttribute !== y && "#" === n.firstChild.getAttribute("href")
          }) ? {} : {
            href: function(n) {
              return n.getAttribute("href", 2)
            },
            type: function(n) {
              return n.getAttribute("type")
            }
          }, o.getIdNotName ? (r.find.ID = function(n, t) {
            if (typeof t.getElementById !== y && !c) {
              var i = t.getElementById(n);
              return i && i.parentNode ? [i] : []
            }
          }, r.filter.ID = function(n) {
            var t = n.replace(p, w);
            return function(n) {
              return n.getAttribute("id") === t
            }
          }) : (r.find.ID = function(n, i) {
            if (typeof i.getElementById !== y && !c) {
              var r = i.getElementById(n);
              return r ? r.id === n || typeof r.getAttributeNode !== y && r.getAttributeNode("id").value === n ? [r] : t : []
            }
          }, r.filter.ID = function(n) {
            var t = n.replace(p, w);
            return function(n) {
              var i = typeof n.getAttributeNode !== y && n.getAttributeNode("id");
              return i && i.value === t
            }
          }), r.find.TAG = o.tagNameNoComments ? function(n, i) {
            return typeof i.getElementsByTagName !== y ? i.getElementsByTagName(n) : t
          } : function(n, t) {
            var i, r = [],
              f = 0,
              u = t.getElementsByTagName(n);
            if ("*" === n) {
              while (i = u[f++]) 1 === i.nodeType && r.push(i);
              return r
            }
            return u
          }, r.find.NAME = o.getByName && function(n, i) {
            return typeof i.getElementsByName !== y ? i.getElementsByName(name) : t
          }, r.find.CLASS = o.getByClassName && function(n, i) {
            return typeof i.getElementsByClassName === y || c ? t : i.getElementsByClassName(n)
          }, rt = [], a = [":focus"], (o.qsa = ti(i.querySelectorAll)) && (b(function(n) {
            n.innerHTML = "<select><option selected=''><\/option><\/select>", n.querySelectorAll("[selected]").length || a.push("\\[" + e + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), n.querySelectorAll(":checked").length || a.push(":checked")
          }), b(function(n) {
            n.innerHTML = "<input type='hidden' i=''/>", n.querySelectorAll("[i^='']").length && a.push("[*^$]=" + e + "*(?:\"\"|'')"), n.querySelectorAll(":enabled").length || a.push(":enabled", ":disabled"), n.querySelectorAll("*,:x"), a.push(",.*:")
          })), (o.matchesSelector = ti(ct = h.matchesSelector || h.mozMatchesSelector || h.webkitMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && b(function(n) {
            o.disconnectedMatch = ct.call(n, "div"), ct.call(n, "[s!='']:x"), rt.push("!=", gt)
          }), a = RegExp(a.join("|")), rt = RegExp(rt.join("|")), et = ti(h.contains) || h.compareDocumentPosition ? function(n, t) {
            var r = 9 === n.nodeType ? n.documentElement : n,
              i = t && t.parentNode;
            return n === i || !(!i || 1 !== i.nodeType || !(r.contains ? r.contains(i) : n.compareDocumentPosition && 16 & n.compareDocumentPosition(i)))
          } : function(n, t) {
            if (t)
              while (t = t.parentNode)
                if (t === n) return !0;
            return !1
          }, kt = h.compareDocumentPosition ? function(n, t) {
            var r;
            return n === t ? (tt = !0, 0) : (r = t.compareDocumentPosition && n.compareDocumentPosition && n.compareDocumentPosition(t)) ? 1 & r || n.parentNode && 11 === n.parentNode.nodeType ? n === i || et(k, n) ? -1 : t === i || et(k, t) ? 1 : 0 : 4 & r ? -1 : 1 : n.compareDocumentPosition ? -1 : 1
          } : function(n, t) {
            var r, u = 0,
              o = n.parentNode,
              s = t.parentNode,
              f = [n],
              e = [t];
            if (n === t) return tt = !0, 0;
            if (!o || !s) return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : 0;
            if (o === s) return yi(n, t);
            for (r = n; r = r.parentNode;) f.unshift(r);
            for (r = t; r = r.parentNode;) e.unshift(r);
            while (f[u] === e[u]) u++;
            return u ? yi(f[u], e[u]) : f[u] === k ? -1 : e[u] === k ? 1 : 0
          }, tt = !1, [0, 0].sort(kt), o.detectDuplicates = tt, s) : s
        }, u.matches = function(n, t) {
          return u(n, null, null, t)
        }, u.matchesSelector = function(n, t) {
          if ((n.ownerDocument || n) !== s && it(n), t = t.replace(or, "='$1']"), !(!o.matchesSelector || c || rt && rt.test(t) || a.test(t))) try {
            var i = ct.call(n, t);
            if (i || o.disconnectedMatch || n.document && 11 !== n.document.nodeType) return i
          } catch (r) {}
          return u(t, s, null, [n]).length > 0
        }, u.contains = function(n, t) {
          return (n.ownerDocument || n) !== s && it(n), et(n, t)
        }, u.attr = function(n, t) {
          var i;
          return (n.ownerDocument || n) !== s && it(n), c || (t = t.toLowerCase()), (i = r.attrHandle[t]) ? i(n) : c || o.attributes ? n.getAttribute(t) : ((i = n.getAttributeNode(t)) || n.getAttribute(t)) && n[t] === !0 ? t : i && i.specified ? i.value : null
        }, u.error = function(n) {
          throw Error("Syntax error, unrecognized expression: " + n);
        }, u.uniqueSort = function(n) {
          var r, u = [],
            t = 1,
            i = 0;
          if (tt = !o.detectDuplicates, n.sort(kt), tt) {
            for (; r = n[t]; t++) r === n[t - 1] && (i = u.push(t));
            while (i--) n.splice(u[i], 1)
          }
          return n
        }, st = u.getText = function(n) {
          var r, i = "",
            u = 0,
            t = n.nodeType;
          if (t) {
            if (1 === t || 9 === t || 11 === t) {
              if ("string" == typeof n.textContent) return n.textContent;
              for (n = n.firstChild; n; n = n.nextSibling) i += st(n)
            } else if (3 === t || 4 === t) return n.nodeValue
          } else
            for (; r = n[u]; u++) i += st(r);
          return i
        }, r = u.selectors = {
          cacheLength: 50,
          createPseudo: l,
          match: vt,
          find: {},
          relative: {
            ">": {
              dir: "parentNode",
              first: !0
            },
            " ": {
              dir: "parentNode"
            },
            "+": {
              dir: "previousSibling",
              first: !0
            },
            "~": {
              dir: "previousSibling"
            }
          },
          preFilter: {
            ATTR: function(n) {
              return n[1] = n[1].replace(p, w), n[3] = (n[4] || n[5] || "").replace(p, w), "~=" === n[2] && (n[3] = " " + n[3] + " "), n.slice(0, 4)
            },
            CHILD: function(n) {
              return n[1] = n[1].toLowerCase(), "nth" === n[1].slice(0, 3) ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * ("even" === n[3] || "odd" === n[3])), n[5] = +(n[7] + n[8] || "odd" === n[3])) : n[3] && u.error(n[0]), n
            },
            PSEUDO: function(n) {
              var i, t = !n[5] && n[2];
              return vt.CHILD.test(n[0]) ? null : (n[4] ? n[2] = n[4] : t && nr.test(t) && (i = yt(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
            }
          },
          filter: {
            TAG: function(n) {
              return "*" === n ? function() {
                return !0
              } : (n = n.replace(p, w).toLowerCase(), function(t) {
                return t.nodeName && t.nodeName.toLowerCase() === n
              })
            },
            CLASS: function(n) {
              var t = si[n + " "];
              return t || (t = RegExp("(^|" + e + ")" + n + "(" + e + "|$)")) && si(n, function(n) {
                  return t.test(n.className || typeof n.getAttribute !== y && n.getAttribute("class") || "")
                })
            },
            ATTR: function(n, t, i) {
              return function(r) {
                var f = u.attr(r, n);
                return null == f ? "!=" === t : t ? (f += "", "=" === t ? f === i : "!=" === t ? f !== i : "^=" === t ? i && 0 === f.indexOf(i) : "*=" === t ? i && f.indexOf(i) > -1 : "$=" === t ? i && f.slice(-i.length) === i : "~=" === t ? (" " + f + " ").indexOf(i) > -1 : "|=" === t ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
              }
            },
            CHILD: function(n, t, i, r, u) {
              var s = "nth" !== n.slice(0, 3),
                o = "last" !== n.slice(-4),
                e = "of-type" === t;
              return 1 === r && 0 === u ? function(n) {
                return !!n.parentNode
              } : function(t, i, h) {
                var a, k, c, l, y, w, b = s !== o ? "nextSibling" : "previousSibling",
                  p = t.parentNode,
                  g = e && t.nodeName.toLowerCase(),
                  d = !h && !e;
                if (p) {
                  if (s) {
                    while (b) {
                      for (c = t; c = c[b];)
                        if (e ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) return !1;
                      w = b = "only" === n && !w && "nextSibling"
                    }
                    return !0
                  }
                  if (w = [o ? p.firstChild : p.lastChild], o && d) {
                    for (k = p[f] || (p[f] = {}), a = k[n] || [], y = a[0] === v && a[1], l = a[0] === v && a[2], c = y && p.childNodes[y]; c = ++y && c && c[b] || (l = y = 0) || w.pop();)
                      if (1 === c.nodeType && ++l && c === t) {
                        k[n] = [v, y, l];
                        break
                      }
                  } else if (d && (a = (t[f] || (t[f] = {}))[n]) && a[0] === v) l = a[1];
                  else
                    while (c = ++y && c && c[b] || (l = y = 0) || w.pop())
                      if ((e ? c.nodeName.toLowerCase() === g : 1 === c.nodeType) && ++l && (d && ((c[f] || (c[f] = {}))[n] = [v, l]), c === t)) break; return l -= u, l === r || 0 == l % r && l / r >= 0
                }
              }
            },
            PSEUDO: function(n, t) {
              var e, i = r.pseudos[n] || r.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
              return i[f] ? i(t) : i.length > 1 ? (e = [n, n, "", t], r.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function(n, r) {
                for (var u, f = i(n, t), e = f.length; e--;) u = dt.call(n, f[e]), n[u] = !(r[u] = f[e])
              }) : function(n) {
                return i(n, 0, e)
              }) : i
            }
          },
          pseudos: {
            not: l(function(n) {
              var i = [],
                r = [],
                t = bt(n.replace(at, "$1"));
              return t[f] ? l(function(n, i, r, u) {
                for (var e, o = t(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(i[f] = e))
              }) : function(n, u, f) {
                return i[0] = n, t(i, null, f, r), !r.pop()
              }
            }),
            has: l(function(n) {
              return function(t) {
                return u(n, t).length > 0
              }
            }),
            contains: l(function(n) {
              return function(t) {
                return (t.textContent || t.innerText || st(t)).indexOf(n) > -1
              }
            }),
            lang: l(function(n) {
              return tr.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(p, w).toLowerCase(),
                function(t) {
                  var i;
                  do
                    if (i = c ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return i = i.toLowerCase(), i === n || 0 === i.indexOf(n + "-");
                  while ((t = t.parentNode) && 1 === t.nodeType);
                  return !1
                }
            }),
            target: function(t) {
              var i = n.location && n.location.hash;
              return i && i.slice(1) === t.id
            },
            root: function(n) {
              return n === h
            },
            focus: function(n) {
              return n === s.activeElement && (!s.hasFocus || s.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
            },
            enabled: function(n) {
              return n.disabled === !1
            },
            disabled: function(n) {
              return n.disabled === !0
            },
            checked: function(n) {
              var t = n.nodeName.toLowerCase();
              return "input" === t && !!n.checked || "option" === t && !!n.selected
            },
            selected: function(n) {
              return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
            },
            empty: function(n) {
              for (n = n.firstChild; n; n = n.nextSibling)
                if (n.nodeName > "@" || 3 === n.nodeType || 4 === n.nodeType) return !1;
              return !0
            },
            parent: function(n) {
              return !r.pseudos.empty(n)
            },
            header: function(n) {
              return fr.test(n.nodeName)
            },
            input: function(n) {
              return ur.test(n.nodeName)
            },
            button: function(n) {
              var t = n.nodeName.toLowerCase();
              return "input" === t && "button" === n.type || "button" === t
            },
            text: function(n) {
              var t;
              return "input" === n.nodeName.toLowerCase() && "text" === n.type && (null == (t = n.getAttribute("type")) || t.toLowerCase() === n.type)
            },
            first: g(function() {
              return [0]
            }),
            last: g(function(n, t) {
              return [t - 1]
            }),
            eq: g(function(n, t, i) {
              return [0 > i ? i + t : i]
            }),
            even: g(function(n, t) {
              for (var i = 0; t > i; i += 2) n.push(i);
              return n
            }),
            odd: g(function(n, t) {
              for (var i = 1; t > i; i += 2) n.push(i);
              return n
            }),
            lt: g(function(n, t, i) {
              for (var r = 0 > i ? i + t : i; --r >= 0;) n.push(r);
              return n
            }),
            gt: g(function(n, t, i) {
              for (var r = 0 > i ? i + t : i; t > ++r;) n.push(r);
              return n
            })
          }
        };
        for (nt in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) r.pseudos[nt] = sr(nt);
        for (nt in {
          submit: !0,
          reset: !0
        }) r.pseudos[nt] = hr(nt);
        bt = u.compile = function(n, t) {
          var r, u = [],
            e = [],
            i = ci[n + " "];
          if (!i) {
            for (t || (t = yt(n)), r = t.length; r--;) i = ei(t[r]), i[f] ? u.push(i) : e.push(i);
            i = ci(n, cr(e, u))
          }
          return i
        }, r.pseudos.nth = r.pseudos.eq, r.filters = pi.prototype = r.pseudos, r.setFilters = new pi, it(), u.attr = i.attr, i.find = u, i.expr = u.selectors, i.expr[":"] = i.expr.pseudos, i.unique = u.uniqueSort, i.text = u.getText, i.isXMLDoc = u.isXML, i.contains = u.contains
      }(n);
    var re = /Until$/,
      ue = /^(?:parents|prev(?:Until|All))/,
      fe = /^.[^:#\[\.,]*$/,
      hr = i.expr.match.needsContext,
      ee = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };
    i.fn.extend({
      find: function(n) {
        var t, r, f, u = this.length;
        if ("string" != typeof n) return f = this, this.pushStack(i(n).filter(function() {
          for (t = 0; u > t; t++)
            if (i.contains(f[t], this)) return !0
        }));
        for (r = [], t = 0; u > t; t++) i.find(n, this[t], r);
        return r = this.pushStack(u > 1 ? i.unique(r) : r), r.selector = (this.selector ? this.selector + " " : "") + n, r
      },
      has: function(n) {
        var t, r = i(n, this),
          u = r.length;
        return this.filter(function() {
          for (t = 0; u > t; t++)
            if (i.contains(this, r[t])) return !0
        })
      },
      not: function(n) {
        return this.pushStack(lr(this, n, !1))
      },
      filter: function(n) {
        return this.pushStack(lr(this, n, !0))
      },
      is: function(n) {
        return !!n && ("string" == typeof n ? hr.test(n) ? i(n, this.context).index(this[0]) >= 0 : i.filter(n, this).length > 0 : this.filter(n).length > 0)
      },
      closest: function(n, t) {
        for (var r, f = 0, o = this.length, u = [], e = hr.test(n) || "string" != typeof n ? i(n, t || this.context) : 0; o > f; f++)
          for (r = this[f]; r && r.ownerDocument && r !== t && 11 !== r.nodeType;) {
            if (e ? e.index(r) > -1 : i.find.matchesSelector(r, n)) {
              u.push(r);
              break
            }
            r = r.parentNode
          }
        return this.pushStack(u.length > 1 ? i.unique(u) : u)
      },
      index: function(n) {
        return n ? "string" == typeof n ? i.inArray(this[0], i(n)) : i.inArray(n.jquery ? n[0] : n, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(n, t) {
        var r = "string" == typeof n ? i(n, t) : i.makeArray(n && n.nodeType ? [n] : n),
          u = i.merge(this.get(), r);
        return this.pushStack(i.unique(u))
      },
      addBack: function(n) {
        return this.add(null == n ? this.prevObject : this.prevObject.filter(n))
      }
    }), i.fn.andSelf = i.fn.addBack, i.each({
      parent: function(n) {
        var t = n.parentNode;
        return t && 11 !== t.nodeType ? t : null
      },
      parents: function(n) {
        return i.dir(n, "parentNode")
      },
      parentsUntil: function(n, t, r) {
        return i.dir(n, "parentNode", r)
      },
      next: function(n) {
        return cr(n, "nextSibling")
      },
      prev: function(n) {
        return cr(n, "previousSibling")
      },
      nextAll: function(n) {
        return i.dir(n, "nextSibling")
      },
      prevAll: function(n) {
        return i.dir(n, "previousSibling")
      },
      nextUntil: function(n, t, r) {
        return i.dir(n, "nextSibling", r)
      },
      prevUntil: function(n, t, r) {
        return i.dir(n, "previousSibling", r)
      },
      siblings: function(n) {
        return i.sibling((n.parentNode || {}).firstChild, n)
      },
      children: function(n) {
        return i.sibling(n.firstChild)
      },
      contents: function(n) {
        return i.nodeName(n, "iframe") ? n.contentDocument || n.contentWindow.document : i.merge([], n.childNodes)
      }
    }, function(n, t) {
      i.fn[n] = function(r, u) {
        var f = i.map(this, t, r);
        return re.test(n) || (u = r), u && "string" == typeof u && (f = i.filter(u, f)), f = this.length > 1 && !ee[n] ? i.unique(f) : f, this.length > 1 && ue.test(n) && (f = f.reverse()), this.pushStack(f)
      }
    }), i.extend({
      filter: function(n, t, r) {
        return r && (n = ":not(" + n + ")"), 1 === t.length ? i.find.matchesSelector(t[0], n) ? [t[0]] : [] : i.find.matches(n, t)
      },
      dir: function(n, r, u) {
        for (var e = [], f = n[r]; f && 9 !== f.nodeType && (u === t || 1 !== f.nodeType || !i(f).is(u));) 1 === f.nodeType && e.push(f), f = f[r];
        return e
      },
      sibling: function(n, t) {
        for (var i = []; n; n = n.nextSibling) 1 === n.nodeType && n !== t && i.push(n);
        return i
      }
    });
    var vr = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      oe = / jQuery\d+="(?:null|\d+)"/g,
      yr = RegExp("<(?:" + vr + ")[\\s/>]", "i"),
      fi = /^\s+/,
      pr = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      wr = /<([\w:]+)/,
      br = /<tbody/i,
      se = /<|&#?\w+;/,
      he = /<(?:script|style|link)/i,
      ei = /^(?:checkbox|radio)$/i,
      ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
      kr = /^$|\/(?:java|ecma)script/i,
      le = /^true\/(.*)/,
      ae = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      e = {
        option: [1, "<select multiple='multiple'>", "<\/select>"],
        legend: [1, "<fieldset>", "<\/fieldset>"],
        area: [1, "<map>", "<\/map>"],
        param: [1, "<object>", "<\/object>"],
        thead: [1, "<table>", "<\/table>"],
        tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
        col: [2, "<table><tbody><\/tbody><colgroup>", "<\/colgroup><\/table>"],
        td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
        _default: i.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "<\/div>"]
      },
      ve = ar(r),
      oi = ve.appendChild(r.createElement("div"));
    e.optgroup = e.option, e.tbody = e.tfoot = e.colgroup = e.caption = e.thead, e.th = e.td, i.fn.extend({
      text: function(n) {
        return i.access(this, function(n) {
          return n === t ? i.text(this) : this.empty().append((this[0] && this[0].ownerDocument || r).createTextNode(n))
        }, null, n, arguments.length)
      },
      wrapAll: function(n) {
        if (i.isFunction(n)) return this.each(function(t) {
          i(this).wrapAll(n.call(this, t))
        });
        if (this[0]) {
          var t = i(n, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
            for (var n = this; n.firstChild && 1 === n.firstChild.nodeType;) n = n.firstChild;
            return n
          }).append(this)
        }
        return this
      },
      wrapInner: function(n) {
        return i.isFunction(n) ? this.each(function(t) {
          i(this).wrapInner(n.call(this, t))
        }) : this.each(function() {
          var t = i(this),
            r = t.contents();
          r.length ? r.wrapAll(n) : t.append(n)
        })
      },
      wrap: function(n) {
        var t = i.isFunction(n);
        return this.each(function(r) {
          i(this).wrapAll(t ? n.call(this, r) : n)
        })
      },
      unwrap: function() {
        return this.parent().each(function() {
          i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
        }).end()
      },
      append: function() {
        return this.domManip(arguments, !0, function(n) {
          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(n)
        })
      },
      prepend: function() {
        return this.domManip(arguments, !0, function(n) {
          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(n, this.firstChild)
        })
      },
      before: function() {
        return this.domManip(arguments, !1, function(n) {
          this.parentNode && this.parentNode.insertBefore(n, this)
        })
      },
      after: function() {
        return this.domManip(arguments, !1, function(n) {
          this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
        })
      },
      remove: function(n, t) {
        for (var r, f = 0; null != (r = this[f]); f++)(!n || i.filter(n, [r]).length > 0) && (t || 1 !== r.nodeType || i.cleanData(u(r)), r.parentNode && (t && i.contains(r.ownerDocument, r) && si(u(r, "script")), r.parentNode.removeChild(r)));
        return this
      },
      empty: function() {
        for (var n, t = 0; null != (n = this[t]); t++) {
          for (1 === n.nodeType && i.cleanData(u(n, !1)); n.firstChild;) n.removeChild(n.firstChild);
          n.options && i.nodeName(n, "select") && (n.options.length = 0)
        }
        return this
      },
      clone: function(n, t) {
        return n = null == n ? !1 : n, t = null == t ? n : t, this.map(function() {
          return i.clone(this, n, t)
        })
      },
      html: function(n) {
        return i.access(this, function(n) {
          var r = this[0] || {},
            f = 0,
            o = this.length;
          if (n === t) return 1 === r.nodeType ? r.innerHTML.replace(oe, "") : t;
          if (!("string" != typeof n || he.test(n) || !i.support.htmlSerialize && yr.test(n) || !i.support.leadingWhitespace && fi.test(n) || e[(wr.exec(n) || ["", ""])[1].toLowerCase()])) {
            n = n.replace(pr, "<$1><\/$2>");
            try {
              for (; o > f; f++) r = this[f] || {}, 1 === r.nodeType && (i.cleanData(u(r, !1)), r.innerHTML = n);
              r = 0
            } catch (s) {}
          }
          r && this.empty().append(n)
        }, null, n, arguments.length)
      },
      replaceWith: function(n) {
        var t = i.isFunction(n);
        return t || "string" == typeof n || (n = i(n).not(this).detach()), this.domManip([n], !0, function(n) {
          var r = this.nextSibling,
            t = this.parentNode;
          t && (i(this).remove(), t.insertBefore(n, r))
        })
      },
      detach: function(n) {
        return this.remove(n, !0)
      },
      domManip: function(n, r, f) {
        n = bi.apply([], n);
        var c, e, l, s, y, h, o = 0,
          a = this.length,
          w = this,
          b = a - 1,
          v = n[0],
          p = i.isFunction(v);
        if (p || !(1 >= a || "string" != typeof v || i.support.checkClone) && ce.test(v)) return this.each(function(i) {
          var u = w.eq(i);
          p && (n[0] = v.call(this, i, r ? u.html() : t)), u.domManip(n, r, f)
        });
        if (a && (h = i.buildFragment(n, this[0].ownerDocument, !1, this), c = h.firstChild, 1 === h.childNodes.length && (h = c), c)) {
          for (r = r && i.nodeName(c, "tr"), s = i.map(u(h, "script"), dr), l = s.length; a > o; o++) e = h, o !== b && (e = i.clone(e, !0, !0), l && i.merge(s, u(e, "script"))), f.call(r && i.nodeName(this[o], "table") ? ye(this[o], "tbody") : this[o], e, o);
          if (l)
            for (y = s[s.length - 1].ownerDocument, i.map(s, gr), o = 0; l > o; o++) e = s[o], kr.test(e.type || "") && !i._data(e, "globalEval") && i.contains(y, e) && (e.src ? i.ajax({
              url: e.src,
              type: "GET",
              dataType: "script",
              async: !1,
              global: !1,
              throws: !0
            }) : i.globalEval((e.text || e.textContent || e.innerHTML || "").replace(ae, "")));
          h = c = null
        }
        return this
      }
    }), i.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(n, t) {
      i.fn[n] = function(n) {
        for (var u, r = 0, f = [], e = i(n), o = e.length - 1; o >= r; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), bt.apply(f, u.get());
        return this.pushStack(f)
      }
    }), i.extend({
      clone: function(n, t, r) {
        var f, h, o, e, s, c = i.contains(n.ownerDocument, n);
        if (i.support.html5Clone || i.isXMLDoc(n) || !yr.test("<" + n.nodeName + ">") ? o = n.cloneNode(!0) : (oi.innerHTML = n.outerHTML, oi.removeChild(o = oi.firstChild)), !(i.support.noCloneEvent && i.support.noCloneChecked || 1 !== n.nodeType && 11 !== n.nodeType || i.isXMLDoc(n)))
          for (f = u(o), s = u(n), e = 0; null != (h = s[e]); ++e) f[e] && pe(h, f[e]);
        if (t)
          if (r)
            for (s = s || u(n), f = f || u(o), e = 0; null != (h = s[e]); e++) nu(h, f[e]);
          else nu(n, o);
        return f = u(o, "script"), f.length > 0 && si(f, !c && u(n, "script")), f = s = h = null, o
      },
      buildFragment: function(n, t, r, f) {
        for (var h, o, w, s, y, p, l, b = n.length, a = ar(t), c = [], v = 0; b > v; v++)
          if (o = n[v], o || 0 === o)
            if ("object" === i.type(o)) i.merge(c, o.nodeType ? [o] : o);
            else if (se.test(o)) {
              for (s = s || a.appendChild(t.createElement("div")), y = (wr.exec(o) || ["", ""])[1].toLowerCase(), l = e[y] || e._default, s.innerHTML = l[1] + o.replace(pr, "<$1><\/$2>") + l[2], h = l[0]; h--;) s = s.lastChild;
              if (!i.support.leadingWhitespace && fi.test(o) && c.push(t.createTextNode(fi.exec(o)[0])), !i.support.tbody)
                for (o = "table" !== y || br.test(o) ? "<table>" !== l[1] || br.test(o) ? 0 : s : s.firstChild, h = o && o.childNodes.length; h--;) i.nodeName(p = o.childNodes[h], "tbody") && !p.childNodes.length && o.removeChild(p);
              for (i.merge(c, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
              s = a.lastChild
            } else c.push(t.createTextNode(o));
        for (s && a.removeChild(s), i.support.appendChecked || i.grep(u(c, "input"), we), v = 0; o = c[v++];)
          if ((!f || -1 === i.inArray(o, f)) && (w = i.contains(o.ownerDocument, o), s = u(a.appendChild(o), "script"), w && si(s), r))
            for (h = 0; o = s[h++];) kr.test(o.type || "") && r.push(o);
        return s = null, a
      },
      cleanData: function(n, t) {
        for (var r, f, u, e, c = 0, s = i.expando, h = i.cache, l = i.support.deleteExpando, a = i.event.special; null != (r = n[c]); c++)
          if ((t || i.acceptData(r)) && (u = r[s], e = u && h[u])) {
            if (e.events)
              for (f in e.events) a[f] ? i.event.remove(r, f) : i.removeEvent(r, f, e.handle);
            h[u] && (delete h[u], l ? delete r[s] : typeof r.removeAttribute !== o ? r.removeAttribute(s) : r[s] = null, b.push(u))
          }
      }
    });
    var rt, v, y, hi = /alpha\([^)]*\)/i,
      be = /opacity\s*=\s*([^)]*)/,
      ke = /^(top|right|bottom|left)$/,
      de = /^(none|table(?!-c[ea]).+)/,
      tu = /^margin/,
      ge = RegExp("^(" + st + ")(.*)$", "i"),
      ct = RegExp("^(" + st + ")(?!px)[a-z%]+$", "i"),
      no = RegExp("^([+-])=(" + st + ")", "i"),
      iu = {
        BODY: "block"
      },
      to = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      ru = {
        letterSpacing: 0,
        fontWeight: 400
      },
      p = ["Top", "Right", "Bottom", "Left"],
      uu = ["Webkit", "O", "Moz", "ms"];
    i.fn.extend({
      css: function(n, r) {
        return i.access(this, function(n, r, u) {
          var e, o, s = {},
            f = 0;
          if (i.isArray(r)) {
            for (o = v(n), e = r.length; e > f; f++) s[r[f]] = i.css(n, r[f], !1, o);
            return s
          }
          return u !== t ? i.style(n, r, u) : i.css(n, r)
        }, n, r, arguments.length > 1)
      },
      show: function() {
        return eu(this, !0)
      },
      hide: function() {
        return eu(this)
      },
      toggle: function(n) {
        var t = "boolean" == typeof n;
        return this.each(function() {
          (t ? n : ut(this)) ? i(this).show(): i(this).hide()
        })
      }
    }), i.extend({
      cssHooks: {
        opacity: {
          get: function(n, t) {
            if (t) {
              var i = y(n, "opacity");
              return "" === i ? "1" : i
            }
          }
        }
      },
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {
        float: i.support.cssFloat ? "cssFloat" : "styleFloat"
      },
      style: function(n, r, u, f) {
        if (n && 3 !== n.nodeType && 8 !== n.nodeType && n.style) {
          var o, s, e, h = i.camelCase(r),
            c = n.style;
          if (r = i.cssProps[h] || (i.cssProps[h] = fu(c, h)), e = i.cssHooks[r] || i.cssHooks[h], u === t) return e && "get" in e && (o = e.get(n, !1, f)) !== t ? o : c[r];
          if (s = typeof u, "string" === s && (o = no.exec(u)) && (u = (o[1] + 1) * o[2] + parseFloat(i.css(n, r)), s = "number"), !(null == u || "number" === s && isNaN(u) || ("number" !== s || i.cssNumber[h] || (u += "px"), i.support.clearCloneStyle || "" !== u || 0 !== r.indexOf("background") || (c[r] = "inherit"), e && "set" in e && (u = e.set(n, u, f)) === t))) try {
            c[r] = u
          } catch (l) {}
        }
      },
      css: function(n, r, u, f) {
        var h, e, o, s = i.camelCase(r);
        return r = i.cssProps[s] || (i.cssProps[s] = fu(n.style, s)), o = i.cssHooks[r] || i.cssHooks[s], o && "get" in o && (e = o.get(n, !0, u)), e === t && (e = y(n, r, f)), "normal" === e && r in ru && (e = ru[r]), "" === u || u ? (h = parseFloat(e), u === !0 || i.isNumeric(h) ? h || 0 : e) : e
      },
      swap: function(n, t, i, r) {
        var f, u, e = {};
        for (u in t) e[u] = n.style[u], n.style[u] = t[u];
        f = i.apply(n, r || []);
        for (u in t) n.style[u] = e[u];
        return f
      }
    }), n.getComputedStyle ? (v = function(t) {
      return n.getComputedStyle(t, null)
    }, y = function(n, r, u) {
      var s, h, c, o = u || v(n),
        e = o ? o.getPropertyValue(r) || o[r] : t,
        f = n.style;
      return o && ("" !== e || i.contains(n.ownerDocument, n) || (e = i.style(n, r)), ct.test(e) && tu.test(r) && (s = f.width, h = f.minWidth, c = f.maxWidth, f.minWidth = f.maxWidth = f.width = e, e = o.width, f.width = s, f.minWidth = h, f.maxWidth = c)), e
    }) : r.documentElement.currentStyle && (v = function(n) {
      return n.currentStyle
    }, y = function(n, i, r) {
      var s, e, o, h = r || v(n),
        u = h ? h[i] : t,
        f = n.style;
      return null == u && f && f[i] && (u = f[i]), ct.test(u) && !ke.test(i) && (s = f.left, e = n.runtimeStyle, o = e && e.left, o && (e.left = n.currentStyle.left), f.left = "fontSize" === i ? "1em" : u, u = f.pixelLeft + "px", f.left = s, o && (e.left = o)), "" === u ? "auto" : u
    }), i.each(["height", "width"], function(n, r) {
      i.cssHooks[r] = {
        get: function(n, u, f) {
          return u ? 0 === n.offsetWidth && de.test(i.css(n, "display")) ? i.swap(n, to, function() {
            return hu(n, r, f)
          }) : hu(n, r, f) : t
        },
        set: function(n, t, u) {
          var f = u && v(n);
          return ou(n, t, u ? su(n, r, u, i.support.boxSizing && "border-box" === i.css(n, "boxSizing", !1, f), f) : 0)
        }
      }
    }), i.support.opacity || (i.cssHooks.opacity = {
      get: function(n, t) {
        return be.test((t && n.currentStyle ? n.currentStyle.filter : n.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
      },
      set: function(n, t) {
        var r = n.style,
          u = n.currentStyle,
          e = i.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
          f = u && u.filter || r.filter || "";
        r.zoom = 1, (t >= 1 || "" === t) && "" === i.trim(f.replace(hi, "")) && r.removeAttribute && (r.removeAttribute("filter"), "" === t || u && !u.filter) || (r.filter = hi.test(f) ? f.replace(hi, e) : f + " " + e)
      }
    }), i(function() {
      i.support.reliableMarginRight || (i.cssHooks.marginRight = {
        get: function(n, r) {
          return r ? i.swap(n, {
            display: "inline-block"
          }, y, [n, "marginRight"]) : t
        }
      }), !i.support.pixelPosition && i.fn.position && i.each(["top", "left"], function(n, r) {
        i.cssHooks[r] = {
          get: function(n, u) {
            return u ? (u = y(n, r), ct.test(u) ? i(n).position()[r] + "px" : u) : t
          }
        }
      })
    }), i.expr && i.expr.filters && (i.expr.filters.hidden = function(n) {
      return 0 >= n.offsetWidth && 0 >= n.offsetHeight || !i.support.reliableHiddenOffsets && "none" === (n.style && n.style.display || i.css(n, "display"))
    }, i.expr.filters.visible = function(n) {
      return !i.expr.filters.hidden(n)
    }), i.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(n, t) {
      i.cssHooks[n + t] = {
        expand: function(i) {
          for (var r = 0, f = {}, u = "string" == typeof i ? i.split(" ") : [i]; 4 > r; r++) f[n + p[r] + t] = u[r] || u[r - 2] || u[0];
          return f
        }
      }, tu.test(n) || (i.cssHooks[n + t].set = ou)
    });
    var io = /%20/g,
      ro = /\[\]$/,
      au = /\r?\n/g,
      uo = /^(?:submit|button|image|reset|file)$/i,
      fo = /^(?:input|select|textarea|keygen)/i;
    i.fn.extend({
      serialize: function() {
        return i.param(this.serializeArray())
      },
      serializeArray: function() {
        return this.map(function() {
          var n = i.prop(this, "elements");
          return n ? i.makeArray(n) : this
        }).filter(function() {
          var n = this.type;
          return this.name && !i(this).is(":disabled") && fo.test(this.nodeName) && !uo.test(n) && (this.checked || !ei.test(n))
        }).map(function(n, t) {
          var r = i(this).val();
          return null == r ? null : i.isArray(r) ? i.map(r, function(n) {
            return {
              name: t.name,
              value: n.replace(au, "\r\n")
            }
          }) : {
            name: t.name,
            value: r.replace(au, "\r\n")
          }
        }).get()
      }
    }), i.param = function(n, r) {
      var u, f = [],
        e = function(n, t) {
          t = i.isFunction(t) ? t() : null == t ? "" : t, f[f.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
        };
      if (r === t && (r = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() {
        e(this.name, this.value)
      });
      else
        for (u in n) ci(u, n[u], r, e);
      return f.join("&").replace(io, "+")
    }, i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
      i.fn[t] = function(n, i) {
        return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
      }
    }), i.fn.hover = function(n, t) {
      return this.mouseenter(n).mouseleave(t || n)
    };
    var w, c, li = i.now(),
      ai = /\?/,
      eo = /#.*$/,
      vu = /([?&])_=[^&]*/,
      oo = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      so = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      ho = /^(?:GET|HEAD)$/,
      co = /^\/\//,
      yu = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
      pu = i.fn.load,
      wu = {},
      vi = {},
      bu = "*/".concat("*");
    try {
      c = ff.href
    } catch (ns) {
      c = r.createElement("a"), c.href = "", c = c.href
    }
    w = yu.exec(c.toLowerCase()) || [], i.fn.load = function(n, r, u) {
      if ("string" != typeof n && pu) return pu.apply(this, arguments);
      var f, s, h, e = this,
        o = n.indexOf(" ");
      return o >= 0 && (f = n.slice(o, n.length), n = n.slice(0, o)), i.isFunction(r) ? (u = r, r = t) : r && "object" == typeof r && (h = "POST"), e.length > 0 && i.ajax({
        url: n,
        type: h,
        dataType: "html",
        data: r
      }).done(function(n) {
        s = arguments, e.html(f ? i("<div>").append(i.parseHTML(n)).find(f) : n)
      }).complete(u && function(n, t) {
        e.each(u, s || [n.responseText, t, n])
      }), this
    }, i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
      i.fn[t] = function(n) {
        return this.on(t, n)
      }
    }), i.each(["get", "post"], function(n, r) {
      i[r] = function(n, u, f, e) {
        return i.isFunction(u) && (e = e || f, f = u, u = t), i.ajax({
          url: n,
          type: r,
          dataType: e,
          data: u,
          success: f
        })
      }
    }), i.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: c,
        type: "GET",
        isLocal: so.test(w[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": bu,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /xml/,
          html: /html/,
          json: /json/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText"
        },
        converters: {
          "* text": n.String,
          "text html": !0,
          "text json": i.parseJSON,
          "text xml": i.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function(n, t) {
        return t ? yi(yi(n, i.ajaxSettings), t) : yi(i.ajaxSettings, n)
      },
      ajaxPrefilter: ku(wu),
      ajaxTransport: ku(vi),
      ajax: function(n, r) {
        function k(n, r, s, c) {
          var l, k, w, rt, p, a = r;
          2 !== o && (o = 2, g && clearTimeout(g), y = t, d = c || "", f.readyState = n > 0 ? 4 : 0, s && (rt = lo(u, f, s)), n >= 200 && 300 > n || 304 === n ? (u.ifModified && (p = f.getResponseHeader("Last-Modified"), p && (i.lastModified[e] = p), p = f.getResponseHeader("etag"), p && (i.etag[e] = p)), 204 === n ? (l = !0, a = "nocontent") : 304 === n ? (l = !0, a = "notmodified") : (l = ao(u, rt), a = l.state, k = l.data, w = l.error, l = !w)) : (w = a, (n || !a) && (a = "error", 0 > n && (n = 0))), f.status = n, f.statusText = (r || a) + "", l ? tt.resolveWith(h, [k, a, f]) : tt.rejectWith(h, [f, a, w]), f.statusCode(b), b = t, v && nt.trigger(l ? "ajaxSuccess" : "ajaxError", [f, u, l ? k : w]), it.fireWith(h, [f, a]), v && (nt.trigger("ajaxComplete", [f, u]), --i.active || i.event.trigger("ajaxStop")))
        }
        "object" == typeof n && (r = n, n = t), r = r || {};
        var l, a, e, d, g, v, y, p, u = i.ajaxSetup({}, r),
          h = u.context || u,
          nt = u.context && (h.nodeType || h.jquery) ? i(h) : i.event,
          tt = i.Deferred(),
          it = i.Callbacks("once memory"),
          b = u.statusCode || {},
          rt = {},
          ut = {},
          o = 0,
          ft = "canceled",
          f = {
            readyState: 0,
            getResponseHeader: function(n) {
              var t;
              if (2 === o) {
                if (!p)
                  for (p = {}; t = oo.exec(d);) p[t[1].toLowerCase()] = t[2];
                t = p[n.toLowerCase()]
              }
              return null == t ? null : t
            },
            getAllResponseHeaders: function() {
              return 2 === o ? d : null
            },
            setRequestHeader: function(n, t) {
              var i = n.toLowerCase();
              return o || (n = ut[i] = ut[i] || n, rt[n] = t), this
            },
            overrideMimeType: function(n) {
              return o || (u.mimeType = n), this
            },
            statusCode: function(n) {
              var t;
              if (n)
                if (2 > o)
                  for (t in n) b[t] = [b[t], n[t]];
                else f.always(n[f.status]);
              return this
            },
            abort: function(n) {
              var t = n || ft;
              return y && y.abort(t), k(0, t), this
            }
          };
        if (tt.promise(f).complete = it.add, f.success = f.done, f.error = f.fail, u.url = ((n || u.url || c) + "").replace(eo, "").replace(co, w[1] + "//"), u.type = r.method || r.type || u.method || u.type, u.dataTypes = i.trim(u.dataType || "*").toLowerCase().match(s) || [""], null == u.crossDomain && (l = yu.exec(u.url.toLowerCase()), u.crossDomain = !(!l || l[1] === w[1] && l[2] === w[2] && (l[3] || ("http:" === l[1] ? 80 : 443)) == (w[3] || ("http:" === w[1] ? 80 : 443)))), u.data && u.processData && "string" != typeof u.data && (u.data = i.param(u.data, u.traditional)), du(wu, u, r, f), 2 === o) return f;
        v = u.global, v && 0 == i.active++ && i.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !ho.test(u.type), e = u.url, u.hasContent || (u.data && (e = u.url += (ai.test(e) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = vu.test(e) ? e.replace(vu, "$1_=" + li++) : e + (ai.test(e) ? "&" : "?") + "_=" + li++)), u.ifModified && (i.lastModified[e] && f.setRequestHeader("If-Modified-Since", i.lastModified[e]), i.etag[e] && f.setRequestHeader("If-None-Match", i.etag[e])), (u.data && u.hasContent && u.contentType !== !1 || r.contentType) && f.setRequestHeader("Content-Type", u.contentType), f.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + bu + "; q=0.01" : "") : u.accepts["*"]);
        for (a in u.headers) f.setRequestHeader(a, u.headers[a]);
        if (u.beforeSend && (u.beforeSend.call(h, f, u) === !1 || 2 === o)) return f.abort();
        ft = "abort";
        for (a in {
          success: 1,
          error: 1,
          complete: 1
        }) f[a](u[a]);
        if (y = du(vi, u, r, f)) {
          f.readyState = 1, v && nt.trigger("ajaxSend", [f, u]), u.async && u.timeout > 0 && (g = setTimeout(function() {
            f.abort("timeout")
          }, u.timeout));
          try {
            o = 1, y.send(rt, k)
          } catch (et) {
            if (!(2 > o)) throw et;
            k(-1, et)
          }
        } else k(-1, "No Transport");
        return f
      },
      getScript: function(n, r) {
        return i.get(n, t, r, "script")
      },
      getJSON: function(n, t, r) {
        return i.get(n, t, r, "json")
      }
    }), i.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /(?:java|ecma)script/
      },
      converters: {
        "text script": function(n) {
          return i.globalEval(n), n
        }
      }
    }), i.ajaxPrefilter("script", function(n) {
      n.cache === t && (n.cache = !1), n.crossDomain && (n.type = "GET", n.global = !1)
    }), i.ajaxTransport("script", function(n) {
      if (n.crossDomain) {
        var u, f = r.head || i("head")[0] || r.documentElement;
        return {
          send: function(t, i) {
            u = r.createElement("script"), u.async = !0, n.scriptCharset && (u.charset = n.scriptCharset), u.src = n.url, u.onload = u.onreadystatechange = function(n, t) {
              (t || !u.readyState || /loaded|complete/.test(u.readyState)) && (u.onload = u.onreadystatechange = null, u.parentNode && u.parentNode.removeChild(u), u = null, t || i(200, "success"))
            }, f.insertBefore(u, f.firstChild)
          },
          abort: function() {
            u && u.onload(t, !0)
          }
        }
      }
    }), pi = [], lt = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var n = pi.pop() || i.expando + "_" + li++;
        return this[n] = !0, n
      }
    }), i.ajaxPrefilter("json jsonp", function(r, u, f) {
      var e, s, o, h = r.jsonp !== !1 && (lt.test(r.url) ? "url" : "string" == typeof r.data && !(r.contentType || "").indexOf("application/x-www-form-urlencoded") && lt.test(r.data) && "data");
      return h || "jsonp" === r.dataTypes[0] ? (e = r.jsonpCallback = i.isFunction(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback, h ? r[h] = r[h].replace(lt, "$1" + e) : r.jsonp !== !1 && (r.url += (ai.test(r.url) ? "&" : "?") + r.jsonp + "=" + e), r.converters["script json"] = function() {
        return o || i.error(e + " was not called"), o[0]
      }, r.dataTypes[0] = "json", s = n[e], n[e] = function() {
        o = arguments
      }, f.always(function() {
        n[e] = s, r[e] && (r.jsonpCallback = u.jsonpCallback, pi.push(e)), o && i.isFunction(s) && s(o[0]), o = s = t
      }), "script") : t
    }), gu = 0, at = n.ActiveXObject && function() {
      var n;
      for (n in g) g[n](t, !0)
    }, i.ajaxSettings.xhr = n.ActiveXObject ? function() {
      return !this.isLocal && nf() || vo()
    } : nf, nt = i.ajaxSettings.xhr(), i.support.cors = !!nt && "withCredentials" in nt, nt = i.support.ajax = !!nt, nt && i.ajaxTransport(function(r) {
      if (!r.crossDomain || i.support.cors) {
        var u;
        return {
          send: function(f, e) {
            var h, s, o = r.xhr();
            if (r.username ? o.open(r.type, r.url, r.async, r.username, r.password) : o.open(r.type, r.url, r.async), r.xhrFields)
              for (s in r.xhrFields) o[s] = r.xhrFields[s];
            r.mimeType && o.overrideMimeType && o.overrideMimeType(r.mimeType), r.crossDomain || f["X-Requested-With"] || (f["X-Requested-With"] = "XMLHttpRequest");
            try {
              for (s in f) o.setRequestHeader(s, f[s])
            } catch (c) {}
            o.send(r.hasContent && r.data || null), u = function(n, f) {
              var s, a, l, c;
              try {
                if (u && (f || 4 === o.readyState))
                  if (u = t, h && (o.onreadystatechange = i.noop, at && delete g[h]), f) 4 !== o.readyState && o.abort();
                  else {
                    c = {}, s = o.status, a = o.getAllResponseHeaders(), "string" == typeof o.responseText && (c.text = o.responseText);
                    try {
                      l = o.statusText
                    } catch (v) {
                      l = ""
                    }
                    s || !r.isLocal || r.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                  }
              } catch (y) {
                f || e(-1, y)
              }
              c && e(s, l, c, a)
            }, r.async ? 4 === o.readyState ? setTimeout(u) : (h = ++gu, at && (g || (g = {}, i(n).unload(at)), g[h] = u), o.onreadystatechange = u) : u()
          },
          abort: function() {
            u && u(t, !0)
          }
        }
      }
    });
    var tt, vt, yo = /^(?:toggle|show|hide)$/,
      po = RegExp("^(?:([+-])=|)(" + st + ")([a-z%]*)$", "i"),
      wo = /queueHooks$/,
      yt = [go],
      ft = {
        "*": [function(n, t) {
          var o, s, r = this.createTween(n, t),
            e = po.exec(t),
            h = r.cur(),
            u = +h || 0,
            f = 1,
            c = 20;
          if (e) {
            if (o = +e[2], s = e[3] || (i.cssNumber[n] ? "" : "px"), "px" !== s && u) {
              u = i.css(r.elem, n, !0) || o || 1;
              do f = f || ".5", u /= f, i.style(r.elem, n, u + s); while (f !== (f = r.cur() / h) && 1 !== f && --c)
            }
            r.unit = s, r.start = u, r.end = e[1] ? u + (e[1] + 1) * o : o
          }
          return r
        }]
      };
    i.Animation = i.extend(rf, {
      tweener: function(n, t) {
        i.isFunction(n) ? (t = n, n = ["*"]) : n = n.split(" ");
        for (var r, u = 0, f = n.length; f > u; u++) r = n[u], ft[r] = ft[r] || [], ft[r].unshift(t)
      },
      prefilter: function(n, t) {
        t ? yt.unshift(n) : yt.push(n)
      }
    }), i.Tween = f, f.prototype = {
      constructor: f,
      init: function(n, t, r, u, f, e) {
        this.elem = n, this.prop = r, this.easing = f || "swing", this.options = t, this.start = this.now = this.cur(), this.end = u, this.unit = e || (i.cssNumber[r] ? "" : "px")
      },
      cur: function() {
        var n = f.propHooks[this.prop];
        return n && n.get ? n.get(this) : f.propHooks._default.get(this)
      },
      run: function(n) {
        var r, t = f.propHooks[this.prop];
        return this.pos = r = this.options.duration ? i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : n, this.now = (this.end - this.start) * r + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), t && t.set ? t.set(this) : f.propHooks._default.set(this), this
      }
    }, f.prototype.init.prototype = f.prototype, f.propHooks = {
      _default: {
        get: function(n) {
          var t;
          return null == n.elem[n.prop] || n.elem.style && null != n.elem.style[n.prop] ? (t = i.css(n.elem, n.prop, ""), t && "auto" !== t ? t : 0) : n.elem[n.prop]
        },
        set: function(n) {
          i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.style && (null != n.elem.style[i.cssProps[n.prop]] || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
        }
      }
    }, f.propHooks.scrollTop = f.propHooks.scrollLeft = {
      set: function(n) {
        n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
      }
    }, i.each(["toggle", "show", "hide"], function(n, t) {
      var r = i.fn[t];
      i.fn[t] = function(n, i, u) {
        return null == n || "boolean" == typeof n ? r.apply(this, arguments) : this.animate(pt(t, !0), n, i, u)
      }
    }), i.fn.extend({
      fadeTo: function(n, t, i, r) {
        return this.filter(ut).css("opacity", 0).show().end().animate({
          opacity: t
        }, n, i, r)
      },
      animate: function(n, t, r, u) {
        var o = i.isEmptyObject(n),
          e = i.speed(t, r, u),
          f = function() {
            var t = rf(this, i.extend({}, n), e);
            f.finish = function() {
              t.stop(!0)
            }, (o || i._data(this, "finish")) && t.stop(!0)
          };
        return f.finish = f, o || e.queue === !1 ? this.each(f) : this.queue(e.queue, f)
      },
      stop: function(n, r, u) {
        var f = function(n) {
          var t = n.stop;
          delete n.stop, t(u)
        };
        return "string" != typeof n && (u = r, r = n, n = t), r && n !== !1 && this.queue(n || "fx", []), this.each(function() {
          var o = !0,
            t = null != n && n + "queueHooks",
            e = i.timers,
            r = i._data(this);
          if (t) r[t] && r[t].stop && f(r[t]);
          else
            for (t in r) r[t] && r[t].stop && wo.test(t) && f(r[t]);
          for (t = e.length; t--;) e[t].elem !== this || null != n && e[t].queue !== n || (e[t].anim.stop(u), o = !1, e.splice(t, 1));
          (o || !u) && i.dequeue(this, n)
        })
      },
      finish: function(n) {
        return n !== !1 && (n = n || "fx"), this.each(function() {
          var t, f = i._data(this),
            r = f[n + "queue"],
            e = f[n + "queueHooks"],
            u = i.timers,
            o = r ? r.length : 0;
          for (f.finish = !0, i.queue(this, n, []), e && e.cur && e.cur.finish && e.cur.finish.call(this), t = u.length; t--;) u[t].elem === this && u[t].queue === n && (u[t].anim.stop(!0), u.splice(t, 1));
          for (t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
          delete f.finish
        })
      }
    }), i.each({
      slideDown: pt("show"),
      slideUp: pt("hide"),
      slideToggle: pt("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function(n, t) {
      i.fn[n] = function(n, i, r) {
        return this.animate(t, n, i, r)
      }
    }), i.speed = function(n, t, r) {
      var u = n && "object" == typeof n ? i.extend({}, n) : {
        complete: r || !r && t || i.isFunction(n) && n,
        duration: n,
        easing: r && t || t && !i.isFunction(t) && t
      };
      return u.duration = i.fx.off ? 0 : "number" == typeof u.duration ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, (null == u.queue || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function() {
        i.isFunction(u.old) && u.old.call(this), u.queue && i.dequeue(this, u.queue)
      }, u
    }, i.easing = {
      linear: function(n) {
        return n
      },
      swing: function(n) {
        return .5 - Math.cos(n * Math.PI) / 2
      }
    }, i.timers = [], i.fx = f.prototype.init, i.fx.tick = function() {
      var u, n = i.timers,
        r = 0;
      for (tt = i.now(); n.length > r; r++) u = n[r], u() || n[r] !== u || n.splice(r--, 1);
      n.length || i.fx.stop(), tt = t
    }, i.fx.timer = function(n) {
      n() && i.timers.push(n) && i.fx.start()
    }, i.fx.interval = 13, i.fx.start = function() {
      vt || (vt = setInterval(i.fx.tick, i.fx.interval))
    }, i.fx.stop = function() {
      clearInterval(vt), vt = null
    }, i.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, i.fx.step = {}, i.expr && i.expr.filters && (i.expr.filters.animated = function(n) {
      return i.grep(i.timers, function(t) {
        return n === t.elem
      }).length
    }), i.fn.offset = function(n) {
      if (arguments.length) return n === t ? this : this.each(function(t) {
        i.offset.setOffset(this, n, t)
      });
      var r, e, f = {
          top: 0,
          left: 0
        },
        u = this[0],
        s = u && u.ownerDocument;
      if (s) return r = s.documentElement, i.contains(r, u) ? (typeof u.getBoundingClientRect !== o && (f = u.getBoundingClientRect()), e = uf(s), {
        top: f.top + (e.pageYOffset || r.scrollTop) - (r.clientTop || 0),
        left: f.left + (e.pageXOffset || r.scrollLeft) - (r.clientLeft || 0)
      }) : f
    }, i.offset = {
      setOffset: function(n, t, r) {
        var f = i.css(n, "position");
        "static" === f && (n.style.position = "relative");
        var e = i(n),
          o = e.offset(),
          l = i.css(n, "top"),
          a = i.css(n, "left"),
          v = ("absolute" === f || "fixed" === f) && i.inArray("auto", [l, a]) > -1,
          u = {},
          s = {},
          h, c;
        v ? (s = e.position(), h = s.top, c = s.left) : (h = parseFloat(l) || 0, c = parseFloat(a) || 0), i.isFunction(t) && (t = t.call(n, r, o)), null != t.top && (u.top = t.top - o.top + h), null != t.left && (u.left = t.left - o.left + c), "using" in t ? t.using.call(n, u) : e.css(u)
      }
    }, i.fn.extend({
      position: function() {
        if (this[0]) {
          var n, r, t = {
              top: 0,
              left: 0
            },
            u = this[0];
          return "fixed" === i.css(u, "position") ? r = u.getBoundingClientRect() : (n = this.offsetParent(), r = this.offset(), i.nodeName(n[0], "html") || (t = n.offset()), t.top += i.css(n[0], "borderTopWidth", !0), t.left += i.css(n[0], "borderLeftWidth", !0)), {
            top: r.top - t.top - i.css(u, "marginTop", !0),
            left: r.left - t.left - i.css(u, "marginLeft", !0)
          }
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (var n = this.offsetParent || r.documentElement; n && !i.nodeName(n, "html") && "static" === i.css(n, "position");) n = n.offsetParent;
          return n || r.documentElement
        })
      }
    }), i.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function(n, r) {
      var u = /Y/.test(r);
      i.fn[n] = function(f) {
        return i.access(this, function(n, f, e) {
          var o = uf(n);
          return e === t ? o ? r in o ? o[r] : o.document.documentElement[f] : n[f] : (o ? o.scrollTo(u ? i(o).scrollLeft() : e, u ? e : i(o).scrollTop()) : n[f] = e, t)
        }, n, f, arguments.length, null)
      }
    }), i.each({
      Height: "height",
      Width: "width"
    }, function(n, r) {
      i.each({
        padding: "inner" + n,
        content: r,
        "": "outer" + n
      }, function(u, f) {
        i.fn[f] = function(f, e) {
          var o = arguments.length && (u || "boolean" != typeof f),
            s = u || (f === !0 || e === !0 ? "margin" : "border");
          return i.access(this, function(r, u, f) {
            var e;
            return i.isWindow(r) ? r.document.documentElement["client" + n] : 9 === r.nodeType ? (e = r.documentElement, Math.max(r.body["scroll" + n], e["scroll" + n], r.body["offset" + n], e["offset" + n], e["client" + n])) : f === t ? i.css(r, u, s) : i.style(r, u, f, s)
          }, r, o ? f : t, o, null)
        }
      })
    }), n.jQuery = n.$ = i, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
      return i
    })
  }(window), window.Modernizr = function(n, t, i) {
    function a(n) {
      c.cssText = n
    }

    function yt(n, t) {
      return a(y.join(n + ";") + (t || ""))
    }

    function h(n, t) {
      return typeof n === t
    }

    function v(n, t) {
      return !!~("" + n).indexOf(t)
    }

    function lt(n, t) {
      var u, r;
      for (u in n)
        if (r = n[u], !v(r, "-") && c[r] !== i) return t == "pfx" ? r : !0;
      return !1
    }

    function pt(n, t, r) {
      var f, u;
      for (f in n)
        if (u = t[n[f]], u !== i) return r === !1 ? n[f] : h(u, "function") ? u.bind(r || t) : u;
      return !1
    }

    function f(n, t, i) {
      var r = n.charAt(0).toUpperCase() + n.slice(1),
        u = (n + " " + ot.join(r + " ") + r).split(" ");
      return h(t, "string") || h(t, "undefined") ? lt(u, t) : (u = (n + " " + st.join(r + " ") + r).split(" "), pt(u, t, i))
    }

    function wt() {
      u.input = function(i) {
        for (var r = 0, u = i.length; r < u; r++) w[i[r]] = !!(i[r] in o);
        return w.list && (w.list = !!(t.createElement("datalist") && n.HTMLDataListElement)), w
      }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), u.inputtypes = function(n) {
        for (var u = 0, r, f, e, h = n.length; u < h; u++) o.setAttribute("type", f = n[u]), r = o.type !== "text", r && (o.value = nt, o.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && o.style.WebkitAppearance !== i ? (s.appendChild(o), e = t.defaultView, r = e.getComputedStyle && e.getComputedStyle(o, null).WebkitAppearance !== "textfield" && o.offsetHeight !== 0, s.removeChild(o)) : /^(search|tel)$/.test(f) || (r = /^(url|email)$/.test(f) ? o.checkValidity && o.checkValidity() === !1 : o.value != nt)), ht[n[u]] = !!r;
        return ht
      }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }
    var at = "2.6.2",
      u = {},
      g = !0,
      s = t.documentElement,
      e = "modernizr",
      ut = t.createElement(e),
      c = ut.style,
      o = t.createElement("input"),
      nt = ":)",
      ft = {}.toString,
      y = " -webkit- -moz- -o- -ms- ".split(" "),
      et = "Webkit Moz O ms",
      ot = et.split(" "),
      st = et.toLowerCase().split(" "),
      p = {
        svg: "http://www.w3.org/2000/svg"
      },
      r = {},
      ht = {},
      w = {},
      tt = [],
      it = tt.slice,
      b, l = function(n, i, r, u) {
        var l, a, c, v, f = t.createElement("div"),
          h = t.body,
          o = h || t.createElement("body");
        if (parseInt(r, 10))
          while (r--) c = t.createElement("div"), c.id = u ? u[r] : e + (r + 1), f.appendChild(c);
        return l = ["&#173;", '<style id="s', e, '">', n, "<\/style>"].join(""), f.id = e, (h ? f : o).innerHTML += l, o.appendChild(f), h || (o.style.background = "", o.style.overflow = "hidden", v = s.style.overflow, s.style.overflow = "hidden", s.appendChild(o)), a = i(f, n), h ? f.parentNode.removeChild(f) : (o.parentNode.removeChild(o), s.style.overflow = v), !!a
      },
      vt = function(t) {
        var i = n.matchMedia || n.msMatchMedia,
          r;
        return i ? i(t).matches : (l("@media " + t + " { #" + e + " { position: absolute; } }", function(t) {
          r = (n.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position == "absolute"
        }), r)
      },
      ct = function() {
        function r(r, u) {
          u = u || t.createElement(n[r] || "div"), r = "on" + r;
          var f = r in u;
          return f || (u.setAttribute || (u = t.createElement("div")), u.setAttribute && u.removeAttribute && (u.setAttribute(r, ""), f = h(u[r], "function"), h(u[r], "undefined") || (u[r] = i), u.removeAttribute(r))), u = null, f
        }
        var n = {
          select: "input",
          change: "input",
          submit: "form",
          reset: "form",
          error: "img",
          load: "img",
          abort: "img"
        };
        return r
      }(),
      rt = {}.hasOwnProperty,
      k, d;
    k = h(rt, "undefined") || h(rt.call, "undefined") ? function(n, t) {
      return t in n && h(n.constructor.prototype[t], "undefined")
    } : function(n, t) {
      return rt.call(n, t)
    }, Function.prototype.bind || (Function.prototype.bind = function(n) {
      var t = this,
        i, r;
      if (typeof t != "function") throw new TypeError;
      return i = it.call(arguments, 1), r = function() {
        var f, e, u;
        return this instanceof r ? (f = function() {}, f.prototype = t.prototype, e = new f, u = t.apply(e, i.concat(it.call(arguments))), Object(u) === u) ? u : e : t.apply(n, i.concat(it.call(arguments)))
      }, r
    }), r.flexbox = function() {
      return f("flexWrap")
    }, r.flexboxlegacy = function() {
      return f("boxDirection")
    }, r.canvas = function() {
      var n = t.createElement("canvas");
      return !!(n.getContext && n.getContext("2d"))
    }, r.canvastext = function() {
      return !!(u.canvas && h(t.createElement("canvas").getContext("2d").fillText, "function"))
    }, r.webgl = function() {
      return !!n.WebGLRenderingContext
    }, r.touch = function() {
      var i;
      return "ontouchstart" in n || n.DocumentTouch && t instanceof DocumentTouch ? i = !0 : l(["@media (", y.join("touch-enabled),("), e, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(n) {
        i = n.offsetTop === 9
      }), i
    }, r.geolocation = function() {
      return "geolocation" in navigator
    }, r.postmessage = function() {
      return !!n.postMessage
    }, r.websqldatabase = function() {
      return !!n.openDatabase
    }, r.indexedDB = function() {
      return !!f("indexedDB", n)
    }, r.hashchange = function() {
      return ct("hashchange", n) && (t.documentMode === i || t.documentMode > 7)
    }, r.history = function() {
      return !!(n.history && history.pushState)
    }, r.draganddrop = function() {
      var n = t.createElement("div");
      return "draggable" in n || "ondragstart" in n && "ondrop" in n
    }, r.websockets = function() {
      return "WebSocket" in n || "MozWebSocket" in n
    }, r.rgba = function() {
      return a("background-color:rgba(150,255,150,.5)"), v(c.backgroundColor, "rgba")
    }, r.hsla = function() {
      return a("background-color:hsla(120,40%,100%,.5)"), v(c.backgroundColor, "rgba") || v(c.backgroundColor, "hsla")
    }, r.multiplebgs = function() {
      return a("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(c.background)
    }, r.backgroundsize = function() {
      return f("backgroundSize")
    }, r.borderimage = function() {
      return f("borderImage")
    }, r.borderradius = function() {
      return f("borderRadius")
    }, r.boxshadow = function() {
      return f("boxShadow")
    }, r.textshadow = function() {
      return t.createElement("div").style.textShadow === ""
    }, r.opacity = function() {
      return yt("opacity:.55"), /^0.55$/.test(c.opacity)
    }, r.cssanimations = function() {
      return f("animationName")
    }, r.csscolumns = function() {
      return f("columnCount")
    }, r.cssgradients = function() {
      var n = "background-image:",
        t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
        i = "linear-gradient(left top,#9f9, white);";
      return a((n + "-webkit- ".split(" ").join(t + n) + y.join(i + n)).slice(0, -n.length)), v(c.backgroundImage, "gradient")
    }, r.cssreflections = function() {
      return f("boxReflect")
    }, r.csstransforms = function() {
      return !!f("transform")
    }, r.csstransforms3d = function() {
      var n = !!f("perspective");
      return n && "webkitPerspective" in s.style && l("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t) {
        n = t.offsetLeft === 9 && t.offsetHeight === 3
      }), n
    }, r.csstransitions = function() {
      return f("transition")
    }, r.fontface = function() {
      var n;
      return l('@font-face {font-family:"font";src:url("https://")}', function(i, r) {
        var f = t.getElementById("smodernizr"),
          u = f.sheet || f.styleSheet,
          e = u ? u.cssRules && u.cssRules[0] ? u.cssRules[0].cssText : u.cssText || "" : "";
        n = /src/i.test(e) && e.indexOf(r.split(" ")[0]) === 0
      }), n
    }, r.generatedcontent = function() {
      var n;
      return l(["#", e, "{font:0/0 a}#", e, ':after{content:"', nt, '";visibility:hidden;font:3px/1 a}'].join(""), function(t) {
        n = t.offsetHeight >= 3
      }), n
    }, r.video = function() {
      var i = t.createElement("video"),
        n = !1;
      try {
        (n = !!i.canPlayType) && (n = new Boolean(n), n.ogg = i.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = i.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = i.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
      } catch (r) {}
      return n
    }, r.audio = function() {
      var i = t.createElement("audio"),
        n = !1;
      try {
        (n = !!i.canPlayType) && (n = new Boolean(n), n.ogg = i.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = i.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = i.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (i.canPlayType("audio/x-m4a;") || i.canPlayType("audio/aac;")).replace(/^no$/, ""))
      } catch (r) {}
      return n
    }, r.localstorage = function() {
      try {
        return localStorage.setItem(e, e), localStorage.removeItem(e), !0
      } catch (n) {
        return !1
      }
    }, r.sessionstorage = function() {
      try {
        return sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0
      } catch (n) {
        return !1
      }
    }, r.webworkers = function() {
      return !!n.Worker
    }, r.applicationcache = function() {
      return !!n.applicationCache
    }, r.svg = function() {
      return !!t.createElementNS && !!t.createElementNS(p.svg, "svg").createSVGRect
    }, r.inlinesvg = function() {
      var n = t.createElement("div");
      return n.innerHTML = "<svg/>", (n.firstChild && n.firstChild.namespaceURI) == p.svg
    }, r.smil = function() {
      return !!t.createElementNS && /SVGAnimate/.test(ft.call(t.createElementNS(p.svg, "animate")))
    }, r.svgclippaths = function() {
      return !!t.createElementNS && /SVGClipPath/.test(ft.call(t.createElementNS(p.svg, "clipPath")))
    };
    for (d in r) k(r, d) && (b = d.toLowerCase(), u[b] = r[d](), tt.push((u[b] ? "" : "no-") + b));
    return u.input || wt(), u.addTest = function(n, t) {
      if (typeof n == "object")
        for (var r in n) k(n, r) && u.addTest(r, n[r]);
      else {
        if (n = n.toLowerCase(), u[n] !== i) return u;
        t = typeof t == "function" ? t() : t, typeof g != "undefined" && g && (s.className += " " + (t ? "" : "no-") + n), u[n] = t
      }
      return u
    }, a(""), ut = o = null,
      function(n, t) {
        function p(n, t) {
          var i = n.createElement("p"),
            r = n.getElementsByTagName("head")[0] || n.documentElement;
          return i.innerHTML = "x<style>" + t + "<\/style>", r.insertBefore(i.lastChild, r.firstChild)
        }

        function c() {
          var n = r.elements;
          return typeof n == "string" ? n.split(" ") : n
        }

        function o(n) {
          var t = h[n[s]];
          return t || (t = {}, e++, n[s] = e, h[e] = t), t
        }

        function l(n, r, u) {
          if (r || (r = t), i) return r.createElement(n);
          u || (u = o(r));
          var f;
          return f = u.cache[n] ? u.cache[n].cloneNode() : y.test(n) ? (u.cache[n] = u.createElem(n)).cloneNode() : u.createElem(n), f.canHaveChildren && !v.test(n) ? u.frag.appendChild(f) : f
        }

        function w(n, r) {
          if (n || (n = t), i) return n.createDocumentFragment();
          r = r || o(n);
          for (var f = r.frag.cloneNode(), u = 0, e = c(), s = e.length; u < s; u++) f.createElement(e[u]);
          return f
        }

        function b(n, t) {
          t.cache || (t.cache = {}, t.createElem = n.createElement, t.createFrag = n.createDocumentFragment, t.frag = t.createFrag()), n.createElement = function(i) {
            return r.shivMethods ? l(i, n, t) : t.createElem(i)
          }, n.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + c().join().replace(/\w+/g, function(n) {
            return t.createElem(n), t.frag.createElement(n), 'c("' + n + '")'
          }) + ");return n}")(r, t.frag)
        }

        function a(n) {
          n || (n = t);
          var u = o(n);
          return !r.shivCSS || f || u.hasCSS || (u.hasCSS = !!p(n, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), i || b(n, u), n
        }
        var u = n.html5 || {},
          v = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
          y = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
          f, s = "_html5shiv",
          e = 0,
          h = {},
          i, r;
        (function() {
          try {
            var n = t.createElement("a");
            n.innerHTML = "<xyz><\/xyz>", f = "hidden" in n, i = n.childNodes.length == 1 || function() {
              t.createElement("a");
              var n = t.createDocumentFragment();
              return typeof n.cloneNode == "undefined" || typeof n.createDocumentFragment == "undefined" || typeof n.createElement == "undefined"
            }()
          } catch (r) {
            f = !0, i = !0
          }
        })(), r = {
          elements: u.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
          shivCSS: u.shivCSS !== !1,
          supportsUnknownElements: i,
          shivMethods: u.shivMethods !== !1,
          type: "default",
          shivDocument: a,
          createElement: l,
          createDocumentFragment: w
        }, n.html5 = r, a(t)
      }(this, t), u._version = at, u._prefixes = y, u._domPrefixes = st, u._cssomPrefixes = ot, u.mq = vt, u.hasEvent = ct, u.testProp = function(n) {
      return lt([n])
    }, u.testAllProps = f, u.testStyles = l, u.prefixed = function(n, t, i) {
      return t ? f(n, t, i) : f(n, "pfx")
    }, s.className = s.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (g ? " js " + tt.join(" ") : ""), u
  }(this, this.document), function(n) {
    "use strict";
    typeof define == "function" && define.amd ? define(["jquery"], n) : n(jQuery)
  }(function(n) {
    "use strict";

    function i(t, r) {
      var f = function() {},
        u = this,
        e = {
          autoSelectFirst: !1,
          appendTo: "body",
          serviceUrl: null,
          lookup: null,
          onSelect: null,
          width: "auto",
          minChars: 1,
          maxHeight: 300,
          deferRequestBy: 0,
          params: {},
          formatResult: i.formatResult,
          delimiter: null,
          zIndex: 9999,
          type: "GET",
          noCache: !1,
          onSearchStart: f,
          onSearchComplete: f,
          containerClass: "autocomplete-suggestions",
          tabDisabled: !1,
          dataType: "text",
          currentRequest: null,
          lookupFilter: function(n, t, i) {
            return n.value.toLowerCase().indexOf(i) !== -1
          },
          paramName: "query",
          transformResult: function(t) {
            return typeof t == "string" ? n.parseJSON(t) : t
          },
          headers: {}
        };
      u.element = t, u.el = n(t), u.suggestions = [], u.badQueries = [], u.selectedIndex = -1, u.currentValue = u.element.value, u.intervalId = 0, u.cachedResponse = [], u.onChangeInterval = null, u.onChange = null, u.isLocal = !1, u.suggestionsContainer = null, u.options = n.extend({}, e, r), u.classes = {
        selected: "autocomplete-selected",
        suggestion: "autocomplete-suggestion"
      }, u.hint = null, u.hintValue = "", u.selection = null, u.initialize(), u.setOptions(r)
    }
    var r = function() {
        return {
          escapeRegExChars: function(n) {
            return n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
          },
          createNode: function(n) {
            var t = document.createElement("div");
            return t.innerHTML = n, t.firstChild
          }
        }
      }(),
      t = {
        ESC: 27,
        TAB: 9,
        RETURN: 13,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40
      };
    i.utils = r, n.Autocomplete = i, i.formatResult = function(n, t) {
      var u = "(" + r.escapeRegExChars(t) + ")",
        i = "";
      return i = n.value.replace(new RegExp(u, "gi"), "<strong>$1<\/strong>"), n.data.item.Category && n.data.item.Category != null && n.data.item.Category.Label && n.data.item.Category.Label != null && (i += " in " + r.escapeRegExChars(n.data.item.Category.Label)), i
    }, i.prototype = {
      killerFn: null,
      initialize: function() {
        var t = this,
          u = "." + t.classes.suggestion,
          f = t.classes.selected,
          e = t.options,
          r;
        t.element.setAttribute("autocomplete", "off"), t.killerFn = function(i) {
          n(i.target).closest("." + t.options.containerClass).length === 0 && (t.killSuggestions(), t.disableKillerFn())
        }, t.suggestionsContainer = i.utils.createNode('<div class="' + e.containerClass + '" style="position: absolute; display: none;"><\/div>'), r = n(t.suggestionsContainer), r.appendTo(e.appendTo);
        r.on("mouseover.autocomplete", u, function() {
          t.activate(n(this).data("index"))
        });
        r.on("mouseout.autocomplete", function() {
          t.selectedIndex = -1, r.children("." + f).removeClass(f)
        });
        r.on("click.autocomplete", u, function() {
          t.select(n(this).data("index")), n(".autoSuggestArrow").hide()
        });
        t.fixPosition(), t.fixPositionCapture = function() {
          t.visible && t.fixPosition()
        };
        n(window).on("resize", t.fixPositionCapture);
        t.el.on("keydown.autocomplete", function(n) {
          t.onKeyPress(n)
        });
        t.el.on("keyup.autocomplete", function(n) {
          t.onKeyUp(n)
        });
        t.el.on("blur.autocomplete", function() {
          t.onBlur()
        });
        t.el.on("focus.autocomplete", function() {
          t.fixPosition()
        });
        t.el.on("change.autocomplete", function(n) {
          t.onKeyUp(n)
        })
      },
      onBlur: function() {
        this.enableKillerFn()
      },
      setOptions: function(t) {
        var r = this,
          i = r.options;
        n.extend(i, t), r.isLocal = n.isArray(i.lookup), r.isLocal && (i.lookup = r.verifySuggestionsFormat(i.lookup)), n(r.suggestionsContainer).css({
          "max-height": i.maxHeight + "px",
          "z-index": i.zIndex
        })
      },
      clearCache: function() {
        this.cachedResponse = [], this.badQueries = []
      },
      clear: function() {
        this.clearCache(), this.currentValue = "", this.suggestions = []
      },
      disable: function() {
        this.disabled = !0
      },
      enable: function() {
        this.disabled = !1
      },
      fixPosition: function() {
        var n = this,
          t;
        n.options.appendTo === "body" && (t = n.el.offset())
      },
      enableKillerFn: function() {
        var t = this;
        n(document).on("click.autocomplete", t.killerFn)
      },
      disableKillerFn: function() {
        var t = this;
        n(document).off("click.autocomplete", t.killerFn)
      },
      killSuggestions: function() {
        var n = this;
        n.stopKillSuggestions(), n.intervalId = window.setInterval(function() {
          n.hide(), n.stopKillSuggestions()
        }, 300)
      },
      stopKillSuggestions: function() {
        n(".autoSuggestArrow").hide(), window.clearInterval(this.intervalId)
      },
      isCursorAtEnd: function() {
        var i = this,
          n = i.el.val().length,
          r = i.element.selectionStart,
          t;
        return typeof r == "number" ? r === n : document.selection ? (t = document.selection.createRange(), t.moveStart("character", -n), n === t.text.length) : !0
      },
      onKeyPress: function(n) {
        var i = this;
        if (!i.disabled && !i.visible && n.which === t.DOWN && i.currentValue) {
          i.suggest();
          return
        }
        if (!i.disabled && i.visible) {
          switch (n.which) {
            case t.ESC:
              i.el.val(i.currentValue), i.hide();
              break;
            case t.RIGHT:
              if (i.hint && i.options.onHint && i.isCursorAtEnd()) {
                i.selectHint();
                break
              }
              return;
            case t.TAB:
              if (i.hint && i.options.onHint) {
                i.selectHint();
                return
              }
            case t.RETURN:
              if (i.selectedIndex === -1) {
                i.hide();
                return
              }
              if (i.select(i.selectedIndex), n.which === t.TAB && i.options.tabDisabled === !1) return;
              break;
            case t.UP:
              i.moveUp();
              break;
            case t.DOWN:
              i.moveDown();
              break;
            default:
              return
          }
          n.stopImmediatePropagation(), n.preventDefault()
        }
      },
      onKeyUp: function(n) {
        var i = this;
        if (!i.disabled) {
          switch (n.which) {
            case t.UP:
            case t.DOWN:
              return
          }
          clearInterval(i.onChangeInterval), i.currentValue !== i.el.val() && (i.findBestHint(), i.options.deferRequestBy > 0 ? i.onChangeInterval = setInterval(function() {
            i.onValueChange()
          }, i.options.deferRequestBy) : i.onValueChange())
        }
      },
      onValueChange: function() {
        var t = this,
          i;
        t.selection && (t.selection = null, (t.options.onInvalidateSelection || n.noop)()), clearInterval(t.onChangeInterval), t.currentValue = t.el.val(), i = t.getQuery(t.currentValue), t.selectedIndex = -1, i.length < t.options.minChars ? t.hide() : t.getSuggestions(i)
      },
      getQuery: function(t) {
        var r = this.options.delimiter,
          i;
        return r ? (i = t.split(r), n.trim(i[i.length - 1])) : n.trim(t)
      },
      getSuggestionsLocal: function(t) {
        var i = this,
          r = t.toLowerCase(),
          u = i.options.lookupFilter;
        return {
          suggestions: n.grep(i.options.lookup, function(n) {
            return u(n, t, r)
          })
        }
      },
      getSuggestions: function(t) {
        var u, r = this,
          i = r.options,
          f = i.serviceUrl;
        if (u = r.isLocal ? r.getSuggestionsLocal(t) : r.cachedResponse[t], u && n.isArray(u.suggestions)) r.suggestions = u.suggestions, r.suggest();
        else if (!r.isBadQuery(t)) {
          if (i.params[i.paramName] = t, i.onSearchStart.call(r.element, i.params) === !1) return;
          n.isFunction(i.serviceUrl) && (f = i.serviceUrl.call(r.element, t)), this.currentRequest != null && this.currentRequest.abort(), this.currentRequest = n.ajax({
            url: f,
            data: i.ignoreParams ? null : i.params,
            type: i.type,
            dataType: i.dataType,
            headers: i.headers
          }).done(function(n) {
            r.processResponse(n, t), i.onSearchComplete.call(r.element, t)
          })
        }
      },
      isBadQuery: function(n) {
        for (var t = this.badQueries, i = t.length; i--;)
          if (n.indexOf(t[i]) === 0) return !0;
        return !1
      },
      hide: function() {
        var t = this;
        t.visible = !1, t.selectedIndex = -1, n(t.suggestionsContainer).hide(), t.signalHint(null)
      },
      suggest: function() {
        if (this.suggestions.length === 0) {
          this.hide();
          return
        }
        var t = this,
          u = t.options.formatResult,
          f = t.getQuery(t.currentValue),
          e = t.classes.suggestion,
          o = t.classes.selected,
          i = n(t.suggestionsContainer),
          r = "",
          s;
        n.each(t.suggestions, function(n, t) {
          r += '<div class="' + e + '" data-index="' + n + '">' + u(t, f) + "<\/div>"
        }), i.html(r).show(), t.visible = !0, t.options.autoSelectFirst && (t.selectedIndex = 0, i.children().first().addClass(o)), t.findBestHint(), n(".autoSuggestArrow").css("display", "inline-block")
      },
      findBestHint: function() {
        var t = this,
          i = t.el.val().toLowerCase(),
          r = null;
        i && (n.each(t.suggestions, function(n, t) {
          var u = t.value.toLowerCase().indexOf(i) === 0;
          return u && (r = t), !u
        }), t.signalHint(r))
      },
      signalHint: function(t) {
        var r = "",
          i = this;
        t && (r = i.currentValue + t.value.substr(i.currentValue.length)), i.hintValue !== r && (i.hintValue = r, i.hint = t, (this.options.onHint || n.noop)(r))
      },
      verifySuggestionsFormat: function(t) {
        return t.length && typeof t[0] == "string" ? n.map(t, function(n) {
          return {
            value: n,
            data: null
          }
        }) : t
      },
      processResponse: function(n, t) {
        var i = this,
          u = i.options,
          r = u.transformResult(n, t);
        r.suggestions = i.verifySuggestionsFormat(r.suggestions), u.noCache || (i.cachedResponse[r[u.paramName]] = r, r.suggestions.length === 0 && i.badQueries.push(r[u.paramName])), t === i.getQuery(i.currentValue) && (i.suggestions = r.suggestions, i.suggest())
      },
      activate: function(t) {
        var i = this,
          r, u = i.classes.selected,
          f = n(i.suggestionsContainer),
          e = f.children();
        return (f.children("." + u).removeClass(u), i.selectedIndex = t, i.selectedIndex !== -1 && e.length > i.selectedIndex) ? (r = e.get(i.selectedIndex), n(r).addClass(u), r) : null
      },
      selectHint: function() {
        var t = this,
          i = n.inArray(t.hint, t.suggestions);
        t.select(i)
      },
      select: function(n) {
        var t = this;
        t.hide();
        t.onSelect(n)
      },
      moveUp: function() {
        var t = this;
        if (t.selectedIndex !== -1) {
          if (t.selectedIndex === 0) {
            n(t.suggestionsContainer).children().first().removeClass(t.classes.selected), t.selectedIndex = -1, t.el.val(t.currentValue), t.findBestHint();
            return
          }
          t.adjustScroll(t.selectedIndex - 1)
        }
      },
      moveDown: function() {
        var n = this;
        n.selectedIndex !== n.suggestions.length - 1 && n.adjustScroll(n.selectedIndex + 1)
      },
      adjustScroll: function(t) {
        var i = this,
          f = i.activate(t),
          r, u, e, o = 25;
        f && (r = f.offsetTop, u = n(i.suggestionsContainer).scrollTop(), e = u + i.options.maxHeight - o, r < u ? n(i.suggestionsContainer).scrollTop(r) : r > e && n(i.suggestionsContainer).scrollTop(r - i.options.maxHeight + o), i.el.val(i.getValue(i.suggestions[t].value)), i.signalHint(null))
      },
      onSelect: function(t) {
        var i = this,
          u = i.options.onSelect,
          r = i.suggestions[t];
        i.currentValue = i.getValue(r.value), i.el.val(i.currentValue), i.signalHint(null), i.suggestions = [], i.selection = r, n.isFunction(u) && u.call(i.element, r)
      },
      getValue: function(n) {
        var r = this,
          u = r.options.delimiter,
          t, i;
        return u ? (t = r.currentValue, i = t.split(u), i.length === 1) ? n : t.substr(0, t.length - i[i.length - 1].length) + n : n
      },
      dispose: function() {
        var t = this;
        t.el.off(".autocomplete").removeData("autocomplete"), t.disableKillerFn(), n(window).off("resize", t.fixPositionCapture), n(t.suggestionsContainer).remove()
      }
    }, n.fn.autocomplete = function(t, r) {
      var u = "autocomplete";
      return arguments.length === 0 ? this.first().data(u) : this.each(function() {
        var e = n(this),
          f = e.data(u);
        typeof t == "string" ? f && typeof f[t] == "function" && f[t](r) : (f && f.dispose && f.dispose(), f = new i(this, t), e.data(u, f))
      })
    }
  }), !jQuery) throw new Error("Bootstrap requires jQuery"); + function(n) {
  "use strict";

  function t() {
    var i = document.createElement("bootstrap"),
      t = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
      },
      n;
    for (n in t)
      if (void 0 !== i.style[n]) return {
        end: t[n]
      }
  }
  n.fn.emulateTransitionEnd = function(t) {
    var i = !1,
      u = this,
      r;
    n(this).one(n.support.transition.end, function() {
      i = !0
    });
    return r = function() {
      i || n(u).trigger(n.support.transition.end)
    }, setTimeout(r, t), this
  }, n(function() {
    n.support.transition = t()
  })
}(window.jQuery), + function(n) {
  "use strict";
  var i = '[data-dismiss="alert"]',
    t = function(t) {
      n(t).on("click", i, this.close)
    },
    r;
  t.prototype.close = function(t) {
    function f() {
      i.trigger("closed.bs.alert").remove()
    }
    var u = n(this),
      r = u.attr("data-target"),
      i;
    r || (r = u.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), i = n(r), t && t.preventDefault(), i.length || (i = u.hasClass("alert") ? u : u.parent()), i.trigger(t = n.Event("close.bs.alert")), t.isDefaultPrevented() || (i.removeClass("in"), n.support.transition && i.hasClass("fade") ? i.one(n.support.transition.end, f).emulateTransitionEnd(150) : f())
  }, r = n.fn.alert, n.fn.alert = function(i) {
    return this.each(function() {
      var r = n(this),
        u = r.data("bs.alert");
      u || r.data("bs.alert", u = new t(this)), "string" == typeof i && u[i].call(r)
    })
  }, n.fn.alert.Constructor = t, n.fn.alert.noConflict = function() {
    return n.fn.alert = r, this
  }, n(document).on("click.bs.alert.data-api", i, t.prototype.close)
}(window.jQuery), + function(n) {
  "use strict";
  var t = function(i, r) {
      this.$element = n(i), this.options = n.extend({}, t.DEFAULTS, r)
    },
    i;
  t.DEFAULTS = {
    loadingText: "loading..."
  }, t.prototype.setState = function(n) {
    var i = "disabled",
      t = this.$element,
      r = t.is("input") ? "val" : "html",
      u = t.data();
    n += "Text", u.resetText || t.data("resetText", t[r]()), t[r](u[n] || this.options[n]), setTimeout(function() {
      "loadingText" == n ? t.addClass(i).attr(i, i) : t.removeClass(i).removeAttr(i)
    }, 0)
  }, t.prototype.toggle = function() {
    var n = this.$element.closest('[data-toggle="buttons"]'),
      t;
    n.length && (t = this.$element.find("input").prop("checked", !this.$element.hasClass("active")).trigger("change"), "radio" === t.prop("type") && n.find(".active").removeClass("active")), this.$element.toggleClass("active")
  }, i = n.fn.button, n.fn.button = function(i) {
    return this.each(function() {
      var u = n(this),
        r = u.data("bs.button"),
        f = "object" == typeof i && i;
      r || u.data("bs.button", r = new t(this, f)), "toggle" == i ? r.toggle() : i && r.setState(i)
    })
  }, n.fn.button.Constructor = t, n.fn.button.noConflict = function() {
    return n.fn.button = i, this
  }, n(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(t) {
    var i = n(t.target);
    i.hasClass("btn") || (i = i.closest(".btn")), i.button("toggle"), t.preventDefault()
  })
}(window.jQuery), + function(n) {
  "use strict";
  var t = function(t, i) {
      this.$element = n(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", n.proxy(this.pause, this)).on("mouseleave", n.proxy(this.cycle, this))
    },
    i;
  t.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0
  }, t.prototype.cycle = function(t) {
    return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(n.proxy(this.next, this), this.options.interval)), this
  }, t.prototype.getActiveIndex = function() {
    return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
  }, t.prototype.to = function(t) {
    var r = this,
      i = this.getActiveIndex();
    if (!(t > this.$items.length - 1) && !(0 > t)) return this.sliding ? this.$element.one("slid", function() {
      r.to(t)
    }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", n(this.$items[t]))
  }, t.prototype.pause = function(t) {
    return t || (this.paused = !0), this.$element.find(".next, .prev").length && n.support.transition.end && (this.$element.trigger(n.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
  }, t.prototype.next = function() {
    if (!this.sliding) return this.slide("next")
  }, t.prototype.prev = function() {
    if (!this.sliding) return this.slide("prev")
  }, t.prototype.slide = function(t, i) {
    var u = this.$element.find(".item.active"),
      r = i || u[t](),
      s = this.interval,
      f = "next" == t ? "left" : "right",
      h = "next" == t ? "first" : "last",
      o = this,
      e;
    if (!r.length) {
      if (!this.options.wrap) return;
      r = this.$element.find(".item")[h]()
    }
    if (this.sliding = !0, s && this.pause(), e = n.Event("slide.bs.carousel", {
        relatedTarget: r[0],
        direction: f
      }), !r.hasClass("active")) {
      if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid", function() {
          var t = n(o.$indicators.children()[o.getActiveIndex()]);
          t && t.addClass("active")
        })), n.support.transition && this.$element.hasClass("slide")) {
        if (this.$element.trigger(e), e.isDefaultPrevented()) return;
        r.addClass(t), r[0].offsetWidth, u.addClass(f), r.addClass(f), u.one(n.support.transition.end, function() {
          r.removeClass([t, f].join(" ")).addClass("active"), u.removeClass(["active", f].join(" ")), o.sliding = !1, setTimeout(function() {
            o.$element.trigger("slid")
          }, 0)
        }).emulateTransitionEnd(600)
      } else {
        if (this.$element.trigger(e), e.isDefaultPrevented()) return;
        u.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger("slid")
      }
      return s && this.cycle(), this
    }
  }, i = n.fn.carousel, n.fn.carousel = function(i) {
    return this.each(function() {
      var u = n(this),
        r = u.data("bs.carousel"),
        f = n.extend({}, t.DEFAULTS, u.data(), "object" == typeof i && i),
        e = "string" == typeof i ? i : f.slide;
      r || u.data("bs.carousel", r = new t(this, f)), "number" == typeof i ? r.to(i) : e ? r[e]() : f.interval && r.pause().cycle()
    })
  }, n.fn.carousel.Constructor = t, n.fn.carousel.noConflict = function() {
    return n.fn.carousel = i, this
  }, n(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(t) {
    var f, i = n(this),
      r = n(i.attr("data-target") || (f = i.attr("href")) && f.replace(/.*(?=#[^\s]+$)/, "")),
      e = n.extend({}, r.data(), i.data()),
      u = i.attr("data-slide-to");
    u && (e.interval = !1), r.carousel(e), (u = i.attr("data-slide-to")) && r.data("bs.carousel").to(u), t.preventDefault()
  }), n(window).on("load", function() {
    n('[data-ride="carousel"]').each(function() {
      var t = n(this);
      t.carousel(t.data())
    })
  })
}(window.jQuery), + function(n) {
  "use strict";
  var t = function(i, r) {
      this.$element = n(i), this.options = n.extend({}, t.DEFAULTS, r), this.transitioning = null, this.options.parent && (this.$parent = n(this.options.parent)), this.options.toggle && this.toggle()
    },
    i;
  t.DEFAULTS = {
    toggle: !0
  }, t.prototype.dimension = function() {
    var n = this.$element.hasClass("width");
    return n ? "width" : "height"
  }, t.prototype.show = function() {
    var u, t, r, i, f, e;
    if (!this.transitioning && !this.$element.hasClass("in") && (u = n.Event("show.bs.collapse"), this.$element.trigger(u), !u.isDefaultPrevented())) {
      if (t = this.$parent && this.$parent.find("> .panel > .in"), t && t.length) {
        if (r = t.data("bs.collapse"), r && r.transitioning) return;
        t.collapse("hide"), r || t.data("bs.collapse", null)
      }
      if (i = this.dimension(), this.$element.removeClass("collapse").addClass("collapsing")[i](0), this.transitioning = 1, f = function() {
          this.$element.removeClass("collapsing").addClass("in")[i]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
        }, !n.support.transition) return f.call(this);
      e = n.camelCase(["scroll", i].join("-")), this.$element.one(n.support.transition.end, n.proxy(f, this)).emulateTransitionEnd(350)[i](this.$element[0][e])
    }
  }, t.prototype.hide = function() {
    var i, t, r;
    if (!this.transitioning && this.$element.hasClass("in") && (i = n.Event("hide.bs.collapse"), this.$element.trigger(i), !i.isDefaultPrevented())) return t = this.dimension(), this.$element[t](this.$element[t]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1, r = function() {
      this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
    }, n.support.transition ? (this.$element[t](0).one(n.support.transition.end, n.proxy(r, this)).emulateTransitionEnd(350), void 0) : r.call(this)
  }, t.prototype.toggle = function() {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
  }, i = n.fn.collapse, n.fn.collapse = function(i) {
    return this.each(function() {
      var r = n(this),
        u = r.data("bs.collapse"),
        f = n.extend({}, t.DEFAULTS, r.data(), "object" == typeof i && i);
      u || r.data("bs.collapse", u = new t(this, f)), "string" == typeof i && u[i]()
    })
  }, n.fn.collapse.Constructor = t, n.fn.collapse.noConflict = function() {
    return n.fn.collapse = i, this
  }, n(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(t) {
    var e, i = n(this),
      s = i.attr("data-target") || t.preventDefault() || (e = i.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, ""),
      r = n(s),
      u = r.data("bs.collapse"),
      h = u ? "toggle" : i.data(),
      f = i.attr("data-parent"),
      o = f && n(f);
    u && u.transitioning || (o && o.find('[data-toggle=collapse][data-parent="' + f + '"]').not(i).addClass("collapsed"), i[r.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), r.collapse(h)
  })
}(window.jQuery), + function(n) {
  "use strict";

  function r() {
    n(e).remove(), n(i).each(function(t) {
      var i = u(n(this));
      i.hasClass("open") && (i.trigger(t = n.Event("hide.bs.dropdown")), t.isDefaultPrevented() || i.removeClass("open").trigger("hidden.bs.dropdown"))
    })
  }

  function u(t) {
    var i = t.attr("data-target"),
      r;
    return i || (i = t.attr("href"), i = i && /#/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")), r = i && n(i), r && r.length ? r : t.parent()
  }
  var e = ".dropdown-backdrop",
    i = "[data-toggle=dropdown]",
    t = function(t) {
      n(t).on("click.bs.dropdown", this.toggle)
    },
    f;
  t.prototype.toggle = function(t) {
    var f = n(this),
      i, e;
    if (!f.is(".disabled, :disabled")) {
      if (i = u(f), e = i.hasClass("open"), r(), !e) {
        if ("ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && n('<div class="dropdown-backdrop"/>').insertAfter(n(this)).on("click", r), i.trigger(t = n.Event("show.bs.dropdown")), t.isDefaultPrevented()) return;
        i.toggleClass("open").trigger("shown.bs.dropdown"), f.focus()
      }
      return !1
    }
  }, t.prototype.keydown = function(t) {
    var e, o, s, f, r;
    if (/(38|40|27)/.test(t.keyCode) && (e = n(this), t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled"))) {
      if (o = u(e), s = o.hasClass("open"), !s || s && 27 == t.keyCode) return 27 == t.which && o.find(i).focus(), e.click();
      f = n("[role=menu] li:not(.divider):visible a", o), f.length && (r = f.index(f.filter(":focus")), 38 == t.keyCode && r > 0 && r--, 40 == t.keyCode && r < f.length - 1 && r++, ~r || (r = 0), f.eq(r).focus())
    }
  }, f = n.fn.dropdown, n.fn.dropdown = function(i) {
    return this.each(function() {
      var r = n(this),
        u = r.data("dropdown");
      u || r.data("dropdown", u = new t(this)), "string" == typeof i && u[i].call(r)
    })
  }, n.fn.dropdown.Constructor = t, n.fn.dropdown.noConflict = function() {
    return n.fn.dropdown = f, this
  }, n(document).on("click.bs.dropdown.data-api", r).on("click.bs.dropdown.data-api", ".dropdown form", function(n) {
    n.stopPropagation()
  }).on("click.bs.dropdown.data-api", i, t.prototype.toggle).on("keydown.bs.dropdown.data-api", i + ", [role=menu]", t.prototype.keydown)
}(window.jQuery), + function(n) {
  "use strict";
  var t = function(t, i) {
      this.options = i, this.$element = n(t), this.$backdrop = this.isShown = null, this.options.remote && this.$element.load(this.options.remote)
    },
    i;
  t.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, t.prototype.toggle = function(n) {
    return this[this.isShown ? "hide" : "show"](n)
  }, t.prototype.show = function(t) {
    var i = this,
      r = n.Event("show.bs.modal", {
        relatedTarget: t
      });
    this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.modal", '[data-dismiss="modal"]', n.proxy(this.hide, this)), this.backdrop(function() {
      var u = n.support.transition && i.$element.hasClass("fade"),
        r;
      i.$element.parent().length || i.$element.appendTo(document.body), i.$element.show(), u && i.$element[0].offsetWidth, i.$element.addClass("in").attr("aria-hidden", !1), i.enforceFocus(), r = n.Event("shown.bs.modal", {
        relatedTarget: t
      }), u ? i.$element.find(".modal-dialog").one(n.support.transition.end, function() {
        i.$element.focus().trigger(r)
      }).emulateTransitionEnd(300) : i.$element.focus().trigger(r)
    }))
  }, t.prototype.hide = function(t) {
    t && t.preventDefault(), t = n.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), n(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.modal"), n.support.transition && this.$element.hasClass("fade") ? this.$element.one(n.support.transition.end, n.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
  }, t.prototype.enforceFocus = function() {
    n(document).off("focusin.bs.modal").on("focusin.bs.modal", n.proxy(function(n) {
      this.$element[0] === n.target || this.$element.has(n.target).length || this.$element.focus()
    }, this))
  }, t.prototype.escape = function() {
    this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", n.proxy(function(n) {
      27 == n.which && this.hide()
    }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
  }, t.prototype.hideModal = function() {
    var n = this;
    this.$element.hide(), this.backdrop(function() {
      n.removeBackdrop(), n.$element.trigger("hidden.bs.modal")
    })
  }, t.prototype.removeBackdrop = function() {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
  }, t.prototype.backdrop = function(t) {
    var r = this.$element.hasClass("fade") ? "fade" : "",
      i;
    if (this.isShown && this.options.backdrop) {
      if (i = n.support.transition && r, this.$backdrop = n('<div class="modal-backdrop ' + r + '" />').appendTo(document.body), this.$element.on("click.dismiss.modal", n.proxy(function(n) {
          n.target === n.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
        }, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
      i ? this.$backdrop.one(n.support.transition.end, t).emulateTransitionEnd(150) : t()
    } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), n.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(n.support.transition.end, t).emulateTransitionEnd(150) : t()) : t && t()
  }, i = n.fn.modal, n.fn.modal = function(i, r) {
    return this.each(function() {
      var f = n(this),
        u = f.data("bs.modal"),
        e = n.extend({}, t.DEFAULTS, f.data(), "object" == typeof i && i);
      u || f.data("bs.modal", u = new t(this, e)), "string" == typeof i ? u[i](r) : e.show && u.show(r)
    })
  }, n.fn.modal.Constructor = t, n.fn.modal.noConflict = function() {
    return n.fn.modal = i, this
  }, n(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
    var i = n(this),
      r = i.attr("href"),
      u = n(i.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
      f = u.data("modal") ? "toggle" : n.extend({
        remote: !/#/.test(r) && r
      }, u.data(), i.data());
    t.preventDefault(), u.modal(f, this).one("hide", function() {
      i.is(":visible") && i.focus()
    })
  }), n(document).on("show.bs.modal", ".modal", function() {
    n(document.body).addClass("modal-open")
  }).on("hidden.bs.modal", ".modal", function() {
    n(document.body).removeClass("modal-open")
  })
}(window.jQuery), + function(n) {
  "use strict";
  var t = function(n, t) {
      this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", n, t)
    },
    i;
  t.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1
  }, t.prototype.init = function(t, i, r) {
    var f, e, u, o, s;
    for (this.enabled = !0, this.type = t, this.$element = n(i), this.options = this.getOptions(r), f = this.options.trigger.split(" "), e = f.length; e--;)
      if (u = f[e], "click" == u) this.$element.on("click." + this.type, this.options.selector, n.proxy(this.toggle, this));
      else "manual" != u && (o = "hover" == u ? "mouseenter" : "focus", s = "hover" == u ? "mouseleave" : "blur", this.$element.on(o + "." + this.type, this.options.selector, n.proxy(this.enter, this)), this.$element.on(s + "." + this.type, this.options.selector, n.proxy(this.leave, this)));
    this.options.selector ? this._options = n.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle()
  }, t.prototype.getDefaults = function() {
    return t.DEFAULTS
  }, t.prototype.getOptions = function(t) {
    return t = n.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
      show: t.delay,
      hide: t.delay
    }), t
  }, t.prototype.getDelegateOptions = function() {
    var t = {},
      i = this.getDefaults();
    return this._options && n.each(this._options, function(n, r) {
      i[n] != r && (t[n] = r)
    }), t
  }, t.prototype.enter = function(t) {
    var i = t instanceof this.constructor ? t : n(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
    return clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? (i.timeout = setTimeout(function() {
      "in" == i.hoverState && i.show()
    }, i.options.delay.show), void 0) : i.show()
  }, t.prototype.leave = function(t) {
    var i = t instanceof this.constructor ? t : n(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
    return clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? (i.timeout = setTimeout(function() {
      "out" == i.hoverState && i.hide()
    }, i.options.delay.hide), void 0) : i.hide()
  }, t.prototype.show = function() {
    var o = n.Event("show.bs." + this.type),
      i, l;
    if (this.hasContent() && this.enabled) {
      if (this.$element.trigger(o), o.isDefaultPrevented()) return;
      i = this.tip(), this.setContent(), this.options.animation && i.addClass("fade");
      var t = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement,
        s = /\s?auto?\s?/i,
        h = s.test(t);
      h && (t = t.replace(s, "") || "top"), i.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(t), this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element);
      var r = this.getPosition(),
        u = i[0].offsetWidth,
        f = i[0].offsetHeight;
      if (h) {
        var e = this.$element.parent(),
          a = t,
          c = document.documentElement.scrollTop || document.body.scrollTop,
          v = "body" == this.options.container ? window.innerWidth : e.outerWidth(),
          y = "body" == this.options.container ? window.innerHeight : e.outerHeight(),
          p = "body" == this.options.container ? 0 : e.offset().left;
        t = "bottom" == t && r.top + r.height + f - c > y ? "top" : "top" == t && r.top - c - f < 0 ? "bottom" : "right" == t && r.right + u > v ? "left" : "left" == t && r.left - u < p ? "right" : t, i.removeClass(a).addClass(t)
      }
      l = this.getCalculatedOffset(t, r, u, f), this.applyPlacement(l, t), this.$element.trigger("shown.bs." + this.type)
    }
  }, t.prototype.applyPlacement = function(n, t) {
    var h, i = this.tip(),
      c = i[0].offsetWidth,
      f = i[0].offsetHeight,
      e = parseInt(i.css("margin-top"), 10),
      o = parseInt(i.css("margin-left"), 10),
      u, r, s;
    isNaN(e) && (e = 0), isNaN(o) && (o = 0), n.top = n.top + e, n.left = n.left + o, i.offset(n).addClass("in"), u = i[0].offsetWidth, r = i[0].offsetHeight, ("top" == t && r != f && (h = !0, n.top = n.top + f - r), /bottom|top/.test(t)) ? (s = 0, n.left < 0 && (s = -2 * n.left, n.left = 0, i.offset(n), u = i[0].offsetWidth, r = i[0].offsetHeight), this.replaceArrow(s - c + u, u, "left")) : this.replaceArrow(r - f, r, "top"), h && i.offset(n)
  }, t.prototype.replaceArrow = function(n, t, i) {
    this.arrow().css(i, n ? 50 * (1 - n / t) + "%" : "")
  }, t.prototype.setContent = function() {
    var n = this.tip(),
      t = this.getTitle();
    n.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), n.removeClass("fade in top bottom left right")
  }, t.prototype.hide = function() {
    function i() {
      "in" != u.hoverState && t.detach()
    }
    var u = this,
      t = this.tip(),
      r = n.Event("hide.bs." + this.type);
    return this.$element.trigger(r), r.isDefaultPrevented() ? void 0 : (t.removeClass("in"), n.support.transition && this.$tip.hasClass("fade") ? t.one(n.support.transition.end, i).emulateTransitionEnd(150) : i(), this.$element.trigger("hidden.bs." + this.type), this)
  }, t.prototype.fixTitle = function() {
    var n = this.$element;
    (n.attr("title") || "string" != typeof n.attr("data-original-title")) && n.attr("data-original-title", n.attr("title") || "").attr("title", "")
  }, t.prototype.hasContent = function() {
    return this.getTitle()
  }, t.prototype.getPosition = function() {
    var t = this.$element[0];
    return n.extend({}, "function" == typeof t.getBoundingClientRect ? t.getBoundingClientRect() : {
      width: t.offsetWidth,
      height: t.offsetHeight
    }, this.$element.offset())
  }, t.prototype.getCalculatedOffset = function(n, t, i, r) {
    return "bottom" == n ? {
      top: t.top + t.height,
      left: t.left + t.width / 2 - i / 2
    } : "top" == n ? {
      top: t.top - r,
      left: t.left + t.width / 2 - i / 2
    } : "left" == n ? {
      top: t.top + t.height / 2 - r / 2,
      left: t.left - i
    } : {
      top: t.top + t.height / 2 - r / 2,
      left: t.left + t.width
    }
  }, t.prototype.getTitle = function() {
    var i, t = this.$element,
      n = this.options;
    return i = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
  }, t.prototype.tip = function() {
    return this.$tip = this.$tip || n(this.options.template)
  }, t.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
  }, t.prototype.validate = function() {
    this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
  }, t.prototype.enable = function() {
    this.enabled = !0
  }, t.prototype.disable = function() {
    this.enabled = !1
  }, t.prototype.toggleEnabled = function() {
    this.enabled = !this.enabled
  }, t.prototype.toggle = function(t) {
    var i = t ? n(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
    i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
  }, t.prototype.destroy = function() {
    this.hide().$element.off("." + this.type).removeData("bs." + this.type)
  }, i = n.fn.tooltip, n.fn.tooltip = function(i) {
    return this.each(function() {
      var u = n(this),
        r = u.data("bs.tooltip"),
        f = "object" == typeof i && i;
      r || u.data("bs.tooltip", r = new t(this, f)), "string" == typeof i && r[i]()
    })
  }, n.fn.tooltip.Constructor = t, n.fn.tooltip.noConflict = function() {
    return n.fn.tooltip = i, this
  }
}(window.jQuery), + function(n) {
  "use strict";
  var t = function(n, t) {
      this.init("popover", n, t)
    },
    i;
  if (!n.fn.tooltip) throw new Error("Popover requires tooltip.js");
  t.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover"><div class="arrow"><\/div><h3 class="popover-title"><\/h3><div class="popover-content"><\/div><\/div>'
  }), t.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype), t.prototype.constructor = t, t.prototype.getDefaults = function() {
    return t.DEFAULTS
  }, t.prototype.setContent = function() {
    var n = this.tip(),
      t = this.getTitle(),
      i = this.getContent();
    n.find(".popover-title")[this.options.html ? "html" : "text"](t), n.find(".popover-content")[this.options.html ? "html" : "text"](i), n.removeClass("fade top bottom left right in"), n.find(".popover-title").html() || n.find(".popover-title").hide()
  }, t.prototype.hasContent = function() {
    return this.getTitle() || this.getContent()
  }, t.prototype.getContent = function() {
    var t = this.$element,
      n = this.options;
    return t.attr("data-content") || ("function" == typeof n.content ? n.content.call(t[0]) : n.content)
  }, t.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".arrow")
  }, t.prototype.tip = function() {
    return this.$tip || (this.$tip = n(this.options.template)), this.$tip
  }, i = n.fn.popover, n.fn.popover = function(i) {
    return this.each(function() {
      var u = n(this),
        r = u.data("bs.popover"),
        f = "object" == typeof i && i;
      r || u.data("bs.popover", r = new t(this, f)), "string" == typeof i && r[i]()
    })
  }, n.fn.popover.Constructor = t, n.fn.popover.noConflict = function() {
    return n.fn.popover = i, this
  }
}(window.jQuery), + function(n) {
  "use strict";

  function t(i, r) {
    var u, f = n.proxy(this.process, this);
    this.$element = n(i).is("body") ? n(window) : n(i), this.$body = n("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", f), this.options = n.extend({}, t.DEFAULTS, r), this.selector = (this.options.target || (u = n(i).attr("href")) && u.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = n([]), this.targets = n([]), this.activeTarget = null, this.refresh(), this.process()
  }
  t.DEFAULTS = {
    offset: 10
  }, t.prototype.refresh = function() {
    var i = this.$element[0] == window ? "offset" : "position",
      t;
    this.offsets = n([]), this.targets = n([]), t = this, this.$body.find(this.selector).map(function() {
      var f = n(this),
        r = f.data("target") || f.attr("href"),
        u = /^#\w/.test(r) && n(r);
      return u && u.length && [
          [u[i]().top + (!n.isWindow(t.$scrollElement.get(0)) && t.$scrollElement.scrollTop()), r]
        ] || null
    }).sort(function(n, t) {
      return n[0] - t[0]
    }).each(function() {
      t.offsets.push(this[0]), t.targets.push(this[1])
    })
  }, t.prototype.process = function() {
    var n, i = this.$scrollElement.scrollTop() + this.options.offset,
      f = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
      e = f - this.$scrollElement.height(),
      t = this.offsets,
      r = this.targets,
      u = this.activeTarget;
    if (i >= e) return u != (n = r.last()[0]) && this.activate(n);
    for (n = t.length; n--;) u != r[n] && i >= t[n] && (!t[n + 1] || i <= t[n + 1]) && this.activate(r[n])
  }, t.prototype.activate = function(t) {
    this.activeTarget = t, n(this.selector).parents(".active").removeClass("active");
    var r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
      i = n(r).parents("li").addClass("active");
    i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate")
  };
  var i = n.fn.scrollspy;
  n.fn.scrollspy = function(i) {
    return this.each(function() {
      var u = n(this),
        r = u.data("bs.scrollspy"),
        f = "object" == typeof i && i;
      r || u.data("bs.scrollspy", r = new t(this, f)), "string" == typeof i && r[i]()
    })
  }, n.fn.scrollspy.Constructor = t, n.fn.scrollspy.noConflict = function() {
    return n.fn.scrollspy = i, this
  }, n(window).on("load", function() {
    n('[data-spy="scroll"]').each(function() {
      var t = n(this);
      t.scrollspy(t.data())
    })
  })
}(window.jQuery), + function(n) {
  "use strict";
  var t = function(t) {
      this.element = n(t)
    },
    i;
  t.prototype.show = function() {
    var t = this.element,
      e = t.closest("ul:not(.dropdown-menu)"),
      i = t.attr("data-target"),
      r, u, f;
    (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), t.parent("li").hasClass("active")) || (r = e.find(".active:last a")[0], u = n.Event("show.bs.tab", {
      relatedTarget: r
    }), (t.trigger(u), u.isDefaultPrevented()) || (f = n(i), this.activate(t.parent("li"), e), this.activate(f, f.parent(), function() {
      t.trigger({
        type: "shown.bs.tab",
        relatedTarget: r
      })
    })))
  }, t.prototype.activate = function(t, i, r) {
    function f() {
      u.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), t.addClass("active"), e ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), r && r()
    }
    var u = i.find("> .active"),
      e = r && n.support.transition && u.hasClass("fade");
    e ? u.one(n.support.transition.end, f).emulateTransitionEnd(150) : f(), u.removeClass("in")
  }, i = n.fn.tab, n.fn.tab = function(i) {
    return this.each(function() {
      var u = n(this),
        r = u.data("bs.tab");
      r || u.data("bs.tab", r = new t(this)), "string" == typeof i && r[i]()
    })
  }, n.fn.tab.Constructor = t, n.fn.tab.noConflict = function() {
    return n.fn.tab = i, this
  }, n(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(t) {
    t.preventDefault(), n(this).tab("show")
  })
}(window.jQuery), + function(n) {
  "use strict";
  var t = function(i, r) {
      this.options = n.extend({}, t.DEFAULTS, r), this.$window = n(window).on("scroll.bs.affix.data-api", n.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", n.proxy(this.checkPositionWithEventLoop, this)), this.$element = n(i), this.affixed = this.unpin = null, this.checkPosition()
    },
    i;
  t.RESET = "affix affix-top affix-bottom", t.DEFAULTS = {
    offset: 0
  }, t.prototype.checkPositionWithEventLoop = function() {
    setTimeout(n.proxy(this.checkPosition, this), 1)
  }, t.prototype.checkPosition = function() {
    var i;
    if (this.$element.is(":visible")) {
      var s = n(document).height(),
        e = this.$window.scrollTop(),
        o = this.$element.offset(),
        r = this.options.offset,
        f = r.top,
        u = r.bottom;
      "object" != typeof r && (u = f = r), "function" == typeof f && (f = r.top()), "function" == typeof u && (u = r.bottom()), i = null != this.unpin && e + this.unpin <= o.top ? !1 : null != u && o.top + this.$element.height() >= s - u ? "bottom" : null != f && f >= e ? "top" : !1, this.affixed !== i && (this.unpin && this.$element.css("top", ""), this.affixed = i, this.unpin = "bottom" == i ? o.top - e : null, this.$element.removeClass(t.RESET).addClass("affix" + (i ? "-" + i : "")), "bottom" == i && this.$element.offset({
        top: document.body.offsetHeight - u - this.$element.height()
      }))
    }
  }, i = n.fn.affix, n.fn.affix = function(i) {
    return this.each(function() {
      var u = n(this),
        r = u.data("bs.affix"),
        f = "object" == typeof i && i;
      r || u.data("bs.affix", r = new t(this, f)), "string" == typeof i && r[i]()
    })
  }, n.fn.affix.Constructor = t, n.fn.affix.noConflict = function() {
    return n.fn.affix = i, this
  }, n(window).on("load", function() {
    n('[data-spy="affix"]').each(function() {
      var i = n(this),
        t = i.data();
      t.offset = t.offset || {}, t.offsetBottom && (t.offset.bottom = t.offsetBottom), t.offsetTop && (t.offset.top = t.offsetTop), i.affix(t)
    })
  })
}(window.jQuery),
  function(n) {
    typeof define == "function" && define.amd ? define(["jquery"], n) : typeof exports == "object" ? n(require("jquery")) : n(jQuery)
  }(function(n) {
    function i(n) {
      return t.raw ? n : encodeURIComponent(n)
    }

    function f(n) {
      return t.raw ? n : decodeURIComponent(n)
    }

    function e(n) {
      return i(t.json ? JSON.stringify(n) : String(n))
    }

    function o(n) {
      n.indexOf('"') === 0 && (n = n.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
      try {
        return n = decodeURIComponent(n.replace(u, " ")), t.json ? JSON.parse(n) : n
      } catch (i) {}
    }

    function r(i, r) {
      var u = t.raw ? i : o(i);
      return n.isFunction(r) ? r(u) : u
    }
    var u = /\+/g,
      t = n.cookie = function(u, o, s) {
        var y, a, h, v, c, p;
        if (arguments.length > 1 && !n.isFunction(o)) return s = n.extend({}, t.defaults, s), typeof s.expires == "number" && (y = s.expires, a = s.expires = new Date, a.setTime(+a + y * 864e5)), document.cookie = [i(u), "=", e(o), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("");
        for (h = u ? undefined : {}, v = document.cookie ? document.cookie.split("; ") : [], c = 0, p = v.length; c < p; c++) {
          var w = v[c].split("="),
            b = f(w.shift()),
            l = w.join("=");
          if (u && u === b) {
            h = r(l, o);
            break
          }
          u || (l = r(l)) === undefined || (h[b] = l)
        }
        return h
      };
    t.defaults = {}, n.removeCookie = function(t, i) {
      return n.cookie(t) === undefined ? !1 : (n.cookie(t, "", n.extend({}, i, {
        expires: -1
      })), !n.cookie(t))
    }
  });
var DELL = window.DELL || {};
DELL.com = DELL.com || {}, DELL.com.GlobalNav = function(n, t) {
  function r(n, t) {
    if (t) {
      var i = n && n.indexOf("?") !== -1,
        r = i ? "&" : "?";
      n += r + t
    }
    return n
  }

  function b() {
    v = SHOP.Transactional.Breakpoint.isPhone(), y = SHOP.Transactional.Breakpoint.isTablet(), p = SHOP.Transactional.Breakpoint.isDesktop(), f = location.protocol + "//" + location.host, e = Dell.Metrics.PageMetadata.getOrCreate("COUNTRY").Content.toLowerCase(), o = Dell.Metrics.PageMetadata.getOrCreate("LANGUAGE").Content.toLowerCase(), u = f + "/" + o + "-" + e + "/", s = "api/cart/masthead", i = u + s, h = u + "cart", location.host.toLowerCase().indexOf("localhost") >= 0 && (i = location.protocol == "https:" ? "https://localhost.dell.com:44301/en-us/api/cart/masthead" : "http://localhost.dell.com:4177/en-us/api/cart/masthead");
    n(window).on("inPhoneBreakpoint", function() {
      n("html").removeClass("openNav"), n("ul.tier1 li").removeClass("open"), k()
    });
    n(window).on("inDesktopBreakpoint inTabletBreakpoint", function() {
      n("html").removeClass("openNav"), d()
    });
    n('[data-toggle~="site-menu"]').click(function() {
      n("html").toggleClass("openNav")
    }), n("header.masthead li.dropdown").click(function() {
      n(this).toggleClass("open"), n("header.masthead li.dropdown").not(this).removeClass("open"), n("#searchtermsmobile").val(""), n("li.dropdown.cart").hasClass("open") && (n("header.masthead .flyout-cart-content").hide(), n("header.masthead .saved-carts").empty())
    }), n("header.masthead li.dropdown .dropdown-menu").not(".dropdown-menu form").click(function(n) {
      n.stopPropagation()
    }), n("header.masthead li.dropdown.cart ").click(function() {
      if (n("li.dropdown.cart").hasClass("open")) {
        n(".flyout-loading").show();
        var t = n.ajax({
          dataType: "json",
          url: i,
          data: {
            savedCartsLimit: "3"
          },
          success: function(t) {
            n("header.masthead #flyout-cart-title").html(t.ActiveCarts[0].Text), n("header.masthead #flyout-cart-count").html(t.ActiveCarts[0].ItemCount), t.ActiveCarts[0].ItemCount != 1 ? n("header.masthead #flyout-cart-items").html(itemsLabel) : n("header.masthead #flyout-cart-items").html(itemLabel), n("header.masthead #flyout-cart-subtotal").html(t.ActiveCarts[0].Total), n("header.masthead #flyout-active-cart-btn").attr("href", r(t.ActiveCarts[0].Url, "~ck=mn")), t.ShowSavedCarts && n.each(t.SavedCarts, function(i, u) {
              w = itemsLabel, n("header.masthead .saved-carts").append((i == 0 ? "<hr />" : "") + (i == 0 ? '<p class="col-xs-12 col-md-12 col-lg-12 utility-text"><a href="' + r(t.SavedCartsLink.Url, "~ck=mn") + '" class="utility-links">' + t.SavedCartsLink.Text + "<\/a><\/p>" : "") + '<div class="clearfix' + (i > 0 ? " top-offset-10" : "") + '"><ul class="col-xs-12 col-md-12 col-lg-12 list-inline"><a href="' + r(u.Url, "~ck=mn") + '" class="dellmetrics-savedcart-masthead"><li><small>' + u.Text + ' <span class="text-gray">(' + u.ItemCount + " " + (u.ItemCount == 1 ? itemLabel : itemsLabel) + ")<\/span><\/small><\/li><\/a><\/ul>" + (u.Total != null ? '<ul class="col-xs-12 col-md-12 col-lg-12 list-inline"><li class="pull-left"><small>' + subtotalLabel + '<\/small><\/li><li class="pull-right"><small>' + u.Total + "<\/small><\/li><\/ul>" : "") + "<\/div>"), i++
            }), n("header.masthead #flyout-all-carts").attr("href", r(t.AllCartsLink.Url, "~ck=mn")), n("header.masthead #flyout-all-carts").html(t.AllCartsLink.Text), n("header.masthead .flyout-loading").hide(), n("header.masthead .flyout-cart-content").show()
          },
          timeout: 5e3
        }).fail(function(n, t) {
          (t == "error" || t == "timeout") && window.location.assign(h)
        })
      } else n("header.masthead .flyout-cart-content").hide(), n("header.masthead .saved-carts").empty()
    }), n('.masthead a[href="#"]').click(function(n) {
      n.preventDefault()
    }), typeof isDesktopDevice != "undefined" && isDesktopDevice && g(), typeof showTimer != "undefined" && showTimer && (n(".mb-counter-timer-sm").messagebartimer({
      end: endTime,
      start: startTime,
      callback: function(t) {
        t == 0 && n("#message-bar").hide()
      }
    }), n(".mb-counter-timer").messagebartimer({
      end: endTime,
      start: startTime,
      callback: function(t) {
        t == 0 && n("#message-bar").hide()
      }
    }))
  }

  function k() {
    n("ul.tier1 > li a").not("ul.tier2 > li a").click(function() {
      var t = n(this).closest("li");
      n("ul.tier1 li").not(t).removeClass("open"), n(t).toggleClass("open"), n("ul.tier2 > li").removeClass("open")
    }), n("ul.tier2 > li a").click(function() {
      var t = n(this).closest("li");
      n("ul.tier2 li").not(t).removeClass("open"), n(t).toggleClass("open"), n("ul.tier3").removeAttr("style")
    })
  }

  function d() {
    n("ul.tier2 li").not("ul.tier3 li").click(function() {
      var t = n(this).closest("ul.tier2"),
        u = n(this).children("ul.tier3"),
        i, r;
      n(t).removeAttr("style"), n("ul.tier3").removeAttr("style"), i = n(t).height(), r = n(u).height(), i > r ? n(u).height(i + "px") : n(t).height(r + "px")
    }), n("ul.tier2 li").not("ul.tier3 li").mouseenter(function() {
      var t = n(this).closest("ul.tier2"),
        u = n(this).children("ul.tier3"),
        i, r;
      n(t).removeAttr("style"), n("ul.tier3").removeAttr("style"), i = n(t).height(), r = n(u).height(), i > r ? n(u).height(i + "px") : n(t).height(r + "px")
    }), n("ul.tier2 li").not("ul.tier3 li").mouseleave(function() {
      var t = n(this).closest("ul.tier2");
      n(t).removeAttr("style")
    })
  }

  function g() {
    if (window.location.href.indexOf("cart") >= 0) {
      n(".opt-in-out").css("cssText", "display: none !important;");
      return
    }
    var t = n.cookie("StpOptIn");
    (t == null || t == "p") && setTimeout(function() {
      n(".opt-in-out").slideDown("slow", function() {}), n(".opt-in-close").click(function() {
        nt()
      }), n(".opt-out-close").click(function() {
        tt()
      })
    }, 1e3)
  }

  function nt() {
    n(".opt-in-out").slideUp("slow", function() {
      n(".opt-in-out").css("cssText", "display: none !important;")
    }), n.cookie("StpOptIn", "stp", {
      expires: 86400,
      path: "/",
      domain: ".dell.com"
    })
  }

  function tt() {
    var i = n.cookie("StpOptIn"),
      t = "us/p";
    n.cookie("StpOptIn", "ng", {
      expires: 86400,
      path: "/",
      domain: ".dell.com"
    }), window.location.replace("http://dell.com/" + t)
  }

  function it(t) {
    t.addClass("countdownHolder"), n.each(["Hours", "Minutes", "Seconds"], function(i) {
      n('<span class="col-md-3 count' + this + '">').html('<span class="position">\t\t\t\t\t<span class="digit static">0<\/span>\t\t\t\t<\/span>\t\t\t\t<span class="position second-digit">\t\t\t\t\t<span class="digit static">0<\/span>\t\t\t\t<\/span>').appendTo(t), this != "Seconds" && t.append('<span class="col-md-1 countDiv countDiv' + i + '">:<\/span>')
    })
  }

  function a(t, i) {
    var u = t.find(".digit"),
      r;
    if (u.is(":animated") || t.data("digit") == i) return !1;
    t.data("digit", i), r = n("<span>", {
      "class": "digit",
      html: i
    }), u.before(r).removeClass("static").remove(), r.delay(100).addClass("static")
  }
  var v = null,
    y = null,
    p = null,
    f = null,
    e = null,
    o = null,
    u = null,
    s = null,
    i = null,
    h = null,
    w = null,
    c = 3600,
    l = 60;
  n.fn.messagebartimer = function(t) {
    function o(n, t, i) {
      a(e.eq(n), Math.floor(i / 10) % 10), a(e.eq(t), i % 10)
    }
    var r = n.extend({
        callback: function() {},
        end: 0,
        start: 0
      }, t),
      i, u, f, s, e;
    return it(this, r), e = this.find(".position"),
      function h() {
        var v = new Date,
          y = 621355968e5,
          t = y + v.getTime(),
          e = r.end / 1e4,
          p = 2592e5,
          a;
        p + t > e ? (a = i = Math.floor((e - t) / 1e3), i < 0 && (i = 0), u = Math.floor(i / c), o(0, 1, u), i -= u * c, f = Math.floor(i / l), o(2, 3, f), i -= f * l, s = i, o(4, 5, s), n(".mb-counter-labels").removeClass("hidden"), n(".message-bar-content").hasClass("col-md-11") && (n(".message-bar-timer").show(), n(".mb-counter-timer-sm").removeClass("force-hide"), n(".small-timer-divider").removeClass("force-hide"), n(".message-bar-content").removeClass("col-md-11"), n(".message-bar-content").addClass("col-md-9")), r.callback(a)) : n(".message-bar-content").hasClass("col-md-9") && (n(".message-bar-timer").hide(), n(".mb-counter-timer-sm").addClass("force-hide"), n(".small-timer-divider").addClass("force-hide"), n(".message-bar-content").removeClass("col-md-9"), n(".message-bar-content").addClass("col-md-11")), t <= e && setTimeout(h, 1e3)
      }(), this
  }, n(t).ready(function() {
    b()
  })
}(jQuery, document),
  function(n) {
    var r = [].slice,
      i = {},
      u = n.amplify = {
        publish: function(n) {
          if (typeof n != "string") throw new Error("You must provide a valid topic to publish.");
          var s = r.call(arguments, 1),
            t, u, o, f = 0,
            e;
          if (!i[n]) return !0;
          for (t = i[n].slice(), o = t.length; f < o; f++)
            if (u = t[f], e = u.callback.apply(u.context, s), e === !1) break;
          return e !== !1
        },
        subscribe: function(n, t, r, u) {
          var f, s;
          if (typeof n != "string") throw new Error("You must provide a valid topic to create a subscription.");
          arguments.length === 3 && typeof r == "number" && (u = r, r = t, t = null), arguments.length === 2 && (r = t, t = null), u = u || 10;
          for (var e = 0, h = n.split(/\s/), c = h.length, o; e < c; e++) {
            for (n = h[e], o = !1, i[n] || (i[n] = []), f = i[n].length - 1, s = {
              callback: r,
              context: t,
              priority: u
            }; f >= 0; f--)
              if (i[n][f].priority <= u) {
                i[n].splice(f + 1, 0, s), o = !0;
                break
              }
            o || i[n].unshift(s)
          }
          return r
        },
        unsubscribe: function(n, t, r) {
          if (typeof n != "string") throw new Error("You must provide a valid topic to remove a subscription.");
          if (arguments.length === 2 && (r = t, t = null), i[n])
            for (var f = i[n].length, u = 0; u < f; u++) i[n][u].callback === r && (t && i[n][u].context !== t || (i[n].splice(u, 1), u--, f--))
        }
      }
  }(this),
  function(n, t) {
    function f(n, r) {
      i.addType(n, function(f, e, o) {
        var c, s, v, l, h = e,
          a = +new Date;
        if (!f) {
          h = {}, l = [], v = 0;
          try {
            for (f = r.length; f = r.key(v++);) u.test(f) && (s = JSON.parse(r.getItem(f)), s.expires && s.expires <= a ? l.push(f) : h[f.replace(u, "")] = s.data);
            while (f = l.pop()) r.removeItem(f)
          } catch (y) {}
          return h
        }
        if (f = "__amplify__" + f, e === t)
          if (c = r.getItem(f), s = c ? JSON.parse(c) : {
              expires: -1
            }, s.expires && s.expires <= a) r.removeItem(f);
          else return s.data;
        else if (e === null) r.removeItem(f);
        else {
          s = JSON.stringify({
            data: e,
            expires: o.expires ? a + o.expires : null
          });
          try {
            r.setItem(f, s)
          } catch (y) {
            i[n]();
            try {
              r.setItem(f, s)
            } catch (y) {
              throw i.error();
            }
          }
        }
        return h
      })
    }
    var i = n.store = function(n, t, r) {
        var u = i.type;
        return r && r.type && r.type in i.types && (u = r.type), i.types[u](n, t, r || {})
      },
      u, r;
    i.types = {}, i.type = null, i.addType = function(n, t) {
      i.type || (i.type = n), i.types[n] = t, i[n] = function(t, r, u) {
        return u = u || {}, u.type = n, i(t, r, u)
      }
    }, i.error = function() {
      return "amplify.store quota exceeded"
    }, u = /^__amplify__/;
    for (r in {
      localStorage: 1,
      sessionStorage: 1
    }) try {
      window[r].setItem("__amplify__", "x"), window[r].removeItem("__amplify__"), f(r, window[r])
    } catch (e) {}
    if (!i.types.localStorage && window.globalStorage) try {
      f("globalStorage", window.globalStorage[window.location.hostname]), i.type === "sessionStorage" && (i.type = "globalStorage")
    } catch (e) {}(function() {
      if (!i.types.localStorage) {
        var n = document.createElement("div"),
          r = "amplify";
        n.style.display = "none", document.getElementsByTagName("head")[0].appendChild(n);
        try {
          n.addBehavior("#default#userdata"), n.load(r)
        } catch (u) {
          n.parentNode.removeChild(n);
          return
        }
        i.addType("userData", function(u, f, e) {
          n.load(r);
          var s, o, h, v, l, c = f,
            a = +new Date;
          if (!u) {
            for (c = {}, l = [], v = 0; s = n.XMLDocument.documentElement.attributes[v++];) o = JSON.parse(s.value), o.expires && o.expires <= a ? l.push(s.name) : c[s.name] = o.data;
            while (u = l.pop()) n.removeAttribute(u);
            return n.save(r), c
          }
          if (u = u.replace(/[^\-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g, "-"), u = u.replace(/^-/, "_-"), f === t)
            if (s = n.getAttribute(u), o = s ? JSON.parse(s) : {
                expires: -1
              }, o.expires && o.expires <= a) n.removeAttribute(u);
            else return o.data;
          else f === null ? n.removeAttribute(u) : (h = n.getAttribute(u), o = JSON.stringify({
            data: f,
            expires: e.expires ? a + e.expires : null
          }), n.setAttribute(u, o));
          try {
            n.save(r)
          } catch (y) {
            h === null ? n.removeAttribute(u) : n.setAttribute(u, h), i.userData();
            try {
              n.setAttribute(u, o), n.save(r)
            } catch (y) {
              h === null ? n.removeAttribute(u) : n.setAttribute(u, h);
              throw i.error();
            }
          }
          return c
        })
      }
    })(),
      function() {
        function u(n) {
          return n === t ? t : JSON.parse(JSON.stringify(n))
        }
        var n = {},
          r = {};
        i.addType("memory", function(i, f, e) {
          return i ? f === t ? u(n[i]) : (r[i] && (clearTimeout(r[i]), delete r[i]), f === null) ? (delete n[i], null) : (n[i] = f, e.expires && (r[i] = setTimeout(function() {
            delete n[i], delete r[i]
          }, e.expires)), f) : u(n)
        })
      }()
  }(this.amplify = this.amplify || {}),
  function(n) {
    "use strict";

    function i() {}

    function u(n) {
      return {}.toString.call(n) === "[object Function]"
    }

    function r(n) {
      var t = !1;
      return setTimeout(function() {
        t = !0
      }, 1),
        function() {
          var i = this,
            r = arguments;
          t ? n.apply(i, r) : setTimeout(function() {
            n.apply(i, r)
          }, 1)
        }
    }
    n.request = function(t, f, e) {
      var o = t || {};
      typeof o == "string" && (u(f) && (e = f, f = {}), o = {
        resourceId: t,
        data: f || {},
        success: e
      });
      var s = {
          abort: i
        },
        h = n.request.resources[o.resourceId],
        c = o.success || i,
        l = o.error || i;
      if (o.success = r(function(t, i) {
          i = i || "success", n.publish("request.success", o, t, i), n.publish("request.complete", o, t, i), c(t, i)
        }), o.error = r(function(t, i) {
          i = i || "error", n.publish("request.error", o, t, i), n.publish("request.complete", o, t, i), l(t, i)
        }), !h) {
        if (!o.resourceId) throw "amplify.request: no resourceId provided";
        throw "amplify.request: unknown resourceId: " + o.resourceId;
      }
      if (!n.publish("request.before", o)) {
        o.error(null, "abort");
        return
      }
      return n.request.resources[o.resourceId](o, s), s
    }, n.request.types = {}, n.request.resources = {}, n.request.define = function(t, i, r) {
      if (typeof i == "string") {
        if (!(i in n.request.types)) throw "amplify.request.define: unknown type: " + i;
        r.resourceId = t, n.request.resources[t] = n.request.types[i](r)
      } else n.request.resources[t] = i
    }
  }(amplify),
  function(n, t, i) {
    "use strict";
    var u = ["status", "statusText", "responseText", "responseXML", "readyState"],
      f = /\{([^\}]+)\}/g,
      r;
    n.request.types.ajax = function(r) {
      return r = t.extend({
        type: "GET"
      }, r),
        function(f, e) {
          var h, c, v = r.url,
            a = e.abort,
            o = t.extend(!0, {}, r, {
              data: f.data
            }),
            l = !1,
            s = {
              readyState: 0,
              setRequestHeader: function(n, t) {
                return h.setRequestHeader(n, t)
              },
              getAllResponseHeaders: function() {
                return h.getAllResponseHeaders()
              },
              getResponseHeader: function(n) {
                return h.getResponseHeader(n)
              },
              overrideMimeType: function(n) {
                return h.overrideMimeType(n)
              },
              abort: function() {
                l = !0;
                try {
                  h.abort()
                } catch (n) {}
                c(null, "abort")
              },
              success: function(n, t) {
                f.success(n, t)
              },
              error: function(n, t) {
                f.error(n, t)
              }
            };
          c = function(n, r) {
            t.each(u, function(n, t) {
              try {
                s[t] = h[t]
              } catch (i) {}
            }), /OK$/.test(s.statusText) && (s.statusText = "success"), n === i && (n = null), l && (r = "abort"), /timeout|error|abort/.test(r) ? s.error(n, r) : s.success(n, r), c = t.noop
          }, n.publish("request.ajax.preprocess", r, f, o, s), t.extend(o, {
            isJSONP: function() {
              return /jsonp/gi.test(this.dataType)
            },
            cacheURL: function() {
              var n, t;
              return this.isJSONP() ? (n = "callback", this.hasOwnProperty("jsonp") && (this.jsonp !== !1 ? n = this.jsonp : this.hasOwnProperty("jsonpCallback") && (n = this.jsonpCallback)), t = new RegExp("&?" + n + "=[^&]*&?", "gi"), this.url.replace(t, "")) : this.url
            },
            success: function(n, t) {
              c(n, t)
            },
            error: function(n, t) {
              c(null, t)
            },
            beforeSend: function(t, i) {
              h = t, o = i;
              var u = r.beforeSend ? r.beforeSend.call(this, s, o) : !0;
              return u && n.publish("request.before.ajax", r, f, o, s)
            }
          }), o.cache && o.isJSONP() && t.extend(o, {
            cache: !0
          }), t.ajax(o), e.abort = function() {
            s.abort(), a.call(this)
          }
        }
    }, n.subscribe("request.ajax.preprocess", function(n, i, r) {
      var e = [],
        u = r.data;
      typeof u != "string" && (u = t.extend(!0, {}, n.data, u), r.url = r.url.replace(f, function(n, t) {
        if (t in u) return e.push(t), u[t]
      }), t.each(e, function(n, t) {
        delete u[t]
      }), r.data = u)
    }), n.subscribe("request.ajax.preprocess", function(n, i, r) {
      var u = r.data,
        f = n.dataMap;
      f && typeof u != "string" && (t.isFunction(f) ? r.data = f(u) : (t.each(n.dataMap, function(n, t) {
        n in u && (u[t] = u[n], delete u[n])
      }), r.data = u))
    }), r = n.request.cache = {
      _key: function(n, t, i) {
        function e() {
          return i.charCodeAt(r++) << 24 | i.charCodeAt(r++) << 16 | i.charCodeAt(r++) << 8 | i.charCodeAt(r++) << 0
        }
        var f, r, u;
        for (i = t + i, f = i.length, r = 0, u = e(); r < f;) u ^= e();
        return "request-" + n + "-" + u
      },
      _default: function() {
        var n = {};
        return function(t, i, u, f) {
          var e = r._key(i.resourceId, u.cacheURL(), u.data),
            o = t.cache,
            s;
          if (e in n) return f.success(n[e]), !1;
          s = f.success, f.success = function(t) {
            n[e] = t, typeof o == "number" && setTimeout(function() {
              delete n[e]
            }, o), s.apply(this, arguments)
          }
        }
      }()
    }, n.store && (t.each(n.store.types, function(t) {
      r[t] = function(i, u, f, e) {
        var o = r._key(u.resourceId, f.cacheURL(), f.data),
          s = n.store[t](o),
          h;
        if (s) return f.success(s), !1;
        h = e.success, e.success = function(r) {
          n.store[t](o, r, {
            expires: i.cache.expires
          }), h.apply(this, arguments)
        }
      }
    }), r.persist = r[n.store.type]), n.subscribe("request.before.ajax", function(n) {
      var t = n.cache;
      if (t) return t = t.type || t, r[t in r ? t : "_default"].apply(this, arguments)
    }), n.request.decoders = {
      jsend: function(n, t, i, r, u) {
        n.status === "success" ? r(n.data) : n.status === "fail" ? u(n.data, "fail") : n.status === "error" ? (delete n.status, u(n, "error")) : u(null, "error")
      }
    }, n.subscribe("request.before.ajax", function(i, r, u, f) {
      function o(n, t) {
        h(n, t)
      }

      function s(n, t) {
        c(n, t)
      }
      var h = f.success,
        c = f.error,
        e = t.isFunction(i.decoder) ? i.decoder : i.decoder in n.request.decoders ? n.request.decoders[i.decoder] : n.request.decoders._default;
      e && (f.success = function(n, t) {
        e(n, t, f, o, s)
      }, f.error = function(n, t) {
        e(n, t, f, o, s)
      })
    })
  }(amplify, jQuery), $(function() {
  DELL.footerJSCode = {
    categoryParameter: null,
    init: function() {
      return typeof Storage != "undefined" && (!window.sessionStorage.getItem("showwelcomebar") || window.sessionStorage.getItem("showwelcomebar") !== "true" || this.methods.showWelcome()), this
    },
    methods: {
      transformResult: function(n, t) {
        n = JSON.parse(n);
        return {
          suggestions: $.map(n.Suggestions, function(n) {
            return {
              value: n.Label ? n.Label : n.Term,
              data: {
                item: n,
                query: t
              }
            }
          })
        }
      },
      submitSearch: function(n) {
        var u = DELL.footerJSCode.categoryParameter,
          i = n.data.item.Path,
          r = "ac",
          t = "";
        t = SHOP.Transactional.Breakpoint.isTablet() || SHOP.Transactional.Breakpoint.isDesktop() ? ".nonmobile-search form.mh-searchform" : ".mobile-search form.mh-searchform", i && i.length > 0 && (r = i == u ? "acsw" : "accat", $("<input>").attr({
          type: "hidden",
          name: "qc",
          value: i
        }).appendTo(t)), $("<input>").attr({
          type: "hidden",
          name: "ref",
          value: r
        }).appendTo(t), $(t).submit()
      },
      showWelcome: function() {
        $(document).scrollTop(0);
        var n = this;
        return setTimeout(function() {
          $(".welcome").slideDown({
            duration: 1e3,
            easing: "linear",
            complete: n.hideWelcome()
          })
        }, 250), this
      },
      hideWelcome: function() {
        var n = this;
        return setTimeout(function() {
          $(".welcome").slideUp({
            duration: "slow",
            easing: "linear",
            complete: n.removeWelcome()
          })
        }, 3e3), this
      },
      removeWelcome: function() {
        return typeof Storage != "undefined" && window.sessionStorage.removeItem("showwelcomebar"), this
      }
    }
  }, DELL.footerJSCode.init()
})