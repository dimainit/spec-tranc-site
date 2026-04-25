import { Questions  } from "../../components/main/Questions/Questions";
import { t } from "../../lang";
import special from "../../../public/Img/rent_img1.png";
import truck from "../../../public/Img/rent_img2.png";



export const Rent = () => {
  return /* html */ `
    <section id="rent" class="rent">
    <div class="rent_container">
    <div class="rent_block">
    <img class="img_rent" src=${special} alt="Rental of special equipment"
    data-aos="fade-right" 
    data-aos-duration="800" 
    data-aos-delay="200" />
    <div class="rent_right_text"
      data-aos="fade-left" data-aos-duration="800"
      data-aos-delay="200">
    <h1 class="rent_title">
    ${t("pages.rent.special.title")}
    </h1>
    <p class="rent_subtitle">${t("pages.rent.special.subtitle")}</p>
    
    <ul class="rent_price_list">
    <li class="rent_price_item">
    <div class="rent_tech">
      <span class="rent_tech_title">${t("pages.rent.special.item1.name")}</span>
      <span class="rent_tech_subtitle">${t("pages.rent.special.item1.text")}</span>
    </div>
    <span class="rent_line"></span>
  
    <div class="rent_price">
      <span class="price_item">850 Kč</span>
      <span class="price_time">${t("pages.rent.special.slashHour")}</span>
      <span class="price_divider">|</span>
      <span class="price_item">6 000 Kč</span>
      <span class="price_time">${t("pages.rent.special.slashDay")}</span>
    </div>
  </li>

     <li class="rent_price_item">
    <div class="rent_tech">
      <span class="rent_tech_title">${t("pages.rent.special.item2.name")}</span>
      <span class="rent_tech_subtitle">${t("pages.rent.special.item2.text")}</span>
    </div>
    <span class="rent_line"></span>
    <div class="rent_price">
      <span class="price_item">1 100 Kč</span>
      <span class="price_time">${t("pages.rent.special.slashHour")}</span>
      <span class="price_divider">|</span>
      <span class="price_item">8 000 Kč</span>
      <span class="price_time">${t("pages.rent.special.slashDay")}</span>
    </div>
  </li>
    <li class="rent_price_item">
    <div class="rent_tech">
      <span class="rent_tech_title">${t("pages.rent.special.item3.name")}</span>
      <span class="rent_tech_subtitle">${t("pages.rent.special.item3.text")}</span>
    </div>
    <span class="rent_line"></span>
    <div class="rent_price">
      <span class="price_item">1 500 Kč</span>
      <span class="price_time">${t("pages.rent.special.slashHour")}</span>
      <span class="price_divider">|</span>
      <span class="price_item">11 000 Kč</span>
      <span class="price_time">${t("pages.rent.special.slashDay")}</span>
    </div>
  </li>
</ul>
    </div>
    </div>



    <div class="rent_block">
      <img class="img_rent" src=${truck} alt="Dump truck rental" 
           data-aos="fade-right" 
           data-aos-duration="800" 
           data-aos-delay="200"/>

      <div class="rent_right_text"
           data-aos="fade-left" 
           data-aos-duration="800" 
           data-aos-delay="200"> <h1 class="rent_title">${t("pages.rent.trucks.title")}</h1>
        <p class="rent_subtitle">
          ${t("pages.rent.trucks.subtitle")}
        </p>

    <ul class="rent_price_list">
    <li class="rent_price_item">
    <div class="rent_tech">
      <span class="rent_tech_title">${t("pages.rent.trucks.item1.name")}</span>
      <span class="rent_tech_subtitle">${t("pages.rent.trucks.item1.text")}</span>
    </div>
    <span class="rent_line"></span>
  
    <div class="rent_price">
      <span class="price_item">850 Kč</span>
      <span class="price_time">${t("pages.rent.trucks.slashHour")}</span>
      <span class="price_divider">|</span>
      <span class="price_item">6 500 Kč</span>
      <span class="price_time">${t("pages.rent.trucks.slashDay")}</span>
    </div>
  </li>

    <li class="rent_price_item">
    <div class="rent_tech">
      <span class="rent_tech_title">${t("pages.rent.trucks.item2.name")}</span>
      <span class="rent_tech_subtitle">${t("pages.rent.trucks.item2.text")}</span>
    </div>
    <span class="rent_line"></span>
  
    <div class="rent_price">
      <span class="price_item">950 Kč</span>
      <span class="price_time">${t("pages.rent.trucks.slashHour")}</span>
      <span class="price_divider">|</span>
      <span class="price_item">7 500 Kč</span>
      <span class="price_time">${t("pages.rent.trucks.slashDay")}</span>
    </div>
  </li>

    <li class="rent_price_item">
    <div class="rent_tech">
      <span class="rent_tech_title">${t("pages.rent.trucks.item3.name")}</span>
      <span class="rent_tech_subtitle">${t("pages.rent.trucks.item3.text")}</span>
    </div>
    <span class="rent_line"></span>
  
    <div class="rent_price">
      <span class="price_item">1 150 Kč</span>
      <span class="price_time">${t("pages.rent.trucks.slashHour")}</span>
      <span class="price_divider">|</span>
      <span class="price_item">9 500 Kč</span>
      <span class="price_time">${t("pages.rent.trucks.slashDay")}</span>
    </div>
  </li>

    </div>
    </div>
    </div>
    ${Questions()}
    </section>
  
  `;
};
