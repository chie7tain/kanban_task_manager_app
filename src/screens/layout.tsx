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
