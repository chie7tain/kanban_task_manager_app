import { Input, Button } from "antd";
import { IoCloseSharp } from "react-icons/io5";
const { TextArea } = Input;
import { useState } from "react";
export const AddTask = () => {
  const [subTasks, setSubTasks] = useState([]);
  const [subTask, setSubTask] = useState("");
  const [taskStatus, setTaskStatus] = useState("Todo");
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  return (
    <div>
      <h3>Add New Task</h3>
      {/* task title */}
      <Input
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Task Title"
        value={taskTitle}
      />
      {/* task description */}
      <TextArea
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Task Description"
        value={taskDescription}
      />
      {/* Subtasks */}
      <h4>Subtasks</h4>
      <div>
        <Input
          onChange={(e) => setSubTask(e.target.value)}
          placeholder="Subtask"
          value={subTask}
        />
        <IoCloseSharp />
        <Button>+ Add New Subtask</Button>
      </div>
      {/* task status */}
      <select onChange={(e) => setTaskStatus(e.target.value)}>
        <option value="Todo">Todo</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <Button>Create Task</Button>
    </div>
  );
};
