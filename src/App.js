import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Users from "./pages/Users"
import ErrorPage from "./pages/ErrorPage"
import Navigation from './components/Navigation'
import UserDetails from './pages/UserDetails';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';



function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App;
