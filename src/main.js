import { Hero } from "./components/Hero";
import { WhyUs } from "./components/main/WhyUs/index";
import { Materials } from "./components/main/Materials/index.js";
import { About } from "./components/main/About/index.js";
import "./style.css";
import { Questions, initForm } from "./components/main/Questions/index.js";
import { btnMapLink, Delivery } from "./components/main/Delivery/Delivery.js";


document.querySelector("#root").innerHTML = `
    ${Hero()}
    ${WhyUs()}
    ${Materials()}
    ${About()}
    ${Questions()}
    ${Delivery()}
    `;
btnMapLink()
initForm()

const btnHeader = document.querySelector(".btn_header")

btnHeader.addEventListener("click", (event) => {
    const target = document.querySelector("#questions")
    target.scrollIntoView({ behavior: "smooth" });
})

const btnHero = document.querySelector(".hero_btn");

btnHero.addEventListener("click", (event) => {
    const target = document.querySelector("#questions")
    target.scrollIntoView({ behavior: "smooth" });
})
