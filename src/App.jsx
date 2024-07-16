import React from 'react';
import './index.css';
import Header from './Header';
import Hero from './Hero';
import Section from './Section';
import FeaturedImage from './FeaturedImage';
import About from './About';
import Inquiry from './Inquiry';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Section/>
      <FeaturedImage/>
      <About/>
      <Inquiry/>
      <Footer />
    </div>
  );
}

export default App;