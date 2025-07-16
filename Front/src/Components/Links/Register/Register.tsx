import Footer from '../../Tools/Footer/Footer';
import Header from '../../Tools/Header/Header';
import './Register.css'

function Register() {
    return (
        <>
            <Header />
            <div className="register-container">
                <div className="form">
                    <div className="register-body">
                        <h1>Regístrate</h1>
                    </div>
                    <form>
                        <label htmlFor="">Correo electrónico</label>
                        <input
                            type="email"
                            placeholder="correo@example.com"
                            required
                        />
                        <button className="register-button">Enviar</button>
                    </form>
                    <div className="login-link">
                        <p>¿Ya tienes una cuenta? <a className='link12' href="/login">Inicia sesión</a></p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Register;