

import React from "react";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../redux/features/habitSlice";
import { useNavigate } from "react-router-dom";

const Habit = ({ habit }) => {
  const today = new Date();
  const todayDay = today.getDay();
  let countDone = 0;

  // Loop through habit's weekLog to count completed habits
  for (let i = 0; i < habit.weekLog.length; i++) {
    if (habit.weekLog[i].isDone === true) {
      countDone++;
    }
  }

  // Use the useNavigate hook from react-router-dom and store it in the navigate variable
  const navigate = useNavigate();

  // Use the useDispatch hook and store it in the dispatch variable
  const dispatch = useDispatch();

  // Function called when the delete button on the habit list is clicked
  const handleDelete = () => {
    dispatch(deleteHabit(habit.id));
    alert("Your habit has been deleted successfully");
  }

  // This function is called when the week view button is clicked.
  // It sets the current habit's ID in local storage and navigates to the week-view page.
  const setId = () => {
    localStorage.setItem("id", habit.id);
    navigate("/week-view");
  }

  return (
    <div className="habit">
      <div className="habit-left">
        <i className="fa-solid fa-hashtag"></i>
        <div>
          <h4 style={{ textTransform: "capitalize" }}>{habit.name}</h4>
          <p className="day-complete">{countDone}/{todayDay + 1} days</p>
        </div>
      </div>
      <div className="habit-right">
        <div className="log-btn" onClick={setId}>
          <i className="fa-solid fa-calendar-week"></i>
          Week View
        </div>
        <i className="fa-solid fa-trash" onClick={handleDelete}></i>
      </div>
    </div>
  );
};

export default Habit;
