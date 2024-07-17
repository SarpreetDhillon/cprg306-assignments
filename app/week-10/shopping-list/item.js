import React from 'react';

export default function Item({ item, onSelect }) {
  const getCategoryEmoji = (category) => {
    switch (category) {
      case 'Produce':
        return '🍎';
      case 'Bakery':
        return '🍞';
      case 'Meat':
        return '🍖';
      case 'Household':
        return '🧼';
      default:
        return '';
    }
  };

  return (
    <li
      className="mb-2 bg-gray-800 p-2 rounded flex items-center cursor-pointer"
      onClick={() => onSelect(item)}
    >
      <span className="mr-2">{getCategoryEmoji(item.category)}</span>
      <div>
        <div className="font-bold text-lg">{item.name}</div>
        <div className="text-sm">Buy {item.quantity} in {item.category.toLowerCase()}</div>
      </div>
    </li>
  );
}

