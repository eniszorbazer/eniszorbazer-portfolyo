import React from "react";

const personalInfoContent = [
  { meta: "Ad", metaInfo: "Enis" },
  { meta: "Soyad", metaInfo: "Zorbazer" },
  { meta: "Yaş", metaInfo: "21" },
  { meta: "Milliyet", metaInfo: "Türk 🇹🇷" },
  { meta: "Freelance", metaInfo: "Mevcut" },
  { meta: "Adres", metaInfo: "Balıkesir,Türkiye" },
  { meta: "Email", metaInfo: "eniszorbazer@gmail.com" },
  { meta: "", metaInfo: "" },
  { meta: "Diller", metaInfo: "Türkçe, İngilizce" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta + (val.meta ? ':' : '')} </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block" >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
