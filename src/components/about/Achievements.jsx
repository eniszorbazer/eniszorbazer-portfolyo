import React from "react";

const achievementsContent = [
  { title: "10", subTitle1: "YIL tecrübe", subTitle2: "" },
  { title: "100", subTitle1: "tamamlanan", subTitle2: "projeler" },
  { title: "54", subTitle1: "mutlu", subTitle2: "MÜŞTERİ" },
  { title: "15", subTitle1: "kazanılan", subTitle2: "ödül" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
