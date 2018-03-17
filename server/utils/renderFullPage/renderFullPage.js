// @flow
import { Helmet } from 'react-helmet';

export default function renderFullPage(
  html: string,
  preloadedState: Object,
  styleTags: string,
  theme: Object,
) {
  const helmet = Helmet.renderStatic();
  return `
    <!doctype html>
    <html>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${styleTags}
        <style>
          @import url('https://fonts.googleapis.com/css?family=Gentium+Basic:400,400i,700|Marcellus+SC&subset=latin-ext');      
          @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,400i,700');
        </style>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          window.__PRELOADED_THEME__ = ${JSON.stringify(theme).replace(/</g, '\\u003c')}
        </script>
        <script src="./app.bundle.js"></script>
      </body>
    </html>
    `;
}
