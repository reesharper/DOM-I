const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


//hero image
let hero = document.getElementById("cta-img");
hero.setAttribute('src', siteContent["cta"]["img-src"]);


//main body image
let bodyImg = document.getElementById("middle-img");
bodyImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


//title
const title = document.querySelector('h1');
title.innerHTML = "dom <br />";
title.innerHTML += "is <br />";
title.innerHTML += "awesome";


//button
const button = document.querySelector("button");
button.textContent = siteContent.cta.button;


//footer
const foot = document.querySelector("footer");
foot.textContent = siteContent.footer.copyright;


//nav
const newLink = document.createElement('a');
newLink.textContent = "Blog";
newLink.href = '#';

const newLink2 = document.createElement('a');
newLink2.textContent = "Team";
newLink2.href = '#';

document.querySelector('nav').appendChild(newLink)
document.querySelector('nav').appendChild(newLink2)

const links = document.querySelectorAll('nav a');

for (let i = 0; i < links.length; i++) {
  links[i].textContent = siteContent.nav["nav-item-1"]
  links[i].style.color = 'green'
}

// const links = document.querySelector("a");
// links.textContent = siteContent.nav["nav-item-1"];



// Top content
const info = document.querySelector(".contact h4");
info.textContent = siteContent.contact["contact-h4"]

const addy = document.querySelector(".contact p:nth-of-type(1)");
addy.textContent = siteContent.contact["address"]

const phone = document.querySelector(".contact p:nth-of-type(2)");
phone.textContent = siteContent.contact["phone"]

const mail = document.querySelector(".contact p:nth-of-type(3)");
mail.textContent = siteContent.contact["email"]


// Bottom content
const featTitle = document.querySelector(".top-content .text-content:nth-of-type(1) h4");
featTitle.textContent = siteContent["main-content"]["features-h4"]

const featContent = document.querySelector(".top-content .text-content:nth-of-type(1) p");
featContent.textContent = siteContent["main-content"]["features-content"];

const aboutTitle = document.querySelector(".top-content .text-content:nth-of-type(2) h4");
aboutTitle.textContent = siteContent["main-content"]["about-h4"];

const aboutContent = document.querySelector(".top-content .text-content:nth-of-type(2) p");
aboutContent.textContent = siteContent["main-content"]["about-content"];


const servicesTitle = document.querySelector(".bottom-content .text-content:nth-of-type(1) h4");
servicesTitle.textContent = siteContent["main-content"]["services-h4"];

const servicesContent = document.querySelector(".bottom-content .text-content:nth-of-type(1) p");
servicesContent.textContent = siteContent["main-content"]["services-content"];

const productTitle = document.querySelector(".bottom-content .text-content:nth-of-type(2) h4");
productTitle.textContent = siteContent["main-content"]["product-h4"];

const productContent = document.querySelector(".bottom-content .text-content:nth-of-type(2) p");
productContent.textContent = siteContent["main-content"]["product-content"];

const visionTitle = document.querySelector(".bottom-content .text-content:nth-of-type(3) h4");
visionTitle.textContent = siteContent["main-content"]["vision-h4"];

const visionContent = document.querySelector(".bottom-content .text-content:nth-of-type(3) p");
visionContent.textContent = siteContent["main-content"]["vision-content"];
