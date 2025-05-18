import React, { createContext, useContext, useState } from "react";

// ThemeContext oluşturuluyor
const ThemeContext = createContext();

// ThemeProvider bileşeni
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark"); // Varsayılan tema "light"

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook: ThemeContext'i kolayca kullanmak için
export const useTheme = () => {
    return useContext(ThemeContext);
};