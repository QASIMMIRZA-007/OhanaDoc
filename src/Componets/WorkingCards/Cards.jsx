import React from "react";
import style from "./Cards.module.scss";
import Firstsvg from "../../assets/ProjectSvgs/WorkingCards/Firstsvg";
import Secsvg from "../../assets/ProjectSvgs/WorkingCards/Secsvg";
import Thirdsvg from "../../assets/ProjectSvgs/WorkingCards/Thirdsvg";
import ArrowGreenicon from "../../assets/ProjectSvgs/ArrowGreenicon";
function Cards() {
  const cardData = [
    {
      id: 0,
      svg: <Firstsvg />,
      step: "step 1",
      heading: "Visit & Schedule",
      para: "Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enim ornare. Nunc cursus enim cras vivamus.",
    },
    {
      id: 1,
      svg: <Secsvg />,
      step: "step 2",
      heading: "Pay & Confirm",
      para: "Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enim ornare. Nunc cursus enim cras vivamus.",
    },
    {
      id: 2,
      svg: <Thirdsvg />,
      step: "step 3",
      heading: "Consult",
      para: "Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enim ornare. Nunc cursus enim cras vivamus.",
    },
  ];
  return (
    <>
      <section>
        <div className={style.container}>
          <h1>
            How it <span className="green">Works</span>
          </h1>
          <div className={style.cardContainer}>
            {cardData.map((item) => {
              return (
                <div key={item.id} className={style.card}>
                  <div className={style.cardImg}>{item.svg}</div>
                  <span className="orange">{item.step}</span>
                  <h2>{item.heading}</h2>
                  <p>{item.para}</p>
                </div>
              );
            })}
          </div>
          <div className={style.rectangle}>
            <div className={style.textFlex}>
                <h2 className={style.hyperText}>Get Started </h2>
                <span> <ArrowGreenicon/></span>
                    {/* <ArrowGreenicon/> */}
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cards;
