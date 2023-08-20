import React from "react";
import "../CSS/Maindashboard.css";
import Navbar from "./Navbar";

const Maindashboard = () => {
  return (
    <>
      <div className="maindashboard">
        <div className="navbarbox">
          <Navbar />
        </div>
        <div className="dashbox ">
          <p className="dashboardtext">MAIN DASHBOARD</p>

          <h3>Upcoming Features :-</h3>

          <div className="userstatuscontainer">
            <div
              style={{ backgroundColor: "transparent", opacity: "0.5" }}
              className="userstatusbox5  "
            >
              <img
                className="toiimage"
                src={require("../Images/Mobile App.jpg")}
                alt="no"
              />
              <h4 className="text-center">Mobile Application</h4>
            </div>
            <div
              style={{ backgroundColor: "transparent", opacity: "0.5" }}
              className="userstatusbox5  "
            >
              <img
                className="toiimage"
                src={require("../Images/Advertisement Image.jpg")}
                alt="no"
              />
              <h4 className="text-center">Advertising Management</h4>
            </div>
            <div
              style={{ backgroundColor: "transparent", opacity: "0.5" }}
              className="userstatusbox5  "
            >
              <img
                className="toiimage"
                src={require("../Images/Analytics.webp")}
                alt="no"
              />
              <h4 className="text-center">Analytics Dashboard</h4>
            </div>
            <div
              style={{ backgroundColor: "transparent", opacity: "0.5" }}
              className="userstatusbox5  "
            >
              <img
                className="toiimage"
                src={require("../Images/AI Image.jpg")}
                alt="no"
              />
              <h4 className="text-center">AI Features</h4>
            </div>
          </div>
          <h3 className="mt-4">Self Help Videos :-</h3>
        </div>
      </div>
    </>
  );
};

export default Maindashboard;
