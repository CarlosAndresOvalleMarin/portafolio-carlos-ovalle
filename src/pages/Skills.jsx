import './Skills.css';
import designIcon from '../assets/icons/Design.png';
import devIcon from '../assets/icons/Code.png';
import qaIcon from '../assets/icons/qa.png';
import procreateIcon from "../assets/icons/procreate.svg";
import researchIcon from "../assets/icons/research.svg";
import writingIcon from "../assets/icons/writing.svg";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Habilidades técnicas</h2>
      <div className="skills-grid">

        <div className="skill-card">
          <img src={designIcon} alt="Diseño UX/UI" />
          <h3>Diseño UX/UI</h3>
          <p>Interfaces limpias, modernas y funcionales, adaptadas a cada necesidad visual.</p>
        </div>

        <div className="skill-card">
          <img src={devIcon} alt="Desarrollo Front-End" />
          <h3>Desarrollo Front-End</h3>
          <p>Maquetación precisa en HTML y CSS, fiel a la referencia visual y optimizada para navegadores.</p>
        </div>

        <div className="skill-card">
          <img src={qaIcon} alt="QA y soporte" />
          <h3>QA y soporte</h3>
          <p>Pruebas funcionales, documentación clara y resolución de errores en proyectos web.</p>
        </div>

        <div className="skill-card">
          <img src={procreateIcon} alt="Diseño en Procreate" />
          <h3>Diseño en Procreate</h3>
          <p>Ilustración digital y composición visual, aplicando técnicas de color, textura y estilo minimalista.</p>
        </div>

        <div className="skill-card">
          <img src={researchIcon} alt="UX Research" />
          <h3>UX Research</h3>
          <p>Investigación centrada en el usuario: entrevistas, encuestas y análisis de comportamiento para mejorar la experiencia digital.</p>
        </div>

        <div className="skill-card">
          <img src={writingIcon} alt="UX Writing" />
          <h3>UX Writing</h3>
          <p>Redacción estratégica de microcopys y contenidos que guían al usuario con claridad, empatía y coherencia.</p>
        </div>

      </div>
    </section>
  );
}

export default Skills;