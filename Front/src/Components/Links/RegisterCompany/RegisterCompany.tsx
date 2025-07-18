import { useState, useEffect } from 'react';
import Footer from '../../Tools/Footer/Footer';
import Header from '../../Tools/Header/Header';
import './RegisterCompany.css';

function RegisterCompany() {
    const [logoPreview, setLogoPreview] = useState(null);
    const [bannerPreview, setBannerPreview] = useState(null);
    const [modalImage, setModalImage] = useState(null);

    // Guardamos los object URLs para revocarlos y evitar memory leaks
    useEffect(() => {
        return () => {
            if (logoPreview) URL.revokeObjectURL(logoPreview);
            if (bannerPreview) URL.revokeObjectURL(bannerPreview);
        };
    }, [logoPreview, bannerPreview]);

    const handleLogoChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        if (logoPreview) URL.revokeObjectURL(logoPreview);
        setLogoPreview(URL.createObjectURL(file));
    };

    const handleBannerChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        if (bannerPreview) URL.revokeObjectURL(bannerPreview);
        setBannerPreview(URL.createObjectURL(file));
    };

    // (Opcional) Validación simple de teléfono 10 dígitos MX
    const handlePhoneInput = (e) => {
        // Permite sólo números y corta a 10
        e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica para enviar datos al backend (FormData, fetch, etc.)
        console.log('Formulario registrado');
    };

    return (
        <>
            <Header />
            <div className="regisempresa-container">
                <div className="arriba-regisempresa">
                    <h1>Registro de empresa</h1>
                    <p>
                        Registra tu empresa llenando los siguientes campos. Todos los campos de color{' '}
                        <span className="naranja">naranja</span> son obligatorios.
                    </p>
                </div>

                <div className="formulario-regisempresa">
                    <form onSubmit={handleSubmit}>
                        <div className="form-columns">
                            {/* Columna 1 */}
                            <div className="form-column">
                                <h2>Datos generales</h2>

                                <label className="naranja">Nombre de la empresa</label>
                                <input
                                    type="text"
                                    placeholder="Ingresa el nombre de tu empresa"
                                    required
                                    name="nombreEmpresa"
                                />

                                <label className="naranja">Correo electrónico</label>
                                <input
                                    type="email"
                                    placeholder="Ingresa el correo electrónico de tu empresa"
                                    required
                                    name="correoEmpresa"
                                />

                                <label className="naranja">Teléfono</label>
                                <input
                                    type="tel"
                                    placeholder="Ingresa el número de teléfono (10 dígitos)"
                                    required
                                    name="telefonoEmpresa"
                                    pattern="\d{10}"
                                    inputMode="numeric"
                                    onInput={handlePhoneInput}
                                />

                                <label className="naranja">Dirección</label>
                                <input
                                    type="text"
                                    placeholder="Ingresa la dirección de tu empresa"
                                    required
                                    name="direccionEmpresa"
                                />

                                <label className="naranja">Descripción</label>
                                <textarea
                                    placeholder="Describe tu empresa"
                                    rows="20"
                                    required
                                    name="descripcionEmpresa"
                                ></textarea>
                            </div>

                            {/* Columna 2 */}
                            <div className="form-column">
                                <h2>Datos adicionales</h2>

                                <label className='naranja'>Logo de la empresa</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleLogoChange}
                                    required
                                    name="logoEmpresa"
                                />
                                {logoPreview && (
                                    <div className="preview-container">
                                        <img
                                            src={logoPreview}
                                            alt="Vista previa Logo"
                                            className="preview-image"
                                            onClick={() => setModalImage(logoPreview)}
                                        />
                                        <p className="click-text">Haz clic para ampliar</p>
                                    </div>
                                )}

                                <label className='naranja'>Banner de la empresa</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleBannerChange}
                                    required
                                    name="bannerEmpresa"
                                />
                                {bannerPreview && (
                                    <div className="preview-container">
                                        <img
                                            src={bannerPreview}
                                            alt="Vista previa Banner"
                                            className="preview-image"
                                            onClick={() => setModalImage(bannerPreview)}
                                        />
                                        <p className="click-text">Haz clic para ampliar</p>
                                    </div>
                                )}

                                <label>Red social</label>
                                <input type="url" placeholder="Link de una Red Social" name="linkedinEmpresa" />

                                <label>Sitio Web</label>
                                <input type="url" placeholder="www.sitioweb.com" name="sitioEmpresa" />
                            </div>
                        </div>

                        <div className="btn-container">
                            <button type="submit" className="boton-regisempresa">
                                Registrar empresa
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Modal global (fuera del form/columns) */}
            {modalImage && (
                <div className="modal-overlay" onClick={() => setModalImage(null)}>
                    <img src={modalImage} alt="Imagen completa" className="modal-image" />
                </div>
            )}

            <Footer />
        </>
    );
}

export default RegisterCompany;
