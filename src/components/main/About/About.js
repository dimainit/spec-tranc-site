import { t } from "../../../lang";

export const About = () => {
  return /* html */ `
    <section id="about-us" class="about_us">
    <div class="containerAbout">
    <div class="about_container">
    <div class="about_text"
    data-aos="fade-right" 
    data-aos-duration="800" 
    data-aos-delay="200">
    <h1 class="about_title">${t("main.about.title")}</h1>
    <p class="about_subtitle">${t("main.about.subtitle")}</p>
    </div>
    <div class="about_stats"
    data-aos="fade-left" 
    data-aos-duration="800" 
    data-aos-delay="200">
    <div class="stat_blocks">
    <div class="stat">
    <h1 class="stat_num">60<span class="stat_plus">+</span></h1>
    <p class="stat_subtitle">${t("main.about.textOnBlock1")}</p>
    </div>
    <div class="stat">
    <h1 class="stat_num">15</h1>
    <p class="stat_subtitle">${t("main.about.textOnBlock2")}</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    `;
};
