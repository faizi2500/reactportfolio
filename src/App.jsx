import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experiece from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Testimonial from './components/testimonial/Testimonial';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Blog from './components/blog/Blog';


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experiece />
      <Blog />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />

    </>
  )
}

export default App