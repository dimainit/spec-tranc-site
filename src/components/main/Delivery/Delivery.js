import "./Delivery.scss";

export const Delivery = () => {
  return /* html */ `
    <section id="delivery" class="delivery">
    <div class="delivery_container">
    <div class="delivery_block_left">
    <h1 class="delivery_title">Доставка</h1>
    <p class="delivery_text">Обеспечиваем оперативную доставку строительных материалов и спецтехники по всей Праге и пригороду. 
        Ваш груз прибудет вовремя и в полной сохранности.
</p>
<ul class="delivery_list">
    <li class="delivery_item">
    <img src="/Icon/star.svg" alt="star"/>
    <p>Вы оставляете заявку через сайт или по телефону.</p>
    </li>
    <li class="delivery_item">
    <img src="/Icon/star.svg" alt="star"/>
    <p>Мы производим точный расчет стоимости</p>
    </li>
    <li class="delivery_item">
    <img src="/Icon/star.svg" alt="star"/>
    <p>Осуществляем поставку заказанного вами материала точно в срок</p>
    </li>
    <li class="delivery_item">
    <img src="/Icon/star.svg" alt="star"/>
    <p>Соблюдаем своевременный документооборот</p>
    </li>
</ul>
<div class="delivery_contacts">
<div class="delivery_adress">
<h4 class="adress_title">
г. Прага
</h4>
<p class="adress_subtitle">
За Стодола 20, 251 01 Модлетице
</p>
</div>
<div class="delivery_num">
<h4 class="num_title">
+420 606 110 110
</h4>
<p class="num_subtitle">
По будням с 07:00 до 17:00
</p>
</div>
</div>
    </div>
    <div class="delivery_block_right">
    <div class="map_delivery">
    <div class="map_wrapper">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2566.1974274573536!2d14.589376!3d49.970155999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b8ee356e9ab6f%3A0x58dfcf23a32364a4!2sSpecTrans!5e0!3m2!1sru!2scz!4v1774808009640!5m2!1sru!2scz" width="850" height="700" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <button id="map-btn" class="map_btn">Зона доставки</button>
    <div class="map-overlay"></div>
    </div>
    </div>
    </div>
    </section>
    `;
};

export const btnMapLink = () => {
    const mapBtn = document.querySelector("#map-btn")
    mapBtn.addEventListener("click", (event) => {
        window.open("https://maps.app.goo.gl/eP8tAhQH418hE5CD9", "_blank");
    })
}
