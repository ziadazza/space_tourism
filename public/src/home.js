let hover_explore =document.querySelector(".ty");
let left =document.querySelector(".le");
window.onload = function() {

left.style.transform ="translatex(0)";
hover_explore.style.transform ="translatex(0)";

}


let explore =document.querySelector(".ri");
let moon =document.getElementById("mars");
let mars =document.getElementById("moon");
let europa =document.getElementById("europa");
let titan =document.getElementById("titan");
let title_right =document.querySelector(".title-right");

explore.addEventListener("mouseenter", function(){
 
    hover_explore.style.backgroundColor ="rgba(255, 255, 255, 0.247)";
        
    
    });explore.addEventListener("mouseout", function(){
 
        hover_explore.style.backgroundColor ="transparent";
            
        
        });
let v;
const dataload = async() => {
    let url = './db.json';

    const res = await fetch(url);
    const data = await res.json();

 






}
window.addEventListener('DOMContentLoaded', () => dataload());




const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
  circle.addEventListener('click', function() {
    circles.forEach(c => c.classList.remove('active-crew'));

    this.classList.add('active-crew');
  });
});




const header_link = document.querySelectorAll('.header-link');
console.log(header_link);
header_link.forEach(link => {
  link.addEventListener('click', function() {
    header_link.forEach(c => c.classList.remove('active-header-link'));

    this.classList.add('active-header-link');
  });
});

explore.addEventListener('click', function() {
    window.location ="destination.html";
});