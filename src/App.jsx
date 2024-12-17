/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import About from "./components/About/About";
import Home from "./components/home/Home";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

function App() {
  const [count, setCount] = useState(0);
  let [clickedBoxed, setClickedBoxed] = useState(new Array(9).fill(0));
  let [timesClicked, setTimesClicked] = useState(0);
  let [gameStarted, setGameStarted] = useState(undefined);

  const handleOnClick = (ind) => {
    console.log({ ind });
    setGameStarted(1);
    let data = clickedBoxed;
    data[ind] = 1;
    setClickedBoxed(data);
    setTimesClicked((pre) => pre + 1);
    document.getElementById(ind).innerText = timesClicked % 2 == 0 ? "X" : "O";
  };
  return (
    <div style={{ backgroundColor: "#14bdac", padding: "24px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "300px",
          margin: "auto",
        }}
      >
        {new Array(9).fill(" ").map((data, index) => (
          <div
            key={index}
            style={{
              width: "100px",
              height: "100px",
              backgroundColor: "",
              borderBottom:
                index != 6 && index != 7 && index != 8
                  ? "8px solid rgb(94, 94, 94)"
                  : "",
              borderRight:
                index != 2 && index != 5 && index != 8
                  ? "8px solid rgb(94, 94, 94)"
                  : "",
              pointerEvents: clickedBoxed[index] ? "none" : "auto",
              cursor: clickedBoxed[index] ? "none" : "pointer",
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => handleOnClick(index)}
            id={index}
          ></div>
        ))}
      </div>

      {/* <Home/>
    <About/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>

    // redux tutorial
    // <div className=" bg-slate-300">
    //   <h1>Learn about redux</h1>
    //   <AddTodo />
    //   <Todo />
    // </div>
  );
}

export default App;

// store

// configureStore from redux

// reducers
// reducers are particular to slices and they are responsible to mutate that particular state

// actions

// slice

// async
