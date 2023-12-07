import React from 'react'
import './about.css'
const About = () => {
    const boxdata= [
        {
            id:0,
            digit:"36,50",
            plus:"+",
            tense:"Online Consultations"
        },
        {
            id:1,
            digit:"115",
            plus:"+",
            tense:"Satisfied Patients"
        },
        {
            id:2,
            digit:"30",
            plus:"+",
            tense:"Doctors"
        },
        {
            id:3,
            digit:"95",
            plus:"+",
            tense:"Staff Members"
        },
       
    ]
  return (
    <>
    <section className="about-page main-container ">
  <div className=" left-container mt-lg-2">
  <div className="parent">
    <div className="itemA">
      <img src="./Images/Rectangle 62.png" alt="Item-one" className="first-img"/>
      <div className="about-icons">
        <svg  xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
          <g clipPath="url(#clip0_0_166)">
            <path d="M20.6719 10.5001C20.6719 4.88098 16.1191 0.328247 10.5 0.328247C4.88086 0.328247 0.328125 4.88098 0.328125 10.5001C0.328125 15.577 4.04783 19.7852 8.91064 20.549V13.4405H6.32666V10.5001H8.91064V8.25903C8.91064 5.70991 10.4282 4.30184 12.7526 4.30184C13.8657 4.30184 15.0298 4.50036 15.0298 4.50036V7.00231H13.7468C12.4835 7.00231 12.0894 7.78653 12.0894 8.59084V10.5001H14.9104L14.4592 13.4405H12.0894V20.549C16.9522 19.7852 20.6719 15.577 20.6719 10.5001Z" fill="#009DDD"/>
          </g>
          <defs>
            <clipPath id="clip0_0_166">
              <rect width="21" height="21" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="25" viewBox="0 0 18 25" fill="none">
          <rect width="18" height="25" fill="white"/>
          <path d="M4.02911 20.3753H0.297321V8.10755H4.02911V20.3753ZM2.16121 6.43411C0.967902 6.43411 0 5.42513 0 4.20696C8.54116e-09 3.62183 0.227698 3.06067 0.633002 2.64692C1.03831 2.23317 1.58802 2.00073 2.16121 2.00073C2.73439 2.00073 3.2841 2.23317 3.68941 2.64692C4.09471 3.06067 4.32241 3.62183 4.32241 4.20696C4.32241 5.42513 3.35411 6.43411 2.16121 6.43411ZM17.996 20.3753H14.2722V14.4034C14.2722 12.9802 14.2441 11.155 12.332 11.155C10.3918 11.155 10.0945 12.7013 10.0945 14.3009V20.3753H6.3667V8.10755H9.9458V9.78099H9.99804C10.4963 8.81712 11.7133 7.79993 13.5289 7.79993C17.3057 7.79993 18 10.3388 18 13.6365V20.3753H17.996Z" fill="#009DDD"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
          <path d="M19.7386 6.22272C19.7525 6.40926 19.7525 6.59584 19.7525 6.78238C19.7525 12.4721 15.2157 19.0279 6.92385 19.0279C4.36928 19.0279 1.9962 18.3217 0 17.0958C0.362957 17.1358 0.711906 17.1491 1.08883 17.1491C3.19666 17.1491 5.13704 16.4696 6.68654 15.3103C4.7043 15.2703 3.04313 14.0311 2.47079 12.3255C2.75 12.3655 3.02917 12.3921 3.32234 12.3921C3.72715 12.3921 4.132 12.3388 4.50888 12.2456C2.4429 11.8458 0.893363 10.1136 0.893363 8.02158V7.9683C1.49359 8.2881 2.19162 8.48797 2.93141 8.51459C1.71695 7.74173 0.921293 6.42259 0.921293 4.9302C0.921293 4.13072 1.1446 3.39785 1.53549 2.75825C3.75504 5.36992 7.09135 7.07548 10.8324 7.26206C10.7626 6.94226 10.7207 6.60917 10.7207 6.27604C10.7207 3.90419 12.7309 1.97211 15.2296 1.97211C16.5278 1.97211 17.7004 2.49178 18.524 3.33124C19.543 3.1447 20.5202 2.78491 21.3857 2.29191C21.0506 3.29129 20.3387 4.13076 19.4035 4.66372C20.3109 4.57049 21.1903 4.33059 21.9999 3.9975C21.3858 4.85026 20.618 5.60974 19.7386 6.22272Z" fill="#009DDD"/>
        </svg>
      </div> 
      
    
     </div>
      <div className="itemB">
        <img src="./Images/Rectangle 64.png" alt="card-two" className="sec-img"/>
      </div>

      <div className="itemC">
        <img src="./Images/Rectangle 63.png" alt="card-three" className="third-img"/>
        <div className="about-icons2">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
            <g clipPath="url(#clip0_0_168)">
              <path d="M20.6719 10.5002C20.6719 4.8811 16.1191 0.328369 10.5 0.328369C4.88086 0.328369 0.328125 4.8811 0.328125 10.5002C0.328125 15.5772 4.04783 19.7854 8.91064 20.5491V13.4407H6.32666V10.5002H8.91064V8.25915C8.91064 5.71003 10.4282 4.30196 12.7526 4.30196C13.8657 4.30196 15.0298 4.50048 15.0298 4.50048V7.00243H13.7468C12.4835 7.00243 12.0894 7.78665 12.0894 8.59097V10.5002H14.9104L14.4592 13.4407H12.0894V20.5491C16.9522 19.7854 20.6719 15.5772 20.6719 10.5002Z" fill="#009DDD"/>
            </g>
            <defs>
              <clipPath id="clip0_0_168">
                <rect width="21" height="21" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
            <path d="M4.02911 18.3752H0.297321V6.10744H4.02911V18.3752ZM2.16121 4.434C0.967902 4.434 0 3.42502 0 2.20686C8.54116e-09 1.62173 0.227698 1.06056 0.633002 0.646815C1.03831 0.233067 1.58802 0.00062561 2.16121 0.00062561C2.73439 0.00062561 3.2841 0.233067 3.68941 0.646815C4.09471 1.06056 4.32241 1.62173 4.32241 2.20686C4.32241 3.42502 3.35411 4.434 2.16121 4.434ZM17.996 18.3752H14.2722V12.4033C14.2722 10.9801 14.2441 9.1549 12.332 9.1549C10.3918 9.1549 10.0945 10.7012 10.0945 12.3008V18.3752H6.3667V6.10744H9.9458V7.78088H9.99804C10.4963 6.81701 11.7133 5.79982 13.5289 5.79982C17.3057 5.79982 18 8.33869 18 11.6363V18.3752H17.996Z" fill="#009DDD"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 22 21" fill="none">
            <path d="M19.7386 6.22272C19.7525 6.40926 19.7525 6.59584 19.7525 6.78238C19.7525 12.4721 15.2157 19.0279 6.92385 19.0279C4.36928 19.0279 1.9962 18.3217 0 17.0958C0.362957 17.1358 0.711906 17.1491 1.08883 17.1491C3.19666 17.1491 5.13704 16.4696 6.68654 15.3103C4.7043 15.2703 3.04313 14.0311 2.47079 12.3255C2.75 12.3655 3.02917 12.3921 3.32234 12.3921C3.72715 12.3921 4.132 12.3388 4.50888 12.2456C2.4429 11.8458 0.893363 10.1136 0.893363 8.02158V7.9683C1.49359 8.2881 2.19162 8.48797 2.93141 8.51459C1.71695 7.74173 0.921293 6.42259 0.921293 4.9302C0.921293 4.13072 1.1446 3.39785 1.53549 2.75825C3.75504 5.36992 7.09135 7.07548 10.8324 7.26206C10.7626 6.94226 10.7207 6.60917 10.7207 6.27604C10.7207 3.90419 12.7309 1.97211 15.2296 1.97211C16.5278 1.97211 17.7004 2.49178 18.524 3.33124C19.543 3.1447 20.5202 2.78491 21.3857 2.29191C21.0506 3.29129 20.3387 4.13076 19.4035 4.66372C20.3109 4.57049 21.1903 4.33059 21.9999 3.9975C21.3858 4.85026 20.618 5.60974 19.7386 6.22272Z" fill="#009DDD"/>
          </svg>
        </div>
        <div className="doctor-name">
          <h6>  Dr. Olivia Green </h6>
          </div>
          <div className="doctor-name-2">
            <h6>Dr. John Doe</h6>
          </div>
      </div> 
    </div>
  </div>
      <div className="right-container">
<h1 className="about-page-heading">About  <span className="orange">Us</span></h1>
<p className="about-page-para">Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enim ornare. Nunc cursus enim cras vivamus.
  <br/>
  <br/>
   Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enim ornare. Nunc cursus enim cras vivamus. Condimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enim ornare. Nunc cursus enim cras vivamus.</p>
     <div className='flexContainer'>
{ boxdata.map((item) => {
    return( 
<div className='box' key={item.id}>
            <div className='boxdata'>
                <p className='digits'>{item.digit}<span className='plus'>{item.plus}</span></p>
                <p className='tense'>{item.tense}</p>
            </div>
        </div>
    )
})} 
     </div>
     
    </div>
 </section>
      
    </>
  )
}

export default About
