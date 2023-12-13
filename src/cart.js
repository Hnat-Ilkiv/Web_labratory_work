import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import WaifuCartItem from "./cart_card";
import "./css/cart.css";

const Cart = () => {
	const { waifus } = useSelector((state) => state.waifusInCart);
  
	return (
	  <div className="cart_page">
		<h1>Waifus Cart</h1>
		{waifus.map((item) => (
		  <WaifuCartItem key={item.id} {...item} />
		))}
		<h4>
		  Total amount:{" "}
		  {waifus.reduce((total, waifu) => total + parseInt(waifu.price), 0)}$
		</h4>
		<div className="buttons2">
		  <NavLink className="cart_page_button" to={`/catalog`}>
			Back To Catalog
		  </NavLink>
		  <NavLink className="cart_page_button" to={`/checkout`}>
			Continue
		  </NavLink>
		</div>
	  </div>
	);
  };

export default Cart;
