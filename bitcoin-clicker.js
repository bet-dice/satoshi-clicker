;(function(){
var k, aa = this;
function l(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
function ca(a) {
  return "string" == typeof a;
}
var da = "closure_uid_" + (1E9 * Math.random() >>> 0), ea = 0;
function fa(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = c.slice();
    b.push.apply(b, arguments);
    return a.apply(this, b);
  };
}
;function ga(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}
function ha(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase();
  });
}
function ia(a) {
  var b = ca(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
  return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
    return b + e.toUpperCase();
  });
}
;var ja = Array.prototype, ka = ja.indexOf ? function(a, b, c) {
  return ja.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (ca(a)) {
    return ca(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return-1;
};
var la;
a: {
  var ma = aa.navigator;
  if (ma) {
    var ra = ma.userAgent;
    if (ra) {
      la = ra;
      break a;
    }
  }
  la = "";
}
function sa(a) {
  return-1 != la.indexOf(a);
}
;var va = sa("Opera") || sa("OPR"), wa = sa("Trident") || sa("MSIE"), xa = sa("Gecko") && -1 == la.toLowerCase().indexOf("webkit") && !(sa("Trident") || sa("MSIE")), ya = -1 != la.toLowerCase().indexOf("webkit");
function za() {
  var a = aa.document;
  return a ? a.documentMode : void 0;
}
var Aa = function() {
  var a = "", b;
  if (va && aa.opera) {
    return a = aa.opera.version, "function" == l(a) ? a() : a;
  }
  xa ? b = /rv\:([^\);]+)(\)|;)/ : wa ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : ya && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(la)) ? a[1] : "");
  return wa && (b = za(), b > parseFloat(a)) ? String(b) : a;
}(), Ba = {};
function Ca(a) {
  var b;
  if (!(b = Ba[a])) {
    b = 0;
    for (var c = String(Aa).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), h = 0;0 == b && h < e;h++) {
      var f = c[h] || "", g = d[h] || "", m = RegExp("(\\d*)(\\D*)", "g"), p = RegExp("(\\d*)(\\D*)", "g");
      do {
        var n = m.exec(f) || ["", "", ""], q = p.exec(g) || ["", "", ""];
        if (0 == n[0].length && 0 == q[0].length) {
          break;
        }
        b = ga(0 == n[1].length ? 0 : parseInt(n[1], 10), 0 == q[1].length ? 0 : parseInt(q[1], 10)) || ga(0 == n[2].length, 0 == q[2].length) || ga(n[2], q[2]);
      } while (0 == b);
    }
    b = Ba[a] = 0 <= b;
  }
  return b;
}
var Da = aa.document, Ea = Da && wa ? za() || ("CSS1Compat" == Da.compatMode ? parseInt(Aa, 10) : 5) : void 0;
!xa && !wa || wa && wa && 9 <= Ea || xa && Ca("1.9.1");
wa && Ca("9");
function Fa(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function r(a) {
  var b = document;
  return ca(a) ? b.getElementById(a) : a;
}
function Ga(a, b) {
  var c = b || document;
  return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : Ha(a, b);
}
function Ia(a, b) {
  var c = b || document, d = null;
  return(d = c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : Ha(a, b)[0]) || null;
}
function Ha(a, b) {
  var c, d, e, h;
  c = document;
  c = b || c;
  if (c.querySelectorAll && c.querySelector && a) {
    return c.querySelectorAll("" + (a ? "." + a : ""));
  }
  if (a && c.getElementsByClassName) {
    var f = c.getElementsByClassName(a);
    return f;
  }
  f = c.getElementsByTagName("*");
  if (a) {
    h = {};
    for (d = e = 0;c = f[d];d++) {
      var g = c.className, m;
      if (m = "function" == typeof g.split) {
        m = 0 <= ka(g.split(/\s+/), a);
      }
      m && (h[e++] = c);
    }
    h.length = e;
    return h;
  }
  return f;
}
function Ja(a, b) {
  Fa(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in Ka ? a.setAttribute(Ka[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b;
  });
}
var Ka = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
function s(a, b) {
  if ("textContent" in a) {
    a.textContent = b;
  } else {
    if (3 == a.nodeType) {
      a.data = b;
    } else {
      if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (;a.lastChild != a.firstChild;) {
          a.removeChild(a.lastChild);
        }
        a.firstChild.data = b;
      } else {
        for (var c;c = a.firstChild;) {
          a.removeChild(c);
        }
        a.appendChild((9 == a.nodeType ? a : a.ownerDocument || a.document).createTextNode(String(b)));
      }
    }
  }
}
;function La(a, b) {
  null != a && this.append.apply(this, arguments);
}
La.prototype.Wa = "";
La.prototype.append = function(a, b, c) {
  this.Wa += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.Wa += arguments[d];
    }
  }
  return this;
};
La.prototype.toString = function() {
  return this.Wa;
};
var Ma = null;
function Oa() {
  return new Pa(null, 5, [Qa, !0, Ta, !0, Ua, !1, Va, !1, Wa, null], null);
}
function t(a) {
  return null != a && !1 !== a;
}
function Xa(a) {
  return t(a) ? !1 : !0;
}
function y(a, b) {
  return a[l(null == b ? null : b)] ? !0 : a._ ? !0 : B ? !1 : null;
}
function Ya(a) {
  return null == a ? null : a.constructor;
}
function C(a, b) {
  var c = Ya(b), c = t(t(c) ? c.mb : c) ? c.lb : l(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function Za(a) {
  var b = a.lb;
  return t(b) ? b : "" + D.a(a);
}
function $a(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var jb = {}, kb = {};
function sb(a) {
  if (a ? a.N : a) {
    return a.N(a);
  }
  var b;
  b = sb[l(null == a ? null : a)];
  if (!b && (b = sb._, !b)) {
    throw C("ICounted.-count", a);
  }
  return b.call(null, a);
}
function tb(a) {
  if (a ? a.P : a) {
    return a.P(a);
  }
  var b;
  b = tb[l(null == a ? null : a)];
  if (!b && (b = tb._, !b)) {
    throw C("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
function ub(a, b) {
  if (a ? a.M : a) {
    return a.M(a, b);
  }
  var c;
  c = ub[l(null == a ? null : a)];
  if (!c && (c = ub._, !c)) {
    throw C("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var vb = {}, E = function() {
  function a(a, b, c) {
    if (a ? a.ea : a) {
      return a.ea(a, b, c);
    }
    var f;
    f = E[l(null == a ? null : a)];
    if (!f && (f = E._, !f)) {
      throw C("IIndexed.-nth", a);
    }
    return f.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.u : a) {
      return a.u(a, b);
    }
    var c;
    c = E[l(null == a ? null : a)];
    if (!c && (c = E._, !c)) {
      throw C("IIndexed.-nth", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.d = a;
  return c;
}(), wb = {};
function xb(a) {
  if (a ? a.V : a) {
    return a.V(a);
  }
  var b;
  b = xb[l(null == a ? null : a)];
  if (!b && (b = xb._, !b)) {
    throw C("ISeq.-first", a);
  }
  return b.call(null, a);
}
function yb(a) {
  if (a ? a.X : a) {
    return a.X(a);
  }
  var b;
  b = yb[l(null == a ? null : a)];
  if (!b && (b = yb._, !b)) {
    throw C("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var zb = {}, Ab = {}, Bb = function() {
  function a(a, b, c) {
    if (a ? a.L : a) {
      return a.L(a, b, c);
    }
    var f;
    f = Bb[l(null == a ? null : a)];
    if (!f && (f = Bb._, !f)) {
      throw C("ILookup.-lookup", a);
    }
    return f.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.K : a) {
      return a.K(a, b);
    }
    var c;
    c = Bb[l(null == a ? null : a)];
    if (!c && (c = Bb._, !c)) {
      throw C("ILookup.-lookup", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.d = a;
  return c;
}();
function Cb(a, b) {
  if (a ? a.sb : a) {
    return a.sb(a, b);
  }
  var c;
  c = Cb[l(null == a ? null : a)];
  if (!c && (c = Cb._, !c)) {
    throw C("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function Db(a, b, c) {
  if (a ? a.Ma : a) {
    return a.Ma(a, b, c);
  }
  var d;
  d = Db[l(null == a ? null : a)];
  if (!d && (d = Db._, !d)) {
    throw C("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var Jb = {};
function Kb(a, b) {
  if (a ? a.Ya : a) {
    return a.Ya(a, b);
  }
  var c;
  c = Kb[l(null == a ? null : a)];
  if (!c && (c = Kb._, !c)) {
    throw C("IMap.-dissoc", a);
  }
  return c.call(null, a, b);
}
var Lb = {};
function Mb(a) {
  if (a ? a.xb : a) {
    return a.xb();
  }
  var b;
  b = Mb[l(null == a ? null : a)];
  if (!b && (b = Mb._, !b)) {
    throw C("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Nb(a) {
  if (a ? a.Gb : a) {
    return a.Gb();
  }
  var b;
  b = Nb[l(null == a ? null : a)];
  if (!b && (b = Nb._, !b)) {
    throw C("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var Ob = {}, Pb = {};
function Vb(a, b, c) {
  if (a ? a.yb : a) {
    return a.yb(a, b, c);
  }
  var d;
  d = Vb[l(null == a ? null : a)];
  if (!d && (d = Vb._, !d)) {
    throw C("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function Wb(a) {
  if (a ? a.wb : a) {
    return a.wb(a);
  }
  var b;
  b = Wb[l(null == a ? null : a)];
  if (!b && (b = Wb._, !b)) {
    throw C("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var Xb = {};
function Yb(a) {
  if (a ? a.G : a) {
    return a.G(a);
  }
  var b;
  b = Yb[l(null == a ? null : a)];
  if (!b && (b = Yb._, !b)) {
    throw C("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var Zb = {};
function $b(a, b) {
  if (a ? a.H : a) {
    return a.H(a, b);
  }
  var c;
  c = $b[l(null == a ? null : a)];
  if (!c && (c = $b._, !c)) {
    throw C("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var ac = {}, bc = function() {
  function a(a, b, c) {
    if (a ? a.T : a) {
      return a.T(a, b, c);
    }
    var f;
    f = bc[l(null == a ? null : a)];
    if (!f && (f = bc._, !f)) {
      throw C("IReduce.-reduce", a);
    }
    return f.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.S : a) {
      return a.S(a, b);
    }
    var c;
    c = bc[l(null == a ? null : a)];
    if (!c && (c = bc._, !c)) {
      throw C("IReduce.-reduce", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.d = a;
  return c;
}();
function gc(a, b) {
  if (a ? a.A : a) {
    return a.A(a, b);
  }
  var c;
  c = gc[l(null == a ? null : a)];
  if (!c && (c = gc._, !c)) {
    throw C("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function hc(a) {
  if (a ? a.F : a) {
    return a.F(a);
  }
  var b;
  b = hc[l(null == a ? null : a)];
  if (!b && (b = hc._, !b)) {
    throw C("IHash.-hash", a);
  }
  return b.call(null, a);
}
var ic = {};
function jc(a) {
  if (a ? a.I : a) {
    return a.I(a);
  }
  var b;
  b = jc[l(null == a ? null : a)];
  if (!b && (b = jc._, !b)) {
    throw C("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var kc = {};
function F(a, b) {
  if (a ? a.Kb : a) {
    return a.Kb(0, b);
  }
  var c;
  c = F[l(null == a ? null : a)];
  if (!c && (c = F._, !c)) {
    throw C("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var lc = {};
function mc(a, b, c) {
  if (a ? a.v : a) {
    return a.v(a, b, c);
  }
  var d;
  d = mc[l(null == a ? null : a)];
  if (!d && (d = mc._, !d)) {
    throw C("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function nc(a, b, c) {
  if (a ? a.Jb : a) {
    return a.Jb(0, b, c);
  }
  var d;
  d = nc[l(null == a ? null : a)];
  if (!d && (d = nc._, !d)) {
    throw C("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function oc(a) {
  if (a ? a.Xa : a) {
    return a.Xa(a);
  }
  var b;
  b = oc[l(null == a ? null : a)];
  if (!b && (b = oc._, !b)) {
    throw C("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function pc(a, b) {
  if (a ? a.ab : a) {
    return a.ab(a, b);
  }
  var c;
  c = pc[l(null == a ? null : a)];
  if (!c && (c = pc._, !c)) {
    throw C("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function qc(a) {
  if (a ? a.bb : a) {
    return a.bb(a);
  }
  var b;
  b = qc[l(null == a ? null : a)];
  if (!b && (b = qc._, !b)) {
    throw C("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function rc(a, b, c) {
  if (a ? a.$a : a) {
    return a.$a(a, b, c);
  }
  var d;
  d = rc[l(null == a ? null : a)];
  if (!d && (d = rc._, !d)) {
    throw C("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function sc(a, b, c) {
  if (a ? a.Ib : a) {
    return a.Ib(0, b, c);
  }
  var d;
  d = sc[l(null == a ? null : a)];
  if (!d && (d = sc._, !d)) {
    throw C("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function tc(a) {
  if (a ? a.Eb : a) {
    return a.Eb();
  }
  var b;
  b = tc[l(null == a ? null : a)];
  if (!b && (b = tc._, !b)) {
    throw C("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function I(a) {
  if (a ? a.ub : a) {
    return a.ub(a);
  }
  var b;
  b = I[l(null == a ? null : a)];
  if (!b && (b = I._, !b)) {
    throw C("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function J(a) {
  if (a ? a.vb : a) {
    return a.vb(a);
  }
  var b;
  b = J[l(null == a ? null : a)];
  if (!b && (b = J._, !b)) {
    throw C("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function uc(a) {
  if (a ? a.tb : a) {
    return a.tb(a);
  }
  var b;
  b = uc[l(null == a ? null : a)];
  if (!b && (b = uc._, !b)) {
    throw C("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function vc(a) {
  this.jc = a;
  this.o = 0;
  this.g = 1073741824;
}
vc.prototype.Kb = function(a, b) {
  return this.jc.append(b);
};
function wc(a) {
  var b = new La;
  a.v(null, new vc(b), Oa());
  return "" + D.a(b);
}
var xc = "undefined" !== typeof Math.imul && 0 !== (Math.imul.b ? Math.imul.b(4294967295, 5) : Math.imul.call(null, 4294967295, 5)) ? function(a, b) {
  return Math.imul(a, b);
} : function(a, b) {
  var c = a & 65535, d = b & 65535;
  return c * d + ((a >>> 16 & 65535) * d + c * (b >>> 16 & 65535) << 16 >>> 0) | 0;
};
function yc(a) {
  a = xc(a, 3432918353);
  return xc(a << 15 | a >>> -15, 461845907);
}
function zc(a, b) {
  var c = a ^ b;
  return xc(c << 13 | c >>> -13, 5) + 3864292196;
}
function Ac(a, b) {
  var c = a ^ b, c = xc(c ^ c >>> 16, 2246822507), c = xc(c ^ c >>> 13, 3266489909);
  return c ^ c >>> 16;
}
function Bc(a) {
  var b;
  a: {
    b = 1;
    for (var c = 0;;) {
      if (b < a.length) {
        var d = b + 2, c = zc(c, yc(a.charCodeAt(b - 1) | a.charCodeAt(b) << 16));
        b = d;
      } else {
        b = c;
        break a;
      }
    }
    b = void 0;
  }
  b = 1 === (a.length & 1) ? b ^ yc(a.charCodeAt(a.length - 1)) : b;
  return Ac(b, xc(2, a.length));
}
var Cc = {}, Dc = 0;
function Ec(a) {
  255 < Dc && (Cc = {}, Dc = 0);
  var b = Cc[a];
  if ("number" !== typeof b) {
    a: {
      if (null != a) {
        if (b = a.length, 0 < b) {
          for (var c = 0, d = 0;;) {
            if (c < b) {
              var e = c + 1, d = xc(31, d) + a.charCodeAt(c), c = e
            } else {
              b = d;
              break a;
            }
          }
          b = void 0;
        } else {
          b = 0;
        }
      } else {
        b = 0;
      }
    }
    Cc[a] = b;
    Dc += 1;
  }
  return a = b;
}
function Fc(a) {
  a && (a.g & 4194304 || a.pc) ? a = a.F(null) : "number" === typeof a ? a = Math.floor(a) % 2147483647 : !0 === a ? a = 1 : !1 === a ? a = 0 : "string" === typeof a ? (a = Ec(a), 0 !== a && (a = yc(a), a = zc(0, a), a = Ac(a, 4))) : a = null == a ? 0 : B ? hc(a) : null;
  return a;
}
function Gc(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Hc(a, b) {
  if (t(Ic.b ? Ic.b(a, b) : Ic.call(null, a, b))) {
    return 0;
  }
  var c = Xa(a.$);
  if (t(c ? b.$ : c)) {
    return-1;
  }
  if (t(a.$)) {
    if (Xa(b.$)) {
      return 1;
    }
    c = Jc.b ? Jc.b(a.$, b.$) : Jc.call(null, a.$, b.$);
    return 0 === c ? Jc.b ? Jc.b(a.name, b.name) : Jc.call(null, a.name, b.name) : c;
  }
  return Kc ? Jc.b ? Jc.b(a.name, b.name) : Jc.call(null, a.name, b.name) : null;
}
function K(a, b, c, d, e) {
  this.$ = a;
  this.name = b;
  this.La = c;
  this.Qa = d;
  this.ca = e;
  this.g = 2154168321;
  this.o = 4096;
}
k = K.prototype;
k.v = function(a, b) {
  return F(b, this.La);
};
k.F = function() {
  var a = this.Qa;
  return null != a ? a : this.Qa = a = Gc(Bc(this.name), Ec(this.$));
};
k.H = function(a, b) {
  return new K(this.$, this.name, this.La, this.Qa, b);
};
k.G = function() {
  return this.ca;
};
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Bb.d(c, this, null);
      case 3:
        return Bb.d(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat($a(b)));
};
k.a = function(a) {
  return Bb.d(a, this, null);
};
k.b = function(a, b) {
  return Bb.d(a, this, b);
};
k.A = function(a, b) {
  return b instanceof K ? this.La === b.La : !1;
};
k.toString = function() {
  return this.La;
};
function L(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.g & 8388608 || a.Zb)) {
    return a.I(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Lc(a, 0);
  }
  if (y(ic, a)) {
    return jc(a);
  }
  if (B) {
    throw Error("" + D.a(a) + " is not ISeqable");
  }
  return null;
}
function M(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.g & 64 || a.Za)) {
    return a.V(null);
  }
  a = L(a);
  return null == a ? null : xb(a);
}
function N(a) {
  return null != a ? a && (a.g & 64 || a.Za) ? a.X(null) : (a = L(a)) ? yb(a) : Mc : Mc;
}
function O(a) {
  return null == a ? null : a && (a.g & 128 || a.Hb) ? a.aa(null) : L(N(a));
}
var Ic = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || gc(a, b);
  }
  var b = null, c = function() {
    function a(b, d, g) {
      var m = null;
      2 < arguments.length && (m = Q(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, m);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.b(a, d)) {
          if (O(e)) {
            a = d, d = M(e), e = O(e);
          } else {
            return b.b(d, M(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.p = 2;
    a.l = function(a) {
      var b = M(a);
      a = O(a);
      var d = M(a);
      a = N(a);
      return c(b, d, a);
    };
    a.f = c;
    return a;
  }(), b = function(b, e, h) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.f(b, e, Q(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 2;
  b.l = c.l;
  b.a = function() {
    return!0;
  };
  b.b = a;
  b.f = c.f;
  return b;
}();
function Nc(a, b) {
  var c = yc(a), c = zc(0, c);
  return Ac(c, b);
}
function Oc(a) {
  var b = 0, c = 1;
  for (a = L(a);;) {
    if (null != a) {
      b += 1, c = xc(31, c) + Fc(M(a)) | 0, a = O(a);
    } else {
      return Nc(c, b);
    }
  }
}
function Pc(a) {
  var b = 0, c = 0;
  for (a = L(a);;) {
    if (null != a) {
      b += 1, c = c + Fc(M(a)) | 0, a = O(a);
    } else {
      return Nc(c, b);
    }
  }
}
kb["null"] = !0;
sb["null"] = function() {
  return 0;
};
Date.prototype.A = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
gc.number = function(a, b) {
  return a === b;
};
Xb["function"] = !0;
Yb["function"] = function() {
  return null;
};
jb["function"] = !0;
hc._ = function(a) {
  return a[da] || (a[da] = ++ea);
};
var Qc = function() {
  function a(a, b, c, d) {
    for (var m = sb(a);;) {
      if (d < m) {
        c = b.b ? b.b(c, E.b(a, d)) : b.call(null, c, E.b(a, d)), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = sb(a), m = 0;;) {
      if (m < d) {
        c = b.b ? b.b(c, E.b(a, m)) : b.call(null, c, E.b(a, m)), m += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = sb(a);
    if (0 === c) {
      return b.i ? b.i() : b.call(null);
    }
    for (var d = E.b(a, 0), m = 1;;) {
      if (m < c) {
        d = b.b ? b.b(d, E.b(a, m)) : b.call(null, d, E.b(a, m)), m += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, h, f, g) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, f);
      case 4:
        return a.call(this, d, h, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.d = b;
  d.k = a;
  return d;
}(), Rc = function() {
  function a(a, b, c, d) {
    for (var m = a.length;;) {
      if (d < m) {
        c = b.b ? b.b(c, a[d]) : b.call(null, c, a[d]), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = a.length, m = 0;;) {
      if (m < d) {
        c = b.b ? b.b(c, a[m]) : b.call(null, c, a[m]), m += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if (0 === a.length) {
      return b.i ? b.i() : b.call(null);
    }
    for (var d = a[0], m = 1;;) {
      if (m < c) {
        d = b.b ? b.b(d, a[m]) : b.call(null, d, a[m]), m += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, h, f, g) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, f);
      case 4:
        return a.call(this, d, h, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.d = b;
  d.k = a;
  return d;
}();
function Sc(a) {
  return a ? a.g & 2 || a.Rb ? !0 : a.g ? !1 : y(kb, a) : y(kb, a);
}
function Tc(a) {
  return a ? a.g & 16 || a.Fb ? !0 : a.g ? !1 : y(vb, a) : y(vb, a);
}
function Lc(a, b) {
  this.c = a;
  this.n = b;
  this.g = 166199550;
  this.o = 8192;
}
k = Lc.prototype;
k.toString = function() {
  return wc(this);
};
k.u = function(a, b) {
  var c = b + this.n;
  return c < this.c.length ? this.c[c] : null;
};
k.ea = function(a, b, c) {
  a = b + this.n;
  return a < this.c.length ? this.c[a] : c;
};
k.aa = function() {
  return this.n + 1 < this.c.length ? new Lc(this.c, this.n + 1) : null;
};
k.N = function() {
  return this.c.length - this.n;
};
k.F = function() {
  return Oc(this);
};
k.A = function(a, b) {
  return Uc.b ? Uc.b(this, b) : Uc.call(null, this, b);
};
k.P = function() {
  return Mc;
};
k.S = function(a, b) {
  return Rc.k(this.c, b, this.c[this.n], this.n + 1);
};
k.T = function(a, b, c) {
  return Rc.k(this.c, b, c, this.n);
};
k.V = function() {
  return this.c[this.n];
};
k.X = function() {
  return this.n + 1 < this.c.length ? new Lc(this.c, this.n + 1) : Mc;
};
k.I = function() {
  return this;
};
k.M = function(a, b) {
  return R.b ? R.b(b, this) : R.call(null, b, this);
};
var Vc = function() {
  function a(a, b) {
    return b < a.length ? new Lc(a, b) : null;
  }
  function b(a) {
    return c.b(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), Q = function() {
  function a(a, b) {
    return Vc.b(a, b);
  }
  function b(a) {
    return Vc.b(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
gc._ = function(a, b) {
  return a === b;
};
var Wc = function() {
  function a(a, b) {
    return null != a ? ub(a, b) : ub(Mc, b);
  }
  var b = null, c = function() {
    function a(b, d, g) {
      var m = null;
      2 < arguments.length && (m = Q(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, m);
    }
    function c(a, d, e) {
      for (;;) {
        if (t(e)) {
          a = b.b(a, d), d = M(e), e = O(e);
        } else {
          return b.b(a, d);
        }
      }
    }
    a.p = 2;
    a.l = function(a) {
      var b = M(a);
      a = O(a);
      var d = M(a);
      a = N(a);
      return c(b, d, a);
    };
    a.f = c;
    return a;
  }(), b = function(b, e, h) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.f(b, e, Q(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 2;
  b.l = c.l;
  b.b = a;
  b.f = c.f;
  return b;
}();
function S(a) {
  if (null != a) {
    if (a && (a.g & 2 || a.Rb)) {
      a = a.N(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (y(kb, a)) {
            a = sb(a);
          } else {
            if (B) {
              a: {
                a = L(a);
                for (var b = 0;;) {
                  if (Sc(a)) {
                    a = b + sb(a);
                    break a;
                  }
                  a = O(a);
                  b += 1;
                }
                a = void 0;
              }
            } else {
              a = null;
            }
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
var Xc = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return L(a) ? M(a) : c;
      }
      if (Tc(a)) {
        return E.d(a, b, c);
      }
      if (L(a)) {
        a = O(a), b -= 1;
      } else {
        return B ? c : null;
      }
    }
  }
  function b(a, b) {
    for (;;) {
      if (null == a) {
        throw Error("Index out of bounds");
      }
      if (0 === b) {
        if (L(a)) {
          return M(a);
        }
        throw Error("Index out of bounds");
      }
      if (Tc(a)) {
        return E.b(a, b);
      }
      if (L(a)) {
        var c = O(a), f = b - 1;
        a = c;
        b = f;
      } else {
        if (B) {
          throw Error("Index out of bounds");
        }
        return null;
      }
    }
  }
  var c = null, c = function(c, e, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.d = a;
  return c;
}(), Yc = function() {
  function a(a, b, c) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number.");
    }
    if (null == a) {
      return c;
    }
    if (a && (a.g & 16 || a.Fb)) {
      return a.ea(null, b, c);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : c;
    }
    if (y(vb, a)) {
      return E.b(a, b);
    }
    if (a ? a.g & 64 || a.Za || (a.g ? 0 : y(wb, a)) : y(wb, a)) {
      return Xc.d(a, b, c);
    }
    if (B) {
      throw Error("nth not supported on this type " + D.a(Za(Ya(a))));
    }
    return null;
  }
  function b(a, b) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number");
    }
    if (null == a) {
      return a;
    }
    if (a && (a.g & 16 || a.Fb)) {
      return a.u(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (y(vb, a)) {
      return E.b(a, b);
    }
    if (a ? a.g & 64 || a.Za || (a.g ? 0 : y(wb, a)) : y(wb, a)) {
      return Xc.b(a, b);
    }
    if (B) {
      throw Error("nth not supported on this type " + D.a(Za(Ya(a))));
    }
    return null;
  }
  var c = null, c = function(c, e, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.d = a;
  return c;
}(), Zc = function() {
  function a(a, b, c) {
    return null != a ? a && (a.g & 256 || a.Tb) ? a.L(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : y(Ab, a) ? Bb.d(a, b, c) : B ? c : null : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.g & 256 || a.Tb) ? a.K(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : y(Ab, a) ? Bb.b(a, b) : null;
  }
  var c = null, c = function(c, e, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.d = a;
  return c;
}(), ad = function() {
  function a(a, b, c) {
    return null != a ? Db(a, b, c) : $c.b ? $c.b([b], [c]) : $c.call(null, [b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, g, m) {
      var p = null;
      3 < arguments.length && (p = Q(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, g, p);
    }
    function c(a, d, e, m) {
      for (;;) {
        if (a = b.d(a, d, e), t(m)) {
          d = M(m), e = M(O(m)), m = O(O(m));
        } else {
          return a;
        }
      }
    }
    a.p = 3;
    a.l = function(a) {
      var b = M(a);
      a = O(a);
      var d = M(a);
      a = O(a);
      var m = M(a);
      a = N(a);
      return c(b, d, m, a);
    };
    a.f = c;
    return a;
  }(), b = function(b, e, h, f) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, h);
      default:
        return c.f(b, e, h, Q(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 3;
  b.l = c.l;
  b.d = a;
  b.f = c.f;
  return b;
}(), bd = function() {
  function a(a, b) {
    return null == a ? null : Kb(a, b);
  }
  var b = null, c = function() {
    function a(b, d, g) {
      var m = null;
      2 < arguments.length && (m = Q(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, m);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.b(a, d);
        if (t(e)) {
          d = M(e), e = O(e);
        } else {
          return a;
        }
      }
    }
    a.p = 2;
    a.l = function(a) {
      var b = M(a);
      a = O(a);
      var d = M(a);
      a = N(a);
      return c(b, d, a);
    };
    a.f = c;
    return a;
  }(), b = function(b, e, h) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.f(b, e, Q(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 2;
  b.l = c.l;
  b.a = function(a) {
    return a;
  };
  b.b = a;
  b.f = c.f;
  return b;
}();
function gd(a) {
  var b = "function" == l(a);
  return b ? b : a ? t(t(null) ? null : a.Qb) ? !0 : a.vc ? !1 : y(jb, a) : y(jb, a);
}
function hd(a, b) {
  this.e = a;
  this.j = b;
  this.o = 0;
  this.g = 393217;
}
k = hd.prototype;
k.call = function() {
  var a = null;
  return a = function(a, c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H, G, P, ba, W, Na) {
    switch(arguments.length) {
      case 1:
        var u = a, u = this;
        return u.e.i ? u.e.i() : u.e.call(null);
      case 2:
        return u = a, u = this, u.e.a ? u.e.a(c) : u.e.call(null, c);
      case 3:
        return u = a, u = this, u.e.b ? u.e.b(c, d) : u.e.call(null, c, d);
      case 4:
        return u = a, u = this, u.e.d ? u.e.d(c, d, e) : u.e.call(null, c, d, e);
      case 5:
        return u = a, u = this, u.e.k ? u.e.k(c, d, e, h) : u.e.call(null, c, d, e, h);
      case 6:
        return u = a, u = this, u.e.D ? u.e.D(c, d, e, h, f) : u.e.call(null, c, d, e, h, f);
      case 7:
        return u = a, u = this, u.e.W ? u.e.W(c, d, e, h, f, g) : u.e.call(null, c, d, e, h, f, g);
      case 8:
        return u = a, u = this, u.e.da ? u.e.da(c, d, e, h, f, g, m) : u.e.call(null, c, d, e, h, f, g, m);
      case 9:
        return u = a, u = this, u.e.Ha ? u.e.Ha(c, d, e, h, f, g, m, p) : u.e.call(null, c, d, e, h, f, g, m, p);
      case 10:
        return u = a, u = this, u.e.Ia ? u.e.Ia(c, d, e, h, f, g, m, p, n) : u.e.call(null, c, d, e, h, f, g, m, p, n);
      case 11:
        return u = a, u = this, u.e.wa ? u.e.wa(c, d, e, h, f, g, m, p, n, q) : u.e.call(null, c, d, e, h, f, g, m, p, n, q);
      case 12:
        return u = a, u = this, u.e.xa ? u.e.xa(c, d, e, h, f, g, m, p, n, q, w) : u.e.call(null, c, d, e, h, f, g, m, p, n, q, w);
      case 13:
        return u = a, u = this, u.e.ya ? u.e.ya(c, d, e, h, f, g, m, p, n, q, w, x) : u.e.call(null, c, d, e, h, f, g, m, p, n, q, w, x);
      case 14:
        return u = a, u = this, u.e.za ? u.e.za(c, d, e, h, f, g, m, p, n, q, w, x, v) : u.e.call(null, c, d, e, h, f, g, m, p, n, q, w, x, v);
      case 15:
        return u = a, u = this, u.e.Aa ? u.e.Aa(c, d, e, h, f, g, m, p, n, q, w, x, v, z) : u.e.call(null, c, d, e, h, f, g, m, p, n, q, w, x, v, z);
      case 16:
        return u = a, u = this, u.e.Ba ? u.e.Ba(c, d, e, h, f, g, m, p, n, q, w, x, v, z, A) : u.e.call(null, c, d, e, h, f, g, m, p, n, q, w, x, v, z, A);
      case 17:
        return u = a, u = this, u.e.Ca ? u.e.Ca(c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H) : u.e.call(null, c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H);
      case 18:
        return u = a, u = this, u.e.Da ? u.e.Da(c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H, G) : u.e.call(null, c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H, G);
      case 19:
        return u = a, u = this, u.e.Ea ? u.e.Ea(c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H, G, P) : u.e.call(null, c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H, G, P);
      case 20:
        return u = a, u = this, u.e.Fa ? u.e.Fa(c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H, G, P, ba) : u.e.call(null, c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H, G, P, ba);
      case 21:
        return u = a, u = this, u.e.Ga ? u.e.Ga(c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H, G, P, ba, W) : u.e.call(null, c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H, G, P, ba, W);
      case 22:
        return u = a, u = this, id.Sb ? id.Sb(u.e, c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H, G, P, ba, W, Na) : id.call(null, u.e, c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H, G, P, ba, W, Na);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat($a(b)));
};
k.i = function() {
  return this.e.i ? this.e.i() : this.e.call(null);
};
k.a = function(a) {
  return this.e.a ? this.e.a(a) : this.e.call(null, a);
};
k.b = function(a, b) {
  return this.e.b ? this.e.b(a, b) : this.e.call(null, a, b);
};
k.d = function(a, b, c) {
  return this.e.d ? this.e.d(a, b, c) : this.e.call(null, a, b, c);
};
k.k = function(a, b, c, d) {
  return this.e.k ? this.e.k(a, b, c, d) : this.e.call(null, a, b, c, d);
};
k.D = function(a, b, c, d, e) {
  return this.e.D ? this.e.D(a, b, c, d, e) : this.e.call(null, a, b, c, d, e);
};
k.W = function(a, b, c, d, e, h) {
  return this.e.W ? this.e.W(a, b, c, d, e, h) : this.e.call(null, a, b, c, d, e, h);
};
k.da = function(a, b, c, d, e, h, f) {
  return this.e.da ? this.e.da(a, b, c, d, e, h, f) : this.e.call(null, a, b, c, d, e, h, f);
};
k.Ha = function(a, b, c, d, e, h, f, g) {
  return this.e.Ha ? this.e.Ha(a, b, c, d, e, h, f, g) : this.e.call(null, a, b, c, d, e, h, f, g);
};
k.Ia = function(a, b, c, d, e, h, f, g, m) {
  return this.e.Ia ? this.e.Ia(a, b, c, d, e, h, f, g, m) : this.e.call(null, a, b, c, d, e, h, f, g, m);
};
k.wa = function(a, b, c, d, e, h, f, g, m, p) {
  return this.e.wa ? this.e.wa(a, b, c, d, e, h, f, g, m, p) : this.e.call(null, a, b, c, d, e, h, f, g, m, p);
};
k.xa = function(a, b, c, d, e, h, f, g, m, p, n) {
  return this.e.xa ? this.e.xa(a, b, c, d, e, h, f, g, m, p, n) : this.e.call(null, a, b, c, d, e, h, f, g, m, p, n);
};
k.ya = function(a, b, c, d, e, h, f, g, m, p, n, q) {
  return this.e.ya ? this.e.ya(a, b, c, d, e, h, f, g, m, p, n, q) : this.e.call(null, a, b, c, d, e, h, f, g, m, p, n, q);
};
k.za = function(a, b, c, d, e, h, f, g, m, p, n, q, w) {
  return this.e.za ? this.e.za(a, b, c, d, e, h, f, g, m, p, n, q, w) : this.e.call(null, a, b, c, d, e, h, f, g, m, p, n, q, w);
};
k.Aa = function(a, b, c, d, e, h, f, g, m, p, n, q, w, x) {
  return this.e.Aa ? this.e.Aa(a, b, c, d, e, h, f, g, m, p, n, q, w, x) : this.e.call(null, a, b, c, d, e, h, f, g, m, p, n, q, w, x);
};
k.Ba = function(a, b, c, d, e, h, f, g, m, p, n, q, w, x, v) {
  return this.e.Ba ? this.e.Ba(a, b, c, d, e, h, f, g, m, p, n, q, w, x, v) : this.e.call(null, a, b, c, d, e, h, f, g, m, p, n, q, w, x, v);
};
k.Ca = function(a, b, c, d, e, h, f, g, m, p, n, q, w, x, v, z) {
  return this.e.Ca ? this.e.Ca(a, b, c, d, e, h, f, g, m, p, n, q, w, x, v, z) : this.e.call(null, a, b, c, d, e, h, f, g, m, p, n, q, w, x, v, z);
};
k.Da = function(a, b, c, d, e, h, f, g, m, p, n, q, w, x, v, z, A) {
  return this.e.Da ? this.e.Da(a, b, c, d, e, h, f, g, m, p, n, q, w, x, v, z, A) : this.e.call(null, a, b, c, d, e, h, f, g, m, p, n, q, w, x, v, z, A);
};
k.Ea = function(a, b, c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H) {
  return this.e.Ea ? this.e.Ea(a, b, c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H) : this.e.call(null, a, b, c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H);
};
k.Fa = function(a, b, c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H, G) {
  return this.e.Fa ? this.e.Fa(a, b, c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H, G) : this.e.call(null, a, b, c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H, G);
};
k.Ga = function(a, b, c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H, G, P) {
  return this.e.Ga ? this.e.Ga(a, b, c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H, G, P) : this.e.call(null, a, b, c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H, G, P);
};
k.Qb = !0;
k.H = function(a, b) {
  return new hd(this.e, b);
};
k.G = function() {
  return this.j;
};
function jd(a, b) {
  return gd(a) && !(a ? a.g & 262144 || a.uc || (a.g ? 0 : y(Zb, a)) : y(Zb, a)) ? new hd(a, b) : null == a ? null : $b(a, b);
}
function kd(a) {
  var b = null != a;
  return(b ? a ? a.g & 131072 || a.Vb || (a.g ? 0 : y(Xb, a)) : y(Xb, a) : b) ? Yb(a) : null;
}
function ld(a) {
  return null == a ? !1 : a ? a.g & 4096 || a.sc ? !0 : a.g ? !1 : y(Ob, a) : y(Ob, a);
}
function md(a) {
  return a ? a.g & 16777216 || a.rc ? !0 : a.g ? !1 : y(kc, a) : y(kc, a);
}
function nd(a) {
  return null == a ? !1 : a ? a.g & 1024 || a.qc ? !0 : a.g ? !1 : y(Jb, a) : y(Jb, a);
}
function od(a) {
  return a ? a.g & 16384 || a.tc ? !0 : a.g ? !1 : y(Pb, a) : y(Pb, a);
}
function T(a) {
  return a ? a.o & 512 || a.nc ? !0 : !1 : !1;
}
function pd(a) {
  var b = [];
  Fa(a, function(a) {
    return function(b, e) {
      return a.push(e);
    };
  }(b));
  return b;
}
function qd(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
var rd = {};
function sd(a) {
  return t(a) ? !0 : !1;
}
function td(a, b) {
  return Zc.d(a, b, rd) === rd ? !1 : !0;
}
function Jc(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (Ya(a) === Ya(b)) {
    return a && (a.o & 2048 || a.ib) ? a.jb(null, b) : a > b ? 1 : a < b ? -1 : 0;
  }
  if (B) {
    throw Error("compare on non-nil objects of different types");
  }
  return null;
}
var Gd = function() {
  function a(a, b, c, f) {
    for (;;) {
      var g = Jc(Yc.b(a, f), Yc.b(b, f));
      if (0 === g && f + 1 < c) {
        f += 1;
      } else {
        return g;
      }
    }
  }
  function b(a, b) {
    var h = S(a), f = S(b);
    return h < f ? -1 : h > f ? 1 : B ? c.k(a, b, h, 0) : null;
  }
  var c = null, c = function(c, e, h, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, h, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.k = a;
  return c;
}(), Id = function() {
  function a(a, b, c) {
    for (c = L(c);;) {
      if (c) {
        b = a.b ? a.b(b, M(c)) : a.call(null, b, M(c)), c = O(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = L(b);
    return c ? Hd.d ? Hd.d(a, M(c), O(c)) : Hd.call(null, a, M(c), O(c)) : a.i ? a.i() : a.call(null);
  }
  var c = null, c = function(c, e, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.d = a;
  return c;
}(), Hd = function() {
  function a(a, b, c) {
    return c && (c.g & 524288 || c.Xb) ? c.T(null, a, b) : c instanceof Array ? Rc.d(c, a, b) : "string" === typeof c ? Rc.d(c, a, b) : y(ac, c) ? bc.d(c, a, b) : B ? Id.d(a, b, c) : null;
  }
  function b(a, b) {
    return b && (b.g & 524288 || b.Xb) ? b.S(null, a) : b instanceof Array ? Rc.b(b, a) : "string" === typeof b ? Rc.b(b, a) : y(ac, b) ? bc.b(b, a) : B ? Id.b(a, b) : null;
  }
  var c = null, c = function(c, e, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.d = a;
  return c;
}(), Jd = function() {
  var a = null, b = function() {
    function b(a, c, f) {
      var g = null;
      2 < arguments.length && (g = Q(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, g);
    }
    function d(b, c, d) {
      return Hd.d(a, b + c, d);
    }
    b.p = 2;
    b.l = function(a) {
      var b = M(a);
      a = O(a);
      var c = M(a);
      a = N(a);
      return d(b, c, a);
    };
    b.f = d;
    return b;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 0:
        return 0;
      case 1:
        return a;
      case 2:
        return a + d;
      default:
        return b.f(a, d, Q(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.p = 2;
  a.l = b.l;
  a.i = function() {
    return 0;
  };
  a.a = function(a) {
    return a;
  };
  a.b = function(a, b) {
    return a + b;
  };
  a.f = b.f;
  return a;
}(), Kd = function() {
  var a = null, b = function() {
    function b(a, c, f) {
      var g = null;
      2 < arguments.length && (g = Q(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, g);
    }
    function d(b, c, d) {
      return Hd.d(a, b - c, d);
    }
    b.p = 2;
    b.l = function(a) {
      var b = M(a);
      a = O(a);
      var c = M(a);
      a = N(a);
      return d(b, c, a);
    };
    b.f = d;
    return b;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return-a;
      case 2:
        return a - d;
      default:
        return b.f(a, d, Q(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.p = 2;
  a.l = b.l;
  a.a = function(a) {
    return-a;
  };
  a.b = function(a, b) {
    return a - b;
  };
  a.f = b.f;
  return a;
}();
function Ld(a) {
  return a - 1;
}
function Md(a, b) {
  var c = (a - a % b) / b;
  return 0 <= c ? Math.floor.a ? Math.floor.a(c) : Math.floor.call(null, c) : Math.ceil.a ? Math.ceil.a(c) : Math.ceil.call(null, c);
}
var Nd = function() {
  function a(a) {
    return a * c.i();
  }
  function b() {
    return Math.random.i ? Math.random.i() : Math.random.call(null);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.i = b;
  c.a = a;
  return c;
}();
function Od(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
var D = function() {
  function a(a) {
    return null == a ? "" : a.toString();
  }
  var b = null, c = function() {
    function a(b, d) {
      var g = null;
      1 < arguments.length && (g = Q(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, g);
    }
    function c(a, d) {
      for (var e = new La(b.a(a)), m = d;;) {
        if (t(m)) {
          e = e.append(b.a(M(m))), m = O(m);
        } else {
          return e.toString();
        }
      }
    }
    a.p = 1;
    a.l = function(a) {
      var b = M(a);
      a = N(a);
      return c(b, a);
    };
    a.f = c;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return "";
      case 1:
        return a.call(this, b);
      default:
        return c.f(b, Q(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 1;
  b.l = c.l;
  b.i = function() {
    return "";
  };
  b.a = a;
  b.f = c.f;
  return b;
}(), Pd = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return a.substring(c);
      case 3:
        return a.substring(c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.b = function(a, c) {
    return a.substring(c);
  };
  a.d = function(a, c, d) {
    return a.substring(c, d);
  };
  return a;
}();
function Uc(a, b) {
  return sd(md(b) ? function() {
    for (var c = L(a), d = L(b);;) {
      if (null == c) {
        return null == d;
      }
      if (null == d) {
        return!1;
      }
      if (Ic.b(M(c), M(d))) {
        c = O(c), d = O(d);
      } else {
        return B ? !1 : null;
      }
    }
  }() : null);
}
function Qd(a) {
  var b = 0;
  for (a = L(a);;) {
    if (a) {
      var c = M(a), b = (b + (Fc(Rd.a ? Rd.a(c) : Rd.call(null, c)) ^ Fc(Sd.a ? Sd.a(c) : Sd.call(null, c)))) % 4503599627370496;
      a = O(a);
    } else {
      return b;
    }
  }
}
function Td(a, b, c, d, e) {
  this.j = a;
  this.first = b;
  this.sa = c;
  this.count = d;
  this.m = e;
  this.g = 65937646;
  this.o = 8192;
}
k = Td.prototype;
k.toString = function() {
  return wc(this);
};
k.G = function() {
  return this.j;
};
k.aa = function() {
  return 1 === this.count ? null : this.sa;
};
k.N = function() {
  return this.count;
};
k.F = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Oc(this);
};
k.A = function(a, b) {
  return Uc(this, b);
};
k.P = function() {
  return Mc;
};
k.S = function(a, b) {
  return Id.b(b, this);
};
k.T = function(a, b, c) {
  return Id.d(b, c, this);
};
k.V = function() {
  return this.first;
};
k.X = function() {
  return 1 === this.count ? Mc : this.sa;
};
k.I = function() {
  return this;
};
k.H = function(a, b) {
  return new Td(b, this.first, this.sa, this.count, this.m);
};
k.M = function(a, b) {
  return new Td(this.j, b, this, this.count + 1, null);
};
function Ud(a) {
  this.j = a;
  this.g = 65937614;
  this.o = 8192;
}
k = Ud.prototype;
k.toString = function() {
  return wc(this);
};
k.G = function() {
  return this.j;
};
k.aa = function() {
  return null;
};
k.N = function() {
  return 0;
};
k.F = function() {
  return 0;
};
k.A = function(a, b) {
  return Uc(this, b);
};
k.P = function() {
  return this;
};
k.S = function(a, b) {
  return Id.b(b, this);
};
k.T = function(a, b, c) {
  return Id.d(b, c, this);
};
k.V = function() {
  return null;
};
k.X = function() {
  return Mc;
};
k.I = function() {
  return null;
};
k.H = function(a, b) {
  return new Ud(b);
};
k.M = function(a, b) {
  return new Td(this.j, b, null, 1, null);
};
var Mc = new Ud(null), Vd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = Q(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof Lc && 0 === a.n) {
      b = a.c;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.V(null)), a = a.aa(null);
          } else {
            break a;
          }
        }
        b = void 0;
      }
    }
    a = b.length;
    for (var e = Mc;;) {
      if (0 < a) {
        var h = a - 1, e = e.M(null, b[a - 1]);
        a = h;
      } else {
        return e;
      }
    }
  }
  a.p = 0;
  a.l = function(a) {
    a = L(a);
    return b(a);
  };
  a.f = b;
  return a;
}();
function Wd(a, b, c, d) {
  this.j = a;
  this.first = b;
  this.sa = c;
  this.m = d;
  this.g = 65929452;
  this.o = 8192;
}
k = Wd.prototype;
k.toString = function() {
  return wc(this);
};
k.G = function() {
  return this.j;
};
k.aa = function() {
  return null == this.sa ? null : L(this.sa);
};
k.F = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Oc(this);
};
k.A = function(a, b) {
  return Uc(this, b);
};
k.P = function() {
  return jd(Mc, this.j);
};
k.S = function(a, b) {
  return Id.b(b, this);
};
k.T = function(a, b, c) {
  return Id.d(b, c, this);
};
k.V = function() {
  return this.first;
};
k.X = function() {
  return null == this.sa ? Mc : this.sa;
};
k.I = function() {
  return this;
};
k.H = function(a, b) {
  return new Wd(b, this.first, this.sa, this.m);
};
k.M = function(a, b) {
  return new Wd(null, b, this, this.m);
};
function R(a, b) {
  var c = null == b;
  return(c ? c : b && (b.g & 64 || b.Za)) ? new Wd(null, a, b, null) : new Wd(null, a, L(b), null);
}
function U(a, b, c, d) {
  this.$ = a;
  this.name = b;
  this.ia = c;
  this.Qa = d;
  this.g = 2153775105;
  this.o = 4096;
}
k = U.prototype;
k.v = function(a, b) {
  return F(b, ":" + D.a(this.ia));
};
k.F = function() {
  var a = this.Qa;
  return null != a ? a : this.Qa = a = Gc(Bc(this.name), Ec(this.$)) + 2654435769 | 0;
};
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Zc.b(c, this);
      case 3:
        return Zc.d(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat($a(b)));
};
k.a = function(a) {
  return Zc.b(a, this);
};
k.b = function(a, b) {
  return Zc.d(a, this, b);
};
k.A = function(a, b) {
  return b instanceof U ? this.ia === b.ia : !1;
};
k.toString = function() {
  return ":" + D.a(this.ia);
};
function V(a, b) {
  return a === b ? !0 : a instanceof U && b instanceof U ? a.ia === b.ia : !1;
}
var Yd = function() {
  function a(a, b) {
    return new U(a, b, "" + D.a(t(a) ? "" + D.a(a) + "/" : null) + D.a(b), null);
  }
  function b(a) {
    if (a instanceof U) {
      return a;
    }
    if (a instanceof K) {
      var b;
      if (a && (a.o & 4096 || a.Wb)) {
        b = a.$;
      } else {
        throw Error("Doesn't support namespace: " + D.a(a));
      }
      return new U(b, Xd.a ? Xd.a(a) : Xd.call(null, a), a.La, null);
    }
    return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new U(b[0], b[1], a, null) : new U(null, b[0], a, null)) : null;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function Zd(a, b, c, d) {
  this.j = a;
  this.Ta = b;
  this.w = c;
  this.m = d;
  this.o = 0;
  this.g = 32374988;
}
k = Zd.prototype;
k.toString = function() {
  return wc(this);
};
function $d(a) {
  null != a.Ta && (a.w = a.Ta.i ? a.Ta.i() : a.Ta.call(null), a.Ta = null);
  return a.w;
}
k.G = function() {
  return this.j;
};
k.aa = function() {
  jc(this);
  return null == this.w ? null : O(this.w);
};
k.F = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Oc(this);
};
k.A = function(a, b) {
  return Uc(this, b);
};
k.P = function() {
  return jd(Mc, this.j);
};
k.S = function(a, b) {
  return Id.b(b, this);
};
k.T = function(a, b, c) {
  return Id.d(b, c, this);
};
k.V = function() {
  jc(this);
  return null == this.w ? null : M(this.w);
};
k.X = function() {
  jc(this);
  return null != this.w ? N(this.w) : Mc;
};
k.I = function() {
  $d(this);
  if (null == this.w) {
    return null;
  }
  for (var a = this.w;;) {
    if (a instanceof Zd) {
      a = $d(a);
    } else {
      return this.w = a, L(this.w);
    }
  }
};
k.H = function(a, b) {
  return new Zd(b, this.Ta, this.w, this.m);
};
k.M = function(a, b) {
  return R(b, this);
};
function ae(a, b) {
  this.R = a;
  this.end = b;
  this.o = 0;
  this.g = 2;
}
ae.prototype.N = function() {
  return this.end;
};
ae.prototype.add = function(a) {
  this.R[this.end] = a;
  return this.end += 1;
};
ae.prototype.la = function() {
  var a = new be(this.R, 0, this.end);
  this.R = null;
  return a;
};
function be(a, b, c) {
  this.c = a;
  this.B = b;
  this.end = c;
  this.o = 0;
  this.g = 524306;
}
k = be.prototype;
k.S = function(a, b) {
  return Rc.k(this.c, b, this.c[this.B], this.B + 1);
};
k.T = function(a, b, c) {
  return Rc.k(this.c, b, c, this.B);
};
k.Eb = function() {
  if (this.B === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new be(this.c, this.B + 1, this.end);
};
k.u = function(a, b) {
  return this.c[this.B + b];
};
k.ea = function(a, b, c) {
  return 0 <= b && b < this.end - this.B ? this.c[this.B + b] : c;
};
k.N = function() {
  return this.end - this.B;
};
var ce = function() {
  function a(a, b, c) {
    return new be(a, b, c);
  }
  function b(a, b) {
    return new be(a, b, a.length);
  }
  function c(a) {
    return new be(a, 0, a.length);
  }
  var d = null, d = function(d, h, f) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, h);
      case 3:
        return a.call(this, d, h, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.d = a;
  return d;
}();
function de(a, b, c, d) {
  this.la = a;
  this.ja = b;
  this.j = c;
  this.m = d;
  this.g = 31850732;
  this.o = 1536;
}
k = de.prototype;
k.toString = function() {
  return wc(this);
};
k.G = function() {
  return this.j;
};
k.aa = function() {
  if (1 < sb(this.la)) {
    return new de(tc(this.la), this.ja, this.j, null);
  }
  var a = jc(this.ja);
  return null == a ? null : a;
};
k.F = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Oc(this);
};
k.A = function(a, b) {
  return Uc(this, b);
};
k.P = function() {
  return jd(Mc, this.j);
};
k.V = function() {
  return E.b(this.la, 0);
};
k.X = function() {
  return 1 < sb(this.la) ? new de(tc(this.la), this.ja, this.j, null) : null == this.ja ? Mc : this.ja;
};
k.I = function() {
  return this;
};
k.ub = function() {
  return this.la;
};
k.vb = function() {
  return null == this.ja ? Mc : this.ja;
};
k.H = function(a, b) {
  return new de(this.la, this.ja, b, this.m);
};
k.M = function(a, b) {
  return R(b, this);
};
k.tb = function() {
  return null == this.ja ? null : this.ja;
};
function ee(a, b) {
  return 0 === sb(a) ? b : new de(a, b, null, null);
}
function fe(a) {
  for (var b = [];;) {
    if (L(a)) {
      b.push(M(a)), a = O(a);
    } else {
      return b;
    }
  }
}
function ge(a, b) {
  if (Sc(a)) {
    return S(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && L(c)) {
      c = O(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var ie = function he(b) {
  return null == b ? null : null == O(b) ? L(M(b)) : B ? R(M(b), he(O(b))) : null;
}, je = function() {
  function a(a, b) {
    return new Zd(null, function() {
      var c = L(a);
      return c ? T(c) ? ee(I(c), d.b(J(c), b)) : R(M(c), d.b(N(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new Zd(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new Zd(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var h = null;
      2 < arguments.length && (h = Q(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, h);
    }
    function b(a, c, e) {
      return function q(a, b) {
        return new Zd(null, function() {
          var c = L(a);
          return c ? T(c) ? ee(I(c), q(J(c), b)) : R(M(c), q(N(c), b)) : t(b) ? q(M(b), O(b)) : null;
        }, null, null);
      }(d.b(a, c), e);
    }
    a.p = 2;
    a.l = function(a) {
      var c = M(a);
      a = O(a);
      var d = M(a);
      a = N(a);
      return b(c, d, a);
    };
    a.f = b;
    return a;
  }(), d = function(d, f, g) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, f);
      default:
        return e.f(d, f, Q(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.p = 2;
  d.l = e.l;
  d.i = c;
  d.a = b;
  d.b = a;
  d.f = e.f;
  return d;
}(), ke = function() {
  function a(a, b, c, d) {
    return R(a, R(b, R(c, d)));
  }
  function b(a, b, c) {
    return R(a, R(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, p, n) {
      var q = null;
      4 < arguments.length && (q = Q(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, p, q);
    }
    function b(a, c, d, e, h) {
      return R(a, R(c, R(d, R(e, ie(h)))));
    }
    a.p = 4;
    a.l = function(a) {
      var c = M(a);
      a = O(a);
      var d = M(a);
      a = O(a);
      var e = M(a);
      a = O(a);
      var n = M(a);
      a = N(a);
      return b(c, d, e, n, a);
    };
    a.f = b;
    return a;
  }(), c = function(c, h, f, g, m) {
    switch(arguments.length) {
      case 1:
        return L(c);
      case 2:
        return R(c, h);
      case 3:
        return b.call(this, c, h, f);
      case 4:
        return a.call(this, c, h, f, g);
      default:
        return d.f(c, h, f, g, Q(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.p = 4;
  c.l = d.l;
  c.a = function(a) {
    return L(a);
  };
  c.b = function(a, b) {
    return R(a, b);
  };
  c.d = b;
  c.k = a;
  c.f = d.f;
  return c;
}(), le = function() {
  var a = null, b = function() {
    function a(c, h, f, g) {
      var m = null;
      3 < arguments.length && (m = Q(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, h, f, m);
    }
    function b(a, c, d, g) {
      for (;;) {
        if (a = rc(a, c, d), t(g)) {
          c = M(g), d = M(O(g)), g = O(O(g));
        } else {
          return a;
        }
      }
    }
    a.p = 3;
    a.l = function(a) {
      var c = M(a);
      a = O(a);
      var f = M(a);
      a = O(a);
      var g = M(a);
      a = N(a);
      return b(c, f, g, a);
    };
    a.f = b;
    return a;
  }(), a = function(a, d, e, h) {
    switch(arguments.length) {
      case 3:
        return rc(a, d, e);
      default:
        return b.f(a, d, e, Q(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.p = 3;
  a.l = b.l;
  a.d = function(a, b, e) {
    return rc(a, b, e);
  };
  a.f = b.f;
  return a;
}();
function me(a, b, c) {
  var d = L(c);
  if (0 === b) {
    return a.i ? a.i() : a.call(null);
  }
  c = xb(d);
  var e = yb(d);
  if (1 === b) {
    return a.a ? a.a(c) : a.a ? a.a(c) : a.call(null, c);
  }
  var d = xb(e), h = yb(e);
  if (2 === b) {
    return a.b ? a.b(c, d) : a.b ? a.b(c, d) : a.call(null, c, d);
  }
  var e = xb(h), f = yb(h);
  if (3 === b) {
    return a.d ? a.d(c, d, e) : a.d ? a.d(c, d, e) : a.call(null, c, d, e);
  }
  var h = xb(f), g = yb(f);
  if (4 === b) {
    return a.k ? a.k(c, d, e, h) : a.k ? a.k(c, d, e, h) : a.call(null, c, d, e, h);
  }
  var f = xb(g), m = yb(g);
  if (5 === b) {
    return a.D ? a.D(c, d, e, h, f) : a.D ? a.D(c, d, e, h, f) : a.call(null, c, d, e, h, f);
  }
  var g = xb(m), p = yb(m);
  if (6 === b) {
    return a.W ? a.W(c, d, e, h, f, g) : a.W ? a.W(c, d, e, h, f, g) : a.call(null, c, d, e, h, f, g);
  }
  var m = xb(p), n = yb(p);
  if (7 === b) {
    return a.da ? a.da(c, d, e, h, f, g, m) : a.da ? a.da(c, d, e, h, f, g, m) : a.call(null, c, d, e, h, f, g, m);
  }
  var p = xb(n), q = yb(n);
  if (8 === b) {
    return a.Ha ? a.Ha(c, d, e, h, f, g, m, p) : a.Ha ? a.Ha(c, d, e, h, f, g, m, p) : a.call(null, c, d, e, h, f, g, m, p);
  }
  var n = xb(q), w = yb(q);
  if (9 === b) {
    return a.Ia ? a.Ia(c, d, e, h, f, g, m, p, n) : a.Ia ? a.Ia(c, d, e, h, f, g, m, p, n) : a.call(null, c, d, e, h, f, g, m, p, n);
  }
  var q = xb(w), x = yb(w);
  if (10 === b) {
    return a.wa ? a.wa(c, d, e, h, f, g, m, p, n, q) : a.wa ? a.wa(c, d, e, h, f, g, m, p, n, q) : a.call(null, c, d, e, h, f, g, m, p, n, q);
  }
  var w = xb(x), v = yb(x);
  if (11 === b) {
    return a.xa ? a.xa(c, d, e, h, f, g, m, p, n, q, w) : a.xa ? a.xa(c, d, e, h, f, g, m, p, n, q, w) : a.call(null, c, d, e, h, f, g, m, p, n, q, w);
  }
  var x = xb(v), z = yb(v);
  if (12 === b) {
    return a.ya ? a.ya(c, d, e, h, f, g, m, p, n, q, w, x) : a.ya ? a.ya(c, d, e, h, f, g, m, p, n, q, w, x) : a.call(null, c, d, e, h, f, g, m, p, n, q, w, x);
  }
  var v = xb(z), A = yb(z);
  if (13 === b) {
    return a.za ? a.za(c, d, e, h, f, g, m, p, n, q, w, x, v) : a.za ? a.za(c, d, e, h, f, g, m, p, n, q, w, x, v) : a.call(null, c, d, e, h, f, g, m, p, n, q, w, x, v);
  }
  var z = xb(A), H = yb(A);
  if (14 === b) {
    return a.Aa ? a.Aa(c, d, e, h, f, g, m, p, n, q, w, x, v, z) : a.Aa ? a.Aa(c, d, e, h, f, g, m, p, n, q, w, x, v, z) : a.call(null, c, d, e, h, f, g, m, p, n, q, w, x, v, z);
  }
  var A = xb(H), G = yb(H);
  if (15 === b) {
    return a.Ba ? a.Ba(c, d, e, h, f, g, m, p, n, q, w, x, v, z, A) : a.Ba ? a.Ba(c, d, e, h, f, g, m, p, n, q, w, x, v, z, A) : a.call(null, c, d, e, h, f, g, m, p, n, q, w, x, v, z, A);
  }
  var H = xb(G), P = yb(G);
  if (16 === b) {
    return a.Ca ? a.Ca(c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H) : a.Ca ? a.Ca(c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H) : a.call(null, c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H);
  }
  var G = xb(P), ba = yb(P);
  if (17 === b) {
    return a.Da ? a.Da(c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H, G) : a.Da ? a.Da(c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H, G) : a.call(null, c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H, G);
  }
  var P = xb(ba), W = yb(ba);
  if (18 === b) {
    return a.Ea ? a.Ea(c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H, G, P) : a.Ea ? a.Ea(c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H, G, P) : a.call(null, c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H, G, P);
  }
  ba = xb(W);
  W = yb(W);
  if (19 === b) {
    return a.Fa ? a.Fa(c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H, G, P, ba) : a.Fa ? a.Fa(c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H, G, P, ba) : a.call(null, c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H, G, P, ba);
  }
  var Na = xb(W);
  yb(W);
  if (20 === b) {
    return a.Ga ? a.Ga(c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H, G, P, ba, Na) : a.Ga ? a.Ga(c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H, G, P, ba, Na) : a.call(null, c, d, e, h, f, g, m, p, n, q, w, x, v, z, A, H, G, P, ba, Na);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var id = function() {
  function a(a, b, c, d, e) {
    b = ke.k(b, c, d, e);
    c = a.p;
    return a.l ? (d = ge(b, c + 1), d <= c ? me(a, d, b) : a.l(b)) : a.apply(a, fe(b));
  }
  function b(a, b, c, d) {
    b = ke.d(b, c, d);
    c = a.p;
    return a.l ? (d = ge(b, c + 1), d <= c ? me(a, d, b) : a.l(b)) : a.apply(a, fe(b));
  }
  function c(a, b, c) {
    b = ke.b(b, c);
    c = a.p;
    if (a.l) {
      var d = ge(b, c + 1);
      return d <= c ? me(a, d, b) : a.l(b);
    }
    return a.apply(a, fe(b));
  }
  function d(a, b) {
    var c = a.p;
    if (a.l) {
      var d = ge(b, c + 1);
      return d <= c ? me(a, d, b) : a.l(b);
    }
    return a.apply(a, fe(b));
  }
  var e = null, h = function() {
    function a(c, d, e, h, f, x) {
      var v = null;
      5 < arguments.length && (v = Q(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, h, f, v);
    }
    function b(a, c, d, e, h, f) {
      c = R(c, R(d, R(e, R(h, ie(f)))));
      d = a.p;
      return a.l ? (e = ge(c, d + 1), e <= d ? me(a, e, c) : a.l(c)) : a.apply(a, fe(c));
    }
    a.p = 5;
    a.l = function(a) {
      var c = M(a);
      a = O(a);
      var d = M(a);
      a = O(a);
      var e = M(a);
      a = O(a);
      var h = M(a);
      a = O(a);
      var f = M(a);
      a = N(a);
      return b(c, d, e, h, f, a);
    };
    a.f = b;
    return a;
  }(), e = function(e, g, m, p, n, q) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, g);
      case 3:
        return c.call(this, e, g, m);
      case 4:
        return b.call(this, e, g, m, p);
      case 5:
        return a.call(this, e, g, m, p, n);
      default:
        return h.f(e, g, m, p, n, Q(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.p = 5;
  e.l = h.l;
  e.b = d;
  e.d = c;
  e.k = b;
  e.D = a;
  e.f = h.f;
  return e;
}();
function ne(a) {
  return L(a) ? a : null;
}
function oe(a, b) {
  for (;;) {
    if (null == L(b)) {
      return!0;
    }
    if (t(a.a ? a.a(M(b)) : a.call(null, M(b)))) {
      var c = a, d = O(b);
      a = c;
      b = d;
    } else {
      return B ? !1 : null;
    }
  }
}
function pe(a) {
  return a;
}
var qe = function() {
  function a(a, b, c, e) {
    return new Zd(null, function() {
      var p = L(b), n = L(c), q = L(e);
      return p && n && q ? R(a.d ? a.d(M(p), M(n), M(q)) : a.call(null, M(p), M(n), M(q)), d.k(a, N(p), N(n), N(q))) : null;
    }, null, null);
  }
  function b(a, b, c) {
    return new Zd(null, function() {
      var e = L(b), p = L(c);
      return e && p ? R(a.b ? a.b(M(e), M(p)) : a.call(null, M(e), M(p)), d.d(a, N(e), N(p))) : null;
    }, null, null);
  }
  function c(a, b) {
    return new Zd(null, function() {
      var c = L(b);
      if (c) {
        if (T(c)) {
          for (var e = I(c), p = S(e), n = new ae(Array(p), 0), q = 0;;) {
            if (q < p) {
              var w = a.a ? a.a(E.b(e, q)) : a.call(null, E.b(e, q));
              n.add(w);
              q += 1;
            } else {
              break;
            }
          }
          return ee(n.la(), d.b(a, J(c)));
        }
        return R(a.a ? a.a(M(c)) : a.call(null, M(c)), d.b(a, N(c)));
      }
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e, h, q) {
      var w = null;
      4 < arguments.length && (w = Q(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, h, w);
    }
    function b(a, c, e, h, f) {
      var w = function v(a) {
        return new Zd(null, function() {
          var b = d.b(L, a);
          return oe(pe, b) ? R(d.b(M, b), v(d.b(N, b))) : null;
        }, null, null);
      };
      return d.b(function() {
        return function(b) {
          return id.b(a, b);
        };
      }(w), w(Wc.f(f, h, Q([e, c], 0))));
    }
    a.p = 4;
    a.l = function(a) {
      var c = M(a);
      a = O(a);
      var d = M(a);
      a = O(a);
      var e = M(a);
      a = O(a);
      var h = M(a);
      a = N(a);
      return b(c, d, e, h, a);
    };
    a.f = b;
    return a;
  }(), d = function(d, f, g, m, p) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, m);
      default:
        return e.f(d, f, g, m, Q(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.p = 4;
  d.l = e.l;
  d.b = c;
  d.d = b;
  d.k = a;
  d.f = e.f;
  return d;
}();
function re(a, b) {
  var c;
  null != a ? a && (a.o & 4 || a.oc) ? (c = Hd.d(pc, oc(a), b), c = qc(c)) : c = Hd.d(ub, a, b) : c = Hd.d(Wc, Mc, b);
  return c;
}
var te = function se(b, c, d) {
  var e = Yc.d(c, 0, null), h;
  a: {
    h = 1;
    for (c = L(c);;) {
      if (c && 0 < h) {
        h -= 1, c = O(c);
      } else {
        h = c;
        break a;
      }
    }
    h = void 0;
  }
  return h ? ad.d(b, e, se(Zc.b(b, e), h, d)) : ad.d(b, e, d);
};
function $e(a, b) {
  this.r = a;
  this.c = b;
}
function af(a) {
  return new $e(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function bf(a) {
  a = a.h;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function cf(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = af(a);
    d.c[0] = c;
    c = d;
    b -= 5;
  }
}
var ef = function df(b, c, d, e) {
  var h = new $e(d.r, $a(d.c)), f = b.h - 1 >>> c & 31;
  5 === c ? h.c[f] = e : (d = d.c[f], b = null != d ? df(b, c - 5, d, e) : cf(null, c - 5, e), h.c[f] = b);
  return h;
};
function ff(a, b) {
  throw Error("No item " + D.a(a) + " in vector of length " + D.a(b));
}
function gf(a) {
  var b = a.root;
  for (a = a.shift;;) {
    if (0 < a) {
      a -= 5, b = b.c[0];
    } else {
      return b.c;
    }
  }
}
function hf(a, b) {
  if (b >= bf(a)) {
    return a.q;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = c.c[b >>> d & 31], d = e
    } else {
      return c.c;
    }
  }
}
function jf(a, b) {
  return 0 <= b && b < a.h ? hf(a, b) : ff(b, a.h);
}
var lf = function kf(b, c, d, e, h) {
  var f = new $e(d.r, $a(d.c));
  if (0 === c) {
    f.c[e & 31] = h;
  } else {
    var g = e >>> c & 31;
    b = kf(b, c - 5, d.c[g], e, h);
    f.c[g] = b;
  }
  return f;
};
function X(a, b, c, d, e, h) {
  this.j = a;
  this.h = b;
  this.shift = c;
  this.root = d;
  this.q = e;
  this.m = h;
  this.g = 167668511;
  this.o = 8196;
}
k = X.prototype;
k.toString = function() {
  return wc(this);
};
k.K = function(a, b) {
  return Bb.d(this, b, null);
};
k.L = function(a, b, c) {
  return "number" === typeof b ? E.d(this, b, c) : c;
};
k.u = function(a, b) {
  return jf(this, b)[b & 31];
};
k.ea = function(a, b, c) {
  return 0 <= b && b < this.h ? hf(this, b)[b & 31] : c;
};
k.yb = function(a, b, c) {
  if (0 <= b && b < this.h) {
    return bf(this) <= b ? (a = $a(this.q), a[b & 31] = c, new X(this.j, this.h, this.shift, this.root, a, null)) : new X(this.j, this.h, this.shift, lf(this, this.shift, this.root, b, c), this.q, null);
  }
  if (b === this.h) {
    return ub(this, c);
  }
  if (B) {
    throw Error("Index " + D.a(b) + " out of bounds  [0," + D.a(this.h) + "]");
  }
  return null;
};
k.G = function() {
  return this.j;
};
k.N = function() {
  return this.h;
};
k.xb = function() {
  return E.b(this, 0);
};
k.Gb = function() {
  return E.b(this, 1);
};
k.F = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Oc(this);
};
k.A = function(a, b) {
  return Uc(this, b);
};
k.Xa = function() {
  return new mf(this.h, this.shift, nf.a ? nf.a(this.root) : nf.call(null, this.root), of.a ? of.a(this.q) : of.call(null, this.q));
};
k.P = function() {
  return jd(pf, this.j);
};
k.S = function(a, b) {
  return Qc.b(this, b);
};
k.T = function(a, b, c) {
  return Qc.d(this, b, c);
};
k.Ma = function(a, b, c) {
  if ("number" === typeof b) {
    return Vb(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
k.I = function() {
  return 0 === this.h ? null : 32 >= this.h ? new Lc(this.q, 0) : B ? qf.k ? qf.k(this, gf(this), 0, 0) : qf.call(null, this, gf(this), 0, 0) : null;
};
k.H = function(a, b) {
  return new X(b, this.h, this.shift, this.root, this.q, this.m);
};
k.M = function(a, b) {
  if (32 > this.h - bf(this)) {
    for (var c = this.q.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.q[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new X(this.j, this.h + 1, this.shift, this.root, d, null);
  }
  c = (d = this.h >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = af(null), d.c[0] = this.root, e = cf(null, this.shift, new $e(null, this.q)), d.c[1] = e) : d = ef(this, this.shift, this.root, new $e(null, this.q));
  return new X(this.j, this.h + 1, c, d, [b], null);
};
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.u(null, c);
      case 3:
        return this.ea(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat($a(b)));
};
k.a = function(a) {
  return this.u(null, a);
};
k.b = function(a, b) {
  return this.ea(null, a, b);
};
var Y = new $e(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), pf = new X(null, 0, 5, Y, [], 0);
function rf(a, b, c, d, e, h) {
  this.C = a;
  this.ba = b;
  this.n = c;
  this.B = d;
  this.j = e;
  this.m = h;
  this.g = 32243948;
  this.o = 1536;
}
k = rf.prototype;
k.toString = function() {
  return wc(this);
};
k.aa = function() {
  if (this.B + 1 < this.ba.length) {
    var a = qf.k ? qf.k(this.C, this.ba, this.n, this.B + 1) : qf.call(null, this.C, this.ba, this.n, this.B + 1);
    return null == a ? null : a;
  }
  return uc(this);
};
k.F = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Oc(this);
};
k.A = function(a, b) {
  return Uc(this, b);
};
k.P = function() {
  return jd(pf, this.j);
};
k.S = function(a, b) {
  return Qc.b(sf.d ? sf.d(this.C, this.n + this.B, S(this.C)) : sf.call(null, this.C, this.n + this.B, S(this.C)), b);
};
k.T = function(a, b, c) {
  return Qc.d(sf.d ? sf.d(this.C, this.n + this.B, S(this.C)) : sf.call(null, this.C, this.n + this.B, S(this.C)), b, c);
};
k.V = function() {
  return this.ba[this.B];
};
k.X = function() {
  if (this.B + 1 < this.ba.length) {
    var a = qf.k ? qf.k(this.C, this.ba, this.n, this.B + 1) : qf.call(null, this.C, this.ba, this.n, this.B + 1);
    return null == a ? Mc : a;
  }
  return J(this);
};
k.I = function() {
  return this;
};
k.ub = function() {
  return ce.b(this.ba, this.B);
};
k.vb = function() {
  var a = this.n + this.ba.length;
  return a < sb(this.C) ? qf.k ? qf.k(this.C, hf(this.C, a), a, 0) : qf.call(null, this.C, hf(this.C, a), a, 0) : Mc;
};
k.H = function(a, b) {
  return qf.D ? qf.D(this.C, this.ba, this.n, this.B, b) : qf.call(null, this.C, this.ba, this.n, this.B, b);
};
k.M = function(a, b) {
  return R(b, this);
};
k.tb = function() {
  var a = this.n + this.ba.length;
  return a < sb(this.C) ? qf.k ? qf.k(this.C, hf(this.C, a), a, 0) : qf.call(null, this.C, hf(this.C, a), a, 0) : null;
};
var qf = function() {
  function a(a, b, c, d, m) {
    return new rf(a, b, c, d, m, null);
  }
  function b(a, b, c, d) {
    return new rf(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new rf(a, jf(a, b), b, c, null, null);
  }
  var d = null, d = function(d, h, f, g, m) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, h, f);
      case 4:
        return b.call(this, d, h, f, g);
      case 5:
        return a.call(this, d, h, f, g, m);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.d = c;
  d.k = b;
  d.D = a;
  return d;
}();
function tf(a, b, c, d, e) {
  this.j = a;
  this.ka = b;
  this.start = c;
  this.end = d;
  this.m = e;
  this.g = 166617887;
  this.o = 8192;
}
k = tf.prototype;
k.toString = function() {
  return wc(this);
};
k.K = function(a, b) {
  return Bb.d(this, b, null);
};
k.L = function(a, b, c) {
  return "number" === typeof b ? E.d(this, b, c) : c;
};
k.u = function(a, b) {
  return 0 > b || this.end <= this.start + b ? ff(b, this.end - this.start) : E.b(this.ka, this.start + b);
};
k.ea = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : E.d(this.ka, this.start + b, c);
};
k.yb = function(a, b, c) {
  var d = this, e = d.start + b;
  return uf.D ? uf.D(d.j, ad.d(d.ka, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null) : uf.call(null, d.j, ad.d(d.ka, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
k.G = function() {
  return this.j;
};
k.N = function() {
  return this.end - this.start;
};
k.F = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Oc(this);
};
k.A = function(a, b) {
  return Uc(this, b);
};
k.P = function() {
  return jd(pf, this.j);
};
k.S = function(a, b) {
  return Qc.b(this, b);
};
k.T = function(a, b, c) {
  return Qc.d(this, b, c);
};
k.Ma = function(a, b, c) {
  if ("number" === typeof b) {
    return Vb(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
k.I = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : R(E.b(a.ka, e), new Zd(null, function() {
        return function() {
          return d(e + 1);
        };
      }(b), null, null));
    };
  }(this)(a.start);
};
k.H = function(a, b) {
  return uf.D ? uf.D(b, this.ka, this.start, this.end, this.m) : uf.call(null, b, this.ka, this.start, this.end, this.m);
};
k.M = function(a, b) {
  return uf.D ? uf.D(this.j, Vb(this.ka, this.end, b), this.start, this.end + 1, null) : uf.call(null, this.j, Vb(this.ka, this.end, b), this.start, this.end + 1, null);
};
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.u(null, c);
      case 3:
        return this.ea(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat($a(b)));
};
k.a = function(a) {
  return this.u(null, a);
};
k.b = function(a, b) {
  return this.ea(null, a, b);
};
function uf(a, b, c, d, e) {
  for (;;) {
    if (b instanceof tf) {
      c = b.start + c, d = b.start + d, b = b.ka;
    } else {
      var h = S(b);
      if (0 > c || 0 > d || c > h || d > h) {
        throw Error("Index out of bounds");
      }
      return new tf(a, b, c, d, e);
    }
  }
}
var sf = function() {
  function a(a, b, c) {
    return uf(null, a, b, c, null);
  }
  function b(a, b) {
    return c.d(a, b, S(a));
  }
  var c = null, c = function(c, e, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.d = a;
  return c;
}();
function vf(a, b) {
  return a === b.r ? b : new $e(a, $a(b.c));
}
function nf(a) {
  return new $e({}, $a(a.c));
}
function of(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  qd(a, 0, b, 0, a.length);
  return b;
}
var xf = function wf(b, c, d, e) {
  d = vf(b.root.r, d);
  var h = b.h - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var f = d.c[h];
    b = null != f ? wf(b, c - 5, f, e) : cf(b.root.r, c - 5, e);
  }
  d.c[h] = b;
  return d;
};
function mf(a, b, c, d) {
  this.h = a;
  this.shift = b;
  this.root = c;
  this.q = d;
  this.g = 275;
  this.o = 88;
}
k = mf.prototype;
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat($a(b)));
};
k.a = function(a) {
  return this.K(null, a);
};
k.b = function(a, b) {
  return this.L(null, a, b);
};
k.K = function(a, b) {
  return Bb.d(this, b, null);
};
k.L = function(a, b, c) {
  return "number" === typeof b ? E.d(this, b, c) : c;
};
k.u = function(a, b) {
  if (this.root.r) {
    return jf(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
k.ea = function(a, b, c) {
  return 0 <= b && b < this.h ? E.b(this, b) : c;
};
k.N = function() {
  if (this.root.r) {
    return this.h;
  }
  throw Error("count after persistent!");
};
k.Ib = function(a, b, c) {
  var d = this;
  if (d.root.r) {
    if (0 <= b && b < d.h) {
      return bf(this) <= b ? d.q[b & 31] = c : (a = function() {
        return function h(a, g) {
          var m = vf(d.root.r, g);
          if (0 === a) {
            m.c[b & 31] = c;
          } else {
            var p = b >>> a & 31, n = h(a - 5, m.c[p]);
            m.c[p] = n;
          }
          return m;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.h) {
      return pc(this, c);
    }
    if (B) {
      throw Error("Index " + D.a(b) + " out of bounds for TransientVector of length" + D.a(d.h));
    }
    return null;
  }
  throw Error("assoc! after persistent!");
};
k.$a = function(a, b, c) {
  if ("number" === typeof b) {
    return sc(this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
k.ab = function(a, b) {
  if (this.root.r) {
    if (32 > this.h - bf(this)) {
      this.q[this.h & 31] = b;
    } else {
      var c = new $e(this.root.r, this.q), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.q = d;
      if (this.h >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = cf(this.root.r, this.shift, c);
        this.root = new $e(this.root.r, d);
        this.shift = e;
      } else {
        this.root = xf(this, this.shift, this.root, c);
      }
    }
    this.h += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
k.bb = function() {
  if (this.root.r) {
    this.root.r = null;
    var a = this.h - bf(this), b = Array(a);
    qd(this.q, 0, b, 0, a);
    return new X(null, this.h, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function yf() {
  this.o = 0;
  this.g = 2097152;
}
yf.prototype.A = function() {
  return!1;
};
var zf = new yf;
function Af(a, b) {
  return sd(nd(b) ? S(a) === S(b) ? oe(pe, qe.b(function(a) {
    return Ic.b(Zc.d(b, M(a), zf), M(O(a)));
  }, a)) : null : null);
}
function Bf(a, b) {
  var c = a.c;
  if (b instanceof U) {
    a: {
      for (var d = c.length, e = b.ia, h = 0;;) {
        if (d <= h) {
          c = -1;
          break a;
        }
        var f = c[h];
        if (f instanceof U && e === f.ia) {
          c = h;
          break a;
        }
        if (B) {
          h += 2;
        } else {
          c = null;
          break a;
        }
      }
      c = void 0;
    }
  } else {
    if (ca(b) || "number" === typeof b) {
      a: {
        d = c.length;
        for (e = 0;;) {
          if (d <= e) {
            c = -1;
            break a;
          }
          if (b === c[e]) {
            c = e;
            break a;
          }
          if (B) {
            e += 2;
          } else {
            c = null;
            break a;
          }
        }
        c = void 0;
      }
    } else {
      if (b instanceof K) {
        a: {
          d = c.length;
          e = b.La;
          for (h = 0;;) {
            if (d <= h) {
              c = -1;
              break a;
            }
            f = c[h];
            if (f instanceof K && e === f.La) {
              c = h;
              break a;
            }
            if (B) {
              h += 2;
            } else {
              c = null;
              break a;
            }
          }
          c = void 0;
        }
      } else {
        if (null == b) {
          a: {
            d = c.length;
            for (e = 0;;) {
              if (d <= e) {
                c = -1;
                break a;
              }
              if (null == c[e]) {
                c = e;
                break a;
              }
              if (B) {
                e += 2;
              } else {
                c = null;
                break a;
              }
            }
            c = void 0;
          }
        } else {
          if (B) {
            a: {
              d = c.length;
              for (e = 0;;) {
                if (d <= e) {
                  c = -1;
                  break a;
                }
                if (Ic.b(b, c[e])) {
                  c = e;
                  break a;
                }
                if (B) {
                  e += 2;
                } else {
                  c = null;
                  break a;
                }
              }
              c = void 0;
            }
          } else {
            c = null;
          }
        }
      }
    }
  }
  return c;
}
function Cf(a, b, c) {
  this.c = a;
  this.n = b;
  this.ca = c;
  this.o = 0;
  this.g = 32374990;
}
k = Cf.prototype;
k.toString = function() {
  return wc(this);
};
k.G = function() {
  return this.ca;
};
k.aa = function() {
  return this.n < this.c.length - 2 ? new Cf(this.c, this.n + 2, this.ca) : null;
};
k.N = function() {
  return(this.c.length - this.n) / 2;
};
k.F = function() {
  return Oc(this);
};
k.A = function(a, b) {
  return Uc(this, b);
};
k.P = function() {
  return jd(Mc, this.ca);
};
k.S = function(a, b) {
  return Id.b(b, this);
};
k.T = function(a, b, c) {
  return Id.d(b, c, this);
};
k.V = function() {
  return new X(null, 2, 5, Y, [this.c[this.n], this.c[this.n + 1]], null);
};
k.X = function() {
  return this.n < this.c.length - 2 ? new Cf(this.c, this.n + 2, this.ca) : Mc;
};
k.I = function() {
  return this;
};
k.H = function(a, b) {
  return new Cf(this.c, this.n, b);
};
k.M = function(a, b) {
  return R(b, this);
};
function Pa(a, b, c, d) {
  this.j = a;
  this.h = b;
  this.c = c;
  this.m = d;
  this.g = 16647951;
  this.o = 8196;
}
k = Pa.prototype;
k.toString = function() {
  return wc(this);
};
k.K = function(a, b) {
  return Bb.d(this, b, null);
};
k.L = function(a, b, c) {
  a = Bf(this, b);
  return-1 === a ? c : this.c[a + 1];
};
k.G = function() {
  return this.j;
};
k.N = function() {
  return this.h;
};
k.F = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Pc(this);
};
k.A = function(a, b) {
  return Af(this, b);
};
k.Xa = function() {
  return new Df({}, this.c.length, $a(this.c));
};
k.P = function() {
  return $b(Ef, this.j);
};
k.S = function(a, b) {
  return Id.b(b, this);
};
k.T = function(a, b, c) {
  return Id.d(b, c, this);
};
k.Ya = function(a, b) {
  if (0 <= Bf(this, b)) {
    var c = this.c.length, d = c - 2;
    if (0 === d) {
      return tb(this);
    }
    for (var d = Array(d), e = 0, h = 0;;) {
      if (e >= c) {
        return new Pa(this.j, this.h - 1, d, null);
      }
      if (Ic.b(b, this.c[e])) {
        e += 2;
      } else {
        if (B) {
          d[h] = this.c[e], d[h + 1] = this.c[e + 1], h += 2, e += 2;
        } else {
          return null;
        }
      }
    }
  } else {
    return this;
  }
};
k.Ma = function(a, b, c) {
  a = Bf(this, b);
  if (-1 === a) {
    if (this.h < Ff) {
      a = this.c;
      for (var d = a.length, e = Array(d + 2), h = 0;;) {
        if (h < d) {
          e[h] = a[h], h += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new Pa(this.j, this.h + 1, e, null);
    }
    return $b(Db(re(Gf, this), b, c), this.j);
  }
  return c === this.c[a + 1] ? this : B ? (b = $a(this.c), b[a + 1] = c, new Pa(this.j, this.h, b, null)) : null;
};
k.sb = function(a, b) {
  return-1 !== Bf(this, b);
};
k.I = function() {
  var a = this.c;
  return 0 <= a.length - 2 ? new Cf(a, 0, null) : null;
};
k.H = function(a, b) {
  return new Pa(b, this.h, this.c, this.m);
};
k.M = function(a, b) {
  if (od(b)) {
    return Db(this, E.b(b, 0), E.b(b, 1));
  }
  for (var c = this, d = L(b);;) {
    if (null == d) {
      return c;
    }
    var e = M(d);
    if (od(e)) {
      c = Db(c, E.b(e, 0), E.b(e, 1)), d = O(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat($a(b)));
};
k.a = function(a) {
  return this.K(null, a);
};
k.b = function(a, b) {
  return this.L(null, a, b);
};
var Ef = new Pa(null, 0, [], null), Ff = 8;
function Df(a, b, c) {
  this.Ra = a;
  this.Oa = b;
  this.c = c;
  this.o = 56;
  this.g = 258;
}
k = Df.prototype;
k.$a = function(a, b, c) {
  if (t(this.Ra)) {
    a = Bf(this, b);
    if (-1 === a) {
      return this.Oa + 2 <= 2 * Ff ? (this.Oa += 2, this.c.push(b), this.c.push(c), this) : le.d(Hf.b ? Hf.b(this.Oa, this.c) : Hf.call(null, this.Oa, this.c), b, c);
    }
    c !== this.c[a + 1] && (this.c[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
k.ab = function(a, b) {
  if (t(this.Ra)) {
    if (b ? b.g & 2048 || b.Ub || (b.g ? 0 : y(Lb, b)) : y(Lb, b)) {
      return rc(this, Rd.a ? Rd.a(b) : Rd.call(null, b), Sd.a ? Sd.a(b) : Sd.call(null, b));
    }
    for (var c = L(b), d = this;;) {
      var e = M(c);
      if (t(e)) {
        c = O(c), d = rc(d, Rd.a ? Rd.a(e) : Rd.call(null, e), Sd.a ? Sd.a(e) : Sd.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
k.bb = function() {
  if (t(this.Ra)) {
    return this.Ra = !1, new Pa(null, Md(this.Oa, 2), this.c, null);
  }
  throw Error("persistent! called twice");
};
k.K = function(a, b) {
  return Bb.d(this, b, null);
};
k.L = function(a, b, c) {
  if (t(this.Ra)) {
    return a = Bf(this, b), -1 === a ? c : this.c[a + 1];
  }
  throw Error("lookup after persistent!");
};
k.N = function() {
  if (t(this.Ra)) {
    return Md(this.Oa, 2);
  }
  throw Error("count after persistent!");
};
function Hf(a, b) {
  for (var c = oc(Gf), d = 0;;) {
    if (d < a) {
      c = le.d(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function If() {
  this.O = !1;
}
function Jf(a, b) {
  return a === b ? !0 : V(a, b) ? !0 : B ? Ic.b(a, b) : null;
}
var Kf = function() {
  function a(a, b, c, f, g) {
    a = $a(a);
    a[b] = c;
    a[f] = g;
    return a;
  }
  function b(a, b, c) {
    a = $a(a);
    a[b] = c;
    return a;
  }
  var c = null, c = function(c, e, h, f, g) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, h);
      case 5:
        return a.call(this, c, e, h, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.d = b;
  c.D = a;
  return c;
}();
function Lf(a, b) {
  var c = Array(a.length - 2);
  qd(a, 0, c, 0, 2 * b);
  qd(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
var Mf = function() {
  function a(a, b, c, f, g, m) {
    a = a.Sa(b);
    a.c[c] = f;
    a.c[g] = m;
    return a;
  }
  function b(a, b, c, f) {
    a = a.Sa(b);
    a.c[c] = f;
    return a;
  }
  var c = null, c = function(c, e, h, f, g, m) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, h, f);
      case 6:
        return a.call(this, c, e, h, f, g, m);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.k = b;
  c.W = a;
  return c;
}();
function Nf(a, b, c) {
  this.r = a;
  this.t = b;
  this.c = c;
}
k = Nf.prototype;
k.Sa = function(a) {
  if (a === this.r) {
    return this;
  }
  var b = Od(this.t), c = Array(0 > b ? 4 : 2 * (b + 1));
  qd(this.c, 0, c, 0, 2 * b);
  return new Nf(a, this.t, c);
};
k.cb = function() {
  return Of.a ? Of.a(this.c) : Of.call(null, this.c);
};
k.Ja = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.t & e)) {
    return d;
  }
  var h = Od(this.t & e - 1), e = this.c[2 * h], h = this.c[2 * h + 1];
  return null == e ? h.Ja(a + 5, b, c, d) : Jf(c, e) ? h : B ? d : null;
};
k.ga = function(a, b, c, d, e, h) {
  var f = 1 << (c >>> b & 31), g = Od(this.t & f - 1);
  if (0 === (this.t & f)) {
    var m = Od(this.t);
    if (2 * m < this.c.length) {
      a = this.Sa(a);
      b = a.c;
      h.O = !0;
      a: {
        for (c = 2 * (m - g), h = 2 * g + (c - 1), m = 2 * (g + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[m] = b[h];
          m -= 1;
          c -= 1;
          h -= 1;
        }
      }
      b[2 * g] = d;
      b[2 * g + 1] = e;
      a.t |= f;
      return a;
    }
    if (16 <= m) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[c >>> b & 31] = Pf.ga(a, b + 5, c, d, e, h);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.t >>> d & 1) && (g[d] = null != this.c[e] ? Pf.ga(a, b + 5, Fc(this.c[e]), this.c[e], this.c[e + 1], h) : this.c[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new Qf(a, m + 1, g);
    }
    return B ? (b = Array(2 * (m + 4)), qd(this.c, 0, b, 0, 2 * g), b[2 * g] = d, b[2 * g + 1] = e, qd(this.c, 2 * g, b, 2 * (g + 1), 2 * (m - g)), h.O = !0, a = this.Sa(a), a.c = b, a.t |= f, a) : null;
  }
  m = this.c[2 * g];
  f = this.c[2 * g + 1];
  return null == m ? (m = f.ga(a, b + 5, c, d, e, h), m === f ? this : Mf.k(this, a, 2 * g + 1, m)) : Jf(d, m) ? e === f ? this : Mf.k(this, a, 2 * g + 1, e) : B ? (h.O = !0, Mf.W(this, a, 2 * g, null, 2 * g + 1, Rf.da ? Rf.da(a, b + 5, m, f, c, d, e) : Rf.call(null, a, b + 5, m, f, c, d, e))) : null;
};
k.fa = function(a, b, c, d, e) {
  var h = 1 << (b >>> a & 31), f = Od(this.t & h - 1);
  if (0 === (this.t & h)) {
    var g = Od(this.t);
    if (16 <= g) {
      f = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      f[b >>> a & 31] = Pf.fa(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.t >>> c & 1) && (f[c] = null != this.c[d] ? Pf.fa(a + 5, Fc(this.c[d]), this.c[d], this.c[d + 1], e) : this.c[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new Qf(null, g + 1, f);
    }
    a = Array(2 * (g + 1));
    qd(this.c, 0, a, 0, 2 * f);
    a[2 * f] = c;
    a[2 * f + 1] = d;
    qd(this.c, 2 * f, a, 2 * (f + 1), 2 * (g - f));
    e.O = !0;
    return new Nf(null, this.t | h, a);
  }
  g = this.c[2 * f];
  h = this.c[2 * f + 1];
  return null == g ? (g = h.fa(a + 5, b, c, d, e), g === h ? this : new Nf(null, this.t, Kf.d(this.c, 2 * f + 1, g))) : Jf(c, g) ? d === h ? this : new Nf(null, this.t, Kf.d(this.c, 2 * f + 1, d)) : B ? (e.O = !0, new Nf(null, this.t, Kf.D(this.c, 2 * f, null, 2 * f + 1, Rf.W ? Rf.W(a + 5, g, h, b, c, d) : Rf.call(null, a + 5, g, h, b, c, d)))) : null;
};
k.eb = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.t & d)) {
    return this;
  }
  var e = Od(this.t & d - 1), h = this.c[2 * e], f = this.c[2 * e + 1];
  return null == h ? (a = f.eb(a + 5, b, c), a === f ? this : null != a ? new Nf(null, this.t, Kf.d(this.c, 2 * e + 1, a)) : this.t === d ? null : B ? new Nf(null, this.t ^ d, Lf(this.c, e)) : null) : Jf(c, h) ? new Nf(null, this.t ^ d, Lf(this.c, e)) : B ? this : null;
};
var Pf = new Nf(null, 0, []);
function Qf(a, b, c) {
  this.r = a;
  this.h = b;
  this.c = c;
}
k = Qf.prototype;
k.Sa = function(a) {
  return a === this.r ? this : new Qf(a, this.h, $a(this.c));
};
k.cb = function() {
  return Sf.a ? Sf.a(this.c) : Sf.call(null, this.c);
};
k.Ja = function(a, b, c, d) {
  var e = this.c[b >>> a & 31];
  return null != e ? e.Ja(a + 5, b, c, d) : d;
};
k.ga = function(a, b, c, d, e, h) {
  var f = c >>> b & 31, g = this.c[f];
  if (null == g) {
    return a = Mf.k(this, a, f, Pf.ga(a, b + 5, c, d, e, h)), a.h += 1, a;
  }
  b = g.ga(a, b + 5, c, d, e, h);
  return b === g ? this : Mf.k(this, a, f, b);
};
k.fa = function(a, b, c, d, e) {
  var h = b >>> a & 31, f = this.c[h];
  if (null == f) {
    return new Qf(null, this.h + 1, Kf.d(this.c, h, Pf.fa(a + 5, b, c, d, e)));
  }
  a = f.fa(a + 5, b, c, d, e);
  return a === f ? this : new Qf(null, this.h, Kf.d(this.c, h, a));
};
k.eb = function(a, b, c) {
  var d = b >>> a & 31, e = this.c[d];
  if (null != e) {
    a = e.eb(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.h) {
          a: {
            e = this.c;
            a = 2 * (this.h - 1);
            b = Array(a);
            c = 0;
            for (var h = 1, f = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[h] = e[c], h += 2, f |= 1 << c), c += 1;
              } else {
                d = new Nf(null, f, b);
                break a;
              }
            }
            d = void 0;
          }
        } else {
          d = new Qf(null, this.h - 1, Kf.d(this.c, d, a));
        }
      } else {
        d = B ? new Qf(null, this.h, Kf.d(this.c, d, a)) : null;
      }
    }
    return d;
  }
  return this;
};
function Tf(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (Jf(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function Uf(a, b, c, d) {
  this.r = a;
  this.ma = b;
  this.h = c;
  this.c = d;
}
k = Uf.prototype;
k.Sa = function(a) {
  if (a === this.r) {
    return this;
  }
  var b = Array(2 * (this.h + 1));
  qd(this.c, 0, b, 0, 2 * this.h);
  return new Uf(a, this.ma, this.h, b);
};
k.cb = function() {
  return Of.a ? Of.a(this.c) : Of.call(null, this.c);
};
k.Ja = function(a, b, c, d) {
  a = Tf(this.c, this.h, c);
  return 0 > a ? d : Jf(c, this.c[a]) ? this.c[a + 1] : B ? d : null;
};
k.ga = function(a, b, c, d, e, h) {
  if (c === this.ma) {
    b = Tf(this.c, this.h, d);
    if (-1 === b) {
      if (this.c.length > 2 * this.h) {
        return a = Mf.W(this, a, 2 * this.h, d, 2 * this.h + 1, e), h.O = !0, a.h += 1, a;
      }
      c = this.c.length;
      b = Array(c + 2);
      qd(this.c, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      h.O = !0;
      h = this.h + 1;
      a === this.r ? (this.c = b, this.h = h, a = this) : a = new Uf(this.r, this.ma, h, b);
      return a;
    }
    return this.c[b + 1] === e ? this : Mf.k(this, a, b + 1, e);
  }
  return(new Nf(a, 1 << (this.ma >>> b & 31), [null, this, null, null])).ga(a, b, c, d, e, h);
};
k.fa = function(a, b, c, d, e) {
  return b === this.ma ? (a = Tf(this.c, this.h, c), -1 === a ? (a = 2 * this.h, b = Array(a + 2), qd(this.c, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.O = !0, new Uf(null, this.ma, this.h + 1, b)) : Ic.b(this.c[a], d) ? this : new Uf(null, this.ma, this.h, Kf.d(this.c, a + 1, d))) : (new Nf(null, 1 << (this.ma >>> a & 31), [null, this])).fa(a, b, c, d, e);
};
k.eb = function(a, b, c) {
  a = Tf(this.c, this.h, c);
  return-1 === a ? this : 1 === this.h ? null : B ? new Uf(null, this.ma, this.h - 1, Lf(this.c, Md(a, 2))) : null;
};
var Rf = function() {
  function a(a, b, c, f, g, m, p) {
    var n = Fc(c);
    if (n === g) {
      return new Uf(null, n, 2, [c, f, m, p]);
    }
    var q = new If;
    return Pf.ga(a, b, n, c, f, q).ga(a, b, g, m, p, q);
  }
  function b(a, b, c, f, g, m) {
    var p = Fc(b);
    if (p === f) {
      return new Uf(null, p, 2, [b, c, g, m]);
    }
    var n = new If;
    return Pf.fa(a, p, b, c, n).fa(a, f, g, m, n);
  }
  var c = null, c = function(c, e, h, f, g, m, p) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, h, f, g, m);
      case 7:
        return a.call(this, c, e, h, f, g, m, p);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.W = b;
  c.da = a;
  return c;
}();
function Vf(a, b, c, d, e) {
  this.j = a;
  this.ha = b;
  this.n = c;
  this.w = d;
  this.m = e;
  this.o = 0;
  this.g = 32374860;
}
k = Vf.prototype;
k.toString = function() {
  return wc(this);
};
k.G = function() {
  return this.j;
};
k.F = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Oc(this);
};
k.A = function(a, b) {
  return Uc(this, b);
};
k.P = function() {
  return jd(Mc, this.j);
};
k.S = function(a, b) {
  return Id.b(b, this);
};
k.T = function(a, b, c) {
  return Id.d(b, c, this);
};
k.V = function() {
  return null == this.w ? new X(null, 2, 5, Y, [this.ha[this.n], this.ha[this.n + 1]], null) : M(this.w);
};
k.X = function() {
  return null == this.w ? Of.d ? Of.d(this.ha, this.n + 2, null) : Of.call(null, this.ha, this.n + 2, null) : Of.d ? Of.d(this.ha, this.n, O(this.w)) : Of.call(null, this.ha, this.n, O(this.w));
};
k.I = function() {
  return this;
};
k.H = function(a, b) {
  return new Vf(b, this.ha, this.n, this.w, this.m);
};
k.M = function(a, b) {
  return R(b, this);
};
var Of = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new Vf(null, a, b, null, null);
          }
          var f = a[b + 1];
          if (t(f) && (f = f.cb(), t(f))) {
            return new Vf(null, a, b + 2, f, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new Vf(null, a, b, c, null);
    }
  }
  function b(a) {
    return c.d(a, 0, null);
  }
  var c = null, c = function(c, e, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.d = a;
  return c;
}();
function Wf(a, b, c, d, e) {
  this.j = a;
  this.ha = b;
  this.n = c;
  this.w = d;
  this.m = e;
  this.o = 0;
  this.g = 32374860;
}
k = Wf.prototype;
k.toString = function() {
  return wc(this);
};
k.G = function() {
  return this.j;
};
k.F = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Oc(this);
};
k.A = function(a, b) {
  return Uc(this, b);
};
k.P = function() {
  return jd(Mc, this.j);
};
k.S = function(a, b) {
  return Id.b(b, this);
};
k.T = function(a, b, c) {
  return Id.d(b, c, this);
};
k.V = function() {
  return M(this.w);
};
k.X = function() {
  return Sf.k ? Sf.k(null, this.ha, this.n, O(this.w)) : Sf.call(null, null, this.ha, this.n, O(this.w));
};
k.I = function() {
  return this;
};
k.H = function(a, b) {
  return new Wf(b, this.ha, this.n, this.w, this.m);
};
k.M = function(a, b) {
  return R(b, this);
};
var Sf = function() {
  function a(a, b, c, f) {
    if (null == f) {
      for (f = b.length;;) {
        if (c < f) {
          var g = b[c];
          if (t(g) && (g = g.cb(), t(g))) {
            return new Wf(a, b, c + 1, g, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new Wf(a, b, c, f, null);
    }
  }
  function b(a) {
    return c.k(null, a, 0, null);
  }
  var c = null, c = function(c, e, h, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, h, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.k = a;
  return c;
}();
function Xf(a, b, c, d, e, h) {
  this.j = a;
  this.h = b;
  this.root = c;
  this.U = d;
  this.Z = e;
  this.m = h;
  this.g = 16123663;
  this.o = 8196;
}
k = Xf.prototype;
k.toString = function() {
  return wc(this);
};
k.K = function(a, b) {
  return Bb.d(this, b, null);
};
k.L = function(a, b, c) {
  return null == b ? this.U ? this.Z : c : null == this.root ? c : B ? this.root.Ja(0, Fc(b), b, c) : null;
};
k.G = function() {
  return this.j;
};
k.N = function() {
  return this.h;
};
k.F = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Pc(this);
};
k.A = function(a, b) {
  return Af(this, b);
};
k.Xa = function() {
  return new Yf({}, this.root, this.h, this.U, this.Z);
};
k.P = function() {
  return $b(Gf, this.j);
};
k.Ya = function(a, b) {
  if (null == b) {
    return this.U ? new Xf(this.j, this.h - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  if (B) {
    var c = this.root.eb(0, Fc(b), b);
    return c === this.root ? this : new Xf(this.j, this.h - 1, c, this.U, this.Z, null);
  }
  return null;
};
k.Ma = function(a, b, c) {
  if (null == b) {
    return this.U && c === this.Z ? this : new Xf(this.j, this.U ? this.h : this.h + 1, this.root, !0, c, null);
  }
  a = new If;
  b = (null == this.root ? Pf : this.root).fa(0, Fc(b), b, c, a);
  return b === this.root ? this : new Xf(this.j, a.O ? this.h + 1 : this.h, b, this.U, this.Z, null);
};
k.sb = function(a, b) {
  return null == b ? this.U : null == this.root ? !1 : B ? this.root.Ja(0, Fc(b), b, rd) !== rd : null;
};
k.I = function() {
  if (0 < this.h) {
    var a = null != this.root ? this.root.cb() : null;
    return this.U ? R(new X(null, 2, 5, Y, [null, this.Z], null), a) : a;
  }
  return null;
};
k.H = function(a, b) {
  return new Xf(b, this.h, this.root, this.U, this.Z, this.m);
};
k.M = function(a, b) {
  if (od(b)) {
    return Db(this, E.b(b, 0), E.b(b, 1));
  }
  for (var c = this, d = L(b);;) {
    if (null == d) {
      return c;
    }
    var e = M(d);
    if (od(e)) {
      c = Db(c, E.b(e, 0), E.b(e, 1)), d = O(d);
    } else {
      throw Error("conj on a map takes map entries or seqables of map entries");
    }
  }
};
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat($a(b)));
};
k.a = function(a) {
  return this.K(null, a);
};
k.b = function(a, b) {
  return this.L(null, a, b);
};
var Gf = new Xf(null, 0, null, !1, null, 0);
function $c(a, b) {
  for (var c = a.length, d = 0, e = oc(Gf);;) {
    if (d < c) {
      var h = d + 1, e = e.$a(null, a[d], b[d]), d = h
    } else {
      return qc(e);
    }
  }
}
function Yf(a, b, c, d, e) {
  this.r = a;
  this.root = b;
  this.count = c;
  this.U = d;
  this.Z = e;
  this.o = 56;
  this.g = 258;
}
k = Yf.prototype;
k.$a = function(a, b, c) {
  return Zf(this, b, c);
};
k.ab = function(a, b) {
  var c;
  a: {
    if (this.r) {
      if (b ? b.g & 2048 || b.Ub || (b.g ? 0 : y(Lb, b)) : y(Lb, b)) {
        c = Zf(this, Rd.a ? Rd.a(b) : Rd.call(null, b), Sd.a ? Sd.a(b) : Sd.call(null, b));
        break a;
      }
      c = L(b);
      for (var d = this;;) {
        var e = M(c);
        if (t(e)) {
          c = O(c), d = Zf(d, Rd.a ? Rd.a(e) : Rd.call(null, e), Sd.a ? Sd.a(e) : Sd.call(null, e));
        } else {
          c = d;
          break a;
        }
      }
    } else {
      throw Error("conj! after persistent");
    }
    c = void 0;
  }
  return c;
};
k.bb = function() {
  var a;
  if (this.r) {
    this.r = null, a = new Xf(null, this.count, this.root, this.U, this.Z, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
k.K = function(a, b) {
  return null == b ? this.U ? this.Z : null : null == this.root ? null : this.root.Ja(0, Fc(b), b);
};
k.L = function(a, b, c) {
  return null == b ? this.U ? this.Z : c : null == this.root ? c : this.root.Ja(0, Fc(b), b, c);
};
k.N = function() {
  if (this.r) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function Zf(a, b, c) {
  if (a.r) {
    if (null == b) {
      a.Z !== c && (a.Z = c), a.U || (a.count += 1, a.U = !0);
    } else {
      var d = new If;
      b = (null == a.root ? Pf : a.root).ga(a.r, 0, Fc(b), b, c, d);
      b !== a.root && (a.root = b);
      d.O && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
var $f = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = Q(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = L(a);
    for (var b = oc(Gf);;) {
      if (a) {
        var e = O(O(a)), b = le.d(b, M(a), M(O(a)));
        a = e;
      } else {
        return qc(b);
      }
    }
  }
  a.p = 0;
  a.l = function(a) {
    a = L(a);
    return b(a);
  };
  a.f = b;
  return a;
}();
function ag(a, b) {
  this.Ka = a;
  this.ca = b;
  this.o = 0;
  this.g = 32374988;
}
k = ag.prototype;
k.toString = function() {
  return wc(this);
};
k.G = function() {
  return this.ca;
};
k.aa = function() {
  var a = this.Ka, a = (a ? a.g & 128 || a.Hb || (a.g ? 0 : y(zb, a)) : y(zb, a)) ? this.Ka.aa(null) : O(this.Ka);
  return null == a ? null : new ag(a, this.ca);
};
k.F = function() {
  return Oc(this);
};
k.A = function(a, b) {
  return Uc(this, b);
};
k.P = function() {
  return jd(Mc, this.ca);
};
k.S = function(a, b) {
  return Id.b(b, this);
};
k.T = function(a, b, c) {
  return Id.d(b, c, this);
};
k.V = function() {
  return this.Ka.V(null).xb();
};
k.X = function() {
  var a = this.Ka, a = (a ? a.g & 128 || a.Hb || (a.g ? 0 : y(zb, a)) : y(zb, a)) ? this.Ka.aa(null) : O(this.Ka);
  return null != a ? new ag(a, this.ca) : Mc;
};
k.I = function() {
  return this;
};
k.H = function(a, b) {
  return new ag(this.Ka, b);
};
k.M = function(a, b) {
  return R(b, this);
};
function Rd(a) {
  return Mb(a);
}
function Sd(a) {
  return Nb(a);
}
function bg(a, b, c) {
  this.j = a;
  this.Ua = b;
  this.m = c;
  this.g = 15077647;
  this.o = 8196;
}
k = bg.prototype;
k.toString = function() {
  return wc(this);
};
k.K = function(a, b) {
  return Bb.d(this, b, null);
};
k.L = function(a, b, c) {
  return Cb(this.Ua, b) ? b : c;
};
k.G = function() {
  return this.j;
};
k.N = function() {
  return sb(this.Ua);
};
k.F = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Pc(this);
};
k.A = function(a, b) {
  return ld(b) && S(this) === S(b) && oe(function(a) {
    return function(b) {
      return td(a, b);
    };
  }(this), b);
};
k.Xa = function() {
  return new cg(oc(this.Ua));
};
k.P = function() {
  return jd(dg, this.j);
};
k.I = function() {
  var a = L(this.Ua);
  return a ? new ag(a, null) : null;
};
k.H = function(a, b) {
  return new bg(b, this.Ua, this.m);
};
k.M = function(a, b) {
  return new bg(this.j, ad.d(this.Ua, b, null), null);
};
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.K(null, c);
      case 3:
        return this.L(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat($a(b)));
};
k.a = function(a) {
  return this.K(null, a);
};
k.b = function(a, b) {
  return this.L(null, a, b);
};
var dg = new bg(null, Ef, 0);
function cg(a) {
  this.va = a;
  this.g = 259;
  this.o = 136;
}
k = cg.prototype;
k.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Bb.d(this.va, c, rd) === rd ? null : c;
      case 3:
        return Bb.d(this.va, c, rd) === rd ? d : c;
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
k.apply = function(a, b) {
  return this.call.apply(this, [this].concat($a(b)));
};
k.a = function(a) {
  return Bb.d(this.va, a, rd) === rd ? null : a;
};
k.b = function(a, b) {
  return Bb.d(this.va, a, rd) === rd ? b : a;
};
k.K = function(a, b) {
  return Bb.d(this, b, null);
};
k.L = function(a, b, c) {
  return Bb.d(this.va, b, rd) === rd ? c : b;
};
k.N = function() {
  return S(this.va);
};
k.ab = function(a, b) {
  this.va = le.d(this.va, b, null);
  return this;
};
k.bb = function() {
  return new bg(null, qc(this.va), null);
};
function Xd(a) {
  if (a && (a.o & 4096 || a.Wb)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error("Doesn't support name: " + D.a(a));
}
function Bg(a, b, c, d, e, h, f) {
  var g = Ma;
  try {
    Ma = null == Ma ? null : Ma - 1;
    if (null != Ma && 0 > Ma) {
      return F(a, "#");
    }
    F(a, c);
    L(f) && (b.d ? b.d(M(f), a, h) : b.call(null, M(f), a, h));
    for (var m = O(f), p = Wa.a(h) - 1;;) {
      if (!m || null != p && 0 === p) {
        L(m) && 0 === p && (F(a, d), F(a, "..."));
        break;
      } else {
        F(a, d);
        b.d ? b.d(M(m), a, h) : b.call(null, M(m), a, h);
        var n = O(m);
        c = p - 1;
        m = n;
        p = c;
      }
    }
    return F(a, e);
  } finally {
    Ma = g;
  }
}
var Cg = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = Q(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = L(b), h = null, f = 0, g = 0;;) {
      if (g < f) {
        var m = h.u(null, g);
        F(a, m);
        g += 1;
      } else {
        if (e = L(e)) {
          h = e, T(h) ? (e = I(h), f = J(h), h = e, m = S(e), e = f, f = m) : (m = M(h), F(a, m), e = O(h), h = null, f = 0), g = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.p = 1;
  a.l = function(a) {
    var d = M(a);
    a = N(a);
    return b(d, a);
  };
  a.f = b;
  return a;
}(), Dg = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Eg(a) {
  return'"' + D.a(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Dg[a];
  })) + '"';
}
var Hg = function Fg(b, c, d) {
  if (null == b) {
    return F(c, "nil");
  }
  if (void 0 === b) {
    return F(c, "#\x3cundefined\x3e");
  }
  if (B) {
    t(function() {
      var c = Zc.b(d, Ua);
      return t(c) ? (c = b ? b.g & 131072 || b.Vb ? !0 : b.g ? !1 : y(Xb, b) : y(Xb, b)) ? kd(b) : c : c;
    }()) && (F(c, "^"), Fg(kd(b), c, d), F(c, " "));
    if (null == b) {
      return F(c, "nil");
    }
    if (b.mb) {
      return b.Bb(b, c, d);
    }
    if (b && (b.g & 2147483648 || b.Q)) {
      return b.v(null, c, d);
    }
    if (Ya(b) === Boolean || "number" === typeof b) {
      return F(c, "" + D.a(b));
    }
    if (null != b && b.constructor === Object) {
      return F(c, "#js "), Gg.k ? Gg.k(qe.b(function(c) {
        return new X(null, 2, 5, Y, [Yd.a(c), b[c]], null);
      }, pd(b)), Fg, c, d) : Gg.call(null, qe.b(function(c) {
        return new X(null, 2, 5, Y, [Yd.a(c), b[c]], null);
      }, pd(b)), Fg, c, d);
    }
    if (b instanceof Array) {
      return Bg(c, Fg, "#js [", " ", "]", d, b);
    }
    if (ca(b)) {
      return t(Ta.a(d)) ? F(c, Eg(b)) : F(c, b);
    }
    if (gd(b)) {
      return Cg.f(c, Q(["#\x3c", "" + D.a(b), "\x3e"], 0));
    }
    if (b instanceof Date) {
      var e = function(b, c) {
        for (var d = "" + D.a(b);;) {
          if (S(d) < c) {
            d = "0" + D.a(d);
          } else {
            return d;
          }
        }
      };
      return Cg.f(c, Q(['#inst "', "" + D.a(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
    }
    return b instanceof RegExp ? Cg.f(c, Q(['#"', b.source, '"'], 0)) : (b ? b.g & 2147483648 || b.Q || (b.g ? 0 : y(lc, b)) : y(lc, b)) ? mc(b, c, d) : B ? Cg.f(c, Q(["#\x3c", "" + D.a(b), "\x3e"], 0)) : null;
  }
  return null;
};
function Ig(a, b) {
  var c = new La;
  a: {
    var d = new vc(c);
    Hg(M(a), d, b);
    for (var e = L(O(a)), h = null, f = 0, g = 0;;) {
      if (g < f) {
        var m = h.u(null, g);
        F(d, " ");
        Hg(m, d, b);
        g += 1;
      } else {
        if (e = L(e)) {
          h = e, T(h) ? (e = I(h), f = J(h), h = e, m = S(e), e = f, f = m) : (m = M(h), F(d, " "), Hg(m, d, b), e = O(h), h = null, f = 0), g = 0;
        } else {
          break a;
        }
      }
    }
  }
  return c;
}
var Jg = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = Q(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b = Oa();
    return null == a || Xa(L(a)) ? "" : "" + D.a(Ig(a, b));
  }
  a.p = 0;
  a.l = function(a) {
    a = L(a);
    return b(a);
  };
  a.f = b;
  return a;
}();
function Gg(a, b, c, d) {
  return Bg(c, function(a, c, d) {
    b.d ? b.d(Mb(a), c, d) : b.call(null, Mb(a), c, d);
    F(c, " ");
    return b.d ? b.d(Nb(a), c, d) : b.call(null, Nb(a), c, d);
  }, "{", ", ", "}", d, L(a));
}
Lc.prototype.Q = !0;
Lc.prototype.v = function(a, b, c) {
  return Bg(b, Hg, "(", " ", ")", c, this);
};
Zd.prototype.Q = !0;
Zd.prototype.v = function(a, b, c) {
  return Bg(b, Hg, "(", " ", ")", c, this);
};
Vf.prototype.Q = !0;
Vf.prototype.v = function(a, b, c) {
  return Bg(b, Hg, "(", " ", ")", c, this);
};
Cf.prototype.Q = !0;
Cf.prototype.v = function(a, b, c) {
  return Bg(b, Hg, "(", " ", ")", c, this);
};
rf.prototype.Q = !0;
rf.prototype.v = function(a, b, c) {
  return Bg(b, Hg, "(", " ", ")", c, this);
};
Wd.prototype.Q = !0;
Wd.prototype.v = function(a, b, c) {
  return Bg(b, Hg, "(", " ", ")", c, this);
};
Xf.prototype.Q = !0;
Xf.prototype.v = function(a, b, c) {
  return Gg(this, Hg, b, c);
};
Wf.prototype.Q = !0;
Wf.prototype.v = function(a, b, c) {
  return Bg(b, Hg, "(", " ", ")", c, this);
};
tf.prototype.Q = !0;
tf.prototype.v = function(a, b, c) {
  return Bg(b, Hg, "[", " ", "]", c, this);
};
bg.prototype.Q = !0;
bg.prototype.v = function(a, b, c) {
  return Bg(b, Hg, "#{", " ", "}", c, this);
};
de.prototype.Q = !0;
de.prototype.v = function(a, b, c) {
  return Bg(b, Hg, "(", " ", ")", c, this);
};
X.prototype.Q = !0;
X.prototype.v = function(a, b, c) {
  return Bg(b, Hg, "[", " ", "]", c, this);
};
Ud.prototype.Q = !0;
Ud.prototype.v = function(a, b) {
  return F(b, "()");
};
Pa.prototype.Q = !0;
Pa.prototype.v = function(a, b, c) {
  return Gg(this, Hg, b, c);
};
ag.prototype.Q = !0;
ag.prototype.v = function(a, b, c) {
  return Bg(b, Hg, "(", " ", ")", c, this);
};
Td.prototype.Q = !0;
Td.prototype.v = function(a, b, c) {
  return Bg(b, Hg, "(", " ", ")", c, this);
};
X.prototype.ib = !0;
X.prototype.jb = function(a, b) {
  return Gd.b(this, b);
};
tf.prototype.ib = !0;
tf.prototype.jb = function(a, b) {
  return Gd.b(this, b);
};
U.prototype.ib = !0;
U.prototype.jb = function(a, b) {
  return Hc(this, b);
};
K.prototype.ib = !0;
K.prototype.jb = function(a, b) {
  return Hc(this, b);
};
function Kg(a, b) {
  if (a ? a.Yb : a) {
    return a.Yb(a, b);
  }
  var c;
  c = Kg[l(null == a ? null : a)];
  if (!c && (c = Kg._, !c)) {
    throw C("IReset.-reset!", a);
  }
  return c.call(null, a, b);
}
var Lg = function() {
  function a(a, b, c, d, e) {
    if (a ? a.cc : a) {
      return a.cc(a, b, c, d, e);
    }
    var n;
    n = Lg[l(null == a ? null : a)];
    if (!n && (n = Lg._, !n)) {
      throw C("ISwap.-swap!", a);
    }
    return n.call(null, a, b, c, d, e);
  }
  function b(a, b, c, d) {
    if (a ? a.bc : a) {
      return a.bc(a, b, c, d);
    }
    var e;
    e = Lg[l(null == a ? null : a)];
    if (!e && (e = Lg._, !e)) {
      throw C("ISwap.-swap!", a);
    }
    return e.call(null, a, b, c, d);
  }
  function c(a, b, c) {
    if (a ? a.ac : a) {
      return a.ac(a, b, c);
    }
    var d;
    d = Lg[l(null == a ? null : a)];
    if (!d && (d = Lg._, !d)) {
      throw C("ISwap.-swap!", a);
    }
    return d.call(null, a, b, c);
  }
  function d(a, b) {
    if (a ? a.$b : a) {
      return a.$b(a, b);
    }
    var c;
    c = Lg[l(null == a ? null : a)];
    if (!c && (c = Lg._, !c)) {
      throw C("ISwap.-swap!", a);
    }
    return c.call(null, a, b);
  }
  var e = null, e = function(e, f, g, m, p) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, f);
      case 3:
        return c.call(this, e, f, g);
      case 4:
        return b.call(this, e, f, g, m);
      case 5:
        return a.call(this, e, f, g, m, p);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.b = d;
  e.d = c;
  e.k = b;
  e.D = a;
  return e;
}();
function Mg(a, b, c, d) {
  this.state = a;
  this.j = b;
  this.lc = c;
  this.Ob = d;
  this.g = 2153938944;
  this.o = 16386;
}
k = Mg.prototype;
k.F = function() {
  return this[da] || (this[da] = ++ea);
};
k.Jb = function(a, b, c) {
  a = L(this.Ob);
  for (var d = null, e = 0, h = 0;;) {
    if (h < e) {
      var f = d.u(null, h), g = Yc.d(f, 0, null), f = Yc.d(f, 1, null);
      f.k ? f.k(g, this, b, c) : f.call(null, g, this, b, c);
      h += 1;
    } else {
      if (a = L(a)) {
        T(a) ? (d = I(a), a = J(a), g = d, e = S(d), d = g) : (d = M(a), g = Yc.d(d, 0, null), f = Yc.d(d, 1, null), f.k ? f.k(g, this, b, c) : f.call(null, g, this, b, c), a = O(a), d = null, e = 0), h = 0;
      } else {
        return null;
      }
    }
  }
};
k.v = function(a, b, c) {
  F(b, "#\x3cAtom: ");
  Hg(this.state, b, c);
  return F(b, "\x3e");
};
k.G = function() {
  return this.j;
};
k.wb = function() {
  return this.state;
};
k.A = function(a, b) {
  return this === b;
};
var Og = function() {
  function a(a) {
    return new Mg(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var g = null;
      1 < arguments.length && (g = Q(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, g);
    }
    function b(a, c) {
      var d = (null == c ? 0 : c ? c.g & 64 || c.Za || (c.g ? 0 : y(wb, c)) : y(wb, c)) ? id.b($f, c) : c, e = Zc.b(d, Ng), d = Zc.b(d, Ua);
      return new Mg(a, d, e, null);
    }
    a.p = 1;
    a.l = function(a) {
      var c = M(a);
      a = N(a);
      return b(c, a);
    };
    a.f = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.f(b, Q(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 1;
  b.l = c.l;
  b.a = a;
  b.f = c.f;
  return b;
}();
function Pg(a, b) {
  if (a instanceof Mg) {
    var c = a.lc;
    if (null != c && !t(c.a ? c.a(b) : c.call(null, b))) {
      throw Error("Assert failed: Validator rejected reference state\n" + D.a(Jg.f(Q([Vd(new K(null, "validate", "validate", 1439230700, null), new K(null, "new-value", "new-value", -1567397401, null))], 0))));
    }
    c = a.state;
    a.state = b;
    null != a.Ob && nc(a, c, b);
    return b;
  }
  return Kg(a, b);
}
var Qg = function() {
  function a(a, b, c, d) {
    return a instanceof Mg ? Pg(a, b.d ? b.d(a.state, c, d) : b.call(null, a.state, c, d)) : Lg.k(a, b, c, d);
  }
  function b(a, b, c) {
    return a instanceof Mg ? Pg(a, b.b ? b.b(a.state, c) : b.call(null, a.state, c)) : Lg.d(a, b, c);
  }
  function c(a, b) {
    return a instanceof Mg ? Pg(a, b.a ? b.a(a.state) : b.call(null, a.state)) : Lg.b(a, b);
  }
  var d = null, e = function() {
    function a(c, d, e, h, q) {
      var w = null;
      4 < arguments.length && (w = Q(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, h, w);
    }
    function b(a, c, d, e, h) {
      return a instanceof Mg ? Pg(a, id.D(c, a.state, d, e, h)) : Lg.D(a, c, d, e, h);
    }
    a.p = 4;
    a.l = function(a) {
      var c = M(a);
      a = O(a);
      var d = M(a);
      a = O(a);
      var e = M(a);
      a = O(a);
      var h = M(a);
      a = N(a);
      return b(c, d, e, h, a);
    };
    a.f = b;
    return a;
  }(), d = function(d, f, g, m, p) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, m);
      default:
        return e.f(d, f, g, m, Q(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.p = 4;
  d.l = e.l;
  d.b = c;
  d.d = b;
  d.k = a;
  d.f = e.f;
  return d;
}(), Nd = function() {
  function a(a) {
    return(Math.random.i ? Math.random.i() : Math.random.call(null)) * a;
  }
  function b() {
    return c.a(1);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.i = b;
  c.a = a;
  return c;
}();
var Rg = new U(null, "number-owned", "number-owned", 1876402369), Sg = new U(null, "purchased?", "purchased?", -1247127965), Ua = new U(null, "meta", "meta", 1499536964), Tg = new U(null, "cost-fn", "cost-fn", 1972507749), Va = new U(null, "dup", "dup", 556298533), B = new U(null, "else", "else", -1508377146), Ng = new U(null, "validator", "validator", -1966190681), Kc = new U(null, "default", "default", -1987822328), Ug = new U(null, "finally-block", "finally-block", 832982472), Vg = new U(null, 
"name", "name", 1843675177), Wg = new U(null, "satoshis-per-click", "satoshis-per-click", 121449225), Z = new U(null, "recur", "recur", -437573268), Xg = new U(null, "catch-block", "catch-block", 1175212748), Qa = new U(null, "flush-on-newline", "flush-on-newline", -151457939), Ta = new U(null, "readably", "readably", 1129599760), Yg = new U(null, "dom-selector", "dom-selector", -1690516015), Wa = new U(null, "print-length", "print-length", 1931866356), Zg = new U(null, "cost-satoshis", "cost-satoshis", 
-2069134796), $g = new U(null, "catch-exception", "catch-exception", -1997306795), ah = new U(null, "prev", "prev", -1597069226), bh = new U(null, "continue-block", "continue-block", -1852047850), ch = new U(null, "satoshis-per-tick-per-miner", "satoshis-per-tick-per-miner", 1163167382);
var dh;
function eh(a, b, c) {
  if (a ? a.Ab : a) {
    return a.Ab(0, b, c);
  }
  var d;
  d = eh[l(null == a ? null : a)];
  if (!d && (d = eh._, !d)) {
    throw C("WritePort.put!", a);
  }
  return d.call(null, a, b, c);
}
function fh(a) {
  if (a ? a.kb : a) {
    return a.kb();
  }
  var b;
  b = fh[l(null == a ? null : a)];
  if (!b && (b = fh._, !b)) {
    throw C("Channel.close!", a);
  }
  return b.call(null, a);
}
function gh(a) {
  if (a ? a.Lb : a) {
    return!0;
  }
  var b;
  b = gh[l(null == a ? null : a)];
  if (!b && (b = gh._, !b)) {
    throw C("Handler.active?", a);
  }
  return b.call(null, a);
}
function hh(a) {
  if (a ? a.zb : a) {
    return a.zb();
  }
  var b;
  b = hh[l(null == a ? null : a)];
  if (!b && (b = hh._, !b)) {
    throw C("Buffer.full?", a);
  }
  return b.call(null, a);
}
;function ih(a, b, c, d, e) {
  for (var h = 0;;) {
    if (h < e) {
      c[d + h] = a[b + h], h += 1;
    } else {
      break;
    }
  }
}
function jh(a, b, c, d) {
  this.head = a;
  this.q = b;
  this.length = c;
  this.c = d;
}
jh.prototype.pop = function() {
  if (0 === this.length) {
    return null;
  }
  var a = this.c[this.q];
  this.c[this.q] = null;
  this.q = (this.q + 1) % this.c.length;
  this.length -= 1;
  return a;
};
jh.prototype.unshift = function(a) {
  this.c[this.head] = a;
  this.head = (this.head + 1) % this.c.length;
  this.length += 1;
  return null;
};
function kh(a, b) {
  a.length + 1 === a.c.length && a.resize();
  a.unshift(b);
}
jh.prototype.resize = function() {
  var a = Array(2 * this.c.length);
  return this.q < this.head ? (ih(this.c, this.q, a, 0, this.length), this.q = 0, this.head = this.length, this.c = a) : this.q > this.head ? (ih(this.c, this.q, a, 0, this.c.length - this.q), ih(this.c, 0, a, this.c.length - this.q, this.head), this.q = 0, this.head = this.length, this.c = a) : this.q === this.head ? (this.head = this.q = 0, this.c = a) : null;
};
function lh(a, b) {
  for (var c = a.length, d = 0;;) {
    if (d < c) {
      var e = a.pop();
      (b.a ? b.a(e) : b.call(null, e)) && a.unshift(e);
      d += 1;
    } else {
      break;
    }
  }
}
function mh(a) {
  if (!(0 < a)) {
    throw Error("Assert failed: Can't create a ring buffer of size 0\n" + D.a(Jg.f(Q([Vd(new K(null, "\x3e", "\x3e", 1085014381, null), new K(null, "n", "n", -2092305744, null), 0)], 0))));
  }
  return new jh(0, 0, 0, Array(a));
}
function nh(a, b) {
  this.R = a;
  this.ic = b;
  this.o = 0;
  this.g = 2;
}
nh.prototype.N = function() {
  return this.R.length;
};
nh.prototype.zb = function() {
  return this.R.length === this.ic;
};
nh.prototype.dc = function() {
  return this.R.pop();
};
function oh(a, b) {
  if (!Xa(hh(a))) {
    throw Error("Assert failed: Can't add to a full buffer\n" + D.a(Jg.f(Q([Vd(new K(null, "not", "not", 1044554643, null), Vd(new K("impl", "full?", "impl/full?", -97582774, null), new K(null, "this", "this", 1028897902, null)))], 0))));
  }
  a.R.unshift(b);
}
;var ph = null, qh = mh(32), rh = !1, sh = !1;
function th() {
  rh = !0;
  sh = !1;
  for (var a = 0;;) {
    var b = qh.pop();
    if (null != b && (b.i ? b.i() : b.call(null), 1024 > a)) {
      a += 1;
      continue;
    }
    break;
  }
  rh = !1;
  return 0 < qh.length ? uh.i ? uh.i() : uh.call(null) : null;
}
"undefined" !== typeof MessageChannel && (ph = new MessageChannel, ph.port1.onmessage = function() {
  return th();
});
function uh() {
  var a = sh;
  if (t(a ? rh : a)) {
    return null;
  }
  sh = !0;
  return "undefined" !== typeof MessageChannel ? ph.port2.postMessage(0) : "undefined" !== typeof setImmediate ? setImmediate(th) : B ? setTimeout(th, 0) : null;
}
function vh(a) {
  kh(qh, a);
  uh();
}
;var wh, yh = function xh(b) {
  "undefined" === typeof wh && (wh = function(b, d, e) {
    this.O = b;
    this.Pb = d;
    this.hc = e;
    this.o = 0;
    this.g = 425984;
  }, wh.mb = !0, wh.lb = "cljs.core.async.impl.channels/t16884", wh.Bb = function(b, d) {
    return F(d, "cljs.core.async.impl.channels/t16884");
  }, wh.prototype.wb = function() {
    return this.O;
  }, wh.prototype.G = function() {
    return this.hc;
  }, wh.prototype.H = function(b, d) {
    return new wh(this.O, this.Pb, d);
  });
  return new wh(b, xh, null);
};
function zh(a, b) {
  this.Na = a;
  this.O = b;
}
function Ah(a) {
  return gh(a.Na);
}
function Bh(a, b, c, d, e, h) {
  this.hb = a;
  this.ob = b;
  this.fb = c;
  this.nb = d;
  this.R = e;
  this.closed = h;
}
Bh.prototype.kb = function() {
  if (!this.closed) {
    for (this.closed = !0;;) {
      var a = this.hb.pop();
      if (null != a) {
        vh(function(a) {
          return function() {
            return a.a ? a.a(null) : a.call(null, null);
          };
        }(a.Y, a, this));
      } else {
        break;
      }
    }
  }
  return null;
};
Bh.prototype.ec = function(a) {
  if (null != this.R && 0 < S(this.R)) {
    for (var b = a.Y, c = yh(this.R.dc());;) {
      var d = this.fb.pop();
      if (null != d) {
        var e = d.Na, h = d.O;
        vh(function(a) {
          return function() {
            return a.a ? a.a(!0) : a.call(null, !0);
          };
        }(e.Y, a.Y, e, h, d, b, c, this));
        oh(this.R, h);
      }
      break;
    }
    return c;
  }
  for (;;) {
    c = this.fb.pop();
    if (null != c) {
      return d = c.Na, e = c.O, h = d.Y, b = a.Y, vh(function(a) {
        return function() {
          return a.a ? a.a(!0) : a.call(null, !0);
        };
      }(h, b, d, e, c, this)), yh(e);
    }
    if (this.closed) {
      return b = a.Y, yh(null);
    }
    64 < this.ob ? (this.ob = 0, lh(this.hb, gh)) : this.ob += 1;
    if (!(1024 > this.hb.length)) {
      throw Error("Assert failed: " + D.a("No more than " + D.a(1024) + " pending takes are allowed on a single channel.") + "\n" + D.a(Jg.f(Q([Vd(new K(null, "\x3c", "\x3c", 993667236, null), Vd(new K(null, ".-length", ".-length", -280799999, null), new K(null, "takes", "takes", 298247964, null)), new K("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0))));
    }
    kh(this.hb, a);
    return null;
  }
};
Bh.prototype.Ab = function(a, b, c) {
  if (null == b) {
    throw Error("Assert failed: Can't put nil in on a channel\n" + D.a(Jg.f(Q([Vd(new K(null, "not", "not", 1044554643, null), Vd(new K(null, "nil?", "nil?", 1612038930, null), new K(null, "val", "val", 1769233139, null)))], 0))));
  }
  if (a = this.closed) {
    return yh(!a);
  }
  for (;;) {
    var d = this.hb.pop();
    if (null != d) {
      c = c.Y, vh(function(a) {
        return function() {
          return a.a ? a.a(b) : a.call(null, b);
        };
      }(d.Y, c, d, a, this));
    } else {
      if (null == this.R || this.R.zb()) {
        64 < this.nb ? (this.nb = 0, lh(this.fb, Ah)) : this.nb += 1;
        if (!(1024 > this.fb.length)) {
          throw Error("Assert failed: " + D.a("No more than " + D.a(1024) + " pending puts are allowed on a single channel. Consider using a windowed buffer.") + "\n" + D.a(Jg.f(Q([Vd(new K(null, "\x3c", "\x3c", 993667236, null), Vd(new K(null, ".-length", ".-length", -280799999, null), new K(null, "puts", "puts", -1883877054, null)), new K("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", 1508600732, null))], 0))));
        }
        kh(this.fb, new zh(c, b));
        return null;
      }
      c = c.Y;
      oh(this.R, b);
    }
    return yh(!0);
  }
};
var Ch, Eh = function Dh(b) {
  "undefined" === typeof Ch && (Ch = function(b, d, e) {
    this.Y = b;
    this.Cb = d;
    this.gc = e;
    this.o = 0;
    this.g = 393216;
  }, Ch.mb = !0, Ch.lb = "cljs.core.async.impl.ioc-helpers/t16811", Ch.Bb = function(b, d) {
    return F(d, "cljs.core.async.impl.ioc-helpers/t16811");
  }, Ch.prototype.Lb = function() {
    return!0;
  }, Ch.prototype.G = function() {
    return this.gc;
  }, Ch.prototype.H = function(b, d) {
    return new Ch(this.Y, this.Cb, d);
  });
  return new Ch(b, Dh, null);
};
function Fh(a) {
  try {
    return a[0].call(null, a);
  } catch (b) {
    if (b instanceof Object) {
      throw a[6].kb(), b;
    }
    if (B) {
      throw b;
    }
    return null;
  }
}
function Gh(a, b) {
  var c = b.ec(Eh(function(b) {
    a[2] = b;
    a[1] = 7;
    return Fh(a);
  }));
  return t(c) ? (a[2] = Wb(c), a[1] = 7, Z) : null;
}
function Hh(a, b) {
  var c = a[6];
  null != b && c.Ab(0, b, Eh(function() {
    return function() {
      return null;
    };
  }(c)));
  c.kb();
  return c;
}
function Ih(a) {
  for (;;) {
    var b = a[4], c = Xg.a(b), d = $g.a(b), e = a[5];
    if (t(function() {
      var a = e;
      return t(a) ? Xa(b) : a;
    }())) {
      throw e;
    }
    if (t(function() {
      var a = e;
      return t(a) ? (a = c, t(a) ? e instanceof d : a) : a;
    }())) {
      a[1] = c;
      a[2] = e;
      a[5] = null;
      a[4] = ad.f(b, Xg, null, Q([$g, null], 0));
      break;
    }
    if (t(function() {
      var a = e;
      return t(a) ? Xa(c) && Xa(Ug.a(b)) : a;
    }())) {
      a[4] = ah.a(b);
    } else {
      if (t(function() {
        var a = e;
        return t(a) ? (a = Xa(c)) ? Ug.a(b) : a : a;
      }())) {
        a[1] = Ug.a(b);
        a[4] = ad.d(b, Ug, null);
        break;
      }
      if (t(function() {
        var a = Xa(e);
        return a ? Ug.a(b) : a;
      }())) {
        a[1] = Ug.a(b);
        a[4] = ad.d(b, Ug, null);
        break;
      }
      if (Xa(e) && Xa(Ug.a(b))) {
        a[1] = bh.a(b);
        a[4] = ah.a(b);
        break;
      }
      if (B) {
        throw Error("No matching clause");
      }
      break;
    }
  }
}
;function Jh(a, b, c) {
  this.key = a;
  this.O = b;
  this.forward = c;
  this.o = 0;
  this.g = 2155872256;
}
Jh.prototype.v = function(a, b, c) {
  return Bg(b, Hg, "[", " ", "]", c, this);
};
Jh.prototype.I = function() {
  return ub(ub(Mc, this.O), this.key);
};
(function() {
  function a(a, b, c) {
    c = Array(c + 1);
    for (var f = 0;;) {
      if (f < c.length) {
        c[f] = null, f += 1;
      } else {
        break;
      }
    }
    return new Jh(a, b, c);
  }
  function b(a) {
    return c.d(null, null, a);
  }
  var c = null, c = function(c, e, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.d = a;
  return c;
})().a(0);
var Lh = function Kh(b) {
  "undefined" === typeof dh && (dh = function(b, d, e) {
    this.Y = b;
    this.Cb = d;
    this.fc = e;
    this.o = 0;
    this.g = 393216;
  }, dh.mb = !0, dh.lb = "cljs.core.async/t14135", dh.Bb = function(b, d) {
    return F(d, "cljs.core.async/t14135");
  }, dh.prototype.Lb = function() {
    return!0;
  }, dh.prototype.G = function() {
    return this.fc;
  }, dh.prototype.H = function(b, d) {
    return new dh(this.Y, this.Cb, d);
  });
  return new dh(b, Kh, null);
}, Mh = function() {
  function a(a) {
    a = Ic.b(a, 0) ? null : a;
    a = "number" === typeof a ? new nh(mh(a), a) : a;
    return new Bh(mh(32), 0, mh(32), 0, a, !1);
  }
  function b() {
    return c.a(null);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.i = b;
  c.a = a;
  return c;
}(), Nh = Lh(function() {
  return null;
}), Oh = function() {
  function a(a, b, c, d) {
    a = eh(a, b, Lh(c));
    return t(a) ? (b = Wb(a), t(d) ? c.a ? c.a(b) : c.call(null, b) : vh(function(a) {
      return function() {
        return c.a ? c.a(a) : c.call(null, a);
      };
    }(b, a, a)), b) : !0;
  }
  function b(a, b, c) {
    return d.k(a, b, c, !0);
  }
  function c(a, b) {
    var c = eh(a, b, Nh);
    return t(c) ? Wb(c) : !0;
  }
  var d = null, d = function(d, h, f, g) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, f);
      case 4:
        return a.call(this, d, h, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.d = b;
  d.k = a;
  return d;
}();
function $(a, b) {
  ca("display") ? Ph(a, b, "display") : Fa("display", fa(Ph, a));
}
function Ph(a, b, c) {
  a: {
    if (c = ha(c), void 0 === a.style[c]) {
      var d = (ya ? "Webkit" : xa ? "Moz" : wa ? "ms" : va ? "O" : null) + ia(c);
      if (void 0 !== a.style[d]) {
        c = d;
        break a;
      }
    }
  }
  c && (a.style[c] = b);
}
;var Qh = !wa || wa && 9 <= Ea, Rh = wa && !Ca("9");
!ya || Ca("528");
xa && Ca("1.9b") || wa && Ca("8") || va && Ca("9.5") || ya && Ca("528");
xa && !Ca("8") || wa && Ca("9");
function Sh(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.Nb = !1;
}
Sh.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
};
function Th(a) {
  Th[" "](a);
  return a;
}
Th[" "] = function() {
};
function Uh(a, b) {
  Sh.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.Mb = this.state = null;
  if (a) {
    var c = this.type = a.type;
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    if (d) {
      if (xa) {
        var e;
        a: {
          try {
            Th(d.nodeName);
            e = !0;
            break a;
          } catch (h) {
          }
          e = !1;
        }
        e || (d = null);
      }
    } else {
      "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
    }
    this.relatedTarget = d;
    this.offsetX = ya || void 0 !== a.offsetX ? a.offsetX : a.layerX;
    this.offsetY = ya || void 0 !== a.offsetY ? a.offsetY : a.layerY;
    this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
    this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
    this.screenX = a.screenX || 0;
    this.screenY = a.screenY || 0;
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.state = a.state;
    this.Mb = a;
    a.defaultPrevented && this.preventDefault();
  }
}
(function() {
  function a() {
  }
  a.prototype = Sh.prototype;
  Uh.kc = Sh.prototype;
  Uh.prototype = new a;
  Uh.prototype.constructor = Uh;
  Uh.mc = function(a, c, d) {
    return Sh.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2));
  };
})();
Uh.prototype.preventDefault = function() {
  Uh.kc.preventDefault.call(this);
  var a = this.Mb;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, Rh) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var Vh = "closure_listenable_" + (1E6 * Math.random() | 0), Wh = 0;
function Xh(a, b, c, d, e) {
  this.Va = a;
  this.pb = null;
  this.src = b;
  this.type = c;
  this.rb = !!d;
  this.Na = e;
  this.key = ++Wh;
  this.gb = this.qb = !1;
}
function Yh(a) {
  a.gb = !0;
  a.Va = null;
  a.pb = null;
  a.src = null;
  a.Na = null;
}
;function Zh(a) {
  this.src = a;
  this.Pa = {};
  this.Db = 0;
}
Zh.prototype.add = function(a, b, c, d, e) {
  var h = a.toString();
  a = this.Pa[h];
  a || (a = this.Pa[h] = [], this.Db++);
  var f;
  a: {
    for (f = 0;f < a.length;++f) {
      var g = a[f];
      if (!g.gb && g.Va == b && g.rb == !!d && g.Na == e) {
        break a;
      }
    }
    f = -1;
  }
  -1 < f ? (b = a[f], c || (b.qb = !1)) : (b = new Xh(b, this.src, h, !!d, e), b.qb = c, a.push(b));
  return b;
};
var $h = "closure_lm_" + (1E6 * Math.random() | 0), ai = {}, bi = 0;
function ci(a, b, c, d, e) {
  if ("array" == l(b)) {
    for (var h = 0;h < b.length;h++) {
      ci(a, b[h], c, d, e);
    }
  } else {
    if (c = di(c), a && a[Vh]) {
      a.wc(b, c, d, e);
    } else {
      if (!b) {
        throw Error("Invalid event type");
      }
      var h = !!d, f = ei(a);
      f || (a[$h] = f = new Zh(a));
      c = f.add(b, c, !1, d, e);
      c.pb || (d = fi(), c.pb = d, d.src = a, d.Va = c, a.addEventListener ? a.addEventListener(b.toString(), d, h) : a.attachEvent(gi(b.toString()), d), bi++);
    }
  }
}
function fi() {
  var a = hi, b = Qh ? function(c) {
    return a.call(b.src, b.Va, c);
  } : function(c) {
    c = a.call(b.src, b.Va, c);
    if (!c) {
      return c;
    }
  };
  return b;
}
function gi(a) {
  return a in ai ? ai[a] : ai[a] = "on" + a;
}
function lj(a, b, c, d) {
  var e = 1;
  if (a = ei(a)) {
    if (b = a.Pa[b.toString()]) {
      for (b = b.concat(), a = 0;a < b.length;a++) {
        var h = b[a];
        h && h.rb == c && !h.gb && (e &= !1 !== mj(h, d));
      }
    }
  }
  return Boolean(e);
}
function mj(a, b) {
  var c = a.Va, d = a.Na || a.src;
  if (a.qb && "number" != typeof a && a && !a.gb) {
    var e = a.src;
    if (e && e[Vh]) {
      e.xc(a);
    } else {
      var h = a.type, f = a.pb;
      e.removeEventListener ? e.removeEventListener(h, f, a.rb) : e.detachEvent && e.detachEvent(gi(h), f);
      bi--;
      if (h = ei(e)) {
        var f = a.type, g;
        if (g = f in h.Pa) {
          g = h.Pa[f];
          var m = ka(g, a), p;
          (p = 0 <= m) && ja.splice.call(g, m, 1);
          g = p;
        }
        g && (Yh(a), 0 == h.Pa[f].length && (delete h.Pa[f], h.Db--));
        0 == h.Db && (h.src = null, e[$h] = null);
      } else {
        Yh(a);
      }
    }
  }
  return c.call(d, b);
}
function hi(a, b) {
  if (a.gb) {
    return!0;
  }
  if (!Qh) {
    var c;
    if (!(c = b)) {
      a: {
        c = ["window", "event"];
        for (var d = aa, e;e = c.shift();) {
          if (null != d[e]) {
            d = d[e];
          } else {
            c = null;
            break a;
          }
        }
        c = d;
      }
    }
    e = c;
    c = new Uh(e, this);
    d = !0;
    if (!(0 > e.keyCode || void 0 != e.returnValue)) {
      a: {
        var h = !1;
        if (0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a;
          } catch (f) {
            h = !0;
          }
        }
        if (h || void 0 == e.returnValue) {
          e.returnValue = !0;
        }
      }
      e = [];
      for (h = c.currentTarget;h;h = h.parentNode) {
        e.push(h);
      }
      for (var h = a.type, g = e.length - 1;!c.Nb && 0 <= g;g--) {
        c.currentTarget = e[g], d &= lj(e[g], h, !0, c);
      }
      for (g = 0;!c.Nb && g < e.length;g++) {
        c.currentTarget = e[g], d &= lj(e[g], h, !1, c);
      }
    }
    return d;
  }
  return mj(a, new Uh(b, this));
}
function ei(a) {
  a = a[$h];
  return a instanceof Zh ? a : null;
}
var nj = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function di(a) {
  if ("function" == l(a)) {
    return a;
  }
  a[nj] || (a[nj] = function(b) {
    return a.handleEvent(b);
  });
  return a[nj];
}
;NodeList.prototype.Zb = !0;
NodeList.prototype.I = function() {
  return Q.b(this, 0);
};
var oj = Og.a(0), pj = Og.a(Math.pow.b ? Math.pow.b(10, 8) : Math.pow.call(null, 10, 8)), qj = (new Date).getTime();
function rj() {
  var a = Mh.i();
  setTimeout(function(a) {
    return function() {
      return fh(a);
    };
  }(a), 1E3);
  return a;
}
function sj(a) {
  var b = Md(a, Math.pow.b ? Math.pow.b(10, 8) : Math.pow.call(null, 10, 8)), c = Math.pow.b ? Math.pow.b(10, 8) : Math.pow.call(null, 10, 8), c = "00000000" + D.a((a % c + c) % c);
  return a >= (Math.pow.b ? Math.pow.b(10, 29) : Math.pow.call(null, 10, 29)) ? "" + D.a(b) : "" + D.a(b) + "." + D.a(Pd.b(c, S(c) - 8));
}
function tj(a) {
  var b = Mh.i();
  ci(a, "click", function(a) {
    return function(b) {
      return Oh.b(a, b);
    };
  }(b));
  return b;
}
function uj() {
  return s(r("satoshis-owned"), sj(Wb(oj)));
}
function vj(a) {
  return Wb(oj) >= a ? (Qg.d(oj, Kd, a), uj(Wb(oj)), !0) : !1;
}
var wj = Og.a(Ef);
function xj(a, b, c, d, e, h) {
  this.pa = a;
  this.na = b;
  this.qa = c;
  this.ua = d;
  this.J = e;
  this.s = h;
  this.g = 2229667594;
  this.o = 8192;
  4 < arguments.length ? (this.J = e, this.s = h) : this.s = this.J = null;
}
k = xj.prototype;
k.K = function(a, b) {
  return Bb.d(this, b, null);
};
k.L = function(a, b, c) {
  switch(b instanceof U ? b.ia : null) {
    case "satoshis-per-tick-per-miner":
      return this.ua;
    case "number-owned":
      return this.qa;
    case "cost-fn":
      return this.na;
    case "dom-selector":
      return this.pa;
    default:
      return Zc.d(this.s, b, c);
  }
};
k.v = function(a, b, c) {
  return Bg(b, function() {
    return function(a) {
      return Bg(b, Hg, "", " ", "", c, a);
    };
  }(this), "#bitcoin-clicker.bitcoin-clicker.Automatic-Miner{", ", ", "}", c, je.b(new X(null, 4, 5, Y, [new X(null, 2, 5, Y, [Yg, this.pa], null), new X(null, 2, 5, Y, [Tg, this.na], null), new X(null, 2, 5, Y, [Rg, this.qa], null), new X(null, 2, 5, Y, [ch, this.ua], null)], null), this.s));
};
k.G = function() {
  return this.J;
};
k.N = function() {
  return 4 + S(this.s);
};
k.F = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Qd(this);
};
k.A = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && Af(this, b) : b) ? !0 : !1;
};
k.Ya = function(a, b) {
  return td(new bg(null, new Pa(null, 4, [Rg, null, Tg, null, Yg, null, ch, null], null), null), b) ? bd.b(jd(re(Ef, this), this.J), b) : new xj(this.pa, this.na, this.qa, this.ua, this.J, ne(bd.b(this.s, b)), null);
};
k.Ma = function(a, b, c) {
  return t(V.b ? V.b(Yg, b) : V.call(null, Yg, b)) ? new xj(c, this.na, this.qa, this.ua, this.J, this.s, null) : t(V.b ? V.b(Tg, b) : V.call(null, Tg, b)) ? new xj(this.pa, c, this.qa, this.ua, this.J, this.s, null) : t(V.b ? V.b(Rg, b) : V.call(null, Rg, b)) ? new xj(this.pa, this.na, c, this.ua, this.J, this.s, null) : t(V.b ? V.b(ch, b) : V.call(null, ch, b)) ? new xj(this.pa, this.na, this.qa, c, this.J, this.s, null) : new xj(this.pa, this.na, this.qa, this.ua, this.J, ad.d(this.s, b, c), null);
};
k.I = function() {
  return L(je.b(new X(null, 4, 5, Y, [new X(null, 2, 5, Y, [Yg, this.pa], null), new X(null, 2, 5, Y, [Tg, this.na], null), new X(null, 2, 5, Y, [Rg, this.qa], null), new X(null, 2, 5, Y, [ch, this.ua], null)], null), this.s));
};
k.H = function(a, b) {
  return new xj(this.pa, this.na, this.qa, this.ua, b, this.s, this.m);
};
k.M = function(a, b) {
  return od(b) ? Db(this, E.b(b, 0), E.b(b, 1)) : Hd.d(ub, this, b);
};
function yj() {
  return Hd.d(function(a, b) {
    Yc.d(b, 0, null);
    var c = Yc.d(b, 1, null);
    return a + Rg.a(c) * ch.a(c);
  }, 0, Wb(wj));
}
function zj() {
  for (var a = L(Ga("mining-rate", r("inventory"))), b = null, c = 0, d = 0;;) {
    if (d < c) {
      var e = b.u(null, d);
      s(e, sj(yj()));
      d += 1;
    } else {
      if (a = L(a)) {
        b = a, T(b) ? (a = I(b), c = J(b), b = a, e = S(a), a = c, c = e) : (e = M(b), s(e, sj(yj())), a = O(b), b = null, c = 0), d = 0;
      } else {
        return null;
      }
    }
  }
}
var Aj = function() {
  function a(a, d, e, h) {
    var f = null;
    3 < arguments.length && (f = Q(Array.prototype.slice.call(arguments, 3), 0));
    return b.call(this, a, d, e, f);
  }
  function b(a, b, e, h) {
    Qg.k(wj, ad, a, new xj(a, b, 0, e));
    for (var f = r(a), g = tj(Ia("purchase-button", f)), m = Ia("purchase-statistic-button", f), p = tj(m), n = L(Ga("cost", f)), q = null, w = 0, x = 0;;) {
      if (x < w) {
        var v = q.u(null, x);
        s(v, sj(b.a ? b.a(0) : b.call(null, 0)));
        x += 1;
      } else {
        if (n = L(n)) {
          q = n, T(q) ? (n = I(q), x = J(q), q = n, w = S(n), n = x) : (n = M(q), s(n, sj(b.a ? b.a(0) : b.call(null, 0))), n = O(q), q = null, w = 0), x = 0;
        } else {
          break;
        }
      }
    }
    n = L(Ga("rate", f));
    q = null;
    for (x = w = 0;;) {
      if (x < w) {
        v = q.u(null, x), s(v, sj(e)), x += 1;
      } else {
        if (n = L(n)) {
          q = n, T(q) ? (n = I(q), x = J(q), q = n, w = S(n), n = x) : (n = M(q), s(n, sj(e)), n = O(q), q = null, w = 0), x = 0;
        } else {
          break;
        }
      }
    }
    Ja(m, {value:"Get statistics! (" + D.a(sj(b.a ? b.a(0) : b.call(null, 0))) + " btc)"});
    b = Mh.a(1);
    vh(function(b, d, e, n, f) {
      return function() {
        var g = function() {
          return function(a) {
            return function() {
              function b(c) {
                for (;;) {
                  var d = function() {
                    try {
                      for (;;) {
                        var b = a(c);
                        if (!V(b, Z)) {
                          return b;
                        }
                      }
                    } catch (d) {
                      if (d instanceof Object) {
                        return c[5] = d, Ih(c), Z;
                      }
                      if (B) {
                        throw d;
                      }
                      return null;
                    }
                  }();
                  if (!V(d, Z)) {
                    return d;
                  }
                }
              }
              function c() {
                var a = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
                a[0] = d;
                a[1] = 1;
                return a;
              }
              var d = null, d = function(a) {
                switch(arguments.length) {
                  case 0:
                    return c.call(this);
                  case 1:
                    return b.call(this, a);
                }
                throw Error("Invalid arity: " + arguments.length);
              };
              d.i = c;
              d.a = b;
              return d;
            }();
          }(function(b, d, e, n) {
            return function(b) {
              var f = b[1];
              if (65 === f) {
                var g = b, m = g;
                m[2] = b[2];
                m[1] = 62;
                return Z;
              }
              if (70 === f) {
                var q = g = b;
                q[2] = null;
                q[1] = 71;
                return Z;
              }
              if (62 === f) {
                var v = b[7], w = b[2], p = Ic.b(v, 1);
                b[8] = w;
                g = b;
                g[1] = p ? 78 : 79;
                return Z;
              }
              if (74 === f) {
                var Sb = b[2], ue = g = b;
                ue[2] = Sb;
                ue[1] = 71;
                return Z;
              }
              if (7 === f) {
                var z = b[9], v = b[7], G = b[2], eg = Wb(wj), dd = Zc.b(eg, a), x = Rg.a(dd), P = x + 1, A = Tg.a(dd), H = A.a ? A.a(x) : A.call(null, x), ba = Tg.a(dd), W = ba.a ? ba.a(P) : ba.call(null, P), Na = vj(H);
                b[9] = dd;
                b[10] = W;
                b[7] = P;
                b[11] = G;
                g = b;
                g[1] = Na ? 8 : 9;
                return Z;
              }
              if (59 === f) {
                var ud = g = b;
                ud[2] = "inline";
                ud[1] = 60;
                return Z;
              }
              if (86 === f) {
                var ta = b[12], ve = T(ta), g = b;
                g[1] = ve ? 89 : 90;
                return Z;
              }
              if (20 === f) {
                var W = b[10], Eb = b[13], fg = M(Eb), we = sj(W), gg = s(fg, we), ab = O(Eb), ua = null, bb = 0, cb = 0;
                b[14] = bb;
                b[15] = cb;
                b[16] = gg;
                b[17] = ab;
                b[18] = ua;
                var xe = g = b;
                xe[2] = null;
                xe[1] = 11;
                return Z;
              }
              if (72 === f) {
                var pa = b[19], lb = I(pa), mb = J(pa), db = S(lb), eb = mb, qa = lb, na = db, Ra = 0;
                b[20] = eb;
                b[21] = na;
                b[22] = Ra;
                b[23] = qa;
                var ye = g = b;
                ye[2] = null;
                ye[1] = 61;
                return Z;
              }
              if (58 === f) {
                var ze = g = b;
                ze[2] = "none";
                ze[1] = 60;
                return Z;
              }
              if (60 === f) {
                var fb = b[24], vd = b[25], Ae = $(vd, b[2]), gb = O(fb), nb = null, ob = 0, oa = 0;
                b[26] = nb;
                b[27] = oa;
                b[28] = ob;
                b[29] = Ae;
                b[30] = gb;
                var wd = g = b;
                wd[2] = null;
                wd[1] = 44;
                return Z;
              }
              if (27 === f) {
                var Fb = b[31], Be = T(Fb), g = b;
                g[1] = Be ? 30 : 31;
                return Z;
              }
              if (1 === f) {
                var xd = g = b;
                xd[2] = null;
                xd[1] = 2;
                return Z;
              }
              if (69 === f) {
                var pa = b[19], hg = T(pa), g = b;
                g[1] = hg ? 72 : 73;
                return Z;
              }
              if (24 === f) {
                var pb = b[32], qb = b[33], z = b[9], W = b[10], Gb = b[34], Sa = b[35], Ce = E.b(Gb, Sa), ig = ch.a(z), De = s(Ce, W / ig | 0), jg = Gb, kg = qb, Ee = Sa + 1;
                b[32] = pb;
                b[33] = kg;
                b[36] = De;
                b[34] = jg;
                b[35] = Ee;
                var Fe = g = b;
                Fe[2] = null;
                Fe[1] = 22;
                return Z;
              }
              if (55 === f) {
                var fb = b[24], yd = I(fb), lg = J(fb), Hb = S(yd), gb = lg, nb = yd, ob = Hb, oa = 0;
                b[26] = nb;
                b[27] = oa;
                b[28] = ob;
                b[30] = gb;
                var Ge = g = b;
                Ge[2] = null;
                Ge[1] = 44;
                return Z;
              }
              if (85 === f) {
                var zd = b[2], Ad = g = b;
                Ad[2] = zd;
                Ad[1] = 82;
                return Z;
              }
              if (39 === f) {
                var He = g = b;
                He[2] = null;
                He[1] = 40;
                return Z;
              }
              if (88 === f) {
                var Ie = b[2], Je = g = b;
                Je[2] = Ie;
                Je[1] = 85;
                return Z;
              }
              if (46 === f) {
                var nb = b[26], oa = b[27], v = b[7], ed = E.b(nb, oa), mg = Ic.b(1, v);
                b[37] = ed;
                g = b;
                g[1] = mg ? 49 : 50;
                return Z;
              }
              if (4 === f) {
                return g = b, Gh(g, e);
              }
              if (77 === f) {
                var pa = b[19], fd = b[38], ng = $(fd, b[2]), eb = O(pa), qa = null, Ra = na = 0;
                b[20] = eb;
                b[21] = na;
                b[39] = ng;
                b[22] = Ra;
                b[23] = qa;
                var Ke = g = b;
                Ke[2] = null;
                Ke[1] = 61;
                return Z;
              }
              if (54 === f) {
                var Bd = b[2], Cd = g = b;
                Cd[2] = Bd;
                Cd[1] = 48;
                return Z;
              }
              if (15 === f) {
                var og = b[2], Le = g = b;
                Le[2] = og;
                Le[1] = 12;
                return Z;
              }
              if (48 === f) {
                var pg = b[2], Dd = g = b;
                Dd[2] = pg;
                Dd[1] = 45;
                return Z;
              }
              if (50 === f) {
                var Me = g = b;
                Me[2] = "inline";
                Me[1] = 51;
                return Z;
              }
              if (75 === f) {
                var Ne = g = b;
                Ne[2] = "inline";
                Ne[1] = 77;
                return Z;
              }
              if (21 === f) {
                var Oe = b[2], Pe = g = b;
                Pe[2] = Oe;
                Pe[1] = 18;
                return Z;
              }
              if (31 === f) {
                var Fb = b[31], z = b[9], W = b[10], qg = M(Fb), rg = ch.a(z), sg = s(qg, W / rg | 0), pb = O(Fb), Gb = null, Sa = qb = 0;
                b[32] = pb;
                b[33] = qb;
                b[40] = sg;
                b[34] = Gb;
                b[35] = Sa;
                var Qe = g = b;
                Qe[2] = null;
                Qe[1] = 22;
                return Z;
              }
              if (32 === f) {
                var Re = b[2], Se = g = b;
                Se[2] = Re;
                Se[1] = 29;
                return Z;
              }
              if (40 === f) {
                var Ed = b[2], Fd = g = b;
                Fd[2] = Ed;
                Fd[1] = 37;
                return Z;
              }
              if (91 === f) {
                var tg = b[2], Te = g = b;
                Te[2] = tg;
                Te[1] = 88;
                return Z;
              }
              if (56 === f) {
                var fb = b[24], v = b[7], vd = M(fb), ug = Ic.b(1, v);
                b[25] = vd;
                g = b;
                g[1] = ug ? 58 : 59;
                return Z;
              }
              if (33 === f) {
                var hb = b[41], rb = b[42], vg = hb < rb, g = b;
                g[1] = t(vg) ? 35 : 36;
                return Z;
              }
              if (13 === f) {
                var bb = b[14], W = b[10], cb = b[15], ab = b[17], ua = b[18], Ue = E.b(ua, cb), wg = sj(W), Ve = s(Ue, wg), xg = ab, We = ua, Xe = cb + 1;
                b[14] = bb;
                b[15] = Xe;
                b[43] = Ve;
                b[17] = xg;
                b[18] = We;
                var Ye = g = b;
                Ye[2] = null;
                Ye[1] = 11;
                return Z;
              }
              if (22 === f) {
                var qb = b[33], Sa = b[35], yg = Sa < qb, g = b;
                g[1] = t(yg) ? 24 : 25;
                return Z;
              }
              if (90 === f) {
                var ta = b[12], zg = M(ta), Ze = $(r(zg), "block"), ib = O(ta), dc = null, Tb = 0, Ib = 0;
                b[44] = dc;
                b[45] = Tb;
                b[46] = Ze;
                b[47] = Ib;
                b[48] = ib;
                var qi = g = b;
                qi[2] = null;
                qi[1] = 81;
                return Z;
              }
              if (36 === f) {
                var Ub = b[49], ec = b[50], ri = L(Ub);
                b[50] = ri;
                g = b;
                g[1] = ri ? 38 : 39;
                return Z;
              }
              if (41 === f) {
                var ec = b[50], si = I(ec), zk = J(ec), Ak = S(si), Ub = zk, fc = si, rb = Ak, hb = 0;
                b[41] = hb;
                b[49] = Ub;
                b[42] = rb;
                b[51] = fc;
                var ti = g = b;
                ti[2] = null;
                ti[1] = 33;
                return Z;
              }
              if (89 === f) {
                var ta = b[12], ui = I(ta), Bk = J(ta), Ck = S(ui), ib = Bk, dc = ui, Tb = Ck, Ib = 0;
                b[44] = dc;
                b[45] = Tb;
                b[47] = Ib;
                b[48] = ib;
                var vi = g = b;
                vi[2] = null;
                vi[1] = 81;
                return Z;
              }
              if (43 === f) {
                var Dk = b[2], wi = g = b;
                wi[2] = Dk;
                wi[1] = 40;
                return Z;
              }
              if (61 === f) {
                var na = b[21], Ra = b[22], Ek = Ra < na, g = b;
                g[1] = t(Ek) ? 63 : 64;
                return Z;
              }
              if (29 === f) {
                var Fk = b[2], xi = g = b;
                xi[2] = Fk;
                xi[1] = 26;
                return Z;
              }
              if (44 === f) {
                var oa = b[27], ob = b[28], Gk = oa < ob, g = b;
                g[1] = t(Gk) ? 46 : 47;
                return Z;
              }
              if (6 === f) {
                var Hk = b[2], yi = g = b;
                yi[2] = Hk;
                yi[1] = 3;
                return Z;
              }
              if (28 === f) {
                var zi = g = b;
                zi[2] = null;
                zi[1] = 29;
                return Z;
              }
              if (64 === f) {
                var pa = b[19], eb = b[20], Ai = L(eb);
                b[19] = Ai;
                g = b;
                g[1] = Ai ? 69 : 70;
                return Z;
              }
              if (51 === f) {
                var nb = b[26], oa = b[27], ob = b[28], ed = b[37], gb = b[30], Ik = $(ed, b[2]), Jk = gb, Kk = ob, Lk = oa + 1;
                b[26] = nb;
                b[27] = Lk;
                b[28] = Kk;
                b[52] = Ik;
                b[30] = Jk;
                var Bi = g = b;
                Bi[2] = null;
                Bi[1] = 44;
                return Z;
              }
              if (25 === f) {
                var pb = b[32], Fb = b[31], Ci = L(pb);
                b[31] = Ci;
                g = b;
                g[1] = Ci ? 27 : 28;
                return Z;
              }
              if (34 === f) {
                var Mk = b[2], Nk = Ga("plural", d), gb = L(Nk), nb = null, oa = ob = 0;
                b[26] = nb;
                b[27] = oa;
                b[28] = ob;
                b[53] = Mk;
                b[30] = gb;
                var Di = g = b;
                Di[2] = null;
                Di[1] = 44;
                return Z;
              }
              if (17 === f) {
                var Ei = g = b;
                Ei[2] = null;
                Ei[1] = 18;
                return Z;
              }
              if (3 === f) {
                var Ok = b[2], g = b;
                return Hh(g, Ok);
              }
              if (12 === f) {
                var Pk = b[2], Qk = Ga("payback-time", d), pb = L(Qk), Gb = null, Sa = qb = 0;
                b[32] = pb;
                b[33] = qb;
                b[54] = Pk;
                b[34] = Gb;
                b[35] = Sa;
                var Fi = g = b;
                Fi[2] = null;
                Fi[1] = 22;
                return Z;
              }
              if (2 === f) {
                return g = b, g[1] = 4, Z;
              }
              if (66 === f) {
                var Gi = g = b;
                Gi[2] = "inline";
                Gi[1] = 68;
                return Z;
              }
              if (23 === f) {
                var W = b[10], Rk = b[2], Sk = sj(W), Tk = {value:"Get statistics! (" + D.a(Sk) + " btc)"}, Uk = Ja(n, Tk), Vk = Ga("number", d), Ub = L(Vk), fc = null, hb = rb = 0;
                b[41] = hb;
                b[49] = Ub;
                b[42] = rb;
                b[51] = fc;
                b[55] = Rk;
                b[56] = Uk;
                var Hi = g = b;
                Hi[2] = null;
                Hi[1] = 33;
                return Z;
              }
              if (47 === f) {
                var fb = b[24], gb = b[30], Ii = L(gb);
                b[24] = Ii;
                g = b;
                g[1] = Ii ? 52 : 53;
                return Z;
              }
              if (35 === f) {
                var hb = b[41], Ub = b[49], rb = b[42], fc = b[51], v = b[7], Wk = E.b(fc, hb), Xk = s(Wk, v), Yk = Ub, Zk = fc, $k = rb;
                b[41] = hb + 1;
                b[49] = Yk;
                b[42] = $k;
                b[51] = Zk;
                b[57] = Xk;
                var Ji = g = b;
                Ji[2] = null;
                Ji[1] = 33;
                return Z;
              }
              if (82 === f) {
                var al = b[2], Ki = g = b;
                Ki[2] = al;
                Ki[1] = 80;
                return Z;
              }
              if (76 === f) {
                var Li = g = b;
                Li[2] = "none";
                Li[1] = 77;
                return Z;
              }
              if (19 === f) {
                var Eb = b[13], Mi = I(Eb), bl = J(Eb), cl = S(Mi), ab = bl, ua = Mi, bb = cl, cb = 0;
                b[14] = bb;
                b[15] = cb;
                b[17] = ab;
                b[18] = ua;
                var Ni = g = b;
                Ni[2] = null;
                Ni[1] = 11;
                return Z;
              }
              if (57 === f) {
                var dl = b[2], Oi = g = b;
                Oi[2] = dl;
                Oi[1] = 54;
                return Z;
              }
              if (68 === f) {
                var eb = b[20], na = b[21], Ag = b[58], Ra = b[22], qa = b[23], el = $(Ag, b[2]), fl = qa, gl = na, hl = Ra + 1;
                b[20] = eb;
                b[21] = gl;
                b[22] = hl;
                b[23] = fl;
                b[59] = el;
                var Pi = g = b;
                Pi[2] = null;
                Pi[1] = 61;
                return Z;
              }
              if (11 === f) {
                var bb = b[14], cb = b[15], il = cb < bb, g = b;
                g[1] = t(il) ? 13 : 14;
                return Z;
              }
              if (9 === f) {
                var Qi = g = b;
                Qi[2] = null;
                Qi[1] = 10;
                return Z;
              }
              if (5 === f) {
                var Ri = g = b;
                Ri[2] = null;
                Ri[1] = 6;
                return Z;
              }
              if (83 === f) {
                var dc = b[44], Tb = b[45], Ib = b[47], ib = b[48], jl = E.b(dc, Ib), kl = $(r(jl), "block"), ll = ib, ml = Tb, nl = Ib + 1;
                b[44] = dc;
                b[45] = ml;
                b[47] = nl;
                b[60] = kl;
                b[48] = ll;
                var Si = g = b;
                Si[2] = null;
                Si[1] = 81;
                return Z;
              }
              if (14 === f) {
                var Eb = b[13], ab = b[17], Ti = L(ab);
                b[13] = Ti;
                g = b;
                g[1] = Ti ? 16 : 17;
                return Z;
              }
              if (45 === f) {
                var ol = b[2], pl = Ga("singular", d), eb = L(pl), qa = null, Ra = na = 0;
                b[20] = eb;
                b[21] = na;
                b[61] = ol;
                b[22] = Ra;
                b[23] = qa;
                var Ui = g = b;
                Ui[2] = null;
                Ui[1] = 61;
                return Z;
              }
              if (53 === f) {
                var Vi = g = b;
                Vi[2] = null;
                Vi[1] = 54;
                return Z;
              }
              if (78 === f) {
                ib = L(h);
                dc = null;
                Ib = Tb = 0;
                b[44] = dc;
                b[45] = Tb;
                b[47] = Ib;
                b[48] = ib;
                var Wi = g = b;
                Wi[2] = null;
                Wi[1] = 81;
                return Z;
              }
              if (26 === f) {
                var ql = b[2], Xi = g = b;
                Xi[2] = ql;
                Xi[1] = 23;
                return Z;
              }
              if (16 === f) {
                var Eb = b[13], rl = T(Eb), g = b;
                g[1] = rl ? 19 : 20;
                return Z;
              }
              if (81 === f) {
                var Tb = b[45], Ib = b[47], sl = Ib < Tb, g = b;
                g[1] = t(sl) ? 83 : 84;
                return Z;
              }
              if (79 === f) {
                var Yi = g = b;
                Yi[2] = null;
                Yi[1] = 80;
                return Z;
              }
              if (38 === f) {
                var ec = b[50], tl = T(ec), g = b;
                g[1] = tl ? 41 : 42;
                return Z;
              }
              if (87 === f) {
                var Zi = g = b;
                Zi[2] = null;
                Zi[1] = 88;
                return Z;
              }
              if (30 === f) {
                var Fb = b[31], $i = I(Fb), ul = J(Fb), vl = S($i), pb = ul, Gb = $i, qb = vl, Sa = 0;
                b[32] = pb;
                b[33] = qb;
                b[34] = Gb;
                b[35] = Sa;
                var aj = g = b;
                aj[2] = null;
                aj[1] = 22;
                return Z;
              }
              if (73 === f) {
                var pa = b[19], v = b[7], fd = M(pa), wl = Ic.b(1, v);
                b[38] = fd;
                g = b;
                g[1] = wl ? 75 : 76;
                return Z;
              }
              if (10 === f) {
                b[62] = b[2];
                var bj = g = b;
                bj[2] = null;
                bj[1] = 2;
                return Z;
              }
              if (18 === f) {
                var xl = b[2], cj = g = b;
                cj[2] = xl;
                cj[1] = 15;
                return Z;
              }
              if (52 === f) {
                var fb = b[24], yl = T(fb), g = b;
                g[1] = yl ? 55 : 56;
                return Z;
              }
              if (67 === f) {
                var dj = g = b;
                dj[2] = "none";
                dj[1] = 68;
                return Z;
              }
              if (71 === f) {
                var zl = b[2], ej = g = b;
                ej[2] = zl;
                ej[1] = 65;
                return Z;
              }
              if (42 === f) {
                var ec = b[50], v = b[7], Al = M(ec), Bl = s(Al, v), Ub = O(ec), fc = null, hb = rb = 0;
                b[41] = hb;
                b[49] = Ub;
                b[63] = Bl;
                b[42] = rb;
                b[51] = fc;
                var fj = g = b;
                fj[2] = null;
                fj[1] = 33;
                return Z;
              }
              if (80 === f) {
                var Cl = b[2], gj = g = b;
                gj[2] = Cl;
                gj[1] = 10;
                return Z;
              }
              if (37 === f) {
                var Dl = b[2], hj = g = b;
                hj[2] = Dl;
                hj[1] = 34;
                return Z;
              }
              if (63 === f) {
                var Ra = b[22], qa = b[23], v = b[7], Ag = E.b(qa, Ra), El = Ic.b(1, v);
                b[58] = Ag;
                g = b;
                g[1] = El ? 66 : 67;
                return Z;
              }
              if (8 === f) {
                var z = b[9], v = b[7], Fl = ad.d(z, Rg, v), Gl = Qg.k(wj, ad, a, Fl), Hl = zj(), Il = Ga("cost", d), ab = L(Il), ua = null, cb = bb = 0;
                b[64] = Hl;
                b[14] = bb;
                b[15] = cb;
                b[17] = ab;
                b[18] = ua;
                b[65] = Gl;
                var ij = g = b;
                ij[2] = null;
                ij[1] = 11;
                return Z;
              }
              if (49 === f) {
                var jj = g = b;
                jj[2] = "none";
                jj[1] = 51;
                return Z;
              }
              if (84 === f) {
                var ta = b[12], ib = b[48], kj = L(ib);
                b[12] = kj;
                g = b;
                g[1] = kj ? 86 : 87;
                return Z;
              }
              return null;
            };
          }(b, d, e, n, f), b, d, e, n, f);
        }(), m = function() {
          var a = g.i ? g.i() : g.call(null);
          a[6] = b;
          return a;
        }();
        return Fh(m);
      };
    }(b, f, g, m, p));
    b = Mh.a(1);
    vh(function(b, d, e, f, g) {
      return function() {
        var h = function() {
          return function(a) {
            return function() {
              function b(c) {
                for (;;) {
                  var d = function() {
                    try {
                      for (;;) {
                        var b = a(c);
                        if (!V(b, Z)) {
                          return b;
                        }
                      }
                    } catch (d) {
                      if (d instanceof Object) {
                        return c[5] = d, Ih(c), Z;
                      }
                      if (B) {
                        throw d;
                      }
                      return null;
                    }
                  }();
                  if (!V(d, Z)) {
                    return d;
                  }
                }
              }
              function c() {
                var a = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
                a[0] = d;
                a[1] = 1;
                return a;
              }
              var d = null, d = function(a) {
                switch(arguments.length) {
                  case 0:
                    return c.call(this);
                  case 1:
                    return b.call(this, a);
                }
                throw Error("Invalid arity: " + arguments.length);
              };
              d.i = c;
              d.a = b;
              return d;
            }();
          }(function(b, d, e, f, g) {
            return function(b) {
              var e = b[1];
              if (7 === e) {
                var f = b[7], e = b[8], e = b[2], h = Wb(wj), h = Zc.b(h, a), f = Tg.a(h), n = Rg.a(h), f = f.a ? f.a(n) : f.call(null, n), n = vj(f);
                b[9] = e;
                b[7] = h;
                b[8] = f;
                b[1] = n ? 8 : 9;
                return Z;
              }
              if (20 === e) {
                var f = b[7], h = b[10], e = b[8], n = M(h), f = ch.a(f), e = s(n, e / f | 0), h = O(h), m, q;
                b[11] = h;
                b[12] = e;
                b[13] = 0;
                b[14] = 0;
                b[15] = null;
                b[2] = null;
                b[1] = 11;
                return Z;
              }
              if (1 === e) {
                return b[2] = null, b[1] = 2, Z;
              }
              if (4 === e) {
                return Gh(b, g);
              }
              if (15 === e) {
                return e = b[2], b[2] = e, b[1] = 12, Z;
              }
              if (21 === e) {
                return e = b[2], b[2] = e, b[1] = 18, Z;
              }
              if (13 === e) {
                h = b[11];
                f = b[7];
                q = b[13];
                e = b[8];
                m = b[14];
                var n = b[15], Sb = E.b(n, q), f = ch.a(f), e = s(Sb, e / f | 0);
                b[11] = h;
                b[16] = e;
                b[13] = q + 1;
                b[14] = m;
                b[15] = n;
                b[2] = null;
                b[1] = 11;
                return Z;
              }
              return 6 === e ? (e = b[2], b[2] = e, b[1] = 3, Z) : 17 === e ? (b[2] = null, b[1] = 18, Z) : 3 === e ? (e = b[2], Hh(b, e)) : 12 === e ? (e = b[2], h = Ia("statistics", d), h = Ia("purchased", h), h = $(h, "inline"), f = Ia("statistics", d), f = Ia("not-purchased", f), f = $(f, "none"), b[17] = h, b[18] = e, b[2] = f, b[1] = 10, Z) : 2 === e ? (b[1] = 4, Z) : 19 === e ? (h = b[10], e = I(h), h = J(h), f = S(e), b[11] = h, b[13] = 0, b[14] = f, b[15] = e, b[2] = null, b[1] = 11, Z) : 
              11 === e ? (q = b[13], m = b[14], e = q < m, b[1] = t(e) ? 13 : 14, Z) : 9 === e ? (b[2] = null, b[1] = 10, Z) : 5 === e ? (b[2] = null, b[1] = 6, Z) : 14 === e ? (h = b[11], e = L(h), b[10] = e, b[1] = e ? 16 : 17, Z) : 16 === e ? (h = b[10], e = T(h), b[1] = e ? 19 : 20, Z) : 10 === e ? (b[19] = b[2], b[2] = null, b[1] = 2, Z) : 18 === e ? (e = b[2], b[2] = e, b[1] = 15, Z) : 8 === e ? (e = Ga("payback-time", d), h = L(e), b[11] = h, b[13] = 0, b[14] = 0, b[15] = null, b[2] = null, 
              b[1] = 11, Z) : null;
            };
          }(b, d, e, f, g), b, d, e, f, g);
        }(), n = function() {
          var a = h.i ? h.i() : h.call(null);
          a[6] = b;
          return a;
        }();
        return Fh(n);
      };
    }(b, f, g, m, p));
    return b;
  }
  a.p = 3;
  a.l = function(a) {
    var d = M(a);
    a = O(a);
    var e = M(a);
    a = O(a);
    var h = M(a);
    a = N(a);
    return b(d, e, h, a);
  };
  a.f = b;
  return a;
}(), Bj = function() {
  function a(a, b) {
    return function(c) {
      return a * (Math.pow.b ? Math.pow.b(b, c) : Math.pow.call(null, b, c)) | 0;
    };
  }
  function b(a) {
    return c.b(a, 1.1);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
Aj.f("mark-i", Bj.a(750), 11, Q(["4004"], 0));
Aj.f("4004", Bj.a(1500), 25, Q(["8086"], 0));
Aj.f("8086", Bj.a(2500), 50, Q(["80286", "pentium-4"], 0));
Aj.f("pentium-4", Bj.a(1E4), 250, Q(["arduino", "air-cooling"], 0));
Aj.f("arduino", Bj.a(3E4), 600, Q(["gpu-mining"], 0));
Aj.f("color-graphics-adapter", Bj.a(1E5), 2E3, Q(["GeForce-256"], 0));
Aj.f("GeForce-256", Bj.a(256E4), 25656, Q(["OpenGL"], 0));
Aj("OpenGL", Bj.a(1E7), 999999);
for (var Cj = tj(r("80286-purchase-button")), Dj = L(Ga("cost", r("80286"))), Ej = null, Fj = 0, Gj = 0;;) {
  if (Gj < Fj) {
    var Hj = Ej.u(null, Gj);
    s(Hj, sj(1E4));
    Gj += 1;
  } else {
    var Ij = L(Dj);
    if (Ij) {
      var Jj = Ij;
      if (T(Jj)) {
        var Kj = I(Jj), Lj = J(Jj), Mj = Kj, Nj = S(Kj), Dj = Lj, Ej = Mj, Fj = Nj
      } else {
        var Oj = M(Jj);
        s(Oj, sj(1E4));
        Dj = O(Jj);
        Ej = null;
        Fj = 0;
      }
      Gj = 0;
    } else {
      break;
    }
  }
}
var Pj = Mh.a(1);
vh(function(a, b, c, d) {
  return function() {
    var e = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var d = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!V(b, Z)) {
                      return b;
                    }
                  }
                } catch (d) {
                  if (d instanceof Object) {
                    return c[5] = d, Ih(c), Z;
                  }
                  if (B) {
                    throw d;
                  }
                  return null;
                }
              }();
              if (!V(d, Z)) {
                return d;
              }
            }
          }
          function c() {
            var a = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
            a[0] = d;
            a[1] = 1;
            return a;
          }
          var d = null, d = function(a) {
            switch(arguments.length) {
              case 0:
                return c.call(this);
              case 1:
                return b.call(this, a);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          d.i = c;
          d.a = b;
          return d;
        }();
      }(function(a, b, c, d) {
        return function(a) {
          var e = a[1];
          if (7 === e) {
            var f;
            a[7] = a[2];
            f = a;
            f[1] = c ? 8 : 9;
            return Z;
          }
          if (20 === e) {
            var h = f = a;
            h[2] = null;
            h[1] = 21;
            return Z;
          }
          if (27 === e) {
            var v = a[8], z = a[9], A = a[10], H = a[11], G = E.b(z, A), P = sj(100), ba = s(G, P), W = H, Na = z, u = v, Qb = A + 1;
            a[12] = ba;
            a[8] = u;
            a[9] = Na;
            a[10] = Qb;
            a[11] = W;
            var cd = f = a;
            cd[2] = null;
            cd[1] = 25;
            return Z;
          }
          if (1 === e) {
            var ii = f = a;
            ii[2] = null;
            ii[1] = 2;
            return Z;
          }
          if (24 === e) {
            var sk = a[2], ji = f = a;
            ji[2] = sk;
            ji[1] = 21;
            return Z;
          }
          if (39 === e) {
            var cc = a[13], Rb = a[14], ki = L(Rb);
            a[13] = ki;
            f = a;
            f[1] = ki ? 41 : 42;
            return Z;
          }
          if (46 === e) {
            var tk = a[2], li = f = a;
            li[2] = tk;
            li[1] = 43;
            return Z;
          }
          if (4 === e) {
            return f = a, Gh(f, b);
          }
          if (15 === e) {
            var Sb = a[15], ue = a[2], uk = Ia("purchase-button", Sb), vk = Ja(uk, {value:"Buy 80286 of these. Or just one."}), eg = Ja(r("8086-link"), {href:"https://en.wikipedia.org/wiki/Intel_80286"}), dd = Ga("rate", Sb), H = L(dd), z = null, A = v = 0;
            a[16] = vk;
            a[17] = ue;
            a[8] = v;
            a[9] = z;
            a[18] = eg;
            a[10] = A;
            a[11] = H;
            var mi = f = a;
            mi[2] = null;
            mi[1] = 25;
            return Z;
          }
          if (21 === e) {
            var wk = a[2], ni = f = a;
            ni[2] = wk;
            ni[1] = 18;
            return Z;
          }
          if (31 === e) {
            var oi = f = a;
            oi[2] = null;
            oi[1] = 32;
            return Z;
          }
          if (32 === e) {
            var xk = a[2], pi = f = a;
            pi[2] = xk;
            pi[1] = 29;
            return Z;
          }
          if (40 === e) {
            var yk = a[2], ud = f = a;
            ud[2] = yk;
            ud[1] = 37;
            return Z;
          }
          if (33 === e) {
            var ta = a[19], ve = I(ta), Eb = J(ta), fg = S(ve), H = Eb, z = ve, v = fg, A = 0;
            a[8] = v;
            a[9] = z;
            a[10] = A;
            a[11] = H;
            var we = f = a;
            we[2] = null;
            we[1] = 25;
            return Z;
          }
          if (13 === e) {
            var gg = a[2], ab = f = a;
            ab[2] = gg;
            ab[1] = 10;
            return Z;
          }
          if (22 === e) {
            var ua = a[20], bb = I(ua), cb = J(ua), xe = S(bb), pa = cb, lb = bb, mb = xe, db = 0;
            a[21] = mb;
            a[22] = db;
            a[23] = lb;
            a[24] = pa;
            var eb = f = a;
            eb[2] = null;
            eb[1] = 14;
            return Z;
          }
          if (36 === e) {
            var qa = a[25], na = a[26], Ra = na < qa;
            f = a;
            f[1] = t(Ra) ? 38 : 39;
            return Z;
          }
          if (41 === e) {
            var cc = a[13], ye = T(cc);
            f = a;
            f[1] = ye ? 44 : 45;
            return Z;
          }
          if (43 === e) {
            var ze = a[2], fb = f = a;
            fb[2] = ze;
            fb[1] = 40;
            return Z;
          }
          if (29 === e) {
            var vd = a[2], Ae = f = a;
            Ae[2] = vd;
            Ae[1] = 26;
            return Z;
          }
          if (44 === e) {
            var cc = a[13], gb = I(cc), nb = J(cc), ob = S(gb), Rb = nb, oa = gb, qa = ob, na = 0;
            a[27] = oa;
            a[25] = qa;
            a[26] = na;
            a[14] = Rb;
            var wd = f = a;
            wd[2] = null;
            wd[1] = 36;
            return Z;
          }
          if (6 === e) {
            var Fb = a[2], Be = f = a;
            Be[2] = Fb;
            Be[1] = 3;
            return Z;
          }
          if (28 === e) {
            var ta = a[19], H = a[11], xd = L(H);
            a[19] = xd;
            f = a;
            f[1] = xd ? 30 : 31;
            return Z;
          }
          if (25 === e) {
            var v = a[8], A = a[10], hg = A < v;
            f = a;
            f[1] = t(hg) ? 27 : 28;
            return Z;
          }
          if (34 === e) {
            var ta = a[19], pb = M(ta), qb = sj(100), Gb = s(pb, qb), H = O(ta), z = null, A = v = 0;
            a[8] = v;
            a[28] = Gb;
            a[9] = z;
            a[10] = A;
            a[11] = H;
            var Sa = f = a;
            Sa[2] = null;
            Sa[1] = 25;
            return Z;
          }
          if (17 === e) {
            var ua = a[20], pa = a[24], Ce = L(pa);
            a[20] = Ce;
            f = a;
            f[1] = Ce ? 19 : 20;
            return Z;
          }
          if (3 === e) {
            var ig = a[2];
            f = a;
            return Hh(f, ig);
          }
          if (12 === e) {
            var De = f = a;
            De[2] = null;
            De[1] = 13;
            return Z;
          }
          if (2 === e) {
            return f = a, f[1] = 4, Z;
          }
          if (23 === e) {
            var ua = a[20], jg = M(ua), kg = s(jg, "80286"), pa = O(ua), lb = null, db = mb = 0;
            a[21] = mb;
            a[22] = db;
            a[29] = kg;
            a[23] = lb;
            a[24] = pa;
            var Ee = f = a;
            Ee[2] = null;
            Ee[1] = 14;
            return Z;
          }
          if (35 === e) {
            var Fe = a[2], yd = f = a;
            yd[2] = Fe;
            yd[1] = 32;
            return Z;
          }
          if (19 === e) {
            var ua = a[20], lg = T(ua);
            f = a;
            f[1] = lg ? 22 : 23;
            return Z;
          }
          if (11 === e) {
            var Sb = a[15], Hb = a[30], Ge = Qg.k(wj, te, new X(null, 2, 5, Y, ["8086", ch], null), 100), zd = Wb(wj), Ad = zd.a ? zd.a("8086") : zd.call(null, "8086"), He = Yg.a(Ad), Ie = r(He), Je = Ga("miner-name", Ie), pa = L(Je), lb = null, db = mb = 0;
            a[21] = mb;
            a[22] = db;
            a[15] = Ie;
            a[23] = lb;
            a[30] = Ad;
            a[31] = Ge;
            a[24] = pa;
            var ed = f = a;
            ed[2] = null;
            ed[1] = 14;
            return Z;
          }
          if (9 === e) {
            var mg = vj(d);
            f = a;
            f[1] = mg ? 11 : 12;
            return Z;
          }
          if (5 === e) {
            var fd = f = a;
            fd[2] = null;
            fd[1] = 6;
            return Z;
          }
          if (14 === e) {
            var mb = a[21], db = a[22], ng = db < mb;
            f = a;
            f[1] = t(ng) ? 16 : 17;
            return Z;
          }
          if (45 === e) {
            var cc = a[13], Hb = a[30], Ke = M(cc), Bd = Tg.a(Hb), Cd = Rg.a(Hb), og = Bd.a ? Bd.a(Cd) : Bd.call(null, Cd), Le = ch.a(Hb), pg = s(Ke, og / Le | 0), Rb = O(cc), oa = null, na = qa = 0;
            a[27] = oa;
            a[25] = qa;
            a[32] = pg;
            a[26] = na;
            a[14] = Rb;
            var Dd = f = a;
            Dd[2] = null;
            Dd[1] = 36;
            return Z;
          }
          if (26 === e) {
            var Sb = a[15], Me = a[2], Ne = Ga("payback-time", Sb), Rb = L(Ne), oa = null, na = qa = 0;
            a[27] = oa;
            a[25] = qa;
            a[26] = na;
            a[33] = Me;
            a[14] = Rb;
            var Oe = f = a;
            Oe[2] = null;
            Oe[1] = 36;
            return Z;
          }
          if (16 === e) {
            var mb = a[21], db = a[22], lb = a[23], pa = a[24], Pe = E.b(lb, db), qg = s(Pe, "80286"), rg = pa, sg = lb, Qe = db + 1;
            a[21] = mb;
            a[22] = Qe;
            a[34] = qg;
            a[23] = sg;
            a[24] = rg;
            var Re = f = a;
            Re[2] = null;
            Re[1] = 14;
            return Z;
          }
          if (38 === e) {
            var oa = a[27], qa = a[25], na = a[26], Rb = a[14], Hb = a[30], Se = E.b(oa, na), Ed = Tg.a(Hb), Fd = Rg.a(Hb), tg = Ed.a ? Ed.a(Fd) : Ed.call(null, Fd), Te = ch.a(Hb), ug = s(Se, tg / Te | 0), hb = Rb, rb = qa, vg = na + 1;
            a[27] = oa;
            a[25] = rb;
            a[26] = vg;
            a[35] = ug;
            a[14] = hb;
            var Ue = f = a;
            Ue[2] = null;
            Ue[1] = 36;
            return Z;
          }
          if (30 === e) {
            var ta = a[19], wg = T(ta);
            f = a;
            f[1] = wg ? 33 : 34;
            return Z;
          }
          if (10 === e) {
            a[36] = a[2];
            var Ve = f = a;
            Ve[2] = null;
            Ve[1] = 2;
            return Z;
          }
          if (18 === e) {
            var xg = a[2], We = f = a;
            We[2] = xg;
            We[1] = 15;
            return Z;
          }
          if (42 === e) {
            var Xe = f = a;
            Xe[2] = null;
            Xe[1] = 43;
            return Z;
          }
          if (37 === e) {
            var Ye = a[2], yg = zj(), zg = $(r("80286"), "none");
            a[37] = Ye;
            a[38] = yg;
            var Ze = f = a;
            Ze[2] = zg;
            Ze[1] = 13;
            return Z;
          }
          if (8 === e) {
            var ib = f = a;
            ib[2] = null;
            ib[1] = 10;
            return Z;
          }
          return null;
        };
      }(a, b, c, d), a, b, c, d);
    }(), h = function() {
      var b = e.i ? e.i() : e.call(null);
      b[6] = a;
      return b;
    }();
    return Fh(h);
  };
}(Pj, Cj, !1, 1E4));
for (var Qj = tj(r("air-cooling-purchase-button")), Rj = r("air-cooling"), Sj = L(Ga("cost", Rj)), Tj = null, Uj = 0, Vj = 0;;) {
  if (Vj < Uj) {
    var Wj = Tj.u(null, Vj);
    s(Wj, sj(25E3));
    Vj += 1;
  } else {
    var Xj = L(Sj);
    if (Xj) {
      var Yj = Xj;
      if (T(Yj)) {
        var Zj = I(Yj), ak = J(Yj), bk = Zj, ck = S(Zj), Sj = ak, Tj = bk, Uj = ck
      } else {
        var dk = M(Yj);
        s(dk, sj(25E3));
        Sj = O(Yj);
        Tj = null;
        Uj = 0;
      }
      Vj = 0;
    } else {
      break;
    }
  }
}
var ek = Mh.a(1);
vh(function(a, b, c, d, e, h) {
  return function() {
    var f = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var d = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!V(b, Z)) {
                      return b;
                    }
                  }
                } catch (d) {
                  if (d instanceof Object) {
                    return c[5] = d, Ih(c), Z;
                  }
                  if (B) {
                    throw d;
                  }
                  return null;
                }
              }();
              if (!V(d, Z)) {
                return d;
              }
            }
          }
          function c() {
            var a = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
            a[0] = d;
            a[1] = 1;
            return a;
          }
          var d = null, d = function(a) {
            switch(arguments.length) {
              case 0:
                return c.call(this);
              case 1:
                return b.call(this, a);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          d.i = c;
          d.a = b;
          return d;
        }();
      }(function(a, b, c, d, e, f) {
        return function(a) {
          var g = a[1];
          if (7 === g) {
            return a[7] = a[2], a[1] = d ? 8 : 9, Z;
          }
          if (20 === g) {
            return a[2] = null, a[1] = 21, Z;
          }
          if (27 === g) {
            var h = a[8], g = a[9], m = a[10], G = a[11], P = a[12], ba = E.b(h, G), W = Tg.a(g), Na = Rg.a(g), W = W.a ? W.a(Na) : W.call(null, Na), g = ch.a(g), g = s(ba, W / g | 0);
            a[8] = h;
            a[13] = g;
            a[10] = m;
            a[11] = G + 1;
            a[12] = P;
            a[2] = null;
            a[1] = 25;
            return Z;
          }
          return 1 === g ? (a[2] = null, a[1] = 2, Z) : 24 === g ? (g = a[2], a[2] = g, a[1] = 21, Z) : 4 === g ? Gh(a, b) : 15 === g ? (g = a[2], m = Ga("payback-time", a[14]), m = L(m), a[8] = null, a[10] = m, a[15] = g, a[11] = 0, a[12] = 0, a[2] = null, a[1] = 25, Z) : 21 === g ? (g = a[2], a[2] = g, a[1] = 18, Z) : 31 === g ? (a[2] = null, a[1] = 32, Z) : 32 === g ? (g = a[2], a[2] = g, a[1] = 29, Z) : 33 === g ? (m = a[16], g = I(m), m = J(m), h = S(g), a[8] = g, a[10] = m, a[11] = 0, a[12] = 
          h, a[2] = null, a[1] = 25, Z) : 13 === g ? (g = a[2], a[2] = g, a[1] = 10, Z) : 22 === g ? (g = a[17], m = I(g), g = J(g), h = S(m), a[18] = m, a[19] = h, a[20] = g, a[21] = 0, a[2] = null, a[1] = 14, Z) : 29 === g ? (g = a[2], a[2] = g, a[1] = 26, Z) : 6 === g ? (g = a[2], a[2] = g, a[1] = 3, Z) : 28 === g ? (m = a[10], g = L(m), a[16] = g, a[1] = g ? 30 : 31, Z) : 25 === g ? (G = a[11], P = a[12], g = G < P, a[1] = t(g) ? 27 : 28, Z) : 34 === g ? (m = a[16], g = a[9], h = M(m), G = Tg.a(g), 
          P = Rg.a(g), G = G.a ? G.a(P) : G.call(null, P), g = ch.a(g), g = s(h, G / g | 0), m = O(m), a[22] = g, a[8] = null, a[10] = m, a[11] = 0, a[12] = 0, a[2] = null, a[1] = 25, Z) : 17 === g ? (m = a[20], g = L(m), a[17] = g, a[1] = g ? 19 : 20, Z) : 3 === g ? (g = a[2], Hh(a, g)) : 12 === g ? (a[2] = null, a[1] = 13, Z) : 2 === g ? (a[1] = 4, Z) : 23 === g ? (g = a[17], m = M(g), h = sj(f), h = s(m, h), m = O(g), a[23] = h, a[18] = null, a[19] = 0, a[20] = m, a[21] = 0, a[2] = null, a[1] = 
          14, Z) : 35 === g ? (g = a[2], a[2] = g, a[1] = 32, Z) : 19 === g ? (g = a[17], g = T(g), a[1] = g ? 22 : 23, Z) : 11 === g ? (h = Qg.k(wj, te, new X(null, 2, 5, Y, ["pentium-4", ch], null), f), G = r("pentium-4"), g = Wb(wj), g = g.a ? g.a("pentium-4") : g.call(null, "pentium-4"), m = Ga("rate", G), m = L(m), a[18] = null, a[14] = G, a[19] = 0, a[24] = h, a[20] = m, a[9] = g, a[21] = 0, a[2] = null, a[1] = 14, Z) : 9 === g ? (g = vj(e), a[1] = g ? 11 : 12, Z) : 5 === g ? (a[2] = null, 
          a[1] = 6, Z) : 14 === g ? (G = a[19], h = a[21], g = h < G, a[1] = t(g) ? 16 : 17, Z) : 26 === g ? (m = a[2], h = zj(), g = $(c, "none"), a[25] = h, a[26] = m, a[2] = g, a[1] = 13, Z) : 16 === g ? (g = a[18], G = a[19], m = a[20], h = a[21], P = E.b(g, h), ba = sj(f), P = s(P, ba), a[18] = g, a[19] = G, a[20] = m, a[21] = h + 1, a[27] = P, a[2] = null, a[1] = 14, Z) : 30 === g ? (m = a[16], g = T(m), a[1] = g ? 33 : 34, Z) : 10 === g ? (a[28] = a[2], a[2] = null, a[1] = 2, Z) : 18 === g ? 
          (g = a[2], a[2] = g, a[1] = 15, Z) : 8 === g ? (a[2] = null, a[1] = 10, Z) : null;
        };
      }(a, b, c, d, e, h), a, b, c, d, e, h);
    }(), g = function() {
      var b = f.i ? f.i() : f.call(null);
      b[6] = a;
      return b;
    }();
    return Fh(g);
  };
}(ek, Qj, Rj, !1, 25E3, 500));
var fk = Mh.a(1);
vh(function(a) {
  return function() {
    var b = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var e = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!V(b, Z)) {
                      return b;
                    }
                  }
                } catch (e) {
                  if (e instanceof Object) {
                    return c[5] = e, Ih(c), Z;
                  }
                  if (B) {
                    throw e;
                  }
                  return null;
                }
              }();
              if (!V(e, Z)) {
                return e;
              }
            }
          }
          function c() {
            var a = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
            a[0] = f;
            a[1] = 1;
            return a;
          }
          var f = null, f = function(a) {
            switch(arguments.length) {
              case 0:
                return c.call(this);
              case 1:
                return b.call(this, a);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          f.i = c;
          f.a = b;
          return f;
        }();
      }(function(a) {
        return function(b) {
          var c = b[1];
          if (7 === c) {
            var f = b[2], g = Qg.b(pj, function() {
              return function() {
                return function(a) {
                  return Math.round.a ? Math.round.a(1.001 * a) : Math.round.call(null, 1.001 * a);
                };
              }(f, c, a);
            }()), m = Ga("ransom-cost"), m = L(m), p, n;
            b[7] = g;
            b[8] = 0;
            b[9] = 0;
            b[10] = m;
            b[11] = f;
            b[12] = null;
            b[2] = null;
            b[1] = 8;
            return Z;
          }
          if (1 === c) {
            return b[2] = null, b[1] = 2, Z;
          }
          if (4 === c) {
            return g = rj(), Gh(b, g);
          }
          if (15 === c) {
            return g = b[2], b[2] = g, b[1] = 12, Z;
          }
          if (13 === c) {
            return g = b[13], g = T(g), b[1] = g ? 16 : 17, Z;
          }
          if (6 === c) {
            return g = b[2], b[2] = g, b[1] = 3, Z;
          }
          if (17 === c) {
            return g = b[13], m = M(g), n = Wb(pj), n = sj(n), n = s(m, n), m = O(g), b[14] = n, b[8] = 0, b[9] = 0, b[10] = m, b[12] = null, b[2] = null, b[1] = 8, Z;
          }
          if (3 === c) {
            return g = b[2], Hh(b, g);
          }
          if (12 === c) {
            return g = b[2], b[2] = g, b[1] = 9, Z;
          }
          if (2 === c) {
            return b[1] = 4, Z;
          }
          if (11 === c) {
            return g = b[13], m = b[10], g = L(m), b[13] = g, b[1] = g ? 13 : 14, Z;
          }
          if (9 === c) {
            return g = b[2], m = yj(), m = Qg.d(oj, Jd, m), Wb(oj), n = uj(), b[15] = g, b[16] = m, b[17] = n, b[2] = null, b[1] = 2, Z;
          }
          if (5 === c) {
            return b[2] = null, b[1] = 6, Z;
          }
          if (14 === c) {
            return b[2] = null, b[1] = 15, Z;
          }
          if (16 === c) {
            return g = b[13], m = I(g), g = J(g), n = S(m), b[8] = 0, b[9] = n, b[10] = g, b[12] = m, b[2] = null, b[1] = 8, Z;
          }
          if (10 === c) {
            g = b[8];
            n = b[9];
            m = b[10];
            p = b[12];
            var q = E.b(p, g), w = Wb(pj), w = sj(w), q = s(q, w);
            b[8] = g + 1;
            b[9] = n;
            b[10] = m;
            b[18] = q;
            b[12] = p;
            b[2] = null;
            b[1] = 8;
            return Z;
          }
          return 18 === c ? (g = b[2], b[2] = g, b[1] = 15, Z) : 8 === c ? (g = b[8], n = b[9], g = g < n, b[1] = t(g) ? 10 : 11, Z) : null;
        };
      }(a), a);
    }(), c = function() {
      var c = b.i ? b.i() : b.call(null);
      c[6] = a;
      return c;
    }();
    return Fh(c);
  };
}(fk));
function gk(a, b, c, d, e, h) {
  this.name = a;
  this.oa = b;
  this.ra = c;
  this.ta = d;
  this.J = e;
  this.s = h;
  this.g = 2229667594;
  this.o = 8192;
  4 < arguments.length ? (this.J = e, this.s = h) : this.s = this.J = null;
}
k = gk.prototype;
k.K = function(a, b) {
  return Bb.d(this, b, null);
};
k.L = function(a, b, c) {
  switch(b instanceof U ? b.ia : null) {
    case "satoshis-per-click":
      return this.ta;
    case "purchased?":
      return this.ra;
    case "cost-satoshis":
      return this.oa;
    case "name":
      return this.name;
    default:
      return Zc.d(this.s, b, c);
  }
};
k.v = function(a, b, c) {
  return Bg(b, function() {
    return function(a) {
      return Bg(b, Hg, "", " ", "", c, a);
    };
  }(this), "#bitcoin-clicker.bitcoin-clicker.Hand-Click-Upgrade{", ", ", "}", c, je.b(new X(null, 4, 5, Y, [new X(null, 2, 5, Y, [Vg, this.name], null), new X(null, 2, 5, Y, [Zg, this.oa], null), new X(null, 2, 5, Y, [Sg, this.ra], null), new X(null, 2, 5, Y, [Wg, this.ta], null)], null), this.s));
};
k.G = function() {
  return this.J;
};
k.N = function() {
  return 4 + S(this.s);
};
k.F = function() {
  var a = this.m;
  return null != a ? a : this.m = a = Qd(this);
};
k.A = function(a, b) {
  return t(t(b) ? this.constructor === b.constructor && Af(this, b) : b) ? !0 : !1;
};
k.Ya = function(a, b) {
  return td(new bg(null, new Pa(null, 4, [Sg, null, Vg, null, Wg, null, Zg, null], null), null), b) ? bd.b(jd(re(Ef, this), this.J), b) : new gk(this.name, this.oa, this.ra, this.ta, this.J, ne(bd.b(this.s, b)), null);
};
k.Ma = function(a, b, c) {
  return t(V.b ? V.b(Vg, b) : V.call(null, Vg, b)) ? new gk(c, this.oa, this.ra, this.ta, this.J, this.s, null) : t(V.b ? V.b(Zg, b) : V.call(null, Zg, b)) ? new gk(this.name, c, this.ra, this.ta, this.J, this.s, null) : t(V.b ? V.b(Sg, b) : V.call(null, Sg, b)) ? new gk(this.name, this.oa, c, this.ta, this.J, this.s, null) : t(V.b ? V.b(Wg, b) : V.call(null, Wg, b)) ? new gk(this.name, this.oa, this.ra, c, this.J, this.s, null) : new gk(this.name, this.oa, this.ra, this.ta, this.J, ad.d(this.s, 
  b, c), null);
};
k.I = function() {
  return L(je.b(new X(null, 4, 5, Y, [new X(null, 2, 5, Y, [Vg, this.name], null), new X(null, 2, 5, Y, [Zg, this.oa], null), new X(null, 2, 5, Y, [Sg, this.ra], null), new X(null, 2, 5, Y, [Wg, this.ta], null)], null), this.s));
};
k.H = function(a, b) {
  return new gk(this.name, this.oa, this.ra, this.ta, b, this.s, this.m);
};
k.M = function(a, b) {
  return od(b) ? Db(this, E.b(b, 0), E.b(b, 1)) : Hd.d(ub, this, b);
};
var hk = Og.a(Ef);
function ik() {
  return Hd.d(function(a, b) {
    Yc.d(b, 0, null);
    var c;
    c = Yc.d(b, 1, null);
    c = t(Sg.a(c)) ? Wg.a(c) : 0;
    return a + c;
  }, 1, Wb(hk));
}
var jk = function() {
  function a(a, d, e, h, f, g) {
    var m = null;
    5 < arguments.length && (m = Q(Array.prototype.slice.call(arguments, 5), 0));
    return b.call(this, a, d, e, h, f, m);
  }
  function b(a, b, e, h, f, g) {
    h = tj(r(h));
    Qg.k(hk, ad, a, new gk(a, b, !1, e));
    e = L(Ga("cost", r(f)));
    for (var m = null, p = 0, n = 0;;) {
      if (n < p) {
        var q = m.u(null, n);
        s(q, sj(b));
        n += 1;
      } else {
        if (e = L(e)) {
          m = e, T(m) ? (e = I(m), n = J(m), m = e, p = S(e), e = n) : (e = M(m), s(e, sj(b)), e = O(m), m = null, p = 0), n = 0;
        } else {
          break;
        }
      }
    }
    b = Mh.a(1);
    vh(function(b, d) {
      return function() {
        var e = function() {
          return function(a) {
            return function() {
              function b(c) {
                for (;;) {
                  var d = function() {
                    try {
                      for (;;) {
                        var b = a(c);
                        if (!V(b, Z)) {
                          return b;
                        }
                      }
                    } catch (d) {
                      if (d instanceof Object) {
                        return c[5] = d, Ih(c), Z;
                      }
                      if (B) {
                        throw d;
                      }
                      return null;
                    }
                  }();
                  if (!V(d, Z)) {
                    return d;
                  }
                }
              }
              function c() {
                var a = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
                a[0] = d;
                a[1] = 1;
                return a;
              }
              var d = null, d = function(a) {
                switch(arguments.length) {
                  case 0:
                    return c.call(this);
                  case 1:
                    return b.call(this, a);
                }
                throw Error("Invalid arity: " + arguments.length);
              };
              d.i = c;
              d.a = b;
              return d;
            }();
          }(function(b, d) {
            return function(b) {
              var e = b[1];
              if (7 === e) {
                var e = b[7], e = b[2], h = Wb(hk), h = Zc.b(h, a), m = Sg.a(h), n = Sg.a(h), n = Xa(n);
                b[7] = h;
                b[8] = e;
                b[9] = m;
                b[1] = n ? 8 : 9;
                return Z;
              }
              if (20 === e) {
                return b[2] = null, b[1] = 21, Z;
              }
              if (1 === e) {
                return b[2] = null, b[1] = 2, Z;
              }
              if (24 === e) {
                return e = b[2], b[2] = e, b[1] = 21, Z;
              }
              if (4 === e) {
                return Gh(b, d);
              }
              if (15 === e) {
                return e = b[2], b[2] = e, b[1] = 13, Z;
              }
              if (21 === e) {
                return e = b[2], b[2] = e, b[1] = 18, Z;
              }
              if (13 === e) {
                return e = b[2], b[2] = e, b[1] = 10, Z;
              }
              if (22 === e) {
                var e = b[10], h = I(e), e = J(e), m = S(h), q;
                b[11] = h;
                b[12] = 0;
                b[13] = e;
                b[14] = m;
                b[2] = null;
                b[1] = 14;
                return Z;
              }
              return 6 === e ? (e = b[2], b[2] = e, b[1] = 3, Z) : 17 === e ? (e = b[13], e = L(e), b[10] = e, b[1] = e ? 19 : 20, Z) : 3 === e ? (e = b[2], Hh(b, e)) : 12 === e ? (b[2] = null, b[1] = 13, Z) : 2 === e ? (b[1] = 4, Z) : 23 === e ? (e = b[10], h = M(e), h = $(r(h), "block"), e = O(e), b[11] = null, b[12] = 0, b[13] = e, b[15] = h, b[14] = 0, b[2] = null, b[1] = 14, Z) : 19 === e ? (e = b[10], e = T(e), b[1] = e ? 22 : 23, Z) : 11 === e ? (e = b[7], e = ad.d(e, Sg, !0), h = Qg.k(hk, 
              ad, a, e), e = r("click-rate"), m = ik(), m = sj(m), m = s(e, m), r(f).style.display = "none", e = L(g), b[11] = null, b[12] = 0, b[13] = e, b[16] = h, b[17] = void 0, b[18] = m, b[14] = 0, b[2] = null, b[1] = 14, Z) : 9 === e ? (b[2] = null, b[1] = 10, Z) : 5 === e ? (b[2] = null, b[1] = 6, Z) : 14 === e ? (h = b[12], m = b[14], e = h < m, b[1] = t(e) ? 16 : 17, Z) : 16 === e ? (q = b[11], h = b[12], e = b[13], m = b[14], n = E.b(q, h), n = $(r(n), "block"), b[19] = n, b[11] = q, b[12] = 
              h + 1, b[13] = e, b[14] = m, b[2] = null, b[1] = 14, Z) : 10 === e ? (b[20] = b[2], b[2] = null, b[1] = 2, Z) : 18 === e ? (e = b[2], b[2] = e, b[1] = 15, Z) : 8 === e ? (e = b[7], e = Zg.a(e), e = vj(e), b[1] = e ? 11 : 12, Z) : null;
            };
          }(b, d), b, d);
        }(), h = function() {
          var a = e.i ? e.i() : e.call(null);
          a[6] = b;
          return a;
        }();
        return Fh(h);
      };
    }(b, h));
    return b;
  }
  a.p = 5;
  a.l = function(a) {
    var d = M(a);
    a = O(a);
    var e = M(a);
    a = O(a);
    var h = M(a);
    a = O(a);
    var f = M(a);
    a = O(a);
    var g = M(a);
    a = N(a);
    return b(d, e, h, f, g, a);
  };
  a.f = b;
  return a;
}();
jk.f("basic math", 10, 1, "basic-math-purchase-button", "basic-math", Q(["mathematician"], 0));
jk.f("abacus", 25, 0, "abacus-purchase-button", "abacus", Q(["cpu-mining", "unlock-statistics"], 0));
jk.f("calculator", 40, 2, "calculator-purchase-button", "calculator", Q(["pickaxe"], 0));
jk("mathematician", 150, 4, "mathematician-purchase-button", "mathematician");
jk("pickaxe", 333, 24, "pickaxe-purchase-button", "pickaxe");
var kk = tj(r("hand-mine-button")), lk = Mh.a(1);
vh(function(a, b) {
  return function() {
    var c = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var d = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!V(b, Z)) {
                      return b;
                    }
                  }
                } catch (d) {
                  if (d instanceof Object) {
                    return c[5] = d, Ih(c), Z;
                  }
                  if (B) {
                    throw d;
                  }
                  return null;
                }
              }();
              if (!V(d, Z)) {
                return d;
              }
            }
          }
          function c() {
            var a = [null, null, null, null, null, null, null, null, null, null];
            a[0] = d;
            a[1] = 1;
            return a;
          }
          var d = null, d = function(a) {
            switch(arguments.length) {
              case 0:
                return c.call(this);
              case 1:
                return b.call(this, a);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          d.i = c;
          d.a = b;
          return d;
        }();
      }(function(a, b) {
        return function(a) {
          var c = a[1];
          if (7 === c) {
            var c = a[2], d = ik(), d = Qg.d(oj, Jd, d);
            Wb(oj);
            var e = uj();
            a[7] = d;
            a[8] = e;
            a[9] = c;
            a[2] = null;
            a[1] = 2;
            return Z;
          }
          return 6 === c ? (c = a[2], a[2] = c, a[1] = 3, Z) : 5 === c ? (a[2] = null, a[1] = 6, Z) : 4 === c ? Gh(a, b) : 3 === c ? (c = a[2], Hh(a, c)) : 2 === c ? (a[1] = 4, Z) : 1 === c ? (a[2] = null, a[1] = 2, Z) : null;
        };
      }(a, b), a, b);
    }(), d = function() {
      var b = c.i ? c.i() : c.call(null);
      b[6] = a;
      return b;
    }();
    return Fh(d);
  };
}(lk, kk));
var mk = tj(r("ransom-button")), nk = Mh.a(1);
vh(function(a, b) {
  return function() {
    var c = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var d = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!V(b, Z)) {
                      return b;
                    }
                  }
                } catch (d) {
                  if (d instanceof Object) {
                    return c[5] = d, Ih(c), Z;
                  }
                  if (B) {
                    throw d;
                  }
                  return null;
                }
              }();
              if (!V(d, Z)) {
                return d;
              }
            }
          }
          function c() {
            var a = [null, null, null, null, null, null, null, null, null];
            a[0] = d;
            a[1] = 1;
            return a;
          }
          var d = null, d = function(a) {
            switch(arguments.length) {
              case 0:
                return c.call(this);
              case 1:
                return b.call(this, a);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          d.i = c;
          d.a = b;
          return d;
        }();
      }(function(a, b) {
        return function(a) {
          var c = a[1];
          if (7 === c) {
            var c = a[2], d = Wb(pj), d = vj(d);
            a[7] = c;
            a[1] = d ? 8 : 9;
            return Z;
          }
          return 1 === c ? (a[2] = null, a[1] = 2, Z) : 4 === c ? Gh(a, b) : 6 === c ? (c = a[2], a[2] = c, a[1] = 3, Z) : 3 === c ? (c = a[2], Hh(a, c)) : 2 === c ? (a[1] = 4, Z) : 9 === c ? (a[2] = null, a[1] = 10, Z) : 5 === c ? (a[2] = null, a[1] = 6, Z) : 10 === c ? (a[8] = a[2], a[2] = null, a[1] = 2, Z) : 8 === c ? (c = ((new Date).getTime() - qj) / 1E3 | 0, c = "Congratulations, you won!\nYou beat version " + D.a("0.2") + " in " + D.a(c) + " seconds!", c = alert(c), a[2] = c, a[1] = 10, Z) : 
          null;
        };
      }(a, b), a, b);
    }(), d = function() {
      var b = c.i ? c.i() : c.call(null);
      b[6] = a;
      return b;
    }();
    return Fh(d);
  };
}(nk, mk));
var ok = r("unlock-statistics-button"), pk = tj(ok), qk = Og.a(10), rk = Mh.a(1);
vh(function(a, b, c, d) {
  return function() {
    var e = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var d = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!V(b, Z)) {
                      return b;
                    }
                  }
                } catch (d) {
                  if (d instanceof Object) {
                    return c[5] = d, Ih(c), Z;
                  }
                  if (B) {
                    throw d;
                  }
                  return null;
                }
              }();
              if (!V(d, Z)) {
                return d;
              }
            }
          }
          function c() {
            var a = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
            a[0] = d;
            a[1] = 1;
            return a;
          }
          var d = null, d = function(a) {
            switch(arguments.length) {
              case 0:
                return c.call(this);
              case 1:
                return b.call(this, a);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          d.i = c;
          d.a = b;
          return d;
        }();
      }(function(a, b, c, d) {
        return function(a) {
          var e = a[1];
          if (7 === e) {
            var e = a[2], f = 0 < Qg.b(d, Ld);
            a[7] = e;
            a[1] = t(f) ? 8 : 9;
            return Z;
          }
          if (20 === e) {
            return a[2] = null, a[1] = 21, Z;
          }
          if (1 === e) {
            return a[2] = null, a[1] = 2, Z;
          }
          if (24 === e) {
            return e = a[2], a[2] = e, a[1] = 21, Z;
          }
          if (4 === e) {
            return Gh(a, c);
          }
          if (15 === e) {
            return f = a[2], e = $(r("unlock-statistics"), "none"), a[8] = f, a[2] = e, a[1] = 10, Z;
          }
          if (21 === e) {
            return e = a[2], a[2] = e, a[1] = 18, Z;
          }
          if (13 === e) {
            return e = a[9], f = a[2], e = {value:"Click " + D.a(e) + " time" + D.a(f) + " to unlock statistics."}, e = Ja(b, e), a[2] = e, a[1] = 10, Z;
          }
          if (22 === e) {
            var e = a[10], f = I(e), e = J(e), h = S(f), v, z;
            a[11] = e;
            a[12] = 0;
            a[13] = f;
            a[14] = h;
            a[2] = null;
            a[1] = 14;
            return Z;
          }
          return 6 === e ? (e = a[2], a[2] = e, a[1] = 3, Z) : 17 === e ? (v = a[11], e = L(v), a[10] = e, a[1] = e ? 19 : 20, Z) : 3 === e ? (e = a[2], Hh(a, e)) : 12 === e ? (a[2] = "s", a[1] = 13, Z) : 2 === e ? (a[1] = 4, Z) : 23 === e ? (e = a[10], f = M(e), f = $(f, "inline"), v = O(e), a[15] = f, a[11] = v, a[12] = 0, a[13] = null, a[14] = 0, a[2] = null, a[1] = 14, Z) : 19 === e ? (e = a[10], e = T(e), a[1] = e ? 22 : 23, Z) : 11 === e ? (a[2] = "", a[1] = 13, Z) : 9 === e ? (e = Ga("statistics"), 
          v = L(e), a[11] = v, a[12] = 0, a[13] = null, a[14] = 0, a[2] = null, a[1] = 14, Z) : 5 === e ? (a[2] = null, a[1] = 6, Z) : 14 === e ? (e = a[12], f = a[14], e = e < f, a[1] = t(e) ? 16 : 17, Z) : 16 === e ? (v = a[11], e = a[12], z = a[13], f = a[14], h = E.b(z, e), h = $(h, "inline"), a[16] = h, a[11] = v, a[12] = e + 1, a[13] = z, a[14] = f, a[2] = null, a[1] = 14, Z) : 10 === e ? (a[17] = a[2], a[2] = null, a[1] = 2, Z) : 18 === e ? (e = a[2], a[2] = e, a[1] = 15, Z) : 8 === e ? (e = 
          Wb(d), f = Wb(d), f = Ic.b(1, f), a[9] = e, a[1] = f ? 11 : 12, Z) : null;
        };
      }(a, b, c, d), a, b, c, d);
    }(), h = function() {
      var b = e.i ? e.i() : e.call(null);
      b[6] = a;
      return b;
    }();
    return Fh(h);
  };
}(rk, ok, pk, qk));
function Jl(a, b, c) {
  a = r(a);
  b = Ga(b);
  c = Ga(c);
  for (var d = L(b), e = null, h = 0, f = 0;;) {
    if (f < h) {
      var g = e.u(null, f), m = tj(g), p = Mh.a(1);
      vh(function(a, b, c, d, e, f, g, h, m, n) {
        return function() {
          var q = function() {
            return function(a, b, c, d, e) {
              return function() {
                function a(b) {
                  for (;;) {
                    var c = function() {
                      try {
                        for (;;) {
                          var a = e(b);
                          if (!V(a, Z)) {
                            return a;
                          }
                        }
                      } catch (c) {
                        if (c instanceof Object) {
                          return b[5] = c, Ih(b), Z;
                        }
                        if (B) {
                          throw c;
                        }
                        return null;
                      }
                    }();
                    if (!V(c, Z)) {
                      return c;
                    }
                  }
                }
                function b() {
                  var a = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
                  a[0] = c;
                  a[1] = 1;
                  return a;
                }
                var c = null, c = function(c) {
                  switch(arguments.length) {
                    case 0:
                      return b.call(this);
                    case 1:
                      return a.call(this, c);
                  }
                  throw Error("Invalid arity: " + arguments.length);
                };
                c.i = b;
                c.a = a;
                return c;
              }();
            }(a, b, c, d, function(a, b, c, d, e, f, g, h, m, n) {
              return function(a) {
                var b = a[1];
                if (7 === b) {
                  var c = a[2], d = $(h, "none"), b = L(m), e;
                  a[7] = d;
                  a[8] = null;
                  a[9] = 0;
                  a[10] = b;
                  a[11] = c;
                  a[12] = 0;
                  a[2] = null;
                  a[1] = 8;
                  return Z;
                }
                if (20 === b) {
                  return a[13] = a[2], a[2] = null, a[1] = 2, Z;
                }
                if (27 === b) {
                  var b = a[14], c = I(b), b = J(b), d = S(c), g;
                  a[15] = b;
                  a[16] = c;
                  a[17] = 0;
                  a[18] = d;
                  a[2] = null;
                  a[1] = 19;
                  return Z;
                }
                return 1 === b ? (a[2] = null, a[1] = 2, Z) : 24 === b ? (b = a[14], b = T(b), a[1] = b ? 27 : 28, Z) : 4 === b ? Gh(a, f) : 15 === b ? (b = a[2], a[2] = b, a[1] = 12, Z) : 21 === b ? (b = a[15], g = a[16], c = a[17], d = a[18], e = E.b(g, c), e = $(e, "inline"), a[15] = b, a[16] = g, a[17] = c + 1, a[18] = d, a[19] = e, a[2] = null, a[1] = 19, Z) : 13 === b ? (b = a[20], b = T(b), a[1] = b ? 16 : 17, Z) : 22 === b ? (b = a[15], b = L(b), a[14] = b, a[1] = b ? 24 : 25, Z) : 29 === 
                b ? (b = a[2], a[2] = b, a[1] = 26, Z) : 6 === b ? (b = a[2], a[2] = b, a[1] = 3, Z) : 28 === b ? (b = a[14], c = M(b), c = $(c, "inline"), b = O(b), a[15] = b, a[16] = null, a[17] = 0, a[18] = 0, a[21] = c, a[2] = null, a[1] = 19, Z) : 25 === b ? (a[2] = null, a[1] = 26, Z) : 17 === b ? (b = a[20], c = M(b), c = $(c, "none"), b = O(b), a[8] = null, a[9] = 0, a[10] = b, a[12] = 0, a[22] = c, a[2] = null, a[1] = 8, Z) : 3 === b ? (b = a[2], Hh(a, b)) : 12 === b ? (b = a[2], a[2] = 
                b, a[1] = 9, Z) : 2 === b ? (a[1] = 4, Z) : 23 === b ? (b = a[2], a[2] = b, a[1] = 20, Z) : 19 === b ? (c = a[17], d = a[18], b = c < d, a[1] = t(b) ? 21 : 22, Z) : 11 === b ? (b = a[10], b = L(b), a[20] = b, a[1] = b ? 13 : 14, Z) : 9 === b ? (c = a[2], b = L(n), a[15] = b, a[16] = null, a[17] = 0, a[18] = 0, a[23] = c, a[2] = null, a[1] = 19, Z) : 5 === b ? (a[2] = null, a[1] = 6, Z) : 14 === b ? (a[2] = null, a[1] = 15, Z) : 26 === b ? (b = a[2], a[2] = b, a[1] = 23, Z) : 16 === 
                b ? (b = a[20], c = I(b), b = J(b), d = S(c), a[8] = c, a[9] = 0, a[10] = b, a[12] = d, a[2] = null, a[1] = 8, Z) : 10 === b ? (c = a[8], d = a[9], b = a[10], e = a[12], g = E.b(c, d), g = $(g, "none"), a[8] = c, a[9] = d + 1, a[24] = g, a[10] = b, a[12] = e, a[2] = null, a[1] = 8, Z) : 18 === b ? (b = a[2], a[2] = b, a[1] = 15, Z) : 8 === b ? (d = a[9], e = a[12], b = d < e, a[1] = t(b) ? 10 : 11, Z) : null;
              };
            }(a, b, c, d, e, f, g, h, m, n), e, f, g, h, m, n);
          }(), p = function() {
            var a = q.i ? q.i() : q.call(null);
            a[6] = e;
            return a;
          }();
          return Fh(p);
        };
      }(d, e, h, f, p, m, g, a, b, c));
      f += 1;
    } else {
      if (m = L(d)) {
        g = m;
        if (T(g)) {
          d = I(g), f = J(g), e = d, h = S(d), d = f;
        } else {
          var p = M(g), n = tj(p), q = Mh.a(1);
          vh(function(a, b, c, d, e, f, g, h, m, n, q, p) {
            return function() {
              var Qb = function() {
                return function(a, b, c, d, e) {
                  return function() {
                    function a(b) {
                      for (;;) {
                        var c = function() {
                          try {
                            for (;;) {
                              var a = e(b);
                              if (!V(a, Z)) {
                                return a;
                              }
                            }
                          } catch (c) {
                            if (c instanceof Object) {
                              return b[5] = c, Ih(b), Z;
                            }
                            if (B) {
                              throw c;
                            }
                            return null;
                          }
                        }();
                        if (!V(c, Z)) {
                          return c;
                        }
                      }
                    }
                    function b() {
                      var a = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
                      a[0] = c;
                      a[1] = 1;
                      return a;
                    }
                    var c = null, c = function(c) {
                      switch(arguments.length) {
                        case 0:
                          return b.call(this);
                        case 1:
                          return a.call(this, c);
                      }
                      throw Error("Invalid arity: " + arguments.length);
                    };
                    c.i = b;
                    c.a = a;
                    return c;
                  }();
                }(a, b, c, d, function(a, b, c, d, e, f, g, h, m, n, q, p) {
                  return function(a) {
                    var b = a[1];
                    if (7 === b) {
                      var c = a[2], d = $(n, "none"), b = L(q), e;
                      a[7] = 0;
                      a[8] = 0;
                      a[9] = d;
                      a[10] = null;
                      a[11] = b;
                      a[12] = c;
                      a[2] = null;
                      a[1] = 8;
                      return Z;
                    }
                    if (20 === b) {
                      return a[13] = a[2], a[2] = null, a[1] = 2, Z;
                    }
                    if (27 === b) {
                      return b = a[14], c = I(b), b = J(b), d = S(c), a[15] = b, a[16] = 0, a[17] = d, a[18] = c, a[2] = null, a[1] = 19, Z;
                    }
                    if (1 === b) {
                      return a[2] = null, a[1] = 2, Z;
                    }
                    if (24 === b) {
                      return b = a[14], b = T(b), a[1] = b ? 27 : 28, Z;
                    }
                    if (4 === b) {
                      return Gh(a, f);
                    }
                    if (15 === b) {
                      return b = a[2], a[2] = b, a[1] = 12, Z;
                    }
                    if (21 === b) {
                      b = a[15];
                      c = a[16];
                      d = a[17];
                      e = a[18];
                      var g = E.b(e, c), g = $(g, "inline");
                      a[15] = b;
                      a[16] = c + 1;
                      a[17] = d;
                      a[19] = g;
                      a[18] = e;
                      a[2] = null;
                      a[1] = 19;
                      return Z;
                    }
                    return 13 === b ? (b = a[20], b = T(b), a[1] = b ? 16 : 17, Z) : 22 === b ? (b = a[15], b = L(b), a[14] = b, a[1] = b ? 24 : 25, Z) : 29 === b ? (b = a[2], a[2] = b, a[1] = 26, Z) : 6 === b ? (b = a[2], a[2] = b, a[1] = 3, Z) : 28 === b ? (b = a[14], c = M(b), c = $(c, "inline"), b = O(b), a[15] = b, a[16] = 0, a[17] = 0, a[21] = c, a[18] = null, a[2] = null, a[1] = 19, Z) : 25 === b ? (a[2] = null, a[1] = 26, Z) : 17 === b ? (b = a[20], c = M(b), c = $(c, "none"), b = O(b), a[22] = 
                    c, a[7] = 0, a[8] = 0, a[10] = null, a[11] = b, a[2] = null, a[1] = 8, Z) : 3 === b ? (b = a[2], Hh(a, b)) : 12 === b ? (b = a[2], a[2] = b, a[1] = 9, Z) : 2 === b ? (a[1] = 4, Z) : 23 === b ? (b = a[2], a[2] = b, a[1] = 20, Z) : 19 === b ? (c = a[16], d = a[17], b = c < d, a[1] = t(b) ? 21 : 22, Z) : 11 === b ? (b = a[11], b = L(b), a[20] = b, a[1] = b ? 13 : 14, Z) : 9 === b ? (c = a[2], b = L(p), a[15] = b, a[16] = 0, a[17] = 0, a[18] = null, a[23] = c, a[2] = null, a[1] = 
                    19, Z) : 5 === b ? (a[2] = null, a[1] = 6, Z) : 14 === b ? (a[2] = null, a[1] = 15, Z) : 26 === b ? (b = a[2], a[2] = b, a[1] = 23, Z) : 16 === b ? (b = a[20], c = I(b), b = J(b), d = S(c), a[7] = 0, a[8] = d, a[10] = c, a[11] = b, a[2] = null, a[1] = 8, Z) : 10 === b ? (c = a[7], d = a[8], e = a[10], b = a[11], g = E.b(e, c), g = $(g, "none"), a[7] = c + 1, a[8] = d, a[24] = g, a[10] = e, a[11] = b, a[2] = null, a[1] = 8, Z) : 18 === b ? (b = a[2], a[2] = b, a[1] = 15, Z) : 8 === 
                    b ? (c = a[7], d = a[8], b = c < d, a[1] = t(b) ? 10 : 11, Z) : null;
                  };
                }(a, b, c, d, e, f, g, h, m, n, q, p), e, f, g, h, m, n, q, p);
              }(), cd = function() {
                var a = Qb.i ? Qb.i() : Qb.call(null);
                a[6] = e;
                return a;
              }();
              return Fh(cd);
            };
          }(d, e, h, f, q, n, p, g, m, a, b, c));
          d = O(g);
          e = null;
          h = 0;
        }
        f = 0;
      } else {
        break;
      }
    }
  }
  d = L(c);
  e = null;
  for (f = h = 0;;) {
    if (f < h) {
      g = e.u(null, f), m = tj(g), p = Mh.a(1), vh(function(a, b, c, d, e, f, g, h, m, n) {
        return function() {
          var q = function() {
            return function(a, b, c, d, e) {
              return function() {
                function a(b) {
                  for (;;) {
                    var c = function() {
                      try {
                        for (;;) {
                          var a = e(b);
                          if (!V(a, Z)) {
                            return a;
                          }
                        }
                      } catch (c) {
                        if (c instanceof Object) {
                          return b[5] = c, Ih(b), Z;
                        }
                        if (B) {
                          throw c;
                        }
                        return null;
                      }
                    }();
                    if (!V(c, Z)) {
                      return c;
                    }
                  }
                }
                function b() {
                  var a = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
                  a[0] = c;
                  a[1] = 1;
                  return a;
                }
                var c = null, c = function(c) {
                  switch(arguments.length) {
                    case 0:
                      return b.call(this);
                    case 1:
                      return a.call(this, c);
                  }
                  throw Error("Invalid arity: " + arguments.length);
                };
                c.i = b;
                c.a = a;
                return c;
              }();
            }(a, b, c, d, function(a, b, c, d, e, f, g, h, m, n) {
              return function(a) {
                var b = a[1];
                if (7 === b) {
                  var c = a[2], d = $(h, "block"), b = L(n), e;
                  a[7] = d;
                  a[8] = 0;
                  a[9] = null;
                  a[10] = b;
                  a[11] = c;
                  a[12] = 0;
                  a[2] = null;
                  a[1] = 8;
                  return Z;
                }
                if (20 === b) {
                  return a[13] = a[2], a[2] = null, a[1] = 2, Z;
                }
                if (27 === b) {
                  return b = a[14], c = I(b), b = J(b), d = S(c), a[15] = d, a[16] = c, a[17] = b, a[18] = 0, a[2] = null, a[1] = 19, Z;
                }
                if (1 === b) {
                  return a[2] = null, a[1] = 2, Z;
                }
                if (24 === b) {
                  return b = a[14], b = T(b), a[1] = b ? 27 : 28, Z;
                }
                if (4 === b) {
                  return Gh(a, f);
                }
                if (15 === b) {
                  return b = a[2], a[2] = b, a[1] = 12, Z;
                }
                if (21 === b) {
                  d = a[15];
                  e = a[16];
                  var c = a[17], b = a[18], g = E.b(e, b), g = $(g, "inline");
                  a[19] = g;
                  a[15] = d;
                  a[16] = e;
                  a[17] = c;
                  a[18] = b + 1;
                  a[2] = null;
                  a[1] = 19;
                  return Z;
                }
                return 13 === b ? (b = a[20], b = T(b), a[1] = b ? 16 : 17, Z) : 22 === b ? (c = a[17], b = L(c), a[14] = b, a[1] = b ? 24 : 25, Z) : 29 === b ? (b = a[2], a[2] = b, a[1] = 26, Z) : 6 === b ? (b = a[2], a[2] = b, a[1] = 3, Z) : 28 === b ? (b = a[14], c = M(b), d = $(c, "inline"), c = O(b), a[21] = d, a[15] = 0, a[16] = null, a[17] = c, a[18] = 0, a[2] = null, a[1] = 19, Z) : 25 === b ? (a[2] = null, a[1] = 26, Z) : 17 === b ? (b = a[20], c = M(b), c = $(c, "none"), b = O(b), a[8] = 
                0, a[22] = c, a[9] = null, a[10] = b, a[12] = 0, a[2] = null, a[1] = 8, Z) : 3 === b ? (b = a[2], Hh(a, b)) : 12 === b ? (b = a[2], a[2] = b, a[1] = 9, Z) : 2 === b ? (a[1] = 4, Z) : 23 === b ? (b = a[2], a[2] = b, a[1] = 20, Z) : 19 === b ? (d = a[15], b = a[18], b = b < d, a[1] = t(b) ? 21 : 22, Z) : 11 === b ? (b = a[10], b = L(b), a[20] = b, a[1] = b ? 13 : 14, Z) : 9 === b ? (b = a[2], c = L(m), a[15] = 0, a[23] = b, a[16] = null, a[17] = c, a[18] = 0, a[2] = null, a[1] = 19, 
                Z) : 5 === b ? (a[2] = null, a[1] = 6, Z) : 14 === b ? (a[2] = null, a[1] = 15, Z) : 26 === b ? (b = a[2], a[2] = b, a[1] = 23, Z) : 16 === b ? (b = a[20], c = I(b), b = J(b), d = S(c), a[8] = 0, a[9] = c, a[10] = b, a[12] = d, a[2] = null, a[1] = 8, Z) : 10 === b ? (c = a[8], e = a[9], b = a[10], d = a[12], g = E.b(e, c), g = $(g, "none"), a[8] = c + 1, a[9] = e, a[10] = b, a[12] = d, a[24] = g, a[2] = null, a[1] = 8, Z) : 18 === b ? (b = a[2], a[2] = b, a[1] = 15, Z) : 8 === b ? 
                (c = a[8], d = a[12], b = c < d, a[1] = t(b) ? 10 : 11, Z) : null;
              };
            }(a, b, c, d, e, f, g, h, m, n), e, f, g, h, m, n);
          }(), p = function() {
            var a = q.i ? q.i() : q.call(null);
            a[6] = e;
            return a;
          }();
          return Fh(p);
        };
      }(d, e, h, f, p, m, g, a, b, c)), f += 1;
    } else {
      if (p = L(d)) {
        m = p, T(m) ? (d = I(m), f = J(m), e = d, h = S(d), d = f) : (g = M(m), n = tj(g), q = Mh.a(1), vh(function(a, b, c, d, e, f, g, h, m, n, q, p) {
          return function() {
            var Qb = function() {
              return function(a, b, c, d, e) {
                return function() {
                  function a(b) {
                    for (;;) {
                      var c = function() {
                        try {
                          for (;;) {
                            var a = e(b);
                            if (!V(a, Z)) {
                              return a;
                            }
                          }
                        } catch (c) {
                          if (c instanceof Object) {
                            return b[5] = c, Ih(b), Z;
                          }
                          if (B) {
                            throw c;
                          }
                          return null;
                        }
                      }();
                      if (!V(c, Z)) {
                        return c;
                      }
                    }
                  }
                  function b() {
                    var a = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
                    a[0] = c;
                    a[1] = 1;
                    return a;
                  }
                  var c = null, c = function(c) {
                    switch(arguments.length) {
                      case 0:
                        return b.call(this);
                      case 1:
                        return a.call(this, c);
                    }
                    throw Error("Invalid arity: " + arguments.length);
                  };
                  c.i = b;
                  c.a = a;
                  return c;
                }();
              }(a, b, c, d, function(a, b, c, d, e, f, g, h, m, n, q, p) {
                return function(a) {
                  var b = a[1];
                  if (7 === b) {
                    var c = a[2], d = $(n, "block"), b = L(p), e;
                    a[7] = d;
                    a[8] = b;
                    a[9] = 0;
                    a[10] = null;
                    a[11] = c;
                    a[12] = 0;
                    a[2] = null;
                    a[1] = 8;
                    return Z;
                  }
                  if (20 === b) {
                    return a[13] = a[2], a[2] = null, a[1] = 2, Z;
                  }
                  if (27 === b) {
                    var b = a[14], c = I(b), b = J(b), d = S(c), g;
                    a[15] = c;
                    a[16] = 0;
                    a[17] = d;
                    a[18] = b;
                    a[2] = null;
                    a[1] = 19;
                    return Z;
                  }
                  return 1 === b ? (a[2] = null, a[1] = 2, Z) : 24 === b ? (b = a[14], b = T(b), a[1] = b ? 27 : 28, Z) : 4 === b ? Gh(a, f) : 15 === b ? (b = a[2], a[2] = b, a[1] = 12, Z) : 21 === b ? (c = a[15], d = a[16], g = a[17], b = a[18], e = E.b(c, d), e = $(e, "inline"), a[15] = c, a[16] = d + 1, a[19] = e, a[17] = g, a[18] = b, a[2] = null, a[1] = 19, Z) : 13 === b ? (b = a[20], b = T(b), a[1] = b ? 16 : 17, Z) : 22 === b ? (b = a[18], b = L(b), a[14] = b, a[1] = b ? 24 : 25, Z) : 29 === 
                  b ? (b = a[2], a[2] = b, a[1] = 26, Z) : 6 === b ? (b = a[2], a[2] = b, a[1] = 3, Z) : 28 === b ? (b = a[14], c = M(b), c = $(c, "inline"), b = O(b), a[15] = null, a[16] = 0, a[21] = c, a[17] = 0, a[18] = b, a[2] = null, a[1] = 19, Z) : 25 === b ? (a[2] = null, a[1] = 26, Z) : 17 === b ? (b = a[20], c = M(b), c = $(c, "none"), b = O(b), a[22] = c, a[8] = b, a[9] = 0, a[10] = null, a[12] = 0, a[2] = null, a[1] = 8, Z) : 3 === b ? (b = a[2], Hh(a, b)) : 12 === b ? (b = a[2], a[2] = 
                  b, a[1] = 9, Z) : 2 === b ? (a[1] = 4, Z) : 23 === b ? (b = a[2], a[2] = b, a[1] = 20, Z) : 19 === b ? (d = a[16], g = a[17], b = d < g, a[1] = t(b) ? 21 : 22, Z) : 11 === b ? (b = a[8], b = L(b), a[20] = b, a[1] = b ? 13 : 14, Z) : 9 === b ? (c = a[2], b = L(q), a[23] = c, a[15] = null, a[16] = 0, a[17] = 0, a[18] = b, a[2] = null, a[1] = 19, Z) : 5 === b ? (a[2] = null, a[1] = 6, Z) : 14 === b ? (a[2] = null, a[1] = 15, Z) : 26 === b ? (b = a[2], a[2] = b, a[1] = 23, Z) : 16 === 
                  b ? (b = a[20], c = I(b), b = J(b), d = S(c), a[8] = b, a[9] = d, a[10] = c, a[12] = 0, a[2] = null, a[1] = 8, Z) : 10 === b ? (b = a[8], d = a[9], e = a[10], c = a[12], g = E.b(e, c), g = $(g, "none"), a[8] = b, a[9] = d, a[24] = g, a[10] = e, a[12] = c + 1, a[2] = null, a[1] = 8, Z) : 18 === b ? (b = a[2], a[2] = b, a[1] = 15, Z) : 8 === b ? (d = a[9], c = a[12], b = c < d, a[1] = t(b) ? 10 : 11, Z) : null;
                };
              }(a, b, c, d, e, f, g, h, m, n, q, p), e, f, g, h, m, n, q, p);
            }(), cd = function() {
              var a = Qb.i ? Qb.i() : Qb.call(null);
              a[6] = e;
              return a;
            }();
            return Fh(cd);
          };
        }(d, e, h, f, q, n, g, m, p, a, b, c)), d = O(m), e = null, h = 0), f = 0;
      } else {
        break;
      }
    }
  }
}
Jl("goal-body", "gamefield-collapser", "gamefield-expander");
Jl("hand-mining-body", "hand-mining-hider", "hand-mining-shower");
Jl("cpu-mining-body", "cpu-mining-hider", "cpu-mining-shower");
Jl("gpu-mining-body", "gpu-mining-hider", "gpu-mining-shower");
function Kl(a, b) {
  Ja(r("hand-mine-button"), {value:"Mine for " + D.a(a) + ". By hand."});
  document.title = "" + D.a(a) + " clicker";
  for (var c = L(Ga("long-currency-name")), d = null, e = 0, h = 0;;) {
    if (h < e) {
      var f = d.u(null, h);
      s(f, a);
      h += 1;
    } else {
      if (c = L(c)) {
        d = c, T(d) ? (c = I(d), h = J(d), d = c, e = S(c), c = h) : (c = M(d), s(c, a), c = O(d), d = null, e = 0), h = 0;
      } else {
        break;
      }
    }
  }
  c = L(Ga("short-currency-name"));
  d = null;
  for (f = h = 0;;) {
    if (f < h) {
      e = d.u(null, f), s(e, b), f += 1;
    } else {
      if (c = L(c)) {
        d = c, T(d) ? (c = I(d), h = J(d), d = c, e = S(c), c = h, h = e) : (e = M(d), s(e, b), c = O(d), d = null, h = 0), f = 0;
      } else {
        return null;
      }
    }
  }
}
var Ll = r("doge-on"), Ml = tj(Ll), Nl = r("bitcoin-on"), Ol = tj(Nl), Pl = Mh.a(1);
vh(function(a, b, c, d, e) {
  return function() {
    var h = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var d = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!V(b, Z)) {
                      return b;
                    }
                  }
                } catch (d) {
                  if (d instanceof Object) {
                    return c[5] = d, Ih(c), Z;
                  }
                  if (B) {
                    throw d;
                  }
                  return null;
                }
              }();
              if (!V(d, Z)) {
                return d;
              }
            }
          }
          function c() {
            var a = [null, null, null, null, null, null, null, null, null, null, null];
            a[0] = d;
            a[1] = 1;
            return a;
          }
          var d = null, d = function(a) {
            switch(arguments.length) {
              case 0:
                return c.call(this);
              case 1:
                return b.call(this, a);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          d.i = c;
          d.a = b;
          return d;
        }();
      }(function(a, b, c, d) {
        return function(a) {
          var e = a[1];
          if (7 === e) {
            var e = a[2], g = Kl("dogecoin", "dgc"), f = $(b, "none"), h = $(d, "block");
            a[7] = g;
            a[8] = f;
            a[9] = h;
            a[10] = e;
            a[2] = null;
            a[1] = 2;
            return Z;
          }
          return 6 === e ? (e = a[2], a[2] = e, a[1] = 3, Z) : 5 === e ? (a[2] = null, a[1] = 6, Z) : 4 === e ? Gh(a, c) : 3 === e ? (e = a[2], Hh(a, e)) : 2 === e ? (a[1] = 4, Z) : 1 === e ? (a[2] = null, a[1] = 2, Z) : null;
        };
      }(a, b, c, d, e), a, b, c, d, e);
    }(), f = function() {
      var b = h.i ? h.i() : h.call(null);
      b[6] = a;
      return b;
    }();
    return Fh(f);
  };
}(Pl, Ll, Ml, Nl, Ol));
var Ql = Mh.a(1);
vh(function(a, b, c, d, e) {
  return function() {
    var h = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var d = function() {
                try {
                  for (;;) {
                    var b = a(c);
                    if (!V(b, Z)) {
                      return b;
                    }
                  }
                } catch (d) {
                  if (d instanceof Object) {
                    return c[5] = d, Ih(c), Z;
                  }
                  if (B) {
                    throw d;
                  }
                  return null;
                }
              }();
              if (!V(d, Z)) {
                return d;
              }
            }
          }
          function c() {
            var a = [null, null, null, null, null, null, null, null, null, null, null];
            a[0] = d;
            a[1] = 1;
            return a;
          }
          var d = null, d = function(a) {
            switch(arguments.length) {
              case 0:
                return c.call(this);
              case 1:
                return b.call(this, a);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          d.i = c;
          d.a = b;
          return d;
        }();
      }(function(a, b, c, d, e) {
        return function(a) {
          var c = a[1];
          if (7 === c) {
            var c = a[2], f = Kl("bitcoin", "btc"), g = $(d, "none"), h = $(b, "block");
            a[7] = f;
            a[8] = g;
            a[9] = h;
            a[10] = c;
            a[2] = null;
            a[1] = 2;
            return Z;
          }
          return 6 === c ? (c = a[2], a[2] = c, a[1] = 3, Z) : 5 === c ? (a[2] = null, a[1] = 6, Z) : 4 === c ? Gh(a, e) : 3 === c ? (c = a[2], Hh(a, c)) : 2 === c ? (a[1] = 4, Z) : 1 === c ? (a[2] = null, a[1] = 2, Z) : null;
        };
      }(a, b, c, d, e), a, b, c, d, e);
    }(), f = function() {
      var b = h.i ? h.i() : h.call(null);
      b[6] = a;
      return b;
    }();
    return Fh(f);
  };
}(Ql, Ll, Ml, Nl, Ol));
var Rl, Sl = Nd.i();
Rl = .1 > Sl ? "Windows 95" : .4 > Sl ? "Windows" : .7 > Sl ? "OSX" : .95 > Sl ? "Linux" : .99 > Sl ? "BSD" : B ? "Plan 9" : null;
for (var Tl = L(Ga("os")), Ul = null, Vl = 0, Wl = 0;;) {
  if (Wl < Vl) {
    var Xl = Ul.u(null, Wl);
    s(Xl, Rl);
    Wl += 1;
  } else {
    var Yl = L(Tl);
    if (Yl) {
      var Zl = Yl;
      if (T(Zl)) {
        var $l = I(Zl), am = J(Zl), bm = $l, cm = S($l), Tl = am, Ul = bm, Vl = cm
      } else {
        var dm = M(Zl);
        s(dm, Rl);
        Tl = O(Zl);
        Ul = null;
        Vl = 0;
      }
      Wl = 0;
    } else {
      break;
    }
  }
}
for (var em = L(Ga("version")), fm = null, gm = 0, hm = 0;;) {
  if (hm < gm) {
    var im = fm.u(null, hm);
    s(im, "0.2");
    hm += 1;
  } else {
    var jm = L(em);
    if (jm) {
      var km = jm;
      if (T(km)) {
        var lm = I(km), mm = J(km), nm = lm, om = S(lm), em = mm, fm = nm, gm = om
      } else {
        var pm = M(km);
        s(pm, "0.2");
        em = O(km);
        fm = null;
        gm = 0;
      }
      hm = 0;
    } else {
      break;
    }
  }
}
;
})();
