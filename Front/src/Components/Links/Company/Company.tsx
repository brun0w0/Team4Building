import Footer from "../../Tools/Footer/Footer";
import Header from "../../Tools/Header/Header";
import './Company.css'

function Company() {
    return (

        <>
            <Header />
            <div className="company1">
                <h1>Empresas</h1>
                <p>Estas son empresas a las que puedes echar un vistazo y elegir lo que buscas.</p>
            </div>
            <Footer />
        </>
    );
}

export default Company;