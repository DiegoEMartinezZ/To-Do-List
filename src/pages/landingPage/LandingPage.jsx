import React from "react";
import { GeneralButton } from "../../resources/buttons/generalButtons/GeneralButton";
import "./landingPage.css";

export const LandingPage = () => {
  return (
    <>
      <main className="landing-page-container">
        <section className="title-subtitle-container">
          <h1 className="app-title"> To-Do-List</h1>
          <h3 className="app-subtitle"> version 1.0 </h3>
          <hr className="line" />
        </section>

        <section className="introduction-container">
          <p className="app-introduction">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum amet
            quas unde vel reprehenderit quibusdam expedita accusantium nisi
            corporis perspiciatis incidunt odit minima maxime, mollitia tempora
            eveniet ea, aliquam veniam.{" "}
          </p>
        </section>

        <GeneralButton titleButton={"Empezar"} page={"/home"} />
      </main>
    </>
  );
};
