import axios from "axios";
import { useEffect, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./products.css";

const Products = () => {
  const [prod, setProd] = useState([]);
  const [quantities, setQuantities] = useState({}); // object is correct here

  useEffect(() => {
    const getProducts = async () => {
      try {
        const resp = await axios.get("https://fakestoreapi.com/products");
        setProd(resp.data);
      } catch (err) {
        console.error(err);
      }
    };
    getProducts();
  }, []);

  // Quantity change handler
  const handleQuantityChange = (id, value) => {
    setQuantities({
      ...quantities,
      [id]: Number(value),
    });
  };

  const handleCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const selectedQty = quantities[item.id] || 1;

    const existingProduct = cart.find((prod) => prod.id === item.id);

    if (existingProduct) {
      existingProduct.quantity += selectedQty; // FIXED (was += 1 before)
    } else {
      cart.push({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.image,
        quantity: selectedQty,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${selectedQty} item(s) added to cart`);
  };

  return (
    <div>
      <div className="card-box">
        {prod.map((item) => (
          <div className="prod-card" key={item.id}>
            <h2>{item.title}</h2>

            <Link to={`/products/${item.id}`}>
              <img
                src={item.image}
                alt="product"
                className="prod-img"
              />
            </Link>

            {/* Wrapped Details + Quantity */}
            <div className="prod-info">
              <div className="prod-details">
                <p>Category: {item.category}</p>
                <p>Price: ₹{item.price}</p>
                <p>Ratings: {item.rating.rate}</p>
                <p>Stock: {item.rating.count}</p>
              </div>

              <div className="qty-box">
                <label>Qty</label>
                <input
                  type="number"
                  min="1"
                  value={quantities[item.id] || 1}
                  onChange={(e) =>
                    handleQuantityChange(item.id, e.target.value)
                  }
                />
              </div>
            </div>

            <button onClick={() => handleCart(item)}>
              Add to <FaCartArrowDown />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;