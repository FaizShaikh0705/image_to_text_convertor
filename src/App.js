import React from 'react';
import './App.css';
import Header from '../src/components/header/Header'
import About from '../src/components/about/About'
import Footer from '../src/components/footer/Footer'
import Faq from '../src/components/faq/Faq'
// import Nav from './components/nav/Nav'


const App = () => {
  return (
    <>
    {/* <Nav /> */}
    <Header />
    <About />
    <Faq />
    <Footer />
    </>
  );
}


export default App;
