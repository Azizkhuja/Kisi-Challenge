import React from "react";
import "../App.css";
import GroupLists from "./GroupLists";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LockListItem from "./LockListItem";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <GroupLists />
          </Route>
          <Route exact path="/:id">
            <LockListItem />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
