import React from "react"

import Layout from "../layouts"
import SEO from "../components/seo"
import Footer from "../components/footer"

import project1 from "../images/projects/project1.jpg";
import project2 from "../images/projects/project2.jpg";
import project3 from "../images/projects/project3.jpg";
import project4 from "../images/projects/project4.jpg";
import project5 from "../images/projects/project5.jpg";

const WorkPage = () => (
  <div>
    <SEO title="Page two" />
    <main id="work">
    <h1 class="lg-heading">
      My
      <span class="text-secondary">Work</span>
    </h1>
    <h2 class="sm-heading">
      Check out some of my projects...
    </h2>
    <div class="projects">
      <div class="item">
        <a href="#!">
          <img src={project1} alt="Project"/>
        </a>
        <a href="#" class="btn-light">
          <i class="fas fa-eye"></i> Project
        </a>
        <a href="#" class="btn-dark">
          <i class="fab fa-github"></i> Github
        </a>
      </div>
      <div class="item">
        <a href="#!">
          <img src={project2} alt="Project"/>
        </a>
        <a href="#" class="btn-light">
          <i class="fas fa-eye"></i> Project
        </a>
        <a href="#" class="btn-dark">
          <i class="fab fa-github"></i> Github
        </a>
      </div>
      <div class="item">
        <a href="#!">
          <img src={project3} alt="Project"/>
        </a>
        <a href="#" class="btn-light">
          <i class="fas fa-eye"></i> Project
        </a>
        <a href="#" class="btn-dark">
          <i class="fab fa-github"></i> Github
        </a>
      </div>
      <div class="item">
        <a href="#!">
          <img src={project4} alt="Project"/>
        </a>
        <a href="#" class="btn-light">
          <i class="fas fa-eye"></i> Project
        </a>
        <a href="#" class="btn-dark">
          <i class="fab fa-github"></i> Github
        </a>
      </div>
      <div class="item">
        <a href="#!">
          <img src={project5} alt="Project"/>
        </a>
        <a href="#" class="btn-light">
          <i class="fas fa-eye"></i> Project
        </a>
        <a href="#" class="btn-dark">
          <i class="fab fa-github"></i> Github
        </a>
      </div>
    </div>
  </main>
  <Footer/>
  </div>
)

export default WorkPage;