// src/screens/AddItem.js
import React, { useState, useEffect } from "react";

export default function AddItem({ onAdd }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("");
  const [expiry, setExpiry] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("shelflife-items") || "[]");
    const matches = saved.filter((item) =>
      item.name.toLowerCase().startsWith(name.toLowerCase())
    );
    setSuggestions(matches);
  }, [name]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      name,
      price,
      quantity,
      category,
      expiry,
      dateAdded: new Date().toISOString(),
    };
    onAdd(item);
    setName("");
    setPrice("");
    setQuantity(1);
    setCategory("");
    setExpiry("");
  };

  const handleSuggestionClick = (sug) => {
    setName(sug.name);
    setPrice(sug.price);
    setCategory(sug.category);
  };

  return (
    <form className="p-6 space-y-4" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold">Add Grocery Item</h2>

      <input
        className="w-full p-2 rounded border"
        type="text"
        placeholder="Name (e.g. Milk)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      {suggestions.length > 0 && (
        <ul className="text-sm text-muted bg-zinc-100 rounded">
          {suggestions.slice(0, 3).map((sug, idx) => (
            <li
              key={idx}
              onClick={() => handleSuggestionClick(sug)}
              className="px-2 py-1 cursor-pointer hover:bg-zinc-200"
            >
              {sug.name} – €{sug.price} – {sug.category}
            </li>
          ))}
        </ul>
      )}

      <input
        className="w-full p-2 rounded border"
        type="number"
        placeholder="Price (€)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <input
        className="w-full p-2 rounded border"
        type="number"
        placeholder="Quantity (default 1)"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <input
        className="w-full p-2 rounded border"
        type="text"
        placeholder="Category (Fridge / Pantry / Freezer)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        className="w-full p-2 rounded border"
        type="date"
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
        required
      />

      <button type="submit" className="w-full py-2 bg-primary text-white rounded">
        Save Item
      </button>
    </form>
  );
}
