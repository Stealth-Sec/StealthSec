

console.log("Welcome to EinzzCookie's portfolio !")

title = "Website of EinzzCookie !           ";
position = 0;
function scrolltitle() {
    document.title = title.substring(position, title.length) + title.substring(0, position); 
    position++;
    if (position > title.length) position = 0;
    titleScroll = window.setTimeout(scrolltitle,270);
}
scrolltitle();



//Dividing squares
const rowcol = document.getElementById("container");

const colres = Math.round(window.innerWidth / 50);
const rowres = Math.round(window.innerHeight / 50);

rowcol.style.setProperty("--rescol", colres);

const numsq = colres * rowres ;

for(var i = 0; i< numsq; i++){
  let box = document.createElement('span');
  document.getElementById('container').appendChild(box);
}


let cursor = document.getElementById('cursor');
window.onmousemove = function(e) {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
}
