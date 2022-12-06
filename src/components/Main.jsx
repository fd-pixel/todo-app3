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

  const showSuccessMessage = () => {
    toast.success("Congrats!!!New task entered");
  };

  const showError1Message = () => {
    toast.error("Both a task and a due date should be entered", {});
  };
  const showError2Message = () => {
    toast.error("Please enter a due date ", {});
  };
  const showError3Message = () => {
    toast.error("Please enter a task ", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const showError4Message = () => {
    toast.error("You can't create same task in the same day ", {
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
          if (text !== "" && time !== "") {
            const newtext = text.trim();
            setTasks([
              ...tasks,
              { id: Date.now(), text: newtext, day: time, isDone: false },
            ]);
            setTime("");
            setText("");
            showSuccessMessage();
          } else if (
            text.length !== 0 &&
            time.length !== 0 &&
            tasks.text === text
          ) {
            showError4Message();
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
      <ToastContainer autoClose={1000} />
      {tasks.map((task, id) => {
        return (
          <div key={id} className="task">
            <div className="task-info">
              <div className="index">{id + 1}</div>{" "}
              <div className="text">{task.text}</div>
              <div className="time">{task.day}</div>
            </div>
            <div className="icons">
              <button className="btn" onClick={() => {}}>
                Edit
              </button>
              <FaTimes
                onClick={() => {
                  deleteTask(task.id);
                }}
                style={{ color: "red", cursor: "pointer", marginLeft: "20px" }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
