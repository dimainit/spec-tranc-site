import "./Delivery.scss";
import { t } from "../../../lang";
import star from "../../../../public/Icon/star.svg";



export const Delivery = () => {
  return /* html */ `
    <section id="delivery" class="delivery">
    <div class="containerDelivery">

    <div class="delivery_container">
    <div class="delivery_block_left">
    <h1 class="delivery_title" data-aos="fade" data-aos-duration="1000">${t("main.delivery.title")}</h1>
    <p class="delivery_text" data-aos="fade-right" 
    data-aos-delay="200" 
    data-aos-duration="800">${t("main.delivery.subtitle")}
</p>
<ul class="delivery_list"
  data-aos="fade-right" 
  data-aos-delay="400" 
  data-aos-duration="800">
    <li class="delivery_item">
    <img src=${star} alt="star"/>
    <p>${t("main.delivery.item1")}</p>
    </li>
    <li class="delivery_item">
    <img src=${star} alt="star"/>
    <p>${t("main.delivery.item2")}</p>
    </li>
    <li class="delivery_item">
    <img src=${star} alt="star"/>
    <p>${t("main.delivery.item3")}</p>
    </li>
    <li class="delivery_item">
    <img src=${star} alt="star"/>
    <p>${t("main.delivery.item4")}</p>
    </li>
</ul>
<div class="delivery_contacts"
data-aos="fade-up" 
data-aos-duration="200"
  data-aos-delay="150">
<div class="delivery_adress">
<h4 class="adress_title">
${t("main.delivery.addressTitle")}
</h4>
<p class="adress_subtitle">
${t("main.delivery.addressSubtitle")}
</p>
</div>
<div class="delivery_num">
<h4 class="num_title">
${t("main.delivery.phoneTitle")}
</h4>
<p class="num_subtitle">
${t("main.delivery.phoneSubtitle")}
</p>
</div>
</div>
    </div>
    <div class="delivery_block_right"
    data-aos="fade"
    data-aos-duration="1700"
    data-aos-delay="400">
    <div class="map_delivery">
    <div class="map_wrapper">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2566.1974274573536!2d14.589376!3d49.970155999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b8ee356e9ab6f%3A0x58dfcf23a32364a4!2sSpecTrans!5e0!3m2!1sru!2scz!4v1774808009640!5m2!1sru!2scz" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <button id="map-btn" class="map_btn"><span class="map_btn_title">${t("main.delivery.button")}
</span>
    <span class="short_title">${t("main.delivery.shortButton")}
</span></button>

    <div class="map-overlay"></div>
    </div>
    </div>
    </div>
    </div>
    </section>
    `;
};

export const btnMapLink = () => {
    const mapBtn = document.querySelector("#map-btn")
    if (mapBtn) {

        mapBtn.addEventListener("click", (event) => {
            window.open("https://maps.app.goo.gl/eP8tAhQH418hE5CD9", "_blank");
        })
    }
}
