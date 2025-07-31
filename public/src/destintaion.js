const marsLink = document.getElementById('mars');
const title = document.querySelector('.title-right');
const description = document.querySelector('.par-right');
const avgDistance = document.querySelector('.Avg .two-left');
const estTravelTime = document.querySelector('.Est .two-rigth');
const links_two = document.querySelector('.links-two');
const Avg = document.querySelector('.Avg');
const img = document.images[1];
let moonlink = document.getElementById("moon");
let europa = document.getElementById("europa");
let titan = document.getElementById("titan");
let title_right = document.querySelector(".title-right");

const dataload = async () => {
  let url = "./db.json";

  const res = await fetch(url);
  const data = await res.json();
  moonlink.addEventListener('click', (event) => {
    event.preventDefault();  
  
    title.innerText = data.destinations[0].name;;
    description.innerText = data.destinations[0].description;
    avgDistance.innerText = data.destinations[0].distance;
    estTravelTime.innerText = data.destinations[0].travel;
     img.src  =data.destinations[0].images.png;
  }); 
marsLink.addEventListener('click', (event) => {
  event.preventDefault();  

  title.innerText = data.destinations[1].name;;
  description.innerText = data.destinations[1].description;
  avgDistance.innerText = data.destinations[1].distance;
  estTravelTime.innerText = data.destinations[1].travel;
   img.src  =data.destinations[1].images.png;
});  europa.addEventListener('click', (event) => {
  event.preventDefault();  

  title.innerText = data.destinations[2].name;;
  description.innerText = data.destinations[2].description;
  avgDistance.innerText = data.destinations[2].distance;
  estTravelTime.innerText = data.destinations[2].travel;
  img.src  =data.destinations[2].images.png;
});  titan.addEventListener('click', (event) => {
  event.preventDefault();  

  title.innerText = data.destinations[3].name;;
  description.innerText = data.destinations[3].description;
  avgDistance.innerText = data.destinations[3].distance;
  estTravelTime.innerText = data.destinations[3].travel;
  img.src  =data.destinations[3].images.png;
});








};
window.addEventListener("DOMContentLoaded", () => dataload());

const links = document.querySelectorAll('.link');

links.forEach(link => {
  link.addEventListener('click', function() {
    links.forEach(c => c.classList.remove('active-link'));

    this.classList.add('active-link');
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
let left =document.querySelector(".le");
window.onload = function() {

left.style.transform ="translatex(0)";
links_two.style.transform ="translatex(0)";
title.style.transform ="translatex(0)";
description.style.transform ="translatex(0)";
Avg.style.transform ="translatex(0)";

}