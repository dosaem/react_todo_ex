import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Login from "./components/login";
import List from "./components/list";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/list" exact component={List} />
        <Route path="/sign-in/" component={Login} />
      </Router>
    </Provider>
  );
}

export default App;
