import Footer from "../../Tools/Footer/Footer";
import Header from "../../Tools/Header/Header";
import './Login.css'

function Login() {
    return (
        <>
            <Header />
            <div className="login-container">
                <div className="formlogin">
                    <div className="login-body">
                        <h1>Iniciar sesión</h1>
                    </div>
                    <form>
                        <label htmlFor="">Usuario</label>
                        <input
                            type="text"
                            placeholder="Ingresa tu nombre de usuario"
                            required
                        />
                        <label htmlFor="">Contraseña</label>
                        <input
                            type="password"
                            required
                            placeholder="Ingresa tu contraseña"
                        />
                        <button className="login-button">Entrar</button>
                    </form>
                    <div className="register-link">
                        <p>¿No tienes una cuenta? <a className='link12' href="/register">Registrarse</a></p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Login;