import axios from "axios";
import "./singleprod.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";

const SingleProduct = () => {
  const [prod, setProd] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();
  //const navigate = useNavigate();

  useEffect(() => {
    const getSingleProd = async () => {
      try {
        const res = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProd(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getSingleProd();
  }, [id]);

  const handleCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(
      (item) => item.id === prod.id
    );

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      cart.push({
        id: prod.id,
        title: prod.title,
        price: prod.price,
        image: prod.image,
        quantity: quantity,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${quantity} item(s) added to cart`);
  };

  // const handleShopNow = () => {
  //   handleCart();
  //   navigate("/cart");
  // };

  if (!prod) return <h2>Loading....</h2>;

  return (
    <div className="singleprod-container">
      <div className="singleprod-wrapper">
        <div className="singleprod-image">
          <img src={prod.image} alt="product" />
        </div>

        <div className="singleprod-details">
          <h1>{prod.title}</h1>

          <div className="singleprod-rating">
            ⭐ {prod.rating.rate} ({prod.rating.count} Quantity)
          </div>

          <div className="singleprod-price">
            ₹ {prod.price}
          </div>

          <p>Category: {prod.category}</p>

          <p className="singleprod-desc">
            {prod.description}
          </p>

          {/* Buttons + Quantity */}
          <div className="singleprod-btns">
            <button className="add-btn" onClick={handleCart}>
              Add to <FaCartArrowDown />
            </button>

            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) =>
                setQuantity(Number(e.target.value))
              }
              className="qty-input"
            />

            <button className="buy-btn">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;