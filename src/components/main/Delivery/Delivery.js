import "./Delivery.scss";

export const Delivery = () => {
  return /* html */ `
    <section id="delivery" class="delivery">
    <div class="delivery_container">
    <div class="delivery_block_left">
    <h1 class="delivery_title">Доставка</h1>
    <p class="delivery_text">Основная миссия компании Спец-транс — комплексные поставки нерудных материалов для корпоративных клиентов и частных лиц. Мы осуществлем доставку по Санкт-Петербургу и Ленинградской области.
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
г. Санкт-Петербург
</h4>
<p class="adress_subtitle">
Невский проспект, д. 12/2
</p>
</div>
<div class="delivery_num">
<h4 class="num_title">
+7 812 545 44 53
</h4>
<p class="num_subtitle">
Ежедневно с 08:00 до 24:00
</p>
</div>
</div>
    </div>
    <div class="delivery_block_right">
    <div class="map_delivery">
    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A9ff26ccbb15b1ed5a01c673142275591cdf5a1612ed00aa4394480f8c6406b1d&amp;source=constructor" width="650" height="600" frameborder="0"></iframe>
    <button id="map-btn" class="map_btn">Зона доставки</button>
    </div>
    </div>
    </section>
    `;
};

export const btnMapLink = () => {
    const mapBtn = document.querySelector("#map-btn")
    mapBtn.addEventListener("click", (event) => {
        window.open(
          "https://yandex.com/maps/2/saint-petersburg/?from=mapframe&ll=30.316703%2C59.937377&mode=usermaps&source=mapframe&um=constructor%3A9ff26ccbb15b1ed5a01c673142275591cdf5a1612ed00aa4394480f8c6406b1d&utm_source=mapframe&z=14","_blank"
        );
    })
}
