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
                    <h3 className="us-subtitle">Who we are?</h3>
                    <p className="us-paragraph">
                        We are a digital platform designed to connect companies specializing in team building activities
                        with organizations seeking to strengthen the cohesion, communication, and productivity of their
                        teams. Through Team4Building, we provide a space where supplier companies can register, publish
                        their services, and reach new clients directly and efficiently.
                    </p>
                </section>
                <hr />
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
                    <h3 className="us-subtitle">Our mission</h3>
                    <p className="us-paragraph">
                        Our goal is to simplify the process of searching for and booking work integration experiences by
                        offering an intuitive, modern, and accessible tool for both visitors and registered companies. We
                        believe in the power of teamwork as the cornerstone of organizational development, and we strive to
                        be a reliable bridge between those who create these experiences and those who need them.
                    </p>
                </section>
                <hr />
                <section className="us-section">
                    <h3 className="us-subtitle">Comprometidos con la innovación</h3>
                    <p className="us-paragraph">
                        Team4Building nace como un proyecto académico con visión de impacto real, desarrollado con tecnologías
                        modernas. Estamos comprometidos con la mejora continua
                        de la plataforma, escuchando las necesidades de nuestros usuarios para seguir evolucionando y brindando
                        una experiencia segura, práctica y personalizada.
                    </p>
                </section>
                <section className="us-section">
                    <h3 className="us-subtitle">Committed to innovation</h3>
                    <p className="us-paragraph">
                        Team4Building was born as an academic project with a vision for real impact, developed with modern 
                        technologies. We are committed to continuous improvement of the platform, listening to our users' needs to 
                        continue evolving and providing a safe, practical, and personalized experience.
                    </p>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default Us;
