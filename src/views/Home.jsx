import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Index from "../components/about/index";
import Address from "../components/Address";
import Contact from "../components/Contact";
import Hero from "../components/hero/Hero";
import Portfolio from "../components/portfolio/Portfolio";
import Social from "../components/Social";
import SwitchDark from "../components/switch/SwitchDark";

const menuItem = [
  { icon: "fa-home", menuName: "ANA SAYFA" },
  { icon: "fa-user", menuName: "BEN KİMİM" },
  { icon: "fa-briefcase", menuName: "PORTFOLYO" },
  { icon: "fa-envelope-open", menuName: "İLETİŞİM" },
];

const Home = () => {
  return (
    <div className="yellow">
      <SwitchDark />
      {/* End Switcher */}
      <Tabs>
        <div className="header">
          <TabList className=" icon-menu  revealator-slideup revealator-once revealator-delay1">
            {menuItem.map((item, i) => (
              <Tab className="icon-box" key={i} style={{ whiteSpace: 'nowrap' }}>
                <i className={`fa ${item.icon}`}></i>
                <h2>{item.menuName}</h2>
              </Tab>
            ))}
          </TabList>
        </div>
        {/* End Menu Content */}

        <div className="tab-panel_list">
          {/* Hero Content Starts */}
          <TabPanel className="home ">
            <div
              className="container-fluid main-container container-home p-0 "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="color-block d-none d-lg-block"></div>
              <Hero />
            </div>
          </TabPanel>
          {/* Hero Content Ends */}

          {/* About Content Starts */}
          <TabPanel className="about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  HAKKIMDA
                </h1>
                <span className="title-bg">ÖZGEÇMİŞ</span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </TabPanel>
          {/* About Content Ends */}

          {/* Portfolio Content Starts */}
          <TabPanel className="portfolio professional">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                portfolyom
              </h1>
              <span className="title-bg">ÇALIŞMALAR</span>
            </div>
            {/* End title */}
            <Portfolio />
          </TabPanel>
          {/* Portfolio Content Ends */}

          {/* Contact Content Starts */}
          <TabPanel className="contact">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                İLETİŞİME <span>GEÇİN</span>
              </h1>
              <span className="title-bg">İLETİŞİM</span>
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="row">
                {/*  Left Side Starts */}
                <div className="col-12 col-lg-4">
                  <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                    Burdayım
                  </h3>
                  <p className="open-sans-font mb-4">
                    Benimle iletişime geçmekten çekinmeyin. Yeni projeleri, yaratıcı fikirleri veya vizyonunuzun bir parçası olma fırsatlarını tartışmaya her zaman açığım.
                  </p>
                  <Address />
                  {/* End Address */}

                  <Social />
                  {/* End Social */}
                </div>
                {/* Left Side Ends */}

                {/*  Contact Form Starts  */}
                <div className="col-12 col-lg-8">
                  <Contact />
                </div>
                {/*  Contact Form Ends */}
              </div>
            </div>
            {/* End .container */}
          </TabPanel>
          {/* Contact Content Ends */}

        </div>
      </Tabs>
    </div>
  );
};

export default Home;
