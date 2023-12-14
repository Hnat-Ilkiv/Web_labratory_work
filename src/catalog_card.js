import "./css/catalog_card.css";
import { NavLink } from "react-router-dom";

const CatalogCard = (key, kun) => {
  const truncatedDescription =
    kun.description.length > 120
      ? kun.description.slice(0, 90) + "..."
      : kun.description;

  return (
    // <div className="card" key={key}>
    //   <div className="center">
    //     <img
    //       className="div_img2"
    //       src={item.image}
    //       alt={item.name}
    //     />
    //   </div>
    //   <h1 className="center">{item.name}</h1>
    //   <div className="price_age">
    //     <h2>Price: {item.price} bitcoins</h2>
    //     <h2>Age: {item.age}</h2>
    //   </div>
    //   <p className="card_description">{truncatedDescription}</p>
    //   <div className="center">
    //     <NavLink className="card_view_button" to={`/card/${key}`}>
    //       View More
    //     </NavLink>
    //   </div>
    // </div>
      <div class="catalog_card" key={key}>
        <div class="catalog_card_inner">
            <div class="catalog_card_front">
                <img className="catalog_card_img" src={kun.image} alt="Аvatar" />
                <h2 className="catalog_card_name">
                  {kun.name}
                </h2>
                <p className="catalog_card_p">
                  Age: {kun.age} yares old
                </p>
                <p className="catalog_card_p">
                  Price: {kun.price} £
                </p>
            </div>
            <div class="catalog_card_back">
                <p className="card-p">{truncatedDescription}</p>
                <NavLink className="card_view_button" to={`/card/${key}`}>
                  View More
                </NavLink>
            </div>
        </div>
      </div>
  );
};

export default CatalogCard;