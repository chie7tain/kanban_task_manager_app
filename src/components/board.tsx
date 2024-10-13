import { Modal } from "antd";
import { useState } from "react";
export default function Board() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    // active board state
    <main>
      <div>
        {/* column Heading */}
        <div>
          {/* icon */}
          <img src="/src/assets/todo_oval.svg" alt="board" />
          {/* column title */}
          <h4>Todo</h4>
          {/* task count */}
          <span>(0)</span>
        </div>
        {/* column tasks list */}
        <ul>
          {/* task item */}
          <li className="cursor-pointer border-b border-gray-200 pb-4">
            <div onClick={showModal}>
              {/* task title */}
              <h5>Build UI for onboarding flow</h5>
              {/* task subtask count */}
              <span>2 of 3 sub tasks</span>
            </div>
          </li>
        </ul>
      </div>
      {/* // default board state */}
      <div className="flex flex-col items-center justify-center h-full">
        <h1>This board is empty. Create a new column to get started.</h1>
        <button>+ Add New Column</button>
      </div>
      {/* task details modal */}
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {/* task title */}
        <div>
          <h2>
            Research pricing points of various competitors and trial different
            business models
          </h2>
          {/* edit task button */}
          <img src="/src/assets/icon-vertical-ellipsis.svg" alt="edit" />
        </div>
        {/* task description */}
        <p>
          We know what we're planning to build for version one. Now we need to
          finalise the first pricing model we'll use. Keep iterating the
          subtasks until we have a coherent proposition.
        </p>
        {/* subtasks */}
        {/* title */}
        <h3>Subtasks 2 of 3</h3>
        {/* subtask list */}
        <ul>
          {/* subtask item */}
          <li>
            <input type="checkbox" />
            <p>Research competitor pricing and business models</p>
          </li>
          <li>
            <input type="checkbox" />
            <p>Outline a business model that works for our solution</p>
          </li>
          <li>
            <input type="checkbox" />
            <p>
              Talk to potential customers about our proposed solution and ask
              for fair price expectancy
            </p>
          </li>
        </ul>
        {/* task current status */}
        <h3>Current Status</h3>
        <select>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </Modal>
    </main>
  );
}
