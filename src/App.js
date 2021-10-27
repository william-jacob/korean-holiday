import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/detail" component={DetailPage} />
      <Route
        render={() => {
          <>
            <h2>Not Found :(</h2>
          </>;
        }}
      />
    </Switch>
  );
};

export default App;

// response:
//  body:
//    items:
//      item: Array(18)
//        0:
//          dateKind: "01"
//          dateName: "1월1일"
//          isHoliday: "Y"
//          locdate: 20210101
//          seq: 1

//dateName, locdate
