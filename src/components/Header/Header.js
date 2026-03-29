const links = [
  { name: "Услуги", link: "#" },
  { name: "Материалы", link: "#" },
  { name: "Доставка и оплата", link: "#" },
  { name: "О компании", link: "#" },
  { name: "Контакты", link: "#" },
];

const createLinks = () => {
  return links
    .map((element) => `<a href ="${element.link}">${element.name}</a>`)
    .join("");
};

export const Header = () => {
  return `
    <header class="header">
     <div class="header_container">
     <img class="logo_header" src="/Icon/headerLogo.svg" alt="Спец-Транс">
     <nav class="nav_links">
     ${createLinks()}
     </nav>
     <button class="btn_header">
        <span class="btn_header_title">Заказать звонок</span>
     </button>
     </div>
     </header>
    `;
};
