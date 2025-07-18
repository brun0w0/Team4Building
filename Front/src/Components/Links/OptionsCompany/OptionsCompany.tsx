import { useState } from "react";
import Footer from "../../Tools/Footer/Footer";
import Header from "../../Tools/Header/Header";
import Swal from "sweetalert2";
import "./OptionsCompany.css";

function OptionsCompany() {
    const [empresas, setEmpresas] = useState([
        {
            id: 1,
            nombre: "TrackForReal",
            correo: "recursoshumanos@trackfr.com",
            telefono: "5590090821",
            actividades: [
                { id: 101, nombre: "Dinámica de Confianza" },
                { id: 102, nombre: "Reto de Comunicación" },
            ],
        },
        {
            id: 2,
            nombre: "Innovation Corp.",
            correo: "people@innovationcorporation.com",
            telefono: "3498123200",
            actividades: [
                { id: 201, nombre: "Circuito de Colaboración" },
                { id: 202, nombre: "Construye la Torre" },
            ],
        },
    ]);

    const handleDeleteCompany = (empresaId) => {
        const empresa = empresas.find((e) => e.id === empresaId);
        const totalActs = empresa?.actividades?.length ?? 0;

        Swal.fire({
            title: `¿Eliminar "${empresa.nombre}"?`,
            html: `Se eliminará la empresa y <strong>${totalActs}</strong> actividad(es) asociada(s).<br/>Esta acción no se puede deshacer.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d64900",
            cancelButtonColor: "#888",
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
            customClass: {
                title: 'swal-title',
                htmlContainer: 'swal-text',
                confirmButton: 'swal-confirm',
                cancelButton: 'swal-cancel'
            }
        }).then((result) => {
            if (!result.isConfirmed) return;

            setEmpresas((prev) => prev.filter((e) => e.id !== empresaId));

            Swal.fire({
                icon: "success",
                title: "Empresa eliminada",
                text: "La empresa y sus actividades fueron eliminadas.",
                confirmButtonColor: "#d64900",
                customClass: {
                    title: 'swal-title',
                    htmlContainer: 'swal-text',
                    confirmButton: 'swal-confirm'
                }
            });
        });

    };

    return (
        <>
            <Header />
            <div className="optionscompany-container">
                <h1 className="optionscompany-title">Opciones de las empresas</h1>
                <p className="optionscompany-description">
                    Aquí puedes administrar las empresas registradas. Solo está disponible la opción de{" "}
                    <span className="highlight">eliminar</span>.
                </p>

                <table className="optionscompany-table">
                    <thead>
                        <tr>
                            <th>Empresa</th>
                            <th>Correo</th>
                            <th>Teléfono</th>
                            <th>Actividades</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empresas.map((empresa) => (
                            <tr key={empresa.id}>
                                <td>{empresa.nombre}</td>
                                <td>{empresa.correo}</td>
                                <td>{empresa.telefono}</td>
                                <td>{empresa.actividades.length}</td>
                                <td className="action-cell">
                                    <button
                                        className="btn-eliminar-empresa"
                                        onClick={() => handleDeleteCompany(empresa.id)}
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {empresas.length === 0 && (
                            <tr>
                                <td colSpan={5} className="no-data">
                                    No hay empresas registradas.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    );
}

export default OptionsCompany;
