const items = [
  {
    icon: "/Icon/frame1(WhyUs).svg",
    text: "Мы работаем с <span class='green_color'>2000</span> года",
  },
  {
    icon: "/Icon/frame2(WhyUs).svg",
    text: "Более <span class='green_color'>5000</span> счастливых клиентов",
  },
  {
    icon: "/Icon/frame3(WhyUs).svg",
    text: "Лучшие цены",
  },
  {
    icon: "/Icon/frame4(WhyUs).svg",
    text: "Качественная продукция",
  },
  {
    icon: "/Icon/frame5(WhyUs).svg",
    text: "Оперативность",
  },
];

const createItems = () => {
    return items.map((element) => `
    <div class="advantages_item">
    <img class="advantages_icon" src="${element.icon}" alt="Icon">
    <p class="advantages_text">${element.text}</p>
    </div>
    `,
      ).join("");
}



export const WhyUs = () => {
    return /* html */ `
    <section id="advantages" class="advantages">
    <div class="container">
    <h1 class="advantages_title">Почему выбирают нас</h1>
    <div class="advantages_list">
    ${createItems()}
    </div>
    </section>
    </div>
    `
}