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
import App from 'containers/App';
import renderFullPage from './utils/renderFullPage';
import data from '../app/placeholderStore';

const app: express$Application = express();

app.use(express.static('dist'));
app.get('/*', (request: express$Request, response: express$Response) => {
  const store = createStore(state => state, data);
  const theme = {
    color: 'white',
  };
  const context = {};
  const sheet = new ServerStyleSheet();
  const application = sheet.collectStyles(
    <StaticRouter location={request.url} context={context}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
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
        theme,
      ),
    );
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
