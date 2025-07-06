import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./screens/Home";
import AddItem from "./screens/AddItem";
import AllItems from "./screens/AllItems";
import Settings from "./screens/Settings";

function NavBar() {
  const activeClass =
    "text-purple-600 font-bold border-b-2 border-purple-600";
  const inactiveClass = "text-gray-600 dark:text-gray-300";

  return (
    <nav className="flex justify-around p-4 bg-gray-100 dark:bg-gray-800">
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
      >
        Home
      </NavLink>
      <NavLink
        to="/add"
        className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
      >
        Add Item
      </NavLink>
      <NavLink
        to="/items"
        className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
      >
        All Items
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive }) => (isActive ? activeClass : inactiveClass)}
      >
        Settings
      </NavLink>
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddItem />} />
        <Route path="/items" element={<AllItems />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}
