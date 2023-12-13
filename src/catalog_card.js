import "./css/catalog_card.css";
import { NavLink } from "react-router-dom";

const BankCard = (key, item) => {
  const truncatedDescription =
    item.description.length > 120
      ? item.description.slice(0, 90) + "..."
      : item.description;

  return (
    <div className="card" key={key}>
      <div className="center">
        <img
          className="div_img2"
          src={item.image}
          alt={item.name}
        />
      </div>
      <h1 className="center">{item.name}</h1>
      <div className="price_age">
        <h2>Price: {item.price} bitcoins</h2>
        <h2>Age: {item.age}</h2>
      </div>
      <p className="card_description">{truncatedDescription}</p>
      <div className="center">
        <NavLink className="card_view_button" to={`/card/${key}`}>
          View More
        </NavLink>
      </div>
    </div>
  );
};

export default BankCard;