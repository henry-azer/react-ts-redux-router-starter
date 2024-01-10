import { useTranslation } from 'react-i18next';

export const TranslateButton: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <button
      className="button translate-button"
      onClick={() =>
        i18n.changeLanguage(i18n.resolvedLanguage === 'en' ? 'ar' : 'en')
      }
    >
      {i18n.resolvedLanguage === 'en' ? 'ar' : 'en'}
    </button>
  );
};
