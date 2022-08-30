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
var nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    nav.classList.add("navbarColor", "shadow");
  } else {
    nav.classList.remove("navbarColor", "shadow");
  }
});
