import { useState } from 'react';
import Footer from '../../Tools/Footer/Footer';
import Header from '../../Tools/Header/Header';
import './RegisterCompany.css';

function RegisterCompany() {
    const [logoPreview, setLogoPreview] = useState(null);
    const [bannerPreview, setBannerPreview] = useState(null);

    const handleLogoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setLogoPreview(URL.createObjectURL(file));
        }
    };

    const handleBannerChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setBannerPreview(URL.createObjectURL(file));
        }
    };

    return (
        <>
            <Header />
            <div className="regisempresa-container">
                <div className='arriba-regisempresa'>
                    <h1>Registro de empresa</h1>
                    <p>Registra tu empresa llenando los siguientes campos. Todos los campos de color <span className='naranja'>naranja</span> son obligatorios.</p>
                </div>
                <div className='formulario-regisempresa'>
                    <form>
                        <div className="form-columns">
                            {/* Columna 1 */}
                            <div className="form-column">
                                <h2>Datos generales</h2>
                                <label className='naranja'>Nombre de la empresa</label>
                                <input type="text" placeholder='Ingresa el nombre de tu empresa' required />

                                <label className='naranja'>Correo electrónico</label>
                                <input type="email" placeholder='Ingresa el correo electrónico de tu empresa' required />

                                <label className='naranja'>Teléfono</label>
                                <input type="number" placeholder='Ingresa el número de teléfono de tu empresa' required maxLength={10} minLength={10} />

                                <label className='naranja'>Dirección</label>
                                <input type="text" placeholder='Ingresa la dirección de tu empresa' required />

                                <label className='naranja'>Descripción</label>
                                <textarea placeholder="Describe tu empresa" rows="7" required></textarea>
                            </div>

                            {/* Columna 2 */}
                            <div className="form-column">
                                <h2>Datos adicionales</h2>
                                <label className='naranja'>Logo de la empresa</label>
                                <input type="file" accept="image/*" onChange={handleLogoChange} required />
                                {logoPreview && (
                                    <img src={logoPreview} alt="Vista previa Logo" className="preview-image" />
                                )}

                                <label className='naranja'>Banner de la empresa</label>
                                <input type="file" accept="image/*" onChange={handleBannerChange} required />
                                {bannerPreview && (
                                    <img src={bannerPreview} alt="Vista previa Banner" className="preview-image" />
                                )}

                                <label>Facebook</label>
                                <input type="url" placeholder='Link de Facebook' />

                                <label>Instagram</label>
                                <input type="url" placeholder='Link de Instagram' />

                                <label>LinkedIn</label>
                                <input type="url" placeholder='Link de LinkedIn' />

                                <label>Sitio Web</label>
                                <input type="url" placeholder='www.sitioweb.com' />
                            </div>
                        </div>

                        <div className="btn-container">
                            <button className='boton-regisempresa'>Registrar empresa</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default RegisterCompany;
