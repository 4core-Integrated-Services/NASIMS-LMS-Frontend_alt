import react from "react";
import Link from "next/link";
import { BsPeople } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import { AiFillFolderOpen } from "react-icons/ai";
import { RatingIcon } from "../icons/rating";
import coursesData from "../data/courses";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function PopularCarousel() {
  return (
    <div>
      <h1 className="heading--popular">Explore our most popular courses</h1>
      <div className="popular">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          loopFillGroupWithBlank="true"
          loop="true"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          // centeredSlides="true"
          fadeEffect="true"
          // grabCursor="true"
          slidesPerView={5}
          // navigation
          // pagination={{ clickable: true, dynamicBullets: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className=" container"
        >
          {coursesData.map((course) => {
            return (
              <SwiperSlide key={course?.id}>
                <div className="popular__item">
                  <div className="popular__item--image">
                    <div
                      role="img"
                      alt="thumbnail"
                      style={{
                        backgroundImage: `url("${course?.thumbnail}")`,
                      }}
                      className="popular__item--image__img"
                    ></div>
                  </div>
                  <div className="popular__item--content">
                    <div className="popular__item--content__instructor">
                      <div
                        role="img"
                        alt="thumbnail"
                        style={{
                          backgroundImage: `url("${course?.creatorImage}")`,
                        }}
                        className="popular__item--content__instructor--image"
                      ></div>
                      <p className="popular__item--content__instructor--name">
                        By{" "}
                        <span className="popular__item--content__instructor--name_span">
                          {course?.instructor}
                        </span>
                      </p>
                    </div>
                    <h1 className="popular__item--content__heading">
                      {course?.title}
                    </h1>
                    <div className="popular__item--content__rating">
                      <span className="popular__item--content__rating--icon">
                        {"a"
                          .repeat(course?.rating ?? 1)
                          .split("a")
                          .slice(0, course?.rating ?? 0)
                          .map((_, index) => {
                            return <RatingIcon key={index} />;
                          })}
                      </span>
                      <div className="popular__item--content__rating--students">
                        <span>
                          <p className="popular__item--content__rating--students--number">
                            <span className="popular__item--content__rating--students--icon">
                              <BsPeople />
                            </span>
                            {course?.students}
                          </p>
                        </span>
                      </div>
                    </div>

                    <div className="popular__item--content__time">
                      <p className="popular__item--content__time--duration">
                        <span className="popular__item--content__time--icon">
                          <BsClock />
                        </span>
                        {course.totalDuration}
                      </p>
                      <p className="popular__item--content__time--lectures">
                        <span className="popular__item--content__time--lectures--icon">
                          <AiFillFolderOpen />
                        </span>
                        {course.totalLectureCount} lectures
                      </p>
                    </div>
                    <div className="popular__item--content__link">
                      <Link href={`/course-details/${course.id}`} passHref>
                        <a className="popular__item--content__link--anchor">
                          Start Courses
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
