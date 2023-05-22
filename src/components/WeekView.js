

import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import DayView from "./DayView";
import Navbar from "./Navbar";

const WeekView = () => {
  const habitsState = useSelector((state) => state.habits);

  const habit = habitsState.find(
    (habit) => habit.id === Number(localStorage.getItem("id"))
  );

  return (
    <>
      <Navbar name="Week View" />
      <h1 className="text-center" style={{ textTransform: "capitalize" }}>
        {habit.name}
      </h1>
      <div className="days-container">
        {habit.weekLog.map((day, index) => (
          <DayView day={day} key={index} />
        ))}
      </div>
      <div className="d-grid gap-2 col-6 mx-auto mt-5">
        <button className="btn btn-primary" type="button">
          <Link to="/">Back to Detail View</Link>
        </button>
      </div>
    </>
  );
};

export default WeekView;
