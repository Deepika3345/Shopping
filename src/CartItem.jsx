import React, { useContext } from "react";


import ShopContext from "./Context/ShopContext";

const CartItem = ({ item }) => {
  const { dispatch } = useContext(ShopContext);

  const handleRemove = (id) => {
    dispatch({
      type: "REMOVE_CART",
      payload: id,
    });
  };

  return (

    <div className="product all-items all-remove-item">
      <div className="  card  product-card">
        <span>
          <img id='product-img' src={item.image} className="card-img-top" alt="..." />
        </span>
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <span className='add-btn'>
            <p className="card-text"><small className="text-body-secondary">Price:{item.price}</small></p>
            <button className="remove-btn btn btn-sm btn-danger " onClick={() => handleRemove(item.id)}>
              Remove Item
            </button>
          </span>
        </div>
      </div>

    </div>


  );
};





export default CartItem;
