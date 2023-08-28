import { useState } from "react";
import { Header, InputBox, ToDoCard } from "./components";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (taskText) => {
    setTasks((currTasks) => [...currTasks, taskText]);
  };
  const deleteTask = (idx) => {
    setTasks((currTasks) => {
      /**
      * Wrong method 
      * Dont' mutate the state variable directly
      */
      // currTasks.splice(idx,1);
      // return currTasks;
      /**
       * Wrong method
       * currTasks and newTasks are still same
       */

      // const newTasks = currTasks
      // if(currTasks == newTasks){
      //   console.log("same refrence")
      // }
      // newTasks.splice(idx,1);
      // return newTasks;
      
      /**
       * Correct method
       * newTasks is a deep copy of currTasks
       * give special attention when you have nested object or array
       */
      
      const newTasks = [...currTasks];
      newTasks.splice(idx, 1);
      return newTasks;
      
    });
  };
  return (
    <div className="home-component">
      <Header />
      <InputBox addTask={addTask} />
      <div className="tasks-container">
        {tasks.map((task, idx) => (
          <ToDoCard
            key={idx}
            taskText={task}
            idx={idx}
            deleteTask={deleteTask}
          />
        ))}
        {/* <ToDoCard /> */}
        {/* <ToDoCard /> */}
      </div>
    </div>
  );
}

export default App;
