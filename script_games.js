const rowcol = document.getElementById("container");
const colres = Math.round(window.innerWidth / 50);
const rowres = Math.round(window.innerHeight / 50);

rowcol.style.setProperty("--rescol", colres);

const numsq = colres * rowres;

for (let i = 0; i < numsq; i++) {
  let box = document.createElement('span');
  document.getElementById('container').appendChild(box);
}

const cursor = document.getElementById('cursor');
window.onmousemove = function(e) {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
}