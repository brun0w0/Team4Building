import Footer from "../../Tools/Footer/Footer";
import Header from "../../Tools/Header/Header";
import './Contact.css'

function Contact() {
    return (
        <>
            <Header />
            <div className="contact-container">
                <h1 className="contact-title">Contacto</h1>
                <p className="contact-description">
                    Contacta con la empresa que te interesa llenando el formulario para mas información que deseas obtener.
                </p>
            </div>
            <Footer />
        </>
    );
}

export default Contact;