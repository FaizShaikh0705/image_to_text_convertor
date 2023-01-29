import React from 'react';
import './App.css';
import Header from '../src/components/header/Header'
import About from '../src/components/about/About'
import Nav from '../src/components/nav/Nav'
import Footer from '../src/components/footer/Footer'
import Faq from '../src/components/faq/Faq'


const App = () => {
  return (
    <>
    <Nav />
    <Header />
    <About />
    <Faq />
    <Footer />
    </>
  );
}


export default App;
