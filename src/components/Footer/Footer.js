import "./Footer.scss";

export const Footer = () => {
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
    <a href="#" class="links_item">Аренда техники</a>
    <a href="#" class="links_item">Материалы</a>
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

