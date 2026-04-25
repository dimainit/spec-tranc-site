import en from "./en.json"
import ru from "./ru.json"
import cs from "./cs.json"
import uk from "./uk.json"

const translations = {
    en,
    ru,
    cs,
    uk
}

const defaultLang = "en"
const keyLocalStorage = "lang"

export const getLanguage = () => {
    return localStorage.getItem(keyLocalStorage) || defaultLang
}
export const setLanguage = (lang) => {
    localStorage.setItem(keyLocalStorage, lang)
}

export const getTranslations = (lang, key) => {
    const keys = key.split('.')
    let result = translations[lang]
    for (let k of keys) {
        if (result)
        result = result[k]
    }
    return result;

}