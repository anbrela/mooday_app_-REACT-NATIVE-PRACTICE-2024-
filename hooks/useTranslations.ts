import eslocale from "../config/locales/es.json";
import enlocale from "../config/locales/en.json";
import { getLocales } from "expo-localization";
import { I18n } from "i18n-js";

const translations = {
  en: enlocale,
  es: eslocale,
};
const i18n = new I18n(translations);
i18n.locale = getLocales()[0].languageCode ?? "en";
i18n.enableFallback = true;


export const useTranslations = () => {

    const changeLanguage = (language: string) => {
    i18n.locale = language;
    }

  return { t: i18n.t.bind(i18n), changeLanguage };
};
