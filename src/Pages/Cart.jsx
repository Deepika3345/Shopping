import React, { useContext } from "react";
import ShopContext from "../Context/ShopContext";
import CartItem from "../CartItem";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);
  console.log(cartItems)

  const total = cartItems.reduce((p, c) => {
    return p + c.price;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h1 className="all-products-title">No Items In Your Cart!!</h1>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-items added-product">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div id="cart-total" className="card">
        <div className="bill-section">
          <h1>
            Total Amount : <br />
            <br />${total}
          </h1>
          <button className="btn btn-danger btn-sm pay-btn">Pay Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;