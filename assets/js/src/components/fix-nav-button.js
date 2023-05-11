const left = document.getElementById('btnLeft');
const right = document.getElementById('btnRight');
const elmDiv = document.querySelector('.simplebar-content');

left.addEventListener("click", function() {
    elmDiv.scrollBy({
    top: 0,
    left: -200,
    behavior: 'smooth'
    });
});
  

right.addEventListener("click", function() {
    elmDiv.scrollBy({
        top: 0,
        left: 200,
        behavior: 'smooth'
    });
});
  

// document.addEventListener("DOMContentLoaded", () => {
//     const wid = window.innerWidth;
//     if(wid < 768 ) {
//         // right.classList.add('navButtonLeftActiv');
//     }
// });

// elmDiv.addEventListener("scroll", function(){
//     if(elmDiv.scrollLeft < 10){
//         // left.classList.remove('navButtonLeftActiv');
//     } else {
//         // left.classList.add('navButtonLeftActiv');
//     }
//     if(elmDiv.scrollLeft + elmDiv.clientWidth > elmDiv.scrollWidth - 10) {
//         // right.classList.remove('navButtonLeftActiv');
//     } else {
//         // right.classList.add('navButtonLeftActiv');
//     }
// });
