import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

 class Header extends React.Component {
    constructor() {
    super();
    this.state = {
      showMenu: false,
      count: 0
    }
  }
    render() {
        return(
        <header>
          <div class="menu-btn">
            <div class="btn-line"></div>
            <div class="btn-line"></div>
            <div class="btn-line"></div>
          </div>
          <p>Count: {this.state.count}</p>
            <button onClick={() => this.setState({count: this.state.count + 1})}>+</button>
            <button onClick={() => this.setState({count: this.state.count - 1})}>-</button>

          <nav class="menu">
            <div class="menu-branding">
              <div class="portrait"></div>
            </div>
            <ul class="menu-nav">
              <li class="nav-item current">
                <a href="index.html" class="nav-link">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a href="about.html" class="nav-link">
                  About Me
                </a>
              </li>
              <li class="nav-item">
                <a href="work.html" class="nav-link">
                  My Work
                </a>
              </li>
              <li class="nav-item">
                <a href="contact.html" class="nav-link">
                  How To Reach Me
                </a>
              </li>
            </ul>
          </nav>
        </header>
    )
  }
 }  

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export  default Header
