(function () {
  var imgs = window.NORTHROOM_IMAGES || {};
  window.NORTHROOM_BRAND = (window.NORTHROOM_BRAND || []).map(function (p) {
    var img = imgs[p.title] || p.image;
    return img ? Object.assign({}, p, { image: img }) : p;
  });
  window.NORTHROOM_PRODUCTS = (window.NORTHROOM_PRODUCTS || []).map(function (p) {
    var img = imgs[p.title];
    return img ? Object.assign({}, p, { image: img }) : p;
  });
})();
