
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Main = styled.main`
  max-width: 840px;
  margin: 2rem auto;
  padding: 0 1rem;
`;
const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill,minmax(220px,1fr));
`;
const Card = styled.article`
  display: flex;
  flex-direction: column;
  background: var(--card);
  border: 1px solid rgba(0,0,0,.05);
  border-radius: 12px;
  overflow: hidden;
  transition: transform .2s;
  &:hover{ transform: translateY(-4px); }
`;
const Pic = styled.img` width: 100%; height: 180px; object-fit: cover; `;
const Title = styled.h3` margin: .8rem 1rem .4rem; font-size: 1.1rem; `;
const Price = styled.span` margin: 0 1rem 1rem; font-weight: 600; `;
const Btn   = styled.a`
  margin: auto 1rem 1rem;
  padding: .45rem 1.2rem;
  border-radius: 9999px;
  background: var(--nav-active-bg);
  color: var(--nav-active-text);
  font-weight: 500;
  text-align: center;
  text-decoration: none;
`;

export default function Merch() {
    const { t } = useTranslation();
    const items = t('merch.items', { returnObjects: true });
    return (
        <Main>
            <h1>{t('merch.title')}</h1>

            <Grid>
                {items.map(it => (
                    <Card key={it.id}>
                        <Pic src={it.img} alt={it.name} />
                        <Title>{it.name}</Title>
                        <Price>{it.price}</Price>
                        {it.link && <Btn href={it.link} target="_blank" rel="noreferrer">
                            {t('merch.buy')}
                        </Btn>}
                    </Card>
                ))}
            </Grid>
        </Main>
    );
}
