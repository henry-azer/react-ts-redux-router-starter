import { useTheme } from '../../../services/theme/theme-context';

export const ThemeButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="button theme-button" onClick={toggleTheme}>
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};
