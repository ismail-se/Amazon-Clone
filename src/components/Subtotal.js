import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
import "../style/Subtotal.css";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeprator={true}
        prefix={"Rs."}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
