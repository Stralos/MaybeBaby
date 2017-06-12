// @flow
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from "./app.jsx";
import { StaticRouter } from "react-router-dom";
const app = express();

app.use(express.static('dist'));
app.get('/', (request, response) => {
  const props = {
    greeting: "Hello World!",
    date: 1
  }

  const context = {};
  const html = renderToString(
    <StaticRouter location={request.url} context={context}>
      <App initialStore={props}/>
    </StaticRouter>
  )

  if (context.url) {
    // Somewhere a `<Redirect>` was rendered
    response.redirect(301, context.url);
  } else {
    response.send(html);
  }
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});
