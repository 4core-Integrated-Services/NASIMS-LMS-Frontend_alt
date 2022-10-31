import React from "react";
import Link from "next/link";
import instructorData from "../data/instructors";

const Instructor = () => {
  return (
    <section className="team-one team-page">
      <div className="container">
        <div className="row">
          {
            /**
             * @type {{id: number; instructorName: string; instructorImage: string;}}
             */

            instructorData.map((instructor, index) => {
              return (
                <div
                  className="col-xl-3 col-lg-6 col-md-6 col-sm-12"
                  key={instructor?.id ?? index}
                >
                  <div className="team-one__single">
                    <div className="team-one__image">
                      <img
                        src={instructor.instructorImage}
                        alt="instructor image"
                        style={{
                          width: 206,
                          height: 206,
                          backgroundPosition: "center top",
                          backgroundSize: "cover",
                        }}
                      />
                    </div>
                    <div className="team-one__content">
                      <h2 className="team-one__name">
                        <Link href={`/instructor-details/${instructor.id}`}>
                          <a>{instructor.instructorName}</a>
                        </Link>
                      </h2>
                      <p className="team-one__designation">Instructor</p>
                      <p className="team-one__text">
                        There are many varia of passages of lorem.
                      </p>
                    </div>
                    <div className="team-one__social">
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
              );
            })
          }
        </div>
      </div>
    </section>
  );
};

export default Instructor;
