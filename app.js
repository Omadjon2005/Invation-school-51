let sun = document.querySelector('.sun');
let moon = document.querySelector('.moon');

moon.addEventListener('click',()=>{
    moon.classList.add('active');
    sun.classList.remove('active','sun');
    container.classList.add('active');
})
sun.addEventListener('click',()=>{
    sun.classList.add('active','sun');
    moon.classList.remove('active');
})


// const person = [
//     {
//         id:1,
//         smText:'You only have to know one thing',
//         bigText:'Best Online Learning System',
//         img:'img/img.svg'
//     },
//     {
//         id:2,
//         smText:'All the courses you need',
//         bigText:'Welcome to our School',
//         img:'img/img1.png'
//     },
//     {
//         id:3,
//         smText:'Find Oneline Courses That Suits You',
//         bigText:'Learn From The Expert',
//         img:'img/img2.png'
//     },
//     {
//         id:4,
//         smText:'Top Experts',
//         bigText:'We have an online school',
//         img:'img/img3.png'
//     }
// ];


let smallText = document.querySelector('.smallText');
let bigText = document.querySelector('.bigText');
let headerContent_images = document.querySelector('.headerContent_images');
let headerContent_btn = document.querySelector('.headerContent_btn');
let best = document.querySelector('.best');
let personIndex = 0;


window.addEventListener('DOMContentLoaded',()=>{
    setTimeout(AboutPerson(),4000);
})

function AboutPerson(){
    let item = person[personIndex];
    headerContent_images.src = item.img;
    bigText.textContent = item.bigText;
    smallText.textContent = item.smText;
}

// carousel
var swiper = new Swiper(".mySwiper", {
    watchSlidesProgress: true,
    slidesPerView: 3,
  });


let box = document.querySelector('.box');
box.foEach(popup => popup.addEventListener('click',()=>{
    popup.classList.toggle('active');
}))




