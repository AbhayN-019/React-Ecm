import "./home.css";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "Fashion",
    img: "https://images.unsplash.com/photo-1521334884684-d80222895322",
  },
  {
    title: "Electronics",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    title: "Home Appliances",
    img: "https://assets.bosch.com/media/global/products_and_solutions/at_home/home-appliances-range.jpg",
  },
  {
    title: "Gadgets & Accessories",
    img: "https://png.pngtree.com/thumb_back/fh260/background/20241224/pngtree-a-flat-lay-of-various-tech-gadgets-and-accessories-on-vibrant-image_16825635.jpg",
  },
  {
    title: "Home & Kitchen",
    img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
  },
  {
    title: "Jewelry",
    img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
  },
];


const Home = () => {
  const navigate = useNavigate()
  const Move2Products = () =>{
    navigate('/products')
  }
  return (
    <div className="home">

      {/* HERO BANNER */}
      <div className="hero">
        <img
          src="https://images.unsplash.com/photo-1521336575822-6da63fb45455?auto=format&fit=crop&w=1600&q=80"
          alt="50% off"
        />
        <div className="hero-text">
          <h1>Big Savings Day</h1>
          <p>Up to 50% off on top categories</p>
          <button onClick={Move2Products}>Shop Now</button>
        </div>
      </div>

      {/* CATEGORIES */}
      <section className="category-section">
        <h2>Shop by Category</h2>

        <div className="categories">
          {categories.map((cat, index) => (
            <div className="category-card" key={index}>
              <img src={cat.img} alt={cat.title} />
              <h3>{cat.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED INFO */}
      <section className="info-strip">
        <div>
          <h3>Free Delivery</h3>
          <p>On orders above ₹499</p>
        </div>
        <div>
          <h3>Easy Returns</h3>
          <p>7-day hassle-free returns</p>
        </div>
        <div>
          <h3>Secure Payments</h3>
          <p>100% safe checkout</p>
        </div>
      </section>

    </div>
  );
};

export default Home;
