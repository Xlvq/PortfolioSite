import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import avatar    from '../assets/photo_2025-06-23_19-32-25.jpg';
import hack1     from '../assets/photo_2025-06-24_00-09-06.jpg';   // 👈 ваши фото
import hack2     from '../assets/photo_2025-06-24_00-08-58.jpg';
import hack3     from '../assets/photo_2025-06-24_00-09-12.jpg';

/* ---------- layout ---------- */

const Main = styled.main`
    padding: 2rem;
    display: grid;
    grid-template-columns: 220px 1fr auto;   /* аватар | текст | галерея-колонка */
    gap: 2rem;

    @media (max-width: 760px) {
        grid-template-columns: 1fr;            /* всё в один столбец */
    }
`;

/* левая колонка ---------------------------------------------------------- */
const PhotoWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`;
const Photo = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid rgba(0,0,0,.1);
    [data-theme='dark'] & { border-color: rgba(255,255,255,.15); }
`;
const Name = styled.h2`
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
`;

/* центральный текст ------------------------------------------------------ */
const TextBlock = styled.div`
    max-width: 65ch;
    line-height: 1.55;
`;
const Section = styled.section` margin-bottom: 1rem; `;
const Title    = styled.h3` margin: 0 0 .5rem; `;

/* правая колонка: фотки-столбик ----------------------------------------- */
const Gallery = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;      /* вертикальный столбик */
    gap: .8rem;

    @media (max-width: 760px) {
        flex-direction: row;       /* на мобилке превращаемся в ленту */
        overflow-x: auto;
        margin-top: 1.2rem;
    }
`;
const Shot = styled.li`
    width: 110px;            /* одинаковый размер превью */
    height: 110px;
    border-radius: 8px;
    overflow: hidden;
    flex-shrink: 0;
    img { width: 100%; height: 100%; object-fit: cover; }
`;

/* ---------- компонент --------------------------------------------------- */

export default function About() {
    const { t } = useTranslation();
    const sections = t('about.sections', { returnObjects: true });

    return (
        <Main>
            {/* аватар + имя */}
            <PhotoWrap>
                <Photo src={avatar} alt="avatar" />
                <Name>{t('about.name')}</Name>
            </PhotoWrap>

            {/* текст */}
            <TextBlock>
                {sections.map(s => (
                    <Section key={s.title}>
                        <Title>{s.title}</Title>
                        <p>{s.text}</p>
                    </Section>
                ))}
            </TextBlock>

            {/* мини-галерея */}
            <Gallery>
                {[hack1, hack2, hack3].map(src => (
                    <Shot key={src}><img src={src} alt="hackathon" /></Shot>
                ))}
            </Gallery>
        </Main>
    );
}