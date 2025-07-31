// Call the function on window resize
window.addEventListener('resize', checkScreenSize);

// Call the function initially to display current size
checkScreenSize();
let one = document.querySelector(".one-technology");
let two = document.querySelector(".two-technology");
let three = document.querySelector(".three-technology");

let title_two = document.querySelector(".t-two");
let par_crew = document.querySelector(".t-three");
let link = document.querySelector(".links-technology");
let content = document.querySelector(".content-technology");
let imge_tec = document.querySelector(".img-technology");

// const dataload = async () => {
//   let url = "./db.json";

//   const res = await fetch(url);
//   const data = await res.json();

//   one.addEventListener("click", (e) => {
//     e.preventDefault();
//     title_two.innerText = data.technology[0].name;
//     par_crew.innerText = data.technology[0].description;
//     imge_tec.src = data.technology[0].images.portrait;
//   });
//   two.addEventListener("click", (e) => {
//     e.preventDefault();
//     title_two.innerText = data.technology[1].name;
//     par_crew.innerText = data.technology[1].description;
//     imge_tec.src = data.technology[1].images.portrait;

//   });

//   three.addEventListener("click", (e) => {
//     e.preventDefault();
//     title_two.innerText = data.technology[2].name;
//     par_crew.innerText = data.technology[2].description;
//     imge_tec.src = data.technology[2].images.portrait;

//   });
// };
// window.addEventListener("DOMContentLoaded", () => dataload());
const circles = document.querySelectorAll(".circle");

circles.forEach((circle) => {
  circle.addEventListener("click", function () {
    circles.forEach((c) => c.classList.remove("active-technology"));

    this.classList.add("active-technology");
  });
});
window.onload = function () {
  content.style.transform = "translatex(0)";
  link.style.transform = "translatex(0)";
  imge_tec.style.transform = "translatex(0)";

};
// Function to check screen size
function checkScreenSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  if(width > 1300){
    
    const dataload = async () => {
      let url = "./db.json";
    
      const res = await fetch(url);
      const data = await res.json();
      imge_tec.src = data.technology[0].images.portrait;

      one.addEventListener("click", (e) => {
        e.preventDefault();
        title_two.innerText = data.technology[0].name;
        par_crew.innerText = data.technology[0].description;
        imge_tec.src = data.technology[0].images.portrait;
      });
      two.addEventListener("click", (e) => {
        e.preventDefault();
        title_two.innerText = data.technology[1].name;
        par_crew.innerText = data.technology[1].description;
        imge_tec.src = data.technology[1].images.portrait;
    
      });
    
      three.addEventListener("click", (e) => {
        e.preventDefault();
        title_two.innerText = data.technology[2].name;
        par_crew.innerText = data.technology[2].description;
        imge_tec.src = data.technology[2].images.portrait;
    
      });
    };
    window.addEventListener("DOMContentLoaded", () => dataload());
  }else {
    const dataload = async () => {
      let url = "./db.json";
    
      const res = await fetch(url);
      const data = await res.json();
      imge_tec.src = data.technology[0].images.landscape;

      one.addEventListener("click", (e) => {
        e.preventDefault();
        title_two.innerText = data.technology[0].name;
        par_crew.innerText = data.technology[0].description;
        imge_tec.src = data.technology[0].images.landscape;
      });
      two.addEventListener("click", (e) => {
        e.preventDefault();
        title_two.innerText = data.technology[1].name;
        par_crew.innerText = data.technology[1].description;
        imge_tec.src = data.technology[1].images.landscape;
    
      });
    
      three.addEventListener("click", (e) => {
        e.preventDefault();
        title_two.innerText = data.technology[2].name;
        par_crew.innerText = data.technology[2].description;
        imge_tec.src = data.technology[2].images.landscape;
    
      });
    };
    window.addEventListener("DOMContentLoaded", () => dataload());
  }
 
}

