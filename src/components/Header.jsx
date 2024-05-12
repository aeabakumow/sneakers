import React from "react";
import { Link } from "react-router-dom";
import AppContext from "../context";

function Header(props) {
  const { cartItems } = React.useContext(AppContext);

  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex alig-center">
          <img width={40} height={40} src="src\assets\logo.png" alt="" />
          <div>
            <h3 className="text-uppercase">Sneakers</h3>
            <p className="opacity-5">The best sneakers store</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="src\assets\cart.svg" alt="Cart" />
          <span>{totalPrice.toFixed(2)} $</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img src="src\assets\favorite-outline.svg" alt="Favorite" />
            <span>Favorites</span>
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img width={18} height={18} src="src\assets\user.svg" alt="User" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
