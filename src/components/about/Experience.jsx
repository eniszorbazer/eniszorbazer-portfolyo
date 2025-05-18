import React from "react";

const experienceContent = [
  {
    year: "2024 - DEVAM EDİYOR",
    position: "YAZILIM GELİŞTİRİCİ - KISMİ ZAMANLI",
    compnayName: "BALIKESİR ÜNİVERSİTESİ BİLGİ İŞLEM DAİRE BAŞKANLIĞI",
    details: `Web uygulamaları, otomasyon yazılımları ve API geliştirme projelerinde çalışıyorum.`,
  },
  {
    year: "2023 - 2024",
    position: "BACK-END YAZILIM GELİŞTİRİCİ",
    compnayName: "TÜRKİYE YAZILIM ARAŞTIRMA EĞİTİM AŞ",
    details: `API geliştirme, web uygulamaları, yapay zeka, otomasyon yazılımları, CRM yazılımları ve mobil uygulama API'leri üzerinde çalıştım.`,
  },
  {
    year: "2021 - DEVAM EDİYOR",
    position: "FREELANCE YAZILIM GELİŞTİRİCİ",
    compnayName: "Freelance",
    details: `Masaüstü yazılım geliştirme, web uygulamaları, masaüstü otomasyon yazılımları, detaylı web sitesi geliştirme ve mobil uygulama geliştirme projeleri üzerine hizmet vermekteyim.`,
  },
  {
    year: "2020 - 2021",
    position: "GRAFİK TASARIMCI",
    compnayName: "İKİZ OFSET",
    details: `Web tasarımı, baskı ve matbaa işleri ile sosyal medya tasarımları üzerine çalıştım.`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <br />
            <span className="open-sans-font" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
