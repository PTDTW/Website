import React from "react";
import SectionTitle from "./SectionTitle";

const experienceCards = [
  {
    title: "社會責任教育",
    subtitle: "新北市技職vsr計畫",
    desc: "熱衷於教育、程式開發與社會責任，希望透過技術創造更多價值。",
    image: "/Experience/vsr.jpg",
    position: "center",
  },
  {
    title: "學檔教育",
    subtitle: "第六屆金質歷程獎",
    desc: "透過第六屆金質歷程獎的機會，在台上重新介紹個人學習歷程得獎作品，並講述歷程以及心得感想。",
    image: "/Experience/gapc.jpg",
    position: "left",
  },
  {
    title: "學生自治",
    subtitle: "三重商工班聯會",
    desc: "曾經參加本校三重商工班級聯合會，積極協助校內事務以及學權參與。",
    image: "/Experience/scvs.jpg",
    position: "right",
  },
];

const ExperienceSection = () => {
  return (
    <section className="home-card home-card--experience">
      <SectionTitle title="興趣參與經驗" />
      <div className="home-experience-list">
        {experienceCards.map((card, index) => (
          <article key={index} className="home-experience-card">
            <img src={card.image} alt={card.title} className="home-experience-image" style={{ objectPosition: card.position }} />
            <div className="home-experience-overlay" />
            <div className="home-experience-content">
              <h3>{card.title}</h3>
              <p className="home-experience-subtitle">{card.subtitle}</p>
              <p className="home-experience-desc">{card.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
