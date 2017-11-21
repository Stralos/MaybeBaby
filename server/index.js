// @flow
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
import { shouldBeIndexed, ALLOWED_TO_INDEX_URLS } from 'utils/indexing';
import App from 'containers/App';
import data from '../app/placeholderStore';

const app: express$Application = express();

app.use(express.static('dist'));
app.all('*', (request: express$Request, response: express$Response) => {
  const store = createStore(state => state, data);
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
    response.send(
      renderFullPage(
        html,
        store.getState(),
        css,
        shouldBeIndexed(request.baseUrl, ALLOWED_TO_INDEX_URLS),
      ),
    );
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
        ${indexTag}
        ${styleTags}
        <style>
          body, html {
            margin: 0;
            height: 100%;
            min-height: 100%;
            background-color: #333; 
            color: #ccc
          }
        </style>
      </head>
      <body>
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