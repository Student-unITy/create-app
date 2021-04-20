import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/page';
import s from './components/page/s';

import Navbar from './components/menu/Navbar';
import Dropdown from './components/menu/Dropdown';

import Footer from './components/global/Footer';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  return (
    <>
      <div className="container mx-auto bg-white">
        <Navbar toggle={toggle} />
      </div>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/s' exact component={s} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;