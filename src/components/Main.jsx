import React from "react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  const [tasks, setTasks] = useState([
    // {
    //   id: 1,
    //   text: "Study React Pre-Class Notes",
    //   day: "Feb 5th at 2:30pm",
    //   isDone: false,
    // },
    // {
    //   id: 2,
    //   text: "Feed the Dog",
    //   day: "Feb 6th at 1:30pm",
    //   isDone: false,
    // },
    // {
    //   id: 3,
    //   text: "Attend in-Class",
    //   day: "Feb 7th at 20:00pm",
    //   isDone: false,
    // },
  ]);
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const showError1Message = () => {
    toast.error("Both a task and a due date should be entered", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const showError2Message = () => {
    toast.error("Please enter a due date ", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const showError3Message = () => {
    toast.error("Please enter a task ", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };
  const deleteTask = (deletedTaskId) => {
    setTasks(tasks.filter((task) => task.id !== deletedTaskId));
  };

  console.log(text, time);
  return (
    <div className="container">
      <div className="box-header">
        <h1>Todos</h1>
      </div>
      <div className="form-control">
        {" "}
        <h2>Task</h2>
        <input
          type="text"
          placeholder="Enter Task"
          value={text}
          onChange={handleTextChange}
        />
      </div>
      <h2>Due Date</h2>
      <div className="form-control">
        <input
          type="date"
          placeholder="Enter Time"
          value={time}
          onChange={handleTimeChange}
        />
      </div>
      <br></br>
      <button
        className="btn"
        onClick={() => {
          if (text.length !== 0 && time.length !== 0) {
            setTasks([
              ...tasks,
              { id: Date.now(), text, day: time, isDone: false },
            ]);
            setTime("");
            setText("");
          } else if (text.length !== 0) {
            showError2Message();
          } else if (time.length !== 0) {
            showError3Message();
          } else if (text.length === 0 && time.length === 0) {
            showError1Message();
          }
        }}
      >
        Add Task
      </button>
      <ToastContainer autoClose={2000} />;
      {tasks.map((task, id) => {
        return (
          <div key={id} className="task">
            <div className="task-info">
              <div className="index">{id + 1}</div>{" "}
              <div className="text">{task.text}</div>
              <div className="time">{task.day}</div>
            </div>
            <div className="deleteicon">
              <FaTimes
                onClick={() => {
                  deleteTask(task.id);
                }}
                style={{ color: "red", cursor: "pointer" }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
