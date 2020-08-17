import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./core/Home";

const MainRouter = () => {
  return (
    <div>
      <switch>
        <Route exact path='/' component={Home} />
      </switch>
    </div>
  );
};

export default MainRouter;
