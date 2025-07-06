// src/screens/Home.js
import React from "react";

export default function Home({ items }) {
  const now = new Date();
  const weekAgo = new Date(now);
  weekAgo.setDate(now.getDate() - 7);

  const weeklyTotal = items
    .filter((item) => new Date(item.dateAdded) >= weekAgo)
    .reduce((sum, item) => sum + parseFloat(item.price), 0);

  const expiringSoon = items.filter((item) => {
    const expiry = new Date(item.expiry);
    const daysLeft = (expiry - now) / (1000 * 60 * 60 * 24);
    return daysLeft <= 3 && daysLeft >= 0;
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to ShelfLife 📦</h1>
      <p className="text-muted">Track your groceries, avoid waste, and save money.</p>

      <div className="mt-6 grid gap-4">
        <div className="p-4 rounded-xl bg-purple-100 dark:bg-purple-900">
          <p className="text-sm">This week’s expenses:</p>
          <p className="text-2xl font-bold">€{weeklyTotal.toFixed(2)}</p>
        </div>
        <div className="p-4 rounded-xl bg-yellow-100 dark:bg-yellow-800">
          <p className="text-sm">Items expiring soon:</p>
          <p className="text-xl">{expiringSoon.length} items</p>
        </div>
      </div>
    </div>
  );
}
