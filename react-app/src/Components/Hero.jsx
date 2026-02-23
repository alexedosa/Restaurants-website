import { Link } from 'react-router-dom';
import './Hero.css';
import burgerImage from "../assets/burger.png"

export default function Hero() {
  return (
    <section className="hero-hero">
      <div className="hero-content-wrap">
        <h1 className="hero-title">Savor the <span style={{color: "red"}}>Flavor</span> — Kings Kitchen</h1>
        <p className="hero-sub">Handcrafted dishes, bold sauces, and warm vibes.</p>
        <Link to="/products"><button className="order-btnn">Order Now</button></Link>
      </div>
      <div className="hero-image">
        <img src={burgerImage} alt="burger background" />
      </div>
    </section>
  );
}
