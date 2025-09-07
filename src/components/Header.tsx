import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import NavLink from "./ui/NavLink";

export default function Header() {
    const router = useRouter();
    const headerRef = useRef<HTMLElement>(null);

    const links = [
        { "path": "#", "label": "Services" },
        { "path": "#", "label": "Réalisations" },
        { "path": "#", "label": "À propos" },
        { "path": "/contact", "label": "Contact" }
    ];

    useEffect(() => {
        const header = headerRef.current;
        if (!header) return;

        const rootStyles = getComputedStyle(document.documentElement);
        const bgColor = rootStyles.getPropertyValue('--background');
        const textColor = rootStyles.getPropertyValue('--foreground');

        if (router.pathname === "/") {
            header.style.backgroundColor = window.scrollY >= 100 ? bgColor : 'transparent';
            header.style.color = window.scrollY >= 100 ? textColor :  bgColor;

            const onScroll = () => {
                if (window.scrollY >= 100) {
                    gsap.to(header, {
                        backgroundColor: bgColor,
                        color: textColor,
                        duration: 0.5,
                        overwrite: 'auto'
                    });
                } else {
                    gsap.to(header, {
                        backgroundColor: "transparent",
                        color: bgColor,
                        duration: 0.5,
                        overwrite: 'auto'
                    });
                }
            };

            window.addEventListener('scroll', onScroll);

            return () => window.removeEventListener('scroll', onScroll);
        } else {
            header.style.backgroundColor = bgColor;
            header.style.color = textColor;
        }
    }, [router.pathname]);

    return (
        <header ref={headerRef} className="header">
            <NavLink href="/" text="J&F" className="header__logo" />
            <nav className="header__nav">
                <ul>
                    {links.map((link) => (
                        <li
                            key={link.label} 
                            className="header__nav-item"
                        >
                            <NavLink href={link.path} text={link.label} />
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}