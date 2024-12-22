// src/pages/Menu.jsx
import React, { useState } from 'react';
import './Menu.css'; // Import CSS for styling

const Menu = ({ isVeg, addToCart }) => {
  // Sample data for menu items with type
  const menuItems = [
    {
      id: 1,
      title: 'CHOCOLATE MADNESS',
      description: 'Delicious chocolate cake with rich frosting.',
      image: '/images/chocolate.jpeg',
      price: 900.00,
      type: 'Non-Veg',
      weight: '1 kg',
    },
    {
      id: 2,
      title: 'WONDER VANILLA',
      description: '10 pieces Soft vanilla cupcake topped with creamy frosting.',
      image: '/images/vanilla.jpeg',
      price: 500.00,
      type: 'Non-Veg',
      weight: '350 g',
    },
    {
      id: 3,
      title: 'RED RUFFLES',
      description: 'Moist red velvet cake with cream cheese frosting.',
      image: '/images/red-velvet.jpeg',
      price: 1000.00,
      type: 'Veg',
      weight: '1 kg',
    },
    {
      id: 4,
      title: 'FRUIT ATTACK',
      description: '4 Fresh fruit tarts with a buttery crust.',
      image: '/images/fruit-tart.jpeg',
      price: 720.00,
      type: 'Veg',
      weight: '500 g',
    },
    {
      id: 5,
      title: 'DONUT GLITCH',
      description: '12 Assorted donuts with yummy top coating.',
      image: '/images/donuts.jpeg',
      price: 1453.00,
      type: 'Non-Veg',
      weight: '960g',
    },
    {
      id: 6,
      title: 'MISCHIEF VELVET',
      description: '6 Soft red velvet cookies with white chocolate chips',
      image: '/images/red_velvet_cookies.jpeg',
      price: 620.00,
      type: 'Non-Veg',
      weight: '248 g',
    },
    {
      id: 7,
      title: 'SUPRISE ME!',
      description: 'Delicious birthday cake pops with aesthetic decor.',
      image: '/images/cake_pops.jpeg',
      price: 340.00,
      type: 'Veg',
      weight: '280 g',
    },
    {
      id: 8,
      title: 'CROISSANTS',
      description: 'Fluffy croissants for a warm hot chocolate.',
      image: '/images/crossoants.jpeg',
      price: 275.00,
      type: 'Non-Veg',
      weight: '150 g',
    },
    {
      id: 9,
      title: 'VALENTINE PINK',
      description: '4 Soft strawberry cupcakes topped with sweet cute heart decor.',
      image: '/images/strawberry_cupcake.jpeg',
      price: 450.00,
      type: 'Veg',
      weight: '200 g',
    },
    {
      id: 10,
      title: 'COOKIES AND CREAM YUM',
      description: '3 tier yummy cookies and cream cake.',
      image: '/images/cac.jpeg',
      price: 850.00,
      type: 'Non-Veg',
      weight: '600 g',
    },
    {
      id: 11,
      title: 'ASSORTED BROWNIES',
      description: '9 piece assorted brownies.',
      image: '/images/Assorted_Brownies.jpeg',
      price: 1050.00,
      type: 'Veg',
      weight: '900 g',
    },
    {
      id: 12,
      title: 'SWEET PASTRY',
      description: 'Fruity Danish pastry.',
      image: '/images/danish_pastry.jpeg',
      price: 240.00,
      type: 'Non-Veg',
      weight: '160 g',
    },
    {
      id: 13,
      title: 'MINI BESTIES CAKES',
      description: '4 mini picnic-ready cakes.',
      image: '/images/mini_cakes.jpeg',
      price: 980.00,
      type: 'Veg',
      weight: '800 g',
    },
    {
      id: 14,
      title: 'SOOTHING TIRAMISU',
      description: 'Soft and rich tiramisu.',
      image: '/images/tiramisu.jpeg',
      price: 345.00,
      type: 'Veg',
      weight: ' 400 g',
    },
  ];

  // Filter items based on the selection
  const filteredItems = menuItems.filter(item => (isVeg ? item.type === 'Veg' : item.type === 'Non-Veg'));

  // State to track item counts
  const [itemCounts, setItemCounts] = useState({});

  const handleAddToCart = (item) => {
    const currentCount = itemCounts[item.id] || 0;
    if (currentCount === 0) {
      addToCart({ ...item, count: 1 }); // Add to cart if not already added
    }
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [item.id]: currentCount + 1, // Increment count
    }));
  };

  const handleIncrement = (item) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [item.id]: (prevCounts[item.id] || 0) + 1, // Increment count
    }));
    addToCart({ ...item, count: (itemCounts[item.id] || 0) + 1 }); // Update cart when incrementing
  };

  const handleDecrement = (item) => {
    setItemCounts((prevCounts) => {
      const currentCount = prevCounts[item.id] || 0;
      if (currentCount > 1) {
        return {
          ...prevCounts,
          [item.id]: currentCount - 1, // Decrement count
        };
      } else {
        const { [item.id]: _, ...rest } = prevCounts; // Remove item if count is 1
        return rest;
      }
    });
  };

  return (
    <div className="menu">
      <h2>{isVeg ? 'Veg Menu' : 'Non-Veg Menu'}</h2>
      <div className="menu-items">
        {filteredItems.map(item => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.title} className="menu-item-image" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p className="weight">Weight: {item.weight}</p>
            <p className="price">₹{item.price.toFixed(2)}</p>
            <span className="item-type">{item.type}</span>
            {itemCounts[item.id] ? (
              <div className="item-count">
                <button onClick={() => handleDecrement(item)}>-</button>
                <span>{itemCounts[item.id]}</span>
                <button onClick={() => handleIncrement(item)}>+</button>
              </div>
            ) : (
              <button className="add-to-cart" onClick={() => handleAddToCart(item)}>Add to Cart</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;