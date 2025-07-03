import './Inicio.css';
import Header from "../../Tools/Header/Header";
import Footer from '../../Tools/Footer/Footer';

function Inicio() {
    function scrollCarousel(direction: number) {
        const carousel = document.getElementById("carousel");
        const scrollAmount = 500;

        if (carousel) {
            carousel.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
        }
    }
      

    return (
        <>
            <Header />
            <div className="container">
                <div className="section">
                    <img
                        src="https://www.teambuildinginmexico.com/images/gallery/inflatables-teambuilding-smartactiks5.jpg"
                        alt="Actividad de team building"
                        className="section-image"
                    />
                    <div className="form-box">
                        <h3>¿QUÉ ACTIVIDAD TE GUSTARÍA PARA TUS COLABORADORES?</h3>
                        <input
                            type="text"
                            placeholder="Armado de bicicletas"
                        />
                        <button>SEND</button>
                    </div>
                    <div className="section-text">
                        <p>Conecta. Colabora. Fortalece tu equipo.</p>
                    </div>
                </div>

                <div className="section2">
                    <div className="imagen-section2">
                        <img src="https://www.teambuildinginmexico.com/images/gallery/smartactiks-epi1.jpg" alt="Team building en la playa" />
                    </div>
                    <div className="section2-texts">
                        <div className="section2-title">
                            <h1>POTENCIA EL TRABAJO EN EQUIPO CON LOS MEJORES EXPERTOS EN TEAMBUILDING</h1>
                        </div>
                        <div className="section2-p">
                            <p>
                                Our experience is unparalleled, meaning you can rely on us to provide safe, dynamic,
                                innovative and purpose driven corporate team building experiences with the utmost in client
                                focused professionalism and service.
                            </p>
                            <p>
                                Our expertise ensures we can deliver corporate events and team building activities for groups
                                from 5 people up to 5000 people, across any reasonable budget, anywhere in Cancun, Mayan
                                Riviera, Playa del Carmen, Cozumel and Isla Mujeres.
                            </p>
                            <p>
                                We run team building events in all areas on the Peninsula de Yucatan, with offices in Cancun,
                                Mexico.
                            </p>
                            <p>
                                When you enlist Smartactik's - Teambuilding, you can rest assure you will get the best for you
                                and your team.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section3">
                    <div className="section3-title">
                        <h1>EXPLORA NUESTROS PROGRAMAS DESTACADOS DE TEAMBUILDING</h1>
                    </div>
                    <div className="section3-images">
                        <div className="section3-image">
                            <img src="https://www.teambuildinginmexico.com/images/programs/beach-gladiators-teambuilding.jpg" alt="Beach Gladiators" />
                        </div>
                        <div className="section3-image">
                            <img src="https://www.teambuildinginmexico.com/images/programs/mexican-pinatas-teambuilding.jpg" alt="Mexican Piñatas" />
                        </div>
                        <div className="section3-image">
                            <img src="https://www.teambuildinginmexico.com/images/programs/Smartactiks_BikeBuilding_en.jpg" alt="Charity Bike Building" />
                        </div>
                    </div>
                </div>

                <div className="section4">
                    <div className="section4-texts">
                        <div className="section4-title">
                            <h1>PROGRAMAS DISEÑADOS PARA FORTALECER TU EQUIPO</h1>
                        </div>
                        <div className="section4-p">
                            <p>
                                Team building events have a positive effect on how a group of individuals adapt to new circumstances, together!
                            </p>
                            <p>
                                Be assured that your event is tailored to your specific goals and the requirements of the individuals in your team.
                                All of our events are carefully developed to ensure your team receives a balanced mix of mental, emotional
                                and physical activities. This means the event you choose will have a guaranteed positive effect on morale, motivation,
                                confidence and team effectiveness.
                            </p>
                            <p>
                                Whatever the environment and ethos of your organisation, we can custom tailor a team building exercise to suit it. You
                                might be from a multi-national, national company or organisation, a small to medium enterprise or part of a
                                governmental ,educational or not for profit organisation...
                            </p>
                        </div>
                    </div>
                    <div className="video-section4">
                        <iframe
                            width="550"
                            height="400"
                            src="https://www.youtube.com/embed/Xsxiak0vHck?si=QiLuLQWSryY_kY0v"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>

                <div className="section-naranja">
                    <div className="title-naranja">
                        <h1>UNIMOS A QUIENES CREAN EQUIPOS FUERTES CON QUIENES LOS NECESITAN.</h1>
                    </div>
                </div>

                <div className="section5">
                    <button className="carousel-btn left" onClick={() => scrollCarousel(-1)}>&lt;</button>

                    <div className="carousel-images" id="carousel">
                        <img src="https://www.teambuildinginmexico.com/images/gallery/beach-olympics-teambuilding-smartactiks2.jpg" alt="" />
                        <img src="https://teambuildinginmexico.com/images/gallery/treasure-hunt-pirate-teambuilding-smartactiks-02.jpg" alt="" />
                        <img src="https://www.teambuildinginmexico.com/images/gallery/talent-teambuilding-smartactiks-01.jpg" alt="" />
                        <img src="https://www.teambuildinginmexico.com/images/gallery/beach-olympics-teambuilding-smartactiks2.jpg" alt="" />
                        <img src="https://teambuildinginmexico.com/images/gallery/treasure-hunt-pirate-teambuilding-smartactiks-02.jpg" alt="" />
                        <img src="https://www.teambuildinginmexico.com/images/gallery/talent-teambuilding-smartactiks-01.jpg" alt="" />
                    </div>

                    <button className="carousel-btn right" onClick={() => scrollCarousel(1)}>&gt;</button>
                </div>

                <div className="section6">
                    <div className="title-section6">
                        <h1>ENCUENTRA EL PROVEEDOR IDEAL PARA TU PROXIMO EVENTO DE TEAMBUILDING.</h1>
                    </div>
                    <div className="section6-images">
                        <a href="#">
                            <img src="https://img.pikbest.com/origin/09/35/80/12RpIkbEsTQjS.png!sw800" alt="" />
                        </a>
                        <a href="#">
                            <img src="https://maderasytoldosparedes.es/wp-content/uploads/2024/03/LOGO-Maderas-y-Toldos-y-Paredes.png" alt="" />
                        </a>
                        <a href="#">
                            <img src="https://logosmarcas.net/wp-content/uploads/2021/03/Disney-Logo.png" alt="" />
                        </a>
                        <a href="#">
                            <img src="https://static.vecteezy.com/system/resources/previews/024/553/853/non_2x/colorful-eagle-head-logo-pop-art-style-eagle-face-sticker-pastel-cute-colors-ai-generated-png.png" alt="" />
                        </a>
                        <a href="#">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Wikimedia-logo.png" alt="" />
                        </a>
                        <a href="#">
                            <img src="https://www.logoai.com/oss/icons/2021/12/02/EoLJeYhT6YPfd26.png" alt="" />
                        </a>
                        <a href="#">
                            <img src="https://www.logoai.com/oss/icons/2021/10/27/rRWiZMXIlMsdf2Z.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Inicio;