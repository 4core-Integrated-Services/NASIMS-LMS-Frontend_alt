import React from "react";
import Link from "next/link";
import instructorData from "../data/instructors";

const Instructor = () => {
  return (
    <section className="team-one team-page">
      <div className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {instructorData.map((instructor) => {
            return (
              <div className="bslide-content" key={instructor?.id}>
                <div className="bcard-wrapper">
                  <div className="bcard">
                    <div className="bimage-content">
                      <span className="boverlay"></span>
                      <div className="bcard-image">
                        <div
                          className="bcard-img"
                          style={{
                            backgroundImage: `url("${instructor?.instructorImage}")`,
                          }}
                          role="img"
                          alt="instructor"
                        ></div>
                      </div>
                    </div>
                    <div className="bcard-content">
                      <h2 className="bname">{instructor?.name}</h2>
                      <p className="bdescription">{instructor?.description}</p>
                      <Link
                        href={`/instructor-details/${instructor?.id}`}
                        passHref
                      >
                        <button className="bBtn">View More</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Instructor;
