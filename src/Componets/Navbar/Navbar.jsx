// import {useState} from "react";
// import style from "./Navbar.module.scss";
// import LogoSvg from "../../assets/ProjectSvgs/LogoSvg";
// import Downarrow from "../../assets/ProjectSvgs/Downarrow";
// function Navbar() {
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!isDropdownOpen);

//   };
//   return (
//     <>
//       <div className={style.navbar}>
//         <div className={style.container}>
//           <div className={style.left}>
//             <div className={style.logo}>
//               <LogoSvg />
//             </div>
//           </div>
//           <div className={style.right}>
//             <nav>
//               <ul>
//                 <li className="flex" onClick={toggleDropdown}>
//                   Consultation
//                   <Downarrow />

//                 </li>
//                 <li>Medical weight loss</li>
//                 <li>aging</li>
//                 <li>Sexual health</li>
//                 <li>lab testing</li>
//                 <li className=" navLine">|</li>
//                 <li>Contact us</li>
//                 <button className={style.navButton}>Login</button>
//               </ul>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;

import React from "react";
import "./Navbar.module.scss";
import Downarrow from "../../assets/ProjectSvgs/Downarrow";

function Navbar() {
  return (
    <>
      <div className="main">
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
          <div className="container-fluid nBar ">
            <a className="navbar-brand" href="#">
              <img
                src="./Images/Mainlogo.png"
                alt="logo"
                width="271"
                height="67"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                {/* <li className="nav-item  ">
                  <a
                    className="nav-link consulatation d-flex align-items-center gap-1 "
                    
                    role="button"
                    aria-expanded="false"
                  >
                    Consultation
                    <Downarrow />
                  
                  </a>
                </li> */}
                <li class="nav-item dropdown">
          <a class="nav-link  d-flex align-items-center gap-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Consultation
          <Downarrow />
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Consultation</a></li>
            <li><a class="dropdown-item" href="#">Consultation2</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Consultation 3</a></li>
          </ul>
        </li>
                <li className="nav-item px-2  ">
                  <a
                    className="nav-link navv-item"
                    aria-current="page"
                    
                  >
                    Medical weight loss
                  </a>
                </li>
                <li className="nav-item px-2">
                  <a
                    className="nav-link  navv-item"
                    aria-current="page"
                   
                  >
                    Aging
                  </a>
                </li>
                <li className="nav-item px-2 ">
                  <a
                    className="nav-link navv-item"
                    aria-current="page"
                    href="#"
                  >
                    Sexual health
                  </a>
                </li>
                <li className="nav-item px-2 ">
                  <a
                    className="nav-link navv-item"
                    aria-current="page"
                    
                  >
                    Lab testing
                  </a>
                </li>
                <li>
                  <div className="d-flex mb-lg-2 line "> </div>
                  <div
                    className="vr "
                    style={{ width: " 2px", height: "24px" }}
                  ></div>
                </li>

                <li className="nav-item px-2 ">
                  <a
                    className="nav-link navv-item"
                    aria-current="page"
                    href="#Contact"
                  >
                    Contact us
                  </a>
                </li>

                <button
                  type="button"
                  id="form-open"
                  className="Navbutton "
                  href="#Login"
                >
                  Log in
                </button>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
