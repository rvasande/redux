import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

export default function Cart() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <div>
      <div className="cartwrapper">
        <h2>Cart Items</h2>
        {products.map((product) => (
          <div key={product.id}  className="cartCard">
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>{product.price} $</h5>
            <button onClick={() => handleRemove(product.id)} className="btn">
              Remove Item
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
