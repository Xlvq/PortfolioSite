import { createContext, useEffect, useState } from 'react';
import { ThemeProvider as Styled } from 'styled-components';

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}
});

export function ThemeProvider({ children }) {
  // читаем сохранённую тему или системную
  const getInitial = () => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
  };

  const [theme, setTheme] = useState(getInitial);

  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

  // пишем атрибут в <html> и сохраняем в localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {/* если styled-components надо знать тему */}
        <Styled theme={{ mode: theme }}>{children}</Styled>
      </ThemeContext.Provider>
  );
}
