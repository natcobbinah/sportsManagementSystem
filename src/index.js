import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Admin from "layouts/Admin.js";
import Welcome from "./views/welcome";
import PageFooterContent from "./mainfooter/pageFooterContent";
import Fixtures from "./views/fixtures";
import TeamStatistics from "./views/teamStatistics";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <Admin {...props} />} />
      <Route exact path="/" component={Welcome} />
      <Route exact path="/fixtures" component={Fixtures} />
      <Route exact path="/teamStats" component={TeamStatistics} />
      {/*   <Redirect from="/" to="/admin/dashboard" /> */}
    </Switch>
    <PageFooterContent />
  </BrowserRouter>,
  document.getElementById("root")
);
