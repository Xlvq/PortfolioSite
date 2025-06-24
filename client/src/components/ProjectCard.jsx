
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.article)`
  background: var(--card);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0,0,0,.08);
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 100%;+  
  height: 180px;         
  object-fit: contain;    
  background: var(--card);
`;

const Body = styled.div`
  padding: 1rem 1.2rem;
  flex: 1;
`;

const Title = styled.h4`
  margin: 0 0 0.4rem;
`;

const Desc = styled.p`
  margin: 0;
  opacity: .8;
  font-size: .9rem;
  line-height: 1.35;
`;

export default function ProjectCard({ img, title, desc }){
  return (
    <Card
      whileHover={{ y: -6, boxShadow: '0 8px 18px rgba(0,0,0,.15)' }}
      transition={{ type:'spring', stiffness:280, damping:20 }}
    >
      <Img src={img} alt={title}/>
      <Body>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
      </Body>
    </Card>
  );
}
