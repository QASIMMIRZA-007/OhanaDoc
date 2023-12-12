// import React from 'react'
// import style from './Resources.module.scss'

// import GreenArrowSvg from '../../assets/ProjectSvgs/Resources/GreenArrowSvg'
// import CircleArrow from '../../assets/ProjectSvgs/CircleArrow'
// import ArrowCircle2 from '../../assets/ProjectSvgs/ArrowCircle2'
// function Resources() {
//   return (
//     <section>
//         <div className={style.resoucesContainer}>
//             <h1> Educational <span className='blue'>Resources</span> </h1>
//             <div className={style.container}>
//                 <div className={style.card}>
//                     <div className={style.cardData}>
//                         <div className={style.img}>
//                             <img src='./Images/lastcard1.png'/>
//                         </div>
//                         <h1>Health around the globe</h1>
//                         <p>Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enim ornare. Nunc cursus enim cras vivamus consequat facilisi bibendum. In id in nulla euismod.</p>
//                     </div>
//                     <div className={style.dflex}>
//                         <div className='green'>Learn more</div>
//                         <div><GreenArrowSvg /></div>
//                     </div>

//                 </div>
//                 <div className={style.card}>
//                     <div className={style.cardData}>
//                         <div className={style.img}>
//                             <img src='./Images/lastcard1.png'/>
//                         </div>
//                         <h1>Health around the globe</h1>
//                         <p>Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enim ornare. Nunc cursus enim cras vivamus consequat facilisi bibendum. In id in nulla euismod.</p>
//                     </div>
//                     <div className={style.dflex}>
//                         <div className='green'>Learn more</div>
//                         <div><GreenArrowSvg /></div>
//                     </div>

//                 </div>
//                 <div className={style.card}>
//                     <div className={style.cardData}>
//                         <div className={style.img}>
//                             <img src='./Images/lastcard1.png'/>
//                         </div>
//                         <h1>Health around the globe</h1>
//                         <p>Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enim ornare. Nunc cursus enim cras vivamus consequat facilisi bibendum. In id in nulla euismod.</p>
//                     </div>
//                     <div className={style.dflex}>
//                         <div className='green'>Learn more</div>
//                         <div><GreenArrowSvg /></div>
//                     </div>

//                 </div>

//             </div>
//             <div className={style.arrowFlex}>

//                <div> <ArrowCircle2/> </div>
//                <div>  <CircleArrow/></div>

//             </div>
//         </div>

//     </section>
//   )
// }

// export default Resources

import { useState } from "react";
import style from "./Resources.module.scss";
import GreenArrowSvg from "../../assets/ProjectSvgs/Resources/GreenArrowSvg";
import CircleArrow from "../../assets/ProjectSvgs/CircleArrow";
import ArrowCircle2 from "../../assets/ProjectSvgs/ArrowCircle2";

const resourcesData = [
    {
        imgSrc: "./Images/lastcard2.png",
        title: "Health around the globe",
        description:
          "Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enim ornare. Nunc cursus enim cras vivamus consequat facilisi bibendum. In id in nulla euismod.",
      },
  {
    imgSrc: "./Images/lastcard1.png",
    title: "Health around the globe",
    description:
      "Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enim ornare. Nunc cursus enim cras vivamus consequat facilisi bibendum. In id in nulla euismod.",
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWR1Y2F0aW9uYWwlMjByZXNvdXJjZXN8ZW58MHx8MHx8fDA%3D",
    title: "Health around the globe",
    description:
      "Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enim ornare. Nunc cursus enim cras vivamus consequat facilisi bibendum. In id in nulla euismod.",
  },
  {
    imgSrc: "./Images/lastcard2.png",
    title: "Health around the globe",
    description:
      "Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enim ornare. Nunc cursus enim cras vivamus consequat facilisi bibendum. In id in nulla euismod.",
  },
  {
    imgSrc: "./Images/lastcard1.png",
    title: "Health around the globe",
    description:
      "Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enim ornare. Nunc cursus enim cras vivamus consequat facilisi bibendum. In id in nulla euismod.",
  },
  {
    imgSrc: "./Images/lastcard2.png",
    title: "Health around the globe",
    description:
      "Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enim ornare. Nunc cursus enim cras vivamus consequat facilisi bibendum. In id in nulla euismod.",
  },
  {
    imgSrc: "./Images/lastcard1.png",
    title: "Health ",
    description:
    "Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enim ornare. Nunc cursus enim cras vivamus consequat facilisi bibendum. In id in nulla euismod."
  },
];

function Resources() {
  const [firstVisibleCardIndex, setFirstVisibleCardIndex] = useState(0);

//   const handleMoveLeft = () => {
//     setFirstVisibleCardIndex((prevIndex) =>
//       prevIndex > 0 ? prevIndex - 1 : prevIndex
//     );
//   };

  const handleMoveRight = () => {
    setFirstVisibleCardIndex((prevIndex) =>
      prevIndex < resourcesData.length - 1 ? prevIndex + 1 : prevIndex
    );
  };
  return (
    <>
      {/* <section>
      <div className={style.resoucesContainer}>
        <h1>
          Educational <span className='blue'>Resources</span>{' '}
        </h1>
        <div className={style.container}>
          {resourcesData.map((resource, index) => (
            <div className={style.card} key={index}>
              <div className={style.cardData}>
                <div className={style.img}>
                  <img src={resource.imgSrc} alt={`Resource ${index + 1}`} />
                </div>
                <h1>{resource.title}</h1>
                <p>{resource.description}</p>
              </div>
              <div className={style.dflex}>
                <div className='green'>Learn more</div>
                <div>
                  <GreenArrowSvg />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={style.arrowFlex}>
          <div>
            <ArrowCircle2   onClick={handleMoveLeft}/>
          </div>
          <div>
            <CircleArrow  onClick={handleMoveRight} />
          </div>
        </div>
      </div>
    </section> */}

      <section>
        <div className={style.resoucesContainer}>
          <h1>
            Educational <span className="blue">Resources</span>{" "}
          </h1>
          <div className={style.container}>
            {resourcesData
              .slice(firstVisibleCardIndex, firstVisibleCardIndex + 3)
              .map((resource, index) => (
                <div className={style.card} key={index}>
                  <div className={style.cardData}>
                    <div className={style.img}>
                      <img className="emj"
                        src={resource.imgSrc}
                        alt={`Resource ${index + 1}`}
                      />
                    </div>
                    <h1>{resource.title}</h1>
                    <p>{resource.description}</p>
                  </div>
                  <div className={style.dflex}>
                    <div className="green">Learn more</div>
                    <div>
                      <GreenArrowSvg />
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className={style.arrowFlex}>
            <div >
              <ArrowCircle2 />
            </div>
            <div onClick={handleMoveRight}>
              <CircleArrow />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resources;
