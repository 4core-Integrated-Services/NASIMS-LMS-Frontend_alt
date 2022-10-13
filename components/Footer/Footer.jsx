import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
  function scrollTop() {
    window.scrollTo(0, 0);
  }
  return (
    <div>
      <footer className="site-footer">
        <div className="site-footer__upper">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-sm-12">
                <div className="footer-widget footer-widget__contact">
                  <h2 className="footer-widget__title">Resources</h2>
                  <ul className="list-unstyled footer-widget__course-list">
                    <li>
                      <h2>
                        <a href="#">Course materials</a>
                      </h2>
                    </li>
                    <li>
                      <h2>
                        <a href="#">Maximize Your learning experience</a>
                      </h2>
                    </li>
                    <li>
                      <h2>
                        <a href="#">How take a course</a>
                      </h2>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-sm-12">
                <div className="footer-widget footer-widget__link">
                  <h2 className="footer-widget__title">Explore</h2>
                  <div className="footer-widget__link-wrap">
                    <ul className="list-unstyled footer-widget__link-list">
                      <li>
                        <a href="/about">About</a>
                      </li>
                      <li>
                        <a href="#">Overview</a>
                      </li>
                      <li>
                        <a href="#">Instructors</a>
                      </li>
                      <li>
                        <a href="#">Our News</a>
                      </li>
                    </ul>
                    <ul className="list-unstyled footer-widget__link-list">
                      <li>
                        <a href="#">Help </a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">Our Community</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-sm-12">
                <div className="footer-widget footer-widget__contact">
                  <h2 className="footer-widget__title">Get Help</h2>
                  <ul className="list-unstyled footer-widget__course-list">
                    <li>
                      <h2>
                        <a href="#">Contact</a>
                      </h2>
                    </li>
                    <li>
                      <h2>
                        <a href="#">HotLine</a>
                      </h2>
                    </li>
                    <li>
                      <h2>
                        <a href="#">Email</a>
                      </h2>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-sm-12">
                <div className="footer-widget footer-widget__about">
                  <h2 className="footer-widget__title">About</h2>
                  <p className="footer-widget__text">
                    Lorem ipsum dolor sit ametcon, sectetur adipiscing elit.
                    Phasellus vehic sagittis euismod.
                  </p>
                  <div className="footer-widget__btn-block">
                    <a href="#" className="thm-btn">
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="container">
            <p className="site-footer__copy">
              &copy; Copyright 2022 by{" "}
              <a href="https://4coretech.com/">FourCore Integrated Services</a>
            </p>
            <div className="site-footer__social">
              <div
                onClick={scrollTop}
                className="scroll-to-target site-footer__scroll-top"
              >
                <AiOutlineArrowUp />
              </div>

              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fab fa-pinterest-p"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="search-popup">
        <div className="search-popup__overlay custom-cursor__overlay search-overlay"></div>
        <div className="search-popup__inner">
          <form action="#" className="search-popup__form">
            <input
              type="text"
              name="search"
              placeholder="Type here to Search...."
            />
            <button type="submit">
              <i className="kipso-icon-magnifying-glass"></i>
            </button>
            <div className="cancel">
              <i className="fas fa-times-circle"></i>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Footer;
