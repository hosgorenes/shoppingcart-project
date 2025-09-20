import { createContext, useContext, useState, useEffect } from "react";

const CardContext = createContext();

export function CardProvider({ children }) {
    const [card, setCard] = useState(() => {
        // LocalStorage'dan sepet verilerini al
        const savedCard = localStorage.getItem('shopping-card');
        return savedCard ? JSON.parse(savedCard) : [];
    });

    // Sepet değiştiğinde localStorage'a kaydet
    useEffect(() => {
        localStorage.setItem('shopping-card', JSON.stringify(card));
    }, [card]);

    function addToCard(product, quantity) {
        setCard((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prev, { ...product, quantity }];
        });
    }

    function removeFromCard(id) {
        setCard((prev) => prev.filter((item) => item.id !== id));
    }

    function updateQuantity(id, newQuantity) {
        if (newQuantity <= 0) {
            removeFromCard(id);
            return;
        }
        setCard((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    }

    return (
        <CardContext.Provider value={{ card, addToCard, removeFromCard, updateQuantity }}>
            {children}
        </CardContext.Provider>
    );
}

export function useCard() {
    return useContext(CardContext);
}
