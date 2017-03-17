import React, { Component } from 'react';

import styles from './App.css';

import Navigation from './navigation/Navigation.container';
import Heading from './heading/Heading.container';
import DownloadSection from './download/DownloadSection.container';
import FeaturesSection from './features/FeaturesSection.container';
import CtaSection from './cta/CtaSection.container';
import ContactSection from './contact/ContactSection.container';
import Footer from './footer/Footer.container';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Heading />
        <DownloadSection />
        <FeaturesSection />
        <CtaSection />
        <ContactSection />
        <Footer />
      </div>
    );
  }
}

export default App;
