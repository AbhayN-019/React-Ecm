import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./orderform.css";

const OrderForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "cod",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order Placed Successfully 🎉");
    navigate("/");
  };

  return (
    <div className="order-container">
      <div className="order-card">
        <h2>Checkout</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" required onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" name="phone" required onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Address</label>
            <textarea
              name="address"
              rows="3"
              required
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>City</label>
              <input type="text" name="city" required onChange={handleChange} />
            </div>

            <div className="form-group">
              <label>State</label>
              <input type="text" name="state" required onChange={handleChange} />
            </div>
          </div>

          <div className="form-group">
            <label>Pincode</label>
            <input type="text" name="pincode" required onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Payment Method</label>
            <select name="paymentMethod" onChange={handleChange}>
              <option value="cod">Cash on Delivery</option>
              <option value="upi">UPI</option>
              <option value="card">Debit/Credit Card</option>
            </select>
          </div>

          <button type="submit" className="place-order-btn">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;