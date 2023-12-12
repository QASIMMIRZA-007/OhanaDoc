import {useState} from "react";
import style from "./Home.module.scss";
import { CiSearch } from "react-icons/ci";


function Home() {
  const [handleSearch, setHandleSearch] = useState("");
  const handleSearchBar = () =>{
setHandleSearch("")
  }
  return (
    <>
      <div className={style.home}>
        <div className={style.container}>
          <div className={style.left}>
            <h1>
              Hawaii's Premier Treatment Program{" "}
              <span className="orange">Service</span>{" "}
            </h1>
            <h3>
              Your family’s one stop-shop for personalized{" "}
              <span className="blue">healthcare.</span> 
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Luctus orci est est
              porttitor morbi a dui. Sagittis tellus enim lectus auctor
              condimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enim
              ornare. Nunc cursus enim cras vivamus consequat facilisi bibendum.
              In id in nulla euismod.
            </p>
            <div className={style.inputFlex}>
              <div className={style.inputContainer} value={handleSearch}>
                <CiSearch />
                <input
                  type="text"
                  name="search"
                  placeholder="Search a treatment program"
                />
              </div>
              <button className={style.homeButton} onClick={handleSearchBar}>Get started</button>
            </div>
          </div>
          <div className={style.right}>                 
            <div className={style.frame}>  
              {/* <video width="444" height="305" controls>
                <source
                  src="https://cdn.pixabay.com/vimeo/780232204/hospital-142528.mp4?width=1280&hash=5fe303920ef8f4c79972e47369361778431b9101"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video> */}
              <img src="./Images/homeImg.png" alt="hoemImage" />
            </div>
          </div>
        </div>
        <div className={style.superText}>
          <h1 >A wide range of Treatment <span className="blue">Programs</span> </h1>
          <p >Lorem ipsum dolor sit amet consectetur. Luctus orci est est porttitor morbi a dui. Sagittis tellus enim lectus auctor condimentum nunc nec pharetra cum. Sed sem sit ipsum nibh enim ornare. Nunc cursus enim cras vivamus.</p>
        </div>
      </div>
    </>
  );
}

export default Home;
