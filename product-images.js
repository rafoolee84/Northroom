(function(){
  var x=new XMLHttpRequest();
  x.open('GET','https://raw.githubusercontent.com/rafoolee84/Northroom/d95e9d681cb203957e8d043ec6880e7760c3cb58/product-images.js',false);
  x.send(null);
  eval(x.responseText);
  function dataUrl(path){
    var y=new XMLHttpRequest();
    y.open('GET', path, false);
    y.send(null);
    var t=String(y.responseText).replace(/\s+/g,'');
    if(t.indexOf('/9j/')===0) return 'data:image/jpeg;base64,'+t;
    return path;
  }
  var m=window.NORTHROOM_IMAGES||{};
  m["Northroom Ceramic Mug 11oz"]="images/mug.jpg";
  m["Northroom Faux Suede Pillowcase"]="images/pillow.jpg";
  m["Northroom Matte Poster 7x5"]="images/poster.jpg";
  m["Northroom Ceramic Mug 11oz"]=dataUrl('images/mug.jpg');
  m["Northroom Faux Suede Pillowcase"]=dataUrl('images/pillow.jpg');
  m["Northroom Matte Poster 7x5"]=dataUrl('images/poster.jpg');
  window.NORTHROOM_IMAGES=m;
})();
