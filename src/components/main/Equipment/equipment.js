import { t } from "../../../lang";
import equipment from "../../../../public/Img/equipment.jpg";

export const Equipment = () => {
  return /* html */ `
    <section id="equipment" class="equipment">
    <div class="containerEquipment">
    <div class="equipment_container">
    <img class="equipment_img" src=${equipment} alt="Equipment" data-aos="fade-right" 
    data-aos-duration="800" 
    data-aos-delay="100" />
    <div class="equipment_content"
    data-aos="fade-left" 
    data-aos-duration="800"
    data-aos-delay="100">
    <h1 class="equipment_title" >${t("main.equipment.title")}</h1>
    <p class="equipment_subtitle">
    ${t("main.equipment.subtitle")}</p>
    <div class="equipment_buttons">
    <button id="eq_btn_to_questions" class="equipment_btn"><span class="equipment_btn_title">${t("main.equipment.button1")}</span></button>
    <button id="eq_btn_to_page" class="equipment_btn"><span class="equipment_btn_title">${t("main.equipment.button2")}</span></button>
    </div>

    </div>
    </div>
    </section>
    `;
};
