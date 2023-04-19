import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./calendar.css";

export const Calendar = () => {
  return (
    <>
      <div className="calendar-days-container">
        <div className="arrow-calendar-left">
          <FontAwesomeIcon icon={faCircleChevronLeft} className="arrow-left" />
        </div>

        <section className="day-wrap">
          <h3> DIA </h3>
          <h4> # </h4>
        </section>

        <section className="day-wrap">
          <h3> DIA </h3>
          <h4> # </h4>
        </section>

        <div className="current-day-container">
          <section className="current-day-wrap">
            <h3 className="current-day-name"> DIA </h3>
            <h4> # </h4>
          </section>
          <hr className="line-current-day" />
        </div>

        <section className="day-wrap">
          <h3> DIA </h3>
          <h4> # </h4>
        </section>

        <section className="day-wrap">
          <h3> DIA </h3>
          <h4> # </h4>
        </section>
        <div className="arrow-calendar-right">
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className="arrow-right"
          />
        </div>
      </div>
    </>
  );
};
