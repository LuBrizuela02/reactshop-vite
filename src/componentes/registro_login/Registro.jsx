import './registro_login.css'

function Registro() {
    return (
    <section className="auth-contenedor">
    <form onSubmit={(e) => e.preventDefault()}>
        <h2>Formulario de Registro</h2>

        <div className="form_input">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" name="nombre" placeholder="Jane" />
        </div>

        <div className="form_input">
        <label htmlFor="apellido">Apellido</label>
        <input type="text" name="apellido" placeholder="Doe" />
        </div>

        <div className="form_input">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="janedoe@email.com" />
        </div>

        <div className="form_input">
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" placeholder="Contraseña" />
        </div>

        <div className="form_input">
        <label htmlFor="password2">Repetir contraseña</label>
        <input type="password" name="password2" placeholder="Contraseña" />
        </div>

        <div className="form_input">
        <label>
            <input type="checkbox" name="newsletter" />
            Deseo recibir información
        </label>
        </div>

        <button type="submit">Registrarme</button>
    </form>
    </section>
    )
}

export default Registro