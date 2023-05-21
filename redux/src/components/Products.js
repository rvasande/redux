import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add } from '../store/cartSlice'

export default function Products() {
  const [products, setProduct] = useState([]);

const dispatch = useDispatch()

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setProduct(data);
    };
    fetchProducts();
  }, []);

  const handleAdd = (product) =>{
       dispatch(add(product))
  }

  return (
    <div className="productsWrapper">
      {
        products.map(product =>(
            <div key={product.id} className="card">
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>{product.price} $ </h5>
            <button onClick={()=> handleAdd(product)} className="btn">Add To Cart</button>
          </div>
        ))
      }
    </div>
  );
}
