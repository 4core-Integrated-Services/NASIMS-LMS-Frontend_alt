import React from "react";

const Blog = () => {
  return (
    <section className="blog-one  blog-one__home-two" style={{ 
      marginTop: "-15rem",
      transform: "scale(.88)",
    }}>
      <div className="container">
        <div className="block-title text-center">
          <h2 className="block-title__title">
            Our latest news <br />& articles
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="blog-one__single">
              <div className="blog-one__image">
                <img
                  src="/assets/images/campPhoto.jpg"
                  alt=""
                  style={{
                    width: "100%",
                    height: 307,
                  }}
                />
                <a className="blog-one__plus" href="news-details.html">
                  <i className="kipso-icon-plus-symbol"></i>
                </a>
              </div>
              <div className="blog-one__content text-center">
                <div className="blog-one__meta">
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Posted On Jan 19"
                    href="#"
                  >
                    <i className="fa fa-calendar-alt"></i>
                  </a>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="No Comments"
                    href="#"
                  >
                    <i className="fa fa-comments"></i>
                  </a>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Posted By Admin"
                    href="#"
                  >
                    <i className="fa fa-user"></i>
                  </a>
                </div>
                <h2 className="blog-one__title">
                  <a href="news-details.html">
                    Summer high school journalism camp
                  </a>
                </h2>
                <p className="blog-one__text">
                  Aelltes port lacus quis enim var sed efficitur turpis gilla
                  sed sit amet finibus eros.
                </p>
                <a href="news-details.html" className="blog-one__link">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-one__single">
              <div className="blog-one__image">
                <img
                  src="/assets/images/education.jpg"
                  alt=""
                  style={{
                    width: "100%",
                    height: 307,
                  }}
                />
                <a className="blog-one__plus" href="news-details.html">
                  <i className="kipso-icon-plus-symbol"></i>
                </a>
              </div>
              <div className="blog-one__content text-center">
                <div className="blog-one__meta">
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Posted On Jan 19"
                    href="#"
                  >
                    <i className="fa fa-calendar-alt"></i>
                  </a>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="No Comments"
                    href="#"
                  >
                    <i className="fa fa-comments"></i>
                  </a>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Posted By Admin"
                    href="#"
                  >
                    <i className="fa fa-user"></i>
                  </a>
                </div>
                <h2 className="blog-one__title">
                  <a href="news-details.html">
                    Get a tips to develop a quality education
                  </a>
                </h2>
                <p className="blog-one__text">
                  Aelltes port lacus quis enim var sed efficitur turpis gilla
                  sed sit amet finibus eros.
                </p>
                <a href="news-details.html" className="blog-one__link">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="blog-one__single">
              <div className="blog-one__image">
                <img
                  src="/assets/images/programming.jpg"
                  alt=""
                  style={{
                    width: "100%",
                    height: 307,
                  }}
                />
                <a className="blog-one__plus" href="news-details.html">
                  <i className="kipso-icon-plus-symbol"></i>
                </a>
              </div>
              <div className="blog-one__content text-center">
                <div className="blog-one__meta">
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Posted On Jan 19"
                    href="#"
                  >
                    <i className="fa fa-calendar-alt"></i>
                  </a>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="No Comments"
                    href="#"
                  >
                    <i className="fa fa-comments"></i>
                  </a>
                  <a
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Posted By Admin"
                    href="#"
                  >
                    <i className="fa fa-user"></i>
                  </a>
                </div>
                <h2 className="blog-one__title">
                  <a href="news-details.html">
                    Learn variety of programs and courses
                  </a>
                </h2>
                <p className="blog-one__text">
                  Aelltes port lacus quis enim var sed efficitur turpis gilla
                  sed sit amet finibus eros.
                </p>
                <a href="news-details.html" className="blog-one__link">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
