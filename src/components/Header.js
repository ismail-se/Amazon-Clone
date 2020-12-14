import React from "react";
import "../style/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <header>
      <Link to="/">
        <img
          className="header-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      <div className="header-search">
        <input className="header-search-input" type="text" />
        <SearchIcon className="header-search-icon" />
      </div>
      <div className="header-nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} class="header-option">
            <span class="line-1">Hello, {user?.email || "Guest"}</span>
            <span class="line-2">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>
        <div class="header-option">
          <span class="line-1">Returns</span>
          <span class="line-2">& Orders</span>
        </div>
        <div class="header-option">
          <span class="line-1">Your</span>
          <span class="line-2">Prime</span>
        </div>
        <Link to="/checkout">
          <div class="header-option-basket">
            <ShoppingBasketIcon />
            <span className="line-1 header-basket-count">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
