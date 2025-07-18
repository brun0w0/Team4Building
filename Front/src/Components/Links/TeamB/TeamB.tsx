import Footer from "../../Tools/Footer/Footer";
import Header from "../../Tools/Header/Header";
import './TeamB.css'

function TeamB() {
    return (
        <>
            <Header/>
            <div className="teamb-container">
                <h1 className="teamb-title">Teambuildings</h1>
                <p className="teamb-description">
                    Aquí encontrarás una variedad de actividades diseñadas para fortalecer la cohesión y el trabajo en equipo.
                    Explora las opciones variadas y elige la que mejor se adapte a tus necesidades.
                </p>
                
            </div>
            <Footer/>
        </>
    );
}

export default TeamB;