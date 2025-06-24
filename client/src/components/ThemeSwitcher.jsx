import { useContext } from 'react';
import { ThemeContext } from '../theme.jsx';
import styled from 'styled-components';
import { FiSun, FiMoon } from 'react-icons/fi';   // или любая другая пара иконок

/* ---------- styled ---------- */

const Btn = styled.button`
  /* геометрия кружка-плашки */
  width: 34px;
  height: 34px;
  padding: 0;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* фон зависит от темы */
  background: ${({ $dark }) =>
    $dark
        ? 'var(--nav-active-bg)'          // градиент в тёмной теме
        : 'rgba(0,0,0,0.08)'};            // лёгкая подложка в светлой

  color: ${({ $dark }) =>
    $dark ? 'var(--nav-active-text, #111)' : '#111'};

  cursor: pointer;
  transition: transform 0.25s, background 0.25s;

  &:hover { transform: scale(1.1); }

  /* убираем фокус-контур, но оставляем для accessibility */
  &:focus { outline: 2px solid transparent; }
  &:focus-visible { outline: 2px solid currentColor; }
`;

/* ---------- component ---------- */

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);  // theme: 'light' | 'dark'

  const isDark = theme === 'dark';

  return (
      <Btn aria-label="theme switcher"
           $dark={isDark}
           onClick={toggleTheme}>
        {isDark ? <FiSun /> : <FiMoon />}
      </Btn>
  );
}
