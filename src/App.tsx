import { Outlet } from "react-router";

export default function App() {
  return (
    <div>
      <header>
        <h1 className="p-2 text-purple-300">Hello World</h1>
      </header>
      <span>right</span>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
