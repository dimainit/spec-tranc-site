import { t } from "../../../lang";
import sand from "../../../../public/Img/sand.png";
import stone from "../../../../public/Img/stone.webp";
import asphalt from "../../../../public/Img/asphalt.webp";
import black_earth from "../../../../public/Img/black_earth.webp";

const materials = [
  {
    image: sand,
    title: t("main.materials.card1"),
    link: "/materials",
  },
  {
    image: stone,
    title: t("main.materials.card2"),
    link: "/materials",
  },
  {
    image: asphalt,
    title: t("main.materials.card3"),
    link: "/materials",
  },
  {
    image: black_earth,
    title: t("main.materials.card4"),
    link: "/materials",
  },
];

const createMaterials = () => {
  return materials
    .map(
      (element, index) => `
      <div
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="${index * 200}"
      >
        <a href="/materials" class="materials_item">
        <img class="materials_img" src="${element.image}" alt="Image Material">
        <div class="materials_overlay"></div>
        <p class="materials_text">${element.title}</p>
        </a>
        </div>
    `,
    )
    .join("");
};

export const Materials = () => {
  return /* html */ `
    <section id="materials" class="materials">
    <div class="containerMaterials">
    <h1 class="materials_title" data-aos="fade" data-aos-duration="1000">${t("main.materials.title")}</h1>
    <div class="materials_list">
    ${createMaterials()}
    </div>
    </div>
    </section>
    `;
};
