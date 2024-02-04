import React, { useEffect, useState } from "react";
import "./App.css";
import questions from "./questions";
import QuestionBox from "./components/QuestionBox";
import { Moon, Sun } from "react-feather";


function App() {
  const [theme, setTheme] = useState("white");

  return (

    <div className="first" style={{ backgroundColor: theme }}>
      <div className="items">
        <div className="header">
          <h1 style={{ color: theme === "white" ? "#333333" : "white" }}>Kalvium</h1>
        </div>
        <div
          className="theme-btn"
          style={{ backgroundColor: theme === "white" ? "#808080" : "white" }}
        >
          {theme === "white" ? (
            <Moon size={60} color="white" onClick={() => setTheme("#808080")} />
          ) : (
            <Sun size={60} onClick={() => setTheme("white")} />
          )}
        </div>
      </div>
      <QuestionBox questions={questions} />
    </div>
  );
}
export default App;