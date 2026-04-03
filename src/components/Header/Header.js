const headerLinks = [
  { name: "Главная", link: "/" },
  { name: "Аренда техники", link: "/rent" },
  { name: "Материалы", link: "/materials" },
  { name: "О компании", link: "/about" },
  { name: "Контакты", link: "/contacts" },
];

const createHeaderLinks = (currentPath) => {
  return headerLinks
    .map((element) => {
      const activeClass = element.link === currentPath ? "active" : "";
      return `<a href="${element.link}" class="nav_link ${activeClass}">${element.name}</a>`;
    })
    .join("");
};

export const Header = (currentPath) => {

  return /*html*/ `
    <header class="header">
     <div class="header_container">
     <img class="logo_header" src="/Icon/logo.svg" alt="Спец-Транс">
     <nav class="nav_links">
     ${createHeaderLinks(currentPath)}
     </nav>
     <button class="btn_header">
        <span class="btn_header_title">Заказать звонок</span>
     </button>
     <button class="burger" popovertarget="burger_menu" type="button">
     <span class="burger_icon">
     <img src="/Icon/burgerMenu.svg" alt="Burger Menu"></span></button>
     </div>
     <div popover id="burger_menu" class="burger_menu">
     <div class="burger_window">
     <button class="burger_close" popovertarget="burger_menu" popovertargetaction="hide" type="button"><img class="burger_Close" src="/Icon/burgerclose.svg" alt="Burger Close" /></button></div>
     <nav class="burger_nav">
      ${createHeaderLinks(currentPath)}
    </nav>
    <button class="burger_btn">Заказать звонок</button>
    <p class="confidentiality_burger">Политика конфиденциальности © спец-транс, 2026</p>
     </header>
    `;
};
