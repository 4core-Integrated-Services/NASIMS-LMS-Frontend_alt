import React, { useState } from "react";
import Link from "next/link";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { RatingIcon } from "../icons/rating";

export default function ExpertInstructors() {
  const [startCounter, setStartCounter] = useState(false);
  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setStartCounter(true);
    }
  };
  return (
    <div className="container expert">
      <h1 className="expert--heading">
        Start Learning With Expert Instructors
      </h1>
      <div className="expert--images">
        <div className="expert--images__image--1"></div>
        <span className="expert--images__count">
          <VisibilitySensor
            onChange={onVisibilityChange}
            offset={{ top: 10 }}
            delayedCall
          >
            <CountUp
              end={startCounter ? 35000 : 0}
              className="expert--images__count--number"
            />
          </VisibilitySensor>
          <div className="expert--images__count--icon">
            <RatingIcon />
            {"a"
              .repeat(5 ?? 1)
              .split("a")
              .slice(0, 4 ?? 0)
              .map((_, index) => {
                return <RatingIcon key={index} />;
              })}
          </div>
          <p className="expert--images__count--text">Students loved us</p>
        </span>
        <div className="expert--images__image--2 "></div>
      </div>
      <div className="expert--content">
        <p className="expert--content__text">
          {`There are many variations of passages of lorem ipsum available, but
          the majority have suffered alteration in some form, by injected humour
          words which don't look even slightly believable. Lorem Ipsn gravida
          nibh vel velit auctor aliquetn auci elit cons.`}
        </p>
        <Link href="/instructor" passHref>
          <a className="expert--content__link">Get to know them</a>
        </Link>
      </div>
    </div>
  );
}
