var g = void 0,
    k = !0,
    l = null,
    o = !1,
    q;

function aa(a, b) {
    var c = l;
    for (i = 0; i < a.length; i++)
        if (a[i].value == b) {
            c = a.options[i].text;
            break
        } return c
}

function r(a, b, c) {
    c ? _gaq.push(["_trackEvent", a, b, c]) : _gaq.push(["_trackEvent", a, b])
}

function s(a, b, c, f) {
    var e = document.createElementNS(svgns, "line");
    e.setAttribute("x1", a);
    e.setAttribute("y1", b);
    e.setAttribute("x2", c);
    e.setAttribute("y2", f);
    e.setAttribute("style", "stroke:green;stroke-width:2");
    return e
}

function v(a, b, c, f, e, h) {
    var j = document.createElementNS(svgns, "rect");
    j.setAttribute("x", a);
    j.setAttribute("y", b);
    j.setAttribute("width", c);
    j.setAttribute("height", f);
    j.setAttribute("fill", e);
    h != g && h != l && j.setAttribute("id", h);
    return j
}

function y(a) {
    var b = document.createElementNS(svgns, "g");
    a != g && a != l && b.setAttribute("id", a);
    return b
}

function z(a, b, c, f) {
    var e = document.createElementNS(svgns, "text"),
        c = document.createTextNode(c, k);
    e.appendChild(c);
    e.setAttribute("x", a);
    e.setAttribute("y", b);
    f != g && f != l && e.setAttribute("id", f);
    return e
};
var ba = {
        "-1": "La base monétaire est une mesure des actifs du secteur privé qui sont des passifs de la banque centrale, à savoir : les réserves bancaires, les devises (billets et pièces) dans les coffres des banques, les devises (billets et pièces) en circulation",
        "-2": "La monnaie au sens large est une mesure de la monnaie du secteur privé à l'exclusion des actifs des banques, à savoir : les dépôts bancaires ; la monnaie (billets et pièces) en circulation ; Il y a plusieurs définitions de monnaie (M1, M2, M3, MZM, etc.),",
        "-3": "Credit",
        "-4": "La dette privée comprend toutes les dettes des entités du secteur privé (par exemple, les obligations d'entreprises ou les prêts aux ménages)"
    },
    ca = "black",
    B = 70,
    da = 1,
    C = 2 * B + 10,
    D = l,
    E = new ea;

function fa(a, b, c, f, e, h) {
    this.Oa = a;
    this.id = b;
    this.jb = c;
    this.Nb = f;
    this.type = e;
    this.ab = h
}

function ga(a, b, c, f, e, h, j, n) {
    this.Sb = this.vb = this.ac = this.Xa = this.Qa = l;
    this.y = this.x = -1;
    this.Oa = c;
    this.id = f;
    this.jb = e;
    this.Nb = h;
    this.type = j;
    this.ab = n;
    this.scale = 1;
    this.eb = [];
    this.bb = this.Fb = this.wb = 0;
    this.Eb = o;
    this.bc = k;
    this.color = ha(j, n);
    this.Qa = document.createElementNS(svgns, "rect");
    this.Qa.setAttribute("width", B);
    this.Qa.setAttribute("height", this.Wa());
    this.Qa.setAttribute("stroke", ca);
    this.Qa.setAttribute("stroke-width", da);
    this.Qa.setAttribute("fill", this.color);
    this.Qa.addEventListener("mouseover",
        function (a) {
            a != l && (a = E.Jb(a.target), a != l && a.Pb())
        }, o);
    this.Qa.addEventListener("mouseout", function (a) {
        a != l && (a = E.Jb(a.target), a != l && a.Ob())
    }, o);
    this.Xa = document.createElementNS(svgns, "text");
    this.Xa.setAttribute("style", "fill: white;");
    this.ac = document.createTextNode(this.jb, k);
    this.Xa.appendChild(this.ac);
    this.Xa.addEventListener("mouseover", function (a) {
        a != l && (a = E.Kb(a.target), a != l && a.Pb())
    }, o);
    this.Xa.addEventListener("mouseout", function (a) {
        a != l && (a = E.Kb(a.target), a != l && a.Ob())
    }, o);
    this.vb = document.createElementNS(svgns,
        "text");
    this.Sb = document.createTextNode("", k);
    this.vb.appendChild(this.Sb);
    F(this, a, b);
    G(this, c);
    return k
}
q = ga.prototype;
q.xb = function () {
    return new fa(this.Oa, this.id, this.jb, this.Nb, this.type, this.ab)
};

function ha(a, b) {
    var c;
    c = 0 == a ? "darkgreen" : 1 == a ? "darkred" : "mediumblue";
    10 == b ? c = "darkorange" : 11 == b ? c = "darkgreen" : 12 == b ? c = "darkblue" : 13 == b ? c = "#904a1c" : 14 == b ? c = "darkred" : 15 == b ? c = "#202020" : 16 == b && (c = "darkorange");
    return c
}
q.Wa = function () {
    return Math.round(this.Oa / this.scale)
};

function F(a, b, c) {
    a.x == b && a.y == c || (a.x = b, a.y = c, a.Qa.setAttribute("x", a.x), a.Qa.setAttribute("y", a.y), a.Xa.setAttribute("x", a.x + Math.round(B / 2)), a.Xa.setAttribute("y", a.y + 10), a.vb.setAttribute("x", 0 == a.type ? a.x - 10 : a.x + B + 10), a.vb.setAttribute("y", a.y + 10))
}

function G(a, b) {
    0 < b && 0 >= a.Oa && (a.Xa.setAttribute("visibility", k), ia(a, k));
    a.Oa = b;
    a.Qa.setAttribute("height", a.Wa());
    0 >= b && (a.Xa.setAttribute("visibility", o), ia(a, o));
    ja(a, a.jb)
}

function ia(a, b) {
    a.vb.setAttribute("visibility", b ? "visible" : "hidden")
}

function ja(a, b) {
    a.jb = b;
    a.ac.nodeValue = 0 < a.Oa ? 16 != a.ab ? b + " $" + a.Oa : b + " " + a.Oa + "%" : ""
}
q.setScale = function (a) {
    var b = a != this.scale;
    this.scale = a;
    b && this.Qa.setAttribute("height", this.Wa())
};

function ka(a) {
    a.bc && (a.Qa.setAttribute("stroke", ca), a.Qa.setAttribute("stroke-width", da));
    a.Eb = o
}
q.Gb = function () {
    if (!this.Eb) return o;
    if (la) return G(this, this.bb), ka(this), k;
    G(this, this.Oa + this.Fb);
    (0 > this.Fb && this.Oa <= this.bb || 0 < this.Fb && this.Oa >= this.bb) && ka(this);
    return k
};

function ma(a, b) {
    b.appendChild(a.Qa);
    b.appendChild(a.Xa);
    b.appendChild(a.vb)
}

function oa(a, b) {
    for (var c = o, f = 0, e = a.eb.length; f < e; f++)
        if (a.eb[f] == b) {
            c = k;
            break
        } c || a.eb.push(b)
}
q.Pb = function () {
    for (var a = 0, b = this.eb.length; a < b; a++) {
        var c = this.eb[a];
        c.Qa.setAttribute("fill", "white");
        c.Xa.setAttribute("style", "fill:black")
    }
    0 < this.eb.length ? (this.Qa.setAttribute("fill", "#FFFFA0"), this.Xa.setAttribute("style", "fill:black")) : this.Qa.setAttribute("stroke", "white");
    a = "Pointing At:  " + this.jb;
    b = this.Nb;
    if (!(b == g || b == l || "" == b)) {
        H == l && pa();
        qa = 5;
        ra = 10;
        I.setAttribute("x", 5);
        I.setAttribute("y", 10);
        sa(0, a, "font-size: 12px; font-weight: bold; font-family: arial,sans-serif; fill:darkred;");
        for (var a = 1, b = b.split("\\"), c = 0, f = b.length; c < f; c++)
            for (var e = b[c];;)
                if (29 >= e.length) {
                    sa(a++, e, "font-size: 12px; font-weight: normal; font-family: arial,sans-serif;");
                    break
                } else {
                    var h = e.substring(0, 29).lastIndexOf(" "),
                        h = -1 == h ? 29 : h + 1,
                        j = e.substring(0, h);
                    sa(a++, j, "font-size: 12px; font-weight: normal; font-family: arial,sans-serif;");
                    e = e.substring(h)
                } for (; a < ta; a++) sa(a, "", "font-size: 12px; font-weight: normal; font-family: arial,sans-serif;");
        H.setAttribute("visibility", "visible")
    }
    return k
};
q.Ob = function () {
    if (H != l) {
        H.setAttribute("visibility", "hidden");
        for (var a in J) J[a].firstChild.nodeValue = ""
    }
    a = 0;
    for (var b = this.eb.length; a < b; a++) {
        var c = this.eb[a];
        c.Qa.setAttribute("fill", c.color);
        c.Xa.setAttribute("style", "fill:white")
    }
    0 < this.eb.length && (this.Qa.setAttribute("fill", this.color), this.Xa.setAttribute("style", "fill:white"));
    this.Qa.setAttribute("stroke", this.Eb ? "yellow" : ca);
    return k
};

function ua(a, b, c, f, e, h) {
    this.ub = a;
    this.$a = b;
    this.La = [];
    this.Ma = [];
    a = 0;
    for (b = c.length; a < b; a++) {
        var j = c[a].xb();
        this.La.push(j)
    }
    a = 0;
    for (b = f.length; a < b; a++) j = f[a].xb(), this.Ma.push(j);
    this.Va = e != l ? e.xb() : l;
    this.scale = h
}

function K(a, b, c, f) {
    if (a != g) return this.Yb(a, b, c, f)
}

function L(a, b) {
    a.Ua.setAttribute("id", b)
}
q = K.prototype;
q.Yb = function (a, b, c, f) {
    this.ub = l;
    this.x = b;
    this.y = c;
    this.Ua = l;
    this.La = [];
    this.Ma = [];
    this.ib = this.Va = l;
    this.ob = this.lb = 0;
    this.$a = "undefined" == typeof f ? o : f;
    this.nb = l;
    this.Mb = [];
    this.Hb = l;
    this.ub = a;
    this.Rb && (this.Rb.nodeValue = this.ub);
    this.Ua = document.createElementNS(svgns, "g");
    this.Ua.setAttribute("style", "font-size: 9px; font-weight: bold; text-anchor: middle; font-family: arial,sans-serif;");
    a = document.createElementNS(svgns, "line");
    a.setAttribute("x1", this.x - 10);
    a.setAttribute("x2", this.$a ? this.x +
        B + 10 : this.x + 2 * B + 10 + 10);
    a.setAttribute("y1", this.y + 1);
    a.setAttribute("y2", this.y + 1);
    a.setAttribute("style", "stroke:rgb(99,99,99);stroke-width:2");
    this.Ua.appendChild(a);
    this.ib = document.createElementNS(svgns, "text");
    this.ib.setAttribute("x", this.$a ? this.x + Math.round(B / 2) : this.x + B + Math.round(5));
    this.ib.setAttribute("y", this.y + 10);
    this.Rb = document.createTextNode(this.ub, k);
    this.ib.appendChild(this.Rb);
    this.Ua.appendChild(this.ib);
    this.ib.addEventListener("mouseover", function (a) {
        if (a != l) {
            var b = E.Ib(a.target);
            if (b != l) {
                a.target.setAttribute("style", "fill:blue");
                b.Pb()
            }
        }
    }, o);
    this.ib.addEventListener("mouseout", function (a) {
        if (a != l) {
            var b = E.Ib(a.target);
            if (b != l) {
                b.Ob();
                a.target.setAttribute("style", "fill:black")
            }
        }
    }, o);
    this.Ab = document.createElementNS(svgns, "text");
    this.Ab.setAttribute("x", this.$a ? this.x + Math.round(B / 2) : this.x + B + Math.round(5));
    this.Ab.setAttribute("y", 0);
    this.cc = document.createTextNode("", k);
    this.Ab.appendChild(this.cc);
    this.Ua.appendChild(this.Ab);
    this.$a || (this.fb = document.createElementNS(svgns,
        "text"), this.fb.setAttribute("x", this.x + Math.round(B / 2)), this.fb.setAttribute("y", 0), this.fb.setAttribute("fill", "#606060"), this.fb.setAttribute("font-style", "italic"), this.ec = document.createTextNode("Assets", k), this.fb.appendChild(this.ec), this.Ua.appendChild(this.fb), this.kb = document.createElementNS(svgns, "text"), this.kb.setAttribute("x", this.x + 1.5 * B + 10), this.kb.setAttribute("y", 0), this.kb.setAttribute("fill", "#606060"), this.kb.setAttribute("font-style", "italic"), this.gc = document.createTextNode("Liabilities",
        k), this.kb.appendChild(this.gc), this.Ua.appendChild(this.kb));
    this.scale = 1;
    M(this);
    return k
};
q.setScale = function (a) {
    this.scale = a;
    for (var b = 0, c = this.La.length; b < c; b++) this.La[b].setScale(a);
    b = 0;
    for (c = this.Ma.length; b < c; b++) this.Ma[b].setScale(a);
    this.Va != l && this.Va.setScale(a);
    M(this);
    return k
};
q.xb = function () {
    return new ua(this.ub, this.$a, this.La, this.Ma, this.Va, this.scale)
};

function N(a, b, c, f, e, h) {
    b = new ga(0, 0, c, f, e, h, 0, b);
    b.setScale(a.scale);
    a.La.unshift(b);
    a.lb += c;
    ma(b, a.Ua);
    M(a)
}

function P(a, b, c, f, e, h) {
    b = new ga(0, 0, c, f, e, h, 1, b);
    b.setScale(a.scale);
    a.Ma.unshift(b);
    a.ob += c;
    ma(b, a.Ua);
    M(a)
}
q.Qb = function () {
    this.fc = this.xb();
    this.Mb.push(this.fc)
};
q.Wa = function () {
    var a = Math.max(this.lb, this.ob);
    1 != this.scale && (a = Math.round(a / this.scale));
    return a
};

function M(a) {
    for (var b = 0, c = 0, f = o, e = 0, h = 0, j = 0, n = a.La.length; j < n; j++) F(a.La[j], a.x, a.y - e - a.La[j].Wa()), e += a.La[j].Wa(), h += a.La[j].Oa, 16 == a.La[j].ab && (f = k);
    b = a.lb = h;
    c = e;
    j = h = e = 0;
    for (n = a.Ma.length; j < n; j++) e += a.Ma[j].Wa(), h += a.Ma[j].Oa;
    a.ob = h;
    h > b && (b = h, c = e);
    a.Va == l && !a.$a && (a.Va = new ga(0, 0, 0, "equity", "NFAs", "", 2, 0), a.Va.setScale(a.scale), ma(a.Va, a.Ua));
    a.$a || (G(a.Va, Math.abs(a.lb - a.ob)), a.Va.Nb = a.nb != l ? a.nb : "Balance Sheet Equity (also called Capital or Net Worth) is calculated as Assets minus Liabilities. It can be negative if liabilities exceed assets.");
    if (a.ob > a.lb) {
        a.$a || (F(a.Va, a.x, a.y - Math.round(a.ob / a.scale)), ja(a.Va, "Neg. NFAs"));
        j = h = e = 0;
        for (n = a.La.length; j < n; j++) F(a.La[j], a.x, a.y - e - a.La[j].Wa()), e += a.La[j].Wa(), h += a.La[j].Oa;
        j = h = e = 0;
        for (n = a.Ma.length; j < n; j++) F(a.Ma[j], a.x + B + 10, a.y - e - a.Ma[j].Wa()), e += a.Ma[j].Wa(), h += a.Ma[j].Oa
    } else {
        j = h = e = 0;
        for (n = a.La.length; j < n; j++) F(a.La[j], a.x, a.y - e - a.La[j].Wa()), e += a.La[j].Wa(), h += a.La[j].Oa;
        if (!a.$a) {
            F(a.Va, a.x + B + 10, a.y - Math.round(a.lb / a.scale));
            ja(a.Va, "NFAs");
            j = h = e = 0;
            for (n = a.Ma.length; j < n; j++) F(a.Ma[j],
                a.x + B + 10, a.y - e - a.Ma[j].Wa()), e += a.Ma[j].Wa(), h += a.Ma[j].Oa
        }
    }
    a.cc.nodeValue = f ? b + "%" : "$" + b;
    b = a.y - c - 5;
    a.Ab.setAttribute("y", b);
    a.fb && a.fb.setAttribute("y", b);
    a.kb && a.kb.setAttribute("y", b);
    a.Hb && (b = a.Wa(), a.Hb.setAttribute("x", a.x - 10), a.Hb.setAttribute("y", a.y - b - 15), a.Hb.setAttribute("height", b + 15 + 0 + 10))
}

function va(a, b) {
    var c = l;
    "equity" == b && (c = a.Va);
    for (var f = 0, e = a.La.length; f < e; f++)
        if (a.La[f].id == b) {
            c = a.La[f];
            break
        } f = 0;
    for (e = a.Ma.length; f < e; f++)
        if (a.Ma[f].id == b) {
            c = a.Ma[f];
            break
        } return c
}
q.Jb = function (a) {
    var b = l;
    !this.$a && a == this.Va.Qa && (b = this.Va);
    for (var c = 0, f = this.La.length; c < f; c++)
        if (this.La[c].Qa == a) {
            b = this.La[c];
            break
        } c = 0;
    for (f = this.Ma.length; c < f; c++)
        if (this.Ma[c].Qa == a) {
            b = this.Ma[c];
            break
        } return b
};
q.Kb = function (a) {
    var b = l;
    !this.$a && a == this.Va.Xa && (b = this.Va);
    for (var c = 0, f = this.La.length; c < f; c++)
        if (this.La[c].Xa == a) {
            b = this.La[c];
            break
        } c = 0;
    for (f = this.Ma.length; c < f; c++)
        if (this.Ma[c].Xa == a) {
            b = this.Ma[c];
            break
        } return b
};
q.Ib = function (a) {
    return this.ib == a ? this : l
};
q.Gb = function () {
    for (var a = 0, b = 0, c = this.La.length; b < c; b++) {
        var f = this.La[b].Gb();
        f && a++
    }
    b = 0;
    for (c = this.Ma.length; b < c; b++)(f = this.Ma[b].Gb()) && a++;
    (0 < a || Q || la) && M(this);
    return a
};
q.Lb = function () {
    for (var a = 0, b = this.La.length; a < b; a++) ia(this.La[a], o);
    a = 0;
    for (b = this.Ma.length; a < b; a++) ia(this.Ma[a], o)
};

function R(a, b, c, f) {
    c != l && (a = va(a, b), c = va(c, f), a == l || c == l || (oa(a, c), oa(c, a)))
}
q.Pb = function () {
    var a = l;
    0 < this.Mb.length && (a = this.Mb[this.Mb.length - 1]);
    var b = this.x,
        c = this.y;
    S != l && wa();
    b += (C + 30 + 5) * (b < C ? 1 : -1);
    if (a != l) {
        for (var f = new K(a.ub, b, c, a.$a), e = a.La.length, e = e - 1; 0 <= e; e--) {
            var h = a.La[e];
            N(f, h.ab, h.Oa, h.id, h.jb)
        }
        e = a.Ma.length;
        for (e -= 1; 0 <= e; e--) h = a.Ma[e], P(f, h.ab, h.Oa, h.id, h.jb);
        f.setScale(a.scale);
        xa = f
    }
    f = a == l ? 100 : xa.Wa() + 30;
    S = y();
    e = v(b - 15, c - f - 15, C + 30, f + 30, "white");
    e.setAttribute("stroke", "black");
    e.setAttribute("stroke-width", 2);
    S.appendChild(e);
    a != l && S.appendChild(xa.Ua);
    e = z(b + Math.round(C / 2), c - f, "Prior to last operation:");
    e.setAttribute("style", "font-size: 11px; font-weight: bold; text-anchor: middle; font-family: arial,sans-serif; fill: blue;");
    S.appendChild(e);
    a == l && (a = z(b + Math.round(C / 2), c - f + 25, "No operations performed yet."), a.setAttribute("style", "font-size: 10px; font-style: italic; text-anchor: middle; font-family: arial,sans-serif; fill: black;"), S.appendChild(a));
    D.appendChild(S)
};
q.Ob = function () {
    wa()
};
ya.prototype = new K;

function ya(a, b, c, f) {
    K.call(this, a, b, c);
    this.mb = f;
    this.Db()
}
ya.prototype.Db = function () {
    if (this.mb == l) return o;
    for (var a = 0, b = 0, c = 0, f = this.mb.length; c < f; c++) {
        for (var e = this.mb[c], h = 0, j = e.La.length; h < j; h++) a += e.La[h].Oa;
        h = 0;
        for (j = e.Ma.length; h < j; h++) b += e.Ma[h].Oa
    }
    0 < a && (0 == this.La.length ? N(this, 1, a, "assetAggregate", "Actifs", "This aggregate asset block sums up all the asset blocks in the balance sheets immediately below (grouped by the green line).") : G(this.La[0], a));
    0 < b && (0 == this.Ma.length ? P(this, 2, b, "liabilityAggregate", "Passifs", "This aggregate liability block sums up all the liability blocks in the balance sheets immediately below (grouped by the green line).") :
        G(this.Ma[0], b));
    M(this);
    return k
};
za.prototype = new K;

function za(a, b, c, f, e) {
    K.call(this, a, b, c, k);
    this.Zb = f;
    this.mb = e;
    this.$a = k;
    this.Db()
}
za.prototype.Db = function () {
    if (this.mb == l) return o;
    for (var a = 0, b = l, c = 0, f = this.mb.length; c < f; c++) {
        for (var e = this.mb[c], h = 0; h < e.La.length; h++) switch (b = e.La[h], this.Zb) {
            case -1:
                if (2 == b.ab || 1 == b.ab) a += b.Oa;
                break;
            case -2:
                if (5 == b.ab || 1 == b.ab) a += b.Oa
        }
        for (h = 0; h < e.Ma.length; h++) switch (b = e.Ma[h], this.Zb) {
            case -4:
                if (4 == b.ab || 6 == b.ab) a += b.Oa
        }
    }
    0 == this.La.length ? N(this, 10, a, "stat", "Total", ba[this.Zb]) : G(this.La[0], a);
    M(this);
    return k
};
var T = l,
    Q = o,
    la = o;

function Aa() {
    for (var a = D.suspendRedraw(1E4), b = 0, c = E.Za, f = 0, e = c.length; f < e; f++) {
        var h = c[f];
        h instanceof ya || h instanceof za || (b += h.Gb())
    }
    c = E;
    f = 0;
    for (e = c.Za.length; f < e; f++) h = c.Za[f], (h instanceof ya || h instanceof za) && h.Db();
    0 == b && Ba();
    D.unsuspendRedraw(a)
}

function Ba() {
    T != l && (clearInterval(T), T = l)
}

function ea() {
    this.Za = [];
    this.Vb = this.Ub = l
}

function U(a) {
    E.Za.push(a)
}
q = ea.prototype;
q.Sa = function (a) {
    if (T != l) return o;
    for (var b = k, c = 0, f = a.length; c < f; c++) var e = a[c][0],
        h = a[c][1],
        j = a[c][2],
        e = va(e, h),
        b = b & (e != l && 0 <= e.Oa + j);
    if (b) {
        this.Vb != l && this.Vb();
        this.Lb();
        this.Qb();
        c = 0;
        for (f = a.length; c < f; c++)
            if (e = a[c][0], h = a[c][1], j = a[c][2], T == l && (e = va(e, h), e != l && 0 <= e.Oa + j && !(0 > e.Oa + j) && (e.wb = e.Oa, e.bb = e.Oa + j, 0 > e.bb && (e.bb = 0), e.wb != e.bb))) e.Fb = e.wb < e.bb ? 1 : -1, e.Sb.nodeValue = (0 < e.bb - e.wb ? "+" : "") + (e.bb - e.wb), ia(e, k), Q ? G(e, e.bb) : (e.bc = k, e.Qa.setAttribute("stroke", "yellow"), e.Qa.setAttribute("stroke-width",
                3), e.Eb = k);
        Q ? Aa() : T == l && (T = setInterval(Aa, Math.round(1E3 / 15)))
    } else this.Ub != l && this.Ub();
    return b
};
q.Qb = function () {
    for (var a = 0, b = this.Za.length; a < b; a++) this.Za[a].Qb()
};
q.Jb = function (a) {
    for (var b = 0, c = this.Za.length; b < c; b++) {
        var f = this.Za[b].Jb(a);
        if (f != l) return f
    }
    return l
};
q.Kb = function (a) {
    for (var b = 0, c = this.Za.length; b < c; b++) {
        var f = this.Za[b].Kb(a);
        if (f != l) return f
    }
    return l
};
q.Ib = function (a) {
    for (var b = 0, c = this.Za.length; b < c; b++) {
        var f = this.Za[b].Ib(a);
        if (f != l) return f
    }
    return l
};
q.Lb = function () {
    for (var a = 0, b = this.Za.length; a < b; a++) this.Za[a].Lb()
};
var xa = l,
    S = l;

function wa() {
    S != l && (D.removeChild(S), S = xa = l)
}
var qa = 0,
    ra = 0,
    H = l,
    I = l,
    J = {},
    ta = 0;

function pa() {
    H = y();
    H.setAttribute("visibility", "hidden");
    I = v(qa, ra, 175, 250, "#E8FFE8");
    I.setAttribute("stroke", "black");
    I.setAttribute("stroke-width", 2);
    H.appendChild(I);
    D.appendChild(H)
}

function sa(a, b, c) {
    H == l && pa();
    var f = qa + 5,
        e = ra + 18 * (a + 1);
    J[a] == g ? (J[a] = z(f, e, ""), H.appendChild(J[a]), a + 1 > ta && (ta = a + 1)) : (J[a].setAttribute("x", f), J[a].setAttribute("y", e));
    J[a].firstChild.nodeValue = b;
    J[a].setAttribute("style", c)
};

function Ca() {
    this.rb = this.tb = this.sb = this.zb = this.qb = this.cb = this.Cb = this.yb = this.Bb = this.Ra = this.Ta = this.Na = this.Ka = this.Ja = l;
    this.$b = 25;
    this.Yb()
}
Ca.prototype.Yb = function () {
    this.cb = y();
    Da(this);
    D.appendChild(this.cb)
};
Ca.prototype.reset = function () {
    for (; this.cb.hasChildNodes();) this.cb.removeChild(this.cb.firstChild);
    Da(this)
};

function Da(a) {
    var b = 2 * C + 55,
        c = 2 * C + 85 - 10,
        f = 3 * C + 90,
        e = 15 + C + 35 - 10,
        h = 2 * C + 55,
        j = 1.5 * C + 67.5 - 10,
        n = C + 20,
        na = 15 + 3.5 * (C + 35) - 10 - 20,
        A = 3 * B + 2 * a.$b + 20;
    a.qb = y("privateSectorBSGroup");
    a.zb = y();
    a.sb = y();
    a.tb = y();
    a.rb = y();
    var t = l,
        t = v(5, 270, b, 320, "#E8E8E8", "govBgRect");
    a.zb.appendChild(t);
    t = v(c, 270, f, 320, "#E8E8E8", "priBgRect");
    a.qb.appendChild(t);
    t = v(e, 125, h, 135, "#E8E8E8", "subAggBgRect");
    a.sb.appendChild(t);
    t = v(j, 15, n, 100, "#E8E8E8", "aggBgRect");
    a.tb.appendChild(t);
    t = v(na, 125, A, 135, "#FFFFC0", "statBgRect");
    a.rb.appendChild(t);
    t = l;
    t = z(c + f + 5, 285, "Scale: 1/1", "priScaleLabel");
    t.setAttribute("style", "font-size: 12px; font-style: italic; font-family: arial,sans-serif; fill: black;");
    a.qb.appendChild(t);
    t = z(e + h + 5, 140, "Scale: 1/4", "subAggScaleLabel");
    t.setAttribute("style", "font-size: 12px; font-style: italic; font-family: arial,sans-serif; fill: black;");
    a.sb.appendChild(t);
    t = z(j + n + 5, 30, "Scale: 1/8", "aggScaleLabel");
    t.setAttribute("style", "font-size: 12px; font-style: italic; font-family: arial,sans-serif; fill: black;");
    a.tb.appendChild(t);
    t = z(na + A + 5, 140, "Scale: 1/2", "statScaleLabel");
    t.setAttribute("style", "font-size: 12px; font-style: italic; font-family: arial,sans-serif; fill: black;");
    a.rb.appendChild(t);
    n = 15;
    a.Ta = new K("Treasury (Federal Government)", n, 570);
    L(a.Ta, "treasuryBS");
    A = a.Ta;
    A.nb = "Without the treasury's negative equity (liabilities exceeding financial assets), it would not be possible for the private sector to have a positive financial net worth. Note that this entire visualizer excludes tangible assets in order to focus on financials.";
    M(A);
    N(a.Ta, 2, 40, "reserves", "T.Deposits", "Treasury Deposits are the Treasury's account balance at the Central Bank, used for government spending. The size is small and sovereign governments are not dependent on 'saving up' in order to spend in the future.");
    N(a.Ta, 9, 0, "ttl", "T T & L", "Treasury Tax & Loan Accounts (TT&L) are Treasury account balances held at commercial banks. These balances are used in the settlement process when Special Depository banks participate in auctions of treasury debt.");
    P(a.Ta, 3, 210, "treasuries", "Treasuries", "The Treasury's Liabilities (bonds, bills and notes) facilitate private sector savings. The private sector's savings desires predominantly determine the size of the treasury's debt (liabilities), assisted by the automatic stabilizers. Treasury liabilities exceed financial assets by design!");
    U(a.Ta);
    a.zb.appendChild(a.Ta.Ua);
    n += C + 35;
    a.Ra = new K("Central Bank (Federal Government)", n, 570);
    L(a.Ra, "centralBankBS");
    A = a.Ra;
    A.nb = "Central Banks maintain a small positive buffer of equity (capital). Their solvency is never a concern because (a) they hold mostly high quality assets that earn income, (b) they need not mark assets to market, and (c) various forms of recapitalization by treasury are possible if ever they were needed.";
    M(A);
    N(a.Ra, 3, 170, "treasuries", "Treasuries", 'One role of central banks is to "transform" treasury liabilities into currency, so they hold treasuries as assets. They may also hold private sector securities. The income from these assets adds to equity, so central banks periodically remit these earnings to the treasury.');
    P(a.Ra, 1, 40, "currency", "Currency", "Currency (physical notes and coins) is a liability of the central bank.");
    P(a.Ra, 2, 120, "reserves", "Deposits", "The majority of the central bank's deposits are reserve balances held within the banking system, though the treasury also has an account at the central bank.");
    U(a.Ra);
    a.zb.appendChild(a.Ra.Ua);
    n += C + 35;
    a.Ja = new K("Banks", n, 570);
    L(a.Ja, "bankBS");
    A = a.Ja;
    A.nb = "Bank Equity is specifically referred to as Capital. A bank becomes insolvent if its assets (typically loans) fall too far in value, turning equity negative (or at least below regulatory minimums.) Bank lending is capital constrained (temporarily, capital can be injected) but never reserve constrained.";
    M(A);
    N(a.Ja, 1, 40, "currency", "Currency", "Banks hold currency (physical notes and coins) in vaults in a sufficient quantity to meet the withdrawal demands of their customers. Currency and reserve balances are interchangeable from the central bank as needed.");
    N(a.Ja, 2, 80, "reserves", "Reserves", 'Bank reserve balances are electronic accounting entries and liabilities of the central bank, and are equivalent to currency. Reserve balances provide interbank liquidity for the payments system (e.g., a when a check clears reserves are transferred between banks.) Banks never "lend out" reserves!');
    N(a.Ja, 3, 0, "treasuries", "Treasuries", "Banks may hold treasuries and other assets in addition to their loans, currency, and reserve balances.");
    N(a.Ja, 4, 0, "ib-asset", "Interbank",
        "Asset corresponding to reserves lent to other banks in the overnight market.");
    N(a.Ja, 4, 0, "loans", "Loans", "When banks make loans they may hold them as assets on their balance sheets (or loans can be packaged and sold as securities). Interest paid by borrowers is a source of bank earnings. Writedowns and defaults shrink the value of loans, reducing bank capital (equity).");
    P(a.Ja, 5, 80, "deposits", "Deposits", "Customer deposits are the primary source of funding for banks, though they can also borrow in other ways (e.g., issuing bonds). Banks usually pay customers interest on their deposits, but make up for this cost via earning higher interest rates on loans, charging fees to customers, etc.");
    P(a.Ja, 9, 0, "ttl", "T T & L", "Treasury Tax & Loan Accounts (TT&L) are Treasury account balances held at commercial banks. These balances are used in the settlement process when Special Depository banks participate in auctions of treasury debt.");
    U(a.Ja);
    a.qb.appendChild(a.Ja.Ua);
    n += C + 35;
    a.Ka = new K("Households", n, 570);
    L(a.Ka, "householdBS");
    A = a.Ka;
    A.nb = "Household net worth is usually positive, because on aggregate households are generally net savers. Within the household sector, some households have negative net worth (e.g., students with loans, 'underwater' homeowners, etc) while others have positive net worth (e.g., retirees with savings accounts.)";
    M(A);
    N(a.Ka, 1, 0, "currency", "Currency", "Households may choose to hold physical currency (notes and coins) either to use for cash transactions or simply as a form of savings.");
    N(a.Ka, 5, 40, "deposits", "Deposits", "Most households have one or more checking or savings accounts at banks, and these assets are called bank deposits. The bank based payment system credits and debits various depositors' accounts as payments are made by check, electronic transfer, etc.");
    N(a.Ka, 3, 40, "treasuries", "Treasuries", "Households may hold government treasuries as one form of savings.");
    N(a.Ka, 6, 0, "bonds", "Bonds", "Households may buy corporate bonds and hold them as a form of savings.");
    P(a.Ka, 4, 0, "loans", "Loans", "Households often borrow to make purchases (e.g., cars, homes, education, furniture, etc.) The loans are a liability that must be paid off over time and on which regular interest payments are usually due.");
    U(a.Ka);
    a.qb.appendChild(a.Ka.Ua);
    n += C + 35;
    a.Na = new K("Companies (+ foreign sector, misc)", n, 570);
    n = a.Na;
    n.nb = "Companies usually have positive net worth because profits add to balance sheet equity. (But consistently unprofitable companies may become insolvent.)";
    M(n);
    N(a.Na, 1, 0, "currency", "Currency", "Companies may choose to hold some assets as physical currency (notes and coins). An example would be businesses that accept cash payments.");
    N(a.Na, 5, 40, "deposits", "Deposits", "Like households, companies hold some assets as bank deposits that they can use for buying inventory, paying employees, making investments, etc.");
    N(a.Na, 3, 0, "treasuries", "Treasuries", "Like households, companies may choose to hold government treasuries as one form of asset.");
    N(a.Na, 6, 0,
        "securitizedloans", "Secur. Loans", "A securitized loan is one that has been transferred from a bank's balance sheet to an investor's (or investment company's) balance sheet, typically as part of a pooled purchase. It is similar to a bond in that it is a form of private debt/borrowing that on net does not increase the broad money supply.");
    P(a.Na, 4, 0, "loans", "Loans", "Like households, companies can borrow from banks.");
    P(a.Na, 6, 0, "bonds", "Bonds", "Some companies can issue bonds to fund themselves. Other possible forms of borrowing or funding include money markets, bank loans, and capital raises (not shown here).");
    U(a.Na);
    a.qb.appendChild(a.Na.Ua);
    R(a.Ta, "treasuries", a.Ra, "treasuries");
    R(a.Ta, "treasuries", a.Ja, "treasuries");
    R(a.Ta, "treasuries", a.Ka, "treasuries");
    R(a.Ta, "treasuries", a.Na, "treasuries");
    R(a.Ta, "ttl", a.Ja, "ttl");
    R(a.Ra, "reserves", a.Ta, "reserves");
    R(a.Ra, "reserves", a.Ja, "reserves");
    R(a.Ra, "currency", a.Ja, "currency");
    R(a.Ra, "currency", a.Ka, "currency");
    R(a.Ra, "currency", a.Na, "currency");
    R(a.Ja, "deposits", a.Ka, "deposits");
    R(a.Ja, "deposits", a.Na, "deposits");
    R(a.Ka, "loans", a.Ja, "loans");
    R(a.Na, "securitizedloans",
        a.Ka, "loans");
    R(a.Na, "loans", a.Ja, "loans");
    R(a.Na, "bonds", a.Ka, "bonds");
    n = 15 + C + 35;
    a.yb = new ya("Federal Government Sector (aggregate)", n, 250, [a.Ta, a.Ra]);
    a.yb.setScale(4);
    U(a.yb);
    a.sb.appendChild(a.yb.Ua);
    A = n;
    n += C + 35;
    a.Bb = new ya("Private Sector (aggregate)", n, 250, [a.Ja, a.Ka, a.Na]);
    a.Bb.setScale(4);
    U(a.Bb);
    a.sb.appendChild(a.Bb.Ua);
    t = n;
    n = 15 + C + 35 + (C + 35) / 2;
    a.Cb = new ya("Total Economy (aggregate)", n, 105, [a.Bb, a.yb]);
    a.Cb.setScale(8);
    U(a.Cb);
    a.tb.appendChild(a.Cb.Ua);
    var n = y(),
        O = y(),
        x = l,
        x = s(5, 270, 5 + b, 270);
    O.appendChild(x);
    x = s(5, 270, 5, 285);
    O.appendChild(x);
    x = s(5 + b, 270, 5 + b, 285);
    O.appendChild(x);
    x = s(A + Math.round(C / 2), 270, A + Math.round(C / 2), 260);
    O.appendChild(x);
    x = s(c, 270, c + f, 270);
    O.appendChild(x);
    x = s(c, 270, c, 285);
    O.appendChild(x);
    x = s(c + f, 270, c + f, 285);
    O.appendChild(x);
    x = s(t + Math.round(C / 2), 270, t + Math.round(C / 2), 260);
    O.appendChild(x);
    x = s(e, 125, e + h, 125);
    n.appendChild(x);
    x = s(e, 125, e, 140);
    n.appendChild(x);
    x = s(e + h, 125, e + h, 140);
    n.appendChild(x);
    x = s(j + Math.round(C / 2), 125, j + Math.round(C / 2), 115);
    n.appendChild(x);
    a.sb.appendChild(O);
    a.tb.appendChild(n);
    n = na + 10;
    a.gb = new za("Base Money", n, 250, -1, [a.Ja, a.Ka, a.Na]);
    L(a.gb, "baseMoneyStat");
    a.gb.setScale(2);
    U(a.gb);
    a.rb.appendChild(a.gb.Ua);
    n += B + a.$b;
    a.hb = new za("Broad Money", n, 250, -2, [a.Ka, a.Na]);
    L(a.hb, "broadMoneyStat");
    a.hb.setScale(2);
    U(a.hb);
    a.rb.appendChild(a.hb.Ua);
    n += B + a.$b;
    a.pb = new za("Private Debt", n, 250, -4, [a.Ja, a.Ka, a.Na]);
    L(a.pb, "privateDebtStat");
    a.pb.setScale(2);
    U(a.pb);
    a.rb.appendChild(a.pb.Ua);
    R(a.gb, "stat", a.Ja, "currency");
    R(a.gb, "stat", a.Ja, "reserves");
    R(a.gb, "stat", a.Ka, "currency");
    R(a.gb, "stat", a.Na, "currency");
    R(a.hb, "stat", a.Ka, "currency");
    R(a.hb, "stat", a.Na, "currency");
    R(a.hb, "stat", a.Ka, "deposits");
    R(a.hb, "stat", a.Na, "deposits");
    R(a.pb, "stat", a.Ka, "loans");
    R(a.pb, "stat", a.Na, "bonds");
    R(a.pb, "stat", a.Na, "bonds");
    a.cb.appendChild(a.qb);
    a.cb.appendChild(a.zb);
    a.cb.appendChild(a.sb);
    a.cb.appendChild(a.tb);
    a.cb.appendChild(a.rb)
}
Ca.prototype.Sa = function (a) {
    E.Sa(a)
};
var V = l;

function Ea() {
    var a = document.getElementById("opAmountText"),
        b = 0;
    a != l && a.value != g && a.value != l && (b = parseInt(a.value));
    0 == b && (b = 30);
    return b
}

function Fa() {
    var a = E;
    Ba();
    a.Za = [];
    a.Lb();
    try {
        H && D.removeChild(H)
    } catch (b) {}
    I = H = l;
    J = {};
    ta = 0;
    V.reset();
    Ga();
    Ha(o)
}

function W() {
    return document.getElementById("opSelect").value
}

function Ia(a) {
    switch (W()) {
        case "privatespending":
            var b = V,
                c = [];
            c.push([b.Ka, "deposits", -a]);
            c.push([b.Na, "deposits", a]);
            b.Sa(c);
            break;
        case "governmentspending":
            b = V;
            c = [];
            c.push([b.Ta, "reserves", -a]);
            c.push([b.Ka, "deposits", a]);
            c.push([b.Ja, "reserves", a]);
            c.push([b.Ja, "deposits", a]);
            b.Sa(c);
            break;
        case "governmenttaxes":
            b = V;
            c = [];
            c.push([b.Ta, "reserves", a]);
            c.push([b.Ka, "deposits", -a]);
            c.push([b.Ja, "reserves", -a]);
            c.push([b.Ja, "deposits", -a]);
            b.Sa(c);
            break;
        case "governmentdebtissuance":
            b = V;
            c = [];
            c.push([b.Ta,
                "reserves", a
            ]);
            c.push([b.Ta, "treasuries", a]);
            c.push([b.Ka, "deposits", -a]);
            c.push([b.Ja, "reserves", -a]);
            c.push([b.Ja, "deposits", -a]);
            c.push([b.Ka, "treasuries", a]);
            b.Sa(c);
            break;
        case "consolidatedgovernmentspending":
            b = V;
            c = [];
            c.push([b.Ta, "treasuries", a]);
            c.push([b.Ka, "treasuries", a]);
            b.Sa(c);
            break;
        case "governmentspendingnobonds":
            b = V;
            c = [];
            c.push([b.Ta, "treasuries", a]);
            c.push([b.Ra, "treasuries", a]);
            c.push([b.Ra, "reserves", a]);
            c.push([b.Ja, "reserves", a]);
            c.push([b.Ja, "deposits", a]);
            c.push([b.Ka, "deposits",
                a
            ]);
            b.Sa(c);
            break;
        case "withdrawcurrency":
            b = V;
            c = [];
            c.push([b.Ka, "deposits", -a]);
            c.push([b.Ka, "currency", a]);
            c.push([b.Ja, "currency", -a]);
            c.push([b.Ja, "deposits", -a]);
            b.Sa(c);
            break;
        case "depositcurrency":
            b = V;
            c = [];
            c.push([b.Ka, "deposits", a]);
            c.push([b.Ka, "currency", -a]);
            c.push([b.Ja, "currency", a]);
            c.push([b.Ja, "deposits", a]);
            b.Sa(c);
            break;
        case "bankloan":
            b = V;
            c = [];
            c.push([b.Ja, "loans", a]);
            c.push([b.Ja, "deposits", a]);
            c.push([b.Ka, "deposits", a]);
            c.push([b.Ka, "loans", a]);
            b.Sa(c);
            break;
        case "bankloaninterest":
            b =
                V;
            c = [];
            c.push([b.Ka, "deposits", -a]);
            c.push([b.Ja, "deposits", -a]);
            b.Sa(c);
            break;
        case "bankloanrepayment":
            b = V;
            c = [];
            c.push([b.Ja, "loans", -a]);
            c.push([b.Ja, "deposits", -a]);
            c.push([b.Ka, "deposits", -a]);
            c.push([b.Ka, "loans", -a]);
            b.Sa(c);
            break;
        case "bankloandefault":
            b = V;
            c = [];
            c.push([b.Ja, "loans", -a]);
            c.push([b.Ka, "loans", -a]);
            b.Sa(c);
            break;
        case "bondissuance":
            b = V;
            c = [];
            c.push([b.Na, "deposits", a]);
            c.push([b.Na, "bonds", a]);
            c.push([b.Ka, "deposits", -a]);
            c.push([b.Ka, "bonds", a]);
            b.Sa(c);
            break;
        case "bondinterest":
            b =
                V;
            c = [];
            c.push([b.Na, "deposits", -a]);
            c.push([b.Ka, "deposits", a]);
            b.Sa(c);
            break;
        case "bondrepayment":
            b = V;
            c = [];
            c.push([b.Na, "deposits", -a]);
            c.push([b.Na, "bonds", -a]);
            c.push([b.Ka, "deposits", a]);
            c.push([b.Ka, "bonds", -a]);
            b.Sa(c);
            break;
        case "bonddefault":
            b = V;
            c = [];
            c.push([b.Na, "bonds", -a]);
            c.push([b.Ka, "bonds", -a]);
            b.Sa(c);
            break;
        case "bankloansecuritize":
            b = V;
            c = [];
            c.push([b.Ja, "loans", -a]);
            c.push([b.Ja, "deposits", -a]);
            c.push([b.Na, "deposits", -a]);
            c.push([b.Na, "securitizedloans", a]);
            b.Sa(c);
            break;
        case "qe":
            b =
                V;
            c = [];
            c.push([b.Ra, "treasuries", a]);
            c.push([b.Ra, "reserves", a]);
            c.push([b.Ka, "deposits", a]);
            c.push([b.Ka, "treasuries", -a]);
            c.push([b.Ja, "reserves", a]);
            c.push([b.Ja, "deposits", a]);
            b.Sa(c);
            break;
        case "qebanks":
            b = V;
            c = [];
            c.push([b.Ra, "treasuries", a]);
            c.push([b.Ra, "reserves", a]);
            c.push([b.Ja, "treasuries", -a]);
            c.push([b.Ja, "reserves", a]);
            b.Sa(c);
            break;
        case "omoraiserates":
            b = V;
            c = [];
            c.push([b.Ra, "treasuries", -a]);
            c.push([b.Ra, "reserves", -a]);
            c.push([b.Ja, "treasuries", a]);
            c.push([b.Ja, "reserves", -a]);
            b.Sa(c);
            break;
        case "omolowerrates":
            b = V;
            c = [];
            c.push([b.Ra, "treasuries", a]);
            c.push([b.Ra, "reserves", a]);
            c.push([b.Ja, "treasuries", -a]);
            c.push([b.Ja, "reserves", a]);
            b.Sa(c);
            break;
        case "governmentdebtissuancettl":
            b = V;
            c = [];
            c.push([b.Ta, "ttl", a]);
            c.push([b.Ta, "treasuries", a]);
            c.push([b.Ja, "treasuries", a]);
            c.push([b.Ja, "ttl", a]);
            b.Sa(c);
            break;
        case "treasurymovesttl":
            b = V, c = [], c.push([b.Ja, "reserves", -a]), c.push([b.Ja, "ttl", -a]), c.push([b.Ta, "ttl", -a]), c.push([b.Ta, "reserves", a]), b.Sa(c)
    }
}

function X() {
    Ia(Ea());
    Ha(k)
}

function Y() {
    Ia(0 - Ea())
}

function Ja() {
    document.getElementById("errorLabel").style.display = "block";
    r("BS Manual", "Error Op Invalid", W())
}

function Ga() {
    document.getElementById("errorLabel").style.display = "none"
}
var Ka = "privatespending";

function La(a) {
    if (a == l) document.getElementById("explanationArea").style.display = "none";
    else {
        document.getElementById("explanationArea").style.display = "block";
        if (Ka != l) {
            var b = document.getElementById(Ka);
            b != l && (b.style.display = "none")
        }
        Ka = a != l ? a.value : l;
        Ka != l && (b = document.getElementById(Ka), b != l && (b.style.display = "block"));
        a = aa(document.getElementById("opSelect"), W());
        document.getElementById("opDetailsOpName").innerHTML = " (" + a + ")";
        Ha(o)
    }
}

function Ha(a) {
    var b = document.getElementById("replayOpButton");
    a ? b.removeAttribute("disabled") : b.setAttribute("disabled", "disabled")
}
var Ma = o,
    Z = {
        Pa: -1,
        Ya: [
            ["privatespending", k, "To start, observe how spending transfers assets (and financial net worth) between balance sheets within the private sector."],
            ["governmentspending", k, "Government spending results in an equivalent transfer of assets (and financial net worth) TO the private sector."],
            ["governmenttaxes", k, "Government taxation reduces the financial net worth of the private sector so as to limit potential spending and inflationary pressures. When available economic capacity is limited, taxation can also make room for the politically desired level of government spending."],
            ["governmentspending",
                k, "For this step the government will spend again in preparation for the next step."
            ],
            ["governmentdebtissuance", k, "Government bond issuance comes after government spending and simply gives the private sector a longer duration asset in exchange for money (i.e., it's an asset swap)."],
            ["consolidatedgovernmentspending", k, "A combined operation (government spending plus debt issuance) shows how government deficits supply the private sector with financial savings in the form of government liabilities."],
            ["consolidatedgovernmentspending", o, "This step runs the combined operation in reverse so the balance sheets don't grow too large for this visualizer."],
            ["governmentspendingnobonds", k, "A sovereign government does not need to 'raise money' before it can spend, and this combined operation demonstrates why."],
            ["governmentspendingnobonds", o, "This step runs the combined operation in reverse so the balance sheets don't grow too large for this visualizer."],
            ["governmentspending", k, "For this step the government will spend again in preparation for later steps."],
            ["withdrawcurrency", k, "Customers can withdraw physical cash from their bank deposit accounts."],
            ["depositcurrency", k, "Customers can deposit physical cash into bank accounts."],
            ["bankloan", k, "Banks make loans to credit-worthy borrowers (thus creating deposits) and lending is never constrained by how many reserves banks have!"],
            ["bankloaninterest", k, "Borrowers make regular interest payments to banks. [In real life, interest payments would be much smaller relative to original loan size than shown here.]"],
            ["bankloanrepayment", k, "Borrowers repay loan principal over time, typically as they earn the necessary income, thus reversing the balance sheet impacts of the original loan."],
            ["bankloan", k, "This step creates another bank loan in preparation for the next step."],
            ["bankloandefault", k, "Borrower defaults on bank loans are comparable to a gift of balance sheet net worth from banks to borrowers, which is why banks only want to lend to credit-worthy borrowers."],
            ["bondissuance", k, "When they need money, companies can issue bonds as an alternative to borrowing from banks. (There are additional funding options also, such as the commercial paper market)."],
            ["bondinterest", k, "Companies make interest payments on their outstanding bonds. [In real life, interest payments would be much smaller relative to original bond size than shown here.]"],
            ["bondrepayment", k, "Companies repay the principal on bonds as the bonds come due (bonds have fixed duration)."],
            ["bondissuance", k, "This step enacts another corporate bond issuance in preparation for the next step."],
            ["bonddefault", k, "Companies can default on their bond obligations just like bank borrowers can default on bank loans."],
            ["bankloan", k, "This step creates another bank loan in preparation for the next step."],
            ["bankloansecuritize", k, "Securitization packages loans as bond-like securities that can be sold to investors."],
            ["qe", k, "Quantitative easing by a central bank is essentially an asset swap that replaces long duration assets in the private sector with short duration assets (either reserves or bank deposits plus reserves)."],
            ["omoraiserates", k, "Central banks traditionally use open market operations to defend their current target overnight interest rate. While the rate is below target, the central bank sells treasuries (withdrawing reserves) to drive the rate up toward target."],
            ["omolowerrates", k, "Conversely, while the overnight rate is above target, the central bank adds buys treasuries (adding reserves to the banking system) to drive the rate down toward target."]
        ],
        reset: function () {
            Z.Pa = -1;
            Z.Tb()
        },
        hc: function () {
            if (T == l)
                if (Z.Pa == Z.Ya.length - 1) alert("At last step already");
                else {
                    Z.Pa++;
                    Z.Tb();
                    var a = Z.Ya[Z.Pa][1];
                    a ? X() : Y();
                    r("BS Wizard", a ? "Op Run" : "Op Reverse", W());
                    Z.Pa == Z.Ya.length - 1 && r("BS Wizard", "Wizard Completed")
                }
        },
        jc: function () {
            if (T == l) {
                Q = k;
                var a = Z.Ya[Z.Pa][1];
                a ? Y() :
                    X();
                Q = o;
                a ? X() : Y();
                r("BS Wizard", "Op Replay", W())
            }
        },
        ic: function () {
            if (T == l)
                if (-1 == Z.Pa) alert("At first step already");
                else {
                    Q = k;
                    var a = Z.Ya[Z.Pa][1];
                    a ? Y() : X();
                    Z.Pa--;
                    Z.dc();
                    0 <= Z.Pa && ((a = Z.Ya[Z.Pa][1]) ? Y() : X(), a ? X() : Y());
                    Q = o;
                    Z.Tb();
                    r("BS Wizard", "Op Back")
                }
        },
        Tb: function () {
            document.getElementById("wizardTotalSteps").innerHTML = "(" + (Z.Ya.length + 1) + " total steps)";
            document.getElementById("wizardPrevStepNum").innerHTML = Z.Pa + 1;
            document.getElementById("wizardCurrStepNum").innerHTML = Z.Pa + 2;
            document.getElementById("wizardNextStepNum").innerHTML =
                Z.Pa + 3;
            document.getElementById("wizardPrevStepOp").innerHTML = Z.Xb(Z.Pa - 1);
            document.getElementById("wizardCurrStepOp").innerHTML = Z.Xb(Z.Pa);
            document.getElementById("wizardNextStepOp").innerHTML = Z.Xb(Z.Pa + 1);
            document.getElementById("wizardPrevStepComments").innerHTML = Z.Wb(Z.Pa - 1);
            document.getElementById("wizardCurrStepComments").innerHTML = Z.Wb(Z.Pa);
            document.getElementById("wizardNextStepComments").innerHTML = Z.Wb(Z.Pa + 1);
            document.getElementById("wizardDoneDonate").style.display = Z.Pa == Z.Ya.length - 1 ?
                "inline" : "none";
            Z.dc();
            1 > Z.Pa ? document.getElementById("wizardPrevButton").setAttribute("disabled", "disabled") : document.getElementById("wizardPrevButton").removeAttribute("disabled");
            0 > Z.Pa ? document.getElementById("wizardReplayButton").setAttribute("disabled", "disabled") : document.getElementById("wizardReplayButton").removeAttribute("disabled");
            Z.Pa >= Z.Ya.length - 1 ? document.getElementById("wizardNextButton").setAttribute("disabled", "disabled") : document.getElementById("wizardNextButton").removeAttribute("disabled")
        },
        dc: function () {
            if (0 <= Z.Pa && Z.Pa < Z.Ya.length) {
                var a = document.getElementById("opSelect"),
                    b = Z.Ya[Z.Pa][0];
                for (i = 0; i < a.length; i++)
                    if (a[i].value == b) {
                        a.selectedIndex = i;
                        break
                    } La(document.getElementById("opSelect"))
            } else La(l)
        },
        Xb: function (a) {
            var b = "";
            0 <= a && a < Z.Ya.length && (b = aa(document.getElementById("opSelect"), Z.Ya[a][0]), Z.Ya[a][1] || (b += " (REVERSAL)"));
            return b
        },
        Wb: function (a) {
            var b = "";
            return b = 0 > a ? "[Starting point]" : a >= Z.Ya.length ? "[Ending point]" : Z.Ya[a][2]
        }
    };
window.bsOnload = function () {
    for (var a = document.getElementsByTagName("button"), b = 0; b < a.length; b++) a[b].disabled = o;
    D = document.getElementsByTagNameNS(svgns, "svg")[0];
    V = new Ca;
    E.Ub = Ja;
    E.Vb = Ga;
    a = "op".replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    a = RegExp("[\\?&]" + a + "=([^&#]*)").exec(window.location.href);
    a = a == l ? l : a[1];
    if (a != l && "" != a)
        for (var b = document.getElementById("opSelect"), c = 0, f = b.length; c < f; c++)
            if (b[c].value == a) {
                b.selectedIndex = c;
                La(b[c]);
                break
            } La(document.getElementById("opSelect"))
};
window.setVisibilityNotes = setVisibilityNotes;
window.setVisibilityTips = setVisibilityTips;
window.toggleWizardMode = function () {
    Ma ? (Fa(), document.getElementById("wizardToggleButton").innerHTML = document.getElementById("wizardToggleButton").innerHTML.replace("OFF", "ON"), document.getElementById("wizardArea").style.display = "none", document.getElementById("controlArea").style.display = "block", document.getElementById("explanationArea").style.display = "block", Ma = o, r("BS Wizard", "Wizard Off")) : (Fa(), document.getElementById("wizardToggleButton").innerHTML = document.getElementById("wizardToggleButton").innerHTML.replace("ON",
        "OFF"), document.getElementById("wizardArea").style.display = "block", document.getElementById("controlArea").style.display = "none", Z.reset(), document.getElementById("opAmountText").value = "30", Ma = k, r("BS Manual", "Wizard On"), alert("Please click the 'Run This' button in the box below the balance sheet diagrams. Repeatedly clicking this button will walk you through all the macroeconomic operations, one at a time."))
};
window.BalanceSheetWizard = Z;
window.BalanceSheetWizard_stepPrev = function () {
    Z.ic()
};
window.BalanceSheetWizard_stepReplay = function () {
    Z.jc()
};
window.BalanceSheetWizard_stepNext = function () {
    Z.hc()
};
window.selectionChangedClick = function (a) {
    La(a);
    r("BS Manual", "Op Select", a.value)
};
window.doActionClick = function () {
    X();
    r("BS Manual", "Op Run", W())
};
window.replayActionClick = function () {
    Q = k;
    Y();
    Q = o;
    "none" == document.getElementById("errorLabel").style.display && X();
    r("BS Manual", "Op Replay", W())
};
window.reverseActionClick = function () {
    Y();
    Ha(o);
    r("BS Manual", "Op Reverse", W())
};
window.resetBalanceSheetsClick = function () {
    Fa();
    r("BS Manual", "Reset Diagram")
};