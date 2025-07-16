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

            {/*Copias el codigo y que chat haga que se pueda jalar los datos de la BD y que te de un estilo en CSS
                que se vea con margenes bien y se vea estable y le de estilos bonitos y se alineen bien
            */}
        </>
    );
}

export default Company;

