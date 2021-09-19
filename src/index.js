import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import contactReducer from "./redux/reducers/contactReducer";
import { Provider } from "react-redux";

const store = createStore(contactReducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
