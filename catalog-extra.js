/* Extra Northroom SKUs + category photos. Load after products.js — catalog purged 2026-09-07 */
window.NORTHROOM_EXTRA_PRODUCTS=[];
window.NORTHROOM_CATEGORY_IMAGES={"Textile":"https://images.pexels.com/photos/10240394/pexels-photo-10240394.jpeg?auto=compress&cs=tinysrgb&w=800","Lighting":"https://images.pexels.com/photos/29909645/pexels-photo-29909645.jpeg?auto=compress&cs=tinysrgb&w=800","Kitchen":"https://images.unsplash.com/photo-1637181507563-3b94df291e2c?w=800&auto=format&fit=crop","Decor":"https://images.pexels.com/photos/32688518/pexels-photo-32688518.jpeg?auto=compress&cs=tinysrgb&w=800","Bath":"https://images.unsplash.com/photo-1724847885015-be191f1a47ef?w=800&auto=format&fit=crop","Storage":"https://images.pexels.com/photos/4112601/pexels-photo-4112601.jpeg?auto=compress&cs=tinysrgb&w=800","Outdoor":"https://images.pexels.com/photos/6585755/pexels-photo-6585755.jpeg?auto=compress&cs=tinysrgb&w=800"};
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
})();
