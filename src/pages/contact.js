import React from "react"

import Layout from "../layouts"
import SEO from "../components/seo"
import Footer from "../components/footer"

const ContactPage = () => (
  <div>
      <SEO title="Page two" />
      <main id="contact">
         <h1 class="lg-heading">
            Contact
            <span class="text-secondary">Me</span>
         </h1>
         <h2 class="sm-heading">
            This is how you can reach me...
         </h2>
         <div class="boxes">
            <div>
            <span class="text-secondary">Email: </span> romann.kravets@gmail.com
            </div>
            <div>
            <span class="text-secondary">Phone: </span> (096) 927-17-07
            </div>
            <div>
            <span class="text-secondary">Address: </span> Ternopil
            </div>
          </div>
   </main>
   <Footer/>
  </div>
)

export default ContactPage;
