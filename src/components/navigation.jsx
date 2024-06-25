

export const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <a href="header">
            <img
              style={{ width: '140px',height: '75px' }}
              src="https://www.ia-challenge.tn/ChallengeAssets/images/partners/issat.png"
              alt="Logo"
              className="navbar-logo"
            />
          </a>
          {/* The right menu icon in bootstrap */}
          <button
            style={{ marginTop: 25, border: 'none' }}
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div
          style={{ marginTop: 10 }}
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                About us
              </a>
            </li>
            <li>
              <a href="#features" className="page-scroll">
                Formation
              </a>
            </li>
            <li>
              <a href="#news" className="page-scroll">
                News
              </a>
            </li>
            <li>
              <a href="#events" className="page-scroll">
                Events
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
            <li>
              <button
                className="button"
                onClick={() => {
                  const loginSection = document.getElementById('login')
                  if (loginSection) {
                    loginSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}


  