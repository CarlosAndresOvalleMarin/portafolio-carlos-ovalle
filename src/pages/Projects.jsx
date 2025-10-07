import './Projects.css';
import arumImg from "../assets/arum.png";
import cgImg from '../assets/cg-nutricion.png';

import htmlIcon from '../assets/icons/html.svg';
import cssIcon from '../assets/icons/css.svg';
import jsIcon from '../assets/icons/js.svg';

function Projects() {
  return (
    <section id="proyectos" className="projects">
      <h2>Proyectos destacados</h2>
      <div className="project-grid">

        {/* ARUM */}
        <div className="project-card">
          <img src={arumImg} alt="ARUM" />
          <h3>ARUM</h3>
          <p>Página web diseñada con especificaciones del cliente para el sector hotelero, incorporando un diseño visual simple con mensajes flotantes que evocan los principios de la marca.</p>
          <div className="tech-icons">
            <img src={htmlIcon} alt="HTML" />
            <img src={cssIcon} alt="CSS" />
            <img src={jsIcon} alt="JavaScript" />
          </div>
          <a href="https://arummode.netlify.app" target="_blank" rel="noopener noreferrer">
            Ver proyecto
          </a>
        </div>

        {/* CG Nutrición */}
        <div className="project-card">
          <img src={cgImg} alt="CG Nutrición" />
          <h3>CG Nutrición</h3>
          <p>Sitio informativo para asesoría nutricional, con diseño limpio y estructura responsiva.</p>
          <div className="tech-icons">
            <img src={htmlIcon} alt="HTML" />
            <img src={cssIcon} alt="CSS" />
            <img src={jsIcon} alt="JavaScript" />
          </div>
          <a href="https://cgnutricion.netlify.app" target="_blank" rel="noopener noreferrer">
            Ver proyecto
          </a>
        </div>

        

      </div>
    </section>
  );
}

export default Projects;