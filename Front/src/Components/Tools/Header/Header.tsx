import { useState } from "react";
import "./Header.css";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <a href="/">
                <div className="logo">
                    <span className="team">TEAM</span>
                    <span className="number">4</span>
                    <span className="building">Building</span>
                </div>
            </a>
            <button
                className="hamburger"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                ☰
            </button>

            <nav className={`nav ${menuOpen ? "open" : ""}`}>
                <a href="/">Inicio</a>
                <span className="divider">|</span>
                <a href="/teambuildings">Teambuildings</a>
                <span className="divider">|</span>
                <a href="/empresas">Empresas</a>
                <span className="divider">|</span>
                <a href="/nosotros">Nosotros</a>
                <span className="divider">|</span>
                <a href="/preguntas-frecuentes">Preguntas Frecuentes</a>
                <span className="divider">|</span>
                <a href="/contacto">Contacto</a>
                <span className="divider">|</span>
                <a href="/register">Empezar</a>
            </nav>
        </header>
    );
}

export default Header;
