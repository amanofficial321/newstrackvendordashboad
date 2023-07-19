import React from "react";
import "../CSS/Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbarcontainer bg-dark">
        <img
          src={require("../Images/NewsTrackLogo.jpg")}
          className="newslogo"
        />

        <Link to={"/dashboard"}>
          <p className="dashboard">MAIN DASHBOARD</p>
        </Link>

        <div className="dropdown dropdowns">
          <p
            className=" dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            REGISTRATION
          </p>
          {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link to="/role">
              <p className="dropdown-item">ROLE BASED USER</p>
            </Link>
          </div> */}
        </div>

        <div className="dropdown dropdowns">
          <p
            className=" dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            POST NEWS
          </p>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link to={"/news-approval"} className="dropdown-item">
              APPROVE NEWS
            </Link>
            <Link to={"/addNewsArticle"} className="dropdown-item">
              ADD NEWS ARTICLE
            </Link>
          </div>
        </div>

        <div className="dropdown dropdowns">
          <p
            className=" dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            AD MANAGEMENT
          </p>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              CREATE AN AD
            </a>
            <a className="dropdown-item" href="#">
              AD LIST
            </a>
            <a className="dropdown-item" href="#">
              AD SETTING
            </a>
            <a className="dropdown-item" href="#">
              AD MANAGEMENT
            </a>
            <a className="dropdown-item" href="#">
              AD SETTING TOPICS
            </a>
          </div>
        </div>

        <div className="dropdown dropdowns">
          <p
            className=" dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            ROLES
          </p>
          {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link to={"/RoleManagement"} className="dropdown-item">
              ROLES MANAGEMENT
            </Link>
          </div> */}
        </div>

        <div className="dropdown dropdowns">
          <Link to={"/epaper"}>
            <p className="epaper">E-Paper</p>
          </Link>
        </div>
        <div className="dropdown dropdowns">
          <Link to={"/TemplateSelection"}>
            <p className="epaper">Template Selection</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
