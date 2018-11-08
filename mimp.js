var sourceImageArray = ['https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg',
'https://d31j74p4lpxrfp.cloudfront.net/sites/default/files/cr_files/2611_sabes_interpretar_las_senales_que_tu_perro_te_da_2.jpg',
'https://3d4igz27oxtl2iwox73y9smh-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/stock-photo-dog-with-soft-chew-toy.png',
'https://i.imgur.com/zqSKewU.jpg',
'http://i.imgur.com/CvWoXZe.jpg',
'http://1.bp.blogspot.com/_mEVP28znA60/SPbIIA9Y4YI/AAAAAAAAACw/KMwZFAsTkSg/s400/roe+with+lizard.jpg',
'https://www.discoverlongisland.com/wp-content/uploads/2015/11/NYStateBird-400x400.jpg',
'https://pbs.twimg.com/profile_images/709478977056935936/DycN2L-6_400x400.jpg'];
var randomNumber = Math.floor(Math.random()*sourceImageArray.length);
var sourceImage = sourceImageArray[randomNumber]

var imagePreview = document.getElementById("imagePreview");
var ctx = imagePreview.getContext("2d");
var imgData;
var data;
var img = new Image();
img.src = sourceImage, img.crossOrigin = "Anonymous", img.onload = function() {
    ctx.drawImage(img,0,0);
    imgData=ctx.getImageData(0,0,imagePreview.width,imagePreview.height);
    data=imgData.data;
};

var filtroGrises = function(){
  for (var i = 0; i < data.length; i += 4){
    var r = data[i];
    var g = data[i + 1];
    var b = data[i + 2];
    data[i]     = (r+g+b)/3;
    data[i + 1] = (r+g+b)/3;
    data[i + 2] = (r+g+b)/3;
  }
  ctx.putImageData(imgData, 0, 0);
}

var filtroInvertir = function(){
  for (var i = 0; i < data.length; i += 4){
    var r = data[i];
    var g = data[i + 1];
    var b = data[i + 2];
    data[i] = r*(-1) + 255;
    data[i + 1] = g*(-1) + 255;
    data[i + 2] = b*(-1) + 255;
  }
  ctx.putImageData(imgData, 0, 0);
}

var filtroSepia = function(){
  for (var i = 0; i < data.length; i += 4){
    var r = data[i];
    var g = data[i + 1];
    var b = data[i + 2];
    data[i] = r*0.393 + g*0.769 + b*0.189;
    data[i + 1] = r*0.349 + g*0.686 + b*0.168;
    data[i + 2] = r*0.272 + g*0.534 + b*0.131;
  }
  ctx.putImageData(imgData, 0, 0);
}
