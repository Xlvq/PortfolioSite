import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard.jsx';
import frame from '../assets/Frame.png';

const Container = styled.main`padding:2rem;`;
const Grid = styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
    gap:1.5rem;
`;

export default function Projects() {
    const { t } = useTranslation();
    const raw = t('projects.list', { returnObjects: true });


    const projects = raw.map(p => ({ ...p, img: frame }));

    return (
        <Container>
            <h1>{t('projects.title')}</h1>
            <Grid>
                {projects.map(p => (
                    <Link key={p.id} to={`/projects/${p.id}`} style={{ textDecoration:'none' }}>
                        <ProjectCard img={p.img} title={p.name} desc={p.desc} />
                    </Link>
                ))}
            </Grid>
        </Container>
    );
}
