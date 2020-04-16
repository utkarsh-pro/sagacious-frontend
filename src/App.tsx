import React from 'react';
import Classes from './App.module.css';
import Navbar from './components/Navbar';
import Landing from './pages/Landing'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className={Classes.App}>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
