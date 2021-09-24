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
timeline.from(".intro", 2, {scale:0, ease: Bounce.easeOut});
timeline.from("h1" , 1.2, {opacity: 0, scale:2, ease: Back.easeOut.config(7.5)});
timeline.from("p", .5, {opacity:0, scale:0.5});
timeline.from(".nav-toggle", 2.2, {y:-100,scale: 1.5, ease: "elastic.out(0.4, 0.1)"});
//timeline.from(".nav-toggle", 4, {y:-100, ease: "elastic.out(1, 0.3)"});

gsap.registerPlugin(ScrollTrigger);
function init() {
    gsap.fromTo("#services",{opacity:0},{duration: 3, opacity:1, scrollTrigger: {
    trigger: "#services",
    start:"top 75%",
    end: "bottom bottom",
    scrub: 3,
    toggleActions:"reverse reverse play play"
    }}),
    gsap.fromTo("#about",{opacity:0},{duration:3 ,delay:1, opacity:1, scrollTrigger: {
        trigger: "#about",
        start:"top 75%",
        end: "center bottom",
        scrub: 3,
        toggleActions:"reverse play play play"
}}),
    gsap.fromTo("#work",{opacity:0},{duration:2 , opacity:1, scrollTrigger: {
    trigger: "#work",
    start:"top 75%",
    end: "center bottom",
    scrub: 3,
    toggleActions:"reverse play play play"
}})    
};

window.addEventListener("load", function(){
    init()
});
