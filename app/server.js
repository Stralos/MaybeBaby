// @flow
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Index from "./index.jsx";
import { StaticRouter } from "react-router-dom";
import { createStore } from 'redux';
import {Provider} from 'react-redux';

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
        <Index {...props}/>
      </StaticRouter>
    </Provider>
  )

  if (context.url) {
    console.log(context);
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
