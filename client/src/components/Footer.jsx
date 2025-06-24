// src/components/Footer.jsx
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Foot = styled.footer`
    text-align:center;
    padding:1rem;
    border-top:1px solid rgba(0,0,0,.1);
    color:var(--text);
    background:var(--bg);
    font-size:.9rem;
`;

export default function Footer() {
    const { t } = useTranslation();

    return (
        <Foot>
            {t('common.copyright', { year: new Date().getFullYear() })}
        </Foot>
    );
}
