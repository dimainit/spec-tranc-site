export const Questions = () => {
   return `
   <section class="questions">
   <div class="questions_container">
   <div class="questions_block">
   <h1 class="questions_title">Остались вопросы?</h1>
   <h3 class="questions_subtit">Закажите обратный звонок и узнайте больше о наших услугах!</h3>
   <p class="questions_text">Оставьте заявку и наш менеджер перезвонит вам в течении 10 минут</p>
   <button type="submit" form="questions-form" class="questions_btn"><span class="btn_questions_title">Заказать звонок</span></button>
   </div>
   <div class="contacts_block">
   <form id="questions-form" class="form">
   <input type="text" id="name" name="userName" placeholder="Имя" class="form_input">
   <span class="error_name" data-error-for="name"></span>
   <input type="tel" id="tel" name="userTel" placeholder="Телефон" class="form_input">
   <span class="error_tel" data-error-for="tel"></span>
   <textarea name="userComment" id="comment" placeholder="Коментарии" class="form_textarea"></textarea>
   <span class="error_comment" data-error-for="comment"></span>
   <div class="form_agree">
   <input type="checkbox" id="agree" name="agree">
   <label for="agree">Соглашение о персональных данных</label>
   </div>
   <span class="error_agree" data-error-for="agree"></span>
   </form>
   </div>
   </div>
   </section>
   `;
}