import * as React from "react";
import { Route } from "react-router-dom";
import MyLearning from "./components/myLearning";

function Routes() {
    return (
        <div className="app">
           <Route exact path="/" component={MyLearning} />
          <div>
            Test
          </div>
        </div>
    );
}

export default Routes;