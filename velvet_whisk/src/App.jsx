// src/App.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Customize from './pages/Customize';
import Contact from './pages/Contact';
import Cart from './pages/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isVeg, setIsVeg] = useState(true); // State to track Veg/Non-Veg selection

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(cartItem => cartItem.id === item.id);
      if (existingItemIndex > -1) {
        // Item already in cart, increment the count
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].count += 1; // Increment count
        return updatedItems;
      } else {
        // Item not in cart, add it with count 1
        return [...prevItems, { ...item, count: 1 }];
      }
    });
  };

  const removeFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const updateItemCount = (index, newCount) => {
    if (newCount < 1) return; // Prevent count from going below 1
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index].count = newCount; // Update the count
      return updatedItems;
    });
  };

  const toggleOption = () => {
    setIsVeg((prev) => !prev); // Toggle between Veg and Non-Veg
  };

  return (
    <div className="App">
      <Header />
      <Navbar isVeg={isVeg} toggleOption={toggleOption} cartItems={cartItems} />
      <main>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/menu" element={<Menu isVeg={isVeg} addToCart={addToCart} />} />
          <Route path="/customize" element={<Customize />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveItem={removeFromCart} onUpdateItemCount={updateItemCount} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;