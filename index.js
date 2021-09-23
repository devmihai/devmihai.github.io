"use strict"

const navToggle = document.querySelector(".nav-toggle");
const navLink = document.querySelectorAll(".nav__link");
const icon = document.getElementById("moonicon")


navToggle.addEventListener("click",() =>{
    document.body.classList.toggle("nav-open");
});

navLink.forEach(link => {
    link.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
    })
});

if(localStorage.getItem("theme") === null) {
localStorage.setItem("theme","light");
}


let localData = localStorage.getItem("theme");
if(localData === "light"){
    icon.src = "dark-mode.png";
    document.body.classList.remove("dark-theme");
} else if(localData === "dark") {
    icon.src = "sun.png";
    document.body.classList.add("dark-theme");
}

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
if(document.body.classList.contains("dark-theme")){
    icon.src ="sun.png";
    localStorage.setItem("theme","dark");
}else{
    icon.src ="dark-mode.png";
    localStorage.setItem("theme","light");
}
}
/* GSAP */
let timeline = new TimelineMax();
timeline.from(".intro",1, {scale:0.5, delay:0.5, ease: Bounce.easeOut});
timeline.from("p", 1, {opacity:0, scale:0});
timeline.from("h1" , 1.5, {opacity: 0, scale:2, ease: Back.easeOut.config(7.5)});
timeline.from(".nav-toggle", 4, {y:-50,scale:1.5, ease: "elastic.out(1, 0.1).config(7.5)"});
//timeline.from(".nav-toggle", 4, {y:-100, ease: "elastic.out(1, 0.3)"});

