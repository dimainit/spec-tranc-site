import "./Footer.scss";

const footerLinks = [
    { name: "Аренда техники", link: "/rent"},
    { name: "Материалы", link: "/materials"}
]

const createFooterLinks = (currentPath) => {
    return footerLinks
        .map((element) => {
            const activeClass = element.link === currentPath ? "active" : "";
      return `<a href="${element.link}" class="nav_link ${activeClass}">${element.name}</a>`;
    })
    .join("");
};


export const Footer = (currentPath) => {
  return /* html */ `
    <section id="footer" class="footer">
    <div class="footer_container">
    <div class="footer_left">
    <img class="logo_footer" src="/Icon/logoFooter.svg" alt="Спец-Транс"/>
    <p class="confidentiality">Политика конфиденциальности © Спец-Транс, 2026</p>
    </div>
    <div class="footer_center">
    <nav class="footer_nav_links">
    <div class="links_list">
    ${createFooterLinks(currentPath)}
    </div>
    </nav>
    </div>
    <div class="footer_right">
    <div class="icon_footer">
    <img id="facebook" src="/Icon/facebook.svg" alt="Facebook" />
    <img id="instagram" src="/Icon/instagram.svg" alt="Instagram" />
    <img id="youtube" src="/Icon/youtube.svg" alt="Youtube" />
    </div>
    <button class="num_btn_footer">+420 606 110 110</button>
    </div>
    </div>
    </section>
    `;
};

export const iconSocialNetworks = () => {
    const iconFacebook = document.querySelector("#facebook")
    iconFacebook.addEventListener("click", (event) => {
        window.open("https://www.facebook.com/?locale=ru_RU", "_blank");
    })
    const iconInstagram = document.querySelector("#instagram")
    iconInstagram.addEventListener("click", (event) => {
        window.open("https://www.instagram.com/", "_blank");
    })
    const iconYouTube= document.querySelector("#youtube")
    iconYouTube.addEventListener("click", (event) => {
        window.open("https://www.youtube.com/", "_blank");
    })
}

