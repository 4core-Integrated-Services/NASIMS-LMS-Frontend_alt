import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import { FaDesktop } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { HiOutlineMusicNote } from "react-icons/hi";
import { GiPhotoCamera } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { IoFitnessOutline } from "react-icons/io5";



const CourseCat = () => {
  const params = {
    slidesPerView: 5,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    // Responsive breakpoints
    breakpoints: {
      1024: {
        slidesPerView: 5,
      },
      768: {
        slidesPerView: 4,
      },
      640: {
        slidesPerView: 3,
      },
      320: {
        slidesPerView: 2,
      },
    },
  };

  return (
    <section className="course-category-two" style={{ 
      transform: "scale(.9)"
    }}>
      <div className="container text-center">
        <h1
          // style={{
          //   fontSize: "20px",
          //   marginRight: "68rem",
          //   width: "5rem",
          //   textAlign: "right",
          //   fontFamily: "Raleway",
          //   marginBottom: "3rem",
          //   fontWeight: "600",
          // }}
          style={{
            fontSize: "25px",
            marginBottom: "1rem",
            textAlign: "start",
          }}
        >
          Career Paths
        </h1>
        <div className="inner-container">
          <div className="course-category-two__carousel">
            <Swiper {...params}>
              <div className="item">
                <div className="course-category-two__single color-1">
                  <div className="course-category-two__icon">
                    <FaDesktop />
                  </div>
                  <h3 className="course-category-two__title">
                    <a href="#">Software engineer</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="course-category-two__single color-2">
                  <div className="course-category-two__icon">
                    <BsCodeSlash />
                  </div>
                  <h3 className="course-category-two__title">
                    <a href="#">Developer</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="course-category-two__single color-3">
                  <div className="course-category-two__icon">
                    <HiOutlineMusicNote />
                  </div>
                  <h3 className="course-category-two__title">
                    <a href="#">Music producer</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="course-category-two__single color-4">
                  <div className="course-category-two__icon">
                    <GiPhotoCamera />
                  </div>
                  <h3 className="course-category-two__title">
                    <a href="#">Photographer</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="course-category-two__single color-5">
                  <div className="course-category-two__icon">
                    <GiReceiveMoney />
                  </div>
                  <h3 className="course-category-two__title">
                    <a href="#">Digital marketer</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="course-category-two__single color-6">
                  <div className="course-category-two__icon">
                    <IoFitnessOutline />
                  </div>
                  <h3 className="course-category-two__title">
                    <a href="#">Fitness guru</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="course-category-two__single color-1">
                  <div className="course-category-two__icon">
                    <FaDesktop />
                  </div>
                  <h3 className="course-category-two__title">
                    <a href="#">Software engineer</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="course-category-two__single color-2">
                  <div className="course-category-two__icon">
                    <BsCodeSlash />
                  </div>
                  <h3 className="course-category-two__title">
                    <a href="#">Developer</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="course-category-two__single color-3">
                  <div className="course-category-two__icon">
                    <HiOutlineMusicNote />
                  </div>
                  <h3 className="course-category-two__title">
                    <a href="#">Music producer</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="course-category-two__single color-4">
                  <div className="course-category-two__icon">
                    <GiPhotoCamera />
                  </div>
                  <h3 className="course-category-two__title">
                    <a href="#">Photographer</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="course-category-two__single color-1">
                  <div className="course-category-two__icon">
                    <FaDesktop />
                  </div>
                  <h3 className="course-category-two__title">
                    <a href="#">Software engineer</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="course-category-two__single color-2">
                  <div className="course-category-two__icon">
                    <BsCodeSlash />
                  </div>
                  <h3 className="course-category-two__title">
                    <a href="#">Developer</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="course-category-two__single color-3">
                  <div className="course-category-two__icon">
                    <HiOutlineMusicNote />
                  </div>
                  <h3 className="course-category-two__title">
                    <a href="#">Music producer</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="course-category-two__single color-4">
                  <div className="course-category-two__icon">
                    <GiPhotoCamera />
                  </div>
                  <h3 className="course-category-two__title">
                    <a href="#">Photographer</a>
                  </h3>
                </div>
              </div>
              <div className="item">
                <div className="course-category-two__single color-5">
                  <div className="course-category-two__icon">
                    <GiReceiveMoney />
                  </div>
                  <h3 className="course-category-two__title">
                    <a href="#">Digital marketer</a>
                  </h3>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseCat;
