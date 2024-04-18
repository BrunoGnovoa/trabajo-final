import React, { createContext, useState } from "react";

export const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
    const [showNavbar, setShowNavbar] = useState(true); // Establecerlo en true por defecto

    const [showFooter] = useState(true);

    return (
        <NavbarContext.Provider value={{ showNavbar,showFooter }}>
            {children}
        </NavbarContext.Provider>
    );
};
