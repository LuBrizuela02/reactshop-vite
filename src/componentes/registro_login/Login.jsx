import './registro_login.css'

function Login() {
    return (
    <section className="auth-contenedor">
    <form onSubmit={(e) => e.preventDefault()}>
        <h2>Login</h2>

        <div className="form_input">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="janedoe@email.com" />
        </div>

        <div className="form_input">
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" placeholder="Contraseña" />
        </div>

        <button type="submit">Iniciar sesión</button>
    </form>
    </section>
    )
}

export default Login