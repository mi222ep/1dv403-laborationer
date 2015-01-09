var mousex;
var mousey;
var move = false;
var ldivx = 200;
var ldivy = 200;

window.onload = init;

function init() {
var d = document.getElementById('dragme');
d.onmousedown = mousedown;
d.onmouseup = mouseup;
d.onmousemove = mousemove;
d.style.left = ldivx +'px';
d.style.top = ldivy +'px';
d.style.display = 'block';
}

function mousedown(e) {
document.getElementById('dragme').style.color = 'red';
move = true;
mousex = e.clientX; 
mousey = e.clientY;
}

function mouseup(e) {
document.getElementById('dragme').style.color = 'black';
move = false;
}

function mousemove(e) {
if(move){
ldivx = ldivx + e.clientX - mousex;
ldivy = ldivy + e.clientY - mousey;
mousex = e.clientX;
mousey = e.clientY;
var d = document.getElementById('dragme');
d.style.left = ldivx +'px';
d.style.top = ldivy +'px';
}
}