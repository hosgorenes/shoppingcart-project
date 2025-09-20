import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { useCard } from "../contexts/CardContext";

export default function ProductCard({ product }) {
    const [quantity, setQuantity] = useState(1);
    const { addToCard } = useCard();

    return (
        <div className="product-card flex flex-col items-center">
            <img
                src={product.image}
                alt={product.title}
                className="h-40 mb-4 object-contain"
            />
            <h2 className="font-semibold text-center mb-2" style={{ color: 'var(--text)' }}>{product.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2 font-bold text-lg">${product.price}</p>

            {/* Adet ve Sepete Ekle Butonları */}
            <div className="flex gap-3 mt-4 items-center justify-center">
                {/* Dropdown Menu */}
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger className="btn-gradient">
                        Adet: {quantity} ▼
                    </DropdownMenu.Trigger>

                    <DropdownMenu.Content className="dropdown-content">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                            <DropdownMenu.Item
                                key={num}
                                className="dropdown-item"
                                onClick={() => setQuantity(num)}
                            >
                                {num}
                            </DropdownMenu.Item>
                        ))}
                    </DropdownMenu.Content>
                </DropdownMenu.Root>

                {/* Sepete Ekle Butonu */}
                <button
                    className="btn-gradient"
                    onClick={() => addToCard(product, quantity)}
                >
                    Sepete Ekle
                </button>
            </div>
        </div>
    );
}
