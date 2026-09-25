/* Northroom header cart badge — single source of truth: localStorage "nr_cart" (same as cart.html). */
(function () {
  var KEY = "nr_cart";
  function count() {
    try {
      var c = JSON.parse(localStorage.getItem(KEY) || "[]") || [];
      return c.reduce(function (n, i) { return n + Math.max(0, Number(i && i.qty) || 1); }, 0);
    } catch (e) { return 0; }
  }
  function badge() {
    var a = document.getElementById("nr-cart-badge");
    if (!a) {
      var h = document.querySelector("header");
      if (!h) return null;
      a = document.createElement("a");
      a.id = "nr-cart-badge"; a.className = "cart-badge"; a.href = "cart.html"; a.title = "Cart";
      a.style.cssText = "font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:.06em;color:inherit;border:1px solid rgba(42,39,36,.18);border-radius:999px;padding:6px 10px;text-decoration:none";
      h.appendChild(a);
    }
    return a;
  }
  function render() {
    var a = badge(); if (!a) return;
    var n = count();
    a.href = "cart.html";
    a.textContent = "Cart " + n;
    a.setAttribute("aria-label", "Cart, " + n + (n === 1 ? " item" : " items"));
    a.style.display = "inline-flex";
  }
  window.nrRenderCartBadge = render;
  window.addEventListener("nr-cart-updated", render);
  window.addEventListener("storage", function (e) { if (!e.key || e.key === KEY) render(); });
  window.addEventListener("pageshow", render);
  document.addEventListener("visibilitychange", function () { if (document.visibilityState === "visible") render(); });
  // Catch any writer that forgets to dispatch nr-cart-updated.
  try {
    var set = Storage.prototype.setItem, rm = Storage.prototype.removeItem;
    Storage.prototype.setItem = function (k, v) { set.apply(this, arguments); if (k === KEY) setTimeout(render, 0); };
    Storage.prototype.removeItem = function (k) { rm.apply(this, arguments); if (k === KEY) setTimeout(render, 0); };
  } catch (e) {}
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render); else render();
})();
