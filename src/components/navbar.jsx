export default () => (
  <>
    <header class="header">
      <nav class="navbar navbar-expand-lg fixed-top py-3">
        <div class="container">
          <a href="#" class="navbar-brand text-uppercase font-weight-bold">
            Marcus
          </a>
          <button
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            class="navbar-toggler navbar-toggler-right"
          >
            <i class="fa fa-bars"></i>
          </button>
          <div id="navbarSupportedContent" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a
                  href="#SobreMim"
                  class="nav-link text-uppercase font-weight-bold"
                >
                  Sobre Mim <span class="sr-only">(current)</span>
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
