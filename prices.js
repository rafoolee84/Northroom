/* Northroom prices. Load after products.js and catalog-extra.js — catalog purged 2026-09-07 */
window.NORTHROOM_PRICE_OVERRIDES={};
window.NORTHROOM_BRAND_PRICE_OVERRIDES={};
(function(){
  var po=window.NORTHROOM_PRICE_OVERRIDES||{};
  (window.NORTHROOM_PRODUCTS||[]).forEach(function(p){ if(po[p.title]!=null) p.price=po[p.title]; });
  var bo=window.NORTHROOM_BRAND_PRICE_OVERRIDES||{};
  (window.NORTHROOM_BRAND||[]).forEach(function(p){ if(bo[p.title]!=null) p.price=bo[p.title]; });
  // Point Mark brand cards at Printify mockup files in /images
  var bi={"Northroom Ceramic Mug 11oz":"images/mug.jpg","Northroom Faux Suede Pillowcase":"images/pillow.jpg","Northroom Matte Poster 7x5":"images/poster.jpg"};
  var bb={"Northroom Ceramic Mug 11oz":"White ceramic with the Northroom mark. Printify.","Northroom Faux Suede Pillowcase":"Faux suede cover with the house mark. Insert not included. Printify.","Northroom Matte Poster 7x5":"Small matte print of the Northroom mark. Printify."};
  (window.NORTHROOM_BRAND||[]).forEach(function(p){ if(bi[p.title]) p.image=bi[p.title]; if(bb[p.title]) p.blurb=bb[p.title]; });
})();
