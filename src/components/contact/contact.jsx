import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { useLang } from "../../context/LangContext";

export const ContactPage = () => {
  const { language } = useLang();
  return (
    <div>
      <div className="contact-page">
        <div className="col-md-6 mt-5 ">
          <h1 className="mb-4 homeHeadings">
            {language === "en" ? (
              <>
                <span>Contact</span> Us
              </>
            ) : (
              <>
                <span>Kontakta </span> Oss
              </>
            )}
          </h1>
          <div className="contactListCont">
            <p className="locationCont">
              <img src="/location.png" alt="" className="locton pr-1 mt-1" />{" "}
              <span>
                Klara Norra Kyrkogata 32
                <br />
                11122 Stockholm{" "}
              </span>
            </p>
            <p className="callCon">
              <img src="/phone.png" alt="" />
              <span>+46 701 75 65 65</span>
            </p>
            <p className="mailCont">
              <MdEmail color="#00706E" />
              info@mummus.se
            </p>
            {language === "en" ? (
              <p className="VaraContainer">
                <img src="/time.png" alt="" /> Please check our opening hours
                <a href="https://g.co/kgs/T1pnvYw">here</a>
              </p>
            ) : (
              <p className="VaraContainer">
                <img src="/time.png" alt="" /> Våra öppettider finns{" "}
                <a href="https://g.co/kgs/T1pnvYw">här</a>
              </p>
            )}
            <h1 className="se homeHeadings" style={{ fontSize: "25px" }}>
              {language === "en" ? "Follow Us" : "Följ Oss"}
            </h1>

            <div className="socialmedia pt-3">
              <a href="https://instagram.com/mummus.se?igshid=7toboeu31sp">
                <img
                  src="/Instagram-green.png"
                  alt=""
                  className="mr-3 non-hover"
                />
                <img src="/Instagram.png" alt="" className="mr-3 hover" />
              </a>
              <a href="https://www.facebook.com/Mummus-114979863593938/">
                <img
                  src="/Facebook-green.png"
                  alt=""
                  className="mr-3 non-hover"
                />
                <img src="/Facebook.png" alt="" className="mr-3 hover" />
              </a>
              <a href="mailto:info@mummus.se">
                <img src="/email-green.png" alt="" className="mr-3 non-hover" />
                <img src="/email.png" alt="" className="mr-3 hover" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 pt-3 mt-lg-5 map-contaier">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.9034643273696!2d18.05573091615477!3d59.334565517644776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d6725633ffd%3A0xf7cc2bfa147b6a9e!2sKlara%20Norra%20kyrkogata%2032%2C%20111%2022%20Stockholm%2C%20Sweden!5e0!3m2!1sen!2s!4v1594796555953!5m2!1sen!2s"
            className="w-100 map"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
