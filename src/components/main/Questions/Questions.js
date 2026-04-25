import { t } from "../../../lang";

export const Questions = () => {
  return /* html */ `
   <section id="questions" class="questions">
   <div class="containerQuestions">
   <div class="questions_container">
   <div class="questions_block"
   data-aos="fade-right" 
   data-aos-duration="800" 
   data-aos-delay="200">
   <h1 class="questions_title">${t("main.questions.title")}</h1>
   <h3 class="questions_subtit">${t("main.questions.subtitle")}</h3>
   <p class="questions_text">${t("main.questions.text")}</p>
   <button type="submit" form="questions-form" class="questions_btn"><span class="btn_questions_title">${t("main.questions.button")}</span></button>
   </div>
   <div class="contacts_block"
   data-aos="fade-left" 
   data-aos-duration="800" 
   data-aos-delay="200">
   <div class="back_green_bg"></div>
   <form id="questions-form" class="form">
   <input type="text" id="name" name="userName" placeholder=${t("main.questions.namePlaceholder")} class="form_input">
   <span class="error_name" data-error-for="name"></span>
   <input type="tel" id="tel" name="userTel" placeholder=${t("main.questions.phonePlaceholder")} class="form_input">
   <span class="error_tel" data-error-for="tel"></span>
   <textarea name="userComment" id="comment" placeholder=${t("main.questions.commentPlacholder")} class="form_textarea"></textarea>
   <span class="error_com" data-error-for="comment"></span>
   <div class="form_agree">
   <input class="checkbox_agree" type="checkbox" id="agree" name="agree">
   <label for="agree">${t("main.questions.commentPlacholder")}</label>
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
  const submitBtn = document.querySelector(".questions_btn");
  if (submitBtn) {
    submitBtn.addEventListener("click", (event) => {
      event.preventDefault();
      let hasError = false;
      const inputName = document.querySelector("#name");
      const nameValue = inputName.value;
      const nameError = document.querySelector(".error_name");
      const inputTel = document.querySelector("#tel");
      const telValue = inputTel.value;
      const telError = document.querySelector(".error_tel");
      const inputCom = document.querySelector("#comment");
      const comValue = inputCom.value;
      const comError = document.querySelector(".error_com");
      if (nameValue === "") {
        inputName.classList.add("error_Form");
        nameError.textContent = t("main.questions.form.name.error1");
        hasError = true;
      } else if (nameValue.length < 3) {
        inputName.classList.add("error_Form");
        nameError.textContent = t("main.questions.form.name.error2");
        hasError = true;
      } else {
        inputName.classList.remove("error_Form");
        nameError.textContent = "";
      }
      if (telValue === "") {
        inputTel.classList.add("error_Form");
        telError.textContent = t("main.questions.form.tel.error1");
        hasError = true;
      } else if (!telValue.startsWith("+")) {
        inputTel.classList.add("error_Form");
        telError.textContent = t("main.questions.form.tel.error2");
        hasError = true;
      } else if (telValue.length < 10 || telValue.length > 15) {
        inputTel.classList.add("error_Form");
        telError.textContent = t("main.questions.form.tel.error3");
        hasError = true;
      } else if (isNaN(telValue)) {
        telError.textContent = t("main.questions.form.tel.error4");
        hasError = true;
      } else {
        inputTel.classList.remove("error_Form");
        telError.textContent = "";
      }
      if (comValue === "") {
        inputCom.classList.add("error_Form");
        comError.textContent = t("main.questions.form.com.error1");
        hasError = true;
      } else {
        inputCom.classList.remove("error_Form");
        comError.textContent = "";
      }
      const checkboxAgree = document.querySelector("#agree");
      const labelAgree = document.querySelector("label[for='agree']");
      const agreeError = document.querySelector(".error_agree");
      if (!checkboxAgree.checked) {
        labelAgree.classList.add("text_agree_checked");
        agreeError.textContent = t("main.questions.form.agree.error1");
        hasError = true;
      } else {
        labelAgree.classList.remove("text_agree_checked");
        agreeError.textContent = "";
      }
      if (!hasError) {
        const btnText = document.querySelector(".btn_questions_title");
        btnText.textContent = t("main.questions.successText");
        document.querySelector("#questions-form").reset();
        setTimeout(() => {
          btnText.textContent = t("main.questions.button");
        }, 2000);
      }
    });
  }
};
