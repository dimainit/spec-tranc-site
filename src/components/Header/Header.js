const links = [
  { name: "Главная", link: "/" },
  { name: "Аренда техники", link: "/rent" },
  { name: "Материалы", link: "/materials" },
  { name: "О компании", link: "/about" },
  { name: "Контакты", link: "/contacts" },
];

const createLinks = (currentPath) => {
  return links
    .map((element) => {
      const activeClass = element.link === currentPath ? "active" : "";
      return `<a href="${element.link}" class="nav_link ${activeClass}">${element.name}</a>`;
    })
    .join("");
};

export const Header = (currentPath) => {
  return `
    <header class="header">
     <div class="header_container">
     <img class="logo_header" src="/Icon/logo.svg" alt="Спец-Транс">
     <nav class="nav_links">
     ${createLinks(currentPath)}
     </nav>
     <button class="btn_header">
        <span class="btn_header_title">Заказать звонок</span>
     </button>
     </div>
     </header>
    `;
};
