import React from 'react';
import { burgers } from '../data/burgers';
import './BurgerMenu.css';
// import burgerImage from "../assets/burger.png"

const BurgerMenu = () => {
  return (
    <section className="burger-menu">
      <h2>Our Signature Dishes</h2>
      <div className="burger-grid">
        {burgers.map((burger) => (
          <div key={burger.id} className="burger-card">
            <img src={burger.img} alt={burger.name} />
            <h3>{burger.name}</h3>
            <p className="price">{burger.price}</p>
            <button className="order-btn">Order Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BurgerMenu;

