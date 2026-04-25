import "./style.css";
import page from "page";
import { Header, Footer, Main } from "./components";
import { InitRouter } from "./router";
import { initForm } from "./components/main/Questions";
import { btnMapLink } from "./components/main/Delivery/Delivery";
import { iconSocialNetworks } from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";


AOS.init({
  once: true,
  easing: "ease-out",
  offset: 50,
});


const initAllLogics = () => {

    btnMapLink();
    initForm();
    iconSocialNetworks();


    const btnHeader = document.querySelector(".btn_header");

    btnHeader.addEventListener("click", () => {
      const target = document.querySelector("#questions");
      target.scrollIntoView({ behavior: "smooth" });
    });


    const btnHero = document.querySelector(".hero_btn");

    if (btnHero) {
      btnHero.addEventListener("click", () => {
        const target = document.querySelector("#questions");
        target.scrollIntoView({ behavior: "smooth" });
      });
    }

    const btnEquipment = document.querySelector("#eq_btn_to_questions");

    if (btnEquipment) {
      btnEquipment.addEventListener("click", () => {
        const target = document.querySelector("#questions");
        target.scrollIntoView({ behavior: "smooth" });
      });
    }

    const btnBurger = document.querySelector(".burger_btn")

    if (btnBurger) {
      btnBurger.addEventListener("click", () => {
        const target = document.querySelector("#questions");
        target.scrollIntoView({ behavior: "smooth" });
      });
    }


    const btnRent = document.querySelector("#eq_btn_to_page")

    if(btnRent) {
      btnRent.addEventListener("click", () => {
        page.show("/rent")

      })
    }

    
}

const renderApp = (Page, currentPath) => {
    document.querySelector("#root").innerHTML=`
    ${Header(currentPath)}
    ${Main(Page)}
    ${Footer(currentPath)}
    `
     window.scrollTo({ top: 0, behavior: "instant" });

    initAllLogics();
}

InitRouter(renderApp);


