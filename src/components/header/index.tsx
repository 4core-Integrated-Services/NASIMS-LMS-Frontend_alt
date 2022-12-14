import { InputAdornment, Link, TextField } from "@mui/material";
import styles from "./styles.module.scss";
import { AuthenticatedUser } from "../../mock";
import { useState } from "react";
import { AppNavigation } from "../../mock/app_header";
import { AiOutlineSearch } from "react-icons/ai";

// export function AppHeader() {
//   const [searchText, setSearchText] = useState<string>('');
//   return (
//     <header className={styles.AppHeader}>
//       <div className={styles.AppHeaderContainer}>
//         <span
//           className={styles.AppLogo}
//           style={{
//             backgroundImage: `url(/assets/images/N-Power-Logo-removebg.png)`
//           }}
//         />
//         <div className={styles.links}>
//           {AppNavigation.map((appNavigator) => {
//             return (
//               <Link
//                 href={`/${appNavigator.slug ?? appNavigator.name}`}
//                 key={appNavigator.name}
//                 className={`${styles.link} ${
//                   appNavigator.lists == null ? styles.withEffect : ''
//                 }`}
//               >
//                 {appNavigator.name}
//               </Link>
//             );
//           })}
//         </div>
//         <TextField
//           value={searchText}
//           variant={'outlined'}
//           className={styles.searchInputBox}
//           color="success"
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position={'start'}>
//                 {/*<BiSearchAlt />*/}
//               </InputAdornment>
//             )
//           }}
//           placeholder={'Search our library courses'}
//           onChange={({ target: { value } }) => {
//             setSearchText(value);
//           }}
//         />
//         <div className={styles.UserProfile}>
//           <p className={styles.UserName}>
//             {`Hi ${AuthenticatedUser.firstName}`}
//           </p>
//           <span
//             className={styles.UserImage}
//             style={{ backgroundImage: `url(${AuthenticatedUser.profilePic})` }}
//           />
//         </div>
//       </div>
//     </header>
//   );
// }

// import React, { Component , useState} from "react";
// import Link from "next/link";

// class AppHeader extends Component {
//   constructor() {
//     super();

//   }
//   componentDidMount() {
//     window.addEventListener("scroll", this.handleScroll);

//     //Mobile Menu
//     this.mobileMenu();
//   }

//   componentWillUnmount() {
//     window.removeEventListener("scroll", this.handleScroll);
//   }

//   handleScroll = () => {
//     if (window.scrollY > 70) {
//       setSticky
//     } else if (window.scrollY < 70) {
//       this.setState({
//         sticky: false,
//       });
//     }
//   };

//   mobileMenu = () => {
//     //Mobile Menu Toggle
//     let mainNavToggler = document.querySelector(".menu-toggler");
//     let mainNav = document.querySelector(".main-navigation");

//     mainNavToggler.addEventListener("click", function () {
//       mainNav.style.display =
//         mainNav.style.display != "block" ? "block" : "none";
//     });
//   };
//   render() {
//     return (
//       <header className="site-header site-header__header-two ">
//         <nav
//           className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${
//             this.state.sticky ? "stricked-menu stricky-fixed" : ""
//           }`}
//         >
//           <div className="container clearfix">
//             <div className="logo-box clearfix">
//               <Link href="/">
//                 <a className="navbar-brand">
//                   <img
//                     src="/assets/images/N-Power-Logo-removebg.png"
//                     className="main-logo"
//                     style={{
//                       width: 88,
//                       height: 80,
//                       backgroundPosition: "center",
//                       backgroundSize: "cover",
//                       marginTop: "1rem",
//                     }}
//                     alt="Awesome Image"
//                   />
//                 </a>
//               </Link>
//               <button className="menu-toggler" data-target=".main-navigation">
//                 <span className="kipso-icon-menu"></span>
//               </button>
//             </div>
//             <div className="main-navigation">
//               <ul className=" navigation-box">
//                 {/* <li className="current">
//                   <Link href="/">
//                     <a>Home</a>
//                   </Link>
//                 </li> */}
//                 {/* //categories */}
//                 <li>
//                   <Link href="/categories">
//                     <a>Categories</a>
//                   </Link>
//                   <ul className="sub-menu">
//                     <li>
//                       <Link href="/teachers">
//                         <a>Development</a>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/teachers">
//                         <a>Business</a>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/teachers">
//                         <a>Finance and accounting</a>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/teachers">
//                         <a>IT & software</a>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/teachers">
//                         <a>Office Productivity</a>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/teachers">
//                         <a>Personal development</a>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/teachers">
//                         <a>Design</a>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/teachers">
//                         <a>Marketing</a>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/teachers">
//                         <a>Lifestyle</a>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/teachers">
//                         <a>Photography</a>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/teachers">
//                         <a>Health & Fitness</a>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/teacher-details">
//                         <a>Music</a>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/become-teacher">
//                         <a>Teaching & Academics</a>
//                       </Link>
//                     </li>
//                   </ul>
//                 </li>
//                 {/* <li>
//                   <Link href="/courses">
//                     <a>Courses</a>
//                   </Link>
//                 </li> */}
//                 <li>
//                   <Link href="/instructor">
//                     <a>Instructors</a>
//                   </Link>
//                 </li>
//                 {/* <li>
//                   <Link href="/news">
//                     <a>News</a>
//                   </Link>
//                 </li> */}
//               </ul>
//             </div>
//             <div className="right-side-box search-parent">
//               <div className="search">
//                 <form action="courses/search" className="search--form">
//                   <input type="hidden" name="src" value="src" />
//                   <input
//                     type="text"
//                     name="search"
//                     autoComplete="off"
//                     placeholder="Search for anything"
//                     aria-expanded="false"
//                     aria-haspopup="true"
//                     role="combobox"
//                     className="search--form--bar"
//                   />
//                   <button type="submit" className="search--form--btn">
//                     <AiOutlineSearch />
//                   </button>
//                 </form>
//               </div>
//               <div className="user">
//                 <Link href="/user">
//                   <p className="user-name">Hi, Wisdom</p>
//                 </Link>
//                 <Link href="/user">
//                   <img
//                     className="user-image"
//                     src="/assets/images/anonymous.jpeg"
//                     alt="user"
//                   />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </nav>
//         <div className="site-header__decor">
//           <div className="site-header__decor-row">
//             <div className="site-header__decor-single">
//               <div className="site-header__decor-inner-1"></div>
//             </div>
//             <div className="site-header__decor-single">
//               <div className="site-header__decor-inner-2"></div>
//             </div>
//             <div className="site-header__decor-single">
//               <div className="site-header__decor-inner-3"></div>
//             </div>
//           </div>
//         </div>
//       </header>
//     );
//   }
// }

export function AppHeader() {
  const [sticky, setSticky] = useState(false);

  return (
    <header className="site-header site-header__header-two ">
      <nav
        className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${
          sticky ? "stricked-menu stricky-fixed" : ""
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
                    width: 88,
                    height: 80,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    marginTop: "1rem",
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
              {/* <li className="current">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li> */}
              {/* //categories */}
              <li>
                <Link href="/categories">
                  <a>Categories</a>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link href="/teachers">
                      <a>Development</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/teachers">
                      <a>Business</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/teachers">
                      <a>Finance and accounting</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/teachers">
                      <a>IT & software</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/teachers">
                      <a>Office Productivity</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/teachers">
                      <a>Personal development</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/teachers">
                      <a>Design</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/teachers">
                      <a>Marketing</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/teachers">
                      <a>Lifestyle</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/teachers">
                      <a>Photography</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/teachers">
                      <a>Health & Fitness</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/teacher-details">
                      <a>Music</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/become-teacher">
                      <a>Teaching & Academics</a>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* <li>
                  <Link href="/courses">
                    <a>Courses</a>
                  </Link>
                </li> */}
              <li>
                <Link href="/instructor">
                  <a>Instructors</a>
                </Link>
              </li>
              {/* <li>
                  <Link href="/news">
                    <a>News</a>
                  </Link>
                </li> */}
            </ul>
          </div>
          <div className="right-side-box search-parent">
            <div className="search">
              <form action="courses/search" className="search--form">
                <input type="hidden" name="src" value="src" />
                <input
                  type="text"
                  name="search"
                  autoComplete="off"
                  placeholder="Search for anything"
                  aria-expanded="false"
                  aria-haspopup="true"
                  role="combobox"
                  className="search--form--bar"
                />
                <button type="submit" className="search--form--btn">
                  <AiOutlineSearch />
                </button>
              </form>
            </div>
            <div className="user">
              <Link href="/user">
                <p className="user-name">Hi, Wisdom</p>
              </Link>
              <Link href="/user">
                <img
                  className="user-image"
                  src="/assets/images/anonymous.jpeg"
                  alt="user"
                />
              </Link>
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
