import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { IoIosMail } from "react-icons/io";
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';




const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main id="home">
    <h1 className="lg-heading">
      Rom
      <span className="text-secondary">Kravets</span>
    </h1>
    <h2 className="sm-heading">
      Web Developer, Programmer, Designer & Entrepreneur
    </h2>
    <div className="icons">
      <a href="#!">
        <i className="fab fa-twitter fa-2x"> <FaFacebookF /></i>
      </a>
      <a href="#!">
        <i className="fab fa-facebook fa-2x"><IoIosMail /></i>
      </a>
      <a href="#!">
        <i className="fab fa-linkedin fa-2x"><FaGithub /></i>
      </a>
      <a href="#!">
        <i className="fab fa-github fa-2x">< FaLinkedinIn  /></i>
      </a>
    </div>
    </main>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
  </Layout>
)

export default IndexPage
