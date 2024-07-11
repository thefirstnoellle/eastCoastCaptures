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
      <Section>newfoundland lifestyle photographer</Section>
      <FeaturedImage />
      <Section>About</Section>
      <Footer />
    </div>
  );
}

export default App;