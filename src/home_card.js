import React from "react";
import "./css/home_card.css";
// import { images } from "./images_constants";

const ObjectDiv = (key, item) => {
  return (
    // <div className="object_div" key={key}>
    //   <div className="center">
    //     <img className="div_img" src={images[item.image]} alt={item.title} />
    //   </div>
    //   <h2 className="center">{item.title}</h2>
    //   <p className="center">{item.description}</p>
    // </div>

    <div class="card" key={key}>
      <div class="card-inner">
          <div class="front">
              {/* <img className="card-img" src={images[item.image]} alt="Аvatar" /> */}
              <img className="card-img" src={item.image} alt="Аvatar" />
              <h2 className="card-name">
                {item.name}
              </h2>
              <p className="card-p">
                {item.price} £
              </p>
          </div>
          <div class="back">
              <p className="card-p">{item.description}</p>
          </div>
      </div>
    </div>
  );
};

export default ObjectDiv;
