import { useState } from 'react';

const NewItem = ({ addItem }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('Produce');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;

    addItem({
      id: Date.now(),
      name: `${name} ${category === 'Meat' ? '🍗' : ''}`,
      description: `Buy ${quantity} in ${category.toLowerCase()}`
    });
    setName('');
    setQuantity(1);
    setCategory('Produce');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Item name" 
      />
      <input 
        type="number" 
        value={quantity} 
        onChange={(e) => setQuantity(e.target.value)} 
        min="1"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Produce">Produce</option>
        <option value="Bakery">Bakery</option>
        <option value="Meat">Meat</option>
        <option value="Household">Household</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
};

export default NewItem;
