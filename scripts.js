let root = document.querySelector(":root");

let bgColor = getComputedStyle(root).getPropertyValue("--bgColor");
let navBgColor = getComputedStyle(root).getPropertyValue("--navBgColor");
let navSelectedBgColor = getComputedStyle(root).getPropertyValue("--navSelectedBgColor");
let carouselNavActive = getComputedStyle(root).getPropertyValue("--carouselNavActive");
let carouselNav = getComputedStyle(root).getPropertyValue("--carouselNav");

const howManyNavButtons = 2;
let drop = "drop";
let nav = "nav";
let activeNav = document.getElementById("test");
let activeNavDrop = 0;

function loaded()
{
  
}

function dropdown(x, y) 
{
  if(activeNav==x)
  {
    activeNav.classList.toggle("active-nav");
    document.getElementById("drop".concat(activeNavDrop)).classList.toggle("nav-hidden");
    document.getElementById("down-arrow".concat(activeNavDrop)).classList.toggle("down-arrow-rotated");
    activeNav = document.getElementById("test");
    activeNavDrop = 0;
  }
  else
  {
    document.getElementById("drop".concat(activeNavDrop)).classList.toggle("nav-hidden");
    document.getElementById("down-arrow".concat(activeNavDrop)).classList.toggle("down-arrow-rotated");
    activeNav.classList.toggle("active-nav");
    activeNavDrop = y;
    activeNav = x;
    document.getElementById("drop".concat(activeNavDrop)).classList.toggle("nav-hidden");
    activeNav.classList.toggle("active-nav");
    document.getElementById("down-arrow".concat(activeNavDrop)).classList.toggle("down-arrow-rotated");
  }
}

function hamburgerMenu(x) 
{
  
}

let flag = 0;

function reportWindowSize() {}
  
window.onresize = reportWindowSize;


let current = 0;
let previous = 0;
let numOfPics = 4;
let colors = ["#354", "#700", "#990", "#5AD"];
let texts = ["test1", "test2", "test3", "test4"];

function carouselDrop(x) 
{
  previous = current;
  document.getElementById("dot".concat(previous)).style.backgroundColor = carouselNav;
  current = (current + x + numOfPics) % numOfPics;
  document.getElementById("dot".concat(current)).style.backgroundColor = carouselNavActive;
  document.getElementById("drop-carousel").style.backgroundColor= colors[current];
  document.getElementById("carousel-text").innerHTML = texts[current];
  document.getElementById("carousel-text").innerHTML = texts[current];
}

function set_carousel(x)
{
  previous = current;
  document.getElementById("dot".concat(previous)).style.backgroundColor = carouselNav;
  current = x;
  document.getElementById("dot".concat(current)).style.backgroundColor = carouselNavActive;
  document.getElementById("drop-carousel").style.backgroundColor= colors[current];
  document.getElementById("carousel-text").innerHTML = texts[current];
}