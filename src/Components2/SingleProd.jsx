import axios from "axios";
import "./singleprod.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SingleProduct = () => {
  const [prod, setProd] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const getSingleProd = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProd(res.data);
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getSingleProd();
  }, [id]);
  const handleShopNow = () => {
    handleCart(); // Add to cart first
    navigate("/cart"); // Then move to cart page
  };

  const handleCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProduct = cart.find((prod) => prod.id === item.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
        quantity: 1,
      });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
  };
  if (!prod) return <h2>Loading....</h2>;
  return (
    <div className="singleprod-container">
      <div className="singleprod-wrapper">
        <div className="singleprod-image">
          <img src={prod.image} alt="pic" />
        </div>

        <div className="singleprod-details">
          <h1>{prod.title}</h1>

          <div className="singleprod-rating">
            ⭐ {prod.rating.rate} ({prod.rating.count} Quantity)
          </div>

          <div className="singleprod-price">₹ {prod.price}</div>

          <p>Category: {prod.category}</p>

          <p className="singleprod-desc">{prod.description}</p>
          <div className="singleprod-btns">
            <button className="add-btn" onClick={handleCart}>
              Add to <FaCartArrowDown />
            </button>

            <button className="buy-btn" onClick={handleShopNow}>
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;
