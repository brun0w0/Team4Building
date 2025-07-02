import { useState } from "react";
import "./Header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="logo">
                <span className="team">TEAM</span>
                <span className="number">4</span>
                <span className="building">Building</span>
            </div>

            <button
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>

            <nav className={`nav ${menuOpen ? "open" : ""}`}>
                <a href="#">Inicio</a>
                <span className="divider">|</span>
                <a href="#">Teambuildings</a>
                <span className="divider">|</span>
                <a href="#">Empresas</a>
                <span className="divider">|</span>
                <a href="#">Nosotros</a>
                <span className="divider">|</span>
                <a href="#">Preguntas Frecuentes</a>
                <span className="divider">|</span>
                <a href="#">Contacto</a>
            </nav>
        </header>
    );
}

export default Header;
