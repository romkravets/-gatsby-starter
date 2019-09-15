import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/footer"

const ContactPage = () => (
  <Layout>
      <SEO title="Contact" />
      <main id="contact" className="main-block">
         <h1 className="lg-heading">
            Contact
            <span className="text-secondary">Me</span>
         </h1>
         <h2 className="sm-heading">
            This is how you can reach me...
         </h2>
         <div>
        <div className="page">
          <label className="field a-field a-field_a1">
            <input className="field__input a-field__input" placeholder="e.g. Stanislav" required />
            <span className="a-field__label-wrap">
              <span className="a-field__label">First name</span>
            </span>
          </label>
          <label className="field a-field a-field_a2">
            <input className="field__input a-field__input" placeholder="e.g. Melnikov" required />
            <span className="a-field__label-wrap">
              <span className="a-field__label">Last name</span>
            </span>
          </label>
          <label className="field a-field a-field_a3">
            <input className="field__input a-field__input" placeholder="e.g. melnik909@ya.ru" required />
            <span className="a-field__label-wrap">
              <span className="a-field__label">E-mail</span>
            </span>
          </label>
        </div>
      </div>
   </main>
   <Footer/>
  </Layout>
)

export default ContactPage;
