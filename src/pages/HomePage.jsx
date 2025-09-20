import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function HomePage({ products }) {
    const [popularProducts, setPopularProducts] = useState([]);
    const navigate = useNavigate();

    // Sadece products değiştiğinde random ürünleri seç
    useEffect(() => {
        if (products.length > 0) {
            const getRandomProducts = (products, count) => {
                const shuffled = [...products].sort(() => 0.5 - Math.random());
                return shuffled.slice(0, count);
            };
            setPopularProducts(getRandomProducts(products, 6));
        }
    }, [products]); // Sadece products değiştiğinde çalışır

    return (
        <div className="p-8 min-h-screen" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
            <h1 className="text-4xl font-bold text-center mb-6">Hoş Geldin 🛒</h1>
            <p className="text-lg text-center mb-8 ">En güzel ürünleri mağazada keşfet, sepete ekle ve alışverişe başla!</p>
            <div className="flex justify-center mb-8">
                <button onClick={() => navigate('/shop')} className="btn-gradient">
                    🛍️ Alışverişe Başla
                </button>
            </div>
            {/* Popüler Ürünler */}
            <h2 className="text-2xl font-bold mb-4 text-center">Popüler Ürünler ⭐</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {popularProducts.map((p) => (
                    <ProductCard key={p.id} product={p} />
                ))}
            </div>
        </div>
    );
}
