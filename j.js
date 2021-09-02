function appear(){
    var appear = document.querySelector(".about-float");
    var position = appear.getBoundingClientRect().top; // top y height of element with class 
    var screenPos = window.innerHeight / 1.3; // height of device / 1.3
    // console.log(position)
    if(position < screenPos){
        appear.classList.add("about-cont-appear");
    }
}

window.addEventListener("scroll", appear);

//showcase work
const btnNext = document.querySelector("#next")
const btnPrev = document.querySelector("#prev")
const image = document.querySelector(".container .link img")
const links = document.querySelectorAll("#work-link")
let id = 0


// show hide navbar
const navbarToggle = document.querySelector(".nav-list")
const nav = document.querySelector(".navbar")
const navLinks = document.querySelectorAll(".navbar li a")


navbarToggle.addEventListener("click", hideNav)

function hideNav(){
    console.log("yes")
    nav.classList.toggle("toggle")
    navLinks.forEach((item)=>{
        item.addEventListener("click", ()=>{
            nav.classList.remove("toggle")
        })
    })
}

// show data based on id
function showData(item){
    const selector = data[item]
    image.src = selector.img
    links[0].href = selector.git
    links[1].href = selector.review
}











