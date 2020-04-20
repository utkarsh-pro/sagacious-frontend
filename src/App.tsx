import React from 'react';
import Classes from './App.module.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className={Classes.App}>
      <Navbar />
      <main className={Classes.main}>
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
