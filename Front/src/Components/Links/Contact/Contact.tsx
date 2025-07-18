import Footer from "../../Tools/Footer/Footer";
import Header from "../../Tools/Header/Header";
import './Contact.css';

function Contact() {
    return (
        <>
            <Header />
            <div className="contact-container">
                <h1 className="contact-title">Contacto</h1>
                <p className="contact-description">
                    Contacta con la empresa que te interesa llenando el formulario para recibir más información o cotizar alguna actividad.
                </p>

                <div className="contact-form-container">
                    <form className="contact-form">
                        <label>Nombre completo</label>
                        <input type="text" placeholder="Ingresa tu nombre completo" required />

                        <label>Correo electrónico</label>
                        <input type="email" placeholder="Ingresa tu correo electrónico" required />

                        <label>Teléfono</label>
                        <input type="tel" placeholder="Ingresa tu número de teléfono" required />

                        <label>Número de integrantes</label>
                        <select required>
                            <option value="1-50">1 - 50</option>
                            <option value="50-100">50 - 100</option>
                            <option value="mas-100">Más de 100</option>
                        </select>

                        <label>Empresa a contactar</label>
                        <p className="elige-empresa">Elige a que empresa es a la que va dirigida este mensaje. Si 
                            no lo recuerdas, puedes chechar las empresas de nuevo dando <span> <a className="link-elige" href="/empresas" target="_blank">clic aqui</a></span>, no te preocupes, se abrirá una ventana a parte para no perder tus datos escritos.
                        </p>
                        <select required>
                        </select>

                        <label>Comentarios adicionales</label>
                        <textarea placeholder="Escribe tus comentarios aquí" rows="5"></textarea>

                        <button className="contact-button">Enviar</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Contact;
