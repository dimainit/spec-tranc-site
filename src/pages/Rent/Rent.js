import { Questions  } from "../../components/main/Questions/Questions";

export const Rent = () => {
  return /* html */ `
    <section id="rent" class="rent">
    <div class="rent_container">
    <div class="rent_block">
    <img class="img_rent" src="/Img/rent_img1.png" alt="Rental of special equipment" />
    <div class="rent_right_text">
    <h1 class="rent_title">
    Аренда спецтехники
    </h1>
    <p class="rent_subtitle">
    Мы перелагаем доступные условия аренды различной техники посуточно и на длительный срок. 
    </p>
    
    <ul class="rent_price_list">
    <li class="rent_price_item">
    <div class="rent_tech">
      <span class="rent_tech_title">Мини-эскаватор</span>
      <span class="rent_tech_subtitle">(до 5т)</span>
    </div>
    <span class="rent_line"></span>
  
    <div class="rent_price">
      <span class="price_item">850 Kč</span>
      <span class="price_time">/час</span>
      <span class="price_divider">|</span>
      <span class="price_item">6 000 Kč</span>
      <span class="price_time">/день</span>
    </div>
  </li>

     <li class="rent_price_item">
    <div class="rent_tech">
      <span class="rent_tech_title">Экскаватор-погрузчик JCB</span>
      <span class="rent_tech_subtitle">(до 12т)</span>
    </div>
    <span class="rent_line"></span>
    <div class="rent_price">
      <span class="price_item">1 100 Kč</span>
      <span class="price_time">/час</span>
      <span class="price_divider">|</span>
      <span class="price_item">8 000 Kč</span>
      <span class="price_time">/день</span>
    </div>
  </li>
    <li class="rent_price_item">
    <div class="rent_tech">
      <span class="rent_tech_title">Гусеничный экскаватор</span>
      <span class="rent_tech_subtitle">(до 22т)</span>
    </div>
    <span class="rent_line"></span>
    <div class="rent_price">
      <span class="price_item">1 500 Kč</span>
      <span class="price_time">/час</span>
      <span class="price_divider">|</span>
      <span class="price_item">11 000 Kč</span>
      <span class="price_time">/день</span>
    </div>
  </li>
</ul>
    </div>
    </div>



    <div class="rent_block">
    <img class="img_rent" src="/Img/rent_img2.png" alt="Dump truck rental" />
    <div class="rent_right_text">
    <h1 class="rent_title">
    Аренда самосвалов
    </h1>
    <p class="rent_subtitle">
    Мы перелагаем доступные условия аренды различной техники посуточно и на длительный срок. 
    </p>

    <ul class="rent_price_list">
    <li class="rent_price_item">
    <div class="rent_tech">
      <span class="rent_tech_title">Самосвал</span>
      <span class="rent_tech_subtitle">(20м³)</span>
    </div>
    <span class="rent_line"></span>
  
    <div class="rent_price">
      <span class="price_item">850 Kč</span>
      <span class="price_time">/час</span>
      <span class="price_divider">|</span>
      <span class="price_item">6 500 Kč</span>
      <span class="price_time">/день</span>
    </div>
  </li>

    <li class="rent_price_item">
    <div class="rent_tech">
      <span class="rent_tech_title">Самосвал</span>
      <span class="rent_tech_subtitle">(25м³)</span>
    </div>
    <span class="rent_line"></span>
  
    <div class="rent_price">
      <span class="price_item">950 Kč</span>
      <span class="price_time">/час</span>
      <span class="price_divider">|</span>
      <span class="price_item">7 500 Kč</span>
      <span class="price_time">/день</span>
    </div>
  </li>

    <li class="rent_price_item">
    <div class="rent_tech">
      <span class="rent_tech_title">Самосвал</span>
      <span class="rent_tech_subtitle">(30м³)</span>
    </div>
    <span class="rent_line"></span>
  
    <div class="rent_price">
      <span class="price_item">1 150 Kč</span>
      <span class="price_time">/час</span>
      <span class="price_divider">|</span>
      <span class="price_item">9 500 Kč</span>
      <span class="price_time">/день</span>
    </div>
  </li>

    </div>
    </div>
    </div>
    ${Questions()}
    </section>
  
  `;
};
