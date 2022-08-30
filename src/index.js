import ReactDOM from "react-dom";
import "./scss/index.scss";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import SobreMim from "./components/sobreMim";
import Contato from "./components/contato";

ReactDOM.render(
  <>
    <Navbar />
    <Hero />
    <SobreMim />
    <Contato />
  </>,
  document.getElementById("root")
);
const nav = document.querySelector("nav");
const navHeight = nav.offsetTop;

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

window.addEventListener("scroll", function () {
  if (window.pageYOffset > navHeight) {
    nav.classList.add("navbarColor", "shadow");
  } else {
    nav.classList.remove("navbarColor", "shadow");
  }
});
