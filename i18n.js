import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  ar: {
    translation: {
      "home": "الرئيسية",
      "matches": "المباريات",
      "live_streams": "البث المباشر",
      "predictions": "مسابقة التوقعات",
      "rewards": "المكافآت",
      "leaderboard": "الترتيب",
      "login": "دخول",
      "logout": "تسجيل الخروج",
      "balance": "الرصيد",
      "admin": "لوحة الإدارة"
    }
  },
  en: {
    translation: {
      "home": "Home",
      "matches": "Matches",
      "live_streams": "Live Streams",
      "predictions": "Predictions",
      "rewards": "Rewards",
      "leaderboard": "Leaderboard",
      "login": "Login",
      "logout": "Logout",
      "balance": "Balance",
      "admin": "Admin Panel"
    }
  },
  fr: {
    translation: {
      "home": "Accueil",
      "matches": "Matchs",
      "live_streams": "En direct",
      "predictions": "Prédictions",
      "rewards": "Récompenses",
      "leaderboard": "Classement",
      "login": "Connexion",
      "logout": "Déconnexion",
      "balance": "Solde",
      "admin": "Administration"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false
    }
  });

// Update document direction on language change
i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;
});

export default i18n;
