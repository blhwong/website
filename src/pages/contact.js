import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <div className="links">
      <a href="https://github.com/blhwong" target="_blank noopener noreferrer">GitHub</a>
      <a href="https://linkedin.com/in/blhwong" target="_blank noopener noreferrer">LinkedIn</a>
      <a href="https://angel.co/u/blhwong" target="_blank noopener noreferrer">Angel</a>
    </div>
  </Layout>
)

export default Contact
