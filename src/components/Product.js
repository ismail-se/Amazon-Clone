import React from "react";
import "../style/Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../context/StateProvider";

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the idem into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>Rs. </small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="star" />
            ))}
        </div>
      </div>
      <img src={image} alt="Product Cover" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
