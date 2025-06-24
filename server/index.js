
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

const readJSON = (file) => JSON.parse(fs.readFileSync(path.join(__dirname,'data',file),'utf-8'));
const writeJSON = (file,obj)=> fs.writeFileSync(path.join(__dirname,'data',file),JSON.stringify(obj,null,2));

// ---------------- Codes -----------------

app.get('/api/codes', (req,res)=>{
  const codes = readJSON('codes.json');
  res.json(codes);
});

app.post('/api/codes', (req,res)=>{
  const { amount=1 } = req.body || {};
  const codes = readJSON('codes.json');
  const newCodes = [];
  for(let i=0;i<amount;i++){
    let c;
    do{
      c = [...Array(6)].map(()=>Math.random().toString(36).slice(2,3).toUpperCase()).join('');
    }while(codes.includes(c));
    codes.push(c);
    newCodes.push(c);
  }
  writeJSON('codes.json',codes);
  res.json({ generated:newCodes });
});

app.delete('/api/codes/:code', (req,res)=>{
  const code = req.params.code.toUpperCase();
  let codes = readJSON('codes.json');
  codes = codes.filter(c=>c!==code);
  writeJSON('codes.json',codes);
  res.json({ remaining:codes.length });
});

// --------------- Reviews ----------------

app.get('/api/reviews',(req,res)=>{
  res.json(readJSON('reviews.json'));
});

app.post('/api/reviews',(req,res)=>{
  const { name='', text='', code='' } = req.body || {};
  const upCode = code.toUpperCase();
  const codes = readJSON('codes.json');
  if(!codes.includes(upCode)){
    return res.status(400).json({ error:'invalid_code' });
  }
  // remove used code
  const newCodes = codes.filter(c=>c!==upCode);
  writeJSON('codes.json',newCodes);

  const reviews = readJSON('reviews.json');
  const review = { id: Date.now(), name, text };
  reviews.push(review);
  writeJSON('reviews.json',reviews);

  res.json({ ok:true, review });
});

app.listen(PORT, ()=> console.log('API listening on',PORT));
