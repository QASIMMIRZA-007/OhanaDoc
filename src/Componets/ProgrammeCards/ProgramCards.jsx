import { useState } from "react";
import style from "./ProgCards.module.scss";
import FirstCardsvg from "../../assets/ProjectSvgs/ProgrammeCardssvgs/FirstCardsvg";
import SecondCardSvg from '../../assets/ProjectSvgs/ProgrammeCardssvgs/SecondCardSvg'
import Thirdcardsvg from '../../assets/ProjectSvgs/ProgrammeCardssvgs/Thirdcardsvg'



function ProgramCards() {
  const [showAllCards, setShowAllCards] = useState(false);

  const data = [
    {
      id: 0,
      svg: <SecondCardSvg />,
      title: "Hair loss treatment",
      price: "$59.99",
      p: "Lorem ipsum dolwor sit amet consectetur. Luctus orci est est porttitor morbi a dui",
    },
    {
      id: 1,
      svg: <FirstCardsvg />,
      title: "Hair loss treatment",
      price: "$59.99",
      p: "Lorem ipsum dolwor sit amet consectetur. Luctus orci est est porttitor morbi a dui",
    },
    {
      id: 2,
      svg: <Thirdcardsvg />,
      title: "Hair loss treatment",
      price: "$59.99",
      p: "Lorem ipsum dolwor sit amet consectetur. Luctus orci est est porttitor morbi a dui",
    },
    {
      id: 3,
      svg: <FirstCardsvg />,
      title: "Hair loss treatment",
      price: "$59.99",
      p: "Lorem ipsum dolwor sit amet consectetur. Luctus orci est est porttitor morbi a dui",
    },
    {
      id: 4,
      svg: <FirstCardsvg />,
      title: "Hair loss treatment",
      price: "$59.99",
      p: "Lorem ipsum dolwor sit amet consectetur. Luctus orci est est porttitor morbi a dui",
    },
    {
      id: 5,
      svg: <FirstCardsvg />,
      title: "Hair loss treatment",
      price: "$59.99",
      p: "Lorem ipsum dolwor sit amet consectetur. Luctus orci est est porttitor morbi a dui",
    },
    {
      id: 5,
      svg: <FirstCardsvg />,
      title: "Hair loss treatment",
      price: "$59.99",
      p: "Lorem ipsum dolwor sit amet consectetur. Luctus orci est est porttitor morbi a dui",
    },
    {
      id: 5,
      svg: <FirstCardsvg />,
      title: "Hair loss treatment",
      price: "$59.99",
      p: "Lorem ipsum dolwor sit amet consectetur. Luctus orci est est porttitor morbi a dui",
    },
    {
      id: 5,
      svg: <FirstCardsvg />,
      title: "Hair loss treatment",
      price: "$59.99",
      p: "Lorem ipsum dolwor sit amet consectetur. Luctus orci est est porttitor morbi a dui",
    },
    {
      id: 5,
      svg: <FirstCardsvg />,
      title: "Hair loss treatment",
      price: "$59.99",
      p: "Lorem ipsum dolwor sit amet consectetur. Luctus orci est est porttitor morbi a dui",
    },
    {
      id: 5,
      svg: <FirstCardsvg />,
      title: "Hair loss treatment",
      price: "$59.99",
      p: "Lorem ipsum dolwor sit amet consectetur. Luctus orci est est porttitor morbi a dui",
    },
    {
      id: 5,
      svg: <FirstCardsvg />,
      title: "Hair loss treatment",
      price: "$59.99",
      p: "Lorem ipsum dolwor sit amet consectetur. Luctus orci est est porttitor morbi a dui",
    },
  ];
  const visibleData = showAllCards ? data : data.slice(0, 6);

  const handleButtonClick = () => {
    setShowAllCards(!showAllCards);
  };
  return (
    <>
      <div className={style.cards}>
        {visibleData.map((item) => (
          <div key={item.id} className={style.card}>
            <div className={style.container}>
              <div className={style.cardLeft}>{item.svg}</div>
              <div className={style.cardRight}>
                <div className={style.cardFlex}>
                  <h3 className={style.cardHeading}>{item.title}</h3>
                  <span className={style.green}>{item.price}</span>
                </div>
                <p>{item.p}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={style.buttonDiv}>
        <button className={style.cardButton} onClick={handleButtonClick}>
          {showAllCards ? "Show less" : "See more"}
        </button>
      </div>
    </>
  );
}

export default ProgramCards;
