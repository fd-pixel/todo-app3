import React from "react";
import { useState, useEffect } from "react";
const Header = () => {
  const [clock, setClock] = useState("");
  const [greetings, setGreetings] = useState("");

  useEffect(() => {
    setInterval(() => {
      setClock(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  const options = {
    weekday: "long",
    year: "numeric",
    day: "numeric",
    month: "long",
  };
  const date = new Date().toLocaleDateString("en-US", options);

  useEffect(() => {
    if (clock.slice(0, 2) > 6 && clock.slice(0, 2) <= 11) {
      setGreetings("Good Morning");
    } else if (clock.slice(0, 2) > 11 && clock.slice(0, 2) <= 15) {
      setGreetings("Good Afternoon");
    } else if (clock.slice(0, 2) > 15 && clock.slice(0, 2) <= 21) {
      setGreetings("Good Evening");
    } else if (clock.slice(0, 2) > 22 || clock.slice(0, 2) <= 6) {
      setGreetings("Good Night");
    }
  }, [clock]);

  return (
    <section className="header__container">
      <h1 className="sr-only">HELLO</h1>
      <span className="header__date"> {date} </span>
      {/* <div className="header__brand">
        <h2 className="header__title">ToDo</h2>
      </div> */}
      <div className="header__period">
        <h3 className="header__greetings"> {greetings}</h3>
        <h4 className="header__clock"> {clock} </h4>
      </div>
    </section>
  );
};

export default Header;
