import React from "react";
import "./App.css";
import Post from "./components/PostComponent";

function getButtonText() {
  return "Click on me!";
}

function App() {
  const someText = { text: "Click This" };
  const inputStyle = { backgroundColor: "orange", color: "white" }; // you can store style inside object

  return (
    <div>
      <Post />
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={inputStyle}>{someText.text}</button>
    </div>
  );
}

export default App;
