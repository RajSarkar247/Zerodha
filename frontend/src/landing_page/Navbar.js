import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("loggedIn") === "true");
  },[]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedIn");
    setIsLoggedIn(false);
    window.location.href = "/";
  };
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary border-bottom"
      style={{ backgroundColor: "#FFFF" }}
    >
      <div class="container p-2">
        <Link class="navbar-brand" to="/">
          <img src="media/logo.svg" alt="logo" className="img-fluid" style={{ maxWidth: "140px",width:"100%" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {!isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link active text-muted"
                      aria-current="page"
                      to="/signup"
                    >
                      SignUp
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active text-muted"
                      aria-current="page"
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      class="nav-link active text-muted"
                      aria-current="page"
                      to="/"
                      onClick={handleLogout}
                    >
                      Logout
                    </Link>
                  </li>
                </>
              )}
              <li className="nav-item">
                <Link class="nav-link active text-muted" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link class="nav-link active text-muted" to="/product">
                  Products
                </Link>
              </li>
              <li className="nav-item text-muted">
                <Link class="nav-link active text-muted" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link class="nav-link active text-muted" to="/support">
                  Support
                </Link>
              </li>
            </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
