import "./ToDoCard.css";

const ToDoCard = ({ taskText, deleteTask, idx }) => {
  const handleDelete = () => {
    deleteTask(idx);
  };
  return (
    <div className="card-box">
      <span>{taskText}</span>
      <span style={{ cursor: "pointer" }} onClick={handleDelete}>
        {" "}
        ❌{" "}
      </span>
    </div>
  );
};

export default ToDoCard;
