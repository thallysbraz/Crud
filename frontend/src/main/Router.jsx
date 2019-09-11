import React from "react";
import { Switch, Route, Redirect } from "react-router";

import Home from "../components/home/Home";
import UserCrud from "../components/user/UserCrud";

export default props => (
  <Switch>
    <Route exact path="/" component={Home} /> {/* Rotas de usuário /home */}
    <Route exact path="/users" component={UserCrud} /> {/* Rota /user */}
    <Redirect from="*" to="/" />
  </Switch>
);
