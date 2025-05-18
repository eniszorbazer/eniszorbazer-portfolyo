import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "../context/ThemeContext";
const Contact = () => {
  const form = useRef();
  const recaptchaRef = useRef();
  const { theme } = useTheme();
  const sendEmail = async (e) => {
    e.preventDefault();
    const captchaValue = recaptchaRef.current.getValue()

    if (!captchaValue) {
      toast.error("Lütfen reCAPTCHA'yı doğrulayın!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    const result = await fetch("https://recaptcha-api-psi.vercel.app/api/verify-recaptcha", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ token: captchaValue })
    });

    const data = await result.json();
    console.log(data);
    if (data.success) {
      emailjs
        .sendForm(
          "service_f6o7duu",
          "template_k7mx6ip",
          form.current,
          "xO9m67aFZnMf6xoaW"
        )
        .then(
          (result) => {
            toast.success("Mesaj Başarıyla Gönderildi!", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            document.getElementById("myForm").reset();
          },
          (error) => {
            toast.error("Ops, Mesaj Gönderilemedi!", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
        );
      recaptchaRef.current.reset();
    } else {
      toast.error("reCAPTCHA doğrulaması başarısız.");
    }

  };

  return (
    <>
      <form id="myForm" className="contactform" ref={form} onSubmit={sendEmail}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <input type="text" name="name" placeholder="ADINIZ" required />
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                type="email"
                name="user_email"
                placeholder="EMAIL ADRESİNİZ"
                required
              />
            </div>
          </div>
          {/* End .col */}

          <div className="col-12 col-md-12">
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="KONU"
                required
              />
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="form-group">
              <textarea
                name="message"
                placeholder="MESAJINIZ..."
                required
              ></textarea>
            </div>
          </div>
          {/* End .col */}
          <div className="col-12">
            <ReCAPTCHA
              key={theme}
              theme={theme === "dark" ? "dark" : "light"}
              ref={recaptchaRef}
              sitekey={process.env.REACT_APP_SITE_KEY}
            />
          </div>
          <div className="col-12 mt-4">
            <button type="submit" className="button">
              <span className="button-text">Gönder</span>
              <span className="button-icon fa fa-send"></span>
            </button>
          </div>
          {/* End .col */}
        </div>
      </form>
    </>
  );
};

export default Contact;
