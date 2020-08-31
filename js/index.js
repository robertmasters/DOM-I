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
logo.setAttribute('src', siteContent["nav"]["img-src"])


//making a new array out of the a tags and adding all the corresponding content
const aTags = document.querySelectorAll('a')
aTags[0].textContent = siteContent['nav']['nav-item-1']
aTags[1].textContent = siteContent['nav']['nav-item-2']
aTags[2].textContent = siteContent['nav']['nav-item-3']
aTags[3].textContent = siteContent['nav']['nav-item-4']
aTags[4].textContent = siteContent['nav']['nav-item-5']
aTags[5].textContent = siteContent['nav']['nav-item-6']

const ctaH1 = document.querySelector('h1')
ctaH1.textContent = siteContent['cta']['h1']

const ctaButton =document.querySelector('button')
ctaButton.textContent= siteContent['cta']['button']

const ctaImg = document.getElementById('cta-img')
ctaImg.setAttribute('src', siteContent['cta']['img-src'])

//making all the h4 tags into an array
const h4Tags = document.querySelectorAll('h4')

//attributing content to the h4 tags, content is obtained from the site content object.
h4Tags[0].textContent = siteContent['main-content']['features-h4']
h4Tags[1].textContent = siteContent['main-content']['about-h4']
h4Tags[2].textContent = siteContent['main-content']['services-h4']
h4Tags[3].textContent = siteContent['main-content']['product-h4']
h4Tags[4].textContent = siteContent['main-content']['vision-h4']

//making all the p tags into an array
const pTags = document.querySelectorAll('p')

pTags[0].textContent = siteContent['main-content']['features-content']
pTags[1].textContent = siteContent['main-content']['about-content']
pTags[2].textContent = siteContent['main-content']['services-content']
pTags[3].textContent = siteContent['main-content']['product-content']
pTags[4].textContent = siteContent['main-content']['vision-content']

//middle image
const middleImg = document.getElementById('middle-img')
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

//contact info
const contactH4 = document.querySelector('.contact h4')
contactH4.textContent = siteContent['contact']['contact-h4']

//making an array of all the ptags then giving each one its content.
const contactPTags = document.querySelectorAll('.contact p')
contactPTags[0].textContent = siteContent['contact']['address']
contactPTags[1].textContent = siteContent['contact']['email']
contactPTags[2].textContent = siteContent['contact']['phone']

const footer = document.querySelector('footer p')
footer.textContent = siteContent['footer']['copyright']


//using appendChild
const navParent = document.querySelector('nav')
const newAppend = document.createElement('a')
newAppend.textContent = 'smile :)'
navParent.appendChild(newAppend)


//using prependChild
const newPrepend = document.createElement('a')
newPrepend.textContent = ':( frown'
navParent.prepend(newPrepend)


//change color of nav to green
aTags.forEach(a =>{
  a.style.color = 'green'
})