import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main id="home">
    <h1 class="lg-heading">
      John
      <span class="text-secondary">Doe</span>
    </h1>
    <h2 class="sm-heading">
      Web Developer, Programmer, Designer & Entrepreneur
    </h2>
    <div class="icons">
      <a href="#!">
        <i class="fab fa-twitter fa-2x"></i>
      </a>
      <a href="#!">
        <i class="fab fa-facebook fa-2x"></i>
      </a>
      <a href="#!">
        <i class="fab fa-linkedin fa-2x"></i>
      </a>
      <a href="#!">
        <i class="fab fa-github fa-2x"></i>
      </a>
    </div>
    </main>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to</Link>
  </Layout>
)

export default IndexPage
