import './footer.css'

function Footer() {
const año = new Date().getFullYear();
return (
        <footer className='site-footer'>
        <div className="footer-contenedor">
            <p>© {año} — Desarrollado por <strong>Ludmila Brizuela</strong></p>
            <p>Trabajo final de la Diplomatura en <em>Professional Backend Developer</em></p>
            
            <div className="footer-links">
                <a href="https://www.linkedin.com/in/ludmila-brizuela-287a92265" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/LuBrizuela02" target="_blank" rel="noopener noreferrer"
                >GitHub</a>
            </div>
        </div>
        </footer>
    )

}

export default Footer