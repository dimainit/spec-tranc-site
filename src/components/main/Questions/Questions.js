export const Questions = () => {
  return /* html */ `
   <section id="questions" class="questions">
   <div class="container">
   <div class="questions_container">
   <div class="questions_block">
   <h1 class="questions_title">Остались вопросы?</h1>
   <h3 class="questions_subtit">Закажите обратный звонок и узнайте больше о наших услугах!</h3>
   <p class="questions_text">Оставьте заявку и наш менеджер перезвонит вам в течении 10 минут</p>
   <button type="submit" form="questions-form" class="questions_btn"><span class="btn_questions_title">Заказать звонок</span></button>
   </div>
   <div class="contacts_block">
   <div class="back_green_bg"></div>
   <form id="questions-form" class="form">
   <input type="text" id="name" name="userName" placeholder="Имя" class="form_input">
   <span class="error_name" data-error-for="name"></span>
   <input type="tel" id="tel" name="userTel" placeholder="Телефон" class="form_input">
   <span class="error_tel" data-error-for="tel"></span>
   <textarea name="userComment" id="comment" placeholder="Коментарии" class="form_textarea"></textarea>
   <span class="error_com" data-error-for="comment"></span>
   <div class="form_agree">
   <input class="checkbox_agree" type="checkbox" id="agree" name="agree">
   <label for="agree">Соглашение о персональных данных</label>
   </div>
   <span class="error_agree" data-error-for="agree"></span>
   </form>
   </div>
   </div>
   </div>
   </section>
   `;
};

export const initForm = () => {
   const submitBtn = document.
   querySelector(".questions_btn")
   if (submitBtn) {

     submitBtn.addEventListener("click", (event) => {
       event.preventDefault()
       let hasError = false
       const inputName = document.querySelector("#name")
       const nameValue = inputName.value
       const nameError = document.querySelector(".error_name")
       const inputTel = document.querySelector("#tel")
       const telValue = inputTel.value
       const telError = document.querySelector(".error_tel")
       const inputCom = document.querySelector("#comment")
       const comValue = inputCom.value
       const comError = document.querySelector(".error_com");
       if (nameValue === "") {
         inputName.classList.add("error_Form")
         nameError.textContent = "Заполните поле!"
         hasError = true;
        } else if (nameValue.length < 3) {
          inputName.classList.add("error_Form")
          nameError.textContent = "Минимум 3 символа";
          hasError = true;
        }else {
          inputName.classList.remove("error_Form")
          nameError.textContent=""
        }
        if (telValue === "") {
          inputTel.classList.add("error_Form");
          telError.textContent = "Заполните поле!";
          hasError = true;
        } else if (!telValue.startsWith("+")) {
          inputTel.classList.add("error_Form");
          telError.textContent = "Используйте +";
          hasError = true;
        } else if (telValue.length < 10 || telValue.length > 15) {
          inputTel.classList.add("error_Form");
          telError.textContent = "Неверная длина";
          hasError = true;
        } else if (isNaN(telValue)) {
          telError.textContent = "Только цифры!";
          hasError = true;
        } else {
          inputTel.classList.remove("error_Form");
          telError.textContent = "";
        }
        if (comValue === "") {
          inputCom.classList.add("error_Form");
          comError.textContent = "Заполните поле!";
          hasError = true;
        } else {
          inputCom.classList.remove("error_Form");
          comError.textContent = "";
        } 
        const checkboxAgree = document.querySelector("#agree")
        const labelAgree = document.querySelector("label[for='agree']")
        const agreeError = document.querySelector(".error_agree")
        if (!checkboxAgree.checked) {
          labelAgree.classList.add("text_agree_checked");
          agreeError.textContent = "Поставьте галочку!";
          hasError = true;
        } else {
          labelAgree.classList.remove("text_agree_checked");
        agreeError.textContent = "";
      }
      if (!hasError) {
         const btnText = document.querySelector(".btn_questions_title");
         btnText.textContent = "Отправлено!"
         document.querySelector("#questions-form").reset()
         setTimeout(() => {
           btnText.textContent="Заказать звонок"
         }, 2000)
      }
   })
  }
}

