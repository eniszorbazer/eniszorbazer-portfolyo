import Image4 from "../../assets/img/portfolio/bilnetspor.png";
import Image13 from "../../assets/img/portfolio/dernek1.png";
import Image14 from "../../assets/img/portfolio/dernek2.png";
import Image7 from "../../assets/img/portfolio/imei.png";
import Image8 from "../../assets/img/portfolio/istanbul.png";
import Image9 from "../../assets/img/portfolio/istanbul2.png";
import Image10 from "../../assets/img/portfolio/kasa.png";
import Image15 from "../../assets/img/portfolio/market1.png";
import Image16 from "../../assets/img/portfolio/market2.png";
import Image1 from "../../assets/img/portfolio/netskurs.png";
import Image5 from "../../assets/img/portfolio/okuloutlet.png";
import video2 from "../../assets/img/portfolio/okulsatis.mp4";
import Image11 from "../../assets/img/portfolio/star1.png";
import Image12 from "../../assets/img/portfolio/star2.png";
import Image3 from "../../assets/img/portfolio/stok.png";
import Image6 from "../../assets/img/portfolio/teknobant.png";
import video1 from "../../assets/img/portfolio/tubitak.mp4";
import Image2 from "../../assets/img/portfolio/universite.png";
const PortfolioData = [
  {
    id: 1,
    type: "Kurs Kayıt SİSTEMİ",
    images: [Image1],
    tag: ["frontend", "backend"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Kurs Kayıt Sistemi",
        client: "Özel Okullar",
        language: "Vue.js, GoLang, Docker",
        preview: "www.netskurs.com",
        link: "https://www.netskurs.com/",
      },
    ],
  },
  {
    id: 2,
    type: "ÜNİVERSİTELERE YÖNELİK SİSTEMLER",
    images: [Image2],
    tag: ["frontend", "backend"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Üniversitelere Yönelik Sistemler",
        client: "Üniversiteler",
        language: "Python, GoLang, Vue.js, PostgreSQL, Docker",
        preview: "",
        link: "",
      },
    ],
  },
  {
    id: 3,
    type: "ÜRÜN STOK TAKİP SİSTEMİ",
    images: [Image3],
    tag: ["frontend", "backend"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Ürün Stok Takip Sistemi",
        client: "Bionluk Müşterisi",
        language: "Vue.js, GoLang, Python, PostgreSQL, Docker",
        preview: "",
        link: "",
      },
    ],
  },
  {
    id: 4,
    type: "SPOR AKADEMİSİ YÖNETİM SİSTEMİ",
    images: [Image4],
    tag: ["frontend", "backend"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Spor Akademisi Yönetim Sistemi",
        client: "Özel Okullar",
        language: "Django Framework, Python, PostgreSQL, Docker",
        preview: "",
        link: "",
      },
    ],
  },
  {
    id: 5,
    type: "OKUL KIYAFET SATIŞ SİSTEMİ",
    images: [Image5],
    video: video2,
    tag: ["frontend", "backend"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Okul Kıyafet Satış Sistemi",
        client: "Özel Okullar",
        language: "PyQt, Python, PostgreSQL, Docker",
        preview: "",
        link: "",
      },
    ],
  },
  {
    id: 6,
    type: "TEKNOBANT - AKILLI YARA BANDI SİSTEMİ (TÜBİTAK PROJESİ)",
    images: [Image6],
    video: video1,
    tag: ["frontend", "backend"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Teknobant - Akıllı Yara Bandı Sistemi",
        client: "TÜBİTAK",
        language: "Python, PyQT, Flutter, Firebase, Docker",
        preview: "",
        link: "",
      },
    ],
  },
  {
    id: 7,
    type: "IMEI SORGULAMA SİSTEMİ",
    images: [Image7],
    tag: ["frontend", "backend"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "IMEI Sorgulama Sistemi",
        client: "Bionluk Müşterisi",
        language: "Python, Django, PostgreSQL, Docker",
        preview: "",
        link: "",
      },
    ],
  },
  {
    id: 8,
    type: "İSTANBUL TUR REHBERİ",
    images: [Image8, Image9],
    tag: ["frontend", "backend"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "İstanbul Tur Rehberi",
        client: "Bionluk Müşterisi",
        language: "Python, Django, SQLite, Docker",
        preview: "",
        link: "",
      },
    ],
  },
  {
    id: 9,
    type: "KASA TAKİP SİSTEMİ",
    images: [Image10],
    tag: ["frontend", "backend"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Kasa Takip Sistemi",
        client: "Krafmat - İkiz Ofset",
        language: "Vue.js, GoLang, PostgreSQL, Docker",
        preview: "",
        link: "",
      },
    ],
  },
  {
    id: 10,
    type: "YILDIZ HARİTASI OLUŞTURUCU",
    images: [Image11, Image12],
    tag: ["frontend", "backend"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Yıldız Haritası Oluşturucu",
        client: "Bionluk Müşterisi",
        language: "HTML, Javascript, GoLang, Docker",
        preview: "",
        link: "",
      },
    ],
  },
  {
    id: 11,
    type: "DERNEK SİTESİ YÖNETİM PANELİ",
    images: [Image13, Image14],
    tag: ["frontend", "backend"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Dernek Sitesi Yönetim Paneli",
        client: "EUROLINKS Derneği",
        language: "Vue.js, Firebase",
        preview: "",
        link: "",
      },
    ],
  },
  {
    id: 12,
    type: "MARKET FİYAT KARŞILAŞTIRMA UYGULAMASI",
    images: [Image15, Image16],
    tag: ["frontend", "backend", "mobile"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Market Fiyat Karşılaştırma Uygulaması",
        client: "Bionluk Müşterisi",
        language: "React Native, GoLang, Firebase",
        preview: "",
        link: "",
      },
    ],
  },
]
export default PortfolioData;
