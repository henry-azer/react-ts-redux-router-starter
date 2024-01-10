import { useTranslation } from 'react-i18next';

export const Component = function Profile(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div style={{ textAlign: 'center' }}>
      <div>{t('profile:title')}</div>
    </div>
  );
};
