import React from 'react';
import Classes from './App.module.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';

function App() {
  return (
    <div className={Classes.App}>
      <Navbar />
      <Intro />
    </div>
  );
}

export default App;
