import React from "react";
import {Link} from  'react-router-dom'

const Navbar = (props)=>{


 
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-danger fixed-top ">
          <div className="container-fluid ">
            <img
              src="https://www.thenewsminute.com/sites/all/themes/tnm/The-News-Minute-Logo_mob.png"
              alt="logo"
              style={{ width: "75px" }}
            />
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
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto px-auto">
                <li className="nav-item text-white fs-4">
                  <Link
                    className="nav-link active text-white fs-4"
                    aria-current="page"
                    to={"/general"}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-4 text-white" to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-4 text-white" to="/entertainment">
                    Entertainment
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link fs-4 text-white" to="/health">
                    Health
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link fs-4 text-white" to="/science">
                    science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-4 text-white" to="/sports">
                    sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-4 text-white" to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  
}
export default Navbar;
