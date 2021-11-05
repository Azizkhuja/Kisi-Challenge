import React, { useState } from "react";
import "../App.css";
import GroupLists from "./GroupLists";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SingleListItem from "./SingleListItem";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <GroupLists />
          </Route>
          <Route exact path="/:id">
            <SingleListItem />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
