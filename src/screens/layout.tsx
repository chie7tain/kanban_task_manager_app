import { Switch } from "antd";

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
      <nav>
        {/* logo and nav items */}
        <div>
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
          <button>Platform Launch</button>
          <div className="flex flex-col gap-4">
            <h3>All Boards (3)</h3>
            <ul className="flex flex-col gap-2">
              <li>Platform Launch</li>
              <li>Marketing Plan</li>
              <li>Roadmap</li>
              <li>+ Create New Board</li>
            </ul>
            {/* dark mode toggle */}
            <div>
              <img src="/src/assets/icon-light-theme.svg" alt="light theme" />
              {/* switch */}
              <Switch />
              <img src="/src/assets/icon-dark-theme.svg" alt="dark theme" />
            </div>
          </div>
          {/* nav items */}
        </div>
        {/* new task button and settings button */}
        <div>
          {/* new task button */}
          {/* settings button */}
        </div>
      </nav>
      {/* main */}
      <div>{children}</div>
    </div>
  );
}
