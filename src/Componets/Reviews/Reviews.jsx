import { useState } from "react";
import style from "./Reviews.module.scss";
import StarSvg from "../../assets/ProjectSvgs/StarsSvg";
import QuoteSvg from "../../assets/ProjectSvgs/QuoteSvg";
import ArrowCircle2 from "../../assets/ProjectSvgs/ArrowCircle2";
import CircleArrow from "../../assets/ProjectSvgs/CircleArrow";

function Reviews() {
  const [displayedReviewIndex, setDisplayedReviewIndex] = useState(0);

  const reviewData = [
    {
      id: 0,
      img: "./Images/Rectangle 10.png",
      title: "Awesome service",
      para: "Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctorcondimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enimornare. Nunc cursus enim cras vivamus consequat facilisi bibendum. In id in nulla euismod.",
      name: "Melinda Maine",
    },
    {
      id: 0,
      img: "./Images/Crush material.jpg",
      title: "Awesome service",
      para: "Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctorcondimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enimornare. Nunc cursus enim cras vivamus consequat facilisi bibendum. In id in nulla euismod.",
      name: "Manakamel",
    },
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww",
      title: "Amazing work",
      para: "Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctorcondimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enimornare. Nunc cursus enim cras vivamus consequat facilisi bibendum. In id in nulla euismod.",
      name: "Marindra cohen",
    },
    {
      id: 2,
      img: "https://plus.unsplash.com/premium_photo-1678453146861-d0614ff93be4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmV2aWV3fGVufDB8fDB8fHww",
      title: "Excellent Performance",
      para: "Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctorcondimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enimornare. Nunc cursus enim cras vivamus consequat facilisi bibendum. In id in nulla euismod.",
      name: "Alex doe",
    },
  ];

  const showNextReview = () => {
    setDisplayedReviewIndex((prevIndex) =>
      prevIndex < reviewData.length - 1 ? prevIndex + 1 : 0
    );
  };

  const showBackReview = () => {
    console.log("clicked");
    setDisplayedReviewIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  return (
    <section>
      <div className={style.reviewContainer}>
        <h1>
          Patients Love <span className="orange">Us</span>{" "}
        </h1>
        <div className={style.container}>
          <div className={style.left}>
            <div className={style.img}>
              <img src={reviewData[displayedReviewIndex].img} alt="Review" />
            </div>
          </div>
          <div className={style.right}>
            <div className={style.flex}>
              <h3>{reviewData[displayedReviewIndex].title}</h3>
              <StarSvg />
            </div>
            <p>{reviewData[displayedReviewIndex].para}</p>
            <div className={style.dflex}>
              <hr />
              <p>{reviewData[displayedReviewIndex].name}</p>
            </div>
          </div>
        </div>
        <div className={style.arrowFlex}>
          {/* <FaCircleArrowLeft className={`proicon ${displayedReviewIndex === 0 ? 'disabled' : ""}`} onClick={showBackReview}/> */}
          <div onClick={showBackReview}>
            <ArrowCircle2
              className={`proicon ${
                displayedReviewIndex === 0 ? "disabled" : ""
              }`}
            />
          </div>
          {/* <FaCircleArrowRight className="proicon" onClick={showNextReview} /> */}
          <div onClick={showNextReview}>
            <CircleArrow className="proicon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
