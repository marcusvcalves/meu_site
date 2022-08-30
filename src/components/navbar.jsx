import logo from "../img/logo.png";
export default () => (
  <>
    <header class="header">
      <nav class="navbar navbar-expand-lg fixed-top py-3">
        <div class="container">
          <img src={logo} alt="" className="logo" id="logo" />
          <div id="navbarSupportedContent" class="">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a
                  href="#SobreMim"
                  class="nav-link text-uppercase font-weight-bold"
                >
                  Sobre Mim
                </a>
              </li>
              <li class="nav-item text-uppercase font-weight-bold">
                <a href="#Contato" class="nav-link">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </>
);
