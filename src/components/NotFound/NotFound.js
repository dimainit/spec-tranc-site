import { t } from "../../lang";
import "./NotFound.scss";
import tire from "../../../public/Img/tire.png"


export const NotFound = () => {
  return /* html */ `
    <div class="notfound_container">
    <div class="notfound_error">
    <span class="notfound_four">4</span>
    <span class="notfound_zero">
    <img src=${tire} alt="Wheel" class="notfound_wheel">
    
    </span>
    <span class="notfound_four">4</span>
    </div>
    <h1 class="notfound_title">${t("errors.title")}</h1>
    <p class="notfound_subtitle">${t("errors.subtitle")}</p>
    <a href="/spec-tranc-site/" class="notfound_btn">${t("errors.button")}</a>
    </div>
    `;
};
