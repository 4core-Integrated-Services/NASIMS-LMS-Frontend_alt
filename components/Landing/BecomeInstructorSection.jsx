import react from "react";
import Link from "next/link";

export default function BecomeInstructorSection() {
  return (
    <div className="become-section">
      <div className="become-section__left">
        <div className="become-section__left-thing">
          <span className="become-section__left-thing__span"></span>
        </div>
        <div className="become-section__left-content">
          <h1 className="become-section__left-content__heading">
            Become an Instructor
          </h1>
          <p className="become-section__left-content__text">
            There are many variations of passages of lore available but the
            majority have suffered alteration in some form.
          </p>
          <Link href="/courses" passHref>
            <a className="become-section__left-content__link">Start Teaching</a>
          </Link>
        </div>
      </div>

      <div className="become-section__right">
        <div className="become-section__right-thing">
          <span className="become-section__right-thing__span"></span>
        </div>
        <div className="become-section__right-content">
          <h1 className="become-section__right-content__heading">
            Join our community
          </h1>
          <p className="become-section__right-content__text">
            There are many variations of passages of lore available but the
            majority have suffered alteration in some form.
          </p>
          <Link href="/courses" passHref>
            <a className="become-section__right-content__link">
              Start Learning
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
