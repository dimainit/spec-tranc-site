import { t } from "../../lang";

export const Hero = () => {
  return /* html */ `
  <section id="hero" class="hero"
  data-aos="fade" 
  data-aos-duration="1000">
  <div class="containerHero">
  <div class="hero_content"
  data-aos="fade-right" 
  data-aos-delay="100" 
  data-aos-duration="800">
  <h1 class="hero_title">${t("hero.title")}</h1>
  <p class="hero_subtitle">  ${t("hero.subtitle")}</p>
  <div
  data-aos="fade-up"
  data-aos-delay="300"
  data-aos-duration="600">
      <button class="hero_btn">
      <span class="hero_btn_title">${t("hero.button")}</span>
      </button>
      <div class="hero_blur"></div>
      </div>
  </div>
        </section>
    `;
};
