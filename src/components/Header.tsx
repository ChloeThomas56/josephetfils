import { useState } from "react";
import CustomLink from "./ui/CustomLink";
import MobileMenu from "./ui/MobileMenu";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = [
        { "path": "/", "label": "Accueil"},
        { "path": "/a-propos", "label": "À propos" },
        { "path": "/contact", "label": "Contact" }
    ];

    return (
        <>
            <header className="header">
                <CustomLink href="/" text="J&F" className="header__logo" />
                <nav className="header__nav">
                    <ul>
                        {links.map((link) => (
                            <li
                                key={link.label} 
                                className="header__nav-item"
                            >
                                <CustomLink href={link.path} text={link.label} />
                            </li>
                        ))}
                    </ul>
                </nav>
                <button 
                    className="menu-button"
                    onClick={() => setIsMenuOpen(true)}
                >
                    Menu
                </button>
            </header>
            <MobileMenu
                links={links}
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
            />
        </>
    )
}