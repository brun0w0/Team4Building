import { useState } from "react";
import Footer from "../../Tools/Footer/Footer";
import Header from "../../Tools/Header/Header";
import './RegisterActivity.css';

function RegisterActivity() {
    const [imagePreview, setImagePreview] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const empresas = ["Empresa A", "Empresa B", "Empresa C"];

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
        }
    };

    return (
        <>
            <Header />
            <div className="activity-container">
                <h1 className="activity-title">Crear Actividad</h1>
                <p className="activity-description">
                    Completa el formulario para publicar una nueva actividad.
                </p>

                <div className="activity-form-container">
                    <form className="activity-form">
                        <label>Nombre de la actividad</label>
                        <input type="text" placeholder="Ingresa el nombre de la actividad" required />

                        <label>Empresa</label>
                        <select required>
                            <option value="">Selecciona una empresa</option>
                            {empresas.map((empresa, index) => (
                                <option key={index} value={empresa}>
                                    {empresa}
                                </option>
                            ))}
                        </select>

                        <label>Descripción</label>
                        <textarea placeholder="Describe la actividad" rows="15" required></textarea>

                        <label>Imagen (opcional)</label>
                        <input type="file" accept="image/*" onChange={handleImageChange} />

                        {imagePreview && (
                            <div className="preview-container">
                                <img
                                    src={imagePreview}
                                    alt="Vista previa"
                                    className="preview-image"
                                    onClick={() => setModalOpen(true)}
                                />
                                <p className="click-text">Haz clic para ampliar</p>
                            </div>
                        )}

                        <button className="activity-button">Crear Actividad</button>
                    </form>
                </div>
            </div>

            {modalOpen && (
                <div className="modal-overlay" onClick={() => setModalOpen(false)}>
                    <img src={imagePreview} alt="Imagen completa" className="modal-image" />
                </div>
            )}
            <Footer />
        </>
    );
}

export default RegisterActivity;
