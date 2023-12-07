import { useState } from "react";
import style from "./FAQ.module.scss";
function FAQ() {
  // const [answersVisible, setAnswersVisible] = useState([0]);
  const [openQuestion, setOpenQuestion] = useState(0);

  const questionData = [
    {
      id: 0,
      question: "Q. Lorem ipsum dolor sit amet consteur",
      ans: "Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enim ornare. Nunc cursus enim cras vivamus. Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc.",
    },
    {
      id: 1,
      question: "Q. Lorem ipsum dolor sit amet consteur",
      ans: "Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enim ornare. Nunc cursus enim cras vivamus. Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc.",
    },
    {
      id: 2,
      question: "Q. Lorem ipsum dolor sit amet consteur",
      ans: "Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enim ornare. Nunc cursus enim cras vivamus. Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc.",
    },
    {
      id: 3,
      question: "Q. Lorem ipsum dolor sit amet consteur",
      ans: "Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enim ornare. Nunc cursus enim cras vivamus. Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc.",
    },
  ];

  const toggleAnswerVisibility = (id) => {
    setOpenQuestion((prevOpenQuestion) =>
      prevOpenQuestion === id ? null : id
    );
  };
  const getIcon = (id) => (openQuestion === id ? "-" : "+");

  return (
    <>
      <section>
        <div className={style.faqContainer}>
          <div className={style.container}>
            <div className={style.left}>
              <h1>
                Frequently Asked <span className="green">Questions</span>
              </h1>
              <p>
                Everything you might need to know about the medical services we
                provide and how it works.
              </p>
              <div className={style.buttons}>
                <button className={style.dark}>General</button>
                <button className={style.btn}>Online consultation</button>
                <button className={style.btn}>Health services</button>
                <button className={style.btn}>Treatment options</button>
                <button className={style.btn}>Doctors</button>
                <button className={style.btn}>Staff</button>
                <button className={style.btn}>Payments</button>
              </div>
            </div>

            <div className={style.right}>
              {questionData.map((item) => (
                <div key={item.id}>
                  <div className={style.textLine}>
                    <b>{item.question}</b>
                    <b
                      className="icon"
                      onClick={() => toggleAnswerVisibility(item.id)}
                    >
                        <span className="orange">{getIcon(item.id)}</span>
                      
                    </b>
                  </div>
                  {openQuestion === item.id && (
                    <div className={style.ansLine}>
                      <p>{item.ans}</p>
                    </div>
                  )}
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQ;
