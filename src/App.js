import { useEffect } from "react";
import "./app.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Testimonails from "./components/Testimonials";
import Work from "./components/Work";
function App() {
  useEffect(() => {
    let navBar = document.querySelector("nav");
    let logo = document.querySelector("#logo");
    let links = document.querySelectorAll("a");

    window.onscroll = function () {
      if (window.scrollY > 22) {
        navBar.classList.add("scrolled");
        logo.style.color = "rgb(234, 234, 234)";
        for (let i = 0; i < links.length; i++) {
          links[i].style.color = "rgb(234, 234, 234)";
        }
        // links.style.color = "rgb(234, 234, 234)";
      } else {
        navBar.classList.remove("scrolled");
        logo.style.color = "black";
        for (let i = 0; i < links.length; i++) {
          links[i].style.color = "black";
        }

      }
    };
  }, []);
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Testimonails />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
