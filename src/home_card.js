import React from "react";
import "./css/home_card.css";

const HomeCard = (key, kun) => {
  const truncatedDescription =
    kun.description.length > 120
      ? kun.description.slice(0, 90) + "..."
      : kun.description;

  return (
    <div className="home_card_place">
      <div class="home_card" key={key}>
        <div class="home_card_inner">
            <div class="home_card_front">
                <img className="home_card_img" src={kun.image} alt="Аvatar" />
                <h2 className="home_card_name">
                  {kun.name}
                </h2>
                <p className="home_card_p">
                  Age: {kun.age} yares old
                </p>
                <p className="home_card_p">
                  Price: {kun.price} £
                </p>
            </div>
            <div class="home_card_back">
                <p className="card-p">{truncatedDescription}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
