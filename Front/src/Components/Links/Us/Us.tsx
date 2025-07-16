import Footer from "../../Tools/Footer/Footer";
import Header from "../../Tools/Header/Header";
import './Us.css'

function Us() {
    return (
        <>
            <Header />
            <div className="us-container">
                <h1 className="us-title">Sobre nosotros</h1>

                <section className="us-section">
                    <h3 className="us-subtitle">¿Quiénes somos?</h3>
                    <p className="us-paragraph">
                        Somos una plataforma digital diseñada para conectar empresas especializadas en actividades de
                        team building con organizaciones que buscan fortalecer la cohesión, comunicación y productividad
                        de sus equipos de trabajo. A través de Team4Building, facilitamos un espacio donde las empresas
                        proveedoras pueden registrarse, publicar sus servicios y llegar a nuevos clientes de manera
                        directa y eficiente.
                    </p>
                </section>

                <section className="us-section">
                    <h3 className="us-subtitle">Nuestra misión</h3>
                    <p className="us-paragraph">
                        Nuestro objetivo es simplificar el proceso de búsqueda y contratación de experiencias de
                        integración laboral, ofreciendo una herramienta intuitiva, moderna y accesible tanto para
                        visitantes como para empresas registradas. Creemos en el poder del trabajo en equipo como eje del
                        desarrollo organizacional, y buscamos ser un puente confiable entre quienes crean estas experiencias
                        y quienes las necesitan.
                    </p>
                </section>

                <section className="us-section">
                    <h3 className="us-subtitle">Comprometidos con la innovación</h3>
                    <p className="us-paragraph">
                        Team4Building nace como un proyecto académico con visión de impacto real, desarrollado con tecnologías
                        modernas como React, TypeScript, Node.js, MySQL y Prisma. Estamos comprometidos con la mejora continua
                        de la plataforma, escuchando las necesidades de nuestros usuarios para seguir evolucionando y brindando
                        una experiencia segura, práctica y personalizada.
                    </p>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default Us;
