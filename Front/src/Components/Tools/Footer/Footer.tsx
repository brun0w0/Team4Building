import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaArrowUp } from "react-icons/fa";
import './Footer.css';

function Footer() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className="footer-container">
            <a href="/">
                <div className="footer-logo">
                    <span className="team">TEAM</span>
                    <span className="number">4</span>
                    <span className="building">Building</span>
                </div>
            </a>

            <p className="footer-subtext">
                Únete a nuestra comunidad, te enviaremos la mejor información
            </p>

            <div className="footer-subscribe">
                <input type="email" placeholder="Correo Electrónico" />
                <button>SUSCRIBIRTE</button>
            </div>

            <div className="footer-socials">
                <a href="https://facebook.com" target="_blank"><FaFacebook /></a> 
                <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
                <a href="https://tiktok.com" target="_blank"><FaTiktok /></a>
            </div>

            <p className="footer-copy">2025 / TEAM4Building, Todos los Derechos Reservados</p>

            {showScrollTop && (
                <button className="scroll-top" onClick={scrollToTop}>
                    <FaArrowUp />
                </button>
            )}
        </footer>
    );
}

export default Footer;
