import { useEffect, useState } from "react";
import axios from "axios";
import "./profile.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // FakeStore demo user (you can modify later)
        const res = await axios.get("https://fakestoreapi.com/users/4");
        setUser(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (!user) return <h2 style={{ textAlign: "center" }}>Loading...</h2>;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            {user.username.charAt(0).toUpperCase()}
          </div>
          <h2>{user.username}</h2>
          <p>{user.email}</p>
        </div>

        <div className="profile-buttons">
          <button onClick={() => navigate("/")}>🏠 Home</button>

          <button className="logout-btn" onClick={handleLogout}>
            🚪 Logout
          </button>

          <button onClick={() => navigate("/products")}>
            🛍 Discover Products
          </button>

          <button onClick={() => navigate("/cart")}>🛒 Move to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
