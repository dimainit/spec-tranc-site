import { t } from "../../lang";
import { BlockLanguages } from "./BlockLanguages/BlockLanguages";
import burger from "../../../public/Icon/burgerMenu.svg";
import burgerClose from "../../../public/Icon/burgerclose.svg";

const headerLinks = [
  { name: "header.nav.home", link: "./" },
  { name: "header.nav.rent", link: "./rent" },
  { name: "header.nav.materials", link: "./materials" },
  { name: "header.nav.about", link: "./about" },
  { name: "header.nav.contacts", link: "./contacts" },
];

const createHeaderLinks = (currentPath) => {
  return headerLinks
    .map((element) => {
      const activeClass = element.link === currentPath ? "active" : "";
      return `<a href="${element.link}" class="nav_link ${activeClass}">${t(element.name)}</a>`;
    })
    .join("");
};

export const Header = (currentPath) => {

  return /*html*/ `
    <header class="header">
     <div class="header_container">
     <a href="/spec-tranc-site/">
     <img class="logo_header" src="/spec-tranc-site/Icon/logo_en.svg" alt="Спец-Транс">
     </a>
     <nav class="nav_links">
     ${createHeaderLinks(currentPath)}
     </nav>
     <div class="header_rigth_block">
     <button class="btn_header">
        <span class="btn_header_title">${t("header.button")}</span>
     </button>
     ${BlockLanguages()}
     </div>

     <button class="burger" popovertarget="burger_menu" type="button">
     <span class="burger_icon">
     <img src=${burger} alt="Burger Menu"></span></button>
     </div>

     <div popover id="burger_menu" class="burger_menu">
     <div class="burger_window">
     <div class="burger_header">
     <img class="burger_logo" src="${t("header.logo")}" alt="Burger Logo" />
     <button class="burger_close" popovertarget="burger_menu" popovertargetaction="hide">
     <img class="burger_close_img" src=${burgerClose} alt="Burger Close" />
     </button>
     </div>
     
     <nav class="burger_nav">
     ${createHeaderLinks(currentPath)}
     <button class="burger_btn"> <span class="burger_btn_title">${t("header.mobileMenu.button")}</span></button>
     ${BlockLanguages()}
     </nav>
     
     
    <div class="burger_footer">
    <p class="confidentiality_burger">${t("header.mobileMenu.policy")}</p>
    </div>
    </div>
    </div>
    </header>
    `;
};
