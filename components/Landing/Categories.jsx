import React from "react";
import Link from "next/link";

function Categories() {
  return (
    <div className="parent" style={{
      transform: "scale(.9)"
    }}>
      <div className="container">
        <h1 className="heading">Featured topics by category</h1>
        <div className="categoriesflex">
          <div className="categoriesflex--item">
            <h1 className="categoriesflex--item--heading">Development</h1>
            <div className="categoriesflex--item--items">
              <Link href="#">
                <a className="categoriesflex--item--items--link">Python</a>
              </Link>
              <p className="categoriesflex--item--items--text">
                32,424 students
              </p>
            </div>
            <div className="categoriesflex--item--items">
              <Link href="#">
                <a className="categoriesflex--item--items--link">
                  Web development
                </a>
              </Link>
              <p className="categoriesflex--item--items--text">
                42,424 students
              </p>
            </div>
            <div className="categoriesflex--item--items">
              <Link href="#">
                <a className="categoriesflex--item--items--link">
                  Machine Learning
                </a>
              </Link>
              <p className="categoriesflex--item--items--text">
                82,424 students
              </p>
            </div>
            <div className="categoriesflex--item--items">
              <Link href="#">
                <a className="categoriesflex--item--items--link">
                  AI development
                </a>
              </Link>
              <p className="categoriesflex--item--items--text">
                32,444 students
              </p>
            </div>
          </div>

          {/* //second */}
          <div className="categoriesflex--item">
            <h1 className="categoriesflex--item--heading">Business</h1>
            <div className="categoriesflex--item--items">
              <Link href="#">
                <a className="categoriesflex--item--items--link">
                  Financial Analysis
                </a>
              </Link>
              <p className="categoriesflex--item--items--text">
                42,624 students
              </p>
            </div>
            <div className="categoriesflex--item--items">
              <Link href="#">
                <a className="categoriesflex--item--items--link">PMP</a>
              </Link>
              <p className="categoriesflex--item--items--text">
                12,324 students
              </p>
            </div>
            <div className="categoriesflex--item--items">
              <Link href="#">
                <a className="categoriesflex--item--items--link">
                  Affliate Marketing
                </a>
              </Link>
              <p className="categoriesflex--item--items--text">
                32,524 students
              </p>
            </div>
            <div className="categoriesflex--item--items">
              <Link href="#">
                <a className="categoriesflex--item--items--link">
                  Marketing Strategies
                </a>
              </Link>
              <p className="categoriesflex--item--items--text">
                32,124 students
              </p>
            </div>
          </div>
          {/* //Third */}
          <div className="categoriesflex--item">
            <h1 className="categoriesflex--item--heading">IT and Software</h1>
            <div className="categoriesflex--item--items">
              <Link href="#">
                <a className="categoriesflex--item--items--link">
                  AWS Certification
                </a>
              </Link>
              <p className="categoriesflex--item--items--text">
                43,424 students
              </p>
            </div>
            <div className="categoriesflex--item--items">
              <Link href="#">
                <a className="categoriesflex--item--items--link">
                  Ethical Hacking
                </a>
              </Link>
              <p className="categoriesflex--item--items--text">
                54,424 students
              </p>
            </div>
            <div className="categoriesflex--item--items">
              <Link href="#">
                <a className="categoriesflex--item--items--link">
                  Cyber Security
                </a>
              </Link>
              <p className="categoriesflex--item--items--text">
                22,424 students
              </p>
            </div>
            <div className="categoriesflex--item--items">
              <Link href="#">
                <a className="categoriesflex--item--items--link">
                  Penatration Testing
                </a>
              </Link>
              <p className="categoriesflex--item--items--text">
                32,724 students
              </p>
            </div>
          </div>
          {/* //Fourth */}
          <div className="categoriesflex--item">
            <h1 className="categoriesflex--item--heading">Design</h1>
            <div className="categoriesflex--item--items">
              <Link href="#">
                <a className="categoriesflex--item--items--link">Photoshop</a>
              </Link>
              <p className="categoriesflex--item--items--text">
                45,224 students
              </p>
            </div>
            <div className="categoriesflex--item--items">
              <Link href="#">
                <a className="categoriesflex--item--items--link">
                  Graphics Design
                </a>
              </Link>
              <p className="categoriesflex--item--items--text">
                32,454 students
              </p>
            </div>
            <div className="categoriesflex--item--items">
              <Link href="#">
                <a className="categoriesflex--item--items--link">Drawing</a>
              </Link>
              <p className="categoriesflex--item--items--text">
                92,324 students
              </p>
            </div>
            <div className="categoriesflex--item--items">
              <Link href="#">
                <a className="categoriesflex--item--items--link">UI/UX</a>
              </Link>
              <p className="categoriesflex--item--items--text">
                12,424 students
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
