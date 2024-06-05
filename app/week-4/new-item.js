"use client";

import React, { useState } from 'react';

const NewItem = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('Produce');

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
    setName('');
    setQuantity(1);
    setCategory('Produce');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-4 bg-gray-800 rounded-lg shadow-lg space-y-4">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Item name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 text-gray-700 bg-gray-200 rounded"
          />
        </div>
        <div className="mb-4 flex space-x-2">
          <input
            type="number"
            min="1"
            max="99"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            required
            className="w-1/3 px-3 py-2 text-gray-700 bg-gray-200 rounded"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-2/3 px-3 py-2 text-gray-700 bg-gray-200 rounded"
          >
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
          >
            +
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewItem;
