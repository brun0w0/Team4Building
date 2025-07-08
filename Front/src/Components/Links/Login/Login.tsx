import Footer from '../../Tools/Footer/Footer';
import Header from '../../Tools/Header/Header';
import './Login.css'

function Login() {
    return (
        <>
            <Header />
            <div className="login-container">
                <div className="login-body">
                    <h1>Iniciar sesión</h1>
                    <p>Inicia sesión con nosotros</p>
                    <p>Próximamente...</p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Login;