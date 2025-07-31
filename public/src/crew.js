let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let title = document.querySelector(".title-one");
let title_one = document.querySelector(".title-crew");
let title_two = document.querySelector(".title-two-crew");
let par_crew = document.querySelector(".par-crew");
let img_crew = document.querySelector(".img-crew");
let links_crew = document.querySelector(".links-crew");
window.onload = function () {
  title.style.transform = "translatex(0)";
  title_one.style.transform = "translatex(0)";
  title_two.style.transform = "translatex(0)";
  par_crew.style.transform = "translatex(0)";
  links_crew.style.transform = "translatex(0)";
  img_crew.style.transform = "translatex(0)";
};
const dataload = async () => {
  let url = "./db.json";

  const res = await fetch(url);
  const data = await res.json();

  one.addEventListener("click", (e) => {
    e.preventDefault();
    title_one.innerText = data.crew[0].name;
    title_two.innerText = data.crew[0].role;
    par_crew.innerText = data.crew[0].bio;
    img_crew.src =
      "../../project/space-tourism-website-main/starter-code/assets/crew/image-douglas-hurley.png";
  });
  two.addEventListener("click", (e) => {
    e.preventDefault();
    title_one.innerText = data.crew[1].name;
    title_two.innerText = data.crew[1].role;
    par_crew.innerText = data.crew[1].bio;
    img_crew.src =data.crew[1].images.png;

  });   

  three.addEventListener("click", (e) => {
    e.preventDefault();
    title_one.innerText = data.crew[2].name;
    title_two.innerText = data.crew[2].role;
    par_crew.innerText = data.crew[2].bio;
    img_crew.src =data.crew[2].images.png;
  });

  four.addEventListener("click", (e) => {
    e.preventDefault();
    title_one.innerText = data.crew[3].name;
    title_two.innerText = data.crew[3].role;
    par_crew.innerText = data.crew[3].bio;
    img_crew.src =data.crew[3].images.png;

  });
};
window.addEventListener("DOMContentLoaded", () => dataload());

const circles = document.querySelectorAll(".circle");

circles.forEach((circle) => {
  circle.addEventListener("click", function () {
    circles.forEach((c) => c.classList.remove("active-crew"));

    this.classList.add("active-crew");
  });
});
