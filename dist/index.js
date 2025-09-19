import N, { createContext as ie, useContext as le, useMemo as ve, useState as j, useEffect as ce, useCallback as Ee, Suspense as L } from "react";
import { AnimatePresence as ke, motion as de } from "framer-motion";
import { useForm as z } from "react-hook-form";
import { zodResolver as I } from "@hookform/resolvers/zod";
import { z as g } from "zod";
import { clsx as ue } from "clsx";
var X = { exports: {} }, S = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ae;
function _e() {
  if (ae) return S;
  ae = 1;
  var t = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
  function o(l, n, i) {
    var d = null;
    if (i !== void 0 && (d = "" + i), n.key !== void 0 && (d = "" + n.key), "key" in n) {
      i = {};
      for (var u in n)
        u !== "key" && (i[u] = n[u]);
    } else i = n;
    return n = i.ref, {
      $$typeof: t,
      type: l,
      key: d,
      ref: n !== void 0 ? n : null,
      props: i
    };
  }
  return S.Fragment = s, S.jsx = o, S.jsxs = o, S;
}
var T = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ne;
function Re() {
  return ne || (ne = 1, process.env.NODE_ENV !== "production" && function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === we ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case _:
          return "Fragment";
        case C:
          return "Profiler";
        case A:
          return "StrictMode";
        case pe:
          return "Suspense";
        case be:
          return "SuspenseList";
        case xe:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case O:
            return "Portal";
          case P:
            return (e.displayName || "Context") + ".Provider";
          case W:
            return (e._context.displayName || "Context") + ".Consumer";
          case he:
            var a = e.render;
            return e = e.displayName, e || (e = a.displayName || a.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ge:
            return a = e.displayName || null, a !== null ? a : t(e.type) || "Memo";
          case Q:
            a = e._payload, e = e._init;
            try {
              return t(e(a));
            } catch {
            }
        }
      return null;
    }
    function s(e) {
      return "" + e;
    }
    function o(e) {
      try {
        s(e);
        var a = !1;
      } catch {
        a = !0;
      }
      if (a) {
        a = console;
        var c = a.error, f = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c.call(
          a,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          f
        ), s(e);
      }
    }
    function l(e) {
      if (e === _) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === Q)
        return "<...>";
      try {
        var a = t(e);
        return a ? "<" + a + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var e = V.A;
      return e === null ? null : e.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function d(e) {
      if (K.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function u(e, a) {
      function c() {
        ee || (ee = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          a
        ));
      }
      c.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: c,
        configurable: !0
      });
    }
    function w() {
      var e = t(this.type);
      return re[e] || (re[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function x(e, a, c, f, v, y, J, B) {
      return c = y.ref, e = {
        $$typeof: E,
        type: e,
        key: a,
        props: y,
        _owner: v
      }, (c !== void 0 ? c : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: w
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: J
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: B
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function m(e, a, c, f, v, y, J, B) {
      var h = a.children;
      if (h !== void 0)
        if (f)
          if (ye(h)) {
            for (f = 0; f < h.length; f++)
              p(h[f]);
            Object.freeze && Object.freeze(h);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(h);
      if (K.call(a, "key")) {
        h = t(e);
        var R = Object.keys(a).filter(function(je) {
          return je !== "key";
        });
        f = 0 < R.length ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}", oe[h + f] || (R = 0 < R.length ? "{" + R.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          f,
          h,
          R,
          h
        ), oe[h + f] = !0);
      }
      if (h = null, c !== void 0 && (o(c), h = "" + c), d(a) && (o(a.key), h = "" + a.key), "key" in a) {
        c = {};
        for (var G in a)
          G !== "key" && (c[G] = a[G]);
      } else c = a;
      return h && u(
        c,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), x(
        e,
        h,
        y,
        v,
        n(),
        c,
        J,
        B
      );
    }
    function p(e) {
      typeof e == "object" && e !== null && e.$$typeof === E && e._store && (e._store.validated = 1);
    }
    var b = N, E = Symbol.for("react.transitional.element"), O = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), W = Symbol.for("react.consumer"), P = Symbol.for("react.context"), he = Symbol.for("react.forward_ref"), pe = Symbol.for("react.suspense"), be = Symbol.for("react.suspense_list"), ge = Symbol.for("react.memo"), Q = Symbol.for("react.lazy"), xe = Symbol.for("react.activity"), we = Symbol.for("react.client.reference"), V = b.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = Object.prototype.hasOwnProperty, ye = Array.isArray, q = console.createTask ? console.createTask : function() {
      return null;
    };
    b = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var ee, re = {}, te = b.react_stack_bottom_frame.bind(
      b,
      i
    )(), se = q(l(i)), oe = {};
    T.Fragment = _, T.jsx = function(e, a, c, f, v) {
      var y = 1e4 > V.recentlyCreatedOwnerStacks++;
      return m(
        e,
        a,
        c,
        !1,
        f,
        v,
        y ? Error("react-stack-top-frame") : te,
        y ? q(l(e)) : se
      );
    }, T.jsxs = function(e, a, c, f, v) {
      var y = 1e4 > V.recentlyCreatedOwnerStacks++;
      return m(
        e,
        a,
        c,
        !0,
        f,
        v,
        y ? Error("react-stack-top-frame") : te,
        y ? q(l(e)) : se
      );
    };
  }()), T;
}
process.env.NODE_ENV === "production" ? X.exports = _e() : X.exports = Re();
var r = X.exports;
const me = ie(null), Qe = ({ config: t, children: s }) => {
  const o = ve(() => t, [t]);
  return /* @__PURE__ */ r.jsx(me.Provider, { value: o, children: s });
}, $ = () => {
  const t = le(me);
  if (!t) throw new Error("useAuthUI must be used within AuthUIProvider");
  return t;
}, Ke = ({ children: t }) => {
  const [s, o] = j(() => typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  return ce(() => {
    typeof document < "u" && document.documentElement.classList.toggle("dark", s === "dark");
  }, [s]), /* @__PURE__ */ r.jsx("div", { "data-theme": s, children: t });
}, fe = ie(null), er = ({ children: t }) => {
  const [s, o] = j([]), l = Ee((n) => {
    const i = Date.now();
    o((d) => [...d, { id: i, ...n }]), setTimeout(() => o((d) => d.filter((u) => u.id !== i)), 3500);
  }, []);
  return /* @__PURE__ */ r.jsxs(fe.Provider, { value: { push: l }, children: [
    t,
    /* @__PURE__ */ r.jsx("div", { className: "fixed top-4 right-4 space-y-2 z-[9999]", children: s.map((n) => /* @__PURE__ */ r.jsx("div", { className: `glass px-4 py-2 rounded-lg text-sm ${n.type === "error" ? "border-red-500/40" : "border-emerald-500/40"}`, children: n.message }, n.id)) })
  ] });
}, Y = () => {
  const t = le(fe);
  if (!t) throw new Error("useToast must be used inside ToastProvider");
  return t;
};
function Ne() {
  const [t, s] = j(() => document.documentElement.classList.contains("dark"));
  return ce(() => {
    document.documentElement.classList.toggle("dark", t);
  }, [t]), { isDark: t, setIsDark: s };
}
const Pe = () => {
  const { isDark: t, setIsDark: s } = Ne();
  return /* @__PURE__ */ r.jsxs("button", { className: "text-sm px-3 py-1 rounded-full glass", onClick: () => s(!t), children: [
    t ? "Light" : "Dark",
    " mode"
  ] });
}, rr = ({ initial: t = "login" }) => {
  const [s, o] = j(t);
  return /* @__PURE__ */ r.jsxs("div", { className: "min-h-[80vh] grid place-items-center p-6 bg-[radial-gradient(ellipse_at_top,theme(colors.primary/20),transparent)]", children: [
    /* @__PURE__ */ r.jsx("div", { className: "absolute top-4 right-4", children: /* @__PURE__ */ r.jsx(Pe, {}) }),
    /* @__PURE__ */ r.jsx(ke, { mode: "wait", children: /* @__PURE__ */ r.jsxs(
      de.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.25 },
        className: "w-full",
        children: [
          s === "login" && /* @__PURE__ */ r.jsx(L, { fallback: /* @__PURE__ */ r.jsx("div", { children: "Loading..." }), children: /* @__PURE__ */ r.jsx(Se, { onNavigate: o }) }),
          s === "register" && /* @__PURE__ */ r.jsx(L, { fallback: /* @__PURE__ */ r.jsx("div", { children: "Loading..." }), children: /* @__PURE__ */ r.jsx(Te, { onNavigate: o }) }),
          s === "forgot" && /* @__PURE__ */ r.jsx(L, { fallback: /* @__PURE__ */ r.jsx("div", { children: "Loading..." }), children: /* @__PURE__ */ r.jsx(Oe, { onNavigate: o }) }),
          s === "reset" && /* @__PURE__ */ r.jsx(L, { fallback: /* @__PURE__ */ r.jsx("div", { children: "Loading..." }), children: /* @__PURE__ */ r.jsx(Ae, { onNavigate: o }) })
        ]
      },
      s
    ) })
  ] });
}, Se = N.lazy(() => Promise.resolve().then(() => $e).then((t) => ({ default: t.LoginForm }))), Te = N.lazy(() => Promise.resolve().then(() => Me).then((t) => ({ default: t.RegisterForm }))), Oe = N.lazy(() => Promise.resolve().then(() => We).then((t) => ({ default: t.ForgotPasswordForm }))), Ae = N.lazy(() => Promise.resolve().then(() => qe).then((t) => ({ default: t.ResetPasswordForm }))), Z = g.string().email("Enter a valid email"), H = g.string().min(8, "At least 8 characters"), Ce = g.object({
  email: Z,
  password: g.string().min(1, "Password is required"),
  remember: g.boolean().optional()
}), Le = g.object({
  firstName: g.string().min(1, "Required"),
  lastName: g.string().min(1, "Required"),
  email: Z,
  contactNumber: g.string().optional(),
  password: H
}), Fe = g.object({
  email: Z
}), ze = g.object({
  token: g.string().min(1, "Invalid token"),
  newPassword: H,
  confirmPassword: H
}).refine((t) => t.newPassword === t.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
}), D = ({ title: t, subtitle: s, children: o }) => /* @__PURE__ */ r.jsxs("div", { className: "glass rounded-3xl p-6 w-full max-w-md mx-auto", children: [
  t && /* @__PURE__ */ r.jsx("h2", { className: "text-xl font-semibold mb-1", children: t }),
  s && /* @__PURE__ */ r.jsx("p", { className: "text-sm text-zinc-600 dark:text-zinc-300 mb-4", children: s }),
  o
] }), k = ({ label: t, error: s, className: o, ...l }) => /* @__PURE__ */ r.jsxs("label", { className: "block", children: [
  t && /* @__PURE__ */ r.jsx("span", { className: "block mb-1 text-sm font-medium", children: t }),
  /* @__PURE__ */ r.jsx(
    "input",
    {
      className: ue(
        "w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white/70 dark:bg-zinc-900/70 px-3 py-2 outline-none focus:ring-2 focus:ring-primary",
        s && "border-red-500 focus:ring-red-500",
        o
      ),
      ...l
    }
  ),
  s && /* @__PURE__ */ r.jsx("p", { className: "text-xs text-red-500 mt-1", children: s })
] }), F = (t) => {
  const [s, o] = j(!1);
  return /* @__PURE__ */ r.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ r.jsx(k, { ...t, type: s ? "text" : "password" }),
    /* @__PURE__ */ r.jsx("button", { type: "button", className: "absolute right-3 top-[34px] text-xs text-zinc-500", onClick: () => o((l) => !l), children: s ? "Hide" : "Show" })
  ] });
}, M = ({ className: t, loading: s, children: o, disabled: l, ...n }) => /* @__PURE__ */ r.jsxs(
  de.button,
  {
    whileTap: { scale: 0.98 },
    className: ue(
      "inline-flex items-center justify-center rounded-2xl px-4 py-2 font-medium text-white bg-primary hover:bg-primary-700 transition shadow-lg disabled:opacity-60 disabled:cursor-not-allowed",
      t
    ),
    disabled: l || s,
    ...n,
    children: [
      s && /* @__PURE__ */ r.jsx("span", { className: "mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" }),
      o
    ]
  }
);
async function U(t, s, o = {}) {
  var i;
  const l = t.apiBaseUrl + s, n = await fetch(l, {
    method: o.method || "POST",
    headers: {
      "Content-Type": "application/json",
      ...((i = t.headers) == null ? void 0 : i.call(t)) || {}
    },
    body: o.body ? JSON.stringify(o.body) : void 0,
    credentials: "include"
  });
  if (!n.ok) {
    const d = await n.text().catch(() => "");
    throw new Error(d || `Request failed (${n.status})`);
  }
  return n.json();
}
const Ie = ({ onNavigate: t }) => {
  var x, m;
  const { push: s } = Y(), o = $(), [l, n] = j(!1), { register: i, handleSubmit: d, formState: { errors: u } } = z({
    resolver: I(Ce),
    defaultValues: { remember: !0 }
  }), w = d(async (p) => {
    try {
      n(!0);
      const b = await U(o, o.routes.login, { body: { email: p.email, password: p.password } });
      s({ type: "success", message: "Logged in successfully" }), window.dispatchEvent(new CustomEvent("auth:login", { detail: b }));
    } catch (b) {
      s({ type: "error", message: b.message || "Login failed" });
    } finally {
      n(!1);
    }
  });
  return /* @__PURE__ */ r.jsxs(D, { title: "Welcome back", subtitle: "Log in to continue", children: [
    /* @__PURE__ */ r.jsxs("form", { onSubmit: w, className: "space-y-4", children: [
      /* @__PURE__ */ r.jsx(k, { label: "Email", type: "email", placeholder: "you@example.com", ...i("email"), error: (x = u.email) == null ? void 0 : x.message }),
      /* @__PURE__ */ r.jsx(F, { label: "Password", placeholder: "••••••••", ...i("password"), error: (m = u.password) == null ? void 0 : m.message }),
      /* @__PURE__ */ r.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
        /* @__PURE__ */ r.jsxs("label", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ r.jsx("input", { type: "checkbox", className: "accent-primary", ...i("remember") }),
          " Remember me"
        ] }),
        /* @__PURE__ */ r.jsx("button", { type: "button", className: "text-primary", onClick: () => t("forgot"), children: "Forgot password?" })
      ] }),
      /* @__PURE__ */ r.jsx(M, { type: "submit", loading: l, className: "w-full", children: "Sign in" })
    ] }),
    /* @__PURE__ */ r.jsxs("p", { className: "mt-4 text-sm", children: [
      "No account? ",
      /* @__PURE__ */ r.jsx("button", { className: "text-primary", onClick: () => t("register"), children: "Create one" })
    ] })
  ] });
}, $e = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  LoginForm: Ie
}, Symbol.toStringTag, { value: "Module" }));
function Ye(t) {
  let s = 0;
  return t ? (s += Math.min(10, t.length) * 6, /[a-z]/.test(t) && (s += 10), /[A-Z]/.test(t) && (s += 10), /[0-9]/.test(t) && (s += 10), /[^\w\s]/.test(t) && (s += 10), Math.min(s, 100)) : s;
}
const De = ({ onNavigate: t }) => {
  var E, O, _, A, C;
  const { push: s } = Y(), o = $(), [l, n] = j(!1), [i, d] = j(0), { register: u, handleSubmit: w, watch: x, formState: { errors: m } } = z({
    resolver: I(Le)
  }), p = x("password");
  N.useEffect(() => {
    d(Ye(p || ""));
  }, [p]);
  const b = w(async (W) => {
    try {
      n(!0);
      const P = await U(o, o.routes.register, { body: W });
      s({ type: "success", message: "Account created" }), window.dispatchEvent(new CustomEvent("auth:login", { detail: P }));
    } catch (P) {
      s({ type: "error", message: P.message || "Registration failed" });
    } finally {
      n(!1);
    }
  });
  return /* @__PURE__ */ r.jsxs(D, { title: "Create your account", subtitle: "Join us in a minute", children: [
    /* @__PURE__ */ r.jsxs("form", { onSubmit: b, className: "space-y-4", children: [
      /* @__PURE__ */ r.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
        /* @__PURE__ */ r.jsx(k, { label: "First name", ...u("firstName"), error: (E = m.firstName) == null ? void 0 : E.message }),
        /* @__PURE__ */ r.jsx(k, { label: "Last name", ...u("lastName"), error: (O = m.lastName) == null ? void 0 : O.message })
      ] }),
      /* @__PURE__ */ r.jsx(k, { label: "Email", type: "email", ...u("email"), error: (_ = m.email) == null ? void 0 : _.message }),
      /* @__PURE__ */ r.jsx(k, { label: "Contact number", placeholder: "(+94) 771 234 567", ...u("contactNumber"), error: (A = m.contactNumber) == null ? void 0 : A.message }),
      /* @__PURE__ */ r.jsxs("div", { children: [
        /* @__PURE__ */ r.jsx(F, { label: "Password", ...u("password"), error: (C = m.password) == null ? void 0 : C.message }),
        /* @__PURE__ */ r.jsx("div", { className: "h-2 bg-zinc-200 dark:bg-zinc-800 rounded mt-2 overflow-hidden", children: /* @__PURE__ */ r.jsx("div", { className: "h-full bg-emerald-500 transition-all", style: { width: `${i}%` } }) }),
        /* @__PURE__ */ r.jsx("p", { className: "text-xs text-zinc-500 mt-1", children: "Password strength" })
      ] }),
      /* @__PURE__ */ r.jsx(M, { type: "submit", loading: l, className: "w-full", children: "Create account" })
    ] }),
    /* @__PURE__ */ r.jsxs("p", { className: "mt-4 text-sm", children: [
      "Have an account? ",
      /* @__PURE__ */ r.jsx("button", { className: "text-primary", onClick: () => t("login"), children: "Sign in" })
    ] })
  ] });
}, Me = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  RegisterForm: De
}, Symbol.toStringTag, { value: "Module" })), Ue = ({ onNavigate: t }) => {
  var x;
  const { push: s } = Y(), o = $(), [l, n] = j(!1), { register: i, handleSubmit: d, formState: { errors: u } } = z({ resolver: I(Fe) }), w = d(async (m) => {
    try {
      n(!0), await U(o, o.routes.forgotPassword, { body: m }), s({ type: "success", message: "If the email exists, a reset link has been sent." }), t("login");
    } catch (p) {
      s({ type: "error", message: p.message || "Request failed" });
    } finally {
      n(!1);
    }
  });
  return /* @__PURE__ */ r.jsxs(D, { title: "Forgot password", subtitle: "We will email you a reset link", children: [
    /* @__PURE__ */ r.jsxs("form", { onSubmit: w, className: "space-y-4", children: [
      /* @__PURE__ */ r.jsx(k, { label: "Email", type: "email", ...i("email"), error: (x = u.email) == null ? void 0 : x.message }),
      /* @__PURE__ */ r.jsx(M, { type: "submit", loading: l, className: "w-full", children: "Send reset link" })
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "mt-4 text-sm", children: /* @__PURE__ */ r.jsx("button", { className: "text-primary", onClick: () => t("login"), children: "Back to sign in" }) })
  ] });
}, We = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ForgotPasswordForm: Ue
}, Symbol.toStringTag, { value: "Module" })), Ve = ({ onNavigate: t, token: s }) => {
  var m, p;
  const { push: o } = Y(), l = $(), [n, i] = j(!1), { register: d, handleSubmit: u, formState: { errors: w } } = z({
    resolver: I(ze),
    defaultValues: { token: s || new URLSearchParams(typeof window < "u" ? window.location.search : "").get("token") || "" }
  }), x = u(async (b) => {
    try {
      i(!0), await U(l, l.routes.resetPassword, { body: { token: b.token, newPassword: b.newPassword } }), o({ type: "success", message: "Password reset successfully" }), t("login");
    } catch (E) {
      o({ type: "error", message: E.message || "Reset failed" });
    } finally {
      i(!1);
    }
  });
  return /* @__PURE__ */ r.jsxs(D, { title: "Reset password", subtitle: "Enter your new password", children: [
    /* @__PURE__ */ r.jsxs("form", { onSubmit: x, className: "space-y-4", children: [
      /* @__PURE__ */ r.jsx("input", { type: "hidden", ...d("token") }),
      /* @__PURE__ */ r.jsx(F, { label: "New password", ...d("newPassword"), error: (m = w.newPassword) == null ? void 0 : m.message }),
      /* @__PURE__ */ r.jsx(F, { label: "Confirm password", ...d("confirmPassword"), error: (p = w.confirmPassword) == null ? void 0 : p.message }),
      /* @__PURE__ */ r.jsx(M, { type: "submit", loading: n, className: "w-full", children: "Reset password" })
    ] }),
    /* @__PURE__ */ r.jsx("p", { className: "mt-4 text-sm", children: /* @__PURE__ */ r.jsx("button", { className: "text-primary", onClick: () => t("login"), children: "Back to sign in" }) })
  ] });
}, qe = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ResetPasswordForm: Ve
}, Symbol.toStringTag, { value: "Module" }));
export {
  rr as AuthShell,
  Qe as AuthUIProvider,
  Ue as ForgotPasswordForm,
  Ie as LoginForm,
  De as RegisterForm,
  Ve as ResetPasswordForm,
  Ke as ThemeProvider,
  er as ToastProvider
};
//# sourceMappingURL=index.js.map
