import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <main>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/productList">About</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        {routes.map((route) => {
          if (route.exact) {
            return <Route key={route.path} exact path={route.path} component={route.component} />;
          }
          return <Route key={route.path} path={route.path} component={route.component} />;
        })}
      </Switch>
    </main>
  );
}

export default App;
