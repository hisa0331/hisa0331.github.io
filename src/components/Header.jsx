import { Link } from "react-router-dom";

export default function Header({ isDarkMode, onToggleDarkMode }) {
    return (
        <header role="banner" id="header">
            <Link to="/" className="header__logo">
                Hisatoshi Naganawa
            </Link>
            <nav role="navigation" aria-label="メインナビゲーション">
                <ul className="header__nav">
                    <li className="header__nav-item">
                        <Link to="/" className="header__nav-link">
                            About
                        </Link>
                    </li>
                    <li className="header__nav-item">
                        <Link to="/works" className="header__nav-link">
                            Works
                        </Link>
                    </li>
                    <li className="header__nav-item">
                        <a
                            href="https://note.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="header__nav-link"
                        >
                            Note
                        </a>
                    </li>
                    <li className="header__nav-item">
                        <Link to="/contact" className="header__nav-link">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <button className="night-mode-toggle" onClick={onToggleDarkMode}>
                {isDarkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
        </header>
    );
}
