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
}());
