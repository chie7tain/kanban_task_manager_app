import { Switch } from "antd";
import { Outlet, NavLink } from "react-router-dom";

import { AddTask } from "../components/addTask";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      {/* sidebar */}
      <aside className="sm:block hidden">
        {/* logo */}
        <div>
          <img
            className="hidden sm:block"
            src="/src/assets/logo-dark.svg"
            alt="logo"
          />
        </div>
      </aside>
      {/* navbar */}
      <nav className="flex justify-between items-center px-4 bg-white border-b border-gray-secondary py-4">
        {/* logo and nav items */}
        <div className="flex items-center gap-4">
          {/* logo */}
          <div>
            <img
              className="sm:hidden"
              src="/src/assets/logo-mobile.svg"
              alt="logo"
            />
          </div>
          {/* logo */}

          {/* nav items */}
          <div className="flex flex-col gap-4 relative">
            <button className="text-xl font-bold flex items-center gap-2">
              Platform Launch{" "}
              <img src="/src/assets/icon-chevron-down.svg" alt="chevron down" />
            </button>
            <div className="flex flex-col gap-4 absolute top-16 left-0 bg-white py-2 rounded-lg w-64 border">
              <h3 className="text-gray-primary text-sm font-bold px-4">
                All Boards (3)
              </h3>
              <ul className="flex flex-col gap-1 pr-4">
                <li>
                  <NavLink to="/">
                    {({ isActive }) => (
                      <span
                        className={
                          isActive
                            ? "flex items-center gap-2 bg-blue-primary text-white p-4 rounded-r-full"
                            : "flex items-center gap-2 p-4"
                        }
                      >
                        <img
                          src={
                            isActive
                              ? "/src/assets/fluent_board-split-24-regular.svg"
                              : "/src/assets/icon-board.svg"
                          }
                          alt="board"
                        />
                        Platform Launch
                      </span>
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/marketing-plan">
                    {({ isActive }) => (
                      <span
                        className={
                          isActive
                            ? "flex items-center gap-2 bg-blue-primary text-gray-primary p-4 rounded-r-full"
                            : "flex items-center text-gray-primary gap-2 p-4"
                        }
                      >
                        <img
                          src={
                            isActive
                              ? "/src/assets/fluent_board-split-24-regular.svg"
                              : "/src/assets/icon-board.svg"
                          }
                          alt="board"
                        />
                        Marketing Plan
                      </span>
                    )}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/roadmap">
                    {({ isActive }) => (
                      <span
                        className={
                          isActive
                            ? "flex items-center gap-2 bg-blue-primary text-white p-4 rounded-r-full"
                            : "flex items-center text-gray-primary gap-2 p-4"
                        }
                      >
                        <img
                          src={
                            isActive
                              ? "/src/assets/fluent_board-split-24-regular.svg"
                              : "/src/assets/icon-board.svg"
                          }
                          alt="board"
                        />
                        Roadmap
                      </span>
                    )}
                  </NavLink>
                </li>

                <li className="text-blue-primary">
                  <NavLink to="/new-board">
                    <span className="flex items-center gap-2 text-blue-primary p-4 rounded-r-full">
                      <img
                        className="text-blue-primary"
                        src="/src/assets/fluent_board-split-24-regular-blue.svg"
                        alt="board"
                      />
                      + Create New Board
                    </span>
                  </NavLink>
                </li>
              </ul>
              {/* dark mode toggle */}
              <div className="flex gap-2 bg-gray-tertiary p-4 rounded-lg items-center justify-center w-56 mx-4">
                <img
                  src="/src/assets/icon-light-theme.svg"
                  alt="light theme"
                  className="mr-2"
                />
                {/* switch */}
                <Switch />
                <img
                  src="/src/assets/icon-dark-theme.svg"
                  alt="dark theme"
                  className="ml-2"
                />
              </div>
            </div>
          </div>
          {/* nav items */}
        </div>
        {/* new task button and settings button */}
        <div className="flex items-center gap-4">
          {/* new task button */}
          <button className="hidden sm:block bg-blue-primary text-white p-2 rounded-full">
            + <span>Add New Task</span>
          </button>
          <button className="sm:hidden bg-blue-primary text-white p-2 rounded-full w-14 h-8 flex items-center justify-center">
            <img src="/src/assets/icon-add-task-mobile.svg" alt="add task" />
          </button>
          {/* settings button */}
          <button className="">
            <img src="/src/assets/icon-vertical-ellipsis.svg" alt="settings" />
          </button>
        </div>
      </nav>
      {/* main */}
      <div>{children}</div>
    </div>
  );
}
