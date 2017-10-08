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
    <StaticRouter location={request.url} context={context}>
      <Provider store={store}>
        <ThemeProvider theme={{ color: 'white' }}>
          <App />
        </ThemeProvider>
      </Provider>
    </StaticRouter>,
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

function renderFullPage(html, preloadedState, styleTags, canIndex = true) {
  const indexTag = canIndex ?
    '<meta name="robots" content="noindex, nofollow">' :
    '';

  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
        ${styleTags}
        ${indexTag}
      </head>
      <body style="background-color: black">
        <div id="root">${html}</div>
        <script>
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
