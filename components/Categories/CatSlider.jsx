import React from "react";
import Swiper from "react-id-swiper";
import coursesData from "../data/courses";
import { RatingIcon } from "../icons/rating";
import Link from "next/link";

const CatSlider = () => {
  const params = {
    slidesPerView: 5,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Responsive breakpoints
    breakpoints: {
      1408: {
        slidesPerView: 5,
      },
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      640: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  };

  return (
    <>
      <section className="container">
        <div className="cat-slider">
          <div className="heading">
            <h1 className="heading--main">Design Courses</h1>
            <h3 className="heading--sub">Courses to get you started</h3>
            <h4 className="heading--pre">Most Popular</h4>
          </div>
        </div>

        <div className="cat-slider__section">
          <Swiper {...params}>
            {
              /**
               * @type {{id:number; title:string; thumbnail:string; tag:string; creatorImage:string; instructor:string; rating:number; duration:number; students: number; lectures: number;}}
               */
              coursesData.map((courses, index) => {
                return <div className="cat-slider__section-item"></div>;
              })
            }
          </Swiper>
        </div>
      </section>
    </>
  );
};
export default CatSlider;

// <section className="course-carousel__top-title home-new">
//   <div className="container">
//     <div className="heading">
//       <h1 className="heading--main">Design Courses</h1>
//       <h3 className="heading--sub">Courses to get you started</h3>
//       <h4 className="heading--pre">Most Popular</h4>
//     </div>
//   </div>
// </section>;

// <section className="course-carousel course-carousel__teacher-details home-new">
//   <div className="container">
//     <div className="course-carousel__carousel">
//       <Swiper {...params}>
//         {
//           /**
//            * @type {{id:number; title:string; thumbnail:string; tag:string; creatorImage:string; instructor:string; rating:number; duration:number; students: number; lectures: number;}}
//            */
//           coursesData.map((courses, index) => {
//             return (
//               <div key={courses.id}>
//                 <div className="item">
//                   <div className="course-carousel__single color-1">
//                     <div className="course-carousel__image">
//                       <img
//                         src={courses.thumbnail}
//                         alt=""
//                         width="272"
//                         height="200"
//                       />
//                     </div>
//                     <div className="course-carousel__content">
//                       <Link href="#" passHref>
//                         <a className="course-carousel__category"></a>
//                       </Link>

//                       <div className="course-carousel__admin">
//                         <img
//                           src={courses.creatorImage}
//                           alt=""
//                           style={{
//                             width: 40,
//                             height: 25,
//                             backgroundPosition: "center",
//                             backgroundSize: "cover",
//                             objectFit: "cover",
//                           }}
//                         />
//                         by{" "}
//                         <Link href="/teacher-details" passHref>
//                           <a>{courses.instructor}</a>
//                         </Link>
//                       </div>
//                       <h2 className="course-carousel__title">
//                         <Link href="/course-details" passHref>
//                           <a className="course-carousel__title--link">
//                             {courses.title}
//                           </a>
//                         </Link>
//                       </h2>
//                       <div className="course-carousel__stars">
//                         <span className="course-carousel__stars-wrap">
//                           {"a"
//                             .repeat(courses.rating ?? 1)
//                             .split("a")
//                             .slice(0, courses.rating ?? 0)
//                             .map((_, index) => {
//                               return <RatingIcon key={index} />;
//                             })}
//                         </span>
//                         <span className="course-carousel__stars-count">
//                           {courses.students}
//                         </span>
//                       </div>
//                       <div className="course-carousel__meta">
//                         <Link href="/course-details" passHref>
//                           <a>
//                             <i className="far fa-clock"></i>{" "}
//                             {courses.totalDuration}
//                           </a>
//                         </Link>
//                         <Link href="/course-details" passHref>
//                           <a>
//                             <i className="far fa-folder-open"></i>{" "}
//                             {courses.totalLectureCount} Lectures
//                           </a>
//                         </Link>
//                       </div>
//                       <Link href={`/course-details/${courses.id}`}>
//                         <a className="course-carousel__link">
//                           See Preview
//                         </a>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })
//         }
//       </Swiper>
//     </div>
//   </div>
// </section>;
