import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./Components2/GetProducts";
import Login from "./Pages/Login";
import ProtectedRoute from "./Components2/ProtectedRoute";
import SingleProduct from "./Components2/SingleProd";
import "./App1.css";
import Footer from "./Components2/Footer";
import Home from "./Pages/Home";
import CartPage from "./Pages/Cart";
import Profile from "./components/Profile";
import { ThemeProvider } from "./components/Themecontext";
import OrderForm from "./components/Orderform";
const App1 = () => {
  return (
    <div>
      <ThemeProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={
                <ProtectedRoute>
                  <Products />
                </ProtectedRoute>
              }
            />
            <Route
              path="/products/:id"
              element={
                <ProtectedRoute>
                  <SingleProduct />
                </ProtectedRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <CartPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/order" element={<OrderForm/>} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </div>
  );
};
export default App1;
