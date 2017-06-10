import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Index from './index.jsx';

const app = express();

app.use(express.static('dist'));
app.get('/', (request, response) => {
  const props = {
    greeting: "Hello World!",
    date: 1
  }
  const html = renderToString(<Index {...props}/>)
  response.send(html);
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});
