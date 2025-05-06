import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ children }) => {
  const navigate = useNavigate();

  // Function to handle navigation and scrolling
  const handleNavigation = (id) => {
    navigate("/", { state: { scrollTo: id } });
  };


 
  return (
    <div className="d-xl-block" id="section" style={{zIndex : 99999999999}}>
      <div className="row m-0">
        <div className="col-12 p-0">
          <div>
            <img src="/top_banner_bg.png" className="w-100 banner_img" alt="" />
          </div>
        </div>
      </div>
      <div className="banner">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-xl navbar-light">
              <Link to="/" className="navbar-brand">
                <img src="/logo.png" className="logo-img" alt="Logo" />
              </Link>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent1"
                aria-controls="navbarSupportedContent1"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                <ul className="navbar-nav ml-auto">
                  {["Home", "About", "Menu", "Gallery", "Contact"].map((section, index) => (
                    <li className="nav-item" key={index}>
                      <Link
                        className="nav-link se text-light"
                        to="/"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigation(`section${index}`);
                        }}
                      >
                        <span>{section}</span>
                      </Link>
                    </li>
                  ))}
                  <li className="nav-item">
                    <button className="cateringmenubtn">
                      <Link to="/catering">Catering Menu</Link>
                    </button>
                  </li>
                  <li className="nav-item moblisticons">
                    <Link to="https://instagram.com/mummus.se?igshid=7toboeu31sp">
                      <i className="fa fa-instagram mr-lg-1 mr-0"></i>
                    </Link>
                    <Link to="https://www.facebook.com/Mummus-114979863593938/">
                      <i className="fa fa-facebook-f mr-lg-1 mr-0"></i>
                    </Link>
                    <Link to="mailto:info@mummus.se">
                      <i className="fa fa-envelope"></i>
                    </Link>
                  </li>
                  <li className="nav-item dropdown ml-lg-3 ml-0 mt-lg-0 mt-2">
                    <button
                      className="btn btn-light dropdown"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <div className="se">
                        <img src="/swedish_flag.png" alt="" className="flag" />
                        <span className="d-inline-block px-2">Svenska</span>
                        <img className="pr-2" src="/drop_down.png" alt="" />
                      </div>
                      <div className="en">
                        <img src="https://ilunch.nu/public/public_site_assets/images/e-flag.png" alt="" className="flag" />
                        <span className="d-inline-block px-2">English</span>
                        <img className="pr-2" src="/drop_down.png" alt="" />
                      </div>
                    </button>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <Link className="dropdown-item" to="#" >
                        Svenska
                      </Link>
                      <Link className="dropdown-item" to="#" >
                        English
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Navbar;