import logo from './logo.svg';
// import './App.css';
import './assets/vendor/aos/aos.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/css/style.css';

function App() {
  return (
    <div className="App">
        <i className="bi bi-list mobile-nav-toggle d-xl-none"></i> 
        <div id="header">
            <div className="d-flex flex-column">
            <div className="profile">
                <img src="assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle"/>
                <h1 className="text-light"><a href="index.html">Daniel Castillo</a></h1>
                <div className="social-links mt-3 text-center">
                    <a target="_blank" href="https://github.com/X905" className="instagram"><i className="bi bi-github"></i></a>
                    <a target="_blank" href="mailto:hello@danielcastillo.dev" className="google-plus"><i className="bi bi-envelope"></i></a>
                    <a target="_blank" href="https://www.linkedin.com/in/angeldanielcastillo/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
            </div>
            <nav id="navbar" className="nav-menu navbar">
                <ul>
                    <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Inicio</span></a></li>
                    <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>Sobre Mí</span></a></li>
                    <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Curriculum</span></a></li>
                    <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Servicios</span></a></li> 
                    <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contacto</span></a></li>
                </ul>
            </nav>
            </div>
        </div>
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
          <div className="hero-container" data-aos="fade-in">
              <h1>Angel Daniel Castillo</h1>
              <p>I'm <span className="typed" data-typed-items="Web developer, .Net developer, Freelancer, Team Leader"></span></p>
          </div>
        </section>
    </div>
  );
}

export default App;
