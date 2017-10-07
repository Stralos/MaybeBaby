/* eslint react/jsx-filename-extension: 0 */
/* eslint no-use-before-define: 0 */
/* eslint no-console: 0 */

import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ServerStyleSheet, ThemeProvider } from 'styled-components';
import App from './app';

const app = express();

app.use(express.static('dist'));
app.all('*', (request, response) => {
  const props = {
    greeting: 'Hello World!',
    date: 1,
    socialMedia: {
      facebook: 'http://www.facebook.com',
      instagram: 'http://www.instagram.com',
      twitter: 'http://twitter.com',
    },
  };
  const store = createStore(state => state, props);
  const context = {};
  const sheet = new ServerStyleSheet();
  const application = sheet.collectStyles(
    <Provider store={store}>
      <StaticRouter location={request.url} context={context}>
        <ThemeProvider theme={{ color: 'white' }}>
          <App />
        </ThemeProvider>
      </StaticRouter>
    </Provider>,
  );
  const html = renderToString(application);
  const css = sheet.getStyleTags();

  if (context.url) {
    // Somewhere a `<Redirect>` was rendered
    response.redirect(301, context.url);
  } else {
    response.send(renderFullPage(html, store.getState(), css));
  }
});

function renderFullPage(html, preloadedState, styleTags) {
  return `
    <!doctype html>
    <html>
      <head>
        ${styleTags}
        <title>Redux Universal Example</title>
      </head>
      <body style="background-color: black">
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="./bundle.js"></script>
      </body>
    </html>
    `;
}

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
