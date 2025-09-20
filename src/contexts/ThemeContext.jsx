import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(() => {
        // LocalStorage'dan tema tercihini al
        const saved = localStorage.getItem('theme');
        return saved ? JSON.parse(saved) : false;
    });

    useEffect(() => {
        // Tema değiştiğinde localStorage'a kaydet
        localStorage.setItem('theme', JSON.stringify(isDark));

        // HTML class'ını güncelle
        const htmlElement = document.documentElement;
        if (isDark) {
            htmlElement.classList.add('dark');
            console.log('Dark mode activated, HTML classes:', htmlElement.classList.toString());
        } else {
            htmlElement.classList.remove('dark');
            console.log('Light mode activated, HTML classes:', htmlElement.classList.toString());
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark(!isDark);

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
}
