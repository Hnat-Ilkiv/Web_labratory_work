import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import KunCartItem from "./cart_card";
import "./css/cart.css";

const Cart = () => {
	const { kuns } = useSelector((state) => state.kunsInCart);
  
	return (
	  <div className="cart_page">
		<h1>Kuns Cart</h1>
		{kuns.map((item) => (
		  <KunCartItem key={item.id} {...item} />
		))}
		<h4>
		  Total amount:{" "}
		  {kuns.reduce((total, kun) => total + parseInt(kun.price), 0)} £
		</h4>
		<div className="cart_navigation">
		  <NavLink className="cart_button_page" to={`/catalog`}>
			Back To Catalog
		  </NavLink>
		  <NavLink className="cart_button_page" to={`/checkout`}>
			Continue
		  </NavLink>
		</div>
	  </div>
	);
  };

export default Cart;
