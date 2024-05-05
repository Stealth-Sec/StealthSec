console.log("Welcome to EinzzCookie's portfolio !")
title = "Website of EinzzCookie !           ";
position = 0;

function scrolltitle() {
  document.title = title.substring(position, title.length) + title.substring(0, position);
  position++;
  if (position > title.length) position = 0;
  titleScroll = window.setTimeout(scrolltitle, 270);
}
scrolltitle();
const currentDate = new Date();
const dateTime = currentDate.toLocaleString('de-DE', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
});





function saveCookie(name, value) {
  // Check if the cookie already exists
  if (getCookie(name)) {
    // Cookie already exists, do nothing
    return;
  }

  // Create the cookie
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + '=')) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}

function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!"§$%&/()=?_:-.;,';
  let randomString = '';
  for (let i = 0; i < length - 1; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }
  randomString += Math.floor(Math.random() * 10);
  return randomString;
}

async function mixNumbersInString(randomString) {
  try {
    const response = await fetch('https://api.ipify.org/?format=json');
    const data = await response.json();
    const Numbers = data.ip.split('.');
    const interval = 70;
    let mixedString = '';
    let Index = 0;
    let charCount = 0;
    for (let i = 0; i < randomString.length; i++) {
      mixedString += randomString[i];
      charCount++;
      if (charCount === interval && Index < Numbers.length) {
        mixedString += Numbers[Index];
        Index++;
        charCount = 0;
      }
    }
    while (Index < Numbers.length) {
      mixedString += Numbers[Index];
      Index++;
    }
    return mixedString;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

function saveVisitsCookie() {
  // Check if the Visits cookie already exists
  let visits = getCookie('Visits');

  if (visits) {
    // Visits cookie already exists, increment its value by 1
    visits = parseInt(visits) + 1;
  } else {
    // Visits cookie does not exist, create a new cookie with a value of 1
    visits = 1;
  }

  // Save the Visits cookie with the updated value
  document.cookie = 'Visits=' + encodeURIComponent(visits) + '; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
}

async function runCode() {
  // Check if the cookie already exists
  let mixedString = getCookie('StealthSec');
  let userInfo;

  if (!mixedString) {
    const randomString = generateRandomString(1000);

    try {
      mixedString = await mixNumbersInString(randomString);
      userInfo = await getUserCountry(mixedString);

      // Save the cookie if it doesn't already exist
      saveCookie('StealthSec', mixedString);
    } catch (error) {
      console.error('Error mixing numbers in string:', error);
    }
  } else {
    // If the cookie already exists, get the user's country
    userInfo = await getUserCountry(mixedString);
  }

  // Save the Visits cookie
  saveVisitsCookie();

  // Send the existing cookie to the webhook
  sendVisitor(userInfo.country, mixedString);
}


runCode();

async function getUserCountry(mixedString) {
  const requestUrl = 'https://ipapi.co/json/';

  try {
    const response = await fetch(requestUrl);
    const data = await response.json();
    const countryName = data.country_name;
    return {
      country: countryName,
      mixedString: mixedString
    };
  } catch (error) {
    throw error;
  }
}





function sendVisitor(country, mixedString) {
  var currentTime = Date.now();
  var dateTime = new Date(currentTime).toLocaleString();
  var webhookURL = "https://discord.com/api/webhooks/1236279668282363924/K7Vm8hi1kVv2bDw5Ca2KImbpgUSPqTM-aesvFoOU8tv_3iOM9TGV-AlSqaiFWeEMqvmZ";
  var data = {
    content:
      "***VISITOR DETECTED***" + "\n" + "\n" +
      "**Time:** *" + dateTime + "*" + "\n" + "\n" +
      "**Country:** *" + country + "*" + "\n" + "\n" +
      "**Visits:** *" + getVisits() + "*" + "\n" + "\n" +
      "**Cookie:** *" + mixedString + "*" + "\n" + "\n"
  };
  fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(function (response) {
      if (response.ok) {
        lastMessageTime = currentTime;
        console.log("-");
      } else {
        console.log("-");
      }
    })
    .catch(function (error) {
      console.log("-");
    });
}




const rowcol = document.getElementById("container");
const colres = Math.round(window.innerWidth / 50);
const rowres = Math.round(window.innerHeight / 50);
rowcol.style.setProperty("--rescol", colres);
const numsq = colres * rowres;
for (var i = 0; i < numsq; i++) {
  let box = document.createElement('span');
  document.getElementById('container').appendChild(box);
}
let cursor = document.getElementById('cursor');
window.onmousemove = function (e) {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
}
var header = document.getElementById("navigation");
var btns = header.getElementsByClassName("url");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
const codename = document.getElementById("rotXY");
document.addEventListener("mousemove", (e) => {
  rotateElement(e, codename);
});
function rotateElement(event, element) {
  const x = event.clientX;
  const y = event.clientY;
  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;
  const offsetX = ((x - middleX) / middleX) * 50;
  const offsetY = ((y - middleY) / middleY) * 50;
  element.style.setProperty("--rotX", -1 * offsetY + "deg");
  element.style.setProperty("--rotY", offsetX + "deg");
}
const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", checkHeight);
function checkHeight() {
  if (window.scrollY > 200) {
    toTop.style.display = "flex";
  } else {
    toTop.style.display = "none";
    var currentnv = document.getElementsByClassName("active");
    currentnv[0].className = currentnv[0].className.replace(" active", "");
    var homenv = document.getElementById("hmnav");
    homenv.className += " active";
  }
}
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let interval = null;
document.querySelector(".ranlets").onmouseover = eventlet => {
  let iteration = 0;
  clearInterval(interval);
  interval = setInterval(() => {
    eventlet.target.innerText = eventlet.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return eventlet.target.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    if (iteration >= eventlet.target.dataset.value.length) {
      clearInterval(interval);
    }
    iteration += 1 / 2;
  }, 30);
}
const contextMenu = document.getElementById("context-menu");
const scope = document.querySelector("body");
const normalizePozition = (mouseX, mouseY) => {
  let {
    left: scopeOffsetX,
    top: scopeOffsetY, } = scope.getBoundingClientRect();
  scopeOffsetX = scopeOffsetX < 0 ? 0 : scopeOffsetX;
  scopeOffsetY = scopeOffsetY < 0 ? 0 : scopeOffsetY;
  const scopeX = mouseX - scopeOffsetX;
  const scopeY = mouseY - scopeOffsetY;
  const outOfBoundsOnX =
    scopeX + contextMenu.clientWidth > scope.clientWidth;
  const outOfBoundsOnY =
    scopeY + contextMenu.clientHeight > scope.clientHeight;
  let normalizedX = mouseX;
  let normalizedY = mouseY;
  if (outOfBoundsOnX) {
    normalizedX =
      scopeOffsetX + scope.clientWidth - contextMenu.clientWidth;
  }
  if (outOfBoundsOnY) {
    normalizedY =
      scopeOffsetY + scope.clientHeight - contextMenu.clientHeight;
  }
  return { normalizedX, normalizedY };
};
const donemsg = document.querySelector(".donect")
scope.addEventListener("contextmenu", (ctxm) => {
  ctxm.preventDefault();
  donemsg.style.display = "none";
  const { clientX: mouseX, clientY: mouseY } = ctxm;
  const { normalizedX, normalizedY } = normalizePozition(mouseX, mouseY);
  contextMenu.classList.remove("visible");
  contextMenu.style.top = `${normalizedY}px`;
  contextMenu.style.left = `${normalizedX}px`;
  setTimeout(() => {
    contextMenu.classList.add("visible");
  });
});
scope.addEventListener("click", (ct) => {
  if (ct.target.offsetParent != contextMenu) {
    contextMenu.classList.remove("visible");
  }
});
window.addEventListener("scroll", (ct) => {
  if (ct.target.offsetParent != contextMenu) {
    contextMenu.classList.remove("visible");
  }
});
const copylink = document.querySelector('#urlcopy')
copylink.addEventListener("click", () => {
  navigator.clipboard.writeText(window.location.href);
  donemsg.style.display = "inline";
  const copytime = setTimeout(displaycopy, 1500)
  function displaycopy() {
    donemsg.style.display = "none";
  }
});
var lastMessageTime = 0;
var cooldownDuration = 5 * 60 * 1000;
function sendMessage() {
  var currentTime = Date.now();
  if (currentTime - lastMessageTime < cooldownDuration) {
    var remainingTime = cooldownDuration - (currentTime - lastMessageTime);
    var remainingMinutes = Math.ceil(remainingTime / 1000 / 60);
    toastNotify("Please wait for " + remainingMinutes + " minutes before sending another message.", "Notification");
    return;
  }
  var webhookURL = "https://discord.com/api/webhooks/1236278822584975360/OQtnNiULuc3OpR5_j-ivzKtty7xMvwSI5BEBRMuoopvnjXEf_CJumi5Rn1Qf3L03038D";
  var data = {
    content:
      "**Name:** " + document.querySelector("#name").value + "\n" +
      "**Mail:** " + document.querySelector("#email").value + "\n" +
      "**Subject:** " + document.querySelector("#subject").value + "\n" +
      "**Message:** " + document.querySelector("#message").value
  };
  fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(function (response) {
      if (response.ok) {
        lastMessageTime = currentTime;
        toastNotify("Successfully sent your message!", "Thanks!");
      } else {
        toastNotify("Error!", "Sorry!");
      }
    })
    .catch(function (error) {
      toastNotify("Error!", "Sorry");
    });
}
let cmlabel = document.querySelectorAll('.contlabel');
for (var ctmi = 0; ctmi < cmlabel.length; ctmi++) {
  cmlabel[ctmi].innerHTML = cmlabel[ctmi].innerText.split('').map((cmlet, cml) => `<span class="inputword" style="transition-delay: ${cml * 30}ms;filter: hue-rotate(${cml * 25}deg)";>${cmlet}</span>`).join('');
}
const toast = document.querySelector(".toastnt");
const ntclose = document.querySelector(".ntclose");
const ntprog = document.querySelector(".ntprog");
var alttil = document.getElementById("alttil");
var altmsg = document.getElementById("altmsg");
var alticon = document.querySelector(".ntcheck");
const ntindi = document.querySelector(".toastnt")
function toastNotify(alt, alm, alttype, altclr) {
  alttil.innerHTML = alt;
  altmsg.innerHTML = alm;
  ntindi.style.setProperty("--ntclrind", altclr)
  alticon.classList.add(alttype);
  alticon.style.color = altclr;
  toast.classList.add("ntact");
  ntprog.classList.add("ntact");
  setTimeout(() => {
    alticon.classList.remove(alttype)
    toast.classList.remove("ntact");
  }, 5000);
  setTimeout(() => {
    ntprog.classList.remove("ntact");
  }, 5300)
}
ntclose.addEventListener("click", () => {
  alticon.classList.remove(alttype)
  toast.classList.remove("ntact");
  setTimeout(() => {
    ntprog.classList.remove("ntact");
  }, 300)
});