import { useState } from "react";
import "./InputBox.css";

const InputBox = ({ addTask }) => {
  const [text, setText] = useState("");
  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleAddTask = () => {
    addTask(text);
    setText("");
  };
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Enter your task ..."
        className="input-box"
        value={text}
        onChange={handleText}
      />
      <button className="add-btn" onClick={handleAddTask}>
        Add
      </button>
    </div>
  );
};

export default InputBox;
