import { useCard } from "../contexts/CardContext";
import { useNavigate } from "react-router-dom";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function CardPage() {
    const { card, removeFromCard, updateQuantity } = useCard();
    const navigate = useNavigate();

    const totalPrice = card.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (card.length === 0) {
        return (
            <div className="p-8 min-h-screen" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
                <div className="max-w-2xl mx-auto text-center">
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-12 mb-8">
                        <div className="text-8xl mb-6">🛒</div>
                        <h1 className="text-3xl font-bold mb-4">Sepetiniz Boş</h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                            Henüz sepetinize ürün eklemediniz. Mağazaya göz atıp beğendiğiniz ürünleri sepete ekleyebilirsiniz.
                        </p>
                        <button
                            onClick={() => navigate('/shop')}
                            className="btn-gradient text-lg px-8 py-3"
                        >
                            🛍️ Alışverişe Başla
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="p-8 min-h-screen" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center">🛒 Sepetim</h1>

                <div className="grid gap-6">
                    {card.map((item) => (
                        <div
                            key={item.id}
                            className="product-card"
                        >
                            <div className="flex flex-col md:flex-row gap-6">
                                {/* Ürün Resmi */}
                                <div className="md:w-32 md:h-32 w-full h-48 flex-shrink-0">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-contain rounded-lg"
                                    />
                                </div>

                                {/* Ürün Bilgileri */}
                                <div className="flex-1">
                                    <h2 className="text-xl font-semibold mb-2 line-clamp-2" style={{ color: 'var(--text)' }}>
                                        {item.title}
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                                        {item.description}
                                    </p>

                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                            <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                                                ${item.price}
                                            </span>

                                            {/* Adet Dropdown */}
                                            <DropdownMenu.Root>
                                                <DropdownMenu.Trigger className="bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full text-sm font-medium hover:bg-purple-200 dark:hover:bg-purple-800/40 cursor-pointer transition-colors duration-200">
                                                    Adet: {item.quantity} ▼
                                                </DropdownMenu.Trigger>

                                                <DropdownMenu.Content className="dropdown-content">
                                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                                                        <DropdownMenu.Item
                                                            key={num}
                                                            className="dropdown-item"
                                                            onClick={() => updateQuantity(item.id, num)}
                                                        >
                                                            {num}
                                                        </DropdownMenu.Item>
                                                    ))}
                                                </DropdownMenu.Content>
                                            </DropdownMenu.Root>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <span className="text-lg font-semibold">
                                                Toplam: ${(item.price * item.quantity).toFixed(2)}
                                            </span>
                                            <button
                                                onClick={() => removeFromCard(item.id)}
                                                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors duration-200"
                                            >
                                                🗑️ Kaldır
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Toplam ve Ödeme */}
                <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                            <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
                                Toplam {card.length} ürün
                            </p>
                            <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                                ${totalPrice.toFixed(2)}
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => navigate('/shop')}
                                className="px-6 py-3 bg-gray-500 hover:bg-gray-600 cursor-pointer text-white rounded-lg font-medium transition-colors duration-200"
                            >
                                🛍️ Alışverişe Devam
                            </button>
                            <button
                                onClick={() => navigate('/checkout')}
                                className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-lg font-bold transition-all duration-200 transform hover:scale-105"
                            >
                                💳 Ödemeye Geç
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
