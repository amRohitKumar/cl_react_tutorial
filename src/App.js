import { Header, InputBox, ToDoCard } from "./components";
import "./App.css";

function App() {
  return (
    <div className="home-component">
      <Header />
      <InputBox />
      <div className="tasks-container">
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
        <ToDoCard />
      </div>
    </div>
  );
}

export default App;
