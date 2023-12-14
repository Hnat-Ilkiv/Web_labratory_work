import { useDispatch } from "react-redux";
import { removeFromCart } from "./kuns_in_cart";
import dump from "./images/dump.png"

const WaifuCartItem = (obj) => {
  const dispatch = useDispatch();

  function removeWaifuFromCart() {
    dispatch(removeFromCart(obj.id));
  }

  return (
    <div>
      <div className="cart_card" key={obj.id}>
        <div className="cart_card_information">
          <img className="cart_image" src={obj.image} alt="" />
          <div className="cart_description">
            <h3>{obj.name}</h3>
            <p>Age: {obj.age} years old</p>
            <p>Price: {obj.price} £</p>
          </div>
        </div>
        <button className="remove_button" onClick={removeWaifuFromCart}>
          <img src={dump} alt="-" className="cart_card_dump"></img>
        </button>
      </div>
    </div>
  );
};

export default WaifuCartItem;