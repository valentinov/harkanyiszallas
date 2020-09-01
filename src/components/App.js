import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import RegisterPage from './RegisterPage';
import Footer from './Footer';

function App() {
  return (
    <Router>

      <Header />
      <Switch>
      <Route path='/register'>
          <RegisterPage />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      <Footer />

    </Router>
  );
}

export default App;
