import ProductCard from "../components/ProductCard";

export default function ShopPage({ products }) {
    return (
        <div className="p-8 min-h-screen" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
            <h1 className="text-3xl font-bold mb-6 text-center">🛍️ Mağaza</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
