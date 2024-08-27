const howManyNavButtons = 2;
let drop = "drop";
let nav = "nav";
let activeNav = document.getElementById("test");

function loaded()
{
  
}

function dropdown(x) 
{
  let y = x.getAttribute("id");
  let z = y[3];
  // alert(z);
  
  if(activeNav==x)
  {
    activeNav.style.backgroundColor = "#555";
    activeNav = document.getElementById("test");
  }
  else
  {
    activeNav.style.backgroundColor = "#555";
    activeNav = x;
    activeNav.style.backgroundColor = "#444";
  }
  
  for (let i = 1; i <= howManyNavButtons; i++) 
  {
    let elem = document.getElementById(drop.concat(i));
    
    if (i == z && elem.classList.contains("nav-hidden")) 
    {
      elem.classList.remove("nav-hidden");
      elem.classList.add("nav-shown");
    } 
    else if (i == z && elem.classList.contains("nav-shown")) 
    {
      elem.classList.remove("nav-shown");
      elem.classList.add("nav-hidden");
    }
    else 
    {
      elem.classList.remove("nav-shown");
      elem.classList.add("nav-hidden");
    }
  }
}

function hamburgerMenu(x) 
{
  
}

let flag = 0;

function reportWindowSize() {
  document.getElementById("logo-img").innerHTML = window.innerWidth;
  
  if(window.innerWidth < 1100 && !flag)
  {
    activeNav.style.backgroundColor = "#555";
    activeNav = document.getElementById("test");
    
    for (let i = 1; i <= howManyNavButtons; i++) 
    {
      let elem = document.getElementById(drop.concat(i));
      elem.classList.remove("nav-shown");
      elem.classList.add("nav-hidden");
    }
    flag = 1;
  }
  else if(window.innerWidth > 1100)
  {
    flag = 0;
  }
}

window.onresize = reportWindowSize;


let current = 0;
let numOfPics = 4;
let colors = ["#354", "#700", "#990", "#5AD"];

function carousel(x) 
{
  current = (current + x + numOfPics) % numOfPics;
  document.getElementById("drop-carousel").style.backgroundColor= colors[current];
}