import React from "react"
import PropTypes from "prop-types"
import Transition from '../components/transition'
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import "./index.scss"
import "../scss/typography.scss"

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Transition location={location}>
            <Header siteTitle={data.site.siteMetadata.title} />
            {children}
      </Transition>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
