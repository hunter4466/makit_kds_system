import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';
import Orders from './components/Orders';
import Recovery from './components/Recovery';

const App = () => {
  const dateTime = new Date();

  return (
    <Router>
      <div className="navigation_bar">
        <NavLink activeClassName="selected_link" className="unselected_link" to="/orders">Órdenes</NavLink>
        <NavLink activeClassName="selected_link" className="unselected_link" to="/recovery">Recuperar</NavLink>
        <h1>{dateTime.getDate()}</h1>
      </div>
      <Switch>
        <Route exact path="/">
          <Redirect to="/orders" />
        </Route>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/recovery">
          <Recovery />
        </Route>
      </Switch>
    </Router>
  );
};
export default App;
