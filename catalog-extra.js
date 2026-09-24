/* Extra Northroom SKUs + category photos. Load after products.js — catalog purged 2026-09-07 */
window.NORTHROOM_EXTRA_PRODUCTS=[];
window.NORTHROOM_CATEGORY_IMAGES={"Textile":"images/catalog/T-001_0.jpg","Lighting":"images/catalog/L-001_0.jpg","Kitchen":"images/catalog/S-003_0.jpg","Decor":"images/catalog/D-002_0.jpg","Bath":"images/catalog/S-003_0.jpg","Storage":"images/catalog/S-003_0.jpg","Outdoor":"images/catalog/O-001_0.jpg"};
window.NORTHROOM_PRICE_OVERRIDES={};
window.NORTHROOM_BRAND_PRICE_OVERRIDES={};
(function(){
  var have={};
  (window.NORTHROOM_PRODUCTS||[]).forEach(function(p){ have[p.title]=1; });
  (window.NORTHROOM_EXTRA_PRODUCTS||[]).forEach(function(p){
    if(!have[p.title]) window.NORTHROOM_PRODUCTS.push(p);
  });
  var imgs=window.NORTHROOM_CATEGORY_IMAGES||{};
  (window.NORTHROOM_CATEGORIES||[]).forEach(function(c){
    if(!c.image && imgs[c.id]) c.image=imgs[c.id];
  });
  var po=window.NORTHROOM_PRICE_OVERRIDES||{};
  (window.NORTHROOM_PRODUCTS||[]).forEach(function(p){
    if(po[p.title]!=null) p.price=po[p.title];
  });
  var bo=window.NORTHROOM_BRAND_PRICE_OVERRIDES||{};
  (window.NORTHROOM_BRAND||[]).forEach(function(p){
    if(bo[p.title]!=null) p.price=bo[p.title];
  });

  // Lock: rebuild categories from products if missing (survives products.js rewrites)
  if (!window.NORTHROOM_CATEGORIES || !window.NORTHROOM_CATEGORIES.length) {
    var defaultLines = {
      Textile: "Soft layers for bed, table, and couch.",
      Lighting: "Quiet glow for desks, corners, and walls.",
      Decor: "Calm objects for shelves and surfaces.",
      Storage: "Baskets, shelves, and quiet order.",
      Outdoor: "Entry and patio pieces with a soft edge."
    };
    var seen = {};
    var built = [];
    (window.NORTHROOM_PRODUCTS || []).forEach(function (p) {
      var id = p && p.cat;
      if (!id || seen[id]) return;
      seen[id] = 1;
      built.push({ id: id, line: defaultLines[id] || ("Quiet pieces for " + id.toLowerCase() + ".") });
    });
    window.NORTHROOM_CATEGORIES = built;
  }
  var imgs2 = window.NORTHROOM_CATEGORY_IMAGES || {};
  (window.NORTHROOM_CATEGORIES || []).forEach(function (c) {
    if (!c.image && imgs2[c.id]) c.image = imgs2[c.id];
  });
})();

window.NORTHROOM_DEMOTED_SKUS=window.NORTHROOM_DEMOTED_SKUS||["L-005","L-009","L-015","O-017","O-025","S-020","S-022","S-030","S-042","S-045","S-049","L-002","L-017","L-018"];
