import { t } from "../../../lang";
import frame1 from "../../../../public/Icon/frame1(WhyUs).svg";
import frame2 from "../../../../public/Icon/frame2(WhyUs).svg";
import frame3 from "../../../../public/Icon/frame3(WhyUs).svg";
import frame4 from "../../../../public/Icon/frame4(WhyUs).svg";
import frame5 from "../../../../public/Icon/frame5(WhyUs).svg";


const items = [
  {
    icon: frame1,
    text: "main.whyus.block1",
  },
  {
    icon: frame2,
    text: "main.whyus.block2",
  },
  {
    icon: frame3,
    text: "main.whyus.block3",
  },
  {
    icon: frame4,
    text: "main.whyus.block4",
  },
  {
    icon: frame5,
    text: "main.whyus.block5",
  },
];

const createItems = () => {
  return items
    .map(
      (element, index) => `
    <div class="advantages_item"
    data-aos="fade-up"
    data-aos-delay="${index * 100}">
    <img class="advantages_icon" src="${element.icon}" alt="Icon">
    <p class="advantages_text">${t(element.text)}</p>
    </div>
    `,
    )
    .join("");
};

export const WhyUs = () => {
  return /* html */ `
    <section id="advantages" class="advantages">
    <div class="containerAdvantages">
    <h1 class="advantages_title" 
    data-aos="fade" 
    data-aos-duration="1000">${t("main.whyus.title")}</h1>
    <div class="advantages_list">
    ${createItems()}
    </div>
    </div>
    </section>
    `;
};
