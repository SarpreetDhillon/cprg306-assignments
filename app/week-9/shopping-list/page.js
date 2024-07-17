// week-9/shopping-list/page.js
import React from 'react';
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from 'next/router';

const ShoppingListPage = () => {
  const { user } = useUserAuth();
  const router = useRouter();

  // Redirect to landing page if user is not logged in
  if (!user) {
    router.push('/');
    return null;
  }

  return (
    <div>
      <h1>Your Shopping List</h1>
      {/* Shopping list content goes here */}
    </div>
  );
};

export default ShoppingListPage;
