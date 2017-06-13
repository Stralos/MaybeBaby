// @flow
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from "react-router-dom";
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import App from "./app.jsx";

const app = express();

app.use(express.static('dist'));
app.all('*', (request, response) => {
  console.log(request.url)
  const props = {
    greeting: "Hello World!",
    date: 1
  }

  const store = createStore((state) => {return state}, props)

  const context = {};
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={request.url} context={context}>
        <App/>
      </StaticRouter>
    </Provider>
  )

  if (context.url) {
    console.log(context);
    // Somewhere a `<Redirect>` was rendered
    response.redirect(301, context.url);
  } else {
    response.send(renderFullPage(html, store.getState()));
  }
});

function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="./bundle.js"></script>
      </body>
    </html>
    `
}


const PORT = 3000;

app.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});
