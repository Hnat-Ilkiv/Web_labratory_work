import { useDispatch } from "react-redux";
import { removeFromCart } from "./kuns_in_cart";

const WaifuCartItem = (obj) => {
  const dispatch = useDispatch();

  function removeWaifuFromCart() {
    dispatch(removeFromCart(obj.id));
  }

  return (
    <div>
      <div className="waifu_cart_item" key={obj.id}>
        <img className="cart_image" src={obj.image} alt="" />
        <div className="text_div2">
          {obj.name}
          <br/>
          {obj.price}$
        </div>
        <button className="remove_button" onClick={removeWaifuFromCart}>
          -
        </button>
      </div>
    </div>
  );
};

export default WaifuCartItem;