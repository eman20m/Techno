import i18n from "i18next";
import {initReactI18next} from 'react-i18next';
import translationEN from './locales/en/translationEN.json';
import translationAR from './locales/ar/translationAR.json';

//the translations
const resources ={
    en:{
        translation:translationEN
    },
   
    ar:{
        translation:translationAR

    }
};
i18n
.use(initReactI18next)
.init({
    resources,
    lng:localStorage.getItem('lang'),

    keySeparator :false, //we do not use keys in from messages,welcome

    interpolation:{
        escapevalue: false //react already safes from xss
    }
});

export default i18n;