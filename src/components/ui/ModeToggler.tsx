

import { useTheme } from '../../theme';

function ModeToggler() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="ml-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white focus:outline-none focus:ring-2 focus:ring-purple-400 cursor-pointer"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      type="button"
      aria-pressed={theme === 'dark'}
      onClick={toggleTheme}
    >
      {theme === 'dark' ? (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0112 21.75c-5.385 0-9.75-4.365-9.75-9.75 0-4.28 2.72-7.92 6.548-9.29.5-.18 1.052.01 1.32.48.27.47.13 1.08-.34 1.35A7.5 7.5 0 1019.46 17.22c-.27-.47-.08-1.06.41-1.25.47-.18 1.01.01 1.32.48.18.3.13.68-.06.99z" />
        </svg>
      ) : (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71" />
        </svg>
      )}
    </button>
  );
}

export default ModeToggler;
