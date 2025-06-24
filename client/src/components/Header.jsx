import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useContext } from 'react';          // useContext нужен для темы
import { ThemeContext } from '../theme.jsx'; // сам контекст темы
import ThemeSwitcher from './ThemeSwitcher.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import logoDark from '../assets/talix.png';
import logoLight from '../assets/logo.png';
import { useTranslation } from 'react-i18next';


/* ---------- styled ---------- */

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  background: var(--bg);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
`;

const Logo = styled.img`
  width: 140px;
  height: 40px;
  object-fit: contain;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.2rem;
`;

const LinkBtn = styled(NavLink)`
  padding: 0.4rem 1.1rem;
  border-radius: 9999px;
  font-weight: 500;
  text-decoration: none;
  color: var(--text);
  transition: background 0.25s;

  &.active {
    background: var(--nav-active-bg, transparent);
    color: var(--nav-active-text, inherit);
  }

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

const Switchers = styled.div`
  display: flex;
  gap: 0.8rem;
`;

/* ---------- component ---------- */

export default function Header() {
      const { t } = useTranslation();
      const { theme } = useContext(ThemeContext);       // 'light' | 'dark'

  return (
      <Bar>
        <NavLink to="/">
            <Logo src={theme === 'light' ? logoLight : logoDark} alt="logo" />
        </NavLink>

        <Nav>
          <LinkBtn to="/">{t('nav.home')}</LinkBtn>
          <LinkBtn to="/projects">{t('nav.projects')}</LinkBtn>
          <LinkBtn to="/about">{t('nav.about')}</LinkBtn>
          <LinkBtn to="/reviews">{t('nav.reviews')}</LinkBtn>
          <LinkBtn to="/contacts">{t('nav.contacts')}</LinkBtn>
        </Nav>

        <Switchers>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </Switchers>
      </Bar>
  );
}
