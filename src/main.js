import "./style.css";
import { Header, Footer, Main } from "./components";
import { InitRouter } from "./router";
import { initForm } from "./components/main/Questions";
import { btnMapLink } from "./components/main/Delivery/Delivery";
import { iconSocialNetworks } from "./components/Footer/Footer";


const initAllLogics = () => {

    btnMapLink();
    initForm();
    iconSocialNetworks();


    const btnHeader = document.querySelector(".btn_header");

    btnHeader.addEventListener("click", (event) => {
      const target = document.querySelector("#questions");
      target.scrollIntoView({ behavior: "smooth" });
    });


    const btnHero = document.querySelector(".hero_btn");

    btnHero.addEventListener("click", (event) => {
      const target = document.querySelector("#questions");
      target.scrollIntoView({ behavior: "smooth" });
    });

    
}

const renderApp = (Page, currentPath) => {
    document.querySelector("#root").innerHTML=`
    ${Header(currentPath)}
    ${Main(Page)}
    ${Footer()}
    `

    initAllLogics();
}
InitRouter(renderApp);




