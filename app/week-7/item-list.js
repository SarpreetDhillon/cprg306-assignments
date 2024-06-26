import React from 'react';
import Item from './item';

export default function ItemList({ items, sortBy }) {
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <ul className="list-none p-0">
      {sortedItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}


