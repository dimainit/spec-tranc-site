import { Questions } from "../../components/main/Questions/Questions";
import { t } from "../../lang";
import sand from "../../../public/Img/sand.png";
import stone from "../../../public/Img/stone.webp";
import asphalt from "../../../public/Img/asphalt.webp";
import black_earth from "../../../public/Img/black_earth.webp";

export const Materials = () => {
  return /* html */ `
  <section id="MaterialsPage" class="MaterialsPage"> 
  <div class="material_page_container">
  <div class="material_page_block"
  data-aos="fade" 
  data-aos-duration="800"
  data-aos-delay="100">
  <img class="imgMaterialPage" src=${sand}  alt="Sand"/>
  <div class="material_page_content">
  <h1 class="material_page_title">
  ${t("pages.materials.block1.title")}</h1>
  <p class="material_page_subtitle">
  ${t("pages.materials.block1.subtitle")}
  </p>
  <a href="materials/sand" class="material_page_btn"><span class="material_page_title_btn">${t("pages.materials.button")}</span></a>
  </div>
  </div>




  <div class="material_page_block"
  data-aos="fade" 
  data-aos-duration="800"
  data-aos-delay="200">
  <img class="imgMaterialPage" src=${stone} alt="Stone"/>
  <div class="material_page_content">
  <h1 class="material_page_title">
 ${t("pages.materials.block2.title")}</h1>
  <p class="material_page_subtitle">
  ${t("pages.materials.block2.subtitle")}
  </p>
  <a href="materials/sand" class="material_page_btn"><span class="material_page_title_btn">${t("pages.materials.button")}</span></a>
  </div>
  </div>


  <div class="material_page_block"
  data-aos="fade" 
  data-aos-duration="800"
  data-aos-delay="300">
  <img class="imgMaterialPage" src=${asphalt} alt="Asphalt"/>
  <div class="material_page_content">
  <h1 class="material_page_title">
  ${t("pages.materials.block3.title")}</h1>
  <p class="material_page_subtitle">
  ${t("pages.materials.block3.subtitle")}
  </p>
  <a href="materials/sand" class="material_page_btn"><span class="material_page_title_btn">${t("pages.materials.button")}</span></a>
  </div>
  </div>


  <div class="material_page_block"
  data-aos="fade" 
  data-aos-duration="800"
  data-aos-delay="400">
  <img class="imgMaterialPage" src=${black_earth} alt="Earth"/>
  <div class="material_page_content">
  <h1 class="material_page_title">
  ${t("pages.materials.block4.title")}</h1>
  <p class="material_page_subtitle">
  ${t("pages.materials.block4.subtitle")}
  </p>
  <a href="materials/sand" class="material_page_btn"><span class="material_page_title_btn">${t("pages.materials.button")}</span></a>
  </div>
  </div>
  </div>
  ${Questions()}
  </section>
  `;
};
