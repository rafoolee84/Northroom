(function () {
  var LAMP = "https://images.pexels.com/photos/17158341/pexels-photo-17158341.jpeg?auto=compress&cs=tinysrgb&w=1200";
  var imgs = window.NORTHROOM_IMAGES || {};
  window.NORTHROOM_BRAND = (window.NORTHROOM_BRAND || []).map(function (p) {
    var img = imgs[p.title] || p.image;
    return img ? Object.assign({}, p, { image: img }) : p;
  });
  window.NORTHROOM_PRODUCTS = (window.NORTHROOM_PRODUCTS || []).map(function (p) {
    if (p.title === "Matte Ceramic Lamp with Linen Shade") {
      return Object.assign({}, p, { image: LAMP });
    }
    var img = imgs[p.title];
    return img ? Object.assign({}, p, { image: img }) : p;
  });
})();
