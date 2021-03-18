
function myFunction(){
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += "-responsive"; 
  } else {
    x.className = "navbar";
  }
}

const navbar = document.querySelector(".navbar");
window.onscroll = () => {
    if (window.scrollY > 20) {
        navbar.classList.add("scrolling");
    } else {
        navbar.classList.remove("scrolling");
    }
}
