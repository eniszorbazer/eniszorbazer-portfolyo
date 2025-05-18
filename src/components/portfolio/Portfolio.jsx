import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Modal from "./modal/Modal";
import PortfolioData from "./portfolioData";

const Portfolio = () => {
  const [getModal, setGetModal] = useState(false);
  const [modalId, setModalId] = useState(1);

  const handleModal = (id) => {
    setGetModal(true);
    setModalId(id);
  };

  return (
    <>
      <div className="portfolio-main">
        <Tabs>
          <TabList className="portfolio-tab-list" data-aos="fade-up">
            <Tab>HEPSİ</Tab>
            <Tab>FRONTEND</Tab>
            <Tab>BACKEND</Tab>
          </TabList>

          <div className="container">
            <TabPanel>
              <div className="tab-container">
                {PortfolioData.map((item) => {
                  const { id, type, images, delayAnimation } = item;

                  return (
                    <div
                      key={id}
                      data-aos="fade-right"
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className="tab-content"
                        onClick={() => handleModal(id)}
                      >
                        {images.length > 0 && (
                          <img src={images[0]} alt="portfolio project demo" style={{ objectFit: 'cover' }} />
                        )}
                        <h3>
                          <span className="conent-title">{type}</span>
                        </h3>
                      </div>
                    </div>
                  );
                })}
                <div data-aos="fade-right"
                  data-aos-delay={500}>
                  <div className="tab-content" >
                    <h3 style={{ visibility: 'visible', opacity: 1 }}>
                      <span className="conent-title" style={{ transform: 'translateY(0)' }}>DEVAMI EKLENECEK...</span>
                    </h3>
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="tab-container">
                {PortfolioData.filter((item) => item.tag.includes("frontend")).map(
                  (item) => {
                    const { id, type, images, delayAnimation } = item;
                    return (
                      <div
                        key={id}
                        data-aos="fade-right"
                        data-aos-delay={delayAnimation}
                      >
                        <div
                          className="tab-content"
                          onClick={() => handleModal(id)}
                        >
                          <img src={images[0]} alt="portfolio project demo" style={{ objectFit: 'cover' }} />
                          <h3>
                            <span className="conent-title">{type}</span>
                          </h3>
                        </div>
                        {/* {getModal && <Modal props={modalId} />} */}
                      </div>
                    );
                  }
                )}
                <div data-aos="fade-right"
                  data-aos-delay={500}>
                  <div className="tab-content" >
                    <h3 style={{ visibility: 'visible', opacity: 1 }}>
                      <span className="conent-title" style={{ transform: 'translateY(0)' }}>DEVAMI EKLENECEK...</span>
                    </h3>
                  </div>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="tab-container">
                {PortfolioData.filter((item) => item.tag.includes("backend")).map(
                  (item) => {
                    const { id, type, images, delayAnimation } = item;
                    return (
                      <div
                        key={id}
                        data-aos="fade-right"
                        data-aos-delay={delayAnimation}
                      >
                        <div
                          className="tab-content"
                          onClick={() => handleModal(id)}
                        >
                          <img src={images[0]} alt="portfolio project demo" style={{ objectFit: 'cover' }} />
                          <h3>
                            <span className="conent-title">{type}</span>
                          </h3>
                        </div>
                        {/* {getModal && <Modal props={modalId} />} */}
                      </div>
                    );
                  }
                )}
                <div
                  data-aos="fade-right"
                  data-aos-delay={500}>
                  <div className="tab-content" >
                    <h3 style={{ visibility: 'visible', opacity: 1 }}>
                      <span className="conent-title" style={{ transform: 'translateY(0)' }}>DEVAMI EKLENECEK...</span>
                    </h3>
                  </div>
                </div>
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
      {getModal && <Modal modalId={modalId} setGetModal={setGetModal} />}{" "}
    </>
  );
};

export default Portfolio;
