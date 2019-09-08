import React from "react"

import Layout from "../layouts"
import SEO from "../components/seo"
import portrait from "../images/portrait.jpg";
import Footer from "../components/footer"

const AboutPage = () => (
  <div>
      <SEO title="Page two" />
      <main id="about">
    <h1 class="lg-heading">
      About
      <span class="text-secondary">Me</span>
    </h1>
    <h2 class="sm-heading">
      Let me tell you a few things...
    </h2>
    <div class="about-info">
      <img src={portrait} alt="John Doe" class="bio-image"/>

      <div class="bio">
        <h3 class="text-secondary">BIO</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt magni nam nisi quae vitae? Quod molestiae ipsa
          autem natus eum vel ducimus nulla harum voluptatem eligendi! Unde, reiciendis? Praesentium, laborum.</p>
      </div>

      <div class="job job-1">
        <h3>123 Webshop</h3>
        <h6>Full Stack Developer</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis totam enim. Nesciunt porro dolores
          expedita dolor necessitatibus deserunt nemo.</p>
      </div>

      <div class="job job-2">
        <h3>Designers ABC</h3>
        <h6>Front End Developer</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis totam enim. Nesciunt porro dolores
          expedita dolor necessitatibus deserunt nemo.</p>
      </div>

      <div class="job job-3">
        <h3>Webworks</h3>
        <h6>Graphic Designer</h6>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis totam enim. Nesciunt porro dolores
          expedita dolor necessitatibus deserunt nemo.</p>
      </div>
    </div>
  </main>
  <Footer/>
  </div>
)

export default AboutPage;
