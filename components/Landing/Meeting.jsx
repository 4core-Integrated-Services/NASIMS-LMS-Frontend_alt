import React from "react";
import Lottie from "react-lottie-player";
import lottieImage from "../../public/assets/images/myLottie.json";

const Meeting = () => {
  return (
    <section className="meeting-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="meeting-one__image">
              {/* <img src="/assets/images/meeting-1-1.jpg" alt="Awesome Image" /> */}
              <Lottie
                loop
                play
                animationData={lottieImage}
                style={{
                  width: 570,
                  height: 691,
                }}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="meeting-one__content">
              <div className="block-title text-left">
                <h2 className="block-title__title">
                  Our latest news <br />& articles
                </h2>
              </div>
              <p className="meeting-one__block-text">
                {`    There are many variations of passages of lorem ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.`}
              </p>
              <div className="meeting-one__box-wrap">
                <div className="meeting-one__box">
                  <div className="meeting-one__bubble">
                    Hello. I’m here to learn web design
                  </div>
                  <img
                    src="/assets/images/fineBlackGirl.jpg"
                    alt="Awesome Image"
                    style={{
                      width: 84,
                      heigt: 84,
                    }}
                  />
                  <h3 className="meeting-one__title">Mary Adedamola</h3>
                  <p className="meeting-one__text">Student</p>
                </div>
                <div className="meeting-one__box">
                  <div className="meeting-one__bubble">Hello. Mary</div>
                  <img
                    src="/assets/images/teach5.jpg"
                    alt="Awesome Image"
                    style={{
                      width: 84,
                      heigt: 84,
                    }}
                  />
                  <h3 className="meeting-one__title">Kareem Jeffery</h3>
                  <p className="meeting-one__text">Teacher</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meeting;
