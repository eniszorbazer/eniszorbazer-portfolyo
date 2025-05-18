import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CloseImg from "../../../assets/img/cancel.svg";
import PortfolioData from "../portfolioData";

const Modal = ({ modalId, setGetModal }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <div className="modal_portfolio">
      <div
        className="modal__outside"
        onClick={() => setGetModal(false)}
      ></div>
      <div className="modal__content">
        {PortfolioData.filter((item) => item.id === modalId).map((item) => {
          //
          return (
            <div key={item.id} data-aos="fade">
              <h2 className="heading mb-2">{item.type}</h2>
              <div className="modal__details">
                {item.modalDetails.map((details, i) => {
                  return (
                    <div key={i} className="row open-sans-font">
                      <div className="col-12 col-sm-6 mb-2">
                        <i className="fa fa-file-text-o pr-2"></i>
                        Proje :{" "}
                        <span className="ft-wt-600 uppercase">
                          {details.project}
                        </span>
                      </div>
                      <div className="col-12 col-sm-6 mb-2">
                        <i className="fa fa-user-o pr-2"></i>
                        Müşteri :{" "}
                        <span className="ft-wt-600 uppercase">
                          {details.client}
                        </span>
                      </div>
                      <div className="col-12 col-sm-6 mb-2">
                        <i className="fa fa-code pr-2"></i>
                        Dil :{" "}
                        <span className="ft-wt-600 uppercase">
                          {details.language}
                        </span>
                      </div>
                      {details.preview && (
                        <div className="col-12 col-sm-6 mb-2">
                          <i className="fa fa-external-link pr-2"></i>
                          Önizleme :{" "}
                          <a
                            className="preview-link"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            href={details.link}
                          >
                            {details.preview}
                          </a>
                        </div>)
                      }

                    </div>
                  );
                })}
              </div>
              <figure className="modal__img">

                {item.video ? (
                  <video
                    id="video"
                    className="responsive-video"
                    controls
                    poster={item.image}
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>) :
                  (<Slider {...settings}>
                    {item.images.map((img, i) => {
                      return (
                        <div key={i}>
                          <img src={img} alt="portfolio project demo" />
                        </div>
                      );
                    })}
                  </Slider>)
                }

              </figure>

              <button
                className="close-modal"
                onClick={() => setGetModal(false)}
              >
                <img src={CloseImg} alt="portfolio project demo" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Modal;
