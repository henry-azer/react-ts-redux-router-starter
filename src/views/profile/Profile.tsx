import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';

export const Component = function Profile(): JSX.Element {
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    enqueueSnackbar('This is a success message!', { variant: 'success' });
  };

  return <div style={{ textAlign: 'center' }}>
    <div >{t('profile:title')}</div><br />
    <button className="button" onClick={handleClick}>Show Snackbar</button>
  </div>;
};

