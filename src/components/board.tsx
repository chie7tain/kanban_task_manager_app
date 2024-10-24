import { Input, Modal, Popover, Select } from "antd";

import { useState } from "react";
interface TaskType {
  title: string;
  description: string;
  subtasks: string[];
  status: string;
}
export default function Board() {
  const [columns, setColumns] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isNewColumnModalOpen, setIsNewColumnModalOpen] = useState(false);
  const [newColumnTitle, setNewColumnTitle] = useState("");
  const [task, setTask] = useState<TaskType>({
    title: "",
    description: "",
    subtasks: [],
    status: "Not Started",
  });
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const popoverContent = (
    <div>
      <p>Edit Task</p>
      <p>Delete Task</p>
    </div>
  );

  const handleOpenNewColumnModal = () => {
    setIsNewColumnModalOpen(true);
  };
  const addNewColumn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (newColumnTitle.trim() === "") return;
    if (columns.includes(newColumnTitle)) return;
    if (e.currentTarget.textContent === "Cancel") return;

    setColumns([...columns, newColumnTitle]);
    setIsNewColumnModalOpen(false);
    setNewColumnTitle("");
  };
  return (
    // active board state
    <main className="bg-gray-tertiary min-h-screen">
      {/* column container */}
      <div className="flex justify-between w-full overflow-x-scroll">
        {columns.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-screen w-full">
            <h1 className="text-gray-primary font-bold text-2xl text-center mb-4">
              This board is empty. Create a new column to get started.
            </h1>
            <button
              onClick={handleOpenNewColumnModal}
              className="bg-blue-primary text-white px-4 py-2 rounded-full"
            >
              + Add New Column
            </button>
          </div>
        ) : (
          <>
            {/* column */}
            {columns.map((column, index) => (
              <div className="flex flex-col gap-4 px-4">
                <div className="flex items-center gap-2">
                  <img src="/src/assets/todo_oval.svg" alt="board" />
                  <h4>{column}</h4>
                  <span>(0)</span>
                </div>
                <ul>
                  <li className="cursor-pointer border-b border-gray-200 pb-4 bg-white rounded-lg w-96 mb-4">
                    <button
                      onClick={showModal}
                      className="flex flex-col gap-2 p-4 w-full"
                    >
                      <h5 className="text-black-secondary font-bold">
                        Build UI for onboarding flow
                      </h5>
                      <span className="text-gray-primary">
                        2 of 3 sub tasks
                      </span>
                    </button>
                  </li>
                </ul>
              </div>
            ))}
          </>
        )}
      </div>

      {/* task details modal */}
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {/* task title */}
        <div className="flex items-center justify-between">
          <h2 className="text-black-secondary font-bold text-2xl">
            Research pricing points of various competitors and trial different
            business models
          </h2>
          {/* edit task button */}
          <Popover content={popoverContent}>
            <img
              src="/src/assets/icon-vertical-ellipsis.svg"
              alt="edit"
              className="cursor-pointer"
            />
          </Popover>
        </div>
        {/* task description */}
        <p className="text-gray-primary">
          We know what we're planning to build for version one. Now we need to
          finalise the first pricing model we'll use. Keep iterating the
          subtasks until we have a coherent proposition.
        </p>
        {/* subtasks */}
        {/* title */}
        <h3 className="text-black-secondary my-4">Subtasks (2 of 3)</h3>
        {/* subtask list */}
        <ul>
          {/* subtask item */}
          <li className="flex items-center gap-2 py-5 px-2 bg-gray-tertiary my-2 rounded-md">
            <input type="checkbox" className="w-4 h-4 ring-offset-blue-700" />
            <p className="text-gray-primary ring-offset-blue-700">
              Research competitor pricing and business models
            </p>
          </li>
          <li className="flex items-center gap-2 py-5 px-2 bg-gray-tertiary my-2 rounded-md">
            <input type="checkbox" className="w-4 h-4" />
            <p className="text-gray-primary ring-offset-blue-600">
              Outline a business model that works for our solution
            </p>
          </li>
          <li className="flex items-center gap-2 py-5 px-2 bg-gray-tertiary my-2 rounded-md">
            <input type="checkbox" className="w-4 h-4" />
            <p className="text-gray-primary ring-offset-blue-600">
              Talk to potential customers about our proposed solution and ask
              for fair price expectancy
            </p>
          </li>
        </ul>
        {/* task current status */}
        <h3 className="text-black-secondary my-4">Current Status</h3>
        <Select
          className="w-full"
          options={[
            {
              value: "Not Started",
              label: <span>Status</span>,
            },
            {
              value: "Doing",
              label: <span>Doing</span>,
            },
            {
              value: "Completed",
              label: <span>Completed</span>,
            },
            {
              value: "Todo",
              label: <span>Todo</span>,
            },
          ]}
          defaultValue="Not Started"
        />
      </Modal>

      {/* new column modal */}
      <Modal
        open={isNewColumnModalOpen}
        onOk={addNewColumn}
        onCancel={handleCancel}
      >
        <h2>Add New Column</h2>
        <Input
          className="w-full border-gray-primary rounded-md p-2 outline-none"
          type="text"
          value={newColumnTitle}
          onChange={(e) => setNewColumnTitle(e.target.value)}
          placeholder="Column Name"
        />
      </Modal>
      {/* add  */}
    </main>
  );
}

// <div className="flex flex-col gap-4 px-4">
//         <div className="flex items-center gap-2">
//           <img src="/src/assets/todo_oval.svg" alt="board" />
//           <h4>Todo</h4>
//           <span>(0)</span>
//         </div>
//         <ul>
//           {/* task item */}
//           <li className="cursor-pointer border-b border-gray-200 pb-4 bg-white rounded-lg w-96 mb-4">
//             <button
//               onClick={showModal}
//               className="flex flex-col gap-2 p-4 w-full"
//             >
//               <h5 className="text-black-secondary font-bold">
//                 Build UI for onboarding flow
//               </h5>
//               <span className="text-gray-primary">2 of 3 sub tasks</span>
//             </button>
//           </li>
//         </ul>
//       </div>
//       <div className="flex flex-col gap-4 px-4">
//         <div className="flex items-center gap-2">
//           <img src="/src/assets/todo_oval.svg" alt="board" />
//           <h4>Todo</h4>
//           <span>(0)</span>
//         </div>
//         <ul>
//           {/* task item */}
//           <li className="cursor-pointer border-b border-gray-200 pb-4 bg-white rounded-lg w-96 mb-4">
//             <button
//               onClick={showModal}
//               className="flex flex-col gap-2 p-4 w-full"
//             >
//               <h5 className="text-black-secondary font-bold">
//                 Build UI for onboarding flow
//               </h5>
//               <span className="text-gray-primary">2 of 3 sub tasks</span>
//             </button>
//           </li>
//         </ul>
//       </div>
