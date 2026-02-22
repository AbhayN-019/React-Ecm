import { useEffect, useState } from "react";
import "./cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQty = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    updateCart(updatedCart);
  };

  const decreaseQty = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    updateCart(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(
      (item) => item.id !== id
    );
    updateCart(updatedCart);
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <br /><br />
      <h1>Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-row" key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                className="cart-img"
              />

              <div className="cart-details">
                <h3>{item.title}</h3>
                <p className="cart-price">₹{item.price}</p>

                <div className="qty-box">
                  <button
                    className="qty-btn"
                    onClick={() => decreaseQty(item.id)}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    className="qty-btn"
                    onClick={() => increaseQty(item.id)}
                  >
                    +
                  </button>
                </div>

                <button
                  className="delete-btn"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
                <button className="order-btn"
                >
                  Place Order
                </button>
              </div>

              <div className="cart-right">
                Total: ₹{(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}

          <h2 className="cart-total">
            Sub-Total: ₹{totalPrice.toFixed(2)}
          </h2>
          
        </>
      )}
    </div>
  );
};

export default Cart;