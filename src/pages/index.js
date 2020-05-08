import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import About from '../components/About';
import Contact from '../components/Contact';

import '../css/style.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="page" id="top">
      <h1>Hi, my name is Brandon Wong</h1>
    </div>
    <About />
    <Contact />
  </Layout>
)

export default IndexPage
