// @flow
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from "./app.jsx";
const app = express();

app.use(express.static('dist'));
app.get('/', (request, response) => {
  const props = {
    greeting: "Hello World!",
    date: 1
  }

  const html = renderToString(
    <App initialStore={props}/>
  )

  response.send(html);
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});
