import { useState } from "react";
import Footer from "../../Tools/Footer/Footer";
import Header from "../../Tools/Header/Header";
import "./TeamB.css";

// Datos de ejemplo. Sustituye con datos reales desde tu backend.
const empresasData = [
    {
        id: 1,
        nombre: "TrackForReal",
        logo: "https://images.vexels.com/content/142887/preview/growing-logistic-company-logo-2f366b.png",
        banner: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
        actividades: [
            {
                id: 101,
                nombre: "Dinámica de Confianza",
                descripcion:
                    "Actividad enfocada en fortalecer la confianza entre los miembros del equipo por medio de ejercicios guiados y reflexión grupal. Se estructura en fases progresivas que van de dinámicas ligeras de conexión a actividades más profundas de apertura y colaboración. Un facilitador especializado crea un espacio seguro donde cada participante puede expresarse, escuchar activamente y ofrecer retroalimentación constructiva. Incluye retos colaborativos diseñados para evidenciar la interdependencia, ejercicios de vulnerabilidad controlada que promueven empatía y segmentos de análisis guiado para transformar la experiencia en aprendizajes prácticos. Al cierre, el grupo identifica acuerdos de confianza y compromisos accionables que pueden integrarse a la operación diaria. El programa es adaptable a equipos presenciales, remotos o híbridos y requiere materiales mínimos. Ideal para equipos recién conformados, áreas en proceso de integración o entornos que atraviesan cambios organizacionales y necesitan fortalecer su cohesión.",
                imagen:
                    "https://i.ytimg.com/vi/ondXSpYy7rU/maxresdefault.jpg",
            },
            {
                id: 102,
                nombre: "Reto de Comunicación",
                descripcion:
                    "Desafíos por equipos donde la comunicación efectiva es clave para completar las tareas.",
                imagen: "",
            },
        ],
    },
    {
        id: 2,
        nombre: "Innovation Corp.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Logotipo_empresa.png",
        banner: "https://www.stelorder.com/wp-content/uploads/2021/09/portada-empresa.jpg",
        actividades: [
            {
                id: 201,
                nombre: "Circuito de Colaboración",
                descripcion:
                    "Serie de estaciones con retos colaborativos diseñados para fomentar liderazgo compartido y resolución de problemas.",
                imagen: "",
            },
            {
                id: 202,
                nombre: "Construye la Torre",
                descripcion:
                    "Equipos compiten por construir la torre más alta con materiales limitados. Trabajo en equipo + creatividad.",
                imagen: "",
            },
        ],
    },
];

function TeamB() {
    const [selectedActivity, setSelectedActivity] = useState(null);

    const openActivity = (empresa, actividad) => {
        setSelectedActivity({
            ...actividad,
            empresaNombre: empresa.nombre,
            empresaLogo: empresa.logo,
        });
    };

    const closeModal = () => setSelectedActivity(null);

    return (
        <>
            <Header />
            <div className="teamb-container">
                <h1 className="teamb-title">Teambuildings</h1>
                <p className="teamb-description">
                    Aquí encontrarás una variedad de actividades diseñadas para fortalecer la cohesión y el
                    trabajo en equipo. Explora las opciones y elige la que mejor se adapte a tus necesidades.
                </p>
            </div>

            {/* Grid de tarjetas de empresas */}
            <div className="teamb-grid">
                {empresasData.map((empresa) => (
                    <div className="teamb-card" key={empresa.id}>
                        <div className="teamb-card-banner">
                            <img
                                src={empresa.banner || empresa.logo}
                                alt={`Banner de ${empresa.nombre}`}
                                className="teamb-banner-img"
                            />
                            <img
                                src={empresa.logo}
                                alt={empresa.nombre}
                                className="teamb-logo-overlay"
                            />
                        </div>

                        <h2 className="teamb-card-title">{empresa.nombre}</h2>

                        <ul className="teamb-activity-list">
                            {empresa.actividades.map((act, index) => (
                                <li
                                    key={act.id}
                                    className={`teamb-activity-item ${index < empresa.actividades.length - 1 ? "with-divider" : ""
                                        }`}
                                >
                                    <button
                                        type="button"
                                        className="teamb-activity-link"
                                        onClick={() => openActivity(empresa, act)}
                                    >
                                        {act.nombre}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Modal Actividad */}
            {selectedActivity && (
                <div className="teamb-modal-overlay" onClick={closeModal}>
                    <div
                        className="teamb-modal-content"
                        onClick={(e) => e.stopPropagation()} // evita cierre al clicar dentro
                    >
                        <button className="teamb-modal-close" onClick={closeModal} aria-label="Cerrar">
                            ×
                        </button>

                        <div className="teamb-modal-header">
                            <img
                                src={selectedActivity.empresaLogo}
                                alt={selectedActivity.empresaNombre}
                                className="teamb-modal-logo"
                            />
                            <h3>{selectedActivity.nombre}</h3>
                            <p className="teamb-modal-empresa">{selectedActivity.empresaNombre}</p>
                        </div>

                        {selectedActivity.imagen && (
                            <img
                                src={selectedActivity.imagen}
                                alt={`Imagen de ${selectedActivity.nombre}`}
                                className="teamb-modal-img"
                            />
                        )}

                        <div className="teamb-modal-body">
                            <h4>Descripción</h4>
                            <p>{selectedActivity.descripcion}</p>
                        </div>

                        <div className="teamb-modal-actions">
                            <button className="teamb-modal-btn"><a className="ateamb" href="/contacto">Contactar</a></button>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
}

export default TeamB;
