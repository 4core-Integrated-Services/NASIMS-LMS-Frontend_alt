import react from "react";
import Lottie from "react-lottie-player";
import lottieJson from "../icons/myLottie.json";

export default function LottieNews() {
  return (
    <div className="container">
      {/* <h1 className="lottienews--heading">lottie section</h1> */}
      <div className="lottienews">
        <div className="lottienews--left">
          <Lottie
            loop
            animationData={lottieJson}
            play
            // style={{ width: 150, height: 450 }}
          />
        </div>
        <div className="lottienews--right">
          <h1 className="lottienews--right__heading">
            Our latest news and articles
          </h1>
          <p className="lottienews--right__text">
            {`  There are many variations of passages of lorem ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly
          believable.`}
          </p>

          <div className="lottienews--right__content">
            <div className="lottienews--right__content--student">
              <p className="lottienews--right__content--student_thought">
                Hello, i am here to learn web design
              </p>
              <div className="lottienews--right__content--student--cover">
                <div className="lottienews--right__content--student--cover_img"></div>
                <h4 className="lottienews--right__content--student--cover_name">
                  Mary Adedamola
                </h4>
                <p className="lottienews--right__content--student--cover_student">
                  Student
                </p>
              </div>
            </div>

            <div className="lottienews--right__content--instructor">
              <p className="lottienews--right__content--instructor_thought">
                Hello Mary i teach web design
              </p>
              <div className="lottienews--right__content--instructor_body">
                <div className="lottienews--right__content--instructor_body--image"></div>
                <h4 className="lottienews--right__content--instructor_body--name">
                  Kareem jeffery
                </h4>
                <p className="lottienews--right__content--instructor_body--student">
                  Instructor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
