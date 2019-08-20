import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main id="home">
    <h1 className="lg-heading">
      John
      <span className="text-secondary">Doe</span>
    </h1>
    <h2 className="sm-heading">
      Web Developer, Programmer, Designer & Entrepreneur
    </h2>
    <div className="icons">
      <a href="#!">
        <i className="fab fa-twitter fa-2x"></i>
      </a>
      <a href="#!">
        <i className="fab fa-facebook fa-2x"></i>
      </a>
      <a href="#!">
        <i className="fab fa-linkedin fa-2x"></i>
      </a>
      <a href="#!">
        <i className="fab fa-github fa-2x"></i>
      </a>
    </div>
    </main>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
  </Layout>
)

export default IndexPage
