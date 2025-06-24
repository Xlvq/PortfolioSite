import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import bg from '../assets/codebg.jpg';
import React from 'react';

const Wrapper = styled.main`
  min-height:calc(100vh - 60px);
  display:flex;
  align-items:center;
  justify-content:center;
  position:relative;
  text-align:center;
  background: url(${bg}) center/cover no-repeat;
  color:#fff;
`;

const Overlay = styled.div`
  position:absolute;
  inset:0;
  backdrop-filter:blur(4px);
  background:rgba(0,0,0,0.4);
`;

const Title = styled.h1`
  position:relative;
  font-size:2rem;
  padding:1rem;
  margin:0;
`;

export default function Home(){
  const { t } = useTranslation();
  const phrases = t('welcomePhrases', { returnObjects:true });
  const [phrase] = React.useState(()=> phrases[Math.floor(Math.random()*phrases.length)]);
  return (
    <Wrapper>
      <Overlay />
      <Title>{phrase}</Title>
    </Wrapper>
  );
}
