import "./Footer.scss";
import { t } from "../../lang";
import facebook from "../../../public/Icon/facebook.svg"
import instagram from "../../../public/Icon/instagram.svg"
import youtube from "../../../public/Icon/youtube.svg";

const footerLinks = [
  { name: "footer.rent", link: "/spec-tranc-site/rent" },
  { name: "footer.materials", link: "/spec-tranc-site/materials" },
];

const createFooterLinks = (currentPath) => {
  return footerLinks
    .map((element) => {
      const activeClass = element.link === currentPath ? "active" : "";
      return `<a href="${element.link}" class="nav_link ${activeClass}">${t(element.name)}</a>`;
    })
    .join("");
};

export const Footer = (currentPath) => {
  return /* html */ `
    <section id="footer" class="footer">
    <div class="footer_container">
    <div class="footer_left">
    <a href="/spec-tranc-site/">
    <img class="logo_footer" src="/spec-tranc-site/Icon/logo_en_w.svg" alt="Спец-Транс"/>
    </a>
    </div>
    <div class="footer_confidentiality">
    <p class="confidentiality">${t("footer.policy")}</p>
    </div>
    <div class="footer_center">
    <nav class="footer_nav_links">
    <div class="links_list">
    ${createFooterLinks(currentPath)}
    </div>
    </nav>
    </div>
    <div class="icon_footer">
    <img id="facebook" src=${facebook} alt="Facebook" />
    <img id="instagram" src=${instagram} alt="Instagram" />
    <img id="youtube" src=${youtube} alt="Youtube" />
    </div>
    <div class="footer_btn">
    <button class="num_btn_footer"> <span class="num_title_footer">+420 606 110 110</span></button>
    </div>
    </div>
    </section>
    `;
};

export const iconSocialNetworks = () => {
  const iconFacebook = document.querySelector("#facebook");
  iconFacebook.addEventListener("click", (event) => {
    window.open("https://www.facebook.com/?locale=ru_RU", "_blank");
  });
  const iconInstagram = document.querySelector("#instagram");
  iconInstagram.addEventListener("click", (event) => {
    window.open("https://www.instagram.com/", "_blank");
  });
  const iconYouTube = document.querySelector("#youtube");
  iconYouTube.addEventListener("click", (event) => {
    window.open("https://www.youtube.com/", "_blank");
  });
};
