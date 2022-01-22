import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import { ReactQueryProvider } from './providers';

import { Provider } from "react-redux";
import { store } from "./store";

import { GlobalStyle } from "./styles/global";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <ReactQueryProvider>
        <App />
      </ReactQueryProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
