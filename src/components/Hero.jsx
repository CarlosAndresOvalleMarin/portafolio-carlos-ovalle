import './Hero.css';
import perfil from '../assets/perfil-bn.jpg';

function Hero() {
  return (
    <section className="hero">
      
      <div className="hero-content">
        <img src={perfil} alt="Carlos Ovalle" className="hero-img" />
        <div className="hero-text">
          <h1>Carlos Ovalle</h1>
          <p>Tecnólogo en desarrollo de software | Creativo visual | QA Tester</p>
        </div>
      </div>

      <div className="hero-intro">
        <h2></h2>
        <p></p>
      </div>
    </section>
  );
}

export default Hero;