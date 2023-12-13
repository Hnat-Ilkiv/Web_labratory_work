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
  const { waifus } = useSelector((state) => state.waifusInCart);
  const [waifu, setWaifu] = useState(null);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    async function fetchWaifu() {
      try {
        const waifuData = await getKun(id);
        console.log("waifuData", waifuData);
        setWaifu(waifuData);
        const isWaifuInCart = waifus.some(
          (existingWaifu) => existingWaifu.id === waifuData.id
        );
        setIsInCart(isWaifuInCart);
      } catch (error) {
        console.error("Помилка отримання даних:", error);
      }
    }

    fetchWaifu();
  }, [id, waifus]);

  function addWaifuToCart() {
    dispatch(addToCart(waifu));
    setIsInCart(true);
  }

  function removeWaifuFromCart() {
    dispatch(removeFromCart(waifu.id));
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
      {waifu ? (
        <div className="card_item_page">
          <div className="item_title">
          {waifu.image && <img
              className="card_item_image"
              src={waifu.image}
              alt={waifu.name}
            />}
            <h1>{waifu.name}</h1>
          </div>
          <div className="column">
            <div className="price_age2">
              <h2>Price: {waifu.price}</h2>
              <h2>Age: {waifu.age}</h2>
            </div>
            <p className="waifu_description">{waifu.description}</p>
            <div className="buttons">
              <button className="cart_page_button" onClick={handleCartAction}>
                {isInCart
                  ? `Remove from cart ${waifu.name}`
                  : `Add to cart ${waifu.name}`}
              </button>
              <NavLink className="cart_page_button" to={`/catalog`}>
                Back
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        <div className="loader">Loading...</div>
      )}
    </div>
  );
};
export default CardPage;