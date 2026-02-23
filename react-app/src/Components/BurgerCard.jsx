export default function BurgerCard({ name, price, img }) {
  return (
    <div className="burger-card">
      <img src={img} alt={name} className="burger-img" />
      <h3>{name}</h3>
      <p>{price}</p>
      
    </div>
  );
}
