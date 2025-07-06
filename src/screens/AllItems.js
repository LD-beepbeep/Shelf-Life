// src/screens/AllItems.js
import React from "react";

export default function AllItems({ items }) {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">All Items</h2>
      {items.length === 0 ? (
        <p className="text-muted">No items yet. Add some!</p>
      ) : (
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="p-3 rounded bg-zinc-100 dark:bg-zinc-800">
              <div className="font-semibold">{item.name}</div>
              <div className="text-sm text-muted">
                €{item.price} • {item.category} • {item.expiry}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
