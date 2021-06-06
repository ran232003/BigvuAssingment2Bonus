// console.log("hello");

var c = document.getElementById("myCanvas");
var text_title ="";
c.style.visibility = "hidden";
var ctx = c.getContext("2d");
var image = document.createElement("img");
image.id="myImage";
// image.onload = function(){
//     console.log("hello");
//     console.log(text_title);
//     ctx.drawImage(this, 0, 0, c.width, c.height);

// }
$('select').on('change', function() {
var src = this.value;
if(src === "null")
{
    return;
}
// var image = document.createElement("img");
// image.id="myImage";
image.src = src;
ctx.clearRect(0, 0, c.width, c.height);
//image.id="myImage";
//image.width = "10";
//image.height = "10";
//console.log(src);
//var c = document.getElementById("myCanvas");
c.style.visibility = "visible";
//var ctx = c.getContext("2d");
//ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(image, 0, 0, c.width, c.height);
image.onload = function(){
    console.log("hello");
    console.log(text_title);
    ctx.drawImage(this, 0, 0, c.width, c.height);

}

  });

document.getElementById('inputCenter2').addEventListener('keyup', function() {
    //console.log(this.value);
    //delete canvas
    console.log(image.src);
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.drawImage(image, 0, 0, c.width, c.height);
    ctx.fillStyle = 'rgba(30, 144, 255, 0.0)';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = "white";
    // ctx.textBaseline = 'middle';
    // ctx.textAlign = "center"
    ctx.font = "50px 'Inter'";
    x = document.getElementById("inputCenter2").value
    console.log(x);
    text_title = this.value;
    ctx.textAlign = 'center';
    ctx.fillText(text_title, 280, 200);
    console.log(text_title);
    //ctx.fillText(text_title, 50, 50);
  });

