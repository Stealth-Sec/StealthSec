

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




// Fetch the current date and time
const currentDate = new Date();
const dateTime = currentDate.toLocaleString();

// Fetch the user's IPv4 address and country
// This example uses a free API to get the IP and country information
// Replace 'https://api.ipify.org/?format=json' with your preferred API
async function getIPAndCountry() {
  try {
    const response = await fetch('https://api.ipify.org/?format=json');
    const data = await response.json();
    const countryResponse = await fetch(`https://ipapi.co/${data.ip}/json/`);
    const countryData = await countryResponse.json();
    return { ip: data.ip, country: countryData.country_name };
  } catch (error) {
    console.error('Error fetching IP and country:', error);
    return { ip: 'Error', country: 'Error' };
  }
}

// Send a message to the Discord webhook
async function sendDiscordMessage(webhookUrl, message) {
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: message }),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    console.log('Message sent successfully');
  } catch (error) {
    console.error('Error sending message:', error);
  }
}

// Fetch Time, country, and send the message
(async () => {
  const { ip, country } = await getIPAndCountry();
  const message = `Date/Time: ${dateTime}\nCountry: ${country}\n`;
  await sendDiscordMessage('https://discord.com/api/webhooks/1234539414982754416/UdzCNypUVUVHv2pV5YOk0efMsajaylJsKy3AcyhMt0-0MnlhldBlz60Nxf1pu7hOueSy', message);
})();









// Function to generate a random string of a given length
function generateRandomString(length) {
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  var result = '';
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// Function to retrieve the value of a cookie by name
function getCookieValue(name) {
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookies = decodedCookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.indexOf(name + '=') === 0) {
      return cookie.substring(name.length + 1);
    }
  }
  return '';
}

// Check if the cookie exists
var cookieName = 'StealtSec';
var cookieValue = getCookieValue(cookieName);

// If the cookie exists, print its value
if (cookieValue !== '') {
  console.log('Cookie exists: ' + cookieValue);
} else {
  // Generate a random string of length 30
  var randomValue = generateRandomString(30);

  // Set expiration date to 1 year from now
  var date = new Date();
  date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000 * 1000);
  var expires = 'expires=' + date.toUTCString();

  // Set the cookie and specify the max-age attribute
  document.cookie = cookieName + '=' + encodeURIComponent(randomValue) + '; ' + expires + '; max-age=' + (365 * 24 * 60 * 60);

  console.log('New cookie created: ' + randomValue);
}












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



//navigation bar current page
var header = document.getElementById("navigation");
var btns = header.getElementsByClassName("url");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//Python code
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

//to top button
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", checkHeight);

function checkHeight() {
  if(window.scrollY > 200) {
    toTop.style.display = "flex";
  } else {
    toTop.style.display = "none";
    var currentnv = document.getElementsByClassName("active");
    currentnv[0].className = currentnv[0].className.replace(" active", "");
    var homenv = document.getElementById("hmnav");
    homenv.className += " active";
  }
}

//word effect
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

document.querySelector(".ranlets").onmouseover = eventlet => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    eventlet.target.innerText = eventlet.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return eventlet.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= eventlet.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 2;
  }, 30);
}

//Context menu

const contextMenu = document.getElementById("context-menu");
const scope = document.querySelector("body");

const normalizePozition = (mouseX, mouseY) => {
  let {
    left: scopeOffsetX,
    top: scopeOffsetY,
  } = scope.getBoundingClientRect();
  
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

//contact me section

var lastMessageTime = 0; // Variable to store the timestamp of the last sent message
var cooldownDuration = 5 * 60 * 1000; // 5 minutes cooldown duration in milliseconds

function sendMessage() {
  var currentTime = Date.now();

  // Check if the cooldown duration has passed since the last sent message
  if (currentTime - lastMessageTime < cooldownDuration) {
    var remainingTime = cooldownDuration - (currentTime - lastMessageTime);
    var remainingMinutes = Math.ceil(remainingTime / 1000 / 60);
    toastNotify("Please wait for " + remainingMinutes + " minutes before sending another message.", "Notification");
    return;
  }

  var webhookURL = "https://discord.com/api/webhooks/1234090733368250460/3hdTnOKcrKaNw3_RJW6xd5VIr0K3mZLWoldAMOjANoGXQjCRIyTl5foYb1MSeJ1SQbUf";

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
  .then(function(response) {
    if (response.ok) {
      lastMessageTime = currentTime; // Update the last sent message timestamp
      toastNotify("Successfully sent your message!", "Thanks!");
    } else {
      toastNotify("Error!", "Sorry!");
    }
  })
  .catch(function(error) {
    toastNotify("Error!", "Sorry");
  });
}

//contact input animations
let cmlabel = document.querySelectorAll('.contlabel');

for(var ctmi=0; ctmi<cmlabel.length; ctmi++) {
  cmlabel[ctmi].innerHTML = cmlabel[ctmi].innerText.split('').map((cmlet, cml)=>`<span class="inputword" style="transition-delay: ${cml*30}ms;filter: hue-rotate(${cml*25}deg)";>${cmlet}</span>`).join('');
}

//notification

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
