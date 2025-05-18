import React, { useState } from "react";
import Modal from "react-modal";
import cancelImg from "../../assets/img/cancel.svg";
import heroImg from "../../assets/img/hero/dark.jpg";
import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";
import Index from "../../components/about/index";

const heroContent = {
  heroImage: heroImg,
  heroMobileImage: heroImgMobile,
  heroTitleName: "enis zorbazer",
  heroDesignation: "full stack developer",
  heroDescriptions: `Merhaba! Ben Enis Zorbazer, Balıkesir Üniversitesi Bilgisayar Mühendisliği öğrencisi ve 10 yıllık yazılım geliştirme deneyimine sahip bir full-stack developer'ım. API geliştirme, yapay zeka, otomasyon yazılımları ve web uygulamaları üzerine çalışıyorum. Yaratıcı çözümler üretmeyi ve teknolojiyi hayatı kolaylaştırmak için kullanmayı seviyorum.`,
  heroBtn: "Daha Fazla Bilgi",
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block object-fit-cover"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + heroContent.heroImage
              })`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <img
              src={heroContent.heroMobileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none object-fit-cover"
              alt="hero man"
            />
            <h1 className="text-uppercase poppins-font">
              {heroContent.heroTitleName}.
              <span style={{ fontSize: '2.4rem' }}>{heroContent.heroDesignation}</span>
            </h1>
            <p className="open-sans-font" style={{ fontSize: '1.1rem' }}>{heroContent.heroDescriptions}</p>
            <button className="button" onClick={toggleModalOne}>
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src={cancelImg} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  HAKKIMDA
                </h1>
                <span className="title-bg" > ÖZGEÇMİŞ</span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal >
      {/* End  Modal for About More */}
    </>
  );
};

export default Hero;
