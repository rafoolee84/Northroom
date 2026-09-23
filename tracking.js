/* Northroom shared analytics and advertising tags. */
(function () {
  var GA_MEASUREMENT_ID = 'G-2XECBDCX75';
  var PINTEREST_TAG_ID = '2612944698029';

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);

  var gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
  document.head.appendChild(gaScript);

  if (!window.pintrk) {
    window.pintrk = function () {
      window.pintrk.queue.push(Array.prototype.slice.call(arguments));
    };
    window.pintrk.queue = [];
    window.pintrk.version = '3.0';
    var pinScript = document.createElement('script');
    pinScript.async = true;
    pinScript.src = 'https://s.pinimg.com/ct/core.js';
    var firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(pinScript, firstScript);
  }
  window.pintrk('load', PINTEREST_TAG_ID);
  window.pintrk('page');

  function asItems(raw) {
    var list = Array.isArray(raw) ? raw : (raw ? [raw] : []);
    return list.map(function (x) {
      var qty = Math.max(1, Number(x.quantity != null ? x.quantity : (x.qty != null ? x.qty : 1)) || 1);
      var price = Number(x.price || 0) || 0;
      var id = String(x.item_id || x.sku || x.id || x.product_id || x.title || 'item');
      var name = String(x.item_name || x.title || x.name || id);
      return {
        item_id: id,
        item_name: name,
        price: price,
        quantity: qty,
        product_id: id,
        product_name: name
      };
    });
  }

  function cartValue(items) {
    return items.reduce(function (sum, it) {
      return sum + (Number(it.price) || 0) * (Number(it.quantity) || 1);
    }, 0);
  }

  function orderQuantity(items) {
    return items.reduce(function (sum, it) {
      return sum + (Number(it.quantity) || 1);
    }, 0);
  }

  function gaItems(items) {
    return items.map(function (it) {
      return {
        item_id: it.item_id,
        item_name: it.item_name,
        price: it.price,
        quantity: it.quantity
      };
    });
  }

  function pinLineItems(items) {
    return items.map(function (it) {
      return {
        product_id: it.product_id,
        product_name: it.product_name,
        product_price: it.price,
        product_quantity: it.quantity
      };
    });
  }

  function fireGa(eventName, items, value) {
    if (typeof window.gtag !== 'function') return;
    try {
      window.gtag('event', eventName, {
        currency: 'USD',
        value: Number(value.toFixed(2)),
        items: gaItems(items)
      });
    } catch (_) {}
  }

  function firePin(eventName, items, value) {
    if (typeof window.pintrk !== 'function') return;
    try {
      window.pintrk('track', eventName, {
        value: Number(value.toFixed(2)),
        currency: 'USD',
        order_quantity: orderQuantity(items),
        line_items: pinLineItems(items)
      });
    } catch (_) {}
  }

  function addToCart(payload) {
    var items = asItems(payload && (payload.items || payload.item || payload));
    if (!items.length) return;
    var value = (payload && payload.value != null) ? Number(payload.value) : cartValue(items);
    fireGa('add_to_cart', items, value);
    firePin('AddToCart', items, value);
  }

  function beginCheckout(payload) {
    var items = asItems(payload && (payload.items || payload));
    if (!items.length) return;
    var value = (payload && payload.value != null) ? Number(payload.value) : cartValue(items);
    fireGa('begin_checkout', items, value);
    firePin('InitiateCheckout', items, value);
  }

  function purchase(payload) {
    var items = asItems(payload && (payload.items || payload));
    var value = (payload && payload.value != null) ? Number(payload.value) : cartValue(items);
    fireGa('purchase', items, value);
    firePin('Checkout', items, value);
  }

  window.nrTrack = {
    addToCart: addToCart,
    beginCheckout: beginCheckout,
    purchase: purchase
  };
}());
