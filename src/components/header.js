// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

 class Header extends React.Component {
    constructor() {
    super();
    this.state = {
      showMenu: false,
      count: 0
    }
  }
    render() {
      function toggleMenu() {
        // if (!showMenu) {
        //   menuBtn.classList.add('close');
        //   menu.classNameList.add('show');
        //   menuNav.classList.add('show');
        //   menuBranding.classList.add('show');
        //   navItems.forEach(item => item.classList.add('show'));
      
        //   // Set Menu State
        //   this.setState(function(state, props) {
        //     return {
        //       showMenu: state.showMenu = true
        //     }
        //   }
        //   menuBtn.classList.remove('close');
        //   menu.classList.remove('show');
        //   menuNav.classList.remove('show');
        //   menuBranding.classList.remove('show');
        //   navItems.forEach(item => item.classList.remove('show'));
      
        //   // Set Menu State
        //   this.showMenu = false;
        // }
      }
        return(
        <header>
          <div className="menu-btn"onClick={toggleMenu}>
            <div className="btn-line"></div>
            <div className="btn-line"></div>
            <div className="btn-line"></div>
          </div>
          <p>Count: {this.state.count}</p>
            <button onClick={() => this.setState({count: this.state.count + 1})}>+</button>
            <button onClick={() => this.setState({count: this.state.count - 1})}>-</button>
          <nav className="menu">
            <div className="menu-branding">
              <div className="portrait"></div>
            </div>
            <ul className="menu-nav">
              <li className="nav-item current">
                <a href="index.html" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="about.html" className="nav-link">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a href="work.html" className="nav-link">
                  My Work
                </a>
              </li>
              <li className="nav-item">
                <a href="contact.html" className="nav-link">
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
