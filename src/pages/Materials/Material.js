import { Questions } from "../../components/main/Questions/Questions";


export const Materials = () => {
  return /* html */ `
  <section id="MaterialsPage" class="MaterialsPage"> 
  <div class="material_page_container">
  <div class="material_page_block">
  <img class="imgMaterialPage" src="/Img/sandPage.png" alt="Sand"/>
  <div class="material_page_content">
  <h1 class="material_page_title">
  Песок строительный</h1>
  <p class="material_page_subtitle">
  Карьерный и речной песок всех фракций. Идеально подходит для бетонных работ, кладки кирпича и засыпки фундамента.
  </p>
  <button class="material_page_btn"><span class="material_page_title_btn">Подробнее</span></button>
  </div>
  </div>




  <div class="material_page_block">
  <img class="imgMaterialPage" src="/Img/stone.jpg" alt="Stone"/>
  <div class="material_page_content">
  <h1 class="material_page_title">
  Щебень</h1>
  <p class="material_page_subtitle">
  Высокопрочный щебень различных фракций для заливки фундамента, дорожных работ и производства бетона. Устойчив к морозам и нагрузкам.
  </p>
  <button class="material_page_btn"><span class="material_page_title_btn">Подробнее</span></button>
  </div>
  </div>





  <div class="material_page_block">
  <img class="imgMaterialPage" src="/Img/asphalt.jpg" alt="Asphalt"/>
  <div class="material_page_content">
  <h1 class="material_page_title">
  Асфальтная крошка</h1>
  <p class="material_page_subtitle">
  Вторичный материал из переработанного асфальта. Идеально подходит для отсыпки дачных дорог, гаражных кооперативов и стоянок. Не боится влаги.
  </p>
  <button class="material_page_btn"><span class="material_page_title_btn">Подробнее</span></button>
  </div>
  </div>


  <div class="material_page_block">
  <img class="imgMaterialPage" src="/Img/black_earth.jpg" alt="Earth"/>
  <div class="material_page_content">
  <h1 class="material_page_title">
  Чернозём</h1>
  <p class="material_page_subtitle">
  Богатая гумусом почва для ландшафтного дизайна, садов и огородов. Очищен от сорняков и камней. Обеспечивает идеальный рост растений.
  </p>
  <button class="material_page_btn"><span class="material_page_title_btn">Подробнее</span></button>
  </div>
  </div>
  </div>
  ${Questions()}
  </section>
  `;
};
