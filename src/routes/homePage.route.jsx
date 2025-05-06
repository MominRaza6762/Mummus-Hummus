import React, { useState } from "react";
import Footer from "../components/footer/footer";
import { ContactPage } from "../components/contact/contact.jsx";
import { Link } from "react-router-dom";
import { useLang } from "../context/LangContext.jsx";
import Gallery from "../components/gallery/gallery.jsx";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLang();

  return (
    <div className="topContainer">
      <div className="container-fluid p-0">
        <div className="d-xl-block d-none" id="section">
          <div className="row m-0">
            <div className="col-12 p-0">
              <div className="">
                <img
                  src="/top_banner_bg.png"
                  className="w-100 banner_img"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="banner">
            <div className="row">
              <div className="col-3 ml-auto">
                <img src="/logo.png" className="imges" alt="" />
              </div>
              <div className="col-8 pr-lg-0">
                <nav className="navbar navbar-expand-xl navbar-light">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul
                      className="navbar-nav m-auto"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <li className="nav-item ">
                        <a className="nav-link se text-light" href="#section">
                          <span>{language === "en" ? "Home" : "HEM"}</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link se text-light" href="#section1">
                          <span>{language === "en" ? "About" : "OM OSS"}</span>
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link se text-light" href="#section2">
                          <span>{language === "en" ? "Menu" : "MENY"}</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link se text-light" href="#section3">
                          <span>
                            {language === "en" ? "Gallery" : "GALLERI"}
                          </span>
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link se text-light" href="#section4">
                          <span>
                            {language === "en" ? "Contact" : "KONTAKT"}
                          </span>
                        </a>
                      </li>
                      <button className="cateringmenubtn">
                        <Link to="/catering-menu">Catering Menu</Link>
                      </button>

                      <li className="nav-item dropdown ml-lg-3 ml-0">
                        <button
                          className="btn btn-light dropdown"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {language === "en" ? (
                            <>
                              <div>
                                <img src="/ukimg.png" alt="" className="flag" />
                                <span className="d-inline-block px-2">
                                  English
                                </span>
                                <img
                                  className="pr-2"
                                  src="/drop_down.png"
                                  alt=""
                                />
                              </div>
                            </>
                          ) : (
                            <>
                              <div>
                                <img
                                  src="/swedish_flag.png"
                                  alt=""
                                  className="flag"
                                />
                                <span className="d-inline-block px-2">
                                  Svenska
                                </span>
                                <img
                                  className="pr-2"
                                  src="/drop_down.png"
                                  alt=""
                                />
                              </div>
                            </>
                          )}
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <a
                            className="dropdown-item"
                            id="se"
                            href="#se"
                            title=""
                            onClick={() => setLanguage("sv")}
                          >
                            Svenska
                          </a>
                          <a
                            className="dropdown-item"
                            id="en"
                            href="#en"
                            onClick={() => setLanguage("en")}
                          >
                            English
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            <div className="container">
              <div className="row mt-5" id="section-2">
                <div className="col-md-5 mt-lg-5 mt-3">
                  {language == "en" ? (
                    <h1 className="mb-4 momooseHeading">What is hummus?</h1>
                  ) : (
                    <h1 className="mb-4 momooseHeading">
                      <img src="/log-2.png" className="w-75" />
                    </h1>
                  )}
                  <p className="pera">
                    {language === "en"
                      ? "Hummus is a savory, creamy, and yummy middle eastern dip.Hummus is traditionally made from mashed chickpeas mixed with fresh lemon juice, minced garlic, and a sesame paste called tahini. Hummus has become incredibly popular as a healthy dip or spread. At Mummus, we decided to take hummus to the next level!"
                      : "Hummus är en krämig puré, tillverkad av mosade kikärtor blandad med färsk citronsaft, finhackad vitlök och tahini. Många känner till det som en nyttig dippröra eller ett härligt pålägg, men hos Mummus är hummus så mycket mer!"}
                  </p>
                  <a
                    href="#section2"
                    className="btn btn-primary bnt mt-lg-5 mt-2"
                  >
                    {language === "en" ? "View menu" : "Vår meny"}
                  </a>
                </div>
                <div className="col-md-6 mt-md-0 mt-3">
                  <img
                    src="/top_banner_img.png"
                    className="w-100 tob_banner_img"
                    alt=""
                  />
                </div>

                <div className="col-md-1" id="myScrollspy">
                  <ul className="nav nav-pills flex-column dot_slide">
                    <li className="nav-item">
                      <a className="nav-link dot active" href="#section"></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link dot" href="#section1"></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link dot" href="#section2"></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link dot" href="#section3"></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link dot" href="#section4"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-xl-none d-block" id="section">
          <div className="banner-1">
            <div className="row">
              <div className="col-12">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <a href="" className="navbar-brand">
                    <img src="/logo.png" className="w-100" alt="" />
                  </a>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
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
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent1"
                  >
                    <ul
                      className="navbar-nav mr-auto text-right"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <li className="nav-item ">
                        <a className="nav-link se text-light" href="#section">
                          <span>{language === "en" ? "Home" : "HEM"}</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link se text-light" href="#section1">
                          <span>{language === "en" ? "About" : "OM OSS"}</span>
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link se text-light" href="#section2">
                          <span>{language === "en" ? "Menu" : "MENY"}</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link se text-light" href="#section3">
                          <span>
                            {language === "en" ? "Gallery" : "GALLERI"}
                          </span>
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a className="nav-link se text-light" href="#section4">
                          <span>
                            {language === "en" ? "Contact" : "KONTAKT"}
                          </span>
                        </a>
                      </li>
                      <br />
                      <button className="cateringmenubtn">
                        <Link target="_blank" to="/catering-menu">
                          Catering Menu
                        </Link>
                      </button>
                      {/* <li className="nav-item moblisticons" style={{display : isOpen? "block" : "none"}} >
                        <a href="https://instagram.com/mummus.se?igshid=7toboeu31sp">
                          <img src="/Instagram.png" alt="" />
                        </a>
                        <a href="https://www.facebook.com/Mummus-114979863593938/">
                          <img src="/Facebook.png" alt="" />
                        </a>
                        <a href="mailto:info@mummus.se">
                          <img src="/email.png" alt="" />
                        </a>
                      </li> */}
                      <li className="nav-item dropdown ml-lg-3 ml-0 mt-lg-0 mt-2">
                        <button
                          className="btn btn-light dropdown"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <div className="se" style={{ display: "block" }}>
                            <img
                              src="/swedish_flag.png"
                              alt=""
                              className="flag"
                            />
                            <span className="d-inline-block px-2">Svenska</span>
                            <img className="pr-2" src="/drop_down.png" alt="" />
                          </div>
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <a
                            className="dropdown-item"
                            id="se1"
                            href="#se1"
                            title=""
                            onClick={() => setLanguage("sv")}
                          >
                            Svenska
                          </a>
                          <a
                            className="dropdown-item"
                            id="en1"
                            href="#en1"
                            onClick={() => setLanguage("en")}
                          >
                            English
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            <div className={`container ${isOpen ? "navOpen" : ""}`}>
              <div className="row mt-5">
                <div className="col-lg-5 mt-lg-5 mt-3">
                  {language === "en" ? (
                    <h1
                      className="mb-4 momooseHeading"
                      style={{
                        fontFamily: "belmonte",
                        color: "#096e6c",
                        paddingTop: "50px",
                      }}
                    >
                      What is hummus?
                    </h1>
                  ) : (
                    <h1
                      className="mb-4"
                      style={{ fontFamily: "belmonte", color: "#096e6c" }}
                    >
                      <img src="/log-2.png" className="w-75" />
                    </h1>
                  )}

                  <p className="pera">
                    {language === "en"
                      ? "Hummus is a savory, creamy, and yummy middle eastern dip.Hummus is traditionally made from mashed chickpeas mixed with fresh lemon juice, minced garlic, and a sesame paste called tahini. Hummus has become incredibly popular as a healthy dip or spread. At Mummus, we decided to take hummus to the next level!"
                      : "Hummus är en krämig puré, tillverkad av mosade kikärtor blandad med färsk citronsaft, finhackad vitlök och tahini. Många känner till det som en nyttig dippröra eller ett härligt pålägg, men hos Mummus är hummus så mycket mer!"}
                  </p>
                  <a
                    href="#section2"
                    className="btn btn-primary bnt mt-lg-5 mt-2"
                  >
                    {language === "en" ? "View menu" : "Vår meny"}
                  </a>
                </div>
                <div className="col-lg-6 mt-md-0 mt-3">
                  <img
                    src="/top_banner_img.png"
                    className="w-100 tob_banner_img"
                    alt=""
                  />
                </div>

                <div className="col-md-1">
                  <div className="dot_slide" style={{ textAlign: "center" }}>
                    <span className="dot active" id="dot1"></span>
                    <span className="dot" id="dot2"></span>
                    <span className="dot" id="dot3"></span>
                    <span className="dot" id="dot4"></span>
                    <span className="dot" id="dot5"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`container ${isOpen ? "navOpen" : ""}`}>
        <div className="p-4 shadow bg-white content" id="section1">
          <div className="text-center">
            {language === "en" ? (
              <h1 className="mb-4 welcomeToMomoose">
                Welcome to <span className="momooseHeading">Mummus</span>
              </h1>
            ) : (
              <div className="row">
                <div className="col-md-6 m-auto">
                  <h1 className="mb-4">
                    <img src="/log.png" className="w-100" />
                  </h1>
                </div>
              </div>
            )}

            <p className="font-16 pt-4 pb-4 par-we">
              {language === "en"
                ? "Hummus, claimed by all, owned by none. We believe hummus is something that brings us together. Our love for food, passion for quality, and sense of creativity is what you will find in our kitchen! Besides the original hummus recipe, we offer innovative fusion flavours. Flavours that you might never encountered or imagined for hummus. We also offer a wide range of delicious add ons that make our dishes a hearty meal. Our menu also includes a variety of complementary sides including falafel, eggs, drinks ,desserts, and more !"
                : "Mycket har skrivits och sagts om hemligheten med hummus men vitror inte att någon känner till den. Vi ser det bara som att detär något med hummus som förenar oss. Kärlek till mat och passion för kvalitet är det du hittar hos oss! Förutom det ursprungliga Hummus-receptet erbjuder vi andra smakkombinationer som du kanske aldrig föreställt dig. Vi serverar ett brett utbud av generös och välsmakande topping som gör våra rätter till en fullständig måltid, kolla vår meny! Du hittar även kompletterande tillbehör såsom falafel, ägg, sallad, drycker, desserter och mer!"}
            </p>
          </div>
        </div>

        <div className="row m-0">
          <div className="col-lg-6 col-md-8 m-auto">
            <img src="/chickpeas_img.png" alt="" className="w-100 mt-4" />
          </div>
        </div>
        <div className="text-center" id="section2">
          <h1 className="mb-4 momooseHeading">
            {language === "en" ? (
              <>
                <span className="welcomeToMomoose">Our</span> Menu
              </>
            ) : (
              <>
                <span className="welcomeToMomoose">Vår</span> Meny
              </>
            )}
          </h1>
        </div>
        <div className="mt-5 mb-5 text-center">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner_1_se hh-100 se pt-5">
                <h1 className="fant-weight-bold hummus mt-1 ourMenuHeading">
                  Hummus
                </h1>
                <div className="row tabl d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18 homeMenus">
                      <span>Beduin:</span> tahini hummus
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">75:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18 homeMenus">
                      <span>Bohemian: </span>
                      {language === "en"
                        ? "Beetroot hummus"
                        : " rödbets hummus"}
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">85:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18 homeMenus">
                      <span>Daredevil: </span>
                      {language === "en" ? "Spicy Hummus" : " het chilihummus"}
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">80:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18 homeMenus">
                      <span>Genovese:</span>{" "}
                      {language === "en" ? "Pesto Hummus" : "pestohummus"}
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">90:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left pr-lg-0">
                    <h6 className="font-weight-bold font-18 homeMenus">
                      <span>Greek:</span>{" "}
                      {language === "en"
                        ? "Garlic & Yogurt Hummus"
                        : "yoghurt- och vitlökshummus"}
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">85:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18 homeMenus">
                      <span>Hippie:</span>{" "}
                      {language === "en"
                        ? "Parsley & chickpeas hummus"
                        : "persilje- och kikärtshummus"}
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">95:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col text-left">
                    <h6 className="font-weight-bold font-18">
                      {language === "en" ? "Bread is included." : "Bröd ingår."}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-xll-0 ">
              {/* <img src="/add_ons_bg.png" className="w-100 en" alt="" />
                    <img src="/add_one_se_bg.PNG" className="w-100 se" alt="" /> */}

              <div className="banner_2_se hh-100 se pt-5">
                <div className="text-center">
                  <h1 className="fant-weight-bold hummus ourMenuHeading">
                    {language === "en" ? "Add Ons" : "Tillägg"}
                  </h1>
                </div>
                <div className="row tabl d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">
                      {language === "en"
                        ? "Sucuk & paprika"
                        : "Sucukkorv & paprika"}
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">75:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">
                      {language === "en"
                        ? "Chopped entrecote"
                        : "Entrecôte i bitar"}
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">95:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">
                      {language === "en"
                        ? "Chicken & sundried tomatoes"
                        : "Kyckling och soltorkade tomater"}
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">80:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">
                      {language === "en"
                        ? "Halloumi & cucumber"
                        : "Halloumi och gurka"}
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">75:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width  text-left">
                    <h6 className="font-weight-bold font-18">
                      {language === "en"
                        ? "Pine nuts & almonds"
                        : "Rostade pinjenötter och mandlar"}
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">60:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">
                      {language === "en"
                        ? "Mushrooms & thyme"
                        : "Champinjoner och timjan"}
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">65:-</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-md-2 col-6 mt-lg-0 mt-1">
              <img src="/menu-img-1.png" className="w-100" alt="" />
            </div>
            <div className="col-md-2 d-md-block d-none"></div>
            <div className="col-md-2 col-6 mt-lg-0 mt-1">
              <img src="/menu-img-2.png" className="w-100" alt="" />
            </div>
            <div className="col-md-2 col-6 mt-lg-0 mt-1">
              <img src="/menu-img-3.png" className="w-100" alt="" />
            </div>
            <div className="col-md-2 d-md-block d-none"></div>
            <div className="col-md-2 col-6 mt-lg-0 mt-1">
              <img src="/menu-img-4.png" className="w-100" alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="banner_2_se hh-100 se pt-5">
                <div className="text-center">
                  <h1 className="fant-weight-bold hummus ourMenuHeading">
                    {language === "en" ? "More" : "Mer"}
                  </h1>
                </div>
                <div className="row tabl d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">
                      {language === "en" ? "Falafel 3ps" : "Falafel 3 st"}
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">35:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">
                      {language === "en" ? "Labneh 3ps" : "Labneh ost 3 st"}
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">35:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">
                      {language === "en" ? "Olives" : "Oliver"}
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">30:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left pr-lg-0">
                    <h6 className="font-weight-bold font-18">
                      {language === "en"
                        ? "Makdous pickled aubergines"
                        : "Makdous Inlagd aubergine"}
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">40:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">
                      {language === "en" ? "Mini salad" : "Mini sallad"}
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">35:-</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-xll-0">
              <div className="banner_2_se hh-100 se pt-5">
                <div className="text-center">
                  <h1 className="fant-weight-bold hummus ourMenuHeading">
                    {language === "en" ? "After" : "Något sött"}
                  </h1>
                </div>
                <div className="row tabl d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">Halva</h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">40:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">Baklava</h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">50:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">
                      {language === "en"
                        ? "Coffee, espresso"
                        : "Kaffe, espresso"}
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">40:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left pr-lg-0">
                    <h6 className="font-weight-bold font-18">
                      {language === "en"
                        ? "Tea (cardamom, saffron, mint )"
                        : "Te (kardemumma, saffran, mint)"}
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">35:-</h6>
                  </div>
                </div>
                <div className="row pt-2 d-flex justify-content-between">
                  <div className="col fit-width text-left">
                    <h6 className="font-weight-bold font-18">
                      {language === "en"
                        ? "Sodas, Ayran, juices & sparkling wate"
                        : "Läsk, Ayran, juicer och kolsyrat vatten"}
                    </h6>
                  </div>
                  <div className="col-2">
                    <h6 className="count">30:-</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grly mb-5 row m-0" id="section3">
          <div className="text-center mb-3 col-12">
            <h1 className="mb-4  homeHeadings">
              {language === "en" ? (
                <>
                  <span>Our </span> Gallery
                </>
              ) : (
                <>
                  <span>Vårt </span> Galleri
                </>
              )}
            </h1>
          </div>
          <Gallery />
        </div>

        <div id="section4">
          <ContactPage />
        </div>
      </div>
      <Footer />

      <script type="text/javascript">
        {`
          $(document).on("click", '[data-toggle="lightbox"]', function(event) {
            event.preventDefault();
            $(this).ekkoLightbox();
          });
        `}
      </script>
    </div>
  );
};

export default HomePage;
