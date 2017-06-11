import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Index from './index.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
const app = express();

app.use(express.static('dist'));
app.get('/', (request, response) => {
  const props = {
    greeting: "Hello World!",
    date: 1
  }
  const store = createStore((state) => {return state}, props)
  const html = renderToString(
    <Provider store={store}>
      <Index/>
    </Provider>
  )

  response.send(html);
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});
