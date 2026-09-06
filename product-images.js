(function(){
  var x=new XMLHttpRequest();
  x.open('GET','https://raw.githubusercontent.com/rafoolee84/Northroom/d95e9d681cb203957e8d043ec6880e7760c3cb58/product-images.js',false);
  x.send(null);
  eval(x.responseText);
  var m=window.NORTHROOM_IMAGES;
  m["Northroom Ceramic Mug 11oz"]="images/mug.jpg";
  m["Northroom Faux Suede Pillowcase"]="images/pillow.jpg";
  m["Northroom Matte Poster 7x5"]="images/poster.jpg";
})();
