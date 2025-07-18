import { useState } from "react";
import Footer from "../../Tools/Footer/Footer";
import Header from "../../Tools/Header/Header";
import Swal from "sweetalert2";
import "./OptionsActivity.css";

function OptionsActivity() {
    const [empresas, setEmpresas] = useState([
        {
            id: 1,
            nombre: "TrackForReal",
            actividades: [
                { id: 101, nombre: "Dinámica de Confianza"},
                { id: 102, nombre: "Reto de Comunicación"},
            ],
        },
        {
            id: 2,
            nombre: "Innovation Corp.",
            actividades: [
                { id: 201, nombre: "Circuito de Colaboración"},
                { id: 202, nombre: "Construye la Torre"},
            ],
        },
    ]);

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedActivity, setSelectedActivity] = useState(null);

    const openModal = (actividad, empresaId) => {
        setSelectedActivity({ ...actividad, empresaId });
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedActivity(null);
    };

    const handleChange = (e) => {
        setSelectedActivity({
            ...selectedActivity,
            [e.target.name]: e.target.value,
        });
    };

    const handleSave = () => {
        setEmpresas((prev) =>
            prev.map((empresa) =>
                empresa.id === selectedActivity.empresaId
                    ? {
                        ...empresa,
                        actividades: empresa.actividades.map((act) =>
                            act.id === selectedActivity.id ? selectedActivity : act
                        ),
                    }
                    : empresa
            )
        );

        closeModal();

        Swal.fire({
            icon: "success",
            title: "Actividad actualizada",
            text: "Los cambios se han guardado correctamente.",
            confirmButtonColor: "#d64900",
        });
    };

    const handleDelete = (empresaId, actividadId) => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "¡Esta acción no se puede deshacer!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d64900",
            cancelButtonColor: "#888",
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                setEmpresas((prev) =>
                    prev.map((empresa) =>
                        empresa.id === empresaId
                            ? {
                                ...empresa,
                                actividades: empresa.actividades.filter((act) => act.id !== actividadId),
                            }
                            : empresa
                    )
                );

                Swal.fire({
                    icon: "success",
                    title: "Eliminado",
                    text: "La actividad ha sido eliminada.",
                    confirmButtonColor: "#d64900",
                });
            }
        });
    };

    return (
        <>
            <Header />
            <div className="edit-activity-container">
                <h1 className="edit-title">Opciones de las actividades</h1>
                <p className="edit-description">
                    Aquí puedes gestionar las actividades de cada empresa que tengas registrada. Haz clic en{" "}
                    <span className="highlight1">Modificar</span> o <span className="highlight2">Eliminar</span>.
                </p>

                {empresas.map((empresa) => (
                    <div key={empresa.id} className="empresa-section">
                        <h2 className="empresa-title">{empresa.nombre}</h2>
                        <table className="activity-table">
                            <thead>
                                <tr>
                                    <th>Nombre de la Actividad</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {empresa.actividades.map((act) => (
                                    <tr key={act.id}>
                                        <td>{act.nombre}</td>
                                        <td className="action-buttons">
                                            <button
                                                className="btn-modificar"
                                                onClick={() => openModal(act, empresa.id)}
                                            >
                                                Modificar
                                            </button>
                                            <button
                                                className="btn-eliminar"
                                                onClick={() => handleDelete(empresa.id, act.id)}
                                            >
                                                Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>

            {modalOpen && selectedActivity && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3>Editar Actividad</h3>
                        <label>Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            value={selectedActivity.nombre}
                            onChange={handleChange}
                        />
                        <label>Descripción</label>
                        <textarea
                            name="descripcion"
                            value={selectedActivity.descripcion}
                            onChange={handleChange}
                        />
                        <div className="modal-actions">
                            <button className="btn-cancelar" onClick={closeModal}>
                                Cancelar
                            </button>
                            <button className="btn-guardar" onClick={handleSave}>
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
}

export default OptionsActivity;
