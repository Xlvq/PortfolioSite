// src/pages/Reviews.jsx
import {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';
import {Link} from 'react-router-dom';           // ← нужен, если копирайт – ссылка

const ENDPOINT = import.meta.env.VITE_API_BASE || 'http://localhost:4000/api';

/* ---------- styled ---------- */
const Main   = styled.main`padding:2rem;max-width:70ch;margin:0 auto;`;
const Center = styled.div`
  width:100%;max-width:420px;margin:0 auto;
  display:flex;flex-direction:column;gap:1rem;
`;
const ReviewCard = styled.article`
  background:var(--card);border:1px solid rgba(0,0,0,.05);
  border-radius:12px;padding:1rem 1.2rem;
`;
const Empty = styled.p`opacity:.6;font-style:italic;text-align:center;`;
const Btn   = styled.button`
  padding:.5rem 1.2rem;border-radius:9999px;border:none;cursor:pointer;
  font-weight:500;background:var(--nav-active-bg,rgba(0,0,0,.05));
  color:var(--nav-active-text,var(--text));align-self:center;
`;
const Field = styled.input`
  width:100%;padding:.5rem .8rem;border-radius:8px;
  border:1px solid rgba(0,0,0,.15);background:var(--card);color:var(--text);
`;
const Area  = styled.textarea`
  ${Field};
  height:100px;resize:vertical;
`;

/* ---------- component ---------- */
export default function Reviews() {
  const {t} = useTranslation();

  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [name, setName]   = useState('');
  const [code, setCode]   = useState('');
  const [text, setText]   = useState('');

  /* загрузка отзывов */
  useEffect(() => {
    fetch(`${ENDPOINT}/reviews`)
        .then(r => r.json())
        .then(setReviews);
  }, []);

  /* отправка формы */
  const submit = async () => {
    const res = await fetch(`${ENDPOINT}/reviews`, {
      method : 'POST',
      headers: {'Content-Type': 'application/json'},
      body   : JSON.stringify({name, text, code})
    });

    if (!res.ok) {
      alert(t('reviews.invalid'));
      return;
    }

    const data = await res.json();
    setReviews(r => [...r, data.review]);
    setName(''); setCode(''); setText('');
    setShowForm(false);
  };

  return (
      <Main>
        <h1>{t('reviews.title')}</h1>

        <Center>
          {reviews.length === 0
              ? <Empty>{t('common.empty')}</Empty>
              : reviews.map(r => (
                  <ReviewCard key={r.id}>
                    <strong>{r.name}</strong>
                    <p>{r.text}</p>
                  </ReviewCard>
              ))
          }

          {showForm ? (
              <>
                <Field
                    placeholder={t('reviews.name')}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <Field
                    placeholder={t('reviews.code')}
                    value={code}
                    onChange={e => setCode(e.target.value)}
                />
                <Area
                    placeholder={t('reviews.text')}
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <Btn onClick={submit}>{t('reviews.submit')}</Btn>
              </>
          ) : (
              <Btn onClick={() => setShowForm(true)}>
                {t('reviews.submit')}
              </Btn>
          )}
        </Center>

        {/* пример копирайта - если он здесь, иначе убери */}
        {/* <small style={{display:'block',marginTop:'4rem',textAlign:'center'}}>
        {t('common.copyright')}
      </small> */}
      </Main>
  );
}
