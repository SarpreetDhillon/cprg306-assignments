import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('Produce');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: uuidv4(),
      name,
      quantity,
      category,
    };
    onAddItem(newItem);
    setName('');
    setQuantity(1);
    setCategory('Produce');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex items-center">
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Item name" 
        required 
        className="mr-2 p-2 flex-1 rounded bg-gray-800 text-white"
      />
      <input 
        type="number" 
        value={quantity} 
        onChange={(e) => setQuantity(Number(e.target.value))} 
        min="1" 
        required 
        className="mr-2 p-2 w-[60px] rounded bg-gray-800 text-white"
      />
      <select 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
        className="mr-2 p-2 rounded bg-gray-800 text-white"
      >
        <option value="Produce">Produce</option>
        <option value="Bakery">Bakery</option>
        <option value="Meat">Meat</option>
        <option value="Household">Household</option>
      </select>
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">+</button>
    </form>
  );
}
