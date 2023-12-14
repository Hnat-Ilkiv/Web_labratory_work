import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getKun } from "./api";
import "./css/card_page.css";
import { NavLink } from "react-router-dom";
import { addToCart, removeFromCart } from "./kuns_in_cart";

const CardPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { kuns } = useSelector((state) => state.kunsInCart);
  const [kun, setWaifu] = useState(null);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    async function fetchWaifu() {
      try {
        const kunData = await getKun(id);
        console.log("kunData", kunData);
        setWaifu(kunData);
        const isWaifuInCart = kuns.some(
          (existingWaifu) => existingWaifu.id === kunData.id
        );
        setIsInCart(isWaifuInCart);
      } catch (error) {
        console.error("Помилка отримання даних:", error);
      }
    }

    fetchWaifu();
  }, [id, kuns]);

  function addWaifuToCart() {
    dispatch(addToCart(kun));
    setIsInCart(true);
  }

  function removeWaifuFromCart() {
    dispatch(removeFromCart(kun.id));
    setIsInCart(false);
  }

  function handleCartAction() {
    if (isInCart) {
      removeWaifuFromCart();
    } else {
      addWaifuToCart();
    }
  }

  return (
    <div>
      {kun ? (
        <div className="card_page">
          {<img
              className="card_img"
              src={kun.image}
              alt={kun.name}
            />}
          <div className="column">
            <div className="card_description">
              <div>
                <h1>{kun.name}</h1>
                <p>Age: {kun.age} year old</p>
                <p>Price: {kun.price} £</p>
              </div>
              <p className="kun_description">{kun.description}</p>
            </div>
            <div className="buttons">
              <button className="card_button" onClick={handleCartAction}>
                {isInCart
                  ? `Remove from cart ${kun.name}`
                  : `Add to cart ${kun.name}`}
              </button>
              <NavLink className="card_button" to={`/catalog`}>
                Back
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        <div class="loader-container">
						<div class="loader"></div>
					</div>
      )}
    </div>
  );
};
export default CardPage;