import { useCard } from "../contexts/CardContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CheckoutPage() {
    const { card, removeFromCard } = useCard();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        postalCode: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardName: ''
    });

    const totalPrice = card.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Burada normalde ödeme işlemi yapılır
        alert('Ödeme başarılı! Siparişiniz alındı. 🎉');
        // Sepeti temizle
        card.forEach(item => removeFromCard(item.id));
        navigate('/');
    };

    if (card.length === 0) {
        return (
            <div className="p-8 min-h-screen" style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
                <div className="max-w-2xl mx-auto text-center">
                    <div className="bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 rounded-2xl p-12 mb-8">
                        <div className="text-8xl mb-6">❌</div>
                        <h1 className="text-3xl font-bold mb-4">Sepetiniz Boş</h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                            Ödeme yapmak için önce sepetinize ürün eklemeniz gerekiyor.
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
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center">💳 Ödeme</h1>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Sol Taraf - Ödeme Formu */}
                    <div className="space-y-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* İletişim Bilgileri */}
                            <div className="product-card">
                                <h2 className="text-xl font-bold mb-4 flex items-center">
                                    📧 İletişim Bilgileri
                                </h2>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="E-posta adresiniz"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                />
                            </div>

                            {/* Teslimat Adresi */}
                            <div className="product-card">
                                <h2 className="text-xl font-bold mb-4 flex items-center">
                                    🏠 Teslimat Adresi
                                </h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="Ad"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required
                                        className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Soyad"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required
                                        className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                </div>
                                <input
                                    type="text"
                                    name="address"
                                    placeholder="Adres"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent mt-4"
                                />
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <input
                                        type="text"
                                        name="city"
                                        placeholder="Şehir"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        required
                                        className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                    <input
                                        type="text"
                                        name="postalCode"
                                        placeholder="Posta Kodu"
                                        value={formData.postalCode}
                                        onChange={handleInputChange}
                                        required
                                        className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            {/* Ödeme Bilgileri */}
                            <div className="product-card">
                                <h2 className="text-xl font-bold mb-4 flex items-center">
                                    💳 Ödeme Bilgileri
                                </h2>
                                <input
                                    type="text"
                                    name="cardNumber"
                                    placeholder="Kart Numarası (1234 5678 9012 3456)"
                                    value={formData.cardNumber}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent mb-4"
                                />
                                <input
                                    type="text"
                                    name="cardName"
                                    placeholder="Kart Üzerindeki İsim"
                                    value={formData.cardName}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent mb-4"
                                />
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="expiryDate"
                                        placeholder="MM/YY"
                                        value={formData.expiryDate}
                                        onChange={handleInputChange}
                                        required
                                        className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                    <input
                                        type="text"
                                        name="cvv"
                                        placeholder="CVV"
                                        value={formData.cvv}
                                        onChange={handleInputChange}
                                        required
                                        className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            {/* Ödeme Butonu */}
                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105"
                            >
                                💳 ${totalPrice.toFixed(2)} Öde
                            </button>
                        </form>
                    </div>

                    {/* Sağ Taraf - Sipariş Özeti */}
                    <div className="space-y-6">
                        <div className="product-card">
                            <h2 className="text-xl font-bold mb-4 flex items-center">
                                📋 Sipariş Özeti
                            </h2>
                            <div className="space-y-4">
                                {card.map((item) => (
                                    <div key={item.id} className="flex items-center gap-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-16 h-16 object-contain rounded"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-medium text-sm line-clamp-2">{item.title}</h3>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                                Adet: {item.quantity}
                                            </p>
                                        </div>
                                        <span className="font-bold text-green-600 dark:text-green-400">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                                <div className="flex justify-between items-center mb-2">
                                    <span>Ara Toplam:</span>
                                    <span>${totalPrice.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center mb-2">
                                    <span>Kargo:</span>
                                    <span className="text-green-600 dark:text-green-400">Ücretsiz</span>
                                </div>
                                <div className="flex justify-between items-center text-xl font-bold">
                                    <span>Toplam:</span>
                                    <span className="text-green-600 dark:text-green-400">${totalPrice.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Güvenlik Bilgisi */}
                        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-2xl">🔒</span>
                                <h3 className="font-bold">Güvenli Ödeme</h3>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Ödeme bilgileriniz SSL şifreleme ile korunmaktadır. Kart bilgileriniz saklanmaz.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
