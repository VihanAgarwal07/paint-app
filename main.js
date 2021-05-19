var mouseEvent="empty";
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var lastx,lasty;
c.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseEvent="mousedown";
}
c.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}
c.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    var currentX=e.clientX-c.offsetLeft;
    var currentY=e.clientY-c.offsetTop;
    if(mouseEvent=="mousedown"){
ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=4;
ctx.moveTo(lastx,lasty);
ctx.lineTo(currentX,currentY);
ctx.stroke();


    }
    lastx=currentX;
lasty=currentY;

}
c.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
function clear_Canvas(){
    console.log("sghdjhfd");
    ctx.clearRect(0,0,c.width,c.height);
}