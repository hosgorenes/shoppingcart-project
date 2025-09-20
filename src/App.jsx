import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import CardPage from "./pages/CardPage";   // ✅ doğru import
import CheckoutPage from "./pages/CheckoutPage";
import ThemeSwitch from "./components/ThemeSwitch";
import { useCard } from "./contexts/CardContext"; // ✅ sepet bilgisi için

export default function App() {
  const [products, setProducts] = useState([]);
  const { card } = useCard(); // ✅ CardContext’ten sepeti alıyoruz

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  // toplam ürün sayısı
  const totalItems = card.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="page-container">
      {/* Navbar */}
      <nav className="navbar p-6 text-white bg-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="nav-brand font-bold text-lg">
            🛒 ShopApp
          </div>

          {/* Navigation Links & Theme Switch */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <Link to="/" className="nav-link hover:text-gray-300">
                🏠 Ana Sayfa
              </Link>
              <Link to="/shop" className="nav-link hover:text-gray-300">
                🛍️ Mağaza
              </Link>
              <Link to="/card" className="nav-link relative hover:text-gray-300">
                🛒 Sepet
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>

            {/* Theme Switch */}
            <ThemeSwitch />
          </div>
        </div>
      </nav>

      {/* Sayfa içerikleri */}
      <Routes>
        <Route path="/" element={<HomePage products={products} />} />
        <Route path="/shop" element={<ShopPage products={products} />} />
        <Route path="/card" element={<CardPage />} />   {/* ✅ doğru route */}
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}
