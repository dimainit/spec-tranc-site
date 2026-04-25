import page from "page";
import { getLanguage, setLanguage } from "../../../i18n";
import "./BlockLanguages.scss";

export const BlockLanguages = () => {
  window.changeLang = (lang) => {
    setLanguage(lang);

    const path =
      window.location.pathname.replace("/spec-tranc-site", "") || "/";
    page.show(path);
  };
  const currentLang = getLanguage().toUpperCase();
  let langList = "";
  if (currentLang !== "EN") {
    langList += `<li><button onclick="changeLang('en')">EN</button></li>`;
  }
  if (currentLang !== "RU") {
    langList += `<li><button onclick="changeLang('ru')">RU</button></li>`;
  }
  if (currentLang !== "CS") {
    langList += `<li><button onclick="changeLang('cs')">CZ</button></li>`;
  }
  if (currentLang !== "UK") {
    langList += `<li><button onclick="changeLang('uk')">UK</button></li>`;
  }
  return /* html */ `
        <div class="lang_container">
        <button class="lang_current">${currentLang === "CS" ? "CZ" : currentLang}</button>
        <ul class="lang_list">
            ${langList}
        </ul>
        </div>
    `;
};
