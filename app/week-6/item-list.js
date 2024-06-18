'use client';

import { useState } from 'react';
import Item from './item';
import items from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');

  
  let sortedItems = [...items];

  
  if (sortBy === 'name') {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'category') {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
  }

  
  const groupedItems = sortedItems.reduce((acc, item) => {
    const category = item.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});


  const sortedCategories = Object.keys(groupedItems).sort((a, b) => a.localeCompare(b));

  return (
    <div>
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setSortBy('name')}
          className={`px-4 py-2 bg-gray-800 text-white rounded ${sortBy === 'name' ? 'bg-orange-500' : ''}`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-4 py-2 bg-gray-800 text-white rounded ${sortBy === 'category' ? 'bg-orange-500' : ''}`}
        >
          Category
        </button>
        <button
          onClick={() => setSortBy('group')}
          className={`px-4 py-2 bg-gray-800 text-white rounded ${sortBy === 'group' ? 'bg-orange-500' : ''}`}
        >
          Grouped Category
        </button>
      </div>
      <ul className="list-none p-0">
        {sortBy === 'group' ? (
          sortedCategories.map(category => (
            <div key={category}>
              <h2 className="capitalize text-xl font-bold mb-2">{category}</h2>
              {groupedItems[category].map(item => (
                <Item
                  key={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                />
              ))}
            </div>
          ))
        ) : (
          sortedItems.map(item => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))
        )}
      </ul>
    </div>
  );
}
