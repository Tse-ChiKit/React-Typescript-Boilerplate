import React from 'react';
import Home from 'Page/Home';
import ProductList from 'Page/ProductList';

import { Switch, Route, Link } from 'react-router-dom';

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
        <Route path="/" exact component={Home} />
        <Route path="/productList" component={ProductList} />
      </Switch>
    </main>
  );
}

export default App;
