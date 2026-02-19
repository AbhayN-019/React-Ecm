import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './Components2/GetProducts';
import Login from './Pages/Login';
import ProtectedRoute from './Components2/ProtectedRoute';
import SingleProduct from './Components2/SingleProd';
import './App1.css'
import Footer from './Components2/Footer';
import Home from './Pages/Home';
import CartPage from './Pages/Cart';
const App1 = () =>{
    return(
        <div>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/products' element={<ProtectedRoute><Products/></ProtectedRoute>}/>
                    <Route path='/products/:id' element={<ProtectedRoute><SingleProduct/></ProtectedRoute>}/>
                    <Route path='/cart' element={<ProtectedRoute><CartPage/></ProtectedRoute>}/>
                    <Route path='/login' element={<Login/>}/>
                </Routes>
            </Router>
            <Footer/>
        </div>
    )
}
export default App1