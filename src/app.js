import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";

import routes from "./routes";
import configureStore from "./store/configureStore";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

const store = configureStore({
  notifications: [],
});
render((
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>
), document.getElementById("app"));
