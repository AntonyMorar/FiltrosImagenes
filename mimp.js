//var img = document.getElementById("bg");
var imagePreview = document.getElementById("imagePreview");
var ctx = imagePreview.getContext("2d");

var sourceImageArray = ['https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a_400x400.jpeg',
'https://d31j74p4lpxrfp.cloudfront.net/sites/default/files/cr_files/2611_sabes_interpretar_las_senales_que_tu_perro_te_da_2.jpg',
'https://3d4igz27oxtl2iwox73y9smh-wpengine.netdna-ssl.com/wp-content/uploads/2017/07/stock-photo-dog-with-soft-chew-toy.png',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgwcfdRucvmivF-Z-XiPdH5csFUOI_Uy66NUbLNuXn1fSKvpF7',
'https://i.imgur.com/zqSKewU.jpg',
'http://i.imgur.com/CvWoXZe.jpg'];
var randomNumber = Math.floor(Math.random()*sourceImageArray.length);

var sourceImage = sourceImageArray[randomNumber]

var imgData;
var data;
var matrixData;

var img = new Image();
img.src = sourceImage, img.crossOrigin = "Anonymous", img.onload = function() {
    ctx.drawImage(img,0,0);
    imgData=ctx.getImageData(0,0,imagePreview.width,imagePreview.height);
    data=imgData.data;
};


var filtroGrises = function(ctx, w, h){
  for (var i = 0; i < data.length; i += 4){
    var r = data[i];
    var g = data[i + 1];
    var b = data[i + 2];
    console.log("DATA  " + i + " is: ======> " + r + ", " + g + ", " + b)
    data[i]     = r*(1/3) + g*(1/3) + g*(1/3);
    data[i + 1] = r*(1/3) + g*(1/3) + g*(1/3);
    data[i + 2] = r*(1/3) + g*(1/3) + g*(1/3);
    console.log("DATA Final  " + i + "is: ------> " + data[i] + ", " + data[i + 1] + ", " +data[i + 2])
  }
  ctx.putImageData(imgData, 0, 0);
}
