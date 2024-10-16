import logoFH from '../imgs/testIcon.png'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-color">
        <div className="container-fluid justify-content-center">
          <a className="navbar-brand text-start" href="#"><img src={logoFH} alt="..." width="50px"/>Fantahocky</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-center">
              <li className="nav-item">
                <a className="nav-link" href="#">Regolamento</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Risorse</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">DISABLED</a>
              </li>
            </ul>
            <button type="button" className="btn btn-outline-secondary">Login</button>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;