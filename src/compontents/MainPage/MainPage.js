import React from "react";
import "./MainPage.scss";

const MainPage = (props) => {
  return (
    <div className="main-page">
      <div className="header">
        <p className="black-l">
          LIMITED TIME <span className="red-l">FLASH SALE!</span>
        </p>
        <p className="black-l">
          Set Your Child Up For Success for{" "}
          <span className="red-l">JUST $1</span>
          (Trial Offer) Today!
        </p>
      </div>
      <div className="body">
        <div className="info">
          <p className="body-l">
            Do You Want to Set Your Child Up For Academic Success For the Rest
            of Their Lives, BUT You Just Don't Know Where to Start?
          </p>
          <p className="body-m">
            <span className="body-m-bold">Click the button below </span>	&#38; Learn
            EXACTLY how you can successfully captivate and engage even the most
            reluctant learners and easily have them reading better than all
            other children their age in as little as 10-15 minutes a day!
            <span className="body-m-bold"> 10-15 minutes a day!</span>
          </p>
          <p className="body-m-bold">
            EVEN children as young as 2, who don't know their alphabet at all,
            and currently show zero interest in reading whatsoever!
          </p>
          <button className="try-button">&gt;&gt; YES, I want to try for $1! </button>
          <p className="body-g">Trial Offer, then $37/mo. Cancel Anytime</p>
          <p className="body-s">100% Risk-Free, 365 Day Money Back Guarantee!</p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
