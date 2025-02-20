import { Outlet } from "react-router";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <h1 className="p-2 text-black text-9xl">Welcome to my portfolio</h1>
      </header>
      <main className="flex-grow container mx-auto px-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
