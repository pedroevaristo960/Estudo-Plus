// src/components/Layout.jsx
import Navbar from "./Navbar";
import Header from "./Header";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
