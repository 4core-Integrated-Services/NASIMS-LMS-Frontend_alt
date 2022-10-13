import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      sticky: false,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    //Mobile Menu
    this.mobileMenu();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 70) {
      this.setState({
        sticky: true,
      });
    } else if (window.scrollY < 70) {
      this.setState({
        sticky: false,
      });
    }
  };

  mobileMenu = () => {
    //Mobile Menu Toggle
    let mainNavToggler = document.querySelector(".menu-toggler");
    let mainNav = document.querySelector(".main-navigation");

    mainNavToggler.addEventListener("click", function () {
      mainNav.style.display =
        mainNav.style.display != "block" ? "block" : "none";
    });
  };
  render() {
    return (
      <header className="site-header site-header__header-two ">
        <nav
          className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${
            this.state.sticky ? "stricked-menu stricky-fixed" : ""
          }`}
        >
          <div className="container clearfix">
            <div className="logo-box clearfix">
              <Link href="/">
                <a className="navbar-brand">
                  <img
                    src="/assets/images/N-Power-Logo-removebg.png"
                    className="main-logo"
                    style={{
                      width: 80,
                      height: 80,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                    }}
                    alt="Awesome Image"
                  />
                </a>
              </Link>
              <button className="menu-toggler" data-target=".main-navigation">
                <span className="kipso-icon-menu"></span>
              </button>
            </div>
            <div className="main-navigation">
              <ul className=" navigation-box">
                <li className="current">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/courses">
                    <a>Courses</a>
                  </Link>
                </li>
                <li>
                  <Link href="/instructor">
                    <a>Instructors</a>
                  </Link>
                </li>
                <li>
                  <Link href="/news">
                    <a>News</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="right-side-box">
              <div className="user">
                <p className="user-name">Hi, Wisdom</p>
                <img
                  className="user-image"
                  src="/assets/images/random-guy.jpg"
                  alt="random user"
                />
              </div>
            </div>
          </div>
        </nav>
        <div className="site-header__decor">
          <div className="site-header__decor-row">
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-1"></div>
            </div>
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-2"></div>
            </div>
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-3"></div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default NavBar;
