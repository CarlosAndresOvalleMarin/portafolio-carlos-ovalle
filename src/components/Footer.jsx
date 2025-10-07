import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Carlos Andrés Ovalle Marín. Todos los derechos reservados.</p>
      <a href="#hero">Volver arriba ↑</a>
    </footer>
  );
}

export default Footer;