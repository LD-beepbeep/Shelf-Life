// src/screens/Settings.js
import React from "react";

export default function Settings({ toggleDark, dark }) {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Settings</h2>
      <div className="flex items-center justify-between">
        <span>Dark Mode</span>
        <button
          onClick={toggleDark}
          className="px-4 py-2 rounded bg-primary text-white"
        >
          {dark ? "Disable" : "Enable"}
        </button>
      </div>
    </div>
  );
}
