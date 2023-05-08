import React from 'react';
import './App.css';
import Header from '../src/components/header/Header'
import About from '../src/components/about/About'
import Footer from '../src/components/footer/Footer'
import Faq from '../src/components/faq/Faq'
import Header1 from '../src/components/header/Header1'
// import Nav from './components/nav/Nav'


const App = () => {
  return (
    <>
    {/* <Nav /> */}
    <Header />
    {/* <Header1/> */}
    <About />
    <Faq />
    <Footer />
    </>
  );
}


export default App;
