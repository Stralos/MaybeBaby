// @flow
import React from "react";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import Index from "./index.jsx";

type Props = {
  initialStore: {
    greeting: string,
    date: number
  }
}
const App = (props : Props) => {
  const store = createStore((state) => {return state}, props.initialStore)
  return (
    <Provider store={store}>
      <Index/>
    </Provider>
  )
};

export default App;

