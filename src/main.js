import { Hero } from "./components/Hero";
import "./style.css";

document.querySelector("#root").innerHTML = `
    ${Hero()}
`;
