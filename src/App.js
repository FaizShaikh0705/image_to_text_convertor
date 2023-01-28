import React from 'react';
import './App.css';
import Header from '../src/components/header/Header'
import About from '../src/components/about/About'
import Nav from '../src/components/nav/Nav'
import Footer from '../src/components/footer/Footer'


const App = () => {
  return (
    <>
    <Nav />
    <Header />
    <About />
    <Footer />
    </>
  );
}


export default App;
