


import React from "react";
import { useDispatch } from "react-redux";
import { habitDone, habitNone, habitUnDone } from "../redux/features/habitSlice";

const DayView = ({ day }) => {
  const today = new Date();
  const todayDay = today.getDay();

  const dispatch = useDispatch();

  const date = new Date(day.yyyy, day.mm, day.dd);

  const handleMarkStatus = (status) => {
    if (day.id > todayDay) {
      // Alert user that they cannot change status for future days
      alert("You cannot change your next days' status.");
      return;
    }

    // Dispatch corresponding action based on the status
    switch (status) {
      case "done":
        dispatch(habitDone(day.id));
        break;
      case "undone":
        dispatch(habitUnDone(day.id));
        break;
      case "none":
        dispatch(habitNone(day.id));
        break;
      default:
        break;
    }
  };

  return (
    <div className="day-container">
      <h5 className="text-center">{day.day}</h5>
      <p className="text-center">{`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</p>
      <i
        className={`fa-solid fa-circle-check circle-icon ${day.isDone ? "active" : ""}`}
        onClick={() => handleMarkStatus("done")}
      ></i>
      <i
        className={`fa-solid fa-circle-xmark circle-icon ${!day.isDone ? "active" : ""}`}
        onClick={() => handleMarkStatus("undone")}
      ></i>
      <i
        className={`fa-solid fa-circle-minus circle-icon ${day.isDone === "" ? "active" : ""}`}
        onClick={() => handleMarkStatus("none")}
      ></i>
    </div>
  );
};

export default DayView;
