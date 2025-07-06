import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Btn = styled.button`
  padding: .25rem 1.1rem;
  border-radius: 9999px;
  border: 1px solid transparent;
  font-weight: 500;
  cursor: pointer;
  transition: background .25s, border-color .25s, color .25s;


  background: rgba(0,0,0,.07);
  border-color: rgba(0,0,0,.12);
  color: var(--text);

  /* HOVER в светлой */
  &:hover { background: rgba(0,0,0,.1); }


  [data-theme='dark'] & {
    background: var(--nav-active-bg);
    border-color: transparent;
    color: var(--nav-active-text);
    &:hover { background: var(--nav-active-bg); } 
  }
`;

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const toggle = () => {
    const next = i18n.language === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(next);
  };

  return (
      <Btn onClick={toggle} aria-label="switch language">
        {i18n.language.toUpperCase()}
      </Btn>
  );
}
