import React from "react";

const educationContent = [
  {
    year: "2024 - DEVAM EDİYOR",
    degree: "BİLGİSAYAR MÜHENDİSLİĞİ",
    institute: "BALIKESİR ÜNİVERSİTESİ",
    details: `Bilgisayar mühendisliği alanında lisans eğitimime devam ediyorum.`,
  },
  {
    year: "2023 - 2024",
    degree: "ELEKTRİK VE ELEKTRONİK MÜHENDİSLİĞİ",
    institute: "BAŞKENT ÜNİVERSİTESİ",
    details: `Tam burslu olarak elektrik ve elektronik mühendisliği bölümünü kazandım sonrasında bilgisayar mühendisliğine geçiş yaptım.`,
  },
  {
    year: "2018 - 2023",
    degree: "FEN LİSESİ DİPLOMASI",
    institute: "BALIKESİR ÖZEL BİLNET FEN LİSESİ",
    details: `Tam burslu olarak 97.9/100 not ortalaması ile mezun oldum.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <br />
            <span className="open-sans-font" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
