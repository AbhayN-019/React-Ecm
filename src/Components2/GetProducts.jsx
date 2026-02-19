import axios from "axios";
import { useEffect, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom'
import "./products.css";
const Products = () => {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const resp = await axios.get("https://fakestoreapi.com/products");
        setProd(resp.data);
        console.table(resp.data);
      } catch (err) {
        console.error(err);
      }
    };
    getProducts();
  }, []);
  const handleCart = (item) =>{
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    const existingProduct = cart.find((prod) => prod.id === item.id)
    if (existingProduct){
      existingProduct.quantity += 1
    }
    else{
      cart.push({
        id:item.id,
        title:item.title,
        price: item.price,
        image: item.image,
        quantity: 1,
      })
    }
    localStorage.setItem('cart',JSON.stringify(cart))
    alert("Added to cart")
  }
  return (
    <div>
      <br /><br />
      <br />
      {prod ? (<div className="card-box">
        {prod.map((item) => (
          <div className="prod-card">
            <h2>{item.title}</h2>
            <Link to={`/products/${item.id}`}><img src={item.image} alt="smthng" className="prod-img" /></Link>
            <p>Category: {item.category}</p>
            <p>Price:{item.price}</p>
            <p>Ratings: {item.rating.rate}</p>
            <p>Quantity: {item.rating.count}</p>
            <button onClick={()=>handleCart(item)}>
             Add to <FaCartArrowDown />
            </button>
          </div>
        ))}
      </div>) : (<p>Loading...</p>)}
    </div>
  );
};
export default Products;
