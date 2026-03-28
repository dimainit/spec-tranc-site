import { Hero } from "./components/Hero";
import { WhyUs } from "./components/main/WhyUs/index";
import { Materials } from "./components/main/Materials/index.js";
import { About } from "./components/main/About/index.js";
import "./style.css";
import { Questions } from "./components/main/Questions/index.js";

document.querySelector("#root").innerHTML = `
    ${Hero()}
    ${WhyUs()}
    ${Materials()}
    ${About()}
    ${Questions()}
`;
