import React from 'react';
import './index.css';
import Header from './Header';
import Hero from './Hero';
import Section from './Section';
import Footer from './Footer';
import FeaturedImage from './FeaturedImage';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Section />
      <FeaturedImage />
      <Footer />
    </div>
  );
}

export default App;