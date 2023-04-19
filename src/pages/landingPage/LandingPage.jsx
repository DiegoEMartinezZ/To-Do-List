import React from "react";
import { GeneralButton } from "../../resources/buttons/GeneralButton";
import "./landingPage.css";

export const LandingPage = () => {
  return (
    <>
      <div className="landing-page-container">
        <div className="title-subtitle-container">
          <h1 className="app-title"> To-Do-List</h1>
          <h3 className="app-subtitle"> version 1.0 </h3>
          <hr className="line" />
        </div>

        <section className="introduction-container">
          <p className="app-introduction">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum amet
            quas unde vel reprehenderit quibusdam expedita accusantium nisi
            corporis perspiciatis incidunt odit minima maxime, mollitia tempora
            eveniet ea, aliquam veniam.{" "}
          </p>
        </section>

        <GeneralButton titleButton={"DEMO"} page={"/home"} />
      </div>
    </>
  );
};
