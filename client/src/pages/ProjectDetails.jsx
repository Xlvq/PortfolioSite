// src/pages/ProjectDetails.jsx
import ReactMarkdown from 'react-markdown';
import styled        from 'styled-components';
import { useParams, Link } from 'react-router-dom';   // ← добавили Link
import { useTranslation }  from 'react-i18next';

/* helper: строит URL вида /assets/Frame.ab12c3.png */
function resolveAsset(file) {
    return new URL(`../assets/${file}`, import.meta.url).href;
}

/* ---------- styled ---------- */
const Wrap  = styled.main`max-width:840px;margin:2rem auto;padding:0 1rem;`;
const Hero  = styled.img`width:100%;max-height:360px;object-fit:contain;margin-bottom:1.5rem;`;
const Stack = styled.div`display:flex;flex-wrap:wrap;gap:.5rem;margin:1rem 0;`;
const Chip  = styled.span`
    padding:.25rem .7rem;border-radius:9999px;font-size:.8rem;font-weight:500;
    background:var(--nav-active-bg);color:var(--nav-active-text);
`;
const Links = styled.div`margin:1.2rem 0;display:flex;gap:.8rem;`;
const BtnLnk = styled.a`
  padding:.45rem 1.2rem;border-radius:9999px;font-weight:500;text-decoration:none;
  background:rgba(0,0,0,.06);color:var(--text);transition:background .25s;
  &:hover{background:rgba(0,0,0,.12);}
  [data-theme='dark'] &{background:rgba(255,255,255,.08); &:hover{background:rgba(255,255,255,.14);}}
`;
const Back = styled(Link)`
  display:inline-block;margin-top:1rem;font-size:.9rem;
  color:var(--text);text-decoration:none;opacity:.8;
  &:hover{opacity:1;text-decoration:underline;}
`;
/* ---------- component ---------- */

export default function ProjectDetails() {
    const { id } = useParams();
    const { t }  = useTranslation();

    const data     = t('projects.list', { returnObjects: true });
    const project  = data.find(p => p.id === id);

    if (!project) {
        return (
            <Wrap>
                <h2>404 — {t('projects.notFound', { defaultValue: 'нет такого проекта' })}</h2>
                <Back to="/projects">← {t('projects.back', { defaultValue: 'Назад' })}</Back>
            </Wrap>
        );
    }

    /* превращаем "Frame.png" → реальный URL */
    const imgSrc = resolveAsset(project.img);

    return (
        <Wrap>
            <h1>{project.name}</h1>
            <Hero src={imgSrc} alt={project.name} />

            <ReactMarkdown
                components={{
                    h3: ({node, ...props}) => <h3 style={{margin:'1rem 0 .6rem'}} {...props} />,
                    ul: ({node, ...props}) => <ul style={{paddingLeft:'1.2rem',margin:'0 0 .8rem'}} {...props} />,
                    li: ({node, ...props}) => <li style={{marginBottom:'.3rem'}} {...props} />
                }}
            >
                {project.details}
            </ReactMarkdown>

            <h3>{t('projects.stackTitle', { defaultValue: 'Стек' })}</h3>
            <Stack>
                {project.stack.map(s => <Chip key={s}>{s}</Chip>)}
            </Stack>

            <Links>
                {project.gh   && <BtnLnk href={project.gh}  target="_blank" rel="noreferrer">GitHub ↗</BtnLnk>}
                {project.demo && <BtnLnk href={project.demo} target="_blank" rel="noreferrer">{t('projects.demo')} ↗</BtnLnk>}
            </Links>

            <Back to="/projects">← {t('projects.back', { defaultValue: 'Назад' })}</Back>
        </Wrap>
    );
}
