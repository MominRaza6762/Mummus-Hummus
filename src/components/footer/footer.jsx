import React from "react";
import "./footer.css"
import { useLang } from "../../context/LangContext";

const Footer = () => {
    const { language } = useLang();
  return (
    <footer className="footer" id="section5">
      <div className="row m-0 footer-section pb-4">
        <div className="col-lg-3 col-md-4 self-flex text-md-center">
          <img src="/footerlogo.png" className="w-50" alt="" />
        </div>
        <div className="col-lg-6 col-md-6 pl-4  text-white text-uppercase self-flex ">
          {
            language === "en" ? (
              <div className="footer-headings">
            <a href="#section" className="text-reset">
              <span className="">home</span>
            </a>
            <a href="#section1" className="text-reset">
              <span className="">About</span>
            </a>
            <a href="#section2" className="text-reset">
              <span className="">Menu</span>
            </a>{" "}
            <br className="d-lg-none d-md-block d-none" />
            <a href="#section3" className="text-reset">
              <span className="">Gallery</span>
            </a>
            <a href="#section4" className="text-reset">
              <span className="">Contact</span>
            </a>{" "}
            <br />
            <small className="pl-lg-3 pt-2 title-1">
              Mummus 2020. All Rights Reserved
            </small>
          </div>
            ) : (
              <div className="footer-headings">
              <a href="#section" className="text-reset">
                <span className="">HEM</span>
              </a>
              <a href="#section1" className="text-reset">
                <span className="">OM OSS</span>
              </a>
              <a href="#section2" className="text-reset">
                <span className="">MENY</span>
              </a>{" "}
              <br className="d-lg-none d-md-block d-none" />
              <a href="#section3" className="text-reset">
                <span className="">GALLERI</span>
              </a>
              <a href="#section4" className="text-reset">
                <span className="">KONTAKT</span>
              </a>{" "}
              <br />
              <div className="pl-lg-3 mt-2 title-1">
                Mummus 2020. Alla rättigheter förbehålls
              </div>
            </div>
            ) 
          }

        </div>
      </div>
    </footer>
  );
};

export default Footer;
