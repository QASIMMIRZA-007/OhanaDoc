import React from 'react'
import style from './Resources.module.scss'
import ArrowgreenSvg from '../../assets/ProjectSvgs/Resources/arrowgreenSvg'
import CircleArrow from '../../assets/ProjectSvgs/CircleArrow'
import ArrowCircle2 from '../../assets/ProjectSvgs/ArrowCircle2'
function Resources() {
  return (
    <section>
        <div className={style.resoucesContainer}>
            <h1> Educational <span className='blue'>Resources</span> </h1>
            <div className={style.container}>
                <div className={style.card}>
                    <div className={style.cardData}>
                        <div className={style.img}>
                            <img src='./Images/lastcard1.png'/>
                        </div>
                        <h1>Health around the globe</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enim ornare. Nunc cursus enim cras vivamus consequat facilisi bibendum. In id in nulla euismod.</p>
                    </div>
                    <div className={style.dflex}>
                        <div className='green'>Learn more</div>
                        <div><ArrowgreenSvg /></div>
                    </div>

                </div>
                <div className={style.card}>
                    <div className={style.cardData}>
                        <div className={style.img}>
                            <img src='./Images/lastcard1.png'/>
                        </div>
                        <h1>Health around the globe</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enim ornare. Nunc cursus enim cras vivamus consequat facilisi bibendum. In id in nulla euismod.</p>
                    </div>
                    <div className={style.dflex}>
                        <div className='green'>Learn more</div>
                        <div><ArrowgreenSvg /></div>
                    </div>

                </div>
                <div className={style.card}>
                    <div className={style.cardData}>
                        <div className={style.img}>
                            <img src='./Images/lastcard1.png'/>
                        </div>
                        <h1>Health around the globe</h1>
                        <p>Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enim ornare. Nunc cursus enim cras vivamus consequat facilisi bibendum. In id in nulla euismod.</p>
                    </div>
                    <div className={style.dflex}>
                        <div className='green'>Learn more</div>
                        <div><ArrowgreenSvg /></div>
                    </div>

                </div>
             
            </div>
            <div className={style.arrowFlex}>
              
               <div> <ArrowCircle2/> </div>
               <div>  <CircleArrow/></div>

            </div>
        </div>
      
    </section>
  )
}

export default Resources
