import React from "react";
import style from "./Navbar.module.scss";
import LogoSvg from "../../assets/ProjectSvgs/LogoSvg";
import Downarrow from "../../assets/ProjectSvgs/Downarrow";
function Navbar() {
  return (
    <>
      <div className={style.navbar}>
        <div className={style.container}>
          <div className={style.left}>
            <div className={style.logo}>
              <LogoSvg />
            </div>
          </div>
          <div className={style.right}>
            <nav>
              <ul>
                <li className="flex">
                  Consultation
                  <Downarrow />
                </li>
                <li>Medical weight loss</li>
                <li>aging</li>
                <li>Sexual health</li>
                <li>lab testing</li>
                <li>|</li>
                <li>Contact us</li>
                <button className={style.navButton}>Login</button>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
