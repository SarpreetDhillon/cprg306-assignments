"use client";

import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [sortBy, setSortBy] = useState('name');

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleSortByName = () => {
    setSortBy('name');
  };

  const handleSortByCategory = () => {
    setSortBy('category');
  };

  return (
    <main className="p-4 bg-gray-900 min-h-screen text-white">
      <h2 className="text-[30px] font-[700] mb-4">Shopping List</h2>
      <NewItem onAddItem={handleAddItem} />
      <div className="flex mb-4">
        <button onClick={handleSortByName} className="mr-2 bg-orange-500 text-white px-4 py-2 rounded">Name</button>
        <button onClick={handleSortByCategory} className="bg-orange-500 text-white px-4 py-2 rounded">Category</button>
      </div>
      <ItemList items={items} sortBy={sortBy} />
    </main>
  );
}
