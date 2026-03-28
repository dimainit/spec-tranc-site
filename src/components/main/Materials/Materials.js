const materials = [
  {
    image: "/Img/sand.png",
    title: "Песок",
  },
  {
    image: "/Img/stone.jpg",
    title: "Щебень",
  },
  {
    image: "/Img/asphalt.jpg",
    title: "Асфальтная крошка",
  },
  {
    image: "/Img/technology.png",
    title: "Аренда техники",
  },
];

const createMaterials = () => {
    return materials
      .map(
        (element) => `
        <div class="materials_item">
        <img class="materials_img" src="${element.image}" alt="Image Material">
        <div class="materials_overlay"></div>
        <p class="materials_text">${element.title}</p>
        </div>
    `,
      )
      .join("");
}

export const Materials = () => {
    return `
    <section class="materials">
    <h1 class="materials_title">Основные материалы</h1>
    <div class="materials_list">
    ${createMaterials()}
    </div>
    </section>
    `;
}