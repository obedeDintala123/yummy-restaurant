import { useState, useCallback } from "react";

export function useMenuOpen(initial = false) {
    const [menuOpen, setMenuOpen] = useState(initial);

    const toggleMenu = useCallback(() => {
        setMenuOpen((open) => !open);
    }, []);

    return { menuOpen, setMenuOpen, toggleMenu };
}