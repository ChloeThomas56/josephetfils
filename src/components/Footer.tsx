import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__top">
                <p>Un projet, une question&nbsp;? Discutons-en.</p>
                <Link 
                    href="/contact"
                    className="button button--contained"
                >
                    Me contacter
                </Link>
            </div>
            <nav className="footer__nav">
                <div className="footer__nav-child">
                    <span>Liens</span>
                    <ul>
                        <li>
                            <Link href="/a-propos" className="hover-fade">
                                À propos
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover-fade">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__nav-child">
                    <span>Informations</span>
                    <ul>
                        <li>
                            <Link href="/mentions-legales" className="hover-fade">
                                Mentions légales
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="footer__bottom">
                <p>
                    &copy; 2025 - Site réalisé par&nbsp;
                    <a 
                        href="https://www.chloethomas.me/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover-fade"
                    >
                        Chloé Thomas
                    </a>
                </p>
            </div>
        </footer>
    )
}