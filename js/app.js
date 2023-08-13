'use strict';
const sendEmail = document.querySelector('#sendMail');
const message = document.querySelector('#message');
const details = document.querySelector('#name');
const sender = document.querySelector('#sender');
const container = document.querySelector('.container');
const navbarItems = document.querySelectorAll('.navbar ul li a');
const bars = document.querySelector('.bars');
const navbar = document.querySelector('.navbar');
const home = document.querySelector('#home')
const about = document.querySelector('#about')
const aboutSection = document.querySelector('.about')
const services = document.querySelector('#services')
const serviceSection = document.querySelector('.services')
const portfolio = document.querySelector('#portfolio')
const portfolioSection = document.querySelector('.portfolio')
const blog = document.querySelector('#blog')
const blogSection = document.querySelector('.blog')
const contact = document.querySelector('#contact')
const contactSection = document.querySelector('.contact')
const getintouch = document.querySelector('#getintouch')
//reveals the header after scrolling

// document.querySelector('body').addEventListener('click', (e) => {
//   console.log(e.target) 
// })
window.onscroll = function () {
  const docScrollTop = document.documentElement.scrollTop;

  if (window.innerWidth > 991) {
    if (docScrollTop > 100) {
      document.querySelector("header").classList.add("fixed");
    } else {
      document.querySelector("header").classList.remove("fixed");

    }
  }
}


bars.addEventListener('click', () => {
  navbar.classList.toggle('show');
});
// bars.addEventListener('click', () => {
//   bars.children(navbar.classList.remove('show'))
// })

//remove and add active class

navbarItems.forEach(item => {
  item.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default anchor behavior

    navbarItems.forEach(navItem => navItem.classList.remove('active'));
    this.classList.add('active');
  });
});


//smotth scrolling
getintouch.addEventListener('click', () => {
  contactSection.scrollIntoView({ behavior: 'smooth' })
})
about.addEventListener('click', () => {
  aboutSection.scrollIntoView({ behavior: 'smooth' })
})
portfolio.addEventListener('click', () => {
  portfolioSection.scrollIntoView({ behavior: 'smooth' })
})
blog.addEventListener('click', () => {
  blogSection.scrollIntoView({ behavior: 'smooth' })
})
contact.addEventListener('click', () => {
  contactSection.scrollIntoView({ behavior: 'smooth' })
})

services.addEventListener('click', function (e) {


  serviceSection.scrollIntoView({ behavior: 'smooth' })
})

//send mail

sendEmail.addEventListener('click', (e) => {

  const emailAddress = 'igamerryt@gmail.com';
  const subject = `${details.value} ${sender.value}`;
  const body = `${message.value}`;
  const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  // Open the user's default email client with the mailto URL
  window.open(mailtoUrl);



});


const portfolioItems = document.querySelectorAll('.item');

// Attach click event listener to each portfolio item
portfolioItems.forEach(item => {
  item.addEventListener('click', () => {
    const href = item.querySelector('img').getAttribute('href');
    window.location.href = href; // Redirect to the desired webpage
  });
});


// Code for revealing the header after scrolling

window.onscroll = function () {
  const docScrollTop = document.documentElement.scrollTop;

  if (window.innerWidth > 991) {
    if (docScrollTop > 100) {
      document.querySelector("header").classList.add("fixed");
    } else {
      document.querySelector("header").classList.remove("fixed");
    }
  }
};

// Code for displaying the upwards arrow when the home section is not intersecting the page
// Function to handle the intersection change
function handleIntersection(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Home section is intersecting, hide the arrow container
      arrowContainer.classList.remove('visible');
    } else {
      // Home section is not intersecting, show the arrow container
      arrowContainer.classList.add('visible');
    }
  });
}

// Create a new Intersection Observer
const observer = new IntersectionObserver(handleIntersection);

// Target the home section
const homeSection = document.querySelector('#home');

// Target the arrow container
const arrowContainer = document.querySelector('.arrow-container');

// Start observing the home section
observer.observe(homeSection);