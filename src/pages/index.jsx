import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Top from '../components/Top';
import About from '../components/About';
import Contact from '../components/Contact';

import '../css/style.scss';

function Index() {
  return (
    <Layout>
      <SEO title="Home" />
      <Top />
      <About />
      <Contact />
    </Layout>
  );
}

export default Index;
