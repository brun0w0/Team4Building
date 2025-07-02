import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import './Footer.css'


function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-logo">
                <span className="team">TEAM</span>
                <span className="number">4</span>
                <span className="building">Building</span>
            </div>

            <p className="footer-subtext">
                Únete a nuestra comunidad, te enviaremos la mejor información
            </p>

            <div className="footer-subscribe">
                <input type="email" placeholder="Correo Electrónico"/>
                <button>SUSCRIBIRTE</button>
            </div>

            <div className="footer-socials">
                <FaFacebook />
                <FaInstagram />
                <FaTiktok />
            </div>

            <p className="footer-copy">2025 / TEAM4Building, Todos los Derechos Reservados</p>
        </footer>
    );
}

export default Footer;
