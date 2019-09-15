import React from "react"
import FullpageWrapper from "../components/fullpageWrapper";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"

const WorkPage = () => (
  <Layout>
    <SEO title="Page two" />
    <main id="work" className="">
      <FullpageWrapper/>
    </main>
  <Footer/>
  </Layout>
)

export default WorkPage;