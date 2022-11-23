import react from "react";
import instructorData from "../data/instructors";

export default function BestInstructor() {
  return (
    <div className="container">
      <h1 className="bcontent-heading">Meet the best Instructors</h1>
      <div className="bslide-container">
        {instructorData.slice(0, 4).map((instructor) => {
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
                    <button className="bBtn">View More</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
