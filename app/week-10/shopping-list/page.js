// week-10/shopping-list/page.js
import React, { useEffect, useState } from 'react';
import { useUserAuth } from '../_utils/auth-context';
import { getItems, addItem } from '../_services/shopping-list-service';

const ShoppingList = () => {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', quantity: 1 });

  const loadItems = async () => {
    if (user) {
      const userItems = await getItems(user.uid);
      setItems(userItems);
    }
  };

  useEffect(() => {
    loadItems();
  }, [user]);

  const handleAddItem = async () => {
    if (newItem.name) {
      const id = await addItem(user.uid, newItem);
      setItems([...items, { id, ...newItem }]);
      setNewItem({ name: '', quantity: 1 }); // Reset the input
    }
  };

  return (
    <div>
      <h1>Your Shopping List</h1>
      <input
        type="text"
        value={newItem.name}
        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
        placeholder="Item name"
      />
      <input
        type="number"
        value={newItem.quantity}
        onChange={(e) => setNewItem({ ...newItem, quantity: Number(e.target.value) })}
        placeholder="Quantity"
      />
      <button onClick={handleAddItem}>Add Item</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} (Quantity: {item.quantity})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
