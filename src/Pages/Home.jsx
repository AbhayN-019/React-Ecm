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
  {
    title: "Beauty,Health...",
    img: "https://images.unsplash.com/photo-1713824096348-c1956e6da321?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYXV0eSUyQ2hlYWx0aGNhcmV8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Books,Comics...",
    img: "https://images.unsplash.com/photo-1720659201133-4a79bb11d7d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGJvb2tzJTIwYW5kJTIwY29taWNzfGVufDB8fDB8fHww",
  },
  {
    title: "Movies,Music...",
    img: "https://plus.unsplash.com/premium_photo-1710961232986-36cead00da3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fE1vdmllcyUyQ211c2ljfGVufDB8fDB8fHww",
  },
  {
    title: "Video Games",
    img: "https://images.unsplash.com/photo-1593277992013-05e17a5f417d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHZpZGVvJTIwZ2FtZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Toys & Gifts",
    img: "https://images.unsplash.com/photo-1706178674070-c7d00c2c4d7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG95cyUyMGFuZCUyMGdpZnRzfGVufDB8fDB8fHww",
  },
  {
    title: "Automobile Accesories",
    img: "https://images.unsplash.com/photo-1700224217413-7dc588b86be6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fEF1dG9tb2JpbGUlMjBhY2Nlc3Nvcmllc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Sportswear",
    img: "https://images.unsplash.com/photo-1637666532931-b835a227b955?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFNwb3J0c3dlYXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "And More...",
    img: "https://media.licdn.com/dms/image/sync/v2/D4D27AQEgRzyZxT-8_w/articleshare-shrink_800/B4DZdgIxkuHwAM-/0/1749664602885?e=2147483647&v=beta&t=G6F_07uuRPRtjaMQJ-y6QM6xFtGOAXsE3TKuI85qyYY",
  },
];


const Home = () => {
  const navigate = useNavigate()
  const Move2Products = () =>{
    navigate('/products')
  }
  return (
    <div className="home">

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
