import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
//import { BsHeart, BsCart3 } from "react-icons/bs";
import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate()

  const hambToggle = () => {
    setOpen(!open);
  };

  const handlelogout = () =>{
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <nav className="navbar-container">
      <h3>Amazoff</h3>

      <div>
        <div className={`nav-element-container ${open ? "open" : ""}`}>
          <Link to="/" className="nav-links">
            Home
          </Link>
          <>
            {token ? (
              <>
                <Link to="/products" className="nav-links">
                  Products
                </Link>
                <Link to="/cart" className="nav-links">
                  Cart
                </Link>
                <button onClick={handlelogout}>
                  Logout  
                </button>
              </>
            ) : (
              <Link to="/login" className="nav-links">
                Login
              </Link>
            )}
          </>
        </div>

        <div className="hamb" onClick={hambToggle}>
          <GiHamburgerMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
