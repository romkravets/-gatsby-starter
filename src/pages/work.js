import React from "react"
import FullpageWrapper from "../components/fullpageWrapper";
import SEO from "../components/seo"
import Footer from "../components/footer"

const WorkPage = () => (
  <div>
    <SEO title="Page two" />
    <main id="work" className="">
      <FullpageWrapper/>
    </main>
  <Footer/>
  </div>
)

export default WorkPage;