import Footer from "../../Tools/Footer/Footer";
import Header from "../../Tools/Header/Header";
import './Company.css';
import { Compass, Globe, Link, Mail, Phone } from 'lucide-react';


function Company() {
        const empresas = [
        {
            id: 1,
            nombre: "TracksForReal",
            descripcion: "Ofrecemos experiencias únicas que te podran gustar a ti y a tu equipo de trabajo. Somo una empresa con 25 años de experiencia de respaldo, y lo hacemos cada dia mejor.",
            logo: "https://images.vexels.com/content/142887/preview/growing-logistic-company-logo-2f366b.png",
            banner: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7", 
            correo: "recursoshumanos@tracksfr.com",
            telefono: "5590090821",
            direccion: "SM 24 M 33 L 2 Av. Luciernagas Los Koalas Ignacio Zaragoza, CDMX, Mexico.",
            redsocial: "No proporcionado",
            sitioweb: "No proporcionado"
        },
        {
            id: 2,
            nombre: "Innovation Corp.",
            descripcion: "Actividades innovadoras que te gustaran, nos profesionalisamos en el tema y nos profundisamos en lo que hacemos.",
            logo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Logotipo_empresa.png",
            banner: "https://www.stelorder.com/wp-content/uploads/2021/09/portada-empresa.jpg",
            correo: "people@innovationcorporation.com",
            telefono: "3498123200",
            direccion: "SM 20 M 13 L 1 Av. Juarez, Calle de las sirenas, CDMX, Mexico.",
            redsocial: "https://instagram.com",
            sitioweb: "https://www.google.com"
        },
    ];


    return (
        <>
            <Header />
            <div className="company-header">
                <h1>Empresas</h1>
                <p>Estas son empresas a las que puedes echar un vistazo y elegir lo que buscas.</p>
            </div>

            <div className="company-grid">
                {empresas.map((empresa) => {
                    const bannerSrc = empresa.banner || empresa.logo;
                    return (
                        <div className="company-card" key={empresa.id}>
                            <div className="company-card-banner">
                                <img
                                    src={bannerSrc}
                                    alt={`Banner de ${empresa.nombre}`}
                                    className="company-banner-img"
                                />
                                <img
                                    src={empresa.logo}
                                    alt={empresa.nombre}
                                    className="company-logo-overlay"
                                />
                            </div>

                            <h2>{empresa.nombre}</h2>
                            <p>
                                <Mail size={18}  color="#d64900" style={{ marginRight: "8px" }} />
                                Correo electrónico <span className="negrita">{empresa.correo}</span>
                            </p>
                            <p>
                                <Phone size={18}  color="#d64900" style={{ marginRight: "8px" }} />
                                Teléfono <span className="negrita">{empresa.telefono}</span>
                            </p>
                            <p>
                                <Compass size={18} color="#d64900" style={{ marginRight: "8px" }} />
                                Dirección <span className="negrita">{empresa.direccion}</span>
                            </p>
                            <p>
                                <Link size={18} color="#d64900" style={{ marginRight: "8px" }} />
                                Red social <a href={empresa.redsocial} target="_blank"><span className="negrita">{empresa.redsocial}</span></a>
                            </p>
                            <p>
                                <Globe size={18} color="#d64900" style={{ marginRight: "8px" }} />
                                Sitio web <a href={empresa.sitioweb} target="_blank"><span className="negrita">{empresa.sitioweb}</span></a>
                            </p>

                            <div className="descripcion-empresa">
                                <p className="descripcion-empresa-titulo">Conoce a la empresa</p>
                                <p>{empresa.descripcion}</p>
                            </div>

                            <button className="ver-actividades-btn">Ver actividades</button>
                        </div>
                    );
                })}
            </div>


            <Footer />
        </>
    );
}

export default Company;
