import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe/aboutMe';
import Header from './components/Header/header';
const App = () => {
  return (
    <div className='App'>
      <Header />
      <AboutMe />
    </div>
  );
};

export default App;
