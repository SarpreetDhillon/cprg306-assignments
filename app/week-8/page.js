"use client";

import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [sortBy, setSortBy] = useState('name');
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleSortByName = () => {
    setSortBy('name');
  };

  const handleSortByCategory = () => {
    setSortBy('category');
  };

  const handleItemSelect = (item) => {
    const cleanedItemName = item.name
      .split(',')[0]
      .trim()
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '');
    setSelectedItemName(cleanedItemName);
  };

  return (
    <main className="p-4 bg-gray-900 min-h-screen text-white flex">
      <div className="flex-1">
        <h2 className="text-[30px] font-[700] mb-4">Shopping List</h2>
        <NewItem onAddItem={handleAddItem} />
        <div className="flex mb-4">
          <button onClick={handleSortByName} className="mr-2 bg-orange-500 text-white px-4 py-2 rounded">Name</button>
          <button onClick={handleSortByCategory} className="bg-orange-500 text-white px-4 py-2 rounded">Category</button>
        </div>
        <ItemList items={items} sortBy={sortBy} onItemSelect={handleItemSelect} />
      </div>
      <div className="flex-1">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
