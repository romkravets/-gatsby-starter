// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
 class Header extends React.Component {
  constructor() {
    super();
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      isOpened: false,
      menu: [],
    };
    this.fetchMenus();
  }
  
  fetchMenus() {
    setTimeout(() => {
      this.setState((oldState) => {
        console.log(this.state);
        const newState = Object.assign({}, oldState);
        newState.menu = [
          {
            title: 'Home',
            href: '/',
          },
          {
            title: 'About',
            href: '//about',
          },
          {
            title: 'Services',
            href: '/services',
          },
        ];
        return newState;
      })
    }, 0);
  }

  toggleMenu() {
    this.setState((oldState) => {
      const newState = Object.assign({}, oldState);
      newState.isOpened = !oldState.isOpened;
      return newState;
    });
  }

  render() {
    let classMain = "main ";

    if (this.state.isOpened) {
      classMain += 'main-active';
    }

    let classSidebar = "menu__sidebar ";

    if (this.state.isOpened) {
      classSidebar += 'menu__open_btn';
    }

    const listItems = this.state.menu.map((item, i) => {
      return <li key={i} className="menu__item">
        <Link className="menu__link" to={item.href}>
          <span>{item.title}</span>
        </Link>
      </li>
    });

    return <div className="menu">
      <div className={classSidebar}>
      <a className="menu__link menu__close_btn" onClick={this.toggleMenu}>×</a>
      <ul className="menu__nav">{listItems}</ul>
    </div>
    <div className={classMain}>
    <button className="menu__btn menu__open_btn" onClick={this.toggleMenu}>☰ React menu</button>
    </div>
    </div>
  }
 } 

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export  default Header
